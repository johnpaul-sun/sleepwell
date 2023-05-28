import { Menu } from "@headlessui/react";

import ChevronDownIcon from "~/shared/icons/ChevronDownIcon";

interface IDropdown {
  name: string;
  value: string;
  defaultValue: string;
  list: IItem[];
  onSelect: any;
}

interface IItem {
  id?: number;
  label?: string;
}

const Dropdown = ({ name, value, defaultValue, list, onSelect }: IDropdown) => {
  return (
    <Menu
      as="div"
      className="relative flex w-full px-4 py-2 font-medium 
        rounded border-swell-30 border-2 text-base whitespace-nowrap"
    >
      <Menu.Button className="flex w-full items-center justify-between">
        <div>{value || defaultValue}</div>
        <ChevronDownIcon />
      </Menu.Button>
      <Menu.Items className="absolute w-full top-0 left-0 translate-y-1/3 bg-white rounded border-2">
        <div className="flex flex-col divide-y-2">
          {list.map((item) => {
            return (
              <div
                key={item.id}
                className="hover:bg-swell-light px-2 py-1 first:rounded-t last:rounded-b"
              >
                <Menu.Item>
                  {({ active }) => (
                    <button
                      name={name}
                      value={item.label}
                      onClick={(e) => onSelect(e)}
                      className={`${
                        active ? " text-white" : "text-gray-900"
                      }  group flex text-base w-full items-center`}
                    >
                      {item.label}
                    </button>
                  )}
                </Menu.Item>
              </div>
            );
          })}
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
