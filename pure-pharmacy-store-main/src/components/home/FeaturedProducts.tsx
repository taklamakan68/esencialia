import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/data/products";

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-3 bg-secondary">  {/* Cambio: py-16 → py-8 (de 4rem a 2rem) */}
  <div className="container mx-auto px-4">
    <div className="text-center mb-3 md:mb-6 relative">
  <h2 className="text-xl md:text-3xl font-bold text-foreground mb-0 md:mb-2">
    Nuestros Productos
  </h2>

          {/* El enlace "Ver todos" ahora se posiciona de forma absoluta a la derecha en PC */}
          <Link
            to="/catalog"
            className="hidden md:inline-flex items-center gap-2 text-primary-accent hover:underline font-medium absolute right-0 bottom-0"
          >
            Ver todos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
  {featuredProducts.map((product, index) => (
    <div
      key={product.id}
      className="animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <ProductCard product={product} />
    </div>
  ))}
</div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/catalog" className="btn-pharmaceutical-outline">
            Ver todos los productos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
