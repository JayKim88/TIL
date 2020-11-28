const button = document.querySelector('.container button')
const jokeText = document.querySelector('.container .joke')
document.addEventListener('DOMContentLoaded', getJoke);

button.addEventListener('click', getJoke);

function getJoke(){
  fetch('https://icanhazdadjoke.com/',{
    headers:{
      'Accept': 'application/json'
    }
  }).then(something=>something.json())
  //json함수를 적용하여 readable하게 변경한다. 
    .then(obj=>jokeText.textContent = obj.joke)
}

// async function getJoke(){
//   const jokeData = await fetch('https://icanhazdadjoke.com/', {
//     headers: {
//       'Accept': 'application/json'
//     }
//   });
//   const jokeObj = await jokeData.json();
//   console.dir(jokeObj);
//   jokeText.textContent = jokeObj.joke;
// }

/*
async function => async function 선언은 AsyncFunction객체를 반환하는 하나의 비동기 함수를 정의합니다. 
await => Data 를 fetch 할 때까지 기다린 뒤 실행된다. 

async function 함수명() {
  await 비동기_처리_메서드_명();
}
=> 먼저 함수의 앞에 async 라는 예약어를 붙입니다. 그러고 나서 함수의 내부 로직 중 HTTP 통신을 하는 비동기 처리 코드 앞에 await를 붙입니다. 
여기서 주의하셔야 할 점은 비동기 처리 메서드가 꼭 프로미스 객체를 반환해야 await가 의도한 대로 동작합니다.
일반적으로 await의 대상이 되는 비동기 처리 코드는 Axios 등 프로미스를 반환하는 API 호출 함수입니다.
*/