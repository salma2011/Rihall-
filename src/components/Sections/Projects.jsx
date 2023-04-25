import React from "react";
import styled from "styled-components";

import  { useState } from "react";

// Components
import ProjectBox from "../Elements/ProjectBox";
 // Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/5.png";
import ProjectImg6 from "../../assets/img/projects/6.png";

export default function Projects() {

  const [showItems, setShowItems] = useState(false); // state to keep track of whether items should be shown or not

  const handleLoadMore = () => {
    setShowItems(!showItems); // toggle the value of showItems when the button is clicked
  };


  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">My Awesome Projects</h1>
            <p className="font13">
I work in this project when I was working in the company I can't shere the source code because it is praivete               <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" height="376" width="309">
              <ProjectBox
                img={ProjectImg1}
                title="Telypay Invoice "
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => window.location.href = "https://invoice.telypay.com/"}   />

            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4"                height="376" width="309"
>
              <ProjectBox
              width={402} height={602}
                img={ProjectImg2}
                title="Telypay LandingPage"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => window.location.href = "https://www.telypay.com/"}    />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Rehall Challeng"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                action={() => window.location.href = "https://bitbucket.org/Salma20111/challenge/src/master/"}              />
              
            </div>
          </div>
          <div className="row textCenter">
          {showItems && (
            <><div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <ProjectBox
                  img={ProjectImg4}
                  title="Awesome Project"
                  text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                  action={() => alert("clicked")} />
              </div><div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <ProjectBox
                    img={ProjectImg5}
                    title="Awesome Project"
                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                    action={() => alert("clicked")} />
                </div><div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <ProjectBox
                    img={ProjectImg6}
                    title="Awesome Project"
                    text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                    action={() => alert("clicked")} />
                </div></>
          )}
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>


<LoadMoreButton class="sc-fKFxtB tNvAN animate pointer radius8" onClick={handleLoadMore}>
  {showItems ? "Load Less" : "Load More"}
</LoadMoreButton>


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
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const LoadMoreButton = styled.button`
border: 1px solid ${(props) => (props.border ? "#707070" : "#7620ff")};
background-color: ${(props) => (props.border ? "transparent" : "#7620ff")};
width: 100%;
padding: 15px;
border-radius:1rem;
outline: none;
color: ${(props) => (props.border ? "#707070" : "#fff")};
:hover {
  background-color: ${(props) => (props.border ? "transparent" : "#580cd2")};
  border: 1px solid #7620ff;
  color: ${(props) => (props.border ? "#7620ff" : "#fff")};
`;
