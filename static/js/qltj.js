ajax({
    url:'static/js/qltj.json',
    success:function(result){
        qltj(JSON.parse(result))
    }
})
function qltj(result){
    var qltj = document.getElementById('qltj')
    var recoUl = qltj.getElementsByTagName('ul')[0]
    var xin=result
    var str=''
    var len=xin.length
    console.log(len)
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
        console.log(str)
        recoUl.innerHTML = str
}

}