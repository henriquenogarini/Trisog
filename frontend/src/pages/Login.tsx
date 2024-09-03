import  { useState, FormEvent } from "react"
import { Navigate } from "react-router-dom"
import { 
  doSignWithEmailAndPassword, 
  doCreateUserWithEmailAndPassword,
  doSignInWithGoogle
} from "../services/auth"
import { useAuth } from "../contexts/authContext"
import { FirebaseError } from "firebase/app"
import { FaGoogle } from "react-icons/fa"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "../styles/Login.css"

const Login = () => {

  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isSigning, setIsSigning] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<string>("")
  const [passwordError, setPasswordError] = useState<string>("")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [signInError, setSignInError] = useState<string>("")
  const { userLoggedIn } = useAuth()

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault()
    setEmailError("")
    setPasswordError("")
    setSignInError("")
    try {
      await doCreateUserWithEmailAndPassword(email, password)
    } catch (error) {
      handleErrors(error as FirebaseError)
    }
  };

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault()
    if (!isSigning) {
      setEmailError("")
      setPasswordError("")
      setSignInError("")
      try {
        await doSignWithEmailAndPassword(email, password)
      } catch (error) {
        handleErrors(error as FirebaseError)
      }
    }
  };

  const onGoogleSignIn = async (e: FormEvent) => {
    e.preventDefault()
    if (!isSigning) {
      setEmailError("")
      setPasswordError("")
      setErrorMessage("")
      setSignInError("")
      try {
        await doSignInWithGoogle()
      } catch (error) {
        handleErrors(error as FirebaseError)
      }
    }
  };

  const handleErrors = (error: FirebaseError) => {
    const errorCode = error.code
    switch (errorCode) {
      case "auth/invalid-credential":
        setSignInError("Invalid e-mail or password.")
        break;
      case "auth/email-already-in-use":
        setEmailError("Email already exists.")
        break;
      case "auth/weak-password":
        setPasswordError("Password should be at least 6 characters.")
        break;
      default:
        setErrorMessage("An unknown error occurred, please try again.")
        break;
    }
  };

  const signMode = () => {
    setIsSigning(!isSigning),
    setEmail(""),
    setPassword(""),
    setEmailError(""),
    setPasswordError(""),
    setErrorMessage(""),
    setSignInError("")
  };


  return (
    <div>
      <Header/>
      <section id="login-section">
      <div className="signInContainer">
        {userLoggedIn && <Navigate to="/" replace={true} />}
        <div className="login-header">
          <h1>Trisog</h1>
        </div>

        <form
          id="login-form"
          onSubmit={isSigning ? handleRegister : handleSignIn}
        >
          <h2>{isSigning ? "SIGN UP" : "SIGN IN"}</h2>
          <p>
            {isSigning
              ? "Create your account"
              : "Enter your credentials to access your account"}
          </p>
          {errorMessage && <span className="errors">{errorMessage}</span>}
          {signInError && <span className="errors">{signInError}</span>}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className={`inputBase ${emailError ? "inputError" : ""}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <span className="errors">{emailError}</span>}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className={`inputBase ${passwordError ? "inputError" : ""}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <span className="errors">{passwordError}</span>}
          <button type="submit" className="signInButton">
            {isSigning ? "SIGN UP" : "SIGN IN"}
          </button>
          <div className="switch">
            <a
              className="signUpA"
              onClick={(e) => {
                e.preventDefault();
                signMode();
              }}
            >
              {isSigning
                ? "Already have an account? Sign In"
                : "Don't have an account? Sign Up"}
            </a>
          </div>
          <p style={isSigning ? { display: "none" } : {}}>OR</p>
          <button
            disabled={isSigning}
            onClick={onGoogleSignIn}
            className="googleButton"
          >
            <FaGoogle className="google-icon" />{" "}
            <span>SIGN IN WITH GOOGLE</span>
          </button>
        </form>
      </div>
    </section>
      <Footer/>
    </div>
  )
}

export default Login
