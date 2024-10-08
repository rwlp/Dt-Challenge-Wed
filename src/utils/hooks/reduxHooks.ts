import { RootState } from "@/context/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


export const useAppDispatch = () => useDispatch();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;