export type BikeCategory = "road" | "mountain" | "city" | "gravel" | "touring";
export type BikeGender = "male" | "female" | "unisex";

export interface Bike {
  id: number;
  name: string;
  brand: string;
  status: string;
  category: BikeCategory;
  gender: BikeGender;
  size: string;
  minDays: number;
  pricePerDayCents: number;
  street: string;
  postalCode: string;
  city: string;
  address: string;
  latitude: number;
  longitude: number;
  owner: User;
  model?: string;
  releaseYear?: number;
  color?: string;
  groupset?: string;
  isElectric?: boolean;
  description?: string;
  weight?: number;
  createdAt?: Date;
  updatedAt?: Date;
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
