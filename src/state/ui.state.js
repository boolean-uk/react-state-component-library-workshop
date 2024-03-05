import { atomWithStorage } from "jotai/utils";

export const showCompletedTasksAtom = atomWithStorage(
  "showCompletedTasks",
  true
);
