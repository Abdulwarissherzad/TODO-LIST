import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  comleteTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, comleteTask }: Props) => {
  return (
    <>
      <div className="task">
        <div className="content">
          <span> {task.taskName}</span>
          <span> {task.deadline}</span>
        </div>
        <button
          onClick={() => {
            comleteTask(task.taskName);
          }}
        >
          X
        </button>
      </div>
    </>
  );
};

export default TodoTask;
