function compare_stacks(arr1,arr2){
  if (arr1.length != arr2.length){
    return false;
  }
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}

console.log(compare_stacks([1,2,3,7],[1,2,3,9]))//false
console.log(compare_stacks([1,2],[1,2,3,9]))//false
console.log(compare_stacks([1,2,3,7],[1,2,3,7]))//true
