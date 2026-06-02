import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-10 px-3 text-white">
      
      {/* Floating background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
      </div>

      <div className="relative max-w-3xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-black font-bold"
        >
          Let’s Build Something <span className="text-purple-400">Amazing</span>
        </motion.h2>

        <p className="text-gray-400 mt-5">
          Punya project UI/UX, website, atau aplikasi? Yuk diskusi bareng 🚀
        </p>

        {/* CTA Button */}
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:youremail@gmail.com"
          className="inline-block mt-8 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-semibold shadow-lg"
        >
          Contact Me
        </motion.a>

      </div>
    </section>
  );
}