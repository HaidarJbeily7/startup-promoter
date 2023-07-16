import { UserCredintials } from "@/types";
import axios from "axios";
import { AbstractAPI } from "./abastractAPI";

export class AuthAPI extends AbstractAPI {
  async login(params: UserCredintials) {
    const res = await axios.post(this.BASE_URL + "/login/", params);
    return res;
  }

  async register(params: UserCredintials) {
    const res = await axios.post(this.BASE_URL + "/register/", params);
    return res;
  }
  async me(params: {token: string}) {
    try {
        const res = await axios.get(this.BASE_URL + "/auth/me/", {
          headers: {
            Authorization: `Token ${params.token}`,
          },
        });
        console.dir(res)
        return res.data;
      } catch (error) {
        // Handle errors
        console.error(error);
        throw error;
      }
  }

}
