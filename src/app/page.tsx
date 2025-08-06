'use client'

import { useState } from 'react'
import TodoList from '@/components/TodoList'
import AddTodoForm from '@/components/AddTodoForm'
import Header from '@/components/Header'
import { Todo } from '@/types/todo'
import { useTodos } from '@/hooks/useTodos'

export default function Home() {
  const {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    completedCount,
    totalCount
  } = useTodos()

  return (
    <main className="container mx-auto px-4 py-8 max-w-2xl">
      <Header completedCount={completedCount} totalCount={totalCount} />
      
      <div className="space-y-6">
        <AddTodoForm onAddTodo={addTodo} />
        <TodoList 
          todos={todos}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
        />
      </div>
      
      {todos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No todos yet. Add one above to get started!</p>
        </div>
      )}
    </main>
  )
}
