/**
 * Generate a unique ID for todos
 * Using timestamp + random number for simplicity
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Format date to readable string
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(date)
}

/**
 * Validate todo text input
 */
export function validateTodoText(text: string): boolean {
  return text.trim().length > 0 && text.trim().length <= 100
}
