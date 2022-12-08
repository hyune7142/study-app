/* 기본타입 (자주 사용하는 타입에 *표시)
    Boolean *
    Number *
    String *
    Object
    Array * (= string[], number[])
    Tuple
    Enum *
    Any
    Void *
    Null
    Undefined
    Neve
*/


// 특정 타입이나, 값만 지정하고 싶은 경우, unionType을 생성하여 이용가능
type UnionType = string | number;
// 특정 문자들만 허용하고 싶은 경우
type UnionString = 'A' | 'B' | 'C';


// 다국어 처리나 특정 값(타입)만을 허용하고 공통으로 사용할 경우가 많은경우
// 아래 처럼 Enum 타입을 사용할 경우도 있습니다.
enum Lang {
    KO = 'ko',
    JP = 'jp',
    EN = 'en',
}
console.debug(Lang.EN)


// Object 데이터를 다룰때 실수하는 부분
// object Type은 모든 값이 들어있는 object를 허용하지만 이러면 타입스크립트를 사용할 이유가 없습니다.
const something: object = {
    name: 'Lee',
    type: 'A'
}
// 아래 주석을 해제하세요
// const myName = something['name'];
// console.debug(myName);



// 해결법은?
// Index Signature를 통해 Key값이 string 타입이라고 명시해 줄 수 있습니다.
// 만약 any가 아닌 지정된 타입이 있다면 해당 타입으로 수정해도 됩니다.
type ObjectAny = {
    [key: string]: any
}

const something2: ObjectAny = {
    name: 'Lee',
    type: 'A'
}
const myName2 = something2['name'];
console.debug(myName2);




// 인터페이스 타입은 확장하여 사용될 경우 주로 이용함
export interface Person {
    name: string
    age: number
    gender: string
}

export interface IglooEMP extends Person {
    dept: string
    position: string
}


// 제네릭은 특정 타입의 파라메터만 받을 수 있도록 할때 주로 사용
function testFunc<Person>(man: Person) {
    console.log(man);
    return 'something..'
}


// 특정 값을 포함하는 파라메터만 허용하고 싶은 경우
function getProperty<T, O extends keyof T>(obj: T, key: O) {
    return obj[key];  
  }

  const obj = { a: 1, b: 2, c: 3 };
  
  getProperty(obj, "a"); // okay


type PersonKeyof = keyof Person; // 객체형태의 '타입'의 키값을 모아 'name' | 'age' | 'gender' 형태의 unionType으로 생성해줌
type PersonTypeof = typeof obj; // 객체형태의 '데이터'를 타입으로 변환시켜줌
