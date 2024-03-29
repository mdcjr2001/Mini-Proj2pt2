import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Sidebar = ({children}) => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen)
    const menuItem=[
        {
            path:"/NBA",
            name:"NBA",
        },
        {
            path:"/NFL",
            name:"NFL",
        },
        {
            path:"/UFC",
            name:"UFC",
        },
        {
            path:"/Mainpage",
            name:"Mainpage",
        },
        {
            path:"/Profile",
            name:"Profile",
        },
        {
            path:"/Messages",
            name:"Messages",
        },
        {
            path:"/Settings",
            name:"Settings",
        },
    ]
    return(
        <div className="container">
            <div style={{width: isOpen ? "300px" : "50px"}}className="siderbar">
            <div className="top_section">
               <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Sportcentral</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}}className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
            </div>
    );
};

export default Sidebar;