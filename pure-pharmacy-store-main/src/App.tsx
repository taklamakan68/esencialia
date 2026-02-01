// src/app.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import CookieConsent, { CookieConsentStyles } from "@/components/CookieConsent";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import PoliticaEnvios from "./pages/PoliticaEnvios";
import Normativa from "./pages/Normativa";
import Nosotros from "./pages/Nosotros";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        {/* Estilos del consentimiento de cookies */}
        <CookieConsentStyles />
        
        {/* Componente que maneja el consentimiento */}
        <CookieConsent />
        
        {/* Toasters de la aplicación */}
        <Toaster />
        <Sonner />
        
        {/* Router y rutas */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/politica-envios" element={<PoliticaEnvios />} />
            <Route path="/normativa" element={<Normativa />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;