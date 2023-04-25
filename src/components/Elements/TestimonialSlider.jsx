import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="The training was for the period of three months, and it was mainly on 
            • installing and implementing WordPress CMS 
            • Customize CSS code for word press themes 
            • Editing WordPress content 
            • Maintaining custom WordPress plugins.."
            author="Training in Tilal al sad projects and investment L.L.C
            "
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="
            The training was for 6 weeks I had the opportunity to learn about 
            development in Microsoft. NET platform ."
            author="Training in global computer service L.L.C"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="My comprehensive training in the Ministry of High Education equipped me with the knowledge and skills needed to excel in the IT industry, including expertise in computer formatting, router setup, and computer configuration."
            author="Ministry of High Education"
          />
        </LogoWrapper>
       
       
       
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
