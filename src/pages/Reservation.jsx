import ReservationForm from "@/components/form/ReservationForm";

export default function Reservation() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-6 py-20">
      <section className="w-full max-w-6xl mx-auto">
        <ReservationForm />
      </section>
    </main>
  );
}
