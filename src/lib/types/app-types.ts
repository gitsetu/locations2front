export interface Session {
    name: string;
    _id: string;
    token: string;
  }
  
  export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    _id?: string;
  }

  export interface Collection {
    title: string;
    _id: string;
  }

export interface Place {
  title: string;
  category: string;
  latitude: number;
  longitude: number;
  collectionid: string;
  _id: string;
}