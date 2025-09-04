import React from 'react'
import { useState } from 'react';

const TranslatorComp = () => {

  //counting maximum word limit
  const [text, setText] = useState('');
  const maxWords = 110;

  const handleChange = (e) => {
    const input = e.target.value;
    const wordsArray = input.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = wordsArray.length;

    if (wordCount <= maxWords) {
      setText(input);
    }
  };

  const [translatedText, setTranslatedText] = useState('');

  const translate = () => {
    setTranslatedText(text);
  };


  return (
    <div style={styles.mainBox}>

      {/* Left Panel */}
      <div style={styles.leftPanel}>

        <div style={styles.topBtns}>
          <button style={styles.actionBtn}>Detect language</button>
        </div>
        <div style={styles.leftPanelBody}>
          <div style={styles.enterText}>
            <textarea
              style={{ ...styles.txtSpace, ...styles.enterText }}
              rows="14"
              cols="50"
              placeholder="Enter text here..."
              value={text}
              onChange={handleChange} />
          </div>
          <div style={styles.wordCount}>
            {text ? text.trim().split(/\s+/).length : 0} / {maxWords}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div style={styles.rightPanel}>

        <div style={styles.topBtns}>
          <button style={styles.actionBtn}>Choose Language</button>
        </div>
        <div style={styles.rightPanelBody}>
          <textarea
            value={translatedText}
            readOnly
            style={{ ...styles.displayText, ...styles.readtxtSpace }} />
        </div>
      </div>

      {/* Translate Button */}
      <button style={styles.translateBtn} onClick={translate}>Translate</button>
    </div>
  )
}

const styles = {
  mainBox: {
    width: '90%',
    maxWidth: '1200px',
    background: '#fff',
    borderRadius: '18px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
    padding: '20px 10px 20px 10px',
    display: 'flex',
    flexDirection: 'row',
    minHeight: '420px',
    position: 'relative'
  },
  leftPanel: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',

  },
  rightPanel: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  topBtns: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    marginBottom: '5px'
  },
  leftPanelBody: {
    flex: 1,
    borderRight: '2px solid #79797936',
  },
  enterText: {
    display: 'flex',
    color: '#000',
    fontFamily: "'Montserrat_Regular', sans-serif",
    marginBottom: '8px',
    width: '100%',
    padding: '12px',
    fontSize: '1.4rem',
    border: 'none',
    resize: 'vertical',
    boxSizing: 'border-box', // ensures padding doesn't change total width
  },

  wordCount: {
    textAlign: 'left',
    fontFamily: "'Montserrat_Regular', sans-serif",
    fontSize: '0.9rem',
    color: '#555',
    marginLeft: '6px',
  },
  rightPanelBody: {
    flex: 1,
    paddingLeft: '30px'
  },
  displayText: {
    fontSize: '1.4rem',           // from readtxtSpace, prefer larger font for display
    color: '#003973',
    marginBottom: '8px',
    fontFamily: "'Montserrat_Regular', sans-serif",
    resize: 'vertical',
    width: '100%',
    height: '91%',
    padding: '12px',
    whiteSpace: 'pre-wrap',
    overflowY: 'auto',
    border: 'none',
    boxSizing: 'border-box',
  },

  actionBtn: {
    border: '2px solid #000',
    color: '#003973',
    background: '#fff',
    padding: '8px 22px',
    borderRadius: '30px',
    fontWeight: '300',
    fontSize: '18px',
    cursor: 'pointer',
    fontFamily: "'Cal_Sans', sans-serif"
  },
  translateBtn: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '10px',
    background: '#003973',
    backgroundImage: 'linear-gradient(to right, #E5E5BE, #003973)',
    color: '#fff',
    border: '2px solid #000',
    borderRadius: '100px',
    fontFamily: "'Cal_Sans', sans-serif",
    fontWeight: '300',
    fontSize: '20px',
    padding: '5px 25px',
    cursor: 'pointer',
    boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
  }
};


export default TranslatorComp