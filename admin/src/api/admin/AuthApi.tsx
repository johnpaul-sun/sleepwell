import { instance } from "../instance";

export interface ILoginParams {
  email: string;
  password: string;
}

const AuthApi = {
  login: (params: any) => {  
    return instance.post("/login", params);
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
