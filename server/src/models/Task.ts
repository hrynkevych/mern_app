import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
    taskName: string;
    deadline: Date;
}

const TaskSchema: Schema = new Schema({
    taskName: { type: String, required: true },
    deadline: { type: Date, required: true }
});

export default mongoose.model<ITask>('Task', TaskSchema);
