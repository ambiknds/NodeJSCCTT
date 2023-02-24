import React from 'react'
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

export default function DefinitionSearch() {
    const [word,setWord] = useState('');
    const navigate = useNavigate();
  
      useEffect(() => {
      })
  
      //no depandency array, update any state change
      //pass empty depend attay, execute once
      //passing state data, only execute when variable changes
    return (
      <form  className='flex space-between space-x-2 max-w-[300px]'
        onSubmit={() => {
        navigate('/dictionary/' + word)
      }}>
          <input 
            className='shrink min-w-0 px-2 rounded py-1'
            placeholder='Enter the word to search'
            type='text' 
            onChange={(e) =>{
              setWord(e.target.value)
              
          }} />
          <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded'>Search</button>
      </form>
    )
}
