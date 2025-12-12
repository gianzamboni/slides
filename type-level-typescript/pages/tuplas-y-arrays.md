---
layout: intro
title: Tuplas y arrays
transition: slide-left
---
# Tuplas y arrays

---
transition: slide-left
layout: two-cols
level: 2
title: Tuplas
---

::left::
<div class="row-start-1">
<h1>Tuplas</h1>
<p>Son arreglos de tamaño fijo y conocido.</p>
<p>Cada elemento tiene un tipo específico y el orden de los elementos es importante.</p>
</div>

<div class="row-start-2" v-click="1">
<p><strong>Acceso a elementos</strong>: Se puede acceder al tipo de un determinado elemento de la tupla usando el índice del mismo.</p>
</div>
<div class="row-start-3" v-click="2">
<p><strong>Concatenación</strong>: Clásica operación de concatenación</p>
</div>
::right::

<div class="row-start-1">
<h6>Tupla</h6>
```ts {monaco}
type Empty = [];
type One = [number];
type Two = [number, string];
type Three = [number, string, number];
```
</div>

<div class="row-start-2" v-click="1">
<h6>Acceso a elementos</h6>
```ts {monaco}
type Tuple = [string, number, boolean];

type First = Tuple[0]; // string
type Second = Tuple[1]; // number

type FirstOrSecond = Tuple[0 | 1]; // string | number

type AllTypes = Tuple[number]; // string | number | boolean
```
</div>

<div class="row-start-3" v-click="2" >
<h6>Concatenación</h6>
```ts {monaco}
type Tuple1 = [ number, string ];
type Concatenated = [ boolean, ...Tuple1 ]; // [boolean, number, string]
//                              ^ operador de propagación
```
</div>

---
transition: slide-left
layout: section
level: 2
---

<div class="row-start-1">
<h6>Indices opcionales</h6>
```ts {monaco}
type OptTuple = [string, number?];
//                             ^ indice opcional!

const tuple1: OptTuple = ["Bob", 28]; // ✅
const tuple2: OptTuple = ["Bob"]; // ✅
const tuple3: OptTuple = ["Bob", undefined]; // ✅
//    ^ podemos también establecerlo explícitamente a `undefined`
```
</div>

---
transition: slide-left
layout: two-cols
level: 2
title: Arrays
---

::left::
<div class="row-start-1">
<h1>Arrays</h1>
<p>Son arreglos de tamaño desconocido. Todos sus elementos son del mismo tipo, aunque puede haber arrays de unión de tipos.</p>
</div>

<div class="row-start-2" v-click="1">
<p><strong>Extracción del tipo de un elemento</strong>: Se puede extraer el tipo de un elemento de un array usando el índice del mismo.</p>
</div>

<div class="row-start-3" v-click="2">
<p><strong>Mezclando array y tuplas</strong>: Podemos combinarlos y concatenarlos de distintas maneras para obtener nuevos tipos de arrays con formas específicas.</p>
</div>

::right::
<div class="row-start-1">
<h6>Arrays</h6>
```ts {monaco}
type Numeros = number[];
type Strings = string[];
type NumerosOStrings = (number | string)[];
```
</div>

<div class="row-start-2" v-click="1">
<h6>Extracción del tipo de un elemento</h6>
```ts {monaco}
type Array = string[];
type First = Array[number]; // number
```
</div>

<div class="row-start-3" v-click="2">
<h6>Mezclando array y tuplas</h6>
```ts {monaco}
// Array de strings que termina con un `!`
type Exclamation = [...string[], "!"];

// Array de strings que no está vacío
type NonEmpty = [string, ...string[]];

// Array de números que empieza y termina con un 0
type Padded = [0, ...number[], 0];

// Array de números que empieza con un 1 o un 2
type FrenchSocialSecurityNumber = [1 | 2, ...number[]];

```
</div>

---
transition: slide-left
layout: section
level: 2
title: Tuplas y funciones
---

<div>
<h6>Tuplas y funciones</h6>
```ts {monaco}
type UserTuple = [name: string, age?: number, ...addresses: string[]];

declare function createUser(...args: UserTuple): User;
declare function updateUser(user: User, ...args: UserTuple): User;

createUser("Gabriel", 29, "28 Central Ave", "7500 Greenback Ln");
createUser("Bob"); // ✅ `age` es opcional y addresses puede estar vacío.
createUser("Alice", 0, false); // ❌ el último argumento no es un `string`!
updateUser(user, "Alice", 0, "1 Street");
```
</div>