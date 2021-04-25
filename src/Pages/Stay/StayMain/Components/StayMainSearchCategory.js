import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { STAYMAIN_DATA } from '../../../../config';

const StayMainSearchCategory = () => {
  const [cateArr, setCateArr] = useState([]);

  useEffect(() => {
    fetch(STAYMAIN_DATA)
      .then(res => res.json())
      .then(data => {
        setCateArr(data.SearchCategory);
      });
  }, []);

  return (
    <SearchCategory>
      {cateArr.map(data => {
        return (
          <div className="categoryDiv" key={data.id}>
            <img src={data.CategoryImg} alt={data.alt} />
            <span>{data.name}</span>
          </div>
        );
      })}
    </SearchCategory>
  );
};

export default StayMainSearchCategory;

const SearchCategory = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  .categoryDiv {
    display: flex;
    img {
      width: 20px;
      height: 20px;
      border: 0px;
    }
    span {
      font-size: 16px;
      font-weight: bold;
      margin-left: 5px;
      margin-right: 30px;
      color: rgb(73, 80, 86);
      cursor: pointer;
    }
  }
`;
