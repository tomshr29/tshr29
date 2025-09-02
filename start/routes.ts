import router from '@adonisjs/core/services/router'

const HomeController = () => import('#controllers/home_controller')
const ContactController = () => import('#controllers/contact_controller')

router.get('/', [HomeController, 'index'])

router.get('contact', [ContactController, 'render'])
router.post('contact', [ContactController, 'execute'])

router.get('*', async ({ inertia }) => {
  return inertia.render('errors/not_found')
})
