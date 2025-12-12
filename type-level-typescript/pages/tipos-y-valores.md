---
title: Tipos y valores
layout: intro
transition: slide-left
---
# Tipos y valores

---
transition: slide-left
layout: two-cols
---

::left::
<div class="row-start-1">
<h1>Tipos y valores</h1>
<p><strong>Lenguaje de valores</strong>: Código que se ejecuta en producción y realiza tareas útiles para los usuarios.</p>
<p v-click="1"><strong>Lenguaje de tipos</strong>: Lenguaje funcional puro para anotar nuestro código.</p>
</div>

<div class="row-start-2" v-click="2">
<p>
<strong>Funciones de tipo</strong>: Son todas las declaraciones de tipo que vamos a escribir.
</p>
<p>
</p>
</div>

<div class="row-start-3" v-click="3">
<p>
<strong>Inferencia de tipo</strong>: Typescript puede inferir el tipo de una variable o función en base al contexto.
</p>
</div>

::right::
<div class="row-start-1 place-content-center">
<h6>Función de valores <span v-click="1" class="text-xs">con notaciones de tipo</span></h6>
````md magic-move
<<< @/snippets/tipos-valores.ts#without-types
<<< @/snippets/tipos-valores.ts#agrupar-types
````
</div>
<div class="row-start-2" v-click="2">
<h6>Función de tipo</h6>
```ts {monaco}
// Función de tipo, toma dos parámetros de tipo.
// Devuelve el tipo tupla con un primer elemento de tipo A 
// y un segundo elemento de tipo B:
type Tupla<A, B> = [A, B]
```
</div>

<div class="row-start-3 place-content-center" v-click="3">
<h6>Inferencia de tipo</h6>
```ts {monaco}
let name = "Gabriel";
// name es de tipo string
```
</div>
