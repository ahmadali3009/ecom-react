import React from 'react';
import Productlist from './productlist';
import c1 from "../../assets/imgs/category1.png"
import c2 from "../../assets/imgs/pic3.jpg"
import c3 from "../../assets/imgs/vers.png"

const Categories = () => {
  return (
    <div className="container">
      <div className="row">
        {/* Left Side: Categories List */}
        {/* <div className="col-md-3">
          <h3>Categories List</h3>
          <ul>
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
            Add more categories as needed
          </ul>
        </div> */}

        {/* Right Side: Categories with Images */}
        <div className="col-md-9">
        <h3>Categories with Images</h3>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {/* First Category */}
            <div className="col">
              <Productlist imgurl={c1} code={"Leather-Jacket"} text={"Leather Jacket"}/>
            </div>

            {/* Second Category */}
            <div className="col">
              <Productlist imgurl={c2} code={"Sports-Wear"} text={"Sports Wear"}/>
            </div>

            {/* Third Category */}
            <div className="col">
              <Productlist imgurl={c3} code={"Versatile-Wear"} text={"Versatile Wear"}/>
            </div>

            {/* Add more categories as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;