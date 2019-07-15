var logForm = document.getElementById('logForm')
var tiShi  = logForm.getElementsByClassName('tishi')[0]
logForm.onsubmit = function(ev){
    var ev =window.event||ev
    if(logForm.tel.value==''){
        tiShi.innerHTML='请输入账号'
        preventDefault(ev)
        return
    }
    if(logForm.password.value==''){
        tiShi.innerHTML='请输入密码'
        preventDefault(ev)
        return
    }
}
