import { Button } from "react-bootstrap";
import "./index.scss";
import { getStargazersCount } from "../../services/getData";
import { Repo } from "../../types/types";

const LoadRepo = () => {
  async function fetchData() {
    const obj: Repo = {
      owner: "facebook",
      repository: "react",
    };

    try {
      const data = await getStargazersCount(obj);
      console.log(data.stargazers_count);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className="loadRepoData__wrapper">
      <input type="text" placeholder="Enter repo URL" />
      <Button onClick={handleClick} variant="outline-dark">
        Load issues
      </Button>
    </div>
  );
};

export default LoadRepo;
