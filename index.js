var recipes = {
  
}

function updateObjectWithKeyAndValue(obj, key, value ){
  obj[key] = value;
  return obj
}

function updateObjectWithKeyAndValue(obj, key , value){
  var newVal = { key : value }
  var newObj = Object.assign({}, obj, newVal)
  return newObj;
}