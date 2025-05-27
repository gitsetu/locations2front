import axios from "axios";
import type { Session, User, Collection, Place } from "$lib/types/app-types";

export const appService = {
  baseUrl: "http://localhost:4000",

  async signup(user: User): Promise<boolean> {
    try {
      // fixme
      console.log('Signing up user:', user.email);
      const response = await axios.post(`${this.baseUrl}/api/users`, user);
      console.log('axios response:', response);
      // return response.data.success === true;
      // fixme : data.success property does not exist, fixed using "status"
      return response.status === 201;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  async login(email: string, password: string): Promise<Session | null> {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
      if (response.data.success) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
        const session: Session = {
          name: response.data.name,
          token: response.data.token,
          _id: response.data._id
        };
        return session;
      }
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
};
