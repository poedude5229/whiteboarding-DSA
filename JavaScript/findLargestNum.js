function findLargestNum(arr) {
    let greatest = arr[1]

    for (let i = 1; i < arr.length; i++){
        if (arr[i] > greatest) {
            greatest = arr[i]
        }
    }
    return greatest
}
