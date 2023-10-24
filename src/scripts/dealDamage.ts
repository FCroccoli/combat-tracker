import { iFighter } from "../interfaces";

export default function dealDamage(
  fighterList: iFighter[],
  index: number,
  quantity: number
) {
  const fighters = [...fighterList];
  if (isNaN(quantity)) {
    throw Error("Invalid input!");
  }
  if (fighters[index].currentHp - quantity < 0) {
    fighters[index].currentHp = 0;
  } else {
    fighters[index].currentHp = fighters[index].currentHp - quantity;
  }
  return fighters;
}
