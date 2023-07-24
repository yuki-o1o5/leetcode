// https://leetcode.com/problems/merge-two-sorted-lists/

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

const list3 = [1, 2, 4];
const list4 = [1, 3, 4];

function ListNode(val, next) {
  this.val = val;
  this.next = next ? next : null;
}

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val;
  this.next = next ? next : null;
}

var mergeTwoLists = function (list1, list2) {
  // Create a dummy node to simplify the merging logic
  const dummy = new ListNode(-1);
  let current = dummy;

  // Iterate over both lists and compare their nodes
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Append any remaining nodes from either list
  if (list1 !== null) {
    current.next = list1;
  }
  if (list2 !== null) {
    current.next = list2;
  }

  return dummy.next;
};

// Helper function to create a linked list from an array
function createLinkedListFromArray(arr) {
  let head = null;
  let tail = null;
  for (const val of arr) {
    const node = new ListNode(val);
    if (!head) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = node;
    }
  }
  return head;
}

// Example usage:
const arr1 = [1, 2, 4];
const arr2 = [1, 3, 4];

const list1 = createLinkedListFromArray(arr1);
const list2 = createLinkedListFromArray(arr2);

const mergedList = mergeTwoLists(list1, list2);
console.log(mergedList);
