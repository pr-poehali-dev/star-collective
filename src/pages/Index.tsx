import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";

const monuments = [
  {
    href: "/monuments/catherine",
    title: "Памятник Екатерине II",
    year: "XVIII век",
    desc: "Основательница города, повелевшая заложить поселение на берегу Волги",
    image: "https://cdn.poehali.dev/projects/e322d745-94dc-424f-bff6-80967268bcb6/files/0994fe57-a319-4f2c-a63f-6d304c89f4ef.jpg",
  },
  {
    href: "/monuments/alley",
    title: "Аллея Героев",
    year: "XX век",
    desc: "Бюсты Героев Советского Союза и Героев Социалистического Труда",
    image: "https://cdn.poehali.dev/projects/e322d745-94dc-424f-bff6-80967268bcb6/files/1300d878-156e-4f5d-97e5-f30ce7c2f679.jpg",
  },
  {
    href: "/monuments/madonna",
    title: "Мадонна Победы",
    year: "1975 год",
    desc: "Скорбящая мать с дитём — символ боли и надежды",
    image: "https://cdn.poehali.dev/projects/e322d745-94dc-424f-bff6-80967268bcb6/files/ad27f75e-711d-4c65-b471-b11e45558204.jpg",
  },
  {
    href: "/monuments/norwegian",
    title: "Норвежский учёный",
    year: "XX век",
    desc: "Дань уважения исследователю, чья судьба связана с Поволжьем",
    image: "https://cdn.poehali.dev/projects/e322d745-94dc-424f-bff6-80967268bcb6/files/8af8d1d9-4a0f-4b1b-9340-6cef813a4c47.jpg",
  },
  {
    href: "/monuments/tank",
    title: "Танк-памятник Т-34",
    year: "1970-е",
    desc: "Легендарная боевая машина — символ воинской доблести",
    image: "https://cdn.poehali.dev/projects/e322d745-94dc-424f-bff6-80967268bcb6/files/bec79a21-e764-4491-bafe-ed2852afc916.jpg",
  },
  {
    href: "/monuments/flame",
    title: "Вечный огонь",
    year: "1967 год",
    desc: "Негасимое пламя в честь всех, кто не вернулся с полей сражений",
    image: "https://cdn.poehali.dev/projects/e322d745-94dc-424f-bff6-80967268bcb6/files/d252d978-5418-4499-b247-3c003c1bf373.jpg",
  },
];

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      <section id="monuments" className="bg-white px-6 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Город Маркс</p>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-16 leading-tight max-w-2xl">
            Памятники и памятные места
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {monuments.map((m) => (
              <Link
                key={m.href}
                to={m.href}
                className="group block border border-neutral-200 hover:border-neutral-900 transition-colors duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">{m.year}</p>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-tight">{m.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">{m.desc}</p>
                  <span className="text-xs uppercase tracking-wide text-neutral-900 border-b border-neutral-900 pb-0.5 group-hover:border-neutral-400 group-hover:text-neutral-400 transition-colors">
                    Читать подробнее →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Promo />
      <Footer />
    </main>
  );
};

export default Index;
