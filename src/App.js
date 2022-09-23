import './App.css';
import {useState} from "react";
import metodos from './Rules/RulesLogin';

function App() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const inputOnChange = (e) => {
    setUsuario(e.target.value)
  }

  const inputPasswordOnChange = (e) => {
    setPassword(e.target.value)
  }

  async function submit() {
    const comando = {
      usuario: usuario,
      password: password
    }
    const result = await metodos.login(comando);
    console.log(result);
  }

  return (     
    <div className="App">
      <h2>Log in</h2>
      <div>
        <label>Usuario</label>
        <input onChange={inputOnChange} value={usuario}></input>
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" onChange={inputPasswordOnChange} value={password}></input>
      </div>
      <button onClick={submit}>Iniciar Sesión</button>
    </div>
  );
}

export default App;
