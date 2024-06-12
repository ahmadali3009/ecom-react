import React from 'react'
import {Link} from 'react-router-dom'
import "./product.css"
const Productlist = (props) => {
    console.log(props.code)
    return (
        <div className='container'>
            
            <Link to={`/products/${props.code}`} >
            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-6 mx-auto">
                        <div class="square-image">
                            <img src={props.imgurl} class="img-fluid" alt="Square Image" />
                            {/* {i need to use prop for image and text} */}
                            <div class="image-overlay">
                                <h5 class="text-center">{props.text}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Link>

        </div>
    )
}

export default Productlist
