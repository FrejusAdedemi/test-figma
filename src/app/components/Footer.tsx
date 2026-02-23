import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t-2 border-gray-300 bg-gray-50 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-mono mb-4 text-sm">À PROPOS</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 text-sm">Qui sommes-nous</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm">Carrières</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm">Presse</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-mono mb-4 text-sm">SUPPORT</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 text-sm">Centre d'aide</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm">Nous contacter</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-mono mb-4 text-sm">LÉGAL</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 text-sm">Conditions d'utilisation</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm">Politique de confidentialité</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm">Politique des cookies</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-mono mb-4 text-sm">RÉSEAUX SOCIAUX</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 text-sm">Facebook</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm">Instagram</Link></li>
              <li><Link to="/" className="text-gray-600 text-sm">Twitter</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-gray-300 mt-8 pt-8">
          <p className="text-gray-600 text-sm text-center font-mono">
            © 2026 Réservation de Cours Sportifs. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}