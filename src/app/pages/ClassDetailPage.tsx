import { useNavigate, useParams } from "react-router";
import { Star, MapPin, Clock, Users, Calendar } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function ClassDetailPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const classData = {
    name: "Yoga Vinyasa Flow",
    instructor: "Sarah Johnson",
    price: 25,
    rating: 4.8,
    reviews: 124,
    distance: 2.3,
    level: "Intermédiaire",
    duration: "60 min",
    capacity: 20,
    description: "Rejoignez-nous pour un cours énergisant de Vinyasa Flow qui relie la respiration au mouvement. Parfait pour ceux qui ont une certaine expérience du yoga et qui souhaitent approfondir leur pratique. Nous enchaînerons une série de postures qui développent la force, la flexibilité et la pleine conscience. Tout l'équipement est fourni.",
    schedule: [
      { day: "Lundi", time: "09h00 - 10h00" },
      { day: "Mercredi", time: "09h00 - 10h00" },
      { day: "Vendredi", time: "18h00 - 19h00" },
      { day: "Samedi", time: "10h00 - 11h00" },
    ],
  };

  const reviews = [
    { id: 1, author: "Emily R.", rating: 5, date: "Il y a 2 semaines", comment: "Sarah est une instructrice incroyable ! Le flow est stimulant mais accessible. Je recommande vivement." },
    { id: 2, author: "David M.", rating: 5, date: "Il y a 1 mois", comment: "Excellent cours, parfait pour le niveau intermédiaire. Le studio est propre et bien équipé." },
    { id: 3, author: "Jessica T.", rating: 4, date: "Il y a 1 mois", comment: "J'ai vraiment apprécié ce cours. J'aimerais voir plus d'options en soirée disponibles." },
    { id: 4, author: "Mark L.", rating: 5, date: "Il y a 2 mois", comment: "Je viens depuis 3 mois maintenant. Le meilleur cours de yoga que j'ai trouvé dans la région !" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Back Navigation */}
          <button
            onClick={() => navigate("/search")}
            className="mb-6 font-mono text-sm hover:underline"
          >
            ← RETOUR AUX RÉSULTATS
          </button>

          <div className="grid grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="col-span-2">
              {/* Class Photo Placeholder */}
              <div className="bg-gray-200 h-96 border-2 border-gray-300 mb-6 flex items-center justify-center">
                <span className="font-mono text-gray-500 text-xl">PHOTO DU COURS</span>
              </div>

              {/* Title and Instructor */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl mb-2 font-mono">{classData.name}</h1>
                    <p className="text-xl text-gray-600 font-mono">avec {classData.instructor}</p>
                  </div>
                  <div className="border-2 border-gray-800 px-4 py-2 font-mono">
                    {classData.level}
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Star size={20} className="fill-gray-800 text-gray-800" />
                    <span className="font-mono">{classData.rating}</span>
                    <span className="font-mono">({classData.reviews} avis)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={20} />
                    <span className="font-mono">à {classData.distance} km</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={20} />
                    <span className="font-mono">{classData.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={20} />
                    <span className="font-mono">Max {classData.capacity}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8 pb-8 border-b-2 border-gray-300">
                <h2 className="text-2xl mb-4 font-mono">DESCRIPTION</h2>
                <p className="text-gray-700 leading-relaxed font-mono">
                  {classData.description}
                </p>
              </div>

              {/* Schedule */}
              <div className="mb-8 pb-8 border-b-2 border-gray-300">
                <h2 className="text-2xl mb-4 font-mono">HORAIRES</h2>
                <div className="space-y-3">
                  {classData.schedule.map((slot, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border-2 border-gray-300 bg-gray-50">
                      <Calendar size={20} className="text-gray-600" />
                      <span className="font-mono flex-1">{slot.day}</span>
                      <span className="font-mono text-gray-600">{slot.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews Section */}
              <div className="mb-8">
                <h2 className="text-2xl mb-6 font-mono">AVIS ({reviews.length})</h2>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="pb-6 border-b-2 border-gray-300 last:border-0">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 border-2 border-gray-800 flex items-center justify-center">
                            <span className="font-mono text-sm">{review.author[0]}</span>
                          </div>
                          <div>
                            <p className="font-mono">{review.author}</p>
                            <p className="text-sm text-gray-500 font-mono">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={16} className="fill-gray-800 text-gray-800" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 font-mono text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="col-span-1">
              <div className="border-4 border-gray-800 p-6 bg-white sticky top-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="mb-6">
                  <div className="text-4xl font-mono mb-2">£{classData.price}</div>
                  <p className="text-sm text-gray-600 font-mono">par séance</p>
                </div>

                {/* Primary CTA */}
                <button
                  onClick={() => navigate(`/booking/${id}`)}
                  className="w-full bg-gray-800 text-white px-6 py-4 text-lg font-mono hover:bg-gray-700 transition-colors mb-4"
                >
                  RESERVER MAINTENANT
                </button>

                <div className="space-y-3 pt-6 border-t-2 border-gray-300">
                  <div className="flex justify-between font-mono text-sm">
                    <span className="text-gray-600">Confirmation immédiate</span>
                    <span>✓</span>
                  </div>
                  <div className="flex justify-between font-mono text-sm">
                    <span className="text-gray-600">Annulation gratuite</span>
                    <span>✓</span>
                  </div>
                  <div className="flex justify-between font-mono text-sm">
                    <span className="text-gray-600">Équipement fourni</span>
                    <span>✓</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t-2 border-gray-300">
                  <p className="text-xs text-gray-500 font-mono text-center">
                    Réservation sécurisée · Option de paiement différé disponible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}