import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
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
      reducer(state, action) {
        state.items.push(action.payload)
      },
      prepare(title) {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          },
        }
      },
    },
    taskToggled(state, action) {
      const task = state.items.find((item) => item.id === action.payload)
      if (task) {
        task.completed = !task.completed
      }
    },
    taskRemoved(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    filterChanged(state, action) {
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

export const selectTasks = (state) => state.tasks.items
export const selectFilter = (state) => state.tasks.filter

export const selectVisibleTasks = (state) => {
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

export const selectStats = (state) => {
  const tasks = selectTasks(state)
  const done = tasks.filter((task) => task.completed).length
  return {
    total: tasks.length,
    done,
    active: tasks.length - done,
  }
}

export default tasksSlice.reducer
