(this["webpackJsonpredux-movie"]=this["webpackJsonpredux-movie"]||[]).push([[0],{13:function(e,t,a){e.exports=a(25)},18:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),i=a.n(r),c=(a(18),a(8)),s=a(9),o=a(12),u=a(11),m=a(2),E={selectMovie:function(e){return{type:"MOVIE_SELECTED",payload:e}}},v=Object(m.b)((function(e){return{movies:e.movies}}),E)((function(e){var t=e.movies,a=e.selectMovie,n=t.map((function(e){return l.a.createElement("div",{key:e.title,className:"list"},l.a.createElement("span",null,e.title),l.a.createElement("button",{onClick:function(){return a(e)}},"details"))}));return l.a.createElement("div",{className:"list-container"},l.a.createElement("h2",null,"Movie List"),l.a.createElement("ul",null,n))})),d=Object(m.b)((function(e){return{selectedMovie:e.selectedMovie}}))((function(e){var t=e.selectedMovie;return t?l.a.createElement("div",{className:"details-container"},l.a.createElement("h2",null,"Movie"),l.a.createElement("div",{className:"properties"},l.a.createElement("p",null,"Title: ",t.title),l.a.createElement("p",null,"Release Date: ",t.releaseDate),l.a.createElement("p",null,"Rating: ",t.rating))):l.a.createElement("div",{className:"details-container",style:{width:"70%"}},l.a.createElement("h2",null,"Movie"),l.a.createElement("div",{className:"properties"},l.a.createElement("p",null,"Select Movie")))})),p=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"Redux Movies"),l.a.createElement("div",{className:"container"},l.a.createElement(v,null),l.a.createElement(d,null)))}}]),a}(n.Component),f=a(1),O=Object(f.b)({movies:function(){return[{title:"Spider-Man: Homecoming",releaseDate:"05-07-2017",rating:7.4},{title:"Aquaman",releaseDate:"12-07-2018",rating:7},{title:"Black Panther",releaseDate:"02-13-2018",rating:7.4},{title:"Avengers: Infinity War",releaseDate:"04-25-2018",rating:8.3},{title:"Guardians of the Galaxy",releaseDate:"07-30-2014",rating:7.9}]},selectedMovie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVIE_SELECTED":return t.payload;default:return e}}});i.a.render(l.a.createElement(m.a,{store:Object(f.c)(O,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())},l.a.createElement(p,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.1ab1ad1e.chunk.js.map