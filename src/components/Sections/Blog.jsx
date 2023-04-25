import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
 import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">My Experience</h1>
            <p className="font13">
            'It takes a lot of time to get experience, and once you have it, you ought to go on using it.'              <br />
             </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Digital Coin company LLC"
                text="* Develop React ts front end website .</br>
                 *Develop and maintain data-centric web applications and 
                services using ASP.NET, C#.NET, MS SQL, and Agile/SCRUM 
                methodologies
                * Create and apply UI requirements utilizing MVC.NET, 
                JS/jQuery, HTML, and CSS
                * Collaborate with Product Owner and Project Manager to 
                collect requirements and provide implementation
                * Develop data-centric web applications and services using 
                Android studio, C#.NET, MS SQL, APIs, and Agile/SCRUM 
                methodologies
                * Using Git to share and Merage the team code , Using Jira and 
                bitbucket to manage and check the work .
                ."
                tag="compProgrammer, November 2019 – March 2023
                any"
                />
            </div>
              
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="New Almamari Group LLC"
                text="
                 Develop and maintain data-centric web applications and 
                services using VMware and WordPress . 
                 Create and manage Employees Email in cPanel and Hosting 
                24 .
                 Collaborate with Product Owner and Project Manager to 
                collect requirements and provide implementation
                 Collaborate with business analysts, users, and federal 
                agencies to collect requirements and provide 
                implementation"
                tag="Programmer, Jun 2019 – November 2019"
               />
            </div>
          </div>
         
          
           
          
        </div>
      </div>
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Training Experience</h1>
            <p className="font13">
            For the things we have to learn before we can do them, we learn by doing them.              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;