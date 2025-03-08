import { Button } from "react-bootstrap";
import "./index.scss";
import { getIssuesData, getStargazersCount } from "../../services/getData";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateData } from "../../store/dataRepoSlice";
import RepoInfo from "./RepoInfo";

const LoadRepo = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const extractOwnerAndRepo = (
    url: string
  ): { owner: string; repository: string } | null => {
    const match = url.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/?$/);

    if (match) {
      return { owner: match[1], repository: match[2] };
    } else {
      console.error("Invalid GitHub repository URL");
      return null;
    }
  };

  async function fetchData() {
    const repoInfo = extractOwnerAndRepo(inputValue);

    if (!repoInfo) {
      console.log(console.error("Invalid Repository info"));
      return;
    }

    try {
      const repositoryData = await getStargazersCount(repoInfo);
      dispatch(
        updateData({ ...repoInfo, stargazers: repositoryData.stargazers_count })
      );
      const issuesData = await getIssuesData(repoInfo);
      console.log(issuesData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleClick = () => {
    if (inputValue) fetchData();
  };

  const handleChangeInput = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="loadRepoData__wrapper">
        <input
          type="text"
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
