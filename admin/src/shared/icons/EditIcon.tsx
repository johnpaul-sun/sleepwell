import React from "react";

interface IEditIcon {
  className?: string;
}

const EditIcon = ({ className }: IEditIcon) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.897 3.10294C19.9597 2.16568 18.4401 2.16568 17.5028 3.10294L8.3999 12.2059V15.6H11.794L20.897 6.49705C21.8342 5.55979 21.8342 4.0402 20.897 3.10294Z"
        fill="#0B061E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.3999 7.19999C2.3999 5.87451 3.47442 4.79999 4.7999 4.79999H9.5999C10.2626 4.79999 10.7999 5.33725 10.7999 5.99999C10.7999 6.66274 10.2626 7.19999 9.5999 7.19999H4.7999V19.2H16.7999V14.4C16.7999 13.7373 17.3372 13.2 17.9999 13.2C18.6626 13.2 19.1999 13.7373 19.1999 14.4V19.2C19.1999 20.5255 18.1254 21.6 16.7999 21.6H4.7999C3.47442 21.6 2.3999 20.5255 2.3999 19.2V7.19999Z"
        fill="#0B061E"
      />
    </svg>
  );
};

export default EditIcon;
