// merge sort ( Divide & conquor) merging
//the thow part is already arranged  know why  things happend back side as well 

function conquor(first, mid, last, arr) {
  let i = first,
    j = mid + 1,
    k = 0;
  let temp = new Array(last - first + 1);
  while (i <= mid && j <= last) {
    if (arr[i] < arr[j]) temp[k++] = arr[i++];
    else temp[k++] = arr[j++];
  }

  while (i <= mid) {
    temp[k++] = arr[i++];
  }

  while (j <= last) {
    temp[k++] = arr[j++];
  }

  console.log(temp);
}

conquor(0, 5, 10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
