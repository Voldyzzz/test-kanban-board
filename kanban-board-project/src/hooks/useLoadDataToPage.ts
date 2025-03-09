import { useDispatch } from "react-redux";
import { getIssuesData, getStargazersCount } from "../services/getData";
import { getLocalStorage, setLocalStorage } from "../services/localStorage";
import { updateData } from "../store/dataRepoSlice";
import { RepoData, Repo } from "../types/types";
import { addIssues } from "../store/listOfIssuesSlice";
import { useCallback } from "react";

const useLoadDataToPage = () => {
  const dispatch = useDispatch();

  return useCallback(
    async (repoInfo: Repo) => {
      try {
        const repositoryData = await getStargazersCount(repoInfo);
        const storageData: any = getLocalStorage(`repo_${repositoryData.id}`);
        if (!storageData) {
          dispatch(
            updateData({
              id: repositoryData.id,
              ...repoInfo,
              stargazers: repositoryData.stargazers_count,
            })
          );
          const issuesData = await getIssuesData(repoInfo);
          const repoDataArray: RepoData[] = issuesData.map((item: any) => ({
            id: item.id,
            number: item.number,
            title: item.title,
            state: item.state,
            comments: item.comments,
            updated_at: item.updated_at,
            user: item.user.login,
          }));

          dispatch(addIssues({ issues: repoDataArray }));
          setLocalStorage(`repo_${repositoryData.id}`, {
            id: repositoryData.id,
            ...repoInfo,
            stargazers: repositoryData.stargazers_count,
            issues: repoDataArray,
          });
        } else {
          dispatch(
            updateData({
              id: repositoryData.id,
              ...repoInfo,
              stargazers: storageData.stargazers,
            })
          );
          dispatch(addIssues({ issues: storageData.issues }));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    [dispatch]
  );
};

export default useLoadDataToPage;
