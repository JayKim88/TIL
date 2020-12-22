## Achievement Goals

1. 어떤 경우에 중첩된 callback이 발생하는지 이해할 수 있다.
2. 중첩된 callback의 단점, Promise 의 장점을 이해할 수 있다.
3. Promise 사용 패턴과 언어적인 특징들을 이해할 수 있다.
   3-1. resolve, reject의 의미와, then, catch와의 관계를 이해할 수 있다.
   3-2. Promise 에서 인자를 넘기는 방법에 대해 이해할 수 있다.
   3-3. Promise의 세가지 상태를 이해할 수 있다.
   3-4. Promise.all 의 사용법을 이해할 수 있다.
4. async/await keyword에 대해 이해하고, 작동 원리를 이해할 수 있다.
5. node.js의 fs 모듈의 사용법을 이해한다.

---

1. 어떤 경우에 중첩된 callback이 발생하는지 이해할 수 있다.

- 파일 입출력할 경우
- 타임라인 애니메이션
- 네트워크 요청

```javascript
importFile((result) => {
  doAnimation((progress) => {
    uploadFile((result) => {});
  });
});
```
