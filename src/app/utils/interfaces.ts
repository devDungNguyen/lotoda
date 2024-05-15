export interface MenuItem {
  path: string;
  icon?: any;
  label?: string;
  forRole?: Roles;
}

export enum Roles {
  'user' = 'user',
  'admin' = 'admin',
}

export interface LoginBody {
  email: string;
  password: string;
  [key: string]: string | undefined | null;
}

export interface RegisterBody {
  username?: string;
  email: string;
  password: string;
  [key: string]: string | undefined | null;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface User {
  active: boolean;
  craeted: string;
  devicemax: number;
  name: string;
  email: string;
  phone: string;
  password: string;
  license: string;
  location: string;
  roles: string[];
  rulemax: number;
  topicmax: number;
  widgetmax: number;
  _id: string;
}

export interface AuthenticatedUser {
  user: User;
}

export interface AuthenticatedEditUser {
  user: {
    name?: string;
    phone?: string;
    location?: string;
    avatar?: string;
    [key: string]: string | undefined | null;
  }
}

export interface CloudinaryImageResponse {
  id: string;
  batchId: string;
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: string[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  access_mode: string;
  original_filename: string;
  path: string;
  thumbnail_url: string;
}
