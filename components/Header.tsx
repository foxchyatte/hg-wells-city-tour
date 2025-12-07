import { BookOpen } from "lucide-react";

export default function Header() {
  return (
      <header className="relative w-full border-b-4 border-amber-900/30 bg-linear-to-b from-amber-50 to-amber-100/50 shadow-lg">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2U1ZTdlYiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full bg-amber-900/20 p-3 shadow-md">
            <BookOpen className="h-8 w-8 text-amber-900" />
          </div>
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-amber-900 sm:text-5xl md:text-6xl">
              NYC Bike Tour
            </h1>
            <p className="mt-2 font-serif text-lg italic text-amber-800/80 sm:text-xl">
              Explore the City That Never Sleeps
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

