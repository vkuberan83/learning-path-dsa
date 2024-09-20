# Learning Path - Data Structure and Algorithms

## Data Structure
The term **"data structure"** refers to a system of organizing and storing data so that it can be accessed and used efficiently by a computer. There are various types of data structures, and some are highly specialized to perform specific functions. In addition to enabling the storage of data, data structures also provide efficient algorithms for performing various operations on the data (**insertion, deletion, traversal, search, etc.**).

### Types of data structures

1. **Primitive Data Structures:** These are the basic data structures that operate directly on the machine instructions.
    * **Integer**: Represents numerical values. 
    * **Float**: Represents floating-point values. 
    * **Character**: Represents single characters (e.g., ‘A’, ‘B’, ‘1’). 
    * **Boolean**: Represents truth values (True/False).


2. **Non-Primitive Data Structures:** These data structures are more complex than primitive data types and are derived from them.
   * **Arrays:** An array consists of a collection of elements of the same type, stored in contiguous memory locations. Arrays are usually fixed in size and can be accessed by index in most programming languages. 
      * [More on Arrays](./docs/arrays/arrays.md)
   * **Linked Lists:** A linked list is a linear collection of data elements in which each element points to the next. The size of linked lists is dynamic. 
   * **Stacks:** A stack is a linear data structure based on the Last In First Out (LIFO) principle. As a rule of thumb, the last element added to the list is the first one to be removed. 
   * **Queues:** A linear data structure based on the First In First Out (FIFO) principle. The first element added is the first to be removed. 
   * **Trees:** Hierarchical data structures consisting of nodes connected by edges. The top node is called the root, and each node can have zero or more children. 
   * **Graphs:** A collection of nodes (vertices) and edges (connections between nodes). It can be directed or undirected, weighted or unweighted. 
   * **Hash Tables (Hash Maps):** A data structure that provides efficient lookup by mapping keys to values using a hash function.

### <u>Operations on Data Structures:</u>

* **Insertion:** Adding an element to a data structure. 
* **Deletion:** Removing an element from a data structure. 
* **Traversal:** Accessing and processing each data structure element. 
* **Searching:** Finding a particular element in the data structure. 
* **Sorting:** Arranging elements in a specific order (ascending/descending).

## Algorithms

An **algorithm** is a step-by-step procedure or a set of rules that must be followed by a computer in order to perform calculations or solve problems. An algorithm is a blueprint for performing specific tasks in the most efficient manner.

### Characteristics of Algorithms:

* **Input:** Algorithms require one or more inputs (data to be processed). 
* **Output:** At least one output is produced by an algorithm. 
* **Definiteness:** Each step must be clearly defined. 
* **Finiteness:** Algorithms must terminate after a finite number of steps. 
* **Effectiveness:** Each step of the algorithm should be simple and feasible.

## Types of Algorithms:

### 1. Search Algorithms:
   * **Linear Search:** The elements are checked sequentially until the desired value is found or the list is exhausted. 
   * **Binary Search:** The search space is repeatedly divided in half in order to perform a binary search on sorted arrays. 
   
      **Time complexity:** **_O(log n)_**.

### 2. Sorting Algorithms:
   * **Bubble Sort:** It is a method that repeatedly steps through a list, compares adjacent elements, and swaps them if they are in the wrong order.
   * **Quick Sort:** Divides the list into smaller sub-lists (based on a pivot element) and recursively sorts the sub-lists.
   * **Merge Sort:** Splits the list into two halves, sorts each half, and then merges them.
   * **Insertion Sort:** Sorts the array one element at a time by comparing it with the already sorted part.
   * **Heap Sort:** Sorts by repeatedly extracting the maximum element from a heap data structure.

### 3. Dynamic Programming:

   The process of solving problems by breaking them down into smaller sub-problems and storing the results of the sub-problems in order to avoid redundant computations.
   * **Example:** Fibonacci sequence, where previously calculated values are stored to avoid recalculations.

### 4.Greedy Algorithms:
   Algorithms that try to find the best solution in the local area, in the hope that this will lead to the best solution at the global level.
   * **Example:** The Coin Change Problem, in which the largest denomination is selected.

### 5. Divide and Conquer: 
   Divides a problem into smaller sub-problems, solves each sub-problem, and combines their results to solve the original problem.
   * **Example:** Merge Sort, Quick Sort.

### 6. Backtracking: 
   Tries out different solutions and backtracks as soon as it determines that a solution cannot be achieved.
   * **Example:**  Solving mazes or the N-Queens Problem.

### 7. Graph Algorithms:
   * **Depth-First Search (DFS):** Explores as far as possible along each branch before backtracking.
   * **Breadth-First Search (BFS):** Explores all neighbors at the present depth before moving on to nodes at the next depth level.
   * **Dijkstra's Algorithm:** Finds the shortest path from a source node to all other nodes in a graph with weighted edges.
   * **Kruskal's Algorithm:** Finds the minimum spanning tree of a graph.

### 8. Recursive Algorithms: 
   An algorithm that calls itself with modified input until a base condition is met.
   * **Example:** Calculating the factorial of a number.

### 9. Hashing Algorithms: 
   Algorithms that map data to a fixed-size value or hash key, which can be used for faster lookups.
   * **Example:** Hash maps for efficient searching.

## Efficiency of Algorithms:

Algorithms are evaluated based on their time complexity and space complexity:

**Time Complexity:** The amount of time an algorithm takes to run, often expressed in terms of the input size (n). Examples include O(1), O(n), O(log n), O(n²).

**Space Complexity:** The amount of memory an algorithm uses during execution.

The choice of algorithm and data structure has a significant impact on the performance and scalability of the program, which is why understanding them is crucial for solving computational problems effectively.
   