// 인간은 망각의 동물, 확실하게 써먹기 위해서 JS를 복습해보자.

// // 문자열
// // 큰따옴표 작은따옴표 둘중 하나 선택해서 사용하면 됨.
// const string1 = "hello"
// const string2 = 'hello'

// // 백틱 - "템플릿 리터럴"(기호를 통해서 데이터를 만드는 방식)
// const string3 = `Hello ${string1} ?!`

// console.log(string3)


// 숫자
// const number = 123
// // 부동소수점
// const pi = .14

// console.log(number + 1)
// console.log(pi)


// 부동소수점 계산오류 - toFixed로 수정 가능함.
// const a = 0.1
// const b = 0.2

// console.log((a + b).toFixed(1)) // 0.3 인데 문자열로 반환됨.
// console.log(Number(a + b).toFixed(1)) // 우리가 예상한 값 0.3으로 반환됨.

// boolean(불린) = 특정한 상황들에서 분기 처리 가능
// const a = true
// const b = false

// NULL, Undefined
// null은 명시적이라 선언을 해줘야함.
// let age = null

// console.log(age)

// setTimeout(function() {
//   age = 85
//   console.log(age)
// }, 1000)

// undefined는 암시적임, 변수에서 값이 따로 할당하지 않은 상태를 말함.
// let age

// console.log(age)

// const user ={
//   name: 'JIHO',
//   age: 19,
//   email: null //정확하게 값이 존재하지 않는다고 명시하는 방법
// }

// console.log(user.name)
// console.log(user.age)
// console.log(user.email) 
// console.log(user.abc) //undefined - 속성에 값을 할당하지 않았기에 기본적으로 undefined가 들어감.

// Array(배열)

// // const fruits = new Array('apple', 'banana', 'cherry') //생성자 함수 또는 js class. 그러나 이런 방식으로 선언하면 불편함.
// const fruits = ['apple', 'banana', 'cherry'] //배열 리터럴(기호를 통해서 데이터 만들기)

// console.log(fruits)

// // 특정 데이터 조회하기 - 배열 인덱싱(대괄호 표기법)
// console.log(fruits[1])

// Object(객체)

// const user = new Object()

// user.name = 'JIHO'
// user.age = 19

// // key: value 형태의 객체 데이터가 생성됨.
// console.log(user)

// 다른 방식의 객체 생성법들

// 생성자 함수 선언 방식
// function User() {
//   this.name = "JIHO"
//   this.age = 19 
// }
// const user = new User()

// console.log(user)



// 중괄호 기호 선언 방식(리터럴 객체 데이터)
// 각각 객체의 속성들의 이름은 고유하기 때문에, 순서의 상관이 없다.

// const user = {
//   name: "JIHO",
//   age: 19,
//   age: 22
// }

// // 표기법은 둘 다 자주 사용된다.
// console.log(user.name) //점 표기법
// console.log(user['name']) //대괄호 표기법
 
// // 대괄호 표기법 예시

// const key = 'age'

// console.log(user[key])

// 좀 더 복잡한 예제

// const userA = {
//   name: "JIHO",
//   age: 19 
// }

// const userB = {
//   name: "NEO",
//   age: 22,
//   parent: userA
// }
// // 점 표기법을 사용한 조회는 객체 데이터에서 계속 사용할 수 있다.
// console.log(userB.parent.name)
// // 이런 방식으로도 사용할 수 있다..
// console.log(userB['parent']['name'])

// const users = [userA, userB]

// console.log(users[0])

// 연산자

// Nullish 병합(Nullish Coalescing)

// const n = 0

// // OR 연산자를 사용한 경우
// const num1 = n || 7
// console.log(num1) // 7

// // Nullish 병합 연산자를 사용한 경우
// const num2 = n ?? 7
// // null, undefined만 반환하게 된다.
// console.log(num2) // 0

// console.log(null ?? 1) // 1
// console.log(undefined ?? 2) // 2
// console.log(null ?? undefined) // undefined

// 전개 연산자

// const a = [1,2,3]
// const b = [4,5,6]

// // console.log(a) // [1,2,3]

// // 전개 연산자, 아래 코드에서는 배열 데이터의 대괄호를 제거한 값을 출력해주고 있음.
// // console.log(...a) // 1, 2, 3

// // 배열 병합 메소드
// const c = a.concat(b)
// console.log(c) // [1,2,3,4,5,6]

// const d = [...a, ...b]
// console.log(d) //위에 concat 메소드와 값이 동일하다.

// const a = {x: 1, y: 2}
// const b = {y: 3, z: 4}

