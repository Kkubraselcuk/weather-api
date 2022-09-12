import {useRef, useContext} from 'react';
import LoginContext from '../../context/LoginContext';

import './Login.scss';

const Login = () => {
    
    const { user,setUser } = useContext(LoginContext);
    const inputUsurname = useRef(null);
    const inputPassword = useRef(null);

    const userControl = () => {
        if(inputUsurname.current.value === user.username) {
            if(inputPassword.current.value === user.password) {
                setUser({...user, isAuth:true})
            }
            else{
                console.log("şifre yanlış")
            }
        }
        if(user.isAuth === true) {
            localStorage.setItem('userAuth', true);
        }
    };

    return (
        <div id="loginComp">
            <input type="text" placeholder="Username" id="username" ref={inputUsurname}></input><br/>
            <input type="password" placeholder="Password" ref={inputPassword}></input><br/>
            <button onClick={userControl}>LOGİN</button>
        </div>
    );
};

export default Login;