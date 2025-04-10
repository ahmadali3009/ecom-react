import React from 'react'
import Jacketproducts from '../jacketproducts'
import v1 from "../../assets/imgs/v (1).jpg"
import v2 from "../../assets/imgs/v (2).jpg"
import v3 from "../../assets/imgs/v (3).jpg"
import v4 from "../../assets/imgs/v (4).jpg"
import v5 from "../../assets/imgs/v (5).jpg"
import v6 from "../../assets/imgs/v (6).jpg"
import v7 from "../../assets/imgs/v (7).jpg"
import v8 from "../../assets/imgs/v (8).jpg"
import v9 from "../../assets/imgs/v (9).jpg"
import v10 from "../../assets/imgs/v (10).jpg"



const Versatilewear = () => {

    const versatile = [
        { imgurl: v1 , title: 'Versatile Wear', code: 'vw-0007' },
        { imgurl: v2, title: 'Versatile Wear', code: 'vw-0008' },
        { imgurl: v3, title: 'Versatile Wear', code: 'vw-0009' },
        { imgurl: v4, title: 'Versatile Wear', code: 'vw-6009' },
        { imgurl: v5, title: 'Versatile Wear', code: 'vw-6001' },
        { imgurl: v6, title: 'Versatile Wear', code: 'vw-6008' },
        { imgurl: v7, title: 'Versatile Wear', code: 'vw-6007' },
        { imgurl: v8, title: 'Versatile Wear', code: 'vw-6006' },
        { imgurl: v9, title: 'Versatile Wear', code: 'vw-6005' },
        { imgurl: v10 , title: 'Versatile Wear', code: 'vw-6004' },
    ]
    return (
        <>
            <div>
                <div className='container jacket'>
                    <h2>Versatile Wear</h2>
                    <h4>{versatile && ` Products 0 - ${versatile.length}`}</h4>
                    <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                        {versatile.map((sports, index) => (
                            <div className="col" key={index}>
                                <Jacketproducts imgurl={sports.imgurl} title={sports.title} code={sports.code} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Versatilewear
