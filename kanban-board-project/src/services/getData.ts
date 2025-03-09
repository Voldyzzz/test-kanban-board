import { Repo } from "../types/types";

const API = "https://api.github.com/repos/";

export const getIssuesData = async (repoInfo: Repo) => {
  try {
    const response = await fetch(
      `${API + repoInfo.owner + "/" + repoInfo.repository + "/" + "issues"}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch issues");
    }
    const data = await response.json();
    return data.slice(0, 10);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

// export const getStargazersCount = "https://api.github.com/repos/facebook/react";

export const getStargazersCount = async (repoInfo: Repo) => {
  try {
    const response = await fetch(
      `${API + repoInfo.owner + "/" + repoInfo.repository}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch issues");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
