(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87399092"],{"02f7":function(e,r,t){},"129f":function(e,r){e.exports=Object.is||function(e,r){return e===r?0!==e||1/e===1/r:e!=e&&r!=r}},"14c3":function(e,r,t){var n=t("c6b6"),a=t("9263");e.exports=function(e,r){var t=e.exec;if("function"===typeof t){var o=t.call(e,r);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,r)}},37906:function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"search-container",attrs:{id:"search_form"}},[t("h1",{staticClass:"title"},[e._v("Search Recipes")]),t("b-form",{on:{submit:function(r){return r.preventDefault(),e.onSearch(r)},reset:function(r){return r.preventDefault(),e.onReset(r)}}},[t("b-row",[t("b-col",[t("b-form-group",{attrs:{id:"input-group-query","label-cols-sm":"1",label:"Search:","label-for":"search"}},[t("b-form-input",{attrs:{id:"search",type:"text",state:e.validateState("search")},model:{value:e.$v.form.search.$model,callback:function(r){e.$set(e.$v.form.search,"$model",r)},expression:"$v.form.search.$model"}}),e.$v.form.search.required?e._e():t("b-form-invalid-feedback",[e._v("query is required")])],1)],1)],1),t("b-row",[t("b-col",{attrs:{sm:"4"}},[t("b-form-group",{attrs:{id:"input-group-cuisine","label-cols-sm":"3",label:"Cuisine:","label-for":"cuisine"}},[t("b-form-select",{attrs:{id:"cuisine",options:e.cuisines},model:{value:e.$v.form.cuisine.$model,callback:function(r){e.$set(e.$v.form.cuisine,"$model",r)},expression:"$v.form.cuisine.$model"}})],1)],1),t("b-col",{attrs:{sm:"4"}},[t("b-form-group",{attrs:{id:"input-group-diet","label-cols-sm":"3",label:"Diet:","label-for":"diet"}},[t("b-form-select",{attrs:{id:"diet",options:e.diets},model:{value:e.$v.form.diet.$model,callback:function(r){e.$set(e.$v.form.diet,"$model",r)},expression:"$v.form.diet.$model"}})],1)],1),t("b-col",{attrs:{sm:"4"}},[t("b-form-group",{attrs:{id:"input-group-intolerance","label-cols-sm":"5",label:"Intolerance:","label-for":"intolerance"}},[t("b-form-select",{attrs:{id:"intolerance",options:e.intolerances},model:{value:e.$v.form.intolerance.$model,callback:function(r){e.$set(e.$v.form.intolerance,"$model",r)},expression:"$v.form.intolerance.$model"}})],1)],1)],1),t("b-row",[t("b-col",{attrs:{sm:"3"}},[t("b-form-group",{staticClass:"search-field",attrs:{label:"number of results:"},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.ariaDescribedby;return[t("b-form-radio",{attrs:{"aria-describedby":n,name:"some-radios",value:"5"},model:{value:e.$v.form.number.$model,callback:function(r){e.$set(e.$v.form.number,"$model",r)},expression:"$v.form.number.$model"}},[e._v("5")]),t("b-form-radio",{attrs:{"aria-describedby":n,name:"some-radios",value:"10"},model:{value:e.$v.form.number.$model,callback:function(r){e.$set(e.$v.form.number,"$model",r)},expression:"$v.form.number.$model"}},[e._v("10")]),t("b-form-radio",{attrs:{"aria-describedby":n,name:"some-radios",value:"15"},model:{value:e.$v.form.number.$model,callback:function(r){e.$set(e.$v.form.number,"$model",r)},expression:"$v.form.number.$model"}},[e._v("15")])]}}])})],1),t("b-col",{attrs:{sm:"4.5"}},[t("b-button",{attrs:{id:"search-button",type:"submit",variant:"primary"}},[e._v("Search")])],1),t("b-col",{attrs:{sm:"4.5"}},[t("b-button",{attrs:{id:"reset-button",type:"reset",variant:"danger"}},[e._v("Reset")])],1)],1)],1),e.form.submitError?t("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v("Search failed: "+e._s(e.form.submitError))]):e._e(),e.$root.store.username&&!e.LastSearchcalled?t("div",{attrs:{do:e.LastSearch()}}):e._e(),e.search_results?t("div",[e.noResults?t("h5",{attrs:{id:"no-results"}},[e._v("We couldn't find recipes that match your search")]):t("div",{staticClass:"text-center"},[e.isEmpty?e._e():t("b-dropdown",{staticClass:"m-2",attrs:{id:"sort",text:"Sort By"}},[t("b-dropdown-item",{on:{click:this.sortByPrepTime}},[e._v("Preperation Time")]),t("b-dropdown-item",{on:{click:this.sortByPopularity}},[e._v("Popularity")])],1),e._l(e.search_results,(function(e){return t("b-row",{key:e.id},[t("b-col",[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)],1)}))],2)]):e._e()],1)},a=[],o=(t("4e82"),t("ac1f"),t("841c"),t("96cf"),t("1da1")),s=t("2909"),i=["African","American","British","Cajun","Caribbean","Chinese","Eastern European","European","French","German","Greek","Indian","Irish","Italian","Japanese","Jewish","Korean","Latin American","Mediterranean","Mexican","Middle Eastern","Nordic","Southern","Spanish","Thai","Vietnamese"],c=["Gluten Free","Ketogenic","Vegetarian","Lacto-Vegetarian","Ovo-Vegetarian","Vegan","Pescetarian","Paleo","Primal","Low FODMAP","Whole30"],l=["Dairy","Egg","Gluten","Grain","Peanut","Seafood","Sesame","Shellfish","Soy","Sulfite","Tree Nut","Wheat"],u=t("b5ae"),d=t("832a"),f={name:"Search",components:{RecipePreview:d["a"]},data:function(){return{form:{search:"",number:"5",cuisine:null,diet:null,intolerance:null,submitError:void 0},cuisines:[{value:null,text:"None",disabled:!1}],diets:[{value:null,text:"None",disabled:!1}],intolerances:[{value:null,text:"None",disabled:!1}],errors:[],search_results:[],noResults:!1,LastSearchcalled:!1}},validations:{form:{search:{required:u["required"]},number:{required:u["required"]},cuisine:{},diet:{},intolerance:{}}},mounted:function(){var e,r,t;(e=this.cuisines).push.apply(e,Object(s["a"])(i)),(r=this.diets).push.apply(r,Object(s["a"])(c)),(t=this.intolerances).push.apply(t,Object(s["a"])(l))},methods:{validateState:function(e){var r=this.$v.form[e],t=r.$dirty,n=r.$error;return t?!n:null},LastSearch:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.axios.get(e.$root.store.server_domain+"/users/lastSearch");case 3:t=r.sent,e.search_results=t.data,r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),console.log(r.t0);case 10:e.LastSearchcalled=!0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})))()},Search:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.axios.get(e.$root.store.server_domain+"/recipes/search",{params:{query:e.form.search,number:e.form.number,cuisine:e.form.cuisine,diet:e.form.diet,intolerance:e.form.intolerance}});case 3:t=r.sent,e.search_results=t.data,e.isEmpty&&(e.noResults=!0),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},onSearch:function(){this.noResults=!1,this.$v.form.$touch(),this.$v.form.$anyError||this.Search()},onReset:function(){console.log("On reset method called"),this.form.search="",this.form.number="5",this.form.cuisine=null,this.form.diet=null,this.form.intolerance=null,this.noResults=!1,this.$v.$reset()},sortByPrepTime:function(){this.search_results.sort((function(e,r){return e.readyInMinutes-r.readyInMinutes}))},sortByPopularity:function(){this.search_results.sort((function(e,r){return r.popularity-e.popularity}))}},computed:{isEmpty:function(e){var r=e.search_results;return 0===r.length}}},m=f,p=(t("6965"),t("2877")),v=Object(p["a"])(m,n,a,!1,null,"2cbdda54",null);r["default"]=v.exports},"4e82":function(e,r,t){"use strict";var n=t("23e7"),a=t("1c0b"),o=t("7b0b"),s=t("d039"),i=t("a640"),c=[],l=c.sort,u=s((function(){c.sort(void 0)})),d=s((function(){c.sort(null)})),f=i("sort"),m=u||!d||!f;n({target:"Array",proto:!0,forced:m},{sort:function(e){return void 0===e?l.call(o(this)):l.call(o(this),a(e))}})},6965:function(e,r,t){"use strict";var n=t("02f7"),a=t.n(n);a.a},"841c":function(e,r,t){"use strict";var n=t("d784"),a=t("825a"),o=t("1d80"),s=t("129f"),i=t("14c3");n("search",1,(function(e,r,t){return[function(r){var t=o(this),n=void 0==r?void 0:r[e];return void 0!==n?n.call(r,t):new RegExp(r)[e](String(t))},function(e){var n=t(r,e,this);if(n.done)return n.value;var o=a(e),c=String(this),l=o.lastIndex;s(l,0)||(o.lastIndex=0);var u=i(o,c);return s(o.lastIndex,l)||(o.lastIndex=l),null===u?-1:u.index}]}))},9263:function(e,r,t){"use strict";var n=t("ad6d"),a=t("9f7f"),o=RegExp.prototype.exec,s=String.prototype.replace,i=o,c=function(){var e=/a/,r=/b*/g;return o.call(e,"a"),o.call(r,"a"),0!==e.lastIndex||0!==r.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||l;d&&(i=function(e){var r,t,a,i,d=this,f=l&&d.sticky,m=n.call(d),p=d.source,v=0,b=e;return f&&(m=m.replace("y",""),-1===m.indexOf("g")&&(m+="g"),b=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(p="(?: "+p+")",b=" "+b,v++),t=new RegExp("^(?:"+p+")",m)),u&&(t=new RegExp("^"+p+"$(?!\\s)",m)),c&&(r=d.lastIndex),a=o.call(f?t:d,b),f?a?(a.input=a.input.slice(v),a[0]=a[0].slice(v),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:c&&a&&(d.lastIndex=d.global?a.index+a[0].length:r),u&&a&&a.length>1&&s.call(a[0],t,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(a[i]=void 0)})),a}),e.exports=i},"9f7f":function(e,r,t){"use strict";var n=t("d039");function a(e,r){return RegExp(e,r)}r.UNSUPPORTED_Y=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),r.BROKEN_CARET=n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,r,t){"use strict";var n=t("23e7"),a=t("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},d784:function(e,r,t){"use strict";t("ac1f");var n=t("6eeb"),a=t("d039"),o=t("b622"),s=t("9263"),i=t("9112"),c=o("species"),l=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=o("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),m=!a((function(){var e=/(?:)/,r=e.exec;e.exec=function(){return r.apply(this,arguments)};var t="ab".split(e);return 2!==t.length||"a"!==t[0]||"b"!==t[1]}));e.exports=function(e,r,t,d){var p=o(e),v=!a((function(){var r={};return r[p]=function(){return 7},7!=""[e](r)})),b=v&&!a((function(){var r=!1,t=/a/;return"split"===e&&(t={},t.constructor={},t.constructor[c]=function(){return t},t.flags="",t[p]=/./[p]),t.exec=function(){return r=!0,null},t[p](""),!r}));if(!v||!b||"replace"===e&&(!l||!u||f)||"split"===e&&!m){var h=/./[p],x=t(p,""[e],(function(e,r,t,n,a){return r.exec===s?v&&!a?{done:!0,value:h.call(r,t,n)}:{done:!0,value:e.call(t,r,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),$=x[0],g=x[1];n(String.prototype,e,$),n(RegExp.prototype,p,2==r?function(e,r){return g.call(e,this,r)}:function(e){return g.call(e,this)})}d&&i(RegExp.prototype[p],"sham",!0)}}}]);
//# sourceMappingURL=chunk-87399092.f2d05f55.js.map