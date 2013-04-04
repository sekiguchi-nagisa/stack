var HashMap = function() {
    const num = 16;

    var List = function() {
        this.key = null;
        this.value = null;
        this.next = null;
    }

    var makeHash = function(key) {
        var temp = 0;
        for (var i = 0; i < key.length; i++) {
            var c = key.charCodeAt(i);
            temp += c;
        }
        var hash = temp % 16;
        return hash;
    }

    this.arrayOfList = new Array(num);
    this.set = function(key, value) {
        var hash = makeHash(key);
        console.log("hash = " + hash);
        if (this.arrayOfList[hash].value == null) {
            this.arrayOfList[hash].key = key;
            this.arrayOfList[hash].value = value;
        } else {
            var tempList = new List();
            tempList.key = key;
            tempList.value = value;
            tempList.next = this.arrayOfList[hash].next;
            this.arrayOfList[hash].next = tempList;
        }
    }

    this.get = function(key) {
        var hash = makeHash(key);
        console.log("hash = " + hash);

        if (this.arrayOfList[hash].key == key) {
            return this.arrayOfList[hash].value;
        }
        
        var tempList = this.arrayOfList[hash].next;
        while (tempList != null) {
            if (tempList.key == key) {
                return tempList.value;
            }
            var tempList2 = tempList.next;
            tempList = tempList2;
        } 
        return null;
    }

    for (var i = 0; i < num; i++) {
        this.arrayOfList[i] = new List();
    }
}

var hashMap = new HashMap();
hashMap.set("hello world", 123);
hashMap.set("stderr", 444);
hashMap.set("world hello", 567);

console.log(hashMap.get("hello world"));
console.log(hashMap.get("stderr"));
console.log(hashMap.get("stder"));
console.log(hashMap.get("world hello"));
