import React from "react";
import logo from '../UI/book.png';
import Card from "../UI/Card";
import exploreModeal from "./Explore.css"

const Explore = (props) => {

    return (
        <div className="tex">

            <h2 className="mr">اكتشف عين العربيه </h2>
                <div className="fl">
                    {props.Data.map((data, index) => {
                        return (<Card key={index} >
                            <img src={logo} alt="logo"></img>
                            <h5>{data.title}</h5>
                            <h6>{data.amount}</h6>
                        </Card>)
                    })}
                </div>
                {/* <Card>
                <img src={logo}  alt="logo"></img>
                <h5>{props.title}</h5>
                <h6>{props.amount}</h6>
                </Card> */}
              


            </div>
        
    );

}


export default Explore;
