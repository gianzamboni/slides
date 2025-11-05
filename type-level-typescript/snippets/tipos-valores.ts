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

type Tupla<A, B> = [A, B];

