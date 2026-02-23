import { useState } from "react";
import { useNavigate } from "react-router";
import { CreditCard, Lock, ShieldCheck } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function PaymentPage() {
  const navigate = useNavigate();

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const bookingDetails = {
    className: "Yoga Vinyasa Flow",
    instructor: "Sarah Johnson",
    date: "Vendredi 28 février 2026",
    time: "09h00",
    price: 25,
  };

  const handlePayment = () => {
    // In a real app, this would process the payment
    alert("Paiement réussi ! Réservation confirmée.");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-4xl mb-8 font-mono">PAIEMENT</h1>

          <div className="grid grid-cols-3 gap-8">
            {/* Left Column - Payment Form */}
            <div className="col-span-2">
              <div className="bg-white border-2 border-gray-300 p-6 mb-6">
                <div className="flex items-center gap-2 mb-6">
                  <CreditCard size={24} />
                  <h2 className="text-2xl font-mono">DÉTAILS DE PAIEMENT</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block font-mono mb-2 text-sm">
                      NUMÉRO DE CARTE
                    </label>
                    <input
                      type="text"
                      value={paymentData.cardNumber}
                      onChange={(e) => setPaymentData({ ...paymentData, cardNumber: e.target.value })}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-800 outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-mono mb-2 text-sm">
                      NOM DU TITULAIRE
                    </label>
                    <input
                      type="text"
                      value={paymentData.cardName}
                      onChange={(e) => setPaymentData({ ...paymentData, cardName: e.target.value })}
                      placeholder="Nom sur la carte"
                      className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-800 outline-none font-mono"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono mb-2 text-sm">
                        DATE D'EXPIRATION
                      </label>
                      <input
                        type="text"
                        value={paymentData.expiryDate}
                        onChange={(e) => setPaymentData({ ...paymentData, expiryDate: e.target.value })}
                        placeholder="MM/AA"
                        maxLength={5}
                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-800 outline-none font-mono"
                      />
                    </div>

                    <div>
                      <label className="block font-mono mb-2 text-sm">
                        CVV
                      </label>
                      <input
                        type="text"
                        value={paymentData.cvv}
                        onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
                        placeholder="123"
                        maxLength={3}
                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-gray-800 outline-none font-mono"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="bg-white border-2 border-gray-300 p-6">
                <div className="flex items-center gap-4">
                  <ShieldCheck size={48} className="text-green-600" />
                  <div>
                    <h3 className="font-mono mb-1">PAIEMENT SÉCURISÉ</h3>
                    <p className="text-sm text-gray-600 font-mono">
                      Vos informations de paiement sont cryptées et sécurisées. Nous utilisons un cryptage SSL standard.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t-2 border-gray-300">
                  <div className="flex items-center gap-4 justify-center">
                    <div className="w-16 h-10 border-2 border-gray-300 flex items-center justify-center">
                      <span className="font-mono text-xs">VISA</span>
                    </div>
                    <div className="w-16 h-10 border-2 border-gray-300 flex items-center justify-center">
                      <span className="font-mono text-xs">MC</span>
                    </div>
                    <div className="w-16 h-10 border-2 border-gray-300 flex items-center justify-center">
                      <span className="font-mono text-xs">AMEX</span>
                    </div>
                    <div className="w-16 h-10 border-2 border-gray-300 flex items-center justify-center">
                      <Lock size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="col-span-1">
              <div className="bg-white border-4 border-gray-800 p-6 sticky top-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-2xl mb-6 font-mono">RÉCAPITULATIF</h2>

                <div className="space-y-4 mb-6 pb-6 border-b-2 border-gray-300">
                  <div>
                    <p className="text-sm text-gray-600 font-mono mb-1">COURS</p>
                    <p className="font-mono">{bookingDetails.className}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 font-mono mb-1">INSTRUCTEUR</p>
                    <p className="font-mono">{bookingDetails.instructor}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 font-mono mb-1">DATE & HORAIRE</p>
                    <p className="font-mono">{bookingDetails.date}</p>
                    <p className="font-mono">{bookingDetails.time}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b-2 border-gray-300">
                  <div className="flex justify-between font-mono">
                    <span className="text-gray-600">Cours</span>
                    <span>{bookingDetails.price}€</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span className="text-gray-600">Frais de service</span>
                    <span>0€</span>
                  </div>
                  <div className="flex justify-between font-mono">
                    <span className="text-gray-600">Taxes</span>
                    <span>0€</span>
                  </div>
                </div>

                <div className="mb-6 pb-6 border-b-4 border-gray-800">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-mono">TOTAL</span>
                    <span className="text-3xl font-mono">{bookingDetails.price}€</span>
                  </div>
                </div>

                {/* Primary CTA */}
                <button
                  onClick={handlePayment}
                  className="w-full bg-gray-800 text-white px-6 py-4 text-lg font-mono hover:bg-gray-700 transition-colors mb-4"
                >
                  PAYER MAINTENANT
                </button>

                <p className="text-xs text-gray-500 font-mono text-center">
                  En finalisant cet achat vous acceptez nos Conditions d'utilisation et notre Politique de confidentialité
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-blue-50 border-2 border-blue-300 p-6">
            <h3 className="font-mono mb-3">ET ENSUITE ?</h3>
            <ul className="space-y-2 font-mono text-sm text-gray-700">
              <li>• Vous recevrez un email de confirmation avec les détails de votre réservation</li>
              <li>• Une invitation calendrier sera envoyée à votre email</li>
              <li>• Vous pouvez annuler ou reporter jusqu'à 24h avant le cours</li>
              <li>• Arrivez 10 minutes en avance pour l'enregistrement</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}