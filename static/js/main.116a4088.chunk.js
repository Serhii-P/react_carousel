(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(2),o=n.n(c),s=n(3),r=n(4),l=n(6),m=n(5),u=n(7),p=(n(13),n(14),function(t){var e=t.images,n=t.prevClick,a=t.position,c=t.count,o=t.nextClick,s=t.changeItemWidth,r=t.imageSize,l=t.changeElementNumber,m=t.step,u=t.changeStep,p=t.isActive,g=t.startRotate,h=t.stopRotate,v={marginLeft:"-".concat(a,"px")},f={width:"".concat(r*c,"px"),height:"".concat(r*c,"px")},b={width:"".concat(r,"px")},E={width:"".concat(r*c+70,"px"),height:"".concat(r*c+70,"px")};return i.a.createElement("div",null,i.a.createElement("div",{className:"menuContainer"},"Size of pictures:",i.a.createElement("input",{type:"range",min:"130",max:"390",value:r,onChange:s,className:"menu-item"}),"Nubmer of bubbles:",i.a.createElement("select",{className:"menu-item",value:c,onChange:l},e.map(function(t,e){return i.a.createElement("option",{key:t,value:e+1},e+1)})),"Step:",i.a.createElement("select",{className:"menu-item",value:m,onChange:u},e.map(function(t,e){return i.a.createElement("option",{key:t,value:e+1},e+1)})),"Rotate:",p&&i.a.createElement("button",{className:"menu-item",type:"button",onClick:h},"Stop"),!p&&i.a.createElement("button",{className:"menu-item",type:"button",onClick:g},"Start")),i.a.createElement("div",{className:"Carousel-wrapper"},i.a.createElement("div",{className:"button-container",style:E},i.a.createElement("button",{className:"Carousel__left-button",type:"button",onClick:n}),i.a.createElement("div",{className:"Carousel",style:f},i.a.createElement("ul",{className:"Carousel__list",style:v,value:v.marginLeft},e.map(function(t,e){return i.a.createElement("li",{key:t,style:b},i.a.createElement("img",{style:b,src:t,alt:e+1}))}))),i.a.createElement("button",{className:"Carousel__right-button",type:"button",onClick:o}))))}),g=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(l.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(i)))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],width:130,count:3,position:0,imageSize:130,step:3,height:130,isActive:!1},n.changeStep=function(t){n.setState({step:t.target.value})},n.prevClick=function(){n.setState(function(t){return t.position<1170?{position:t.position+t.width*t.step}:{position:0}})},n.nextClick=function(){n.setState(function(t){return t.position>0?{position:t.position-t.width*t.step}:null})},n.changeItemWidth=function(t){n.setState({imageSize:t.target.value})},n.changeElementNumber=function(t){n.setState({count:t.target.value})},n.startRotate=function(){n.timer=setInterval(function(){n.setState(function(t){return t.position<1170?{isActive:!0,position:t.position+1*t.width}:{position:0}})},2e3)},n.stopRotate=function(){clearInterval(n.timer),n.setState(function(t){return{isActive:!1===t}})},n}return Object(u.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this.state,e=t.images,n=t.position,a=t.width,c=t.count,o=t.imageSize,s=t.step,r=t.height,l=t.isActive;return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Carousel with ",e.length," images"),i.a.createElement(p,{prevClick:this.prevClick,position:n,width:a,count:c,nextClick:this.nextClick,changeItemWidth:this.changeItemWidth,imageSize:o,changeElementNumber:this.changeElementNumber,step:s,changeStep:this.changeStep,images:e,height:r,isActive:l,startRotate:this.startRotate,stopRotate:this.stopRotate}))}}]),e}(i.a.Component);o.a.render(i.a.createElement(g,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.116a4088.chunk.js.map