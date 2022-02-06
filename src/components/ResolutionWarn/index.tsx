import React from 'react';
import { BsGridFill } from 'react-icons/bs';
import logoInovaWhite from '../../assets/logoInovaWhite.svg';
import { Container, Content, Message } from './styles';

const ResolutionWarn: React.FC = () => {
  return (
    <Container>
      <Content>
        <BsGridFill />
        <Message>
          <p>
            Resolução mínima <strong>960x540px</strong>
          </p>
          <p>Acesse o sistema em outro dispositivo ou ajuste sua resolução.</p>
        </Message>
        <img src={logoInovaWhite} alt="Inova" />
      </Content>
    </Container>
  );
};

export default ResolutionWarn;
