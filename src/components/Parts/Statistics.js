import React from "react";
import logo from '../UI/book.png';
import Card from "../UI/Card";
import statisticsModeal from "./Statistics.css"

const Statistics = (props) => {

    return(
        <div className="tex">

        <h2 className="mr">موشرات واحصائيات  </h2>
        <h5 className="pmr"> توضح المشرات والاحصائيات اعداد الناطقين باللغه العربيه واعداد الذين يستخدمونها كلغه ثانيه</h5>

        <div className="fl">
            {props.Data.map((data, index) => {
                return (<Card key={index} >
                    <img src={logo} alt="logo"></img>
                    <h6>{data.amount}</h6>
                    <h5>{data.title}</h5>
                </Card>)
            })}
        </div>
    </div>
    );

   
}
export default Statistics;
