import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import HeroIllustration from '../components/HeroIllustration';
import Login from '../components/Login';
import Signup from '../components/Signup';

const LoginSignupPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <HeroIllustration>
            <NavBar />
            <div style={styles.container}>
                {isLogin ? (
                    <Login toggleForm={toggleForm} />
                ) : (
                    <Signup toggleForm={toggleForm} />
                )}
            </div>
        </HeroIllustration>
    );
};

const styles = {
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 80px)',
        width: '100%',
    }
};

export default LoginSignupPage;
