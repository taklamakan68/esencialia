import { Link } from "react-router-dom";
import { Dumbbell, Pill, Zap, Atom, Droplet, Diamond, ArrowRight } from "lucide-react";
import { categories } from "@/data/products";

const iconMap: Record<string, React.ElementType> = {
  Dumbbell,
  Pill,
  Zap,
  Atom,
  Droplet,
  Diamond,
};

const Categories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Categorías principales
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explora nuestra selección de complementos de parafarmacia, 
            organizados por objetivo y necesidad nutricional.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = iconMap[category.icon] || Pill;
            return (
              <Link
                key={category.id}
                to={`/catalog?category=${category.id}`}
                className="group"
              >
                <div className="clinical-card p-6 text-center h-full flex flex-col items-center justify-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary-accent transition-colors">
                    <Icon className="w-7 h-7 text-primary-accent group-hover:text-primary-accent-foreground transition-colors" />
                  </div>
                  <h3 className="font-medium text-foreground text-sm">
                    {category.name}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {category.productCount} productos
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 text-primary-accent hover:underline font-medium"
          >
            Ver todos los productos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
