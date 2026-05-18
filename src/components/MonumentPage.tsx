import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface Monument {
  title: string;
  subtitle: string;
  image: string;
  year?: string;
  description: string;
  details: string[];
}

interface MonumentPageProps {
  monument: Monument;
  prevLink?: { href: string; label: string };
  nextLink?: { href: string; label: string };
}

export default function MonumentPage({ monument, prevLink, nextLink }: MonumentPageProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <main className="min-h-screen">
      <Header />

      <div ref={heroRef} className="relative flex items-center justify-center h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
          <img src={monument.image} alt={monument.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        <div className="relative z-10 text-center text-white px-6">
          {monument.year && (
            <p className="text-sm uppercase tracking-widest mb-4 opacity-70">{monument.year}</p>
          )}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 uppercase">
            {monument.title}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">{monument.subtitle}</p>
        </div>
      </div>

      <div className="bg-white px-6 py-20 lg:py-32 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-8 leading-tight">
              {monument.title}
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8">{monument.description}</p>
            <ul className="space-y-4">
              {monument.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5 shrink-0" />
                  <span className="text-neutral-700">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-[500px] lg:h-[600px]">
            <img
              src={monument.image}
              alt={monument.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-neutral-100 px-6 py-12 flex justify-between items-center">
        <div>
          {prevLink && (
            <Link
              to={prevLink.href}
              className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900 transition-colors uppercase text-sm tracking-wide"
            >
              <span>←</span>
              <span>{prevLink.label}</span>
            </Link>
          )}
        </div>
        <Link
          to="/"
          className="text-neutral-500 hover:text-neutral-900 transition-colors uppercase text-sm tracking-wide"
        >
          Все памятники
        </Link>
        <div>
          {nextLink && (
            <Link
              to={nextLink.href}
              className="flex items-center gap-3 text-neutral-600 hover:text-neutral-900 transition-colors uppercase text-sm tracking-wide"
            >
              <span>{nextLink.label}</span>
              <span>→</span>
            </Link>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
