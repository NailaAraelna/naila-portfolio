export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 bg-[#FFF9F5]"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">

          <span className="text-pink-500 font-semibold">
            CONTACT
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Let's Work Together ✨
          </h2>

          <p className="text-gray-500 mt-4">
            Have a project in mind? I'd love to hear about it.
          </p>

        </div>

        <div className="bg-white rounded-[40px] p-10 shadow-xl">

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-2xl border border-pink-100 outline-none focus:border-pink-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-2xl border border-pink-100 outline-none focus:border-pink-400"
            />

          </div>

          <textarea
            rows="6"
            placeholder="Tell me about your project..."
            className="w-full mt-6 p-4 rounded-2xl border border-pink-100 outline-none focus:border-pink-400"
          />

          <button
            className="
            mt-6
            px-8
            py-4
            rounded-full
            bg-gradient-to-r
            from-pink-500
            to-purple-500
            text-white
            font-semibold
            "
          >
            Send Message
          </button>

        </div>

      </div>
    </section>
  );
}