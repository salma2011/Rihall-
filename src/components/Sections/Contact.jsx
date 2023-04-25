import React from "react";
import styled from "styled-components";
import  { useRef, useState  } from 'react';
import emailjs from '@emailjs/browser';
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";

export default function Contact() {

  const [emailStatus, setEmailStatus] = useState("");
  const POPUP_DURATION = 3000; // 3 seconds
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_52zcgdo', 'template_703mtgg', form.current, 'u6lr2Cgn-9fZ8whPL')
      .then((result) => {
        setEmailStatus("success");
        setTimeout(() => {
          setEmailStatus("");
        }, POPUP_DURATION);
      }, (error) => {
        setEmailStatus("error");
        setTimeout(() => {
          setEmailStatus("");
        }, POPUP_DURATION);
      });
  };
  

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            
            <Form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" style={buttonStyles} />
    </Form>
   
            </div>


 
             <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div style={{ width: "50%" }} className="flexNullCenter flexColumn">
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6"  width={278} height={330} />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6"  width={180} height={204}/>
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" width={180} height={295} />
                </div>
              </div>
            </div>
          </div>
          {emailStatus === "success" && (
  <Popup>
    <p>Email sent successfully!</p>
  </Popup>
)}
{emailStatus === "error" && (
  <Popup>
    <p>Failed to send email. Please try again later.</p>
  </Popup>
)}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 12%;
  height: 13%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  color: white;
  font-size: 24px;
`;


const buttonStyles = {
  marginTop: '2rem',
  cursor: 'pointer',
  background: 'rgb(249, 105, 14)',
  color: 'white',
  border: 'none'
};
 
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
  









