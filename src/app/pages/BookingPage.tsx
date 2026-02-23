import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Calendar, Clock, AlertCircle } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function BookingPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<string[]>([]);

  const classData = {
    name: "Yoga Vinyasa Flow",
    instructor: "Sarah Johnson",
    price: 25,
  };

  const availableDates = [
    "2026-02-24",
    "2026-02-26",
    "2026-02-28",
    "2026-03-01",
    "2026-03-03",
    "2026-03-05",
  ];

  const timeSlots = [
    "09h00",
    "10h30",
    "14h00",
    "16h00",
    "18h00",
    "19h30",
  ];

  const handleConfirm = () => {
    const newErrors: string[] = [];

    if (!selectedDate) newErrors.push("Veuillez sélectionner une date");
    if (!selectedTime) newErrors.push("Veuillez sélectionner un horaire");
    if (!formData.name.trim()) newErrors.push("Le nom est requis");
    if (!formData.email.trim()) newErrors.push("L'email est requis");
    if (!formData.phone.trim()) newErrors.push("Le téléphone est requis");

    setErrors(newErrors);

    if (newErrors.length === 0) {
      navigate(`/payment/${id}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Back Navigation */}
          <button
            onClick={() => navigate(`/class/${id}`)}
            className="mb-6 font-mono text-sm hover:underline"
          >
            ← RETOUR AUX DÉTAILS DU COURS
          </button>

          <h1 className="text-4xl mb-8 font-mono">RÉSERVEZ VOTRE COURS</h1>

          {/* Error Messages */}
          {errors.length > 0 && (
            <div className="mb-6 border-4 border-red-600 bg-red-50 p-6">
              <div className="flex items-start gap-3">
                <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-mono mb-2 text-red-600">VEUILLEZ CORRIGER LES ERREURS :</h3>
                  <ul className="space-y-1">
                    {errors.map((error, index) => (
                      <li key={index} className="font-mono text-sm text-red-600">
                        • {error}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-3 gap-8">
            {/* Left Column - Booking Form */}
            <div className="col-span-2 space-y-6">
              {/* Date Picker */}
              <div className="bg-white border-2 border-gray-300 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={24} />
                  <h2 className="text-2xl font-mono">SÉLECTIONNEZ UNE DATE</h2>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {availableDates.map((date) => {
                    const dateObj = new Date(date);
                    const isSelected = selectedDate === date;
                    return (
                      <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`p-4 border-2 font-mono transition-all ${
                          isSelected
                            ? "border-gray-800 bg-gray-800 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                            : "border-gray-300 hover:border-gray-800 bg-white"
                        }`}
                      >
                        <div className="text-sm">{dateObj.toLocaleDateString('fr-FR', { weekday: 'short' })}</div>
                        <div className="text-2xl">{dateObj.getDate()}</div>
                        <div className="text-xs">{dateObj.toLocaleDateString('fr-FR', { month: 'short' })}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slot Selector */}
              <div className="bg-white border-2 border-gray-300 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={24} />
                  <h2 className="text-2xl font-mono">SÉLECTIONNEZ UN HORAIRE</h2>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((time) => {
                    const isSelected = selectedTime === time;
                    return (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-4 border-2 font-mono transition-all ${
                          isSelected
                            ? "border-gray-800 bg-gray-800 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                            : "border-gray-300 hover:border-gray-800 bg-white"
                        }`}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* User Info Form */}
              <div className="bg-white border-2 border-gray-300 p-6">
                <h2 className="text-2xl mb-6 font-mono">VOS INFORMATIONS</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block font-mono mb-2 text-sm">
                      NOM COMPLET <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Entrez votre nom complet"
                      className={`w-full px-4 py-3 border-2 outline-none font-mono ${
                        errors.some(e => e.includes("nom")) ? "border-red-600" : "border-gray-300 focus:border-gray-800"
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block font-mono mb-2 text-sm">
                      ADRESSE EMAIL <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre.email@exemple.com"
                      className={`w-full px-4 py-3 border-2 outline-none font-mono ${
                        errors.some(e => e.includes("email")) ? "border-red-600" : "border-gray-300 focus:border-gray-800"
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block font-mono mb-2 text-sm">
                      TÉLÉPHONE <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+33 1 23 45 67 89"
                      className={`w-full px-4 py-3 border-2 outline-none font-mono ${
                        errors.some(e => e.includes("téléphone")) ? "border-red-600" : "border-gray-300 focus:border-gray-800"
                      }`}
                    />
                  </div>
                </div>

                <p className="mt-4 text-xs text-gray-500 font-mono">
                  * Champs obligatoires
                </p>
              </div>
            </div>

            {/* Right Column - Summary */}
            <div className="col-span-1">
              <div className="bg-white border-4 border-gray-800 p-6 sticky top-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-2xl mb-6 font-mono">RÉCAPITULATIF</h2>

                <div className="space-y-4 mb-6 pb-6 border-b-2 border-gray-300">
                  <div>
                    <p className="text-sm text-gray-600 font-mono mb-1">COURS</p>
                    <p className="font-mono">{classData.name}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 font-mono mb-1">INSTRUCTEUR</p>
                    <p className="font-mono">{classData.instructor}</p>
                  </div>

                  {selectedDate && (
                    <div>
                      <p className="text-sm text-gray-600 font-mono mb-1">DATE</p>
                      <p className="font-mono">
                        {new Date(selectedDate).toLocaleDateString('fr-FR', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  )}

                  {selectedTime && (
                    <div>
                      <p className="text-sm text-gray-600 font-mono mb-1">HORAIRE</p>
                      <p className="font-mono">{selectedTime}</p>
                    </div>
                  )}
                </div>

                <div className="mb-6 pb-6 border-b-2 border-gray-300">
                  <div className="flex justify-between items-center">
                    <span className="font-mono">Sous-total</span>
                    <span className="font-mono">{classData.price}€</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-mono">Total</span>
                    <span className="text-2xl font-mono">{classData.price}€</span>
                  </div>
                </div>

                {/* Primary CTA */}
                <button
                  onClick={handleConfirm}
                  className="w-full bg-gray-800 text-white px-6 py-4 text-lg font-mono hover:bg-gray-700 transition-colors"
                >
                  CONFIRMER LA RÉSERVATION
                </button>

                <p className="mt-4 text-xs text-gray-500 font-mono text-center">
                  Vous serez redirigé vers le paiement
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}