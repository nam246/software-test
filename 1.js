/*
    Cho mảng số nguyên chưa được sắp xếp. Viết hàm xếp 5 số lớn nhất ra đầu mảng.
    Test case:
    findMax5([3,4,5,3,2,3,10,11]) => [11,10,5,4,3]
    findMax5([14,12,38,17,10,36,12,29,45,34,48,22]) => [48, 45, 38, 36, 34]
    findMax5([10,11,2,30,22,6,8,9,11,12,22]) => [30, 22, 22, 12, 11]
*/

var arr1 = [3,4,5,3,2,3,10,11];
var arr2 = [14,12,38,17,10,36,12,29,45,34,48,22]
var arr3 = [10,11,2,30,22,6,8,9,11,12,22]

function findMax5(arr) {
    arr.sort((a , b) => b - a);
    arr.splice(5);
    return arr;
}


console.log(findMax5(arr1));
console.log(findMax5(arr2));
console.log(findMax5(arr3));


/* 
    Viết hàm nhận vào 1 mảng và trả ra phần tử xuất hiện nhiều lần nhất trong mảng.
    Test case: 
    findFrequent([3, 7, 3]) ➞ 3
    findFrequent([null, "hello", true, null]) ➞ null
    findFrequent([false, "up", "down", "left", "right", true, false]) ➞ false 
*/

