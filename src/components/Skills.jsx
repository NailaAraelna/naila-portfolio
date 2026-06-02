const skills = [
  "Figma",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "UI Design",
  "UX Research",
  "Wireframing",
  "Prototyping",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS"
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6 bg-[#FFF9F5]"
    >

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">

          <span className="text-purple-500 font-semibold">
            MY SKILLS
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Tools & Expertise
          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {skills.map((skill) => (
            <div
              key={skill}
              className="
              bg-white
              rounded-3xl
              p-6
              text-center
              shadow-lg
              hover:-translate-y-2
              transition
              duration-300
              cursor-pointer
              "
            >
              <h3 className="font-semibold">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}