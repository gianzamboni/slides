---
layout: intro
title: Union type multiverse
transition: slide-left
---
# Union type multiverse

---
layout: two-cols
level: 2
title: Union de tipos y distributividad
transition: slide-left
---

::left::
<div class="row-start-1">
<h2>Unión de tipos</h2>
<p>Como ya vimos, la unión de tipos es un tipo que representa la unión de dos o más tipos.</p>
<p>Nos permiten modelar conjuntos de estados posibles de una variable.</p>
</div>

<div class="row-start-2" v-click="1">
<p><strong>Propiedad distributiva:</strong> Por defecto, la unión de tipos es distributiva sobre las operacione de literale de string, acceso a propiedades y sobre los condicionales.</p>

<p>Esto significa que si tenemos una unión de tipos, y aplicamos una operación de tipo a cada uno de los tipos de la unión, el resultado es una unión de los resultados de cada operación.</p>
</div>
::right::

<div class="row-start-1">
<h6>Conjuntos de estados</h6>
```ts {monaco}
export type DataState =
  | { status: "loading" }
  | { status: "success"; data: number }
  | { status: "error"; error: Error };

let state2: DataState = {
  status: "success",
  error: new Error("ooooops"), // ❌ does NOT type-check!
};
```
</div>
<div class="row-start-2" v-click="1">
<h6>Propiedad distributiva</h6>
```ts {monaco}
type T1 = `x ${"a" | "b" | "c"}`;
// <=>
type T2 = `x ${"a"}` | `x ${"b"}` | `x ${"c"}`;
```

<div v-click="2">
```ts {monaco}
type T1 = User["name" | "age"];
// <=>
type T2 = User["name"] | User["age"];
```
</div>
<div v-click="3">   
```ts {monaco} 
type IsString<T> = T extends string ? "yes" : "no";
type T1 = IsString<"a" | "b" | 2>;
// <=>
type T2 = IsString<"a"> | IsString<"b"> | IsString<2>;
```
</div>
</div>

---
transition: slide-left
layout: section
level: 2
title: Union de tipos y distributividad
---

<div>
<h6>Mapeo de tipos distributivo</h6>
```ts {monaco}

// El mapeo no es distributivo por default
type Duplicate<T> = [T, T];
type T1 = Duplicate<"a" | "b" | "c">; // => ["a" | "b" | "c", "a" | "b" | "c"]

// Podemos hacerlo distributivo usando un tipo condicional que siempre retorna true.
type DistributeDuplicate<U> = U extends unknown ? [U, U] : never;
type T2 = DistributeDuplicate<"a" | "b" | "c">; // => ["a", "a"] | ["b", "b"] | ["c", "c"]
```
</div>

<div v-click="1">
<h6>Filtro de elementos de una unión</h6>
```ts {monaco}
type FeedItem =
  | { type: "post"; content: string }
  | { type: "likedBy"; user: string; content: string }
  | { type: "followSuggestions"; users: string[] }
  | { type: "image"; src: string }
  | { type: "video"; src: string };

  type Filter<Union, Type> = Union extends { type: Type } ? Union : never;
  type ImagesOrVideos= Filter<FeedItem, "image" | "video">;
  // => { type: "image"; src: string } | { type: "video"; src: string }
```
</div>

---
transition: slide-left
layout: two-cols
level: 2
title: Cuando no funciona la distributividad
---

::left::

<div class="row-start-1">
<p>La distributividad de la unión de tipos no funciona en todas las situaciones.</p>
<p>No funciona en:</p>
<ul>
<li>Declaraciones inline</li>
<li>Cuando se usan como parámetros de tipo en una condición</li>
</ul>
</div>

<div class="row-start-2" v-click="1"> 
<p>Podemos aprovechar para esto para romper la distributividad cuando tenga sentido hacerlo.</p>
</div>

::right::
<div class="row-start-1 flex flex-col gap-2">
<div>
<h6>Declaración inline</h6>
```ts {monaco}
type X = (string | number) extends string ? true : false;
// => false
```
</div>
<div>
<h6>Uso como parámetros de tipo en una condición</h6>
```ts {monaco}
type IsString<T> = OrNumber<T> extends string ? true : false;
type OrNumber<T> = T | number;

type X = IsString<string>;
// => `false`
```
</div>
</div>

<div class="row-start-2" v-click="1">
<h6>Rompiendo la distributividad</h6>
```ts {monaco}
type Extends<A, B> = A extends B ? true : false;
type T = Extends<"a" | "b" | "c", "a" | "b">;
//  => `boolean` porque "a" y "b" son asignables a "a" | "b"
//      pero "c" no lo es.

type ExtendsWrapped<A, B> = [A] extends [B] ? true : false;
//                           👆
//         Al poner el tipo dentro de una tupla,
//              se rompe la distributividad.

type T1 = Extends<"a" | "b" | "c", "a" | "b">;
//  => `true`
```
</div>
---
transition: slide-left
layout: two-cols
level: 2
title: Funciones auxiliares
---

::left::
<div class="row-start-1">
<h2>Funciones auxiliares</h2>
</div>
<div class="row-start-2">
<p><strong>Extract:</strong> Se queda con todos los elementos de la unión que coincidan con el tipo especificado.</p>
</div>

<div class="row-start-3">
<p><strong>Exclude:</strong> Elimina todos los elementos de la unión que coincidan con el tipo especificado.</p>
</div>

::right::
<div class="row-start-2">
<h6>Extract</h6>
```ts {monaco}
type T1 = Extract<"a" | "b" | "c" | 1 | 2 | 3, number>;
// => 1 | 2 | 3
```
</div>
<div class="row-start-3">
<h6>Exclude</h6>
```ts {monaco}
type T2 = Exclude<"a" | "b" | "c" | 1 | 2 | 3, number>;
// => "a" | "b" | "c"
```
</div>