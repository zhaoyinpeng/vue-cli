<template>
  <div>
    <pre>
        具体内容在注释中：
    <!-- 模块模式:
      在立即执行函数表达式中定义的变量和方法在外界是访问不到的,只能通过其向外部提供的接口,"有限制"地访问.通过函数作用域解决了属性和方法的封装问题.
      var Person = (function(){
          var name = "xin";
          var age = 22;
          function getName(){
              return name;
          }
          function getAge(){
              return age;
          }
          return {
              getName: getName,
              getAge: getAge
          }
      })();

      console.log(age); // 报错:age未定义
      console.log(name); // 报错:name未定义
      console.log(Person.age); // undefined
      console.log(Person.name); // undefined
      只能通过Person提供的接口访问相应的变量
      console.log(Person.getName()); // xin
      console.log(Person.getAge()); // 22
      构造函数模式
      function Person(name,age){
          this.name = name;
          this.age = age;
      }
      Person.prototype = {
          constructor: Person;
          printName: function(){
              console.log(this.name);
          },
          printAge: function(){
              console.log(this.age);
          }
      }

      var person = new Person('xin', 22);
      person.printName(); // xin
      person.printAge(); // 22
      混合模式
      function Person(name,age){
          this.name = name;
          this.age = age;
      };
      Person.prototype.printName = function(){
          console.log(this.name);
      }
      function Student(name,age){
          继承 Person 的属性
          Person.call(this,name,age);
      }
      function create(prototype){
          function F(){};
          F.prototype = prototype;
          return new F();
      }

      让Student的原型指向一个对象,该对象的原型指向了Person.prototype,通过这种方式继承 Person 的方法
      Student.prototype = create(Person.prototype);
      Student.prototype.printAge = function(){
          console.log(this.age);
      }
      var student = new Student('xin',22);
      student.printName(); // "xin"
      工厂模式
      function Person(name, age){
          var person = new Object();
          person.name = name;
          person.age = age;
          person.printName = function(){
              console.log(this.name);
          };
          person.printAge = function(){
              console.log(this.age);
          }
          return person;
      }

      var person = Person('xin',22);
      单例模式
      var Singleton = (function (){
          var instance;
          function init(){
              return {

              };
          }
          return {
              getInstance: function(){
                  if(!instance){
                      instace = init();
                  }
                  return instance;
              }
          };
      })();
      发布-订阅模式:
      发布-订阅模式又叫做观察者模式,定义了对象之间一对多的依赖关系,当一个对象的状态发生改变时,所有依赖与它的对象都将得到通知.

      发布-订阅模式广泛应用于异步编程之中,是一种替代回调函数的方案.多个事件处理函数可以订阅同一个事件,当该事件发生后,与其相对应的多个事件处理函数都会运行
      取代对象之间硬编码的通知机制,一个对象不用再显示的调用另外一个对象的某个接口,降低模块之间的耦合程度,虽然不清楚彼此的细节,但是不影响他们之间相互通信
      应用
      DOM事件
      DOM事件是一种典型的发布-订阅模式,对一个dom节点的一个事件进行监听,当操作dom节点时,触发相应的事件,响应函数执行.事件函数对dom节点完全未知,不用去理会是什么事件,如何触发,执行就好.

      自定义事件
      指定发布者
      "发布-订阅"这种关系用一个对象表示,键表示事件名,值是一个由事件处理程序组成的数组,相当于订阅者的花名册
      发布消息后,遍历缓存列表,依次执行订阅者的回调函数
      var EventCenter = (function(){  
          将所有的"发布-订阅"关系放到events中
          var events = {};

          给事件绑定事件处理程序
          evt:事件名
          handler:事件处理程序
          function on(evt, handler){
              events[evt] = events[evt]||[];
              events[evt].push({
                  handler:hander
              });
          }

          发布消息(触发事件),并执行相应的事件处理程序
          evt:事件名
          args:给事件处理程序传递的参数
          function fire(evt,args){
              if(!events[evt]){
                  return;
              }
              遍历事件处理程序列表,执行其中每一个事件处理程序
              for(var i=0;i<events[evt].length;i++){
                  events[evt][i].handler(args);
              }
          }

          使用模块模式的方式,向外界提供绑定事件处理程序和触发事件的接口
          return {
              on: on,
              fire: fire
          }
      })();
      实际应用

      var Event = (function(){  
          var events = {};


          function on(evt, handler){
              events[evt] = events[evt]||[];
              events[evt].push({
                  handler:handler
              });
          }


          function fire(evt,args){
              if(!events[evt]){
                  return;
              }

              for(var i=0;i<events[evt].length;i++){
                  events[evt][i].handler(args);
              }
          }

          function off(evt){
              delete events[evt];
          }

          return {
              on: on,
              fire: fire,
              off: off
          }
      })();
      Event.on('change', function(val){
          console.log('change...  now val is ' + val);  
      });
      Event.on('click', function(val){
          console.log('click.... now val is '+ val);
      })
      Event.fire('change', 'xin');
      Event.fire('click', 'xin');
      Event.off('change'); -->
      
    </pre>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    mounted () {
    },
    methods: {}
  }
</script>
<style>

</style>
