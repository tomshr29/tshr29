import { contactValidator } from '#validators/contact'
import type { HttpContext } from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main'

export default class ContactController {
  render({ inertia }: HttpContext) {
    return inertia.render('contact')
  }

  async execute({ request, response }: HttpContext) {
    const payload = await request.validateUsing(contactValidator)

    await mail.send((m) => {
      m.from('no-reply@tshr29.com')
        .to('tom.scherer@tshr29.com')
        .replyTo(payload.email, payload.name)
        .subject('Nouveau message depuis formulaire de contact')
        .html(
          `Nom: ${payload.name}<br>Email: ${payload.email}<br>Message:<br>${payload.message.replaceAll('\n', '<br>')}`
        )
    })

    return response.redirect().back()
  }
}
