# The Wellsian Journey - Bike Tour Website

A classic, adventure-themed website for a literary bicycle tour inspired by H.G. Wells' works. Features an interactive map with location pins and audio narratives with transcripts.

## Features

- **Classic HG Wells Theme**: Steampunk-inspired design with warm earth tones, brass accents, and vintage typography
- **Interactive Map**: Leaflet-powered map with custom-styled location pins
  - Hover over pins to see location information
  - Click pins to smoothly scroll to corresponding audio sections
- **Audio Narratives**: Each location includes:
  - Custom audio player with play/pause controls
  - Progress bar with time tracking
  - Full transcript display
- **Responsive Design**: Works beautifully on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Adding Audio Files

Place your audio files in the `public/audio/` directory and update the `audioUrl` paths in `lib/locations.ts` to match your file names.

Example:
- `public/audio/location-1.mp3`
- `public/audio/location-2.mp3`
- etc.

### Customizing Locations

Edit `lib/locations.ts` to add, remove, or modify tour locations. Each location includes:
- `id`: Unique identifier
- `name`: Display name
- `description`: Short description shown in map popup
- `coordinates`: [latitude, longitude] array
- `audioUrl`: Path to audio file
- `transcript`: Full text transcript

## Project Structure

```
bike-tour-website/
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles and theme
├── components/
│   ├── Header.tsx       # Site header component
│   ├── TourMap.tsx      # Interactive map component
│   └── AudioSection.tsx # Audio player with transcript
├── lib/
│   └── locations.ts     # Location data and types
└── public/
    └── audio/           # Audio files directory
```

## Design Theme

The website features a classic, adventure-themed aesthetic inspired by H.G. Wells:

- **Colors**: Warm amber tones, deep browns, brass accents
- **Typography**: Playfair Display (serif) for headings, Inter (sans-serif) for body
- **Style**: Vintage literary feel with subtle textures and shadows

## Technologies

- **Next.js 16**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS 4**: Styling
- **React Leaflet**: Map integration
- **Lucide React**: Icons

## Build

```bash
npm run build
npm start
```

## License

MIT
