import { instance } from "../instance";

export interface IUserParams {
  password?: string;
  password_confirmation?: string;
}

const UserApi = {
  updateUser: (params: IUserParams) => {
    return instance.put("/user/update", params);
  },

  getAssessment: () => {
    return instance.get("/admin/assessment");
  },

  getUsersAssessment: () => {
    return instance.get("/admin/manage-users");
  },

  createPreQuestion: (data: any) => {
    return instance.post("/assessment/pre-questions", data);
  },
  createPreChoice: (data: any) => {
    return instance.post("/assessment/pre-choices", data);
  },
  createMainQuestion: (data: any) => {
    return instance.post("/assessment/main-questions", data);
  },
  createMainChoice: (data: any) => {
    return instance.post("/assessment/main-choices", data);
  },
  createRecommendation: (data: any) => {
    return instance.post("/assessment/recommendations", data);
  },

  updatePreQuestion: (data: any, id: any) => {
    return instance.put(`/assessment/pre-questions/${id}`, data);
  },
  updatePreChoice: (data: any, id: any) => {
    return instance.put(`/assessment/pre-choices/${id}`, data);
  },
  updateMainQuestion: (data: any, id: any) => {
    return instance.put(`/assessment/main-questions/${id}`, data);
  },
  updateMainChoice: (data: any, id: any) => {
    return instance.put(`/assessment/main-choices/${id}`, data);
  },
  updateRecommendation: (data: any, id: any) => {
    return instance.put(`/assessment/recommendations/${id}`, data);
  },

  deletePreQuestion: (id: any) => {
    return instance.delete(`/assessment/pre-questions/${id}`);
  },
  deletePreChoice: (id: any) => {
    return instance.delete(`/assessment/pre-choices/${id}`);
  },
  deleteMainQuestion: (id: any) => {
    return instance.delete(`/assessment/main-questions/${id}`);
  },
  deleteMainChoice: (id: any) => {
    return instance.delete(`/assessment/main-choices/${id}`);
  },
  deleteRecommendation: (id: any) => {
    return instance.delete(`/assessment/recommendations/${id}`);
  },
};

export default UserApi;
