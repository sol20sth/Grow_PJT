# Code Convention

## ☑️ 코드 컨벤션

<aside>
 **문자열을 처리할 때는 쌍따옴표를 사용하도록 합니다.**

</aside>

<aside>
**문장이 종료될 때는 세미콜론을 붙여줍니다.**

</aside>

<aside>
🐫 **함수명, 변수명은 카멜케이스로 작성합니다.**

</aside>

<aside>
☝ **가독성을 위해 한 줄에 하나의 문장만 작성합니다.**

</aside>

<aside>
****주석은 설명하려는 구문에 맞춰 들여쓰기 합니다.**

```jsx
// Good
function someFunction() {
  ...

  // statement에 관한 주석
  statements
}
```

</aside>

<aside>
**연산자 사이에는 공백을 추가하여 가독성을 높입니다.**

```jsx
a+b+c+d // bad
a + b + c + d // good
```

</aside>

<aside>
☝ **콤마 다음에 값이 올 경우 공백을 추가하여 가독성을 높입니다.**

```jsx
var arr = [1,2,3,4]; //bad
var arr = [1, 2, 3, 4]; //good
```

</aside>

<aside>
🔠 생성자 함수명의 맨 앞글자는 대문자로 합니다.

```jsx
function Person(){}
```

</aside>

---

### ☑️ 코드 컨벤션이 필요한 이유

- 팀원끼리 코드를 공유하기 때문에 일관성있는 코드를 작성하면 서로 이해하기 쉽다.
- 나중에 입사 지원 시 프로젝트를 하며 코드 컨벤션을 만들어 진행했다고 하면 협업 면에서 유리하게 작용할 수 있다.
