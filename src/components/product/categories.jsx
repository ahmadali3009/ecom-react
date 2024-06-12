import React from 'react';
import Productlist from './productlist';

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
              <Productlist imgurl={"/src/assets/imgs/category1.jpg"} code={"Leather-Jacket"} text={"Leather Jacket"}/>
            </div>

            {/* Second Category */}
            <div className="col">
              <Productlist imgurl={"/src/assets/imgs/category2.jpg"} code={"Sports-Wear"} text={"Sports Wear"}/>
            </div>

            {/* Third Category */}
            <div className="col">
              <Productlist imgurl={"/src/assets/imgs/category3.jpg"} code={"Active-Wear"} text={"Active Wear"}/>
            </div>

            {/* Add more categories as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;