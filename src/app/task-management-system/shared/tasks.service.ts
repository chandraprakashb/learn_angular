import { Task } from "./task.model";

export class TaskService{
    allTasks:Task[] = [
        new Task("Make a Plan", "Making a plan about what components we should create !", "Completed", this.generateRandomString()),
        new Task("Make a Plan", "Making a plan about what components we should create !", "In Progress", this.generateRandomString()),
        new Task("Make a Plan", "Making a plan about what components we should create !", "Completed", this.generateRandomString()),
        new Task("Make a Plan", "Making a plan about what components we should create !", "In Progress", this.generateRandomString()),
        new Task("Make a Plan", "Making a plan about what components we should create !", "Completed", this.generateRandomString()),
        new Task("Make a Plan", "Making a plan about what components we should create !", "In Progress", this.generateRandomString()),
        new Task("Make a Plan", "Making a plan about what components we should create !", "Completed", this.generateRandomString()),
        new Task("Make a Plan", "Making a plan about what components we should create !", "In Progress", this.generateRandomString()),
        new Task("Make a Plan", "Making a plan about what components we should create !", "In Progress", this.generateRandomString()),
        new Task("Make a Plan", "Making a plan about what components we should create !", "In Progress", this.generateRandomString()),
    ]


    generateRandomString() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
      
        for (let i = 0; i < 10; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          result += characters.charAt(randomIndex);
        }
      
        return (result).toLowerCase();
      }
}