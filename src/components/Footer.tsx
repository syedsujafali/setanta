import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

const Facebook = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const Instagram = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);


const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-white/5">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/images/logo.jpeg"
                alt="Setanta Restoration Inc. Logo"
                className="w-56 h-28 object-contain"
              />
             
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Trusted construction, restoration, and renovation specialists serving NYC, Yonkers & Westchester since 2001.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-sm glass-light flex items-center justify-center text-gray-400 hover:text-[#C00000] hover:border-[#C00000]/30 transition-all duration-300"
                  aria-label="Social media link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-[#C00000] text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">What We Do</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-500 hover:text-[#C00000] text-sm transition-colors duration-300">
                  General Contracting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-[#C00000] text-sm transition-colors duration-300">
                  New Construction
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-[#C00000] text-sm transition-colors duration-300">
                  Renovations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-[#C00000] text-sm transition-colors duration-300">
                  Historic Restoration
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-[#C00000] text-sm transition-colors duration-300">
                  Structural Repairs
                </a>
              </li>
            </ul>
          </div>

          {/* Why Us */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Why Setanta</h4>
            <ul className="space-y-3">
              <li className="text-gray-500 text-sm">25+ Years Experience</li>
              <li className="text-gray-500 text-sm">500+ Projects Completed</li>
              <li className="text-gray-500 text-sm">Licensed & Insured</li>
              <li className="text-gray-500 text-sm">Free Estimates</li>
              <li className="text-gray-500 text-sm">Transparent Pricing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C00000] mt-0.5 flex-shrink-0" />
                <a href="tel:9149638107" className="text-gray-400 text-sm hover:text-white transition-colors">
                  (914) 963-8107
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C00000] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@setantarestoration.com"
                  className="text-gray-400 text-sm hover:text-white transition-colors break-all"
                >
                  info@setantarestoration.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C00000] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">NYC • Yonkers • Westchester</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Setanta Restoration Inc. All rights reserved. Licensed & Insured.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 hover:text-[#C00000] text-xs transition-colors group"
            aria-label="Scroll to top"
          >
            Back to top
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
