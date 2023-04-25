import React from 'react';
import styled from "styled-components";

const test = ({}) => {
    const handleLoadMore = () => {
        setShowItems(!showItems); // toggle the value of showItems when the button is clicked
      };

  return (
    


  <Wrapper
      className="animate pointer radius8"
      onClick={handleLoadMore}
    >
      {"show more"}
    </Wrapper>
  );
  
};

export default test;

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#7620ff")};
  background-color: ${(props) => (props.border ? "transparent" : "#7620ff")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#580cd2")};
    border: 1px solid #7620ff;
    color: ${(props) => (props.border ? "#7620ff" : "#fff")};
  }
`;