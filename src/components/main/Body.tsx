import "../../styles/Body.css";

function Body() {
    return (
        <div>
            <div className="top">
                <img src="img/space.jpg" alt="Not loaded" className="top__image" />
            </div>
            <div className="laptop">
                <img src="img/laptop2.png" alt="None" />
                <p className="laptop__text">
                    <p>Share code and take notes.</p>
                    <p>You can save notes and images.</p>
                    <p>Start your web notebook now!</p>
                </p>
            </div>
        </div>
    );
}

export default Body;