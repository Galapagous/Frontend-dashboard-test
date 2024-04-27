import './profileCard.css'
import Profile from '../../assets/profile.jpg'

function ProfileCard() {
    return(
        <div className="profile-container">
            <img src={Profile} alt='profile photo'/>
            <div className="details">
                <h2>Lilly Donovan</h2>
                <span>Business Trainer</span>
            </div>
        </div>
    )
}

export default ProfileCard
