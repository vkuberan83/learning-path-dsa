# Arrays in Javascript

In JavaScript, arrays store collections of elements, such as numbers, strings, objects, or even other arrays. Arrays are dynamic in nature and are capable of changing in size over time. It provides various methods for adding, removing, iterating, transforming, searching and manipulating elements. The following is an overview of JavaScript arrays, along with examples and key features.

## **Creating an Array:**

You can create an array in multiple ways. 

An array is typically created by assigning it to a variable, such as this:

```javascript
// Javascript
let sports = ["Cricket", "Football", "Rugby", "Tennis"];
```

```typescript
// Typescript
let sports: string[] = ["Cricket", "Football", "Rugby", "Tennis"];
```

The array can also be created using the array constructor

```javascript
// Javascript
let sports = new Array("Cricket", "Football", "Rugby", "Tennis");
```

```typescript
// Typescript
let sports: Array<string> = new Array("Cricket", "Football", "Rugby", "Tennis");
```

## Accessing Array Elements:

Elements are accessed using their index, which begins at 0. Indexes are used to access elements in an array. For example, to access the second element of an array, you would use the index 1. Indexes can be used to access elements in lists, strings, and other data structures.

```javascript
// Javascript and its same for the typescript too
let sports = ["Cricket", "Football", "Rugby", "Tennis"];
console.log(sports[0]); // prints Cricket
console.log(sports[2]); // prints Rugby
```