import { createContext } from "react";
import useGetData from "../hooks/useGetData";

export const myContext = createContext()

export default function DataProvider ({children}){
    const { data } = useGetData()

    return (
        <myContext.Provider value={ {data} }>
            {children}
        </myContext.Provider>
    )
}