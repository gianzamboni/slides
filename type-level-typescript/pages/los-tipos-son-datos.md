---
title: Los tipos son datos
layout: intro
---
# Los tipos son datos

---
transition: slide-left
layout: two-cols
level: 2
title: Tipos básicos
---

::left::

<div class="row-start-1">
<h1>Tipos básicos</h1>
<p>TypeScript nos proporciona 5 categorías principales de tipos, los 3 más básicos son:</p>
<p v-click="1"><strong>Tipos primitivos:</strong> Son los tipos más comunes en la mayoria de los lenguajes de programación.</p>
</div>
<div class="row-start-2" v-click="2">
<p><strong>Tipos literales:</strong> Representan valores específicos y las variables que son de estos tipos no pueden tomar otro valor que no sea el especificado.</p>
</div>
<div class="row-start-3" v-click="3">
<p><strong>Estructura de datos:</strong> Son las estructuras de datos basicas como arrays, tuplas y objetos.</p>
</div>

::right::
<div class="row-start-1" v-click="1">
<h6>Tipos primitivos</h6>
```ts {monaco}
let num : number = 10.6;
let str : string = "Hello";
let bool: boolean = true;
let sym: symbol = Symbol("symbol");
let big : bigint = 10000n;
let undef : undefined = undefined;
let empty : null = null;
```
</div>
<div class="row-start-2" v-click="2">
<h6>Tipos literales</h6>
```ts {monaco}
let twenty: 20 = 20;
let hello: "Hello" = "Hello";
let trueValue: true = true;
let thousand: 10000n = 10000n;
```
</div>
<div class="row-start-3" v-click="3">
<h6>Estructura de datos</h6>
```ts {monaco}
const array = [1, 2, 3];
const tuple: [string, number] = ["Hello", 10];
const object = { name: "Gabriel", age: 20 };
```
</div>

---
transition: slide-left
layout: two-cols
level: 2
title: Los tipos son conjuntos
---
::left::

<div class="row-start-1" >
<h2>Los tipos son conjuntos</h2>
<p>Todos los tipos son conjuntos, dado dos tipos, uno puede contener al otro, se pueden superponer o ser disjuntos.</p>
<p>Además, podemos definir su intersección o unión como nuevos tipos.</p>
</div>

<div class="row-start-2" v-click="1">
  <p><strong>Unión de tipos:</strong> Representa la unión de dos tipos, el resultado es un tipo que puede ser de cualquiera de los dos tipos especificados.</p>
</div>

::right::
<div class="row-start-1 justify-items-center place-content-center h-50">
<img class="h-40 " src="../images/the-union-hierarchy.svg" alt="String sets" />
</div>
<div class="row-start-2" v-click="1">
<h6>Unión NUMBER | STRING</h6>
```ts {monaco}
let union: number | string;

union = 10;
union = "Hello";
union = true; // ❌
```
</div>

---
transition: slide-left
layout: two-cols
level: 2
title: Intersección de objectos
---

::left::
<div class="row-start-1" >
<h2>Intersección de tipos</h2>
<p>Representa la intersección de dos tipos, el resultado es un tipo que contiene los valores en común de los dos tipos intersecados.</p>
</div>

<div class="row-start-2" v-click="1">
<p><strong>Intersección de objetos:</strong> La intersección de dos tipos de objetos, es el conjunto que contiene todos las propiedades de ambos tipos.</p>
</div>

::right::
<div class="row-start-1">
<h6>Intersección de tipos</h6>
```ts {monaco}
type CanCross = "green" | "orange";
type ShouldStop = "orange" | "red";
type Intersection = CanCross & ShouldStop; // "orange"
```
</div>

<div class="row-start-2" v-click="1"> 
<h6>Intesección de objetos</h6>
```ts {monaco}
type WithName = { name: string };
type WithAge = { age: number };

function someFunction(input: WithName & WithAge) {
  input.name; // ✅ propiedad `name` es de tipo `string`
  input.age; // ✅ propiedad `age` es de tipo `number`
}
```
</div>
---
transition: slide-left
layout: two-cols
level: 2
title: Unknown & Never
---
::left::
<div class="row-start-1">
<h2>Unknown</h2>
  <p> Es el tipo más general posible, osea el tipo que contiene a todos los tipos.</p>
  <p>La union con <code>unknown</code> siempre será de tipo <code>unknown</code>.</p>
  <p>La intersección con <code>unknown</code> siempre dara el tipo intersectado con <code>unknown</code>.</p>
</div>
<div class="row-start-2 grid-row-span-full" v-click="1">
  <h2>Never</h2>
  <p> Es el tipo cuyo conjunto de valores es el conjunto vacío. Nunca va a tener valores.</p>
  <p>Es subtipo de todos los tipos, está contenido en todos los tipos.</p>
  <p>Una función que siempre lanza un error, siempre va a devolver <code>never</code>. </p>
  <p>La intersección con <code>never</code> siempre es <code>never</code>.</p>
</div>
::right::

<div class="row-start-1"> 
<h6>Unknown</h6>
```ts {monaco}
let something: unknown;

something = "Hello";          
something = 2;                
something = { name: "Alice" };
something = () => "?";

type Union = string | unknown; // unknown
type Intersection = string & unknown; // string
```
</div>
<div class="row-start-2" v-click="1">
<h6>Never</h6>
```ts {monaco}
function panic(): never {
  throw new Error("🙀");
}

const username: string = panic();
const age: number = panic();
const theUniverse: unknown = panic();

type Union = "Hi" | "Hello" | never; // "Hi" | "Hello"
type Intersection = "Hi" & never; // never

```
</div>

---
transition: slide-left
layout: two-cols
level: 2
title: Any
---

::left::
<div class="row-start-1">
<h2>Any</h2>
<p>Es un tipo que está por fuera de la jerarquia de tipos, es suubtipo y super tipo de todos los tipos.</p>
<p>Cualquier cosa unida o intersectada con <code>any</code> siempre sera de tipo <code>any</code>.</p>
<p>Es considerado mala practica usarlo porque basicamente deshabilita el chequeo de tipos.</p>
</div>
::right::
<div class="row-start-1">
<h6>Any</h6>
```ts {monaco}
let anything: any;

anything = "Hello";
anything = 2;
anything = { name: "Alice" };
anything = () => "?";

anything.toUpperCase(); 
// Typescript no se queja porque es de tipo any. 
// Pero toUpperCase es una función que solo existe 
// en el tipo string.
```
</div>
