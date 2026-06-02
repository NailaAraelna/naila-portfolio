const projects = [
  {
    title: "Glow Beauty App",
    category: "UI/UX Design",
    description:
      "Mobile skincare application focusing on user-friendly shopping experiences.",
    emoji: "💄",
    size: "large",
  },

  {
    title: "Coffee Branding",
    category: "Graphic Design",
    description:
      "Brand identity, packaging, and social media design.",
    emoji: "☕",
    size: "small",
  },

  {
    title: "Travel Website",
    category: "Web Design",
    description:
      "Modern responsive landing page for travel enthusiasts.",
    emoji: "✈️",
    size: "small",
  },

  {
    title: "Finance Dashboard",
    category: "UI Design",
    description:
      "Dashboard for monitoring business analytics and reports.",
    emoji: "📊",
    size: "large",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6 bg-[#FFF9F5]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <span className="text-purple-500 font-semibold">
            FEATURED WORK
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Selected Projects
          </h2>

          <p className="text-gray-500 mt-4">
            A collection of design projects that blend creativity,
            usability, and visual storytelling.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-6 auto-rows-[250px]">

          {projects.map((project, index) => (

            <div
              key={index}
              className={`
              rounded-[30px]
              p-8
              shadow-lg
              bg-gradient-to-br from-white to-pink-50
              hover:-translate-y-2
              hover:shadow-2xl
              hover: backdrop-hue-rotate-180
              transition-all
              duration-300
              cursor-pointer

              ${
                project.size === "large"
                  ? "md:col-span-2"
                  : ""
              }
              `}
            >

              <div className="text-5xl mb-5">
                {project.emoji}
              </div>

              <span className="text-pink-500 font-medium">
                {project.category}
              </span>

              <h3 className="text-2xl font-bold mt-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {project.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}