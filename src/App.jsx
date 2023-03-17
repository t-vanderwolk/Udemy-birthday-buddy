import { useState } from 'react';
// In App.jsx, import the data (from data.js) to be rendered as an array of objects.
import data from './data';
import List from './List';
function App() {

// Then, set up the data as a state variable using the useState hook.
//  This will allow the data to be modified and have those changes automatically reflected in the rendered output.
    const [people, setPeople] = useState(data);
  return (
    <main>
{/* Create a List component to hold the rendered items. 
This component can be a simple div element containing the list of Person components. */}
    <section className='container'>

{/* Display the number of items in the list by using the length property of the state variable. 
This information can be displayed using plain text or added to a message or heading element. */}
        <h3>{people.length} birthdays today</h3>

{/* Create a Person component to render the information for each person. 
This component should receive the person data as props and render the image, name, and age information. */}
        <List people={people} />
{/* In App.jsx, add a button to clear the list, and set up the functionality by defining a function that resets the state variable to an empty array. */}
        <button
          type='button'
          className='btn btn-block'
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
