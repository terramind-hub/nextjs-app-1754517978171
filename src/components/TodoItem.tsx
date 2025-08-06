import { TrashIcon } from '@heroicons/react/24/outline'
import { Todo } from '@/types/todo'

interface TodoItemProps {
  todo: Todo
  onToggle: () => void
  onDelete: () => void
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
          className="h-5 w-5 text-primary-500 rounded focus:ring-primary-500 focus:ring-2"
        />
        <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
          {todo.text}
        </span>
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400">
          {new Date(todo.createdAt).toLocaleDateString()}
        </span>
        <button
          onClick={onDelete}
          className="btn-danger p-2"
          title="Delete todo"
        >
          <TrashIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
