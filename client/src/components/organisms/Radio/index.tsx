import { RadioGroup } from "@headlessui/react";
import { useState } from "react";

interface IRadio {
  options: any;
  callback: any;
  keyValue: any;
}

export default function Radio({ options, callback, keyValue }: IRadio) {
  const [selected, setSelected] = useState<any>(null);

  return (
    <div className="w-full">
      <RadioGroup value={selected} onChange={setSelected}>
        <div className="space-y-2">
          {options && options?.map((option: any) => (
            <RadioGroup.Option
              key={option.id}
              value={option}
              onMouseDown={() => {
                callback(option);
              }}
              className={({ active, checked }) =>
                ` 
                  ${
                    active || checked
                      ? "bg-swell-10 text-white border-swell-10"
                      : ""
                  } 
                    relative flex cursor-pointer rounded px-5 py-2 shadow-md border-2 border-swell-30`
              }
            >
              {({ active, checked }) => (
                <div className="flex w-full text-swell-dark text-lg font-medium items-center justify-center">
                  <RadioGroup.Label
                    as="p"
                    className={`${(active || checked) && "text-swell-60"}`}
                  >
                    {option[keyValue]}
                  </RadioGroup.Label>
                </div>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
