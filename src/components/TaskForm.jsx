import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { taskAdded } from '../features/tasks/tasksSlice'

export default function TaskForm() {
  const [title, setTitle] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    const normalizedTitle = title.trim()

    if (!normalizedTitle) {
      return
    }

    dispatch(taskAdded(normalizedTitle))
    setTitle('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Например: Сделать селекторы"
        aria-label="Название задачи"
      />
      <button type="submit">Добавить</button>
    </form>
  )
}
