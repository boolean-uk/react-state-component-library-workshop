import PropTypes from "prop-types";
import { Button, Checkbox, Group, Text } from "@mantine/core";
import { useAtom } from "jotai";
import { showCompletedTasksAtom } from "../state/ui.state";
import {
  completedTasksAtom,
  completedTasksCountAtom,
} from "../state/data.state";

function CompletedTasksLists({ deleteTask, toggleTaskCompleted }) {
  const [completedTasks] = useAtom(completedTasksAtom);
  const [completedTasksCount] = useAtom(completedTasksCountAtom);
  const [showCompletedTasks] = useAtom(showCompletedTasksAtom);

  if (!showCompletedTasks) return null;

  return (
    <section>
      <h2>Completed Tasks ({completedTasksCount})</h2>
      <div>
        {completedTasks.map((task) => {
          return (
            <Group key={task.id} p={8}>
              <Checkbox
                color="violet"
                size="md"
                checked={task.completed}
                onChange={() => toggleTaskCompleted(task.id)}
              />
              <Text size="lg">{task.title}</Text>
              <Button
                onClick={() => deleteTask(task.id)}
                variant="filled"
                color="pink"
                size="xs"
              >
                Delete
              </Button>
            </Group>
          );
        })}
      </div>
    </section>
  );
}

CompletedTasksLists.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  toggleTaskCompleted: PropTypes.func.isRequired,
};

export default CompletedTasksLists;
