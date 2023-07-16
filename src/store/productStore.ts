import { atom } from "jotai";
import { Product } from "@/types";

const productsAtom = atom<Product[]>([]);
const serachProductsAtom = atom<Product[]>([]);
export default {productsAtom, serachProductsAtom};


