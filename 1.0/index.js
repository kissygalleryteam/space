/**
 * @fileoverview 
 * @author Linkjun<pk.link@163.com>
 * @module space
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     * 
     * @class Space
     * @constructor
     * @extends Base
     */
    function Space(comConfig) {
        var self = this;
        //调用父类构造函数
        Space.superclass.constructor.call(self, comConfig);
    }
    S.extend(Space, Base, /** @lends Space.prototype*/{

    }, {ATTRS : /** @lends Space*/{

    }});
    return Space;
}, {requires:['node', 'base']});



