import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { motion as Motion } from "framer-motion";
import './input-group.css';
import './GlitchText.css';  // Assurez-vous d'importer le CSS de l'effet glitch

export default function ReservationForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = e.target;

      const data = {
        nom: form.nom.value,
        prenom: form.prenom.value,
        num_tele: form.num_tele.value,
        cin: form.cin.value,
      };

      const { error } = await supabase.from("Rayan").insert([data]);
      if (error) throw error;

      alert("Réservation envoyée ✅");
      form.reset();
    } catch (err) {
      console.error("SUPABASE ERROR:", err);
      alert("Erreur lors de l'envoi ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-4xl mx-auto p-10 min-h-[80vh] rounded-3xl shadow-[0_40px_120px_rgba(0,0,0,0.12)] card-container relative overflow-hidden"
      style={{
        backgroundImage: 'url(/party_back.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-white/60"></div>
      <div className="relative z-10">
      {/* HEADER */}
      <div className="flex items-center gap-6 mb-16 justify-center">
        {/* Image */}
        <Motion.div
          initial={{ scale: 0.6, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="w-32 h-32 rounded-full overflow-hidden shadow-lg"
        >
          <img
            src="bde_balck_pic.jpg"  // Chemin vers l'image dans le dossier "public"
            alt="Réservation"
            className="w-full h-full object-cover"
          />
        </Motion.div>

        {/* Texte animé */}
        <div className="ml-6 mt-2 text-center">
          <p className="animated-text">
            <span>Réservation</span>
          </p>
          <p className="text-gray-500 text-lg mt-2 max-w-xl">
            Veuillez remplir les informations ci-dessous pour confirmer votre réservation.
          </p>
        </div>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} autoComplete="off">
        <Motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mb-16"
        >
          <AnimatedInput label="Nom" name="nom" />
          <AnimatedInput label="Prénom" name="prenom" />
          <AnimatedInput label="Téléphone" name="num_tele" />
          <AnimatedInput label="Carte nationale (CIN)" name="cin" />
        </Motion.div>

        {/* Nouveau bouton stylisé */}
        <div className="flex justify-end gap-6">
          <button className="button" type="submit" disabled={loading}>
            {loading ? "Envoi..." : "Let`s go →"} {/* Texte dynamique du bouton */}
          </button>
        </div>
      </form>
      </div>
    </Motion.div>
  );
}

/* =========================
   INPUT AVEC DESIGN UIVERSE
========================= */
function AnimatedInput({ label, name }) {
  return (
    <Motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="inputGroup">
        <input
          type="text"
          name={name}
          required
          placeholder=" "
        />
        <label>{label}</label>
      </div>
    </Motion.div>
  );
}
