import IssuesList from "./IssuesList";
import "./index.scss";
import { RootState } from "../../store/state";
import { useDispatch, useSelector } from "react-redux";
import { RepoData } from "../../types/types";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { updateIssues } from "../../store/listOfIssuesSlice";
import listsStatus from "../../utility/listStatus";
import { useIssuesByStatus } from "../../hooks/useIssuesByStatus";

const ListOfIssues = () => {
  const idOfRepository = useSelector(
    (state: RootState) => state.DataRepoSlice.id
  );
  const dispatch = useDispatch();

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const issueId = active.id as number;
    let newState = over.id as RepoData["state"];
    let newOrder: number | undefined;
    let currentOrder: number | undefined;

    if (String(over.id).startsWith("issue")) {
      newOrder = over.data.current?.order;
      newState = over.data.current?.state;
      currentOrder = active.data.current?.order;
    }

    dispatch(
      updateIssues({
        issueId,
        newState,
        newOrder,
        currentOrder,
        idOfRepository,
      })
    );
  }

  return (
    <div className="listOfIssues__wrapper">
      <DndContext onDragEnd={handleDragEnd}>
        {listsStatus.map((list) => {
          const issues = useIssuesByStatus(list);
          return <IssuesList key={list.id} list={list} issues={issues} />;
        })}
      </DndContext>
    </div>
  );
};

export default ListOfIssues;
