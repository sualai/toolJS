var mask = document.getElementsByClassName('mask')[0];
var show = document.querySelector('.big_bg>img');
var big = document.getElementsByClassName('big')[0];
var small = document.getElementsByClassName('small')[0];
var width = show.offsetWidth - big.offsetWidth;
var height = show.offsetHeight - big.offsetHeight
// console.log(width,height)
function Magifier(mask,show){
    this.mask = mask;
    this.show = show;
    this.width = 400;
    this.height = 350;
    this.m_width = 200;
    this.m_height = 175;
    this.persenX = 0;
    this.persenY =0;
    this.mask_x = 0;
    this.mask_y = 0;
    this.x = 0;
     this.y = 0;
}
Magifier.prototype.init = function(){
    this.tab(small);
}
Magifier.prototype.tab = function(dom){
    var _this = this;
    dom.addEventListener('mouseenter',function(){
        _this.mask.style.display = 'block';
        _this.show.style.display = 'block';
    })
    dom.addEventListener('mousemove',function(e){
        var event = e||window.event;
        _this.mask_x = (event.pageX- _this.m_width/2)-small.offsetLeft;
        _this.mask_y = (event.pageY-_this.m_height/2)-small.offsetTop;
        if(_this.mask_x < 0 ){
            _this.mask_x = 0;
        }
        if(_this.mask_y < 0 ){
            _this.mask_y = 0;
        }
        if(_this.mask_x > (_this.width - _this.m_width) ){
            _this.mask_x = (_this.width - _this.m_width);
        }
        if(_this.mask_y > (_this.height - _this.m_height) ){
            _this.mask_y = (_this.height - _this.m_height);
        }
        _this.persenX = _this.mask_x/(_this.width - _this.m_width);
        _this.persenY = _this.mask_y/(_this.height - _this.m_height)
        _this.mask.style.left = _this.mask_x +'px'
        _this.mask.style.top = _this.mask_y +'px'
        console.log(width*_this.persenX,height*_this.persenY)
        _this.show.style.left = -(width)*_this.persenX+'px' 
        _this.show.style.top = -(height)*_this.persenY +'px';
        // console.log(_this.persenX,_this.persenY)
    })
    dom.addEventListener('mouseleave',function(){
       _this.mask.style.display = 'none';
        // _this.show.style.display = 'none';
    })
}

var magnifier = new Magifier(mask,show)
magnifier.init()