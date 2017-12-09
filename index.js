var recipes = {
  
}

function updateObjectWithKeyAndValue(obj, key, value ){
  var newVal = {key : value};
  Object.assign({}, obj , newVal);
  return obj
}

function updateObjectWithKeyAndValues(obj, key , value){
  var newVal = { key : value }
  var newObj = Object.assign({}, obj, newVal)
  return newObj;
}