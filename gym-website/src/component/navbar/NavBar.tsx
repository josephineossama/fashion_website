import './NavBar.css'
import Button from '../button/Button'

const Nav = () => {
  const handleSignUpClick=()=>{
    console.log("sign up clicked");
  }
  return (
    <>
    <div className='Header'>
      <div className="header-options">
        <a href="#catalogue">CATALOGUE</a>
        <a href="#fashion">FASHION</a>
        <a href="#favorite">FAVORITE</a>
        <a href="#lifestyle">LIFESTYLE</a>
        <Button className="header-button" onClick={handleSignUpClick} label="Sign Up" />
      </div>
    </div>
    </>
  )
}

export default Nav