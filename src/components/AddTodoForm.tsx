'use client'

import { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/outline'

interface AddTodoFormProps {
  onAddTodo: (text: string) => void
}

export default function AddTodoForm({ onAddTodo }: AddTodoFormProps) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmedValue = inputValue.trim()
    
    if (trimmedValue) {
      onAddTodo(trimmedValue)
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new todo..."
        className="input-field"
        maxLength={100}
      />
      <button
        type="submit"
        disabled={!inputValue.trim()}
        className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <PlusIcon className="h-5 w-5" />
        Add
      </button>
    </form>
  )
}
