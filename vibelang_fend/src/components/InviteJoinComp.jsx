import React from 'react'
import chatimg from '../assets/graphics/multilingo_texts.png'

const InviteJoinComp = () => {
  return (
    <div className='mainBox' style={styles.mainBox}>
      <div className='leftPanel' style={styles.leftPanel}>
        <div className='imageContainer' style={styles.imageContainer}>
          <img src={chatimg} alt='Chat Example' style={styles.chatImage}></img>
        </div>
      </div>
      <div className='rightPanel' style={styles.rightPanel}>
        <div className='formContainer' style={styles.formContainer}>
          <div style={{display:'flex', flexDirection:'column', gap:'10px', justifyContent:'center', height:'100%'}}>
            <span style={styles.formHeader}>Join Existing Room</span>
            <div style={{flexDirection: 'row', gap: '10px', display: 'flex', paddingRight:'20px'}}>
              <input className='roomcodeInput' type="text" placeholder="Enter Room Code" style={styles.roomcodeInput} />
              <button className='roomcodeJoinBtn' style={styles.joinButton}>Join</button>
            </div>
            <div style={{display:'flex',alignContent:'center', justifyContent:'center', height:'100%'}}>
              <span style={styles.orSpan}>OR</span>
            </div>
            <button className='roocodeCreateBtn' style={styles.createButton}>Create Room</button>
          </div>
        </div>
      </div>
    </div>
  )
}
const styles ={
  mainBox:{
    display: 'flex',
    padding: '10px',
    height:'50%',
    width:'50%',
    backgroundImage: 'linear-gradient(to right, #456c8996, #003a73c9)',
    boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.15)',
    borderRadius: '18px',
    border: '5px solid #000',
    overflow: 'hidden',
  },
  leftPanel:{
    flex: 1.2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer:{
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chatImage:{
    width: '90%',
    height: '90%',
    objectFit: 'contain',
    borderRadius: '18px',
  },
  rightPanel:{
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer:{
    height: '50%',
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
  },
  formHeader:{
    fontSize: '1.7rem',
    fontWeight: '300',
    color: '#fff',
    fontFamily: "'Cal_Sans', sans-serif",
    letterSpacing: '1px',
  },
  orSpan: {
    fontSize: '0.7rem',
    fontWeight: '300',
    color: '#fff',
    fontFamily: "'Cal_Sans', sans-serif",
    display: 'flex',
    alignItems: 'center',
  },
  roomcodeInput:{
    padding: '8px', 
    borderRadius: '10px', 
    fontFamily: "'Montserrat_Regular', sans-serif",
    border: '1px solid #ccc',
    boxSizing: 'border-box'
  },
  joinButton:{
    padding: '8px 16px',
    backgroundColor: '#fff',
    color: '#003973',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontFamily: "'Cal_Sans', sans-serif",
    letterSpacing: '2px',  
    fontWeight: '700',
  },
  createButton:{
    flex:1,
    padding: '8px 16px',
    backgroundColor: '#003973',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontFamily: "'Cal_Sans', sans-serif",
    letterSpacing: '2px',  
    fontWeight: '700',
    boxShadow: '0px 0px 10px 0px rgba(255, 255, 255, 0.19)',
  }
};

export default InviteJoinComp