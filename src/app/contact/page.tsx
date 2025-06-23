export default function ContactPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-emerald-500">
            Get In Touch
          </h1>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-black">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3  text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    style={{
                      backgroundColor: "#10b981",
                      backgroundImage:
                        "url('https://www.transparenttextures.com/patterns/arabesque.png')",
                    }}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-black">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3  text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    style={{
                      backgroundColor: "#10b981",
                      backgroundImage:
                        "url('https://www.transparenttextures.com/patterns/arabesque.png')",
                    }}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-black">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3  text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    style={{
                      backgroundColor: "#10b981",
                      backgroundImage:
                        "url('https://www.transparenttextures.com/patterns/arabesque.png')",
                    }}
                  >
                    <option value="">Select a subject</option>
                    <option value="commission">Commission Inquiry</option>
                    <option value="workshop">Workshop Information</option>
                    <option value="other">Other Question</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-black">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3  text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    style={{
                      backgroundColor: "#10b981",
                      backgroundImage:
                        "url('https://www.transparenttextures.com/patterns/arabesque.png')",
                    }}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-emerald-500 text-white px-8 py-3 cursor-pointer rounded-full font-medium hover:bg-emerald-600 transition-colors w-full"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div
              className="lg:w-1/2"
              style={{
                backgroundColor: "#10b981",
                backgroundImage:
                  "url('https://www.transparenttextures.com/patterns/arabesque.png')",
              }}
            >
              <div className=" p-8 rounded-lg h-full border border-gray-700">
                <h2 className="text-2xl font-bold mb-6 text-black">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-white mr-4 mt-1">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="text-white">
                      <h3 className="font-bold mb-1">Studio Address</h3>
                      <p>123 Calligraphy Lane, Artville, CA 90210</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-white mr-4 mt-1">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="text-white">
                      <h3 className="font-bold mb-1">Phone</h3>
                      <p>(555) 123-4567</p>
                      <p className="text-sm text-white">
                        Mon-Fri, 10am-5pm PST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-white mr-4 mt-1">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="text-white">
                      <h3 className="font-bold mb-1">Email</h3>
                      <p>hello@elegantscript.com</p>
                      <p className="text-sm text-white">
                        Typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
