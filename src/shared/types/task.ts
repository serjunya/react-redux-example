export type TaskId = string

export interface Task {
  id: TaskId
  title: string
  completed: boolean
}

export type TaskFilter = 'all' | 'active' | 'done'
