(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,l){e.exports=l(45)},22:function(e,t,l){},24:function(e,t,l){},45:function(e,t,l){"use strict";l.r(t);var i=l(0),s=l.n(i),n=l(15),a=l.n(n),c=(l(22),l(3)),r=l(4),m=l(6),o=l(5),d=l(7),u=(l(24),function(e){var t=e.item,l=t.source.name,i=(t.urlToImage,s.a.createElement("a",{href:t.url,target:"_blank"},s.a.createElement("div",{className:"card-image"},s.a.createElement("img",{src:t.urlToImage})),s.a.createElement("div",{className:"article-text text-left"},s.a.createElement("span",{style:{fontSize:"22px"},className:"row"},t.title),s.a.createElement("span",{className:"row"},s.a.createElement("p",{className:"sourceDisplay"},t.source.name)),s.a.createElement("span",{className:"row"},t.author),s.a.createElement("span",{className:"row"},t.publishedAt),s.a.createElement("p",{className:"row"},s.a.createElement("i",{class:"fa fa-save"})," Save Article"))));return"BBC News"===l?s.a.createElement("div",{className:"element-item red1 newsArticle news-box col-md-4 col-sm red1Link"},i):"Tech Crunch"===l?s.a.createElement("div",{className:"element-item red2 newsArticle news-box col-md-3 col-sm red2Link"},i):"Bloomberg"===l?s.a.createElement("div",{className:"element-item purple newsArticle news-box col-md-3 col-sm purpleLink"},i):"CNBC"===l?s.a.createElement("div",{className:"element-item blue2 newsArticle news-box col-md-3 col-sm blue2Link"},i):"The Wall Street Journal"===l?s.a.createElement("div",{className:"element-item red1 newsArticle news-box col-md-3 col-sm red1Link"},i):"USA Today"===l?s.a.createElement("div",{className:"element-item purple1 newsArticle news-box col-md-3 col-sm purpleLink"},i):"Reuters"===l?s.a.createElement("div",{className:"element-item blue1 newsArticle news-box col-md-3 col-sm blue1Link"},i):"CNN"===l?s.a.createElement("div",{className:"element-item blue3 newsArticle news-box col-md-3 col-sm blue3Link"},i):"Fox News"===l?s.a.createElement("div",{className:"element-item red3 newsArticle news-box col-md-3 col-sm red3Link"},i):"The Hill"===l?s.a.createElement("div",{className:"element-item red1 newsArticle news-box col-md-3 col-sm red1Link"},i):"Slate.com"===l?s.a.createElement("div",{className:"element-item blue4 newsArticle news-box col-md-3 col-sm blue4Link"},i):"Foxbusiness.com"===l?s.a.createElement("div",{className:"element-item red3 newsArticle news-box col-md-3 col-sm red3Link"},i):"Marketwatch.com"===l?s.a.createElement("div",{className:"element-item blue1 newsArticle news-box col-md-3 col-sm blue1Link"},i):"Time"===l?s.a.createElement("div",{className:"element-item red2 newsArticle news-box col-md-3 col-sm red2Link"},i):"The New York Times"===l?s.a.createElement("div",{className:"element-item blue2 newsArticle news-box col-md-3 col-sm blue2Link"},i):s.a.createElement("div",{className:"element-item purple newsArticle news-box col-md-3 col-sm purpleLink"},i)}),b=function(e){function t(e){var l;return Object(c.a)(this,t),(l=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={news:[]},l}return Object(d.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=774beda1345847508da686c538fe6698").then(function(e){return e.json()}).then(function(t){e.setState({news:t.articles})}).catch(function(e){return console.log(e)})}},{key:"renderItems",value:function(){return this.state.news.map(function(e){return s.a.createElement(u,{key:e.url,item:e})})}},{key:"render",value:function(){return s.a.createElement("div",{className:"row"},this.renderItems())}}]),t}(i.Component),v=l(16),w=l.n(v),h=function(e){var t=e.item;return s.a.createElement("div",null,s.a.createElement("div",{className:"divider"}),s.a.createElement("a",{href:t.url,target:"_blank"},s.a.createElement("div",{className:"section"},s.a.createElement("h5",null,t.source.name),s.a.createElement("p",null,t.title))))},p=function(){return s.a.createElement("div",null,s.a.createElement("h1",null,"There are no news, Check your sources!!!"))},E=(i.Component,function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(b,null))}}]),t}(i.Component)),k=l(1),y=l.n(k);a.a.render(s.a.createElement(E,null),document.getElementById("root")),y()(window).scroll(function(){var e=y()(window).scrollTop();0===e&&(y()("#logo-text").css({color:"#495057",background:"none",border:"none"}),y()("#darkblue").css("visibility","hidden"),y()("#blue").css("visibility","hidden"),y()("#lightblue").css("visibility","hidden"),y()("#purple").css("visibility","hidden"),y()("#lightred").css("visibility","hidden"),y()("#red").css("visibility","hidden"),y()("#darkred").css("visibility","hidden")),e>1&&(y()("#darkblue").css("visibility","visible"),y()("#blue").css("visibility","hidden"),y()("#lightblue").css("visibility","hidden"),y()("#purple").css("visibility","hidden"),y()("#lightred").css("visibility","hidden"),y()("#red").css("visibility","hidden"),y()("#darkred").css("visibility","hidden")),e>41&&y()("#blue").css("visibility","visible"),e>81&&(y()("#lightblue").css("visibility","visible"),y()("#logo-text").css({color:"#495057",background:"#FFEFEA",border:"1px solid #495057"}),y()(".logo-text-mobile").css({border:"none"})),e>121&&y()("#purple").css("visibility","visible"),e>161&&y()("#lightred").css("visibility","visible"),e>201&&y()("#lightred").css("visibility","visible"),e>241&&y()("#red").css("visibility","visible"),e>281&&y()("#darkred").css("visibility","visible")})}},[[17,2,1]]]);
//# sourceMappingURL=main.7518226a.chunk.js.map