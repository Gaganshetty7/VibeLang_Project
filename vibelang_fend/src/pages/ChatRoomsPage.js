import React from 'react'
import NavBar from '../components/NavBar'
import HeroIllustration from '../components/HeroIllustration'
import ChatComp from '../components/ChatComp'

const ChatRoomsPage = () => {
  return (
    <HeroIllustration>
        <NavBar />
        <div style={styles.container}>
            <ChatComp />
        </div>
    </HeroIllustration>
  )
}

const styles = {
    container:{
        flex:1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 80px)',
        width: '100%',
    }};

export default ChatRoomsPage