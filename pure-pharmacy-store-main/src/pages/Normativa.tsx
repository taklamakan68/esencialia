// src/pages/Normativa.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Normativa = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white text-gray-900 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Encabezado */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">Aviso legal, política de privacidad y cookies</h1>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#privacidad" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Privacidad
              </a>
              <a href="#aviso-legal" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Aviso Legal
              </a>
              <a href="#cookies" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Cookies
              </a>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Sección Política de Privacidad */}
            <section id="privacidad" className="mb-16">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 border-b pb-4">
                  POLÍTICA DE PRIVACIDAD
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-green-700">INFORMACIÓN AL USUARIO</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-medium mb-3 text-gray-800">¿Quién es el responsable del tratamiento de sus datos personales?</h4>
                        <p className="text-gray-700">
                          <strong>Halcyon Global S. L.</strong> es el RESPONSABLE del tratamiento de los datos personales del USUARIO y le informa de que estos datos serán tratados de conformidad con lo dispuesto en el reglamento (UE) 2016/679, de 27 de abril (GDPR), y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD).
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-medium mb-3 text-gray-800">¿Para qué tratamos tus datos personales?</h4>
                        <p className="text-gray-700">
                          Para mantener una relación comercial con el usuario. Las operaciones previstas para realizar el tratamiento son:
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-medium mb-3 text-gray-800">¿Por qué motivo podemos tratar tus datos personales?</h4>
                        <p className="text-gray-700 mb-4">
                          Porque el tratamiento está legitimado por el artículo 6 del GDPR de la siguiente forma:
                        </p>
                        <ul className="space-y-3 text-gray-700 pl-6">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span><strong>Con el consentimiento del USUARIO:</strong> remisión de comunicaciones comerciales y del boletín informativo.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span><strong>Por interés legítimo del RESPONSABLE:</strong> realizar estudios de mercado, análisis estadísticos, etc. y tramitar encargos, solicitudes, etc. a petición del USUARIO.</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-medium mb-3 text-gray-800">¿Durante cuánto tiempo guardaremos tus datos personales?</h4>
                        <p className="text-gray-700">
                          Se conservarán durante no más tiempo del necesario para mantener el fin del tratamiento o existan prescripciones legales que dictaminen su custodia y cuando ya no sea necesario para ello, se suprimirán con medidas de seguridad adecuadas para garantizar la anonimización de los datos o la destrucción total de los mismos.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-medium mb-3 text-gray-800">¿A quién facilitamos tus datos personales?</h4>
                        <p className="text-gray-700">
                          No está prevista ninguna comunicación de datos personales a terceros salvo, si fuese necesario para el desarrollo y ejecución de las finalidades del tratamiento, a nuestros proveedores de servicios relacionados con comunicaciones, con los cuales el RESPONSABLE tiene suscritos los contratos de confidencialidad y de encargado de tratamiento exigidos por la normativa vigente de privacidad.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-medium mb-3 text-gray-800">¿Cuáles son tus derechos?</h4>
                        <p className="text-gray-700 mb-4">Los derechos que asisten al USUARIO son:</p>
                        <ul className="space-y-3 text-gray-700 pl-6 mb-4">
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Derecho a retirar el consentimiento en cualquier momento.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Derecho de acceso, rectificación, portabilidad y supresión de sus datos, y de limitación u oposición a su tratamiento.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Derecho a presentar una reclamación ante la autoridad de control (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.</span>
                          </li>
                        </ul>
                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="text-green-800">
                            <strong>Datos de contacto para ejercer sus derechos:</strong><br />
                            <span className="mt-1 inline-block">Email: halcyonglobalretail@gmail.com</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-green-700">CARÁCTER OBLIGATORIO O FACULTATIVO DE LA INFORMACIÓN FACILITADA POR EL USUARIO</h3>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Los USUARIOS, mediante la marcación de las casillas correspondientes y la entrada de datos en los campos, marcados con un asterisco (*) en el formulario de contacto o presentados en formularios de descarga, aceptan expresamente y de forma libre e inequívoca, que sus datos son necesarios para atender su petición, por parte del prestador, siendo voluntaria la inclusión de datos en los campos restantes. El USUARIO garantiza que los datos personales facilitados al RESPONSABLE son veraces y se hace responsable de comunicar cualquier modificación de los mismos.
                      </p>
                      <p>
                        El RESPONSABLE informa de que todos los datos solicitados a través del sitio web son obligatorios, ya que son necesarios para la prestación de un servicio óptimo al USUARIO. En caso de que no se faciliten todos los datos, no se garantiza que la información y servicios facilitados sean completamente ajustados a sus necesidades.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-green-700">MEDIDAS DE SEGURIDAD</h3>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        Que de conformidad con lo dispuesto en las normativas vigentes en protección de datos personales, el RESPONSABLE está cumpliendo con todas las disposiciones de las normativas GDPR y LOPDGDD para el tratamiento de los datos personales de su responsabilidad, y manifiestamente con los principios descritos en el artículo 5 del GDPR, por los cuales son tratados de manera lícita, leal y transparente en relación con el interesado y adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados.
                      </p>
                      <p>
                        El RESPONSABLE garantiza que ha implementado políticas técnicas y organizativas apropiadas para aplicar las medidas de seguridad que establecen el GDPR y la LOPDGDD con el fin de proteger los derechos y libertades de los USUARIOS y les ha comunicado la información adecuada para que puedan ejercerlos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Sección Aviso Legal */}
            <section id="aviso-legal" className="mb-16">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 border-b pb-4">
                  AVISO LEGAL
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-green-700">OBJETO</h3>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        El presente aviso legal regula el uso y utilización del sitio web de Halcyon Pharma del que es titular Halcyon Global S. L. (en adelante, EL PROPIETARIO DE LA WEB).
                      </p>
                      <p>
                        La navegación por el sitio web de EL PROPIETARIO DE LA WEB le atribuye la condición de USUARIO del mismo y conlleva su aceptación plena y sin reservas de todas y cada una de las condiciones publicadas en este aviso legal, advirtiendo de dichas condiciones podrán ser modificadas sin notificación previa por parte de EL PROPIETARIO DE LA WEB, en cuyo caso se procederá a su publicación y aviso con la máxima antelación posible.
                      </p>
                      <p>
                        Por ello es recomendable leer atentamente su contenido en caso de desear acceder y hacer uso de la información de los servicios ofrecidos desde este sitio web.
                      </p>
                      <p>
                        El usuario además, se obliga a hacer un uso correcto del sitio web de conformidad con las leyes, la buena fe, el orden público, los usos del tráfico y el presente Aviso Legal, y responderá frente a EL PROPIETARIO DE LA WEB o frente a terceros, de cualesquiera daños y perjuicios que pudieran causarse como consecuencia del incumplimiento de dicha obligación.
                      </p>
                      <p>
                        Cualquier utilización distinta a la autorizada está expresamente prohibida, pudiendo EL PROPIETARIO DE LA WEB denegar o retirar el acceso y su uso en cualquier momento.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-green-700">IDENTIFICACIÓN</h3>
                    <p className="text-gray-700">
                      EL PROPIETARIO DE LA WEB, en cumplimiento de la Ley 34/2002, de 11 de julio de Servicios de la Sociedad de la Información y de Comercio Electrónico, le informa de que:
                    </p>
                    <ul className="mt-3 space-y-2 text-gray-700 pl-6">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span>Su denominación social es: <strong>Halcyon Global S. L.</strong></span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-green-700">COMUNICACIONES</h3>
                    <p className="text-gray-700 mb-4">
                      Para comunicarse con nosotros, ponemos a su disposición diferentes medios de contacto que detallamos a continuación:
                    </p>
                    <ul className="space-y-3 text-gray-700 pl-6">
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">📞</span>
                        <span><strong>Teléfono:</strong> 634 22 94 49</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">📧</span>
                        <span><strong>Email:</strong> halcyonglobalretail@gmail.com</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">📍</span>
                        <span><strong>Dirección:</strong> C. Pompeyos 7, 1, 14003 Córdoba</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-green-700">CONDICIONES DE ACCESO Y UTILIZACIÓN</h3>
                    <div className="space-y-6">
                      <p className="text-gray-700">
                        El sitio web y sus servicios son de acceso libre y gratuito. No obstante, EL PROPIETARIO DE LA WEB puede condicionar la utilización de algunos de los servicios ofrecidos en su web a la previa cumplimentación del correspondiente formulario.
                      </p>
                      <p className="text-gray-700">
                        El usuario garantiza la autenticidad y actualidad de todos aquellos datos que comunique a EL PROPIETARIO DE LA WEB y será el único responsable de las manifestaciones falsas o inexactas que realice.
                      </p>
                      <p className="text-gray-700">
                        El usuario se compromete expresamente a hacer uso adecuado de los contenidos y servicios de EL PROPIETARIO DE LA WEB y a no emplearlos para, entre otros:
                      </p>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <ol className="space-y-4 text-gray-700 list-decimal pl-6">
                          <li>Difundir contenidos delictivos, violentos, pornográficos, racistas, xenófobos, ofensivos, de apología del terrorismo o, en general, contrarios a la ley o al orden público.</li>
                          <li>Introducir en la web virus informáticos o realizar actuaciones susceptibles de alterar, estropear, interrumpir o generar errores o daños en los documentos electrónicos, datos o sistemas físicos y lógicos de EL PROPIETARIO DE LA WEB o de terceras personas; así como obstaculizar el acceso de otros usuarios al sitio web y a sus servicios mediante el consumo masivo de los recursos informáticos a través de los cuales EL PROPIETARIO DE LA WEB prestan sus servicios.</li>
                          <li>Intentar acceder a las cuentas de correo electrónico de otros usuarios o a áreas restringidas de los sistemas informáticos de EL PROPIETARIO DE LA WEB o de terceros y, en su caso, extraer información.</li>
                          <li>Vulnerar los derechos de propiedad intelectual o industrial, así como violar la confidencialidad de la información de EL PROPIETARIO DE LA WEB o de terceros.</li>
                          <li>Suplantar la identidad de cualquier otro usuario.</li>
                          <li>Reproducir, copiar, distribuir, poner a disposición de, o de cualquier otra forma de comunicación pública, transformar o modificar los contenidos, a menos que se cuente con la autorización del titular de los correspondientes derechos o ello resulte legalmente permitido.</li>
                          <li>Recabar datos con finalidad publicitaria y de remitir publicidad de cualquier clase y comunicaciones con fines de venta y otras de naturaleza comercial sin que medie su previa solicitud o consentimiento.</li>
                        </ol>
                      </div>
                      
                      <div className="mt-6 space-y-4 text-gray-700">
                        <p>
                          Todos los contenidos del sitio web, como textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a EL PROPIETARIO, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el uso correcto de esta web.
                        </p>
                        <p>
                          En definitiva, los usuarios que accedan a este sitio web pueden visualizar los contenidos y efectuar, en su caso, copias privadas autorizadas siempre que los elementos reproducidos no sean cedidos posteriormente a terceros, ni se instalen a servidores conectados a redes, ni sean objeto de ningún tipo de explotación.
                        </p>
                        <p>
                          Asimismo, todas las marcas, nombres comerciales o signos distintivos de cualquier clase que aparecen en el sitio web son propiedad de EL PROPIETARIO DE LA WEB, sin que pueda entenderse que el uso o acceso al mismo atribuya al usuario derecho alguno sobre los mismos.
                        </p>
                        <p>
                          La distribución, modificación, cesión o comunicación pública de los contenidos y cualquier otro acto que no haya sido expresamente autorizado por el titular de los derechos de explotación quedan prohibidos.
                        </p>
                        <p>
                          El establecimiento de un hiperenlace no implica en ningún caso la existencia de relaciones entre EL PROPIETARIO DE LA WEB y el propietario del sitio web en la que se establezca, ni la aceptación y aprobación por parte de EL PROPIETARIO DE LA WEB de sus contenidos o servicios.
                        </p>
                        <p>
                          EL PROPIETARIO DE LA WEB no se responsabilizan del uso que cada usuario le dé a los materiales puestos a disposición en este sitio web ni de las actuaciones que realice en base a los mismos.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">4.1 - EXCLUSIÓN DE GARANTÍAS Y DE RESPONSABILIDAD EN EL ACCESO Y A LA UTILIZACIÓN</h4>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        El contenido del presente sitio web es de carácter general y tiene una finalidad meramente informativa, sin que se garantice plenamente el acceso a todos los contenidos, ni su exhaustividad, corrección, vigencia o actualidad, ni su idoneidad o utilidad para un objetivo específico.
                      </p>
                      <p>
                        EL PROPIETARIO DE LA WEB excluyen, hasta donde permite el ordenamiento jurídico, cualquier responsabilidad por los daños y perjuicios de toda naturaleza derivados de:
                      </p>
                      
                      <div className="bg-gray-50 p-6 rounded-lg mt-4">
                        <ol className="space-y-4 text-gray-700 list-decimal pl-6">
                          <li>La imposibilidad de acceso al sitio web o la falta de veracidad, exactitud, exhaustividad y/o actualidad de los contenidos, así como la existencia de vicios y defectos de toda clase de los contenidos transmitidos, difundidos, almacenados, puestos a disposición, a los que se haya accedido a través del sitio web o de los servicios que se ofrecen.</li>
                          <li>La presencia de virus o de otros elementos en los contenidos que puedan producir alteraciones en los sistemas informáticos, documentos electrónicos o datos de los usuarios.</li>
                          <li>El incumplimiento de las leyes, la buena fe, el orden público, los usos del tráfico y el presente aviso legal como consecuencia del uso incorrecto del sitio web. En particular, y a modo ejemplificativo, EL PROPIETARIO DE LA WEB no se hacen responsables de las actuaciones de terceros que vulneren derechos de propiedad intelectual e industrial, secretos empresariales, derechos al honor, a la intimidad personal y familiar y a la propia imagen, así como la normativa de competencia desleal y publicidad ilícita.</li>
                        </ol>
                      </div>
                      
                      <p className="mt-4">
                        Asimismo, EL PROPIETARIO DE LA WEB declinan cualquier responsabilidad respecto a la información que se halle fuera de esta web y no sea gestionada directamente por nuestro webmaster. La función de los links que aparecen en esta web es exclusivamente la de informar al usuario sobre la existencia de otras fuentes susceptibles de ampliar los contenidos que ofrece este sitio web. EL PROPIETARIO DE LA WEB no garantizan ni se responsabilizan del funcionamiento o accesibilidad de los sitios enlazados; ni sugiere, invita o recomienda la visita a los mismos, por lo que tampoco será responsable del resultado obtenido. EL PROPIETARIO DE LA WEB no se responsabilizan del establecimiento de hipervínculos por parte de terceros.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">4.2 - PROCEDIMIENTO EN CASO DE REALIZACIÓN DE ACTIVIDADES DE CARÁCTER ILÍCITO</h4>
                    <p className="text-gray-700">
                      En el caso de que cualquier usuario o un tercero considere que existen hechos o circunstancias que revelen el carácter ilícito de la utilización de cualquier contenido y/o de la realización de cualquier actividad en las páginas web incluidas o accesibles a través del sitio web, deberá enviar una notificación a EL PROPIETARIO DE LA WEB identificándose debidamente y especificando las supuestas infracciones.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">4.3 - PUBLICACIONES</h4>
                    <p className="text-gray-700">
                      La información administrativa facilitada a través del sitio web no sustituye la publicidad legal de las leyes, normativas, planes, disposiciones generales y actos que tengan que ser publicados formalmente a los diarios oficiales de las administraciones públicas, que constituyen el único instrumento que da fe de su autenticidad y contenido. La información disponible en este sitio web debe entenderse como una guía sin propósito de validez legal.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-green-700">LEGISLACIÓN APLICABLE</h3>
                    <p className="text-gray-700">
                      Las condiciones presentes se regirán por la legislación española vigente.
                    </p>
                    <p className="text-gray-700 mt-2">
                      La lengua utilizada será el Castellano.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Sección Política de Cookies */}
            <section id="cookies" className="mb-16">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 border-b pb-4">
                  POLÍTICA DE COOKIES
                </h2>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-medium mb-4 text-gray-800">¿Qué son las cookies?</h4>
                    <p className="text-gray-700">
                      Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma que utilice su equipo, pueden utilizarse para reconocer al usuario.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-medium mb-4 text-gray-800">¿Para qué utiliza las cookies esta página web y cuáles son?</h4>
                    <p className="text-gray-700 mb-4">
                      Esta página web utiliza las cookies para una serie de finalidades, incluidas:
                    </p>
                    <div className="bg-green-50 p-6 rounded-lg mb-6">
                      <h5 className="text-lg font-semibold mb-3 text-green-800">Análisis:</h5>
                      <p className="text-gray-700">
                        Son aquellas cookies que bien, tratadas por nosotros o terceros nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio. Para ello se analiza su navegación en nuestra página web con el fin de mejorar la experiencia del usuario.
                      </p>
                    </div>
                    
                    <p className="text-gray-700 mb-4">
                      El detalle de las cookies utilizadas en esta página web es el siguiente:
                    </p>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <p className="text-blue-800 mb-3">
                        <strong>De terceros:</strong> Recoger información sobre la navegación de los usuarios por el sitio con el fin de conocer el origen de las visitas y otros datos similares a nivel estadístico. No obtiene datos de los nombres o apellidos de los usuarios ni de la dirección postal concreta desde donde se conectan.
                      </p>
                      <p className="text-blue-800">
                        <strong>Google Analytics</strong> Centro de privacidad de Google:{" "}
                        <a 
                          href="http://google.com/intl/es/policies/privacy/" 
                          className="text-green-600 hover:text-green-800 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          http://google.com/intl/es/policies/privacy/
                        </a>
                      </p>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                      <p className="text-gray-700 italic">
                        <strong>Nota:</strong> Las cookies de tipo «Propias» son utilizadas sólo por el propietario de esta web y las cookies «De terceros» son utilizadas, por el prestador del servicio que está detallado en el cuadro anterior.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-medium mb-4 text-gray-800">¿Cómo puedo desactivar o eliminar estas cookies?</h4>
                    <p className="text-gray-700 mb-6">
                      Puede usted permitir, bloquear las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-white border border-gray-300 rounded-lg p-5">
                        <h5 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                          <span className="text-green-600 mr-2">🌐</span>
                          Chrome
                        </h5>
                        <p className="text-gray-700 mb-3">
                          Ir a Menú - Configuración (en Mac: Preferencias) - Ajustes Avanzados - Privacidad - Aquí elige si configurar las cookies o eliminar las cookies existentes.
                        </p>
                        <a 
                          href="https://support.google.com/chrome/answer/95647" 
                          className="text-green-600 hover:text-green-800 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ayuda de Chrome
                        </a>
                      </div>

                      <div className="bg-white border border-gray-300 rounded-lg p-5">
                        <h5 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                          <span className="text-green-600 mr-2">🌐</span>
                          Internet Explorer
                        </h5>
                        <p className="text-gray-700 mb-3">
                          Ir a Herramientas – Opciones de Internet – Privacidad – Configuración – Opciones avanzadas. Configure lo deseado.
                        </p>
                        <a 
                          href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" 
                          className="text-green-600 hover:text-green-800 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ayuda de Internet Explorer
                        </a>
                      </div>

                      <div className="bg-white border border-gray-300 rounded-lg p-5">
                        <h5 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                          <span className="text-green-600 mr-2">🌐</span>
                          Firefox
                        </h5>
                        <p className="text-gray-700 mb-3">
                          Ir a Menú – Preferencias – Privacidad – Mostrar cookies – Configurar según lo que desee.
                        </p>
                        <a 
                          href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" 
                          className="text-green-600 hover:text-green-800 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ayuda de Firefox
                        </a>
                      </div>

                      <div className="bg-white border border-gray-300 rounded-lg p-5">
                        <h5 className="text-lg font-semibold mb-3 text-gray-800 flex items-center">
                          <span className="text-green-600 mr-2">🌐</span>
                          Safari
                        </h5>
                        <p className="text-gray-700 mb-3">
                          Safari – Preferencias – Privacidad – Realice la configuración deseada.
                        </p>
                        <a 
                          href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" 
                          className="text-green-600 hover:text-green-800 underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ayuda de Safari
                        </a>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mt-6">
                      Consulte la documentación del navegador que tenga instalado.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-medium mb-4 text-gray-800">Complemento de inhabilitación para navegadores de Google Analytics.</h4>
                    <p className="text-gray-700">
                      Si desea rechazar las cookies analíticas de Google Analytics en todos los navegadores, de forma que no se envíe información suya a Google Analytics, puede descargar un complemento que realiza esta función desde este enlace:{" "}
                      <a 
                        href="https://tools.google.com/dlpage/gaoptout" 
                        className="text-green-600 hover:text-green-800 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://tools.google.com/dlpage/gaoptout
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Botón para volver arriba */}
            <div className="text-center mt-12">
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow-lg"
              >
                <span>Volver arriba</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Normativa;