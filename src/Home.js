import './components/button';
import Calculator from './calculator';
import InputComponent from './components/hooks';
import TextInputWithFocusButton from './components/userref';

function Home () { 
    
    // function called handleClick when button is pressed
    function handleClick() { // function called handleclick
        let randomNum = Math.floor(Math.random() * 3) + 1; 
        /*
        math.random()* 3 - returns number between 0 and 1 then multiplying by one returns a number between 1 and 3
        + 1 - random number between 0 and 4 (therefore possible numbers are 1,2,3)
        math floor - round down to closest whole number
        */
        console.log(randomNum); // built-in javascript function that outputs messages to the console

        let userInput = prompt ('type a number')
        /*
        prompt() - displays dialog box to user and caputre their input
        letuserInput - stores user input in a variable called userInput
        */
        alert (`Computer number: ${randomNum}, Your guess: ${userInput}`);
        /*
        alert() - function that displays an alert dialog box with a message
        - use backticks
        placeholders ${variableName}
        */

    /* when button is pressed, it runs the function handleClick */

    }

    return(
        
        <div  >

        <p style={{ paddingTop: '5px'  }}></p>
        <h1 className='headerfont'> HELLO </h1>
            <p></p>
                Here is a description of this page

            <p></p>
                Hello

            <p></p>
                testing 1 2 3

            <p style={{ paddingTop: '5px'  }}></p>

            <hr />
            <p style={{ paddingTop: '5px'  }}></p>
                <h1 className='headerfont'>Click event test</h1>
                <button onClick={handleClick}> 
                    Choose a number between 1 and 3
                </button>
            <p style={{ paddingTop: '5px'  }}></p>


            <hr />
            <p style={{ paddingTop: '5px'  }}></p>
                <h1 className='headerfont'>Shitty Calculator</h1>
                <Calculator />
            <p style={{ paddingTop: '5px'  }}></p>
            <hr />
            

            <p style={{ paddingTop: '5px'  }}></p>
                <h1 className='headerfont'>Input Component</h1>
                <InputComponent />
            <p style={{ paddingTop: '5px'  }}></p>

            <hr />
            <p style={{ paddingTop: '5px'  }}></p>
                <h1 className='headerfont'>Text with Focus</h1>
                <TextInputWithFocusButton />
            <p style={{ paddingTop: '5px'  }}></p>

        </div>
    )
    
}

export default Home;