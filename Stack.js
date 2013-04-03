var Stack = function() {
    this.value = 0;
    this.next = 0;
}

var push = function(stack, value) {
    var temp = new Stack();
    temp.value = value;
    temp.next = stack;
    stack = temp;
}

var pop = function(stack) {
    var temp = stack;
    stack = temp.next;

    return temp.value;
}

var main = function() {
    var s = new Stack();
    push(s, 1);
    push(s, 2);

    console.log(pop(s));
    console.log(pop(s));
}

main();
