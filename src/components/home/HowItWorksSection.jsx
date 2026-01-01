const HowItWorksSection = () => {
    return (
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
          Comment ça fonctionne
        </h2>
  
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              1. Choisissez
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Sélectionnez le service qui correspond à vos besoins.
            </p>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              2. Réservez
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Complétez le formulaire en quelques minutes.
            </p>
          </div>
  
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              3. Confirmez
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Recevez une confirmation immédiate.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default HowItWorksSection;
  