import React, { useState } from 'react'

export default function AddList({setList, setShowModal}) {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = e =>{
    e.preventDefault();
    const submittedList = {
      title: title,
      startDate: date,
      id: Date.now()
    };

    setList(prevState => [...prevState, submittedList])
    setShowModal(false)
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            <span>Which programming labguage?</span>
            <input onChange={e => setTitle(e.target.value)} type='text' placeholder='Your Title'/>
        </label>
        <label>
            <span>What is the date you started?</span>
            <input onChange={e => setDate(e.target.value)} type='date'/>
        </label>
        <button >Submit</button>
    </form>
  )
}
