import React from 'react';
import Slider from 'react-slick';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Container, Search, Logo, Wrapper, Map, CarouselTitle }from './styles';

const Home = () => {
  const [inputValue, setInputValue ] = React.useState('');
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adapitveHeight: true
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <TextField
            label='Pesquisar'
            outlined
            
            trailingIcon={<MaterialIcon role="button" icon="search"/>}>
            <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Slider {...settings}>
            <div>
              <img src={restaurante} alt="Restaurante" />
            </div>
            <div>
              <img src={restaurante} alt="Restaurante" />
            </div>
            <div>
              <img src={restaurante} alt="Restaurante" />
            </div>
            <div>
              <img src={restaurante} alt="Restaurante" />
            </div>
            <div>
              <img src={restaurante} alt="Restaurante" />
            </div>
          </Slider>
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;