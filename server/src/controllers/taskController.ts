import { Request, Response } from 'express';
import Task from '../models/Task';

export const addTask = async (req: Request, res: Response) => {
    try {
        const { taskName, deadline } = req.body;
        const newTask = new Task({ taskName, deadline });
        await newTask.save();
        res.status(201).json({ message: 'Task added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add task' });
    }
};
