import React from 'react';
import AppContainer from '../../components/AppContainer';
import Content from '../../components/Content';
import NavBar from '../../components/NavBar';
import PointsData from '../../components/PointsData';

const Registers: React.FC = () => {
  return (
    <AppContainer>
      <NavBar />

      <Content>
        <PointsData />
      </Content>
    </AppContainer>
  );
};

export default Registers;
