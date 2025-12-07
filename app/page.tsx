"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import AudioSection from "@/components/AudioSection";
import { locations } from "@/lib/locations";

const TourMap = dynamic(() => import("@/components/TourMap"), {
  ssr: false,
});

export default function Home() {
  const audioSectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleLocationClick = (locationId: string) => {
    const element = audioSectionsRef.current[locationId];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 via-amber-50/95 to-amber-100/80">
      <Header />
      
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Map Section */}
        <section className="mb-16">
          <div className="mb-6 text-center">
            <h2 className="font-serif text-3xl font-bold text-amber-900 sm:text-4xl">
              Explore the Journey
            </h2>
            <p className="mt-2 font-serif text-lg italic text-amber-800/80">
              Click on any location to hear its story
            </p>
          </div>
          <TourMap locations={locations} onLocationClick={handleLocationClick} />
        </section>

        {/* Audio Sections */}
        <section className="space-y-8">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-amber-900 sm:text-4xl">
              Audio Narratives
            </h2>
            <p className="mt-2 font-serif text-lg italic text-amber-800/80">
              Listen to the tales of each location
            </p>
          </div>
          
          {locations.map((location) => (
            <div
              key={location.id}
              ref={(el) => {
                audioSectionsRef.current[location.id] = el;
              }}
            >
              <AudioSection location={location} />
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t-4 border-amber-900/30 bg-amber-900/10 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-serif text-amber-900/80">
            &copy; {new Date().getFullYear()} NYC Bike Tour. Discover the stories and history of New York City.
          </p>
        </div>
      </footer>
    </div>
  );
}
