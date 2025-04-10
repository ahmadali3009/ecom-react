import React, { useState } from 'react';
import Jacketproducts from "../jacketproducts";
import lp1 from "../../assets/imgs/homepage1.jpg";
import lp2 from "../../assets/imgs/homepage2.jpg";
import lp3 from "../../assets/imgs/homepage3.jpg";
import lp4 from "../../assets/imgs/homepage4.jpg";
import lp5 from "../../assets/imgs/j1 (1).jpg";
import lp6 from "../../assets/imgs/j1 (2).png";
import lp7 from "../../assets/imgs/j1 (3).jpg";
import lp8 from "../../assets/imgs/j1 (4).jpg";
import lp9 from "../../assets/imgs/j1 (5).jpg";
import lp10 from "../../assets/imgs/category1.png";
import lp11 from "../../assets/imgs/j1 (7).jpg";
import lp12 from "../../assets/imgs/j1 (8).jpg";
import lp13 from "../../assets/imgs/j1 (9).jpg";
import lp14 from "../../assets/imgs/j1 (10).png";
import lp15 from "../../assets/imgs/j1 (11).jpg";
import lp16 from "../../assets/imgs/j1 (12).jpg";
import lp17 from "../../assets/imgs/j1 (13).png";
import lp18 from "../../assets/imgs/j1 (14).jpg";
import lp19 from "../../assets/imgs/j1 (15).jpg";
import lp20 from "../../assets/imgs/j1 (16).jpg";

const products = [
  { imgurl: lp1, title: "Tawton Leather Fashion Jacket", code: "LJ-8123" },
  { imgurl: lp2, title: "Nicole Ladies Jacket", code: "LJ-8198" },
  { imgurl: lp3, title: "Greta Ladies Jacket", code: "LJ-8199" },
  { imgurl: lp4, title: "Solar Leather Fashion Jacket", code: "LJ-8124" },
  { imgurl: lp5, title: "Emir Leather Fashion Jacket", code: "LJ-8168" },
  { imgurl: lp6, title: "DOWNEY LEATHER FASHION JACKET", code: "LJ-8177" },
  { imgurl: lp7, title: "Duris Leather Fashion Jacket", code: "LJ-8171" },
  { imgurl: lp8, title: "Dustin Leather Fashion Jacket", code: "LJ-8155" },
  { imgurl: lp9, title: "Denzel Leather Fashion Jacket", code: "LJ-8154" },
  { imgurl: lp10, title: "DEPP LEATHER FASHION JACKET", code: "LJ-8144" },
  { imgurl: lp11, title: "DEXTER LEATHER FASHION JACKET", code: "LJ-8131" },
  { imgurl: lp12, title: "Dan Leather Fashion Jacket", code: "LJ-8126" },
  { imgurl: lp13, title: "Daniel Leather Fashion Jacket", code: "LJ-8113" },
  { imgurl: lp14, title: "Daz Leather Fashion Jacket", code: "LJ-8116" },
  { imgurl: lp15, title: "Denes Leather Fashion Jacket", code: "LJ-8163" },
  { imgurl: lp16, title: "Denzel Leather Fashion Jacket", code: "LJ-8154" },
  { imgurl: lp17, title: "Cooper Leather Fashion Jacket", code: "LJ-8145" },
  { imgurl: lp18, title: "Craig Leather Fashion Jacket", code: "LJ-8114" },
  { imgurl: lp19, title: "Crank Leather Fashion Jacket", code: "LJ-8112" },
  { imgurl: lp20, title: "Cary Leather Fashion Jacket", code: "LJ-8189" },
];

const Leatherwear = () => {
  const [sortedProducts, setSortedProducts] = useState(products);
  const [isAscending, setIsAscending] = useState(true);
  const levelhandler = () => {
    const codes = products.map(pro => pro.code.replace('LJ-', ''));
    let sortedCodes;
    
    if (isAscending) {
      sortedCodes = codes.sort((a, b) => a.localeCompare(b));
    } else {
      sortedCodes = codes.sort((a, b) => b.localeCompare(a));
    }
    
    setSortedProducts(products.sort((a, b) => {
      const codeA = a.code.replace('LJ-', '');
      console.log("codeA",codeA)

      const codeB = b.code.replace('LJ-', '');
      console.log("codeB",codeB)

      return isAscending ? codeA.localeCompare(codeB) : codeB.localeCompare(codeA);
    }));
    
    console.log(isAscending ? "Sorted ascending:" : "Sorted descending:", sortedCodes);
    setIsAscending(!isAscending);
  };
  const startIndex = 1;
  const endIndex = products.length;

  return (
    <div>
      <div className='container jacket'>
        <h2>LEATHER JACKETS</h2>
        <h4>Showing {startIndex}-{endIndex}</h4>
        <button onClick={levelhandler} >greater and lower</button>
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
          {sortedProducts.map((product, index) => (
            <div className="col" key={index}>
              <Jacketproducts imgurl={product.imgurl} title={product.title} code={product.code} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Leatherwear;
