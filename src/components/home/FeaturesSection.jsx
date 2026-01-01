function FeaturesSection() {
  const features = [
    {
      title: "Réservation rapide",
      description: "Effectuez votre réservation en quelques clics."
    },
    {
      title: "Données sécurisées",
      description: "Vos informations sont protégées en toute sécurité."
    },
    {
      title: "Support client",
      description: "Une assistance disponible pour vous accompagner."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
        Une plateforme pensée pour vous
      </h2>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((f, i) => (
          <div key={i}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              {f.title}
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400 transition-colors duration-300">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;
