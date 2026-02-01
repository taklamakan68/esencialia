import { Link } from "react-router-dom";
import { Shield, Award, Truck, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      {/* Trust section */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-4 rounded-lg bg-background">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Complementos naturales</h4>
                <p className="text-sm text-muted-foreground">Productos de parafarmacia</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-background">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Award className="w-6 h-6 text-primary-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Precios honestos</h4>
                <p className="text-sm text-muted-foreground">Mantenemos precios asequibles</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-background">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Envío rápido</h4>
                <p className="text-sm text-muted-foreground">1 - 3 días hábiles</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
<div className="container mx-auto px-4 py-12">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Brand */}
    <div className="md:col-span-1">
      <div className="flex items-center gap-2 mb-4">
        <img
          src="/images/esencialia_logo.png"
          alt="Esencialia"
          className="w-10 h-10 object-contain"
        />
        <span className="text-green-600 text-xl font-bold">Esencialia</span>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        Tu tienda natural de complementos de confianza. Productos de parafarmacia con precios honestos.
      </p>
    

            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> 634 22 94 49
              </span>
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> halcyonglobalretail@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Córdoba, España
              </span>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog?category=Colageno" className="text-sm text-muted-foreground hover:text-primary-accent transition-colors">
                  Articulaciones y Colágeno
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=Defensas" className="text-sm text-muted-foreground hover:text-primary-accent transition-colors">
                  Defensas e Inmunidad
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=Digestion" className="text-sm text-muted-foreground hover:text-primary-accent transition-colors">
                  Digestión y Detox
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Información</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/nosotros" className="text-sm text-muted-foreground hover:text-primary-accent transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link to="/politica-envios" className="text-sm text-muted-foreground hover:text-primary-accent transition-colors">
                  Envíos y devoluciones
                </Link>
              </li>
              <li>
                <Link to="/normativa" className="text-sm text-muted-foreground hover:text-primary-accent transition-colors">
                  Aviso Legal, Política <br></br>de Privacidad y Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Recibe ofertas exclusivas y consejos de salud de nuestros especialistas.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Tu email"
                className="clinical-input"
              />
              <button type="submit" className="btn-pharmaceutical">
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2025 Esencialia. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4">
              <span className="trust-badge">
                <Award className="w-4 h-4" /> Pago seguro
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
