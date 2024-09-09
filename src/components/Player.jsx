import { useState } from 'react'
export default function Player() {
    const [entereredPlayerName, setEnteredPlayerName] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    function handleChange(event) {
        setSubmitted(false)
        setEnteredPlayerName(event.target.value)
    }

    function handleClick() {
        setSubmitted(true)
    }

    return (
        <section id="player">
            <h2>
                Welcome {submitted ? entereredPlayerName : 'unknown entity'}
            </h2>
            <p>
                <input
                    type="text"
                    onChange={handleChange}
                    value={entereredPlayerName}
                />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    )
}
