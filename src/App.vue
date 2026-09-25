<script setup lang="ts">

import { ref } from 'vue'

import HeaderComponent from './components/HeaderComponent.vue'
import HelloWorld from './components/HelloWorld.vue'
import HelloSnippet from './components/HelloSnippet.vue'
import ObjectLiterals from './components/ObjectLiterals.vue'
import fatherComponent from './components/fatherComponent.vue'

import { alumno, profesor } from './constants/people'

import './bases/functions.ts'


const contenidoActual = ref('inicio')

const cambiarContenido = (contenido: string) => {
  contenidoActual.value = contenido
}


const number = ref(0)

const addOne = () => {
  number.value++
}


const myId = 'coffe'

const myCondition = true

const condition2 = false


const movies = [
  'Lord of the Rings',
  'Star Wars',
  'Dune',
  'Batman'
]


const text = ref('')


const numberArray = [1, 2, 3, 4, 5]

numberArray.push(6)
numberArray.push(9)


const numberArrayAge = [
  20,
  25,
  22,
  35,
  40
] as const


const numberArrayAge2 = [...numberArray]

numberArrayAge2.push(43)


const numberxStringArray: (number | string)[] = [
  12,
  'Daniel',
  30,
  'Tun'
]

</script>


<template>

  <div class="pagina">

    <HeaderComponent
      @seleccionar="cambiarContenido"
    />

    <main class="contenido">

      <div v-if="contenidoActual === 'inicio'">

        <p>
          Bienvenido, selecciona una opción del menú para ver el contenido
          de la página.
        </p>

      </div>

      <div v-if="contenidoActual === 'constants'">

        <h2>Constants</h2>

        <h3>
          {{ alumno.lastName }}
        </h3>

        <h4>
          El profesor es: {{ profesor.lastName }}
        </h4>

      </div>


      <div v-if="contenidoActual === 'object-literals'">

        <h2>Object Literals</h2>

        <ObjectLiterals />

      </div>


      <div v-if="contenidoActual === 'header-component'">

        <h2>HeaderComponent</h2>

        <p>
          Este apartado muestra el componente HeaderComponent.
        </p>

      </div>



      <div v-if="contenidoActual === 'v-bind'">

        <h2>Uso de v-bind</h2>

        <h3
          class="title"
          :class="myCondition ? 'highlight' : 'red'"
        >
          Hola a todos
        </h3>


        <h3 class="nombre">
          Daniel Emmanuel Tun Alfaro
        </h3>


        <h2
          :id="myId"
          @click="addOne"
          class="numero"
        >
          El valor de la variable number es:
          {{ number }}
        </h2>


        <input
          v-model="number"
          type="number"
        />

      </div>


      <div v-if="contenidoActual === 'importacion-exportacion'">

        <h2>Importación y Exportación</h2>

        <HelloSnippet />

      </div>


      <div v-if="contenidoActual === 'recorrido-movies'">

        <h2>Recorrido de movies</h2>

        <p
          v-for="movie in movies"
          :key="movie"
        >
          {{ movie }}
        </p>

      </div>

      <div v-if="contenidoActual === 'recorrido'">

        <h2>Recorrido</h2>

        <h3>Recorrido con índice</h3>

        <div
          v-for="(movie, index) in movies"
          :key="movie"
        >

          {{ index + 1 }} - {{ movie }}

        </div>

      </div>


      <div v-if="contenidoActual === 'comp-array'">

        <h2>Comp. tipo Array</h2>

        <p>
          Ejemplo de arreglo numérico:
        </p>

        <p>
          {{ numberArray }}
        </p>


        <p>
          Arreglo de edades:
          {{ numberArrayAge }}
        </p>


        <p>
          Arreglo copiado:
          {{ numberArrayAge2 }}
        </p>


        <p>
          Arreglo de números y strings:
          {{ numberxStringArray }}
        </p>

      </div>


      <div v-if="contenidoActual === 'padre'">

        <h2>Padre</h2>

        <fatherComponent />

      </div>
      
      <div v-if="contenidoActual === 'example'">

        <h2>Example</h2>

        <p>
          Este es el ejemplo de una ruta.
        </p>

      </div>

      <div v-if="contenidoActual === 'about'">

        <h2>About</h2>

        <p>
          Información acerca de la página.
        </p>

      </div>
    </main>

  </div>

</template>


<style scoped>

.pagina {

  min-height: 100vh;

  background-color: #15151d;

  color: #d8d8d8;

}


.contenido {

  width: 90%;

  max-width: 980px;

  margin: 0 auto;

  padding: 10px;

}


.contenido h2 {

  color: white;

  margin-bottom: 20px;

}


.title {

  color: blueviolet;

}


.highlight {

  color: yellow;

}


.red {

  color: red;

}


.nombre {

  color: #cccccc;

}


.numero {

  cursor: pointer;

}


input {

  padding: 7px;

  margin-top: 10px;

}

</style>