import React,{useEffect,useContext} from 'react';
import{DataProvider} from './../../GlobalState'
import { GlobalState } from './../../GlobalState';
const Pages = () => {
    const value=useContext(GlobalState);
    
    return (
        <div>
           {value} 
        </div>
    );
}

export default Pages;
