import React from 'react';
import { useState } from "react";

const in2Style: React.CSSProperties = {
    float: 'right'
}

const buttonStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center'
}

const widthStyle: React.CSSProperties = {
    width: '75px'
}

export function Calculator(){

    const [input,setInput] = useState({
        in1: '',
        in2: '',
        answ: ''
    });

    const [history,setHistory] = useState<string[]>([]);

    function handleInput1(event:React.ChangeEvent<HTMLInputElement>){
        const num: string = event.target.value;
        const inputClone = {...input};
        inputClone.in1 = num;
        setInput(inputClone);
        console.log(inputClone);
    }

    function handleInput2(event:React.ChangeEvent<HTMLInputElement>){
        const num: string = event.target.value;
        const inputClone = {...input};
        inputClone.in2 = num;
        setInput(inputClone)
        console.log(input)
    }

    function clearInput(event:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        const buttonId: string = event.currentTarget.id;
        const inputClone = {...input};
        (buttonId === "1") ? inputClone.in1 = '':inputClone.in2 = '';
        setInput(inputClone)
        console.log(input)
    }

    function buttonHandler(event:React.MouseEvent<HTMLButtonElement, MouseEvent>){
        const buttonId: string = event.currentTarget.id;
        if(input.in1 === '' || input.in2 === ''){alert("Both fields need numbers");return}
        if(isNaN(Number(input.in1)) || isNaN(Number(input.in2))){alert("One or both fields are not numbers");return}
        const inputClone = {...input};
        const historyClone = [...history];
        let answer: number = 0;
        switch(buttonId){
            case "/":
                if(Number(input.in1) === 0){alert("Can not divide by zero");return}
                answer = Number(inputClone.in1)/Number(inputClone.in2);
                break;
            case "*":
                answer = Number(inputClone.in1)*Number(inputClone.in2);
                break;
            case "-":
                answer = Number(inputClone.in1)-Number(inputClone.in2);
                break;
            case "+":
                answer = Number(inputClone.in1)+Number(inputClone.in2);
                break;
        }
        inputClone.answ = answer.toString();
        setInput(inputClone);
        const historyString = `${inputClone.in1} ${buttonId} ${inputClone.in2} = ${inputClone.answ}`; 
        historyClone.push(historyString);
        setHistory(historyClone)
    }

    return <>

        <div >
            <input value={input.in1} type="text" onChange={handleInput1}/>
            <input value={input.in2} type="text" onChange={handleInput2} style={in2Style}/>
        </div>
        <div>
            <button id="1"  onClick={clearInput}>Clear</button>
            <button id="2"  onClick={clearInput} style={in2Style}>Clear</button>
        </div>
        <p>Answer = {input.answ}</p>
        <div style={buttonStyle}>
            <button id="/" onClick={buttonHandler} style={widthStyle}>/</button>
            <button id="*" onClick={buttonHandler} style={widthStyle}>*</button>
            <button id="-" onClick={buttonHandler} style={widthStyle}>-</button>
            <button id="+" onClick={buttonHandler} style={widthStyle}>+</button>
        </div>
        <ul>
            {history.map(s => <li>{s}</li>)}
        </ul>
    </>
}