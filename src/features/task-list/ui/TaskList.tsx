import { useAppSelector } from '@/app/store/hooks'
import { selectVisibleTasks } from '@/entities/task/model/tasksSlice'
import { TaskItem } from '@/entities/task/ui/TaskItem'

export function TaskList() {
  const tasks = useAppSelector(selectVisibleTasks)

  if (!tasks.length) {
    return <p className="empty">Нет задач для этого фильтра.</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  )
}
