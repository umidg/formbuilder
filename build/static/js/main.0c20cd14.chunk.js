(this.webpackJsonpsurveyformbuilder=this.webpackJsonpsurveyformbuilder||[]).push([[0],{42:function(e,t,a){e.exports=a(74)},47:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(19),o=a.n(s),r=(a(47),a(26)),c=a.n(r),i=a(39),u=a(22),d=a(11),m=a(12),p=a(15),v=a(14),h=a(13),f=a(17),E=a(18),g=a(23),b=a(16),y=a.n(b),C=a(21),O=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleStatic=function(e){var t=Object(u.a)(n.state.panels);t.push({type:"static",value:"",edit:!0}),n.setState({panels:t}),console.log(n.state,"handlestatic")},n.handleText=function(e){var t=Object(u.a)(n.state.panels);t.push({type:"text",value:"",label:"",edit:!0}),n.setState({panels:t}),console.log(n.state,"handlestatic")},n.handleRadio=function(e){var t=Object(u.a)(n.state.panels);t.push({type:"radio",values:[""],value:"",edit:!0}),n.setState({panels:t}),console.log(n.state,"handlestatic")},n.handleDrop=function(e){var t=Object(u.a)(n.state.panels);t.push({type:"dropdown",values:[""],value:"",edit:!0}),n.setState({panels:t}),console.log(n.state,"handlestatic")},n.changeOptions=function(e,t,a){var l=n.state.panels;l[t].values[a]=e.target.value,n.setState({panels:l}),console.log(n.state,e,t,a)},n.addOptions=function(e,t){var a=n.state.panels;a[t].values.push(""),n.setState({panels:a})},n.deleteOptions=function(e,t,a){var l=n.state.panels;l[t].values.splice(a,1),n.setState({panels:l})},n.handleChange=function(e,t){var a=n.state.panels;a[t].value=e.target.value,n.setState({panels:a}),console.log(n.state)},n.removepanel=function(e,t){var a=n.state.panels;a.splice(t,1),n.setState({panels:a})},n.afterUpload=function(e){var t,a=new FileReader;a.readAsText(e.target.files[0],"UTF-8");var l=[];a.onload=function(e){t=JSON.parse(e.target.result),console.log("e.target.result",JSON.parse(e.target.result),e.target.result),console.log("uploaded"),t.map((function(e){l.push(e)})),n.setState({panels:l})}},n.downloadFile=Object(i.a)(c.a.mark((function e(){var t,a,l,s,o,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.panels,console.log(t,"hey"),a="file",l=JSON.stringify(t),console.log(l),s=new Blob([l],{type:"application/json"}),e.next=8,URL.createObjectURL(s);case 8:o=e.sent,(r=document.createElement("a")).href=o,r.download=a+".json",document.body.appendChild(r),r.click(),document.body.removeChild(r);case 15:case"end":return e.stop()}}),e)}))),n.publish=function(e){0==n.state.panels.length&&alert("Please build your form first."),y.a.post("https://formbuilder-umid.herokuapp.com/saveform",n.state.panels).then((function(e){console.log(e),console.log(e.data)}))},n.state={panels:[]},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleStatic.bind(Object(p.a)(n)),n}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"buttons"},l.a.createElement("input",{type:"file",name:"file",id:"file",class:"inputfile",onChange:this.afterUpload,accept:"json"}),l.a.createElement("label",{for:"file"},"Upload JSON"),l.a.createElement("a",{onClick:this.downloadFile,style:{color:"white"}},"Download my json"),l.a.createElement(C.b,{to:"/allforms"},"All my forms"),l.a.createElement(C.b,{to:"/responses"},"Responses")),l.a.createElement("div",{className:"added_panels"},l.a.createElement("h2",{style:{marginLeft:"-16vw"}},"Start Building your form."),l.a.createElement("div",null,this.state.panels.map((function(t,a){var n=a;return"static"==t.type?l.a.createElement("div",{className:"added_panel"},t.edit?l.a.createElement("input",{type:"text",value:t.value,name:a,onChange:function(t,n){return e.handleChange(t,a)},onBlur:function(){var t=e.state.panels;t[n].edit=!1,e.setState({panels:t})}}):l.a.createElement("p",null,t.value," ",l.a.createElement("span",{onClick:function(){var t=e.state.panels;t[n].edit=!0,e.setState({panels:t})}},"Edit")),l.a.createElement("div",{className:"remove_button",onClick:function(t,n){return e.removepanel(t,a)}},l.a.createElement(g.a,null))):"text"==t.type?l.a.createElement("div",{className:"added_panel text_panel"},t.edit?l.a.createElement("input",{type:"text",value:t.value,name:a,onChange:function(t,n){return e.handleChange(t,a)},onBlur:function(){var t=e.state.panels;t[n].edit=!1,e.setState({panels:t})}}):l.a.createElement("p",null,t.value,l.a.createElement("span",{onClick:function(){var t=e.state.panels;t[n].edit=!0,e.setState({panels:t})}},"Edit")),l.a.createElement("input",{style:{marginTop:"1vh"},type:"text",value:"Answer Here",disabled:!0}),l.a.createElement("div",{className:"remove_button",onClick:function(t,n){return e.removepanel(t,a)}},l.a.createElement(g.a,null))):"radio"==t.type?l.a.createElement("div",{className:"added_panel radio_panels"},t.edit?l.a.createElement("input",{type:"text",value:t.value,name:a,onChange:function(t,n){return e.handleChange(t,a)},onBlur:function(){var t=e.state.panels;t[n].edit=!1,e.setState({panels:t})}}):l.a.createElement("p",null,t.value,l.a.createElement("span",{onClick:function(){var t=e.state.panels;t[n].edit=!0,e.setState({panels:t})}},"Edit")),l.a.createElement("div",{className:"radio_options"},t.values.map((function(t,s){var o=s;return l.a.createElement("div",null,l.a.createElement("span",null,"\ud83d\udd18"),l.a.createElement("div",null,l.a.createElement("input",{type:"text",value:t,onChange:function(t,a,l){e.changeOptions(t,n,o)}})),l.a.createElement("div",{className:"radio_add",onClick:function(t,n){e.addOptions(t,a)}},"+"),l.a.createElement("div",{className:"radio_add",onClick:function(t,n,l){e.deleteOptions(t,a,s)}},s>0?"-":""))}))),l.a.createElement("div",{className:"remove_button",onClick:function(t,n){return e.removepanel(t,a)}},l.a.createElement(g.a,null))):"dropdown"==t.type?l.a.createElement("div",{className:"added_panel radio_panels"},t.edit?l.a.createElement("input",{type:"text",value:t.value,name:a,onChange:function(t,n){return e.handleChange(t,a)},onBlur:function(){var t=e.state.panels;t[n].edit=!1,e.setState({panels:t}),console.log(e.state)}}):l.a.createElement("p",null,t.value,l.a.createElement("span",{onClick:function(){var t=e.state.panels;t[n].edit=!0,e.setState({panels:t})}},"Edit")),l.a.createElement("div",{className:"radio_options"},t.values.map((function(t,s){var o=s;return l.a.createElement("div",null,l.a.createElement("span",{style:{marginRight:"5px"}},s+1,"."),l.a.createElement("div",null,l.a.createElement("input",{type:"text",value:t,onChange:function(t,a,l){e.changeOptions(t,n,o),console.log(e.state)}})),l.a.createElement("div",{className:"radio_add",onClick:function(t,n){e.addOptions(t,a)}},"+"),l.a.createElement("div",{className:"radio_add",onClick:function(t,n,l){e.deleteOptions(t,a,s)}},s>0?"-":""))}))),l.a.createElement("div",{className:"remove_button",onClick:function(t,n){return e.removepanel(t,a)}},l.a.createElement(g.a,null))):void 0}))),l.a.createElement("div",{className:"add_button"},l.a.createElement(f.a,null,l.a.createElement(f.a.Toggle,{variant:"success",id:"dropdown-basic"},"Add"),l.a.createElement(f.a.Menu,null,l.a.createElement(f.a.Item,{onClick:this.handleStatic},"Static"),l.a.createElement(f.a.Item,{onClick:this.handleText},"Text"),l.a.createElement(f.a.Item,{onClick:this.handleRadio},"Radio Buttons"),l.a.createElement(f.a.Item,{onClick:this.handleDrop},"Drop Down"))),l.a.createElement("div",{className:"publish_button"},l.a.createElement(E.a,{onClick:this.publish},"Publish")))))}}]),a}(n.Component),k=(a(72),a(4)),w=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).textChange=function(e,t){var a=n.state.datas,l=e.target.value;a[t].answer=l,n.setState({panels:a}),console.log(n.state)},n.sendresponse=function(e){y.a.post("https://formbuilder-umid.herokuapp.com/saveresponse",n.state.panels).then((function(e){console.log(e),console.log(e.data)}))},n.state={datas:e.props.panel,newForm:{},newformdata:[],panels:[]},n}return Object(m.a)(a,[{key:"componentWillMount",value:function(){console.log(this.state.datas,"wee")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"added_panels"},l.a.createElement("div",{className:"added_panel"},this.state.datas.map((function(t,a){var n=a;return"static"==t.type?l.a.createElement("h3",null,t.value):"text"==t.type?l.a.createElement("div",null,l.a.createElement("h3",null,t.value),l.a.createElement("input",{type:"text",onChange:function(t,n){return e.textChange(t,a)},placeholder:"Answer here"})):"radio"==t.type?l.a.createElement("div",null,l.a.createElement("h3",null,t.value),t.values.map((function(t){return l.a.createElement("div",{onChange:function(t,n){e.textChange(t,a)},className:"radio_distance"},l.a.createElement("input",{type:"radio",value:t,name:n}),t)}))):"dropdown"==t.type?l.a.createElement("div",{className:"drop_distance"},l.a.createElement("h3",null,t.value),l.a.createElement("select",{onChange:function(t,n){e.textChange(t,a),console.log(t.target.value)}},t.values.map((function(e){return l.a.createElement("option",{value:e},e)})))):void 0}))),l.a.createElement(E.a,{style:{marginTop:"2vh"},onClick:this.sendresponse},"Send response"))}}]),a}(n.Component),N=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).showandfill=function(e){},n.selected=function(e,t){n.setState({selectedform:n.state.allforms[t]}),console.log(n.state)},n.state={allforms:[],selectedform:{}},n.selected=n.selected.bind(Object(p.a)(n)),n}return Object(m.a)(a,[{key:"componentWillMount",value:function(){var e=this;y.a.get("https://formbuilder-umid.herokuapp.com/getall").then((function(t){console.log(t.data),e.setState({allforms:t.data})})),console.log(this.state)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{style:{margin:"5vh"}},l.a.createElement("h2",null,"Please select any one form"),l.a.createElement("div",{className:"myforms"},this.state.allforms.map((function(t,a){console.log(e.state.selectedform);return l.a.createElement("div",{className:"form_conatiner",onClick:function(t,n){return e.selected(t,a)}},l.a.createElement("h1",null,"Form ",a+1))})))),this.state.selectedform.hasOwnProperty("panel")?l.a.createElement("div",{className:"added_panels"},l.a.createElement(w,{props:this.state.selectedform})):l.a.createElement("p",null,"No forms Selected"))}}]),a}(n.Component),S=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),n=t.call(this,e),console.log(e,"showres"),n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"added_panel"},this.props.props.panel.map((function(e,t){return"static"==e.type?l.a.createElement("h3",null,e.value):"text"==e.type||"radio"==e.type||"dropdown"==e.type?l.a.createElement("div",null,l.a.createElement("h3",null,e.value),l.a.createElement("p",null,"Answer: ",e.answer)):void 0})))}}]),a}(n.Component),j=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).showandfill=function(e){},n.selected=function(e,t){n.setState({selectedform:n.state.allforms[t]}),console.log(n.state)},n.state={allforms:[],selectedform:{}},n.selected=n.selected.bind(Object(p.a)(n)),n}return Object(m.a)(a,[{key:"componentWillMount",value:function(){var e=this;y.a.get("https://formbuilder-umid.herokuapp.com/getallresponses").then((function(t){console.log(t.data),e.setState({allforms:t.data})})),console.log(this.state)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{style:{margin:"5vh"}},l.a.createElement("h2",null,"Please select any one response"),l.a.createElement("div",{className:"myforms"},this.state.allforms.map((function(t,a){console.log(e.state.selectedform);return l.a.createElement("div",{className:"form_conatiner"},l.a.createElement("h3",{onClick:function(t,n){return e.selected(t,a)}},"Response ",a+1))}))),this.state.selectedform.hasOwnProperty("panel")?l.a.createElement("div",{className:"added_panels"},l.a.createElement(S,{props:this.state.selectedform})):l.a.createElement("p",null,"No forms available"))}}]),a}(n.Component);var _=function(){return l.a.createElement(C.a,null,l.a.createElement(k.c,null,l.a.createElement(k.a,{path:"/",exact:!0,component:O}),l.a.createElement(k.a,{path:"/allforms",component:N}),l.a.createElement(k.a,{path:"/responses",component:j})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(73);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.0c20cd14.chunk.js.map