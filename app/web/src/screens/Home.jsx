import TestimonialCard from "@/components/shared/testimonialCard";
import ExpenseChart from "@/components/shared/expenseChart";
import FAQ from "@/components/shared/faq";
import { Button } from "@/components/ui/button";
import testimonial from "@/data/testimonial";
import { Bell, NotebookPenIcon, LightbulbIcon } from 'lucide-react';

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

      <div className="flex flex-wrap justify-center gap-5 mb-8 bg-secondary rounded-lg">
        <div className="w-48 m-5 text-center">
          <i className="text-2xl mb-2">📅</i>
          <p className="mt-2 text-base">RAPPELS D'ENTRETIEN</p>
        </div>
        <div className="w-48 m-5 text-center">
          <i className="text-2xl mb-2">⏰</i>
          <p className="mt-2 text-base text-[#0d3b66]">ALARME DE PANNES</p>
        </div>
        <div className="w-48 m-5 text-center">
          <i className="text-2xl mb-2">🔧</i>
          <p className="mt-2 text-base">SUIVI D'ENTRETIEN</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mb-7">
        <Button>CONTACTEZ NOUS</Button>
        <Button variant="ghost">EN SAVOIR PLUS</Button>
      </div>

      <div class="bg-secondary rounded-lg">
        <div class="max-w-6xl mx-auto py-16 px-4">
          <div className="text-center mb-8">
            <p className="text-primary text-xl font-bold">Tout pour votre voiture</p>
            <h2 class="text-4xl font-extrabold text-center mb-6">
              Fonctionnalités Principales</h2>
            <p>Découvrez comment CarUp simplifie la gestion de l'entretien de votre véhicule.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto">
            <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div class="p-8">
                <Bell className="w-8 mb-6 fill-primary" />
                <h3 class="text-gray-800 text-xl font-semibold mb-3">Rappels Automatique</h3>
                <p class="text-gray-500 text-sm leading-relaxed">Recevez des rappels pour les dates d'entretien importantes.</p>
              </div>
            </div>

            <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div class="p-8">
                <NotebookPenIcon className="w-8 mb-6 fill-primary" />
                <h3 class="text-gray-800 text-xl font-semibold mb-3">Historique d'Entretien</h3>
                <p class="text-gray-500 text-sm leading-relaxed">Gardez une trace de tous les entretiens effectués.</p>
              </div>
            </div>

            <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div class="p-8">
                <LightbulbIcon className="w-8 mb-6 fill-primary" />
                <h3 class="text-xl font-semibold mb-3">Conseils Personnalisés</h3>
                <p class="text-sm leading-relaxed">Obtenez des conseils personnalisés pour maintenir votre véhicule.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
      C

S
    */}

      <div class="bg-secondary rounded-lg">
        <div class="max-w-6xl mx-auto my-12 py-16 px-4">
          <div className="text-center mb-8">
            <p className="text-primary text-xl font-bold">Comment ça marche</p>
            <h2 class="text-4xl font-extrabold text-center mb-6">
              Suivez ces étapes simples pour utiliser CarUp.</h2>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Button size="lg" variant="outline">Téléchargez l'application</Button>
            <Button size="lg" variant="outline">Créez un compte</Button>
            <Button size="lg" variant="outline">Ajoutez votre véhicule</Button>
            <Button size="lg" variant="outline">Recevez des rappels</Button>
          </div>
        </div>
      </div>

      {/*  */}


      <div class="bg-secondary rounded-lg">
        <div class="max-w-6xl mx-auto my-12 py-16 px-4">
          <div className="text-center mb-8">
            <h2 class="text-4xl font-extrabold text-center mb-6">
              Ce qu'ils disent de nous</h2>
            <p className="text-primary text-xl font-bold">Témoignages de nos utilisateurs</p>
          </div>

          <div class
            Name="flex justify-between mb-8">
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


        </div>
      </div>
      {/*  */}

      <div class="bg-white min-h-[475px] font-[sans-serif]">
        <div class="grid md:grid-cols-2 justify-center items-center max-md:text-center gap-8">
          <div class="max-w-md mx-auto p-4">
            <h2 class="text-gray-800 text-4xl md:text-5xl font-extrabold mb-6 md:!leading-[55px]">Rejoignez-nous dès maintenant</h2>
            <p class="text-gray-800 text-base">Téléchargez CarUp et commencez à prendre soin de votre voiture facilement.</p>

            <div class="mt-12 space-y-6">
              <p>Facile à utiliser</p>
              <p>Rappels automatiques</p>
              <p>Historique complet</p>
              <Button size="lg">Acces instantané</Button>
            </div>
          </div>
          <div class="md:text-right max-md:mt-12 h-full">
            <img src="/Richel.jpg" alt="Premium Benefits" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>


      {/*  */}


      <div class="bg-secondary rounded-lg my-12">
        <div class="max-w-6xl mx-auto py-16 px-4">
          <div className="text-center mb-8">
            <h2 class="text-4xl font-extrabold text-center mb-6">
              Nos chiffres clés</h2>
            <p>Découvrez l'impact de CarUp en chiffres.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto">

            <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div class="p-8 text-center">
                <div class="p-8 text-center">
                  <p className="text-primary">10K+</p>
                  <h3 class="text-gray-800 text-xl font-semibold mb-3">Utilisateurs satisfaits</h3>
                  <p class="text-gray-500 text-sm leading-relaxed">Des milliers d'utilisateurs heureux</p>
                </div>
              </div>
            </div>


            <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div class="p-8 text-center">
                <div class="p-8 text-center">
                  <p className="text-primary">5k+</p>
                  <h3 class="text-gray-800 text-xl font-semibold mb-3">Véhicules gérés</h3>
                  <p class="text-gray-500 text-sm leading-relaxed">Des milliers de véhicules entretenus</p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div class="p-8 text-center">
                <div class="p-8 text-center">
                  <p className="text-primary">99%</p>
                  <h3 class="text-gray-800 text-xl font-semibold mb-3">Taux de satisfaction</h3>
                  <p class="text-gray-500 text-sm leading-relaxed">Une satisfaction quasi totale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="map-section">
        {/* <h2>Localiser les Garages</h2> */}
        {/* <MapContainer /> */}
      </div>

      {/* expense charts */}
      <div>
        <h2 className="text-4xl font-extrabold text-center mb-6">Suivi des Dépenses d'Entretien</h2>
        <ExpenseChart />
      </div>

      <div className="faq-section">
        <h2 className="text-4xl font-extrabold text-center mb-6">FAQ</h2>
        <FAQ />
      </div>
    </div>
  );
}