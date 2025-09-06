import React from 'react'
import { useState } from 'react';

const TranslatorComp = () => {

  // #region counting maximum word limit

  const [text, setText] = useState('');
  const maxWords = 110;

  const handleChangeTextInput = (e) => {
    const input = e.target.value;
    const wordsArray = input.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = wordsArray.length;

    if (wordCount <= maxWords) {
      setText(input);
    }
  };

  // #endregion

  // #region Translation Logic and setting translated text

  const [translatedText, setTranslatedText] = useState('');

  const translate = () => {
    setTranslatedText(text);
  };

  // #endregion

  // #region List of languages for dropdowns

  const languages = [
    { title: "Arabic", code: "ar_AR" },
    { title: "Czech", code: "cs_CZ" },
    { title: "German", code: "de_DE" },
    { title: "English", code: "en_XX" },
    { title: "Spanish", code: "es_XX" },
    { title: "Estonian", code: "et_EE" },
    { title: "Finnish", code: "fi_FI" },
    { title: "French", code: "fr_XX" },
    { title: "Gujarati", code: "gu_IN" },
    { title: "Hindi", code: "hi_IN" },
    { title: "Italian", code: "it_IT" },
    { title: "Japanese", code: "ja_XX" },
    { title: "Kazakh", code: "kk_KZ" },
    { title: "Korean", code: "ko_KR" },
    { title: "Lithuanian", code: "lt_LT" },
    { title: "Latvian", code: "lv_LV" },
    { title: "Burmese", code: "my_MM" },
    { title: "Nepali", code: "ne_NP" },
    { title: "Dutch", code: "nl_XX" },
    { title: "Romanian", code: "ro_RO" },
    { title: "Russian", code: "ru_RU" },
    { title: "Sinhala", code: "si_LK" },
    { title: "Turkish", code: "tr_TR" },
    { title: "Vietnamese", code: "vi_VN" },
    { title: "Chinese", code: "zh_CN" },
    { title: "Afrikaans", code: "af_ZA" },
    { title: "Azerbaijani", code: "az_AZ" },
    { title: "Bengali", code: "bn_IN" },
    { title: "Persian", code: "fa_IR" },
    { title: "Hebrew", code: "he_IL" },
    { title: "Croatian", code: "hr_HR" },
    { title: "Indonesian", code: "id_ID" },
    { title: "Georgian", code: "ka_GE" },
    { title: "Khmer", code: "km_KH" },
    { title: "Macedonian", code: "mk_MK" },
    { title: "Malayalam", code: "ml_IN" },
    { title: "Mongolian", code: "mn_MN" },
    { title: "Marathi", code: "mr_IN" },
    { title: "Polish", code: "pl_PL" },
    { title: "Pashto", code: "ps_AF" },
    { title: "Portuguese", code: "pt_XX" },
    { title: "Swedish", code: "sv_SE" },
    { title: "Swahili", code: "sw_KE" },
    { title: "Tamil", code: "ta_IN" },
    { title: "Telugu", code: "te_IN" },
    { title: "Thai", code: "th_TH" },
    { title: "Tagalog", code: "tl_XX" },
    { title: "Ukrainian", code: "uk_UA" },
    { title: "Urdu", code: "ur_PK" },
    { title: "Xhosa", code: "xh_ZA" },
    { title: "Galician", code: "gl_ES" },
    { title: "Slovene", code: "sl_SI" },
  ];

  // #endregion

  // #region states for selected source and selected target languages from dropdowns

  // #region states for selected source language from dropdown

  const [selectedSourceLang, setSelectedSourceLang] = useState('');

  const handleSourceLangChange = (e) => {
    setSelectedSourceLang(e.target.value);
  }


  // #endregion

  // #region states for selected target language from dropdown

  const [selectedTargetLang, setSelectedTargetLang] = useState('');

  const handleTargetLangChange = (e) => {
    setSelectedTargetLang(e.target.value);
  }

  // #endregion

  // #endregion



  return (
    <div style={styles.mainBox}>

      {/* Left Panel */}
      <div style={styles.leftPanel}>

        <div style={styles.topBtns}>
          <select style={styles.langDropDown} onChange={handleSourceLangChange} value={selectedSourceLang}>
            <option>Choose Language</option>
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>{lang.title}</option>
            ))}
          </select>
        </div>
        <div style={styles.leftPanelBody}>
          <div style={styles.enterText}>
            <textarea
              style={{ ...styles.txtSpace, ...styles.enterText }}
              rows="14"
              cols="50"
              placeholder="Enter text here..."
              value={text}
              onChange={handleChangeTextInput} />
          </div>
          <div style={styles.wordCount}>
            {text ? text.trim().split(/\s+/).length : 0} / {maxWords}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div style={styles.rightPanel}>

        <div style={styles.topBtns}>
          <select style={styles.langDropDown} onChange={handleTargetLangChange} value={selectedTargetLang}>
            <option>Choose Language</option>
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>{lang.title}</option>
            ))}
          </select>
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
    marginBottom: '5px',
    overflow: 'none',
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

  langDropDown: {
    border: '2px solid #000',
    color: '#003973',
    background: '#fff',
    padding: '8px 20px',
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