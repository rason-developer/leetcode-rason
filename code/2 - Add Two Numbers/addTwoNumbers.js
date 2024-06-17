/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

/*
function ListNode(val, next) {
    this.val = (val === undefined? 0:val);
    this.next = (next === undefined? null:next);
}
*/

var addTwoNumbers= function(l1, l2) {
    let dummyHead = new ListNode(l1, l2);
    let current = dummyHead;
    let carry = 0;
    while (l1 !== null || l2 !== null) { // Step 4
        let x = (l1 !== null) ? l1.val : 0; // Step 5
        let y = (l2 !== null) ? l2.val : 0; // Step 6
        let sum = carry + x + y; // Step 7
        carry = Math.floor(sum / 10); // Step 8
        current.next = new ListNode(sum % 10); // Step 9
        current = current.next; // Step 10
        if (l1 !== null) l1 = l1.next; // Step 11
        if (l2 !== null) l2 = l2.next; // Step 12
    }

    if (carry > 0) { // Step 13
        current.next = new ListNode(carry);
    }

     return dummyHead.next; // Step 14
};
