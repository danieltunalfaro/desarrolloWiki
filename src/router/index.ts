import { createRouter, createWebHistory } from 'vue-router'

const routePlaceholder = { render: () => null }

const routes = [
  { path: '/', name: 'Inicio', component: routePlaceholder, meta: { contenido: 'inicio' } },
  { path: '/example', name: 'Example', component: routePlaceholder, meta: { contenido: 'example' } },
  { path: '/about', name: 'About', component: routePlaceholder, meta: { contenido: 'about' } },
  { path: '/arreglosimple', name: 'ArregloSimple', component: routePlaceholder, meta: { contenido: 'recorrido' } },
  { path: '/arraycomponent', name: 'arrayComponent', component: routePlaceholder, meta: { contenido: 'comp-array' } },
  { path: '/tipoPadre', name: 'tipoPadre', component: routePlaceholder, meta: { contenido: 'padre' } },
  { path: '/constants', name: 'constants', component: routePlaceholder, meta: { contenido: 'constants' } },
  { path: '/objectLiterals', name: 'objectLiterals', component: routePlaceholder, meta: { contenido: 'object-literals' } },
  { path: '/headerComponent', name: 'headerComponent', component: routePlaceholder, meta: { contenido: 'header-component' } },
  { path: '/usovbind', name: 'usovbind', component: routePlaceholder, meta: { contenido: 'v-bind' } },
  { path: '/arreglomovie', name: 'arreglomovie', component: routePlaceholder, meta: { contenido: 'recorrido-movies' } },
  { path: '/importacion', name: 'importacion', component: routePlaceholder, meta: { contenido: 'importacion-exportacion' } },
  { path: '/promesas', name: 'promesas', component: routePlaceholder, meta: { contenido: 'promesas' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router