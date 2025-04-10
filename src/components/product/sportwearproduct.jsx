import React from 'react'
import Jacketproducts from "../jacketproducts"
import sw1 from "../../assets/imgs/sports/sports (1).jpg"
import sw2 from "../../assets/imgs/sports/sports (2).jpg"
import sw3 from "../../assets/imgs/sports/sports (3).jpg"
import sw4 from "../../assets/imgs/sports/sports (4).jpg"
import sw5 from "../../assets/imgs/sports/sports (5).jpg"
import sw6 from "../../assets/imgs/sports/sports (6).jpg"
import sw7 from "../../assets/imgs/sports/sports (7).jpg"
import sw8 from "../../assets/imgs/sports/sports (8).jpg"
import sw9 from "../../assets/imgs/sports/sports (9).jpg"
import sw10 from "../../assets/imgs/sports/sports (10).jpg"
import sw11 from "../../assets/imgs/sports/sports (11).jpg"
import sw12 from "../../assets/imgs/sports/sports (12).jpg"
import sw13 from "../../assets/imgs/sports/sports (13).jpg"
import sw14 from "../../assets/imgs/sports/sports (14).jpg"
import sw15 from "../../assets/imgs/sports/sports (15).jpg"
import sw16 from "../../assets/imgs/sports/sports (16).jpg"
import sw17 from "../../assets/imgs/sports/sports (17).jpg"
import sw18 from "../../assets/imgs/sports/sports (18).jpg"
import sw19 from "../../assets/imgs/sports/sports (19).jpg"
import sw20 from "../../assets/imgs/sports/sports (20).jpg"
import sw21 from "../../assets/imgs/sports/sports (21).jpg"
import sw22 from "../../assets/imgs/sports/sports (22).jpg"
import sw23 from "../../assets/imgs/sports/sports (23).jpg"
import sw24 from "../../assets/imgs/sports/sports (24).jpg"
import sw25 from "../../assets/imgs/sports/sports (25).jpg"
import sw26 from "../../assets/imgs/sports/sports (26).jpg"
import sw27 from "../../assets/imgs/sports/sports (27).jpg"
import sw28 from "../../assets/imgs/sports/sports (28).jpg"
import sw29 from "../../assets/imgs/sports/sports (29).jpg"
import sw30 from "../../assets/imgs/sports/sports (30).jpg"



const SportswearProducts = (props) => {
  const sportsData = [
    { imgurl: sw1 ,  title: 'Baseball Jersey', code: 'bbj-0007' },
    { imgurl: sw2 ,  title: 'Baseball Jersey', code: 'bbj-0008' },
    { imgurl: sw3 ,  title: 'Baseball Jersey', code: 'bbj-0009' },
    { imgurl: sw4 ,  title: 'American Football Uniform', code: 'AFU-6009' },
    { imgurl: sw5 ,  title: 'American Football Uniform', code: 'AFU-6001' },
    { imgurl: sw6 ,  title: 'American Football Uniform', code: 'AFU-6008' },
    { imgurl: sw7 ,  title: 'American Football Uniform', code: 'AFU-6007' },
    { imgurl: sw8 ,  title: 'American Football Uniform', code: 'AFU-6006' },
    { imgurl: sw9 ,  title: 'American Football Uniform', code: 'AFU-6005' },
    { imgurl: sw10 , title: 'American Football Uniform', code: 'AFU-6004' },
    { imgurl: sw11 , title: 'American Football Uniform', code: 'AFU-6003' },
    { imgurl: sw12 , title: 'American Football Uniform', code: 'AFU-6002' },
    { imgurl: sw13 , title: 'BASKETBALL UNIFORM', code: 'bb-0002' },
    { imgurl: sw14 , title: 'BASKETBALL UNIFORM', code: 'bb-0001' },
    { imgurl: sw15 , title: 'BASKETBALL UNIFORM', code: 'bb-0003' },
    { imgurl: sw16 , title: 'BASKETBALL UNIFORM', code: 'bb-0004' },
    { imgurl: sw17 , title: 'BASKETBALL UNIFORM', code: 'bb-0005' },
    { imgurl: sw18 , title: 'BASKETBALL UNIFORM', code: 'bb-0006' },
    { imgurl: sw19 , title: 'BASEBALL UNIFORM', code: 'bbu-0001' },
    { imgurl: sw20 , title: 'BASEBALL UNIFORM', code: 'bbu-0002' },
    { imgurl: sw21 , title: 'BASEBALL UNIFORM', code: 'bbu-0003' },
    { imgurl: sw22 , title: 'BASEBALL UNIFORM', code: 'bbu-0004' },
    { imgurl: sw23 , title: 'Baseball Jersey', code: 'bbj-0001' },
    { imgurl: sw24 , title: 'Baseball Jersey', code: 'bbj-0002' },
    { imgurl: sw25 , title: 'Baseball Jersey', code: 'bbj-0003' },
    { imgurl: sw26 , title: 'Baseball Jersey', code: 'bbj-0004' },
    { imgurl: sw27 , title: 'Baseball Jersey', code: 'bbj-0005' },
    { imgurl: sw28 , title: 'BASEBALL UNIFORM', code: 'bbu-0005' },
    { imgurl: sw29 , title: 'American Football Uniform', code: 'AFU-60010' },
    { imgurl: sw30 , title: 'Baseball Jersey', code: 'bbj-0006' },
  


    // Add more jacket data as needed
  ];
  return (
   <>
    <div>
      <div className='container jacket'>
        <h2>Sportswear</h2>
        <h4>{sportsData && ` Products 0 - ${sportsData.length}`}</h4>
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
