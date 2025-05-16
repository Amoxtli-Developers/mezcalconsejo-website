export interface PostalCode {
  code: string;
  state: string;
  city: string;
  deliveryAvailable: boolean;
}

export const postalCodes: PostalCode[] = [
  // Oaxaca
  { code: "68000", state: "Oaxaca", city: "Oaxaca de Juárez", deliveryAvailable: true },
  { code: "68100", state: "Oaxaca", city: "Oaxaca de Juárez", deliveryAvailable: true },
  { code: "68200", state: "Oaxaca", city: "Oaxaca de Juárez", deliveryAvailable: true },
  { code: "68300", state: "Oaxaca", city: "Oaxaca de Juárez", deliveryAvailable: true },
  { code: "68400", state: "Oaxaca", city: "Oaxaca de Juárez", deliveryAvailable: true },
  
  // Jalisco (Guadalajara)
  { code: "44100", state: "Jalisco", city: "Guadalajara", deliveryAvailable: true },
  { code: "44200", state: "Jalisco", city: "Guadalajara", deliveryAvailable: true },
  { code: "44300", state: "Jalisco", city: "Guadalajara", deliveryAvailable: true },
  { code: "44600", state: "Jalisco", city: "Guadalajara", deliveryAvailable: true },
  { code: "45070", state: "Jalisco", city: "Zapopan", deliveryAvailable: true },
  
  // Ciudad de México
  { code: "01000", state: "CDMX", city: "Ciudad de México", deliveryAvailable: true },
  { code: "06000", state: "CDMX", city: "Ciudad de México", deliveryAvailable: true },
  { code: "11000", state: "CDMX", city: "Ciudad de México", deliveryAvailable: true },
  { code: "03100", state: "CDMX", city: "Ciudad de México", deliveryAvailable: true },
  { code: "06700", state: "CDMX", city: "Ciudad de México", deliveryAvailable: true },
  
  // Monterrey, Nuevo León
  { code: "64000", state: "Nuevo León", city: "Monterrey", deliveryAvailable: true },
  { code: "64100", state: "Nuevo León", city: "Monterrey", deliveryAvailable: true },
  { code: "64700", state: "Nuevo León", city: "Monterrey", deliveryAvailable: true },
  { code: "66200", state: "Nuevo León", city: "San Pedro Garza García", deliveryAvailable: true },
  
  // Some locations where delivery is not available
  { code: "00000", state: "Remote", city: "Área Remota", deliveryAvailable: false },
  { code: "99999", state: "Remote", city: "Área Remota", deliveryAvailable: false },
];

export const isValidPostalCode = (code: string): PostalCode | null => {
  return postalCodes.find(pc => pc.code === code) || null;
};

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Mezcal Espadín Artesanal",
    description: "Elaborado con agave espadín cultivado en los valles centrales de Oaxaca. Destilado dos veces en alambiques de cobre, presenta notas herbales y un final suave con ligeros toques ahumados.",
    price: 1200,
    image: "/api/placeholder/400/600",
    category: "Tradicional"
  },
  {
    id: "2",
    name: "Mezcal Tobaziche Joven",
    description: "Elaborado con agave tobaziche silvestre, recolectado después de 12-15 años de maduración. Sabor complejo con notas terrosas, minerales y un final prolongado con toques de especias.",
    price: 1800,
    image: "/api/placeholder/400/600",
    category: "Premium"
  },
  {
    id: "3",
    name: "Mezcal Ensemble",
    description: "Mezcla única de tres tipos de agave: espadín, tobaziche y arroqueño. Esta combinación crea un perfil de sabor balanceado con notas frutales, herbales y un sutil ahumado.",
    price: 1500,
    image: "/api/placeholder/400/600",
    category: "Edición Especial"
  },
  {
    id: "4",
    name: "Mezcal Arroqueño Reposado",
    description: "Agave arroqueño silvestre reposado en barricas de roble americano durante 6 meses. Presenta notas de vainilla, caramelo y especias, con un final largo y sedoso.",
    price: 2100,
    image: "/api/placeholder/400/600",
    category: "Reposado"
  },
  {
    id: "5",
    name: "Mezcal Tepeztate Ancestral",
    description: "Elaborado con agave tepeztate, una variedad que tarda hasta 25 años en madurar. Destilado en ollas de barro, ofrece un sabor único con notas florales y minerales excepcionales.",
    price: 2800,
    image: "/api/placeholder/400/600",
    category: "Ancestral"
  },
  {
    id: "6",
    name: "Mezcal Madrecuixe",
    description: "Proveniente de agave madrecuixe silvestre de la sierra mixteca. Presenta un perfil complejo con notas herbales intensas, toques cítricos y un final largo con mineralidad distintiva.",
    price: 1900,
    image: "/api/placeholder/400/600",
    category: "Silvestre"
  }
];

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  { id: "1", src: "/api/placeholder/600/600", alt: "Plantaciones de agave espadín en los valles centrales", category: "Agave" },
  { id: "2", src: "/api/placeholder/600/600", alt: "Maestro mezcalero preparando el horno de tierra", category: "Proceso" },
  { id: "3", src: "/api/placeholder/600/600", alt: "Maguey maduro listo para la cosecha", category: "Agave" },
  { id: "4", src: "/api/placeholder/600/600", alt: "Destilación en alambiques tradicionales de cobre", category: "Proceso" },
  { id: "5", src: "/api/placeholder/600/600", alt: "Colección de mezcales premium", category: "Producto" },
  { id: "6", src: "/api/placeholder/600/600", alt: "Cata de mezcal en nuestra destilería", category: "Experiencia" },
  { id: "7", src: "/api/placeholder/600/600", alt: "Familia de productores de mezcal", category: "Personas" },
  { id: "8", src: "/api/placeholder/600/600", alt: "Molino de piedra tradicional", category: "Equipo" },
  { id: "9", src: "/api/placeholder/600/600", alt: "Fermentación en tinas de madera", category: "Proceso" },
];
