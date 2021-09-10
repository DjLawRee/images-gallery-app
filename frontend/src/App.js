import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import {useState} from 'react';

const UNSPLASH_KEY=process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  
  const [word, setWord] =useState('');

  function handleSearchSubmit(e){
    e.preventDefault();
    console.log(word);
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
  };
  console.log(process.env.REACT_APP_UNSPLASH_KEY);

  return (
    <div>
    <Header title="Images Gallery "/>
    <Search word={word} setWord={setWord} handleSearchSubmit={handleSearchSubmit}/>
    </div>
    );
  };
  
 
  export default App;
  