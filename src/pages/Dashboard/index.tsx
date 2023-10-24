import AddEnemyBox from "../../components/AddEnemyBox";
import CombatDisplay from "../../components/CombatDisplay";
import { DashboardDisplay } from "./style";

export default function Dashboard() {
  return (
    <DashboardDisplay>
      <AddEnemyBox />
      <CombatDisplay />
    </DashboardDisplay>
  );
}
