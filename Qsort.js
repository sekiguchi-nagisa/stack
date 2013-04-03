var qsort = function(array, left, right) {
    var i = left;
    var j = right;

    var x = Math.floor((left + right) / 2);
    var pivot = array[x];

    console.log("x = " + x);
    console.log("pivot = " + pivot);
    console.log("qsort(" + left + ", " + right + ")");
    while (true) {
        while (array[i] < pivot) {
            console.log("array[i = " + i + "] = " + array[i]);
            i++;
        }
      
        while (array[j] > pivot) {  
            console.log("array[j = " + j + "] = " + array[j]);
            j--;
        }
     
        if (i >= j) {
            break;
        }

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;

        i++;
        j--;
    }

    if (left < i - 1) {
        array = qsort(array, left, i - 1);
    }

    if (j + 1 < right) {
        array = qsort(array, j + 1, right);   
    }

    printArray(array);
    return array;
}

var printArray = function(array) {
    var str = "[ ";
    for (var i = 0; i < array.length; i++) {
        str = str + array[i] + ", ";
    }
    str = str + "]";
    console.log(str);
}

var array = [4, 10, 7, 2, 1, 12, 3, 6, 21, 14, 17];
printArray(array);
array = qsort(array, 0, array.length - 1);
printArray(array);
