/* ---注册主体部位----- */

var form = document.getElementById('reg_form')
var prompt = form.getElementsByClassName('tishi')[0]
var strong = form.getElementsByTagName('span')[0]
var tel = form.tel

tel.onblur = function(){
    var ev = window.event||e
    var reg = /^1[356789]\d{9}$/
    if(reg.test(tel.value)==false){
        prompt.innerHTML='手机格式不正确'
        preventDefault(ev)
        return
    }
}
form.password.onfocus = function(){
    window.onkeyup= function(ev){
        var ev = window.event||ev
        var pd = form.password.value
        var len = pd.length
        // console.log(len,pd)
        if(len>6){
            pwd()
        }
        if(len<=6){
            strong.className='strong'
        }
    }
}
 form.password.onblur = function(){
   pwd()
}

function pwd(){
    var pd = form.password.value
    var len = pd.length
    var reg1 = /\d+/
    var reg2= /[a-zA-Z]+/
    var reg3= /[^a-zA-Z0-9]+/

    if(len<6||len>32){
        prompt.innerHTML='请输入6-32位英文、数字和符号的组合密码' 
        strong.className='strong'
        return
    }
    if(6<len&len<9){
        if(reg1.test(pd)||reg2.test(pd)){
            // prompt.innerHTML='密码过于简单，请试试英文、数字和符号的组合' 
            strong.className='strong' 
        }
    }
    if(len>=9){
        if(reg1.test(pd)||reg2.test(pd)){
            strong.className='strong1'
            prompt.innerHTML=''
        }
    }
    if(len>6){
        if(reg1.test(pd)&&reg2.test(pd)&&!reg3.test(pd)){
            strong.className='strong2'
            prompt.innerHTML='' 
        }
        else if(reg1.test(pd)&&!reg2.test(pd)&&reg3.test(pd)){
            strong.className='strong2'
            prompt.innerHTML=''
        }
        else if(!reg1.test(pd)&&reg2.test(pd)&&reg3.test(pd)){
            strong.className='strong2'
            prompt.innerHTML=''
        }
        if(reg1.test(pd)&&reg2.test(pd)&&reg3.test(pd)){
            strong.className='strong3'
            prompt.innerHTML=''            
        }
    }
}  


// 验证码部位
var validate = form.validate
var refurbish = document.getElementsByClassName('refurbish')[0]
var picture  =form.getElementsByClassName('picture')[0]

picture.innerHTML = superCreateCode(4)+'<span class="mark"></span>'
refurbish.onclick = function(){
picture.innerHTML = superCreateCode(4)+'<span class="mark"></span>'
// console.log(picture.innerText)
}

// 同意协议部位
var argee  =document.getElementById('arg')
var i = argee.getElementsByTagName('i')[0]
var checkbox = argee.getElementsByTagName('label')[0]
checkbox.onclick = function(){

// console.log(i.className)
if(i.className=='check2'){
    i.className='check1'
}
else{
    i.className='check2'
}
}

// 提交表单
form.onsubmit=function(e){
    var ev = window.event||e
    var reg = /^1[356789]\d{9}$/
    if(reg.test(tel.value)==false){
        prompt.innerHTML='手机格式不正确'
        preventDefault(ev)
        return
    }

    var pd = form.password.value
    var len = pd.length
    var reg1 = /\d+/
    var reg2= /[a-zA-Z]+/
    var reg3= /[^a-zA-Z0-9]/
    
    if(len<6||len>32){
        prompt.innerHTML='请输入6-32位英文、数字和符号的组合密码' 
        preventDefault(ev)
        return
    }
    
    if(len>=9){
        if(reg1.test(pd)||reg2.test(pd)){
            strong.className='strong1'
            prompt.innerHTML=''
        }
    }
    if(len>6){
        if(reg1.test(pd)&&reg2.test(pd)&&!reg3.test(pd)){
            strong.className='strong2'
            prompt.innerHTML='' 
        }
        else if(reg1.test(pd)&&!reg2.test(pd)&&reg3.test(pd)){
            strong.className='strong2'
            prompt.innerHTML=''
        }
        else if(!reg1.test(pd)&&reg2.test(pd)&&reg3.test(pd)){
            strong.className='strong2'
            prompt.innerHTML=''
        }
        if(reg1.test(pd)&&reg2.test(pd)&&reg3.test(pd)){
            strong.className='strong3'
            prompt.innerHTML=''
            
        }
        
    }
    if(strong.className=='strong'){
        if(6<len&len<9){
            if(reg1.test(pd)||reg2.test(pd)){
                prompt.innerHTML='密码过于简单，请试试英文、数字和符号的组合' 
                strong.className='strong'
                preventDefault(ev)
                return
            }
        } 
        prompt.innerHTML='请输入6-32位英文、数字和符号的组合密码'
        preventDefault(ev)
        return
    }
   
    if(validate.value.toLowerCase()!=picture.innerText.toLowerCase()){
        prompt.innerHTML='请输入右侧验证码'
        preventDefault(ev)
        return
    }
     if(i.className=='check1'){
        prompt.innerHTML='请先同意协议内容'
        preventDefault(ev)
        return
    }
    
}
var reg = document.getElementsByClassName('reg')[0]
var login = document.getElementsByClassName('login')[0]
var loginReg = document.getElementsByClassName('login-reg')[0]
var regLogin = document.getElementsByClassName('reg-login')[0]
// 注册出现登录消失
loginReg.onclick = function(){
    reg.style.display = 'block'
    login.style.display = 'none'
    picture.innerHTML = superCreateCode(4)+'<span class="mark"></span>'
}
// 登录出现注册消失
regLogin.onclick = function(){
    reg.style.display = 'none'
    login.style.display = 'block'
    
}




