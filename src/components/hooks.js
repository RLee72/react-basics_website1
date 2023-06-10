import { useState } from 'react';

export default function InputComponent() {
    const [inputText, setText] = useState('Type something here');

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <>
            <input value={inputText} onChange={handleChange} />
            <p> You typed: {inputText} </p>
            <button onClick ={ () => setText('hello')}>
                Reset
            </button>
        </>
    );
}

/*
useState - a hook that allows us to add state to functional components
export defulat function InputComponent() - declaring a functional componenent that will be exported as default export
const [inputText, setText] = useState('Type somethng here') - declaring a state variable 'inputText' and function'setTest' to update value using the useState hook
    initial value of 'inputText is set to 'Type something here'
function handleChange(e) - takes an event object as an argument
setTest(e.target.value); - calling setText function with the value of the input element
    e.target.value - to update 'inputText' with the new value entered by the user

    <input value ={inputText} onChange={handleChange}/>
        - rendering input element with its value set to the 'intputTest' state variable
        and its onChange event handler set to handleCHange function
        - allows input to reflect value of 'intputText' andupdate when user types
you types: {inputText}
    - renderig a paragraph element that displays text and value of inputText
<button onClick={() => setText('hello')}>
    - renders button with onClick event handler that calls arrow function and invoked setText with value hello
    - sets inputText state to hello when button is clicked

*/