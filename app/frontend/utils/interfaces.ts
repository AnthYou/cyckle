export type BikeCategory = "road" | "mountain" | "city" | "gravel" | "touring";

export type BikeGender = "male" | "female" | "unisex";

export const translateBikeGender = (bikeGender: BikeGender) => {
  switch (bikeGender) {
    case "male":
      return "Homme";
      break;
    case "female":
      return "Femme";
    case "unisex":
      return "Unisexe";
    default:
      break;
  }
};

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
  averageRating: number;
  latitude: number;
  longitude: number;
  owner: User;
  photoUrls?: string[];
  reviews: Review[];
  model?: string;
  releaseYear?: number;
  color?: string;
  groupset?: string;
  isElectric?: boolean;
  batteryLife?: number;
  description?: string;
  weight?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export type Gender = "male" | "female" | "non-binary";

export const translateGender = (gender: Gender) => {
  switch (gender) {
    case "male":
      return "Homme";
      break;
    case "female":
      return "Femme";
    case "non-binary":
      return "Non-binaire";
    default:
      break;
  }
};

export interface User {
  id: number;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  height: number;
  photoUrl?: string;
  address?: string;
  city?: string;
}

export interface Review {
  id: number;
  comment: string;
  rating: number;
  user: User;
  createdAt?: Date;
}
