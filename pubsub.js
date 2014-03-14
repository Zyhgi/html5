/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 13-8-9
 * Time: 下午3:06
 * To change this template use File | Settings | File Templates.
 */
var $ = require("jquery");

var PubSub = {
        setup: function(){
            this.o = $({});
        },

        subscribe = function() {
        this.o.bind.apply( this.o, arguments );
    },

    publish = function() {
        this.o.trigger.apply( this.o, arguments );
    }
}

exports = PubSub;
