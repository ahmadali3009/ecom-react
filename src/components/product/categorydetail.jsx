import React from 'react';
import {useParams} from "react-router-dom"
import ProductDetail from '../productdetail';
import SportswearProducts from './sportwearproduct';
import Leatherwear from './Leatherwear';
import Versatilewear from './Versatilewear';

const CategoryDetail = () => {
  const { code } = useParams()
  console.log("code:::",code) // Access the product code from URL params
  // Fetch product details using the product code and render the details
  let categoryComponent;
  switch (code) {
    case 'Leather-Jacket':
      categoryComponent = <Leatherwear code={code} />;
      break;
    case 'Sports-Wear':
      categoryComponent = <SportswearProducts code={code} />;
      break;
    case 'Versatile-Wear':
      categoryComponent = <Versatilewear code={code}/>;
      break;
    default:
      categoryComponent = null; // Handle cases where code does not match any category
  }
  return (
   <>
      {categoryComponent || <p>No products found for this category.</p>}
   </>
  );
};

export default CategoryDetail;