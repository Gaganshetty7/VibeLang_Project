import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <nav style={styles.navbar}>
            <span style={styles.name} onClick={()=>navigate('/')}>VibeLang</span>
            <div style={styles.navButtonsDiv}>
                <button style={styles.navButtons} onClick={()=>navigate('/chatroomsPage')}>Chat Rooms</button>
                <button style={styles.navButtons} onClick={()=>navigate('/translatePage')}>Translate</button>
                <button style={styles.navButtons} onClick={()=>navigate('/invitejoinPage')}>Invite</button>
                <button style={styles.navButtons} >About Us</button>
            </div>
            <button style={styles.loginButton}onClick={()=>navigate('/loginsignupPage')}>Login/Signup</button>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        height: '80px',
        width: '100%',
        boxSizing: 'border-box',
        paddingTop: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    loginButton: {
        padding: '8px 10px',
        height: '40px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        fontSize: '14px',
        fontWeight: '600',
        fontFamily: "'Montserrat_Regular', sans-serif",
        border: '2px solid black',
        cursor: 'pointer',
    },
    name: {
    fontSize: '35px',
    fontFamily: "'Cal_Sans', sans-serif",
    cursor: 'pointer',
    },

    navButtonsDiv:{
        width: '400px',
        height: '45px',
        paddingBottom: '10px',
        display:'flex',
        alignItems: 'flex-end',
        justifyContent:'space-between',
    },
    navButtons:{
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '14px',
        fontWeight: '600',
        fontFamily: "'Montserrat_Regular', sans-serif",
        
    }
};

export default NavBar;