import { atom } from "jotai";
import { Product } from "@/types";

const productsAtom = atom<Product[]>([]);

export default productsAtom;
