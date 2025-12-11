
export default function TestForm(){
    console.log("===테스트 1:name : value ===")
    const key1="email";
    const obj1 = {name:"hello"};
    console.log(obj1);

    console.log("===테스트 2:name : value ===")
    const key2="email";
    const obj2 = {[key2]:"hello"};
    console.log(obj2);


    console.log("===테스트 3: React 올바른 패턴 ===")
    let form1 = {name:"",age:"",email:""};
    const k1="email";
    const v1 = "aaa@bbb.com";
    form1 = {...form1,[k1]:v1}
    console.log(form1);


    console.log("===테스트 4: React 올바른 패턴 ===")
    let form2 = {name:"111",age:"2222",email:"33333"};
    const k2="addr";
    const v2 = "인천시 중구 부평";
    form2 = {...form2,[k2]:v2}
    console.log(form2);


    console.log("===테스트 5: React 올바른 패턴 ===")
    form2 = { ...form2,
              ...{name:"444",age:"5555",email:"6666"}
    };
    const k3="etc";
    const v3 = "기타정보";
    form2 = {...form2,[k3]:v3}
    console.log(form2);
}
