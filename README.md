# React + Redux + TypeScript учебный проект (FSD)

Небольшое приложение **"Планировщик задач"**, чтобы понять базовый рабочий процесс React + Redux Toolkit с архитектурой **Feature-Sliced Design (FSD)**.

## Стек

- React 19
- Redux Toolkit + React Redux
- TypeScript (strict)
- Vite

## Быстрый старт

```bash
npm install
npm run dev
```

После запуска открой `http://localhost:5173`.

## Структура проекта (FSD)

- `src/app` — инициализация приложения, провайдеры, store, глобальные стили.
- `src/pages` — страницы приложения.
- `src/widgets` — крупные UI-блоки (композиция features/entities).
- `src/features` — пользовательские сценарии (добавление задач, фильтры, список).
- `src/entities` — бизнес-сущности (task: model + ui).
- `src/shared` — общие типы.

## Где смотреть Redux

- Store: `src/app/store/store.ts`
- Slice/actions/selectors: `src/entities/task/model/tasksSlice.ts`
- Typed hooks: `src/app/store/hooks.ts`

## Ключевая идея

1. UI вызывает `dispatch(...)`.
2. Reducer обновляет состояние в store.
3. Компоненты получают обновлённые данные через `useSelector(...)`.
