import CarList from "@/components/CarList/CarList";
import { MakerData } from "@/utils/types";

interface ResultParams {
  year: string;
  makeId: string;
}

export async function generateStaticParams() {
  const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json');
  const data = await response.json();
  const makes = data.Results;

  const years = Array.from({ length: 2024 - 2015 + 1 }, (_, i) => 2015 + i);

  const paths = makes.flatMap((make: MakerData) =>
    years.map((year) => ({
      makeId: make.MakeId.toString(),
      year: year.toString(),
    }))
  );

  return paths;
}

const Result: React.FC<{ params: ResultParams }> = ({ params }) => {
  const { makeId, year } = params;
  
  return (  
    <>
      <CarList year={year} makeId={makeId}/>
    </>
      
  )
};

export default Result;