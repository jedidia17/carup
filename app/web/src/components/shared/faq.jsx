// import React from 'react';
// import '../styles/FAQ.css';
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
        <div className='jedconnect'>
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                </div>
            ))}
        </div>
    );
}