(this["webpackJsonpmy-lists"]=this["webpackJsonpmy-lists"]||[]).push([[0],{17:function(o,e,s){o.exports={"card-container":"BookCard_card-container__2w30f","image-container":"BookCard_image-container__1Jx44",img:"BookCard_img__3eHvG","author-container":"BookCard_author-container__J1kdQ"}},32:function(o,e,s){o.exports={"card-container":"GameCard_card-container__N1OcZ","dlc-button":"GameCard_dlc-button__3N5on"}},43:function(o,e,s){},44:function(o,e,s){},53:function(o,e,s){"use strict";s.r(e);var t=s(0),a=s.n(t),r=s(14),i=s.n(r),g=(s(43),s(44),s(38)),m=s(28),p=s(6),c=s(18),d=s(55),h=s(17),l=s.n(h),n=s(2),j=function(o){var e="en"===o.lang?0:1;return Object(n.jsxs)(d.a,{sm:12,md:6,lg:4,className:l.a["card-container"],children:[Object(n.jsx)("div",{className:l.a["image-container"],children:Object(n.jsx)("img",{alt:o.title[e],src:o.image[e],className:l.a.img})}),Object(n.jsx)("div",{className:"title-container",children:o.title[e]}),Object(n.jsxs)("div",{className:l.a["author-container"],children:["by ",o.author[e]]})]})},S=s(33),b=s(60),u=s(56),k=s(32),_=s.n(k),y=function(o){var e="en"===o.lang?0:1,s=o.dlc.length>0,t=o.dlc.map((function(o){return Object(n.jsxs)(S.a,{children:["DLC: ",o[e]]})}));return Object(n.jsx)(d.a,{sm:12,md:6,lg:4,className:_.a["card-container"],children:Object(n.jsxs)(b.a,{children:[Object(n.jsx)(b.a.Img,{variant:"top",src:"images/games/".concat(o.image[e]),alt:o.title[e]}),Object(n.jsxs)(b.a.Body,{children:[Object(n.jsx)(b.a.Title,{children:o.title[e]}),Object(n.jsxs)(b.a.Text,{children:["by ",o.author[e]]})]}),s&&Object(n.jsx)(u.a,{className:"list-group-flush",children:t})]})})},T=s(57),f=function(o){var e=o.isGame?o.items.map((function(e){return Object(n.jsx)(y,Object(c.a)(Object(c.a)({},e),{},{lang:o.lang}),e.title)})):o.items.map((function(e){return Object(n.jsx)(j,Object(c.a)(Object(c.a)({},e),{},{lang:o.lang}),e.title)}));return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"mt-4 mb-2 border-bottom",children:Object(n.jsx)("h2",{children:o.title})}),Object(n.jsx)(T.a,{children:e})]})},D=s(58),C=s(59),O=function(){var o=Object(p.f)(),e=!o.pathname.includes("games"),s=!o.pathname.includes("zh"),t=s?"#/books":"#/books/zh",a=s?"#/games":"#/games/zh",r=e?"#/books":"#/games",i=e?"#/books/zh":"#/games/zh",g=s?"My Lists":"\u6211\u7684\u5217\u8868",m=s?"Books":"\u4e66\u7c4d",c=s?"Game":"\u6e38\u620f";return Object(n.jsxs)(D.a,{bg:"light",expand:"lg",sticky:"top",children:[Object(n.jsx)(D.a.Brand,{children:g}),Object(n.jsx)(D.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsxs)(D.a.Collapse,{id:"basic-navbar-nav",children:[Object(n.jsxs)(C.a,{className:"mr-auto",children:[Object(n.jsx)(C.a.Link,{href:t,active:e,children:m}),Object(n.jsx)(C.a.Link,{href:a,active:!e,children:c})]}),Object(n.jsxs)(C.a,{children:[Object(n.jsx)(C.a.Link,{href:r,active:s,children:"En"}),Object(n.jsx)(C.a.Link,{href:i,active:!s,children:"\u4e2d"})]})]})]})},M=[{title:2022,items:[{title:["Why We Sleep","\u6211\u4eec\u4e3a\u4ec0\u4e48\u8981\u7761\u89c9\uff1f"],image:["images/books/WhyWeSleep.jpeg","images/books/WhyWeSleep.jpeg"],author:["Matthew Walker","\u9a6c\u4fee\xb7\u6c83\u514b"]},{title:["Being Mortal","\u6700\u597d\u7684\u544a\u522b"],image:["images/books/BeingMortal.jpeg","images/books/BeingMortalCN.jpeg"],author:["Atul Gawande","\u963f\u56fe\xb7\u845b\u6587\u5fb7"]},{title:["Midnight in Chernobyl","\u5207\u5c14\u8bfa\u8d1d\u5229\u7684\u5348\u591c"],image:["images/books/MidnightInChernobyl.jpeg","images/books/MidnightInChernobylCN.jpg"],author:["Adam Higginbotham","\u4e9a\u5f53\xb7\u5e0c\u91d1\u535a\u7279\u59c6"]},{title:["Murder on the Orient Express","\u4e1c\u65b9\u5feb\u8f66\u8c0b\u6740\u6848"],image:["images/books/MurderOnTheOrientExpress.jpg","images/books/MurderOnTheOrientExpressCN.jpg"],author:["Agatha Christie","\u963f\u52a0\u838e\xb7\u514b\u91cc\u65af\u8482"]},{title:["And Then There Were None","\u65e0\u4eba\u751f\u8fd8"],image:["images/books/AndThenThereWereNone.jpg","images/books/AndThenThereWereNone.jpg"],author:["Agatha Christie","\u963f\u52a0\u838e\xb7\u514b\u91cc\u65af\u8482"]},{title:["Klara and the Sun","\u514b\u62c9\u62c9\u4e0e\u592a\u9633"],image:["images/books/KlaraAndTheSun.jpg","images/books/KlaraAndTheSun.jpg"],author:["Kazuo Ishiguro","\u77f3\u9ed1\u4e00\u96c4"]},{title:["The Crimes That Bind","\u7948\u7977\u843d\u5e55\u65f6"],image:["images/books/TheCrimesThatBind.jpeg","images/books/TheCrimesThatBind.jpeg"],author:["Keigo Higashino","\u4e1c\u91ce\u594e\u543e"]},{title:["The Storied Life of A. J. Fikry","\u5c9b\u4e0a\u4e66\u5e97"],image:["images/books/TheStoriedLifeOfAJFikry.jpg","images/books/TheStoriedLifeOfAJFikry.jpg"],author:["Gabrielle Zevin","\u5609\u5e03\u8389\xb7\u4e3d\u6587"]},{title:["Steve Jobs","\u53f2\u8482\u592b\xb7\u4e54\u5e03\u65af\u4f20"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1313501697l/11297044.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1313501697l/11297044.jpg"],author:["Walter Isaacson","\u6c83\u5c14\u7279\xb7\u827e\u8428\u514b\u68ee"]},{title:["Bad Blood","\u6076\u8840"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1563822235l/41304176._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1563822235l/41304176._SY475_.jpg"],author:["John Carreyrou","\u7ea6\u7ff0\xb7\u5361\u91cc\u9c81"]},{title:["A Man Called Ove","\u4e00\u4e2a\u53eb\u6b27\u7ef4\u7684\u7537\u4eba"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389203193l/20492604.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1582685622l/51691420._SX318_.jpg"],author:["Fredrik Backman","\u5f17\u96f7\u5fb7\u91cc\u514b\xb7\u5df4\u514b\u66fc"]}]},{title:2021,items:[{title:["Anxious People","\u7126\u8651\u7684\u4eba"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1594234890l/53799686._SX318_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1631182883l/58956221._SX318_.jpg"],author:["Fredrik Backman","\u5f17\u96f7\u5fb7\u91cc\u514b\xb7\u5df4\u514b\u66fc"]},{title:["The Forgotten Village","\u516d\u91cc\u5e84\u9057\u4e8b"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1551281544l/44152880.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1551281544l/44152880.jpg"],author:["Dong Dong Qiang","\u4e1c\u4e1c\u67aa"]},{title:["The Midnight Library","\u5348\u591c\u56fe\u4e66\u9986"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602190253l/52578297.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1620206792l/57120582._SX318_.jpg"],author:["Matt Haig","\u9ea6\u7279\xb7\u6d77\u683c"]},{title:["The Handmaid's Tale","\u4f7f\u5973\u7684\u6545\u4e8b"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618403388l/45864574._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1332442058l/13556813.jpg"],author:["Margaret Atwood","\u739b\u683c\u4e3d\u7279\xb7\u963f\u7279\u4f0d\u5fb7"]},{title:["Ordered","\u53d7\u547d"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618396718l/57736665._SX318_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1618396718l/57736665._SX318_.jpg"],author:["Zhi An","\u6b62\u5eb5"]},{title:["Grocery Store","\u5357\u8d27\u5e97"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1596438207l/54797378._SX318_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1596438207l/54797378._SX318_.jpg"],author:["Zhang Ji","\u5f20\u5fcc"]},{title:["Paper Towns","\u7eb8\u9547"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349013763l/8123162.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1568084857l/53024916._SX318_SY475_.jpg"],author:["John Green","\u7ea6\u7ff0\xb7\u683c\u6797"]},{title:["Fly Already","\u94f6\u6cb3\u7cfb\u8fb9\u7f18\u7684\u5c0f\u5931\u5e38"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1550156201l/44009977._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609782872l/56553602._SY475_.jpg"],author:["Etgar Keret","\u57c3\u7279\u52a0\xb7\u51ef\u96f7\u7279"]},{title:["Horizon, Bright Moon, Saber","\u5c0f\u674e\u98de\u52004\uff1a\u5929\u6daf\xb7\u660e\u6708\xb7\u5200"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474264872l/19273971.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474264872l/19273971.jpg"],author:["Gu Long","\u53e4\u9f99"]},{title:["Know My Name","\u77e5\u6653\u6211\u59d3\u540d"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1567616805l/49944910._SX318_SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1608824566l/56399805._SX318_.jpg"],author:["Chanel Miller","\u9999\u5948\u513f\xb7\u7c73\u52d2"]},{title:["Moonflower Murders","Moonflower Murders"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1599756269l/51456186._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1599756269l/51456186._SY475_.jpg"],author:["Anthony Horowitz","\u5b89\u4e1c\u5c3c\xb7\u970d\u6d1b\u7ef4\u8328"]},{title:["Magpie Murders","\u559c\u9e4a\u8c0b\u6740\u6848"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1482092109l/32970179._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1482092109l/32970179._SY475_.jpg"],author:["Anthony Horowitz","\u5b89\u4e1c\u5c3c\xb7\u970d\u6d1b\u7ef4\u8328"]}]},{title:2020,items:[{title:["Fang Si-Chi's First Love Paradise","\u623f\u601d\u742a\u7684\u521d\u604b\u4e50\u56ed"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564889971l/41057632._SX318_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1564889971l/41057632._SX318_.jpg"],author:["Lin Yi-han","\u6797\u5955\u542b"]},{title:["Lockdown","\u5c01\u9501"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1587570422l/53244954._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1587570422l/53244954._SY475_.jpg"],author:["Peter May","\u5f7c\u5f97\xb7\u6885"]},{title:["Eagle Soaring in the Ninth Month","\u5c0f\u674e\u98de\u52003\uff1a\u4e5d\u6708\u9e70\u98de"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474264968l/18925019.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474264968l/18925019.jpg"],author:["Gu Long","\u53e4\u9f99"]},{title:["Shut Up and Listen!","Shut Up and Listen!"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554889716l/45013646._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554889716l/45013646._SY475_.jpg"],author:["Tilman Fertitta","Tilman Fertitta"]},{title:["Bordertown Wanderer","\u5c0f\u674e\u98de\u52002\uff1a\u8fb9\u57ce\u6d6a\u5b50"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474265148l/18925016.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474265148l/18925016.jpg"],author:["Gu Long","\u53e4\u9f99"]},{title:["Sentimental Swordsman, Ruthless Sword","\u5c0f\u674e\u98de\u52001\uff1a\u591a\u60c5\u5251\u5ba2\u65e0\u60c5\u5251"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474265059l/18930869._SX318_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474265059l/18930869._SX318_.jpg"],author:["Gu Long","\u53e4\u9f99"]},{title:["Mastery","Mastery"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1488671791l/34463946._SX318_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1488671791l/34463946._SX318_.jpg"],author:["George Leonard","George Leonard"]},{title:["Ender's Game","\u5b89\u5fb7\u7684\u6e38\u620f"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1452898522l/8045789.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1452898522l/8045789.jpg"],author:["Orson Scott Card","\u5965\u68ee\xb7\u65af\u79d1\u7279\xb7\u5361\u5fb7"]},{title:["Shark's Fin and Sichuan Pepper","\u9c7c\u7fc5\u4e0e\u82b1\u6912"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553006363l/44536316._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553006363l/44536316._SY475_.jpg"],author:["Fuchsia Dunlop","\u6276\u971e\xb7\u9093\u6d1b\u666e"]},{title:["Like Father, Like Son","\u5982\u7236\u5982\u5b50"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1525401730l/40033086._SX318_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1525401730l/40033086._SX318_.jpg"],author:["Hirokazu Koreeda","\u662f\u679d\u88d5\u548c"]},{title:["82\u5e74\u751f\u7684\u91d1\u667a\u82f1","82\u5e74\u751f\u7684\u91d1\u667a\u82f1"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1570377823l/53114821._SX318_SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1570377823l/53114821._SX318_SY475_.jpg"],author:["Cho Nam-Joo","Cho Nam-Joo"]},{title:["Diary of an AssCan","Diary of an AssCan"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1526997647l/26852117.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1526997647l/26852117.jpg"],author:["Andy Weir","Andy Weir"]},{title:["The Martian","\u706b\u661f\u6551\u63f4"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1377968571l/18401393.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1377968571l/18401393.jpg"],author:["Andy Weir","\u5b89\u8fea\xb7\u5a01\u5c14"]},{title:["\u6700\u540e\u7684\u800d\u7334\u4eba","\u6700\u540e\u7684\u800d\u7334\u4eba"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1424008386l/24940477.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1424008386l/24940477.jpg"],author:["\u9a6c\u5b8f\u6770","\u9a6c\u5b8f\u6770"]},{title:["\u514b\u83b1\u56e0\u58f6","\u514b\u83b1\u56e0\u58f6"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1572404088l/48640357._SX318_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1572404088l/48640357._SX318_.jpg"],author:["\u5188\u5c9b\u4e8c\u4eba","\u5188\u5c9b\u4e8c\u4eba"]},{title:["\u574f\u5c0f\u5b69","\u574f\u5c0f\u5b69"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1560300097l/30642373.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1560300097l/30642373.jpg"],author:["\u7d2b\u91d1\u9648","\u7d2b\u91d1\u9648"]},{title:["The Devil Wears Prada","\u7a7f\u666e\u62c9\u8fbe\u7684\u5973\u738b"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1525283199l/40024758.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1525283199l/40024758.jpg"],author:["Lauren Weisberger","\u841d\u4f26\xb7\u8587\u4e1d\u67cf\u683c"]},{title:["Delivered from Distraction","Delivered from Distraction"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394607958l/19895671.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394607958l/19895671.jpg"],author:["Edward M. Hallowell and John J. Ratey","Edward M. Hallowell and John J. Ratey"]},{title:["Educated","Educated"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609778195l/36247169._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1609778195l/36247169._SY475_.jpg"],author:["Tara Westover","Tara Westover"]}]},{title:2019,items:[{title:["Driven to Distraction","Driven to Distraction"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388187952l/18712223.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388187952l/18712223.jpg"],author:["Edward M. Hallowell and John J. Ratey","Edward M. Hallowell and John J. Ratey"]},{title:["\u957f\u5b89\u5341\u4e8c\u65f6\u8fb0","\u957f\u5b89\u5341\u4e8c\u65f6\u8fb0"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1488352112l/34437247._SX318_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1488352112l/34437247._SX318_.jpg"],author:["Ma Boyong","Ma Boyong"]},{title:["The Phoenix Project","\u51e4\u51f0\u9879\u76ee"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1516785582l/38191426._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1516785582l/38191426._SY475_.jpg"],author:["Gene Kim, Kevin Behr, and George Spafford","Gene Kim, Kevin Behr, and George Spafford"]},{title:["The Girl with Seven Names","The Girl with Seven Names"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1495994007l/35248097._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1495994007l/35248097._SY475_.jpg"],author:["Hyeonseo Lee","Hyeonseo Lee"]},{title:["Ready Player One","\u5934\u53f7\u73a9\u5bb6"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390275705l/20603758.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390275705l/20603758.jpg"],author:["Ernest Cline","\u6069\u65af\u7279\xb7\u514b\u83b1\u6069"]},{title:["Sleep","Sleep"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1507696286l/36390562._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1507696286l/36390562._SY475_.jpg"],author:["Nick Littlehales","Nick Littlehales"]},{title:["\u4e09\u4f53","\u4e09\u4f53"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1552877666l/44490300.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1552877666l/44490300.jpg"],author:["\u5218\u6148\u6b23","\u5218\u6148\u6b23"]},{title:["How to Stop Worrying and Start Living","\u4eba\u6027\u7684\u4f18\u70b9"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442129098l/4866._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442129098l/4866._SY475_.jpg"],author:["Dale Carnegie","\u6234\u5c14\xb7\u5361\u8010\u57fa"]},{title:["\u5230\u4e86\u5357\u534a\u7403\uff0c\u4e00\u5207\u90fd\u53d8\u4e86","\u5230\u4e86\u5357\u534a\u7403\uff0c\u4e00\u5207\u90fd\u53d8\u4e86"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559976411l/46207890._SX318_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1559976411l/46207890._SX318_.jpg"],author:["\u5218\u5c0f\u987a","\u5218\u5c0f\u987a"]},{title:["How to Win Friends and Influence People","\u4eba\u6027\u7684\u5f31\u70b9"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442726934l/4865._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442726934l/4865._SY475_.jpg"],author:["Dale Carnegie","\u6234\u5c14\xb7\u5361\u8010\u57fa"]},{title:["\u6d41\u6d6a\u5730\u7403","\u6d41\u6d6a\u5730\u7403"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535086444l/41445419._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535086444l/41445419._SY475_.jpg"],author:["\u5218\u6148\u6b23","\u5218\u6148\u6b23"]},{title:["Watch Dogs The DedSec Revenge","Watch Dogs The DedSec Revenge"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1445984702l/27310755._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1445984702l/27310755._SY475_.jpg"],author:["Innovate Media","Innovate Media"]}]},{title:2018,items:[{title:["Allegiant","\u5fe0\u8bda\u8005"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1395582745l/18710190.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1395582745l/18710190.jpg"],author:["Veronica Roth","Veronica Roth"]},{title:["The World of Divergent","The World of Divergent"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1376880754l/17860199.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1376880754l/17860199.jpg"],author:["Veronica Roth","Veronica Roth"]},{title:["Insurgent","\u53cd\u53db\u8005"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1324015626l/13068756.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1324015626l/13068756.jpg"],author:["Veronica Roth","Veronica Roth"]}]},{title:2017,items:[{title:["Free Four","Free Four"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1342596743l/15743053.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1342596743l/15743053.jpg"],author:["Veronica Roth","Veronica Roth"]},{title:["Daily Life in the Roman City","Daily Life in the Roman City"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328813293l/6377286.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328813293l/6377286.jpg"],author:["Gregory S. Aldrete","Gregory S. Aldrete"]},{title:["Divergent","\u5206\u6b67\u8005"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1374773761l/9717320.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1374773761l/9717320.jpg"],author:["Veronica Roth","Veronica Roth"]},{title:["The Fever Code","The Fever Code"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1450916936l/28285244._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1450916936l/28285244._SY475_.jpg"],author:["James Dashner","James Dashner"]},{title:["The Kill Order","The Kill Order"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1342539117l/13091429.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1342539117l/13091429.jpg"],author:["James Dashner","James Dashner"]},{title:["The Death Cure","The Death Cure"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1304015333l/11162293.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1304015333l/11162293.jpg"],author:["James Dashner","James Dashner"]},{title:["Thomas\u2019s First Memory of the Flare","Thomas\u2019s First Memory of the Flare"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328589200l/12878132.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328589200l/12878132.jpg"],author:["James Dashner","James Dashner"]},{title:["The Scorch Trials","The Scorch Trials"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327972472l/8587084.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327972472l/8587084.jpg"],author:["James Dashner","James Dashner"]},{title:["The Maze Runner","The Maze Runner"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1339111530l/8044584.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1339111530l/8044584.jpg"],author:["James Dashner","James Dashner"]},{title:["Harry Potter and the Deathly Hallows","\u54c8\u5229\xb7\u6ce2\u7279\u4e0e\u6b7b\u4ea1\u5723\u5668"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449590443l/28143118._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449590443l/28143118._SY475_.jpg"],author:["J.K. Rowling","J\xb7K\xb7\u7f57\u7433"]}]},{title:2016,items:[{title:["Harry Potter and the Half-Blood Prince","\u54c8\u5229\xb7\u6ce2\u7279\u4e0e\u201c\u6df7\u8840\u738b\u5b50\u201d"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1587697303l/1._SX318_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1587697303l/1._SX318_.jpg"],author:["J.K. Rowling","J\xb7K\xb7\u7f57\u7433"]},{title:["Harry Potter and the Order of the Phoenix","\u54c8\u5229\xb7\u6ce2\u7279\u4e0e\u51e4\u51f0\u793e"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449602534l/28144751._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1449602534l/28144751._SY475_.jpg"],author:["J.K. Rowling","J\xb7K\xb7\u7f57\u7433"]},{title:["Quantum Break: Zero State","Quantum Break: Zero State"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1459395480l/29746347._SX318_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1459395480l/29746347._SX318_.jpg"],author:["Cam Rogers","Cam Rogers"]},{title:["Harry Potter and the Goblet of Fire","\u54c8\u5229\xb7\u6ce2\u7279\u4e0e\u706b\u7130\u676f"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1492616888l/28137887._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1492616888l/28137887._SY475_.jpg"],author:["J.K. Rowling","J\xb7K\xb7\u7f57\u7433"]},{title:["Harry Potter and the Prisoner of Azkaban","\u54c8\u5229\xb7\u6ce2\u7279\u4e0e\u963f\u5179\u5361\u73ed\u56da\u5f92"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1335037879l/13611643.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1335037879l/13611643.jpg"],author:["J.K. Rowling","J\xb7K\xb7\u7f57\u7433"]},{title:["Harry Potter and the Chamber of Secrets","\u54c8\u5229\xb7\u6ce2\u7279\u4e0e\u5bc6\u5ba4"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1334525819l/13603662.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1334525819l/13603662.jpg"],author:["J.K. Rowling","J\xb7K\xb7\u7f57\u7433"]},{title:["Harry Potter and the Sorcerer's Stone","\u54c8\u5229\xb7\u6ce2\u7279\u4e0e\u9b54\u6cd5\u77f3"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333153083l/13562891.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333153083l/13562891.jpg"],author:["J.K. Rowling","J\xb7K\xb7\u7f57\u7433"]},{title:["Third Culture Kids","Third Culture Kids"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389502301l/121920.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1389502301l/121920.jpg"],author:["David C. Pollock and Ruth E. van Reken","David C. Pollock and Ruth E. van Reken"]},{title:["My Two Moms","My Two Moms"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394283923l/18040366.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1394283923l/18040366.jpg"],author:["Zach Wahls","Zach Wahls"]},{title:["A Sociology of Family Life","A Sociology of Family Life"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1375674333l/13762956.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1375674333l/13762956.jpg"],author:["Deborah Chambers","Deborah Chambers"]},{title:["How We Learn","How We Learn"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405136856l/22711288.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405136856l/22711288.jpg"],author:["Benedict Carey","Benedict Carey"]}]},{title:2015,items:[{title:["Having Our Say","Having Our Say"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1385942795l/19091194.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1385942795l/19091194.jpg"],author:["Sarah L. Delany, A. Elizabeth Delany, and Amy Hill Hearth","Sarah L. Delany, A. Elizabeth Delany, and Amy Hill Hearth"]},{title:["\u89e3\u5fe7\u6742\u8d27\u5e97","\u89e3\u5fe7\u6742\u8d27\u5e97"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1424481746l/24982941.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1424481746l/24982941.jpg"],author:["Keigo Higashino","Keigo Higashino"]}]},{title:2014,items:[{title:["The Longest Way","\u5f92\u6b65\u4e2d\u56fd"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1341237180l/15732501.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386201299l/19190763.jpg"],author:["Christoph Rehage","\u96f7\u514b"]}]},{title:2013,items:[{title:["The Minority Report","\u5c11\u6570\u6d3e\u62a5\u544a"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390719396l/581125.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1428242570l/25301536.jpg"],author:["Philip K. Dick","\u83f2\u5229\u666e\xb7\u72c4\u514b"]},{title:["\u80cc\u5305\u5341\u5e74\uff1a\u6211\u7684\u804c\u4e1a\u662f\u65c5\u884c","\u80cc\u5305\u5341\u5e74\uff1a\u6211\u7684\u804c\u4e1a\u662f\u65c5\u884c"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1393091420l/18923585.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1393091420l/18923585.jpg"],author:["\u5c0f\u9e4f","\u5c0f\u9e4f"]},{title:["\u770b\u89c1","\u770b\u89c1"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1408458884l/18458655.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1408458884l/18458655.jpg"],author:["\u67f4\u9759","\u67f4\u9759"]},{title:["Mockingjay","\u9965\u997f\u6e38\u620f3\uff1a\u5632\u7b11\u9e1f"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722918l/7260188._SY475_.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722918l/7260188._SY475_.jpg"],author:["Suzanne Collins","\u82cf\u73ca\xb7\u67ef\u6797\u65af"]},{title:["Catching Fire","\u9965\u997f\u6e38\u620f2\uff1a\u71c3\u70e7\u7684\u5973\u5b69"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722941l/6148028.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722941l/6148028.jpg"],author:["Suzanne Collins","\u82cf\u73ca\xb7\u67ef\u6797\u65af"]},{title:["The Hunger Games","\u9965\u997f\u6e38\u620f"],image:["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg","https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg"],author:["Suzanne Collins","\u82cf\u73ca\xb7\u67ef\u6797\u65af"]}]}],v=[{title:2022,items:[{title:["God of War","\u6218\u795e"],image:["GodOfWar.jpeg","GodOfWar.jpeg"],author:["SIE Santa Monica Studio","\u7d22\u5c3c\u4e92\u52a8\u5a31\u4e50\u5723\u83ab\u5c3c\u5361\u5de5\u4f5c\u5ba4"],dlc:[]},{title:["Assassin's Creed II","\u523a\u5ba2\u4fe1\u6761II"],image:["AssassinsCreed2.jpeg","AssassinsCreed2.jpeg"],author:["Ubisoft","\u80b2\u78a7"],dlc:[]},{title:["Assassin's Creed","\u523a\u5ba2\u4fe1\u6761"],image:["AssassinsCreed1.jpeg","AssassinsCreed1.jpeg"],author:["Ubisoft","\u80b2\u78a7"],dlc:[]},{title:["The Last of Us Part II","\u6700\u540e\u751f\u8fd8\u8005 \u7b2cII\u7ae0"],image:["TheLastOfUsPart2.webp","TheLastOfUsPart2.webp"],author:["Naughty Dog","\u987d\u76ae\u72d7"],dlc:[]},{title:["The Last of Us","\u6700\u540e\u751f\u8fd8\u8005"],image:["TheLastOfUs.jpeg","TheLastOfUs.jpeg"],author:["Naughty Dog","\u987d\u76ae\u72d7"],dlc:[["Left Behind","\u629b\u8bf8\u8111\u540e"]]},{title:["Uncharted 3: Drake's Deception","\u795e\u79d8\u6d77\u57df3\uff1a\u5fb7\u96f7\u514b\u7684\u8be1\u8ba1"],image:["UnchartedDrakesDeception.jpeg","UnchartedDrakesDeception.jpeg"],author:["Naughty Dog","\u987d\u76ae\u72d7"],dlc:[]},{title:["Uncharted 2: Among Thieves","\u795e\u79d8\u6d77\u57df2\uff1a\u7eb5\u6a2a\u56db\u6d77"],image:["UnchartedAmongThieves.jpeg","UnchartedAmongThieves.jpeg"],author:["Naughty Dog","\u987d\u76ae\u72d7"],dlc:[]},{title:["Uncharted: Drake's Fortune","\u795e\u79d8\u6d77\u57df\uff1a\u5fb7\u96f7\u514b\u8239\u957f\u7684\u5b9d\u85cf"],image:["UnchartedDrakesFortune.webp","UnchartedDrakesFortune.webp"],author:["Naughty Dog","\u987d\u76ae\u72d7"],dlc:[]},{title:["Mafia","\u56db\u6d77\u5144\u5f1f"],image:["Mafia.jpeg","Mafia.jpeg"],author:["Hangar 13","Hangar 13"],dlc:[]}]},{title:2021,items:[{title:["Marvel's Guardians of the Galaxy","\u6f2b\u5a01\u94f6\u6cb3\u62a4\u536b\u961f"],image:["GuardiansOfTheGalaxy.jpeg","GuardiansOfTheGalaxy.jpeg"],author:["Eidos-Montr\xe9al","\u827a\u593a\u8499\u7279\u5229\u5c14"],dlc:[]},{title:["Life Is Strange: True Colors","\u5947\u5f02\u4eba\u751f\uff1a\u672c\u8272"],image:["LifeIsStrangeTrueColors.jpeg","LifeIsStrangeTrueColors.jpeg"],author:["Deck Nine","Deck Nine"],dlc:[["Wavelengths","\u6ce2\u957f"]]},{title:["Star Wars Jedi: Fallen Order","\u661f\u7403\u5927\u6218 \u7edd\u5730\uff1a\u9668\u843d\u7684\u6b66\u58eb\u56e2"],image:["StarWarsJediFallenOrder.jpeg","StarWarsJediFallenOrder.jpeg"],author:["Electronic Arts","\u827a\u7535"],dlc:[]},{title:["Detroit: Become Human","\u5e95\u7279\u5f8b\uff1a\u5316\u8eab\u4e3a\u4eba"],image:["DetroitBecomeHuman.jpeg","DetroitBecomeHuman.jpeg"],author:["Quantic Dream","Quantic Dream"],dlc:[]},{title:["Marvel's Spider-Man: Miles Morales","\u6f2b\u5a01\u8718\u86db\u4fa0\uff1a\u8fc8\u5c14\u65af\xb7\u83ab\u62c9\u96f7\u65af"],image:["SpiderManMilesMorales.webp","SpiderManMilesMorales.webp"],author:["Insomniac Games","Insomniac Games"],dlc:[]},{title:["Marvel's Avengers","\u6f2b\u5a01\u590d\u4ec7\u8005"],image:["Avengers.jpeg","Avengers.jpeg"],author:["Crystal Dynamics","\u6676\u4f53\u52a8\u529b"],dlc:[["Kate Bishop - Taking AIM","\u51ef\u7279\xb7\u6bd5\u8096\u666e\u4e4b\u51fb\u8d25\u5148\u950b\u79d1\u6280"],["Hawkeye - Future Imperfect","\u9e70\u773c\u4e4b\u4e0d\u5b8c\u7f8e\u7684\u672a\u6765"]]},{title:["Shadow of the Tomb Raider","\u53e4\u5893\u4e3d\u5f71\uff1a\u6697\u5f71"],image:["ShadowOfTheTombRaider.jpeg","ShadowOfTheTombRaider.jpeg"],author:["Crystal Dynamics","\u6676\u4f53\u52a8\u529b"],dlc:[]},{title:["Marvel's Spider-Man","\u6f2b\u5a01\u8718\u86db\u4fa0"],image:["SpiderMan.webp","SpiderMan.webp"],author:["Insomniac Games","Insomniac Games"],dlc:[["The City That Never Sleeps","\u4e0d\u591c\u57ce"]]},{title:["Cyberpunk 2077","\u8d5b\u535a\u670b\u514b 2077"],image:["Cyberpunk2077.jpeg","Cyberpunk2077.jpeg"],author:["CD Projekt","CD Projekt"],dlc:[]}]},{title:2020,items:[{title:["Watch Dogs: Legion","\u770b\u95e8\u72d7\uff1a\u519b\u56e2"],image:["WatchDogsLegion.webp","WatchDogsLegion.webp"],author:["Ubisoft","\u80b2\u78a7"],dlc:[["Bloodline","\u8840\u8109\u76f8\u627f"]]},{title:["Watch Dogs 2","\u770b\u95e8\u72d72"],image:["WatchDogs2.jpeg","WatchDogs2.jpeg"],author:["Ubisoft","\u80b2\u78a7"],dlc:[]},{title:["The Invisible Guardian","\u9690\u5f62\u5b88\u62a4\u8005"],image:["TheInvisibleGuardian.jpeg","TheInvisibleGuardian.jpeg"],author:["New One Studio","New One Studio"],dlc:[]},{title:["Rise of the Tomb Raider","\u53e4\u5893\u4e3d\u5f71\uff1a\u5d1b\u8d77"],image:["RiseOfTheTombRaider.jpeg","RiseOfTheTombRaider.jpeg"],author:["Crystal Dynamics","\u6676\u4f53\u52a8\u529b"],dlc:[["Baba Yaga","\u5df4\u5df4\u96c5\u52a0"]]},{title:["Uncharted: The Lost Legacy","\u795e\u79d8\u6d77\u57df\uff1a\u5931\u843d\u7684\u9057\u4ea7"],image:["UnchartedTheLostLegacy.jpeg","UnchartedTheLostLegacy.jpeg"],author:["Naughty Dog","\u987d\u76ae\u72d7"],dlc:[]},{title:["Uncharted 4: A Thief\u2019s End","\u795e\u79d8\u6d77\u57df4\uff1a\u76d7\u8d3c\u672b\u8def"],image:["Uncharted4.jpeg","Uncharted4.jpeg"],author:["Naughty Dog","\u987d\u76ae\u72d7"],dlc:[]},{title:["Watch Dogs","\u770b\u95e8\u72d7"],image:["WatchDogs.jpeg","WatchDogs.jpeg"],author:["Ubisoft","\u80b2\u78a7"],dlc:[["Bad Blood","\u574f\u8840"]]},{title:["Tomb Raider","\u53e4\u5893\u4e3d\u5f71"],image:["TombRaider.jpeg","TombRaider.jpeg"],author:["Crystal Dynamics","\u6676\u4f53\u52a8\u529b"],dlc:[]}]},{title:2016,items:[{title:["Shadow Complex","\u591a\u91cd\u9634\u5f71"],image:["ShadowComplex.jpeg","ShadowComplex.jpeg"],author:["Chair Entertainment","Chair Entertainment"],dlc:[]},{title:["Quantum Break","\u91cf\u5b50\u88c2\u75d5"],image:["QuantumBreak.jpeg","QuantumBreak.jpeg"],author:["Remedy Entertainment","\u7eff\u7f8e\u8fea\u5a31\u4e50"],dlc:[]},{title:["Firewatch","\u770b\u706b\u4eba"],image:["Firewatch.jpeg","Firewatch.jpeg"],author:["Campo Santo","Campo Santo"],dlc:[]}]}],w=function(){var o=function(o){return M.map((function(e){return Object(n.jsx)(f,{title:e.title,items:e.items,lang:o,isGame:!1},e.title)}))},e=function(o){return v.map((function(e){return Object(n.jsx)(f,{title:e.title,items:e.items,lang:o,isGame:!0},e.title)}))};return Object(n.jsx)(m.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(O,{}),Object(n.jsx)(g.a,{children:Object(n.jsxs)(p.c,{children:[Object(n.jsx)(p.a,{path:"/books/zh",children:o("zh")}),Object(n.jsx)(p.a,{path:"/(|books)",children:o("en")}),Object(n.jsx)(p.a,{path:"/games/zh",children:e("zh")}),Object(n.jsx)(p.a,{path:"/games",children:e("en")})]})})]})})},x=function(o){o&&o instanceof Function&&s.e(3).then(s.bind(null,61)).then((function(e){var s=e.getCLS,t=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;s(o),t(o),a(o),r(o),i(o)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(w,{})}),document.getElementById("root")),x()}},[[53,1,2]]]);
//# sourceMappingURL=main.370872ce.chunk.js.map