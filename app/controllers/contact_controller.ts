import type { HttpContext } from '@adonisjs/core/http'

export default class ContactController {
  async render({ inertia }: HttpContext) {
    return inertia.render('contact')
  }
}
