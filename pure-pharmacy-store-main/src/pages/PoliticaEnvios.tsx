import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PoliticaEnvios = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground py-8">
        <div className="container mx-auto px-4">
          {/* Encabezado */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Política de Envíos y Devoluciones</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Información detallada sobre nuestros plazos de entrega y condiciones de servicio para garantizar la mejor experiencia de copra.
            </p>
          </div>

          {/* Contenido */}
          <div className="max-w-5xl mx-auto">
            {/* Política de Envíos */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-green-600 border-b pb-3">Política de Envíos</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-medium mb-4">Plazos de Entrega</h3>
                  <p className="text-gray-700 mb-4">
                    En <strong>Esencialia</strong> nos comprometemos a procesar todos los pedidos en un plazo de <strong>24-48 horas hábiles</strong> desde la confirmación del pago. Los envíos se realizan a través de servicios de mensajería especializada para garantizar la integridad de nuestros productos.
                  </p>
                  
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 my-6">
                    <h4 className="text-lg font-semibold mb-3 text-green-800">Tiempos de entrega estimados:</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span><strong>Península Ibérica:</strong></span>
                        <span>48-72 horas hábiles</span>
                      </li>
                      <li className="flex justify-between">
                        <span><strong>Islas Baleares:</strong></span>
                        <span>72-96 horas hábiles</span>
                      </li>
                      <li className="flex justify-between">
                        <span><strong>Islas Canarias:</strong></span>
                        <span>4-5 días hábiles</span>
                      </li>
                      <li className="flex justify-between">
                        <span><strong>Ciudades Autónomas de Ceuta y Melilla:</strong></span>
                        <span>5-6 días hábiles</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-medium mb-4">Gastos de Envío</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Envío estándar gratuito:</strong> Para todos los pedidos superiores a <strong>50€</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Envío económico:</strong> 4,95€ (pedidos inferiores a 50€)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Envío urgente 24h:</strong> 9,95€ (disponible para pedidos realizados antes de las 12:00h)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-medium mb-4">Proceso de Envío</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Recibirás un email de confirmación con el número de seguimiento</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Puedes rastrear tu pedido en tiempo real a través de nuestro portal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Todos los envíos incluyen seguro de transporte</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>El reparto se realiza en días laborables de lunes a viernes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-300">
                  <h4 className="text-lg font-semibold mb-3">Información Importante</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Los plazos pueden verse afectados por circunstancias excepcionales (festivos, condiciones meteorológicas, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Es fundamental proporcionar una dirección completa y correcta</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Para envíos a empresas, indique nombre de la persona receptora</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Nos reservamos el derecho a verificar la dirección de entrega para mayor seguridad</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Política de Devoluciones */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-green-600 border-b pb-3">Política de Devoluciones</h2>
              
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-8">
                <h4 className="text-xl font-semibold mb-3 text-red-700">IMPORTANTE: Restricciones Específicas de Producto</h4>
                <p className="text-red-700">
                  Debido a la <strong>naturaleza sanitaria y de productos de parafarmacia</strong> que comercializamos, y en cumplimiento del <strong>Real Decreto 1487/2009</strong> sobre complementos alimenticios y normativas de higiene y seguridad alimentaria, <strong>NO ACEPTAMOS DEVOLUCIONES</strong> por las siguientes razones legales y de seguridad:
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-medium mb-4">1. Motivos Legales y Sanitarios</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Los <strong>complementos alimenticios y productos de parafarmacia</strong> están sujetos a <strong>estrictas normativas de higiene y seguridad</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Por <strong>razones sanitarias</strong>, no podemos aceptar devoluciones de productos que hayan salido de nuestras instalaciones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Normativa aplicable:</strong> Ley 17/2011 de seguridad alimentaria y nutrición</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-medium mb-4">2. Protección del Consumidor</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Garantizamos que todos los productos llegan en <strong>condiciones óptimas de conservación</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Implementamos <strong>sistemas de control de temperatura</strong> en el transporte cuando sea necesario</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Cada lote cuenta con <strong>trazabilidad completa</strong> desde el fabricante hasta el cliente</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-medium mb-4">3. Excepciones Aceptadas</h3>
                  <p className="text-gray-700 mb-4">Únicamente aceptaremos incidencias en los siguientes casos:</p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Producto defectuoso de fábrica</strong> (debe notificarse en 24h desde la recepción)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Error en el pedido por nuestra parte</strong> (producto diferente al solicitado)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Envase dañado durante el transporte</strong> (debe notificarse ante el transportista en el momento de la entrega)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="text-lg font-semibold mb-3 text-blue-700">Procedimiento para Incidencias</h4>
                  <p className="text-blue-700 mb-4">Si detectas alguno de los casos excepcionales anteriores:</p>
                  <ol className="space-y-3 text-blue-700">
                    <li className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
                      <span><strong>Notifica inmediatamente</strong> por email a parafarmacia.esencialia@gmail.com</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
                      <span><strong>Adjunta fotografías</strong> claras del producto y embalaje</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">3</span>
                      <span><strong>Conserva todos los materiales</strong> de empaquetado originales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">4</span>
                      <span>Nuestro equipo técnico evaluará cada caso individualmente</span>
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Garantías del Cliente */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-green-600 border-b pb-3">Garantías del Cliente</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-medium mb-4">Compromiso de Calidad</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Productos sellados:</strong> Todos los productos llegan con precintos de seguridad intactos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Fecha de caducidad:</strong> Garantizamos mínimo 6 meses de caducidad en todos los productos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Condiciones óptimas:</strong> Controlamos temperatura y humedad durante el almacenamiento</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Procedencia verificada:</strong> Solo trabajamos con fabricantes certificados y autorizados</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-medium mb-4">Asesoramiento Profesional</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Nuestro equipo de farmacéuticos está disponible para resolver dudas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Te ayudamos a elegir el producto más adecuado a tus necesidades</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Proporcionamos información completa sobre composición y modo de empleo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Derechos del Consumidor */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-green-600 border-b pb-3">Derechos del Consumidor</h2>
              <p className="text-gray-700 mb-4">
                Informamos que, de acuerdo con la <strong>Ley General para la Defensa de los Consumidores y Usuarios</strong>, los productos de parafarmacia y complementos alimenticios están <strong>excluidos del derecho de desistimiento</strong> (14 días para devolver) cuando:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Los productos están precintados y no son aptos para ser devueltos por razones de protección de la salud o higiene</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Se trata de bienes que, por su naturaleza, no pueden ser reintegrados</span>
                </li>
              </ul>
            </section>

            {/* Contacto y Soporte */}
            <section className="mb-12">
              <h2 className="text-3xl font-semibold mb-6 text-green-600 border-b pb-3">Contacto y Soporte</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-semibold mb-3 text-green-700">Para consultas sobre envíos:</h4>
                  <div className="space-y-2 text-green-700">
                    <p className="flex items-center">
                      <span className="mr-2">📧</span>
                      <span>parafarmacia.esencialia@gmail.com</span>
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2">📞</span>
                      <span>634 22 94 49 (L-V 9:00-21:00)</span>
                    </p>
                  </div>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <h4 className="text-lg font-semibold mb-3 text-green-700">Para incidencias técnicas:</h4>
                  <div className="space-y-2 text-green-700">
                    <p className="flex items-center">
                      <span className="mr-2">📧</span>
                      <span>parafarmacia.esencialia@gmail.com</span>
                    </p>
                    <p className="flex items-center">
                      <span className="mr-2">📞</span>
                      <span>634 22 94 49 (L-V 9:00-21:00)</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-300">
                <p className="text-sm text-gray-600">
                  <strong>Esencialia se reserva el derecho a modificar la presente política para adaptarse a cambios legislativos. Fecha última actualización: {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</strong>
                </p>
                
                <p className="mt-6 text-center italic text-green-600 font-medium">
                  "La salud es nuestro compromiso, la calidad nuestra garantía."
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PoliticaEnvios;