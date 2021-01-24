import React from 'react';
import AppContainer from '../../components/AppContainer';
import Content from '../../components/Content';
import NavBar from '../../components/NavBar';
import PointsData from '../../components/PointsData';

const Dashboard: React.FC = () => {
  return (
    <AppContainer>
      <NavBar active="dashboard" />
      <Content>
        <PointsData />
      </Content>
    </AppContainer>
  );
};

export default Dashboard;
