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
