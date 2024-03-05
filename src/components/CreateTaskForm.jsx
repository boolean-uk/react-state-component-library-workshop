import PropTypes from "prop-types";
import { useState } from "react";
import { Button, Group, TextInput } from "@mantine/core";

function CreateTaskForm({ createTask }) {
  const [newTaskFormData, setNewTaskFormData] = useState({ title: "" });

  const handleNewTaskFormInputChange = (event) => {
    const { name, value } = event.target;
    setNewTaskFormData({ ...newTaskFormData, [name]: value });
  };

  const handleNewTaskFormSubmit = (event) => {
    event.preventDefault();
    createTask(newTaskFormData.title);
    setNewTaskFormData({ title: "" });
  };
  return (
    <form onSubmit={handleNewTaskFormSubmit}>
      <Group>
        <TextInput
          // label="Create Task"
          type="text"
          name="title"
          placeholder="Task title"
          value={newTaskFormData.title}
          onChange={handleNewTaskFormInputChange}
        />
        <Button type="submit" variant="filled" color="green">
          Create Task
        </Button>
      </Group>
    </form>
  );
}

CreateTaskForm.propTypes = {
  createTask: PropTypes.func.isRequired,
};

export default CreateTaskForm;
