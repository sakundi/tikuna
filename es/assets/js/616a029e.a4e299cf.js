"use strict";(self.webpackChunktikuna=self.webpackChunktikuna||[]).push([[135],{3905:(e,a,n)=>{n.d(a,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,r)}return n}function t(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,r,i=function(e,a){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var a=r.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):t(t({},a),e)),n},u=function(e){var a=d(e.components);return r.createElement(l.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=i,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(g,t(t({ref:a},u),{},{components:n})):r.createElement(g,t({ref:a},u))}));function m(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=n.length,t=new Array(o);t[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,t[1]=s;for(var d=2;d<o;d++)t[d]=n[d];return r.createElement.apply(null,t)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2414:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>t,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const o={slug:"introducing-tikuna",title:"Tikuna: Seguridad en Blockchain usando IA - Soportado por Ethereum Foundation.",authors:["andres","francis","loui"]},t=void 0,s={permalink:"/es/blog/introducing-tikuna",source:"@site/i18n/es/docusaurus-plugin-content-blog/2022-08-01-first-blog-post.md",title:"Tikuna: Seguridad en Blockchain usando IA - Soportado por Ethereum Foundation.",description:"---",date:"2022-08-01T00:00:00.000Z",formattedDate:"1 de agosto de 2022",tags:[],readingTime:3,hasTruncateMarker:!1,authors:[{name:"Andres Gomez Ramirez",title:"Doctor en ciberseguridad de la Universidad de Franksfurt y CERN. Investigador de seguridad en blockchain en Edenia.",url:"https://www.linkedin.com/in/andres-gomez-ramirez-bb7226156/",imageURL:"https://tikuna.io/img/team/andres.jpeg",key:"andres"},{name:"Francis Gomez Ramirez",title:"Inform\xe1tico y especialista en gesti\xf3n de proyectos con amplia experiencia en la industria bancaria y fintech.",url:"https://www.linkedin.com/in/francis-adrian-gomez-ramirez-599598138/",imageURL:"https://tikuna.io/img/team/francis.jpeg",key:"francis"},{name:"Loui Al Sardy",title:"Candidato a doctor en catedra en ingenieria de software en la Universidad de Erlangen-Nuremberg.",url:"https://www.linkedin.com/in/loui-alsardy/",imageURL:"https://tikuna.io/img/team/loui.jpeg",key:"loui"}],frontMatter:{slug:"introducing-tikuna",title:"Tikuna: Seguridad en Blockchain usando IA - Soportado por Ethereum Foundation.",authors:["andres","francis","loui"]}},l={authorsImageUrls:[void 0,void 0,void 0]},d=[{value:"\xbfQui\xe9n es el equipo detr\xe1s?",id:"qui\xe9n-es-el-equipo-detr\xe1s",level:2},{value:"\xbfCu\xe1l es el problema que Tikuna trata de resolver?",id:"cu\xe1l-es-el-problema-que-tikuna-trata-de-resolver",level:2},{value:"\xbfC\xf3mo se dispondr\xe1 la informaci\xf3n que Tikuna va a representar?",id:"c\xf3mo-se-dispondr\xe1-la-informaci\xf3n-que-tikuna-va-a-representar",level:2},{value:"\xbfCu\xe1l ser\xe1 el resultado final del proyecto de investigaci\xf3n Tikuna, en esta primera etapa?",id:"cu\xe1l-ser\xe1-el-resultado-final-del-proyecto-de-investigaci\xf3n-tikuna-en-esta-primera-etapa",level:2},{value:"Pasos hacia el futuro\u2026.",id:"pasos-hacia-el-futuro",level:2}],u={toc:d};function c(e){let{components:a,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Los sistemas de seguridad inform\xe1tica son complejos y juegan un papel importante en el desarrollo de aplicaciones. En sistemas tan seguros y descentralizados como redes blockchain, tambi\xe9n existen casos en que las dApps, personas usuarias e incluso la misma red se encuentran expuestas a muchos riesgos todos los d\xedas, riesgos que pueden vulnerar elementos importantes de manera individual o colectiva. Es por esto que muchas organizaciones se encuentran interesadas en promover la investigaci\xf3n y el desarrollo en soluciones que velen por la seguridad, por lo que precisamente estamos desarrollando Tikuna."),(0,i.kt)("p",null,"Tikuna es una prueba de concepto de un sistema de monitorizaci\xf3n de la seguridad de la red P2P para el blockchain de Ethereum. Al implementar t\xe9cnicas de machine learning, Tikuna extraer\xe1 informaci\xf3n sobre seguridad y rendimiento para la detecci\xf3n temprana de incidentes desafortunados. Y mejorando la visibilidad al estado de seguridad de la red P2P. Este proyecto de investigaci\xf3n propuesto ha sido aprobado y apoyado por la ",(0,i.kt)("a",{parentName:"p",href:"http://ethereum.org"},"Ethereum Foundation")," con una donaci\xf3n de USD 102.200 para iniciar el proceso de desarrollo."),(0,i.kt)("p",null,"El equipo de Tikuna se ha acercado este 2022 a la apertura de los Grants acad\xe9micos de Ethereum Foundation, en el \xe1rea de P2P Network. Somos el \xfanico equipo en Am\xe9rica Latina que recibi\xf3 la aprobaci\xf3n y financiaci\xf3n de Ethereum Foundation. Este es el ",(0,i.kt)("a",{parentName:"p",href:"https://blog.ethereum.org/2022/07/29/academic-grants-grantee-announce"},"anuncio oficial")," publicado por ellos."),(0,i.kt)("h2",{id:"qui\xe9n-es-el-equipo-detr\xe1s"},"\xbfQui\xe9n es el equipo detr\xe1s?"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"team",src:n(7554).Z,width:"3000",height:"2002"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://tikuna.io"},"Tikuna")," es un proyecto liderado por ",(0,i.kt)("a",{parentName:"p",href:"http://edenia.com"},"Edenia")," y ",(0,i.kt)("a",{parentName:"p",href:"http://sakundi.io"},"Sakundi"),". Edenia gestiona una infraestructura independiente de blockchain y desarrolla soluciones Web3. Sakundi es una organizaci\xf3n enfocada en la seguridad y privacidad de blockchain basada en la investigaci\xf3n y que ofrece soluciones de monitorizaci\xf3n de seguridad para organizaciones blockchain y aplicaciones distribuidas basadas en herramientas de Inteligencia Artificial."),(0,i.kt)("h2",{id:"cu\xe1l-es-el-problema-que-tikuna-trata-de-resolver"},"\xbfCu\xe1l es el problema que Tikuna trata de resolver?"),(0,i.kt)("p",null,"Tikuna propone una soluci\xf3n de c\xf3digo abierto que ayuda a aumentar la visibilidad en el estado de los nodos, detectando de manera temprana ataques potenciales. Este es un hecho que aporta a la comunidad una herramienta adicional para prevenir o reportar incidentes que terminan siendo un suceso desafortunado, afectando miles de transacciones y/o aplicaciones que funcionan sobre esta blockchain."),(0,i.kt)("h2",{id:"c\xf3mo-se-dispondr\xe1-la-informaci\xf3n-que-tikuna-va-a-representar"},"\xbfC\xf3mo se dispondr\xe1 la informaci\xf3n que Tikuna va a representar?"),(0,i.kt)("p",null,"Dentro de los entregables se encuentra un dashboard interactivo en el que los usuarios u organizaciones pueden consultar informaci\xf3n de los nodos. Esta informaci\xf3n ser\xe1 de datos abiertos y no tendr\xe1 ning\xfan costo o limitante legal para su uso o reproducci\xf3n. Adem\xe1s, adjunto habr\xe1 un documento cient\xedfico que respalde el producto."),(0,i.kt)("h2",{id:"cu\xe1l-ser\xe1-el-resultado-final-del-proyecto-de-investigaci\xf3n-tikuna-en-esta-primera-etapa"},"\xbfCu\xe1l ser\xe1 el resultado final del proyecto de investigaci\xf3n Tikuna, en esta primera etapa?"),(0,i.kt)("p",null,"El objetivo general del proyecto es apoyar a la comunidad de Ethereum proporcion\xe1ndoles una herramienta inteligente de \xfaltima generaci\xf3n capaz de recolectar informaci\xf3n relacionada con la seguridad del estado de la red P2P y mejorar la visibilidad de la red proporcionando informaci\xf3n sobre su estado actual.\nUn entregable que se pretende desarrollar es un dashboard en el que los usuarios u organizaciones pueden hacer una consulta de los nodos."),(0,i.kt)("h2",{id:"pasos-hacia-el-futuro"},"Pasos hacia el futuro\u2026."),(0,i.kt)("p",null,"Tikuna es una soluci\xf3n innovadora que dar\xe1 respaldo a la seguridad blockchain de Ethereum, m\xe1s a\xfan en la evoluci\xf3n hacia PoS (Proof-of-Stake) en el que los nodos juegan un papel m\xe1s importante en la validaci\xf3n de bloques con su participaci\xf3n. Con el ritmo acelerado de la expansi\xf3n de las aplicaciones Web3 y el uso de redes de participaci\xf3n, pensamos que en el futuro Tikuna tiene el potencial de ser una soluci\xf3n a escala multi-chain. Con estos esfuerzos, iremos expandiendo su aplicaci\xf3n a trav\xe9s de redes distintas que usen PoS o DPoS como su mecanismo de consenso."))}c.isMDXComponent=!0},7554:(e,a,n)=>{n.d(a,{Z:()=>r});const r=n.p+"assets/images/second-card-28106da1b069ba915f287ab515373e41.webp"}}]);