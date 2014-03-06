/**
 * @name 空间分层效果 
 * @author Linkjun<pk.link@163.com>
 * @module space
 * @description :
        2d space perspective effect
        根据鼠标移动范围修改元素所该有的位置,
        因为大多数使用场景中，被分层的均为图片元素，无必要缩放元素透视效果
 **/
KISSY.add(function (S, Node, Base, DOM, Event) {
    var EMPTY = '';
    var $ = Node.all;
    function Space(comConfig) {
        var t = this;
        //调用父类构造函数
        Space.superclass.constructor.call(t, comConfig);
        t.init(comConfig)
    }
    S.extend(Space, Base, /** @lends Space.prototype*/{
        
        /*
            暂停侦听容器
        */
        stop : function(){
            var
            t = this;

            if(t.__mouseMoveEvent != null){
                S.Event.detach(t.container,'mousemove',t.__mouseMoveEvent);
                t.__mouseMoveEvent = null;

                return t;
            }else{
                return false;
            }
        },
        /*
            继续侦听容器
        */
        play : function(){
            var
            t = this;

            //防止多次play
            if(!S.isFunction(t.__mouseMoveEvent)){
                
                //保存事件 供以暂停使用
                t.__mouseMoveEvent = function(e){
                    
                    t.__tiersWalk(e);

                }
                S.Event.on(t.container,'mousemove',t.__mouseMoveEvent);
                return t;
            }else{
                return false;
            }
        },
        /*
            添加层元素
        */
        add : function(el){
            var
            t = this,
            has = S.inArray(el,t.tiers),
            isEl = el instanceof HTMLElement;

            if(!has && isEl){
                t.tiers.push(el);
                t.__recordTiersOffset();
            }else{
                return false;
            }
        },
        /*
            终结某层元素
        */
        kill : function(el){
            var
            t = this,
            //inTiers = S.inArray(el,t.tiers)
            inTiers = S.indexOf(el,t.tiers)

            if(inTiers != -1){
                t.tiers.splice(inTiers, 1);
                t.tiersOffset.splice(inTiers, 1);
                t.tiersRange.splice(inTiers, 1);
            }
        },
        /*
            删除所有层元素
        */
        killAll : function(){
            var t = this;

            t.stop();

            t.tiers = [];
            t.tiersOffset = [];
            t.tiersRange = [];

            delete t;
        },
        /*
            记录最原始的坐标
            每次计算坐标会导致性能下降，将需要的坐标数据初始化时记录下来。
            1.元素的原始坐标存档
            2.元素的层级幅度存档
        */
        __recordTiersOffset : function(){
            var
            t = this,
            tiers = t.tiers,
            len = tiers.length;

            //元素的原始坐标存档
            t.tiersOffset = [];
            //元素的层级幅度存档
            t.tiersRange = [];
            //容器的宽度
            t.containerSize = {
                width : DOM.innerWidth(t.container),
                height : DOM.innerHeight(t.container)
            };

            for (var i = 0 ; i < len; i++) {
                t.tiersOffset.push({
                    left : parseInt(DOM.css(tiers[i],'left')),
                    top : parseInt(DOM.css(tiers[i],'top'))
                });
                t.tiersRange.push({
                    left : Number(DOM.attr(tiers[i],'data-rangex')),
                    top : Number(DOM.attr(tiers[i],'data-rangey'))
                });
            };
        },
        /*
            渲染tiers位置
            尽可能的减少该函数的代码和方法，因为它将直接关系到性能。
        */
        __tiersWalk : function(e){
            var
            t = this,
            tiers = t.tiers,
            len = tiers.length,
            bias = {
                top : e.pageY / t.containerSize.height - .5,
                left : e.pageX / t.containerSize.width - .5
            };//实时算出鼠标在容器中的偏移 百分比-小数
            
            for (var i = 0 ; i < len; i++) {
                tiers[i].style.top = Math.floor(t.tiersOffset[i].top + bias.top * t.tiersRange[i].top) + 'px';
                tiers[i].style.left = Math.floor(t.tiersOffset[i].left + bias.left * t.tiersRange[i].left) + 'px';
            };
        },
        init : function(_config){
            var
            t = this;

            t.tiers = _config.tiers;
            t.container = _config.container;
            //记录最原始的坐标
            t.__recordTiersOffset();
            
            //bind Event
            t.play(t.container);
        }
    }, {ATTRS : /** @lends Space*/{

    }});
    return Space;
}, {requires:['node', 'base', 'dom', 'event']});



