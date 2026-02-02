import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Users, Target, Eye, Shield, Leaf, BookOpen } from "lucide-react";

const Nosotros = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-gray-900">
        {/* Sección Principal */}
        <section className="relative py-20 bg-gradient-to-r from-green-50 to-emerald-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold mb-6 text-gray-900">
                Conoce <span className="text-green-600">Esencialia</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Dedicados a tu bienestar. Comprometidos con la excelencia.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-green-600 text-white rounded-full text-sm">
                  Fundada en 2024
                </span>
                <span className="px-4 py-2 bg-green-600 text-white rounded-full text-sm">
                  Productos 100% Naturales
                </span>
                
              </div>
            </div>
          </div>
        </section>

        {/* Nuestra Esencia */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-4xl font-bold mb-4">NUESTRA ESENCIA</h2>
              <div className="w-24 h-1 bg-green-600 mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong className="text-green-700">Esencialia</strong> surge del firme propósito de un equipo multidisciplinar que decidió volcar su saber y dedicación en el ámbito de la salud y el bienestar. Nuestra convicción es absoluta: "Creemos en lo que promovemos y en lo que elaboramos. No son meras afirmaciones, sino conclusiones basadas en evidencia científica, y la ciencia es infalible".
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Nos consideramos visionarios, siempre un paso por delante, cuya trayectoria profesional avala la solidez y eficacia de nuestra propuesta. Inquietos, persistentes, meticulosos y entregados, nuestro lema es: "El saber se consolida con la dedicación; el estudio continuo es nuestro motor de progreso".
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Integridad</h4>
                      <p className="text-gray-600">Cada producto lleva implícito nuestro prestigio y seriedad.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Saber Hacer</h4>
                      <p className="text-gray-600">Transformamos lo técnico en comprensible para todos.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Propósito y Perspectiva */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Propósito */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">NUESTRO PROPÓSITO</h3>
                </div>
                
                <div className="space-y-4">
                  <blockquote className="text-xl text-green-700 font-medium italic border-l-4 border-green-600 pl-4 py-2">
                    "Aspiramos a contribuir al bienestar de las personas. Un estado saludable es el cimiento de una vida plena".
                  </blockquote>
                  
                  <p className="text-gray-700">
                    <strong>Esencialia</strong> se fundó con la visión de promover hábitos de vida saludables mediante una nutrición balanceada y una suplementación consciente.
                  </p>
                  
                  <p className="text-gray-700">
                    Esta meta ha orientado nuestra evolución como empresa desde nuestros inicios, evolucionando para responder a las demandas de nuestros clientes en cada etapa vital, sin apartarnos nunca de nuestros fundamentos: el método científico como pilar para desarrollar productos excelentes, accesibles para el mayor número de personas.
                  </p>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <p className="text-green-800 font-medium">
                      La lealtad de quienes nos eligen es el testimonio de una relación construida sobre la transparencia y el respeto mutuo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Perspectiva Futura */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">PERSPECTIVA FUTURA</h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Para trazar nuestro camino hacia adelante, reconocemos la importancia de nuestras raíces. Ciertas cualidades definitorias de <strong>Esencialia</strong> son inherentemente proyectivas.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-emerald-700">Evolución Continua</h4>
                      <p className="text-gray-600">
                        Cuestionamos, exploramos, ampliamos horizontes y seguimos aprendiendo para optimizar constantemente nuestras fórmulas. Este ímpetu renovador es nuestro motor.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-emerald-700">Sintonía con el Usuario</h4>
                      <p className="text-gray-600">
                        Las necesidades sociales evolucionan. Esencialia evoluciona con ellas, ofreciendo soluciones pertinentes, siempre guiadas por el rigor técnico.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-emerald-700">Consciencia Ambiental</h4>
                      <p className="text-gray-600">
                        Una empresa atenta, ética y comprometida con su huella ecológica. No como un concepto abstracto, sino como una práctica cotidiana.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fundamentos Esenciales */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">FUNDAMENTOS ESENCIALES</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Los principios que cimientan nuestra búsqueda de la excelencia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Fundamento 1: Herencia */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-amber-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mr-4">
                    <BookOpen className="w-7 h-7 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-800">HERENCIA</h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Una compañía con bagaje y profundidad. Que valora su recorrido como activo para el porvenir. Con un acervo que representa una diferenciación competitiva.
                  </p>
                  
                  <div className="mt-4 p-4 bg-amber-50 rounded-lg">
                    <p className="text-amber-800 italic">
                      "Nuestro recorrido nos impele hacia la máxima expresión de calidad."
                    </p>
                  </div>
                  
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                      <span>Experiencia consolidada a lo largo de años</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                      <span>Principios éticos convertidos en señas de identidad</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                      <span>Memoria colectiva que edifica futuro</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Fundamento 2: Metodología Científica */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <Shield className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800">METODOLOGÍA CIENTÍFICA</h3>
                </div>
                
                <div className="space-y-4">
                  <blockquote className="text-lg text-blue-700 italic border-l-4 border-blue-600 pl-4 py-1">
                    "La verdad reside en el método"
                  </blockquote>
                  
                  <p className="text-gray-700">
                    La aproximación científica constituye el eje de nuestra labor. Coherentes con nuestros postulados, la excelencia determina el nivel de exigencia en el diseño, producción y distribución.
                  </p>
                  
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-blue-800 font-medium">
                      Nos sustraemos de tendencias efímeras para focalizarnos en nuestra meta esencial: elevar de manera honesta la calidad vital.
                    </p>
                  </div>
                  
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>Indagación permanente</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>Desarrollo basado en datos contrastados</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      <span>Verificación de calidad sistemática</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Fundamento 3: Ecoconciencia */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
                    <Leaf className="w-7 h-7 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-800">ECOCONCIENCIA</h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Cada acción genera una repercusión. La forma de que esta sea favorable es seleccionar la vía que nos permita progresar y desarrollarnos para continuar atendiendo las necesidades humanas.
                  </p>
                  
                  <p className="text-gray-700">
                    La ecoconciencia es el modo en que <strong>Esencialia</strong> ejerce el cuidado del medio ambiente y se manifiesta en cada operación y determinación corporativa.
                  </p>
                  
                  <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
                    <p className="text-emerald-800 font-medium">
                      Honrando el desarrollo armónico del planeta y de sus habitantes.
                    </p>
                  </div>
                  
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                      <span>Embalajes de bajo impacto ambiental</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                      <span>Proveeduría ética y responsable</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                      <span>Minimización de la huella ecológica</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Llamada a la Acción */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Forma parte de nuestro círculo de bienestar
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Numerosas familias depositan su confianza en Esencialia para preservar su salud de manera natural y consciente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/catalog" 
                className="px-8 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg"
              >
                Descubrir Productos
              </Link>
              <Link 
                to="/contacto" 
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition duration-300"
              >
                Ponte en Contacto
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Nosotros;