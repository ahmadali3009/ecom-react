import React from 'react'
import Jacketproducts from '../jacketproducts'

const Versatilewear = () => {

    const versatile = [
        { imgurl: '/src/assets/imgs/v (1).jpg', title: 'Versatile Wear', code: 'vw-0007' },
        { imgurl: '/src/assets/imgs/v (2).jpg', title: 'Versatile Wear', code: 'vw-0008' },
        { imgurl: '/src/assets/imgs/v (3).jpg', title: 'Versatile Wear', code: 'vw-0009' },
        { imgurl: '/src/assets/imgs/v (4).jpg', title: 'Versatile Wear', code: 'vw-6009' },
        { imgurl: '/src/assets/imgs/v (5).jpg', title: 'Versatile Wear', code: 'vw-6001' },
        { imgurl: '/src/assets/imgs/v (6).jpg', title: 'Versatile Wear', code: 'vw-6008' },
        { imgurl: '/src/assets/imgs/v (7).jpg', title: 'Versatile Wear', code: 'vw-6007' },
        { imgurl: '/src/assets/imgs/v (8).jpg', title: 'Versatile Wear', code: 'vw-6006' },
        { imgurl: '/src/assets/imgs/v (9).jpg', title: 'Versatile Wear', code: 'vw-6005' },
        { imgurl: '/src/assets/imgs/v (10).jpg', title: 'Versatile Wear', code: 'vw-6004' },
    ]
    return (
        <>
            <div>
                <div className='container jacket'>
                    <h2>Versatile Wear</h2>
                    <h4>Showing 1-10</h4>
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
