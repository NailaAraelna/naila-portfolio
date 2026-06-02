import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="py-28 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-pink-500 font-semibold">
            ABOUT ME
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Turning Ideas Into
            <span className="text-pink-500"> Beautiful Designs</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-pink-50 p-8 rounded-3xl shadow-lg">
            <h3 className="font-bold text-2xl mb-4">
              Hi, I'm Naila 👋
            </h3>

            <p className="text-gray-600 leading-relaxed">
              I am a passionate UI/UX Designer and Graphic Designer who enjoys
              transforming ideas into delightful digital experiences.
              I believe great design should be beautiful, functional,
              and accessible for everyone.
            </p>
          </div>

          <div className="bg-purple-50 p-8 rounded-3xl shadow-lg">
            <h3 className="font-bold text-2xl mb-4">
              What I Love
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>🎨 UI Design</li>
              <li>✨ User Experience</li>
              <li>💡 Design Thinking</li>
              <li>📱 Mobile App Design</li>
              <li>🌈 Visual Branding</li>
              <li>💻 Front-End Development</li>
            </ul>
          </div>

        </div>

      </div>
    </motion.section>
  );
}