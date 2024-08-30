import { Button } from "@/components/ui/button";
import { MailIcon } from 'lucide-react';


export default function ContactBanner() {
    return (
        <div class="min-h-[475px] my-6">
            <div class="grid md:grid-cols-2 justify-center items-center max-md:text-center gap-8">
                <div class="mx-auto p-4 flex items-center justify-center flex-col text-center gap-4">
                    <h2 className="text-primary font-bold text-xl">CONTACTEZ-NOUS</h2>
                    <h2 class="text-gray-800 text-4xl md:text-5xl font-extrabold mb-6 md:!leading-[55px]">Gardez votre véhicule en parfait état</h2>
                    <p class="text-gray-800 text-base">Nous sommes là pour vous aider à prolonger la durée de vie de votre véhicule. Contactez-nous pour toute question ou assistance.</p>
                    <Button size="lg">Envoyez un Message <MailIcon className="ml-4" /></Button>
                </div>
                <div class="md:text-right max-md:mt-12 h-full">
                    <img src="/Richel01.jpg" alt="Premium Benefits" class="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
}