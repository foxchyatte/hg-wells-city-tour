"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Location } from "@/lib/locations";

// Fix for default marker icons in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

// Custom icon for adventure theme
const createCustomIcon = () => {
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="
        background: linear-gradient(135deg, #92400e 0%, #78350f 100%);
        width: 32px;
        height: 32px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid #fbbf24;
        box-shadow: 0 4px 8px rgba(0,0,0,0.3);
        position: relative;
      ">
        <div style="
          transform: rotate(45deg);
          color: #fbbf24;
          font-size: 18px;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
        ">📍</div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

interface MapControllerProps {
  center: [number, number];
  zoom: number;
}

function MapController({ center, zoom }: MapControllerProps) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [map, center, zoom]);
  return null;
}

interface TourMapProps {
  locations: Location[];
  onLocationClick: (locationId: string) => void;
}

export default function TourMap({ locations, onLocationClick }: TourMapProps) {
  const mapRef = useRef<L.Map | null>(null);

  // Calculate center point from all locations
  const centerLat = locations.reduce((sum, loc) => sum + loc.coordinates[0], 0) / locations.length;
  const centerLng = locations.reduce((sum, loc) => sum + loc.coordinates[1], 0) / locations.length;
  const center: [number, number] = [centerLat, centerLng];

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg border-4 border-amber-900/30 shadow-2xl sm:h-[600px]">
      <MapContainer
        center={center}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        className="z-0"
        ref={mapRef}
      >
        <MapController center={center} zoom={13} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.coordinates}
            icon={createCustomIcon()}
            eventHandlers={{
              click: () => {
                onLocationClick(location.id);
              },
            }}
          >
            <Popup className="custom-popup">
              <div className="p-2">
                <h3 className="font-serif text-lg font-bold text-amber-900">{location.name}</h3>
                <p className="mt-1 text-sm text-amber-800/80">{location.description}</p>
                <p className="mt-2 text-xs italic text-amber-700/70">Click to view audio</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

