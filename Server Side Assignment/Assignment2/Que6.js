function insertionSort(arr) {
  const length = arr.length;
  for (let i = 1; i < length; i++) {
    let currentValue = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

// Example usage:
const unsortedArray = [6, 5, 3, 1, 8, 7, 2, 4];
const sortedArray = insertionSort(unsortedArray);
console.log("Sorted array:", sortedArray);
