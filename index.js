var recipes = {
  
}

function updateObjectWithKeyAndValue(obj, key, value ){
  var newVal = {[key] : value};
  
  return Object.assign({} , obj , newVal);
}

