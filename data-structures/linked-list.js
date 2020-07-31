// --------------------------- //
//         Linked List         //
// --------------------------- //

'use strict';

/**
 * ------------------------- //
 *         Overview          //
 * ------------------------- //
 *
 * A Linked List is a list of nodes that either have one-directional or two-directional links.
 *
 * In Single Linked Lists, each node has a reference to the next node, but not the pervious one.
 * In Doubly Linked Lists reference both the next and previous node.
 *
 * The first node in the list is the "head", and the last node in the list is the "tail."
 * Random access is not allowed with linked lists -- nodes must be accessed sequentially.
 *
 * ------------------------- //
 *        When to Use        //
 * ------------------------- //
 *
 * Use a linked list when you need to insert or remove elements withough re-allocating the entire structure.
 *
 * ------------------------- //
 *     Time Complexities     //
 * ------------------------- //
 *
 * Access: O(n)
 * Search: O(n)
 * Insertion: O(1)
 * Deletion: O(1)
 *
 * ------------------------- //
 *       Implementation      //
 * ------------------------- //
 *
 * Link: https://hackernoon.com/the-little-guide-of-linked-list-in-javascript-9daf89b63b54
 */
