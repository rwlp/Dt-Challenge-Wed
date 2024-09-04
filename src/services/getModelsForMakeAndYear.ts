import { ModelVehicle } from "@/utils/types";


export function getModelsForMakeAndYear(makeId: string, year: string): Promise<ModelVehicle[]> {
  return fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`)
    .then(res => res.json())
    .then(data => {
      return data.Results as ModelVehicle[];
    });
  }