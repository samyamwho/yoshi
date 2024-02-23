import React, { useState } from 'react';
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  z-index: 999;
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;

const Product = ({ item }) => {
  const [cartPopupVisible, setCartPopupVisible] = useState(false);
  const [favoritesPopupVisible, setFavoritesPopupVisible] = useState(false);

  const handleAddToCart = () => {
    setCartPopupVisible(true);

    setTimeout(() => {
      setCartPopupVisible(false);
    }, 2000);
  };

  const handleAddToFavorites = () => {
    setFavoritesPopupVisible(true);

    setTimeout(() => {
      setFavoritesPopupVisible(false);
    }, 2000);
  };

  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon onClick={handleAddToCart}>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon onClick={handleAddToFavorites}>
          <FavoriteBorderOutlinedIcon />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlinedIcon />
          </Link>
        </Icon>
      </Info>

      <Popup visible={cartPopupVisible}>Added to Cart</Popup>
      <Popup visible={favoritesPopupVisible}>Added to Favorites</Popup>
    </Container>
  );
};

export default Product;
