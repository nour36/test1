import React from "react";
import BannerModel from './Banner.css'
import Container from "../UI/Container";


const Banner = (props) => {

  return (
    <div className="tex">

      <h1 className="mr">
        عين العربية
      </h1>
      <p className="mr">
        ادرك مجمع الملك حجم اهميه
      </p>
      {/* <select className="smr">
        <option value="All">الكل</option>
        <option value="All1">اي شي</option>
        <option value="All2">اي شي</option>
      </select> */}
      <Container />
      {/* <button type="submit" value="بحث"  /> */}

    </div>

  )


}

export default Banner;