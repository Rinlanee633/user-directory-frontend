import { useEffect, useState } from 'react';
import { users } from '../mocks/loginUserData';


export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const user = localStorage.getItem('user');
        console.log(user);
        console.log(isLoggedIn)
        if (user) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    
    const login = (username: string, password: string) => {
        const user = users.find(
            (user) => user.username === username && user.password === password
        );
        console.log("user : " , user)
        console.log("localS : ", localStorage.getItem('user'))
        if (user) {
            const userData = { username };
            localStorage.setItem('user', JSON.stringify(userData));
            setIsLoggedIn(true);
            setError(null);
        } else {
                setError('Login failed');
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        setIsLoggedIn(false);
    };

    return { isLoggedIn, login, logout, error };
}