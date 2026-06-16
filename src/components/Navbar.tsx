import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-screen transition-all duration-500 ${
          scrolled ? 'glass py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group flex-shrink-0">
              <div className="relative w-24 h-12 sm:w-32 h-16 md:w-40 h-20 lg:w-56 h-28 flex items-center justify-center">
                <img
                  src="/images/logo.jpeg"
                  alt="Setanta Restoration Inc. Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C00000] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Contact Info Desktop */}
            <div className="hidden xl:flex items-center gap-6">
              <a href="tel:9149638107" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#C00000]" />
                (914) 963-8107
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 bg-[#C00000] hover:bg-[#990000] text-white text-sm font-semibold rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30"
              >
                Free Estimate
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white flex-shrink-0"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] lg:hidden pt-24 overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-full gap-8 px-8 py-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl font-semibold text-white hover:text-[#C00000] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex flex-col items-center gap-4 mt-8 pt-8 border-t border-gray-800 w-full">
                <a href="tel:9149638107" className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-[#C00000]" />
                  (914) 963-8107
                </a>
                <a href="mailto:info@setantarestoration.com" className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-[#C00000]" />
                  info@setantarestoration.com
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 px-8 py-3 bg-[#C00000] text-white font-semibold rounded-sm"
                >
                  Get Free Estimate
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
