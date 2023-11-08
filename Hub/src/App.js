import "./App.scss";
import HubScreen from "./pages/HubScreen/index";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="App">
      <HubScreen />
      <Toaster position="bottom-center" />
    </div>
  );
};

export default App;
