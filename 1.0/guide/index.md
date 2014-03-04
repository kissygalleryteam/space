## 综述

Space是。

* 版本：1.0
* 作者：Linkjun
* demo：[http://gallery.kissyui.com/space/1.0/demo/index.html](http://gallery.kissyui.com/space/1.0/demo/index.html)

## 初始化组件
	<div class="J_space">
		<div class="space-tier" data-rangex="40" data-rangey="-20"></div>
	</div>
	
	var space = new Space({
	    contianer : S.get('.J_space'),//{Element}
	    tiers : S.query('.space-tier','.J_space') //{NodeList}
	});

## API说明

### 参数

*contianer* {Element}

鼠标事件侦听的容器，必填

*tiers* {Array}

需要实时变换坐标的层元素， 注：每个Element需要添加两个属性

data-rangex="30"; //鼠标横向范围响应值（正数:与鼠标同向,负数:与鼠标逆向）

data-rangey="-20"; //鼠标纵向范围响应值（正数:与鼠标同向,负数:与鼠标逆向）


### 方法

*play* (null)

继续对当前实例的侦听

*stop* (null)

暂停对当前实例的侦听

*add* (Element)

向当前实例中添加一个层元素

*kill* (Element)

删除当前实例中的一个层元素

*killAll* (null)

清空space中的所有层元素



