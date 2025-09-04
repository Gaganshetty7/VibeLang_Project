import React from 'react'
import NavBar from '../components/NavBar'
import HeroIllustration from '../components/HeroIllustration'
import TranslatorComp from '../components/TranslatorComp'

const TranslatePage = () => {
  return (
    <HeroIllustration>
        <NavBar />
        <div style={styles.container}>
            <TranslatorComp />
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

export default TranslatePage