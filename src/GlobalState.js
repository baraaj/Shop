import React, {createContext, useState, useEffect} from 'react'
 
import axios from 'axios'

export const GlobalState = createContext()


export const DataProvider = ({children}) =>{
    

    return (
        <GlobalState.Provider value={ "value in global"}>
            {children}
        </GlobalState.Provider>
    )
}