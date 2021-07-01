React.js

A JavaScript Library for building user interfaces that are shown in the browser and run in the browser. It does not run on a server or communicate with database server

- Declarative Approach: Define the result, not the steps that lead to result
- imperative Approach ("normal JS"): Define all steps to achieve the result

Define the componenets and build our UI with these components. Each component will render under which circumstance. React wire up everything behind and implement all the steps for us that we don't have to write anything.

JSX allows us HTML looking code in Javascript files and under the hood.

- React component can be a function which returns a jsx or returns React create element calls or can be a Javascript class that has a render method

Create components folder in src folder. Create component in the commponents directory.

- Props are used to transfer data between components. Props are received by the functions in the components. 

#
    props.goals.map((goal) => {
        return (
                <li key={goal.id}>{goal.text}</li>
            );
    })

In Javascript, we can create function inside a function. Communication between child and parent can be done by handling props and functions efficiently.

- State is used to rerender the parts of the app. {useState} has to be used. useState has two elements, the state and the update state function. Using setState, we have to concat instead of push.

#
    setGoals((prevGoals) =>{
        return prevGoals.concat(newGoal);
    })

- Handling two way binding 
