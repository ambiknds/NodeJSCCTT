import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import DefinitionSearch from '../components/DefinitionSearch';
import NotFound from '../components/NotFound';

function Definition() {
    const [word, setWord] = useState();
    // console.log(useParams())
    const [notFound, setNotFound] = useState();
    const [error, setError] = useState(false);
    let {search} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        // const url = 'https://httpstat.us/401'
        const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search;
        fetch(url)
            .then((response) => {
              console.log(response.status)
              if(response.status === 404) {
                setNotFound(true);
                // navigate('/404')
                // console.log(response.status)
              }else if (response.status === 401) {
                  navigate('/login');
              }else if (response.status === 500) {
                  setError(true)
              }
              if(!response.ok){
                setError(true);

                throw new error('Something went wrong')
              }
              return response.json();
            })
            .then((data) => {
                setWord(data[0].meanings);
                // console.log(data[0].meanings);

        })
        .catch((e) => {
          console.log(e.message);
        });
    }, []);

  if (notFound === true) {
    return (
      <>
        <NotFound/>
        <Link to='/dictionary'>Search another</Link>
      </>
    );
  }
  if (error === true) {
    return (
      <>
        <p>Something went wrong, try again</p>
        <Link to='/dictionary'>Search another</Link>
      </>
    );
  }
  return (
    <>
        <h1>Here is a Definition:</h1>
        {word 
            ?<>
              {word.map((meaning) => {
                return (
                <p key={uuidv4}>
                  {meaning.partOfSpeech + ': '}
                  {meaning.definitions[0].definition}
                  {/* {console.log(meaning.definitions[0].definition)} */}
                </p>
              )
              })}
              <p>Search Again:</p>
              <DefinitionSearch/>
              </>
        : <p>The word you are searching was not found.</p>
        }
        
    </>
  );
}

export default Definition;