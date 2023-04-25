import React from 'react';
import styled from "styled-components";

const DownloadButton = ({ fileName, filePath }) => {
  const handleDownload = () => {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.target = '_blank';

    // Append the anchor element to the DOM and trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up the anchor element
    document.body.removeChild(link);
  };

  return (
    


  <Wrapper
      className="animate pointer radius8"
      onClick={handleDownload}
    >
      {"Download My CV"}
    </Wrapper>
  );
  
};

export default DownloadButton;

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