import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialButtons() {
  const socials = [
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://instagram.com",
      color: "text-pink-500 ",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://linkedin.com",
      color: "text-blue-500",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com",
      color: "text-purple-500",
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      
      <div className="flex gap-15 px-8 py-3 rounded-full 
                      bg-white/10 backdrop-blur-xl 
                      border border-white/20 shadow-lg">

        {socials.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, y: -4 }}
            whileTap={{ scale: 0.10 }}
            className={`text-6xl transition ${item.color}`}
            title={item.name}
          >



            {/* TOOLTIP */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 
                             text-xs px-6 py-3 rounded-md 
                             bg-black/70 text-white opacity-0 
                             group-hover:opacity-100 transition">
              {item.name}
            </span>

            {item.icon}
          </motion.a>
        ))}

      </div>
    </div>
  );
}