var HashMap = function() {
    this.list = new Array(16);
    this.put = function(key, value) {
        var hash = makeHash(key);
        if (this.list[hash].value == null) {
            this.list[hash].key = key;
            this.list[hash].value = value;
        } else {
            var tempList = new List();
            tempList.key = key;
            tempList.value = value;
            tempList.next = this.list[hash].next;
            this.list[hash].next = tempList;
        }
    }

    this.get = function(key) {
        var hash = makeHash(key);
        if (this.list[hash].key == key) {
            return this.list[hash].value;
        }
        
        var tempList = this.list[hash].next;
        while (tempList != null) {
            if (tempList.key == key) {
                return tempList.value;
            }
            var tempList2 = tempList.next;
            tempList = tempList2;
        } 
        return null;
    }

    for (var i = 0; i < 16; i++) {
        this.list[i] = new List();
    }
}

var List = function() {
    this.key = null;
    this.value = null;
    this.next = null;
}

var makeHash = function(key) {
    var temp = 0;
    for (var i = 0; i < key.lenght; i++) {
        var c = key.charCodeAt(i);
        temp += c * Math.pow(2, i);
    }
    var hash = temp % 16;
    return hash;
}

var hashMap = new HashMap();
hashMap.put("hello world", 123);
hashMap.put("stderr", 444);

console.log(hashMap.get("hello world"));
console.log(hashMap.get("stderr"));
console.log(hashMap.get("stder"));
