import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';
import weatherImg from '../assets/weather.png'
import guideImg from '../assets/guide.png'
import customizationImg from '../assets/customization.png'

const servicesData =[
  {
    imgUrl:weatherImg,
    title:'Calculate Weather',
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."
  },
  {
    imgUrl:guideImg,
    title:'Best Tour Guide',
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."
  },
  {
    imgUrl:customizationImg,
    title:'Customization',
    desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit."
  },
]

function ServiceList(props) {
  return (
   <>
    {
      servicesData.map((item,index)=>(
        <Col lg='3' md='6' sm='12' className="mb-4" key={index}>
          <ServiceCard item={item}/>
        </Col>
      ))
    }
   </>
  );
}

export default ServiceList;