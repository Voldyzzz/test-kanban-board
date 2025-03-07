import { useEffect } from "react";
import "./App.scss";
import { getIssuesData } from "./services/getData";
import { Repo } from "./types/types";
import LoadRepo from "./components/loadRepo";

function App() {
  async function fetchData() {
    const obj: Repo = {
      owner: "facebook",
      repository: "react",
    };

    try {
      const data = await getIssuesData(obj);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="main-container">
        <LoadRepo></LoadRepo>
      </div>
    </>
  );
}

export default App;
