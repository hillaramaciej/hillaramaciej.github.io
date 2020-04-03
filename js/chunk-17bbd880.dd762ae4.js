(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17bbd880"],{"407d":function(t,s,i){
/*!
 * vue-countdown v1.1.5
 * https://fengyuanchen.github.io/vue-countdown
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2020-02-25T01:19:32.769Z
 */
(function(s,i){t.exports=i()})(0,(function(){"use strict";var t=1e3,s=60*t,i=60*s,e=24*i,n="visibilitychange",o={name:"countdown",data:function(){return{counting:!1,endTime:0,totalMilliseconds:0}},props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:function(t){return t>=0}},now:{type:Function,default:function(){return Date.now()}},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:function(t){return t>=0}},transform:{type:Function,default:function(t){return t}}},computed:{days:function(){return Math.floor(this.totalMilliseconds/e)},hours:function(){return Math.floor(this.totalMilliseconds%e/i)},minutes:function(){return Math.floor(this.totalMilliseconds%i/s)},seconds:function(){return Math.floor(this.totalMilliseconds%s/t)},milliseconds:function(){return Math.floor(this.totalMilliseconds%t)},totalDays:function(){return this.days},totalHours:function(){return Math.floor(this.totalMilliseconds/i)},totalMinutes:function(){return Math.floor(this.totalMilliseconds/s)},totalSeconds:function(){return Math.floor(this.totalMilliseconds/t)}},render:function(t){return t(this.tag,this.$scopedSlots.default?[this.$scopedSlots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:this.$slots.default)},watch:{$props:{deep:!0,immediate:!0,handler:function(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},methods:{start:function(){this.counting||(this.counting=!0,this.emitEvents&&this.$emit("start"),"visible"===document.visibilityState&&this.continue())},continue:function(){var t=this;if(this.counting){var s=Math.min(this.totalMilliseconds,this.interval);if(s>0)if(window.requestAnimationFrame){var i,e,n=function n(o){i||(i=o),e||(e=o);var a=o-i;a>=s||a+(o-e)/2>=s?t.progress():t.requestId=requestAnimationFrame(n),e=o};this.requestId=requestAnimationFrame(n)}else this.timeoutId=setTimeout((function(){t.progress()}),s);else this.end()}},pause:function(){window.requestAnimationFrame?cancelAnimationFrame(this.requestId):clearTimeout(this.timeoutId)},progress:function(){this.counting&&(this.totalMilliseconds-=this.interval,this.emitEvents&&this.totalMilliseconds>0&&this.$emit("progress",{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort:function(){this.counting&&(this.pause(),this.counting=!1,this.emitEvents&&this.$emit("abort"))},end:function(){this.counting&&(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit("end"))},update:function(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},handleVisibilityChange:function(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause();break}}},mounted:function(){document.addEventListener(n,this.handleVisibilityChange)},beforeDestroy:function(){document.removeEventListener(n,this.handleVisibilityChange),this.pause()}};return o}))},da76:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"h-screen flex w-full bg-img vx-row no-gutter justify-center items-center"},[e("div",{staticClass:"vx-col sm:w-1/2 md:w-1/2 lg:w-2/5 m-4"},[e("vx-card",[e("div",{staticClass:"vx-card__title mb-6"},[e("h2",{staticClass:"text-center"},[t._v("We are launching soon")])]),e("img",{staticClass:"mx-auto mb-2",attrs:{src:i("e0f8"),alt:"coming-soon",width:"150"}}),e("div",{staticClass:"count-down text-center"},[e("countdown",{attrs:{time:new Date("03/09/2021 00:00:00").getTime()-(new Date).getTime()},scopedSlots:t._u([{key:"default",fn:function(s){return[e("div",{staticClass:"single-counter"},[e("span",{staticClass:"timer"},[t._v(t._s(s.days))]),e("span",[t._v("Days")])]),e("div",{staticClass:"single-counter"},[e("span",{staticClass:"timer"},[t._v(t._s(s.hours))]),e("span",[t._v("Hours")])]),e("div",{staticClass:"single-counter"},[e("span",{staticClass:"timer"},[t._v(t._s(s.minutes))]),e("span",[t._v("Minutes")])]),e("div",{staticClass:"single-counter"},[e("span",{staticClass:"timer"},[t._v(t._s(s.seconds))]),e("span",[t._v("Seconds")])])]}}])})],1),e("vs-divider",{attrs:{position:"center"}},[t._v("Subscribe")]),e("div",{staticClass:"subscription"},[e("span",[t._v("If you would like to be notified when our app is live, Please subscribe to our mailing list.")]),e("vs-input",{staticClass:"w-full mb-4",attrs:{type:"email","label-placeholder":"Email"},model:{value:t.value1,callback:function(s){t.value1=s},expression:"value1"}}),e("vs-button",{staticClass:"w-full"},[t._v("Subscribe")])],1)],1)],1)])},n=[],o=i("407d"),a=i.n(o),l={data:function(){return{value1:""}},components:{countdown:a.a}},u=l,c=i("2877"),r=Object(c["a"])(u,e,n,!1,null,null,null);s["default"]=r.exports},e0f8:function(t,s,i){t.exports=i.p+"img/rocket.b4878de0.png"}}]);
//# sourceMappingURL=chunk-17bbd880.dd762ae4.js.map