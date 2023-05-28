/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Disclosure } from "@headlessui/react";

import EllipseIcon from "~/shared/icons/EllipseIcon";
import ChevronDownIcon from "~/shared/icons/ChevronDownIcon";
import TrashIcon from "~/shared/icons/TrashIcon";
import EditIcon from "~/shared/icons/EditIcon";
import EllipsePlusIcon from "~/shared/icons/EllipsePlusIcon";
interface IAccordion {
  title: string;
  children: React.ReactNode;
  type?: string;
  hasAdd?: boolean;
  hasDelete?: boolean;
  handleAdd?: any;
  handleDelete?: any; 
  avatar?: string;
  avatar_state?: boolean;
}

const Accordion = ({
  title,
  children,
  type = "preQuestion",
  hasAdd = false,
  hasDelete = false,
  handleAdd,
  handleDelete, 
  avatar,
  avatar_state = false
}: IAccordion) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <div className="flex w-full justify-between items-center space-x-4 p-4 rounded-lg bg-swell-dark text-white shadow-md">
            <Disclosure.Button className="relative flex w-full justify-between items-center">
              <div className="flex items-center space-x-3">
                {avatar_state ? <img src={avatar || '/images/logo.png'} alt="avatar" width={39} className="z-0"/> : <EllipseIcon type={type} />} 
                <div className="text-lg font-medium text-start">{title}</div>
              </div>
            </Disclosure.Button>
            <div className="flex items-center space-x-4">
              {hasAdd && (
                <div onClick={handleAdd} className="cursor-pointer">
                  <EllipsePlusIcon type={type} />
                </div>
              )}
              {hasDelete && (
                <div onClick={handleDelete} className="cursor-pointer">
                  <TrashIcon />
                </div>
              )}
            </div>
            <Disclosure.Button>
              <ChevronDownIcon
                className={`transition-all ease ${
                  !open && "rotate-180 transition-all ease"
                }`}
              />
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className="bg-gray p-2 text-base shadow-lg rounded-lg">
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Accordion;
