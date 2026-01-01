import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

/**
 * Hook personnalisé pour gérer la logique de réservation
 */
export function useReservation() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    numero: '',
    carte_nationale: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    if (!formData.nom || !formData.prenom || !formData.numero || !formData.carte_nationale) {
      setError('Veuillez remplir tous les champs')
      return false
    }
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (validateForm()) {
      setShowConfirmation(true)
    }
  }

  const handleConfirm = async () => {
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const reservationData = {
        nom: formData.nom.trim(),
        prenom: formData.prenom.trim(),
        num_tele: formData.numero.trim(),
        cin: formData.carte_nationale.trim()
      }

      console.log('Envoi des données à Supabase:', reservationData)

      const { data, error: supabaseError } = await supabase
        .from('Rayan')
        .insert([reservationData])
        .select()

      if (supabaseError) {
        console.error('Erreur Supabase:', supabaseError)
        throw supabaseError
      }

      console.log('Données enregistrées avec succès:', data)

      setSuccess(true)
      setShowConfirmation(false)
      setFormData({ nom: '', prenom: '', numero: '', carte_nationale: '' })
      
      setTimeout(() => {
        navigate('/')
      }, 3000)

    } catch (err) {
      console.error('Erreur lors de l\'enregistrement:', err)
      
      let errorMessage = 'Une erreur est survenue lors de l\'enregistrement'
      
      if (err.code === 'PGRST116' || err.message?.includes('does not exist')) {
        errorMessage = 'La table "Rayan" n\'existe pas dans Supabase. Veuillez vérifier le nom de la table.'
      } else if (err.code === '42501' || err.message?.includes('permission denied')) {
        errorMessage = 'Permission refusée. Vérifiez les politiques RLS dans Supabase.'
      } else if (err.message) {
        errorMessage = err.message
      }
      
      setError(errorMessage)
      setShowConfirmation(false)
    } finally {
      setLoading(false)
    }
  }

  const handleEdit = () => {
    setShowConfirmation(false)
    setError('')
  }

  const resetForm = () => {
    setFormData({ nom: '', prenom: '', numero: '', carte_nationale: '' })
    setError('')
    setSuccess(false)
    setShowConfirmation(false)
  }

  return {
    formData,
    loading,
    error,
    success,
    showConfirmation,
    handleChange,
    handleSubmit,
    handleConfirm,
    handleEdit,
    resetForm,
    setError
  }
}









