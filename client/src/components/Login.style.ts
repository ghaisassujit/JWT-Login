import styled, { keyframes } from "styled-components";

export const jump = keyframes`
from{
  transform: translateY(0)
}
to{
  transform: translateY(-3px)
}
`;

export const Wrapper = styled.section`
display: flex;
justify-content: center;
align-items: center;
width: 400px;
height: 600px;
flex-direction: column;
flex-wrap: wrap;
margin-left: 200px;
`;

export const FormField = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top:10px;
`;
