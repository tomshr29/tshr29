import router from '@adonisjs/core/services/router'

const ContactController = () => import('#controllers/contact_controller')
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

const HealthChecksController = () => import('#controllers/health_checks_controller')

router.get('/health', [HealthChecksController]).use(({ request, response }, next) => {
  if (request.header('x-monitoring-secret') === 'some_secret_value') {
    return next()
  }
  response.unauthorized({ message: 'Unauthorized access' })
})
