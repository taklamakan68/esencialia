import { Product, Category } from "@/types/product";

export const categories: Category[] = [
  { id: "Colageno", name: "Articulaciones y Colágeno", icon: "Dumbbell", productCount: 24 },
  { id: "Defensas", name: "Defensas e Inmunidad", icon: "Pill", productCount: 36 },
  { id: "Digestion", name: "Digestión y Detox", icon: "Zap", productCount: 18 },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Aceite de Borraja 150. PER 700 MG",
    brand: "EL GRANERO INTEGRAL",
    category: "Digestion",
    price: 19.95,
    originalPrice: 24.94, 
    image: "/images/products/Aceite de Borraja 150. PER 700 MG.png",
    dosage: "2 cápsulas cada 8 horas",
    presentation: "Envase de cristal con 150 Cápsulas de 700mg",
    "description": "Aceite de borraja de primera calidad, obtenido por prensado en frío de las semillas de Borago officinalis. Su fórmula concentrada aporta un 20% de Ácido Gamma-Linolénico (AGL) y vitamina E natural, nutrientes que contribuyen al cuidado de la piel, al bienestar hormonal y al mantenimiento de las articulaciones. Un complemento natural con alta pureza y biodisponibilidad, elaborado con el compromiso de calidad de siempre.",
    "benefits": [
    "Sin gluten, lactosa ni azúcares añadidos",
    "Aporta ácido gamma-linolénico (GLA) para apoyo hormonal (menopausia, ciclo menstrual)",
    "Contribuye a la elasticidad de la piel y salud articular",
    "Con vitamina E natural (335% VRN*)",
    "Fabricado por empresa BCorp con impacto social y ambiental positivo"
],
    "ingredients": [
    "Aceite de semillas de borraja (Borago officinalis L.), prensado en frío (con 20% de AGL*)",
    "Vitamina E natural (D-alfa tocoferol)",
    "Cubierta de la perla: gelatina, estabilizante glicerol"
],
    usage: "2 cápsulas en cada toma con agua para facilitar la ingesta. Consumir 3 veces al día.",
    warnings: ["Los complementos alimenticios no deben utilizarse como sustitutos de una dieta variada y equilibrada ni un modo de vida sano.", "Mantener fuera del alcance de los niños más pequeños.", "No superar la dosis diaria expresamente recomendada.", "Este producto no pretende diagnosticar, tratar, curar o prevenir ninguna enfermedad."],
    rating: 4.8,
    reviewCount: 234,
    inStock: true,
    certifications: ["GMP", "ISO 22000", "HACCP"]
  },
  {
    id: "2",
    name: "Alcachofera BIO, 120 CÁP, 415 MG",
    brand: "EL GRANERO INTEGRAL",
    category: "Digestion",
    price: 13.95,
    originalPrice: 17.44,
    image: "/images/products/Alcachofera BIO, 120 CÁP, 415 MG.png",
    dosage: "1 cápsula cada 8 horas",
    presentation: "Envase de cristal con 120 Cápsulas de 415mg",
    description: "Alcachofera BIO, un complemento natural obtenido de cultivo ecológico. Cada cápsula contiene 415 mg de extracto seco concentrado, favoreciendo la función digestiva y hepática. Su fórmula 100% ecológica contribuye al bienestar del hígado y a la digestión de las grasas, siendo un apoyo ideal para procesos de depuración y equilibrio interno. Presentado en un práctico envase de 120 cápsulas.",
    benefits: [
    "Cuidado del sistema digestivo y hepático",
    "Apoya la función depurativa y diurética del organismo",
    "Formato apto para dietas vegetarianas y veganas",
    "Envase de vidrio reciclado para máxima conservación"
],
    ingredients: ["polvo de hojas de alcachofera* (Cynara scolymus), extracto seco en polvo de hojas de alcachofera de ratio 5:1* (Cynara scolymus), maltodextrina*. (*)=De cultivo ecológico"],
    usage: "Tomar 1 cápsula diaria con alimentos grasos para mejor absorción.",
    warnings: ["Los complementos alimenticios no deben utilizarse como sustitutos de una dieta variada y equilibrada ni un modo de vida sano.", "Mantener fuera del alcance de los niños más pequeños.", "No superar la dosis diaria expresamente recomendada.", "Este producto no pretende diagnosticar, tratar, curar o prevenir ninguna enfermedad."],
    rating: 4.9,
    reviewCount: 456,
    inStock: true,
    certifications: ["GMP", "Vegano", "Sin gluten"]
  }, 
  {
    id: "3",
    name: "Bucofar Comprimidos con Vitamina C y Zinc",
    brand: "Soria Natural",
    category: "Defensas",
    price: 16.95,
    originalPrice: 21.19,
    image: "/images/products/bucofar comprimidos.jpeg",
    dosage: "2 cápsulas cada 8 horas",
    presentation: "Blíster con 36 Cápsulas de 500mg",
    description: "Bucofar son comprimidos para chupar formulados con ingredientes naturales como Propóleo, Equinácea, Malvavisco, Vitamina C y Zinc. Están específicamente diseñados para proporcionar alivio y protección en casos de irritación de garganta y faringe, ayudando a calmar la molestia con una acción local suave.",
    benefits: [
      "Alivio de la irritación de garganta y faringe",
    "Formulación con Propóleo, Equinácea y Malvavisco",
    "Aporta Vitamina C y Zinc para el apoyo inmunitario",
    "Formato práctico de comprimidos para chupar",
    "Apto para dietas vegetarianas"
    ],
    ingredients: ["Extracto seco de Propóleo (100 mg/comprimido)",
    "Extracto seco de Equinácea purpúrea (75 mg/comprimido)",
    "Extracto seco de Malvavisco (50 mg/comprimido)",
    "Vitamina C (100 mg - 125% VRN*)",
      "Zinc (2.5 mg - 25% VRN*)"],
    
    usage: "Disolver lentamente el comprimido en la boca. Adultos: Hasta 5 comprimidos al día. No superar la dosis diaria recomendada.",
    warnings: ["Los complementos alimenticios no deben utilizarse como sustitutos de una dieta variada y equilibrada ni un modo de vida sano.", "Mantener fuera del alcance de los niños más pequeños.", "No superar la dosis diaria expresamente recomendada.", "Este producto no pretende diagnosticar, tratar, curar o prevenir ninguna enfermedad."],
    rating: 4.7,
    reviewCount: 189,
    inStock: true,
    certifications: ["GMP", "Tested for Sport", "Sin colorantes artificiales"]
  },
    {
  id: "4",
  name: "GSN Colágeno Complex Articular",
  brand: "GSN", // Asumo la marca basado en tu lista inicial
  category: "Colageno",
  price: 29.99,
  originalPrice: 37.49,
  image: "/images/products/gsn colageno complex.jpeg",
  dosage: "12,13g por servicio",
  presentation: "Envase polvo - 30 servicios aprox.", // Asumo presentación en polvo
  description: "Complemento alimenticio con colágeno hidrolizado, MSM, magnesio y vitamina C. Especialmente formulado para contribuir al mantenimiento normal de huesos y articulaciones, favorecer la función muscular y la recuperación articular.",
  benefits: [
    "Mantenimiento de huesos y articulaciones",
    "Apoya la función muscular y síntesis proteica",
    "Ayuda a la recuperación articular y muscular",
    "Con ácido hialurónico para lubricación articular"
  ],
  ingredients: [
    "Colágeno hidrolizado (10g)",
    "MSM - Metilsulfonilmetano (500mg)",
    "Magnesio (123,75mg)",
    "Vitamina C (60mg)",
    "Ácido hialurónico (30mg)"
  ],
  usage: "Tomar 3 dosificadores (12,13g) en medio vaso de agua, preferiblemente entre comidas.",
  warnings: [
    "Los complementos alimenticios no deben sustituir una dieta equilibrada",
    "Mantener fuera del alcance de los niños",
    "No superar la dosis diaria recomendada"
  ],
  rating: 4.6,
  reviewCount: 312,
  inStock: true,
  certifications: ["GMP", "Apto para deportistas"] // Asumo certificación común
},
  {
id: "5",
name: "GSN Colágeno Forte Optimix",
brand: "GSN",
category: "Colageno",
price: 34.99,
originalPrice: 43.74,
image: "/images/products/gsn colageno forte opti mix.jpeg",
dosage: "12,16g por servicio",
presentation: "Envase 365g - sabor naranja",
description: "Complemento alimenticio a base de colágeno hidrolizado, cúrcuma, ácido hialurónico, magnesio, MSM y vitamina C. Contribuye a la formación de colágeno, ayuda a disminuir el cansancio y la fatiga, y está indicado para mantener músculos, huesos y cartílagos en condiciones normales.",
benefits: [
"Contribuye a la formación de colágeno",
"Ayuda a disminuir el cansancio y la fatiga",
"Apoya la salud de articulaciones y músculos",
"Fórmula enriquecida con cúrcuma y ácido hialurónico",
"Sabor naranja"
],
ingredients: [
"Colágeno hidrolizado (10g por dosis)",
"Extracto de cúrcuma (50mg)",
"Ácido hialurónico (30mg)",
"MSM - Metilsulfonilmetano (500mg)",
"Vitamina C (60mg)",
"Magnesio (123,75mg)"
],
usage: "Tomar 3 dosificadores (12,16g) en medio vaso de agua, preferiblemente entre comidas. Para una óptima disolución, añadir primero en un poco de agua, remover, dejar reposar y completar con el resto del líquido.",
warnings: [
"Contiene gluten",
"Puede contener trazas de huevo, leche y soja",
"Los complementos alimenticios no sustituyen una dieta equilibrada",
"No superar la dosis diaria recomendada"
],
rating: 4.8,
reviewCount: 567,
inStock: true,
certifications: ["GMP"]
},
  {
id: "6",
name: "GSN Colágeno Opti-Mix 6",
brand: "GSN",
category: "Colageno",
price: 22.24,
originalPrice: 27.80,
image: "/images/products/gsn colageno optimix 6.png",
dosage: "12,16g por servicio (aproximadamente)",
presentation: "Bote de 365 gramos",
description: "Complemento alimenticio a base de colágeno hidrolizado reforzado con Cúrcuma Hidro Curcumin®, MSM, ácido hialurónico, magnesio y vitamina C. Contribuye al mantenimiento normal de las articulaciones, la piel y los huesos, favoreciendo la flexibilidad de los tejidos.",
benefits: [
"Mantenimiento de articulaciones y piel",
"Colágeno enriquecido con Cúrcuma de alta absorción",
"Con ácido hialurónico para tejidos y articulaciones",
"Favorece la flexibilidad de los tejidos articulares",
"Con vitamina C para la formación de colágeno"
],
ingredients: [
"Colágeno hidrolizado (10g por toma)",
"Extracto de cúrcuma Hidro Curcumin® (50mg)",
"Ácido hialurónico (30mg)",
"MSM - Metilsulfonilmetano (500mg)",
"Vitamina C (60mg)",
"Magnesio (123,75mg)"
],
usage: "Tomar 3 dosificadores en medio vaso de agua, preferiblemente entre comidas. Para una óptima disolución, añadir el producto en un pequeño volumen de agua, remover, dejar reposar hasta que esté disuelto y completar con el resto de líquido.",
warnings: [
"Los complementos alimenticios no sustituyen una dieta equilibrada",
"Mantener fuera del alcance de los niños",
"No superar la dosis diaria recomendada"
],
rating: 4.83,
reviewCount: 12,
inStock: true,
certifications: ["GMP"]
},
  {
id: "7",
name: "Sorilax Tránsito Intestinal",
brand: "Soria Natural",
category: "Digestion",
price: 9.95,
originalPrice: 12.44,
image: "/images/products/Sorilax transito intestinal.jpeg",
dosage: "1 a 2 comprimidos por día",
presentation: "Envase 30 comprimidos",
description: "Complemento alimenticio formulado con extractos de plantas (Cáscara Sagrada, Sen, Malva, Ruibarbo) para favorecer el tránsito intestinal de forma natural. Indicado para estreñimiento ocasional, tránsito lento o sensación de pesadez abdominal.",
benefits: [
"Favorece el tránsito intestinal de forma natural",
"Actúa de forma suave sin irritar",
"Reduce la sensación de pesadez abdominal",
"Regula y estimula suavemente la evacuación",
"Formulación a base de extractos vegetales tradicionales"
],
ingredients: [
"Extracto de Cáscara Sagrada",
"Extracto de Sen",
"Extracto de Malva",
"Extracto de Ruibarbo",
"Otros extractos vegetales"
],
usage: "Tomar 1 a 2 comprimidos al día, preferiblemente por la noche con un vaso de agua. No superar la dosis recomendada. El uso prolongado debe realizarse bajo supervisión profesional.",
warnings: [
"Los complementos alimenticios no sustituyen una dieta equilibrada",
"No superar la dosis diaria recomendada",
"Uso prolongado bajo supervisión profesional",
"Mantener fuera del alcance de los niños",
"Consultar con un médico si los síntomas persisten"
],
rating: 4.4,
reviewCount: 89,
inStock: true,
certifications: ["Producto Natural"]
},
  {
id: "8",
name: "Transfer Factor Tri-Factor Formula",
brand: "4Life",
category: "Defensas",
price: 45.99,
originalPrice: 57.49,
image: "/images/products/4life transfer factor.jpeg",
dosage: "2 cápsulas por día",
presentation: "Envase 60 cápsulas (25.92g)",
description: "Suplemento alimenticio con 4Life Transfer Factor™, extraído exclusivamente de colostro bovino y yema de huevo de gallina. Elaborado con ingredientes naturales bajo estrictos controles de calidad en instalaciones certificadas por NSF International, con un proceso de extracción que facilita la absorción.",
benefits: [
"Fórmula patentada 4Life Transfer Factor™",
"Apoyo al sistema de defensas natural del organismo",
"Ingredientes naturales de origen bovino y aviar",
"Producción en instalaciones certificadas NSF International",
"Proceso de extracción eficiente para mejor absorción"
],
ingredients: [
"4Life Tri-Factor Formula (calostro bovino y yema de huevo)",
"Agente de recubrimiento: hidroxipropilmetilcelulosa",
"Maltodextrina"
],
usage: "Tomar 2 cápsulas al día con 240 ml de líquido.",
warnings: [
"Complemento alimenticio. No superar la dosis diaria recomendada",
"No sustituye una dieta variada y equilibrada",
"Mantener fuera del alcance de los niños",
"Contiene leche y huevo. Puede contener trazas de soja",
"Consultar con profesional de la salud antes de usar"
],
rating: 4.6,
reviewCount: 128,
inStock: true,
certifications: ["NSF International", "GMP"]
}
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(p => p.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.slice(0, 8);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowercaseQuery) ||
    p.brand.toLowerCase().includes(lowercaseQuery) ||
    p.category.toLowerCase().includes(lowercaseQuery)
  );
};
