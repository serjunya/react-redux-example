import { useDispatch, useSelector } from 'react-redux'
import { completedTasksCleared, filterChanged, selectFilter } from '../features/tasks/tasksSlice'

const filterOptions = [
  { value: 'all', label: 'Все' },
  { value: 'active', label: 'Активные' },
  { value: 'done', label: 'Выполненные' },
]

export default function TaskFilters() {
  const currentFilter = useSelector(selectFilter)
  const dispatch = useDispatch()

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
