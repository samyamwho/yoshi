import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.uhdpaper.com%2Fwallpaper%2Fvalorant-reaver-skin-250%401%40e-pc-4k.jpg&f=1&nofb=1&ipt=af84958c42876c62bd2edd44058e0dc3c4772d78ecd7319d9833472ec9fdc2de&ipo=images")
  center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #EDE3FF;
  ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: none;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log('Form data:', data);
  };

  return (
    <Container>
      
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="Name" name="name" />
          <Input placeholder="Last name" name="lastName" />
          <Input placeholder="Username" name="username" />
          <Input type="email" placeholder="Email" name="email" />
          <Input type="password" placeholder="Password" name="password" />
          <Input
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
