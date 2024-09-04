'use client';

import useDebouncer from "@/utils/hooks/debouncer";
import React, { useState, FocusEvent, useRef, ChangeEvent, useEffect, Dispatch } from "react"

interface DropdownProps {
  placeHolderValue: string;
  listOptions: string[];
  dispatcher: Dispatch<React.SetStateAction<string>>
  listOfIds?: string[] | null;
}

export default function Dropdown({placeHolderValue, listOptions, listOfIds, dispatcher}: DropdownProps): React.ReactNode {
  const [inputValue, setInputValue] = useState('');
  const [isDown, setIsDonw] = useState(false);
  const [searchList, setSearchList] = useState(listOptions);
  const debouncedValue = useDebouncer(inputValue);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOnBlurContainer = (event: FocusEvent<HTMLDivElement, Element>) => {
    if (containerRef.current && !containerRef.current.contains(event.relatedTarget)) {
      setIsDonw(() => {
        setInputValue('');

        return false;
      });
    }
  }

  const handleOnChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  useEffect(() => {
    const filteredList = listOptions.filter(option => option.toLowerCase().includes(debouncedValue.toLowerCase()));

    if (debouncedValue === '') {
      setSearchList(listOptions);
      dispatcher('');
    } else {
      setSearchList(filteredList);
    }
  }, [debouncedValue]);

  return (
    <div
      className="relative w-36 h-full rounded-lg"
      ref={containerRef}
      onFocus={() => setIsDonw(true)}
      onBlur={(event) => handleOnBlurContainer(event)}
      >
        <input
          className="w-full bg-blue-100 rounded-lg p-3"
          placeholder={placeHolderValue}
          value={inputValue}
          onChange={handleOnChangeInput}
        >
        </input>

        <div 
          className="absolute top-16 w-full max-h-32 flex flex-col gap-3 justify-start overflow-y-auto scrollbar-hidden">
          {isDown &&
            searchList.map((option, index) => {

              return (
                <button 
                  key={`${option}${index}`}
                  className="w-full border bg-blue-400 border-blue-500 p-3 items-center text-center rounded-lg"
                  onClick={() => setInputValue(() => {
                    setIsDonw(false);
                    if (listOfIds) {
                      dispatcher(listOfIds[index])
                    } else {
                      dispatcher(option);
                    }
                    return option;
                  })}
                  >
                  {option}
                </button>
              )
            })
          }
        </div>
    </div>
  )
}