import jokesData from './jokeData.js'
import Joke from './componet/Joke.jsx'
export default function App(){
    const jokeElements = jokesData.map(joke => {
        return(
            <Joke 
                key = {joke.id}
                setup = {joke.setup}
                punchline = {joke.punchline}
            />
        )
    })

    return(
        <div>
            {jokeElements}
        </div>
    )
    
}