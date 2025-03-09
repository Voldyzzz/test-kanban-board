import { RepoData } from "../../types/types";
import formatTime from "../../utility/formatTime";

type Props = {
  number: number;
  title: string;
  state: string;
  comments: number;
  updated_at: string;
  user: string;
};

const Issue = ({ number, title, state, comments, updated_at, user }: Props) => {
  return (
    <li className="listOfIssues__item">
      <p className="listOfIssues__item-title">{title}</p>
      <p className="listOfIssues__item-number-date">{`${
        "#" + number + "    " + formatTime(updated_at)
      }`}</p>
      <div className="listOfIssues__item__info">
        <span className="listOfIssues__item__info-author">{user} |</span>
        <span className="listOfIssues__item__info-comments">
          {`  Comments: ${comments}`}
        </span>
      </div>
    </li>
  );
};

export default Issue;
