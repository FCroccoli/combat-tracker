import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 60px;
  width: 100%;
  padding: 20px 5%;
  top: 0;
  left: 0;
  border-bottom: 1px solid var(--grey-4);
  box-shadow: 0px 0px 5px var(--grey-4);
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--grey-1);
  @media (min-width: 996px) {
    padding: 20px 5%;
  }
`;

export const HeaderText = styled.h1`
  font-size: 25px;
  font-weight: 700;
  line-height: 22px;
  color: var(--primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 60%;
`;
