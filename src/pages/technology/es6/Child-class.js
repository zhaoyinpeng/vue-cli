import Parent from './Parent-class.js'
class Child extends Parent {
    //可以不写constructor
    constructor(name, age, job) {
        //如果写了constructor必须写super
        super(name, age);
        this.job = job;
    }
    ok() {
        return 'Hello ' + this.name + ', your job is ' + this.job;
    }
}
export default Child;