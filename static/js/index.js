/* ----顶部导航部位---- */
nva('nva_ul')
function nva(id){
    var nvaUl = document.getElementById(id)
    var navLi = nvaUl.getElementsByTagName('li')
    var len = navLi.length

    for(var i = 0;i<len;i++){
        navLi[i].onclick = function(){
            for(var j = 0;j<len;j++){
                navLi[j].className = ''
            }
            this.className = 'nva_li'
        }
    }
}

/*----- 轮播图部位----- */
bannerWheel()
function bannerWheel(){
    var bnner = document.getElementById('banner')
    var bigUl =banner.getElementsByTagName('ul')[0]
    var bigLi = bigUl.getElementsByTagName('li')
    var smallUl =banner.getElementsByTagName('ul')[1]
    var smallLi =smallUl.getElementsByTagName('li')
    var pre  =banner.getElementsByTagName('span')[0]
    var next = banner.getElementsByTagName('span')[1]

    var bigPic = ''
    var smallPic = ''
    var arr = [
        {name:'大话西游',bigSur:'banner_1.jpg',smallSur:'banner_pic_1.jpg'},
        {name:'游戏规则',bigSur:'banner_2.jpg',smallSur:'banner_pic_2.jpg'},
        {name:'厨神',bigSur:'banner_3.jpg',smallSur:'banner_pic_3.jpg'},
        {name:'乘风破浪',bigSur:'banner_4.jpg',smallSur:'banner_pic_4.jpg'},
        {name:'合约男女',bigSur:'banner_5.jpg',smallSur:'banner_pic_5.jpg'},
        {name:'咱们分手吧',bigSur:'banner_6.jpg',smallSur:'banner_pic_6.jpg'},
        {name:'被在电梯说话',bigSur:'banner_7.jpg',smallSur:'banner_pic_7.jpg'},
        {name:'天空之眼',bigSur:'banner_8.jpg',smallSur:'banner_pic_8.jpg'},
        {name:'致命甜心',bigSur:'banner_9.jpg',smallSur:'banner_pic_9.jpg'}]

    var len = arr.length

    for(var i = 0;i<len;i++){
        
        bigPic+='<li><a href=""><img src="static/images/'+arr[i].bigSur+'" alt=""></a></li>'
        smallPic+='<li><a href=""><img src="static/images/'+arr[i].smallSur+'" alt=""></a></li>'
    }
    bigUl.innerHTML = bigPic
    smallUl.innerHTML = smallPic
    var index=0
    wheel()
    function wheel(){
        
        for(var i=0;i<len;i++){
            bigLi[i].style.opacity='0'
            bigLi[i].style.filter = 'alpha(opacity=100)'
            clearInterval(bigLi[i].timer)
            // bigLi[i].className=''
            smallLi[i].className=''
        }
        // bigLi[index].className='active'
        smallLi[index].className='active'
        sMove(bigLi[index],{opacity:100} )
    }
    function nextPic(){
        index++
        if(index>=(len)){
            index=0
        }
        wheel()
    }
    next.onclick = function(){
        nextPic()
    }
    pre.onclick = function(){
        index--
        if(index<0){
            index=len-1
        }
        wheel()
    }
    for(var i = 0;i<len;i++){
        smallLi[i].index = i
        smallLi[i].onmouseenter = function(){
            index = this.index
            wheel()
        }
    }  
    var timer  =null
    clearInterval(timer)
    timer = setInterval(nextPic,3000)  
    bnner.onmouseenter = function(){
        clearInterval(timer)
    }
    bnner.onmouseleave = function(){
        timer=setInterval(nextPic,3000)
    }
}

/* -----vip特权----- */
vipWheel()
function vipWheel(){
    var vip = document.getElementById('vip')
    var previpus = vip.getElementsByTagName('span')[0] 
    var next = vip.getElementsByTagName('span')[1]
    var vipUl = vip.getElementsByTagName('ul')[0]
    var vipLi = vipUl.getElementsByTagName('li')
    var len = vipLi.length
    var liWidth =parseInt( getStyle( vipLi[0], 'width'))+parseInt(getStyle( vipLi[0], 'marginRight'))
    vipUl.style.width = liWidth*len+'px'
    var index  =0

    next.onclick = function(){
        index++
        if(index>5){
            index=5
        }
       /*  linearMove( {
            ele:vipUl,
            prop:'left',
            target:-5*liWidth,
            speed:40
        } ) */
        sMove( vipUl,{left:-5*index*liWidth})
    }
    previpus.onclick = function(){
        index--
        if(index<0){
            index=0
        }
    /*  linearMove( {
            ele:vipUl,
            prop:'left',
            target:-index*liWidth,
            speed:40
        } ) */
        sMove( vipUl,{left:0})
    }
}

/* -----强烈推荐----- */














    