// const c = Object.assign({}, a,b)
// console.log(c)

// const d = {...a, ...b}
// console.log(d)

// 예제 2

// function fn (x, y, z) {
//   console.log(x, y, z)
// }

// fn(1,2,3)

// const a = [1,2,3]
// // fn(a) // 이러면 파라미터 x에만 a 배열값이 들어가고 나머진 다 undefined임
// // fn(a[0], a[1], a[2]) //이거 대신에 전개 연산자 쓰면 편하다
// fn(...a) // fn(1,2,3)



// 구조 분해 할당(Destructuring assignment)
// 구조 분해 할당은 배열 데이터와 객체 데이터 에서 사용할수 있다.
// 각 데이터의 구조에 맞게 개별 변수를 손쉽게 만들수 있어서 편리하다.

// const arr = [1,2,3] 
// // const a = arr[0]
// // const b = arr[1]
// // const c = arr[2]

// const [a,b,c] = arr // 위의 주석처리된 코드와 같은 역할을 함.

// console.log(a,b,c)

// 구조 분해 할당은 배열 데이터 혹은 객체 데이터의 구조를 분해해서 각각의 변수에다가 데이터를 할당하는 방식이다.

// 구조분해할당 - 디졸브 효과

// const arr = [1,2,3]
// const [a, ...rest] = arr

// console.log(a, rest) // 1 [2,3]

// const obj = {
//   a:1, 
//   b:2,
//   c:3
// }

// // const a = obj.a 
// // const b = obj.b 
// // const c = obj.c 


// const {a, b} = obj

// console.log(a,b)

// 구조분해할당시 배열과 객체의 차이?
// 배열은 선언되는 값이 늘어날때마다 특정 값만 가져오기 위해서는 순서에 맞춰서 가져와야 하는데, 상당히 비효율적임.
// 그러나 객체는 특성 속성의 이름이 존재, 이름만 가져오면 되기에 배열보다 훨씬 효율적이다.

// const obj = {
//   a:1, 
//   b:2,
//   c:3,
//   x:7,
//   y:100
// }

// //x의 값이 없으면 4가 기본값으로 출력됨, 데이터를 꺼낼때는 해당 속성의 이름으로 꺼내야 하지만, 속성의 이름이 맘에 들지 않을때,
// // 아래 a:heropy 처럼 사용할 수 있다.(기괴하긴 하다..)
// const {x = 4 , a:heropy, y:ten = 10} = obj

// console.log(x, heropy, ten)

// const obj = {
//   a:1, 
//   b:2,
//   c:3,
//   x:7,
//   y:100
// }

// //rest는 c 를 제외한 나머지 속성들을 객체로 가지게 됨.
// const {c, ...rest} = obj

// console.log(c, rest)

// 선택적 체이닝(Optional Chaining)

// const user = {}

// console.log(user.name) //undefined

// const user = null

// //TypeError null.~~을 조회하려는데, 
// //null은 점표기법 자체를 사용할 수 없다.
// console.log(user.name) 

// 그래서 null이나 undefined처럼 점 표기법으로 어떤 속성을 조회할 수 없는 데이터들의 경우에
// 선택적 체이닝 ?. 을 사용할 수 있다.

// const user = null

// console.log(user?.name) // null
// // 그랬을떄 물음표 앞쪽에 있는 데이터 (user)가 점 표기법을 사용할 수 없는 데이터에도
// // 에러를 발생시키지 않고 그냥 단순하게 데이터를 출력한다.

// 예제

// const userA = {
//   name: "JIHO",
//   age: 19,
//   address: {
//     country: "Korea",
//     city: "Daejeon"
//   }
// }

// const userB = {
//   name: "NEO",
//   age: 22,

// }

// function getCity(user) {
//   return user.address.city
// }

// console.log(getCity(userA)) //Daejeon
// console.log(getCity(userB)) //TypeError - city 값을 조회할 수 없음.


// function getCity(user) {
//   return user.address?.city || '주소 없음.'
//   //선택적 체이닝을 사용하여 상황에 따라 존재하지 않을 속성(address)를 조회해도 TypeError를 방지할 수 있다.
// }

// console.log(getCity(userA)) 
// console.log(getCity(userB)) // or 연산자로 처리했기 때문에, 주소 없음. 이 출력된다.(undefined)

// 함수(Function)


// // 함수 선언문(Declaration)
// function hello() {}


// // 함수 표현식(Expression)
// const hello = function () {}

// 선언문과 표현식은 호이스팅에서 차이점이 발생하게 된다. 

