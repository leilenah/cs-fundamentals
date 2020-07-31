// --------------------------- //
//            Queue            //
// --------------------------- //

'use strict';

/**
 * ------------------------- //
 *         Overview          //
 * ------------------------- //
 *
 * Queue data structures allow data to be inserted from the tail and removed from the head.
 *
 * Queues have First in First Out (FIFO) behavior.
 * Queues delete only the oldest added element, and they only add to the end of the queue.
 *
 * Operations: add(), remove(), peek() -- return last element, isEmpty()
 *
 * ------------------------- //
 *        When to Use        //
 * ------------------------- //
 *
 * Use a queue when you need to manage objects in order starting with the first one in.
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
 * Link: https://hackernoon.com/the-little-guide-of-queue-in-javascript-4f67e79260d9
 */

 // empty queue
 queue = [];

 // add to beginning of queue
 queue.unshift();

 // delete last element from the queue
 queue.pop()
