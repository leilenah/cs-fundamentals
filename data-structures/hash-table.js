// --------------------------- //
//          Hash Table         //
// --------------------------- //

'use strict';

/**
 * ------------------------- //
 *         Overview          //
 * ------------------------- //
 *
 * Hash table data structures have key-value pairs -- they store data in an associative manner.
 * Hash tables are also known as dictionaries, associative arrays, hashmaps, maps, etc.
 *
 * Using a technique called "hashing", you can turn key values into an array of indices.
 *
 * ------------------------- //
 *        When to Use        //
 * ------------------------- //
 *
 * Use a hash table when you want your structure to use key-value pairs.
 * Hash tables are very efficient for search and lookup.
 *
 * ------------------------- //
 *     Time Complexities     //
 * ------------------------- //
 *
 * Search: O(1) avg, O(n) worst
 * Insertion: O(1) avg, O(n) worst
 * Deletion: O(1) avg, O(n) worst
 *
 * ------------------------- //
 *       Implementation      //
 * ------------------------- //
 *
 */

 const hashTable = {}; // new Object();

// addiing to hash table v1
 hashTable['key1'] = 'value1';

// adding to hash table v2
hashTable.key2 = 'value2';

// hash table lookup
hashTable['key1'] // 'value1'

// hash table loop
for (let key in hashTable) {
    console.log('key: ' + key, 'value: ' + hashTable[key]);
}
