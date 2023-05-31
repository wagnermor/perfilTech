import { useState } from 'react';
import './App.css';
// import { Input } from './components/Input/Input';
// import { PerfilTech } from './components/PerfilTech/PerfilTech';

function App() {
  const [githubUser, setGithubUser] = useState('');
  const [whatsNumber, setWhatsNumber] = useState('');
  const [userData, setUserData] = useState({});

  const getGithubUser = (event) => {
    setGithubUser(event.target.value)
  }
  const getWhats = (event) => {
    setWhatsNumber(event.target.value)
  }

  const getUserData = async () => {
     try {
      const response = await fetch(`https://api.github.com/users/${githubUser}`)
      const data = await response.json()
      setUserData({
        name: data.name,
        avatar: data.avatar_url,
        goal: data.bio,
        social: data.blog
      })
    }catch (e) {
      console.error(`Erro: ${e}`)
    }
  }
  const imgUrlDefault = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9U6bJTaLmkfKzc6DbtIeaMIxrlK7Y8ktOfQ";

  return (
    <div>
      <header>
      </header>
      <main>
        <section>
        <img className='avatar' src={userData.avatar ?? imgUrlDefault} alt={`Foto de ${userData.name ?? ''}`} />
        <a href={`https://wa.me/${whatsNumber}`} target='_bank'>
          <img 
            className='whatsApp' 
            src="https://logospng.org/download/whatsapp/logo-whatsapp-4096.png"
            alt="" />
        </a>
          <p>{userData.name ?? ''} | {userData.goal ?? ''}</p>
          <p>{userData.social ?? ''}</p>
          
        </section>
        <section>
        <h2>PERFIL TECH</h2>
          <input
            type="text"
            value={githubUser}
            onChange={getGithubUser}
            placeholder='Digite o seu login do github'/>
          <input 
            type="text"
            value={whatsNumber} 
            onChange={getWhats}
            placeholder='Digite o número do seu whatsApp' />
          <button onClick={getUserData}>Confirmar</button>
        </section>
      </main>
      <form>


      </form>


    </div>
  )
}
export default App