// 호이스팅(Hoisting)


// hello()

// function hello() {
//   console.log('Hello~')
// } //함수 선언문

// 절차 지향 언어만 배운 사람한테 저거 보여주면 머리 맞거나 "HUH?" 같은 반응이 나온다.
// 코드치자마자 빨간줄이 뜰게 당연하기 때문이다 ㅋㅋ 근데 왜 JS에서 돌아가냐?
// 이게 호이스팅이다. 함수가 선언되어져 있는 해당 코드를 
// 유효한 범위 안에서 제일 꼭대기로 끌어올려 동작하는 현상이다. 함수 선언문에서만 일어난다.


// hello()

// const hello = function() {
//   console.log('Hello~')
// } // 함수 표현식
// // 초기화 전(만들어 지기 전의) 함수에 접근 못한다고 ERROR 터진다. 상식적으로 봐도 이게 맞다.

// 함수의 반환 및 종료

// 기본적인 함수 반환 형식
// function hello() {
//   return 'Hello~'
// }

// console.log(hello())

// function hello() {
//   return 
//   // return만 적어두면 아무것도 없음. 암시적으로 undefined 반환함.
//   // return 도 안적어도 똑같음. 암시적으로 undefined 반환함.
// }

// console.log(hello())

// 예제

// function plus(num) {
//   return num + 1
// }

// console.log(plus(2))
// console.log(plus(7))
// console.log(plus()) // 실수나 잘못 사용한 경우, js가 파라미터에 자동으로 undefined 데이터로 추가해서 NaN 반환한다.

// function plus(num) {
//   if (typeof num !== 'number') { // 예외처리를 통해 숫자를 입력하도록 유도한다.
//     console.log('숫자를 입력해주세요!') 
//     return 0;
//   }

//   return num + 1
// }

// console.log(plus(2))
// console.log(plus(7))
// console.log(plus())


//  매개변수(파라미터) 패턴
//// 기본값(Defatult value)

// function sum(a,b) { //매게변수(parameter)
//   return a + b
// }

// // sum(1,2) //(1,2) <- 인수(arguement)

// console.log(sum(1,2))
// console.log(sum(7)) // NaN -> 7 + undefined가 되어버린다

// 파라미터에 데이터가 아무것도 들어오지 않을때 사용할 수 있도록 기본값을 사용할 수 있다.

// function sum(a ,b = 1) { //매게변수(parameter)
//   return a + b
// }

// console.log(sum(1,2))
// console.log(sum(7)) //8

//  매개변수(파라미터) 패턴
//// 객체 구조 분해 할당(Destructuring assignment)

// const user = {
//   name: "JIHO",
//   age: 19,
//   email: "jihoseo2006@gmail.com"
// }

// function getName({name}) { // 받은 매개변수의 객체 데이터를 바로 구조분해 해서
//   return name  // name 변수만 사용하여 반환해줄 수 있다.
// }
// function getEmail({email = "이메일이 없습니다."}){ //이메일이 없을 경우에 
//   return email
// }

// console.log(getName(user)) //인수의 객체 데이터를 
// console.log(getEmail(user)) 


//  매개변수(파라미터) 패턴
//// 배열 구조 분해 할당(Destructuring assignment)

// const fruits = ['Apple', 'Banana', 'Cherry']
// const numbers = [1,2,3,4,5,6,7]

// function getSecondItem([, b]) { // 기존의 배열 구조분해할당 문법과 같은 형태를 유지해서 사용한다.
//   return b
// }

// console.log(getSecondItem(fruits))
// console.log(getSecondItem(numbers))

//  매개변수(파라미터) 패턴
//// 나머지 매개변수(Rest parameter)

// 예제 sum 함수
// function sum(rest) {
//   console.log(rest)
// }
// // 아래 인수들을 보면 sum 함수는 매개변수를 몇 개를 적어야 하는지 알 수 없음. 

// console.log(sum(1,2)) //3
// console.log(sum(1,2,3,4)) // 10
// console.log(sum(1,2,3,4.5,6,7,8,9,10)) // 55


// function sum(...rest) { // 이때 전개 연산자를 사용해서 모든 인수를 배열 데이터로 받아 낼 수 있다.
//   console.log(rest)
// } 

// function sum(...rest) {
//   console.log(rest)
//   return rest.reduce(function(acc, cur) {
//     return acc + cur
//   }, 0)
// } 

// console.log(sum(1,2)) //3
// console.log(sum(1,2,3,4)) // 10
// console.log(sum(1,2,3,4,5,6,7,8,9,10)) // 55
























































































