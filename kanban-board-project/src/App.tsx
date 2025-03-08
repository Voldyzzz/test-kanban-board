import "./App.scss";
import "./styles/reset.scss";
import LoadRepo from "./components/loadRepo";
import ListOfIssues from "./components/listsOfTasks";

function App() {
  return (
    <>
      <div className="main-container">
        <LoadRepo />
        <ListOfIssues />
      </div>
    </>
  );
}

export default App;
