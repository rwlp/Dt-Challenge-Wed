'use client';

import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import getMakers from "@/services/getMaker";
import { useAppDispatch } from "@/utils/hooks/reduxHooks";
import { setMakerId, setYear } from "@/context/searchSlicer";
import NextButton from "../NextButton/NextButton";

export default async function Selectors() {
  const [makersListNames, setMakersList] = useState<string[] | null>(null);
  const [makersListIds, setMakersListIds] = useState<string[] | null>(null);
  const [selectedId, setSelectedId] = useState('0');
  const [selectedYear, setSelectedYear] = useState('');
  const dispatcherRedux = useAppDispatch();
  const yearsList = new Array(9).fill(0).map((_, index) => String(2015 + index));

  useEffect(() => {
    getMakers()
      .then(makersList => {
        setMakersList(() => {
          setMakersListIds(makersList.map(maker => String(maker.MakeId)));

          return makersList.map(maker => maker.MakeName);
        })
      });
  }, []);

  useEffect(() => {
    dispatcherRedux(setMakerId(selectedId));
    dispatcherRedux(setYear(selectedYear));
  }, [selectedId, selectedYear])

  return (
    <div
      className="w-full h-full flex justify-between"
      >
        {makersListNames && 
        (
          <>
            <Dropdown  
              listOptions={makersListNames}
              placeHolderValue="Maker"
              listOfIds={makersListIds}
              dispatcher={setSelectedId}
            />

            <Dropdown  
              listOptions={yearsList}
              placeHolderValue="Year"
              listOfIds={null}
              dispatcher={setSelectedYear}
            />

          </>
        )}
    </div>
  )
}