import { motion } from 'framer-motion';
import { Calendar, Building2, Award, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { icon: Calendar, value: 2001, suffix: '', label: 'Established', desc: 'Serving the community since 2001' },
  { icon: Building2, value: 500, suffix: '+', label: 'Completed Projects', desc: 'Hundreds of successful builds' },
  { icon: Award, value: 25, suffix: '+', label: 'Years Experience', desc: 'Residential & commercial expertise' },
  { icon: Users, value: 100, suffix: '%', label: 'Client Satisfaction', desc: 'Trusted local contractor' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold text-[#C00000]" style={{ fontFamily: "'Playfair Display', serif" }}>
      {count}{suffix}
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C00000]/5 rounded-full blur-3xl" />

      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 text-[#C00000] text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-[#C00000]" />
            Why Choose Us
            <span className="w-8 h-px bg-[#C00000]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Built on <span className="text-[#C00000]">Trust</span>, Delivered with Excellence
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Our track record speaks for itself. Here's why clients across NYC and Westchester choose Setanta.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative glass p-8 rounded-sm text-center hover:border-[#C00000]/30 transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#C00000]/10 flex items-center justify-center group-hover:bg-[#C00000] transition-all duration-500">
                <stat.icon className="w-8 h-8 text-[#C00000] group-hover:text-white transition-colors duration-500" />
              </div>
              <Counter target={stat.value} suffix={stat.suffix} />
              <div className="text-white font-semibold mt-2 mb-2">{stat.label}</div>
              <div className="text-gray-500 text-sm">{stat.desc}</div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
