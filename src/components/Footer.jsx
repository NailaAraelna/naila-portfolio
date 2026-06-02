export default function Footer() {
  return (
    <footer className="py-35 text-center text-gray-400 border-t border-white/10">
      
      <p className="text-sm">
        Designed & Built with ❤️ by <span className="text-shadow-purple-400 font-semibold">Naila Araelna</span>
      </p>

      <p className="text-xs mt-2">
        © {new Date().getFullYear()} All Rights Reserved
      </p>

    </footer>
  );
}