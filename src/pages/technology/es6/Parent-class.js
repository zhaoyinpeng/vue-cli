class Parent {
    //默认调用
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayHello() {
        return "I'm " + this.name + " and I'm " + this.age + " yeas old.";
    }
    //get和set方法
    // get name(){
    //     // return this.name; //内存溢出？
    // }
    // set name(value){
    //     console.log('setter');
    //     return value;
    // }
}
export default Parent;