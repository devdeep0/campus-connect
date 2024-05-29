"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import {collection, addDoc} from "firebase/firestore"
import {db} from "@/firebase/firebase.js"
function Main() {
  const [Items, setItems] = useState({rollno: '', feedback: ""})
  //adding items to db
  const addItems = async (e) =>{
    e.preventDefault()
    if (Items.rollno !== "" && Items.feedback !== "") {
      
      await  addDoc(collection(db, "data"), {
        rollno : Items.rollno,
        feedback : Items.feedback
      }
    )
    }
  }

  return (
    <div className='h-auto w-full flex flex-col gap-9 pt-[150px] justify-start items-center overflow-hidden'>
      <div className='bg-white h-[500px] w-full'  style={{ 
      backgroundImage: `url('/building.jpg')`,
      backgroundPosition: 'center', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat'
    }}>
      </div>

{/* texxt */}

      <div className='flex flex-col items-center gap-2 justify-center h-[200px] w-full bg-black-500'>
        <div className='text-4xl font-serif'> Connecting minds, Empowering futures </div>
       
      </div>

      {/* three divsss */}
      <div className='m-3 flex gap-9'>
        <div className='h-[300px] w-[300px] bg-white overflow-x-hidden' style={{ 
      backgroundImage: `url('/divs/401e437e-139c-46b7-8e7b-c153e7937d04.jpg')`,
      backgroundPosition: 'center', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat'
    }}></div>
        <div className='h-[300px] w-[300px] bg-white overflow-x-hidden' style={{ 
      backgroundImage: `url('/divs/03029edc-48fa-4597-b3cd-e9cc52b1b3e9.jpg')`,
      backgroundPosition: 'center', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat'
    }}></div>
        <div className='h-[300px] w-[300px] bg-white overflow-x-hidden' style={{ 
      backgroundImage: `url('/divs/230250c7-1c7a-47b2-abff-90ecbf542eed.jpg')`,
      backgroundPosition: 'center', 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat'
    }}></div>
      </div>
      <div className='flex flex-col items-center gap-2 justify-center h-[200px] w-full bg-black-500'>
        <div className='text-5xl font-serif italic font-bold'> Campus Connect </div>
       
      </div>

      <form action="" className='m-4 h-[600px] rounded-md pt-10 w-[700px] bg-black text-white border-white border-2 flex flex-col gap-12 items-center justify-start p-6'>
        <div className=' flex flex-col items-center justify-start'>
        <div className='text-4xl'>Student Feedback Form</div>
        <span className='text-xl'>please provide your number and feedback</span>
        </div>
        <div className='flex flex-col '> 
          <div>Roll no:</div>
          <input value={Items.rollno} onChange={(e) => setItems({...Items, rollno:e.target.value})} type="text" className='h-[50px] w-[400px] rounded-md caret-gray-500 text-black' />
        </div>
        <div>
        <div>feedback:</div>
          <input value={Items.feedback}  onChange={(e) => setItems({...Items, feedback:e.target.value})} type="text" className='h-[150px] w-[400px] rounded-md text-black' />
        </div>
        <button onClick={addItems}>submit</button>
      </form>
    </div>
  )
}

export default Main