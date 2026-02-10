import { useAppDispatch, useAppSelector } from '@/app/store/hooks'
import {
  completedTasksCleared,
  filterChanged,
  selectFilter,
} from '@/entities/task/model/tasksSlice'
import type { TaskFilter } from '@/shared/types/task'

const filterOptions: Array<{ value: TaskFilter; label: string }> = [
  { value: 'all', label: 'Все' },
  { value: 'active', label: 'Активные' },
  { value: 'done', label: 'Выполненные' },
]

export function TaskFilters() {
  const currentFilter = useAppSelector(selectFilter)
  const dispatch = useAppDispatch()

  return (
    <div className="task-filters">
      <div className="chips">
        {filterOptions.map((filter) => (
          <button
            key={filter.value}
            className={currentFilter === filter.value ? 'chip active' : 'chip'}
            onClick={() => dispatch(filterChanged(filter.value))}
            type="button"
          >
            {filter.label}
          </button>
        ))}
      </div>
      <button className="clear-btn" type="button" onClick={() => dispatch(completedTasksCleared())}>
        Очистить выполненные
      </button>
    </div>
  )
}
