//var target = document.querySelector('body');
//var alist = document.querySelectorAll('a');
var Body ={ //객체 안의 함수를 메소드라고 한다.
    setColor:function(color){
       // target.style.color = color;
       $('body').css('color',color);
    },
    setBackgroundColor:function(color){
       // target.style.background =color;
       $('body').css('backgroundColor',color);
    }
}

var links = {
    setColor : function (color){
        $('a').css('color',color);
    }
}


function mode(self){
   
    if(self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white')
        self.value='day';

        links.setColor('powderblue');
        

        } else {
        Body.setBackgroundColor('white')
        Body.setColor('black');
        self.value='night';

        links.setColor('blue');
        }
}

