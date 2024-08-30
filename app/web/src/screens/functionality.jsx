import FunctionalityBanner from "@/components/shared/functionalityBanner"

export default function Functionality() {
    return (
        <>
            <FunctionalityBanner />
            <div class="bg-secondary rounded-lg my-12">
                <div class="max-w-6xl mx-auto py-16 px-4">
                    <div className="text-center mb-8">
                        <p className="text-primary text-xl font-bold mb-2">Processus</p>
                        <h2 class="text-4xl font-extrabold text-center mb-6">
                            Comment Utiliser CarUp</h2>
                        <p>Suivez ces étapes simples pour assurer un entretien optimal de votre véhicule.</p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto">

                        <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                            <div class="p-8 text-center">
                                <div class="p-8 text-center">
                                    <p className="text-primary">1</p>
                                    <h3 class="text-gray-800 text-xl font-semibold mb-3">Créer un Compte Gratuit</h3>
                                    <p class="text-gray-500 text-sm leading-relaxed">Inscrivez-vous et commencez à utiliser notre application sans frais.</p>
                                </div>
                            </div>
                        </div>


                        <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                            <div class="p-8 text-center">
                                <div class="p-8 text-center">
                                    <p className="text-primary">2</p>
                                    <h3 class="text-gray-800 text-xl font-semibold mb-3">Ajouter les Informations de Votre Véhicule</h3>
                                    <p class="text-gray-500 text-sm leading-relaxed">Entrez les détails de votre voiture pour recevoir des rappels personnalisés.</p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                            <div class="p-8 text-center">
                                <div class="p-8 text-center">
                                    <p className="text-primary">3</p>
                                    <h3 class="text-gray-800 text-xl font-semibold mb-3">Recevoir des Rappels</h3>
                                    <p class="text-gray-500 text-sm leading-relaxed">Recevez des notifications pour chaque entretien nécessaire.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}