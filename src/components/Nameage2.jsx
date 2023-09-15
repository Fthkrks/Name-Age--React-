import React, { useReducer } from 'react'
function reducer(state, action){
  switch(action.type){
    case "SET_NAME":
      return {...state, Name: action.payload}

    case "REDUCE_NUMBER":
      return {...state, Age: action.payload}

    case "INCREASE_NUMBER":
      return {...state, Age: action.payload}
  }

}
const innitialState ={
  Name: "Fatih",
  Age: 19,
}

const NameAge2 = () => {
  const [state, dispatch] = useReducer(reducer, innitialState);

  const NameChangeHandler = (e) =>{
    dispatch({type: "SET_NAME", payload: e.target.value})
  }


  const ReduceAgeFunc = ()=>{
    dispatch({type: "REDUCE_NUMBER", payload: Number(state.Age) - 1})
  }


  const IncreaseAgeFunc = ()=>{
    dispatch({type: "INCREASE_NUMBER", payload: Number(state.Age) + 1})
  }

  return (
    <div className='flex flex-col items-center mt-52 w-1/2 gap-4'>
    <h1 className='text-4xl font-bold'>USeReducer</h1>
    <div className='  bg-white flex flex-col  p-2 gap-4 '>


        <div className='flex flex-col'>
        <label className='text-base font-medium' htmlFor="name">İsminiz: </label>
        <input className='border rounded-md bg-slate-50 p-2 ' type="text" placeholder='Bir isim Giriniz...' value={state.Name} onChange={NameChangeHandler} />
        </div>
        <div className='text-center flex items-center justify-center'>
        <button className='mr-6 text-3xl font-bold bg-red-500 text-white rounded-full w-10 h-10' onClick={ReduceAgeFunc}>-</button>
        <span className='text-4xl font-medium'>{state.Age}</span>
        <button className='ml-6 text-1xl font-bold bg-green-500 text-white rounded-full w-10 h-10' onClick={IncreaseAgeFunc}>+</button>

        </div>
        <div className='text-center text-2xl'>Merhaba senin adın  {state.Name} sen {state.Age} yaşındasın</div>

    </div>
    </div>
  )
}

export default NameAge2