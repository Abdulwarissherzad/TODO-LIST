import { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { ITask } from "./Interfaces";
import TodoTask from "./components/TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadLin, setDeadLine] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      // setDeadLine(parseInt(event.target.value)); this what i did
      setDeadLine(Number(event.target.value)); //Pedro did like this
    }
  };
  // This newTask Object is create an object for interface. we careated in another components and passed to the useState and now we create an object for it.
  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadLin };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadLine(0);
  };
  // Deleting a task
  const complateTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div>
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            className="form-control"
            placeholder="Task ..."
            onChange={handleChange}
            name="task"
            value={task}
          />
          <input
            type="number"
            className=" form-control "
            placeholder="Deadline (in Days) ... "
            onChange={handleChange}
            name="deadline"
            value={deadLin}
          />
        </div>
        <button className="btn btn-primary" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="todoList">
        {todoList.map((item: ITask, key: number) => {
          return <TodoTask key={key} task={item} comleteTask={complateTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
