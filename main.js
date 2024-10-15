//1.Viết một hàm arrow có tên là sumArray, nhận vào một mảng số nguyên và trả về tổng của các phần tử trong mảng
// const sumArray = (arr) => arr.reduce((sum, current) => sum + current, 0);
// let numbers = [1, 2, 3, 4, 5];
// let total = sumArray(numbers);
// console.log(total);

//2.Viết một hàm arrow có tên là squareArray, nhận vào một mảng số nguyên và trả về một mảng mới với các phần tử là bình phương của các phần tử trong mảng ban đầu.
// const squareArray = (arr) => arr.map((item) => item * item);
// let number = [1, 2, 3, 4, 5];
// let square = squareArray(number);
// console.log(square);

//3.Viết một hàm arrow có tên là filterGreaterThan, nhận vào một mảng số nguyên và một giá trị nguyên, trả về một mảng mới chứa các phần tử lớn hơn giá trị được đưa vào.
// const filterGreaterThan = (arr) => arr.filter((item) => item > 5);
// let numbers = [2, 6, 3, 20, 8, 11];
// let filter = filterGreaterThan(numbers);
// console.log(filter);

//4. Viết một hàm arrow có tên là maxInArray, nhận vào một mảng và trả về một giá tại lớn nhất trong mảng ban đầu.
// let arr = [2, 3, 7, 11, 3, 9, 21, 16];
// const maxInArray = (arr) =>
//   arr.reduce((max, current) => {
//     return current > max ? current : max;
//   }, arr[0]);
// let max = maxInArray(arr);
// console.log(max);

//5. Viết một hàm arrow có tên là avgArray, nhận vào một mảng và trả về trung bình các giá trị trong mảng ban đầu.
// const avgArray = (arr) =>
//   arr.reduce((sum, current) => sum + current, 0) / arr.length;
// let numbers = [2, 4, 6, 8, 10];
// console.log(avgArray(numbers));

//6. Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa bình phương của các số.
// let numbers = [2, 3, 4, 5, 8];
// let newArray = numbers.map((item) => item * item);
// console.log(newArray);

//7. Sử dụng map để chuyển đổi một mảng các chuỗi thành một mảng mới chứa độ dài của mỗi chuỗi.
// let arr = ["Kieu Oanh", "Nguyen Huu Uoc", "Cntt3"];
// let newArray = arr.map((item) => item.length);
// console.log(newArray);

//8. Sử dụng map để chuyển đổi một mảng các đối tượng thành một mảng mới chứa giá trị của một thuộc tính cụ thể.
// let arr = [
//   { name: "Uoc", age: 21 },
//   { name: "Oanh", age: 20 },
//   { name: "Thinh", age: 22 },
// ];
// let newArray = arr.map((item) => item.name);
// console.log(newArray);

//9. Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa chuỗi "even" hoặc "odd" tương ứng với mỗi số.
// let arr = [2, 4, 5, 7, 8, 10, 13];
// let newArray = arr.map((item) => {
//   if (item % 2 === 0) {
//     return "even";
//   } else return "odd";
// });
// console.log(newArray);

//10. Sử dụng map để chuyển đổi một mảng các từ thành một mảng mới chứa các từ viết hoa.
// let arr = ["uoc", "cntt3", "haiduong"];
// let newArray = arr.map((item) => item.toUpperCase());
// console.log(newArray);

/*===================================================ES6=================================================  */
//1.Phân tách mảng colors gồm ba phần tử và lấy ra các giá trị của các phần tử đó vào các biến firstColor, secondColor, và thirdColor.
// let colorArray = ["red", "blue", "green"];
// let [firstColor, secondColor, thirdColor] = colorArray;

//2.Phân tách đối tượng person có hai thuộc tính là name và age vào các biến tương ứng.
// Person = {
//   name: "Uoc",
//   age: "21",
// };
// let { name, age } = Person;

