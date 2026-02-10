import { useAppSelector } from '@/app/store/hooks'
import { selectStats } from '@/entities/task/model/tasksSlice'
import { AddTaskForm } from '@/features/add-task/ui/AddTaskForm'
import { TaskFilters } from '@/features/task-filters/ui/TaskFilters'
import { TaskList } from '@/features/task-list/ui/TaskList'

export function TaskBoard() {
  const stats = useAppSelector(selectStats)

  return (
    <>
      <section className="stats">
        <span>Всего: {stats.total}</span>
        <span>Активных: {stats.active}</span>
        <span>Готово: {stats.done}</span>
      </section>

      <AddTaskForm />
      <TaskFilters />
      <TaskList />
    </>
  )
}
