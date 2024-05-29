'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

const Page = () => {
  const [count, setcount] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const { toast } = useToast()

  var value = parseInt(inputValue)

  const addFunction = () => {
    if (!isNaN(value)) {
      setcount(count + value)
    } else {
      toast({
        title: "Input is Empty",
        description: "If you want to Add number to Counter , You must have to write a number first",
      })
    }
  }
  const minusFunction = () => {
    if (!isNaN(value)) {
      setcount(count - value)
    }else {
      toast({
        title: "Input is Empty",
        description: "If you want to Minus number to Counter , You must have to write a number first",
      })
    }
  }

  return (
    <main className='p-24'>
      <h1 className='text-center text-7xl font-bold'>Welcome to Counter App</h1>
      <div className='flex flex-col gap-8 items-center justify-between p-24'>
        <p className='font-bold text-5xl'>Counter: {count}</p>
        <Input type="number" placeholder="Enter Number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <div className='flex gap-7'>
          <Button onClick={addFunction}>Add</Button>
          <Button onClick={minusFunction}>Minus</Button>
        </div>
      </div>
    </main>
  )
}

export default Page
