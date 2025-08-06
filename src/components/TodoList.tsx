import TodoItem from './TodoItem'
import { Todo } from '@/types/todo'

interface TodoListProps {
  todos: Todo[]
  onToggleTodo: (id: string) => void
  onDeleteTodo: (id: string) => void
}

export default function TodoList({ todos, onToggleTodo, onDeleteTodo }: TodoListProps) {
  if (todos.length === 0) {
    return null
  }

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Tasks ({todos.length})
      </h2>
      <div className="space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => onToggleTodo(todo.id)}
            onDelete={() => onDeleteTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  )
}
