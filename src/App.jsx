import "./App.css";
import Nav from "./components/nav";
import HomePage from "./pages/homePage";

function App() {
  return (
    <>
      <div className="pb-5 max-w:[1280px]">
        <Nav />
        <HomePage />
      </div>
    </>
  );
}

export default App;
