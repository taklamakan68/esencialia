import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, Phone, Shield, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount, setIsOpen } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      {/* Top bar */}
      <div className="bg-primary border-b border-border">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm text-primary-foreground">
            <div className="hidden md:flex items-center gap-6">
              <span className="flex items-center gap-2">
                <Truck className="w-4 h-4" />
                Envío gratis +50€
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Productos naturales
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Pide información: 634 22 94 49</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
  <div className="flex items-center justify-between gap-4">
    {/* Logo */}
    <Link to="/" className="flex items-center gap-2">
      <img
        src="/images/esencialia_logo.png"
        alt="Esencialia"
        className="w-10 h-10 object-contain"
      />

      <div className="hidden sm:block">
        <h1 className="text-green-600 text-xl font-bold">
          Esencialia
        </h1>
        <p className="text-xs text-muted-foreground">
          Complementos de parafarmacia
        </p>
      </div>
    </Link>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar complementos, en cápsulas, en polvo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="clinical-input pl-12 pr-4"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="relative flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-foreground" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary-accent text-primary-accent-foreground text-xs font-bold flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-primary transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <form onSubmit={handleSearch} className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="clinical-input pl-12"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>
        </form>
      </div>

      {/* Navigation (Desktop) */}
      <nav className="hidden md:block border-t border-border">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-6 py-3">
            <li>
              <Link to="/catalog" className="text-sm font-medium text-foreground hover:text-primary-accent transition-colors">
                Todos
              </Link>
            </li>
            <li>
              <Link to="/catalog?category=Colageno" className="text-sm font-medium text-muted-foreground hover:text-primary-accent transition-colors">
                Articulaciones y Colágeno
              </Link>
            </li>
            <li>
              <Link to="/catalog?category=Defensas" className="text-sm font-medium text-muted-foreground hover:text-primary-accent transition-colors">
                Defensas e Inmunidad
              </Link>
            </li>
            <li>
              <Link to="/catalog?category=Digestion" className="text-sm font-medium text-muted-foreground hover:text-primary-accent transition-colors">
                Digestión y Detox
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <Link to="/catalog" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-foreground font-medium">
                  Todos los productos
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=Colageno" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-muted-foreground">
                  Articular
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=Defensas" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-muted-foreground">
                  Bienestar
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=Digestion" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-muted-foreground">
                  Control de Peso
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
