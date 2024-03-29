var Stack = function() {
    this.value = 0;
    this.next = 0;

    this.push = function(value) {
        var temp = new Stack();
        temp.value = value;
        temp.next = this.next;
        this.next = temp;
    }

    this.pop = function() {
        var temp = this.next;
        this.next = temp.next;
        return temp.value;
    }
}

var s = new Stack();
s.push(1);
s.push(2);

console.log(s.pop());
console.log(s.pop());
