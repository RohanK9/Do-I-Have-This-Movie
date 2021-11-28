import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import SearchBox from './SearchBox';

function App() {
  return (
    <div className="App">
      <div style={styles.title}>
        <h1> Do I have this movie? 🎥🍿🎬</h1>
      </div>
      <SearchBox/>
    </div>
  );
}

const styles = {
  title: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: '22px'
  },
};

export default App;
