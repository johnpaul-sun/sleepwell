import { instance } from "../instance";

export interface IUserParams {
  email?: string;
  password?: string;
  password_confirmation?: string;
  full_name?: string;
  gender?: string;
  age?: number;
}

export interface ILoginParams {
  email: string;
  password: string;
}

const AuthApi = {
  register: (params: IUserParams) => {
    const config = {
      method: "POST",
      url: "/register",
      params: {
        ...params,
      },
    };

    return instance.request(config);
  },

  login: (params: ILoginParams) => {
    const config = {
      url: "/login",
      method: "POST",
      params: {
        ...params,
      },
    };
    return instance.request(config);
  },

  logout: () => {
    const config = {
      url: "/logout",
      method: "POST",
    };
    return instance.request(config);
  },
};
export default AuthApi;
