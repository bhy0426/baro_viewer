export interface RoomForm {
  year: string;
  semester: string;
  className: string;
  assignmentName: string;
  dueDate: string;
  dueTime: string;
  professor: string;
  password: string;
}

export interface Room extends RoomForm {
  id: number;
  createdAt: string;
}