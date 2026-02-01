const Hero = () => {
  return (
    <section className="relative py-8 md:py-12 gradient-pharmaceutical overflow-hidden">
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary-accent/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary-accent/10 blur-3xl" />
      </div>

      <div className="px-4 md:px-8 relative z-10">
        <div className="flex justify-center items-center">
          {/* Contenedor con ancho máximo ampliado (90% de la pantalla o hasta 1400px) */}
          <div className="relative w-full max-w-[1400px]">
            <img
              src="/images/products/banner-descuento.png"
              alt="Banner Principal"
              className="rounded-3xl shadow-xl w-full h-auto object-contain"
            />
            
            {/* Sombras decorativas suaves en las esquinas */}
            <div className="absolute -top-3 -right-3 w-20 h-20 bg-primary/20 rounded-3xl -z-10" />
            <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-accent/20 rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
