import React from "react";
import './App.css';
import Banner from './components/Parts/Banner';
import Card from "./components/UI/Card";
import logo from './components/UI/book.png';
import Explore from "./components/Parts/Explore";
import Statistics from "./components/Parts/Statistics";
import ElectronicServices from "./components/Parts/ElectronicServices";

function App() {

    const Data =
    {
        "exploreData":
            [
                {
                    title: "مكتبه اللغه العربيه",
                    amount: "10عناصر",
                },
                {
                    title: "موشرات واحصائيات",
                    amount: "10عناصر",
                },
                {
                    title: "مكتبه اللغه العربيه",
                    amount: "10عناصر",
                },
                {
                    title: "الموسسات والافراد",
                    amount: "10عناصر",
                },
                {
                    title: "الفعاليات والمبادرات",
                    amount: "10عناصر",
                }

            ]
        , "statisticsData": [
            {
                amount: "423,000,00",
                title: "عدد الناطقين الاصلين",

            },
            {
                amount: "253,000,000",
                title: "الناطقون بها لغه ثانيه",
            },
            {
                amount: "2,452",
                title: "اللهجات العربيه",
            },
            ,
            {
                amount: "1,452",
                title: "الخطوط والحروف",
            },
            ,
            {
                amount: "235",
                title: "التخصصات العلميه",
            },
        ],
        "ElectronicServices": [
            {
                title: "اضافه او تعديل "
            },
            {
                title: "طلب احصائيه"
            },
            {
                title: "طلب نبذه عن كتاب "
            },
            {
                title: "تقديم مقترحات"
            },
            

        ]
    }
    return (
        <div>
            <Banner />
            <Explore Data={Data.exploreData} />
            <Statistics Data={Data.statisticsData} />
            <ElectronicServices Data={Data.ElectronicServices}/>
        </div>


    );

}

export default App;
