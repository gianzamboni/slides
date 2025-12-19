---
title: Template literals types
layout: intro
transition: slide-left
---
# Template literals types

---
transition: slide-left
layout: two-cols
level: 2
title: Template literals types
---

::left::

<div class="row-start-1">
<h2>Template literals types</h2>
<p>Nos permiten crear tipos de string que dependen de una expresión.</p>
<p>Se definen con comillas invertidas y se pueden interpolar variables con `${}`.</p>
<p>Nos pueden ayudar a chequear patrones de string con tipos.</p>
</div>


::right::
<div class="row-start-1" style="display: flex; flex-direction: column; gap: 1rem;">
<div>
<h6>Concatenación de tipos</h6>
```ts {monaco}
type FirstName = "Albert";
type LastName = "Einstein";

type Name = `${FirstName} ${LastName}`; // <- template literal ✨type✨!
//    ^? => "Albert Einstein"
```
</div>

<div v-click="1">
<h6>Literales de números a literales de string</h6>
```ts {monaco}
type Index = 20;

type Accessor = `users[${Index}].isAdmin`;
// => "users[20].isAdmin"
```
</div>

<div v-click="2">
<h6>Chequeo de patrones de string</h6>
```ts {monaco}
type LocalDomain = `localhost:${number}`;
declare function ping(localDomain: LocalDomain): void;

ping("localhost:3000"); // ✅
ping("localhost:8080"); // ✅
ping("localhost:three-thousand"); // ❌
```
</div>
</div>

---
transition: slide-left
layout: section
level: 2
title: Unión y funciones auxiliares
---

<div>
<h6>Template literals y uniones de tipos</h6>
```ts {monaco}
type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";

type ButtonStyle = `${Variant}-${Size}`;
// => | "primary-sm"   | "primary-md"   | "primary-lg"
//    | "secondary-sm" | "secondary-md" | "secondary-lg"
// Genera todos los posibles combinaciones de Variant y Size.
```
</div>

<div v-click="1">
<h6>Funciones auxiliares</h6>
```ts {monaco}
type T1 = Uppercase<"hello">;
// => "HELLO"

type T2 = Lowercase<"HELLO">;
// => "hello"

type T3 = Capitalize<"hello, world!">;
// => "Hello, world!"

type T4 = Uncapitalize<"helloWorld">;
// => "helloWorld"
```
</div>

---
transition: slide-left
layout: section
level: 2
title: Template literals types
---

<div>
<h6>Pattern matching con template literals types</h6>
```ts {monaco}
type NameTuple<T> = T extends `${infer FirstName} ${infer LastName}` ? [FirstName, LastName] : never;

type T1 = NameTuple<"Albert Einstein">;
// => ["Albert", "Einstein"]

type T2 = NameTuple<"JohnDoe">;
// => never
```
</div>
<div v-click="1">
```ts {monaco}
type SplitString<T> = T extends `${infer First}${infer Rest}` ? [First, Rest] : never;

type T1 = SplitString<"Albert Einstein">;
// => ["A", "lbert Einstein"]

type T2 = SplitString<"JohnDoe">;
// => ["J", "ohnDoe"]
```
</div>

