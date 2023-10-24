import styled from "styled-components";

export const DashboardDisplay = styled.div`
  width: 100%;
  padding: 0 5%;
  height: calc(100% - 130px);
  gap: 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (min-width: 996px) {
    padding: 0 20%;
  }
`;

export const DashboardWrapper = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  position: relative;
  top: 60px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
`;

export const Loading = styled.p`
  width: 90%;
  height: 130px;
  border-top: 1px solid var(--grey-3);
  border-bottom: 1px solid var(--grey-3);
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  color: var(--grey-0);
`;
