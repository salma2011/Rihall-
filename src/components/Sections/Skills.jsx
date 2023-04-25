import React from "react";
import styled from "styled-components";
// Components
 import ServiceBox from "../Elements/ServiceBox";
// Assets
 

export default function Skills() {
  return (
    <Wrapper id="services">
     
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Skills and Abilities </h1>
            <p className="font18">
I really believe that everyone has a talent, ability, or skill that he can mine to support himself and to succeed in life.

             <br />
                   </p>
                   <p className="font52">Dean Koontz   </p>
          </HeaderInfo>
          <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="Graphic Design"
                subtitle="Additionally, I possess skills in utilizing Figma for creating visually appealing designs and developing websites using WordPress, including theme customization, plugin integration, and content management."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Web Design"
                subtitle=" Create and apply UI requirements utilizing  
                JS/jQuery, HTML, and CSS."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Development"
                subtitle=" Develop and maintain data-centric web applications and 
                services using ASP.NET, C#.NET, MS SQL, and Agile/SCRUM 
                methodologies."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox icon="printer" title="Device Connection" subtitle="setting up and configuring device connections, such as routers and printers, as well as troubleshooting issues with screen and other devices." />
            </ServiceBoxWrapper>
                  </Advertising>

        </div>
       
             
             
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;

