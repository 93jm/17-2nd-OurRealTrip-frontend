import React, { Component } from 'react';
import TripType from './TripType';
import styled from 'styled-components';

class MainSearchArea extends Component {
  render() {
    const { handleTicketTypeChange, isRound, roundTrip, oneWay } = this.props;
    return (
      <div>
        <MainSearchContainer>
          <TripType
            handleTicketTypeChange={handleTicketTypeChange}
            isRound={isRound}
            roundTrip={roundTrip}
            oneWay={oneWay}
          />
        </MainSearchContainer>
      </div>
    );
  }
}

export default MainSearchArea;

const MainSearchContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 40px 0 56px;
`;
