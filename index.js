var recipes = {
  
}

function updateObjectWithKeyAndValue(obj, key, value ){
  var newVal = {[key] : value};
  
  return Object.assign({} , obj , newVal);
}

function destructivelyUpdateObjectWithKeyAndValue(obj , key, value){
  obj[key] = value;
  return abj;
}

function deleteFromObjectByKey(obj , key , value){
  
}

function destructivelyDeleteFromObjectByKey(obj, key){
  
}