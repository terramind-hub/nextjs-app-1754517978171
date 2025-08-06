'use client'

import { useState, useCallback, useMemo } from 'react'
import { Todo } from '@/types/todo'
import { generateId } from '@/utils/helpers'

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = useCallback((text: string) => {
    const newTodo: Todo = {
      id: generateId(),
      text: text.trim(),
      completed: false,
      createdAt: new Date()
    }
    
    setTodos(prevTodos => [newTodo, ...prevTodos])
  }, [])

  const deleteTodo = useCallback((id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }, [])

  const toggleTodo = useCallback((id: string) => {
    setTodos(prevTodos => 
      prevTodos.map(todo => 
        todo.id === id 
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }, [])

  const completedCount = useMemo(() => {
    return todos.filter(todo => todo.completed).length
  }, [todos])

  const totalCount = todos.length

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    completedCount,
    totalCount
  }
}
