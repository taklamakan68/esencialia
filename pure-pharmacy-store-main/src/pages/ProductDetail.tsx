import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Star, Shield, Plus, Minus, Check, AlertTriangle, ChevronRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCart from "@/components/cart/FloatingCart";
import ProductCard from "@/components/products/ProductCard";
import { getProductById, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Producto no encontrado
          </h1>
          <Link to="/catalog" className="btn-pharmaceutical">
            Volver al catálogo
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary-accent">Inicio</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/catalog" className="hover:text-primary-accent">Catálogo</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product image */}
          <div className="space-y-4">
            <div className="aspect-square bg-secondary rounded-2xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
{/* Certifications badges - Comentado porque se eliminaron las certificaciones
<div className="flex flex-wrap gap-2">
  {product.certifications?.map((cert) => (
    <span key={cert} className="trust-badge">
      <Shield className="w-3 h-3" />
      {cert}
    </span>
  ))}
</div>
*/}
          </div>

          {/* Product info - Prospectus style */}
          <div className="space-y-6">
            <div>
              <span className="text-sm text-muted-foreground uppercase tracking-wide">
                {product.brand}
              </span>
              <h1 className="text-3xl font-bold text-foreground mt-1">
                {product.name}
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-primary-accent text-primary-accent"
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} opiniones)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-primary-accent">
                €{product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    €{product.originalPrice.toFixed(2)}
                  </span>
                  <span className="px-2 py-1 rounded-full bg-success text-success-foreground text-sm font-medium">
                    Ahorra €{(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </>
              )}
            </div>

            {/* Dosage & Presentation */}
            <div className="clinical-card p-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Dosis:</span>
                <span className="font-medium text-foreground">{product.dosage}</span>
              </div>
              <div className="section-divider" />
              <div className="flex justify-between">
                <span className="text-muted-foreground">Presentación:</span>
                <span className="font-medium text-foreground">{product.presentation}</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Descripción</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Beneficios</h3>
              <ul className="grid grid-cols-2 gap-2">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-success shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Add to cart */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-primary transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="px-6 font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-primary transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <button onClick={handleAddToCart} className="btn-pharmaceutical flex-1">
                Añadir al carrito
              </button>
            </div>

            {/* Stock status */}
            <div className="flex items-center gap-2 text-sm">
              <div className={`w-2 h-2 rounded-full ${product.inStock ? "bg-success" : "bg-destructive"}`} />
              <span className={product.inStock ? "text-success" : "text-destructive"}>
                {product.inStock ? "En stock - Envío en 24-48h" : "Agotado"}
              </span>
            </div>
          </div>
        </div>

        {/* Technical info - Prospectus style */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Ingredients */}
          <div className="clinical-card p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary-accent" />
              Composición
            </h3>
            <ul className="space-y-2">
              {product.ingredients.map((ing, i) => (
                <li key={i} className="text-sm text-muted-foreground border-b border-border pb-2 last:border-0">
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          {/* Usage */}
          <div className="clinical-card p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <Check className="w-5 h-5 text-primary-accent" />
              Modo de empleo
            </h3>
            <p className="text-sm text-muted-foreground">{product.usage}</p>
          </div>

          {/* Warnings */}
          <div className="clinical-card p-6">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              Advertencias
            </h3>
            <ul className="space-y-2">
              {product.warnings.map((warning, i) => (
                <li key={i} className="text-sm text-muted-foreground">
                  • {warning}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Productos relacionados
            </h2>
            <div className="product-grid">
              {relatedProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
      <FloatingCart />
    </div>
  );
};

export default ProductDetail;
