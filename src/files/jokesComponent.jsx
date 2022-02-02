import React, { useState, useEffect } from 'react';
import { getJokes } from './jokes';
import Button from '@mui/material/Button';

const Jokescomponent = () => {

    const [joke, setJoke] = useState(null);
    const [jokes, setJokes] = useState([]);
    const [likedJokes, setLikedJokes] = useState(0);
    const [dislikedJokes, setDislikedJokes] = useState(0);
    const [votedJoke, setVotedJoke] = useState(false);

    useEffect(() => {
        obtainJoke();
    }, []);

    const obtainJoke = () => {
        setVotedJoke(false);
        getJokes()
            .then((response) => {
            console.log('Random joke', response.data.value);
            setJoke(response.data.value);
            jokes.push(joke);
        })
        .catch((error) => {
            alert(`Error while retreiving the joke: ${error}`);
        })
        .finally(() => {
            console.log('Ended obtaining joke:');
            console.log(joke);
        })
    }

    const increasetLike = () => {
        votedJoke ? (alert('You can only vote a joke once!')) : (setLikedJokes(likedJokes + 1));
        setVotedJoke(true);
    }

    const increaseDislike = () => {
        votedJoke ? (alert('You can only vote a joke once!')) : (setDislikedJokes(dislikedJokes + 1));
        setVotedJoke(true);
    }

    return (
        <div>
            { joke }
            <br />
            <button onClick={obtainJoke}>
                Generate new joke!
            </button>
            <br />
            <Button onClick={ increasetLike }>
                Like this joke
            </Button>
            <Button onClick={ increaseDislike }>
                Dislike this joke
            </Button>
            <div>
                <p style={{color: 'green', fontWeight: 'bold'}}>LIKED JOKES: { likedJokes }</p>
                <p style={{color: 'tomato', fontWeight: 'bold'}}>DISLIKED JOKES: { dislikedJokes }</p>
            </div>
        </div>
    );
}

export default Jokescomponent;
