import ReservationForm from "@/components/form/ReservationForm";

export default function Reservation() {
  // Image de background depuis le dossier public
  const pageBackgroundImage = "/back_body_party.jpg";
  
  return (
    <main className="min-h-screen relative flex items-center justify-center px-6 py-20">
      {/* Background Image de la page - Ajoutez votre image ici */}
      {pageBackgroundImage && (
        <div 
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url(${pageBackgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
        >
          {/* Overlay léger pour améliorer la lisibilité */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      )}

      {/* Contenu avec la card qui a son propre background */}
      <section className="relative z-10 w-full max-w-6xl mx-auto">
        <ReservationForm />
      </section>
    </main>
  );
}
