import FormInput from "../../components/FormInput";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    alert('E-mail: ' + email + '\nSenha: ' + senha);
  };

  const handleRegister = () => {
    alert("Redirecionando para a tela de cadastro...");
  };

  return (
    <>
    <h2>Login</h2>
    <div className="row">
      <FormInput 
        label='Email:' 
        id='idemail' 
        name="email"
        type='email' 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu e-mail">
      </FormInput>

      <FormInput
        label='Password:' 
        id='idpass' 
        name="password"
        type='password' 
        value={senha} 
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Digite sua senha">
      </FormInput>
      <div>
        <button className="btn btn-primary" onClick={() => navigate("/home")}>Entrar</button>
        <button className="btn btn-secondary" onClick={() => navigate("/createuser", {state:{hideNavbar:true}})}>Cadastrar</button>
      </div>
    </div>
    </>
  );
}

export default Login;

//   return (
//     <>
//     <h2>Login</h2>
//     <div className="row">
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Digite seu e-mail"
//           className="form-control"
//         />
//       </div>
//       <div>
//         <label>Senha:</label>
//         <input
//           type="password"
//           value={senha}
//           onChange={(e) => setSenha(e.target.value)}
//           placeholder="Digite sua senha"
//           className="form-control"
//         />
//       </div>
//       <div>
//         <button className="btn btn-primary" onClick={handleLogin}>Entrar</button>
//         <button className="btn btn-secondary" onClick={handleRegister}>Cadastrar</button>
//       </div>
//     </div>
//     </>
//   );
// }

// export default Login;