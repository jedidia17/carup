import TestimonialCard from "@/components/layouts/testimonialCard";
import testimonial from "@/data/testimonial";

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


      <div class="bg-[#F7F7F7] font-[sans-serif]">
        <div class="max-w-6xl mx-auto py-16 px-4">
          <p>Tout pour votre voiture</p>
          <h2 class="text-gray-800 text-4xl font-extrabold text-center mb-16">
          Fonctionnalités Principales</h2>
          <p>Découvrez comment CarUp simplifie la gestion de l'entretien de votre véhicule.</p>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto">
            <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div class="p-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#007bff" class="w-8 mb-6" viewBox="0 0 32 32">
                  <path d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z" data-original="#000000" />
                  <path d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z" data-original="#000000" />
                </svg>
                <h3 class="text-gray-800 text-xl font-semibold mb-3">Customization</h3>
                <p class="text-gray-500 text-sm leading-relaxed">Tailor our product to suit your needs Tailor our product to suit your needs.</p>
              </div>
            </div>

            <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div class="p-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#007bff" class="w-8 mb-6" viewBox="0 0 682.667 682.667">
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000" />
                    </clipPath>
                  </defs>
                  <g fill="none" stroke="#007bff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="40" clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                    <path d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z" data-original="#000000" />
                    <path d="M178 271.894 233.894 216 334 316.105" data-original="#000000" />
                  </g>
                </svg>
                <h3 class="text-gray-800 text-xl font-semibold mb-3">Security</h3>
                <p class="text-gray-500 text-sm leading-relaxed">Your data is protected by the latest security measures.</p>
              </div>
            </div>

            <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div class="p-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#007bff" class="w-8 mb-6" viewBox="0 0 24 24">
                  <g fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z" data-original="#000000" />
                    <path d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z" data-original="#000000" />
                    <path d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z" data-original="#000000" />
                  </g>
                </svg>
                <h3 class="text-gray-800 text-xl font-semibold mb-3">Performance</h3>
                <p class="text-gray-500 text-sm leading-relaxed">Experience blazing-fast performance with our product.</p>
              </div>
            </div>
          </div>
        </div>
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
        {
          testimonial.map(({ name, email, text, image }) => (
            <TestimonialCard
              name={name}
              email={email}
              text={text}
              image={image}
            />
          ))
        }
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