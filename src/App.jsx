import { useSelector } from 'react-redux'
import TaskFilters from './components/TaskFilters'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { selectStats } from './features/tasks/tasksSlice'

export default function App() {
  const stats = useSelector(selectStats)

  return (
    <main className="container">
      <header>
        <h1>Планировщик задач на React + Redux</h1>
        <p className="subtitle">
          Учебный пример: глобальное состояние задач хранится в Redux Store.
        </p>
      </header>

      <section className="stats">
        <span>Всего: {stats.total}</span>
        <span>Активных: {stats.active}</span>
        <span>Готово: {stats.done}</span>
      </section>

      <TaskForm />
      <TaskFilters />
      <TaskList />

      <section className="notes">
        <h2>Как это работает</h2>
        <ol>
          <li>
            Компоненты отправляют <code>dispatch(action)</code> (например, добавление задачи).
          </li>
          <li>
            Reducer в <code>tasksSlice</code> обновляет store.
          </li>
          <li>
            Компоненты читают новое состояние через <code>useSelector</code>.
          </li>
        </ol>
      </section>
    </main>
  )
}
