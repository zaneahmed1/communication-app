// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
import Home from "../src/Components/Home"
import HomeButtons from "./Components/HomeButtons";
import QuestionsButtons from "./Components/QuestionsButtons"
import ThingsButtons from "./Components/ThingsButtons"
import TimeDateButtons from "./Components/TimeDateButtons"
import ActionsButtons from "./Components/ActionsButtons"
import ChatButtons from "./Components/ChatButtons";
import PeopleButtons from "./Components/PeopleButtons";
import NewButtonForm from "./Components/NewButtonForm";
import Login from "./Components/Login";
import { UserProvider } from "./Providers/UserProvider";


function App() {

  const API = process.env.REACT_APP_API_URL;

  const [buttons, setButtons] = useState([])

  useEffect(() => {
      axios
        .get(`${API}/buttons`)
        .then((response) => setButtons(response.data))
        .catch((e) => console.error("catch", e));
    }, []);

  return (
    <div className="App">
      <UserProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<HomeButtons buttons={buttons}/>} />
            <Route path="/people" element={<PeopleButtons buttons={buttons}/>} />
            <Route path="/questions" element={<QuestionsButtons buttons={buttons}/>} />
            <Route path="/things" element={<ThingsButtons buttons={buttons}/>} />
            <Route path="/timedate" element={<TimeDateButtons buttons={buttons}/>} />
            <Route path="/actions" element={<ActionsButtons buttons={buttons}/>} />
            <Route path="/chat" element={<ChatButtons buttons={buttons}/>} />
            <Route path="/new" element={<NewButtonForm/>}/>
          </Routes>
      </Router>
      </UserProvider>

    </div>
  );
}

export default App;
