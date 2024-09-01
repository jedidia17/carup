
export default function FAQ() {
    const faqs = [
        {
            question: "Comment puis-je créer un compte?",
            answer: "Vous pouvez créer un compte en cliquant sur le bouton 'Créez un compte' et en remplissant les informations nécessaires."
        },
        {
            question: "Puis-je ajouter plusieurs véhicules?",
            answer: "Oui, vous pouvez ajouter plusieurs véhicules et gérer leur entretien facilement."
        },
        {
            question: "Comment puis-je recevoir des rappels?",
            answer: "Les rappels sont envoyés automatiquement selon les dates d'entretien que vous avez configurées pour chaque véhicule."
        }
    ];

    return (
        <div className='lg:flex items-center gap-2 text-center'>
            {faqs.map((faq, index) => (
                <div key={index} className="h-auto p-4 hover:bg-popover hover:text-popover-foreground hover:cursor-pointer lg:p-0 md:h-[150px] rounded-lg flex items-center justify-center flex-col">
                    <h3 className="text-xl font-bold">{faq.question}</h3>
                    <p className="text-primary">{faq.answer}</p>
                </div>
            ))}
        </div>
    );
}