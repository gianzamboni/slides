---
title: Objetos y diccionarios
layout: intro
transition: slide-left
---
# Objetos y diccionarios

---
transition: slide-left
layout: two-cols
level: 2
title: Objetos
---

::left::

<div class="row-start-1" >
<h2>Objetos</h2>
<p>Son conjuntos de objetos de Javascript.</p>
<p>Cada porpiedad está indexada por una clave única y puede ser de cualquier tipo.</p>
</div>

<div class="row-start-2" v-click="1">
<p><strong>Creación de objetos</strong>: Cuando creamos un objeto inline, Typescript no deja que tenga propiedades que no fueron declaradas en la definición del tipo. </p>
</div>

<div class="row-start-3" v-click="2">
<p><strong>Asignación de valores</strong>: Podemos asignar valores que ya existen, incluso si tienen más propiedades que las definidas. En este caso, las propiedades que no fueron definidas en el tipo dejan de ser accesibles.</p>
</div>

::right::

<div class="row-start-1" >
<h6>Tipo User</h6>
```ts {monaco}
type User = { 
  name: string, 
  age: number, 
  isAdmin: boolean 
};
```
</div>

<div class="row-start-2" v-click="1">
<h6>Creación de objetos</h6>
```ts {monaco}
const alice: User = {
  name: "Alice", age: 20,
  isAdmin: false,
  bio: "..."
}; // ❌
```
</div>
<div class="row-start-3" v-click="2">
<h6>Asignación de valores</h6>
```ts {monaco}
const pedro =  {
  name: "Pedro", age: 20,
  isAdmin: false,
  bio: "..."
}

const pedroUser: User = pedro; // ✅
pedroUser.bio // ❌
```
</div>  

---
transition: slide-left
layout: section
level: 2
---

<div>
<h6>Tipo {}</h6>
```ts {monaco}
let objeto: {};  // Puede tener cualquier valor salvo null o undefined.
objeto = { name: "Gabriel", age: 20 };
objeto = [1, 2, 3];
objeto = "Hola";
objeto = 10;
objeto = null; // ❌
objeto = undefined; // ❌
```
</div>

<div v-click="1">
<h6>Tipo object:</h6>
```ts {monaco}
let objeto: object; // Puede ser cualquier valor que no sea primitivo.
objeto = { name: "Gabriel", age: 20 };
objeto = [1, 2, 3];
objeto = null; // ❌
objeto = "Hola"; // ❌
objeto = 10; // ❌
```
</div>

<div v-click="2">
<h6>Keyof</h6>
```ts {monaco}
// Devuelve una unión con las propiedades de un objeto.
type User = { name: string, age: number, isAdmin: boolean };
type UserKeys = keyof User; // 'name' | 'age' | 'isAdmin'
```
</div>

---
transition: slide-left
layout: two-cols
level: 2
---

::left::

<div class="row-start-1" >
<h2>Acceso a propiedades</h2>
<p>Podemos acceder a las propiedades de un objeto usando la notación de corchetes y el nombre de una propiedad. Esto nos devuelve el tipo de la propiedad.</p>
<p>También podemos pasar una unión de propiedades para acceder a múltiples propiedades simultaneamente.</p>
</div>

<div class="row-start-2" v-click="1">
<h2>Propiedades opcionales</h2>
<p>Tener propiedades en un objeto que pueden ser de algún tipo o estar indefinidas es muy común. Si en typescript declaramos un tipo con una propiedad usando la unión de ese tipo con undefined, nos obliga a escribir explícitamente la propiedad en el objeto cada vez que lo creamos.</p>

<p>Para evitar esto, existe el operador <code>?</code> que nos permite marcar una propiedad como opcional.</p>

</div>

::right::

<div>
<h6>Acceso a propiedades:</h6>
```ts {monaco}
type Name = User['name']; // string
type Age = User['age']; // number

// Acceso a múltiples propiedades simultaneamente
type NameOrAge = User['name' | 'age']; // string | number
```
</div>

