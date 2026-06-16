import { motion } from 'framer-motion';
import { Phone, Mail, ChevronDown, ArrowRight} from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/c4df2d_01a08c7080e547e68c65c0fd3a28f99f~mv2.jpg"
          alt="Construction site - Setanta Restoration Inc."
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/50" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(192,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(192,0,0,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-light rounded-full mb-8"
          >
           
            
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            General Contractors Serving{' '}
            <span className="text-[#C00000]">NYC</span>,{' '}
            <span className="text-[#C00000]">Yonkers</span> &{' '}
            <span className="text-[#C00000]">Westchester</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed"
          >
            Trusted construction, restoration, renovation, and structural repair specialists since 2001.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C00000] hover:bg-[#990000] text-white font-semibold text-base rounded-sm transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/40"
            >
              Get Free Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 hover:border-[#C00000] text-white font-semibold text-base rounded-sm transition-all duration-300 hover:bg-white/5"
            >
              View Projects
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 sm:gap-10"
          >
            <a href="tel:9149638107" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-[#C00000]/20 transition-colors">
                <Phone className="w-5 h-5 text-[#C00000]" />
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Call Us</div>
                <div className="text-white font-semibold">(914) 963-8107</div>
              </div>
            </a>
            <a href="mailto:info@setantarestoration.com" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-[#C00000]/20 transition-colors">
                <Mail className="w-5 h-5 text-[#C00000]" />
              </div>
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Email Us</div>
                <div className="text-white font-semibold">info@setantarestoration.com</div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
