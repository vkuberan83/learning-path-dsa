# Arrays

The array data structure is one of the most commonly used data structures. Arrays are simple in design but highly reliable in practice, and are used in a wide variety of situations over any other data structure. However, they are not without their problems, which can sometimes adversely affect the system's performance. 

  * [Javascript](./arrays-in-javascript.md)
  * [PHP](./arrays-in-javascript.md)
  * [Python](./arrays-in-javascript.md)
  * [Rust](./arrays-in-javascript.md)

## What is an Array:
An array is a collection of elements that are all of the same data type and are stored in contiguous locations within memory. An array provides random access to elements through the use of an index, which is used to locate elements in an array.

<p align="center" width="100%">
<img src="../../images/arrays/array-of-integers.png" alt="array of integers">
</p>

## Where arrays are used?
Arrays are used in a wide variety of applications. It would take a long time to list all of them; I have just chosen a few to illustrate my point.
* **Storing and accessing sequential data:** An array can be used to store and access sequential data elements, such as movie or product ratings, stock prices, and employee records, etc.,
* **Sorting and Searching Algorithms:** The use of arrays is common in algorithms that involve sorting and searching information. In addition, the fact that they are indexed makes it possible to implement classic algorithms efficiently.
* **String Manipulation:** Strings are often represented as arrays of characters in programming languages. As a result, individual characters can be manipulated, accessed, and processed efficiently.
* **Lookup Tables and Caching:** For fast lookups, arrays are used, where the index corresponds to the key. Hash maps and caches are common examples of lookup tables that are implemented using arrays. 
* **Graphs and Trees (Adjacency Matrices):** Arrays can be used to represent graphs and tree structures, particularly for compact representations of connections between nodes.
* **Handling Multidimensional Data:** Arrays (often referred to as tensors or multidimensional arrays) are used to represent data with more than two dimensions in domains such as machine learning and scientific computing.

## Structure of Array

Arrays are finite collections of similar elements located adjacently in memory. Arrays containing n elements are referenced by indices ranging from 0 to n - 1. As an example, the elements of an array arr[n] containing n elements are denoted as arr[0], arr[1], arr[2], ...., arr[n-1], where 0 is the lower bound and n-1 is the upper bound. In this example, 0, 1, 2, etc., represent array indices.

<p align="center" width="100%">
<img src="../../images/arrays/array-indexs.png" alt="array of indexs">
</p>

An array can be operated upon in several different ways. The following tables provide a list of operations.

| **Operation** | **Description**                                                                                                                                                                                    | 
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Traversal** | Each element of the array is accessed and visited one by one, usually in a loop (e.g., for, while, or forEach).                                                                                    |
| **Insertion** | A new element is added at a specific position in the array. Some languages require resizing arrays if they are full.                                                                               |
| **Deletion**  | The removal of an element from an array may be followed by resizing the array or shifting remaining elements to maintain the order of the array.                                                   |
| **Searching** | Locating an element in an array by its index. Depending on whether the array is sorted, the search can be linear or binary.                                                                        |
| **Sorting**   | Rearranging the elements of an array in an ascending or descending order. In order to maximize efficiency, sorting algorithms such as **Bubble Sort**, **Merge Sort**, or **Quick Sort** are used. |
| **Merging**   | Combining two or more arrays into a single array.                                                                                                                                                  |
| **Reversing** | Reversing the order of the elements in the array, so that the last element becomes the first element and vice versa.                                                                               |
| **Filtering** | A new array is created with elements that satisfy a predicate function.                                                                                                                            |
| **Mapping**   | A new array is created by applying a function to each element of the original array.                                                                                                               |
| **Reducing**  | By repeatedly applying a function, all elements of an array are aggregated into a single value.                                                                                                    |

## Reading from Array

To read an individual element from an array we can choose the position we want to access via an index. In most programming languages, reading or accessing elements of an array involves retrieving the value at a specific index. 
An array (or list in Python) is an indexed data structure, so accessing any element by its index is usually an **O(1)** operation. 

Because each index of arr is mapped to a **RAM** address, accessing a single element in an array is always instant. In spite of the size of the input array, accessing a single element takes the same amount of time. In terms of time complexity, this operation is considered **O(1)**.

As shown in the image below, an array of integers is represented in memory in the following manner. A specific memory address is assigned to each element of the array, and these addresses increase in multiples of 4 because integers occupy four bytes on average. Additionally, the image shows that each array element has a pointer to its memory address (**ptr_**), and the array is stored consecutively in memory.
The visualization explains how arrays are stored in contiguous memory blocks, how memory addressing works, and how data type size affects memory allocation.

<p align="center" width="100%">
<img src="../../images/arrays/array-with-address-pointer.png" alt="reading values from the array">
</p>

## Insert Operation on Array
### <u>Insert at the End of the array</u>
We can insert an element at the end of the array by placing it in the next available position at the index equal to the array's current length, where the length represents the total number of elements in the array.
Inserting an element at the end of an array has a time complexity of **O(1)**, assuming that the array has sufficient capacity. This is because the insertion involves placing the new element at the next available index without needing to shift any existing elements.

<p align="center" width="100%">
<img src="../../images/arrays/insert-at-the-end-of-array.png" alt="insert at the end of array">
</p>

### <u>Insert at a given index in an array</u>

Whenever an element is inserted at a specific index in an array, the array's structure requires that all elements starting from that index onward must be shifted one position to the right. This shift is necessary to create an empty space at the specified index for the new element. For example, if we insert at index 2 in an array of 5 elements, the elements currently at indices 2, 3, 4, and 5 must all move one step right to indices 3, 4, 5, and 6 respectively.

#### **Time Complexity:**

* Time Complexity: **O(n)**, where n is the number of elements in the array.
  * In the worst case, if the element is inserted at the beginning of the array, all subsequent elements must be shifted, making the time complexity proportional to the size of the array.
  * On average, inserting an element anywhere other than the end requires shifting a portion of the array, so the overall complexity remains **O(n)**.

<p align="center" width="100%">
<img src="../../images/arrays/insert-at-an-index.png" alt="insert at an index">
</p>
