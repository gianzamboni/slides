/* eslint-disable no-console */
namespace js {
// #region without-types
function agrupar(a, b) {
  return [a, b];
}
// #endregion without-types

}

// #region agrupar-types
function agrupar<A, B>(a: A, b: B): Tupla<A, B> {
  return [a, b];
}
// #endregion agrupar-types

// #region tupla-type-definition
// Función de tipo, toma dos parámetros de tipo.
// Devuelve el tipo tupla con un primer elemento de tipo A 
// y un segundo elemento de tipo B:
type Tupla<A, B> = [A, B]
// #endregion tupla-type-definition

// #region name-assignment
let name: string = "Gabriel";
// name es de tipo string
console.log(name);
// #endregion name-assignment