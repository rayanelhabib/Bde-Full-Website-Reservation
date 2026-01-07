import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { motion as Motion } from "framer-motion";
import './input-group.css';
import './GlitchText.css';

export default function ReservationForm() {
  // États pour la gestion du formulaire
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    num_tele: '',
    cin: '',
    email: '',
    transport: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Validation: Email
  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  // Validation: Nom/Prenom (lettres, espaces, tirets uniquement)
  const validateName = (value) => {
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s\-']+$/;
    return regex.test(value) && value.trim().length > 0;
  };

  // Validation: Téléphone marocain (10 chiffres: 06, 07, 05)
  const validatePhone = (value) => {
    const cleaned = value.replace(/\D/g, ''); // Enlever tout sauf chiffres
    return cleaned.length === 10 && /^0[5-7]/.test(cleaned); // 10 chiffres, commence par 05, 06 ou 07
  };

  // Validation: CIN marocain (lettres + chiffres, pas de caractères spéciaux)
  const validateCIN = (value) => {
    const regex = /^[A-Z0-9]+$/; // Lettres majuscules et chiffres uniquement
    return regex.test(value) && value.length >= 6 && value.length <= 12;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = type === 'checkbox' ? checked : value;
    let error = '';

    if (name === 'nom' || name === 'prenom') {
      // Bloquer les caractères spéciaux
      if (value && !validateName(value)) {
        error = 'Pas de caractères spéciaux autorisés';
        return; // Ne pas mettre à jour si invalide
      }
    }

    if (name === 'num_tele') {
      // Garder seulement les chiffres
      const digits = value.replace(/\D/g, '');
      newValue = digits.slice(0, 10); // Max 10 chiffres
      
      if (digits.length > 0 && !/^0[5-7]?/.test(digits)) {
        error = 'Le numéro doit commencer par 05, 06 ou 07';
      }
    }

    if (name === 'cin') {
      // Convertir en majuscules et bloquer caractères spéciaux
      newValue = value.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 12);
    }

    if (name === 'email') {
      newValue = value.toLowerCase().trim();
    }

    setFormData(prev => ({ ...prev, [name]: newValue }));
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Validation du formulaire
    const newErrors = {};
    if (!formData.nom || !validateName(formData.nom)) {
      newErrors.nom = 'Nom invalide';
    }
    if (!formData.prenom || !validateName(formData.prenom)) {
      newErrors.prenom = 'Prénom invalide';
    }
    if (!validatePhone(formData.num_tele)) {
      newErrors.num_tele = 'Numéro invalide (10 chiffres: 06... or 07...)';
    }
    if (!validateCIN(formData.cin)) {
      newErrors.cin = 'CIN invalide';
    }
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
    if (!formData.transport) newErrors.transport = 'Veuillez indiquer votre choix';
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      // Vérifier si le CIN existe déjà
      const { data: existingReservations, error: checkError } = await supabase
        .from("Rayan")
        .select('cin')
        .eq('cin', formData.cin.trim())
        .limit(1);

      if (checkError) {
        console.error('Erreur vérification:', checkError);
      }

      if (existingReservations && existingReservations.length > 0) {
        alert('⚠️ Cette carte nationale (CIN) a déjà été utilisée pour une réservation.');
        setErrors({ cin: 'CIN déjà enregistré' });
        setLoading(false);
        return;
      }

      // Insérer directement la réservation dans la base de données
      const { error } = await supabase.from("Rayan").insert([{
        nom: formData.nom.trim(),
        prenom: formData.prenom.trim(),
        num_tele: formData.num_tele,
        cin: formData.cin.trim(),
        email: formData.email.trim(),
        transport: formData.transport === 'oui' ? true : (formData.transport === 'non' ? false : null)
      }]);
      
      if (error) throw error;

      alert("✅ Réservation confirmée avec succès!");
      
      // Reset du formulaire
      setFormData({ nom: '', prenom: '', num_tele: '', cin: '', email: '', transport: '' });
      setErrors({});
    } catch (err) {
      console.error("ERREUR SUPABASE:", err);
      alert("❌ Erreur lors de la réservation. Veuillez réessayer.");
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
          <AnimatedInput 
            label="Nom" 
            name="nom" 
            value={formData.nom}
            onChange={handleChange}
            error={errors.nom}
          />
          <AnimatedInput 
            label="Prénom" 
            name="prenom" 
            value={formData.prenom}
            onChange={handleChange}
            error={errors.prenom}
          />
          <AnimatedInput 
            label="Téléphone" 
            name="num_tele" 
            value={formData.num_tele}
            onChange={handleChange}
            error={errors.num_tele}
            maxLength={10}
          />
          <AnimatedInput 
            label="Carte nationale (CIN)" 
            name="cin" 
            value={formData.cin}
            onChange={handleChange}
            error={errors.cin}
          />
          <AnimatedInput 
            label="Email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            type="email"
          />
          <div className="md:col-span-2 flex flex-col md:flex-row md:items-center gap-1 p-2 bg-gray-50/50 rounded-lg border border-gray-200/50 -mt-4">
            <label className="text-sm font-semibold text-gray-700 whitespace-nowrap">
              Vous voulez transport ?
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="transport"
                  value="oui"
                  checked={formData.transport === 'oui'}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-gray-700">Oui, je me transporte</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="transport"
                  value="non"
                  checked={formData.transport === 'non'}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-gray-700">Non, je ne veux pas transport</span>
              </label>
            </div>
          </div>
        </Motion.div>

        {/* Nouveau bouton stylisé */}
        <div className="flex justify-end gap-6">
          <button 
            className="button" 
            type="submit" 
            disabled={loading}
          >
            {loading ? "Envoi..." : "Let's go →"}
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
function AnimatedInput({ label, name, value, onChange, error, maxLength, type = "text" }) {
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
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required
          placeholder=" "
          maxLength={maxLength}
        />
        <label>{label}</label>
        {error && (
          <span className="absolute -bottom-5 left-0 text-xs text-red-500">
            {error}
          </span>
        )}
      </div>
    </Motion.div>
  );
}
