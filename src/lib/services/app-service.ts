import axios from "axios";
import type { Session, User, Collection, Place } from "$lib/types/app-types";

export const appService = {
  // on local
  // baseUrl: "http://localhost:4000",

  // on render
  // baseUrl: "http://locations-4j25.onrender.com:10000",

  // on glitch
  baseUrl: "http://locations2.glitch.me:3000",

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
  },

  async addPlace(place: Place, token: string) {
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      const response = await axios.post(
          this.baseUrl + "/api/collections/" + place.collectionid + "/places",
          place
      );
      await this.getPlaces(loggedInUser.token);
      return response.status == 200;
    } catch (error) {
      console.log(error);
      return false;
    }
  },

  async getCollections(token: string): Promise<Collection[]> {
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      const response = await axios.get(this.baseUrl + "/api/collections");
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  },

  async getPlaces(token: string): Promise<Place[]> {
    try {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      const response = await axios.get(this.baseUrl + "/api/places");
      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
};
