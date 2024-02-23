import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border: 1px solid teal;
  border-radius: 5px;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleButtonClick = () => {
    setShowPopup(true);
    setEmail('');

    // Hide the popup after 5 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input
          placeholder="Your email"
          value={email}
          onChange={handleInputChange}
        />
        <Button onClick={handleButtonClick}>
          <SendIcon />
        </Button>
      </InputContainer>
      <Popup show={showPopup}>You'll receive new arrival notifications in your email.</Popup>
    </Container>
  );
};

export default Newsletter;
