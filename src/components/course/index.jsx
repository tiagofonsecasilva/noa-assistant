import React from "react";
import styled from "styled-components";
// import { NavLink } from 'react-router-dom';


const CourseContainer = styled.div`
  width: 100%;
  min-height: 6em;
  display: flex;
  border-bottom: 2px solid #d8d8d852;
  padding: 6px 8px;
  align-items: center;
`;

// const Thumbnail = styled.div`
//   width: auto;
//   height: 100%;
//   display: flex;
//   flex: 0.4;

//   img {
//     width: auto;
//     height: 100%;
//   }
// `;

const Name = styled.h3`
  font-size: 15px;
  color: #000;
  margin-left: 10px;
  flex: 2;
  display: flex;
`;

const Slug = styled.span`
  color: #a1a1a1;
  font-size: 16px;
  display: flex;
  flex: 0.2;
`;

export function Course(props) {
  const { courseType, name, slug } = props;

  return (
    <CourseContainer>
      <courseType>{courseType}</courseType>
      <Name>{name}</Name>
      <Slug>{slug}</Slug>
    </CourseContainer>
  );
}
