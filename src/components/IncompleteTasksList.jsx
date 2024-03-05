import PropTypes from "prop-types";
import { Button, Checkbox, Group, Text } from "@mantine/core";
import { useAtom } from "jotai";
import {
  incompleteTasksAtom,
  incompleteTasksCountAtom,
} from "../state/data.state";

function IncompleteTasksList({ deleteTask, toggleTaskCompleted }) {
  const [incompleteTasks] = useAtom(incompleteTasksAtom);
  const [incompleteTasksCount] = useAtom(incompleteTasksCountAtom);

  return (
    <section>
      <h2>Tasks ({incompleteTasksCount})</h2>
      <div>
        {incompleteTasks.map((task) => {
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

IncompleteTasksList.propTypes = {
  deleteTask: PropTypes.func.isRequired,
  toggleTaskCompleted: PropTypes.func.isRequired,
};

export default IncompleteTasksList;
