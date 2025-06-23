import { CalligraphyWork } from "@/data/works";
import Link from "next/link";
import Image from "next/image";

interface CalligraphyCardProps {
  work: CalligraphyWork;
}

export default function CalligraphyCard({ work }: CalligraphyCardProps) {
  return (
    <Link href={`/${work.id}`} className="group block" dir="rtl">
      <div className="relative overflow-hidden rounded-xl shadow-2xl hover:shadow-emerald-900/30 transition-all duration-500 border-2 border-emerald-800/30 bg-emerald-900/10 hover:bg-emerald-900/20">
        <div className="aspect-[4/5] relative">
          <Image
            src={work.imageUrl}
            alt={work.title}
            fill
            className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-900/40" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-emerald-900/90 via-emerald-900/50 to-transparent">
          <div className="text-right">
            <h3 className="text-2xl font-bold text-emerald-50 font-arabic">{work.title}</h3>
            <p className="text-emerald-300 text-sm mt-1 font-medium">
              {work.category}
            </p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-emerald-100 text-xs font-light">
                {work.size}
              </span>
              <span className="text-emerald-200 text-sm font-medium">
                {work.medium}
              </span>
            </div>
          </div>
        </div>

        <div className="absolute top-4 left-4 justify-end gap-12 w-full flex items-center">
          <span className="bg-emerald-800/80 text-emerald-100 px-3 py-1 rounded-full text-xs font-medium border border-emerald-600/30 backdrop-blur-sm">
            عرض
          </span>
          <div className="w-8 h-8 ml-2 flex items-center justify-center bg-emerald-700/80 rounded-full border border-emerald-500/30 backdrop-blur-sm">
            <svg className="w-4 h-4 text-emerald-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

        {work.category === "Quranic Ayah" && (
          <div className="absolute top-4 right-4 bg-emerald-900/80 text-emerald-100 p-1 rounded-lg">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3V21M8 7L12 3L16 7M8 17L12 21L16 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
      </div>
    </Link>
  );
}