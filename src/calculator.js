import {
    useState,
    useRef
} from "react";
import "./App.css"

function Calculator() {
    const inputRef = useRef(null); //declares a variable inputRed using useRef hook in react
    const resultRef = useRef(null);
    const [result,setResult] = useState(0);

    function plus(e) {
        e.preventDefault();
        setResult((result) => result + Number(inputRef.current.value));
    };

    function minus(e) {
        e.preventDefault();
        setResult((result)=> result - Number(inputRef.current.value));
    };

    function resetInput(e) {
        e.preventDefault();
        inputRef.current.value = 0;
    };

    function resetResult(e) {
        e.preventDefault();
        setResult((result) => result = 0);
    };

    return (
        <div className="App">
            <div>
                <p className='bodyfont'>Input numbers below</p>

            </div>

            <form>
                <p ref={resultRef}>
                    {result}
                </p>

                <p>
                    <input
                        pattern="[0-9]"
                        ref={inputRef}
                        type="number"
                        placeholder="Type a number"
                    />
                </p>

                <button onClick={plus}>add</button>
                <button onClick={minus}>minus</button>
                <button onClick={resetInput}>reset input</button>
                <button onClick={resetResult}>reset result</button>

            </form>
            
        </div>

    )


}

export default Calculator;

/*

const inputRef = useRef(null);: This declares a variable inputRef using the useRef hook in React. 
The useRef hook is used to create a mutable value that persists across renders. 
In this case, inputRef is initialized with a value of null. 
It can be used to reference an HTML element in the component.

const resultRef = useRef(null);: 
This declares a variable resultRef using the useRef hook. Similar to inputRef, 
it is initialized with a value of null and can be used to reference an HTML element.

const [result, setResult] = useState(0);: 
This declares a state variable result and a function setResult to update its value using the 
useState hook. The initial value of result is set to 0. The useState hook allows you to introduce 
and manage state in functional components.

In summary, the code initializes two useRef variables (inpu
*/