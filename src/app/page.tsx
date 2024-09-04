import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header"
import ReduxProvider from "@/components/ReduxProvider/ReduxProvider";
import Selectors from "@/components/Selectors/Selectors";
import { Suspense } from "react";
import Loading from "./loading";
import NextButton from "@/components/NextButton/NextButton";

export default function Home() {
  return (
    <>
      <h1
        className="text-blue-950 dark:text-blue-50 animation-fadeIn  text-xl md:text-2xl font-bold animate-fadeIn"
      >
        Welcome to Search Car Engine
      </h1>
      <h4
        className="text-blue-800 dark:text-blue-100 text-sm"
      >
        Simple. Efficient. Precisely Your Car.
      </h4>

      <ReduxProvider >
        <div
          className="w-80 h-44 p-3"
        >
          <Suspense fallback={<Loading />} >
            <Selectors />
          </Suspense>
        </div>

        <NextButton />
      </ReduxProvider>
    </>
  );
}
