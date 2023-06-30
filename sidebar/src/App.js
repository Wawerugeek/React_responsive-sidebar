import { Route, useLocation } from "react-router";
import Sidebar from "./Sidebar/Sidebar";
import { Switch } from "evergreen-ui";
import Home from "./components/Home";
import Calender from "./components/Calender";
import Documents from "./components/Documents";
import Projects from "./components/Projects";
import Team from "./components/Team";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";


const Pages = styled.div`
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {
        font-size: calc(2rem + 2vw)
        background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

`;

function App() {
  const location = useLocation();
  return (
    <>
    <Sidebar />
    <Pages>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route path="/team" component={Team} />
          <Route path="/calender" component={Calender} />
          <Route path="/documents" component={Documents} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </AnimatePresence>
    </Pages>

    </>
  );
}

export default App;
