import { gql, useQuery } from '@apollo/client';
import React from 'react';
import AppContainer from '../../components/AppContainer';
import Content from '../../components/Content';
import NavBar from '../../components/NavBar';
import PointsData from '../../components/PointsData';

const FIND_ALL_REGISTERS = gql`
  query {
    findAllRegisters {
      id
      timeRegistered
      userConnection {
        name
      }
    }
  }
`;

const Dashboard: React.FC = () => {
  function Registers() {
    const { data, loading } = useQuery(FIND_ALL_REGISTERS);

    if (loading) {
      return <></>;
    }

    return <PointsData data={data.findAllRegisters} />;
  }

  return (
    <AppContainer>
      <NavBar active="dashboard" />
      <Content>
        <Registers />
      </Content>
    </AppContainer>
  );
};

export default Dashboard;
