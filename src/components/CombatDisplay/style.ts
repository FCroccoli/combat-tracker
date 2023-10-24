import styled from "styled-components";

export const CombatDisplayList = styled.ul`
  width: 45%;
  margin: 15px;
  margin-bottom: 20px;
  height: 90%;
  border-radius: 4px 4px 4px 4px;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: var(--grey-0);
  font-weight: bold;
  outline: 2px groove var(--red-2);
  border: 2px solid;
  position: relative;

  p {
    padding-left: 12px;
  }

  @media (max-width: 800px) {
    border-radius: 0px;
    border-left: 0px;
    border-right: 0px;
  }
`;

export const CombatDisplayItem = styled.li<{ $isSelected: boolean }>`
  height: ${(props) => {
    return props.$isSelected ? "50px" : "40px";
  }};
  min-height: 40px;
  width: 100%;
  padding: 0px 12px;
  border: ${(props) => {
    return props.$isSelected
      ? "4px solid var(--primary)"
      : "2px solid var(--grey-0)";
  }};
  border-left: 0px;
  border-right: 0px;
  transition: 0.5s;
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  background-color: var(--red-1);

  p,
  input,
  button {
    z-index: 2;
  }

  input {
    width: 20px;
  }
`;

export const LifeBar = styled.div<{ $percent: string }>`
  height: 100%;
  width: ${(props) => props.$percent};
  position: absolute;
  left: 0px;
  z-index: 1;
  background-color: var(--green-1);
`;
