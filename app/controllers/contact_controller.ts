import { emailValidator } from '#validators/email'
import type { HttpContext } from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main'

export default class ContactController {
  async render({ inertia }: HttpContext) {
    return inertia.render('contact')
  }

  public async sendMessage({ request }: HttpContext) {
    const { name, email, message } = await request.validateUsing(emailValidator)

    try {
      await mail.send((m) => {
        m.to('tomscherer29@gmail.com')
          .from('contact@tshr29.com')
          .replyTo(email)
          .subject('Information de contact')
          .htmlView('emails/verify_email', { name, email, message })
      })

      return 'Message envoyé avec succès !'
    } catch (error) {
      console.error("Erreur d'envoi d'email:", error.message) // Affiche le message d'erreur
      console.error('Stack trace:', error.stack) // Affiche le stack trace pour plus de détails
      return "Erreur lors de l'envoi du message."
    }
  }
}
