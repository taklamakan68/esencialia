import { Shield, FlaskConical, Microscope, Award, BadgeCheck, Leaf } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "100% natural",
    description: "Complementos totalmente naturales con riesgo controlado"
  },
  {
    icon: FlaskConical,
    title: "Fórmulas clínicas",
    description: "Dosificaciones basadas en estudios científicos publicados"
  },
  {
    icon: Microscope,
    title: "Eficacia comprobada",
    description: "Cada producto está verificado por laboratorios independientes"
  },
  {
    icon: Award,
    title: "Pago seguro",
    description: "Paga contrareembolso o mediante transferencia bancaria"
  },
  {
    icon: BadgeCheck,
    title: "Sin aditivos",
    description: "Complementos libres de aditivos dañinos para la salud"
  },
  {
    icon: Leaf,
    title: "Origen trazable",
    description: "Materias primas de proveedores certificados"
  }
];

const TrustSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="trust-badge mb-4">
            <Shield className="w-4 h-4" />
            Máxima calidad
          </span>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Tu salud, nuestra prioridad
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nos comprometemos con los más altos estándares de calidad y seguridad. 
            Cada producto pasa por rigurosos controles antes de llegar a tus manos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="clinical-card p-6 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
