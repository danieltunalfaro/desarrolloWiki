<script setup lang="ts">
    import { ref } from 'vue';
    import childComponent from './childrenComponent.vue';

    const mensaje = ref('Hola desde el padre');
    const mensaje2 = ref('Ejemplo de parámetro del padre al hijo');
    const mensaje3 = ref('');
    const numero=ref(10);
    const total= ref(0);

    //Función que recibe los datos del hijo
    function sumarAlTotal(valor: number, mensaje: string){
        total.value += valor;
        mensaje3.value = mensaje;
    }
</script>


<template>
    
    <p>Total: {{ total }}</p>
    <p>El valor del mensaje del hijo es: {{ mensaje3 }}</p>
    <!-- Pasamos los parámetros usando bind -->
    <!-- Incrementar interfiere como la función que se va a ejecutar dentro
     del hijo, es como si dicho parámtro sea el punto intermedio de comunicación
     entre el padre y el hijo-->

    <childrenComponent: titulo="mensaje":contador="numero"
    :mensaje2="mensaje2" @incrementar="sumarAlTotal" @texto=""/>

</template>


<style scoped>

</style>