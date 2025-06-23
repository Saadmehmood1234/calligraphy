import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main
      style={{
        backgroundColor: "#ffffff",
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cutcube.png')",
      }}
    >
      <section className="pt-32 pb-20 ">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-black">
            About <span className="text-emerald-500">the Artist</span>
          </h1>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl border border-gray-800">
                <Image
                  src="/back.png"
                  alt="Calligraphy Artist"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-emerald-500">
                Hello, I'm <span className="text-black">Saad Mehmood</span>
              </h2>

              <p className="mb-4 text-gray-700">
                With over 15 years of experience in the art of calligraphy, I've
                dedicated my life to mastering the delicate balance between
                tradition and innovation in lettering.
              </p>
              <p className="mb-4 text-gray-700">
                My journey began when I received my first calligraphy set at age
                12, and since then, I've studied under masters in Europe, Asia,
                and the Middle East to learn various scripts and techniques.
              </p>
              <p className="mb-8 text-gray-700">
                Each piece I create is a unique expression of the client's
                vision, carefully crafted with attention to detail and a deep
                respect for the art form's rich history.
              </p>

              <div
                className=" p-6 rounded-lg border border-gray-800"
                style={{
                  backgroundColor: "#10b981",
                  backgroundImage:
                    "url('https://www.transparenttextures.com/patterns/arabesque.png')",
                }}
              >
                <h3 className="text-xl font-bold mb-4 text-black-400">
                  Education & Awards
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span className="text-white">
                      Master of Fine Arts, Lettering Arts - Royal College of Art
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span className="text-white">
                      International Calligraphy Excellence Award, 2021
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2">✓</span>
                    <span className="text-white">
                      Certified Instructor, Society of Scribes and Illuminators
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 ">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
            My <span className="text-emerald-500">Process</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className=" p-6 rounded-lg border border-gray-700 hover:border-emerald-500 transition-colors duration-300"
              style={{
                backgroundColor: "#10b981",
                backgroundImage:
                  "url('https://www.transparenttextures.com/patterns/arabesque.png')",
              }}
            >
              <div className="text-4xl font-bold mb-4 text-emerald-500">1</div>
              <h3 className="text-xl font-bold mb-3 text-black">
                Consultation
              </h3>
              <p className="text-white">
                We discuss your vision, purpose, and preferences to create a
                custom plan for your piece.
              </p>
            </div>
            <div
              className="p-6 rounded-lg border border-gray-700 hover:border-emerald-500 transition-colors duration-300"
              style={{
                backgroundColor: "#10b981",
                backgroundImage:
                  "url('https://www.transparenttextures.com/patterns/arabesque.png')",
              }}
            >
              <div className="text-4xl font-bold mb-4 text-emerald-500">2</div>
              <h3 className="text-xl font-bold mb-3 text-black">Sketching</h3>
              <p className="text-white">
                I create preliminary sketches and share them with you for
                feedback and approval.
              </p>
            </div>

            <div
              className="p-6 rounded-lg border border-gray-700 hover:border-emerald-500 transition-colors duration-300"
              style={{
                backgroundColor: "#10b981",
                backgroundImage:
                  "url('https://www.transparenttextures.com/patterns/arabesque.png')",
              }}
            >
              <div className="text-4xl font-bold mb-4 text-emerald-500">3</div>
              <h3 className="text-xl font-bold mb-3 text-black">
                Final Artwork
              </h3>
              <p className="text-white">
                Using premium materials, I craft your final piece with
                meticulous attention to detail.
              </p>
            </div>
          </div>
          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-3 rounded-full transition-colors duration-300 border border-emerald-500"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
