export interface MenuItem {
  path: string;
  icon?: any;
  label?: string;
}

export interface LoginBody {
  email: string;
  password: string;
}

export interface RegisterBody {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface User {
  active: boolean;
  craeted: string;
  devicemax: number;
  email: string;
  password: string;
  license: string;
  location: string;
  role: string[];
  rulemax: number;
  topicmax: number;
  widgetmax: number;
  _id: string;
}

export interface AuthenticatedUser {
  user: User;
}
