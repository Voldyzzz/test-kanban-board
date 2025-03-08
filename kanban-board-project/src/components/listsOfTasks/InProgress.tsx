import Issue from "./Issue";
type Props = {};

const InProgress = (props: Props) => {
  return (
    <div className="listOfIssues__wrapper__block">
      <span className="titleOfList">In Progress</span>
      <ul className="listOfIssues">
        <Issue />
      </ul>
    </div>
  );
};

export default InProgress;
