import React from "react";
import Label from "../UI/Label";
import ElectronicServicesModel from "./ElectronicServices.css";
import logo from '../UI/book.png';
import ElectronicServicesCard from "../UI/ElectronicServicesCard";
import imgg from "../UI/imgg.PNG" 

const ElectronicServices = (props) => {

    return(
        <div className="tex">

        <h2 className="mr">الخدمات الالكترونية   </h2>
        <div className="all">
        <div>
        {props.Data.map((data, index) => {
                return (<Label key={index} >
                    <div className="fll">
                    <img src={logo} alt="logo" className="bkg"></img>
                    <h5>{data.title}</h5>
                    </div>
                   
                </Label>)
            })}
        </div>
        <div>
        <ElectronicServicesCard>
                    <div >
                    <h5>عين العربيه</h5>
                    <p>في ذكرى يومنا الوطني نحمد الله دائما على ما انعم به علينا في هذه البلاد من امن واستقرار ورخاء وتنميه و سنسعى</p>
                    <img src={imgg} alt="img" className="imggg"></img>
                    <input type="submit" value="تابعنا على تويتر" className="btn"/>
                    </div>
                   
                </ElectronicServicesCard>
        </div>
        </div>
        
      
    </div>
    );

}

export default ElectronicServices;