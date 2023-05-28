import { instance } from "../instance";

export interface IUserParams {
  email?: string;
  password?: string;
  password_confirmation?: string;
  full_name?: string;
  gender?: string;
  age?: number;
  avatar?: string;
}

const UserApi = {
  getUser: () => {
    return instance.get("/auth");
  },
  updateUser: (params: IUserParams) => {
    return instance.put("/user/update", params);
  },
  updateAvatar: (avatar: boolean) => {
    return instance.put("/user/update", { avatar });
  },
};
export default UserApi;
