import './App.css';
import quotes from './quotes.json';
import { useState } from 'react';
import { FaTwitter, FaQuoteLeft } from 'react-icons/fa'

const getRandomQuotes = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const getRandomBackgroundColor = () => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;
}

const transition = 'all 1s';

function App() {
  const [quote, setQuote] = useState(getRandomQuotes());
  const [bgColor, setBgColor] = useState(getRandomBackgroundColor());

  const changeQuote = () => {
    setQuote(getRandomQuotes())
    setBgColor(getRandomBackgroundColor())
  }

  return (
    <div id="wrapper" style={{ backgroundColor: bgColor, transition }}>
      <div id="quote-box">
        <div className="quote-content">
          <FaQuoteLeft color={bgColor} />
          <p id="text" style={{ color: bgColor, transition }}>{quote.quote}</p>
          <p id="author" style={{ color: bgColor, transition }}>- {quote.author}</p>
        </div>
        <div className="buttons">
          <a id="tweet-quote" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`} target="_blank"><FaTwitter color={bgColor} /></a>
          <button id="new-quote" onClick={changeQuote} style={{ backgroundColor: bgColor, transition }}>New Quote</button>
        </div>
      </div>
      <div className='footer'>By Nicole</div>
    </div>
  );
}

export default App;
