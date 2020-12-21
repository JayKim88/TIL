"use strict";

// Promise is a Javascript object for asynchronous operation. 비동기적인 수행을 위해 쓰이는 오브젝트.
// State: pending => fulfilled or rejected
// Producer(Promise Object) vs Consumer

//1. producer
//when new promise is created, the executor runs automatically.

const promise = new Promise((resolve, reject) => {
  //excuter 콜백함수는 resolve, reject 콜백함수를 인자로 받습니다.
  //doing some heavy work(network, read files). 시간이 걸리는 작업들은 비동기적으로 처리하는 것이 좋습니다.
  //promise를 만드는 순간, 네트워크 통신이 수행됩니다. 만약, 네트워크 요청을 사용자가 요구했을 경우(버튼을 클릭)는 다른 코드를 작성해야 합니다.
  //when new Promise is created, the executor runs automatically.
  console.log("doing something...");
  setTimeout(() => {
    // if(resolve) {
    //   resolve('kimmm'); //사용자의 이름은 'kimmm'
    // }
    reject(new Error("no network!!!")); //Error 라는 오브젝트 (class)를 이용하여 error의 이유를 보여줍니다.
  }, 2000);
});

//2. Consumers: then, catch, finally 로 값을 받아올 수 있습니다.
promise
  .then((value) => {
    //value => resolve callback 함수를 통해 전달된 인자('kimmm')를 뜻합니다.
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

//3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  //서버에서
  setTimeout(() => resolve(1), 1000); //1초 후에 숫자 1을 전달합니다.
});

fetchNumber
  .then((num) => num * 2) //num = 1
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000); //1초
    });
  })
  .then((num) => console.log(num)); //num => 5. 총 2초가 소요 (1000 + 1000)
//then은 값을 바로 전달할 수도 있고, promise를 전달해도 된다.

//4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error!! ${hen} => 🥚`)), 1000);
    //error가 발생한 경우!!
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// getHen()
//   .then((hen) => getEgg(hen))
//   // .then((egg) => cook(egg))
//   .catch(error => {
//     return '🍤';
//   })//에러가 발생할지라도 promise chain이 실패하지 않도록 다른 요소로 대체하는 catch 구문을 사용하여 요리를 완성합니다.
//   .then(cook)
//   .then((meal) => console.log(meal))
//   .catch((meal) => console.log(meal))

getHen()
  .then(getEgg)
  .catch((error) => {
    return "🍞";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
