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
title: Branching con tipos condicionales
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

const gabriel = createUser("Gabriel"); // Gabriel es de tipo { name: "Gabriel" }
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

