import { useState } from 'react'
import Buttons from './Buttons'

const DisplayScreen = () => {

    const [inputValue, setInputValue] = useState("")
    const [result, setResult] = useState(0)


    const takeInput = (value)=>{
        setInputValue((prevalue)=>(prevalue+value))
    }

    const calculateResult = ()=>{
        setResult(eval(inputValue))
    }

    const deleteData = ()=>{
        setInputValue(inputValue.slice(0,-1))
    }

    const clearData = ()=>{
        setInputValue(" ")
        setResult(0)
    } 


  return (
    <div className='calculator'>
        <h1>CALCULATOR</h1>
        <dir className='inputs'>
            <input type="text" readOnly placeholder='0' value={result} />
            <br />
            <input type="text" readOnly  placeholder='0' value={inputValue}/>
        </dir>

        <div className='buttons'>
            <Buttons takeInput={takeInput} value={'1'}/>
            <Buttons takeInput={takeInput} value={'2'}/>
            <Buttons takeInput={takeInput} value={'3'}/>
            <Buttons takeInput={takeInput} value={'4'}/>
            <Buttons takeInput={takeInput} value={'5'}/>
            <Buttons takeInput={takeInput} value={'6'}/>
            <Buttons takeInput={takeInput} value={'7'}/>
            <Buttons takeInput={takeInput} value={'8'}/>
            <Buttons takeInput={takeInput} value={'9'}/>
            <Buttons takeInput={takeInput} value={'0'}/>

            <Buttons takeInput={takeInput} value={'+'}/>
            <Buttons takeInput={takeInput} value={'-'}/>
            <Buttons takeInput={takeInput} value={'/'}/>
            <Buttons takeInput={takeInput} value={'*'}/>
            <Buttons takeInput={calculateResult} value={'='}/>

            <Buttons takeInput={deleteData} value={'DEL'}/>
            <Buttons takeInput={clearData} value={'AC'}/>
        </div>

    </div>
  )
}

export default DisplayScreen
