import { Link } from "react-router";

export function Header() {
  return (
    <header className="border-b-2 border-gray-300 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-12 h-12 border-2 border-gray-800 flex items-center justify-center">
            <span className="text-sm font-mono">LOGO</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link to="/search" className="text-gray-700 hover:text-gray-900 font-mono">
            Parcourir les cours
          </Link>
          <Link to="/" className="text-gray-700 hover:text-gray-900 font-mono">
            Comment ça marche
          </Link>
          <Link to="/" className="text-gray-700 hover:text-gray-900 font-mono">
            Pour les coachs
          </Link>
          <button className="px-6 py-2 border-2 border-gray-800 hover:bg-gray-100 font-mono">
            Connexion
          </button>
        </nav>
      </div>
    </header>
  );
}