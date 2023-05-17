let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

const map1 = new Map(Object.entries(obj1));          //Provides functionality common to all JavaScript objects.
const map2 = new Map(Object.entries(obj2));          // entries--Returns an array of key/values of the enumerable properties of an object

if (map1.size !== map2.size) {                       // size returns the number of elements in the map
    console.log("The two objects are not equal");
} else {
    let areEqual = true;
    for (let [key, value] of map1) {                 //for loop condition to check the key value are equal or not
        if (!map2.has(key) || map2.get(key) !== value) {
            areEqual = false;
            break;
        }
    }
    if (areEqual) {                                  // priniting the statement according to the condition:    
        console.log("The two objects are equal");
    } else {
        console.log("The two objects are not equal");
    }
}