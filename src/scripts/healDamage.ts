import { iFighter } from "../interfaces";

export default function healDamage(
  fighterList: iFighter[],
  index: number,
  quantity: number
) {
  const fighters = [...fighterList];
  if (isNaN(quantity)) {
    throw Error("Invalid input!");
  }
  if (fighters[index].currentHp + quantity > fighters[index].maxHp) {
    fighters[index].currentHp = fighters[index].maxHp;
  } else {
    fighters[index].currentHp += quantity;
  }
  return fighters;
}
