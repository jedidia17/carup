export default function Home() {
  return (
    <div className="w-[100%]">
      <div className="py-12 text-center">
        <h1 className="text-[#1f78d1] text-4xl mb-5">Bienvenue à CarUp</h1>
        <p className="text-[#1f78d1] text-lg mb-5">Gardez votre véhicule en parfait état avec CarUp.</p>
        <p className="text-[#1f78d1] text-lg mb-5">Votre application de rappel d’entretien automobile au sommet !</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <img src="/lilkabaki001.jpg" alt="lilkabaki001" className="w-48 h-48 m-5 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-110" />
        <img src="/lilkabaki002.jpg" alt="lilkabaki002" className="w-48 h-48 m-5 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-110" />
        <img src="/lilkabaki003.jpg" alt="lilkabaki003" className="w-48 h-48 m-5 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-110" />
      </div>

      <div className="flex flex-wrap justify-center gap-5 mb-8">
        <div className="w-48 m-5 text-center">
          <i className="text-2xl mb-2">📅</i>
          <p className="mt-2 text-base text-[#0d3b66]">RAPPELS D'ENTRETIEN</p>
        </div>
        <div className="w-48 m-5 text-center">
          <i className="text-2xl mb-2">⏰</i>
          <p className="mt-2 text-base text-[#0d3b66]">ALARME DE PANNES</p>
        </div>
        <div className="w-48 m-5 text-center">
          <i className="text-2xl mb-2">🔧</i>
          <p className="mt-2 text-base text-[#0d3b66]">SUIVI D'ENTRETIEN</p>
        </div>
      </div>

      <div className="flex justify-between mb-8">
        <div className="flex-1 bg-[#f0f0f0] p-5 rounded-lg m-2 shadow-md">
          <h3 className="text-xl font-bold mb-3">Témoignage 1</h3>
          <p>« CarUp a changé ma vie ! Je n'oublie plus aucun entretien. »</p>
        </div>
        <div className="flex-1 bg-[#f0f0f0] p-5 rounded-lg m-2 shadow-md">
          <h3 className="text-xl font-bold mb-3">Témoignage 2</h3>
          <p>« L'application est super pratique et facile à utiliser. »</p>
        </div>
        <div className="flex-1 bg-[#f0f0f0] p-5 rounded-lg m-2 shadow-md">
          <h3 className="text-xl font-bold mb-3">Témoignage 3</h3>
          <p>« Un outil indispensable pour tout propriétaire de véhicule. »</p>
        </div>
      </div>

      <div className="flex items-center mb-8">
        <div className="flex-1 mr-5">
          <h2 className="text-2xl font-bold text-[#007BFF] mb-5">Rejoignez-nous dès maintenant !</h2>
          <p className="mb-5">Téléchargez CarUp pour ne plus jamais manquer un entretien.</p>
          <button className="bg-[#4CAF50] text-white p-2 px-4 rounded hover:bg-[#3e8e41] cursor-pointer">Téléchargez</button>
        </div>
        <div className="flex justify-center">
          <img src="/carup-advertisement.jpg" alt="CarUp Advertisement" className="rounded-lg w-[500px] transition-transform duration-300 ease-in-out hover:scale-110" />
        </div>
      </div>
      <h1>Bienvenue à CarUp</h1>
      <p>Gardez votre véhicule en parfait état avec CarUp.</p>
      <p>Votre application de rappel d’entretien automobile au sommet !</p>

      <div className="images-container">
        <img
          src="/lilkabaki001.jpg"
          alt="lilkabaki001"
          className="animated-image animated-lilkabaki001"
        />
        <img
          src="/lilkabaki002.jpg"
          alt="lilkabaki002"
          className="animated-image animated-lilkabaki002"
        />
        <img
          src="/lilkabaki003.jpg"
          alt="lilkabaki003"
          className="animated-image animated-lilkabaki003"
        />
      </div>

      <div className="features">
        <div className="feature">
          <i className="icon calendar-icon"></i>
          <p>RAPPELS D'ENTRETIEN</p>
        </div>
        <div className="feature">
          <i className="icon time-icon"></i>
          <p>GAGNEZ DU TEMPS</p>
        </div>
        <div className="feature">
          <i className="icon security-icon"></i>
          <p>SÉCURITÉ ACCRUE</p>
        </div>
      </div>

      <div className="buttons">
        <button className="contact-button">CONTACTEZ-NOUS →</button>
        <button className="learn-more-button">EN SAVOIR PLUS</button>
      </div>

      <div className="theme-toggle">
        <button >
          {/* Passer en {isDarkMode ? 'mode clair' : 'mode sombre'} */}
        </button>
      </div>



      <div className="feature-section">
        <p>Tout pour votre voiture</p>
        <h2>Fonctionnalités Principales</h2>
        <p>Découvrez comment CarUp simplifie la gestion de l'entretien de votre véhicule.</p>

        <div className="feature-list">
          <div className="feature-item">
            <i className="icon bell-icon"></i>
            <h3>Rappels Automatiques</h3>
            <p>Recevez des rappels pour les dates d'entretien importantes.</p>
          </div>
          <div className="feature-item">
            <i className="icon history-icon"></i>
            <h3>Historique d'Entretien</h3>
            <p>Gardez une trace de tous les entretiens effectués.</p>
          </div>
          <div className="feature-item">
            <i className="icon tips-icon"></i>
            <h3>Conseils Personnalisés</h3>
            <p>Obtenez des conseils personnalisés pour maintenir votre véhicule.</p>
          </div>
        </div>
      </div>

      <div className="how-it-works-section">
        <h2>Comment ça marche</h2>
        <p>Suivez ces étapes simples pour utiliser CarUp.</p>

        <div className="how-it-works-list">
          <div className="how-it-works-item">
            <i className="icon download-icon"></i>
            <p>Téléchargez l'application</p>
          </div>
          <div className="how-it-works-item">
            <i className="icon create-account-icon"></i>
            <p>Créez un compte</p>
          </div>
          <div className="how-it-works-item">
            <i className="icon add-vehicle-icon"></i>
            <p>Ajoutez votre véhicule</p>
          </div>
          <div className="how-it-works-item">
            <i className="icon reminders-icon"></i>
            <p>Recevez des rappels</p>
          </div>
        </div>
      </div>

      <section className="testimonials-section">
        <h2>Ce qu'ils disent de nous</h2>
        <h3>Témoignages de nos utilisateurs</h3>
        <div className="testimonials">
          <div className="testimonial-item">
            <p>Grâce à CarUp, je n'oublie jamais mes rendez-vous d'entretien.</p>
            <div className="user-info">
              <img src="Fabrice01.png" alt="Fabrice01" />
              <div>
                <h4>Fabrice Tuluma</h4>
                <p>@fabricetuluma</p>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <p>L'application est très intuitive et m'aide à garder ma voiture en bon état.</p>
            <div className="user-info">
              <img src="Dan02.png" alt="Dan02" />
              <div>
                <h4>Daniela Ntab</h4>
                <p>@danielantab</p>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <p>Je recommande vivement CarUp à tous les propriétaires de voitures.</p>
            <div className="user-info">
              <img src="Babujoe03.png" alt="Babujoe03" />
              <div>
                <h4>Babu Joe</h4>
                <p>@babujoe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="join-now-section">
        <div className="join-now-content">
          <h2>Rejoignez-nous dès maintenant</h2>
          <p>Téléchargez CarUp et commencez à prendre soin de votre voiture facilement.</p>
          <ul>
            <li>Facile à utiliser</li>
            <li>Rappels automatiques</li>
            <li>Historique complet</li>
          </ul>
          <button className="cta-button">Accès instantané</button>
        </div>
        <div className="join-now-image">
          <img src="/Richel.jpg" alt="Richel" />
        </div>
      </div>

      <div className="key-numbers-section">
        <h2>Nos chiffres clés</h2>
        <p>Découvrez l'impact de CarUp en chiffres.</p>
        <div className="numbers-list">
          <div className="number-item">
            <h3>10k+</h3>
            <p>Utilisateurs satisfaits</p>
            <span>Des milliers d'utilisateurs heureux</span>
          </div>
          <div className="number-item">
            <h3>5k+</h3>
            <p>Véhicules gérés</p>
            <span>Des milliers de véhicules entretenus</span>
          </div>
          <div className="number-item">
            <h3>99%</h3>
            <p>Taux de satisfaction</p>
            <span>Une satisfaction quasi totale</span>
          </div>
        </div>
      </div>

      <div className="map-section">
        <h2>Localiser les Garages</h2>
        {/* <MapContainer /> */}
      </div>

      <div className="expense-chart-section">
        <h2>Suivi des Dépenses d'Entretien</h2>
        {/* <ExpenseChart /> */}
      </div>

      <div className="faq-section">
        <h2>FAQ</h2>
        {/* <FAQ /> */}
      </div>
    </div>
  );
}