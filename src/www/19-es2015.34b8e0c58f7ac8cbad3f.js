(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"tx+c":function(o,i,n){"use strict";n.r(i),n.d(i,"BookingsPageModule",(function(){return m}));var t=n("ofXK"),e=n("3Pt+"),s=n("TEn/"),b=n("tyNb"),c=n("fXoL"),r=n("VFTF");function l(o,i){1&o&&(c.Mb(0,"ion-col",4),c.Kb(1,"ion-spinner",5),c.Lb())}function g(o,i){1&o&&(c.Mb(0,"ion-col",4),c.Mb(1,"p"),c.jc(2,"No Bookings Found!"),c.Lb(),c.Lb())}function a(o,i){if(1&o){const o=c.Nb();c.Mb(0,"ion-item-sliding",null,8),c.Mb(2,"ion-item"),c.Mb(3,"ion-avatar",0),c.Kb(4,"img",9),c.Lb(),c.Mb(5,"ion-label"),c.Mb(6,"h5"),c.jc(7),c.Lb(),c.Mb(8,"p"),c.jc(9),c.Lb(),c.Lb(),c.Lb(),c.Mb(10,"ion-item-options"),c.Mb(11,"ion-item-option",10),c.Ub("click",(function(){c.fc(o);const n=i.$implicit,t=c.ec(1);return c.Wb(2).onCancelBooking(n.id,t)})),c.Kb(12,"ion-icon",11),c.Lb(),c.Lb(),c.Lb()}if(2&o){const o=i.$implicit;c.zb(4),c.bc("src",o.placeImage,c.gc),c.zb(3),c.kc(o.placeTitle),c.zb(2),c.lc("Guests: ",o.guestNumber,"")}}function d(o,i){if(1&o&&(c.Mb(0,"ion-col",6),c.Mb(1,"ion-list"),c.ic(2,a,13,3,"ion-item-sliding",7),c.Lb(),c.Lb()),2&o){const o=c.Wb();c.zb(2),c.bc("ngForOf",o.loadedBookings)}}const u=[{path:"",component:(()=>{class o{constructor(o,i){this.bookingService=o,this.loadingCtrl=i,this.isLoading=!1}ngOnInit(){this.bookingSub=this.bookingService.bookings.subscribe(o=>{this.loadedBookings=o})}ionViewWillEnter(){this.isLoading=!0,this.bookingService.fetchBookings().subscribe(()=>{this.isLoading=!1})}ngOnDestroy(){this.bookingSub&&this.bookingSub.unsubscribe()}onCancelBooking(o,i){i.close(),this.loadingCtrl.create({message:"Cancelling Booking..."}).then(i=>{i.present(),this.bookingService.cancelBooking(o).subscribe(()=>{i.dismiss()})})}}return o.\u0275fac=function(i){return new(i||o)(c.Jb(r.a),c.Jb(s.W))},o.\u0275cmp=c.Db({type:o,selectors:[["app-bookings"]],decls:12,vars:3,consts:[["slot","start"],["menu","m1"],["size-md","6","offset-md","3","class","ion-text-center",4,"ngIf"],["size-md","6","offset-md","3",4,"ngIf"],["size-md","6","offset-md","3",1,"ion-text-center"],["color","primary"],["size-md","6","offset-md","3"],[4,"ngFor","ngForOf"],["slidingItem",""],[3,"src"],["color","danger",3,"click"],["slot","icon-only","name","trash"]],template:function(o,i){1&o&&(c.Mb(0,"ion-header"),c.Mb(1,"ion-toolbar"),c.Mb(2,"ion-buttons",0),c.Kb(3,"ion-menu-button",1),c.Lb(),c.Mb(4,"ion-title"),c.jc(5,"Your Bookings"),c.Lb(),c.Lb(),c.Lb(),c.Mb(6,"ion-content"),c.Mb(7,"ion-grid"),c.Mb(8,"ion-row"),c.ic(9,l,2,0,"ion-col",2),c.ic(10,g,3,0,"ion-col",2),c.ic(11,d,3,1,"ion-col",3),c.Lb(),c.Lb(),c.Lb()),2&o&&(c.zb(9),c.bc("ngIf",i.isLoading),c.zb(1),c.bc("ngIf",!i.isLoading&&(!i.loadedBookings||i.loadedBookings.length<=0)),c.zb(1),c.bc("ngIf",!i.isLoading&&i.loadedBookings&&i.loadedBookings.length>0))},directives:[s.r,s.S,s.h,s.C,s.R,s.o,s.q,s.F,t.k,s.n,s.K,s.A,t.j,s.y,s.v,s.d,s.z,s.x,s.w,s.s],styles:[""]}),o})()}];let f=(()=>{class o{}return o.\u0275mod=c.Hb({type:o}),o.\u0275inj=c.Gb({factory:function(i){return new(i||o)},imports:[[b.i.forChild(u)],b.i]}),o})(),m=(()=>{class o{}return o.\u0275mod=c.Hb({type:o}),o.\u0275inj=c.Gb({factory:function(i){return new(i||o)},imports:[[t.b,e.f,s.U,f]]}),o})()}}]);