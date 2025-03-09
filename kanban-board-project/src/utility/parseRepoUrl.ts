import { Repo } from "../types/types";

const extractOwnerAndRepo = (url: string): Repo | null => {
  const match = url.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+)\/?$/);

  if (match) {
    return { owner: match[1], repository: match[2] };
  } else {
    console.error("Invalid GitHub repository URL");
    return null;
  }
};

export default extractOwnerAndRepo;
