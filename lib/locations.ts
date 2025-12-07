export interface Location {
  id: string;
  name: string;
  description: string;
  coordinates: [number, number]; // [lat, lng]
  audioUrl: string;
  transcript: string;
}

export const locations: Location[] = [
  {
    id: "location-1",
    name: "Central Park",
    description: "The heart of Manhattan's green oasis",
    coordinates: [40.7829, -73.9654], // Central Park coordinates
    audioUrl: "/audio/location-1.mp3",
    transcript: "Welcome to Central Park, New York City's most famous urban park. Spanning 843 acres in the heart of Manhattan, this green oasis was designed by Frederick Law Olmsted and Calvert Vaux in the 1850s. As you cycle through, you'll discover hidden bridges, serene lakes, and the vibrant energy that makes this park a true New York treasure.",
  },
  {
    id: "location-2",
    name: "Brooklyn Bridge",
    description: "An iconic symbol connecting Manhattan and Brooklyn",
    coordinates: [40.7061, -73.9969],
    audioUrl: "/audio/location-2.mp3",
    transcript: "The Brooklyn Bridge stands as a testament to 19th-century engineering brilliance. Completed in 1883, it was the first steel-wire suspension bridge and the longest suspension bridge in the world at the time. As you cross, take in the breathtaking views of the Manhattan skyline and the East River below.",
  },
  {
    id: "location-3",
    name: "The High Line",
    description: "A modern park built on historic elevated railway tracks",
    coordinates: [40.7480, -74.0048],
    audioUrl: "/audio/location-3.mp3",
    transcript: "The High Line is a unique example of urban renewal, transforming abandoned railway tracks into a beautiful elevated park. Stretching 1.45 miles through Manhattan's West Side, this linear park features native plants, public art, and stunning city views. It represents New York's innovative spirit and commitment to green spaces.",
  },
  {
    id: "location-4",
    name: "Times Square",
    description: "The crossroads of the world",
    coordinates: [40.7580, -73.9855],
    audioUrl: "/audio/location-4.mp3",
    transcript: "Times Square, known as the Crossroads of the World, pulses with the energy that defines New York City. Once Longacre Square, it was renamed in 1904 after The New York Times moved its headquarters here. Today, the dazzling billboards, Broadway theaters, and constant flow of people create an unforgettable urban experience.",
  },
];

