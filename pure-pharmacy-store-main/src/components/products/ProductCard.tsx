import { Link } from "react-router-dom";
import { Star, Plus, Shield } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="clinical-card overflow-hidden h-full flex flex-col">
        {/* Image container */}
        <div className="relative aspect-square bg-secondary overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {product.originalPrice && (
            <span className="absolute top-3 left-3 px-2 py-1 rounded-full bg-primary-accent text-primary-accent-foreground text-xs font-medium">
              -{Math.round((1 - product.price / product.originalPrice) * 100)}%
            </span>
          )}
          {product.certifications.length > 0 && (
            <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-background/90 backdrop-blur-sm">
              <Shield className="w-3 h-3 text-primary-accent" />
              <span className="text-xs font-medium text-foreground">
                {product.certifications[0]}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <span className="text-xs text-muted-foreground uppercase tracking-wide">
            {product.brand}
          </span>
          <h3 className="font-medium text-foreground mt-1 line-clamp-2 group-hover:text-primary-accent transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {product.dosage}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? "fill-primary-accent text-primary-accent"
                      : "text-muted"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviewCount})
            </span>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between mt-auto pt-4">
            <div>
              <span className="price-tag">€{product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="ml-2 text-sm text-muted-foreground line-through">
                  €{product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <button
              onClick={handleAddToCart}
              className="w-10 h-10 rounded-lg bg-primary-accent text-primary-accent-foreground flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
