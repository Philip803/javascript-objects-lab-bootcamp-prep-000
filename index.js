var recipes = {
  
}

function updateObjectWithKeyAndValue(obj, key, value ){
  var newVal = {[key] : value};
  
  return Object.assign({} , obj , newVal);
}

function destructivelyUpdateObjectWithKeyAndValue(obj , key, value){
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj , key){
  var newObj = obj;
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(obj, key){
  
}