//3.Tạo một mảng mới bằng cách nối hai mảng arr1 và arr2 vào một mảng mới sử dụng spread operator.
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9];
// let newArray = [...arr1, ...arr2];

//4.Tạo một bản sao của mảng originalArray bằng cách sử dụng spread operator.
// let originalArray = [1, 2, 4, 6];
// let originalArray2 = [...originalArray];

//5.Thêm một phần tử số 4 vào cuối mảng arr bằng cách sử dụng spread operator.
// let arr = [3, 4, 6, 2];
// let arr2 = [4];
// let newArray = [...arr, ...arr2];

//6.Cho hai đối tượng obj1 và obj2, viết một đoạn mã sử dụng Spread Operator để tạo một đối tượng mới chứa tất cả các thuộc tính từ cả hai đối tượng.
// let obj1 = {
//   name: "Uoc",
//   age: 21,
// };
// let obj2 = {
//   address: "Hai duong",
// };
// let obj3 = {
//   ...obj1,
//   ...obj2,
// };
// console.log(obj3);

//7.Cho một đối tượng person với các thuộc tính như name, age, và gender, viết một đoạn mã sử dụng Spread Operator để thêm một thuộc tính mới là country có giá trị là "Vietnam".
// let person = {
//   name: "Uoc",
//   age: 21,
//   gender: "Male",
// };
// let person2 = {
//   country: "Vietnam",
// };

// let person3 = {
//   ...person,
//   ...person2,
// };
// console.log(person3);

// 8.Sử dụng filter để lọc ra các số chẵn từ một mảng số nguyên.
// let arr = [2, 3, 6, 8, 11, 23, 10];
// let newArray = arr.filter((item) => item % 2 === 0);
// console.log(newArray);

//9.Sử dụng filter để lọc ra các chuỗi có độ dài lớn hơn một ngưỡng cho trước từ một mảng các chuỗi.
// let arr1 = ["Nguyen Huu Uoc", "CNTT3", "Pixi", "Monday"];
// let newArray = arr1.filter((item) => item.length >= 5);
// console.log(newArray);

//10.Sử dụng filter để lọc ra các đối tượng từ một mảng các đối tượng dựa trên một điều kiện cho trước.
// let arr = [
//   { name: "Uoc", age: 21, address: "Hai duong" },
//   {
//     name: "Dung",
//     age: 20,
//     address: "Ha Noi",
//   },
//   {
//     name: "Thinh",
//     age: 18,
//     address: "Ha Noi",
//   },
// ];

// let newArray = arr.filter((item) => item.age > 18);
// console.log(newArray);

//11.Sử dụng filter để lọc ra các số nguyên tố từ một mảng số nguyên.
// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let isPrime = (n) => {
//   if (n <= 1) return false;
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// };
// let newArray = arr.filter(isPrime);
// console.log(newArray);

//12.Sử dụng filter để lọc ra các chuỗi không chứa ký tự số từ một mảng các chuỗi.
// let arr = ["NguyenHuuuoc2901", "Cntt3", "Bringog", "Uoc"];
// let filteredArray = arr.filter((item) => !/\d/.test(item));
// console.log(filteredArray);

//13.Sử dụng reduce để tính tổng của các số trong một mảng số nguyên.

// let arr = [1, 4, 5, 6];
// let total = arr.reduce((a, item) => {
//   return a + item; // 4 + 1
// }, 0);
// console.log("total", total);

//14.Sử dụng reduce để tính tích của các số trong một mảng số nguyên.

// let arr = [1, 4, 5, 6];
// let tich = arr.reduce((a, item) => {
//   return a * item; //
// }, 1);
// console.log("tich", tich);

//15.Sử dụng reduce để tìm giá trị lớn nhất trong một mảng số nguyên.

// let arr = [10, 5, 8, 35, 20];
// let maxValue = arr.reduce((max, current) => {
//   return current > max ? current : max;
// }, arr[0]);

// console.log(maxValue);
