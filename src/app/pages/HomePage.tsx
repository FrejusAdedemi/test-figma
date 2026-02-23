import { useState } from "react";
import { useNavigate } from "react-router";
import { Search, Dumbbell, Heart, Waves, Bike, Users, Flame } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function HomePage() {
  const navigate = useNavigate();
  const [activity, setActivity] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = () => {
    navigate("/search");
  };

  const categories = [
    { name: "Yoga", icon: Heart },
    { name: "Fitness", icon: Dumbbell },
    { name: "Natation", icon: Waves },
    { name: "Cyclisme", icon: Bike },
    { name: "Cours collectifs", icon: Users },
    { name: "HIIT", icon: Flame },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gray-100 border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl mb-6 font-mono">
              TROUVEZ VOTRE COURS SPORTIF IDÉAL
            </h1>
            <p className="text-xl text-gray-600 mb-12 font-mono">
              Réservez des cours de fitness, de yoga et d'activités sportives près de chez vous
            </p>

            {/* Search Bar */}
            <div className="bg-white border-4 border-gray-800 p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-left">
                  <label className="block text-sm font-mono mb-2">ACTIVITÉ</label>
                  <input
                    type="text"
                    placeholder="ex: Yoga, Natation"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-800 outline-none font-mono"
                  />
                </div>
                <div className="text-left">
                  <label className="block text-sm font-mono mb-2">LOCALISATION</label>
                  <input
                    type="text"
                    placeholder="Ville ou code postal"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-800 outline-none font-mono"
                  />
                </div>
                <div className="text-left">
                  <label className="block text-sm font-mono mb-2">DATE</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-800 outline-none font-mono"
                  />
                </div>
              </div>

              {/* Primary CTA */}
              <button
                onClick={handleSearch}
                className="w-full bg-gray-800 text-white px-8 py-4 text-lg font-mono hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
              >
                <Search size={24} />
                TROUVER UN COURS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 border-b-2 border-gray-300">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl mb-12 text-center font-mono">CATÉGORIES POPULAIRES</h2>
          <div className="grid grid-cols-6 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={handleSearch}
                  className="border-2 border-gray-300 p-8 hover:border-gray-800 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all bg-white"
                >
                  <Icon size={48} className="mx-auto mb-4 text-gray-700" />
                  <p className="font-mono text-sm">{category.name}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-24 h-24 border-2 border-gray-800 mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">1</span>
              </div>
              <h3 className="text-xl mb-3 font-mono">RECHERCHER</h3>
              <p className="text-gray-600 font-mono text-sm">
                Parcourez des milliers de cours dans votre région
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 border-2 border-gray-800 mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">2</span>
              </div>
              <h3 className="text-xl mb-3 font-mono">RÉSERVER</h3>
              <p className="text-gray-600 font-mono text-sm">
                Choisissez votre horaire et sécurisez votre place
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 border-2 border-gray-800 mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">3</span>
              </div>
              <h3 className="text-xl mb-3 font-mono">PARTICIPER</h3>
              <p className="text-gray-600 font-mono text-sm">
                Présentez-vous et profitez de votre parcours fitness
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}