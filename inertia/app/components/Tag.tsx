type TagProps = {
  children: React.ReactNode
  className?: string
}

export default function Tag({ children, className = '' }: TagProps) {
  return (
    <span
      className={`bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300 ${className}`}
    >
      {children}
    </span>
  )
}
