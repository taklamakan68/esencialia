import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Truck, CreditCard, Check } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCart from "@/components/cart/FloatingCart";
import { useCart } from "@/context/CartContext";

const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);

  const shipping = total >= 50 ? 0 : 4.99;
  const finalTotal = total + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setOrderComplete(true);
      clearCart();
    }
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-success/20 mx-auto mb-6 flex items-center justify-center">
              <Check className="w-10 h-10 text-success" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              ¡Pedido confirmado!
            </h1>
            <p className="text-muted-foreground mb-8">
              Gracias por tu compra. Recibirás un email con los detalles del envío.
            </p>
            <Link to="/" className="btn-pharmaceutical">
              Volver a la tienda
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Tu carrito está vacío
          </h1>
          <Link to="/catalog" className="btn-pharmaceutical">
            Explorar productos
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <Link to="/catalog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary-accent mb-8">
          <ArrowLeft className="w-4 h-4" />
          Volver al catálogo
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout form */}
          <div className="lg:col-span-2">
            {/* Progress steps */}
            <div className="flex items-center gap-4 mb-8">
              {[
                { num: 1, label: "Datos" },
                { num: 2, label: "Envío" },
                { num: 3, label: "Pago" }
              ].map((s, i) => (
                <div key={s.num} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                    step >= s.num 
                      ? "bg-primary-accent text-primary-accent-foreground" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {step > s.num ? <Check className="w-5 h-5" /> : s.num}
                  </div>
                  <span className={`text-sm ${step >= s.num ? "text-foreground" : "text-muted-foreground"}`}>
                    {s.label}
                  </span>
                  {i < 2 && <div className="w-12 h-px bg-border" />}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="clinical-card p-6 space-y-6">
                  <h2 className="text-xl font-semibold text-foreground">Datos de contacto</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Nombre</label>
                      <input type="text" required className="clinical-input" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Apellidos</label>
                      <input type="text" required className="clinical-input" placeholder="Tus apellidos" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input type="email" required className="clinical-input" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Teléfono</label>
                    <input type="tel" required className="clinical-input" placeholder="+34 600 000 000" />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="clinical-card p-6 space-y-6">
                  <h2 className="text-xl font-semibold text-foreground">Dirección de envío</h2>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Dirección</label>
                    <input type="text" required className="clinical-input" placeholder="Calle, número, piso..." />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Código Postal</label>
                      <input type="text" required className="clinical-input" placeholder="28001" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Ciudad</label>
                      <input type="text" required className="clinical-input" placeholder="Madrid" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Provincia</label>
                      <input type="text" required className="clinical-input" placeholder="Madrid" />
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-primary flex items-center gap-3">
                    <Truck className="w-5 h-5 text-primary-accent" />
                    <div>
                      <p className="font-medium text-foreground">Envío estándar (24-48h)</p>
                      <p className="text-sm text-muted-foreground">
                        {shipping === 0 ? "¡Gratis!" : `€${shipping.toFixed(2)}`}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="clinical-card p-6 space-y-6">
                  <h2 className="text-xl font-semibold text-foreground">Método de pago</h2>
                  <div className="p-4 rounded-lg border-2 border-primary-accent bg-primary">
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-5 h-5 text-primary-accent" />
                      <span className="font-medium text-foreground">Tarjeta de crédito/débito</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Número de tarjeta</label>
                    <input type="text" required className="clinical-input" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Fecha de expiración</label>
                      <input type="text" required className="clinical-input" placeholder="MM/AA" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">CVV</label>
                      <input type="text" required className="clinical-input" placeholder="123" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="w-4 h-4 text-success" />
                    Pago seguro con encriptación SSL
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-6">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="btn-pharmaceutical-outline"
                  >
                    Atrás
                  </button>
                )}
                <button type="submit" className="btn-pharmaceutical ml-auto">
                  {step === 3 ? `Pagar €${finalTotal.toFixed(2)}` : "Continuar"}
                </button>
              </div>
            </form>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="clinical-card p-6 sticky top-24">
              <h3 className="font-semibold text-foreground mb-4">Resumen del pedido</h3>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-lg object-cover bg-secondary"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-foreground truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Cantidad: {item.quantity}
                      </p>
                      <p className="text-sm font-medium text-primary-accent">
                        €{(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="section-divider mb-4" />
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">€{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Envío</span>
                  <span className="text-foreground">
                    {shipping === 0 ? "Gratis" : `€${shipping.toFixed(2)}`}
                  </span>
                </div>
                {total < 50 && (
                  <p className="text-xs text-primary-accent">
                    ¡Añade €{(50 - total).toFixed(2)} más para envío gratis!
                  </p>
                )}
              </div>
              <div className="section-divider my-4" />
              <div className="flex justify-between text-lg font-bold">
                <span className="text-foreground">Total</span>
                <span className="text-primary-accent">€{finalTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingCart />
    </div>
  );
};

export default Checkout;
