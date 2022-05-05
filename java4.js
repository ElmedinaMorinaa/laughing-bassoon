// for (let index = 0; index < array.length; index++) {

//     const element = array[index];

// }

// const arr = ["a", "b", "c"];
// for (const key in arr) {
//     console.log(key); // rez 0 1 2
//       console.log(arr[key]); //rez a b c por i qet edhe pozitat
// }
// for (const key of arr) {
//     console.log(arr[key]); //rez a b c nuk i qet pozitat
// }

const arr1 = ["a", "b", "c"];
const arr2 = ["a", "b", "c"];

for (const i in arr1) {
    for (const x in arr2) {
        if (arr1[i] == arr2[x]) {
            console.log(true);

        }
    }

}