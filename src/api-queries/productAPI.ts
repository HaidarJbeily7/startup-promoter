
import axios from "axios";
import { AbstractAPI } from "./abastractAPI";
import { Product } from "@/types";

export class ProductAPI extends AbstractAPI {
  async getAll(): Promise<Product[]> {
    const res = await axios.get(this.BASE_URL + "/products/");
    return res.data;
  }
}
