import Image from "next/image";
import { useContext, useEffect, useState } from "react";

import Input from "~/components/atoms/Input";
import Button from "~/components/atoms/Button";
import Dropdown from "~/components/atoms/Dropdown";
import RefreshIcon from "~/shared/icons/RefreshIcon";
import UserApi from "~/api/user/UserApi";
import { toast } from "react-hot-toast";
import { GlobalContext } from "~/context/GlobalContext";

const Profile = () => {
  const { auth } = useContext(GlobalContext) as any; 
  const [authUser, setAuthUser] = auth; 
  const initialParams = {
    full_name: "",
    email: "",
    gender: "",
    age: 0,
  };

  const [avatar, setAvatar] = useState("");
  const [email, setEmail] = useState("");
  const [params, setParams] = useState(initialParams);
  const genders = [
    { id: 1, label: "Male" },
    { id: 2, label: "Female" },
    { id: 3, label: "Non-binary" },
    { id: 4, label: "Prefer not to say" },
  ];

  useEffect(() => {
    UserApi.getUser().then((res: any) => {
      const { full_name, age, gender, email, avatar } = res.data;
      setAvatar(avatar);
      setEmail(email)
      setAuthUser(res.data)
      setParams({ ...params, full_name, age, gender });
    });
  }, []);

  const handleChange = (e: any) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const handleUpdateAvatar = () => {
    UserApi.updateAvatar(true).then((res) => {
      setAvatar(res.data.data.avatar);
      setAuthUser(res.data.data)
    });
  };

  const handleSubmit = () => {
    toast.promise(UserApi.updateUser(params).then((res)=>{ 
      setAuthUser(res.data.data)
    }), {
      loading: "Saving...",
      success: "User information updated",
      error: (err) => `${err.response.data.message}`,
    });
  };

  return (
    <div className="flex justify-between flex-col p-6">
      <div className="flex justify-center relative">
        <Image
          src={avatar || "/images/AvatarLoader.png"}
          alt="avatar"
          priority
          width={200}
          height={200}
          className=" w-[100px] h-[100px] rounded-full"
        />
        <button onClick={handleUpdateAvatar}>
          <RefreshIcon className="absolute bottom-0 -translate-x-full" />
        </button>
      </div>
      <div>
        <Input
          value={params?.full_name}
          label="Fullname"
          name="full_name"
          placeholder="John Doe"
          onChange={handleChange}
        />
        <Input 
          value=""
          label="Email address"
          name="email"
          placeholder={email}
          onChange={handleChange}
        />
        <div className="flex space-x-2">
          <div className="flex w-[189px] flex-col space-y-1 pb-2">
            <label className="text-lg font-medium" htmlFor="gender">
              Gender
            </label>
            <Dropdown
              name="gender"
              defaultValue="Male"
              value={params?.gender}
              list={genders}
              onSelect={handleChange}
            />
          </div>
          <Input
            value={params?.age}
            type="number"
            label="Age"
            name="age"
            placeholder="18"
            className="flex w-[80px]"
            onChange={handleChange}
          />
        </div>
      </div>
      <Button onClick={handleSubmit} className="mt-10">
        Submit
      </Button>
    </div>
  );
};

export default Profile;
