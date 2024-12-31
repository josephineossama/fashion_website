import React from "react";

interface ButtonProp{
    label:String;
    onClick?: () => void;
    className?: string;
    
}


const button:React.FC<ButtonProp>=({onClick,label,className})=>{
return(
    <button onClick={onClick} className={className || 'standard-button'}>
     {label}
    </button>
)
}

export default button;