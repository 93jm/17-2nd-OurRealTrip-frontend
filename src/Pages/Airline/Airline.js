import React, { Component } from 'react';
import MainSearchArea from './MainSearchArea/MainSearchArea';
import MainSlideArea from './MainSlideArea/MainSlideArea';
import MainAbroadTravelArea from './MainAbroadTravelArea/MainAbroadTravelArea';
import styled from 'styled-components';

import { AIRLINEMAIN_DATA } from '../../config';

class Airline extends Component {
  state = {
    isRound: true,
    imageForabroadTravel: [],
    imageForLocalTravel: [],
    imageDataForSlide: [],
  };

  handleTicketTypeChange = e => {
    e.target.innerText === '왕복'
      ? this.setState({ isRound: true })
      : this.setState({ isRound: false });
  };

  componentDidMount = () => {
    fetch(AIRLINEMAIN_DATA)
      .then(res => res.json())
      .then(data => {
        this.setState({
          imageForabroadTravel: data.imageForabroadTravel,
          imageForLocalTravel: data.imageForLocalTravel,
          imageDataForSlide: data.imageDataForSlide,
        });
      });
  };

  render() {
    const {
      isRound,
      imageForabroadTravel,
      imageForLocalTravel,
      imageDataForSlide,
    } = this.state;
    return (
      <div className="airLine">
        <MainSearchArea
          handleTicketTypeChange={this.handleTicketTypeChange}
          isRound={isRound}
          roundTrip={roundTrip}
          oneWay={oneWay}
        />
        <Center>
          <MainSlideArea imageDataForSlide={imageDataForSlide} />
          <MainAbroadTravelArea imageForabroadTravel={imageForabroadTravel} />
          <MainAbroadTravelArea imageForabroadTravel={imageForLocalTravel} />
        </Center>
      </div>
    );
  }
}

export default Airline;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2px;
  margin-bottom: 70px;
`;

const roundTrip = {
  arrivedLocation: '도착지가 어디인가요?',
  leavingDay: '가는날 선택',
  arrivedDay: '오는날 선택',
  differenceWay: '출발/도착 다른 구간',
};

const oneWay = {
  arrivedLocation: '도착지가 어디인가요?',
  leavingDay: '가는날 선택',
  arrivedDay: '',
  differenceWay: '',
};
