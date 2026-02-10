import { useState, type FormEvent } from 'react'
import { useAppDispatch } from '@/app/store/hooks'
import { taskAdded } from '@/entities/task/model/tasksSlice'

export function AddTaskForm() {
  const [title, setTitle] = useState<string>('')
  const dispatch = useAppDispatch()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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
