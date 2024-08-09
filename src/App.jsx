
import Client from "./components/Clients/Client";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Main/>
      <Client />
      <Section />
    </div>
  )
}

export default App;
