const experiences = [
  {
    year: "2023",
    title: "Graphic Design Projects",
    desc: "Created branding, social media, and visual design projects."
  },
  {
    year: "2024",
    title: "UI/UX Design Journey",
    desc: "Focused on mobile app design, UX research, and prototyping."
  },
  {
    year: "2025",
    title: "Frontend Development",
    desc: "Started building modern interfaces with React and Tailwind."
  }
];

export default function Experience() {
  return (
    <section
      className="py-28 px-6 bg-white"
    >

      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">

          <span className="text-pink-500 font-semibold">
            JOURNEY
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            My Experience
          </h2>

        </div>

        <div className="space-y-8">

          {experiences.map((item) => (
            <div
              key={item.year}
              className="
              bg-gradient-to-r
              from-pink-50
              to-purple-50
              p-8
              rounded-3xl
              shadow-lg
              hover:-translate-y-2
              transition
              duration-300
              "
            >

              <span className="text-pink-500 font-bold">
                {item.year}
              </span>

              <h3 className="text-2xl font-bold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}