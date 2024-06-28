# [JavaScript] 난수 생성기

## 0~1 사이의 난수 생성 - `Math.random()`

- `Math.random()`은 0과 1사이의 실수를 생성한다. (1은 포함되지 않는다.)
- 예시코드

```js
const rand1 = Math.random();
const rand2 = Math.random();
const rand3 = Math.random();

document.write(rand1 + "<br>");
document.write(rand2 + "<br>");
document.write(rand3 + "<br>");
```

- 출력

```
0.852555632147859
0.2750398745269889
0.6874521023628725
```

## 정수 난수 생성 - `Math.floor()`

- `Math.floor()`은 소수점 1번째 자리를 버림하여 정수를 리턴한다.
- 따라서 `Math.floor(Math.random())`의 결과는 늘 0이다.
- 따라서 `0 <= n <= 5` 사이의 난수를 생성하고 싶다면,
  `Math.floor(Math.random() * 6);` 와 같은 코드를 작성하면 원하는 결과를 얻을 수 있다.
