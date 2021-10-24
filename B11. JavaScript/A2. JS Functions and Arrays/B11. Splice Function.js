// this function is used to make changes to the array
// it can be addition of one or more than one element. or removal of one or more than one element of an array
// so change can be adding something to the array of removing something from the array

// this splice function takes 3 arguments
//1. start index: the index from which you want to make changes
//2. Deletion Count: number of elements you want to delete from the array. if you dont want to delete something then write 0 there
//3. elements to be inserted: then there are elements that re to be inserted
//3rd argument is optional

var arr= [2,3,4,5,6];
console.log(arr);
arr.splice(1, 1); // I want to delete one element from index 1 and for now I dont want to insert anything
console.group(arr); // 3 is removed from the array

arr.splice(1); // now it will delete all the elements from 1st index

arr= [1,2,3,4,5,6];
//now I want to indert something in the array and dont want to delete anything from the array
// I want to insert 10 at index 2
arr.slice(2, 0, 10, 20, 40); // I dont want to delete anything so that will be 0. so 10, 20, 40 will be inserted from the index 2 onwards and all other elements will be shifted

arr.splice(2, 2, 40, 50) ;// from index 2 two elements will be deleted and if I want to insert 40 50 in their positions then I can do this

