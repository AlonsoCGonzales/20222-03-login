import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const LoginPage = () => {
  // Variables de Estado
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [carreraIdSelected, setCarreraIdSelected] = useState(-1)
  const [error, setError] = useState(false)

  // Hook navigation
  const navigate = useNavigate();

  const loginOnClick = () => {
    if (username !== "" && password !== "" && carreraIdSelected !== -1){
      // Se logea
      navigate("/main")
    }else {
      // Un simple msj de error
      setError(true)
    }
  }

  return <div className="container">
    <h1>Login</h1>
    <div>
      <label className="form-label">
        Usuario
      </label>
      <input className="form-control" 
        value={ username } 
        onChange={ (evt) => setUsername(evt.target.value) } />
    </div>
    <div>
      <label className="form-label">
        Contraseña
      </label>
      <input type="password"
        className="form-control" 
        value={ password }
        onChange={ (evt) => setPassword(evt.target.value) } />
    </div>
    <div>
      <label className="form-label">
        Carrera
      </label>
      <select className="form-select"
        value = { carreraIdSelected }
        onChange={ (evt) => setCarreraIdSelected(evt.target.value) } >
        <option value={ -1 }>--- Ingrese su Carrera ---</option>
        <option value={ 1 }> Ingenieria Sistemas</option>
        <option value={ 2 }> Ingenieria Electrica</option>
        <option value={ 3 }> Ingenieria Civil</option>
      </select>
    </div>
    <Link className="btn btn-success" to={ "/main" }>Ir a main</Link>
    <button className="btn btn-primary"
      type="button"
      onClick={
      loginOnClick
      }>
        Login
    </button>
    <div>
      {
        (() => {
          // Validar Formulario

          const arrAlerts = []
          if (error && username === ""){
            arrAlerts.push(<div className="alert alert-danger">
              Ingrese UserName
            </div>)
          }
          if (error && password === ""){
            arrAlerts.push(<div className="alert alert-danger">
              Ingrese Password
            </div>)
          }
          if (error && carreraIdSelected === -1){
            arrAlerts.push(<div className="alert alert-danger">
              Seleccione Carrera
            </div>
            )
          }
          return arrAlerts
        })()
      }
    </div>
  </div>
}

export default LoginPage