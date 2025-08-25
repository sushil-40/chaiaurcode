import "./App.css";
import UserContextProvider from "./components/context/UserContextProvider";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <UserContextProvider>
      <Dashboard />
    </UserContextProvider>
  );
}

export default App;
