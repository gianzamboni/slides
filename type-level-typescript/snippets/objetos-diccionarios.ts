// #region user-type-definition
type User = { 
  name: string, 
  age: number, 
  isAdmin: boolean 
};
// #endregion user-type-definition

// #region partial-type-definition
type PartialUser = Partial<User>;
// { name?: string, age?: number, isAdmin?: boolean }
// #endregion partial-type-definition

// #region alice-assignment
const alice: User = {
  name: "Alice",
  age: 20,
  isAdmin: false,
  bio: "..."
};
// #endregion alice-assignment

// #region bob-assignment
const bob: any = {
  name: "Bob",
  age: 21,
  isAdmin: true,
  bio: "..."
};
const bobUser: User = bob;
// #endregion bob-assignment
