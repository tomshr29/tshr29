/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '../css/app.css'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { Layout } from '~/components/Layout'
import.meta.glob(['../../resources/assets/**'])

const appName = import.meta.env.VITE_APP_NAME || 'T29'

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title} - ${appName}`,

  resolve: (name) => {
    return resolvePageComponent(`../pages/${name}.tsx`, import.meta.glob('../pages/**/*.tsx'))
  },

  setup({ el, App, props }) {
    const root = createRoot(el)
    root.render(
      <Layout>
        <App {...props} />
      </Layout>
    )
  },
})
