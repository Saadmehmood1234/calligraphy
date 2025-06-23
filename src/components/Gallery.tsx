import { works } from "@/data/works";
import CalligraphyCard from "./CalligraphyCard";
import { OutlineButton } from "./ThemeButton";

export default function Gallery() {
  return (
    <section
      id="surahs"
      className="py-24  relative overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cutcube.png')",
      }}
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/islamic-pattern.png')] opacity-[3%] z-0" />
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-emerald-700/30" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-emerald-700/30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center mb-6">
                <svg
            className="w-20 h-20 mx-auto text-emerald-400"
            viewBox="0 0 24 24"
          >
            <path
              d="M18 12C18 18 12 22 12 22C12 22 6 18 6 12C6 6 12 2 12 2C12 2 18 6 18 12Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="16" cy="8" r="2" fill="currentColor" />
          </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-emerald-500 font-arabic-title">
            الآيات القرآنية
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            <span className="font-arabic text-2xl text-black">﷽</span>
            <br />
            Discover the divine beauty of Quranic verses in exquisite
            calligraphic form
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {works.map((work) => (
            <CalligraphyCard key={work.id} work={work} />
          ))}
        </div>
        <div className="text-center mt-20 relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-24 h-px bg-gradient-to-r from-transparent via-emerald-600 to-transparent" />
          <OutlineButton
            href="/gallery"
            className="border-emerald-400 text-emerald-300 hover:bg-emerald-500 hover:text-white"
          >
            View All Surahs
          </OutlineButton>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
        </div>
      </div>
    
    </section>
  );
}
