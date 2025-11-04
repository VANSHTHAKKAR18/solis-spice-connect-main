import cuminImg from "@/assets/products/cumin.jpg";
import ajwainImg from "@/assets/products/ajwain.jpg";
import fenugreekImg from "@/assets/products/fenugreek.jpg";
import mustardImg from "@/assets/products/mustard.jpg";
import fennelImg from "@/assets/products/fennel.jpg";
import sesameImg from "@/assets/products/sesame.jpg";
import mukhwasImg from "@/assets/products/mukhwas.jpg";
import magajImg from "@/assets/products/magaj.jpg";

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  botanicalName?: string;
}

export const products: Product[] = [
  {
    id: "cumin",
    name: "Cumin Seeds",
    image: cuminImg,
    description: "Premium quality cumin seeds known for their distinctive aroma and flavor. Extensively used in culinary applications worldwide.",
    botanicalName: "Cuminum cyminum"
  },
  {
    id: "ajwain",
    name: "Ajwain (Carom Seeds)",
    image: ajwainImg,
    description: "High-quality carom seeds with strong aromatic properties. Widely used for their medicinal and culinary benefits.",
    botanicalName: "Trachyspermum ammi"
  },
  {
    id: "fenugreek",
    name: "Fenugreek Seeds",
    image: fenugreekImg,
    description: "Premium fenugreek seeds with rich nutritional value. Essential ingredient in Indian cuisine and traditional medicine.",
    botanicalName: "Trigonella foenum-graecum"
  },
  {
    id: "mustard",
    name: "Mustard Seeds",
    image: mustardImg,
    description: "Superior quality mustard seeds available in yellow and black varieties. Perfect for tempering and seasoning.",
    botanicalName: "Brassica juncea"
  },
  {
    id: "big-mustard",
    name: "Big Mustard Seeds",
    image: mustardImg,
    description: "Large-sized premium mustard seeds with intense flavor. Ideal for oil extraction and specialty applications.",
    botanicalName: "Brassica nigra"
  },
  {
    id: "fennel",
    name: "Fennel Seeds",
    image: fennelImg,
    description: "Premium fennel seeds with sweet, aromatic flavor. Popular as a mouth freshener and culinary spice.",
    botanicalName: "Foeniculum vulgare"
  },
  {
    id: "sesame",
    name: "Sesame Seeds",
    image: sesameImg,
    description: "High-quality white and natural sesame seeds. Rich in nutrients and widely used in food industry.",
    botanicalName: "Sesamum indicum"
  },
  {
    id: "mukhwas",
    name: "Mukhwas",
    image: mukhwasImg,
    description: "Traditional Indian mouth freshener blend of fennel, sesame, and aromatic seeds. A delightful after-meal refreshment.",
  },
  {
    id: "magaj",
    name: "Magaj (Melon Seeds)",
    image: magajImg,
    description: "Premium quality watermelon and melon seeds. Nutritious and versatile ingredient for various culinary applications.",
  },
];
