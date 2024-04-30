// import logo from './logo.svg';
// import './App.css
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import RecentWork from "./components/RecentWork";
//css
import Style from "./css/Style.css";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutMe />
      <RecentWork />
    </div>
  );
}

export default App;
