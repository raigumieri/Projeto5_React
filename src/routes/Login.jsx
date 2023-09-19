import {useRef} from 'react';
import Conteudo from './Conteudo';

function Login(){

    const usuario = useRef();
    const senha = useRef();
    const getUsuario = sessionStorage.getItem("dadosUser");
    const getSenha = sessionStorage.getItem("dadosSenha");


    const handleSubmit=()=>{
        if(usuario.current.value === 'admin' && senha.current.value === '123456'){
            sessionStorage.setItem('dadosUser', 'admin');
            sessionStorage.setItem('dadosSenha', '123456');
        }
        else{
            alert("Usuário e senha inválidos")
        }
    }

    return(
        <>
        {/*Condição Ternaria (IF = ?) (ELSE = :)*/}
        {getUsuario && getSenha ? (
            <Conteudo />
        ):(

            <form onSubmit={handleSubmit}>
                <h1> LOGIN </h1>
                <p> 
                    <label htmlFor="usuario"> Usuario: </label>
                    <input type='text' ref={usuario} />
                </p>
                <p> 
                    <label htmlFor="senha"> Senha: </label>
                    <input type='password' ref={senha} />
                </p>
                
                <button type="submit" value={Login}> LOGAR </button>
            </form>

        )}       
        </>
    )
}

export default Login