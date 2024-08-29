export default function Contact() {
    return (
        <>

            <div className="contact-container">
                <div className="contact-content">
                    <h2>CONTACTEZ-NOUS</h2>
                    <h1>Gardez votre véhicule en parfait état</h1>
                    <p>Nous sommes là pour vous aider à prolonger la durée de vie de votre véhicule. Contactez-nous pour toute question ou assistance.</p>
                    <button className="contact-button">ENVOYER UN MESSAGE <span role="img" aria-label="email">✉️</span></button>
                </div>
                <div className="contact-image-container">
                    <div className="image-content">
                        <img src="/Richel01.jpg" alt="Utilisateur souriant dans sa voiture" />
                        <div className="image-credit"></div>
                    </div>
                    <div className="recommendation-card">
                        <h4>NOTRE RECOMMANDATION</h4>
                        <h3>Entretien Régulier</h3>
                        <p>Sécurité, fiabilité</p>
                        <div className="rating">5.0</div>
                    </div>
                </div>



            </div>

            <div className="contact-container">
                <div className="contact-text">
                    <h1>Contactez CarUp</h1>
                    <p>
                        Notre équipe est prête à répondre à toutes vos questions et à vous aider à maintenir votre voiture en parfait état.
                    </p>
                </div>
                <div className="image-content">
                    <img src="/equipes.jpg" alt="equipes.jpg" />
                    <div className="image-credit"></div>
                </div>
            </div>
        </>

    );
}