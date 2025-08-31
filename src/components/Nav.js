import pic from '../pics/profile.png'

export default function Nav() {
    return(
        <nav className='responsive-nav'>
            <div>
                <h2 className='nav-logo'>MNTN</h2>
            </div>
            <div className="nav-links">
                <a href="#" style={{color: 'white', textDecoration: 'none'}}>Equipment</a>
                <a href="#" style={{color: 'white', textDecoration: 'none'}}>About us</a>
                <a href="#" style={{color: 'white', textDecoration: 'none'}}>Blog</a>
            </div>
            <div className="nav-account">
                <img src={pic} className="profile-image" alt="Profile" />
                <a href="#" style={{color: 'white', textDecoration: 'none'}}>Account</a>
            </div>
        </nav>
    )
}
