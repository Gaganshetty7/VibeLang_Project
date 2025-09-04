import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();
    return (
        <div style={styles.heroDiv}>
            <div style={styles.headerDiv}>
                <span style={styles.name}>VibeLang</span>
                <span style={styles.note}>Powered by real-time messaging & Seamless translations.</span>
                <div style={styles.buttonsDiv}>
                    <button style={styles.btnTrans} onClick={()=>navigate('/translatePage')}>Translate</button>
                    <button style={styles.btnChat} onClick={()=>navigate('/invitejoinPage')}>Join Chat</button>
                </div>
            </div>
            
        </div>
    )
}

const styles = {
    heroDiv:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh'
    },
    headerDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#000',
        width: 'fit-content',
    },
    name: {
        fontSize: '100px',
        fontFamily: "'Cal_Sans', sans-serif",
        color: 'linear-gradient(to right, #E5E5BE, #003973)'
    },
    note: {
        fontSize: '17px',
        fontWeight: '300',
        fontFamily: "'Montserrat_Regular', sans-serif",
        marginTop: '10px',
        width: '600px',
        color: '#000',
    },
    btnTrans: {
        backgroundColor: '#fff',
        border: '3px solid #000',
        padding: '10px 20px',
        margin: '20px 10px 0 0',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: "'Montserrat_Regular', sans-serif",
    },
    btnChat: {
        backgroundColor: '#000',
        color: '#fff',
        border: '3px solid #000',
        padding: '10px 20px',
        margin: '20px 0 0 10px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '600',
        fontFamily: "'Montserrat_Regular', sans-serif",
    },
}

export default HeroSection