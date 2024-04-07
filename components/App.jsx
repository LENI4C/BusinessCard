import "../src/index.css";

export const Card = () => {
    return (
        <div className="card">
            <CardImage />
            <Info />
            <Footer />
        </div>
    );
};

const CardImage = () => {
    const imagePath = "../src/assets/images/avatar.png";
    return (
        <div className="card-image">
            <img src={imagePath} alt="userAvatar" />
        </div>
    );
};

const Button = () => {
    return <div className="profile-btn">Test Text</div>;
};

const UserInfo = () => {
    return (
        <>
            <div className="user-info">
                <h2>Laura Smith</h2>
                <h3> Frontend Developer</h3>
                <span>laurasmith.website</span>
            </div>
            <div className="user-info-btn">
                <Button />
                <Button />
            </div>
        </>
    );
};

const ExtraInfo = () => {
    return (
        <>
            <div className="about-section section">
                <h3>About</h3>
                <span>
                    I am a front end developer with a particular interest in
                    making things simple and automatic basic tasks. I try to
                    keep up with security and best practices, and am always
                    looking for new things to learn
                </span>
            </div>
            <div className="interest-section section">
                <h3>Interests</h3>
                <span>
                    Food Expert, Music Scholar, Reader, Internet Fanatic, Bacon
                    Buff, Enterpreneur, Travel Geek, Pop Culture Ninja, Coffee
                    fanatic.
                </span>
            </div>
        </>
    );
};

const Info = () => {
    return (
        <div className="info">
            <UserInfo />
            <ExtraInfo className="extra-info" />
        </div>
    );
};

const Footer = () => {
    return(
        <footer>
            <img src="../src/assets/icons/ig-icon.png" alt="" />
        </footer>
    )
}

export default Card;
