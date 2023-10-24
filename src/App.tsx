import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { Wrapper } from "./theme/wrapperStyle";
import CombatProvider from "./contexts/combatContext";

function App() {
  return (
    <>
      <CombatProvider>
        <Wrapper>
          <ToastContainer />
          <Header />
          <Dashboard />
        </Wrapper>
      </CombatProvider>
    </>
  );
}

export default App;
