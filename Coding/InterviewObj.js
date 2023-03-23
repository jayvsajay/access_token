function getFlatObject(object) {
    function iter(o, p) {
        if (o && typeof o === 'object') {
            Object.keys(o).forEach(function (k) {
                iter(o[k], p.concat(k));
            });
            return;
        }
        path[p.join('.')] = o;
    }

    var path = {};
    iter(object, []);
    return path;
}

var obj = { one: 1, two: { three: 3 }, four: { five: 5, six: { seven: 7 }, eight: 8 }, nine: 9 },
    path = getFlatObject(obj);
	
console.log(path);




// output: {    one: 1,    'two.three': 3,    'four.five': 5,    'four.six.seven': 7,   
//  'four.eight': 8,    nine: 9 }

function flattenObject(obj, parentKey = "") {
    let result = {};
    for (let key in obj) {
      let propName = parentKey ? parentKey + "." + key : key;
      if (typeof obj[key] === "object") {
        let flatObject = flattenObject(obj[key], propName);
        result = { ...result, ...flatObject };
      } else {
        result[propName] = obj[key];
      }
    }
    return result;
  }


  