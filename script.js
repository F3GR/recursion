function sumRange(n) {
    if (n === 1) {
        return 1
    }
    return n + sumRange(n - 1)
}

function power(n, exp) {
    if (exp === 0) {
        return 1
    }
    return n * power(n, exp - 1)
}

function factorial(n) {
    if (n === 1) {
        return 1
    }
    return n * factorial(n - 1)
}

function all(arr, cb) {
    let copy;
    copy = copy || [...arr]

    if (arr.length === 0) {
        return true
    }

    if (cb(copy[copy.length - 1])) {
        copy.pop()
        return all(copy, cb)
    } else {
        return false
    }
}

function productOfArray(arr) {
    let copy
    copy = copy || arr.slice()

    if (arr.length === 0) {
        return 1
    }

    let num = copy.pop()
    return num * productOfArray(copy)
}

function contains(obj, value) {
    for (const property in obj) {
        if (typeof obj[property] === 'object') {
            return contains(obj[property], value)
        } else if (obj[property] === value) {
            return true
        }
    }
    return false
}

function totalIntegers(arr, total = 0) {
    for (const item of arr) {
        if (Array.isArray(item)) {
            total = totalIntegers(item, total);
        } else if (typeof item === 'number' && Number.isInteger(item)) {
            total++;
        }
    }
    return total;
}

function SumSquares(arr, total = 0) {
    for (const item of arr) {
        if (Array.isArray(item)) {
            total = SumSquares(item, total);
        } else if (Number.isInteger(item)) {
            total += item * item;
        }
    }
    return total;
}

function replicate(replicateNum, value, arr = []) {
    if (replicateNum <= 0) {
        return arr
    }
    arr.push(value)
    return replicate(replicateNum - 1, value, arr)
}