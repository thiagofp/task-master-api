import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from '../../domain-model/task.model';

@Injectable()
export class TaskService {

    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>){}

    async createTask(task: Task): Promise<Task> {
        const createdTask = new this.taskModel(task);
        return createdTask.save();
    }

    async deleteTask(id: string): Promise<Task> {
        return this.taskModel.findByIdAndRemove(id).exec();
    }

    async updateTask(id: string, task: Task): Promise<Task> {
        return this.taskModel.findByIdAndUpdate(id, task, { new: true }).exec();
    }

    async findAllTasks(): Promise<Task[]> {
        return this.taskModel.find().exec();
    }

    async findTaskById(id: string): Promise<Task> {
        return this.taskModel.findById(id).exec();
    }

}
