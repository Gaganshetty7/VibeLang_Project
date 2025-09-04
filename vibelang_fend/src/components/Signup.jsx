import React from 'react';

const Signup = ({ toggleForm }) => {

    return (
        <div>
            <div className="signup-container" style={styles.container}>
                <h2 className="signup-heading" style={styles.heading}>Sign up for VibeLang</h2>

                <form className="signup-form">
                    <div className="form-group username-group" style={styles.formGroup}>
                        <label htmlFor="username" className="label-username" style={styles.label}>Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Choose a username"
                            className="input-username"
                            style={styles.input}
                            required
                        />
                    </div>
                    <div className="form-group email-group" style={styles.formGroup}>
                        <label htmlFor="email" className="label-email" style={styles.label}>E-Mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your E-mail address"
                            className="input-email"
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
                            placeholder="Create a password"
                            className="input-password"
                            style={styles.input}
                            required
                            minLength={6}
                        />
                    </div>
                    <div className="form-group confirm-password-group" style={styles.passwordFormGroup}>
                        <label htmlFor="confirmPassword" className="label-confirm-password" style={styles.label}>Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            className="input-confirm-password"
                            style={styles.input}
                            required
                            minLength={6}
                        />
                    </div>
                    <button className="signup-button" style={styles.button} type="submit">Sign Up</button>
                    <p style={styles.loginPrompt}>
                        Already have an account?{' '}
                        <button onClick={toggleForm} style={styles.loginLink}>
                            Log In
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        width: '600px',
        padding: '2rem',
        color: 'white',
        fontFamily: "'Cal_Sans', sans-serif",
        backgroundImage: 'linear-gradient(to right, #456c8996, #003a73c9)',
        boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.15)',
        borderRadius: '18px',
        border: '5px solid #000',
        overflow: 'hidden',
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
        marginTop: '1rem',
    },
    loginPrompt: {
        textAlign: 'center',
        fontSize: '13px',
        fontWeight: '400',
        fontFamily: "'Montserrat_Regular', sans-serif",
    },
    loginLink: {
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

export default Signup;
