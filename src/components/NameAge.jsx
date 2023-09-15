import React, { useState } from 'react'

const NameAge = () => {
  const [Name, setName] = useState("Fatih");
  const [Age, setAge] = useState(19);


  const NameChangeHandler = (e) =>{
    setName(e.target.value)
  }

  const ReduceNumberFunc = ()=>{
    setAge(Number(Age) -1)

  }


  const IncreaseNumberFunc = () =>{
    setAge(Number(Age) +1)

  }

  return (
    <div className='flex flex-col items-center mt-52 w-[50%] gap-4'>
    <h1 className='text-4xl font-bold'>USeState</h1>
    <div className='  bg-white flex flex-col  p-2 gap-4 '>


        <div className='flex flex-col'>
        <label className='text-base font-medium' htmlFor="name">İsminiz: </label>
        <input className='border rounded-md bg-slate-50 p-2 ' type="text" placeholder='Bir isim Giriniz...' value={Name} onChange={NameChangeHandler} />
        </div>
        <div className='text-center flex items-center justify-center'>
        <button className='mr-6 text-3xl font-bold bg-red-500 text-white rounded-full w-10 h-10' onClick={ReduceNumberFunc} >-</button>
        <span className='text-4xl font-medium'>{Age}</span>
        <button className='ml-6 text-1xl font-bold bg-green-500 text-white rounded-full w-10 h-10' onClick={IncreaseNumberFunc}>+</button>

        </div>
        <div className='text-center text-2xl'>Merhaba senin adın  {Name} sen {Age} yaşındasın</div>

    </div>
    </div>
    

  )
}

export default NameAge