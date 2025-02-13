import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FormGroup from "../../components/FormGroup";
import Navbar from "../../components/Navbar";
import axios from "axios";

function CreateUser() {
  const location = useLocation();
  //location.state?. -> significa: se state existir, então pega o valor da propriedade hideNavBar
  const hideNavbar = location.state?.hideNavbar || false; // Se vier do login, esconde a Navbar

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const [mensagemErro, setMensagemErro] = useState("");

  const handleChange = (e) => {
     setFormData({ 
        ...formData, 
        [e.target.name]: e.target.value });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();

    axios.post('http://localhost:8080/api/user/save', 
      {
        "firstName":formData.nome,
        "lastName":formData.email,
        "gender":"MALE",
        "dateOfBirth":"2010-09-05"
      }) //formData
      .then(
        response => console.log(response))
      .catch(
        error => console.log(error)
      );


    // e.preventDefault();
    
    // if (formData.senha !== formData.confirmarSenha) {
    //   setMensagemErro("As senhas não coincidem.");
    //   return;
    // }

    // setMensagemErro("");
    // alert("Cadastro realizado com sucesso!");
    // console.log("Usuário cadastrado:", formData);
  };

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <h6>Cadastro de Usuário</h6>
      <form onSubmit={handleSubmit}>
        <FormGroup
            label='Nome*:' 
            id='idNome'
            name="nome"
            type='text' 
            value={formData.nome} 
            onChange={handleChange}
            placeholder="Digite seu nome"
            required={true}>
        </FormGroup>

        <FormGroup
            label='Email*:' 
            id='idEmail'
            name="email"
            type='email' 
            value={formData.email} 
            onChange={handleChange}
            placeholder="Digite seu email"
            required={true}>
        </FormGroup>

        <FormGroup
            label='Senha*:' 
            id='idSenha'
            name="senha"
            type='password' 
            value={formData.senha} 
            onChange={handleChange}
            placeholder=""
            required={true}>
        </FormGroup>

        <FormGroup
            label='Confirmação de Senha*:' 
            id='idConfirmacaoSenha'
            name="confirmarSenha"
            type='password' 
            value={formData.confirmarSenha} 
            onChange={handleChange}
            placeholder=""
            required={true}>
        </FormGroup>

        {mensagemErro && <p style={{ color: "red" }}>{mensagemErro}</p>}

        <button className="btn btn-primary" type="submit">Cadastrar</button>
        <button className="btn btn-danger" onClick={() => navigate("/")}>Cancelar</button>
      </form>
    </div>
  );
}

export default CreateUser;
