let map = {};
map["key1"] = "val1"
// map = {"key1" : "val1"} 
map["key2"] = "val2"
// map = {"key1" : "val1", "key2": "val2"} 
console.log(map["key1"])
// prints "val1" map["key2"] = "val3"
// updates the map 
// map = {"key1" : "val1", "key2": "val3"}