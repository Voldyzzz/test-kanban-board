import { useSelector } from "react-redux";
import { RootState } from "../../store/state";

type Props = {
  url: string;
};

const RepoInfo = ({ url }: Props) => {
  const { owner, repository, stargazers } = useSelector(
    (state: RootState) => state.DataRepoSlice
  );

  function formatNumber(num: number): string {
    if (num === 0) return "0 stars"; // Если 0 — "0 stars"
    if (num === 1) return "1 star"; // Если 1 звезда — пишем "1 star"
    if (num < 1000) return `${num} stars`; // Для небольших чисел

    const units = ["", "K"]; // K - тысячи, M - миллионы, B - миллиарды, T - триллионы
    let unitIndex = Math.floor(Math.log10(num) / 3); // Определяем, какой это порядок (тысячи, миллионы и т. д.)

    let shortNumber = num / Math.pow(10, unitIndex * 3); // Делим число на его порядок (например, 1234567 -> 1.234567M)
    shortNumber = Math.ceil(shortNumber * 10) / 10; // Округляем вверх до 1 знака после запятой (например, 1.234567 -> 1.3)

    return `${shortNumber}${units[unitIndex]} stars`; // Склеиваем число и суффикс
  }
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
