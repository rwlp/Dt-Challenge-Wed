import { ModelVehicle } from "@/utils/types"; 


export interface CardCarProps {
  car: ModelVehicle;
}

export default function CardCar({car}: CardCarProps) {
  
  return (
    <div className="min-w-52 h-32 mx-1 flex flex-col items-center justify-center p-2  border border-gray-200 rounded-lg shadow bg-gray-100 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold text-wrap text-gray-900 dark:text-white">{car.Model_Name}</h5>
      <p className="font-thin text-gray-700 dark:text-gray-400">{car.Make_Name}</p>
    </div>
  )
}