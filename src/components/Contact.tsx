import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const projectTypes = [
  'General Contracting',
  'New Construction',
  'Commercial Renovation',
  'Residential Renovation',
  'Structural Repairs',
  'Historic Restoration',
  'Other',
];

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[\d\s\-+().]{7,}$/.test(form.phone)) newErrors.phone = 'Enter a valid phone';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', phone: '', email: '', projectType: '', message: '' });
      }, 4000);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#050505]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 text-[#C00000] text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-[#C00000]" />
            Contact Us
            <span className="w-8 h-px bg-[#C00000]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let's Build Something <span className="text-[#C00000]">Great</span> Together
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-2">
            Ready to start your next project? Get in touch for a free estimate and consultation.
          </p>
          <p className="text-gray-500 text-base leading-relaxed">
            Whether you need construction, restoration, renovation, or structural repairs, our team is ready to help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass p-8 rounded-sm">
              <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-sm bg-[#C00000]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#C00000]" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Phone</div>
                    <a href="tel:9149638107" className="text-white font-semibold hover:text-[#C00000] transition-colors">
                      (914) 963-8107
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-sm bg-[#C00000]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#C00000]" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Email</div>
                    <a
                      href="mailto:info@setantarestoration.com"
                      className="text-white font-semibold hover:text-[#C00000] transition-colors break-all"
                    >
                      info@setantarestoration.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-sm bg-[#C00000]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#C00000]" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Service Areas</div>
                    <div className="text-white font-semibold">NYC • Yonkers • Westchester</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-sm bg-[#C00000]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#C00000]" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Hours</div>
                    <div className="text-white text-sm">Mon - Fri: 7:00 AM - 6:00 PM</div>
                    <div className="text-gray-400 text-sm">Sat: 8:00 AM - 2:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass rounded-sm overflow-hidden">
              <div className="aspect-video bg-[#111] relative">
                <iframe
                  title="Setanta Restoration Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48289.96484928093!2d-73.9499!3d40.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28b53fb8b3b3b%3A0xa8c8c4e4c4e4c4e4!2sYonkers%2C%20NY!5e0!3m2!1sen!2sus!4v1600000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(0.9) grayscale(0.8)' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass p-8 lg:p-10 rounded-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-[#C00000] mb-5" />
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Thank You!
                  </h3>
                  <p className="text-gray-400 max-w-sm">
                    Your message has been sent. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Request a Free Estimate
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className={`w-full bg-[#111] border ${errors.name ? 'border-[#C00000]' : 'border-white/10'} rounded-sm px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#C00000] transition-colors`}
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-[#C00000] text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Phone *</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={`w-full bg-[#111] border ${errors.phone ? 'border-[#C00000]' : 'border-white/10'} rounded-sm px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#C00000] transition-colors`}
                        placeholder="(555) 123-4567"
                      />
                      {errors.phone && <p className="text-[#C00000] text-xs mt-1">{errors.phone}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={`w-full bg-[#111] border ${errors.email ? 'border-[#C00000]' : 'border-white/10'} rounded-sm px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#C00000] transition-colors`}
                        placeholder="you@example.com"
                      />
                      {errors.email && <p className="text-[#C00000] text-xs mt-1">{errors.email}</p>}
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Project Type</label>
                      <select
                        value={form.projectType}
                        onChange={(e) => handleChange('projectType', e.target.value)}
                        className="w-full bg-[#111] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-[#C00000] transition-colors appearance-none"
                      >
                        <option value="">Select a service</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mt-5">
                    <label className="block text-sm font-medium text-gray-400 mb-2">Project Details *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={5}
                      className={`w-full bg-[#111] border ${errors.message ? 'border-[#C00000]' : 'border-white/10'} rounded-sm px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#C00000] transition-colors resize-none`}
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                    {errors.message && <p className="text-[#C00000] text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C00000] hover:bg-[#990000] text-white font-semibold rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30 group"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
