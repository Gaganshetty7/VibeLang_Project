import React from 'react'
import NavBar from '../components/NavBar'
import HeroIllustration from '../components/HeroIllustration'
import InviteJoinComp from '../components/InviteJoinComp'

const InviteJoinPage = () => {
  return (
    <HeroIllustration>
        <NavBar />
        <div style={styles.container}>
          <InviteJoinComp />
        </div>
    </HeroIllustration>
  )
}

const styles = {
    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 80px)',
    }
  };
export default InviteJoinPage