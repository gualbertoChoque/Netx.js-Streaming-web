export type Product ={
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

export const products:Product[] = [
  {
    id: 1,
    title: "Laptop pro x",
    price: 1213,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    description: "Rendimientto y disenio para desarrolladores",
  },
  {
    id: 2,
    title: "Smarphone Elite",
    price: 989,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    description: "Rendimientto y disenio en la palma de tu mano",
  },
  {
    id: 3,
    title: "HEADPHONE STUDIO",
    price: 356,
    image: "https://images.unsplash.com/photo-1518441902117-4b4f16b3dc8a",
    description: "Sonido profesional para el trabajo",
  },
];
