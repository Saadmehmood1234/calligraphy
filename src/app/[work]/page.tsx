import { works } from "@/data/works";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useParams } from "next/navigation";


export default function WorkPage() {
  const { work: workId } = useParams();
  const workdata = works.find((w) => w.id === workId);

  if (!workdata) {
    notFound();
  }

  return (
    <main>
      <section
        className="pt-32 pb-20 "
        style={{
          backgroundColor: "#ffffff",
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/cutcube.png')",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl border-2 border-emerald-800/30 bg-emerald-900/10">
                <Image
                  src={workdata.imageUrl}
                  alt={workdata.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-emerald-900/20 hover:bg-emerald-900/30 transition-colors duration-300" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10 mix-blend-overlay" />
              </div>
            </div>

            <div className="lg:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-500">
                {workdata.title}
              </h1>
              <p className="text-xl text-emerald-400 mb-6 font-medium">
                {workdata.category}
              </p>

              <p className="mb-8 text-black leading-relaxed">
                {workdata.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div
                  className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-800/30 backdrop-blur-sm"
                  style={{
                    backgroundColor: "#10b981",
                    backgroundImage:
                      "url('https://www.transparenttextures.com/patterns/arabesque.png')",
                  }}
                >
                  <h3 className="font-bold mb-1 text-gray-700">Date Created</h3>
                  <p className="text-white">
                    {new Date(workdata.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>

                <div
                  className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-800/30 backdrop-blur-sm"
                  style={{
                    backgroundColor: "#10b981",
                    backgroundImage:
                      "url('https://www.transparenttextures.com/patterns/arabesque.png')",
                  }}
                >
                  <h3 className="font-bold mb-1 text-gray-700">Dimensions</h3>
                  <p className="text-white">{workdata.size}</p>
                </div>

                <div
                  className="bg-emerald-900/50 p-4 rounded-lg border border-emerald-800/30 backdrop-blur-sm"
                  style={{
                    backgroundColor: "#10b981",
                    backgroundImage:
                      "url('https://www.transparenttextures.com/patterns/arabesque.png')",
                  }}
                >
                  <h3 className="font-bold mb-1 text-gray-700">Medium</h3>
                  <p className="text-white">{workdata.medium}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-block cursor-pointer bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-8 py-3 rounded-full transition-colors duration-300 border border-emerald-500 text-center"
                >
                  Inquire About Commission
                </Link>
                <Link
                  href="/gallery"
                  className="inline-block  hover:bg-emerald-500 hover:text-white text-black font-medium px-8 py-3 rounded-full transition-colors duration-300 border-2 border-emerald-500 text-center"
                >
                  View Gallery
                </Link>
              </div>
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
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black">
            More <span className="text-emerald-400">Works</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {works
              .filter((w) => w.id !== workdata.id)
              .slice(0, 3)
              .map((relatedWork) => (
                <Link
                  key={relatedWork.id}
                  href={`/${relatedWork.id}`}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-emerald-800/30 transition-all duration-300 border-2 border-emerald-800/30 bg-emerald-900/10 hover:bg-emerald-900/20">
                    <div className="aspect-square relative">
                      <Image
                        src={relatedWork.imageUrl}
                        alt={relatedWork.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-emerald-900/30 group-hover:bg-emerald-900/40 transition-colors duration-300" />
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10 mix-blend-overlay" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-emerald-900/90 via-emerald-900/50 to-transparent">
                      <h3 className="text-xl font-bold text-emerald-50">
                        {relatedWork.title}
                      </h3>
                      <p className="text-emerald-400 text-sm font-medium">
                        {relatedWork.category}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
