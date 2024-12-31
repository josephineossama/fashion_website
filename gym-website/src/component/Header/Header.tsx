import './Header.css'
import Button from'../button/Button'

const Header = () => {
    const handleShopClick=()=>{
        console.log("sign up clicked");
      }
  return (
    <>
    <div className='container'>
    <div className="explore-text">
        <div>LET'S</div>
        <div>EXPLORE</div>
        <div>UNIQUE</div>
        <div>CLOTHES.</div>
    </div>
    <div className='explore-paragraph'>
        <p>Live for influential and innovative fashion!</p>
    </div>
    <Button className="shop-now-btn" onClick={handleShopClick} label="Shop Now"/>


    </div>
    </>
  )
}

export default Header