import { motion } from 'framer-motion';
import { Award, Building2, ShieldCheck, MapPin } from 'lucide-react';

const highlights = [
  { icon: Award, label: '25+ Years', desc: 'Experience' },
  { icon: Building2, label: 'Residential', desc: '& Commercial' },
  { icon: ShieldCheck, label: 'Licensed', desc: '& Insured' },
  { icon: MapPin, label: 'NYC • Yonkers', desc: '& Westchester' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#0a0a0a]">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(192,0,0,0.4) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="public/images/c4df2d_e3e13f8dd06a4b9a8bbc1fcf3ea18f97~mv2.jpg"
                alt="Construction craftsmanship - Setanta Restoration"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 md:-right-8 glass p-6 rounded-sm max-w-[220px] hidden sm:block"
            >
              <div className="text-4xl font-bold text-[#C00000]" style={{ fontFamily: "'Playfair Display', serif" }}>
                25+
              </div>
              <div className="text-sm text-gray-300 mt-1">Years of Excellence in Construction</div>
            </motion.div>
            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-[#C00000]/30 -z-10 hidden md:block" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-[#C00000] text-sm font-semibold uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-[#C00000]" />
              About Us
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              About <span className="text-[#C00000]">Setanta</span> Restoration Inc.
            </h2>
            <div className="space-y-5 text-gray-400 text-base leading-relaxed">
              <p>
                Since 2001 we have completed projects throughout NYC, Yonkers, and Westchester ranging
                from new construction, residential renovations, commercial renovations, and structural repairs.
              </p>
              <p>
                We have partnered with community groups, developers, churches, property owners, and
                homeowners to improve properties and enhance communities through quality construction services.
              </p>
              <p>
                Our team brings decades of combined experience in managing complex projects, navigating landmark regulations, 
                and delivering exceptional results on time and within budget. We pride ourselves on our attention to detail, 
                transparent communication, and commitment to customer satisfaction.
              </p>
              <p>
                Whether you're looking for general contracting, new construction, historic restoration, or structural repairs, 
                Setanta Restoration Inc. is your trusted partner for quality, reliability, and professional service.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="glass-light p-5 rounded-sm group hover:border-[#C00000]/30 transition-all duration-300"
                >
                  <item.icon className="w-8 h-8 text-[#C00000] mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-white font-semibold">{item.label}</div>
                  <div className="text-gray-500 text-sm">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
