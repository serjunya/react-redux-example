import { useDispatch, useSelector } from 'react-redux'
import { selectVisibleTasks, taskRemoved, taskToggled } from '../features/tasks/tasksSlice'

export default function TaskList() {
  const tasks = useSelector(selectVisibleTasks)
  const dispatch = useDispatch()

  if (!tasks.length) {
    return <p className="empty">Нет задач для этого фильтра.</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.completed ? 'task done' : 'task'}>
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(taskToggled(task.id))}
            />
            <span>{task.title}</span>
          </label>
          <button type="button" onClick={() => dispatch(taskRemoved(task.id))}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
  )
}
