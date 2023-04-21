import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.model/task.model';

@Controller('tasks')
export class TasksController {

    constructor(private readonly taskService: TaskService){
    }

    @Get()
    async getAllTasks(): Promise<Task[]> {
        return this.taskService.findAllTasks();
    }

    @Get(':id')
    async getTaskById(@Param('id') id: string): Promise<Task> {
        return this.taskService.findTaskById(id);
    }

    @Post()
    async createTask(@Body() task: Task): Promise<Task> {
        return this.taskService.createTask(task);
    }

    @Put(':id')
    async updateTask(@Param('id') id: string, @Body() task: Task): Promise<Task> {
        return this.taskService.updateTask(id, task);
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: string): Promise<Task> {
        return this.taskService.deleteTask(id);
    }

}
