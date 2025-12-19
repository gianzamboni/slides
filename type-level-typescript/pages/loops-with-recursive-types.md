---
layout: intro
title: Loops con tipos recursivos
transition: slide-left
---
# Loops con tipos recursivos

---
transition: slide-left
layout: section
level: 2
---

<div>
<h6>Loops sobre tuplas</h6>
```ts {monaco}
// Recorre la tupla y devuelve true si todos los elementos son de tipo number.
type AllNumbers<T> = T extends [infer First, ...infer Rest] ? 
    // First es un numero ? Recorre el resto de la tupla, sino devuelve false.
    First extends number ? AllNumbers<Rest> : false
    // La tupla está vacía, devuelve true.
    : true;
```
</div>

<div v-click="1">
<h6>Mapeo de tipos</h6>
```ts {monaco}
type Names = ToNames<[
  { id: 1; name: "Alice" },
  { id: 2; name: "Bob" }
]>; // => ["Alice", "Bob"]

type GetName<T> = T extends { name: infer Name } ? Name : never;

type ToNames<List> =
  List extends [infer First, ...infer Rest]
    ? [GetName<First>, ...ToNames<Rest>]
    : [];
```
</div>

---
transition: slide-left
layout: section
level: 2
title: Parámetros de tipo opcionales
---


<div>
<h6>Parámetros de tipo opcionales</h6>
```ts {monaco}
// La función crea un diccionario con las propiedades de la tupla T y el tipo K.
type ToDict<T extends string[], K, U = {}> =    
// El parámetro U es opcional y por defecto es un objeto vacío.
    T extends [infer First extends string, ...infer Rest extends string[]] 
    // Si T es una tupla no vacía, se crea un diccionario con la propiedad First y el tipo K.
    ? ToDict<Rest, K, { [F in First]: K } & U> 
    // Si T es una tupla vacía, se devuelve el objeto U.
    : U;

// Notar que cuando declaramos First y Rest, tenemos que volver a explicitar las restriciones de tipo.

type DictString = ToDict<["name", "age", "isAdmin"], string>; 
// U no es necesario especificarlo, por defecto es un objeto vacío.
// => { name: string, age: string, isAdmin: string }

type DictNumber = ToDict<["name", "age", "isAdmin"], number, { address: string }>; 
// U es un objeto con la propiedad name de tipo string.
// => { name: string, age: number, isAdmin: number , address: string }
```
</div>