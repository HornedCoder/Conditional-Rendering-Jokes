import React from 'react'

export default function Joke(props) {

    const [isShown, setIsShown] = React.useState(false)
    
    function toggle(){
        setIsShown(prev=>!prev)
    }

    return (
        <section>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggle}>Show Punchline</button>
        </section>
    )
}