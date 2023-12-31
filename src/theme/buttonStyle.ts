import styled from "styled-components";

export const PrimaryButton = styled.button`
  height: 38px;
  width: 100%;
  background: var(--primary);
  border: 2px solid var(--primary);
  border-radius: 4px;
  color: var(--white);
  cursor: pointer;
  &:hover {
    background: var(--primary-2);
  }
`;

export const ButtonNav = styled.button`
  position: absolute;
  bottom: 10px;
  width: 40px;
  height: 38px;
  font-weight: 600;
  font-size: 12px;
  line-height: 28px;
  text-align: center;
  color: var(--primary);
  background: var(--grey-0);
  border: 2px solid var(--grey-0);
  border-radius: 4px;
  cursor: pointer;
  align-self: center;
`;

export const DisplayButton = styled(ButtonNav)`
  padding: 0 6px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  color: var(--grey-1);
  cursor: pointer;
  &:hover {
    color: var(--grey-0);
  }
`;
