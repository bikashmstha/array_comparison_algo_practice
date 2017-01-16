function Node(val){
  this.val = val;
  this.next = null;
};
function SLL(){
  this.head = null;
  this.tail = null;
};
SLL.prototype.add = function(node){
  if (!this.head) {
    this.head = node;
    this.tail = node;
  }
  else {
    this.tail.next = node;
    this.tail = node;
  }
  return this;
};
SLL.prototype.pop = function(){
  var curr = this.head;
  if (!curr){ }
  else if (!curr.next) {
    this.head = null
  } else {
    while(curr.next.next){
      curr = curr.next
    }
    curr.next = null
    this.tail = curr;
  }
  return this
};
SLL.prototype.show = function(){
  var curr = this.head;
  var counter = 1;
  while(curr){
    console.log("Value of node at position", counter, ":", curr.val);
    curr = curr.next;
    counter++;
  }
  return this;
};
SLL.prototype.length = function(){
  var curr = this.head;
  var count = 0;
  while (curr){
    count++;
    curr = curr.next;
  }
  return count;
};
SLL.prototype.reverse = function () {
  var pivot = this.head, curr;
  if (!this.head || !this.head.next) {
    return this;
  }
  while(pivot.next){
    curr = pivot.next;
    if (curr.next) {
      pivot.next = curr.next;
    } else {
      this.tail = pivot;
      this.tail.next = null;
    }
    curr.next = this.head;
    this.head = curr;
  }
  return this;
};
function compare_stacks(sll1,sll2){
  if (sll1.length() !== sll2.length()) {
    return false;
  }
  var curr1 = sll1.head;
  var curr2 = sll2.head;
  while (curr1){
    if (curr1.val !== curr2.val) {
      return false;
    }
    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  return true;
};

var node1 = new Node(3);
var node2 = new Node(7);
var node3 = new Node(9);
var node4 = new Node(12);
var node5 = new Node(19);

var sll1 = new SLL();
sll1.add(node1).add(node2).add(node3).add(node4).add(node5);

var node6 = new Node(3);
var node7 = new Node(7);
var node8 = new Node(9);
var node9 = new Node(12);
var node10 = new Node(19);

var sll2 = new SLL();
sll2.add(node6).add(node7).add(node8).add(node9).add(node10);

var node11 = new Node(2);
var node12 = new Node(6);
var node13 = new Node(18);
var node14 = new Node(22);
var node15 = new Node(36);

var sll3 = new SLL();
sll3.add(node11).add(node12).add(node13).add(node14).add(node15);

var node16 = new Node(2);
var node17 = new Node(6);
var node18 = new Node(18);
var node19 = new Node(22);

var sll4 = new SLL();
sll4.add(node16).add(node17).add(node18).add(node19);
var x = compare_stacks(sll1,sll2);
console.log(x); //true
x = compare_stacks(sll1,sll3);
console.log(x);//false
x = compare_stacks(sll3,sll4);
console.log(x);//false

sll4.show().reverse().show();
