"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4182],{4182:(P,c,l)=>{l.r(c),l.d(c,{HomePageModule:()=>v});var u=l(6814),t=l(6728),m=l(95),g=l(3044),n=l(6242),d=l(9862);let p=(()=>{var e;class i{constructor(o){this.http=o,this.apiUrl="http://localhost:4000"}get(){return this.http.get(`${this.apiUrl}`)}add(o){return this.http.post(`${this.apiUrl}`,o)}}return(e=i).\u0275fac=function(o){return new(o||e)(n.LFG(d.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),i})();function h(e,i){if(1&e&&(n.TgZ(0,"h1"),n._uU(1),n.qZA()),2&e){const a=n.oxw();n.xp6(1),n.hij("Hello ",a.hololive.nombre,"!")}}function Z(e,i){if(1&e&&(n.TgZ(0,"h2"),n._uU(1),n.qZA()),2&e){const a=n.oxw();n.xp6(1),n.Oqu(a.hololive.Autora)}}const f=[{path:"",component:(()=>{var e;class i{constructor(o){this.api=o,this.hololive={}}ngOnInit(){this.get()}get(){this.api.get().subscribe(o=>{console.log(o),this.hololive=o},o=>{console.error(o)})}add(o){this.api.add({nombre:o.value}).subscribe(r=>{console.log(r),this.hololive=r},r=>{console.error(r)})}}return(e=i).\u0275fac=function(o){return new(o||e)(n.Y36(p))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-home"]],decls:68,vars:4,consts:[["contentId","main-content"],[1,"ion-padding"],["href","/home",1,"menu"],["name","home-outline","slot","start"],["href","/personajes",1,"menu"],["name","person-outline","slot","start"],["href","/about",1,"menu"],["name","information-circle-outline","slot","start"],["href","/contacto",1,"menu"],["name","reader-outline","slot","start"],["id","main-content",1,"ion-page"],[3,"translucent"],["slot","start"],[1,"title"],[1,"ion-padding",3,"fullscreen"],["id","nombre","label","Ingresa tu nombre","labelPlacement","floating","placeholder","Ingresa tu nombre :3"],["data",""],["expand","block",3,"click"],[4,"ngIf"],[1,"image-container"],["src","assets/imagenes/principal.jpg","alt","Descripci\xf3n de la imagen"],["alt","Silhouette of mountains","src","assets/imagenes/live.jpg"],["alt","Silhouette of mountains","src","assets/imagenes/3d.webp"],["alt","Silhouette of mountains","src","assets/imagenes/paisaje.jpg"]],template:function(o,s){if(1&o){const r=n.EpF();n.TgZ(0,"ion-menu",0)(1,"ion-header")(2,"ion-toolbar")(3,"ion-title"),n._uU(4,"Menu Content"),n.qZA()()(),n.TgZ(5,"ion-content",1)(6,"ion-list")(7,"ion-item",2),n._UZ(8,"ion-icon",3),n.TgZ(9,"ion-label"),n._uU(10,"Inicio"),n.qZA()(),n.TgZ(11,"ion-item",4),n._UZ(12,"ion-icon",5),n.TgZ(13,"ion-label"),n._uU(14,"Personajes"),n.qZA()(),n.TgZ(15,"ion-item",6),n._UZ(16,"ion-icon",7),n.TgZ(17,"ion-label"),n._uU(18,"About"),n.qZA()(),n.TgZ(19,"ion-item",8),n._UZ(20,"ion-icon",9),n.TgZ(21,"ion-label"),n._uU(22,"Contacto"),n.qZA()()()()(),n.TgZ(23,"div",10)(24,"ion-header",11)(25,"ion-toolbar")(26,"ion-buttons",12),n._UZ(27,"ion-menu-button"),n.qZA(),n.TgZ(28,"ion-title",13),n._uU(29," Inicio "),n.qZA()()(),n.TgZ(30,"ion-content",14)(31,"ion-item"),n._UZ(32,"ion-input",15,16),n.qZA(),n.TgZ(34,"ion-button",17),n.NdJ("click",function(){n.CHM(r);const A=n.MAs(33);return n.KtG(s.add(A))}),n._uU(35,"Enviar"),n.qZA(),n._UZ(36,"br")(37,"br"),n.YNc(38,h,2,1,"h1",18),n._UZ(39,"br")(40,"br"),n.TgZ(41,"div",19),n._UZ(42,"img",20),n.qZA(),n._UZ(43,"br")(44,"br")(45,"br"),n.TgZ(46,"ion-card")(47,"ion-card-header")(48,"ion-card-title"),n._uU(49,"Contenido de los Vtubers"),n.qZA()(),n.TgZ(50,"ion-card-content")(51,"ion-list")(52,"ion-item")(53,"ion-thumbnail",12),n._UZ(54,"img",21),n.qZA(),n.TgZ(55,"ion-label"),n._uU(56,"Transmisi\xf3n en vivo"),n.qZA()(),n.TgZ(57,"ion-item")(58,"ion-thumbnail",12),n._UZ(59,"img",22),n.qZA(),n.TgZ(60,"ion-label"),n._uU(61,"Animaci\xf3n 3D y variedad de shows"),n.qZA()(),n.TgZ(62,"ion-item")(63,"ion-thumbnail",12),n._UZ(64,"img",23),n.qZA(),n.TgZ(65,"ion-label"),n._uU(66,"Paisaje multimedia"),n.qZA()()()()(),n.YNc(67,Z,2,1,"h2",18),n.qZA()()}2&o&&(n.xp6(24),n.Q6J("translucent",!0),n.xp6(6),n.Q6J("fullscreen",!0),n.xp6(8),n.Q6J("ngIf",s.hololive.nombre),n.xp6(29),n.Q6J("ngIf",s.hololive.Autora))},dependencies:[u.O5,t.YG,t.Sm,t.PM,t.FN,t.Zi,t.Dq,t.W2,t.Gu,t.gu,t.pK,t.Ie,t.Q$,t.q_,t.z0,t.fG,t.Bs,t.wd,t.sr,t.j9],styles:[".title[_ngcontent-%COMP%]{text-align:center}ion-content[_ngcontent-%COMP%]{--background: #4d008b}ion-card[_ngcontent-%COMP%]{--background: #000;--color: #ffffff}ion-card-title[_ngcontent-%COMP%]{--color: #8f52ff}ion-card-subtitle[_ngcontent-%COMP%]{--color: #e3d1ff}ion-item[_ngcontent-%COMP%]{--padding-start: 0}ion-item.menu[_ngcontent-%COMP%]{--padding-start: 0;--background: #4c008b00}h1[_ngcontent-%COMP%]{font-size:50px;text-align:center}ion-list[_ngcontent-%COMP%]{background-color:transparent}"]}),i})()}];let b=(()=>{var e;class i{}return(e=i).\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[g.Bz.forChild(f),g.Bz]}),i})(),v=(()=>{var e;class i{}return(e=i).\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[u.ez,m.u5,t.Pc,b]}),i})()}}]);