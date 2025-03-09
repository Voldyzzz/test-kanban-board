import { useSelector } from "react-redux";
import { RootState } from "../../store/state";
import formatNumber from "../../utility/formatNumber";

type Props = {
  url: string;
};

const RepoInfo = ({ url }: Props) => {
  const { owner, repository, stargazers } = useSelector(
    (state: RootState) => state.DataRepoSlice
  );

  return (
    <>
      {owner ? (
        <div className="loadRepoData__info">
          <a className="loadRepoData__info-link" href={url} target="_blank">
            <p className="loadRepoData__info-owner">{owner}</p>
            <i className="fa-solid fa-arrow-right"></i>
            <p className="loadRepoData__info-repository">{repository}</p>
          </a>
          <div className="loadRepoData__info__likes">
            <i className="fa-solid fa-star" style={{ color: "#f5ab0a" }}></i>
            <span>{stargazers ? formatNumber(stargazers) : null}</span>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default RepoInfo;
