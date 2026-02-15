import { useAppDispatch } from '@/app/store/hooks'
import { taskRemoved, taskToggled } from '@/entities/task/model/tasksSlice'
import type { Task } from '@/shared/types/task'

interface TaskItemProps {
  task: Task
}

export function TaskItem({ task }: TaskItemProps) {
  const dispatch = useAppDispatch()

  return (
    <li className={task.completed ? 'task done' : 'task'}>
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
  )
}
