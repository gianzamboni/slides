---
layout: intro
title: Branching con tipos condicionales
transition: slide-left
---
# Branching con tipos condicionales

---
transition: slide-left
layout: two-cols
level: 2
---

::left::
<div class="row-start-1">
<h1>Branching con tipos condicionales</h1>
<p>Los tipos condicionales son una forma de escribir tipos que dependen de una condición.</p>
<p>Antes del signo de interrogación siempre se escribe una condición de la forma <code>T extends U</code>.</p>
<p></p>

<p><strong>extends</strong> es una palabra reservada que se usa para indicar que un tipo debe ser un subconjunto de otro.</p>
</div>

<div class="row-start-2" v-click="1">
<h2>Restricciones de tipo</h2>
<p>Nos permiten asegurar que los parámetros de tipo cumplen con ciertas condiciones.</p>
<p>Y también nos pueden servir para que typescript infiera de manera más específica el tipo de un parámetro de tipo.</p>
</div>
::right::

<div class="row-start-1">
<h6>Tipo condicional</h6>
```ts {monaco}
type IsNumber<A> = A extends number ? true : false;
/*                 ----------------   ----   -----
                      ^               /         \
                 condition          rama        rama
                                    verdadera   falsa
          
                   \---------------------------------/
                                ^
                            Conditional Type
*/
```
</div>

<div class="row-start-2" v-click="1"    >
<h6>Restricciones de tipo</h6>
```ts {monaco}
function createUser<S extends string>(name: S): { name: S } {
  return { name };
}

const gabriel = createUser("Gabriel"); 
// gabriel es de tipo { name: "Gabriel" }
```
</div>

---
transition: slide-left
layout: section
level: 2
---

<div>
<h6>Condiciones anidadas</h6>
```ts {monaco}
type GetColor<Index> =
    Index extends 0 ? "black"
  : Index extends 1 ? "cyan"
  : Index extends 2 ? "magenta"
  : "white";
```
</div>

<div v-click="1">
<h6>Simulación de Switch</h6>
```ts {monaco}
type GetColor<Index extends 0 | 1 | 2 | 3> = {
  0: "black";
  1: "cyan";
  2: "magenta";
  3: "white";
}[Index];
```
</div>

<div v-click="2">
<h6>Pattern matching</h6>
```ts {monaco}
type IsUser<T> = T extends { name: string; age: number } ? true : false;

type T1 = IsUser<{ name: "Gabriel" }> // => false
type T2 = IsUser<{ name: "Alice", age: 32 }> // => true
```
</div>

---
transition: slide-left
layout: section
level: 2
---

<div>
<h6>Branching en simultaneo</h6>
```ts {monaco}
type And<A extends boolean, B extends boolean> = [A, B] extends [true, true] ? true : false;

type BothTrue = And<true, true>; // => true
type OneTrue = And<true, false>; // => false
type BothFalse = And<false, false>; // => false
```
</div>

---
transition: slide-left
layout: two-cols
level: 2
title: infer keyword
---

::left::

<div class="row-start-1">
<h2>infer keyword</h2>
<p>El keyword <code>infer</code> nos permite declarar una variable de tipo dentro de un tipo condicional.</p>
<p>Se usa dentro de una destructuración de tipo.</p>
<p>La variable de tipo declarada puede ser usada en la rama verdadera del tipo condicional.</p>
<p>No es accesible desde la rama falsa.</p>
</div>

::right::

<div class="row-start-1" style="display: flex; flex-direction: column; gap: 1rem;">
<div>
<h6>infer keyword en objetos</h6>
```ts {monaco}
type GetRole<User> = 
  User extends { name: string; role: infer Role }
    ? Role // Asignamos a la variable Role el tipo de la propiedad role del objeto User.
    : never;

type T1 = GetRole<{ name: "Gabriel"; role: string }>;
// => string
```
</div>

<div v-click="1">
<h6>infer keyword en tuplas</h6>
```ts {monaco}
type First<Tuple> = Tuple extends [infer First, ...any[]]
    ? First // Asignamos a la variable First el tipo del primer elemento de la tupla.
    : never;

type T1 = First<[number, string, boolean]>;
// => number
```
</div>

<div v-click="2">
<h6>infer keyword en parámetros de tipo</h6>
```ts {monaco}
type PromiseType<P> = P extends Promise<infer Type> 
  ? Type 
  : never;

type T1 = PromiseType<Promise<string>>; // => string
```
</div>
</div>
