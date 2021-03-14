(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),o=n.n(c),i=(n(25),n(10)),l=n(4),s=n(5),u=n(7),g=n(6),h=(n(26),n(19)),m=n.n(h);var d=function(e,t){var n="".concat("https://pixabay.com/api/?","q=").concat(e,"&page=").concat(t,"&image_type=photo&orientation=horizontal&per_page=12&key=").concat("19753127-35047f3cd3d8da270542cf7b9");return m.a.get(n).then((function(e){return e.data})).then((function(e){return e.hits}))},j=(n(45),n(0)),p=function(e){Object(u.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={queryValue:""},e.handleChange=function(t){e.setState({queryValue:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),(0,e.props.onSubmit)(e.state.queryValue),e.state.queryValue=""},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.queryValue,t=this.handleChange,n=this.handleSubmit;return Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{className:"SearchForm",onSubmit:n,children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{className:"SearchForm-input",type:"text",value:e,onChange:t,placeholder:"Search images and photos"})]})})}}]),n}(a.Component),b=(n(47),n(48),function(e){var t=e.imgUrl,n=e.imgAlt,a=e.onClick,r=e.imgSrc;return Object(j.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return a(r,n)},children:Object(j.jsx)("img",{src:t,alt:n,className:"ImageGalleryItem-image"})})}),f=(n(49),document.getElementById("modal-root")),y=function(e){Object(u.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleCloseModal=function(t){t.target===t.currentTarget&&e.props.closeModal()},e.onKeyClick=function(t){"Escape"===t.code&&e.props.closeModal()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyClick)}},{key:"render",value:function(){var e=this.props,t=e.imgUrl,n=e.imgAlt;return Object(c.createPortal)(Object(j.jsx)("div",{className:"Overlay",onClick:this.handleCloseModal,children:Object(j.jsx)("div",{className:"Modal",children:Object(j.jsx)("img",{src:t,alt:n})})}),f)}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={modalOpen:!1,imgSrc:"",imgAlt:""},e.toggleModal=function(){e.setState({modalOpen:!e.state.modalOpen,imgSrc:"",imgAlt:""})},e.handleClick=function(t,n){e.toggleModal(),e.setState({imgSrc:t,imgAlt:n})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props.gallery,n=this.state,a=n.imgSrc,r=n.imgAlt,c=n.modalOpen;return Object(j.jsxs)("ul",{className:"ImageGallery",children:[t.map((function(t){return Object(j.jsx)(b,{onClick:e.handleClick,imgUrl:t.webformatURL,imgAlt:t.tags,imgSrc:t.largeImageURL},t.id)})),c&&Object(j.jsx)(y,{imgUrl:a,imgAlt:r,closeModal:this.toggleModal})]})}}]),n}(a.Component),O=(n(50),function(e){var t=e.onClick;return Object(j.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})}),S=n(20),x=n.n(S),k=function(){return Object(j.jsx)(x.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})},C=d,w=function(e){Object(u.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:"",page:1,gallery:[],status:"",error:""},e.getQuery=function(t){e.setState((function(e){if(e.query!==t)return{query:t,page:1,gallery:[]}}))},e.getPage=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){var n=this.state,a=n.query,r=n.page;n.gallery;a===t.query&&r===t.page||(this.setState({status:"pending"}),this.getImage(a,r))}},{key:"getImage",value:function(e,t){var n=this;C(e,t).then((function(a){a.length?(n.setState((function(e){return{gallery:[].concat(Object(i.a)(n.state.gallery),Object(i.a)(a)),status:"resolved"}})),1!==t&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})):n.setState({status:"rejected",error:"There no images on your query ".concat(e)})})).catch((function(e){n.setState({gallery:[],status:"rejected"})}))}},{key:"render",value:function(){var e=this.state,t=e.status,n=e.gallery,a=e.error;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(p,{onSubmit:this.getQuery}),("pending"===t||"resolved"===t)&&Object(j.jsx)(v,{gallery:n}),"resolved"===t&&n.length&&Object(j.jsx)(O,{onClick:this.getPage}),"rejected"===t&&Object(j.jsx)("div",{className:"errorContainer",children:a}),"pending"===t&&Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(k,{})})]})}}]),n}(a.Component),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),N()}},[[71,1,2]]]);
//# sourceMappingURL=main.2ecaca1b.chunk.js.map