import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, X, ChevronDown } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCart from "@/components/cart/FloatingCart";
import ProductCard from "@/components/products/ProductCard";
import { products, categories, searchProducts } from "@/data/products";

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  
  const selectedCategory = searchParams.get("category");
  const searchQuery = searchParams.get("search") || "";

  const filteredProducts = useMemo(() => {
    let result = products;
    
    if (searchQuery) {
      result = searchProducts(searchQuery);
    }
    
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }
    
    return result;
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (categoryId: string | null) => {
    if (categoryId) {
      searchParams.set("category", categoryId);
    } else {
      searchParams.delete("category");
    }
    setSearchParams(searchParams);
  };

  const clearFilters = () => {
    setSearchParams({});
  };

  const currentCategoryName = categories.find(c => c.id === selectedCategory)?.name || "Todos los productos";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {searchQuery ? `Resultados para "${searchQuery}"` : currentCategoryName}
          </h1>
          <p className="text-muted-foreground">
            {filteredProducts.length} productos encontrados
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filters sidebar - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24 space-y-6">
              <div className="clinical-card p-4">
                <h3 className="font-semibold text-foreground mb-4">Categorías</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => handleCategoryChange(null)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        !selectedCategory
                          ? "bg-primary text-primary-foreground font-medium"
                          : "text-muted-foreground hover:bg-primary/50"
                      }`}
                    >
                      Todos los productos
                    </button>
                  </li>
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => handleCategoryChange(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === category.id
                            ? "bg-primary text-primary-foreground font-medium"
                            : "text-muted-foreground hover:bg-primary/50"
                        }`}
                      >
                        {category.name}
                        
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {(selectedCategory || searchQuery) && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 text-sm text-primary-accent hover:underline"
                >
                  <X className="w-4 h-4" />
                  Limpiar filtros
                </button>
              )}
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Mobile filter toggle */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border"
              >
                <Filter className="w-4 h-4" />
                Filtros
                <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
              </button>

              {showFilters && (
                <div className="mt-4 p-4 rounded-lg border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-3">Categorías</h3>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => handleCategoryChange(null)}
                      className={`category-pill ${!selectedCategory ? "bg-primary-accent text-primary-accent-foreground" : ""}`}
                    >
                      Todos
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id)}
                        className={`category-pill ${selectedCategory === category.id ? "bg-primary-accent text-primary-accent-foreground" : ""}`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Product grid */}
            {filteredProducts.length > 0 ? (
              <div className="product-grid">
                {filteredProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center">
                  <Filter className="w-10 h-10 text-primary-accent" />
                </div>
                <h3 className="text-lg font-medium text-foreground mb-2">
                  No se encontraron productos
                </h3>
                <p className="text-muted-foreground mb-4">
                  Intenta con otros filtros o términos de búsqueda
                </p>
                <button onClick={clearFilters} className="btn-pharmaceutical">
                  Ver todos los productos
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <FloatingCart />
    </div>
  );
};

export default Catalog;
