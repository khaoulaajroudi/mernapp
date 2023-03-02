import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getcontact } from './JS/ContactSlice/contactSlice';
import Contactlist from './components/Contactlist';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
dispatch(getcontact())

  }, []);
  return (
    <div className="App">
<Contactlist />
    </div>
  );
}

export default App;
