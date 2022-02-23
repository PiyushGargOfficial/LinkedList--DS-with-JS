class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

const q = new Node("Q");
const r = new Node("R");
const s = new Node("S");

const empty = new Node(null);

a.next = b;
b.next = c;
c.next = d;

q.next = r;
r.next = s;

const printLinkedList = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

const getValues = (head) => {
  let current = head;
  let values = [];

  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  console.log(values);
};

const sumLinkedList = (head) => {
  let current = head;
  let sum = 0;

  while (current !== null) {
    sum += parseInt(current.val);
    current = current.next;
  }

  console.log(sum);
};

const findLinkedList = (head, el) => {
  let current = head;
  let count = 0;
  while (current !== null) {
    if (current.val === el) {
      console.log(`${el} is present in the linked list at ${count} index`);
      break;
    } else {
      count++;
      current = current.next;
    }
  }
};

const findAtIndex = (head, index) => {
  let current = head;
  let count = 0;

  while (current !== null) {
    if (count === index) {
      console.log(current.val);
      break;
    }
    current = current.next;
    count++;
  }
  return null;
};

const reverseList = (head) => {
  let previous = null;
  let current = head;

  while (current !== null) {
    const next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  console.log(previous);
};

const zipperLists = (head1, head2) => {
  // let current1 = head1;
  // let current2 = head2;
  // let count = 0;

  // while (current1 !== null) {
  //   if (current2 === null) {
  //     current2 = current1;
  //     break;
  //   }
  //   const next1 = current1.next;
  //   const next2 = current2.next;
  //   if (count % 2 == 0) {
  //     current1.next = current2;
  //   } else {
  //     current2.next = current1;
  //   }
  //   current1 = next1;
  //   current2 = next2;
  //   count++;
  // }
  // console.log(head1);

  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;

  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count++;
  }
  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;

  console.log(head1);
};

const insertAtFirst = (data, head) => {
  var newNode = new Node(data);
  console.log("null");
  newNode.val = data;
  newNode.next = head;
  console.log(newNode);
};

const insertLast = (data, head) => {
  let current = head;

  if (current === null) {
    insertAtFirst(data, current);
  }
  let newNode = new Node(data);
  while (current.next) {
    current = current.next;
  }
  current.next = newNode;
  console.log(head);
};

const deleteValue = (key, head) => {
  let previous = null;
  let current = head;

  if (current === null) console.log("No Linked List Present");
  if (current.val === key) {
    current = current.next;
    console.log(current);
  }
  while (current !== null) {
    if (current.val === key) {
      previous.next = current.next;
    }
    previous = current;
    current = current.next;
  }
  console.log(head);
};

const deleteIndex = (index, head) => {
  let previous = null;
  let current = head;
  let count = 0;

  if (current === null) console.log("No Linked List Present");
  if (index === 0) {
    current = current.next;
    console.log(current);
    return;
  }
  while (current !== null) {
    if (count === index) {
      previous.next = current.next;
    }
    previous = current;
    current = current.next;
    count++;
  }
  console.log(head);
};

deleteIndex(1, a);
// deleteValue("B", a);
// insertLast("F", empty);
// insertAtFirst("E", a);
// zipperLists(a, q);
// reverseList(a);
// findAtIndex(a, 1);
// findLinkedList(a, "C");
// sumLinkedList(a);
// getValues(a);
// printLinkedList(a);
