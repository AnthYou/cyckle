export interface Bike {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export type Gender = "male" | "female" | "non-binary";

export interface User {
  id: number;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  height: number;
  address?: string;
  city?: string;
}
