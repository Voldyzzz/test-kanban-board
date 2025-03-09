import { useState } from "react";
import { Button } from "react-bootstrap";
import "./index.scss";
import extractOwnerAndRepo from "../../utility/parseRepoUrl";
import RepoInfo from "./RepoInfo";
import useLoadDataToPage from "../../hooks/useLoadDataToPage";

const LoadRepo = () => {
  const [inputValue, setInputValue] = useState("");
  const loadDataToPage = useLoadDataToPage();

  async function fetchData() {
    const repoInfo = extractOwnerAndRepo(inputValue);

    if (!repoInfo) {
      console.log(console.error("Invalid Repository info"));
      return;
    }

    loadDataToPage(repoInfo);
  }

  const handleClick = () => {
    if (inputValue) {
      fetchData();
      setInputValue("");
    }
  };

  const handleChangeInput = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="loadRepoData__wrapper">
        <input
          type="text"
          value={inputValue}
          placeholder="Enter repo URL"
          onChange={handleChangeInput}
        />
        <Button onClick={handleClick} variant="outline-dark">
          Load issues
        </Button>
      </div>
      <RepoInfo url={inputValue} />
    </>
  );
};

export default LoadRepo;
