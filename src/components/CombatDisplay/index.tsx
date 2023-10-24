import { useContext, useState } from "react";
import { CombatDisplayItem, CombatDisplayList, LifeBar } from "./style";
import healDamage from "../../scripts/healDamage";
import dealDamage from "../../scripts/dealDamage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ButtonNav } from "../../theme/buttonStyle";
import { CombatContext } from "../../contexts/combatContext";
import { GiBouncingSword, GiHealthNormal } from "react-icons/gi";

export default function CombatDisplay() {
  const { fightersList, setFightersList } = useContext(CombatContext);

  function nextFighter() {
    if (selectedId + 1 >= fightersList.length) {
      setSelectedId(0);
    } else {
      setSelectedId(selectedId + 1);
    }
  }

  const [selectedId, setSelectedId] = useState(0);

  return (
    <CombatDisplayList>
      {fightersList.length > 0 ? (
        fightersList
          .sort((a, b) => {
            return b.initiative - a.initiative;
          })
          .map((fighter, index) => {
            return (
              <CombatDisplayItem key={index} $isSelected={selectedId == index}>
                <LifeBar
                  $percent={(fighter.currentHp / fighter.maxHp) * 100 + `%`}
                />
                <p>{fighter.name}</p>
                <p>
                  {fighter.currentHp}/{fighter.maxHp}
                </p>
                <p>Ac: {fighter.ac}</p>
                <input type="number" min="0" defaultValue={`0`} />
                <button
                  onClick={(e) => {
                    try {
                      if (e.currentTarget != null) {
                        setFightersList(
                          healDamage(
                            fightersList,
                            index,
                            parseInt(
                              e.currentTarget.parentElement.children[4].value
                            )
                          )
                        );
                      }
                    } catch (error) {
                      toast.error("Invalid Input!", {
                        position: "top-right",
                        autoClose: 4500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                    }
                  }}
                >
                  <GiHealthNormal />
                </button>
                <button
                  onClick={(e) => {
                    try {
                      setFightersList(
                        dealDamage(
                          fightersList,
                          index,
                          parseInt(
                            e.currentTarget.parentElement.children[4].value
                          )
                        )
                      );
                    } catch (error) {
                      toast.error("Invalid Input!", {
                        position: "top-right",
                        autoClose: 4500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                    }
                  }}
                >
                  <GiBouncingSword />
                </button>
              </CombatDisplayItem>
            );
          })
      ) : (
        <p>No fighters yet</p>
      )}
      <ButtonNav onClick={() => nextFighter()}>{">>"}</ButtonNav>
    </CombatDisplayList>
  );
}
