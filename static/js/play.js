/* ------头部导航部位----- */
;(function(){
    $('#nva').mouseenter(function(){
        $('#nva').children('div').show(100)
    })
    var timer  =null
    $('#nva').mouseleave(function(){
        // $('#nva').children('div').hide(100)
        clearTimeout(timer)
        timer = setTimeout(function () {
            $('#nva').children('div').hide(100)
        },100)
    })
    $('#nva').children('div').mouseenter(function(){
        clearTimeout(timer)
        $(this).css('display','block')
    })
    $('#nva').children('div').mouseleave(function(){
        $(this).css('display','none')
    })
})()

// 头部导航右边隐藏部位
;(function(){
    $('.header_right').children('.looked').mouseover(function(){
        $('.header_right').children('.look').css('display','block')
    })
    var timer = null
    $('.header_right').children('.looked').mouseout(function(){
        clearTimeout(timer)
        timer = setTimeout(function(){
            $('.header_right').children('.look').css('display','none')
        },100)  
    })
    $('.header_right').children('.look').mouseover(function(){
        clearTimeout(timer)
        $(this).css('display','block')
    })
    $('.header_right').children('.look').mouseout(function(){
        $(this).css('display','none')
    })
    // 收藏部分的隐藏
    $('.header_right').children('.shoucang').mouseover(function(){
        $('.header_right').children('.shou').css('display','block')
    })
    var timer2 = null
    $('.header_right').children('.shoucang').mouseout(function(){
        clearTimeout(timer2)
        timer2 = setTimeout(function(){
            $('.header_right').children('.shou').css('display','none')
        },100)
    })
    $('.header_right').children('.shou').mouseover(function(){
        clearTimeout(timer2)
        $(this).css('display','block')
    })
    $('.header_right').children('.shou').mouseout(function(){
        $(this).css('display','none')
    })

    // 客户端隐藏部分
    $('.header_right').children('.app').mouseenter(function(){
        $('.kehu').css('display','block')
    })
    var timer3 = null
    $('.header_right').children('.app').mouseleave(function(){
        clearTimeout(timer3)
        timer3 = setTimeout(function(){
            $('.kehu').css('display','none')
        },100) 
    })
    $('.header_right').children('.kehu').mouseenter(function(){
        clearTimeout(timer3)
        $(this).css('display','block')
    })
    $('.header_right').children('.kehu').mouseleave(function(){
        $(this).css('display','none')
    })
})()

/* -----中间播放部分----- */
;(function(){
    $('.film_title span').on('click',function(){
        $('.film_title span').removeClass('active')
        $(this).addClass('active')
    })
    ajax({
        url:'static/js/playFilm.json',
        success:function(result){
            playFilm(JSON.parse(result))
            
        }
    })
    function playFilm(result){
        var str = ''
        var len  =result.length
        var filmUl = document.getElementById('filmContent')
        for(var i=0;i<len;i++){
            str+='<li>'
                str+='<a href="#">'+result[i].intor+'</a>'
                str+='<span>视频</span>'
            str+='</li>'
            filmUl.innerHTML = str
            
        }
    }
    $('.scroll_small').mousedown(function(ev){
        var y = ev.clientY-$('.scroll_small').position().top
        $('.scroll').on('mousemove','.scroll_small',function(ev){
            $('.scroll_small').css('top',(ev.clientY-y)+'px')
            var t = ev.clientY-y
            if(t<=0){
                $('.scroll_small').css('top',0+'px') 
            }
            else if(t>=($('.scroll').height()-$('.scroll_small').height())){
                $('.scroll_small').css('top',($('.scroll').height()-$('.scroll_small').height())+'px')
            }
            var g = parseInt($('.scroll_small').css('top'))
            var scale = g/parseInt($('.scroll').height()-$('.scroll_small').height())
            // console.log(g/parseInt($('.scroll').height()-$('.scroll_small').height()))
    
            $('.filmAll').outerHeight(true)
            // console.log($('.filmAll').outerHeight(true))
            var h = ($('.film_bottom').height())
            $('.filmAll').css('top',-(($('.filmAll').outerHeight(true)-h)*scale)+'px')
            


            $('.scroll_small').mouseup(function(ev){
                $('.scroll').off()
            })
            return false

        })   
    })
    $('.scroll_small').mouseup(function(){
        $('.scroll').off()
        // $('.scroll_small').off()

    })
})()

