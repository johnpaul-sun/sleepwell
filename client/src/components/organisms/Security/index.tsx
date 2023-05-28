import { useEffect, useState } from "react";

import Input from "~/components/atoms/Input";
import Button from "~/components/atoms/Button";
import UserApi from "~/api/user/UserApi";
import { toast } from "react-hot-toast";

const Security = () => {
  const initialParams = {
    current_password: "",
    password: "",
    password_confirmation: "",
  };

  const [params, setParams] = useState(initialParams);

  const handleSecurityChange = (e: any) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    toast.promise(UserApi.updateUser(params), {
      loading: "Saving...",
      success: "User information updated",
      error: (err) => `${err.response.data.message}`,
    });
  };

  return (
    <>
      <div className="flex flex-col p-6">
        <div className="flex flex-col">
          <Input
            type="password"
            name="current_password"
            label="Current Password"
            placeholder="••••••••"
            onChange={handleSecurityChange}
          />
          <Input
            type="password"
            name="password"
            label="New Password"
            placeholder="••••••••"
            onChange={handleSecurityChange}
          />
          <Input
            type="password"
            name="password_confirmation"
            label="Confirm Password"
            placeholder="••••••••"
            onChange={handleSecurityChange}
          />
        </div>
        <Button onClick={handleSubmit} className="mt-10">
          Submit
        </Button>
      </div>
    </>
  );
};

export default Security;
