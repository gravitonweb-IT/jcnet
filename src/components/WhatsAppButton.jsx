import React from "react";
import { Button } from "react-bootstrap";
import whatsappIcon from "../assests/Homepageimages/whatsp.png";

const WhatsAppButton = () => {
  const phoneNumber = "+917021929183";

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      // className="fixed left-4 bottom-4 z-50 p-2 text-white"
      onClick={handleClick}
      style={{
        backgroundImage: `url(${whatsappIcon})`,
        backgroundSize: "100% 100%",
        width: "50px",
        height: "50px",
        border: "none",
        outline: "none",
        position: 'fixed', 
        bottom: '20px', 
        left: '20px',
        backgroundColor:"none"
      }}
    ></Button>
  );
};

export default WhatsAppButton;
