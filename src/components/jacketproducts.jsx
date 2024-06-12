import React from 'react'
import {Link} from 'react-router-dom'
const Jacketproducts = (props) => {
  return (
    <div className='container'>
      <Link to={`/product/${props.code}?imgurl=${props.imgurl}&title=${props.title}`} className="card-link text-decoration-none">
            <div className="card border-0">
              <img src={props.imgurl} className="card-img-top " alt="..." style={{ borderRadius: "6px" , maxHeight:"500px" , maxWidth:"500px" }} />
              <div className="card-body text-center">
                <p className="card-title ">{props.code}</p>
                <h5 className="card-text ">{props.title}</h5>
              </div>
            </div>
      </Link>
          </div>
    
  )
}

export default Jacketproducts
