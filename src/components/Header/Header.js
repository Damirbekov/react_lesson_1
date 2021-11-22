import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = (props) => {
    return (
        <div style={{display:"flex",justifyContent: "space-between",alignItems:"center" }}>
            <img srs={props.logo} alt="logo"
            width="200px"/>
            <Navbar cars={props.cars} 
            getInfo={props.getInfo}/>
        </div>
    );
};

export default Header;