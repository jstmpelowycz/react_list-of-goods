(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{21:function(e,t,s){},25:function(e,t,s){"use strict";s.r(t);s(16);var n,a=s(9),l=s.n(a),c=s(2),i=s(3),r=s(4),o=s(5),h=(s(21),s(26)),d=s(1),u=s(11);!function(e){e[e.Default=0]="Default",e[e.ByLength=1]="ByLength",e[e.Alphabetical=2]="Alphabetical"}(n||(n={}));var b=s(0),j=function(e){Object(r.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(c.a)(this,s);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={isReversed:!1,sortBy:n.Default,minLength:1,maxLength:10,selectedLength:1},e.handleReverseClick=function(){e.setState({isReversed:!0})},e.handleSortByLengthClick=function(){e.setState({sortBy:n.ByLength})},e.handleSortAlphabeticallyClick=function(){e.setState({sortBy:n.Alphabetical})},e.handleResetClick=function(){var t=e.state.minLength;e.setState({isReversed:!1,sortBy:n.Default,selectedLength:t})},e.handleSelectorChange=function(t){e.setState({selectedLength:Number(t)})},e.getVisibleGoodsList=function(){var t=e.props.goods,s=e.state,a=s.isReversed,l=s.sortBy,c=s.selectedLength,i=t.filter((function(e){return e.length>=c}));return i.sort((function(e,t){switch(l){case n.ByLength:return e.length-t.length;case n.Alphabetical:return e.localeCompare(t);case n.Default:return 0;default:throw new Error("Error: SortType ".concat(l," is undefined"))}})),a&&i.reverse(),i},e}return Object(i.a)(s,[{key:"render",value:function(){var e=this.state,t=e.isReversed,s=e.sortBy,a=e.minLength,l=e.maxLength,c=e.selectedLength,i=this.handleSortByLengthClick,r=this.handleSortAlphabeticallyClick,o=this.handleReverseClick,d=this.handleResetClick,j=this.handleSelectorChange,g=this.getVisibleGoodsList,p=c===a&&s===n.Default&&!t,f=Object(u.range)(a,l+1);return Object(b.jsxs)("div",{className:"GoodsList",children:[Object(b.jsxs)("div",{className:"GoodsList__controllers",children:[Object(b.jsx)(h.a,{className:"GoodsList__button",onClick:i,disabled:s===n.ByLength,children:"Sort by length"}),Object(b.jsx)(h.a,{className:"GoodsList__button",onClick:r,disabled:s===n.Alphabetical,children:"Sort alphabetically"}),Object(b.jsx)(h.a,{className:"GoodsList__button",onClick:d,disabled:p,children:"Reset"}),Object(b.jsx)(h.a,{className:"GoodsList__button",onClick:o,disabled:t,children:"Reverse"}),Object(b.jsxs)("div",{className:"GoodsList__selector",children:[Object(b.jsx)("span",{className:"GoodsList__selector-label",children:"Length"}),Object(b.jsx)("select",{className:"GoodsList__selector-select",value:c,onChange:function(e){var t=e.target;j(t.value)},children:f.map((function(e){return Object(b.jsx)("option",{className:"GoodsList__selector-item",value:e,children:e},"length-".concat(e))}))})]})]}),Object(b.jsx)("ul",{className:"GoodsList__list",children:g().map((function(e){return Object(b.jsx)("li",{className:"GoodsList__list-item",children:e},e)}))})]})}}]),s}(d.Component),g=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(e){Object(r.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(c.a)(this,s);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={isButtonVisible:!0},e.handleStartClick=function(){e.setState({isButtonVisible:!1})},e}return Object(i.a)(s,[{key:"render",value:function(){var e=this.state.isButtonVisible;return Object(b.jsx)("div",{className:"App",children:e?Object(b.jsx)(h.a,{className:"App__startButton",onClick:this.handleStartClick,children:"Start"}):Object(b.jsx)("div",{className:"App__goodsList",children:Object(b.jsx)(j,{goods:g})})})}}]),s}(d.Component);l.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.121414ae.chunk.js.map