import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useTodo } from '../context/useTodo'
import {Input} from './Input'


function AddTodo() {
  const [input, setInput] = useState<string>("")
  // const [todos, setTodos] = useState<string[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const { addTodo } = useTodo()

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])
  
  function handleSubmission(e: React.FormEvent) {
    e.preventDefault()
    if (input.trim() !== '') {
      addTodo(input)
      setInput('')
      toast.success('Todo added Successfully!')
    } else {
      toast.error('Todo field cannot be empty!')
    }
  }
  return (
    <form onSubmit={handleSubmission}>
      <div className='flex items-center w-full max-w-lg gap-2 p-5 m-auto'>
        <Input
          value={input}
          ref={inputRef}
          onChange={(e) => setInput(e.target.value)}
          className='w-full px-5 py-2 bg-transparent border-2 outline-none border-zinc-600 rounded-xl placeholder:text-zinc-500 focus:border-white'
          placeholder='start typing...'
          type="text" />
        <button
          type='submit'
          className='px-5 py-2 text-sm font-normal text-blue-300 bg-blue-900 border-2 border-blue-900 active:scale-95 rounded-xl'
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default AddTodo