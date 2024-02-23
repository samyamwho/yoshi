import React, { useState } from 'react'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import styled from 'styled-components';
import { sliderItems } from '../Data';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
  `;
const Wrapper = styled.div`
  height=100%;
  display:flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  `;

const Slide = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
  align-tems:center;
  background-color: #${(props) => props.bg};
  `;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
margin-top:120px;
  font-size: 100px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display:flex;
  align-items: center;
  justify-content:center;
  position:absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {

    };
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper>
                {sliderItems.map((item)=>(

                    <Slide bg={item.bg}>

                    <ImgContainer>
                        <Image src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6174cd1a-f614-4c1e-9d75-4997060b6156/ddrsqbl-eb74072b-24d1-4fcf-8981-8526538e676b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYxNzRjZDFhLWY2MTQtNGMxZS05ZDc1LTQ5OTcwNjBiNjE1NlwvZGRyc3FibC1lYjc0MDcyYi0yNGQxLTRmY2YtODk4MS04NTI2NTM4ZTY3NmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XE0tgzITQOCQo38R05ZFj_RGaVYSEmx5hXh2_l4BJmY" />

                    </ImgContainer>
                    <InfoContainer>
                        <Title>Jet Outfit</Title>
                        <Desc>Prepare to embody the swift and elusive spirit of Jet  with this meticulously crafted cosplay ensemble. Channeling the essence of a nimble duelist, this outfit captures the dynamic and stealthy style that defines this character.</Desc>
                        <Link to="product/undefined">
                        <Button>SHOW NOW</Button>
                        </Link>

                    </InfoContainer>
                </Slide>


                    ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlinedIcon />
            </Arrow>

        </Container>
    )
}

export default Slider
