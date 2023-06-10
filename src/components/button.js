function Btn() {
    const clickHandler = 
    () => console.log('clicked')

    return (
        <button onClick={clickHandler}>
            Click Here
        </button>
    )
}

export default Btn;

/*
Translation line-by-line:

function Btn() {: This defines a functional component named Btn.

const clickHandler = () => console.log('clicked'): 
This declares a constant variable clickHandler which is a function. 
When the button is clicked, it logs the message 'clicked' to the console.

return (: This marks the start of the JSX code that will be returned by the component.

<button onClick={clickHandler}>: 
This renders a <button> element with an onClick event handler that calls the 
clickHandler function when the button is clicked.

Click Here: This is the text displayed inside the button.

</button>: This is the closing tag for the <button> element.

): This marks the end of the JSX code that is being returned.

}: This marks the end of the Btn component function.

export default Btn;: This exports the Btn component as the default export, allowing it to be imported and used in other files.

In summary, the Btn component renders a button that, when clicked, triggers the clickHandler function and logs 'clicked' to the console.
*/