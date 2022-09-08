import Card from "./Card";


export default function Welcome() {
    return (
        <div className="welcome">
            <div className="welcome-text">
                <h1>Entertainment 3.0 Ecosystem</h1>
                <p>We’re empowering the next generation of artists, creators, and fans.
                Get closer to your favorite stars and connect with other fans from around the world.</p>
            </div>
            
            <div className="cards">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}