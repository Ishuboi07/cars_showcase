"use client";
import { useState, Fragment } from "react"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";
import { updateSearchParams } from "@/utils";

type params = {
  title: string,
  value: string
}

const CustomFilter = ({title, options}: CustomFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);
  const handleUpdateParams = (e: params) => {
    const newPathName = updateSearchParams(title, e.value.toLowerCase());

    router.push(newPathName);
  }
  return (
    <div className="w-fit">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e); // Update the selected option in state
          handleUpdateParams(e); // Update the URL search parameters and navigate to the new URL
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className='custom-filter__btn'>
            <span className="block truncate">{selected.title}</span>
            <Image
              src='/chevron-up-down.svg'
              alt='chevron'
              width={20}
              height={20}
              className='ml-4 object-contain'
            />
            <Transition 
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='custom-filter__options'>
                {options.map((option) => (
                  <Listbox.Option
                    key={option.title}
                    value={option}
                    className={({active}) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`} 
                  >
                    {({active}) => (
                      <span className={`block truncate ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}>
                        {option.title}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter