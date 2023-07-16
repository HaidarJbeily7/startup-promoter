export interface Product {
  id?: number;
  title?: string;
  founders?: string[];
  developers?: string[];
  logo?: string; // URL of the image
  description?: string;
  existing_problems?: string;
  problem_solving?: string;
  product_expectations?: string;
  tags?: Tag[];
  promo_video?: string; // URL of the video
  website?: string; // URL of the website
}

export interface SocialMedia {
  id: number;
  product: number; // Product's id
  platform: 'facebook' | 'twitter' | 'instagram';
  link: string; // URL of the social media page
}

export interface Comment {
  id: number;
  product: number; // Product's id
  user: number; // User's id
  text: string;
}

export interface Reaction {
  id: number;
  product: number; // Product's id
  user: number; // User's id
  type: 'like' | 'dislike';
}


export interface Tag {
  id: number;
  name: string;
}

export interface User {
  id: number;
  email: string;
  photo: string | null;
}



export interface UserCredintials{
  email: string,
  password: string
}