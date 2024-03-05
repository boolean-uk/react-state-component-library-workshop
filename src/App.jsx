import { Checkbox, Stack } from "@mantine/core";
import { useAtom } from "jotai";
import { showCompletedTasksAtom } from "./state/ui.state";
import CompletedTasksLists from "./components/CompletedTasksList";
import { tasksAtom } from "./state/data.state";
import IncompleteTasksList from "./components/IncompleteTasksList";
import CreateTaskForm from "./components/CreateTaskForm";
import Header from "./components/Header";

function App() {
  const [tasks, setTasks] = useAtom(tasksAtom);

  const [showCompletedTasks, setShowCompletedTasks] = useAtom(
    showCompletedTasksAtom
  );

  const createTask = (title) => {
    if (title.length === 0) return;
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompleted = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });

    setTasks(newTasks);
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <>
      <Header />

      <section>
        <Stack>
          <CreateTaskForm createTask={createTask} />
          <Checkbox
            label="Show completed tasks?"
            labelPosition="left"
            checked={showCompletedTasks}
            onClick={() => setShowCompletedTasks(!showCompletedTasks)}
          />
        </Stack>
      </section>

      <IncompleteTasksList
        deleteTask={deleteTask}
        toggleTaskCompleted={toggleTaskCompleted}
      />

      <CompletedTasksLists
        deleteTask={deleteTask}
        toggleTaskCompleted={toggleTaskCompleted}
      />
    </>
  );
}

export default App;
