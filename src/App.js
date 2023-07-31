
import React, { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import './App.css';
import Parecer from './components/documents/parecer';

function App() {

  const [user, setUser] = useState({
    name: 'João',
    cpfcnpj: '123.456.789-89'
  });

  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevstate => {
      return {
        ...prevstate,
        [name]: value
      }
    })
  }
  const sendUser = () => {
    window.electronAPI.sendUser(user);

    window.electronAPI.receiveMessage((arg) => {
      setMessage(arg)
    })

  }
  useEffect(() => {
    console.log('useEff', message)
  }, [message])

  const sendHTML = () => {
    const html = ReactDOMServer.renderToStaticMarkup(
      <Parecer user={user} />
    );
    window.electronAPI.sendHTML(html);
  }

  const Message = ({ message }) => {
    return (
      <div>
        <h2>{message}</h2>
      </div>
    )
  }

  return (
    <div>
      <label>name:</label><br />
      <input type="text" name="name" value={user.name} onChange={handleChange} /><br />
      <label>CPF/CNPJ:</label><br />
      <input type="text" name="cpfcnpj" value={user.cpfcnpj} onChange={handleChange} /><br /><br />
      <button onClick={sendUser}>Enviar</button>
      <Message message={message} />
      <Parecer user={user} />

      <button onClick={sendHTML}>Enviar HTML</button>
    </div>
  );
}

export default App;
