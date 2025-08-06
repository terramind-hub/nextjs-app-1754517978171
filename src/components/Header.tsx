interface HeaderProps {
  completedCount: number
  totalCount: number
}

export default function Header({ completedCount, totalCount }: HeaderProps) {
  return (
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Todo App</h1>
      <p className="text-gray-600">
        {totalCount === 0 
          ? 'No tasks yet'
          : `${completedCount} of ${totalCount} tasks completed`
        }
      </p>
      {totalCount > 0 && (
        <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
          <div 
            className="bg-primary-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${totalCount > 0 ? (completedCount / totalCount) * 100 : 0}%` }}
          ></div>
        </div>
      )}
    </header>
  )
}
