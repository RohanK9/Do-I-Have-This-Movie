import { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import SearchResults from './SearchResults';

function SearchBox() {
    const [query, setQuery] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();

        const apiURL = 'http://doihavethismovie.herokuapp.com/search/' + query;
        fetch(apiURL)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    setResults(result)
                },
                (error) => {
                    console.log(error);
                }
            )

        setShowResults(true);
        showSearchResults();
    }

    function showSearchResults() {
        console.log(showResults);
        if (showResults) {
            return (
                <center><SearchResults movies={results} /></center>
            );
        }
    }

    return (
        <div>
            <Box style={styles.box}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <TextField
                            // style={styles.textField}
                            style={{...styles.textField, focusColor: 'black'}}
                            size="large"
                            id="outlined-basic"
                            label="Enter the name of a movie 🎬"
                            variant="outlined"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                        />
                    </div>
                    <div style={styles.spacing}></div>
                    <div>
                        <Button textSizeLarge color="primary" size="large" style={styles.button} disabled={!query} variant="outlined" type="submit">Search 🍿</Button>
                    </div>
                </form>

            </Box>
            {showSearchResults()}
        </div>
    );
}

const styles = {
    box: {
        textAlign: 'center',
        paddingBottom: '15px',
    },
    textField: {
        // textAlign: 'center',
        // paddingBottom: '10px',
        width: '60%',
        backgroundColor: 'white',
        // size: '41px',
        // fontSize: '18px',
    },
    button: {
        textTransform: 'capitalize',
        backgroundColor: 'white',
        fontSize: '16px',
        // fontColor: 'black',
    },
    spacing: {
        paddingBottom: '15px',
    },
    // searchButton: {
    //     justifyContent: 'center',
    // },
}

export default SearchBox;