<div v-click="1">
<h6>Propiedades opcionales</h6>
```ts {monaco}
type User = { name: string, gender: 'f' | 'm' | undefined };
type User2 = { name: string, gender?: 'f' | 'm' };

const user: User = { name: "Alice", gender: undefined };
// ✅ La propiedad `gender` es undefined 

const user: User = { name: "Alice" }; 
// ❌ No tiene la propiedad `gender`

const user3: User2 = { name: "Alice" }; 
// ✅ La propiedad `gender` opcional

```
</div>

---
transition: slide-left
layout: two-cols
level: 2
---

::left::

<div class="row-start-1" >
<h2>Intersección y unión de objetos</h2>
<p><strong>Intresección de objetos:</strong> La intersección de dos tipos de objetos, es el conjunto que contiene todos las propiedades de ambos tipos.</p>
<p>Si ambos objetos tienen propiedades con el mismo nombre, también se aplica la interesección a las mismas.</p>
</div>

<div class="row-start-2" v-click="1">
<p><strong>Unión de objetos:</strong> La unión de dos tipos de objetos, es el conjunto que contiene todas las propiedades de ambos tipos.</p>
</div>

::right::
<div class="row-start-1" >
<h6>Intresección de objetos</h6>
```ts {monaco}
type WithName = { name: string };
type WithAge = { age: number };
type WithRole = { isAdmin: boolean };
type WithAge2 = { age: string };

type User = WithName & WithAge & WithRole; 
// { name: string, age: number, isAdmin: boolean }

type Organization = WithName & WithAge;
// { name: string, age: number }

type WithAges = WithAge & WithAge2;
// { age: number & string } <=> { age: never }
```
</div>

<div class="row-start-2"  v-click="1">
<h6>Unión de objetos</h6>
```ts {monaco}
type A = { a: string, c: boolean };
type B = { b: number, c: boolean };

type C = A | B; // { c: boolean }
```
</div>

---
transition: slide-left
layout: two-cols
level: 2
title: Diccionarios
---
::left::
<div class="row-start-1" >
<h2>Diccionarios</h2>
<p>Son objetos cuyas propiedades son todas del mismo tipo.</p>
</div>


::right::
<div class="row-start-1" >
<h6>Diccionarios</h6>
```ts {monaco}
type RecordOfBooleans = { [key: string]: boolean };
type RecordOfNumbers = Record<string, number>;
type InputState = Record<
  "valid" | "edited" | "focused", 
  boolean
>;

const booleanos: RecordOfBooleans = {
  a: true,
  b: false,
  c: true,
};

const numbers: RecordOfNumbers = {
  a: 1,
  b: 2,
  c: 3,
};

const inputState: InputState = {
  valid: true,
  edited: false,
  focused: true,
};
```
</div>

---
transition: slide-left
layout: two-cols
level: 2
title: Funciones auxiliares
---

::left::

<div class="row-start-1" >
<h2>Funciones auxiliares</h2>
<p><strong>Partial:</strong> Convierte todas las propiedades de un tipo en opcionales.</p>
</div>

<div class="row-start-2" v-click="1">
<p><strong>Required:</strong> Convierte todas las propiedades de un tipo en requeridas.</p>
</div>

<div class="row-start-3" v-click="2">
<p><strong>Pick:</strong> Extrae un subconjunto de propiedades de un tipo.</p>
</div>

<div class="row-start-4" v-click="3">
<p><strong>Omit:</strong> Omite un subconjunto de propiedades de un tipo.</p>
</div>

::right::

<div class="row-start-1" >
<h6>Partial</h6>
```ts {monaco}
type User = { name: string, age: number, isAdmin: boolean };
type PartialUser = Partial<User>;
// { name?: string, age?: number, isAdmin?: boolean }
```
</div>

<div class="row-start-2" v-click="1">
<h6>Required</h6>
```ts {monaco} 
type RequiredUser = Required<PartialUser>;
// { name: string, age: number, isAdmin: boolean }
```
</div>

<div class="row-start-3" v-click="2">
<h6>Pick</h6>
```ts {monaco}
type PickUser = Pick<User, 'name' | 'age'>;
// { name: string, age: number }
```
</div>

<div class="row-start-4" v-click="3">
<h6>Omit</h6>
```ts {monaco}
type OmitUser = Omit<User, 'isAdmin'>;
// { name: string, age: number }
```
</div>