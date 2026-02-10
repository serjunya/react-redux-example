import { TaskBoard } from '@/widgets/task-board/ui/TaskBoard'

export function HomePage() {
  return (
    <main className="container">
      <header>
        <h1>Планировщик задач на React + Redux</h1>
        <p className="subtitle">
          Учебный пример: глобальное состояние задач хранится в Redux Store.
        </p>
      </header>

      <TaskBoard />

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
