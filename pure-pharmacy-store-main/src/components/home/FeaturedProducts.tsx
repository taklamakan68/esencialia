import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/data/products";

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        {/* HEMOS CAMBIADO ESTE DIV: quitamos el flex y añadimos text-center y relative */}
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl font-bold text-foreground mb-2">
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

        <div className="product-grid">
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
