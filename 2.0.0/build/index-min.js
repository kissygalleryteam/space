/*!build time : 2014-03-06 10:36:03 AM*/
KISSY.add("kg/space/2.0.0/index",function(a,b,c,d){function e(a){var b=this;e.superclass.constructor.call(b,a),b.init(a)}b.all;return a.extend(e,c,{stop:function(){var b=this;return null!=b.__mouseMoveEvent?(a.Event.detach(b.container,"mousemove",b.__mouseMoveEvent),b.__mouseMoveEvent=null,b):!1},play:function(){var b=this;return a.isFunction(b.__mouseMoveEvent)?!1:(b.__mouseMoveEvent=function(a){b.__tiersWalk(a)},a.Event.on(b.container,"mousemove",b.__mouseMoveEvent),b)},add:function(b){var c=this,d=a.inArray(b,c.tiers),e=b instanceof HTMLElement;return d||!e?!1:(c.tiers.push(b),void c.__recordTiersOffset())},kill:function(b){var c=this,d=a.indexOf(b,c.tiers);-1!=d&&(c.tiers.splice(d,1),c.tiersOffset.splice(d,1),c.tiersRange.splice(d,1))},killAll:function(){var a=this;a.stop(),a.tiers=[],a.tiersOffset=[],a.tiersRange=[],delete a},__recordTiersOffset:function(){var a=this,b=a.tiers,c=b.length;a.tiersOffset=[],a.tiersRange=[],a.containerSize={width:d.innerWidth(a.container),height:d.innerHeight(a.container)};for(var e=0;c>e;e++)a.tiersOffset.push({left:parseInt(d.css(b[e],"left")),top:parseInt(d.css(b[e],"top"))}),a.tiersRange.push({left:Number(d.attr(b[e],"data-rangex")),top:Number(d.attr(b[e],"data-rangey"))})},__tiersWalk:function(a){for(var b=this,c=b.tiers,d=c.length,e={top:a.pageY/b.containerSize.height-.5,left:a.pageX/b.containerSize.width-.5},f=0;d>f;f++)c[f].style.top=Math.floor(b.tiersOffset[f].top+e.top*b.tiersRange[f].top)+"px",c[f].style.left=Math.floor(b.tiersOffset[f].left+e.left*b.tiersRange[f].left)+"px"},init:function(a){var b=this;b.tiers=a.tiers,b.container=a.container,b.__recordTiersOffset(),b.play(b.container)}},{ATTRS:{}}),e},{requires:["node","base","dom","event"]});