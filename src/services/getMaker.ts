import { BASE_API_URL } from "@/utils/constants";
import { MakerData, ResponseFromServer } from "@/utils/types";


export default function getMakers(): Promise<MakerData[]> {

  return fetch(`${BASE_API_URL}/vehicles/GetMakesForVehicleType/car?format=json`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error in data Request ');
      }

      return res.json();
    })
    .then(response => response.Results as MakerData[])
}