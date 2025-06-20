export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col gap-4 md:w-1/3">
          <h2 className="text-2xl font-bold text-red-600">Vortex</h2>
          <p className="text-sm text-gray-400">
            Your squad’s home base for real-time chat, voice, and video. Connect. 
            Strategize. Conquer.
          </p>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://twitter.com/vortex"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a
              href="https://discord.com/invite/vortex"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              <i className="fab fa-discord fa-lg"></i>
            </a>
            <a
              href="https://github.com/vortex"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-6 md:w-1/3">
          <h3 className="font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/features" className="hover:text-red-600 transition">
                Features
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-red-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="/clans" className="hover:text-red-600 transition">
                Clans
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-red-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-6 md:w-1/3">
          <h3 className="font-semibold text-white mb-2">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/help" className="hover:text-red-600 transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-red-600 transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-red-600 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
        &copy; 2025 Vortex. All rights reserved.
      </div>
    </footer>
  );
}
