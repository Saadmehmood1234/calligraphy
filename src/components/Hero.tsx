import { PrimaryButton, OutlineButton } from "./ThemeButton";

export default function Hero() {
  return (
    <section className="relative h-screen bg-gray-900 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/70 to-gray-900/90" />
        <div className="absolute inset-0 bg-[url('/back2.jpg')] opacity-10" />
      </div>

      <div className="container mx-auto px-6 z-20 text-center">
        <div className="mb-8">
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

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-emerald-100 leading-tight">
          <span className="font-arabic text-5xl md:text-7xl text-emerald-300">
            ﷽
          </span>
          <br />
          <span className="font-serif">Sacred</span> Scripts
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-emerald-50">
          Divine Quranic verses in exquisite Islamic calligraphy
        </p>
{/* 
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <PrimaryButton href="#surahs">Explore Surahs</PrimaryButton>
          <OutlineButton href="#ayat">Discover Ayat</OutlineButton>
        </div> */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          {/* <div className="text-emerald-400/60 text-sm flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                clipRule="evenodd"
              />
            </svg>
            Begin Your Journey
          </div> */}
        </div>
      </div>
    </section>
  );
}

// import { PrimaryButton, OutlineButton } from "./ThemeButton";

// export default function Hero() {
//   return (
//     <section
//       className="relative h-screen flex items-center justify-center bg-black overflow-hidden"
//       style={{
//         backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.5))",
//       }}
//     >
//       {/* Changed to an Islamic pattern or arabesque texture */}
//       <div className="absolute inset-0 bg-[url('/images/arabic-pattern.jpg')] bg-cover bg-center opacity-15" />

//       <div className="container mx-auto px-6 z-20 text-center" dir="rtl">
//         {/* Arabic-inspired title with appropriate font */}
//         <h1 className="text-5xl md:text-7xl font-bold mb-6 text-amber-500 font-arabic">
//           <span className="font-normal">الخط العربي</span>
//         </h1>
//         <h2 className="text-4xl md:text-5xl mb-4 text-gold-400 font-arabic-subtitle">
//           فن الإبداع والجمال
//         </h2>
//         <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white font-arabic-body">
//           حيث يتجلى التراث العربي في روعة الخط وأصالة الحرف
//         </p>
//         <div className="flex flex-col sm:flex-row justify-center gap-4">
//           <PrimaryButton href="#gallery">
//             تصفح الأعمال
//           </PrimaryButton>
//           <OutlineButton href="/contact">
//             طلب عمل فني
//           </OutlineButton>
//         </div>
//       </div>

//       {/* Optional decorative elements */}
//       <div className="absolute bottom-8 left-0 right-0 flex justify-center">
//         <svg className="w-12 h-12 text-amber-500 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//         </svg>
//       </div>
//     </section>
//   );
// }
