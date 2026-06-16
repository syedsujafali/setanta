import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="pt-24 sm:pt-28 md:pt-32 lg:pt-0 w-full overflow-x-hidden">
        <Hero />
        <Overview />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
