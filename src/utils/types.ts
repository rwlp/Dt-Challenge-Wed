export interface ResponseFromServer {
  "Count": number;
  "Message": string,
  "SearchCriteria": string,
  "Results": unknown;
}

export interface MakerData {
  "MakeId": number;
  "MakeName": string;
  "VehicleTypeId": number;
  "VehicleTypeName": string;
}