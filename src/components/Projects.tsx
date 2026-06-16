import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, Expand } from 'lucide-react';
import GallerySlider from './GallerySlider';
import Lightbox from './Lightbox';
import { astorRowImages, fifthAveImages, harlemImages, westchesterGridImages } from '../data/projects';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  location: string;
  features: string[];
  images: string[];
  type: 'slider' | 'grid';
}

const projects: Project[] = [
  {
    title: 'Historic Astor Row Renovation',
    subtitle: 'Flagship Restoration Project',
    description:
      'Setanta Restoration partnered with a local non-profit organization for the renovation of two landmarked townhouses, creating six affordable housing units. This prestigious project demonstrated our expertise in navigating complex landmark regulations while delivering modern, livable spaces that honor historical architecture.',
    location: 'Astor Row, Manhattan',
    features: [
      'Landmark Restoration',
      'Affordable Housing Development',
      'Full Interior Renovation',
      'Historic Preservation',
      'Structural Reinforcement',
      'Modern Building Systems',
    ],
    images: astorRowImages,
    type: 'slider',
  },
  {
    title: 'Fifth Avenue Condominium Development',
    subtitle: 'Luxury New Construction',
    description:
      'Setanta Restoration served as the General Contractor for the construction of a 13-unit luxury condominium development for a private developer. This project showcased our ability to manage complex construction timelines, coordinate multiple trades, and deliver premium finishes on a high-profile Manhattan location.',
    location: 'Fifth Avenue, Manhattan',
    features: [
      'New Construction',
      'Luxury Condominium Development',
      'General Contracting',
      'Multi-Unit Residential',
      'Premium Finishes',
      'Modern Amenities',
    ],
    images: fifthAveImages,
    type: 'slider',
  },
  {
    title: 'Harlem Mixed-Use Renovation',
    subtitle: 'Community Development',
    description:
      'Setanta partnered with a local church congregation to renovate and expand an existing building into apartments and a community facility. This transformative project created much-needed housing while preserving the building\'s community importance and creating valuable public space for neighborhood gatherings and activities.',
    location: 'Harlem, Manhattan',
    features: [
      'Community Development',
      'Apartment Renovation',
      'Building Expansion',
      'Mixed-Use Conversion',
      'Community Facilities',
      'Sustainable Design',
    ],
    images: harlemImages,
    type: 'slider',
  },
];

export default function Projects() {
  const [gridLightbox, setGridLightbox] = useState(false);
  const [gridIndex, setGridIndex] = useState(0);

  return (
    <section id="projects" className="relative py-20 lg:py-28 bg-[#0a0a0a]">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 text-[#C00000] text-sm font-semibold uppercase tracking-widest mb-4">
            <span className="w-8 h-px bg-[#C00000]" />
            Completed Projects
            <span className="w-8 h-px bg-[#C00000]" />
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our <span className="text-[#C00000]">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            A showcase of our finest construction, restoration, and renovation work across NYC and Westchester.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-16 lg:space-y-20">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Gallery */}
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <GallerySlider images={project.images} aspectRatio="aspect-[4/3]" />
                <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                  <span>{project.images.length} images</span>
                  <span className="text-[#C00000]">Click to expand</span>
                </div>
              </div>

              {/* Info */}
              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="text-[#C00000] text-sm font-semibold uppercase tracking-widest mb-3">
                  {project.subtitle}
                </div>
                <h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-300 mb-6">
                  <MapPin className="w-4 h-4 text-[#C00000]" />
                  <span className="text-sm font-medium">{project.location}</span>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#C00000] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Westchester Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 lg:mt-32"
        >
          <div className="grid lg:grid-cols-3 gap-10 mb-10">
            <div className="lg:col-span-1">
              <div className="text-[#C00000] text-sm font-semibold uppercase tracking-widest mb-3">
                Regional Work
              </div>
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Westchester <span className="text-[#C00000]">Projects</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                A curated collection of diverse residential and commercial construction projects
                completed throughout Westchester County. Our regional expertise spans multiple municipalities
                with a proven track record of delivering excellence in every community we serve.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  'Residential Construction',
                  'Commercial Renovation',
                  'Structural Repairs',
                  'Property Improvements',
                  'Roofing & Masonry',
                  'Interior Upgrades',
                ].map((feat) => (
                  <div key={feat} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#C00000] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-4 p-6 bg-[#1a1a1a] rounded-sm border border-[#C00000]/20 mb-8">
                <div>
                  <div className="text-2xl font-bold text-[#C00000] mb-1">50+</div>
                  <p className="text-xs text-gray-400">Projects Completed</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#C00000] mb-1">15+</div>
                  <p className="text-xs text-gray-400">Years Experience</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#C00000] mb-1">8</div>
                  <p className="text-xs text-gray-400">Municipalities Served</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#C00000] mb-1">100%</div>
                  <p className="text-xs text-gray-400">Client Satisfaction</p>
                </div>
              </div>

              {/* Additional Info */}
              <p className="text-gray-400 text-sm leading-relaxed">
                From single-family homes to commercial properties, we bring the same level of precision, professionalism, and attention to detail to every Westchester County project. Our local teams understand the unique building codes and community standards that make the region special.
              </p>
            </div>

            {/* Grid Gallery */}
            <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {westchesterGridImages.map((img, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => {
                    setGridIndex(i);
                    setGridLightbox(true);
                  }}
                  className={`relative group overflow-hidden rounded-sm ${
                    i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Westchester project ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <Expand className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <Lightbox
        images={westchesterGridImages}
        currentIndex={gridIndex}
        isOpen={gridLightbox}
        onClose={() => setGridLightbox(false)}
        onPrev={() => setGridIndex((p) => (p - 1 + westchesterGridImages.length) % westchesterGridImages.length)}
        onNext={() => setGridIndex((p) => (p + 1) % westchesterGridImages.length)}
      />
    </section>
  );
}
