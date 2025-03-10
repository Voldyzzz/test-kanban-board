import { useDraggable } from "@dnd-kit/core";
import { RepoData } from "../../types/types";
import formatTime from "../../utility/formatTime";

type Props = {
  issue: RepoData;
};

const Issue = ({ issue }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: issue.id,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <li
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="listOfIssues__item"
      style={style}
    >
      <p className="listOfIssues__item-title">{issue.title}</p>
      <p className="listOfIssues__item-number-date">{`${
        "#" + issue.number + "    " + formatTime(issue.updated_at)
      }`}</p>
      <div className="listOfIssues__item__info">
        <span className="listOfIssues__item__info-author">{issue.user} |</span>
        <span className="listOfIssues__item__info-comments">
          {`  Comments: ${issue.comments}`}
        </span>
      </div>
    </li>
  );
};

export default Issue;
