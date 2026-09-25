<script setup lang="ts">

import { ref } from 'vue'


const emit = defineEmits<{

  seleccionar: [contenido: string]

}>()


const menuActivo = ref('')


const abrirMenu = (menu: string) => {

  menuActivo.value = menu

}


const cerrarMenu = () => {

  menuActivo.value = ''

}


const seleccionar = (contenido: string) => {

  emit('seleccionar', contenido)

  menuActivo.value = ''

}

</script>


<template>

  <header class="header">


    <div
      class="titulo"
      @click="seleccionar('inicio')"
    >

      Mi Sitio: Demo

    </div>


    <nav class="menu">

      <button
        class="menu-item"
        @click="seleccionar('inicio')"
      >

        Inicio

      </button>

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
        >

          <button
            @click="seleccionar('constants')"
          >
            Constants
          </button>


          <button
            @click="seleccionar('object-literals')"
          >
            Object Literals
          </button>


          <button
            @click="seleccionar('header-component')"
          >
            HeaderComponent
          </button>


          <button
            @click="seleccionar('v-bind')"
          >
            Uso de v-bind
          </button>


          <button
            @click="seleccionar('importacion-exportacion')"
          >
            Importación y Exportación
          </button>

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
        >

          <button
            @click="seleccionar('recorrido-movies')"
          >
            Recorrido de movies
          </button>


          <button
            @click="seleccionar('recorrido')"
          >
            Recorrido
          </button>

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
        >

          <button
            @click="seleccionar('comp-array')"
          >
            Comp. tipo Array
          </button>


          <button
            @click="seleccionar('padre')"
          >
            Padre
          </button>

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
        >

          <button
            @click="seleccionar('example')"
          >
            Example
          </button>


          <button
            @click="seleccionar('about')"
          >
            About
          </button>

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

}



.menu {

  height: 100%;

  display: flex;

  align-items: center;

  gap: 35px;

}



.menu-item {

  height: 100%;

  border: none;

  background: transparent;

  color: #eeeeee;

  font-size: 16px;

  cursor: pointer;

  padding: 0;

  white-space: nowrap;

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


.submenu button {

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


.submenu button:hover {

  background-color: #666666;

}

</style>