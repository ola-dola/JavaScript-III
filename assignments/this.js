/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding: the "this" keyword points to the global/window object when
    it is called in the global scope/namespace(i.e. outside of a function or an object).

  2. Implicit Binding: When the 'this' keyword is called in a method, it refers to
      refers to the parent object(the object that owns the method).

  3. New Binding: when a contructor function is called, the "this" keyword refers to the
    specific object(instance) that gets created from the call.

  4. Explicit Binding: If the ".call()", ".apply()", or ".bind()" is called on a function,
    the "this" refers to the parameters explicitly defined in the call.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// ---Example 1---
console.log(this);

//---Example 2---
function tunde() {
  console.log(this.external);
}

tunde();

// Principle 2

// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding