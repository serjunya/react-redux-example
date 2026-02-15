import { createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/app/store/store'
import type { Task, TaskFilter, TaskId } from '@/shared/types/task'

interface TasksState {
  items: Task[]
  filter: TaskFilter
}

const initialState: TasksState = {
  items: [
    { id: '1', title: 'Изучить базу Redux Toolkit', completed: true },
    { id: '2', title: 'Добавить первую задачу', completed: false },
  ],
  filter: 'all',
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    taskAdded: {
      reducer(state, action: PayloadAction<Task>) {
        state.items.push(action.payload)
      },
      prepare(title: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          } satisfies Task,
        }
      },
    },
    taskToggled(state, action: PayloadAction<TaskId>) {
      const task = state.items.find((item) => item.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
    taskRemoved(state, action: PayloadAction<TaskId>) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    filterChanged(state, action: PayloadAction<TaskFilter>) {
      state.filter = action.payload
    },
    completedTasksCleared(state) {
      state.items = state.items.filter((item) => !item.completed)
    },
  },
})

export const {
  taskAdded,
  taskToggled,
  taskRemoved,
  filterChanged,
  completedTasksCleared,
} = tasksSlice.actions

export const tasksReducer = tasksSlice.reducer

export const selectTasks = (state: RootState): Task[] => state.tasks.items
export const selectFilter = (state: RootState): TaskFilter => state.tasks.filter

export const selectVisibleTasks = (state: RootState): Task[] => {
  const tasks = selectTasks(state)
  const filter = selectFilter(state)

  if (filter === 'active') {
    return tasks.filter((task) => !task.completed)
  }

  if (filter === 'done') {
    return tasks.filter((task) => task.completed)
  }

  return tasks
}

export const selectStats = (state: RootState): { total: number; done: number; active: number } => {
  const tasks = selectTasks(state)
  const done = tasks.filter((task) => task.completed).length

  return {
    total: tasks.length,
    done,
    active: tasks.length - done,
  }
}
