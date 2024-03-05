import { atom } from "jotai";

export const tasksAtom = atom([
  {
    id: Date.now(),
    title: "Learn React",
    completed: false,
  },
  {
    id: Date.now() + 1,
    title: "Learn Firebase",
    completed: false,
  },
  {
    id: Date.now() + 2,
    title: "Learn GraphQL",
    completed: false,
  },
]);

export const completedTasksAtom = atom((get) => {
  const tasks = get(tasksAtom);
  return tasks.filter((task) => task.completed);
});

export const completedTasksCountAtom = atom((get) => {
  const tasks = get(completedTasksAtom);
  return tasks.length;
});

export const incompleteTasksAtom = atom((get) => {
  const tasks = get(tasksAtom);
  return tasks.filter((task) => !task.completed);
});

export const incompleteTasksCountAtom = atom((get) => {
  const tasks = get(incompleteTasksAtom);
  return tasks.length;
});
