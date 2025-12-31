import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 text-center text-white">
      <h2 className="text-3xl font-bold">
        Prêt à commencer ?
      </h2>

      <p className="mt-4 text-blue-100">
        Lancez votre réservation dès maintenant.
      </p>

      <div className="mt-8">
        <Link
          to="/reservation"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Réserver maintenant
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
