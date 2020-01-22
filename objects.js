function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}

const recipe = {eggs: 3}

console.log(updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup'))

console.log(recipe)

function updateObjectWithObject(targetObject, updatesObject) {
  return Object.assign({}, targetObject, updatesObject)
}

console.log(updateObjectWithObject(recipe, 'chocolate'))

