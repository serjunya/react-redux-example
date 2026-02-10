# React + Redux учебный проект

Небольшое приложение **"Планировщик задач"**, чтобы понять базовый рабочий процесс React + Redux Toolkit.

## Что внутри

- React 19
- Redux Toolkit + React Redux
- Vite для запуска и сборки

## Быстрый старт

```bash
npm install
npm run dev
```

После запуска открой `http://localhost:5173`.

## Где смотреть Redux-часть

- Store: `src/store/store.js`
- Slice (actions + reducer + selectors): `src/features/tasks/tasksSlice.js`
- Использование в компонентах: `src/components/*` и `src/App.jsx`

## Ключевая идея

1. UI вызывает `dispatch(...)`.
2. Reducer обновляет состояние в store.
3. Компоненты получают обновлённые данные через `useSelector(...)`.
