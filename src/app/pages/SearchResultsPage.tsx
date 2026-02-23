import { useState } from "react";
import { useNavigate } from "react-router";
import { Star, MapPin, MessageCircle } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function SearchResultsPage() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    activityType: [] as string[],
    priceRange: [0, 100] as [number, number],
    distance: 10,
    level: [] as string[],
    timeAvailability: [] as string[],
  });

  const classes = [
    { id: 1, name: "Yoga Vinyasa Flow", instructor: "Sarah Johnson", price: 25, rating: 4.8, reviews: 124, distance: 2.3, level: "Intermédiaire", type: "Yoga" },
    { id: 2, name: "Bootcamp HIIT", instructor: "Mike Chen", price: 30, rating: 4.9, reviews: 89, distance: 1.5, level: "Avancé", type: "Fitness" },
    { id: 3, name: "Natation débutant", instructor: "Emma Davis", price: 35, rating: 4.7, reviews: 156, distance: 3.1, level: "Débutant", type: "Natation" },
    { id: 4, name: "Pilates Power", instructor: "Lisa Anderson", price: 28, rating: 4.8, reviews: 92, distance: 1.8, level: "Intermédiaire", type: "Pilates" },
    { id: 5, name: "Cours de Spinning", instructor: "James Wilson", price: 22, rating: 4.6, reviews: 201, distance: 4.2, level: "Débutant", type: "Cyclisme" },
    { id: 6, name: "Yoga avancé", instructor: "Rachel Green", price: 32, rating: 4.9, reviews: 67, distance: 2.7, level: "Avancé", type: "Yoga" },
  ];

  const toggleFilter = (category: keyof typeof filters, value: string) => {
    const currentValues = filters[category] as string[];
    if (currentValues.includes(value)) {
      setFilters({ ...filters, [category]: currentValues.filter(v => v !== value) });
    } else {
      setFilters({ ...filters, [category]: [...currentValues, value] });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <div className="flex-1 flex">
        {/* Left Sidebar - Filters */}
        <aside className="w-80 border-r-2 border-gray-300 p-6 bg-gray-50">
          <h2 className="text-xl mb-6 font-mono">FILTRES</h2>

          {/* Activity Type */}
          <div className="mb-8 pb-8 border-b-2 border-gray-300">
            <h3 className="font-mono mb-4 text-sm">TYPE D'ACTIVITÉ</h3>
            <div className="space-y-2">
              {["Yoga", "Fitness", "Natation", "Cyclisme", "Pilates"].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border-2 border-gray-800"
                    onChange={() => toggleFilter("activityType", type)}
                  />
                  <span className="text-sm font-mono">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-8 pb-8 border-b-2 border-gray-300">
            <h3 className="font-mono mb-4 text-sm">PRIX</h3>
            <div className="space-y-4">
              <input
                type="range"
                min="0"
                max="100"
                value={filters.priceRange[1]}
                onChange={(e) => setFilters({ ...filters, priceRange: [0, parseInt(e.target.value)] })}
                className="w-full"
              />
              <div className="flex justify-between font-mono text-sm">
                <span>0€</span>
                <span>{filters.priceRange[1]}€</span>
              </div>
            </div>
          </div>

          {/* Distance */}
          <div className="mb-8 pb-8 border-b-2 border-gray-300">
            <h3 className="font-mono mb-4 text-sm">DISTANCE</h3>
            <div className="space-y-4">
              <input
                type="range"
                min="1"
                max="20"
                value={filters.distance}
                onChange={(e) => setFilters({ ...filters, distance: parseInt(e.target.value) })}
                className="w-full"
              />
              <div className="font-mono text-sm">Dans un rayon de {filters.distance} km</div>
            </div>
          </div>

          {/* Level */}
          <div className="mb-8 pb-8 border-b-2 border-gray-300">
            <h3 className="font-mono mb-4 text-sm">NIVEAU</h3>
            <div className="space-y-2">
              {["Débutant", "Intermédiaire", "Avancé"].map((level) => (
                <label key={level} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border-2 border-gray-800"
                    onChange={() => toggleFilter("level", level)}
                  />
                  <span className="text-sm font-mono">{level}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Time Availability */}
          <div className="mb-8">
            <h3 className="font-mono mb-4 text-sm">HORAIRES</h3>
            <div className="space-y-2">
              {["Matin", "Après-midi", "Soir", "Week-end"].map((time) => (
                <label key={time} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border-2 border-gray-800"
                    onChange={() => toggleFilter("timeAvailability", time)}
                  />
                  <span className="text-sm font-mono">{time}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content - Class Cards Grid */}
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl mb-2 font-mono">RÉSULTATS DE RECHERCHE</h1>
            <p className="text-gray-600 font-mono">{classes.length} cours trouvés</p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {classes.map((classItem) => (
              <div
                key={classItem.id}
                className="border-2 border-gray-300 bg-white hover:border-gray-800 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
                onClick={() => navigate(`/class/${classItem.id}`)}
              >
                {/* Image Placeholder */}
                <div className="bg-gray-200 h-48 border-b-2 border-gray-300 flex items-center justify-center">
                  <span className="font-mono text-gray-500">IMAGE DU COURS</span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-mono flex-1">{classItem.name}</h3>
                    <span className="border-2 border-gray-800 px-2 py-1 text-xs font-mono ml-2">
                      {classItem.level}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 font-mono mb-4">
                    {classItem.instructor}
                  </p>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="fill-gray-800" />
                      <span className="font-mono text-sm">{classItem.rating}</span>
                      <span className="text-gray-500 font-mono text-sm">({classItem.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <MapPin size={16} />
                      <span className="font-mono text-sm">{classItem.distance} km</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t-2 border-gray-300">
                    <span className="text-2xl font-mono">{classItem.price}€</span>
                    <button className="px-4 py-2 border-2 border-gray-800 font-mono text-sm hover:bg-gray-100">
                      VOIR
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Chatbot Bubble */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 shadow-lg">
        <MessageCircle size={28} />
      </button>

      <Footer />
    </div>
  );
}