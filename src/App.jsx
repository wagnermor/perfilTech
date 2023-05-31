import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
// import { Input } from './components/Input/Input';
// import { PerfilTech } from './components/PerfilTech/PerfilTech';

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/wagnermor');
        setRepos(response.data.name);
      } catch (error) {
        console.error(error);
      }
    }
  fetchRepos();
}, []);
  console.log(repos);
  
  // const [title, setTitle] = useState("");
  // const [imgUrl, setImgUrl] = useState("");
  // const [card, setCard] = useState({});


  // const handleChangeTitle = (event) => {
  //   setTitle(event.target.value)
  // }

  // const handleChangeImgUrl = (event) => {
  //   setImgUrl(event.target.value)
  // }

  // const handleButtonClick = (event) => {

  //   event.preventDefault()

  //   setCard(
  //     {
  //       title: title,
  //       imgUrl: imgUrl
  //     }
  //   );

  // }

  return (
    <div>
      <header>
        <h2>PERFIL TECH</h2>
      </header>

      <form>


      </form>


    </div>
  )
}
export default App
