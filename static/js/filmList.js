
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
ajax({
    url:'static/js/filmList.json',
    success:function(result){
        filmList(JSON.parse(result))
    }
})
function filmList(result){
    var list = document.getElementById('list')
    var recoUl = list.getElementsByTagName('ul')[0]
    var xin=result
    var str=''
    var len=xin.length
    // console.log(len)
    for(var i= 0;i<len;i++){
        var hua=''
        switch(xin[i].huazhi){
            case '1':
                hua='标清' 
            break
            case '2':
                hua='高清'
            break
            case '3':
                hua='超清'
            break
            case '4':
                hua='1080P'
            break
            case '5':
                hua='蓝光'
            break

        }

        var vip = ''
        switch(xin[i].vip){
            case '1':
                vip='vip_grade01'
            break
            case '2':
                vip='vip_grade02'
            break
            case '3':
                vip='vip_grade03'
            break
        }
        var xinxi = xin[i]
        str+='<li>'
        str+='<div class="film_top">'
            str+='<p class="vip_grade '+vip+'">vip专享</p>'
            str+='<a href="#"><img src="'+xinxi.url+'" alt=""></a>'
            str+='<span class="huazhi">'+hua+'</span>'
        str+='</div>'
        str+='<div class="film_info">'
            str+='<a href="#" class="film_title">'+xinxi.name+'</a>'
            str+='<span class="film_introduction">'+xinxi.filmIn+'</span>'
            str+='<p class="pingfen">'+xinxi.pingfen+'</p>'
        str+='</div>'
        str+='</li>'
        recoUl.innerHTML = str
    
    }

}