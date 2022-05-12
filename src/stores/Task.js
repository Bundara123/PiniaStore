import { defineStore } from "pinia";

export const useTask = defineStore("Task", {
  state: () => {
    return { tasks: [] };
  }
});