/* -----猜你喜欢部分 ----- */
;(function(){
    ajax({
        url:'static/js/movie_love.json',
        success: function(result){
            movie(JSON.parse(result))
        }
    })
    function movie(result){
        var str = ''
        var len = result.length
        var movieLove = document.getElementsByClassName('love_ul')[0]
        for(var i =0;i<len;i++){
            str+='<li>'
                str+='<img src="'+result[i].url+'" alt="">'
                str+='<div class="movie_main">'
                    str+='<div class="movie_top">'
                        str+='<a href="#" class="movie_title">'+result[i].name+'</a>'
                        str+='<span class="grad">'+result[i].pingfen+'</span>'
                    str+='</div>'
                    str+='<P class="movie_intro">'+result[i].filmIn+'</P>'
                str+='</div>'
                str+='<div class="heart">爱心</div>'
            str+='</li>'
        }
        movieLove.innerHTML=str
    }
})()

/* -----热门推荐部分----- */
;(function(){
    ajax({
        url:'static/js/hot.json',
        success:function(result){
            hot(JSON.parse(result))
        }
    })
    function hot(result){
        var str = ''
        var len = result.length
        var hot = document.getElementById('hot')
        for(var i=0;i<len;i++){
            str+='<li>'
                str+='<a href="#">'
                    str+='<img src="'+result[i].url+'" alt="">'
                    str+='<span class="hot_name">'+result[i].name+'</span>'
                str+='</a> '
            str+='</li>'
        }
        hot.innerHTML = str
    }
})()

/* -----电影排行榜------ */
;(function movie_list(){
    ajax({
        url:'static/js/list.json',
        success:function(result){
            list(JSON.parse(result))
        }
    })
    function list(result){
        var str = ''
        var len = result.length
        $.each(result,function(index,item){
            str+='<li>'
                str+='<div class="only">'
                    str+='<span>'+item.ranking+'</span>'
                    str+='<a href="#">'+item.name+'</a>'
                    str+='<b>'+item.pingfen +'</b>'
                str+='</div>'
                str+='<div class="all">'
                    str+='<a href="#"><img src="'+item.url+'" alt=""></a> '
                    str+='<div class="all_name">'
                        str+='<a href="#">'
                            str+='<span>'+item.ranking+'</span> '
                            str+='<b>'+item.name+'</b>'
                        str+='</a>'
                    str+='</div>'
                str+='</div>'
            str+='</li>'
        })
        $('.list').html(str)
        $('.list li .only:eq(0)').addClass('only_active')
        $('.list li .all:eq(0)').addClass('all_active')
        $.each($('.list li'),function(index,item){
            $('.list li:eq('+index+')').on('mouseenter',function(){
                $('.list li .only').removeClass('only_active')
                $('.list li .all').removeClass('all_active')
                $('.list li:eq('+index+') .only').addClass('only_active')
                $('.list li:eq('+index+') .all').addClass('all_active')
            })
        })
        
    }
})()

/* -----发表评论部分----- */
;(function(){
    ajax({
        url:'static/js/whiteComment.json',
        success:function(result){
            white(JSON.parse(result))
        }
    })
    function white(result){
        var len = result.length
        var str = ''
        $.each(result,function(index,item){
            str+='<li>'
                str+='<div class="first">'
                    str+='<a href="#">'
                        str+='<img src="static/images/100_60_60.jpg" alt="" class="head_poto">'
                    str+='</a> '
                    str+='<p>'
                        str+='<span class="user_name">'+item.name+'</span>'
                        str+='<span class="user_time">'+item.time+'</span>'
                    str+='</p>'
                str+='</div>'
                str+='<div class="srcond_row">'
                    str+=''+item.content+''
                str+='</div>'
                str+='<div class="third_row">'
                    str+='<span class="zan">'
                        str+='<span class="jubao">举报</span>'
                    str+='</span>'
                    str+='<span>'+item.num+'</span>'
                str+='</div>'
            str+='</li>'
            $('.user_comments').html(str)
        })
    }
    
    $('.witing').on('focus',function(){
        $('.witing').val('')
        /* var number = Number($('.pingjia b').html())
        $(window).on('keydown',function(){
            var len = $('.witing').val().length
            console.log(len)
            if(len+1){
                number = number-1
                $('.pingjia b').html(number )  
            }
            else if(len-1){
                number = number+1
                $('.pingjia b').html(number ) 
            }
        }) */
        
        
        $('.verification_code').css('display','block')
        $('.code').html(superCreateCode(4))
        $('.trade').on('click',function(){
            $('.code').html(superCreateCode(4))
        })
        $('.verification_code input').on('focus',function(){
            $('.verification_code input').val('')
        })
    
    
    })
    var num = Number($('.nowPage').html())
    $('.next').on('click',function(){
        num++
        if(num>78){
            num=0    
        }
        $('.nowPage').html(num)
        
    })
    $('.prev').on('click',function(){
        num--
        if(num<1){
            num=1
        }
        $('.nowPage').html(num)
    })
    
    $('.view_comments span').on('click',function(){
        $('.view_comments span').removeClass('hua')
        $(this).addClass('hua')
    })
})()




    





