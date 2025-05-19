import router from '@adonisjs/core/services/router'

const ContactController = () => import('#controllers/contact_controller')
const LandingController = () => import('#controllers/landing_controller')

router.get('contact', [ContactController, 'render']).as('pages.contact')
router.post('contact', [ContactController, 'execute']).as('pages.contact.store')

router.get('/bg', async ({ inertia }) => {
  return inertia.render('bg')
})

router.get('faq', async ({ inertia }) => {
  return inertia.render('faq')
})

router.get('/', async ({ inertia }) => {
  return inertia.render('GSAP')
})

router.get('*', async ({ inertia }) => {
  return inertia.render('errors/not_found')
})
