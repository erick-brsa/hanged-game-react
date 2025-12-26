import { useEffect, useState } from "react"
import { HangImage } from "./components/HangImage"
import { letters } from "./helpers/letters"
import { getRandomWord } from "./helpers/getRandomWord"

function App() {
  const [word, setWord] = useState(getRandomWord)
  const [hiddenWord, setHiddenWord] = useState('_ '.repeat(word.length))
  const [attempts, setAttempts] = useState(0)
  const [lose, setLose] = useState(false)
  const [won, setWon] = useState(false)

  useEffect(() => {
    if (attempts >= 9) {
      setLose(true)
    }
  }, [attempts])

  useEffect(() => {
    const currentHiddenWord = hiddenWord.split(' ').join('')

    if (word === currentHiddenWord) {
      setWon(true)
    }
  }, [hiddenWord])

  const checkLetter = (letter: string) => {
    if (lose || won) {
      return
    }

    if (!word.includes(letter)) {
      setAttempts(Math.min(attempts + 1, 9))
      return
    }
    
    const hiddenWordArray = hiddenWord.split(' ')

    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWordArray[i] = letter
      }
    }
    setHiddenWord(hiddenWordArray.join(' '))
  }

  const newGame = () => {
    setWord(getRandomWord)
    setHiddenWord('_ '.repeat(word.length))
    setAttempts(0)
    setLose(false)
    setWon(false)
  }

  return (
    <div className="container">
      {/* Imágenes */}
      <h1>Juego del ahorcado</h1>
      <div className="image-container">
        <HangImage imageNumber={attempts}/>
      </div>

      {/* Palabra oculta */}
      <h3>{hiddenWord}</h3>

      {/* Contador de intentos */}
      <h3>Intentos: {attempts}</h3>

      {/* Mensaje si perdió */}
      {
        (lose) ? (
          <h2>Has perdido, la palabra era {word}</h2>
        ) : ''
      }

      {/* Mensaje si ganó */}
      {
        (won)
        ? (
          <h2>¡Felicidades! Has adivinado la palabra</h2>
        )
        : ''
      }

      {/* Botones de letras */}
      <div className="buttons-container">
        {
          letters.map((letter) => (
            <button 
              className="button"
              key={letter}
              onClick={() => checkLetter(letter)}
            >
              {letter}
            </button>
          ))
        }
      </div>
      <br />
      <br />
      <button
      className="button"
      onClick={() => newGame()}>
        ¿Nuevo juego?</button>
    </div>
  )
}

export default App
