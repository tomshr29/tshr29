/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const BlogController = () => import('#controllers/blog_controller')
const ContactController = () => import('#controllers/contact_controller')

router.on('/').renderInertia('home')

router.get('/blog', [BlogController, 'render'])
router.get('/contact', [ContactController, 'render'])
router.post('/contact', [ContactController, 'sendMessage'])
