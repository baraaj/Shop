import React,{useEffect,useContext} from 'react';
import{DataProvider} from './../../GlobalState'
import { GlobalState } from './../../GlobalState';

const Header = () => {
    const value=useContext(GlobalState);
    return (
        <div>
          {value}  
        </div>
    );
}

export default Header;
