import { createContext, useContext, useState, useEffect } from "react";
export const LoginContext = createContext();
export const LoginProvider = ({ children }) => {
    const [user, setUser] = useState({
        username: 'admin',
        password: 'admin',
        isAuth: false
    });
    useEffect(() => {
        const localAuth = localStorage.getItem('userAuth')
        setUser({...user , isAuth:localAuth});
    }, []);

    const values = {
        user, setUser
    };

    return (
        <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
    );
};

export default LoginContext;
