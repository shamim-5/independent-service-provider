import React from 'react';
import my_pic from "../../images/my-pic/my_pic.jpg";
import { Col, Row } from "react-bootstrap";


const About = () => {
   return (
     <div className="container">
       <Row xs={1} md={2} className="d-flex align-items-center">
         <Col>
           <img src={my_pic} alt="" />
         </Col>
         <Col>
           <div>
             <h2 className="mt-3 text-secondary upper">Name: Shamim</h2>
             <p>
               <span className="fs-2 text-warning"> Goal:</span> I make my next 3 months goal. I already have passed my
               web-development journey around 4 months. I learned many things for this course. To keep up my learning
               process i will more srious into next three months. My only goal is now learn and learn, learning more. To
               keep my skill efficient I will try to my best.{" "}
             </p>
           </div>
         </Col>
       </Row>
     </div>
   );
};

export default About;