import Login from "./components/Authentication/Login";
import "./App.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  let navigate = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div>
      <Login></Login>
    </div>
  );
};

export default App;
