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
