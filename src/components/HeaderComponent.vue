<script setup lang="ts">

import { ref } from 'vue'

const menuActivo = ref('')


const abrirMenu = (menu: string) => {

  menuActivo.value = menu

}


const cerrarMenu = () => {

  menuActivo.value = ''

}


</script>


<template>

  <header class="header">


    <RouterLink class="titulo" :to="{ name: 'Inicio' }">

      Mi Sitio: Demo

    </RouterLink>


    <nav class="menu">

      <RouterLink class="menu-item" :to="{ name: 'Inicio' }">

        Inicio

      </RouterLink>

      <div
        class="dropdown"
        @mouseenter="abrirMenu('contenido')"
        @mouseleave="cerrarMenu"
      >

        <button class="menu-item">

          Contenido ▾

        </button>


        <div
          v-if="menuActivo === 'contenido'"
          class="submenu"
          @click="cerrarMenu"
        >

          <RouterLink :to="{ name: 'constants' }">
            Constants
          </RouterLink>


          <RouterLink :to="{ name: 'objectLiterals' }">
            Object Literals
          </RouterLink>


          <RouterLink :to="{ name: 'headerComponent' }">
            HeaderComponent
          </RouterLink>


          <RouterLink :to="{ name: 'usovbind' }">
            Uso de v-bind
          </RouterLink>


          <RouterLink :to="{ name: 'importacion' }">
            Importación y Exportación
          </RouterLink>


          <RouterLink :to="{ name: 'promesas' }">
            promesas
          </RouterLink>

        </div>

      </div>

      <div
        class="dropdown"
        @mouseenter="abrirMenu('arreglos')"
        @mouseleave="cerrarMenu"
      >

        <button class="menu-item">

          Arreglos ▾

        </button>


        <div
          v-if="menuActivo === 'arreglos'"
          class="submenu"
          @click="cerrarMenu"
        >

          <RouterLink :to="{ name: 'arreglomovie' }">
            Recorrido de movies
          </RouterLink>


          <RouterLink :to="{ name: 'ArregloSimple' }">
            Recorrido
          </RouterLink>

        </div>

      </div>

      <div
        class="dropdown"
        @mouseenter="abrirMenu('componentes')"
        @mouseleave="cerrarMenu"
      >

        <button class="menu-item">

          Componentes ▾

        </button>


        <div
          v-if="menuActivo === 'componentes'"
          class="submenu"
          @click="cerrarMenu"
        >

          <RouterLink :to="{ name: 'arrayComponent' }">
            Comp. tipo Array
          </RouterLink>


          <RouterLink :to="{ name: 'tipoPadre' }">
            Padre
          </RouterLink>

        </div>

      </div>

      <div
        class="dropdown"
        @mouseenter="abrirMenu('rutas')"
        @mouseleave="cerrarMenu"
      >

        <button class="menu-item">

          Rutas ▾

        </button>


        <div
          v-if="menuActivo === 'rutas'"
          class="submenu"
          @click="cerrarMenu"
        >

          <RouterLink :to="{ name: 'Example' }">
            Example
          </RouterLink>


          <RouterLink :to="{ name: 'About' }">
            About
          </RouterLink>

        </div>

      </div>

    </nav>

  </header>

</template>


<style scoped>

.header {

  height: 52px;

  background-color: #29445c;

  display: flex;

  align-items: center;

  padding: 0 16px;

  box-sizing: border-box;

}


.titulo {

  color: #aeb8c2;

  font-size: 16px;

  margin-right: 50px;

  cursor: pointer;

  white-space: nowrap;

  text-decoration: none;

}



.menu {

  height: 100%;

  display: flex;

  align-items: center;

  gap: 35px;

}



.menu-item {

  display: flex;

  align-items: center;

  height: 100%;

  border: none;

  background: transparent;

  color: #eeeeee;

  font-size: 16px;

  cursor: pointer;

  padding: 0;

  white-space: nowrap;

  text-decoration: none;

}


.menu-item:hover {

  color: white;

}



.dropdown {

  height: 100%;

  position: relative;

  display: flex;

  align-items: center;

}



.submenu {

  position: absolute;

  top: 52px;

  left: -5px;

  min-width: 160px;

  background-color: #777777;

  border: 1px solid #aaaaaa;

  z-index: 1000;

}


.submenu a {

  display: block;

  width: 100%;

  border: none;

  background-color: #777777;

  color: white;

  text-align: left;

  font-size: 16px;

  padding: 7px 10px;

  cursor: pointer;

}


.submenu a:hover {

  background-color: #666666;

}

</style>