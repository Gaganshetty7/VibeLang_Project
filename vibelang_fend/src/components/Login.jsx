import React from 'react'

const Login = ({ toggleForm }) => {
    return (
        <div className="login-container" style={styles.container}>
            <h2 className="login-heading" style={styles.heading}>Log in to VibeLang</h2>
            <form className="login-form">
                <div className="form-group E-mail-group" style={styles.formGroup}>
                    <label htmlFor="E-mail" className="label-E-mail" style={styles.label}>E-Mail</label>
                    <input
                        type="text"
                        id="E-mail"
                        name="E-mail"
                        placeholder="Enter your E-mail address"
                        className="input-E-mail"
                        style={styles.input}
                        required
                    />
                </div>
                <div className="form-group password-group" style={styles.passwordFormGroup}>
                    <label htmlFor="password" className="label-password" style={styles.label}>Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        className="input-password"
                        style={styles.input}
                        required
                    />
                    <div className="forgot-password-container" style={styles.forgotPassword}>
                        <button className="forgot-password-link" style={styles.forgotPasswordLink}>Forgot your password?</button>
                        {/* implement forgot password functionality */}
                    </div>
                </div>
                <button className="login-button" style={styles.button} type="submit">Log In</button>
                <p style={styles.signUpPrompt}>
                    Don't have an account?{' '}
                    <button onClick={toggleForm} style={styles.signUpLink}>
                        Sign Up
                    </button>
                </p>
            </form>
        </div>
    );
}

const styles = {
    container: {
        padding: '2rem',
        color: 'white',
        fontFamily: "'Cal_Sans', sans-serif",
        backgroundImage: 'linear-gradient(to right, #456c8996, #003a73c9)',
        boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.15)',
        borderRadius: '18px',
        border: '5px solid #000',
        overflow: 'hidden',
        width: '400px',
    },
    heading: {
        textAlign: 'center',
        fontSize: '30px',
        fontWeight: '300',
        margin: '1rem',
    },
    formGroup: {
        marginBottom: '1rem',
    },
    label: {
        display: 'block',
        marginBottom: '0.5rem',
        letterSpacing: '1px',
        fontSize: '15px',
        fontWeight: '300',
    },
    input: {
        width: '96%',
        padding: '0.5rem',
        borderRadius: '4px',
        border: 'none',
    },
    passwordFormGroup: {
        marginBottom: '1rem',
    },
    button: {
        width: '100%',
        padding: '0.75rem',
        backgroundColor: '#003973',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        fontFamily: "'Cal_Sans', sans-serif",
        letterSpacing: '2px',
        fontWeight: '700',
        boxShadow: '0px 0px 10px 0px rgba(255, 255, 255, 0.19)',
        cursor: 'pointer',
    },
    forgotPassword: {
        marginTop: '5px',
    },
    forgotPasswordLink: {
        color: 'white',
        backgroundColor: 'transparent',
        border: 'none',
        textDecoration: 'underline',
        fontFamily: "'Montserrat_Regular', sans-serif",
        fontSize: '12px',
        fontWeight: '300',
    },
    signUpPrompt: {
        textAlign: 'center',
        fontSize: '13px',
        fontWeight: '400',
        fontFamily: "'Montserrat_Regular', sans-serif",
    },
    signUpLink: {
        color: '#E5E5BE',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: "'Montserrat_Regular', sans-serif",
        fontSize: '12px',
        fontWeight: '200',
        textDecoration: 'underline',
    },
};

export default Login