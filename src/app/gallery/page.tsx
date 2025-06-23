import { works } from "@/data/works";
import Image from "next/image";
import Link from "next/link";

export default function GalleryPage() {
  const categories = [...new Set(works.map((work) => work.category))];
  return (
    <main>
      <section className="relative h-96 flex items-center justify-center bg-emerald-500 overflow-hidden">
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: "#10b981",
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/arabesque.png')",
          }}
        ></div>

        <div className="bg-[url('/images/gallery-hero.jpg')] bg-cover bg-center absolute inset-0 z-0"></div>

        <div className="container mx-auto px-6 z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Calligraphy <span className="text-black">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-black">
            Explore our collection of handcrafted calligraphy pieces
          </p>
        </div>
      </section>
      <section
        className="py-20"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/cutcube.png')",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 rounded-full border cursor-pointer border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-colors duration-300">
              All Works
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-700 cursor-pointer text-black hover:border-emerald-500 hover:text-emerald-500 transition-colors duration-300"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work) => (
              <div
                key={work.id}
                className="group relative overflow-hidden rounded-lg border border-gray-800 hover:border-emerald-500 transition-colors duration-300"
              >
                <Link href={`/${work.id}`}>
                  <div className="aspect-square relative">
                    <Image
                      src={work.imageUrl}
                      alt={work.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                    <h3 className="text-xl font-bold text-white">
                      {work.title}
                    </h3>
                    <p className="text-emerald-500 text-sm font-medium">
                      {work.category}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 bg-black text-emerald-500 px-3 py-1 rounded-full text-sm font-medium border border-emerald-500/20 backdrop-blur-sm">
                    View
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-emerald-500 text-black flex items-center justify-center">
                1
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-700 text-black hover:border-emerald-500 hover:text-emerald-500 flex items-center justify-center transition-colors duration-300">
                2
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-700 text-black hover:border-emerald-500 hover:text-emerald-500 flex items-center justify-center transition-colors duration-300">
                3
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-20 "
         style={{
          backgroundColor: "#ffffff",
          backgroundImage:
           "url('https://www.transparenttextures.com/patterns/cutcube.png')",
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-500">
            Ready to <span className="text-black">Commission</span> Your Own
            Piece?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-black">
            Each calligraphy work is uniquely crafted to your vision and needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-emerald-600 text-black font-medium px-8 py-3 rounded-full transition-colors duration-300 border border-emerald-500"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
