"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import type { Location } from "@/lib/locations";

interface AudioSectionProps {
  location: Location;
}

export default function AudioSection({ location }: AudioSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <section
      id={location.id}
      className="scroll-mt-24 rounded-lg border-2 border-amber-900/30 bg-linear-to-br from-amber-50/80 to-amber-100/60 p-6 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl"
    >
      <div className="mb-4">
        <h2 className="font-serif text-2xl font-bold text-amber-900 sm:text-3xl">
          {location.name}
        </h2>
        <p className="mt-1 font-serif italic text-amber-800/80">{location.description}</p>
      </div>

      <div className="mb-4 rounded-lg bg-amber-900/10 p-4">
        <div className="mb-3 flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-900 text-amber-50 shadow-md transition-all hover:bg-amber-800 hover:shadow-lg active:scale-95"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="ml-1 h-6 w-6" />
            )}
          </button>
          <div className="flex flex-1 items-center gap-2">
            <Volume2 className="h-5 w-5 text-amber-900/70" />
            <div className="flex-1">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-amber-900/20 accent-amber-900"
              />
            </div>
            <span className="text-sm font-medium text-amber-900/80">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
        </div>
        <audio ref={audioRef} src={location.audioUrl} preload="metadata" />
      </div>

      <div className="rounded-lg border border-amber-900/20 bg-amber-50/50 p-4">
        <h3 className="mb-2 font-serif text-lg font-semibold text-amber-900">Transcript</h3>
        <p className="font-serif leading-relaxed text-amber-900/90">{location.transcript}</p>
      </div>
    </section>
  );
}

