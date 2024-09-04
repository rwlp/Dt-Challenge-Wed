'use client';

import { ModelVehicle } from "@/utils/types";
import { useEffect, useRef, useState } from "react";
import CardCar from "../CardCar/CardCar";
import { getModelsForMakeAndYear } from "@/services/getModelsForMakeAndYear";

interface CarListProps {
  year: string;
  makeId: string;
}

async function CarList({ year, makeId }: CarListProps) {
  const [cars, setCars] = useState<ModelVehicle[] | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    getModelsForMakeAndYear(makeId, year)
      .then(data => {
        setCars(data);
      });
  }, []);


  return (
    <>
      {cars && <h4 className="text-lg">All {cars[0].Make_Name} cars from year {year}</h4>}
      <div className="w-full h-44 flex flex-col justify-start md:flex-row  items-center gap-1 overflow-y-auto md:overflow-x-auto animate-fadeIn" ref={scrollContainerRef}>
        {cars?.map((car, index) => {
          return (
            <CardCar key={index} car={car} />
          );
        })}
      </div>
    </>

  );
};

export default CarList;