import React from 'react'
import Jacketproducts from "../jacketproducts"

const SportswearProducts = (props) => {
  const sportsData = [
    { imgurl: '/src/assets/imgs/sports/sports (1).jpg', title: 'Baseball Jersey', code: 'bbj-0007' },
    { imgurl: '/src/assets/imgs/sports/sports (2).jpg', title: 'Baseball Jersey', code: 'bbj-0008' },
    { imgurl: '/src/assets/imgs/sports/sports (3).jpg', title: 'Baseball Jersey', code: 'bbj-0009' },
    { imgurl: '/src/assets/imgs/sports/sports (4).jpg', title: 'American Football Uniform', code: 'AFU-6009' },
    { imgurl: '/src/assets/imgs/sports/sports (5).jpg', title: 'American Football Uniform', code: 'AFU-6001' },
    { imgurl: '/src/assets/imgs/sports/sports (6).jpg', title: 'American Football Uniform', code: 'AFU-6008' },
    { imgurl: '/src/assets/imgs/sports/sports (7).jpg', title: 'American Football Uniform', code: 'AFU-6007' },
    { imgurl: '/src/assets/imgs/sports/sports (8).jpg', title: 'American Football Uniform', code: 'AFU-6006' },
    { imgurl: '/src/assets/imgs/sports/sports (9).jpg', title: 'American Football Uniform', code: 'AFU-6005' },
    { imgurl: '/src/assets/imgs/sports/sports (10).jpg', title: 'American Football Uniform', code: 'AFU-6004' },
    { imgurl: '/src/assets/imgs/sports/sports (11).jpg', title: 'American Football Uniform', code: 'AFU-6003' },
    { imgurl: '/src/assets/imgs/sports/sports (12).jpg', title: 'American Football Uniform', code: 'AFU-6002' },
    { imgurl: '/src/assets/imgs/sports/sports (13).jpg', title: 'BASKETBALL UNIFORM', code: 'bb-0002' },
    { imgurl: '/src/assets/imgs/sports/sports (14).jpg', title: 'BASKETBALL UNIFORM', code: 'bb-0001' },
    { imgurl: '/src/assets/imgs/sports/sports (15).jpg', title: 'BASKETBALL UNIFORM', code: 'bb-0003' },
    { imgurl: '/src/assets/imgs/sports/sports (16).jpg', title: 'BASKETBALL UNIFORM', code: 'bb-0004' },
    { imgurl: '/src/assets/imgs/sports/sports (17).jpg', title: 'BASKETBALL UNIFORM', code: 'bb-0005' },
    { imgurl: '/src/assets/imgs/sports/sports (18).jpg', title: 'BASKETBALL UNIFORM', code: 'bb-0006' },
    { imgurl: '/src/assets/imgs/sports/sports (19).jpg', title: 'BASEBALL UNIFORM', code: 'bbu-0001' },
    { imgurl: '/src/assets/imgs/sports/sports (20).jpg', title: 'BASEBALL UNIFORM', code: 'bbu-0002' },
    { imgurl: '/src/assets/imgs/sports/sports (21).jpg', title: 'BASEBALL UNIFORM', code: 'bbu-0003' },
    { imgurl: '/src/assets/imgs/sports/sports (22).jpg', title: 'BASEBALL UNIFORM', code: 'bbu-0004' },
    { imgurl: '/src/assets/imgs/sports/sports (23).jpg', title: 'Baseball Jersey', code: 'bbj-0001' },
    { imgurl: '/src/assets/imgs/sports/sports (24).jpg', title: 'Baseball Jersey', code: 'bbj-0002' },
    { imgurl: '/src/assets/imgs/sports/sports (25).jpg', title: 'Baseball Jersey', code: 'bbj-0003' },
    { imgurl: '/src/assets/imgs/sports/sports (26).jpg', title: 'Baseball Jersey', code: 'bbj-0004' },
    { imgurl: '/src/assets/imgs/sports/sports (27).jpg', title: 'Baseball Jersey', code: 'bbj-0005' },
    { imgurl: '/src/assets/imgs/sports/sports (28).jpg', title: 'BASEBALL UNIFORM', code: 'bbu-0005' },
    { imgurl: '/src/assets/imgs/sports/sports (29).jpg', title: 'American Football Uniform', code: 'AFU-60010' },
    { imgurl: '/src/assets/imgs/sports/sports (30).jpg', title: 'Baseball Jersey', code: 'bbj-0006' },


    // Add more jacket data as needed
  ];
  return (
   <>
    <div>
      <div className='container jacket'>
        <h2>Sportswear</h2>
        <h4>Showing 1-30</h4>
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
          {sportsData.map((sports, index) => (
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

export default SportswearProducts
