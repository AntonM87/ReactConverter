(this.webpackJsonpconverter=this.webpackJsonpconverter||[]).push([[0],{52:function(e,t,r){},53:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(27),s=r.n(a),u=r(3),i=r.n(u),l=r(7),o=r(8),j=r(9),h=r(12),b=r(11),d=r(18),f=r.n(d),p=function(){function e(){Object(o.a)(this,e),this.USDquerySting="http://apilayer.net/api/live?access_key=7ef3a3b4cf0bb3cb761bfdcc278247b1&currencies=RUB&source=USD&format=1"}return Object(j.a)(e,[{key:"getSelectedCurrency",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"USD"!==t&&(t="USD",alert("\u0423\u0432\u044b API \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e \u0434\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043a\u0443\u0440\u0441 \u043f\u043e \u0434\u043e\u043b\u043b\u0430\u0440\u0443")),r="",e.next=4,f.a.get(this.getRequestString(t)).then((function(e){200===e.status&&(r=e.data.quotes)}));case 4:return e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getRequestString",value:function(e){return"http://apilayer.net/api/live?access_key=7ef3a3b4cf0bb3cb761bfdcc278247b1&currencies=EUR,GBP,CAD,PLN,RUB&source=".concat(e,"&format=1")}},{key:"getUSDRUBcurrency",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="",e.next=3,f.a.get(this.USDquerySting).then((function(e){200===e.status&&(t=e.data.quotes.USDRUB)}));case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),v=r(2),O=r(10),y=r(6),x=r(1),g=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).currency=n.props.cur,n.state={result:""},n.USDref=c.a.createRef(),n.RUBref=c.a.createRef(),n.getResult=n.getResult.bind(Object(O.a)(n)),n}return Object(j.a)(r,[{key:"getResult",value:function(e){var t=e.target.value,r=e.target.name,n=this.USDref.current,c=this.RUBref.current;return 0===t.length||t<0?(n.value="Empty",void(c.value="Empty")):void("usd"!==r?"rub"!==r||(n.value=(t/this.currency).toFixed(1)):c.value=(this.currency*t).toFixed(1))}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:"container custom-container",children:[Object(x.jsx)("div",{className:"logo",children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u043e\u043b\u043b\u0430\u0440\u044b \u0432 \u0440\u0443\u0431\u043b\u0438"}),Object(x.jsxs)("p",{className:"current-rate",children:["\u0422\u0435\u043a\u0443\u0449\u0438\u0439 \u043a\u0443\u0440\u0441 \u0440\u0443\u0431\u043b\u044f \u043a \u0434\u043e\u043b\u043b\u0430\u0440\u0443 ",(+this.props.cur).toFixed(1)]}),Object(x.jsxs)("div",{className:"input-container",children:[Object(x.jsxs)("label",{children:[Object(x.jsx)("i",{class:"fas fa-dollar-sign"}),Object(x.jsx)("input",{ref:this.USDref,onChange:this.getResult,name:"usd",type:"number",placeholder:"USD"})]}),Object(x.jsx)("i",{className:"fas fa-exchange-alt"}),Object(x.jsxs)("label",{children:[Object(x.jsx)("i",{class:"fas fa-ruble-sign"}),Object(x.jsx)("input",{ref:this.RUBref,onChange:this.getResult,name:"rub",type:"number",placeholder:"RUB"})]})]}),Object(x.jsx)("div",{className:"rates-page-link",children:Object(x.jsx)(y.b,{to:"/RatesPAge",children:"\u041a\u0443\u0440\u0441\u044b \u0432\u0430\u043b\u044e\u0442"})})]})}}]),r}(c.a.Component);function m(e){return Object(x.jsxs)("li",{style:{},children:[Object(x.jsxs)("p",{children:[e.name," :"]}),Object(x.jsx)("p",{children:e.value.toFixed(1)})]})}function S(){return Object(x.jsxs)("div",{className:"err404",children:[Object(x.jsx)("h1",{children:Object(x.jsx)("strong",{children:"404"})}),Object(x.jsx)("h3",{children:"Page Not Found"}),Object(x.jsx)("div",{className:"rates-page-link",children:Object(x.jsx)(y.b,{to:"/",children:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})})]})}function U(e){var t=e.currencyArr;return Object(x.jsxs)("div",{className:"rate",children:[Object(x.jsx)("div",{className:"logo",children:"\u0422\u0435\u043a\u0443\u0449\u0438\u0435 \u043a\u0443\u0440\u0441\u044b \u0432\u0430\u043b\u044e\u0442!"}),Object(x.jsxs)("select",{onChange:e.handlerSelectedCurrency,children:[Object(x.jsx)("option",{value:"USD",children:"USD"}),Object(x.jsx)("option",{value:"EUR",children:"EUR"}),Object(x.jsx)("option",{value:"RUB",children:"RUB"})]}),Object(x.jsx)("ul",{children:t.map((function(e,t){return Object(x.jsx)(m,{name:e[0],value:e[1]},t)}))}),Object(x.jsx)("div",{className:"rates-page-link",children:Object(x.jsx)(y.b,{to:"/",children:"\u041d\u0430\u0437\u0430\u0434"})})]})}var R=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).state={selectedCurrency:"",currency:""},n.currencyArr="",n.handlerSelectedCurrency=n.handlerSelectedCurrency.bind(Object(O.a)(n)),n}return Object(j.a)(r,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({selectedCurrency:"USD"});case 2:return e.next=4,this.selectedCurrency(this.state.selectedCurrency);case 4:t=e.sent,this.setState({currency:t});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"selectedCurrency",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new p,e.next=3,r.getSelectedCurrency(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"handlerSelectedCurrency",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var r,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.target.value,e.next=3,this.selectedCurrency(r);case 3:return n=e.sent,e.next=6,this.setState({selectedCurrency:r,currency:n});case 6:console.log("currency");case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCurrencyArr",value:function(){this.currencyArr=Object.entries(this.state.currency)}},{key:"render",value:function(){return this.getCurrencyArr(),console.log("this.currencyArr",this.currencyArr),Object(x.jsx)(U,{handlerSelectedCurrency:this.handlerSelectedCurrency,currencyArr:this.currencyArr})}}]),r}(c.a.Component),C=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(e){var n;return Object(o.a)(this,r),(n=t.call(this,e)).state={USDRUB:""},n}return Object(j.a)(r,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new p,e.t0=this,e.next=4,t.getUSDRUBcurrency();case 4:e.t1=e.sent,e.t2={USDRUB:e.t1},e.t0.setState.call(e.t0,e.t2);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.USDRUB;return Object(x.jsx)("div",{children:Object(x.jsxs)(v.c,{children:[Object(x.jsx)(v.a,{path:"/",element:Object(x.jsx)(g,{cur:e})}),Object(x.jsx)(v.a,{path:"/RatesPage",element:Object(x.jsx)(R,{}),children:"\u0414\u0430\u043b\u0435\u0435"}),Object(x.jsx)(v.a,{path:"*",element:Object(x.jsx)(S,{})})]})})}}]),r}(c.a.Component),k=(r(52),function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,54)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),a(e),s(e)}))});s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(y.a,{children:Object(x.jsx)(C,{})})}),document.getElementById("root")),k()}},[[53,1,2]]]);
//# sourceMappingURL=main.50dda5f8.chunk.js.map