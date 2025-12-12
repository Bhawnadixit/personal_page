export function Contact() {
  return (
    <section className="py-12">
      {/* Section label */}
      <div className="mb-8 inline-block px-4 py-1.5 bg-white/15 backdrop-blur rounded-full">
        <span className="uppercase tracking-[0.16em] text-[0.72rem] text-white">
          Get in Touch
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-[clamp(1.7rem,3vw,2.2rem)] m-0 mb-4 text-white">
        Contact me
      </h2>

      {/* Intro text */}
      <p className="text-[1.05rem] text-slate-200 leading-relaxed mb-8 max-w-2xl">
        For postdoctoral opportunities, collaborations, or questions about my work,
        feel free to reach out using the form below or via email.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xdkqpzew"
          method="POST"
          className="bg-white/85 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20"
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm text-white mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-[0.95rem] outline-none bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm text-white mb-2">
                Email
              </label>
              <input
                id="email"
                name="_replyto"
                type="email"
                required
                className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-[0.95rem] outline-none bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-[0.95rem] outline-none bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all resize-none"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl px-6 py-4 text-[1rem] border-none bg-gradient-to-r from-blue-600 to-blue-700 text-white cursor-pointer hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-blue-600"
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
              <div>
                <h4 className="text-sm text-white mb-1">Email</h4>
                <a
                  href="mailto:bhawnadixit3@gmail.com"
                  className="text-white hover:text-blue-700 no-underline"
                >
                  bhawnadixit3@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-slate-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .949.431.949.949 0 .525-.424.949-.949.949-.525 0-.949-.424-.949-.949 0-.518.424-.949.949-.949zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.016-5.325 5.016h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 4.078-1.472 4.078-3.722 0-2.016-1.313-3.722-3.925-3.722h-2.45z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm text-white mb-1">ORCID</h4>
                <a
                  href="https://orcid.org/0000-0003-4718-4911"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-600 no-underline"
                >
                  0000-0003-4718-4911
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <h4 className="text-white mb-3">Open to Opportunities</h4>
            <p className="text-sm text-white leading-relaxed">
              I am actively seeking postdoctoral positions and collaborations in
              computational structural biology, protein dynamics, and AI-driven
              molecular modeling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
