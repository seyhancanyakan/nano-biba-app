var lh=Object.create;var Ga=Object.defineProperty;var dh=Object.getOwnPropertyDescriptor;var ph=Object.getOwnPropertyNames;var ch=Object.getPrototypeOf,fh=Object.prototype.hasOwnProperty;var Qt=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var mh=(e,t,r)=>()=>{if(r)throw r[0];try{return e&&(t=e(e=0)),t}catch(a){throw r=[a],a}};var hh=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}},bo=(e,t)=>{for(var r in t)Ga(e,r,{get:t[r],enumerable:!0})},wo=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ph(t))!fh.call(e,n)&&n!==r&&Ga(e,n,{get:()=>t[n],enumerable:!(a=dh(t,n))||a.enumerable});return e};var gh=(e,t,r)=>(r=e!=null?lh(ch(e)):{},wo(t||!e||!e.__esModule?Ga(r,"default",{value:e,enumerable:!0}):r,e)),Jn=e=>wo(Ga({},"__esModule",{value:!0}),e);var Ka={};bo(Ka,{cpus:()=>xh,createRequire:()=>$h,default:()=>_h,dirname:()=>bh,join:()=>yh,readFile:()=>wh,resolve:()=>vh});var _h,yh,vh,bh,wh,$h,xh,Xa=mh(()=>{_h={},yh=()=>"",vh=()=>"",bh=()=>"",wh=async()=>new ArrayBuffer(0),$h=()=>(()=>({})),xh=()=>[]});var ko=hh((xo,ei)=>{var $o=(()=>{var e=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0;return typeof __filename<"u"&&(e=e||__filename),(function(t={}){var r=t,a,n;r.ready=new Promise((u,f)=>{a=u,n=f}),r.expectedDataFileDownloads||(r.expectedDataFileDownloads=0),r.expectedDataFileDownloads++,(function(){if(!(r.ENVIRONMENT_IS_PTHREAD||r.$ww)){var u=function(f){var g="";typeof window=="object"?g=window.encodeURIComponent(window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/"):typeof process>"u"&&typeof location<"u"&&(g=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/"));var w="piper_phonemize.data",C="piper_phonemize.data";typeof r.locateFilePackage=="function"&&!r.locateFile&&(r.locateFile=r.locateFilePackage,z("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)"));var R=r.locateFile?r.locateFile(C,""):C,P=f.remote_package_size;function N(se,oe,xe,Le){if(typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"){(Xa(),Jn(Ka)).readFile(se,function(Te,V){Te?Le(Te):xe(V.buffer)});return}var Ce=new XMLHttpRequest;Ce.open("GET",se,!0),Ce.responseType="arraybuffer",Ce.onprogress=function(Te){var V=se,ue=oe;if(Te.total&&(ue=Te.total),Te.loaded){Ce.addedTotal?r.dataFileDownloads[V].loaded=Te.loaded:(Ce.addedTotal=!0,r.dataFileDownloads||(r.dataFileDownloads={}),r.dataFileDownloads[V]={loaded:Te.loaded,total:ue});var Ue=0,Ne=0,at=0;for(var Ge in r.dataFileDownloads){var ra=r.dataFileDownloads[Ge];Ue+=ra.total,Ne+=ra.loaded,at++}Ue=Math.ceil(Ue*r.expectedDataFileDownloads/at),r.setStatus&&r.setStatus(`Downloading data... (${Ne}/${Ue})`)}else r.dataFileDownloads||r.setStatus&&r.setStatus("Downloading data...")},Ce.onerror=function(Te){throw new Error("NetworkError for: "+se)},Ce.onload=function(Te){if(Ce.status==200||Ce.status==304||Ce.status==206||Ce.status==0&&Ce.response){var V=Ce.response;xe(V)}else throw new Error(Ce.statusText+" : "+Ce.responseURL)},Ce.send(null)}function te(se){console.error("package error:",se)}var ve=null,$e=r.getPreloadedPackage?r.getPreloadedPackage(R,P):null;$e||N(R,P,function(se){ve?(ve(se),ve=null):$e=se},te);function Ie(){function se(Te,V){if(!Te)throw V+new Error().stack}r.FS_createPath("/","espeak-ng-data",!0,!0),r.FS_createPath("/espeak-ng-data","lang",!0,!0),r.FS_createPath("/espeak-ng-data/lang","aav",!0,!0),r.FS_createPath("/espeak-ng-data/lang","art",!0,!0),r.FS_createPath("/espeak-ng-data/lang","azc",!0,!0),r.FS_createPath("/espeak-ng-data/lang","bat",!0,!0),r.FS_createPath("/espeak-ng-data/lang","bnt",!0,!0),r.FS_createPath("/espeak-ng-data/lang","ccs",!0,!0),r.FS_createPath("/espeak-ng-data/lang","cel",!0,!0),r.FS_createPath("/espeak-ng-data/lang","cus",!0,!0),r.FS_createPath("/espeak-ng-data/lang","dra",!0,!0),r.FS_createPath("/espeak-ng-data/lang","esx",!0,!0),r.FS_createPath("/espeak-ng-data/lang","gmq",!0,!0),r.FS_createPath("/espeak-ng-data/lang","gmw",!0,!0),r.FS_createPath("/espeak-ng-data/lang","grk",!0,!0),r.FS_createPath("/espeak-ng-data/lang","inc",!0,!0),r.FS_createPath("/espeak-ng-data/lang","ine",!0,!0),r.FS_createPath("/espeak-ng-data/lang","ira",!0,!0),r.FS_createPath("/espeak-ng-data/lang","iro",!0,!0),r.FS_createPath("/espeak-ng-data/lang","itc",!0,!0),r.FS_createPath("/espeak-ng-data/lang","jpx",!0,!0),r.FS_createPath("/espeak-ng-data/lang","map",!0,!0),r.FS_createPath("/espeak-ng-data/lang","miz",!0,!0),r.FS_createPath("/espeak-ng-data/lang","myn",!0,!0),r.FS_createPath("/espeak-ng-data/lang","poz",!0,!0),r.FS_createPath("/espeak-ng-data/lang","roa",!0,!0),r.FS_createPath("/espeak-ng-data/lang","sai",!0,!0),r.FS_createPath("/espeak-ng-data/lang","sem",!0,!0),r.FS_createPath("/espeak-ng-data/lang","sit",!0,!0),r.FS_createPath("/espeak-ng-data/lang","tai",!0,!0),r.FS_createPath("/espeak-ng-data/lang","trk",!0,!0),r.FS_createPath("/espeak-ng-data/lang","urj",!0,!0),r.FS_createPath("/espeak-ng-data/lang","zle",!0,!0),r.FS_createPath("/espeak-ng-data/lang","zls",!0,!0),r.FS_createPath("/espeak-ng-data/lang","zlw",!0,!0),r.FS_createPath("/espeak-ng-data","mbrola_ph",!0,!0),r.FS_createPath("/espeak-ng-data","voices",!0,!0),r.FS_createPath("/espeak-ng-data/voices","!v",!0,!0),r.FS_createPath("/espeak-ng-data/voices","mb",!0,!0);function oe(Te,V,ue){this.start=Te,this.end=V,this.audio=ue}oe.prototype={requests:{},open:function(Te,V){this.name=V,this.requests[V]=this,r.addRunDependency(`fp ${this.name}`)},send:function(){},onload:function(){var Te=this.byteArray.subarray(this.start,this.end);this.finish(Te)},finish:function(Te){var V=this;r.FS_createDataFile(this.name,null,Te,!0,!0,!0),r.removeRunDependency(`fp ${V.name}`),this.requests[this.name]=null}};for(var xe=f.files,Le=0;Le<xe.length;++Le)new oe(xe[Le].start,xe[Le].end,xe[Le].audio||0).open("GET",xe[Le].filename);function Ce(Te){se(Te,"Loading data file failed."),se(Te.constructor.name===ArrayBuffer.name,"bad input to processPackageData");var V=new Uint8Array(Te);oe.prototype.byteArray=V;for(var ue=f.files,Ue=0;Ue<ue.length;++Ue)oe.prototype.requests[ue[Ue].filename].onload();r.removeRunDependency("datafile_piper_phonemize.data")}r.addRunDependency("datafile_piper_phonemize.data"),r.preloadResults||(r.preloadResults={}),r.preloadResults[w]={fromCache:!1},$e?(Ce($e),$e=null):ve=Ce}r.calledRun?Ie():(r.preRun||(r.preRun=[]),r.preRun.push(Ie))};u({files:[{filename:"/espeak-ng-data/af_dict",start:0,end:121473},{filename:"/espeak-ng-data/am_dict",start:121473,end:185351},{filename:"/espeak-ng-data/an_dict",start:185351,end:192042},{filename:"/espeak-ng-data/ar_dict",start:192042,end:670207},{filename:"/espeak-ng-data/as_dict",start:670207,end:675212},{filename:"/espeak-ng-data/az_dict",start:675212,end:718985},{filename:"/espeak-ng-data/ba_dict",start:718985,end:721083},{filename:"/espeak-ng-data/be_dict",start:721083,end:723735},{filename:"/espeak-ng-data/bg_dict",start:723735,end:810786},{filename:"/espeak-ng-data/bn_dict",start:810786,end:900765},{filename:"/espeak-ng-data/bpy_dict",start:900765,end:905991},{filename:"/espeak-ng-data/bs_dict",start:905991,end:953059},{filename:"/espeak-ng-data/ca_dict",start:953059,end:998625},{filename:"/espeak-ng-data/chr_dict",start:998625,end:1001484},{filename:"/espeak-ng-data/cmn_dict",start:1001484,end:2567819},{filename:"/espeak-ng-data/cs_dict",start:2567819,end:2617464},{filename:"/espeak-ng-data/cv_dict",start:2617464,end:2618808},{filename:"/espeak-ng-data/cy_dict",start:2618808,end:2661938},{filename:"/espeak-ng-data/da_dict",start:2661938,end:2907225},{filename:"/espeak-ng-data/de_dict",start:2907225,end:2975501},{filename:"/espeak-ng-data/el_dict",start:2975501,end:3048342},{filename:"/espeak-ng-data/en_dict",start:3048342,end:3215286},{filename:"/espeak-ng-data/eo_dict",start:3215286,end:3219952},{filename:"/espeak-ng-data/es_dict",start:3219952,end:3269204},{filename:"/espeak-ng-data/et_dict",start:3269204,end:3313467},{filename:"/espeak-ng-data/eu_dict",start:3313467,end:3362308},{filename:"/espeak-ng-data/fa_dict",start:3362308,end:3655543},{filename:"/espeak-ng-data/fi_dict",start:3655543,end:3699471},{filename:"/espeak-ng-data/fr_dict",start:3699471,end:3763198},{filename:"/espeak-ng-data/ga_dict",start:3763198,end:3815871},{filename:"/espeak-ng-data/gd_dict",start:3815871,end:3864992},{filename:"/espeak-ng-data/gn_dict",start:3864992,end:3868240},{filename:"/espeak-ng-data/grc_dict",start:3868240,end:3871673},{filename:"/espeak-ng-data/gu_dict",start:3871673,end:3954153},{filename:"/espeak-ng-data/hak_dict",start:3954153,end:3957488},{filename:"/espeak-ng-data/haw_dict",start:3957488,end:3959931},{filename:"/espeak-ng-data/he_dict",start:3959931,end:3966894},{filename:"/espeak-ng-data/hi_dict",start:3966894,end:4059037},{filename:"/espeak-ng-data/hr_dict",start:4059037,end:4108425},{filename:"/espeak-ng-data/ht_dict",start:4108425,end:4110228},{filename:"/espeak-ng-data/hu_dict",start:4110228,end:4264013},{filename:"/espeak-ng-data/hy_dict",start:4264013,end:4326276},{filename:"/espeak-ng-data/ia_dict",start:4326276,end:4657551},{filename:"/espeak-ng-data/id_dict",start:4657551,end:4701009},{filename:"/espeak-ng-data/intonations",start:4701009,end:4703049},{filename:"/espeak-ng-data/io_dict",start:4703049,end:4705214},{filename:"/espeak-ng-data/is_dict",start:4705214,end:4749568},{filename:"/espeak-ng-data/it_dict",start:4749568,end:4902457},{filename:"/espeak-ng-data/ja_dict",start:4902457,end:4950109},{filename:"/espeak-ng-data/jbo_dict",start:4950109,end:4952352},{filename:"/espeak-ng-data/ka_dict",start:4952352,end:5040127},{filename:"/espeak-ng-data/kk_dict",start:5040127,end:5041986},{filename:"/espeak-ng-data/kl_dict",start:5041986,end:5044824},{filename:"/espeak-ng-data/kn_dict",start:5044824,end:5132652},{filename:"/espeak-ng-data/ko_dict",start:5132652,end:5180175},{filename:"/espeak-ng-data/kok_dict",start:5180175,end:5186569},{filename:"/espeak-ng-data/ku_dict",start:5186569,end:5188834},{filename:"/espeak-ng-data/ky_dict",start:5188834,end:5253811},{filename:"/espeak-ng-data/la_dict",start:5253811,end:5257617},{filename:"/espeak-ng-data/lang/aav/vi",start:5257617,end:5257728},{filename:"/espeak-ng-data/lang/aav/vi-VN-x-central",start:5257728,end:5257871},{filename:"/espeak-ng-data/lang/aav/vi-VN-x-south",start:5257871,end:5258013},{filename:"/espeak-ng-data/lang/art/eo",start:5258013,end:5258054},{filename:"/espeak-ng-data/lang/art/ia",start:5258054,end:5258083},{filename:"/espeak-ng-data/lang/art/io",start:5258083,end:5258133},{filename:"/espeak-ng-data/lang/art/jbo",start:5258133,end:5258202},{filename:"/espeak-ng-data/lang/art/lfn",start:5258202,end:5258337},{filename:"/espeak-ng-data/lang/art/piqd",start:5258337,end:5258393},{filename:"/espeak-ng-data/lang/art/py",start:5258393,end:5258533},{filename:"/espeak-ng-data/lang/art/qdb",start:5258533,end:5258590},{filename:"/espeak-ng-data/lang/art/qya",start:5258590,end:5258763},{filename:"/espeak-ng-data/lang/art/sjn",start:5258763,end:5258938},{filename:"/espeak-ng-data/lang/azc/nci",start:5258938,end:5259052},{filename:"/espeak-ng-data/lang/bat/lt",start:5259052,end:5259080},{filename:"/espeak-ng-data/lang/bat/ltg",start:5259080,end:5259392},{filename:"/espeak-ng-data/lang/bat/lv",start:5259392,end:5259621},{filename:"/espeak-ng-data/lang/bnt/sw",start:5259621,end:5259662},{filename:"/espeak-ng-data/lang/bnt/tn",start:5259662,end:5259704},{filename:"/espeak-ng-data/lang/ccs/ka",start:5259704,end:5259828},{filename:"/espeak-ng-data/lang/cel/cy",start:5259828,end:5259865},{filename:"/espeak-ng-data/lang/cel/ga",start:5259865,end:5259931},{filename:"/espeak-ng-data/lang/cel/gd",start:5259931,end:5259982},{filename:"/espeak-ng-data/lang/cus/om",start:5259982,end:5260021},{filename:"/espeak-ng-data/lang/dra/kn",start:5260021,end:5260076},{filename:"/espeak-ng-data/lang/dra/ml",start:5260076,end:5260133},{filename:"/espeak-ng-data/lang/dra/ta",start:5260133,end:5260184},{filename:"/espeak-ng-data/lang/dra/te",start:5260184,end:5260254},{filename:"/espeak-ng-data/lang/esx/kl",start:5260254,end:5260284},{filename:"/espeak-ng-data/lang/eu",start:5260284,end:5260338},{filename:"/espeak-ng-data/lang/gmq/da",start:5260338,end:5260381},{filename:"/espeak-ng-data/lang/gmq/is",start:5260381,end:5260408},{filename:"/espeak-ng-data/lang/gmq/nb",start:5260408,end:5260495},{filename:"/espeak-ng-data/lang/gmq/sv",start:5260495,end:5260520},{filename:"/espeak-ng-data/lang/gmw/af",start:5260520,end:5260643},{filename:"/espeak-ng-data/lang/gmw/de",start:5260643,end:5260685},{filename:"/espeak-ng-data/lang/gmw/en",start:5260685,end:5260825},{filename:"/espeak-ng-data/lang/gmw/en-029",start:5260825,end:5261160},{filename:"/espeak-ng-data/lang/gmw/en-GB-scotland",start:5261160,end:5261455},{filename:"/espeak-ng-data/lang/gmw/en-GB-x-gbclan",start:5261455,end:5261693},{filename:"/espeak-ng-data/lang/gmw/en-GB-x-gbcwmd",start:5261693,end:5261881},{filename:"/espeak-ng-data/lang/gmw/en-GB-x-rp",start:5261881,end:5262130},{filename:"/espeak-ng-data/lang/gmw/en-US",start:5262130,end:5262387},{filename:"/espeak-ng-data/lang/gmw/en-US-nyc",start:5262387,end:5262658},{filename:"/espeak-ng-data/lang/gmw/lb",start:5262658,end:5262689},{filename:"/espeak-ng-data/lang/gmw/nl",start:5262689,end:5262712},{filename:"/espeak-ng-data/lang/grk/el",start:5262712,end:5262735},{filename:"/espeak-ng-data/lang/grk/grc",start:5262735,end:5262834},{filename:"/espeak-ng-data/lang/inc/as",start:5262834,end:5262876},{filename:"/espeak-ng-data/lang/inc/bn",start:5262876,end:5262901},{filename:"/espeak-ng-data/lang/inc/bpy",start:5262901,end:5262940},{filename:"/espeak-ng-data/lang/inc/gu",start:5262940,end:5262982},{filename:"/espeak-ng-data/lang/inc/hi",start:5262982,end:5263005},{filename:"/espeak-ng-data/lang/inc/kok",start:5263005,end:5263031},{filename:"/espeak-ng-data/lang/inc/mr",start:5263031,end:5263072},{filename:"/espeak-ng-data/lang/inc/ne",start:5263072,end:5263109},{filename:"/espeak-ng-data/lang/inc/or",start:5263109,end:5263148},{filename:"/espeak-ng-data/lang/inc/pa",start:5263148,end:5263173},{filename:"/espeak-ng-data/lang/inc/sd",start:5263173,end:5263239},{filename:"/espeak-ng-data/lang/inc/si",start:5263239,end:5263294},{filename:"/espeak-ng-data/lang/inc/ur",start:5263294,end:5263388},{filename:"/espeak-ng-data/lang/ine/hy",start:5263388,end:5263449},{filename:"/espeak-ng-data/lang/ine/hyw",start:5263449,end:5263814},{filename:"/espeak-ng-data/lang/ine/sq",start:5263814,end:5263917},{filename:"/espeak-ng-data/lang/ira/fa",start:5263917,end:5264007},{filename:"/espeak-ng-data/lang/ira/fa-Latn",start:5264007,end:5264276},{filename:"/espeak-ng-data/lang/ira/ku",start:5264276,end:5264316},{filename:"/espeak-ng-data/lang/iro/chr",start:5264316,end:5264885},{filename:"/espeak-ng-data/lang/itc/la",start:5264885,end:5265182},{filename:"/espeak-ng-data/lang/jpx/ja",start:5265182,end:5265234},{filename:"/espeak-ng-data/lang/ko",start:5265234,end:5265285},{filename:"/espeak-ng-data/lang/map/haw",start:5265285,end:5265327},{filename:"/espeak-ng-data/lang/miz/mto",start:5265327,end:5265510},{filename:"/espeak-ng-data/lang/myn/quc",start:5265510,end:5265720},{filename:"/espeak-ng-data/lang/poz/id",start:5265720,end:5265854},{filename:"/espeak-ng-data/lang/poz/mi",start:5265854,end:5266221},{filename:"/espeak-ng-data/lang/poz/ms",start:5266221,end:5266651},{filename:"/espeak-ng-data/lang/qu",start:5266651,end:5266739},{filename:"/espeak-ng-data/lang/roa/an",start:5266739,end:5266766},{filename:"/espeak-ng-data/lang/roa/ca",start:5266766,end:5266791},{filename:"/espeak-ng-data/lang/roa/es",start:5266791,end:5266854},{filename:"/espeak-ng-data/lang/roa/es-419",start:5266854,end:5267021},{filename:"/espeak-ng-data/lang/roa/fr",start:5267021,end:5267100},{filename:"/espeak-ng-data/lang/roa/fr-BE",start:5267100,end:5267184},{filename:"/espeak-ng-data/lang/roa/fr-CH",start:5267184,end:5267270},{filename:"/espeak-ng-data/lang/roa/ht",start:5267270,end:5267410},{filename:"/espeak-ng-data/lang/roa/it",start:5267410,end:5267519},{filename:"/espeak-ng-data/lang/roa/pap",start:5267519,end:5267581},{filename:"/espeak-ng-data/lang/roa/pt",start:5267581,end:5267676},{filename:"/espeak-ng-data/lang/roa/pt-BR",start:5267676,end:5267785},{filename:"/espeak-ng-data/lang/roa/ro",start:5267785,end:5267811},{filename:"/espeak-ng-data/lang/sai/gn",start:5267811,end:5267858},{filename:"/espeak-ng-data/lang/sem/am",start:5267858,end:5267899},{filename:"/espeak-ng-data/lang/sem/ar",start:5267899,end:5267949},{filename:"/espeak-ng-data/lang/sem/he",start:5267949,end:5267989},{filename:"/espeak-ng-data/lang/sem/mt",start:5267989,end:5268030},{filename:"/espeak-ng-data/lang/sit/cmn",start:5268030,end:5268716},{filename:"/espeak-ng-data/lang/sit/cmn-Latn-pinyin",start:5268716,end:5268877},{filename:"/espeak-ng-data/lang/sit/hak",start:5268877,end:5269005},{filename:"/espeak-ng-data/lang/sit/my",start:5269005,end:5269061},{filename:"/espeak-ng-data/lang/sit/yue",start:5269061,end:5269255},{filename:"/espeak-ng-data/lang/sit/yue-Latn-jyutping",start:5269255,end:5269468},{filename:"/espeak-ng-data/lang/tai/shn",start:5269468,end:5269560},{filename:"/espeak-ng-data/lang/tai/th",start:5269560,end:5269597},{filename:"/espeak-ng-data/lang/trk/az",start:5269597,end:5269642},{filename:"/espeak-ng-data/lang/trk/ba",start:5269642,end:5269667},{filename:"/espeak-ng-data/lang/trk/cv",start:5269667,end:5269707},{filename:"/espeak-ng-data/lang/trk/kk",start:5269707,end:5269747},{filename:"/espeak-ng-data/lang/trk/ky",start:5269747,end:5269790},{filename:"/espeak-ng-data/lang/trk/nog",start:5269790,end:5269829},{filename:"/espeak-ng-data/lang/trk/tk",start:5269829,end:5269854},{filename:"/espeak-ng-data/lang/trk/tr",start:5269854,end:5269879},{filename:"/espeak-ng-data/lang/trk/tt",start:5269879,end:5269902},{filename:"/espeak-ng-data/lang/trk/ug",start:5269902,end:5269926},{filename:"/espeak-ng-data/lang/trk/uz",start:5269926,end:5269965},{filename:"/espeak-ng-data/lang/urj/et",start:5269965,end:5270202},{filename:"/espeak-ng-data/lang/urj/fi",start:5270202,end:5270439},{filename:"/espeak-ng-data/lang/urj/hu",start:5270439,end:5270512},{filename:"/espeak-ng-data/lang/urj/smj",start:5270512,end:5270557},{filename:"/espeak-ng-data/lang/zle/be",start:5270557,end:5270609},{filename:"/espeak-ng-data/lang/zle/ru",start:5270609,end:5270666},{filename:"/espeak-ng-data/lang/zle/ru-LV",start:5270666,end:5270946},{filename:"/espeak-ng-data/lang/zle/ru-cl",start:5270946,end:5271037},{filename:"/espeak-ng-data/lang/zle/uk",start:5271037,end:5271134},{filename:"/espeak-ng-data/lang/zls/bg",start:5271134,end:5271245},{filename:"/espeak-ng-data/lang/zls/bs",start:5271245,end:5271475},{filename:"/espeak-ng-data/lang/zls/hr",start:5271475,end:5271737},{filename:"/espeak-ng-data/lang/zls/mk",start:5271737,end:5271765},{filename:"/espeak-ng-data/lang/zls/sl",start:5271765,end:5271808},{filename:"/espeak-ng-data/lang/zls/sr",start:5271808,end:5272058},{filename:"/espeak-ng-data/lang/zlw/cs",start:5272058,end:5272081},{filename:"/espeak-ng-data/lang/zlw/pl",start:5272081,end:5272119},{filename:"/espeak-ng-data/lang/zlw/sk",start:5272119,end:5272143},{filename:"/espeak-ng-data/lb_dict",start:5272143,end:5960074},{filename:"/espeak-ng-data/lfn_dict",start:5960074,end:5962867},{filename:"/espeak-ng-data/lt_dict",start:5962867,end:6012757},{filename:"/espeak-ng-data/lv_dict",start:6012757,end:6079094},{filename:"/espeak-ng-data/mbrola_ph/af1_phtrans",start:6079094,end:6080730},{filename:"/espeak-ng-data/mbrola_ph/ar1_phtrans",start:6080730,end:6082342},{filename:"/espeak-ng-data/mbrola_ph/ar2_phtrans",start:6082342,end:6083954},{filename:"/espeak-ng-data/mbrola_ph/ca_phtrans",start:6083954,end:6085950},{filename:"/espeak-ng-data/mbrola_ph/cmn_phtrans",start:6085950,end:6087442},{filename:"/espeak-ng-data/mbrola_ph/cr1_phtrans",start:6087442,end:6089606},{filename:"/espeak-ng-data/mbrola_ph/cs_phtrans",start:6089606,end:6090186},{filename:"/espeak-ng-data/mbrola_ph/de2_phtrans",start:6090186,end:6091918},{filename:"/espeak-ng-data/mbrola_ph/de4_phtrans",start:6091918,end:6093722},{filename:"/espeak-ng-data/mbrola_ph/de6_phtrans",start:6093722,end:6095118},{filename:"/espeak-ng-data/mbrola_ph/de8_phtrans",start:6095118,end:6096274},{filename:"/espeak-ng-data/mbrola_ph/ee1_phtrans",start:6096274,end:6097718},{filename:"/espeak-ng-data/mbrola_ph/en1_phtrans",start:6097718,end:6098514},{filename:"/espeak-ng-data/mbrola_ph/es3_phtrans",start:6098514,end:6099574},{filename:"/espeak-ng-data/mbrola_ph/es4_phtrans",start:6099574,end:6100682},{filename:"/espeak-ng-data/mbrola_ph/es_phtrans",start:6100682,end:6102414},{filename:"/espeak-ng-data/mbrola_ph/fr_phtrans",start:6102414,end:6104386},{filename:"/espeak-ng-data/mbrola_ph/gr1_phtrans",start:6104386,end:6106598},{filename:"/espeak-ng-data/mbrola_ph/gr2_phtrans",start:6106598,end:6108810},{filename:"/espeak-ng-data/mbrola_ph/grc-de6_phtrans",start:6108810,end:6109294},{filename:"/espeak-ng-data/mbrola_ph/he_phtrans",start:6109294,end:6110042},{filename:"/espeak-ng-data/mbrola_ph/hn1_phtrans",start:6110042,end:6110574},{filename:"/espeak-ng-data/mbrola_ph/hu1_phtrans",start:6110574,end:6112018},{filename:"/espeak-ng-data/mbrola_ph/ic1_phtrans",start:6112018,end:6113150},{filename:"/espeak-ng-data/mbrola_ph/id1_phtrans",start:6113150,end:6114858},{filename:"/espeak-ng-data/mbrola_ph/in_phtrans",start:6114858,end:6116302},{filename:"/espeak-ng-data/mbrola_ph/ir1_phtrans",start:6116302,end:6122114},{filename:"/espeak-ng-data/mbrola_ph/it1_phtrans",start:6122114,end:6123438},{filename:"/espeak-ng-data/mbrola_ph/it3_phtrans",start:6123438,end:6124330},{filename:"/espeak-ng-data/mbrola_ph/jp_phtrans",start:6124330,end:6125366},{filename:"/espeak-ng-data/mbrola_ph/la1_phtrans",start:6125366,end:6126114},{filename:"/espeak-ng-data/mbrola_ph/lt_phtrans",start:6126114,end:6127174},{filename:"/espeak-ng-data/mbrola_ph/ma1_phtrans",start:6127174,end:6128114},{filename:"/espeak-ng-data/mbrola_ph/mx1_phtrans",start:6128114,end:6129918},{filename:"/espeak-ng-data/mbrola_ph/mx2_phtrans",start:6129918,end:6131746},{filename:"/espeak-ng-data/mbrola_ph/nl_phtrans",start:6131746,end:6133430},{filename:"/espeak-ng-data/mbrola_ph/nz1_phtrans",start:6133430,end:6134154},{filename:"/espeak-ng-data/mbrola_ph/pl1_phtrans",start:6134154,end:6135742},{filename:"/espeak-ng-data/mbrola_ph/pt1_phtrans",start:6135742,end:6137834},{filename:"/espeak-ng-data/mbrola_ph/ptbr4_phtrans",start:6137834,end:6140190},{filename:"/espeak-ng-data/mbrola_ph/ptbr_phtrans",start:6140190,end:6142714},{filename:"/espeak-ng-data/mbrola_ph/ro1_phtrans",start:6142714,end:6144878},{filename:"/espeak-ng-data/mbrola_ph/sv2_phtrans",start:6144878,end:6146466},{filename:"/espeak-ng-data/mbrola_ph/sv_phtrans",start:6146466,end:6148054},{filename:"/espeak-ng-data/mbrola_ph/tl1_phtrans",start:6148054,end:6148826},{filename:"/espeak-ng-data/mbrola_ph/tr1_phtrans",start:6148826,end:6149190},{filename:"/espeak-ng-data/mbrola_ph/us3_phtrans",start:6149190,end:6150346},{filename:"/espeak-ng-data/mbrola_ph/us_phtrans",start:6150346,end:6151574},{filename:"/espeak-ng-data/mbrola_ph/vz_phtrans",start:6151574,end:6153858},{filename:"/espeak-ng-data/mi_dict",start:6153858,end:6155204},{filename:"/espeak-ng-data/mk_dict",start:6155204,end:6219063},{filename:"/espeak-ng-data/ml_dict",start:6219063,end:6311408},{filename:"/espeak-ng-data/mr_dict",start:6311408,end:6398799},{filename:"/espeak-ng-data/ms_dict",start:6398799,end:6452340},{filename:"/espeak-ng-data/mt_dict",start:6452340,end:6456724},{filename:"/espeak-ng-data/mto_dict",start:6456724,end:6460684},{filename:"/espeak-ng-data/my_dict",start:6460684,end:6556632},{filename:"/espeak-ng-data/nci_dict",start:6556632,end:6558166},{filename:"/espeak-ng-data/ne_dict",start:6558166,end:6653543},{filename:"/espeak-ng-data/nl_dict",start:6653543,end:6719522},{filename:"/espeak-ng-data/no_dict",start:6719522,end:6723700},{filename:"/espeak-ng-data/nog_dict",start:6723700,end:6726994},{filename:"/espeak-ng-data/om_dict",start:6726994,end:6729296},{filename:"/espeak-ng-data/or_dict",start:6729296,end:6818542},{filename:"/espeak-ng-data/pa_dict",start:6818542,end:6898495},{filename:"/espeak-ng-data/pap_dict",start:6898495,end:6900623},{filename:"/espeak-ng-data/phondata",start:6900623,end:7451047},{filename:"/espeak-ng-data/phondata-manifest",start:7451047,end:7472868},{filename:"/espeak-ng-data/phonindex",start:7472868,end:7511942},{filename:"/espeak-ng-data/phontab",start:7511942,end:7567738},{filename:"/espeak-ng-data/piqd_dict",start:7567738,end:7569448},{filename:"/espeak-ng-data/pl_dict",start:7569448,end:7646178},{filename:"/espeak-ng-data/pt_dict",start:7646178,end:7713995},{filename:"/espeak-ng-data/py_dict",start:7713995,end:7716404},{filename:"/espeak-ng-data/qdb_dict",start:7716404,end:7719432},{filename:"/espeak-ng-data/qu_dict",start:7719432,end:7721351},{filename:"/espeak-ng-data/quc_dict",start:7721351,end:7722801},{filename:"/espeak-ng-data/qya_dict",start:7722801,end:7724740},{filename:"/espeak-ng-data/ro_dict",start:7724740,end:7793278},{filename:"/espeak-ng-data/ru_dict",start:7793278,end:16325670},{filename:"/espeak-ng-data/sd_dict",start:16325670,end:16385598},{filename:"/espeak-ng-data/shn_dict",start:16385598,end:16473770},{filename:"/espeak-ng-data/si_dict",start:16473770,end:16559154},{filename:"/espeak-ng-data/sjn_dict",start:16559154,end:16560937},{filename:"/espeak-ng-data/sk_dict",start:16560937,end:16610939},{filename:"/espeak-ng-data/sl_dict",start:16610939,end:16655986},{filename:"/espeak-ng-data/smj_dict",start:16655986,end:16691081},{filename:"/espeak-ng-data/sq_dict",start:16691081,end:16736084},{filename:"/espeak-ng-data/sr_dict",start:16736084,end:16782916},{filename:"/espeak-ng-data/sv_dict",start:16782916,end:16830752},{filename:"/espeak-ng-data/sw_dict",start:16830752,end:16878556},{filename:"/espeak-ng-data/ta_dict",start:16878556,end:17088109},{filename:"/espeak-ng-data/te_dict",start:17088109,end:17182946},{filename:"/espeak-ng-data/th_dict",start:17182946,end:17185247},{filename:"/espeak-ng-data/tk_dict",start:17185247,end:17206115},{filename:"/espeak-ng-data/tn_dict",start:17206115,end:17209187},{filename:"/espeak-ng-data/tr_dict",start:17209187,end:17255980},{filename:"/espeak-ng-data/tt_dict",start:17255980,end:17258101},{filename:"/espeak-ng-data/ug_dict",start:17258101,end:17260171},{filename:"/espeak-ng-data/uk_dict",start:17260171,end:17263663},{filename:"/espeak-ng-data/ur_dict",start:17263663,end:17397219},{filename:"/espeak-ng-data/uz_dict",start:17397219,end:17399759},{filename:"/espeak-ng-data/vi_dict",start:17399759,end:17452367},{filename:"/espeak-ng-data/voices/!v/Alex",start:17452367,end:17452495},{filename:"/espeak-ng-data/voices/!v/Alicia",start:17452495,end:17452969},{filename:"/espeak-ng-data/voices/!v/Andrea",start:17452969,end:17453326},{filename:"/espeak-ng-data/voices/!v/Andy",start:17453326,end:17453646},{filename:"/espeak-ng-data/voices/!v/Annie",start:17453646,end:17453961},{filename:"/espeak-ng-data/voices/!v/AnxiousAndy",start:17453961,end:17454322},{filename:"/espeak-ng-data/voices/!v/Demonic",start:17454322,end:17458180},{filename:"/espeak-ng-data/voices/!v/Denis",start:17458180,end:17458485},{filename:"/espeak-ng-data/voices/!v/Diogo",start:17458485,end:17458864},{filename:"/espeak-ng-data/voices/!v/Gene",start:17458864,end:17459145},{filename:"/espeak-ng-data/voices/!v/Gene2",start:17459145,end:17459428},{filename:"/espeak-ng-data/voices/!v/Henrique",start:17459428,end:17459809},{filename:"/espeak-ng-data/voices/!v/Hugo",start:17459809,end:17460187},{filename:"/espeak-ng-data/voices/!v/Jacky",start:17460187,end:17460454},{filename:"/espeak-ng-data/voices/!v/Lee",start:17460454,end:17460792},{filename:"/espeak-ng-data/voices/!v/Marco",start:17460792,end:17461259},{filename:"/espeak-ng-data/voices/!v/Mario",start:17461259,end:17461529},{filename:"/espeak-ng-data/voices/!v/Michael",start:17461529,end:17461799},{filename:"/espeak-ng-data/voices/!v/Mike",start:17461799,end:17461911},{filename:"/espeak-ng-data/voices/!v/Mr serious",start:17461911,end:17465104},{filename:"/espeak-ng-data/voices/!v/Nguyen",start:17465104,end:17465384},{filename:"/espeak-ng-data/voices/!v/Reed",start:17465384,end:17465586},{filename:"/espeak-ng-data/voices/!v/RicishayMax",start:17465586,end:17465819},{filename:"/espeak-ng-data/voices/!v/RicishayMax2",start:17465819,end:17466254},{filename:"/espeak-ng-data/voices/!v/RicishayMax3",start:17466254,end:17466689},{filename:"/espeak-ng-data/voices/!v/Storm",start:17466689,end:17467109},{filename:"/espeak-ng-data/voices/!v/Tweaky",start:17467109,end:17470298},{filename:"/espeak-ng-data/voices/!v/UniRobot",start:17470298,end:17470715},{filename:"/espeak-ng-data/voices/!v/adam",start:17470715,end:17470790},{filename:"/espeak-ng-data/voices/!v/anika",start:17470790,end:17471283},{filename:"/espeak-ng-data/voices/!v/anikaRobot",start:17471283,end:17471795},{filename:"/espeak-ng-data/voices/!v/announcer",start:17471795,end:17472095},{filename:"/espeak-ng-data/voices/!v/antonio",start:17472095,end:17472476},{filename:"/espeak-ng-data/voices/!v/aunty",start:17472476,end:17472834},{filename:"/espeak-ng-data/voices/!v/belinda",start:17472834,end:17473174},{filename:"/espeak-ng-data/voices/!v/benjamin",start:17473174,end:17473375},{filename:"/espeak-ng-data/voices/!v/boris",start:17473375,end:17473599},{filename:"/espeak-ng-data/voices/!v/caleb",start:17473599,end:17473656},{filename:"/espeak-ng-data/voices/!v/croak",start:17473656,end:17473749},{filename:"/espeak-ng-data/voices/!v/david",start:17473749,end:17473861},{filename:"/espeak-ng-data/voices/!v/ed",start:17473861,end:17474148},{filename:"/espeak-ng-data/voices/!v/edward",start:17474148,end:17474299},{filename:"/espeak-ng-data/voices/!v/edward2",start:17474299,end:17474451},{filename:"/espeak-ng-data/voices/!v/f1",start:17474451,end:17474775},{filename:"/espeak-ng-data/voices/!v/f2",start:17474775,end:17475132},{filename:"/espeak-ng-data/voices/!v/f3",start:17475132,end:17475507},{filename:"/espeak-ng-data/voices/!v/f4",start:17475507,end:17475857},{filename:"/espeak-ng-data/voices/!v/f5",start:17475857,end:17476289},{filename:"/espeak-ng-data/voices/!v/fast",start:17476289,end:17476438},{filename:"/espeak-ng-data/voices/!v/grandma",start:17476438,end:17476701},{filename:"/espeak-ng-data/voices/!v/grandpa",start:17476701,end:17476957},{filename:"/espeak-ng-data/voices/!v/gustave",start:17476957,end:17477210},{filename:"/espeak-ng-data/voices/!v/ian",start:17477210,end:17480378},{filename:"/espeak-ng-data/voices/!v/iven",start:17480378,end:17480639},{filename:"/espeak-ng-data/voices/!v/iven2",start:17480639,end:17480918},{filename:"/espeak-ng-data/voices/!v/iven3",start:17480918,end:17481180},{filename:"/espeak-ng-data/voices/!v/iven4",start:17481180,end:17481441},{filename:"/espeak-ng-data/voices/!v/john",start:17481441,end:17484627},{filename:"/espeak-ng-data/voices/!v/kaukovalta",start:17484627,end:17484988},{filename:"/espeak-ng-data/voices/!v/klatt",start:17484988,end:17485026},{filename:"/espeak-ng-data/voices/!v/klatt2",start:17485026,end:17485064},{filename:"/espeak-ng-data/voices/!v/klatt3",start:17485064,end:17485103},{filename:"/espeak-ng-data/voices/!v/klatt4",start:17485103,end:17485142},{filename:"/espeak-ng-data/voices/!v/klatt5",start:17485142,end:17485181},{filename:"/espeak-ng-data/voices/!v/klatt6",start:17485181,end:17485220},{filename:"/espeak-ng-data/voices/!v/linda",start:17485220,end:17485570},{filename:"/espeak-ng-data/voices/!v/m1",start:17485570,end:17485905},{filename:"/espeak-ng-data/voices/!v/m2",start:17485905,end:17486169},{filename:"/espeak-ng-data/voices/!v/m3",start:17486169,end:17486469},{filename:"/espeak-ng-data/voices/!v/m4",start:17486469,end:17486759},{filename:"/espeak-ng-data/voices/!v/m5",start:17486759,end:17487021},{filename:"/espeak-ng-data/voices/!v/m6",start:17487021,end:17487209},{filename:"/espeak-ng-data/voices/!v/m7",start:17487209,end:17487463},{filename:"/espeak-ng-data/voices/!v/m8",start:17487463,end:17487747},{filename:"/espeak-ng-data/voices/!v/marcelo",start:17487747,end:17487998},{filename:"/espeak-ng-data/voices/!v/max",start:17487998,end:17488223},{filename:"/espeak-ng-data/voices/!v/michel",start:17488223,end:17488627},{filename:"/espeak-ng-data/voices/!v/miguel",start:17488627,end:17489009},{filename:"/espeak-ng-data/voices/!v/mike2",start:17489009,end:17489197},{filename:"/espeak-ng-data/voices/!v/norbert",start:17489197,end:17492386},{filename:"/espeak-ng-data/voices/!v/pablo",start:17492386,end:17495528},{filename:"/espeak-ng-data/voices/!v/paul",start:17495528,end:17495812},{filename:"/espeak-ng-data/voices/!v/pedro",start:17495812,end:17496164},{filename:"/espeak-ng-data/voices/!v/quincy",start:17496164,end:17496518},{filename:"/espeak-ng-data/voices/!v/rob",start:17496518,end:17496783},{filename:"/espeak-ng-data/voices/!v/robert",start:17496783,end:17497057},{filename:"/espeak-ng-data/voices/!v/robosoft",start:17497057,end:17497508},{filename:"/espeak-ng-data/voices/!v/robosoft2",start:17497508,end:17497962},{filename:"/espeak-ng-data/voices/!v/robosoft3",start:17497962,end:17498417},{filename:"/espeak-ng-data/voices/!v/robosoft4",start:17498417,end:17498864},{filename:"/espeak-ng-data/voices/!v/robosoft5",start:17498864,end:17499309},{filename:"/espeak-ng-data/voices/!v/robosoft6",start:17499309,end:17499596},{filename:"/espeak-ng-data/voices/!v/robosoft7",start:17499596,end:17500006},{filename:"/espeak-ng-data/voices/!v/robosoft8",start:17500006,end:17500249},{filename:"/espeak-ng-data/voices/!v/sandro",start:17500249,end:17500779},{filename:"/espeak-ng-data/voices/!v/shelby",start:17500779,end:17501059},{filename:"/espeak-ng-data/voices/!v/steph",start:17501059,end:17501423},{filename:"/espeak-ng-data/voices/!v/steph2",start:17501423,end:17501790},{filename:"/espeak-ng-data/voices/!v/steph3",start:17501790,end:17502167},{filename:"/espeak-ng-data/voices/!v/travis",start:17502167,end:17502550},{filename:"/espeak-ng-data/voices/!v/victor",start:17502550,end:17502803},{filename:"/espeak-ng-data/voices/!v/whisper",start:17502803,end:17502989},{filename:"/espeak-ng-data/voices/!v/whisperf",start:17502989,end:17503381},{filename:"/espeak-ng-data/voices/!v/zac",start:17503381,end:17503656},{filename:"/espeak-ng-data/voices/mb/mb-af1",start:17503656,end:17503744},{filename:"/espeak-ng-data/voices/mb/mb-af1-en",start:17503744,end:17503827},{filename:"/espeak-ng-data/voices/mb/mb-ar1",start:17503827,end:17503911},{filename:"/espeak-ng-data/voices/mb/mb-ar2",start:17503911,end:17503995},{filename:"/espeak-ng-data/voices/mb/mb-br1",start:17503995,end:17504127},{filename:"/espeak-ng-data/voices/mb/mb-br2",start:17504127,end:17504263},{filename:"/espeak-ng-data/voices/mb/mb-br3",start:17504263,end:17504395},{filename:"/espeak-ng-data/voices/mb/mb-br4",start:17504395,end:17504531},{filename:"/espeak-ng-data/voices/mb/mb-ca1",start:17504531,end:17504636},{filename:"/espeak-ng-data/voices/mb/mb-ca2",start:17504636,end:17504741},{filename:"/espeak-ng-data/voices/mb/mb-cn1",start:17504741,end:17504833},{filename:"/espeak-ng-data/voices/mb/mb-cr1",start:17504833,end:17504944},{filename:"/espeak-ng-data/voices/mb/mb-cz1",start:17504944,end:17505014},{filename:"/espeak-ng-data/voices/mb/mb-cz2",start:17505014,end:17505096},{filename:"/espeak-ng-data/voices/mb/mb-de1",start:17505096,end:17505240},{filename:"/espeak-ng-data/voices/mb/mb-de1-en",start:17505240,end:17505336},{filename:"/espeak-ng-data/voices/mb/mb-de2",start:17505336,end:17505464},{filename:"/espeak-ng-data/voices/mb/mb-de2-en",start:17505464,end:17505544},{filename:"/espeak-ng-data/voices/mb/mb-de3",start:17505544,end:17505643},{filename:"/espeak-ng-data/voices/mb/mb-de3-en",start:17505643,end:17505739},{filename:"/espeak-ng-data/voices/mb/mb-de4",start:17505739,end:17505868},{filename:"/espeak-ng-data/voices/mb/mb-de4-en",start:17505868,end:17505949},{filename:"/espeak-ng-data/voices/mb/mb-de5",start:17505949,end:17506185},{filename:"/espeak-ng-data/voices/mb/mb-de5-en",start:17506185,end:17506275},{filename:"/espeak-ng-data/voices/mb/mb-de6",start:17506275,end:17506397},{filename:"/espeak-ng-data/voices/mb/mb-de6-en",start:17506397,end:17506471},{filename:"/espeak-ng-data/voices/mb/mb-de6-grc",start:17506471,end:17506554},{filename:"/espeak-ng-data/voices/mb/mb-de7",start:17506554,end:17506704},{filename:"/espeak-ng-data/voices/mb/mb-de8",start:17506704,end:17506775},{filename:"/espeak-ng-data/voices/mb/mb-ee1",start:17506775,end:17506872},{filename:"/espeak-ng-data/voices/mb/mb-en1",start:17506872,end:17507003},{filename:"/espeak-ng-data/voices/mb/mb-es1",start:17507003,end:17507117},{filename:"/espeak-ng-data/voices/mb/mb-es2",start:17507117,end:17507225},{filename:"/espeak-ng-data/voices/mb/mb-es3",start:17507225,end:17507329},{filename:"/espeak-ng-data/voices/mb/mb-es4",start:17507329,end:17507417},{filename:"/espeak-ng-data/voices/mb/mb-fr1",start:17507417,end:17507583},{filename:"/espeak-ng-data/voices/mb/mb-fr1-en",start:17507583,end:17507687},{filename:"/espeak-ng-data/voices/mb/mb-fr2",start:17507687,end:17507790},{filename:"/espeak-ng-data/voices/mb/mb-fr3",start:17507790,end:17507890},{filename:"/espeak-ng-data/voices/mb/mb-fr4",start:17507890,end:17508017},{filename:"/espeak-ng-data/voices/mb/mb-fr4-en",start:17508017,end:17508124},{filename:"/espeak-ng-data/voices/mb/mb-fr5",start:17508124,end:17508224},{filename:"/espeak-ng-data/voices/mb/mb-fr6",start:17508224,end:17508324},{filename:"/espeak-ng-data/voices/mb/mb-fr7",start:17508324,end:17508407},{filename:"/espeak-ng-data/voices/mb/mb-gr1",start:17508407,end:17508501},{filename:"/espeak-ng-data/voices/mb/mb-gr2",start:17508501,end:17508595},{filename:"/espeak-ng-data/voices/mb/mb-gr2-en",start:17508595,end:17508683},{filename:"/espeak-ng-data/voices/mb/mb-hb1",start:17508683,end:17508751},{filename:"/espeak-ng-data/voices/mb/mb-hb2",start:17508751,end:17508834},{filename:"/espeak-ng-data/voices/mb/mb-hu1",start:17508834,end:17508936},{filename:"/espeak-ng-data/voices/mb/mb-hu1-en",start:17508936,end:17509033},{filename:"/espeak-ng-data/voices/mb/mb-ic1",start:17509033,end:17509121},{filename:"/espeak-ng-data/voices/mb/mb-id1",start:17509121,end:17509222},{filename:"/espeak-ng-data/voices/mb/mb-in1",start:17509222,end:17509291},{filename:"/espeak-ng-data/voices/mb/mb-in2",start:17509291,end:17509376},{filename:"/espeak-ng-data/voices/mb/mb-ir1",start:17509376,end:17510129},{filename:"/espeak-ng-data/voices/mb/mb-it1",start:17510129,end:17510213},{filename:"/espeak-ng-data/voices/mb/mb-it2",start:17510213,end:17510300},{filename:"/espeak-ng-data/voices/mb/mb-it3",start:17510300,end:17510442},{filename:"/espeak-ng-data/voices/mb/mb-it4",start:17510442,end:17510587},{filename:"/espeak-ng-data/voices/mb/mb-jp1",start:17510587,end:17510658},{filename:"/espeak-ng-data/voices/mb/mb-jp2",start:17510658,end:17510759},{filename:"/espeak-ng-data/voices/mb/mb-jp3",start:17510759,end:17510846},{filename:"/espeak-ng-data/voices/mb/mb-la1",start:17510846,end:17510929},{filename:"/espeak-ng-data/voices/mb/mb-lt1",start:17510929,end:17511016},{filename:"/espeak-ng-data/voices/mb/mb-lt2",start:17511016,end:17511103},{filename:"/espeak-ng-data/voices/mb/mb-ma1",start:17511103,end:17511201},{filename:"/espeak-ng-data/voices/mb/mb-mx1",start:17511201,end:17511321},{filename:"/espeak-ng-data/voices/mb/mb-mx2",start:17511321,end:17511441},{filename:"/espeak-ng-data/voices/mb/mb-nl1",start:17511441,end:17511510},{filename:"/espeak-ng-data/voices/mb/mb-nl2",start:17511510,end:17511606},{filename:"/espeak-ng-data/voices/mb/mb-nl2-en",start:17511606,end:17511697},{filename:"/espeak-ng-data/voices/mb/mb-nl3",start:17511697,end:17511782},{filename:"/espeak-ng-data/voices/mb/mb-nz1",start:17511782,end:17511850},{filename:"/espeak-ng-data/voices/mb/mb-pl1",start:17511850,end:17511949},{filename:"/espeak-ng-data/voices/mb/mb-pl1-en",start:17511949,end:17512031},{filename:"/espeak-ng-data/voices/mb/mb-pt1",start:17512031,end:17512162},{filename:"/espeak-ng-data/voices/mb/mb-ro1",start:17512162,end:17512249},{filename:"/espeak-ng-data/voices/mb/mb-ro1-en",start:17512249,end:17512330},{filename:"/espeak-ng-data/voices/mb/mb-sw1",start:17512330,end:17512428},{filename:"/espeak-ng-data/voices/mb/mb-sw1-en",start:17512428,end:17512521},{filename:"/espeak-ng-data/voices/mb/mb-sw2",start:17512521,end:17512623},{filename:"/espeak-ng-data/voices/mb/mb-sw2-en",start:17512623,end:17512722},{filename:"/espeak-ng-data/voices/mb/mb-tl1",start:17512722,end:17512807},{filename:"/espeak-ng-data/voices/mb/mb-tr1",start:17512807,end:17512892},{filename:"/espeak-ng-data/voices/mb/mb-tr2",start:17512892,end:17513006},{filename:"/espeak-ng-data/voices/mb/mb-us1",start:17513006,end:17513176},{filename:"/espeak-ng-data/voices/mb/mb-us2",start:17513176,end:17513354},{filename:"/espeak-ng-data/voices/mb/mb-us3",start:17513354,end:17513534},{filename:"/espeak-ng-data/voices/mb/mb-vz1",start:17513534,end:17513678},{filename:"/espeak-ng-data/yue_dict",start:17513678,end:18077249}],remote_package_size:18077249})}})();var i=Object.assign({},r),s=[],l="./this.program",d=(u,f)=>{throw f},p=typeof window=="object",m=typeof importScripts=="function",h=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",_="";function $(u){return r.locateFile?r.locateFile(u,_):_+u}var b,E,I;if(h){var T=(Xa(),Jn(Ka)),k=(Xa(),Jn(Ka));m?_=k.dirname(_)+"/":_=__dirname+"/",b=(u,f)=>(u=$r(u)?new URL(u):k.normalize(u),T.readFileSync(u,f?void 0:"utf8")),I=u=>{var f=b(u,!0);return f.buffer||(f=new Uint8Array(f)),f},E=(u,f,g,w=!0)=>{u=$r(u)?new URL(u):k.normalize(u),T.readFile(u,w?void 0:"utf8",(C,R)=>{C?g(C):f(w?R.buffer:R)})},!r.thisProgram&&process.argv.length>1&&(l=process.argv[1].replace(/\\/g,"/")),s=process.argv.slice(2),d=(u,f)=>{throw process.exitCode=u,f},r.inspect=()=>"[Emscripten Module object]"}else(p||m)&&(m?_=self.location.href:typeof document<"u"&&document.currentScript&&(_=document.currentScript.src),e&&(_=e),_.indexOf("blob:")!==0?_=_.substr(0,_.replace(/[?#].*/,"").lastIndexOf("/")+1):_="",b=u=>{var f=new XMLHttpRequest;return f.open("GET",u,!1),f.send(null),f.responseText},m&&(I=u=>{var f=new XMLHttpRequest;return f.open("GET",u,!1),f.responseType="arraybuffer",f.send(null),new Uint8Array(f.response)}),E=(u,f,g)=>{var w=new XMLHttpRequest;w.open("GET",u,!0),w.responseType="arraybuffer",w.onload=()=>{if(w.status==200||w.status==0&&w.response){f(w.response);return}g()},w.onerror=g,w.send(null)});var A=r.print||console.log.bind(console),z=r.printErr||console.error.bind(console);Object.assign(r,i),i=null,r.arguments&&(s=r.arguments),r.thisProgram&&(l=r.thisProgram),r.quit&&(d=r.quit);var O;r.wasmBinary&&(O=r.wasmBinary),typeof WebAssembly!="object"&&Je("no native wasm support detected");var M,B=!1,q;function H(u,f){u||Je(f)}var Z,de,ae,Y,X,ie,J,me;function ye(){var u=M.buffer;r.HEAP8=Z=new Int8Array(u),r.HEAP16=ae=new Int16Array(u),r.HEAPU8=de=new Uint8Array(u),r.HEAPU16=Y=new Uint16Array(u),r.HEAP32=X=new Int32Array(u),r.HEAPU32=ie=new Uint32Array(u),r.HEAPF32=J=new Float32Array(u),r.HEAPF64=me=new Float64Array(u)}var fe=[],Me=[],j=[],Q=[],_e=!1;function F(){if(r.preRun)for(typeof r.preRun=="function"&&(r.preRun=[r.preRun]);r.preRun.length;)Ze(r.preRun.shift());Zt(fe)}function be(){_e=!0,!r.noFSInit&&!v.init.initialized&&v.init(),v.ignorePermissions=!1,bt.init(),Zt(Me)}function ut(){Zt(j)}function Ve(){if(r.postRun)for(typeof r.postRun=="function"&&(r.postRun=[r.postRun]);r.postRun.length;)nr(r.postRun.shift());Zt(Q)}function Ze(u){fe.unshift(u)}function mt(u){Me.unshift(u)}function nr(u){Q.unshift(u)}var Ye=0,vr=null,Ft=null;function br(u){return u}function Rt(u){Ye++,r.monitorRunDependencies&&r.monitorRunDependencies(Ye)}function Kt(u){if(Ye--,r.monitorRunDependencies&&r.monitorRunDependencies(Ye),Ye==0&&(vr!==null&&(clearInterval(vr),vr=null),Ft)){var f=Ft;Ft=null,f()}}function Je(u){r.onAbort&&r.onAbort(u),u="Aborted("+u+")",z(u),B=!0,q=1,u+=". Build with -sASSERTIONS for more info.";var f=new WebAssembly.RuntimeError(u);throw n(f),f}var $a="data:application/octet-stream;base64,",wr=u=>u.startsWith($a),$r=u=>u.startsWith("file://"),Xt;Xt="piper_phonemize.wasm",wr(Xt)||(Xt=$(Xt));function xr(u){if(u==Xt&&O)return new Uint8Array(O);if(I)return I(u);throw"both async and sync fetching of the wasm failed"}function xa(u){if(!O&&(p||m)){if(typeof fetch=="function"&&!$r(u))return fetch(u,{credentials:"same-origin"}).then(f=>{if(!f.ok)throw"failed to load wasm binary file at '"+u+"'";return f.arrayBuffer()}).catch(()=>xr(u));if(E)return new Promise((f,g)=>{E(u,w=>f(new Uint8Array(w)),g)})}return Promise.resolve().then(()=>xr(u))}function kr(u,f,g){return xa(u).then(w=>WebAssembly.instantiate(w,f)).then(w=>w).then(g,w=>{z(`failed to asynchronously prepare wasm: ${w}`),Je(w)})}function ka(u,f,g,w){return!u&&typeof WebAssembly.instantiateStreaming=="function"&&!wr(f)&&!$r(f)&&!h&&typeof fetch=="function"?fetch(f,{credentials:"same-origin"}).then(C=>{var R=WebAssembly.instantiateStreaming(C,g);return R.then(w,function(P){return z(`wasm streaming compile failed: ${P}`),z("falling back to ArrayBuffer instantiation"),kr(f,g,w)})}):kr(f,g,w)}function Dt(){var u={a:Vn};function f(w,C){return lt=w.exports,M=lt.w,ye(),mt(lt.x),Kt("wasm-instantiate"),lt}Rt("wasm-instantiate");function g(w){f(w.instance)}if(r.instantiateWasm)try{return r.instantiateWasm(u,f)}catch(w){z(`Module.instantiateWasm callback failed with error: ${w}`),n(w)}return ka(O,Xt,u,g).catch(n),{}}var re,qe;function Vr(u){this.name="ExitStatus",this.message=`Program terminated with exit(${u})`,this.status=u}var Zt=u=>{for(;u.length>0;)u.shift()(r)},Mt=r.noExitRuntime||!0,Yt=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,qt=(u,f,g)=>{for(var w=f+g,C=f;u[C]&&!(C>=w);)++C;if(C-f>16&&u.buffer&&Yt)return Yt.decode(u.subarray(f,C));for(var R="";f<C;){var P=u[f++];if(!(P&128)){R+=String.fromCharCode(P);continue}var N=u[f++]&63;if((P&224)==192){R+=String.fromCharCode((P&31)<<6|N);continue}var te=u[f++]&63;if((P&240)==224?P=(P&15)<<12|N<<6|te:P=(P&7)<<18|N<<12|te<<6|u[f++]&63,P<65536)R+=String.fromCharCode(P);else{var ve=P-65536;R+=String.fromCharCode(55296|ve>>10,56320|ve&1023)}}return R},st=(u,f)=>u?qt(de,u,f):"",Ea=(u,f,g,w)=>{Je(`Assertion failed: ${st(u)}, at: `+[f?st(f):"unknown filename",g,w?st(w):"unknown function"])};function Sa(u){this.excPtr=u,this.ptr=u-24,this.set_type=function(f){ie[this.ptr+4>>2]=f},this.get_type=function(){return ie[this.ptr+4>>2]},this.set_destructor=function(f){ie[this.ptr+8>>2]=f},this.get_destructor=function(){return ie[this.ptr+8>>2]},this.set_caught=function(f){f=f?1:0,Z[this.ptr+12>>0]=f},this.get_caught=function(){return Z[this.ptr+12>>0]!=0},this.set_rethrown=function(f){f=f?1:0,Z[this.ptr+13>>0]=f},this.get_rethrown=function(){return Z[this.ptr+13>>0]!=0},this.init=function(f,g){this.set_adjusted_ptr(0),this.set_type(f),this.set_destructor(g)},this.set_adjusted_ptr=function(f){ie[this.ptr+16>>2]=f},this.get_adjusted_ptr=function(){return ie[this.ptr+16>>2]},this.get_exception_ptr=function(){var f=ea(this.get_type());if(f)return ie[this.excPtr>>2];var g=this.get_adjusted_ptr();return g!==0?g:this.excPtr}}var Hr=0,Ta=0,bn=(u,f,g)=>{var w=new Sa(u);throw w.init(f,g),Hr=u,Ta++,Hr},wn=u=>(X[dt()>>2]=u,u),Be={isAbs:u=>u.charAt(0)==="/",splitPath:u=>{var f=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return f.exec(u).slice(1)},normalizeArray:(u,f)=>{for(var g=0,w=u.length-1;w>=0;w--){var C=u[w];C==="."?u.splice(w,1):C===".."?(u.splice(w,1),g++):g&&(u.splice(w,1),g--)}if(f)for(;g;g--)u.unshift("..");return u},normalize:u=>{var f=Be.isAbs(u),g=u.substr(-1)==="/";return u=Be.normalizeArray(u.split("/").filter(w=>!!w),!f).join("/"),!u&&!f&&(u="."),u&&g&&(u+="/"),(f?"/":"")+u},dirname:u=>{var f=Be.splitPath(u),g=f[0],w=f[1];return!g&&!w?".":(w&&(w=w.substr(0,w.length-1)),g+w)},basename:u=>{if(u==="/")return"/";u=Be.normalize(u),u=u.replace(/\/$/,"");var f=u.lastIndexOf("/");return f===-1?u:u.substr(f+1)},join:function(){var u=Array.prototype.slice.call(arguments);return Be.normalize(u.join("/"))},join2:(u,f)=>Be.normalize(u+"/"+f)},$n=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return w=>crypto.getRandomValues(w);if(h)try{var u=Qt("crypto"),f=u.randomFillSync;if(f)return w=>u.randomFillSync(w);var g=u.randomBytes;return w=>(w.set(g(w.byteLength)),w)}catch{}Je("initRandomDevice")},Gr=u=>(Gr=$n())(u),ht={resolve:function(){for(var u="",f=!1,g=arguments.length-1;g>=-1&&!f;g--){var w=g>=0?arguments[g]:v.cwd();if(typeof w!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!w)return"";u=w+"/"+u,f=Be.isAbs(w)}return u=Be.normalizeArray(u.split("/").filter(C=>!!C),!f).join("/"),(f?"/":"")+u||"."},relative:(u,f)=>{u=ht.resolve(u).substr(1),f=ht.resolve(f).substr(1);function g(ve){for(var $e=0;$e<ve.length&&ve[$e]==="";$e++);for(var Ie=ve.length-1;Ie>=0&&ve[Ie]==="";Ie--);return $e>Ie?[]:ve.slice($e,Ie-$e+1)}for(var w=g(u.split("/")),C=g(f.split("/")),R=Math.min(w.length,C.length),P=R,N=0;N<R;N++)if(w[N]!==C[N]){P=N;break}for(var te=[],N=P;N<w.length;N++)te.push("..");return te=te.concat(C.slice(P)),te.join("/")}},Er=[],Sr=u=>{for(var f=0,g=0;g<u.length;++g){var w=u.charCodeAt(g);w<=127?f++:w<=2047?f+=2:w>=55296&&w<=57343?(f+=4,++g):f+=3}return f},He=(u,f,g,w)=>{if(!(w>0))return 0;for(var C=g,R=g+w-1,P=0;P<u.length;++P){var N=u.charCodeAt(P);if(N>=55296&&N<=57343){var te=u.charCodeAt(++P);N=65536+((N&1023)<<10)|te&1023}if(N<=127){if(g>=R)break;f[g++]=N}else if(N<=2047){if(g+1>=R)break;f[g++]=192|N>>6,f[g++]=128|N&63}else if(N<=65535){if(g+2>=R)break;f[g++]=224|N>>12,f[g++]=128|N>>6&63,f[g++]=128|N&63}else{if(g+3>=R)break;f[g++]=240|N>>18,f[g++]=128|N>>12&63,f[g++]=128|N>>6&63,f[g++]=128|N&63}}return f[g]=0,g-C};function ir(u,f,g){var w=g>0?g:Sr(u)+1,C=new Array(w),R=He(u,C,0,C.length);return f&&(C.length=R),C}var Ia=()=>{if(!Er.length){var u=null;if(h){var f=256,g=Buffer.alloc(f),w=0,C=process.stdin.fd;try{w=T.readSync(C,g)}catch(R){if(R.toString().includes("EOF"))w=0;else throw R}w>0?u=g.slice(0,w).toString("utf-8"):u=null}else typeof window<"u"&&typeof window.prompt=="function"?(u=window.prompt("Input: "),u!==null&&(u+=`
`)):typeof readline=="function"&&(u=readline(),u!==null&&(u+=`
`));if(!u)return null;Er=ir(u,!0)}return Er.shift()},bt={ttys:[],init(){},shutdown(){},register(u,f){bt.ttys[u]={input:[],output:[],ops:f},v.registerDevice(u,bt.stream_ops)},stream_ops:{open(u){var f=bt.ttys[u.node.rdev];if(!f)throw new v.ErrnoError(43);u.tty=f,u.seekable=!1},close(u){u.tty.ops.fsync(u.tty)},fsync(u){u.tty.ops.fsync(u.tty)},read(u,f,g,w,C){if(!u.tty||!u.tty.ops.get_char)throw new v.ErrnoError(60);for(var R=0,P=0;P<w;P++){var N;try{N=u.tty.ops.get_char(u.tty)}catch{throw new v.ErrnoError(29)}if(N===void 0&&R===0)throw new v.ErrnoError(6);if(N==null)break;R++,f[g+P]=N}return R&&(u.node.timestamp=Date.now()),R},write(u,f,g,w,C){if(!u.tty||!u.tty.ops.put_char)throw new v.ErrnoError(60);try{for(var R=0;R<w;R++)u.tty.ops.put_char(u.tty,f[g+R])}catch{throw new v.ErrnoError(29)}return w&&(u.node.timestamp=Date.now()),R}},default_tty_ops:{get_char(u){return Ia()},put_char(u,f){f===null||f===10?(A(qt(u.output,0)),u.output=[]):f!=0&&u.output.push(f)},fsync(u){u.output&&u.output.length>0&&(A(qt(u.output,0)),u.output=[])},ioctl_tcgets(u){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(u,f,g){return 0},ioctl_tiocgwinsz(u){return[24,80]}},default_tty1_ops:{put_char(u,f){f===null||f===10?(z(qt(u.output,0)),u.output=[]):f!=0&&u.output.push(f)},fsync(u){u.output&&u.output.length>0&&(z(qt(u.output,0)),u.output=[])}}},Lt=u=>{Je()},Ee={ops_table:null,mount(u){return Ee.createNode(null,"/",16895,0)},createNode(u,f,g,w){if(v.isBlkdev(g)||v.isFIFO(g))throw new v.ErrnoError(63);Ee.ops_table||(Ee.ops_table={dir:{node:{getattr:Ee.node_ops.getattr,setattr:Ee.node_ops.setattr,lookup:Ee.node_ops.lookup,mknod:Ee.node_ops.mknod,rename:Ee.node_ops.rename,unlink:Ee.node_ops.unlink,rmdir:Ee.node_ops.rmdir,readdir:Ee.node_ops.readdir,symlink:Ee.node_ops.symlink},stream:{llseek:Ee.stream_ops.llseek}},file:{node:{getattr:Ee.node_ops.getattr,setattr:Ee.node_ops.setattr},stream:{llseek:Ee.stream_ops.llseek,read:Ee.stream_ops.read,write:Ee.stream_ops.write,allocate:Ee.stream_ops.allocate,mmap:Ee.stream_ops.mmap,msync:Ee.stream_ops.msync}},link:{node:{getattr:Ee.node_ops.getattr,setattr:Ee.node_ops.setattr,readlink:Ee.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Ee.node_ops.getattr,setattr:Ee.node_ops.setattr},stream:v.chrdev_stream_ops}});var C=v.createNode(u,f,g,w);return v.isDir(C.mode)?(C.node_ops=Ee.ops_table.dir.node,C.stream_ops=Ee.ops_table.dir.stream,C.contents={}):v.isFile(C.mode)?(C.node_ops=Ee.ops_table.file.node,C.stream_ops=Ee.ops_table.file.stream,C.usedBytes=0,C.contents=null):v.isLink(C.mode)?(C.node_ops=Ee.ops_table.link.node,C.stream_ops=Ee.ops_table.link.stream):v.isChrdev(C.mode)&&(C.node_ops=Ee.ops_table.chrdev.node,C.stream_ops=Ee.ops_table.chrdev.stream),C.timestamp=Date.now(),u&&(u.contents[f]=C,u.timestamp=C.timestamp),C},getFileDataAsTypedArray(u){return u.contents?u.contents.subarray?u.contents.subarray(0,u.usedBytes):new Uint8Array(u.contents):new Uint8Array(0)},expandFileStorage(u,f){var g=u.contents?u.contents.length:0;if(!(g>=f)){var w=1024*1024;f=Math.max(f,g*(g<w?2:1.125)>>>0),g!=0&&(f=Math.max(f,256));var C=u.contents;u.contents=new Uint8Array(f),u.usedBytes>0&&u.contents.set(C.subarray(0,u.usedBytes),0)}},resizeFileStorage(u,f){if(u.usedBytes!=f)if(f==0)u.contents=null,u.usedBytes=0;else{var g=u.contents;u.contents=new Uint8Array(f),g&&u.contents.set(g.subarray(0,Math.min(f,u.usedBytes))),u.usedBytes=f}},node_ops:{getattr(u){var f={};return f.dev=v.isChrdev(u.mode)?u.id:1,f.ino=u.id,f.mode=u.mode,f.nlink=1,f.uid=0,f.gid=0,f.rdev=u.rdev,v.isDir(u.mode)?f.size=4096:v.isFile(u.mode)?f.size=u.usedBytes:v.isLink(u.mode)?f.size=u.link.length:f.size=0,f.atime=new Date(u.timestamp),f.mtime=new Date(u.timestamp),f.ctime=new Date(u.timestamp),f.blksize=4096,f.blocks=Math.ceil(f.size/f.blksize),f},setattr(u,f){f.mode!==void 0&&(u.mode=f.mode),f.timestamp!==void 0&&(u.timestamp=f.timestamp),f.size!==void 0&&Ee.resizeFileStorage(u,f.size)},lookup(u,f){throw v.genericErrors[44]},mknod(u,f,g,w){return Ee.createNode(u,f,g,w)},rename(u,f,g){if(v.isDir(u.mode)){var w;try{w=v.lookupNode(f,g)}catch{}if(w)for(var C in w.contents)throw new v.ErrnoError(55)}delete u.parent.contents[u.name],u.parent.timestamp=Date.now(),u.name=g,f.contents[g]=u,f.timestamp=u.parent.timestamp,u.parent=f},unlink(u,f){delete u.contents[f],u.timestamp=Date.now()},rmdir(u,f){var g=v.lookupNode(u,f);for(var w in g.contents)throw new v.ErrnoError(55);delete u.contents[f],u.timestamp=Date.now()},readdir(u){var f=[".",".."];for(var g in u.contents)u.contents.hasOwnProperty(g)&&f.push(g);return f},symlink(u,f,g){var w=Ee.createNode(u,f,41471,0);return w.link=g,w},readlink(u){if(!v.isLink(u.mode))throw new v.ErrnoError(28);return u.link}},stream_ops:{read(u,f,g,w,C){var R=u.node.contents;if(C>=u.node.usedBytes)return 0;var P=Math.min(u.node.usedBytes-C,w);if(P>8&&R.subarray)f.set(R.subarray(C,C+P),g);else for(var N=0;N<P;N++)f[g+N]=R[C+N];return P},write(u,f,g,w,C,R){if(!w)return 0;var P=u.node;if(P.timestamp=Date.now(),f.subarray&&(!P.contents||P.contents.subarray)){if(R)return P.contents=f.subarray(g,g+w),P.usedBytes=w,w;if(P.usedBytes===0&&C===0)return P.contents=f.slice(g,g+w),P.usedBytes=w,w;if(C+w<=P.usedBytes)return P.contents.set(f.subarray(g,g+w),C),w}if(Ee.expandFileStorage(P,C+w),P.contents.subarray&&f.subarray)P.contents.set(f.subarray(g,g+w),C);else for(var N=0;N<w;N++)P.contents[C+N]=f[g+N];return P.usedBytes=Math.max(P.usedBytes,C+w),w},llseek(u,f,g){var w=f;if(g===1?w+=u.position:g===2&&v.isFile(u.node.mode)&&(w+=u.node.usedBytes),w<0)throw new v.ErrnoError(28);return w},allocate(u,f,g){Ee.expandFileStorage(u.node,f+g),u.node.usedBytes=Math.max(u.node.usedBytes,f+g)},mmap(u,f,g,w,C){if(!v.isFile(u.node.mode))throw new v.ErrnoError(43);var R,P,N=u.node.contents;if(!(C&2)&&N.buffer===Z.buffer)P=!1,R=N.byteOffset;else{if((g>0||g+f<N.length)&&(N.subarray?N=N.subarray(g,g+f):N=Array.prototype.slice.call(N,g,g+f)),P=!0,R=Lt(f),!R)throw new v.ErrnoError(48);Z.set(N,R)}return{ptr:R,allocated:P}},msync(u,f,g,w,C){return Ee.stream_ops.write(u,f,0,w,g,!1),0}}},za=(u,f,g,w)=>{var C=w?"":`al ${u}`;E(u,R=>{H(R,`Loading data file "${u}" failed (no arrayBuffer).`),f(new Uint8Array(R)),C&&Kt(C)},R=>{if(g)g();else throw`Loading data file "${u}" failed.`}),C&&Rt(C)},Ca=(u,f,g,w,C,R)=>v.createDataFile(u,f,g,w,C,R),Aa=r.preloadPlugins||[],Oa=(u,f,g,w)=>{typeof Browser<"u"&&Browser.init();var C=!1;return Aa.forEach(R=>{C||R.canHandle(f)&&(R.handle(u,f,g,w),C=!0)}),C},Ra=(u,f,g,w,C,R,P,N,te,ve)=>{var $e=f?ht.resolve(Be.join2(u,f)):u,Ie=`cp ${$e}`;function se(oe){function xe(Le){ve&&ve(),N||Ca(u,f,Le,w,C,te),R&&R(),Kt(Ie)}Oa(oe,$e,xe,()=>{P&&P(),Kt(Ie)})||xe(oe)}Rt(Ie),typeof g=="string"?za(g,oe=>se(oe),P):se(g)},Da=u=>{var f={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},g=f[u];if(typeof g>"u")throw new Error(`Unknown file open mode: ${u}`);return g},Tr=(u,f)=>{var g=0;return u&&(g|=365),f&&(g|=146),g},v={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath(u,f={}){if(u=ht.resolve(u),!u)return{path:"",node:null};var g={follow_mount:!0,recurse_count:0};if(f=Object.assign(g,f),f.recurse_count>8)throw new v.ErrnoError(32);for(var w=u.split("/").filter(Ie=>!!Ie),C=v.root,R="/",P=0;P<w.length;P++){var N=P===w.length-1;if(N&&f.parent)break;if(C=v.lookupNode(C,w[P]),R=Be.join2(R,w[P]),v.isMountpoint(C)&&(!N||N&&f.follow_mount)&&(C=C.mounted.root),!N||f.follow)for(var te=0;v.isLink(C.mode);){var ve=v.readlink(R);R=ht.resolve(Be.dirname(R),ve);var $e=v.lookupPath(R,{recurse_count:f.recurse_count+1});if(C=$e.node,te++>40)throw new v.ErrnoError(32)}}return{path:R,node:C}},getPath(u){for(var f;;){if(v.isRoot(u)){var g=u.mount.mountpoint;return f?g[g.length-1]!=="/"?`${g}/${f}`:g+f:g}f=f?`${u.name}/${f}`:u.name,u=u.parent}},hashName(u,f){for(var g=0,w=0;w<f.length;w++)g=(g<<5)-g+f.charCodeAt(w)|0;return(u+g>>>0)%v.nameTable.length},hashAddNode(u){var f=v.hashName(u.parent.id,u.name);u.name_next=v.nameTable[f],v.nameTable[f]=u},hashRemoveNode(u){var f=v.hashName(u.parent.id,u.name);if(v.nameTable[f]===u)v.nameTable[f]=u.name_next;else for(var g=v.nameTable[f];g;){if(g.name_next===u){g.name_next=u.name_next;break}g=g.name_next}},lookupNode(u,f){var g=v.mayLookup(u);if(g)throw new v.ErrnoError(g,u);for(var w=v.hashName(u.id,f),C=v.nameTable[w];C;C=C.name_next){var R=C.name;if(C.parent.id===u.id&&R===f)return C}return v.lookup(u,f)},createNode(u,f,g,w){var C=new v.FSNode(u,f,g,w);return v.hashAddNode(C),C},destroyNode(u){v.hashRemoveNode(u)},isRoot(u){return u===u.parent},isMountpoint(u){return!!u.mounted},isFile(u){return(u&61440)===32768},isDir(u){return(u&61440)===16384},isLink(u){return(u&61440)===40960},isChrdev(u){return(u&61440)===8192},isBlkdev(u){return(u&61440)===24576},isFIFO(u){return(u&61440)===4096},isSocket(u){return(u&49152)===49152},flagsToPermissionString(u){var f=["r","w","rw"][u&3];return u&512&&(f+="w"),f},nodePermissions(u,f){return v.ignorePermissions?0:f.includes("r")&&!(u.mode&292)||f.includes("w")&&!(u.mode&146)||f.includes("x")&&!(u.mode&73)?2:0},mayLookup(u){var f=v.nodePermissions(u,"x");return f||(u.node_ops.lookup?0:2)},mayCreate(u,f){try{var g=v.lookupNode(u,f);return 20}catch{}return v.nodePermissions(u,"wx")},mayDelete(u,f,g){var w;try{w=v.lookupNode(u,f)}catch(R){return R.errno}var C=v.nodePermissions(u,"wx");if(C)return C;if(g){if(!v.isDir(w.mode))return 54;if(v.isRoot(w)||v.getPath(w)===v.cwd())return 10}else if(v.isDir(w.mode))return 31;return 0},mayOpen(u,f){return u?v.isLink(u.mode)?32:v.isDir(u.mode)&&(v.flagsToPermissionString(f)!=="r"||f&512)?31:v.nodePermissions(u,v.flagsToPermissionString(f)):44},MAX_OPEN_FDS:4096,nextfd(){for(var u=0;u<=v.MAX_OPEN_FDS;u++)if(!v.streams[u])return u;throw new v.ErrnoError(33)},getStreamChecked(u){var f=v.getStream(u);if(!f)throw new v.ErrnoError(8);return f},getStream:u=>v.streams[u],createStream(u,f=-1){return v.FSStream||(v.FSStream=function(){this.shared={}},v.FSStream.prototype={},Object.defineProperties(v.FSStream.prototype,{object:{get(){return this.node},set(g){this.node=g}},isRead:{get(){return(this.flags&2097155)!==1}},isWrite:{get(){return(this.flags&2097155)!==0}},isAppend:{get(){return this.flags&1024}},flags:{get(){return this.shared.flags},set(g){this.shared.flags=g}},position:{get(){return this.shared.position},set(g){this.shared.position=g}}})),u=Object.assign(new v.FSStream,u),f==-1&&(f=v.nextfd()),u.fd=f,v.streams[f]=u,u},closeStream(u){v.streams[u]=null},chrdev_stream_ops:{open(u){var f=v.getDevice(u.node.rdev);u.stream_ops=f.stream_ops,u.stream_ops.open&&u.stream_ops.open(u)},llseek(){throw new v.ErrnoError(70)}},major:u=>u>>8,minor:u=>u&255,makedev:(u,f)=>u<<8|f,registerDevice(u,f){v.devices[u]={stream_ops:f}},getDevice:u=>v.devices[u],getMounts(u){for(var f=[],g=[u];g.length;){var w=g.pop();f.push(w),g.push.apply(g,w.mounts)}return f},syncfs(u,f){typeof u=="function"&&(f=u,u=!1),v.syncFSRequests++,v.syncFSRequests>1&&z(`warning: ${v.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var g=v.getMounts(v.root.mount),w=0;function C(P){return v.syncFSRequests--,f(P)}function R(P){if(P)return R.errored?void 0:(R.errored=!0,C(P));++w>=g.length&&C(null)}g.forEach(P=>{if(!P.type.syncfs)return R(null);P.type.syncfs(P,u,R)})},mount(u,f,g){var w=g==="/",C=!g,R;if(w&&v.root)throw new v.ErrnoError(10);if(!w&&!C){var P=v.lookupPath(g,{follow_mount:!1});if(g=P.path,R=P.node,v.isMountpoint(R))throw new v.ErrnoError(10);if(!v.isDir(R.mode))throw new v.ErrnoError(54)}var N={type:u,opts:f,mountpoint:g,mounts:[]},te=u.mount(N);return te.mount=N,N.root=te,w?v.root=te:R&&(R.mounted=N,R.mount&&R.mount.mounts.push(N)),te},unmount(u){var f=v.lookupPath(u,{follow_mount:!1});if(!v.isMountpoint(f.node))throw new v.ErrnoError(28);var g=f.node,w=g.mounted,C=v.getMounts(w);Object.keys(v.nameTable).forEach(P=>{for(var N=v.nameTable[P];N;){var te=N.name_next;C.includes(N.mount)&&v.destroyNode(N),N=te}}),g.mounted=null;var R=g.mount.mounts.indexOf(w);g.mount.mounts.splice(R,1)},lookup(u,f){return u.node_ops.lookup(u,f)},mknod(u,f,g){var w=v.lookupPath(u,{parent:!0}),C=w.node,R=Be.basename(u);if(!R||R==="."||R==="..")throw new v.ErrnoError(28);var P=v.mayCreate(C,R);if(P)throw new v.ErrnoError(P);if(!C.node_ops.mknod)throw new v.ErrnoError(63);return C.node_ops.mknod(C,R,f,g)},create(u,f){return f=f!==void 0?f:438,f&=4095,f|=32768,v.mknod(u,f,0)},mkdir(u,f){return f=f!==void 0?f:511,f&=1023,f|=16384,v.mknod(u,f,0)},mkdirTree(u,f){for(var g=u.split("/"),w="",C=0;C<g.length;++C)if(g[C]){w+="/"+g[C];try{v.mkdir(w,f)}catch(R){if(R.errno!=20)throw R}}},mkdev(u,f,g){return typeof g>"u"&&(g=f,f=438),f|=8192,v.mknod(u,f,g)},symlink(u,f){if(!ht.resolve(u))throw new v.ErrnoError(44);var g=v.lookupPath(f,{parent:!0}),w=g.node;if(!w)throw new v.ErrnoError(44);var C=Be.basename(f),R=v.mayCreate(w,C);if(R)throw new v.ErrnoError(R);if(!w.node_ops.symlink)throw new v.ErrnoError(63);return w.node_ops.symlink(w,C,u)},rename(u,f){var g=Be.dirname(u),w=Be.dirname(f),C=Be.basename(u),R=Be.basename(f),P,N,te;if(P=v.lookupPath(u,{parent:!0}),N=P.node,P=v.lookupPath(f,{parent:!0}),te=P.node,!N||!te)throw new v.ErrnoError(44);if(N.mount!==te.mount)throw new v.ErrnoError(75);var ve=v.lookupNode(N,C),$e=ht.relative(u,w);if($e.charAt(0)!==".")throw new v.ErrnoError(28);if($e=ht.relative(f,g),$e.charAt(0)!==".")throw new v.ErrnoError(55);var Ie;try{Ie=v.lookupNode(te,R)}catch{}if(ve!==Ie){var se=v.isDir(ve.mode),oe=v.mayDelete(N,C,se);if(oe)throw new v.ErrnoError(oe);if(oe=Ie?v.mayDelete(te,R,se):v.mayCreate(te,R),oe)throw new v.ErrnoError(oe);if(!N.node_ops.rename)throw new v.ErrnoError(63);if(v.isMountpoint(ve)||Ie&&v.isMountpoint(Ie))throw new v.ErrnoError(10);if(te!==N&&(oe=v.nodePermissions(N,"w"),oe))throw new v.ErrnoError(oe);v.hashRemoveNode(ve);try{N.node_ops.rename(ve,te,R)}catch(xe){throw xe}finally{v.hashAddNode(ve)}}},rmdir(u){var f=v.lookupPath(u,{parent:!0}),g=f.node,w=Be.basename(u),C=v.lookupNode(g,w),R=v.mayDelete(g,w,!0);if(R)throw new v.ErrnoError(R);if(!g.node_ops.rmdir)throw new v.ErrnoError(63);if(v.isMountpoint(C))throw new v.ErrnoError(10);g.node_ops.rmdir(g,w),v.destroyNode(C)},readdir(u){var f=v.lookupPath(u,{follow:!0}),g=f.node;if(!g.node_ops.readdir)throw new v.ErrnoError(54);return g.node_ops.readdir(g)},unlink(u){var f=v.lookupPath(u,{parent:!0}),g=f.node;if(!g)throw new v.ErrnoError(44);var w=Be.basename(u),C=v.lookupNode(g,w),R=v.mayDelete(g,w,!1);if(R)throw new v.ErrnoError(R);if(!g.node_ops.unlink)throw new v.ErrnoError(63);if(v.isMountpoint(C))throw new v.ErrnoError(10);g.node_ops.unlink(g,w),v.destroyNode(C)},readlink(u){var f=v.lookupPath(u),g=f.node;if(!g)throw new v.ErrnoError(44);if(!g.node_ops.readlink)throw new v.ErrnoError(28);return ht.resolve(v.getPath(g.parent),g.node_ops.readlink(g))},stat(u,f){var g=v.lookupPath(u,{follow:!f}),w=g.node;if(!w)throw new v.ErrnoError(44);if(!w.node_ops.getattr)throw new v.ErrnoError(63);return w.node_ops.getattr(w)},lstat(u){return v.stat(u,!0)},chmod(u,f,g){var w;if(typeof u=="string"){var C=v.lookupPath(u,{follow:!g});w=C.node}else w=u;if(!w.node_ops.setattr)throw new v.ErrnoError(63);w.node_ops.setattr(w,{mode:f&4095|w.mode&-4096,timestamp:Date.now()})},lchmod(u,f){v.chmod(u,f,!0)},fchmod(u,f){var g=v.getStreamChecked(u);v.chmod(g.node,f)},chown(u,f,g,w){var C;if(typeof u=="string"){var R=v.lookupPath(u,{follow:!w});C=R.node}else C=u;if(!C.node_ops.setattr)throw new v.ErrnoError(63);C.node_ops.setattr(C,{timestamp:Date.now()})},lchown(u,f,g){v.chown(u,f,g,!0)},fchown(u,f,g){var w=v.getStreamChecked(u);v.chown(w.node,f,g)},truncate(u,f){if(f<0)throw new v.ErrnoError(28);var g;if(typeof u=="string"){var w=v.lookupPath(u,{follow:!0});g=w.node}else g=u;if(!g.node_ops.setattr)throw new v.ErrnoError(63);if(v.isDir(g.mode))throw new v.ErrnoError(31);if(!v.isFile(g.mode))throw new v.ErrnoError(28);var C=v.nodePermissions(g,"w");if(C)throw new v.ErrnoError(C);g.node_ops.setattr(g,{size:f,timestamp:Date.now()})},ftruncate(u,f){var g=v.getStreamChecked(u);if((g.flags&2097155)===0)throw new v.ErrnoError(28);v.truncate(g.node,f)},utime(u,f,g){var w=v.lookupPath(u,{follow:!0}),C=w.node;C.node_ops.setattr(C,{timestamp:Math.max(f,g)})},open(u,f,g){if(u==="")throw new v.ErrnoError(44);f=typeof f=="string"?Da(f):f,g=typeof g>"u"?438:g,f&64?g=g&4095|32768:g=0;var w;if(typeof u=="object")w=u;else{u=Be.normalize(u);try{var C=v.lookupPath(u,{follow:!(f&131072)});w=C.node}catch{}}var R=!1;if(f&64)if(w){if(f&128)throw new v.ErrnoError(20)}else w=v.mknod(u,g,0),R=!0;if(!w)throw new v.ErrnoError(44);if(v.isChrdev(w.mode)&&(f&=-513),f&65536&&!v.isDir(w.mode))throw new v.ErrnoError(54);if(!R){var P=v.mayOpen(w,f);if(P)throw new v.ErrnoError(P)}f&512&&!R&&v.truncate(w,0),f&=-131713;var N=v.createStream({node:w,path:v.getPath(w),flags:f,seekable:!0,position:0,stream_ops:w.stream_ops,ungotten:[],error:!1});return N.stream_ops.open&&N.stream_ops.open(N),r.logReadFiles&&!(f&1)&&(v.readFiles||(v.readFiles={}),u in v.readFiles||(v.readFiles[u]=1)),N},close(u){if(v.isClosed(u))throw new v.ErrnoError(8);u.getdents&&(u.getdents=null);try{u.stream_ops.close&&u.stream_ops.close(u)}catch(f){throw f}finally{v.closeStream(u.fd)}u.fd=null},isClosed(u){return u.fd===null},llseek(u,f,g){if(v.isClosed(u))throw new v.ErrnoError(8);if(!u.seekable||!u.stream_ops.llseek)throw new v.ErrnoError(70);if(g!=0&&g!=1&&g!=2)throw new v.ErrnoError(28);return u.position=u.stream_ops.llseek(u,f,g),u.ungotten=[],u.position},read(u,f,g,w,C){if(w<0||C<0)throw new v.ErrnoError(28);if(v.isClosed(u))throw new v.ErrnoError(8);if((u.flags&2097155)===1)throw new v.ErrnoError(8);if(v.isDir(u.node.mode))throw new v.ErrnoError(31);if(!u.stream_ops.read)throw new v.ErrnoError(28);var R=typeof C<"u";if(!R)C=u.position;else if(!u.seekable)throw new v.ErrnoError(70);var P=u.stream_ops.read(u,f,g,w,C);return R||(u.position+=P),P},write(u,f,g,w,C,R){if(w<0||C<0)throw new v.ErrnoError(28);if(v.isClosed(u))throw new v.ErrnoError(8);if((u.flags&2097155)===0)throw new v.ErrnoError(8);if(v.isDir(u.node.mode))throw new v.ErrnoError(31);if(!u.stream_ops.write)throw new v.ErrnoError(28);u.seekable&&u.flags&1024&&v.llseek(u,0,2);var P=typeof C<"u";if(!P)C=u.position;else if(!u.seekable)throw new v.ErrnoError(70);var N=u.stream_ops.write(u,f,g,w,C,R);return P||(u.position+=N),N},allocate(u,f,g){if(v.isClosed(u))throw new v.ErrnoError(8);if(f<0||g<=0)throw new v.ErrnoError(28);if((u.flags&2097155)===0)throw new v.ErrnoError(8);if(!v.isFile(u.node.mode)&&!v.isDir(u.node.mode))throw new v.ErrnoError(43);if(!u.stream_ops.allocate)throw new v.ErrnoError(138);u.stream_ops.allocate(u,f,g)},mmap(u,f,g,w,C){if((w&2)!==0&&(C&2)===0&&(u.flags&2097155)!==2)throw new v.ErrnoError(2);if((u.flags&2097155)===1)throw new v.ErrnoError(2);if(!u.stream_ops.mmap)throw new v.ErrnoError(43);return u.stream_ops.mmap(u,f,g,w,C)},msync(u,f,g,w,C){return u.stream_ops.msync?u.stream_ops.msync(u,f,g,w,C):0},munmap:u=>0,ioctl(u,f,g){if(!u.stream_ops.ioctl)throw new v.ErrnoError(59);return u.stream_ops.ioctl(u,f,g)},readFile(u,f={}){if(f.flags=f.flags||0,f.encoding=f.encoding||"binary",f.encoding!=="utf8"&&f.encoding!=="binary")throw new Error(`Invalid encoding type "${f.encoding}"`);var g,w=v.open(u,f.flags),C=v.stat(u),R=C.size,P=new Uint8Array(R);return v.read(w,P,0,R,0),f.encoding==="utf8"?g=qt(P,0):f.encoding==="binary"&&(g=P),v.close(w),g},writeFile(u,f,g={}){g.flags=g.flags||577;var w=v.open(u,g.flags,g.mode);if(typeof f=="string"){var C=new Uint8Array(Sr(f)+1),R=He(f,C,0,C.length);v.write(w,C,0,R,void 0,g.canOwn)}else if(ArrayBuffer.isView(f))v.write(w,f,0,f.byteLength,void 0,g.canOwn);else throw new Error("Unsupported data type");v.close(w)},cwd:()=>v.currentPath,chdir(u){var f=v.lookupPath(u,{follow:!0});if(f.node===null)throw new v.ErrnoError(44);if(!v.isDir(f.node.mode))throw new v.ErrnoError(54);var g=v.nodePermissions(f.node,"x");if(g)throw new v.ErrnoError(g);v.currentPath=f.path},createDefaultDirectories(){v.mkdir("/tmp"),v.mkdir("/home"),v.mkdir("/home/web_user")},createDefaultDevices(){v.mkdir("/dev"),v.registerDevice(v.makedev(1,3),{read:()=>0,write:(w,C,R,P,N)=>P}),v.mkdev("/dev/null",v.makedev(1,3)),bt.register(v.makedev(5,0),bt.default_tty_ops),bt.register(v.makedev(6,0),bt.default_tty1_ops),v.mkdev("/dev/tty",v.makedev(5,0)),v.mkdev("/dev/tty1",v.makedev(6,0));var u=new Uint8Array(1024),f=0,g=()=>(f===0&&(f=Gr(u).byteLength),u[--f]);v.createDevice("/dev","random",g),v.createDevice("/dev","urandom",g),v.mkdir("/dev/shm"),v.mkdir("/dev/shm/tmp")},createSpecialDirectories(){v.mkdir("/proc");var u=v.mkdir("/proc/self");v.mkdir("/proc/self/fd"),v.mount({mount(){var f=v.createNode(u,"fd",16895,73);return f.node_ops={lookup(g,w){var C=+w,R=v.getStreamChecked(C),P={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>R.path}};return P.parent=P,P}},f}},{},"/proc/self/fd")},createStandardStreams(){r.stdin?v.createDevice("/dev","stdin",r.stdin):v.symlink("/dev/tty","/dev/stdin"),r.stdout?v.createDevice("/dev","stdout",null,r.stdout):v.symlink("/dev/tty","/dev/stdout"),r.stderr?v.createDevice("/dev","stderr",null,r.stderr):v.symlink("/dev/tty1","/dev/stderr");var u=v.open("/dev/stdin",0),f=v.open("/dev/stdout",1),g=v.open("/dev/stderr",1)},ensureErrnoError(){v.ErrnoError||(v.ErrnoError=function(f,g){this.name="ErrnoError",this.node=g,this.setErrno=function(w){this.errno=w},this.setErrno(f),this.message="FS error"},v.ErrnoError.prototype=new Error,v.ErrnoError.prototype.constructor=v.ErrnoError,[44].forEach(u=>{v.genericErrors[u]=new v.ErrnoError(u),v.genericErrors[u].stack="<generic error, no stack>"}))},staticInit(){v.ensureErrnoError(),v.nameTable=new Array(4096),v.mount(Ee,{},"/"),v.createDefaultDirectories(),v.createDefaultDevices(),v.createSpecialDirectories(),v.filesystems={MEMFS:Ee}},init(u,f,g){v.init.initialized=!0,v.ensureErrnoError(),r.stdin=u||r.stdin,r.stdout=f||r.stdout,r.stderr=g||r.stderr,v.createStandardStreams()},quit(){v.init.initialized=!1;for(var u=0;u<v.streams.length;u++){var f=v.streams[u];f&&v.close(f)}},findObject(u,f){var g=v.analyzePath(u,f);return g.exists?g.object:null},analyzePath(u,f){try{var g=v.lookupPath(u,{follow:!f});u=g.path}catch{}var w={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var g=v.lookupPath(u,{parent:!0});w.parentExists=!0,w.parentPath=g.path,w.parentObject=g.node,w.name=Be.basename(u),g=v.lookupPath(u,{follow:!f}),w.exists=!0,w.path=g.path,w.object=g.node,w.name=g.node.name,w.isRoot=g.path==="/"}catch(C){w.error=C.errno}return w},createPath(u,f,g,w){u=typeof u=="string"?u:v.getPath(u);for(var C=f.split("/").reverse();C.length;){var R=C.pop();if(R){var P=Be.join2(u,R);try{v.mkdir(P)}catch{}u=P}}return P},createFile(u,f,g,w,C){var R=Be.join2(typeof u=="string"?u:v.getPath(u),f),P=Tr(w,C);return v.create(R,P)},createDataFile(u,f,g,w,C,R){var P=f;u&&(u=typeof u=="string"?u:v.getPath(u),P=f?Be.join2(u,f):u);var N=Tr(w,C),te=v.create(P,N);if(g){if(typeof g=="string"){for(var ve=new Array(g.length),$e=0,Ie=g.length;$e<Ie;++$e)ve[$e]=g.charCodeAt($e);g=ve}v.chmod(te,N|146);var se=v.open(te,577);v.write(se,g,0,g.length,0,R),v.close(se),v.chmod(te,N)}return te},createDevice(u,f,g,w){var C=Be.join2(typeof u=="string"?u:v.getPath(u),f),R=Tr(!!g,!!w);v.createDevice.major||(v.createDevice.major=64);var P=v.makedev(v.createDevice.major++,0);return v.registerDevice(P,{open(N){N.seekable=!1},close(N){w&&w.buffer&&w.buffer.length&&w(10)},read(N,te,ve,$e,Ie){for(var se=0,oe=0;oe<$e;oe++){var xe;try{xe=g()}catch{throw new v.ErrnoError(29)}if(xe===void 0&&se===0)throw new v.ErrnoError(6);if(xe==null)break;se++,te[ve+oe]=xe}return se&&(N.node.timestamp=Date.now()),se},write(N,te,ve,$e,Ie){for(var se=0;se<$e;se++)try{w(te[ve+se])}catch{throw new v.ErrnoError(29)}return $e&&(N.node.timestamp=Date.now()),se}}),v.mkdev(C,R,P)},forceLoadFile(u){if(u.isDevice||u.isFolder||u.link||u.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(b)try{u.contents=ir(b(u.url),!0),u.usedBytes=u.contents.length}catch{throw new v.ErrnoError(29)}else throw new Error("Cannot load without read() or XMLHttpRequest.")},createLazyFile(u,f,g,w,C){function R(){this.lengthKnown=!1,this.chunks=[]}if(R.prototype.get=function(oe){if(!(oe>this.length-1||oe<0)){var xe=oe%this.chunkSize,Le=oe/this.chunkSize|0;return this.getter(Le)[xe]}},R.prototype.setDataGetter=function(oe){this.getter=oe},R.prototype.cacheLength=function(){var oe=new XMLHttpRequest;if(oe.open("HEAD",g,!1),oe.send(null),!(oe.status>=200&&oe.status<300||oe.status===304))throw new Error("Couldn't load "+g+". Status: "+oe.status);var xe=Number(oe.getResponseHeader("Content-length")),Le,Ce=(Le=oe.getResponseHeader("Accept-Ranges"))&&Le==="bytes",Te=(Le=oe.getResponseHeader("Content-Encoding"))&&Le==="gzip",V=1024*1024;Ce||(V=xe);var ue=(Ne,at)=>{if(Ne>at)throw new Error("invalid range ("+Ne+", "+at+") or no bytes requested!");if(at>xe-1)throw new Error("only "+xe+" bytes available! programmer error!");var Ge=new XMLHttpRequest;if(Ge.open("GET",g,!1),xe!==V&&Ge.setRequestHeader("Range","bytes="+Ne+"-"+at),Ge.responseType="arraybuffer",Ge.overrideMimeType&&Ge.overrideMimeType("text/plain; charset=x-user-defined"),Ge.send(null),!(Ge.status>=200&&Ge.status<300||Ge.status===304))throw new Error("Couldn't load "+g+". Status: "+Ge.status);return Ge.response!==void 0?new Uint8Array(Ge.response||[]):ir(Ge.responseText||"",!0)},Ue=this;Ue.setDataGetter(Ne=>{var at=Ne*V,Ge=(Ne+1)*V-1;if(Ge=Math.min(Ge,xe-1),typeof Ue.chunks[Ne]>"u"&&(Ue.chunks[Ne]=ue(at,Ge)),typeof Ue.chunks[Ne]>"u")throw new Error("doXHR failed!");return Ue.chunks[Ne]}),(Te||!xe)&&(V=xe=1,xe=this.getter(0).length,V=xe,A("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=xe,this._chunkSize=V,this.lengthKnown=!0},typeof XMLHttpRequest<"u"){if(!m)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var P=new R;Object.defineProperties(P,{length:{get:function(){return this.lengthKnown||this.cacheLength(),this._length}},chunkSize:{get:function(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}});var N={isDevice:!1,contents:P}}else var N={isDevice:!1,url:g};var te=v.createFile(u,f,N,w,C);N.contents?te.contents=N.contents:N.url&&(te.contents=null,te.url=N.url),Object.defineProperties(te,{usedBytes:{get:function(){return this.contents.length}}});var ve={},$e=Object.keys(te.stream_ops);$e.forEach(se=>{var oe=te.stream_ops[se];ve[se]=function(){return v.forceLoadFile(te),oe.apply(null,arguments)}});function Ie(se,oe,xe,Le,Ce){var Te=se.node.contents;if(Ce>=Te.length)return 0;var V=Math.min(Te.length-Ce,Le);if(Te.slice)for(var ue=0;ue<V;ue++)oe[xe+ue]=Te[Ce+ue];else for(var ue=0;ue<V;ue++)oe[xe+ue]=Te.get(Ce+ue);return V}return ve.read=(se,oe,xe,Le,Ce)=>(v.forceLoadFile(te),Ie(se,oe,xe,Le,Ce)),ve.mmap=(se,oe,xe,Le,Ce)=>{v.forceLoadFile(te);var Te=Lt(oe);if(!Te)throw new v.ErrnoError(48);return Ie(se,Z,Te,oe,xe),{ptr:Te,allocated:!0}},te.stream_ops=ve,te}},Re={DEFAULT_POLLMASK:5,calculateAt(u,f,g){if(Be.isAbs(f))return f;var w;if(u===-100)w=v.cwd();else{var C=Re.getStreamFromFD(u);w=C.path}if(f.length==0){if(!g)throw new v.ErrnoError(44);return w}return Be.join2(w,f)},doStat(u,f,g){try{var w=u(f)}catch(N){if(N&&N.node&&Be.normalize(f)!==Be.normalize(v.getPath(N.node)))return-54;throw N}X[g>>2]=w.dev,X[g+4>>2]=w.mode,ie[g+8>>2]=w.nlink,X[g+12>>2]=w.uid,X[g+16>>2]=w.gid,X[g+20>>2]=w.rdev,qe=[w.size>>>0,(re=w.size,+Math.abs(re)>=1?re>0?+Math.floor(re/4294967296)>>>0:~~+Math.ceil((re-+(~~re>>>0))/4294967296)>>>0:0)],X[g+24>>2]=qe[0],X[g+28>>2]=qe[1],X[g+32>>2]=4096,X[g+36>>2]=w.blocks;var C=w.atime.getTime(),R=w.mtime.getTime(),P=w.ctime.getTime();return qe=[Math.floor(C/1e3)>>>0,(re=Math.floor(C/1e3),+Math.abs(re)>=1?re>0?+Math.floor(re/4294967296)>>>0:~~+Math.ceil((re-+(~~re>>>0))/4294967296)>>>0:0)],X[g+40>>2]=qe[0],X[g+44>>2]=qe[1],ie[g+48>>2]=C%1e3*1e3,qe=[Math.floor(R/1e3)>>>0,(re=Math.floor(R/1e3),+Math.abs(re)>=1?re>0?+Math.floor(re/4294967296)>>>0:~~+Math.ceil((re-+(~~re>>>0))/4294967296)>>>0:0)],X[g+56>>2]=qe[0],X[g+60>>2]=qe[1],ie[g+64>>2]=R%1e3*1e3,qe=[Math.floor(P/1e3)>>>0,(re=Math.floor(P/1e3),+Math.abs(re)>=1?re>0?+Math.floor(re/4294967296)>>>0:~~+Math.ceil((re-+(~~re>>>0))/4294967296)>>>0:0)],X[g+72>>2]=qe[0],X[g+76>>2]=qe[1],ie[g+80>>2]=P%1e3*1e3,qe=[w.ino>>>0,(re=w.ino,+Math.abs(re)>=1?re>0?+Math.floor(re/4294967296)>>>0:~~+Math.ceil((re-+(~~re>>>0))/4294967296)>>>0:0)],X[g+88>>2]=qe[0],X[g+92>>2]=qe[1],0},doMsync(u,f,g,w,C){if(!v.isFile(f.node.mode))throw new v.ErrnoError(43);if(w&2)return 0;var R=de.slice(u,u+g);v.msync(f,R,C,g,w)},varargs:void 0,get(){var u=X[+Re.varargs>>2];return Re.varargs+=4,u},getp(){return Re.get()},getStr(u){var f=st(u);return f},getStreamFromFD(u){var f=v.getStreamChecked(u);return f}};function Ma(u,f,g){Re.varargs=g;try{var w=Re.getStreamFromFD(u);switch(f){case 0:{var C=Re.get();if(C<0)return-28;for(;v.streams[C];)C++;var R;return R=v.createStream(w,C),R.fd}case 1:case 2:return 0;case 3:return w.flags;case 4:{var C=Re.get();return w.flags|=C,0}case 5:{var C=Re.getp(),P=0;return ae[C+P>>1]=2,0}case 6:case 7:return 0;case 16:case 8:return-28;case 9:return wn(28),-1;default:return-28}}catch(N){if(typeof v>"u"||N.name!=="ErrnoError")throw N;return-N.errno}}var Kr=(u,f,g)=>He(u,de,f,g);function Bt(u,f,g){try{var w=Re.getStreamFromFD(u);w.getdents||(w.getdents=v.readdir(w.path));for(var C=280,R=0,P=v.llseek(w,0,1),N=Math.floor(P/C);N<w.getdents.length&&R+C<=g;){var te,ve,$e=w.getdents[N];if($e===".")te=w.node.id,ve=4;else if($e===".."){var Ie=v.lookupPath(w.path,{parent:!0});te=Ie.node.id,ve=4}else{var se=v.lookupNode(w.node,$e);te=se.id,ve=v.isChrdev(se.mode)?2:v.isDir(se.mode)?4:v.isLink(se.mode)?10:8}qe=[te>>>0,(re=te,+Math.abs(re)>=1?re>0?+Math.floor(re/4294967296)>>>0:~~+Math.ceil((re-+(~~re>>>0))/4294967296)>>>0:0)],X[f+R>>2]=qe[0],X[f+R+4>>2]=qe[1],qe=[(N+1)*C>>>0,(re=(N+1)*C,+Math.abs(re)>=1?re>0?+Math.floor(re/4294967296)>>>0:~~+Math.ceil((re-+(~~re>>>0))/4294967296)>>>0:0)],X[f+R+8>>2]=qe[0],X[f+R+12>>2]=qe[1],ae[f+R+16>>1]=280,Z[f+R+18>>0]=ve,Kr($e,f+R+19,256),R+=C,N+=1}return v.llseek(w,N*C,0),R}catch(oe){if(typeof v>"u"||oe.name!=="ErrnoError")throw oe;return-oe.errno}}function xn(u,f,g){Re.varargs=g;try{var w=Re.getStreamFromFD(u);switch(f){case 21509:return w.tty?0:-59;case 21505:{if(!w.tty)return-59;if(w.tty.ops.ioctl_tcgets){var C=w.tty.ops.ioctl_tcgets(w),R=Re.getp();X[R>>2]=C.c_iflag||0,X[R+4>>2]=C.c_oflag||0,X[R+8>>2]=C.c_cflag||0,X[R+12>>2]=C.c_lflag||0;for(var P=0;P<32;P++)Z[R+P+17>>0]=C.c_cc[P]||0;return 0}return 0}case 21510:case 21511:case 21512:return w.tty?0:-59;case 21506:case 21507:case 21508:{if(!w.tty)return-59;if(w.tty.ops.ioctl_tcsets){for(var R=Re.getp(),N=X[R>>2],te=X[R+4>>2],ve=X[R+8>>2],$e=X[R+12>>2],Ie=[],P=0;P<32;P++)Ie.push(Z[R+P+17>>0]);return w.tty.ops.ioctl_tcsets(w.tty,f,{c_iflag:N,c_oflag:te,c_cflag:ve,c_lflag:$e,c_cc:Ie})}return 0}case 21519:{if(!w.tty)return-59;var R=Re.getp();return X[R>>2]=0,0}case 21520:return w.tty?-28:-59;case 21531:{var R=Re.getp();return v.ioctl(w,f,R)}case 21523:{if(!w.tty)return-59;if(w.tty.ops.ioctl_tiocgwinsz){var se=w.tty.ops.ioctl_tiocgwinsz(w.tty),R=Re.getp();ae[R>>1]=se[0],ae[R+2>>1]=se[1]}return 0}case 21524:return w.tty?0:-59;case 21515:return w.tty?0:-59;default:return-28}}catch(oe){if(typeof v>"u"||oe.name!=="ErrnoError")throw oe;return-oe.errno}}function gt(u,f,g,w){Re.varargs=w;try{f=Re.getStr(f),f=Re.calculateAt(u,f);var C=w?Re.get():0;return v.open(f,g,C).fd}catch(R){if(typeof v>"u"||R.name!=="ErrnoError")throw R;return-R.errno}}function Xr(u){try{return u=Re.getStr(u),v.rmdir(u),0}catch(f){if(typeof v>"u"||f.name!=="ErrnoError")throw f;return-f.errno}}function Zr(u,f){try{return u=Re.getStr(u),Re.doStat(v.stat,u,f)}catch(g){if(typeof v>"u"||g.name!=="ErrnoError")throw g;return-g.errno}}function kn(u,f,g){try{return f=Re.getStr(f),f=Re.calculateAt(u,f),g===0?v.unlink(f):g===512?v.rmdir(f):Je("Invalid flags passed to unlinkat"),0}catch(w){if(typeof v>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}var wt=!0,Ba=()=>wt,En=()=>{Je("")},Pt=()=>Date.now(),Sn;Sn=()=>performance.now();var Yr=(u,f,g)=>de.copyWithin(u,f,f+g),$t=u=>{Je("OOM")},Qr=u=>{var f=de.length;u>>>=0,$t(u)},tt={},ot=()=>l||"./this.program",Wt=()=>{if(!Wt.strings){var u=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",f={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:u,_:ot()};for(var g in tt)tt[g]===void 0?delete f[g]:f[g]=tt[g];var w=[];for(var g in f)w.push(`${g}=${f[g]}`);Wt.strings=w}return Wt.strings},Tn=(u,f)=>{for(var g=0;g<u.length;++g)Z[f++>>0]=u.charCodeAt(g);Z[f>>0]=0},In=(u,f)=>{var g=0;return Wt().forEach((w,C)=>{var R=f+g;ie[u+C*4>>2]=R,Tn(w,R),g+=w.length+1}),0},zn=(u,f)=>{var g=Wt();ie[u>>2]=g.length;var w=0;return g.forEach(C=>w+=C.length+1),ie[f>>2]=w,0},Cn=0,An=()=>Mt||Cn>0,On=u=>{q=u,An()||(r.onExit&&r.onExit(u),B=!0),d(u,new Vr(u))},Pa=(u,f)=>{q=u,On(u)},Na=Pa;function Rn(u){try{var f=Re.getStreamFromFD(u);return v.close(f),0}catch(g){if(typeof v>"u"||g.name!=="ErrnoError")throw g;return g.errno}}var Dn=(u,f,g,w)=>{for(var C=0,R=0;R<g;R++){var P=ie[f>>2],N=ie[f+4>>2];f+=8;var te=v.read(u,Z,P,N,w);if(te<0)return-1;if(C+=te,te<N)break;typeof w<"u"&&(w+=te)}return C};function Mn(u,f,g,w){try{var C=Re.getStreamFromFD(u),R=Dn(C,f,g);return ie[w>>2]=R,0}catch(P){if(typeof v>"u"||P.name!=="ErrnoError")throw P;return P.errno}}var Bn=(u,f)=>f+2097152>>>0<4194305-!!u?(u>>>0)+f*4294967296:NaN;function Pn(u,f,g,w,C){var R=Bn(f,g);try{if(isNaN(R))return 61;var P=Re.getStreamFromFD(u);return v.llseek(P,R,w),qe=[P.position>>>0,(re=P.position,+Math.abs(re)>=1?re>0?+Math.floor(re/4294967296)>>>0:~~+Math.ceil((re-+(~~re>>>0))/4294967296)>>>0:0)],X[C>>2]=qe[0],X[C+4>>2]=qe[1],P.getdents&&R===0&&w===0&&(P.getdents=null),0}catch(N){if(typeof v>"u"||N.name!=="ErrnoError")throw N;return N.errno}}var Nn=(u,f,g,w)=>{for(var C=0,R=0;R<g;R++){var P=ie[f>>2],N=ie[f+4>>2];f+=8;var te=v.write(u,Z,P,N,w);if(te<0)return-1;C+=te,typeof w<"u"&&(w+=te)}return C};function Un(u,f,g,w){try{var C=Re.getStreamFromFD(u),R=Nn(C,f,g);return ie[w>>2]=R,0}catch(P){if(typeof v>"u"||P.name!=="ErrnoError")throw P;return P.errno}}var Ir=u=>u%4===0&&(u%100!==0||u%400===0),Fn=(u,f)=>{for(var g=0,w=0;w<=f;g+=u[w++]);return g},zr=[31,29,31,30,31,30,31,31,30,31,30,31],Cr=[31,28,31,30,31,30,31,31,30,31,30,31],Ar=(u,f)=>{for(var g=new Date(u.getTime());f>0;){var w=Ir(g.getFullYear()),C=g.getMonth(),R=(w?zr:Cr)[C];if(f>R-g.getDate())f-=R-g.getDate()+1,g.setDate(1),C<11?g.setMonth(C+1):(g.setMonth(0),g.setFullYear(g.getFullYear()+1));else return g.setDate(g.getDate()+f),g}return g},qn=(u,f)=>{Z.set(u,f)},Jr=(u,f,g,w)=>{var C=ie[w+40>>2],R={tm_sec:X[w>>2],tm_min:X[w+4>>2],tm_hour:X[w+8>>2],tm_mday:X[w+12>>2],tm_mon:X[w+16>>2],tm_year:X[w+20>>2],tm_wday:X[w+24>>2],tm_yday:X[w+28>>2],tm_isdst:X[w+32>>2],tm_gmtoff:X[w+36>>2],tm_zone:C?st(C):""},P=st(g),N={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var te in N)P=P.replace(new RegExp(te,"g"),N[te]);var ve=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],$e=["January","February","March","April","May","June","July","August","September","October","November","December"];function Ie(V,ue,Ue){for(var Ne=typeof V=="number"?V.toString():V||"";Ne.length<ue;)Ne=Ue[0]+Ne;return Ne}function se(V,ue){return Ie(V,ue,"0")}function oe(V,ue){function Ue(at){return at<0?-1:at>0?1:0}var Ne;return(Ne=Ue(V.getFullYear()-ue.getFullYear()))===0&&(Ne=Ue(V.getMonth()-ue.getMonth()))===0&&(Ne=Ue(V.getDate()-ue.getDate())),Ne}function xe(V){switch(V.getDay()){case 0:return new Date(V.getFullYear()-1,11,29);case 1:return V;case 2:return new Date(V.getFullYear(),0,3);case 3:return new Date(V.getFullYear(),0,2);case 4:return new Date(V.getFullYear(),0,1);case 5:return new Date(V.getFullYear()-1,11,31);case 6:return new Date(V.getFullYear()-1,11,30)}}function Le(V){var ue=Ar(new Date(V.tm_year+1900,0,1),V.tm_yday),Ue=new Date(ue.getFullYear(),0,4),Ne=new Date(ue.getFullYear()+1,0,4),at=xe(Ue),Ge=xe(Ne);return oe(at,ue)<=0?oe(Ge,ue)<=0?ue.getFullYear()+1:ue.getFullYear():ue.getFullYear()-1}var Ce={"%a":V=>ve[V.tm_wday].substring(0,3),"%A":V=>ve[V.tm_wday],"%b":V=>$e[V.tm_mon].substring(0,3),"%B":V=>$e[V.tm_mon],"%C":V=>{var ue=V.tm_year+1900;return se(ue/100|0,2)},"%d":V=>se(V.tm_mday,2),"%e":V=>Ie(V.tm_mday,2," "),"%g":V=>Le(V).toString().substring(2),"%G":V=>Le(V),"%H":V=>se(V.tm_hour,2),"%I":V=>{var ue=V.tm_hour;return ue==0?ue=12:ue>12&&(ue-=12),se(ue,2)},"%j":V=>se(V.tm_mday+Fn(Ir(V.tm_year+1900)?zr:Cr,V.tm_mon-1),3),"%m":V=>se(V.tm_mon+1,2),"%M":V=>se(V.tm_min,2),"%n":()=>`
`,"%p":V=>V.tm_hour>=0&&V.tm_hour<12?"AM":"PM","%S":V=>se(V.tm_sec,2),"%t":()=>"	","%u":V=>V.tm_wday||7,"%U":V=>{var ue=V.tm_yday+7-V.tm_wday;return se(Math.floor(ue/7),2)},"%V":V=>{var ue=Math.floor((V.tm_yday+7-(V.tm_wday+6)%7)/7);if((V.tm_wday+371-V.tm_yday-2)%7<=2&&ue++,ue){if(ue==53){var Ne=(V.tm_wday+371-V.tm_yday)%7;Ne!=4&&(Ne!=3||!Ir(V.tm_year))&&(ue=1)}}else{ue=52;var Ue=(V.tm_wday+7-V.tm_yday-1)%7;(Ue==4||Ue==5&&Ir(V.tm_year%400-1))&&ue++}return se(ue,2)},"%w":V=>V.tm_wday,"%W":V=>{var ue=V.tm_yday+7-(V.tm_wday+6)%7;return se(Math.floor(ue/7),2)},"%y":V=>(V.tm_year+1900).toString().substring(2),"%Y":V=>V.tm_year+1900,"%z":V=>{var ue=V.tm_gmtoff,Ue=ue>=0;return ue=Math.abs(ue)/60,ue=ue/60*100+ue%60,(Ue?"+":"-")+("0000"+ue).slice(-4)},"%Z":V=>V.tm_zone,"%%":()=>"%"};P=P.replace(/%%/g,"\0\0");for(var te in Ce)P.includes(te)&&(P=P.replace(new RegExp(te,"g"),Ce[te](R)));P=P.replace(/\0\0/g,"%");var Te=ir(P,!1);return Te.length>f?0:(qn(Te,u),Te.length-1)},Ln=(u,f,g,w,C)=>Jr(u,f,g,w),Wn=u=>{if(u instanceof Vr||u=="unwind")return q;d(1,u)},jn=u=>{var f=Sr(u)+1,g=Dr(f);return Kr(u,g,f),g},Ua=function(u,f,g,w){u||(u=this),this.parent=u,this.mount=u.mount,this.mounted=null,this.id=v.nextInode++,this.name=f,this.mode=g,this.node_ops={},this.stream_ops={},this.rdev=w},jt=365,sr=146;Object.defineProperties(Ua.prototype,{read:{get:function(){return(this.mode&jt)===jt},set:function(u){u?this.mode|=jt:this.mode&=~jt}},write:{get:function(){return(this.mode&sr)===sr},set:function(u){u?this.mode|=sr:this.mode&=~sr}},isFolder:{get:function(){return v.isDir(this.mode)}},isDevice:{get:function(){return v.isChrdev(this.mode)}}}),v.FSNode=Ua,v.createPreloadedFile=Ra,v.staticInit(),r.FS_createPath=v.createPath,r.FS_createDataFile=v.createDataFile,r.FS_createPreloadedFile=v.createPreloadedFile,r.FS_unlink=v.unlink,r.FS_createLazyFile=v.createLazyFile,r.FS_createDevice=v.createDevice;var Vn={a:Ea,b:bn,e:Ma,r:Bt,v:xn,f:gt,p:Xr,o:Zr,q:kn,j:Ba,h:En,g:Pt,k:Yr,n:Qr,s:In,t:zn,d:Na,c:Rn,u:Mn,l:Pn,i:Un,m:Ln},lt=Dt(),Or=()=>(Or=lt.x)(),xt=r._main=(u,f)=>(xt=r._main=lt.y)(u,f),dt=()=>(dt=lt.z)(),Fa=u=>(Fa=lt.free)(u),Rr=u=>(Rr=lt.malloc)(u),Dr=u=>(Dr=lt.B)(u),ea=u=>(ea=lt.C)(u);r.addRunDependency=Rt,r.removeRunDependency=Kt,r.FS_createPath=v.createPath,r.FS_createLazyFile=v.createLazyFile,r.FS_createDevice=v.createDevice,r.callMain=Br,r.FS_createPreloadedFile=v.createPreloadedFile,r.FS=v,r.FS_createDataFile=v.createDataFile,r.FS_unlink=v.unlink;var Mr;Ft=function u(){Mr||qa(),Mr||(Ft=u)};function Br(u=[]){var f=xt;u.unshift(l);var g=u.length,w=Dr((g+1)*4),C=w;u.forEach(P=>{ie[C>>2]=jn(P),C+=4}),ie[C>>2]=0;try{var R=f(g,w);return Pa(R,!0),R}catch(P){return Wn(P)}}function qa(u=s){if(Ye>0||(F(),Ye>0))return;function f(){Mr||(Mr=!0,r.calledRun=!0,!B&&(be(),ut(),a(r),r.onRuntimeInitialized&&r.onRuntimeInitialized(),ta&&Br(u),Ve()))}r.setStatus?(r.setStatus("Running..."),setTimeout(function(){setTimeout(function(){r.setStatus("")},1),f()},1)):f()}if(r.preInit)for(typeof r.preInit=="function"&&(r.preInit=[r.preInit]);r.preInit.length>0;)r.preInit.pop()();var ta=!1;return r.noInitialRun&&(ta=!1),qa(),t.ready})})();typeof xo=="object"&&typeof ei=="object"?ei.exports=$o:typeof define=="function"&&define.amd&&define([],()=>$o)});var jg=gh(ko());var qm={};bo(qm,{InferenceSession:()=>ys,TRACE:()=>ba,TRACE_FUNC_BEGIN:()=>At,TRACE_FUNC_END:()=>vt,Tensor:()=>Ct,default:()=>Wg,env:()=>je,registerBackend:()=>fr});var gs=Object.defineProperty,kh=Object.getOwnPropertyDescriptor,Eh=Object.getOwnPropertyNames,Sh=Object.prototype.hasOwnProperty,Th=(e=>typeof Qt<"u"?Qt:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof Qt<"u"?Qt:t)[r]}):e)(function(e){if(typeof Qt<"u")return Qt.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),K=(e,t)=>()=>(e&&(t=e(e=0)),t),jr=(e,t)=>{for(var r in t)gs(e,r,{get:t[r],enumerable:!0})},Ih=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Eh(t))!Sh.call(e,n)&&n!==r&&gs(e,n,{get:()=>t[n],enumerable:!(a=kh(t,n))||a.enumerable});return e},va=e=>Ih(gs({},"__esModule",{value:!0}),e),na,Jt,fr,Eo,ap,np=K(()=>{"use strict";na=new Map,Jt=[],fr=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let a=na.get(e);if(a===void 0)na.set(e,{backend:t,priority:r});else{if(a.priority>r)return;if(a.priority===r&&a.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=Jt.indexOf(e);n!==-1&&Jt.splice(n,1);for(let i=0;i<Jt.length;i++)if(na.get(Jt[i]).priority<=r){Jt.splice(i,0,e);return}Jt.push(e)}return}throw new TypeError("not a valid backend")},Eo=async e=>{let t=na.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(a){return r||(t.error=`${a}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},ap=async e=>{let t=e.executionProviders||[],r=t.map(d=>typeof d=="string"?d:d.name),a=r.length===0?Jt:r,n,i=[],s=new Set;for(let d of a){let p=await Eo(d);typeof p=="string"?i.push({name:d,err:p}):(n||(n=p),n===p&&s.add(d))}if(!n)throw new Error(`no available backend found. ERR: ${i.map(d=>`[${d.name}] ${d.err}`).join(", ")}`);for(let{name:d,err:p}of i)r.includes(d)&&console.warn(`removing requested execution provider "${d}" from session options because it is not available: ${p}`);let l=t.filter(d=>s.has(typeof d=="string"?d:d.name));return[n,new Proxy(e,{get:(d,p)=>p==="executionProviders"?l:Reflect.get(d,p)})]}}),zh=K(()=>{"use strict";np()}),ip,Ch=K(()=>{"use strict";ip="1.22.0-dev.20250409-89f8206ba4"}),ti,yt,sp=K(()=>{"use strict";Ch(),ti="warning",yt={wasm:{},webgl:{},webgpu:{},versions:{common:ip},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);ti=e}},get logLevel(){return ti}},Object.defineProperty(yt,"logLevel",{enumerable:!0})}),je,Ah=K(()=>{"use strict";sp(),je=yt}),op,up,Oh=K(()=>{"use strict";op=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let a=r.getContext("2d");if(a!=null){let n,i;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],i=e.dims[3]):(n=e.dims[3],i=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",l=t?.norm,d,p;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],0],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?p=[0,0,0,0]:typeof l.bias=="number"?p=[l.bias,l.bias,l.bias,l.bias]:(p=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(p[3]=l.bias[3]));let m=i*n,h=0,_=m,$=m*2,b=-1;s==="RGBA"?(h=0,_=m,$=m*2,b=m*3):s==="RGB"?(h=0,_=m,$=m*2):s==="RBG"&&(h=0,$=m,_=m*2);for(let E=0;E<i;E++)for(let I=0;I<n;I++){let T=(e.data[h++]-p[0])*d[0],k=(e.data[_++]-p[1])*d[1],A=(e.data[$++]-p[2])*d[2],z=b===-1?255:(e.data[b++]-p[3])*d[3];a.fillStyle="rgba("+T+","+k+","+A+","+z+")",a.fillRect(I,E,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},up=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),a;if(r!=null){let n,i,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],i=e.dims[1],s=e.dims[3]):(n=e.dims[3],i=e.dims[2],s=e.dims[1]);let l=t!==void 0&&t.format!==void 0?t.format:"RGB",d=t?.norm,p,m;d===void 0||d.mean===void 0?p=[255,255,255,255]:typeof d.mean=="number"?p=[d.mean,d.mean,d.mean,d.mean]:(p=[d.mean[0],d.mean[1],d.mean[2],255],d.mean[3]!==void 0&&(p[3]=d.mean[3])),d===void 0||d.bias===void 0?m=[0,0,0,0]:typeof d.bias=="number"?m=[d.bias,d.bias,d.bias,d.bias]:(m=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(m[3]=d.bias[3]));let h=i*n;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let _=4,$=0,b=1,E=2,I=3,T=0,k=h,A=h*2,z=-1;l==="RGBA"?(T=0,k=h,A=h*2,z=h*3):l==="RGB"?(T=0,k=h,A=h*2):l==="RBG"&&(T=0,A=h,k=h*2),a=r.createImageData(n,i);for(let O=0;O<i*n;$+=_,b+=_,E+=_,I+=_,O++)a.data[$]=(e.data[T++]-m[0])*p[0],a.data[b]=(e.data[k++]-m[1])*p[1],a.data[E]=(e.data[A++]-m[2])*p[2],a.data[I]=z===-1?255:(e.data[z++]-m[3])*p[3]}else throw new Error("Can not access image data");return a}}),Za,lp,dp,pp,cp,fp,Rh=K(()=>{"use strict";_s(),Za=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:a}=t,n=t.norm??{mean:255,bias:0},i,s;typeof n.mean=="number"?i=[n.mean,n.mean,n.mean,n.mean]:i=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?s=[n.bias,n.bias,n.bias,n.bias]:s=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let l=t.format!==void 0?t.format:"RGBA",d=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",p=r*a,m=d==="RGBA"?new Float32Array(p*4):new Float32Array(p*3),h=4,_=0,$=1,b=2,E=3,I=0,T=p,k=p*2,A=-1;l==="RGB"&&(h=3,_=0,$=1,b=2,E=-1),d==="RGBA"?A=p*3:d==="RBG"?(I=0,k=p,T=p*2):d==="BGR"&&(k=0,T=p,I=p*2);for(let z=0;z<p;z++,_+=h,b+=h,$+=h,E+=h)m[I++]=(e[_]+s[0])/i[0],m[T++]=(e[$]+s[1])/i[1],m[k++]=(e[b]+s[2])/i[2],A!==-1&&E!==-1&&(m[A++]=(e[E]+s[3])/i[3]);return d==="RGBA"?new ct("float32",m,[1,4,r,a]):new ct("float32",m,[1,3,r,a])},lp=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,a=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,i=typeof e=="string",s,l=t??{},d=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},p=m=>typeof HTMLCanvasElement<"u"&&m instanceof HTMLCanvasElement||m instanceof OffscreenCanvas?m.getContext("2d"):null;if(r){let m=d();m.width=e.width,m.height=e.height;let h=p(m);if(h!=null){let _=e.height,$=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(_=t.resizedHeight,$=t.resizedWidth),t!==void 0){if(l=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");l.tensorFormat="RGBA",l.height=_,l.width=$}else l.tensorFormat="RGBA",l.height=_,l.width=$;h.drawImage(e,0,0),s=h.getImageData(0,0,$,_).data}else throw new Error("Can not access image data")}else if(a){let m,h;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(m=t.resizedHeight,h=t.resizedWidth):(m=e.height,h=e.width),t!==void 0&&(l=t),l.format="RGBA",l.height=m,l.width=h,t!==void 0){let _=d();_.width=h,_.height=m;let $=p(_);if($!=null)$.putImageData(e,0,0),s=$.getImageData(0,0,h,m).data;else throw new Error("Can not access image data")}else s=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let m=d();m.width=e.width,m.height=e.height;let h=p(m);if(h!=null){let _=e.height,$=e.width;return h.drawImage(e,0,0,$,_),s=h.getImageData(0,0,$,_).data,l.height=_,l.width=$,Za(s,l)}else throw new Error("Can not access image data")}else{if(i)return new Promise((m,h)=>{let _=d(),$=p(_);if(!e||!$)return h();let b=new Image;b.crossOrigin="Anonymous",b.src=e,b.onload=()=>{_.width=b.width,_.height=b.height,$.drawImage(b,0,0,_.width,_.height);let E=$.getImageData(0,0,_.width,_.height);l.height=_.height,l.width=_.width,m(Za(E.data,l))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Za(s,l);throw new Error("Input data provided is not supported - aborted tensor creation")},dp=(e,t)=>{let{width:r,height:a,download:n,dispose:i}=t,s=[1,a,r,4];return new ct({location:"texture",type:"float32",texture:e,dims:s,download:n,dispose:i})},pp=(e,t)=>{let{dataType:r,dims:a,download:n,dispose:i}=t;return new ct({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:a,download:n,dispose:i})},cp=(e,t)=>{let{dataType:r,dims:a,download:n,dispose:i}=t;return new ct({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:a,download:n,dispose:i})},fp=(e,t,r)=>new ct({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),pr,ma,ri,mp,Dh=K(()=>{"use strict";pr=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),ma=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),ri=!1,mp=()=>{if(!ri){ri=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,a=typeof r<"u"&&r.from;e&&(pr.set("int64",BigInt64Array),ma.set(BigInt64Array,"int64")),t&&(pr.set("uint64",BigUint64Array),ma.set(BigUint64Array,"uint64")),a?(pr.set("float16",r),ma.set(r,"float16")):pr.set("float16",Uint16Array)}}}),hp,gp,Mh=K(()=>{"use strict";_s(),hp=e=>{let t=1;for(let r=0;r<e.length;r++){let a=e[r];if(typeof a!="number"||!Number.isSafeInteger(a))throw new TypeError(`dims[${r}] must be an integer, got: ${a}`);if(a<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${a}`);t*=a}return t},gp=(e,t)=>{switch(e.location){case"cpu":return new ct(e.type,e.data,t);case"cpu-pinned":return new ct({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new ct({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new ct({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new ct({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),ct,_s=K(()=>{"use strict";Oh(),Rh(),Dh(),Mh(),ct=class{constructor(e,t,r){mp();let a,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,a=e.type,n=e.dims,e.location){case"cpu-pinned":{let s=pr.get(a);if(!s)throw new TypeError(`unsupported type "${a}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(a!=="float32")throw new TypeError(`unsupported type "${a}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(a!=="float32"&&a!=="float16"&&a!=="int32"&&a!=="int64"&&a!=="uint32"&&a!=="uint64"&&a!=="int8"&&a!=="uint8"&&a!=="bool"&&a!=="uint4"&&a!=="int4")throw new TypeError(`unsupported type "${a}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,l;if(typeof e=="string")if(a=e,l=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let d=pr.get(e);if(d===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&d===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${d.name} as data.`);e==="uint64"||e==="int64"?s=d.from(t,BigInt):s=d.from(t)}else if(t instanceof d)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&d!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${a} tensor's data must be type of ${d}`)}else if(l=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let d=typeof e[0];if(d==="string")a="string",s=e;else if(d==="boolean")a="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${d}.`)}else if(e instanceof Uint8ClampedArray)a="uint8",s=Uint8Array.from(e);else{let d=ma.get(e.constructor);if(d===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);a=d,s=e}if(l===void 0)l=[s.length];else if(!Array.isArray(l))throw new TypeError("A tensor's dims must be a number array");n=l,this.cpuData=s,this.dataLocation="cpu"}let i=hp(n);if(this.cpuData&&i!==this.cpuData.length&&!((a==="uint4"||a==="int4")&&Math.ceil(i/2)===this.cpuData.length))throw new Error(`Tensor's size(${i}) does not match data length(${this.cpuData.length}).`);this.type=a,this.dims=n,this.size=i}static async fromImage(e,t){return lp(e,t)}static fromTexture(e,t){return dp(e,t)}static fromGpuBuffer(e,t){return pp(e,t)}static fromMLTensor(e,t){return cp(e,t)}static fromPinnedBuffer(e,t,r){return fp(e,t,r)}toDataURL(e){return op(this,e)}toImageData(e){return up(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return gp(this,e)}}}),Ct,_p=K(()=>{"use strict";_s(),Ct=ct}),ba,ai,At,vt,yp=K(()=>{"use strict";sp(),ba=(e,t)=>{(typeof yt.trace>"u"?!yt.wasm.trace:!yt.trace)||console.timeStamp(`${e}::ORT::${t}`)},ai=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],a=!1;for(let n=0;n<r.length;n++){if(a&&!r[n].includes("TRACE_FUNC")){let i=`FUNC_${e}::${r[n].trim().split(" ")[1]}`;t&&(i+=`::${t}`),ba("CPU",i);return}r[n].includes("TRACE_FUNC")&&(a=!0)}},At=e=>{(typeof yt.trace>"u"?!yt.wasm.trace:!yt.trace)||ai("BEGIN",e)},vt=e=>{(typeof yt.trace>"u"?!yt.wasm.trace:!yt.trace)||ai("END",e)}}),vp,Bh=K(()=>{"use strict";np(),_p(),yp(),vp=class bp{constructor(t){this.handler=t}async run(t,r,a){At();let n={},i={};if(typeof t!="object"||t===null||t instanceof Ct||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Ct)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let p of r){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);n[p]=null}if(typeof a=="object"&&a!==null)i=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,m=Object.getOwnPropertyNames(r);for(let h of this.outputNames)if(m.indexOf(h)!==-1){let _=r[h];(_===null||_ instanceof Ct)&&(p=!0,s=!1,n[h]=_)}if(p){if(typeof a=="object"&&a!==null)i=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else i=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of this.inputNames)if(typeof t[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(s)for(let p of this.outputNames)n[p]=null;let l=await this.handler.run(t,n,i),d={};for(let p in l)if(Object.hasOwnProperty.call(l,p)){let m=l[p];m instanceof Ct?d[p]=m:d[p]=new Ct(m.type,m.data,m.dims)}return vt(),d}async release(){return this.handler.dispose()}static async create(t,r,a,n){At();let i,s={};if(typeof t=="string"){if(i=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(i=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let m=t,h=0,_=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(h=r,!Number.isSafeInteger(h))throw new RangeError("'byteOffset' must be an integer.");if(h<0||h>=m.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${m.byteLength}).`);if(_=t.byteLength-h,typeof a=="number"){if(_=a,!Number.isSafeInteger(_))throw new RangeError("'byteLength' must be an integer.");if(_<=0||h+_>m.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${m.byteLength-h}].`);if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof a<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");i=new Uint8Array(m,h,_)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,d]=await ap(s),p=await l.createInferenceSessionHandler(i,d);return vt(),new bp(p)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),ys,Ph=K(()=>{"use strict";Bh(),ys=vp}),Nh=K(()=>{"use strict"}),Uh=K(()=>{"use strict"}),Fh=K(()=>{"use strict"}),qh=K(()=>{"use strict"}),wp={};jr(wp,{InferenceSession:()=>ys,TRACE:()=>ba,TRACE_FUNC_BEGIN:()=>At,TRACE_FUNC_END:()=>vt,Tensor:()=>Ct,env:()=>je,registerBackend:()=>fr});var Ot=K(()=>{"use strict";zh(),Ah(),Ph(),_p(),Nh(),Uh(),yp(),Fh(),qh()}),vs=K(()=>{"use strict"}),$p={};jr($p,{default:()=>xp});var ni,ii,xp,Lh=K(()=>{"use strict";zm(),_r(),bs(),ni="ort-wasm-proxy-worker",ii=globalThis.self?.name===ni,ii&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":ws(r.wasm).then(()=>{Us(r).then(()=>{postMessage({type:t})},a=>{postMessage({type:t,err:a})})},a=>{postMessage({type:t,err:a})});break;case"init-ep":{let{epName:a,env:n}=r;Fs(n,a).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})});break}case"copy-from":{let{buffer:a}=r,n=vn(a);postMessage({type:t,out:n});break}case"create":{let{model:a,options:n}=r;qs(a,n).then(i=>{postMessage({type:t,out:i})},i=>{postMessage({type:t,err:i})});break}case"release":Ls(r),postMessage({type:t});break;case"run":{let{sessionId:a,inputIndices:n,inputs:i,outputIndices:s,options:l}=r;Ws(a,n,i,s,new Array(s.length).fill(null),l).then(d=>{d.some(p=>p[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:d},Vs([...i,...d]))},d=>{postMessage({type:t,err:d})});break}case"end-profiling":js(r),postMessage({type:t});break;default:}}catch(a){postMessage({type:t,err:a})}}),xp=ii?null:e=>new Worker(e??pt,{type:"module",name:ni})}),kp={};jr(kp,{default:()=>Ep});var si,oi,Ep,So,Wh=K(()=>{"use strict";oi=(si=import.meta.url,async function(e={}){var t,r,a=e,n=new Promise((o,c)=>{t=o,r=c}),i=typeof window=="object",s=typeof WorkerGlobalScope<"u",l=s&&self.name?.startsWith("em-pthread");a.mountExternalData=(o,c)=>{o.startsWith("./")&&(o=o.substring(2)),(a.Eb||(a.Eb=new Map)).set(o,c)},a.unmountExternalData=()=>{delete a.Eb};var d=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,pc:!0}).buffer.constructor;let p=o=>async(...c)=>{try{if(a.Fb)throw Error("Session already started");let y=a.Fb={dc:c[0],errors:[]},x=await o(...c);if(a.Fb!==y)throw Error("Session mismatch");a.Jb?.flush();let S=y.errors;if(0<S.length){let D=await Promise.all(S);if(D=D.filter(L=>L),0<D.length)throw Error(D.join(`
`))}return x}finally{a.Fb=null}};a.jsepInit=(o,c)=>{if(o==="webgpu"){[a.Jb,a.Ub,a.Yb,a.Kb,a.Xb,a.jb,a.Zb,a.ac,a.Vb,a.Wb,a.$b]=c;let y=a.Jb;a.jsepRegisterBuffer=(x,S,D,L)=>y.registerBuffer(x,S,D,L),a.jsepGetBuffer=x=>y.getBuffer(x),a.jsepCreateDownloader=(x,S,D)=>y.createDownloader(x,S,D),a.jsepOnCreateSession=x=>{y.onCreateSession(x)},a.jsepOnReleaseSession=x=>{y.onReleaseSession(x)},a.jsepOnRunStart=x=>y.onRunStart(x),a.bc=(x,S)=>{y.upload(x,S)}}else if(o==="webnn"){let y=c[0];[a.nc,a.Nb,a.webnnEnsureTensor,a.Ob,a.webnnDownloadTensor]=c.slice(1),a.webnnReleaseTensorId=a.Nb,a.webnnUploadTensor=a.Ob,a.webnnOnRunStart=x=>y.onRunStart(x),a.webnnOnRunEnd=y.onRunEnd.bind(y),a.webnnRegisterMLContext=(x,S)=>{y.registerMLContext(x,S)},a.webnnOnReleaseSession=x=>{y.onReleaseSession(x)},a.webnnCreateMLTensorDownloader=(x,S)=>y.createMLTensorDownloader(x,S),a.webnnRegisterMLTensor=(x,S,D,L)=>y.registerMLTensor(x,S,D,L),a.webnnCreateMLContext=x=>y.createMLContext(x),a.webnnRegisterMLConstant=(x,S,D,L,G,ee)=>y.registerMLConstant(x,S,D,L,G,a.Eb,ee),a.webnnRegisterGraphInput=y.registerGraphInput.bind(y),a.webnnIsGraphInput=y.isGraphInput.bind(y),a.webnnCreateTemporaryTensor=y.createTemporaryTensor.bind(y),a.webnnIsInt64Supported=y.isInt64Supported.bind(y)}};let m=()=>{let o=(c,y,x)=>(...S)=>{let D=dt,L=y?.();S=c(...S);let G=y?.();return L!==G&&(c=G,x(L),y=x=null),dt!=D?new Promise((ee,pe)=>{Br={resolve:ee,reject:pe}}):S};(()=>{for(let c of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])a[c]=o(a[c],()=>a[c],y=>a[c]=y)})(),p!==void 0&&(a._OrtRun=p(a._OrtRun),a._OrtRunWithBinding=p(a._OrtRunWithBinding)),m=void 0};a.asyncInit=()=>{m?.()};var h,_,$=Object.assign({},a),b=(o,c)=>{throw c},E="";(i||s)&&(s?E=self.location.href:typeof document<"u"&&document.currentScript&&(E=document.currentScript.src),si&&(E=si),E=E.startsWith("blob:")?"":E.slice(0,E.replace(/[?#].*/,"").lastIndexOf("/")+1),s&&(_=o=>{var c=new XMLHttpRequest;return c.open("GET",o,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),h=async o=>{if(fe(o))return new Promise((y,x)=>{var S=new XMLHttpRequest;S.open("GET",o,!0),S.responseType="arraybuffer",S.onload=()=>{S.status==200||S.status==0&&S.response?y(S.response):x(S.status)},S.onerror=x,S.send(null)});var c=await fetch(o,{credentials:"same-origin"});if(c.ok)return c.arrayBuffer();throw Error(c.status+" : "+c.url)});var I=console.log.bind(console),T=console.error.bind(console),k=I,A=T;Object.assign(a,$),$=null;var z,O,M,B,q,H,Z,de,ae,Y,X,ie,J,me=a.wasmBinary,ye=!1,fe=o=>o.startsWith("file://");function Me(){return z.buffer!=B.buffer&&Ye(),B}function j(){return z.buffer!=B.buffer&&Ye(),q}function Q(){return z.buffer!=B.buffer&&Ye(),H}function _e(){return z.buffer!=B.buffer&&Ye(),Z}function F(){return z.buffer!=B.buffer&&Ye(),de}function be(){return z.buffer!=B.buffer&&Ye(),ae}function ut(){return z.buffer!=B.buffer&&Ye(),Y}function Ve(){return z.buffer!=B.buffer&&Ye(),J}if(l){let o=function(c){try{var y=c.data,x=y.Bb;if(x==="load"){let S=[];self.onmessage=D=>S.push(D),self.startWorker=()=>{postMessage({Bb:"loaded"});for(let D of S)o(D);self.onmessage=o};for(let D of y.Rb)a[D]&&!a[D].proxy||(a[D]=(...L)=>{postMessage({Bb:"callHandler",Qb:D,args:L})},D=="print"&&(k=a[D]),D=="printErr"&&(A=a[D]));z=y.kc,Ye(),mt(y.lc)}else if(x==="run"){bn(y.Ab),Xn(y.Ab,0,0,1,0,0),Sa(),Cr(y.Ab),nr||(oo(),nr=!0);try{wn(y.fc,y.Hb)}catch(S){if(S!="unwind")throw S}}else y.target!=="setimmediate"&&(x==="checkMailbox"?nr&&Ar():x&&(A(`worker: received unknown command ${x}`),A(y)))}catch(S){throw uo(),S}};var Ze=o,mt,nr=!1;A=function(...c){c=c.join(" "),console.error(c)},self.alert=function(...c){postMessage({Bb:"alert",text:c.join(" "),ic:ja()})},self.onunhandledrejection=c=>{throw c.reason||c},self.onmessage=o}function Ye(){var o=z.buffer;a.HEAP8=B=new Int8Array(o),a.HEAP16=H=new Int16Array(o),a.HEAPU8=q=new Uint8Array(o),a.HEAPU16=Z=new Uint16Array(o),a.HEAP32=de=new Int32Array(o),a.HEAPU32=ae=new Uint32Array(o),a.HEAPF32=Y=new Float32Array(o),a.HEAPF64=J=new Float64Array(o),a.HEAP64=X=new BigInt64Array(o),a.HEAPU64=ie=new BigUint64Array(o)}function vr(){l?startWorker(a):he.Ca()}l||(z=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Ye());var Ft,br=0,Rt=null;function Kt(){if(--br==0&&Rt){var o=Rt;Rt=null,o()}}function Je(o){throw A(o="Aborted("+o+")"),ye=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),r(o),o}function $a(){return{a:{L:Xt,Aa:$r,b:$n,$:ht,A:ir,pa:Ia,X:Ee,Z:za,qa:Ca,na:Aa,ga:Oa,ma:Ra,J:Da,Y:Tr,V:v,oa:Re,W:Ma,va:xn,E:En,Q:Sn,O:In,D:Cn,u:An,r:On,P:Pa,z:Un,R:Ir,ja:Fn,T:qn,aa:Ln,M:Wn,F:jn,ia:Cr,sa:Ua,t:Vn,Ba:lt,w:u,o:g,l:R,c:Qr,n:N,j:Ie,v:se,p:oe,f:xe,s:Le,m:Ce,e:Te,k:V,i:ue,g:Ue,d:Ne,da:at,ea:Lm,fa:Wm,ba:Gs,ca:Ks,N:Xs,xa:Vm,ua:Km,h:Xm,C:Zm,G:Ym,ta:Hm,x:Qm,ra:Jm,U:eh,q:jm,y:th,K:rh,S:ah,za:nh,ya:ih,ka:Js,la:eo,_:Zt,B:to,I:ro,ha:ao,H:no,a:z,wa:qe}}}var wr={829644:(o,c,y,x,S)=>{if(a===void 0||!a.Eb)return 1;if((o=He(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=a.Eb.get(o)))return 2;if(c=Number(c>>>0),y=Number(y>>>0),x=Number(x>>>0),c+y>o.byteLength)return 3;try{let D=o.subarray(c,c+y);switch(S){case 0:j().set(D,x>>>0);break;case 1:a.mc?a.mc(x,D):a.bc(x,D);break;default:return 4}return 0}catch{return 4}},830468:(o,c,y)=>{a.Ob(o,j().subarray(c>>>0,c+y>>>0))},830532:()=>a.nc(),830574:o=>{a.Nb(o)},830611:()=>{a.Vb()},830642:()=>{a.Wb()},830671:()=>{a.$b()},830696:o=>a.Ub(o),830729:o=>a.Yb(o),830761:(o,c,y)=>{a.Kb(Number(o),Number(c),Number(y),!0)},830824:(o,c,y)=>{a.Kb(Number(o),Number(c),Number(y))},830881:()=>typeof wasmOffsetConverter<"u",830938:o=>{a.jb("Abs",o,void 0)},830989:o=>{a.jb("Neg",o,void 0)},831040:o=>{a.jb("Floor",o,void 0)},831093:o=>{a.jb("Ceil",o,void 0)},831145:o=>{a.jb("Reciprocal",o,void 0)},831203:o=>{a.jb("Sqrt",o,void 0)},831255:o=>{a.jb("Exp",o,void 0)},831306:o=>{a.jb("Erf",o,void 0)},831357:o=>{a.jb("Sigmoid",o,void 0)},831412:(o,c,y)=>{a.jb("HardSigmoid",o,{alpha:c,beta:y})},831491:o=>{a.jb("Log",o,void 0)},831542:o=>{a.jb("Sin",o,void 0)},831593:o=>{a.jb("Cos",o,void 0)},831644:o=>{a.jb("Tan",o,void 0)},831695:o=>{a.jb("Asin",o,void 0)},831747:o=>{a.jb("Acos",o,void 0)},831799:o=>{a.jb("Atan",o,void 0)},831851:o=>{a.jb("Sinh",o,void 0)},831903:o=>{a.jb("Cosh",o,void 0)},831955:o=>{a.jb("Asinh",o,void 0)},832008:o=>{a.jb("Acosh",o,void 0)},832061:o=>{a.jb("Atanh",o,void 0)},832114:o=>{a.jb("Tanh",o,void 0)},832166:o=>{a.jb("Not",o,void 0)},832217:(o,c,y)=>{a.jb("Clip",o,{min:c,max:y})},832286:o=>{a.jb("Clip",o,void 0)},832338:(o,c)=>{a.jb("Elu",o,{alpha:c})},832396:o=>{a.jb("Gelu",o,void 0)},832448:o=>{a.jb("Relu",o,void 0)},832500:(o,c)=>{a.jb("LeakyRelu",o,{alpha:c})},832564:(o,c)=>{a.jb("ThresholdedRelu",o,{alpha:c})},832634:(o,c)=>{a.jb("Cast",o,{to:c})},832692:o=>{a.jb("Add",o,void 0)},832743:o=>{a.jb("Sub",o,void 0)},832794:o=>{a.jb("Mul",o,void 0)},832845:o=>{a.jb("Div",o,void 0)},832896:o=>{a.jb("Pow",o,void 0)},832947:o=>{a.jb("Equal",o,void 0)},833e3:o=>{a.jb("Greater",o,void 0)},833055:o=>{a.jb("GreaterOrEqual",o,void 0)},833117:o=>{a.jb("Less",o,void 0)},833169:o=>{a.jb("LessOrEqual",o,void 0)},833228:(o,c,y,x,S)=>{a.jb("ReduceMean",o,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:x?Array.from(F().subarray(Number(x)>>>0,Number(S)>>>0)):[]})},833403:(o,c,y,x,S)=>{a.jb("ReduceMax",o,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:x?Array.from(F().subarray(Number(x)>>>0,Number(S)>>>0)):[]})},833577:(o,c,y,x,S)=>{a.jb("ReduceMin",o,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:x?Array.from(F().subarray(Number(x)>>>0,Number(S)>>>0)):[]})},833751:(o,c,y,x,S)=>{a.jb("ReduceProd",o,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:x?Array.from(F().subarray(Number(x)>>>0,Number(S)>>>0)):[]})},833926:(o,c,y,x,S)=>{a.jb("ReduceSum",o,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:x?Array.from(F().subarray(Number(x)>>>0,Number(S)>>>0)):[]})},834100:(o,c,y,x,S)=>{a.jb("ReduceL1",o,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:x?Array.from(F().subarray(Number(x)>>>0,Number(S)>>>0)):[]})},834273:(o,c,y,x,S)=>{a.jb("ReduceL2",o,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:x?Array.from(F().subarray(Number(x)>>>0,Number(S)>>>0)):[]})},834446:(o,c,y,x,S)=>{a.jb("ReduceLogSum",o,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:x?Array.from(F().subarray(Number(x)>>>0,Number(S)>>>0)):[]})},834623:(o,c,y,x,S)=>{a.jb("ReduceSumSquare",o,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:x?Array.from(F().subarray(Number(x)>>>0,Number(S)>>>0)):[]})},834803:(o,c,y,x,S)=>{a.jb("ReduceLogSumExp",o,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:x?Array.from(F().subarray(Number(x)>>>0,Number(S)>>>0)):[]})},834983:o=>{a.jb("Where",o,void 0)},835036:(o,c,y)=>{a.jb("Transpose",o,{perm:c?Array.from(F().subarray(Number(c)>>>0,Number(y)>>>0)):[]})},835160:(o,c,y,x)=>{a.jb("DepthToSpace",o,{blocksize:c,mode:He(y),format:x?"NHWC":"NCHW"})},835293:(o,c,y,x)=>{a.jb("DepthToSpace",o,{blocksize:c,mode:He(y),format:x?"NHWC":"NCHW"})},835426:(o,c,y,x,S,D,L,G,ee,pe,Se,Ae,Fe,rt,Nr)=>{a.jb("ConvTranspose",o,{format:ee?"NHWC":"NCHW",autoPad:c,dilations:[y],group:x,kernelShape:[S],pads:[D,L],strides:[G],wIsConst:()=>!!Me()[pe>>>0],outputPadding:Se?Array.from(F().subarray(Number(Se)>>>0,Number(Ae)>>>0)):[],outputShape:Fe?Array.from(F().subarray(Number(Fe)>>>0,Number(rt)>>>0)):[],activation:He(Nr)})},835859:(o,c,y,x,S,D,L,G,ee,pe,Se,Ae,Fe,rt)=>{a.jb("ConvTranspose",o,{format:G?"NHWC":"NCHW",autoPad:c,dilations:Array.from(F().subarray(Number(y)>>>0,2+(Number(y)>>>0)>>>0)),group:x,kernelShape:Array.from(F().subarray(Number(S)>>>0,2+(Number(S)>>>0)>>>0)),pads:Array.from(F().subarray(Number(D)>>>0,4+(Number(D)>>>0)>>>0)),strides:Array.from(F().subarray(Number(L)>>>0,2+(Number(L)>>>0)>>>0)),wIsConst:()=>!!Me()[ee>>>0],outputPadding:pe?Array.from(F().subarray(Number(pe)>>>0,Number(Se)>>>0)):[],outputShape:Ae?Array.from(F().subarray(Number(Ae)>>>0,Number(Fe)>>>0)):[],activation:He(rt)})},836520:(o,c,y,x,S,D,L,G,ee,pe,Se,Ae,Fe,rt,Nr)=>{a.jb("ConvTranspose",o,{format:ee?"NHWC":"NCHW",autoPad:c,dilations:[y],group:x,kernelShape:[S],pads:[D,L],strides:[G],wIsConst:()=>!!Me()[pe>>>0],outputPadding:Se?Array.from(F().subarray(Number(Se)>>>0,Number(Ae)>>>0)):[],outputShape:Fe?Array.from(F().subarray(Number(Fe)>>>0,Number(rt)>>>0)):[],activation:He(Nr)})},836953:(o,c,y,x,S,D,L,G,ee,pe,Se,Ae,Fe,rt)=>{a.jb("ConvTranspose",o,{format:G?"NHWC":"NCHW",autoPad:c,dilations:Array.from(F().subarray(Number(y)>>>0,2+(Number(y)>>>0)>>>0)),group:x,kernelShape:Array.from(F().subarray(Number(S)>>>0,2+(Number(S)>>>0)>>>0)),pads:Array.from(F().subarray(Number(D)>>>0,4+(Number(D)>>>0)>>>0)),strides:Array.from(F().subarray(Number(L)>>>0,2+(Number(L)>>>0)>>>0)),wIsConst:()=>!!Me()[ee>>>0],outputPadding:pe?Array.from(F().subarray(Number(pe)>>>0,Number(Se)>>>0)):[],outputShape:Ae?Array.from(F().subarray(Number(Ae)>>>0,Number(Fe)>>>0)):[],activation:He(rt)})},837614:(o,c)=>{a.jb("GlobalAveragePool",o,{format:c?"NHWC":"NCHW"})},837705:(o,c,y,x,S,D,L,G,ee,pe,Se,Ae,Fe,rt)=>{a.jb("AveragePool",o,{format:rt?"NHWC":"NCHW",auto_pad:c,ceil_mode:y,count_include_pad:x,storage_order:S,dilations:D?Array.from(F().subarray(Number(D)>>>0,Number(L)>>>0)):[],kernel_shape:G?Array.from(F().subarray(Number(G)>>>0,Number(ee)>>>0)):[],pads:pe?Array.from(F().subarray(Number(pe)>>>0,Number(Se)>>>0)):[],strides:Ae?Array.from(F().subarray(Number(Ae)>>>0,Number(Fe)>>>0)):[]})},838184:(o,c)=>{a.jb("GlobalAveragePool",o,{format:c?"NHWC":"NCHW"})},838275:(o,c,y,x,S,D,L,G,ee,pe,Se,Ae,Fe,rt)=>{a.jb("AveragePool",o,{format:rt?"NHWC":"NCHW",auto_pad:c,ceil_mode:y,count_include_pad:x,storage_order:S,dilations:D?Array.from(F().subarray(Number(D)>>>0,Number(L)>>>0)):[],kernel_shape:G?Array.from(F().subarray(Number(G)>>>0,Number(ee)>>>0)):[],pads:pe?Array.from(F().subarray(Number(pe)>>>0,Number(Se)>>>0)):[],strides:Ae?Array.from(F().subarray(Number(Ae)>>>0,Number(Fe)>>>0)):[]})},838754:(o,c)=>{a.jb("GlobalMaxPool",o,{format:c?"NHWC":"NCHW"})},838841:(o,c,y,x,S,D,L,G,ee,pe,Se,Ae,Fe,rt)=>{a.jb("MaxPool",o,{format:rt?"NHWC":"NCHW",auto_pad:c,ceil_mode:y,count_include_pad:x,storage_order:S,dilations:D?Array.from(F().subarray(Number(D)>>>0,Number(L)>>>0)):[],kernel_shape:G?Array.from(F().subarray(Number(G)>>>0,Number(ee)>>>0)):[],pads:pe?Array.from(F().subarray(Number(pe)>>>0,Number(Se)>>>0)):[],strides:Ae?Array.from(F().subarray(Number(Ae)>>>0,Number(Fe)>>>0)):[]})},839316:(o,c)=>{a.jb("GlobalMaxPool",o,{format:c?"NHWC":"NCHW"})},839403:(o,c,y,x,S,D,L,G,ee,pe,Se,Ae,Fe,rt)=>{a.jb("MaxPool",o,{format:rt?"NHWC":"NCHW",auto_pad:c,ceil_mode:y,count_include_pad:x,storage_order:S,dilations:D?Array.from(F().subarray(Number(D)>>>0,Number(L)>>>0)):[],kernel_shape:G?Array.from(F().subarray(Number(G)>>>0,Number(ee)>>>0)):[],pads:pe?Array.from(F().subarray(Number(pe)>>>0,Number(Se)>>>0)):[],strides:Ae?Array.from(F().subarray(Number(Ae)>>>0,Number(Fe)>>>0)):[]})},839878:(o,c,y,x,S)=>{a.jb("Gemm",o,{alpha:c,beta:y,transA:x,transB:S})},839982:o=>{a.jb("MatMul",o,void 0)},840036:(o,c,y,x)=>{a.jb("ArgMax",o,{keepDims:!!c,selectLastIndex:!!y,axis:x})},840144:(o,c,y,x)=>{a.jb("ArgMin",o,{keepDims:!!c,selectLastIndex:!!y,axis:x})},840252:(o,c)=>{a.jb("Softmax",o,{axis:c})},840315:(o,c)=>{a.jb("Concat",o,{axis:c})},840375:(o,c,y,x,S)=>{a.jb("Split",o,{axis:c,numOutputs:y,splitSizes:x?Array.from(F().subarray(Number(x)>>>0,Number(S)>>>0)):[]})},840531:o=>{a.jb("Expand",o,void 0)},840585:(o,c)=>{a.jb("Gather",o,{axis:Number(c)})},840656:(o,c)=>{a.jb("GatherElements",o,{axis:Number(c)})},840735:(o,c)=>{a.jb("GatherND",o,{batch_dims:Number(c)})},840814:(o,c,y,x,S,D,L,G,ee,pe,Se)=>{a.jb("Resize",o,{antialias:c,axes:y?Array.from(F().subarray(Number(y)>>>0,Number(x)>>>0)):[],coordinateTransformMode:He(S),cubicCoeffA:D,excludeOutside:L,extrapolationValue:G,keepAspectRatioPolicy:He(ee),mode:He(pe),nearestMode:He(Se)})},841176:(o,c,y,x,S,D,L)=>{a.jb("Slice",o,{starts:c?Array.from(F().subarray(Number(c)>>>0,Number(y)>>>0)):[],ends:x?Array.from(F().subarray(Number(x)>>>0,Number(S)>>>0)):[],axes:D?Array.from(F().subarray(Number(D)>>>0,Number(L)>>>0)):[]})},841440:o=>{a.jb("Tile",o,void 0)},841492:(o,c,y)=>{a.jb("InstanceNormalization",o,{epsilon:c,format:y?"NHWC":"NCHW"})},841606:(o,c,y)=>{a.jb("InstanceNormalization",o,{epsilon:c,format:y?"NHWC":"NCHW"})},841720:o=>{a.jb("Range",o,void 0)},841773:(o,c)=>{a.jb("Einsum",o,{equation:He(c)})},841854:(o,c,y,x,S)=>{a.jb("Pad",o,{mode:c,value:y,pads:x?Array.from(F().subarray(Number(x)>>>0,Number(S)>>>0)):[]})},841997:(o,c,y,x,S,D)=>{a.jb("BatchNormalization",o,{epsilon:c,momentum:y,spatial:!!S,trainingMode:!!x,format:D?"NHWC":"NCHW"})},842166:(o,c,y,x,S,D)=>{a.jb("BatchNormalization",o,{epsilon:c,momentum:y,spatial:!!S,trainingMode:!!x,format:D?"NHWC":"NCHW"})},842335:(o,c,y)=>{a.jb("CumSum",o,{exclusive:Number(c),reverse:Number(y)})},842432:(o,c,y)=>{a.jb("DequantizeLinear",o,{axis:c,blockSize:y})},842522:(o,c,y,x,S)=>{a.jb("GridSample",o,{align_corners:c,mode:He(y),padding_mode:He(x),format:S?"NHWC":"NCHW"})},842692:(o,c,y,x,S)=>{a.jb("GridSample",o,{align_corners:c,mode:He(y),padding_mode:He(x),format:S?"NHWC":"NCHW"})},842862:(o,c)=>{a.jb("ScatterND",o,{reduction:He(c)})},842947:(o,c,y,x,S,D,L,G,ee)=>{a.jb("Attention",o,{numHeads:c,isUnidirectional:y,maskFilterValue:x,scale:S,doRotary:D,qkvHiddenSizes:L?Array.from(F().subarray(Number(G)>>>0,Number(G)+L>>>0)):[],pastPresentShareBuffer:!!ee})},843219:o=>{a.jb("BiasAdd",o,void 0)},843274:o=>{a.jb("BiasSplitGelu",o,void 0)},843335:o=>{a.jb("FastGelu",o,void 0)},843391:(o,c,y,x,S,D,L,G,ee,pe,Se,Ae,Fe,rt,Nr,uh)=>{a.jb("Conv",o,{format:Ae?"NHWC":"NCHW",auto_pad:c,dilations:y?Array.from(F().subarray(Number(y)>>>0,Number(x)>>>0)):[],group:S,kernel_shape:D?Array.from(F().subarray(Number(D)>>>0,Number(L)>>>0)):[],pads:G?Array.from(F().subarray(Number(G)>>>0,Number(ee)>>>0)):[],strides:pe?Array.from(F().subarray(Number(pe)>>>0,Number(Se)>>>0)):[],w_is_const:()=>!!Me()[Number(Fe)>>>0],activation:He(rt),activation_params:Nr?Array.from(ut().subarray(Number(Nr)>>>0,Number(uh)>>>0)):[]})},843975:o=>{a.jb("Gelu",o,void 0)},844027:(o,c,y,x,S,D,L,G,ee)=>{a.jb("GroupQueryAttention",o,{numHeads:c,kvNumHeads:y,scale:x,softcap:S,doRotary:D,rotaryInterleaved:L,smoothSoftmax:G,localWindowSize:ee})},844244:(o,c,y,x)=>{a.jb("LayerNormalization",o,{axis:c,epsilon:y,simplified:!!x})},844355:(o,c,y,x)=>{a.jb("LayerNormalization",o,{axis:c,epsilon:y,simplified:!!x})},844466:(o,c,y,x,S,D)=>{a.jb("MatMulNBits",o,{k:c,n:y,accuracyLevel:x,bits:S,blockSize:D})},844593:(o,c,y,x,S,D)=>{a.jb("MultiHeadAttention",o,{numHeads:c,isUnidirectional:y,maskFilterValue:x,scale:S,doRotary:D})},844752:(o,c)=>{a.jb("QuickGelu",o,{alpha:c})},844816:(o,c,y,x,S)=>{a.jb("RotaryEmbedding",o,{interleaved:!!c,numHeads:y,rotaryEmbeddingDim:x,scale:S})},844955:(o,c,y)=>{a.jb("SkipLayerNormalization",o,{epsilon:c,simplified:!!y})},845057:(o,c,y)=>{a.jb("SkipLayerNormalization",o,{epsilon:c,simplified:!!y})},845159:(o,c,y,x)=>{a.jb("GatherBlockQuantized",o,{gatherAxis:c,quantizeAxis:y,blockSize:x})},845280:o=>{a.Zb(o)},845314:(o,c)=>a.ac(Number(o),Number(c),a.Fb.dc,a.Fb.errors)};function $r(o,c,y){return ta(async()=>{await a.Xb(Number(o),Number(c),Number(y))})}function Xt(){return typeof wasmOffsetConverter<"u"}class xr{name="ExitStatus";constructor(c){this.message=`Program terminated with exit(${c})`,this.status=c}}var xa=o=>{o.terminate(),o.onmessage=()=>{}},kr=[],ka=o=>{Mt.length==0&&(Ta(),Hr(Mt[0]));var c=Mt.pop();if(!c)return 6;Yt.push(c),st[o.Ab]=c,c.Ab=o.Ab;var y={Bb:"run",fc:o.ec,Hb:o.Hb,Ab:o.Ab};return c.postMessage(y,o.Mb),0},Dt=0,re=(o,c,...y)=>{for(var x=2*y.length,S=Qn(),D=Yn(8*x),L=D>>>3,G=0;G<y.length;G++){var ee=y[G];typeof ee=="bigint"?(X[L+2*G]=1n,X[L+2*G+1]=ee):(X[L+2*G]=0n,Ve()[L+2*G+1>>>0]=ee)}return o=lo(o,0,x,D,c),Ha(S),o};function qe(o){if(l)return re(0,1,o);if(M=o,!(0<Dt)){for(var c of Yt)xa(c);for(c of Mt)xa(c);Mt=[],Yt=[],st={},ye=!0}b(0,new xr(o))}function Vr(o){if(l)return re(1,0,o);Zt(o)}var Zt=o=>{if(M=o,l)throw Vr(o),"unwind";qe(o)},Mt=[],Yt=[],qt=[],st={},Ea=o=>{var c=o.Ab;delete st[c],Mt.push(o),Yt.splice(Yt.indexOf(o),1),o.Ab=0,po(c)};function Sa(){qt.forEach(o=>o())}var Hr=o=>new Promise(c=>{o.onmessage=S=>{var D=(S=S.data).Bb;if(S.Gb&&S.Gb!=ja()){var L=st[S.Gb];L?L.postMessage(S,S.Mb):A(`Internal error! Worker sent a message "${D}" to target pthread ${S.Gb}, but that thread no longer exists!`)}else D==="checkMailbox"?Ar():D==="spawnThread"?ka(S):D==="cleanupThread"?Ea(st[S.hc]):D==="loaded"?(o.loaded=!0,c(o)):D==="alert"?alert(`Thread ${S.ic}: ${S.text}`):S.target==="setimmediate"?o.postMessage(S):D==="callHandler"?a[S.Qb](...S.args):D&&A(`worker sent an unknown command ${D}`)},o.onerror=S=>{throw A(`worker sent an error! ${S.filename}:${S.lineno}: ${S.message}`),S};var y,x=[];for(y of[])a.propertyIsEnumerable(y)&&x.push(y);o.postMessage({Bb:"load",Rb:x,kc:z,lc:O})});function Ta(){var o=new Worker((()=>{let c=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new c("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Mt.push(o)}var bn=o=>{Ye();var c=be()[o+52>>>2>>>0];o=be()[o+56>>>2>>>0],mo(c,c-o),Ha(c)},wn=(o,c)=>{Dt=0,o=ho(o,c),0<Dt?M=o:Zn(o)};class Be{constructor(c){this.Ib=c-24}}function $n(o,c,y){var x=new Be(o>>>=0);throw c>>>=0,y>>>=0,be()[x.Ib+16>>>2>>>0]=0,be()[x.Ib+4>>>2>>>0]=c,be()[x.Ib+8>>>2>>>0]=y,o}function Gr(o,c,y,x){return l?re(2,1,o,c,y,x):ht(o,c,y,x)}function ht(o,c,y,x){if(o>>>=0,y>>>=0,x>>>=0,d===void 0)return 6;var S=[];return l&&S.length===0?Gr(o,c>>>=0,y,x):(o={ec:y,Ab:o,Hb:x,Mb:S},l?(o.Bb="spawnThread",postMessage(o,S),0):ka(o))}var Er=typeof TextDecoder<"u"?new TextDecoder:void 0,Sr=(o,c=0,y=NaN)=>{var x=(c>>>=0)+y;for(y=c;o[y]&&!(y>=x);)++y;if(16<y-c&&o.buffer&&Er)return Er.decode(o.buffer instanceof ArrayBuffer?o.subarray(c,y):o.slice(c,y));for(x="";c<y;){var S=o[c++];if(128&S){var D=63&o[c++];if((224&S)==192)x+=String.fromCharCode((31&S)<<6|D);else{var L=63&o[c++];65536>(S=(240&S)==224?(15&S)<<12|D<<6|L:(7&S)<<18|D<<12|L<<6|63&o[c++])?x+=String.fromCharCode(S):(S-=65536,x+=String.fromCharCode(55296|S>>10,56320|1023&S))}}else x+=String.fromCharCode(S)}return x},He=(o,c)=>(o>>>=0)?Sr(j(),o,c):"";function ir(o,c,y){return l?re(3,1,o,c,y):0}function Ia(o,c){if(l)return re(4,1,o,c)}var bt=o=>{for(var c=0,y=0;y<o.length;++y){var x=o.charCodeAt(y);127>=x?c++:2047>=x?c+=2:55296<=x&&57343>=x?(c+=4,++y):c+=3}return c},Lt=(o,c,y)=>{var x=j();if(c>>>=0,0<y){var S=c;y=c+y-1;for(var D=0;D<o.length;++D){var L=o.charCodeAt(D);if(55296<=L&&57343>=L&&(L=65536+((1023&L)<<10)|1023&o.charCodeAt(++D)),127>=L){if(c>=y)break;x[c++>>>0]=L}else{if(2047>=L){if(c+1>=y)break;x[c++>>>0]=192|L>>6}else{if(65535>=L){if(c+2>=y)break;x[c++>>>0]=224|L>>12}else{if(c+3>=y)break;x[c++>>>0]=240|L>>18,x[c++>>>0]=128|L>>12&63}x[c++>>>0]=128|L>>6&63}x[c++>>>0]=128|63&L}}x[c>>>0]=0,o=c-S}else o=0;return o};function Ee(o,c){if(l)return re(5,1,o,c)}function za(o,c,y){if(l)return re(6,1,o,c,y)}function Ca(o,c,y){return l?re(7,1,o,c,y):0}function Aa(o,c){if(l)return re(8,1,o,c)}function Oa(o,c,y){if(l)return re(9,1,o,c,y)}function Ra(o,c,y,x){if(l)return re(10,1,o,c,y,x)}function Da(o,c,y,x){if(l)return re(11,1,o,c,y,x)}function Tr(o,c,y,x){if(l)return re(12,1,o,c,y,x)}function v(o){if(l)return re(13,1,o)}function Re(o,c){if(l)return re(14,1,o,c)}function Ma(o,c,y){if(l)return re(15,1,o,c,y)}var Kr,Bt,xn=()=>Je(""),gt=o=>{for(var c="";j()[o>>>0];)c+=Kr[j()[o++>>>0]];return c},Xr={},Zr={},kn={};function wt(o,c,y={}){return(function(x,S,D={}){var L=S.name;if(!x)throw new Bt(`type "${L}" must have a positive integer typeid pointer`);if(Zr.hasOwnProperty(x)){if(D.Sb)return;throw new Bt(`Cannot register type '${L}' twice`)}Zr[x]=S,delete kn[x],Xr.hasOwnProperty(x)&&(S=Xr[x],delete Xr[x],S.forEach(G=>G()))})(o,c,y)}var Ba=(o,c,y)=>{switch(c){case 1:return y?x=>Me()[x>>>0]:x=>j()[x>>>0];case 2:return y?x=>Q()[x>>>1>>>0]:x=>_e()[x>>>1>>>0];case 4:return y?x=>F()[x>>>2>>>0]:x=>be()[x>>>2>>>0];case 8:return y?x=>X[x>>>3]:x=>ie[x>>>3];default:throw new TypeError(`invalid integer width (${c}): ${o}`)}};function En(o,c,y){y>>>=0,wt(o>>>=0,{name:c=gt(c>>>0),fromWireType:x=>x,toWireType:function(x,S){if(typeof S!="bigint"&&typeof S!="number")throw S=S===null?"null":(x=typeof S)=="object"||x==="array"||x==="function"?S.toString():""+S,new TypeError(`Cannot convert "${S}" to ${this.name}`);return typeof S=="number"&&(S=BigInt(S)),S},Cb:Pt,readValueFromPointer:Ba(c,y,c.indexOf("u")==-1),Db:null})}var Pt=8;function Sn(o,c,y,x){wt(o>>>=0,{name:c=gt(c>>>0),fromWireType:function(S){return!!S},toWireType:function(S,D){return D?y:x},Cb:Pt,readValueFromPointer:function(S){return this.fromWireType(j()[S>>>0])},Db:null})}var Yr=[],$t=[];function Qr(o){9<(o>>>=0)&&--$t[o+1]==0&&($t[o]=void 0,Yr.push(o))}var tt=o=>{if(!o)throw new Bt("Cannot use deleted val. handle = "+o);return $t[o]},ot=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let c=Yr.pop()||$t.length;return $t[c]=o,$t[c+1]=1,c}};function Wt(o){return this.fromWireType(be()[o>>>2>>>0])}var Tn={name:"emscripten::val",fromWireType:o=>{var c=tt(o);return Qr(o),c},toWireType:(o,c)=>ot(c),Cb:Pt,readValueFromPointer:Wt,Db:null};function In(o){return wt(o>>>0,Tn)}var zn=(o,c)=>{switch(c){case 4:return function(y){return this.fromWireType(ut()[y>>>2>>>0])};case 8:return function(y){return this.fromWireType(Ve()[y>>>3>>>0])};default:throw new TypeError(`invalid float width (${c}): ${o}`)}};function Cn(o,c,y){y>>>=0,wt(o>>>=0,{name:c=gt(c>>>0),fromWireType:x=>x,toWireType:(x,S)=>S,Cb:Pt,readValueFromPointer:zn(c,y),Db:null})}function An(o,c,y,x,S){if(o>>>=0,y>>>=0,c=gt(c>>>0),S===-1&&(S=4294967295),S=G=>G,x===0){var D=32-8*y;S=G=>G<<D>>>D}var L=c.includes("unsigned")?function(G,ee){return ee>>>0}:function(G,ee){return ee};wt(o,{name:c,fromWireType:S,toWireType:L,Cb:Pt,readValueFromPointer:Ba(c,y,x!==0),Db:null})}function On(o,c,y){function x(D){var L=be()[D>>>2>>>0];return D=be()[D+4>>>2>>>0],new S(Me().buffer,D,L)}var S=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][c];wt(o>>>=0,{name:y=gt(y>>>0),fromWireType:x,Cb:Pt,readValueFromPointer:x},{Sb:!0})}function Pa(o,c){wt(o>>>=0,{name:c=gt(c>>>0),fromWireType:function(y){for(var x,S=be()[y>>>2>>>0],D=y+4,L=D,G=0;G<=S;++G){var ee=D+G;G!=S&&j()[ee>>>0]!=0||(L=He(L,ee-L),x===void 0?x=L:(x+="\0",x+=L),L=ee+1)}return Nt(y),x},toWireType:function(y,x){x instanceof ArrayBuffer&&(x=new Uint8Array(x));var S=typeof x=="string";if(!(S||x instanceof Uint8Array||x instanceof Uint8ClampedArray||x instanceof Int8Array))throw new Bt("Cannot pass non-string to std::string");var D=S?bt(x):x.length,L=Va(4+D+1),G=L+4;if(be()[L>>>2>>>0]=D,S)Lt(x,G,D+1);else if(S)for(S=0;S<D;++S){var ee=x.charCodeAt(S);if(255<ee)throw Nt(L),new Bt("String has UTF-16 code units that do not fit in 8 bits");j()[G+S>>>0]=ee}else for(S=0;S<D;++S)j()[G+S>>>0]=x[S];return y!==null&&y.push(Nt,L),L},Cb:Pt,readValueFromPointer:Wt,Db(y){Nt(y)}})}var Na=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Rn=(o,c)=>{for(var y=o>>1,x=y+c/2;!(y>=x)&&_e()[y>>>0];)++y;if(32<(y<<=1)-o&&Na)return Na.decode(j().slice(o,y));for(y="",x=0;!(x>=c/2);++x){var S=Q()[o+2*x>>>1>>>0];if(S==0)break;y+=String.fromCharCode(S)}return y},Dn=(o,c,y)=>{if(y??=2147483647,2>y)return 0;var x=c;y=(y-=2)<2*o.length?y/2:o.length;for(var S=0;S<y;++S){var D=o.charCodeAt(S);Q()[c>>>1>>>0]=D,c+=2}return Q()[c>>>1>>>0]=0,c-x},Mn=o=>2*o.length,Bn=(o,c)=>{for(var y=0,x="";!(y>=c/4);){var S=F()[o+4*y>>>2>>>0];if(S==0)break;++y,65536<=S?(S-=65536,x+=String.fromCharCode(55296|S>>10,56320|1023&S)):x+=String.fromCharCode(S)}return x},Pn=(o,c,y)=>{if(c>>>=0,y??=2147483647,4>y)return 0;var x=c;y=x+y-4;for(var S=0;S<o.length;++S){var D=o.charCodeAt(S);if(55296<=D&&57343>=D&&(D=65536+((1023&D)<<10)|1023&o.charCodeAt(++S)),F()[c>>>2>>>0]=D,(c+=4)+4>y)break}return F()[c>>>2>>>0]=0,c-x},Nn=o=>{for(var c=0,y=0;y<o.length;++y){var x=o.charCodeAt(y);55296<=x&&57343>=x&&++y,c+=4}return c};function Un(o,c,y){if(o>>>=0,c>>>=0,y=gt(y>>>=0),c===2)var x=Rn,S=Dn,D=Mn,L=G=>_e()[G>>>1>>>0];else c===4&&(x=Bn,S=Pn,D=Nn,L=G=>be()[G>>>2>>>0]);wt(o,{name:y,fromWireType:G=>{for(var ee,pe=be()[G>>>2>>>0],Se=G+4,Ae=0;Ae<=pe;++Ae){var Fe=G+4+Ae*c;Ae!=pe&&L(Fe)!=0||(Se=x(Se,Fe-Se),ee===void 0?ee=Se:(ee+="\0",ee+=Se),Se=Fe+c)}return Nt(G),ee},toWireType:(G,ee)=>{if(typeof ee!="string")throw new Bt(`Cannot pass non-string to C++ string type ${y}`);var pe=D(ee),Se=Va(4+pe+c);return be()[Se>>>2>>>0]=pe/c,S(ee,Se+4,pe+c),G!==null&&G.push(Nt,Se),Se},Cb:Pt,readValueFromPointer:Wt,Db(G){Nt(G)}})}function Ir(o,c){wt(o>>>=0,{Tb:!0,name:c=gt(c>>>0),Cb:0,fromWireType:()=>{},toWireType:()=>{}})}function Fn(o){Xn(o>>>0,!s,1,!i,131072,!1),Sa()}var zr=o=>{if(!ye)try{if(o(),!(0<Dt))try{l?Zn(M):Zt(M)}catch(c){c instanceof xr||c=="unwind"||b(0,c)}}catch(c){c instanceof xr||c=="unwind"||b(0,c)}};function Cr(o){o>>>=0,typeof Atomics.jc=="function"&&(Atomics.jc(F(),o>>>2,o).value.then(Ar),o+=128,Atomics.store(F(),o>>>2,1))}var Ar=()=>{var o=ja();o&&(Cr(o),zr(fo))};function qn(o,c){(o>>>=0)==c>>>0?setTimeout(Ar):l?postMessage({Gb:o,Bb:"checkMailbox"}):(o=st[o])&&o.postMessage({Bb:"checkMailbox"})}var Jr=[];function Ln(o,c,y,x,S){for(c>>>=0,x/=2,Jr.length=x,y=S>>>0>>>3,S=0;S<x;S++)Jr[S]=X[y+2*S]?X[y+2*S+1]:Ve()[y+2*S+1>>>0];return(c?wr[c]:oh[o])(...Jr)}var Wn=()=>{Dt=0};function jn(o){o>>>=0,l?postMessage({Bb:"cleanupThread",hc:o}):Ea(st[o])}function Ua(o){}var jt=(o,c)=>{var y=Zr[o];if(y===void 0)throw o=so(o),y=gt(o),Nt(o),new Bt(`${c} has unknown type ${y}`);return y},sr=(o,c,y)=>{var x=[];return o=o.toWireType(x,y),x.length&&(be()[c>>>2>>>0]=ot(x)),o};function Vn(o,c,y){return c>>>=0,y>>>=0,o=tt(o>>>0),c=jt(c,"emval::as"),sr(c,y,o)}function lt(o,c){return c>>>=0,o=tt(o>>>0),(c=jt(c,"emval::as")).toWireType(null,o)}var Or=o=>{try{o()}catch(c){Je(c)}},xt=0,dt=null,Fa=0,Rr=[],Dr={},ea={},Mr=0,Br=null,qa=[];function ta(o){return(function(c){if(!ye){if(xt===0){var y=!1,x=!1;c((S=0)=>{if(!ye&&(Fa=S,y=!0,x)){xt=2,Or(()=>yo(dt)),typeof MainLoop<"u"&&MainLoop.Pb&&MainLoop.resume(),S=!1;try{var D=(function(){var ee=F()[dt+8>>>2>>>0];return ee=he[ea[ee]],--Dt,ee()})()}catch(ee){D=ee,S=!0}var L=!1;if(!dt){var G=Br;G&&(Br=null,(S?G.reject:G.resolve)(D),L=!0)}if(S&&!L)throw D}}),x=!0,y||(xt=1,dt=(function(){var S=Va(65548),D=S+12;be()[S>>>2>>>0]=D,be()[S+4>>>2>>>0]=D+65536,D=Rr[0];var L=Dr[D];return L===void 0&&(L=Mr++,Dr[D]=L,ea[L]=D),D=L,F()[S+8>>>2>>>0]=D,S})(),typeof MainLoop<"u"&&MainLoop.Pb&&MainLoop.pause(),Or(()=>go(dt)))}else xt===2?(xt=0,Or(vo),Nt(dt),dt=null,qa.forEach(zr)):Je(`invalid state: ${xt}`);return Fa}})(c=>{o().then(c)})}function u(o){return o>>>=0,ta(async()=>{var c=await tt(o);return ot(c)})}var f=[];function g(o,c,y,x){return y>>>=0,x>>>=0,(o=f[o>>>0])(null,c=tt(c>>>0),y,x)}var w={},C=o=>{var c=w[o];return c===void 0?gt(o):c};function R(o,c,y,x,S){return y>>>=0,x>>>=0,S>>>=0,(o=f[o>>>0])(c=tt(c>>>0),c[y=C(y)],x,S)}var P=()=>typeof globalThis=="object"?globalThis:Function("return this")();function N(o){return(o>>>=0)==0?ot(P()):(o=C(o),ot(P()[o]))}var te=o=>{var c=f.length;return f.push(o),c},ve=(o,c)=>{for(var y=Array(o),x=0;x<o;++x)y[x]=jt(be()[c+4*x>>>2>>>0],"parameter "+x);return y},$e=(o,c)=>Object.defineProperty(c,"name",{value:o});function Ie(o,c,y){var x=(c=ve(o,c>>>0)).shift();o--;var S=`return function (obj, func, destructorsRef, args) {
`,D=0,L=[];y===0&&L.push("obj");for(var G=["retType"],ee=[x],pe=0;pe<o;++pe)L.push("arg"+pe),G.push("argType"+pe),ee.push(c[pe]),S+=`  var arg${pe} = argType${pe}.readValueFromPointer(args${D?"+"+D:""});
`,D+=c[pe].Cb;return S+=`  var rv = ${y===1?"new func":"func.call"}(${L.join(", ")});
`,x.Tb||(G.push("emval_returnValue"),ee.push(sr),S+=`  return emval_returnValue(retType, destructorsRef, rv);
`),G.push(S+`};
`),o=(function(Se){var Ae=Function;if(!(Ae instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof Ae} which is not a function`);var Fe=$e(Ae.name||"unknownFunctionName",function(){});return Fe.prototype=Ae.prototype,Fe=new Fe,(Se=Ae.apply(Fe,Se))instanceof Object?Se:Fe})(G)(...ee),y=`methodCaller<(${c.map(Se=>Se.name).join(", ")}) => ${x.name}>`,te($e(y,o))}function se(o){return o=C(o>>>0),ot(a[o])}function oe(o,c){return c>>>=0,o=tt(o>>>0),c=tt(c),ot(o[c])}function xe(o){9<(o>>>=0)&&($t[o+1]+=1)}function Le(){return ot([])}function Ce(o){o=tt(o>>>0);for(var c=Array(o.length),y=0;y<o.length;y++)c[y]=o[y];return ot(c)}function Te(o){return ot(C(o>>>0))}function V(){return ot({})}function ue(o){for(var c=tt(o>>>=0);c.length;){var y=c.pop();c.pop()(y)}Qr(o)}function Ue(o,c,y){c>>>=0,y>>>=0,o=tt(o>>>0),c=tt(c),y=tt(y),o[c]=y}function Ne(o,c){return c>>>=0,o=(o=jt(o>>>0,"_emval_take_value")).readValueFromPointer(c),ot(o)}function at(o,c){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),c>>>=0,o=new Date(1e3*o),F()[c>>>2>>>0]=o.getUTCSeconds(),F()[c+4>>>2>>>0]=o.getUTCMinutes(),F()[c+8>>>2>>>0]=o.getUTCHours(),F()[c+12>>>2>>>0]=o.getUTCDate(),F()[c+16>>>2>>>0]=o.getUTCMonth(),F()[c+20>>>2>>>0]=o.getUTCFullYear()-1900,F()[c+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,F()[c+28>>>2>>>0]=o}var Ge=o=>o%4==0&&(o%100!=0||o%400==0),ra=[0,31,60,91,121,152,182,213,244,274,305,335],Hs=[0,31,59,90,120,151,181,212,243,273,304,334];function Lm(o,c){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),c>>>=0,o=new Date(1e3*o),F()[c>>>2>>>0]=o.getSeconds(),F()[c+4>>>2>>>0]=o.getMinutes(),F()[c+8>>>2>>>0]=o.getHours(),F()[c+12>>>2>>>0]=o.getDate(),F()[c+16>>>2>>>0]=o.getMonth(),F()[c+20>>>2>>>0]=o.getFullYear()-1900,F()[c+24>>>2>>>0]=o.getDay();var y=(Ge(o.getFullYear())?ra:Hs)[o.getMonth()]+o.getDate()-1|0;F()[c+28>>>2>>>0]=y,F()[c+36>>>2>>>0]=-60*o.getTimezoneOffset(),y=new Date(o.getFullYear(),6,1).getTimezoneOffset();var x=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(y!=x&&o.getTimezoneOffset()==Math.min(x,y)),F()[c+32>>>2>>>0]=o}function Wm(o){o>>>=0;var c=new Date(F()[o+20>>>2>>>0]+1900,F()[o+16>>>2>>>0],F()[o+12>>>2>>>0],F()[o+8>>>2>>>0],F()[o+4>>>2>>>0],F()[o>>>2>>>0],0),y=F()[o+32>>>2>>>0],x=c.getTimezoneOffset(),S=new Date(c.getFullYear(),6,1).getTimezoneOffset(),D=new Date(c.getFullYear(),0,1).getTimezoneOffset(),L=Math.min(D,S);return 0>y?F()[o+32>>>2>>>0]=+(S!=D&&L==x):0<y!=(L==x)&&(S=Math.max(D,S),c.setTime(c.getTime()+6e4*((0<y?L:S)-x))),F()[o+24>>>2>>>0]=c.getDay(),y=(Ge(c.getFullYear())?ra:Hs)[c.getMonth()]+c.getDate()-1|0,F()[o+28>>>2>>>0]=y,F()[o>>>2>>>0]=c.getSeconds(),F()[o+4>>>2>>>0]=c.getMinutes(),F()[o+8>>>2>>>0]=c.getHours(),F()[o+12>>>2>>>0]=c.getDate(),F()[o+16>>>2>>>0]=c.getMonth(),F()[o+20>>>2>>>0]=c.getYear(),o=c.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function Gs(o,c,y,x,S,D,L){return l?re(16,1,o,c,y,x,S,D,L):-52}function Ks(o,c,y,x,S,D){if(l)return re(17,1,o,c,y,x,S,D)}var aa={},jm=()=>performance.timeOrigin+performance.now();function Xs(o,c){if(l)return re(18,1,o,c);if(aa[o]&&(clearTimeout(aa[o].id),delete aa[o]),!c)return 0;var y=setTimeout(()=>{delete aa[o],zr(()=>co(o,performance.timeOrigin+performance.now()))},c);return aa[o]={id:y,qc:c},0}function Vm(o,c,y,x){o>>>=0,c>>>=0,y>>>=0,x>>>=0;var S=new Date().getFullYear(),D=new Date(S,0,1).getTimezoneOffset();S=new Date(S,6,1).getTimezoneOffset();var L=Math.max(D,S);be()[o>>>2>>>0]=60*L,F()[c>>>2>>>0]=+(D!=S),o=(c=G=>{var ee=Math.abs(G);return`UTC${0<=G?"-":"+"}${String(Math.floor(ee/60)).padStart(2,"0")}${String(ee%60).padStart(2,"0")}`})(D),c=c(S),S<D?(Lt(o,y,17),Lt(c,x,17)):(Lt(o,x,17),Lt(c,y,17))}var Hm=()=>Date.now(),Gm=1;function Km(o,c,y){if(!(0<=o&&3>=o))return 28;if(o===0)o=Date.now();else{if(!Gm)return 52;o=performance.timeOrigin+performance.now()}return X[y>>>0>>>3]=BigInt(Math.round(1e6*o)),0}var Hn=[],Zs=(o,c)=>{Hn.length=0;for(var y;y=j()[o++>>>0];){var x=y!=105;c+=(x&=y!=112)&&c%8?4:0,Hn.push(y==112?be()[c>>>2>>>0]:y==106?X[c>>>3]:y==105?F()[c>>>2>>>0]:Ve()[c>>>3>>>0]),c+=x?8:4}return Hn};function Xm(o,c,y){return o>>>=0,c=Zs(c>>>0,y>>>0),wr[o](...c)}function Zm(o,c,y){return o>>>=0,c=Zs(c>>>0,y>>>0),wr[o](...c)}var Ym=()=>{};function Qm(o,c){return A(He(o>>>0,c>>>0))}var Jm=()=>{throw Dt+=1,"unwind"};function eh(){return 4294901760}var th=()=>navigator.hardwareConcurrency;function rh(){return Je("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function ah(o){o>>>=0;var c=j().length;if(o<=c||4294901760<o)return!1;for(var y=1;4>=y;y*=2){var x=c*(1+.2/y);x=Math.min(x,o+100663296);e:{x=(Math.min(4294901760,65536*Math.ceil(Math.max(o,x)/65536))-z.buffer.byteLength+65535)/65536|0;try{z.grow(x),Ye();var S=1;break e}catch{}S=void 0}if(S)return!0}return!1}var La=()=>(Je("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Pr={},Ys=o=>{o.forEach(c=>{var y=La();y&&(Pr[y]=c)})};function nh(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),Ys(o),Pr.Lb=La(),Pr.cc=o,Pr.Lb}function ih(o,c,y){if(o>>>=0,c>>>=0,Pr.Lb==o)var x=Pr.cc;else(x=Error().stack.toString().split(`
`))[0]=="Error"&&x.shift(),Ys(x);for(var S=3;x[S]&&La()!=o;)++S;for(o=0;o<y&&x[o+S];++o)F()[c+4*o>>>2>>>0]=La();return o}var Gn,Kn={},Qs=()=>{if(!Gn){var o,c={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in Kn)Kn[o]===void 0?delete c[o]:c[o]=Kn[o];var y=[];for(o in c)y.push(`${o}=${c[o]}`);Gn=y}return Gn};function Js(o,c){if(l)return re(19,1,o,c);o>>>=0,c>>>=0;var y=0;return Qs().forEach((x,S)=>{var D=c+y;for(S=be()[o+4*S>>>2>>>0]=D,D=0;D<x.length;++D)Me()[S++>>>0]=x.charCodeAt(D);Me()[S>>>0]=0,y+=x.length+1}),0}function eo(o,c){if(l)return re(20,1,o,c);o>>>=0,c>>>=0;var y=Qs();be()[o>>>2>>>0]=y.length;var x=0;return y.forEach(S=>x+=S.length+1),be()[c>>>2>>>0]=x,0}function to(o){return l?re(21,1,o):52}function ro(o,c,y,x){return l?re(22,1,o,c,y,x):52}function ao(o,c,y,x){return l?re(23,1,o,c,y,x):70}var sh=[null,[],[]];function no(o,c,y,x){if(l)return re(24,1,o,c,y,x);c>>>=0,y>>>=0,x>>>=0;for(var S=0,D=0;D<y;D++){var L=be()[c>>>2>>>0],G=be()[c+4>>>2>>>0];c+=8;for(var ee=0;ee<G;ee++){var pe=j()[L+ee>>>0],Se=sh[o];pe===0||pe===10?((o===1?k:A)(Sr(Se)),Se.length=0):Se.push(pe)}S+=G}return be()[x>>>2>>>0]=S,0}l||(function(){for(var o=a.numThreads-1;o--;)Ta();kr.unshift(()=>{br++,(function(c){l?c():Promise.all(Mt.map(Hr)).then(c)})(()=>Kt())})})();for(var io=Array(256),Wa=0;256>Wa;++Wa)io[Wa]=String.fromCharCode(Wa);Kr=io,Bt=a.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},a.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},$t.push(0,1,void 0,1,null,1,!0,1,!1,1),a.count_emval_handles=()=>$t.length/2-5-Yr.length;var he,oh=[qe,Vr,Gr,ir,Ia,Ee,za,Ca,Aa,Oa,Ra,Da,Tr,v,Re,Ma,Gs,Ks,Xs,Js,eo,to,ro,ao,no];(async function(){function o(x,S){return he=x.exports,he=(function(){var D=he,L={};for(let[G,ee]of Object.entries(D))L[G]=typeof ee=="function"?(...pe)=>{Rr.push(G);try{return ee(...pe)}finally{ye||(Rr.pop(),dt&&xt===1&&Rr.length===0&&(xt=0,Dt+=1,Or(_o),typeof Fibers<"u"&&Fibers.rc()))}}:ee;return L})(),he=(function(){var D=he,L=ee=>pe=>ee(pe)>>>0,G=ee=>()=>ee()>>>0;return(D=Object.assign({},D)).Da=L(D.Da),D.fb=G(D.fb),D.hb=L(D.hb),D.tb=L(D.tb),D.ub=G(D.ub),D.__cxa_get_exception_ptr=L(D.__cxa_get_exception_ptr),D})(),qt.push(he.ib),O=S,Kt(),he}br++;var c=$a();if(a.instantiateWasm)return new Promise(x=>{a.instantiateWasm(c,(S,D)=>{o(S,D),x(S.exports)})});if(l)return new Promise(x=>{mt=S=>{var D=new WebAssembly.Instance(S,$a());x(o(D,S))}});Ft??=a.locateFile?a.locateFile?a.locateFile("ort-wasm-simd-threaded.jsep.wasm",E):E+"ort-wasm-simd-threaded.jsep.wasm":new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href;try{var y=await(async function(x){var S=Ft;if(!me&&typeof WebAssembly.instantiateStreaming=="function"&&!fe(S))try{var D=fetch(S,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(D,x)}catch(L){A(`wasm streaming compile failed: ${L}`),A("falling back to ArrayBuffer instantiation")}return(async function(L,G){try{var ee=await(async function(pe){if(!me)try{var Se=await h(pe);return new Uint8Array(Se)}catch{}if(pe==Ft&&me)pe=new Uint8Array(me);else{if(!_)throw"both async and sync fetching of the wasm failed";pe=_(pe)}return pe})(L);return await WebAssembly.instantiate(ee,G)}catch(pe){A(`failed to asynchronously prepare wasm: ${pe}`),Je(pe)}})(S,x)})(c);return o(y.instance,y.module)}catch(x){return r(x),Promise.reject(x)}})();var so=o=>(so=he.Da)(o),oo=()=>(oo=he.Ea)();a._OrtInit=(o,c)=>(a._OrtInit=he.Fa)(o,c),a._OrtGetLastError=(o,c)=>(a._OrtGetLastError=he.Ga)(o,c),a._OrtCreateSessionOptions=(o,c,y,x,S,D,L,G,ee,pe)=>(a._OrtCreateSessionOptions=he.Ha)(o,c,y,x,S,D,L,G,ee,pe),a._OrtAppendExecutionProvider=(o,c,y,x,S)=>(a._OrtAppendExecutionProvider=he.Ia)(o,c,y,x,S),a._OrtAddFreeDimensionOverride=(o,c,y)=>(a._OrtAddFreeDimensionOverride=he.Ja)(o,c,y),a._OrtAddSessionConfigEntry=(o,c,y)=>(a._OrtAddSessionConfigEntry=he.Ka)(o,c,y),a._OrtReleaseSessionOptions=o=>(a._OrtReleaseSessionOptions=he.La)(o),a._OrtCreateSession=(o,c,y)=>(a._OrtCreateSession=he.Ma)(o,c,y),a._OrtReleaseSession=o=>(a._OrtReleaseSession=he.Na)(o),a._OrtGetInputOutputCount=(o,c,y)=>(a._OrtGetInputOutputCount=he.Oa)(o,c,y),a._OrtGetInputOutputMetadata=(o,c,y,x)=>(a._OrtGetInputOutputMetadata=he.Pa)(o,c,y,x),a._OrtFree=o=>(a._OrtFree=he.Qa)(o),a._OrtCreateTensor=(o,c,y,x,S,D)=>(a._OrtCreateTensor=he.Ra)(o,c,y,x,S,D),a._OrtGetTensorData=(o,c,y,x,S)=>(a._OrtGetTensorData=he.Sa)(o,c,y,x,S),a._OrtReleaseTensor=o=>(a._OrtReleaseTensor=he.Ta)(o),a._OrtCreateRunOptions=(o,c,y,x)=>(a._OrtCreateRunOptions=he.Ua)(o,c,y,x),a._OrtAddRunConfigEntry=(o,c,y)=>(a._OrtAddRunConfigEntry=he.Va)(o,c,y),a._OrtReleaseRunOptions=o=>(a._OrtReleaseRunOptions=he.Wa)(o),a._OrtCreateBinding=o=>(a._OrtCreateBinding=he.Xa)(o),a._OrtBindInput=(o,c,y)=>(a._OrtBindInput=he.Ya)(o,c,y),a._OrtBindOutput=(o,c,y,x)=>(a._OrtBindOutput=he.Za)(o,c,y,x),a._OrtClearBoundOutputs=o=>(a._OrtClearBoundOutputs=he._a)(o),a._OrtReleaseBinding=o=>(a._OrtReleaseBinding=he.$a)(o),a._OrtRunWithBinding=(o,c,y,x,S)=>(a._OrtRunWithBinding=he.ab)(o,c,y,x,S),a._OrtRun=(o,c,y,x,S,D,L,G)=>(a._OrtRun=he.bb)(o,c,y,x,S,D,L,G),a._OrtEndProfiling=o=>(a._OrtEndProfiling=he.cb)(o),a._JsepOutput=(o,c,y)=>(a._JsepOutput=he.db)(o,c,y),a._JsepGetNodeName=o=>(a._JsepGetNodeName=he.eb)(o);var ja=()=>(ja=he.fb)(),Nt=a._free=o=>(Nt=a._free=he.gb)(o),Va=a._malloc=o=>(Va=a._malloc=he.hb)(o),Xn=(o,c,y,x,S,D)=>(Xn=he.kb)(o,c,y,x,S,D),uo=()=>(uo=he.lb)(),lo=(o,c,y,x,S)=>(lo=he.mb)(o,c,y,x,S),po=o=>(po=he.nb)(o),Zn=o=>(Zn=he.ob)(o),co=(o,c)=>(co=he.pb)(o,c),fo=()=>(fo=he.qb)(),mo=(o,c)=>(mo=he.rb)(o,c),Ha=o=>(Ha=he.sb)(o),Yn=o=>(Yn=he.tb)(o),Qn=()=>(Qn=he.ub)(),ho=a.dynCall_ii=(o,c)=>(ho=a.dynCall_ii=he.vb)(o,c),go=o=>(go=he.wb)(o),_o=()=>(_o=he.xb)(),yo=o=>(yo=he.yb)(o),vo=()=>(vo=he.zb)();return a.stackSave=()=>Qn(),a.stackRestore=o=>Ha(o),a.stackAlloc=o=>Yn(o),a.setValue=function(o,c,y="i8"){switch(y.endsWith("*")&&(y="*"),y){case"i1":case"i8":Me()[o>>>0]=c;break;case"i16":Q()[o>>>1>>>0]=c;break;case"i32":F()[o>>>2>>>0]=c;break;case"i64":X[o>>>3]=BigInt(c);break;case"float":ut()[o>>>2>>>0]=c;break;case"double":Ve()[o>>>3>>>0]=c;break;case"*":be()[o>>>2>>>0]=c;break;default:Je(`invalid type for setValue: ${y}`)}},a.getValue=function(o,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":return Me()[o>>>0];case"i16":return Q()[o>>>1>>>0];case"i32":return F()[o>>>2>>>0];case"i64":return X[o>>>3];case"float":return ut()[o>>>2>>>0];case"double":return Ve()[o>>>3>>>0];case"*":return be()[o>>>2>>>0];default:Je(`invalid type for getValue: ${c}`)}},a.UTF8ToString=He,a.stringToUTF8=Lt,a.lengthBytesUTF8=bt,(function o(){if(0<br)Rt=o;else if(l)t(a),vr();else{for(;0<kr.length;)kr.shift()(a);0<br?Rt=o:(a.calledRun=!0,ye||(vr(),t(a)))}})(),a.PTR_SIZE=4,n}),Ep=oi,So=globalThis.self?.name?.startsWith("em-pthread"),So&&oi()}),ui,es,To,pt,Sp,Ya,Io,zo,li,Co,di,Tp,pi,Ip,bs=K(()=>{"use strict";vs(),ui=typeof location>"u"?void 0:location.origin,es=import.meta.url>"file:"&&import.meta.url<"file;",To=()=>{if(es){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,ui).href}return import.meta.url},pt=To(),Sp=()=>{if(pt&&!pt.startsWith("blob:"))return pt.substring(0,pt.lastIndexOf("/")+1)},Ya=(e,t)=>{try{let r=t??pt;return(r?new URL(e,r):new URL(e)).origin===ui}catch{return!1}},Io=(e,t)=>{let r=t??pt;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},zo=(e,t)=>`${t??"./"}${e}`,li=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},Co=async e=>(await import(e)).default,di=(Lh(),va($p)).default,Tp=async()=>{if(!pt)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Ya(pt))return[void 0,di()];let e=await li(pt);return[e,di(e)]},pi=(Wh(),va(kp)).default,Ip=async(e,t,r)=>{if(!e&&!t&&pi&&pt&&Ya(pt))return[void 0,pi];{let a="ort-wasm-simd-threaded.jsep.mjs",n=e??Io(a,t),i=r&&n&&!Ya(n,t),s=i?await li(n):n??zo(a,t);return[i?s:void 0,await Co(s)]}}}),ci,Qa,ia,fi,Ao,Oo,Ro,ws,We,_r=K(()=>{"use strict";bs(),Qa=!1,ia=!1,fi=!1,Ao=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Oo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ro=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},ws=async e=>{if(Qa)return Promise.resolve();if(ia)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(fi)throw new Error("previous call to 'initializeWebAssembly()' failed.");ia=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Ro())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Oo())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let a=Ao();r>1&&!a&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,i=typeof n=="string"?n:void 0,s=n?.mjs,l=s?.href??s,d=n?.wasm,p=d?.href??d,m=e.wasmBinary,[h,_]=await Ip(l,i,r>1),$=!1,b=[];if(t>0&&b.push(new Promise(E=>{setTimeout(()=>{$=!0,E()},t)})),b.push(new Promise((E,I)=>{let T={numThreads:r};if(m)T.wasmBinary=m;else if(p||i)T.locateFile=k=>p??i+k;else if(l&&l.indexOf("blob:")!==0)T.locateFile=k=>new URL(k,l).href;else if(h){let k=Sp();k&&(T.locateFile=A=>k+A)}_(T).then(k=>{ia=!1,Qa=!0,ci=k,E(),h&&URL.revokeObjectURL(h)},k=>{ia=!1,fi=!0,I(k)})})),await Promise.race(b),$)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},We=()=>{if(Qa&&ci)return ci;throw new Error("WebAssembly is not initialized yet.")}}),zt,fn,Pe,$s=K(()=>{"use strict";_r(),zt=(e,t)=>{let r=We(),a=r.lengthBytesUTF8(e)+1,n=r._malloc(a);return r.stringToUTF8(e,n,a),t.push(n),n},fn=(e,t,r,a)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,i])=>{let s=t?t+n:n;if(typeof i=="object")fn(i,s+".",r,a);else if(typeof i=="string"||typeof i=="number")a(s,i.toString());else if(typeof i=="boolean")a(s,i?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof i}`)})},Pe=e=>{let t=We(),r=t.stackSave();try{let a=t.PTR_SIZE,n=t.stackAlloc(2*a);t._OrtGetLastError(n,n+a);let i=Number(t.getValue(n,a===4?"i32":"i64")),s=t.getValue(n+a,"*"),l=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${l}`)}finally{t.stackRestore(r)}}}),zp,jh=K(()=>{"use strict";_r(),$s(),zp=e=>{let t=We(),r=0,a=[],n=e||{};try{if(e?.logSeverityLevel===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(n.terminate=!1);let i=0;return e?.tag!==void 0&&(i=zt(e.tag,a)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,i),r===0&&Pe("Can't create run options."),e?.extra!==void 0&&fn(e.extra,"",new WeakSet,(s,l)=>{let d=zt(s,a),p=zt(l,a);t._OrtAddRunConfigEntry(r,d,p)!==0&&Pe(`Can't set a run config entry: ${s} - ${l}.`)}),[r,a]}catch(i){throw r!==0&&t._OrtReleaseRunOptions(r),a.forEach(s=>t._free(s)),i}}}),Do,Mo,Bo,sa,Po,Cp,Vh=K(()=>{"use strict";_r(),$s(),Do=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Mo=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Bo=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},sa=(e,t,r,a)=>{let n=zt(t,a),i=zt(r,a);We()._OrtAddSessionConfigEntry(e,n,i)!==0&&Pe(`Can't set a session config entry: ${t} - ${r}.`)},Po=async(e,t,r)=>{for(let a of t){let n=typeof a=="string"?a:a.name,i=[];switch(n){case"webnn":if(n="WEBNN",typeof a!="string"){let m=a?.deviceType;m&&sa(e,"deviceType",m,r)}break;case"webgpu":if(n="JS",typeof a!="string"){let m=a;if(m?.preferredLayout){if(m.preferredLayout!=="NCHW"&&m.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${m.preferredLayout}`);sa(e,"preferredLayout",m.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${n}`)}let s=zt(n,r),l=i.length,d=0,p=0;if(l>0){d=We()._malloc(l*We().PTR_SIZE),r.push(d),p=We()._malloc(l*We().PTR_SIZE),r.push(p);for(let m=0;m<l;m++)We().setValue(d+m*We().PTR_SIZE,i[m][0],"*"),We().setValue(p+m*We().PTR_SIZE,i[m][1],"*")}await We()._OrtAppendExecutionProvider(e,s,d,p,l)!==0&&Pe(`Can't append execution provider: ${n}.`)}},Cp=async e=>{let t=We(),r=0,a=[],n=e||{};Bo(n);try{let i=Do(n.graphOptimizationLevel??"all"),s=Mo(n.executionMode??"sequential"),l=typeof n.logId=="string"?zt(n.logId,a):0,d=n.logSeverityLevel??2;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log serverity level is not valid: ${d}`);let p=n.logVerbosityLevel??0;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log verbosity level is not valid: ${p}`);let m=typeof n.optimizedModelFilePath=="string"?zt(n.optimizedModelFilePath,a):0;if(r=t._OrtCreateSessionOptions(i,!!n.enableCpuMemArena,!!n.enableMemPattern,s,!!n.enableProfiling,0,l,d,p,m),r===0&&Pe("Can't create session options."),n.executionProviders&&await Po(r,n.executionProviders,a),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);sa(r,"enableGraphCapture",n.enableGraphCapture.toString(),a)}if(n.freeDimensionOverrides)for(let[h,_]of Object.entries(n.freeDimensionOverrides)){if(typeof h!="string")throw new Error(`free dimension override name must be a string: ${h}`);if(typeof _!="number"||!Number.isInteger(_)||_<0)throw new Error(`free dimension override value must be a non-negative integer: ${_}`);let $=zt(h,a);t._OrtAddFreeDimensionOverride(r,$,_)!==0&&Pe(`Can't set a free dimension override: ${h} - ${_}.`)}return n.extra!==void 0&&fn(n.extra,"",new WeakSet,(h,_)=>{sa(r,h,_,a)}),[r,a]}catch(i){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&Pe("Can't release session options."),a.forEach(s=>t._free(s)),i}}}),Fr,Ht,cr,xs,mn,ks,Es,ts,ge=K(()=>{"use strict";Fr=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Ht=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},cr=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],a=typeof t=="number"?t:t.reduce((n,i)=>n*i,1);return r>0?Math.ceil(a*r):void 0},xs=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},mn=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},ks=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Es=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ts=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ss,Ap=K(()=>{"use strict";vs(),Ss=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),a=r?parseInt(r,10):0;if(a<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),i;try{i=new ArrayBuffer(a)}catch(l){if(l instanceof RangeError){let d=Math.ceil(a/65536);i=new WebAssembly.Memory({initial:d,maximum:d}).buffer}else throw l}let s=0;for(;;){let{done:l,value:d}=await n.read();if(l)break;let p=d.byteLength;new Uint8Array(i,s,p).set(d),s+=p}return new Uint8Array(i,0,a)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),No,Uo,Fo,qo,Ts,Lo,ze,Gt=K(()=>{"use strict";ge(),No=["V","I","W","E","F"],Uo=(e,t)=>{console.log(`[${No[e]},${new Date().toISOString()}]${t}`)},Ts=(e,t)=>{Fo=e,qo=t},Lo=(e,t)=>{let r=mn(e),a=mn(Fo);r>=a&&Uo(r,typeof t=="function"?t():t)},ze=(...e)=>{qo&&Lo(...e)}}),Wo,Lr,U,hn,Op,Rp,Dp,we=K(()=>{"use strict";Wo=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Lr=class{static calcShape(e,t,r=!1){let a=e.length,n=t.length;if(a===0)return t;if(n===0)return e;let i=Math.max(e.length,t.length),s=new Array(i);if(r){if(a<2||n<2)return;let l=Wo.calcMatMulShape([e[a-2],e[a-1]],[t[n-2],t[n-1]]);if(l===void 0)return;[s[i-2],s[i-1]]=l}for(let l=r?3:1;l<=i;l++){let d=a-l<0?1:e[a-l],p=n-l<0?1:t[n-l];if(d!==p&&d>1&&p>1)return;let m=Math.max(d,p);if(d&&p)s[i-l]=Math.max(d,p);else{if(m>1)return;s[i-l]=0}}return s}static isValidBroadcast(e,t){let r=e.length,a=t.length;if(r>a)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[a-n])return!1;return!0}},U=class pn{static size(t){return pn.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let a=t.length;if(a===0)return[];let n=new Array(a),i=a-1;for(;i>=0;){if(t[i]%r===0){n[i]=t[i]/r;break}if(r%t[i]!==0)throw new Error("cannot convert shape");n[i]=1,r/=t[i],i--}for(i--;i>=0;i--)n[i]=t[i];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return pn.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return pn.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,a){let n=1;for(let i=r;i<a;i++){if(t[i]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[i])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let a=new Array(r);a[r-1]=1,a[r-2]=t[r-1];for(let n=r-3;n>=0;--n)a[n]=a[n+1]*t[n+1];return a}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(a=>this.normalizeAxis(a,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(a=>t[a]):t.slice().reverse()}static padShape(t,r){let a=t.length;return t.map((n,i)=>n+r[i]+r[i+a])}static areEqual(t,r){return t.length!==r.length?!1:t.every((a,n)=>a===r[n])}},hn=class ha{static adjustPoolAttributes(t,r,a,n,i,s){if(!t&&a.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let l=0;l<r.length-2;l++)l>=a.length?a.push(r[l+2]):a[l]=r[l+2];for(let l=0;l<a.length;l++)if(l<n.length){if(n[l]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let l=0;l<a.length;l++)if(l<i.length){if(i[l]<0)throw new Error("dilations should be greater than or equal to 1")}else i.push(1);for(let l=0;l<a.length*2;l++)if(l<s.length){if(s[l]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let l=0;l<a.length;l++){if(a[l]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[l]>=a[l]||s[l+a.length]>=a[l])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,a,n,i,s,l){if(l){if(i.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let d=0;d<t.length-2;d++)ha.adjustPadAndReturnShape(t[d+(s?1:2)],r[d],a[d],n[d],i,d,d+t.length-2,l)}}static computePoolOutputShape(t,r,a,n,i,s,l){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let d=[r[0],r[1]];return ha.computeShapeHelper(t,r,d,a,n,i,s,l),d}static computeConvOutputShape(t,r,a,n,i,s,l){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let d=[t[0],r[0]];return ha.computeShapeHelper(!1,t,d,a,n,i,s,l),d}static computeShapeHelper(t,r,a,n,i,s,l,d){if(t)for(let p=0;p<r.length-2;p++)a.push(1);else for(let p=0;p<r.length-2;p++)a.push(ha.adjustPadAndReturnShape(r[p+2],n[p],i[p],s[p],l,p,p+r.length-2,d))}static adjustPadAndReturnShape(t,r,a,n,i,s,l,d){let p=a*(n-1)+1;if(d&&d!=="NOTSET")switch(d){case"VALID":return i[s]=0,i[l]=0,Math.floor((t-p)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(a!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let m=((t+r-1)/r-1)*r+n-t;return i[s]=Math.floor(d==="SAME_LOWER"?(m+1)/2:m/2),i[l]=m-i[s],Math.floor((t+m-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+i[s]+i[l]-p)/r+1)}},Op=class{static getShapeOfGemmResult(e,t,r,a,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let i,s,l;t?(i=e[1],s=e[0]):(i=e[0],s=e[1]);let d=-1;if(a?(l=r[0],d=1):(l=r[1],d=0),r[d]!==s)throw new Error("dimension mismatch");if(i<=0||l<=0||s<=0)throw new Error("invalid shape specified");if(n&&!Lr.isValidBroadcast(n,[i,l]))throw new Error("gemm: invalid bias shape for broadcast");return[i,l,s]}},Rp=-34028234663852886e22,Dp=34028234663852886e22}),Is,Mp=K(()=>{"use strict";ge(),Is=(e,t)=>new(xs(t))(e)}),rs,mi,jo,hi,Vo,gi,_i,yi,Ho,Bp,Hh=K(()=>{"use strict";Gt(),rs=(e,t=!0)=>{if(e.byteLength%8!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 8 (BigInt).");let r=e.byteLength/8,a=new BigInt64Array(e.buffer,e.byteOffset,r),n=new Int32Array(r);for(let i=0;i<r;i++){let s=a[i];if(s>2147483647n||s<-2147483648n)throw new Error(`Overflow occurred when converting BigInt to Int32 at index ${i}: ${s}`);n[i]=Number(s)}return t?new Uint8Array(n.buffer):n},mi=(e,t=!0)=>{if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (Int32).");let r=e.byteLength/4,a=new Int32Array(e.buffer,e.byteOffset,r),n=BigInt64Array.from(a,BigInt);return t?new Uint8Array(n.buffer):n},jo=1,hi=()=>jo++,Vo=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),gi=(e,t)=>{let r=Vo.get(e);if(!r)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((a,n)=>a*n)*r/8):0},_i=class{constructor(e){this.shouldConvertInt64toInt32=!1,this.isInt64ToInt32Converted=!1;let{sessionId:t,context:r,tensor:a,dataType:n,shape:i,shouldConvertInt64toInt32:s=!1}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=a,this.dataType=n,this.tensorShape=i,this.shouldConvertInt64toInt32=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return gi(this.dataType,this.tensorShape)}destroy(){ze("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e,t){if(e){let r=await this.mlContext.readTensor(this.mlTensor),a=mi(new Uint8Array(r));if(t){(t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength)).set(a);return}else return a.buffer}else return t?this.mlContext.readTensor(this.mlTensor,t):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((a,n)=>a===r[n])}setIsInt64ToInt32Converted(e){this.isInt64ToInt32Converted=e}},yi=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,a){let n=t,i=this.tensorManager.getMLContext(e),s=n==="int64"&&!i.opSupportLimits().input.dataTypes.includes("int64");if(s&&(n="int32",ze("verbose",()=>"[WebNN] TensorIdTracker.ensureTensor: convert dataType from int64 to int32")),this.wrapper){if(this.wrapper.canReuseTensor(i,n,r))return this.wrapper.tensor;if(a){if(this.wrapper.byteLength!==gi(n,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let l=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,n,r,l,!0,!0,s),a&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper)if(this.wrapper.shouldConvertInt64toInt32&&(t=rs(e,!0),this.wrapper.setIsInt64ToInt32Converted(!0)),t.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else ze("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isInt64ToInt32Converted?mi(this.activeUpload):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(this.wrapper?.shouldConvertInt64toInt32,e):this.wrapper.read(this.wrapper?.shouldConvertInt64toInt32)}},Ho=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=hi();return this.tensorTrackersById.set(e,new yi(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,a,n){ze("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${a}, copyOld: ${n}}`);let i=this.tensorTrackersById.get(t);if(!i)throw new Error("Tensor not found.");return i.ensureTensor(e,r,a,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){ze("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,a){let n=this.getMLContext(e),i=hi(),s=new _i({sessionId:e,context:n,tensor:t,dataType:r,shape:a});return this.tensorTrackersById.set(i,new yi(this,s)),this.externalTensors.add(s),i}async getCachedTensor(e,t,r,a,n,i,s=!1){let l=this.getMLContext(e);for(let[p,m]of this.freeTensors.entries())if(m.canReuseTensor(l,t,r)){ze("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${r}}`);let h=this.freeTensors.splice(p,1)[0];return h.sessionId=e,h}ze("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${r}}`);let d=await l.createTensor({dataType:t,shape:r,dimensions:r,usage:a,writable:n,readable:i});return new _i({sessionId:e,context:l,tensor:d,dataType:t,shape:r,shouldConvertInt64toInt32:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Bp=(...e)=>new Ho(...e)}),Ja,Go,Pp,Gh=K(()=>{"use strict";ge(),_r(),Mp(),Hh(),Gt(),Ja=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Go=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),a=Object.keys(t).sort();return r.length===a.length&&r.every((n,i)=>n===a[i]&&e[n]===t[n])},Pp=class{constructor(e){this.tensorManager=Bp(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,Ts(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){ze("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){ze("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)ze("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(a=>a.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:a}),a}}else if(e===void 0){let r=this.mlContextCache.findIndex(a=>a.options===void 0&&a.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let a=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:a}),a}}let t=this.mlContextCache.findIndex(r=>Go(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let a=this.mlContextCache.findIndex(n=>n.mlContext===t);a!==-1&&this.mlContextCache.splice(a,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ze("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,a,n){let i=Ja.get(r);if(!i)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,i,a,n)}async createTemporaryTensor(e,t,r){ze("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let a=Ja.get(t);if(!a)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,a,r,!1);let i=this.temporarySessionTensorIds.get(e);return i?i.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!We().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");ze("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Is(r,t)}}registerMLTensor(e,t,r,a){let n=Ja.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let i=this.tensorManager.registerTensor(e,t,n,a);return ze("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${a}} -> {tensorId: ${i}}`),i}registerMLConstant(e,t,r,a,n,i,s=!1){if(!i)throw new Error("External mounted files are not available.");let l=e;e.startsWith("./")&&(l=e.substring(2));let d=i.get(l);if(!d)throw new Error(`File with name ${l} not found in preloaded files.`);if(t+r>d.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let p=d.slice(t,t+r).buffer,m;switch(n.dataType){case"float32":m=new Float32Array(p);break;case"float16":m=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(p):new Uint16Array(p);break;case"int32":m=new Int32Array(p);break;case"uint32":m=new Uint32Array(p);break;case"int64":s?(m=rs(new Uint8Array(p),!1),n.dataType="int32"):m=new BigInt64Array(p);break;case"uint64":m=new BigUint64Array(p);break;case"int8":m=new Int8Array(p);break;case"int4":case"uint4":case"uint8":m=new Uint8Array(p);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return ze("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),a.constant(n,m)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isInt64Supported(e){return!!this.mlContextBySessionId.get(e)?.opSupportLimits().input.dataTypes.includes("int64")}flush(){}}}),zs=K(()=>{"use strict"}),vi,en,tn,Ko,Xo,bi,as,Zo,Np,Kh=K(()=>{"use strict";Gt(),zs(),vi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),en=[],tn=e=>Math.ceil(Number(e)/16)*16,Ko=e=>{for(let t=0;t<en.length;t++){let r=en[t];if(e<=r)return r}return Math.ceil(e/16)*16},Xo=1,bi=()=>Xo++,as=async(e,t,r,a)=>{let n=tn(r),i=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,i,0,n),e.flush(),await i.mapAsync(GPUMapMode.READ);let l=i.getMappedRange();if(a){let d=a();return d.set(new Uint8Array(l,0,r)),d}else return new Uint8Array(l.slice(0,r))}finally{i.destroy()}},Zo=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of vi)en.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,a=t.byteOffset,n=t.byteLength,i=tn(n),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${n}`);let l=this.backend.device.createBuffer({mappedAtCreation:!0,size:i,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),d=l.getMappedRange();new Uint8Array(d).set(new Uint8Array(r,a,n)),l.unmap();let p=this.backend.device.createCommandEncoder();p.copyBufferToBuffer(l,0,s.gpuData.buffer,0,i),this.backend.device.queue.submit([p.finish()]),l.destroy(),ze("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let a=this.storageCache.get(t);if(!a)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==a.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=tn(r.originalSize),i=this.backend.getCommandEncoder();this.backend.endComputePass(),i.copyBufferToBuffer(r.gpuData.buffer,0,a.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let a;if(r){if(a=r[0],e===r[1])return ze("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, buffer is the same, skip.`),a;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else a=bi();return this.storageCache.set(a,{gpuData:{id:a,type:0,buffer:e},originalSize:t}),ze("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${a}, registered.`),a}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ze("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Ko(e),a,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,i=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||i){let l=(n?this.freeBuffers:this.freeUniformBuffers).get(r);l?l.length>0?a=l.pop():a=this.backend.device.createBuffer({size:r,usage:t}):a=this.backend.device.createBuffer({size:r,usage:t})}else a=this.backend.device.createBuffer({size:r,usage:t});let s={id:bi(),type:0,buffer:a};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),ze("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return ze("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await as(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=vi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(ze("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Np=(...e)=>new Zo(...e)}),Yo,De,Xe=K(()=>{"use strict";Yo=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},De=e=>new Yo(e)}),Wr,rn,Qe,nt,ce,Ke,ns,qr,rr,le,oa,W,ne,Up,Cs,Qo,Fp,ke=K(()=>{"use strict";ge(),we(),Wr=64,rn=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Qe=(e,t=1)=>{let r=rn(e,t);return typeof r=="string"?r:r[0]},nt=(e,t=1)=>{let r=rn(e,t);return typeof r=="string"?r:r[1]},ce=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:U.computeStrides(r)})}),t},Ke=e=>e%4===0?4:e%2===0?2:1,ns=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,qr=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,rr=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,le=(e,t,r,a)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?a==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:a==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,oa=(e,t,r,a,n)=>{let i=typeof r=="number",s=i?r:r.length,l=[...new Array(s).keys()],d=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,p=rn(t,n),m=typeof p=="string"?p:p[1],h=typeof p=="string"?p:p[0],_={indices:d,value:m,storage:h,tensor:t},$=j=>typeof j=="string"?j:`${j}u`,b={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},E=i?"uniforms.":"",I=`${E}${e}_shape`,T=`${E}${e}_strides`,k="";for(let j=0;j<s-1;j++)k+=`
    let dim${j} = current / ${le(T,j,s)};
    let rest${j} = current % ${le(T,j,s)};
    indices[${j}] = dim${j};
    current = rest${j};
    `;k+=`indices[${s-1}] = current;`;let A=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${_.indices} {
    var indices: ${_.indices};
    var current = offset;
    ${k}
    return indices;
  }`,z=j=>(b.offsetToIndices=!0,s<2?j:`o2i_${e}(${j})`),O=[];if(s>=2)for(let j=s-1;j>=0;j--)O.push(`${le(T,j,s)} * (indices[${j}])`);let M=s<2?"":`
  fn i2o_${e}(indices: ${_.indices}) -> u32 {
    return ${O.join("+")};
  }`,B=j=>(b.indicesToOffset=!0,s<2?j:`i2o_${e}(${j})`),q=(...j)=>s===0?"0u":`${_.indices}(${j.map($).join(",")})`,H=(j,Q)=>s<2?`${j}`:`${le(j,Q,s)}`,Z=(j,Q,_e)=>s<2?`${j}=${_e};`:`${le(j,Q,s)}=${_e};`,de={},ae=(j,Q)=>{b.broadcastedIndicesToOffset=!0;let _e=`${Q.name}broadcastedIndicesTo${e}Offset`;if(_e in de)return`${_e}(${j})`;let F=[];for(let be=s-1;be>=0;be--){let ut=Q.indicesGet("outputIndices",be+Q.rank-s);F.push(`${H(T,be)} * (${ut} % ${H(I,be)})`)}return de[_e]=`fn ${_e}(outputIndices: ${Q.type.indices}) -> u32 {
             return ${F.length>0?F.join("+"):"0u"};
           }`,`${_e}(${j})`},Y=(j,Q)=>(()=>{if(_.storage===_.value)return`${e}[${j}]=${Q};`;if(_.storage==="vec2<u32>"&&_.value==="i32")return`${e}[${j}]=vec2<u32>(u32(${Q}), select(0u, 0xFFFFFFFFu, ${Q} < 0));`;if(_.storage==="vec2<u32>"&&_.value==="u32")return`${e}[${j}]=vec2<u32>(u32(${Q}), 0u);`;if(_.storage==="u32"&&_.value==="vec4<bool>")return`${e}[${j}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${Q}));`;throw new Error(`not supported combination of storage type ${_.storage} and value type ${_.value} yet`)})(),X=j=>(()=>{if(_.storage===_.value)return`${e}[${j}]`;if(_.storage==="vec2<u32>"&&_.value==="i32")return`i32(${e}[${j}].x)`;if(_.storage==="vec2<u32>"&&_.value==="u32")return`u32(${e}[${j}].x)`;if(_.storage==="u32"&&_.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${j}] & 0xFFu), bool(${e}[${j}] & 0xFF00u), bool(${e}[${j}] & 0xFF0000u), bool(${e}[${j}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${_.storage} and value type ${_.value} yet`)})(),ie=s<2?"":`
  fn get_${e}ByIndices(indices: ${_.indices}) -> ${m} {
    return ${X(`i2o_${e}(indices)`)};
  }`,J=s<2?"":(()=>{let j=l.map(_e=>`d${_e}: u32`).join(", "),Q=l.map(_e=>`d${_e}`).join(", ");return`
  fn get_${e}(${j}) -> ${m} {
    return get_${e}ByIndices(${q(Q)});
  }`})(),me=(...j)=>{if(j.length!==s)throw new Error(`indices length must be ${s}`);let Q=j.map($).join(",");return s===0?X("0u"):s===1?X(Q[0]):(b.get=!0,b.getByIndices=!0,b.indicesToOffset=!0,`get_${e}(${Q})`)},ye=j=>s<2?X(j):(b.getByIndices=!0,b.indicesToOffset=!0,`get_${e}ByIndices(${j})`),fe=s<2?"":`
  fn set_${e}ByIndices(indices: ${_.indices}, value: ${m}) {
    ${Y(`i2o_${e}(indices)`,"value")}
  }`,Me=s<2?"":(()=>{let j=l.map(_e=>`d${_e}: u32`).join(", "),Q=l.map(_e=>`d${_e}`).join(", ");return`
  fn set_${e}(${j}, value: ${m}) {
    set_${e}ByIndices(${q(Q)}, value);
  }`})();return{impl:()=>{let j=[],Q=!1;return b.offsetToIndices&&(j.push(A),Q=!0),b.indicesToOffset&&(j.push(M),Q=!0),b.broadcastedIndicesToOffset&&(Object.values(de).forEach(_e=>j.push(_e)),Q=!0),b.set&&(j.push(Me),Q=!0),b.setByIndices&&(j.push(fe),Q=!0),b.get&&(j.push(J),Q=!0),b.getByIndices&&(j.push(ie),Q=!0),!i&&Q&&j.unshift(`const ${I} = ${_.indices}(${r.join(",")});`,`const ${T} = ${_.indices}(${U.computeStrides(r).join(",")});`),j.join(`
`)},type:_,offsetToIndices:z,indicesToOffset:B,broadcastedIndicesToOffset:ae,indices:q,indicesGet:H,indicesSet:Z,set:(...j)=>{if(j.length!==s+1)throw new Error(`indices length must be ${s}`);let Q=j[s];if(typeof Q!="string")throw new Error("value must be string");let _e=j.slice(0,s).map($).join(",");return s===0?Y("0u",Q):s===1?Y(_e[0],Q):(b.set=!0,b.setByIndices=!0,b.indicesToOffset=!0,`set_${e}(${_e}, ${Q})`)},setByOffset:Y,setByIndices:(j,Q)=>s<2?Y(j,Q):(b.setByIndices=!0,b.indicesToOffset=!0,`set_${e}ByIndices(${j}, ${Q});`),get:me,getByOffset:X,getByIndices:ye,usage:a,name:e,strides:T,shape:I,rank:s}},W=(e,t,r,a=1)=>oa(e,t,r,"input",a),ne=(e,t,r,a=1)=>oa(e,t,r,"output",a),Up=(e,t,r)=>oa(e,t,r,"atomicOutput",1),Cs=(e,t,r,a=1)=>oa(e,t,r,"internal",a),Qo=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Wr){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],a=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||a>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*a>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${a}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,i=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*a}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${a})
  fn main(${i}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",a=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${a}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:a}of this.uniforms)if(a&&a>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(a/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(a/4)}>`);else{let n=a==null||a===1?r:`vec${a}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Fp=(e,t)=>new Qo(e,t)}),Jo,wi,eu,tu,ru,au,ft,qp,Lp,ar=K(()=>{"use strict";ge(),we(),Xe(),ke(),Jo=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},wi=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),eu=(e,t)=>U.sortBasedOnPerm(e,wi(e.length,t)),tu=(e,t,r,a)=>{let n=`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let i=0;i<t;++i)n+=`a[${e[i]}]=i[${i}];`;return n+="return a;}"},ru=(e,t)=>{let r=[],a=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&a.push(t[n]);return{newShape:r,newPerm:a}},au=(e,t)=>{let r=0;for(let a=0;a<e.length;++a)if(t[e[a]]!==1){if(e[a]<r)return!1;r=e[a]}return!0},ft=(e,t)=>{let r=e.dataType,a=e.dims.length,n=wi(a,t),i=eu(e.dims,n),s=e.dims,l=i,d=a<2||au(n,e.dims),p;if(d)return p=b=>{let E=W("input",r,s,4),I=ne("output",r,l,4);return`
  ${b.registerUniform("output_size","u32").declareVariables(E,I)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=U.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(b/64/4)},programUniforms:[{type:12,data:Math.ceil(b/4)}]}},getShaderSource:p};let{newShape:m,newPerm:h}=ru(e.dims,n),_=U.areEqual(h,[2,3,1]),$=U.areEqual(h,[3,1,2]);if(m.length===2||_||$){s=_?[m[0],m[1]*m[2]]:$?[m[0]*m[1],m[2]]:m,l=[s[1],s[0]];let b=16;return p=E=>{let I=W("a",r,s.length),T=ne("output",r,l.length);return`
  ${E.registerUniform("output_size","u32").declareVariables(I,T)}
  var<workgroup> tile : array<array<${T.type.value}, ${b+1}>, ${b}>;
  ${E.mainStart([b,b,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${b} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${b}u + local_id.x;
    let input_row = workgroup_id_x * ${b}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${I.getByIndices(`${I.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${b}u + local_id.x;
    let output_row = workgroup_id_y * ${b}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${T.setByIndices(`${T.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let E=U.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(l[1]/b),y:Math.ceil(l[0]/b)},programUniforms:[{type:12,data:E},...ce(s,l)]}},getShaderSource:p}}return p=b=>{let E=W("a",r,s.length),I=ne("output",r,l.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(E,I)}

  ${tu(n,a,E,I)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${I.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${I.setByOffset("global_idx",E.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let b=U.size(i);return{outputs:[{dims:i,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...ce(s,l)]}},getShaderSource:p}},qp=(e,t)=>{Jo(e.inputs,t.perm),e.compute(ft(e.inputs[0],t.perm))},Lp=e=>De({perm:e.perm})}),nu,iu,su,ou,uu,lu,du,pu,cu,fu,kt,Wp,jp,Vp,Hp,Gp,Kp,Xp,Zp,Yp,Qp,Xh=K(()=>{"use strict";ge(),we(),ke(),As(),ar(),nu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},iu={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},su={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},ou={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},uu=(e,t)=>{let r=[];for(let a=t-e;a<t;++a)r.push(a);return r},lu=(e,t)=>{let r=[],a=e.length;for(let i=0;i<a;i++)t.indexOf(i)===-1&&r.push(e[i]);let n=t.map(i=>e[i]);return[r,n]},du=(e,t)=>{let r=e.length+t.length,a=[],n=0;for(let i=0;i<r;i++)t.indexOf(i)===-1?a.push(e[n++]):a.push(1);return a},pu=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},cu=(e,t)=>{let r=[];if(!pu(e,t)){for(let a=0;a<t;++a)e.indexOf(a)===-1&&r.push(a);e.forEach(a=>r.push(a))}return r},fu=(e,t,r,a,n,i,s)=>{let l=r[0].dims,d=U.size(i),p=U.size(s),m=W("_A",r[0].dataType,l),h=ne("output",n,i),_=64;d===1&&(_=256);let $=`
          var<workgroup> aBestValues : array<f32, ${_}>;
       `,b=E=>`
        ${E.registerUniform("reduceSize","u32").declareVariables(m,h)}
        ${$}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${E.mainStart(_)}

          let outputIndex = global_idx / ${_};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${su[a]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${_}) {
           let candidate = f32(${m.getByOffset("offset + k")});
           bestValue = ${nu[a]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${_}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${iu[a]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${h.setByOffset("outputIndex",`${a==="mean"?`${h.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${h.type.storage}(${ou[a]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${_}`,inputDependencies:["type"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:i,dataType:n}],dispatchGroup:{x:d},programUniforms:[{type:12,data:p}]})}},kt=(e,t,r,a)=>{let n=e.inputs.length===1?r:is(e.inputs,r),i=n.axes;i.length===0&&!n.noopWithEmptyAxes&&(i=e.inputs[0].dims.map(($,b)=>b));let s=U.normalizeAxes(i,e.inputs[0].dims.length),l=s,d=e.inputs[0],p=cu(l,e.inputs[0].dims.length);p.length>0&&(d=e.compute(ft(e.inputs[0],p),{inputs:[0],outputs:[-1]})[0],l=uu(l.length,d.dims.length));let[m,h]=lu(d.dims,l),_=m;n.keepDims&&(_=du(m,s)),e.compute(fu(t,n.cacheKey,[d],a,e.inputs[0].dataType,_,h),{inputs:[d]})},Wp=(e,t)=>{kt(e,"ReduceMeanShared",t,"mean")},jp=(e,t)=>{kt(e,"ReduceL1Shared",t,"l1")},Vp=(e,t)=>{kt(e,"ReduceL2Shared",t,"l2")},Hp=(e,t)=>{kt(e,"ReduceLogSumExpShared",t,"logSumExp")},Gp=(e,t)=>{kt(e,"ReduceMaxShared",t,"max")},Kp=(e,t)=>{kt(e,"ReduceMinShared",t,"min")},Xp=(e,t)=>{kt(e,"ReduceProdShared",t,"prod")},Zp=(e,t)=>{kt(e,"ReduceSumShared",t,"sum")},Yp=(e,t)=>{kt(e,"ReduceSumSquareShared",t,"sumSquare")},Qp=(e,t)=>{kt(e,"ReduceLogSumShared",t,"logSum")}}),Et,mu,gn,is,St,hu,gu,_u,yu,vu,bu,wu,$u,xu,ku,Tt,Jp,ec,tc,rc,ac,nc,ic,sc,oc,uc,As=K(()=>{"use strict";ge(),we(),Xe(),ke(),Xh(),Et=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},mu=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],gn=(e,t,r,a,n,i,s=!1,l=!1)=>{let d=[],p=r[0].dims,m=p.length,h=U.normalizeAxes(n,m),_=!l&&h.length===0;p.forEach((E,I)=>{_||h.indexOf(I)>=0?s&&d.push(1):d.push(E)});let $=d.length,b=U.size(d);return{name:e,shaderCache:t,getShaderSource:E=>{let I=[],T=W("_A",r[0].dataType,m),k=ne("output",i,$),A=a(T,k,h),z=A[2];for(let O=0,M=0;O<m;O++)_||h.indexOf(O)>=0?(s&&M++,z=`for(var j${O}: u32 = 0; j${O} < ${p[O]}; j${O}++) {
                  ${A[2].includes("last_index")?`let last_index = j${O};`:""}
                  ${T.indicesSet("input_indices",O,`j${O}`)}
                  ${z}
                }`):(I.push(`${T.indicesSet("input_indices",O,k.indicesGet("output_indices",M))};`),M++);return`

        ${E.registerUniform("output_size","u32").declareVariables(T,k)}

        ${E.mainStart()}
          ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${T.type.indices};
          let output_indices = ${k.offsetToIndices("global_idx")};

          ${I.join(`
`)}
          ${A[0]}       // init ops for reduce max/min
          ${A[1]}
          ${z}
          ${A[3]}
          ${A.length===4?k.setByOffset("global_idx","value"):A.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:d,dataType:i}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...ce(p,d)]})}},is=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),De({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},St=(e,t,r,a)=>{let n=e.inputs,i=n.length===1?r:is(n,r);e.compute(gn(t,{hint:i.cacheKey,inputDependencies:["rank"]},[n[0]],i.noopWithEmptyAxes&&i.axes.length===0?mu:a,i.axes,n[0].dataType,i.keepDims,i.noopWithEmptyAxes),{inputs:[0]})},hu=(e,t)=>{Et(e.inputs),St(e,"ReduceLogSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},gu=(e,t)=>{Et(e.inputs),St(e,"ReduceL1",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},_u=(e,t)=>{Et(e.inputs),St(e,"ReduceL2",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},yu=(e,t)=>{Et(e.inputs),St(e,"ReduceLogSumExp",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},vu=(e,t)=>{Et(e.inputs),St(e,"ReduceMax",t,(r,a,n)=>{let i=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&i.push(r.indicesSet("input_indices",s,0));return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},bu=(e,t)=>{Et(e.inputs),St(e,"ReduceMean",t,(r,a,n)=>{let i=1;for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&(i*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${a.type.value}(sum / ${i});`]})},wu=(e,t)=>{Et(e.inputs),St(e,"ReduceMin",t,(r,a,n)=>{let i=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&i.push(`input_indices[${s}] = 0;`);return[`${i.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},$u=(e,t)=>{Et(e.inputs),St(e,"ReduceProd",t,(r,a)=>[`var value = ${a.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},xu=(e,t)=>{Et(e.inputs),St(e,"ReduceSum",t,(r,a)=>[`var value = ${a.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},ku=(e,t)=>{Et(e.inputs),St(e,"ReduceSumSquare",t,(r,a)=>[`var t = ${a.type.value}(0); var value = ${a.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},Tt=(e,t,r)=>{if(t.length===0)return r;let a=1,n=1;for(let i=0;i<t.length;i++)t.indexOf(i)===-1?a*=e[i]:n*=e[i];return n<32&&a>1024},Jp=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bu(e,t):Wp(e,t)},ec=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gu(e,t):jp(e,t)},tc=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_u(e,t):Vp(e,t)},rc=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yu(e,t):Hp(e,t)},ac=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vu(e,t):Gp(e,t)},nc=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?wu(e,t):Kp(e,t)},ic=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?$u(e,t):Xp(e,t)},sc=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xu(e,t):Zp(e,t)},oc=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ku(e,t):Yp(e,t)},uc=(e,t)=>{Tt(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hu(e,t):Qp(e,t)}}),$i,lc,dc,ss,Zh=K(()=>{"use strict";ge(),Xe(),As(),$i=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},lc=(e,t)=>{$i(e.inputs);let r=(a,n,i)=>{let s=[];for(let l=0;l<a.rank;l++)(i.indexOf(l)>=0||i.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(gn("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},dc=(e,t)=>{$i(e.inputs);let r=(a,n,i)=>{let s=[];for(let l=0;l<a.rank;l++)(i.indexOf(l)>=0||i.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${a.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${a.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${a.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(gn("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},ss=e=>De(e)}),Eu,an,Su,Tu,Iu,wa,zu,pc,Os=K(()=>{"use strict";ge(),we(),zs(),ke(),Eu=(e,t)=>{let r=e[0],a=e[1],n=e[2],i=e[3],s=e[4],l=e[5];if(s&&l)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let d=r.dims[0],p=r.dims[1],m=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(a.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(a.dims[0]!==m)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==a.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let h=n.dims[0]/3,_=h,$=_;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let A of t.qkvHiddenSizes)if(A%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");h=t.qkvHiddenSizes[0],_=t.qkvHiddenSizes[1],$=t.qkvHiddenSizes[2]}let b=p;if(h!==_)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==h+_+$)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let E=0;if(s){if(_!==$)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==d)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==_/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(E=s.dims[3])}let I=b+E,T=-1,k=0;if(i)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(l){if(l.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[2]!==p||l.dims[3]!==I)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:p,pastSequenceLength:E,kvSequenceLength:b,totalSequenceLength:I,maxSequenceLength:T,inputHiddenSize:m,hiddenSize:h,vHiddenSize:$,headSize:Math.floor(h/t.numHeads),vHeadSize:Math.floor($/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:k,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},an=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,Su=(e,t,r,a,n,i,s,l)=>{let d=Ke(s?1:i),p=64,m=i/d;m<p&&(p=32);let h=Math.ceil(i/d/p),_=[{type:12,data:t},{type:12,data:r},{type:12,data:a},{type:12,data:n},{type:12,data:m},{type:12,data:h}],$=Qe(e.dataType,d),b=nt(1,d),E=["type"];s&&E.push("type"),l&&E.push("type");let I=T=>{let k=ne("x",e.dataType,e.dims,d),A=[k],z=s?W("seq_lens",s.dataType,s.dims):void 0;z&&A.push(z);let O=l?W("total_sequence_length_input",l.dataType,l.dims):void 0;O&&A.push(O);let M=nt(e.dataType),B=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${p}>;
  var<workgroup> thread_sum: array<f32, ${p}>;
  ${T.registerUniforms(B).declareVariables(...A)}
  ${T.mainStart([p,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${an(z,O,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${p}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${b}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${b}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(d){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${d}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${p}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${b}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${b}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(d){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${d}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${p}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${k.type.value}(${M}(1.0) / ${M}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${b}(x[offset + i]);
        x[offset + i] = ${k.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${k.type.value}(${M}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${p};${$};${d}`,inputDependencies:E},getShaderSource:I,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:n,z:t*r},programUniforms:_})}},Tu=(e,t,r,a,n,i,s,l,d)=>{let p=s+i.kvSequenceLength,m=[i.batchSize,i.numHeads,i.sequenceLength,p],h=e>1&&a,_=i.kvNumHeads?i.kvNumHeads:i.numHeads,$=h?[i.batchSize,_,p,i.headSize]:void 0,b=i.nReps?i.nReps:1,E=i.scale===0?1/Math.sqrt(i.headSize):i.scale,I=Ke(i.headSize),T=i.headSize/I,k=12,A={x:Math.ceil(p/k),y:Math.ceil(i.sequenceLength/k),z:i.batchSize*i.numHeads},z=[{type:12,data:i.sequenceLength},{type:12,data:T},{type:12,data:p},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:1,data:E},{type:12,data:s},{type:12,data:i.kvSequenceLength},{type:12,data:b}],O=h&&a&&U.size(a.dims)>0,M=["type","type"];O&&M.push("type"),n&&M.push("type"),l&&M.push("type"),d&&M.push("type");let B=[{dims:m,dataType:t.dataType,gpuDataType:0}];h&&B.push({dims:$,dataType:t.dataType,gpuDataType:0});let q=H=>{let Z=W("q",t.dataType,t.dims,I),de=W("key",r.dataType,r.dims,I),ae=[Z,de];if(O){let fe=W("past_key",a.dataType,a.dims,I);ae.push(fe)}n&&ae.push(W("attention_bias",n.dataType,n.dims));let Y=l?W("seq_lens",l.dataType,l.dims):void 0;Y&&ae.push(Y);let X=d?W("total_sequence_length_input",d.dataType,d.dims):void 0;X&&ae.push(X);let ie=ne("output",t.dataType,m),J=[ie];h&&J.push(ne("present_key",t.dataType,$,I));let me=nt(1,I),ye=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${k}u;

  var<workgroup> tileQ: array<${Z.type.storage}, ${k*k}>;
  var<workgroup> tileK: array<${Z.type.storage}, ${k*k}>;
  ${H.registerUniforms(ye).declareVariables(...ae,...J)}
  ${H.mainStart([k,k,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${b===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${b===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${an(Y,X,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${O&&h?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${h?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${me}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${O&&h?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${h?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${me}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(I){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${I}`)}})()};
        output[outputIdx] = ${ie.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${I};${n!==void 0};${a!==void 0};${e}`,inputDependencies:M},getRunData:()=>({outputs:B,dispatchGroup:A,programUniforms:z}),getShaderSource:q}},Iu=(e,t,r,a,n,i,s=void 0,l=void 0)=>{let d=i+n.kvSequenceLength,p=n.nReps?n.nReps:1,m=n.vHiddenSize*p,h=e>1&&a,_=n.kvNumHeads?n.kvNumHeads:n.numHeads,$=h?[n.batchSize,_,d,n.headSize]:void 0,b=[n.batchSize,n.sequenceLength,m],E=12,I={x:Math.ceil(n.vHeadSize/E),y:Math.ceil(n.sequenceLength/E),z:n.batchSize*n.numHeads},T=[{type:12,data:n.sequenceLength},{type:12,data:d},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:m},{type:12,data:i},{type:12,data:n.kvSequenceLength},{type:12,data:p}],k=h&&a&&U.size(a.dims)>0,A=["type","type"];k&&A.push("type"),s&&A.push("type"),l&&A.push("type");let z=[{dims:b,dataType:t.dataType,gpuDataType:0}];h&&z.push({dims:$,dataType:t.dataType,gpuDataType:0});let O=M=>{let B=W("probs",t.dataType,t.dims),q=W("v",r.dataType,r.dims),H=[B,q];k&&H.push(W("past_value",a.dataType,a.dims));let Z=s?W("seq_lens",s.dataType,s.dims):void 0;s&&H.push(Z);let de=l?W("total_sequence_length_input",l.dataType,l.dims):void 0;l&&H.push(de);let ae=[ne("output",t.dataType,b)];h&&ae.push(ne("present_value",t.dataType,$));let Y=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${E}u;
  var<workgroup> tileQ: array<${B.type.value}, ${E*E}>;
  var<workgroup> tileV: array<${B.type.value}, ${E*E}>;
  ${M.registerUniforms(Y).declareVariables(...H,...ae)}
  ${M.mainStart([E,E,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${p===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${p===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${an(Z,de,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${k&&h?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${h?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${B.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${k&&h?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${h?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${a!==void 0};${e}`,inputDependencies:A},getRunData:()=>({outputs:z,dispatchGroup:I,programUniforms:T}),getShaderSource:O}},wa=(e,t,r,a,n,i,s,l,d,p,m=void 0,h=void 0)=>{let _=Math.min(e.outputCount,1+(s?1:0)+(l?1:0)),$=_>1?p.pastSequenceLength:0,b=$+p.kvSequenceLength,E=d&&U.size(d.dims)>0?d:void 0,I=[t,r];_>1&&s&&U.size(s.dims)>0&&I.push(s),E&&I.push(E),m&&I.push(m),h&&I.push(h);let T=e.compute(Tu(_,t,r,s,E,p,$,m,h),{inputs:I,outputs:_>1?[-1,1]:[-1]})[0];e.compute(Su(T,p.batchSize,p.numHeads,$,p.sequenceLength,b,m,h),{inputs:m&&h?[T,m,h]:[T],outputs:[]});let k=[T,a];_>1&&l&&U.size(l.dims)>0&&k.push(l),m&&k.push(m),h&&k.push(h),e.compute(Iu(_,T,a,l,p,$,m,h),{inputs:k,outputs:_>1?[0,2]:[0]})},zu=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],a=t.sequenceLength,n=t.inputHiddenSize,i=t.headSize,s=12,l={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},d=[e.inputs[0],e.inputs[1],e.inputs[2]],p=[{type:12,data:a},{type:12,data:n},{type:12,data:i},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],m=h=>{let _=ne("output_q",d[0].dataType,r),$=ne("output_k",d[0].dataType,r),b=ne("output_v",d[0].dataType,r),E=W("input",d[0].dataType,d[0].dims),I=W("weight",d[1].dataType,d[1].dims),T=W("bias",d[2].dataType,d[2].dims),k=E.type.storage,A=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${k}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${k}, ${s*s}>;
  var<workgroup> tileWeightK: array<${k}, ${s*s}>;
  var<workgroup> tileWeightV: array<${k}, ${s*s}>;
  ${h.registerUniforms(A).declareVariables(E,I,T,_,$,b)}
  ${h.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${k}(0);
    var valueK = ${k}(0);
    var valueV = ${k}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:l,programUniforms:p}),getShaderSource:m},{inputs:d,outputs:[-1,-1,-1]})},pc=(e,t)=>{let r=Eu(e.inputs,t),[a,n,i]=zu(e,r);return wa(e,a,n,i,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),Cu,Au,Ou,cc,Yh=K(()=>{"use strict";Ot(),ge(),we(),Xe(),ke(),Cu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(a,n,i)=>{let s=n.length;if(s!==a.length)throw new Error(`${i}: num dimensions != ${s}`);n.forEach((l,d)=>{if(l!==a[d])throw new Error(`${i}: dim[${d}] do not match`)})};if(e[0].dims.length>1){let a=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,a,"Invalid input scale"),r(e[2].dims,a,"Invalid input B"),r(e[3].dims,a,"Invalid input mean"),r(e[4].dims,a,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Au=(e,t)=>{let{epsilon:r,spatial:a,format:n}=t,i=e[0].dims,s=a?Ke(i[i.length-1]):1,l=n==="NHWC"&&i.length>1?s:1,d=U.size(i)/s,p=a,m=p?i.length:i,h=W("x",e[0].dataType,e[0].dims,s),_=W("scale",e[1].dataType,e[1].dims,l),$=W("bias",e[2].dataType,e[2].dims,l),b=W("inputMean",e[3].dataType,e[3].dims,l),E=W("inputVar",e[4].dataType,e[4].dims,l),I=ne("y",e[0].dataType,m,s),T=()=>{let A="";if(a)A=`let cOffset = ${i.length===1?"0u":n==="NHWC"?`outputIndices[${i.length-1}] / ${s}`:"outputIndices[1]"};`;else if(n==="NCHW")A=`
            ${I.indicesSet("outputIndices","0","0")}
            let cOffset = ${I.indicesToOffset("outputIndices")};`;else{A=`var cIndices = ${_.type.indices}(0);
                       cIndices[0] = outputIndices[${i.length-1}];`;for(let z=1;z<_.rank;z++)A+=`cIndices[${z}] = outputIndices[${z}];`;A+=`let cOffset = ${_.indicesToOffset("cIndices")};`}return A},k=A=>`
  const epsilon = ${r};
  ${A.registerUniform("outputSize","u32").declareVariables(h,_,$,b,E,I)}
  ${A.mainStart()}
  ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${I.offsetToIndices(`global_idx * ${s}`)};
    ${T()}
    let scale = ${_.getByOffset("cOffset")};
    let bias = ${$.getByOffset("cOffset")};
    let inputMean = ${b.getByOffset("cOffset")};
    let inputVar = ${E.getByOffset("cOffset")};
    let x = ${h.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${I.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${a}_${s}`,inputDependencies:p?["rank","type","type","type","type"]:void 0},getShaderSource:k,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p?[{type:12,data:d},...ce(i)]:[{type:12,data:d}]})}},Ou=e=>De(e),cc=(e,t)=>{let{inputs:r,outputCount:a}=e,n=Ou({...t,outputCount:a});if(je.webgpu.validateInputContent&&Cu(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Au(r,n))}}),Ru,Du,fc,Qh=K(()=>{"use strict";we(),ke(),Ru=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Du=e=>{let t=e[0].dims,r=e[0].dims[2],a=U.size(t)/4,n=e[0].dataType,i=W("input",n,t,4),s=W("bias",n,[r],4),l=W("residual",n,t,4),d=ne("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:p=>`
  const channels = ${r}u / 4;
  ${p.declareVariables(i,s,l,d)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let value = ${i.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx","value")}
  }`}},fc=e=>{Ru(e.inputs),e.compute(Du(e.inputs))}}),Mu,Oe,mc,hc,gc,_c,yc,vc,bc,wc,$c,Bu,xc,kc,Ec,Sc,ga,Tc,cn,Ic,zc,Cc,Ac,Oc,Rc,Dc,Mc,Bc,Pc,Nc,Uc,Fc,qc,Lc,Wc,xi,jc,os,us,Vc,Hc,Gc,Pu,Nu,Kc,Rs=K(()=>{"use strict";ge(),we(),Xe(),ke(),Mu=(e,t,r,a,n,i,s)=>{let l=Math.ceil(t/4),d="";typeof n=="string"?d=`${n}(a)`:d=n("a");let p=W("inputData",r,[l],4),m=ne("outputData",a,[l],4),h=[{name:"vec_size",type:"u32"}];return s&&h.push(...s),`
      ${e.registerUniforms(h).declareVariables(p,m)}

  ${i??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${p.getByOffset("global_idx")};
    ${m.setByOffset("global_idx",d)}
  }`},Oe=(e,t,r,a,n,i=e.dataType,s,l)=>{let d=[{type:12,data:Math.ceil(U.size(e.dims)/4)}];return s&&d.push(...s),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:p=>Mu(p,U.size(e.dims),e.dataType,i,r,a,l),getRunData:p=>({outputs:[{dims:e.dims,dataType:i}],dispatchGroup:{x:Math.ceil(U.size(p[0].dims)/64/4)},programUniforms:d})}},mc=e=>{e.compute(Oe(e.inputs[0],"Abs","abs"))},hc=e=>{e.compute(Oe(e.inputs[0],"Acos","acos"))},gc=e=>{e.compute(Oe(e.inputs[0],"Acosh","acosh"))},_c=e=>{e.compute(Oe(e.inputs[0],"Asin","asin"))},yc=e=>{e.compute(Oe(e.inputs[0],"Asinh","asinh"))},vc=e=>{e.compute(Oe(e.inputs[0],"Atan","atan"))},bc=e=>{e.compute(Oe(e.inputs[0],"Atanh","atanh"))},wc=e=>De(e),$c=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Oe(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Bu=e=>{let t,r,a=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=a?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=a?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return De({min:t,max:r})},xc=(e,t)=>{let r=t||Bu(e.inputs),a=nt(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${a}>(uniforms.min), vec4<${a}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:a},{name:"max",type:a}]),{inputs:[0]})},kc=e=>{e.compute(Oe(e.inputs[0],"Ceil","ceil"))},Ec=e=>{e.compute(Oe(e.inputs[0],"Cos","cos"))},Sc=e=>{e.compute(Oe(e.inputs[0],"Cosh","cosh"))},ga=e=>De(e),Tc=(e,t)=>{let r=nt(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"Elu",a=>`elu_vf32(${a})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},cn=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Ic=e=>{let t=nt(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,cn(t)))},zc=e=>{e.compute(Oe(e.inputs[0],"Exp","exp"))},Cc=e=>{e.compute(Oe(e.inputs[0],"Floor","floor"))},Ac=e=>{let t=nt(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,cn(t)))},Oc=(e,t)=>{let r=nt(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"LeakyRelu",a=>`select(leaky_relu_alpha_ * ${a}, ${a}, ${a} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Rc=e=>{e.compute(Oe(e.inputs[0],"Not",t=>`!${t}`))},Dc=e=>{e.compute(Oe(e.inputs[0],"Neg",t=>`-${t}`))},Mc=e=>{e.compute(Oe(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Bc=e=>{let t=nt(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Pc=e=>{e.compute(Oe(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Nc=e=>De(e),Uc=(e,t)=>{let r=nt(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"HardSigmoid",a=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${a} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},Fc=e=>{e.compute(Oe(e.inputs[0],"Sin","sin"))},qc=e=>{e.compute(Oe(e.inputs[0],"Sinh","sinh"))},Lc=e=>{e.compute(Oe(e.inputs[0],"Sqrt","sqrt"))},Wc=e=>{e.compute(Oe(e.inputs[0],"Tan","tan"))},xi=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,jc=e=>{e.compute(Oe(e.inputs[0],"Tanh",xi))},os=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${xi("v")};
}
`,us=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Vc=e=>{let t=nt(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"FastGelu",us,os(t),void 0,e.inputs[0].dataType))},Hc=(e,t)=>{let r=nt(e.inputs[0].dataType);return e.compute(Oe(e.inputs[0],"ThresholdedRelu",a=>`select(vec4<${r}>(0.0), ${a}, ${a} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},Gc=e=>{e.compute(Oe(e.inputs[0],"Log","log"))},Pu=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Nu=e=>`quick_gelu_impl(${e})`,Kc=(e,t)=>{let r=nt(e.inputs[0].dataType);e.compute(Oe(e.inputs[0],"QuickGelu",Nu,Pu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Uu,Fu,Xc,Jh=K(()=>{"use strict";we(),ke(),Rs(),Uu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Fu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=W("input",e[0].dataType,e[0].dims,4),a=W("bias",e[0].dataType,[e[0].dims[2]],4),n=ne("output",e[0].dataType,t,4),i=U.size(t)/4,s=Qe(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:l=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${l.declareVariables(r,a,n)}

  ${cn(s)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Xc=e=>{Uu(e.inputs),e.compute(Fu(e.inputs))}}),qu,Lu,It,Zc,Yc,Qc,Jc,ef,tf,rf,af,nf,sf,eg=K(()=>{"use strict";ge(),we(),ke(),qu=(e,t,r,a,n,i,s,l,d,p,m,h)=>{let _,$;typeof l=="string"?_=$=(k,A)=>`${l}((${k}),(${A}))`:typeof l=="function"?_=$=l:(_=l.scalar,$=l.vector);let b=ne("outputData",m,a.length,4),E=W("aData",d,t.length,4),I=W("bData",p,r.length,4),T;if(n)if(i){let k=U.size(t)===1,A=U.size(r)===1,z=t.length>0&&t[t.length-1]%4===0,O=r.length>0&&r[r.length-1]%4===0;k||A?T=b.setByOffset("global_idx",$(k?`${E.type.value}(${E.getByOffset("0")}.x)`:E.getByOffset("global_idx"),A?`${I.type.value}(${I.getByOffset("0")}.x)`:I.getByOffset("global_idx"))):T=`
            let outputIndices = ${b.offsetToIndices("global_idx * 4u")};
            let offsetA = ${E.broadcastedIndicesToOffset("outputIndices",b)};
            let offsetB = ${I.broadcastedIndicesToOffset("outputIndices",b)};
            ${b.setByOffset("global_idx",$(s||z?E.getByOffset("offsetA / 4u"):`${E.type.value}(${E.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||O?I.getByOffset("offsetB / 4u"):`${I.type.value}(${I.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else T=b.setByOffset("global_idx",$(E.getByOffset("global_idx"),I.getByOffset("global_idx")));else{if(!i)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let k=(A,z,O="")=>{let M=`aData[indexA${z}][componentA${z}]`,B=`bData[indexB${z}][componentB${z}]`;return`
            let outputIndices${z} = ${b.offsetToIndices(`global_idx * 4u + ${z}u`)};
            let offsetA${z} = ${E.broadcastedIndicesToOffset(`outputIndices${z}`,b)};
            let offsetB${z} = ${I.broadcastedIndicesToOffset(`outputIndices${z}`,b)};
            let indexA${z} = offsetA${z} / 4u;
            let indexB${z} = offsetB${z} / 4u;
            let componentA${z} = offsetA${z} % 4u;
            let componentB${z} = offsetB${z} % 4u;
            ${A}[${z}] = ${O}(${_(M,B)});
          `};m===9?T=`
            var data = vec4<u32>(0);
            ${k("data",0,"u32")}
            ${k("data",1,"u32")}
            ${k("data",2,"u32")}
            ${k("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:T=`
            ${k("outputData[global_idx]",0)}
            ${k("outputData[global_idx]",1)}
            ${k("outputData[global_idx]",2)}
            ${k("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(E,I,b)}

        ${h??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${T}
      }`},Lu=(e,t,r,a,n,i,s=r.dataType)=>{let l=r.dims.map(E=>Number(E)??1),d=a.dims.map(E=>Number(E)??1),p=!U.areEqual(l,d),m=l,h=U.size(l),_=!1,$=!1,b=[p];if(p){let E=Lr.calcShape(l,d,!1);if(!E)throw new Error("Can't perform binary op on the given tensors");m=E.slice(),h=U.size(m);let I=U.size(l)===1,T=U.size(d)===1,k=l.length>0&&l[l.length-1]%4===0,A=d.length>0&&d[d.length-1]%4===0;b.push(I),b.push(T),b.push(k),b.push(A);let z=1;for(let O=1;O<m.length;O++){let M=l[l.length-O],B=d[d.length-O];if(M===B)z*=M;else break}z%4===0?($=!0,_=!0):(I||T||k||A)&&(_=!0)}else _=!0;return b.push(_),{name:e,shaderCache:{hint:t+b.map(E=>E.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:E=>qu(E,l,d,m,_,p,$,n,r.dataType,a.dataType,s,i),getRunData:()=>({outputs:[{dims:m,dataType:s}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:Math.ceil(U.size(m)/4)},...ce(l,d,m)]})}},It=(e,t,r,a,n,i)=>{e.compute(Lu(t,n??"",e.inputs[0],e.inputs[1],r,a,i))},Zc=e=>{It(e,"Add",(t,r)=>`${t}+${r}`)},Yc=e=>{It(e,"Div",(t,r)=>`${t}/${r}`)},Qc=e=>{It(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},Jc=e=>{It(e,"Mul",(t,r)=>`${t}*${r}`)},ef=e=>{let t=W("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;It(e,"Pow",{scalar:(r,a)=>`pow_custom(${r},${a})`,vector:(r,a)=>`pow_vector_custom(${r},${a})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},tf=e=>{It(e,"Sub",(t,r)=>`${t}-${r}`)},rf=e=>{It(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},af=e=>{It(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},nf=e=>{It(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},sf=e=>{It(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Wu,ju,Vu,Hu,of,uf,tg=K(()=>{"use strict";ge(),we(),Xe(),ke(),Wu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,a=e[r],n=a.dataType,i=a.dims.length;e.forEach((s,l)=>{if(l!==r){if(s.dataType!==n)throw new Error("input tensors should be one type");if(s.dims.length!==i)throw new Error("input tensors should have the same shape");s.dims.forEach((d,p)=>{if(p!==t&&d!==a.dims[p])throw new Error("non concat dimensions must match")})}})},ju=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Vu=(e,t)=>{let r=e.length,a=[];for(let n=0;n<r;++n){let i=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?a.push(i):n===0?a.push(`if (inputIndex == ${n}u) { ${i} }`):n===r-1?a.push(`else { ${i} }`):a.push(`else if (inputIndex == ${n}) { ${i} }`)}return a.join(`
`)},Hu=(e,t,r,a)=>{let n=U.size(r),i=new Array(e.length),s=new Array(e.length),l=0,d=[],p=[],m=[{type:12,data:n}];for(let E=0;E<e.length;++E)l+=e[E].dims[t],i[E]=l,p.push(e[E].dims.length),s[E]=W(`input${E}`,a,p[E]),d.push("rank"),m.push({type:12,data:i[E]});for(let E=0;E<e.length;++E)m.push(...ce(e[E].dims));m.push(...ce(r));let h=ne("output",a,r.length),_=h.indicesGet("indices",t),$=Array.from(Array(i.length).keys()).map(E=>`uniforms.sizeInConcatAxis${E}`).join(","),b=E=>`

  ${(()=>{E.registerUniform("outputSize","u32");for(let I=0;I<e.length;I++)E.registerUniform(`sizeInConcatAxis${I}`,"u32");return E.declareVariables(...s,h)})()}

  ${ju(i.length,$)}

  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${h.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${_});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${i.length}u>(${$});
      ${_} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Vu(s,h)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:r,dataType:a}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:m}),getShaderSource:b}},of=(e,t)=>{let r=e.inputs,a=r[0].dims,n=U.normalizeAxis(t.axis,a.length);Wu(r,n);let i=a.slice();i[n]=r.reduce((l,d)=>l+(d.dims.length>n?d.dims[n]:0),0);let s=r.filter(l=>U.size(l.dims)>0);e.compute(Hu(s,n,i,r[0].dataType),{inputs:s})},uf=e=>De({axis:e.axis})}),mr,hr,gr,Ds,yr=K(()=>{"use strict";ge(),we(),mr=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},hr=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},gr=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Ds=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,a]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:a}}else if(t==="Clip"){let[r,a]=e?.activation_params||[Rp,Dp];return{activation:t,clipMax:a,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),et,lf,Ms=K(()=>{"use strict";et=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},lf=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),df,rg=K(()=>{"use strict";df=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),ya,Bs,Ps=K(()=>{"use strict";ge(),we(),ke(),yr(),ya=(e,t,r,a,n)=>{let i=a-r;return`
      ${Array.from({length:r}).map((s,l)=>`
      if (${le(t.shape,l,t.rank)} != 1) {
        ${t.indicesSet(e,l,le(n,l+i,a))}
      } else {
        ${t.indicesSet(e,l,0)}
      }`).join("")}
`},Bs=(e,t,r,a,n=!1,i)=>{let s=e[0].dims,l=e[1].dims,d=s[s.length-2],p=l[l.length-1],m=s[s.length-1],h=Ke(p),_=Ke(m),$=Ke(d),b=U.size(r)/h/$,E=e.length>2,I=a?a.slice(0,-2):r.slice(0,-2),T=[U.size(I),d,p],k=[{type:12,data:b},{type:12,data:d},{type:12,data:p},{type:12,data:m}];hr(t,k),k.push(...ce(I,s,l)),E&&k.push(...ce(e[2].dims)),k.push(...ce(T));let A=z=>{let O=Cs("batch_dims",e[0].dataType,I.length),M=W("a",e[0].dataType,s.length,_),B=W("b",e[1].dataType,l.length,h),q=ne("output",e[0].dataType,T.length,h),H=Qe(q.type.tensor),Z=mr(t,q.type.value,H),de=[M,B],ae="";if(E){let ie=n?h:1;de.push(W("bias",e[2].dataType,e[2].dims.length,ie)),ae=`${n?`value += bias[col / ${ie}];`:`value += ${q.type.value}(bias[row + i]);`}`}let Y=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];gr(t,Y);let X=()=>{let ie=`var a_data: ${M.type.value};`;for(let J=0;J<_;J++)ie+=`
              let b_data${J} = b[(b_offset + (k + ${J}) * uniforms.N + col) / ${h}];`;for(let J=0;J<$;J++){ie+=`a_data = a[(a_offset + (row + ${J}) * uniforms.K + k) / ${_}];`;for(let me=0;me<_;me++)ie+=`
            values[${J}] = fma(${B.type.value}(a_data${_===1?"":`[${me}]`}), b_data${me}, values[${J}]);
`}return ie};return`
  ${z.registerUniforms(Y).registerInternalVariables(O).declareVariables(...de,q)}
  ${z.mainStart()}
    ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${h})) * ${h};
    var index1 = global_idx / (uniforms.N / ${h});
    let stride1 = uniforms.M / ${$};
    let row = (index1 % stride1) * ${$};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${O.offsetToIndices("batch")};`}

    var a_indices: ${M.type.indices};
    ${ya("a_indices",M,M.rank-2,O.rank,"batch_indices")}
    ${M.indicesSet("a_indices",M.rank-2,0)}
    ${M.indicesSet("a_indices",M.rank-1,0)}
    let a_offset = ${M.indicesToOffset("a_indices")};

    var b_indices: ${B.type.indices};
    ${ya("b_indices",B,B.rank-2,O.rank,"batch_indices")}
    ${B.indicesSet("b_indices",B.rank-2,0)}
    ${B.indicesSet("b_indices",B.rank-1,0)}
    let b_offset = ${B.indicesToOffset("b_indices")};
    var values: array<${q.type.value}, ${$}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${_}) {
      ${X()}
    }
    for (var i = 0u; i < ${$}u; i++) {
      var value = values[i];
      ${ae}
      ${Z}
      let cur_indices = ${q.type.indices}(batch, row + i, col);
      let offset = ${q.indicesToOffset("cur_indices")};
      ${q.setByOffset(`offset / ${h}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${h};${_};${$};${n}`,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:k}),getShaderSource:A}}}),Gu,Ku,ls,ki,Xu,ds,Zu,_n,Ns=K(()=>{"use strict";ge(),we(),ke(),yr(),Ps(),Ms(),Gu=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Ku=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,ls=(e,t,r="f32",a,n=!1,i=32,s=!1,l=32)=>{let d=t[1]*e[1],p=t[0]*e[0],m=n?d:i,h=n?i:d,_=m/t[0],$=i/t[1];if(!((n&&_===4&&e[1]===4||!n&&(_===3||_===4))&&m%t[0]===0&&i%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${_} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${_} must be 3 or 4.
  tileAWidth ${m} must be divisible by workgroupSize[0]${t[0]}. tileInner ${i} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${_}<${r}>, ${m/_}>, ${h}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${p/e[0]}>, ${i}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${_};
const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${d};

  let num_tiles = ${s?`${Math.ceil(l/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${l}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${$};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Gu(n,a)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${$}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${a?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${_===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Ku(n,_)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},ki=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Xu=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",ds=(e,t,r="f32",a,n=!1,i=32,s=!1,l=32,d=!1)=>{let p=e[1]*t[1],m=e[0]*t[0],h=n?p:i,_=n?i:p;if(!(_%t[1]===0&&h%t[0]===0&&i%t[1]===0))throw new Error(`tileAHight ${_} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${h} must be divisible by workgroupSize[0]${t[0]}, tileInner ${i} must be divisible by workgroupSize[1]${t[1]}`);let $=_/t[1],b=h/t[0],E=i/t[1],I=d?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${p};
    let globalColStart = i32(workgroupId.x) * ${m};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${_}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${h}; inputCol = inputCol + ${t[0]}) {
          ${ki(n,a)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${i}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${m}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${a?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${p};

let tileRowA = i32(localId.y) * ${$};
let tileColA = i32(localId.x) * ${b};
let tileRowB = i32(localId.y) * ${E};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${$}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${b}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${ki(n,a)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${E}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${a?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Xu(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${h}>, ${_}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${m}>, ${i}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${i};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${a?`let batchIndices = ${a.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(l/i)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${l}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${I}
  }
`},Zu=(e,t,r,a,n=!1)=>{let[i,s,l,d]=a,p=Qe(a[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${et(e,p)} {
      var value = ${et(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${ya("aIndices",s,s.rank-2,i.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${i.type.indices}) -> ${et(e,p)} {
      var value = ${et(e,p)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${l.type.indices};
        ${ya("bIndices",l,l.rank-2,i.rank,"batchIndices")}
        ${l.indicesSet("bIndices",l.rank-2,"u32(row)")}
        ${l.indicesSet("bIndices",l.rank-1,"u32(colIn)")}
        value = ${l.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${et(e,p)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${et(e,p)}(bias[row])`};`:""}
        ${r}
        ${d.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},_n=(e,t,r,a,n=!1,i)=>{let s=e[0].dims,l=e[1].dims,d=s.slice(0,-2),p=l.slice(0,-2),m=a?a.slice(0,-2):r.slice(0,-2),h=U.size(m),_=s[s.length-2],$=s[s.length-1],b=l[l.length-1],E=$%4===0&&b%4===0,I=_<=8?[4,1,1]:[4,4,1],T=[8,8,1],k=[Math.ceil(b/T[0]/I[0]),Math.ceil(_/T[1]/I[1]),Math.ceil(h/T[2]/I[2])],A=E?4:1,z=[...d,_,$/A],O=z.length,M=[...p,$,b/A],B=M.length,q=[h,_,b/A],H=[{type:6,data:_},{type:6,data:b},{type:6,data:$}];hr(t,H),H.push(...ce(m,z,M));let Z=["rank","rank"],de=e.length>2;de&&(H.push(...ce(e[2].dims)),Z.push("rank")),H.push(...ce(q));let ae=Y=>{let X=m.length,ie=Cs("batchDims",e[0].dataType,X,1),J=Qe(e[0].dataType),me=W("a",e[0].dataType,O,A),ye=W("b",e[1].dataType,B,A),fe=ne("result",e[0].dataType,q.length,A),Me=[me,ye];if(de){let be=n?A:1;Me.push(W("bias",e[2].dataType,e[2].dims.length,be))}let j=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];gr(t,j);let Q=Qe(fe.type.tensor),_e=mr(t,fe.type.value,Q),F=Zu(A,de,_e,[ie,me,ye,fe],n);return`
  ${Y.registerUniforms(j).registerInternalVariables(ie).declareVariables(...Me,fe)}
  ${F}
  ${E?ls(I,T,J,ie):ds(I,T,J,ie)}
                   `};return{name:"MatMul",shaderCache:{hint:`${I};${t.activation};${E};${n}`,inputDependencies:Z},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:H}),getShaderSource:ae}}}),Yu,pf,ag=K(()=>{"use strict";ge(),Gt(),ke(),yr(),Ms(),rg(),Ns(),Yu=(e,t,r,a,n=!1,i,s=4,l=4,d=4,p="f32")=>{let m=H=>{switch(H){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${p}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${H} is not supported.`)}},h=H=>{switch(H){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${H} is not supported.`)}},_=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,$=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,b=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",E=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",I=e?"row":"col",T=e?"col":"row",k=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${I} / outWidth;
    let outCol = ${I} % outWidth;

    let WRow = ${T} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${T} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${T} % inChannels;
    var resData = ${et(s,p)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${b} && xCol >= 0 && xCol < ${E}) {
      ${_}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${m(s)}
    }
    return resData;`,A=e?t&&a?`
    let col = colIn * ${s};
    ${k}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${k}
    }
    return ${et(s,p)}(0.0);`:a&&r?`
    let col = colIn * ${s};
    ${k}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${k}
    }
    return ${et(s,p)}(0.0);`,z=e?a&&r?h(l):`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${h(l)}
    }
    return ${et(l,p)}(0.0);`:`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${h(l)}
    }
    return ${et(l,p)}(0.0);`,O=et(d,p),M=et(e?s:l,p),B=et(e?l:s,p),q=mr(i,O,p);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${M} {
      ${e?A:z}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${B} {
      ${e?z:A}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${O}) {
      let col = colIn * ${d};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${$}
      ${lf(n)}
      ${q}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},pf=(e,t,r,a,n,i,s,l,d)=>{let p=t.format==="NHWC",m=p?e[0].dims[3]:e[0].dims[1],h=r[0],_=p?r[2]:r[3],$=p?r[1]:r[2],b=p?r[3]:r[1],E=p&&(m%4===0||m%3===0)&&b%4===0,I=p?b:_*$,T=p?_*$:b,k=[8,8,1],A=a<=8?[4,1,1]:[4,4,1],z=[Math.ceil(I/k[0]/A[0]),Math.ceil(T/k[1]/A[1]),Math.ceil(h/k[2]/A[2])];ze("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${z}`);let O=E?p&&m%4!==0?3:4:1,M=k[1]*A[1],B=k[0]*A[0],q=Math.max(k[0]*O,k[1]),H=a%M===0,Z=n%B===0,de=i%q===0,ae=E?[O,4,4]:[1,1,1],Y=[{type:6,data:a},{type:6,data:n},{type:6,data:i},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];hr(t,Y),Y.push(...ce(e[0].dims,e[1].dims));let X=["rank","rank"];s&&(Y.push(...ce(e[2].dims)),X.push("rank")),Y.push(...ce(r));let ie=J=>{let me=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];gr(t,me);let ye=E?4:1,fe=Qe(e[0].dataType),Me=`
      fn setOutputAtIndex(flatIndex : i32, value : ${E?`vec4<${fe}>`:fe}) {
        result[flatIndex] = ${E?`vec4<${fe}>`:fe}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${E?`vec4<${fe}>`:fe}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${E?"/ 4":""}, value);
      }`,j=W("x",e[0].dataType,e[0].dims.length,O===3?1:O),Q=W("w",e[1].dataType,e[1].dims.length,ye),_e=[j,Q],F=ne("result",e[0].dataType,r.length,ye);if(s){let be=W("bias",e[2].dataType,e[2].dims.length,ye);_e.push(be),Me+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${E?`vec4<${fe}>`:fe} {
          return bias[coords.${p?"w":"y"}${E?"/ 4":""}];
        }`}return`
        ${df("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${J.registerUniforms(me).declareVariables(..._e,F)}
        ${Me}
        ${Yu(p,H,Z,de,s,t,ae[0],ae[1],ae[2],fe)}
        ${E?ls(A,k,fe,void 0,!p,q):ds(A,k,fe,void 0,!p,q,!1,void 0,l)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${O};${E};${H};${Z};${de};${M};${B};${q}`,inputDependencies:X},getRunData:()=>({outputs:[{dims:d?d(r):r,dataType:e[0].dataType}],dispatchGroup:{x:z[0],y:z[1],z:z[2]},programUniforms:Y}),getShaderSource:ie}}}),Qu,Ei,ua,Ju,Si,el,cf,ff,ng=K(()=>{"use strict";ge(),Gt(),we(),ke(),yr(),Ms(),Qu=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Ei=e=>typeof e=="number"?[e,e,e]:e,ua=(e,t)=>t<=1?e:e+(e-1)*(t-1),Ju=(e,t,r,a=1)=>{let n=ua(t,a);return Math.floor((e[0]*(r-1)-r+n)/2)},Si=(e,t,r,a,n)=>{n==null&&(n=Ju(e,t[0],a[0]));let i=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*n>=t[s]&&(i[s]=Math.trunc((e[s]-t[s]+2*n)/a[s]+1));return i},el=(e,t,r,a,n,i,s,l,d,p)=>{let m,h,_,$;if(e==="VALID"&&(e=0),typeof e=="number"){m={top:e,bottom:e,left:e,right:e,front:e,back:e};let b=Si([t,r,a,1],[l,d,p],1,[n,i,s],e);h=b[0],_=b[1],$=b[2]}else if(Array.isArray(e)){if(!e.every((E,I,T)=>E===T[0]))throw Error(`Unsupported padding parameter: ${e}`);m={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let b=Si([t,r,a,1],[l,d,p],1,[n,i,s],e[0]);h=b[0],_=b[1],$=b[2]}else if(e==="SAME_UPPER"){h=Math.ceil(t/n),_=Math.ceil(r/i),$=Math.ceil(a/s);let b=(h-1)*n+l-t,E=(_-1)*i+d-r,I=($-1)*s+p-a,T=Math.floor(b/2),k=b-T,A=Math.floor(E/2),z=E-A,O=Math.floor(I/2),M=I-O;m={top:A,bottom:z,left:O,right:M,front:T,back:k}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:m,outDepth:h,outHeight:_,outWidth:$}},cf=(e,t,r,a,n,i=!1,s="channelsLast")=>{let l,d,p,m,h;if(s==="channelsLast")[l,d,p,m,h]=e;else if(s==="channelsFirst")[l,h,d,p,m]=e;else throw new Error(`Unknown dataFormat ${s}`);let[_,,$,b,E]=t,[I,T,k]=Ei(r),[A,z,O]=Ei(a),M=ua($,A),B=ua(b,z),q=ua(E,O),{padInfo:H,outDepth:Z,outHeight:de,outWidth:ae}=el(n,d,p,m,I,T,k,M,B,q),Y=i?_*h:_,X=[0,0,0,0,0];return s==="channelsFirst"?X=[l,Y,Z,de,ae]:s==="channelsLast"&&(X=[l,Z,de,ae,Y]),{batchSize:l,dataFormat:s,inDepth:d,inHeight:p,inWidth:m,inChannels:h,outDepth:Z,outHeight:de,outWidth:ae,outChannels:Y,padInfo:H,strideDepth:I,strideHeight:T,strideWidth:k,filterDepth:$,filterHeight:b,filterWidth:E,effectiveFilterDepth:M,effectiveFilterHeight:B,effectiveFilterWidth:q,dilationDepth:A,dilationHeight:z,dilationWidth:O,inShape:e,outShape:X,filterShape:t}},ff=(e,t,r,a,n,i)=>{let s=i==="channelsLast",l=s?e[0].dims[3]:e[0].dims[1],d=!1,p=[64,1,1],m={x:r.map((k,A)=>A)},h=[Math.ceil(Qu(m.x.map(k=>r[k]))/p[0]),1,1];ze("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${h}`);let _=d?s&&l%4!==0?3:4:1,$=U.size(r),b=[{type:12,data:$},{type:12,data:a},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];hr(t,b),b.push(...ce(e[0].dims,e[1].dims));let E=["rank","rank"],I=e.length===3;I&&(b.push(...ce(e[2].dims)),E.push("rank")),b.push(...ce(r));let T=k=>{let A=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:a.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];gr(t,A);let z=d?4:1,O=Qe(e[0].dataType),M=W("x",e[0].dataType,e[0].dims.length,_===3?1:_),B=W("W",e[1].dataType,e[1].dims.length,z),q=[M,B],H=ne("result",e[0].dataType,r.length,z),Z="";if(I){let Y=W("bias",e[2].dataType,e[2].dims.length,z);q.push(Y),Z+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${d?`vec4<${O}>`:O} {
          return bias[${s?le("coords",4,5):le("coords",1,5)}${d?"/ 4":""}];
        }`}let de=et(_,O),ae=mr(t,de,O);return`
            ${Z}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${M.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${B.getByIndices("aIndices")};
            }
          ${k.registerUniforms(A).declareVariables(...q,H)}
          ${k.mainStart()}
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${H.offsetToIndices("global_idx")};
              let batch = ${le("coords",0,M.rank)};
              let d2 = ${s?le("coords",M.rank-1,M.rank):le("coords",1,M.rank)};
              let xFRCCorner = vec3<u32>(${s?le("coords",1,M.rank):le("coords",2,M.rank)},
              ${s?le("coords",2,M.rank):le("coords",3,M.rank)},
              ${s?le("coords",3,M.rank):le("coords",4,M.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?le("uniforms.x_shape",1,M.rank):le("uniforms.x_shape",2,M.rank)};
              let xShapeZ = ${s?le("uniforms.x_shape",2,M.rank):le("uniforms.x_shape",3,M.rank)};
              let xShapeW = ${s?le("uniforms.x_shape",3,M.rank):le("uniforms.x_shape",4,M.rank)};
              let xShapeU = ${s?le("uniforms.x_shape",4,M.rank):le("uniforms.x_shape",1,M.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${I?"value = value + getBiasByOutputCoords(coords)":""};
              ${ae}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${_};${I}`,inputDependencies:E},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:h[0],y:h[1],z:h[2]},programUniforms:b}),getShaderSource:T}}}),mf,hf,ig=K(()=>{"use strict";ge(),we(),ke(),yr(),mf=(e,t,r,a)=>{let n=e.length>2,i=n?"value += b[output_channel];":"",s=e[0].dims,l=e[1].dims,d=t.format==="NHWC",p=d?r[3]:r[1],m=p/t.group,h=d&&m>=4?Ke(p):1,_=U.size(r)/h,$=[{type:12,data:_},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:m}];hr(t,$),$.push(...ce(s,[l[0],l[1],l[2],l[3]/h]));let b=n?["rank","rank","rank"]:["rank","rank"];$.push(...ce([r[0],r[1],r[2],r[3]/h]));let E=I=>{let T=ne("output",e[0].dataType,r.length,h),k=Qe(T.type.tensor),A=mr(t,T.type.value,k),z=W("x",e[0].dataType,s.length),O=W("w",e[1].dataType,l.length,h),M=[z,O];n&&M.push(W("b",e[2].dataType,e[2].dims,h));let B=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];gr(t,B);let q=d?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${z.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${O.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${z.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${O.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${I.registerUniforms(B).declareVariables(...M,T)}

  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${T.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${d?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${d?1:2}], outputIndices[${d?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${h} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${d?2:1}];

    var value: ${T.type.value} = ${T.type.value}(0);
    ${q}
    ${i}
    ${A}
    ${T.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${h}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:$}),getShaderSource:E}},hf=(e,t,r,a)=>{let n=e.length>2,i=Ke(r[3]),s=Ke(r[2]),l=U.size(r)/i/s,d=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/i],p=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/i],m=[r[0],r[1],r[2],r[3]/i],h=[{type:12,data:l},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];hr(t,h),h.push(...ce(d,p,m));let _=(s-1)*t.strides[1]+p[1],$=b=>{let E=ne("output",e[0].dataType,m.length,i),I=Qe(E.type.tensor),T=mr(t,E.type.value,I),k=W("x",e[0].dataType,d.length,i),A=W("w",e[1].dataType,p.length,i),z=[k,A];n&&z.push(W("b",e[2].dataType,e[2].dims,i));let O=n?"value += b[output_channel];":"",M=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return gr(t,M),`
  ${b.registerUniforms(M).declareVariables(...z,E)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${k.type.value}, ${_}>;
    var values: array<${E.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${p[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${_}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${k.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${k.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${p[1]}; w_width++) {
          let w_val = ${A.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${O}
      ${T}
      ${E.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${i};${s};${_};${p[0]};${p[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:h}),getShaderSource:$}}}),tl,nn,rl,sn,ps,Ti,al,nl,cs,sg=K(()=>{"use strict";we(),ag(),ng(),Ns(),ig(),yr(),Ps(),ar(),tl=(e,t,r,a,n,i)=>{let s=e[0],l=e.slice(i?1:2,i?3:4),d=l.length,p=t[0],m=t.slice(2).map((_,$)=>_+(_-1)*(r[$]-1)),h=l.map((_,$)=>_+a[$]+a[$+d]).map((_,$)=>Math.floor((_-m[$]+n[$])/n[$]));return h.splice(0,0,s),h.splice(i?3:1,0,p),h},nn=[2,3,1,0],rl=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[1]*t.group;if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},sn=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let i=2;i<t[1].dims.length;++i)r[i-2]===0&&(r[i-2]=t[1].dims[i]);let a=e.pads.slice();hn.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,a,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:a}),n},ps=e=>{let t=Ds(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,i=e.group,s=e.kernel_shape,l=e.pads,d=e.strides,p=e.w_is_const();return{autoPad:a,format:r,dilations:n,group:i,kernelShape:s,pads:l,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},Ti=(e,t,r,a)=>{let n=r.format==="NHWC",i=tl(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let M=[t[0]];if(n){let B=e.kernelCustomData.wT??e.compute(ft(t[1],nn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=B),M.push(B)}else M.push(t[1]);t.length===3&&M.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(hf(M,r,i,a),{inputs:M}):e.compute(mf(M,r,i,a),{inputs:M});return}let s=t.length===3,l=t[0].dims[n?1:2],d=t[0].dims[n?2:3],p=t[0].dims[n?3:1],m=t[1].dims[2],h=t[1].dims[3],_=i[n?1:2],$=i[n?2:3],b=i[n?3:1],E=n&&m===l&&h===d&&r.pads[0]===0&&r.pads[1]===0;if(E||m===1&&h===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let M=i[0],B,q,H,Z=[];if(n){let Y=e.kernelCustomData.wT??e.compute(ft(t[1],nn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=Y),E){let X=l*d*p;B=t[0].reshape([1,M,X]),q=Y.reshape([1,X,b]),H=[1,M,b]}else B=t[0].reshape([M,l*d,p]),q=Y.reshape([1,p,b]),H=[M,_*$,b];Z.push(B),Z.push(q)}else B=t[0].reshape([M,p,l*d]),q=t[1].reshape([1,b,p]),H=[M,b,_*$],Z.push(q),Z.push(B);s&&Z.push(t[2]);let de=H[2],ae=Z[0].dims[Z[0].dims.length-1];de<8&&ae<8?e.compute(Bs(Z,r,i,H,n,a),{inputs:Z}):e.compute(_n(Z,r,i,H,n,a),{inputs:Z});return}let I=!0,T=e.kernelCustomData.wT??e.compute(ft(t[1],nn),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=T);let k=[t[0],T];s&&k.push(t[2]);let A=n?_*$:b,z=n?b:_*$,O=m*h*p;e.compute(pf(k,r,i,A,z,O,s,I,a),{inputs:k})},al=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],i=[1].concat(t.strides),s=[1].concat(t.dilations),l=[1].concat(t.kernelShape),d=sn({...t,pads:n,strides:i,dilations:s,kernelShape:l},a);Ti(e,a,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},nl=(e,t,r)=>{let a=r.format==="NHWC"?"channelsLast":"channelsFirst",n=sn(r,t),i=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=cf(t[0].dims,t[1].dims,r.strides,r.dilations,i,!1,a);e.compute(ff(t,n,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],a))},cs=(e,t)=>{if(rl(e.inputs,t),e.inputs[0].dims.length===3)al(e,t);else if(e.inputs[0].dims.length===5)nl(e,e.inputs,t);else{let r=sn(t,e.inputs);Ti(e,e.inputs,r)}}}),gf,og=K(()=>{"use strict";ge(),Gt(),we(),ke(),gf=(e,t,r)=>{let a=e.length>2,n=t.outputShape,i=t.format==="NHWC",s=t.group,l=e[1].dims,d=l[2]/s,p=l[3],m=i?Ke(d):1,h=i&&p===1&&d>=4,_=h?Math.floor(d/4)*4:Math.floor(d/m)*m,$=d-_,b=i?Ke(p):1,E=i?p===1?m:b:1,I=U.size(n)/b,T=[Math.ceil(I/64),1,1];ze("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${T}`);let k=["rank","rank"],A=[t.strides[0],t.strides[1]],z=[t.kernelShape[i?1:2],t.kernelShape[i?2:3]],O=[t.dilations[0],t.dilations[1]],M=[z[0]+(t.dilations[0]<=1?0:(t.kernelShape[i?1:2]-1)*(t.dilations[0]-1)),z[1]+(t.dilations[1]<=1?0:(t.kernelShape[i?2:3]-1)*(t.dilations[1]-1))],B=[M[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),M[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],q=[{type:12,data:I},{type:12,data:A},{type:12,data:z},{type:12,data:O},{type:12,data:M},{type:6,data:B},{type:12,data:_},{type:12,data:d},{type:12,data:p},...ce(e[0].dims,e[1].dims)];a&&(q.push(...ce(e[2].dims)),k.push("rank")),q.push(...ce(n));let H=Z=>{let de=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:A.length},{name:"filter_dims",type:"u32",length:z.length},{name:"dilations",type:"u32",length:z.length},{name:"effective_filter_dims",type:"u32",length:M.length},{name:"pads",type:"i32",length:B.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],ae=Qe(e[0].dataType),Y=i?1:2,X=i?2:3,ie=i?3:1,J=W("W",e[1].dataType,e[1].dims.length,E),me=W("Dy",e[0].dataType,e[0].dims.length,m),ye=[me,J];a&&ye.push(W("bias",e[2].dataType,[n[ie]].length,b));let fe=ne("result",e[0].dataType,n.length,b),Me=()=>{let _e="";if(h)m===4?_e+=`
        let xValue = ${me.getByOffset("x_offset")};
        let wValue = ${J.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:m===2?_e+=`
          dotProd = dotProd + dot(vec4<${ae}>(${me.getByOffset("x_offset")}, ${me.getByOffset("x_offset + 1u")}), vec4<${ae}>(${J.getByOffset("w_offset")}, ${J.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:m===1&&(_e+=`
          dotProd = dotProd + dot(vec4<${ae}>(${me.getByOffset("x_offset")}, ${me.getByOffset("x_offset + 1u")}, ${me.getByOffset("x_offset + 2u")}, ${me.getByOffset("x_offset + 3u")}), vec4<${ae}>(${J.getByOffset("w_offset")}, ${J.getByOffset("w_offset + 1u")}, ${J.getByOffset("w_offset + 2u")}, ${J.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(_e+=`
                  let xValue = ${i?me.getByOffset(`${me.indicesToOffset(`${me.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${m}`):me.get("batch","inputChannel","idyR","idyC")};
        `,m===1)_e+=`
          let w_offset = ${J.indicesToOffset(`${J.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${J.getByOffset(`w_offset / ${E}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let F=0;F<m;F++)_e+=`
            let wValue${F} = ${J.getByOffset(`${J.indicesToOffset(`${J.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${F}, wOutChannel)`)} / ${E}`)};
            dotProd = dotProd + xValue[${F}] * wValue${F};`;return _e},j=()=>{if($===0)return"";if(!h)throw new Error(`packInputAs4 ${h} is not true.`);let _e="";if(m===1){_e+="dotProd = dotProd";for(let F=0;F<$;F++)_e+=`
            + ${me.getByOffset(`x_offset + ${F}`)} * ${J.getByOffset(`w_offset + ${F}`)}`;_e+=";"}else if(m===2){if($!==2)throw new Error(`Invalid inputChannelsRemainder ${$}.`);_e+=`
          let xValue = ${me.getByOffset("x_offset")};
          let wValue = ${J.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return _e},Q=`
            let outputIndices = ${fe.offsetToIndices(`global_idx * ${b}`)};
            let batch = ${fe.indicesGet("outputIndices",0)};
            let d1 = ${fe.indicesGet("outputIndices",ie)};
            let r = ${fe.indicesGet("outputIndices",Y)};
            let c = ${fe.indicesGet("outputIndices",X)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${fe.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${ae}(dyRCorner) + ${ae}(wR)) / ${ae}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${ae}(uniforms.Dy_shape[${Y}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${ae}(dyCCorner) + ${ae}(wC)) / ${ae}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${ae}(uniforms.Dy_shape[${X}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${h?`
                var x_offset = ${me.indicesToOffset(`${me.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${m};
                var w_offset = ${J.indicesToOffset(`${J.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${E};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${h?4:m}) {
                  ${Me()}
                  inputChannel = inputChannel + ${h?4:m};
                }
                ${j()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${a?` + bias[d1 / ${b}]`:""};
            ${fe.setByOffset("global_idx","value")};
          `;return`
    ${Z.registerUniforms(de).declareVariables(...ye,fe)}
      ${Z.mainStart()}
      ${Z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${Q}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${m}${E}${b}${h}${$}`,inputDependencies:k},getRunData:()=>({dispatchGroup:{x:T[0],y:T[1],z:T[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:q}),getShaderSource:H}}}),il,sl,ol,Ii,_f,ul,zi,ll,yf,ug=K(()=>{"use strict";og(),yr(),ar(),il=(e,t,r,a,n,i)=>(e-1)*t+r+(a-1)*n+1-i,sl=(e,t,r,a,n)=>{let i=Math.floor(e/2);t==="SAME_UPPER"?(r[a]=i,r[n]=e-i):t==="SAME_LOWER"&&(r[a]=e-i,r[n]=i)},ol=(e,t,r,a,n,i,s,l,d,p)=>{let m=e.length-2,h=p.length===0;d.length<m&&d.push(...Array(m-d.length).fill(0));let _=e[0],$=t[l?3:1]*n;for(let b=0,E=e.length-m-(l?1:0);b<m;++b,++E){let I=e[E],T=h?I*s[b]:p[b],k=il(I,s[b],i[b],t[E],r[b],T);sl(k,a,i,b,b+m),h&&p.push(s[b]*(I-1)+d[b]+(t[E]-1)*r[b]+1-i[b]-i[b+m])}p.splice(0,0,_),p.splice(l?3:1,0,$)},Ii=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((h,_)=>h*_,1)===0){r.length=0;for(let h=2;h<t[1].dims.length;++h)r.push(t[1].dims[h])}let a=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(a?3:1,0,t[1].dims[1]);let n=e.pads.slice(),i=e.outputShape.slice(),s=e.outputPadding.slice(),l=t[0].dims,d=e.dilations.slice();if(d.reduce((h,_)=>h+_,0)===0){let h=t[0].dims.length-2;d=new Array(h).fill(1)}let p=e.strides.slice();if(p.reduce((h,_)=>h+_,0)===0){let h=t[0].dims.length-2;p=new Array(h).fill(1)}ol(l,r,d,e.autoPad,e.group,n,p,a,s,i);let m=Object.assign({},e);return Object.assign(m,{kernelShape:r,pads:n,outputPadding:s,outputShape:i,dilations:d,strides:p}),m},_f=e=>{let t=Ds(e),r=e.format,a=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,i=e.group,s=e.kernelShape,l=e.pads,d=e.strides,p=e.wIsConst(),m=e.outputPadding,h=e.outputShape;return{autoPad:a,format:r,dilations:n,group:i,kernelShape:s,outputPadding:m,outputShape:h,pads:l,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},ul=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],a=e[1].dims[0];if(r!==a)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let i=e[0].dims.length-2;if(t.dilations.reduce((s,l)=>s+l,0)>0&&t.dilations.length!==i)throw new Error(`dilations should be ${i}D`);if(t.strides.reduce((s,l)=>s+l,0)>0&&t.strides.length!==i)throw new Error(`strides should be ${i}D`);if(t.pads.reduce((s,l)=>s+l,0)>0&&t.pads.length!==i*2)throw new Error(`pads should be ${i*2}D`);if(t.outputPadding.length!==i&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${i}D`);if(t.kernelShape.reduce((s,l)=>s+l,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},zi=(e,t,r,a)=>{let n=e.kernelCustomData.wT??e.compute(ft(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let i=[t[0],n];t.length===3&&i.push(t[2]),e.compute(gf(i,r,a),{inputs:i})},ll=(e,t)=>{let r=t.format==="NHWC",a=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&a.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let i=t.dilations;(i.length===0||i[0]===0)&&(i=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let l=t.pads;l.length===0&&(l=[0,0]),l=[0,l[0],0,l[1]],s=[1].concat(s),i=[1].concat(i),n=[1].concat(n);let d=t.outputPadding;d=[0].concat(d);let p=Ii({...t,pads:l,strides:s,dilations:i,kernelShape:n,outputPadding:d},a);zi(e,a,p,m=>r?[m[0],m[2],m[3]]:[m[0],m[1],m[3]])},yf=(e,t)=>{if(ul(e.inputs,t),e.inputs[0].dims.length===3)ll(e,t);else{let r=Ii(t,e.inputs);zi(e,e.inputs,r)}}}),dl,vf,bf,lg=K(()=>{"use strict";ge(),we(),Xe(),ke(),dl=(e,t,r,a)=>{let n=U.size(t),i=t.length,s=W("input",e,i),l=ne("output",e,i),d=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),p=U.normalizeAxis(d,i),m=h=>{let _=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,$=le("uniforms.input_shape","uniforms.axis",i),b=a.reverse?_+(a.exclusive?" + 1":""):"0",E=a.reverse?$:_+(a.exclusive?"":" + 1");return`
                ${h.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,l)}
                ${h.mainStart()}
                  ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${l.offsetToIndices("global_idx")};
                  var sum = ${l.type.value}(0);
                  let first : i32 = ${b};
                  let last : i32 = ${E};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${l.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:a.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:p},...ce(t,t)]}),getShaderSource:m}},vf=(e,t)=>{let r=e.inputs[0].dims,a=e.inputs[0].dataType,n=e.inputs[1];e.compute(dl(a,r,n,t),{inputs:[0]})},bf=e=>{let t=e.exclusive===1,r=e.reverse===1;return De({exclusive:t,reverse:r})}}),pl,cl,fl,wf,$f,dg=K(()=>{"use strict";ge(),we(),Xe(),ke(),pl=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},cl=(e,t,r,a)=>{let n=[];n.push(`fn perm(i: ${a.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let i=0;i<t;++i)n.push(r.indicesSet("a",e[i],`i[${i}]`));return n.push("return a;}"),n.join(`
`)},fl=(e,t)=>{let r,a,n,i,s,l,d=t.format==="NHWC",p=t.blocksize,m=t.mode==="DCR";d?([r,a,n,i]=e.dims,s=m?[r,a,n,p,p,i/p**2]:[r,a,n,i/p**2,p,p],l=m?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,a,n,i]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=m?[r,p,p,i/p**2,a,n]:[r,i/p**2,p,p,a,n],l=m?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let h=e.reshape(s),_=h.dims.length,$=e.dataType,b=W("a",$,_),E=ne("output",$,_),I=T=>`
  ${T.registerUniform("output_size","u32").declareVariables(b,E)}

  ${cl(l,_,b,E)}

  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${E.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${E.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:T=>{let k=d?[r,a*p,n*p,i/p**2]:[r,i/p**2,a*p,n*p],A=U.size(k),z=h.dims,O=U.sortBasedOnPerm(z,l);return{outputs:[{dims:k,dataType:T[0].dataType}],dispatchGroup:{x:Math.ceil(A/64)},programUniforms:[{type:12,data:A},...ce(z,O)]}},getShaderSource:I}},wf=(e,t)=>{pl(e.inputs),e.compute(fl(e.inputs[0],t))},$f=e=>De({blocksize:e.blocksize,mode:e.mode,format:e.format})}),on,la,Ci,ml,hl,gl,_l,Ai,yl,xf,kf,pg=K(()=>{"use strict";ge(),we(),Xe(),ke(),on="[a-zA-Z]|\\.\\.\\.",la="("+on+")+",Ci="^"+la+"$",ml="("+la+",)*"+la,hl="^"+ml+"$",gl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},_l=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,a]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(hl)))throw new Error("Invalid LHS term");if(r.split(",").forEach((n,i)=>{let s=e[i].dims.slice();if(!n.match(RegExp(Ci)))throw new Error("Invalid LHS term");let l=this.processTerm(n,!0,s,i);this.lhs.push(l)}),a==="")a+=[...this.symbolToInfo.entries()].filter(([n,i])=>i.count===1||n==="...").map(([n])=>n).join("");else if(!a.match(RegExp(la)))throw new Error("Invalid RHS");a.match(RegExp(on,"g"))?.forEach(n=>{if(n==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let i=this.symbolToInfo.get(n);if(i===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(i.dimValue)}}),this.rhs=this.processTerm(a,!1,this.outputDims)}addSymbol(e,t,r){let a=this.symbolToInfo.get(e);if(a!==void 0){if(a.dimValue!==t&&a.count!==1)throw new Error("Dimension mismatch");a.count++,a.inputIndices.push(r)}else a={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,a)}processTerm(e,t,r,a=-1){let n=r.length,i=!1,s=[],l=0;if(!e.match(RegExp(Ci))&&!t&&e!=="")throw new Error("Invalid LHS term");let d=e.match(RegExp(on,"g")),p=new gl(a);return d?.forEach((m,h)=>{if(m==="..."){if(i)throw new Error("Only one ellipsis is allowed per input term");i=!0;let _=n-d.length+1;if(_<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(l,l+_),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let $=0;$<s.length;$++){let b=String.fromCharCode(48+$);p.addSymbol(b,h+$),this.addSymbol(b,r[l++],a)}}else p.addSymbol(m,h+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(m,r[l++],a)}),p}},Ai=e=>e+"_max",yl=(e,t,r,a)=>{let n=e.map(p=>p.length).map((p,m)=>W(`input${m}`,t,p)),i=U.size(a),s=ne("output",t,a.length),l=[...r.symbolToInfo.keys()].filter(p=>!r.rhs.symbolToIndices.has(p)),d=p=>{let m=[],h="var prod = 1.0;",_="var sum = 0.0;",$="sum += prod;",b=[],E=[],I=[],T=[],k=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((z,O)=>{if(r.rhs.symbolToIndices.has(O)){let M=r.rhs.symbolToIndices.get(O)?.[0];M!==void 0&&r.lhs.forEach((B,q)=>{if(z.inputIndices.includes(q)){let H=B.symbolToIndices.get(O);if(H===void 0)throw new Error("Invalid symbol error");H.forEach(Z=>{m.push(`${n[q].indicesSet(`input${q}Indices`,Z,s.indicesGet("outputIndices",M))}`)})}})}else r.lhs.forEach((M,B)=>{if(z.inputIndices.includes(B)){let q=M.symbolToIndices.get(O);if(q===void 0)throw new Error("Invalid symbol error");q.forEach(H=>{b.push(`${n[B].indicesSet(`input${B}Indices`,H,`${O}`)}`)}),T.push(`prod *= ${n[B].getByIndices(`input${B}Indices`)};`)}}),E.push(`for(var ${O}: u32 = 0; ${O} < uniforms.${Ai(O)}; ${O}++) {`),I.push("}")});let A=k?[...m,`let sum = ${n.map((z,O)=>z.getByIndices(`input${O}Indices`)).join(" * ")};`]:[...m,_,...E,...b,h,...T,$,...I];return`
            ${p.registerUniforms(l.map(z=>({name:`${Ai(z)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,s)}

            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${n.map((z,O)=>`var input${O}Indices: ${n[O].type.indices};`).join(`
`)}
            ${A.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let p=l.filter(h=>r.symbolToInfo.has(h)).map(h=>({type:12,data:r.symbolToInfo.get(h)?.dimValue||0}));p.push({type:12,data:i});let m=e.map((h,_)=>[...ce(h)]).reduce((h,_)=>h.concat(_),p);return m.push(...ce(a)),{outputs:[{dims:a,dataType:t}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:m}},getShaderSource:d}},xf=(e,t)=>{let r=new _l(e.inputs,t.equation),a=r.outputDims,n=e.inputs.map((i,s)=>i.dims);e.compute(yl(n,e.inputs[0].dataType,r,a))},kf=e=>{let t=e.equation.replace(/\s+/g,"");return De({equation:t})}}),vl,Oi,bl,wl,Ef,cg=K(()=>{"use strict";ge(),we(),ke(),vl=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;a<r.length&&n<t.length;++a,++n)if(r[a]!==t[n]&&r[a]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Oi=(e,t)=>{let r=e.length-t.length,a=[];for(let n=0;n<r;++n)a.push(e[n]);for(let n=0;n<t.length;++n)a.push(t[n]===1?e[n+r]:t[n]);return a},bl=(e,t)=>e.length>t.length?Oi(e,t):Oi(t,e),wl=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),a=bl(t,r),n=e[0].dataType,i=n===9||U.size(t)===1,s=n===9||t.length>0&&t[t.length-1]%4===0?4:1,l=i||a.length>0&&a[a.length-1]%4===0?4:1,d=Math.ceil(U.size(a)/l),p=h=>{let _=W("input",n,t.length,s),$=ne("output",n,a.length,l),b;if(n===9){let E=(I,T,k="")=>`
          let outputIndices${T} = ${$.offsetToIndices(`outputOffset + ${T}u`)};
          let offset${T} = ${_.broadcastedIndicesToOffset(`outputIndices${T}`,$)};
          let index${T} = offset${T} / 4u;
          let component${T} = offset${T} % 4u;
          ${I}[${T}] = ${k}(${_.getByOffset(`index${T}`)}[component${T}]);
        `;b=`
        let outputOffset = global_idx * ${l};
        var data = vec4<u32>(0);
        ${E("data",0,"u32")}
        ${E("data",1,"u32")}
        ${E("data",2,"u32")}
        ${E("data",3,"u32")}
        ${$.setByOffset("global_idx","data")}
      }`}else b=`
        let outputIndices = ${$.offsetToIndices(`global_idx * ${l}`)};
        let inputOffset = ${_.broadcastedIndicesToOffset("outputIndices",$)};
        let data = ${$.type.value}(${_.getByOffset(`inputOffset / ${s}`)});
        ${$.setByOffset("global_idx","data")}
      }`;return`
    ${h.registerUniform("vec_size","u32").declareVariables(_,$)}
    ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${b}`},m=[{type:12,data:d},...ce(t,a)];return{name:"Expand",shaderCache:{hint:`${a.length};${s}${l}`,inputDependencies:["rank"]},getShaderSource:p,getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m})}},Ef=e=>{vl(e.inputs),e.compute(wl(e.inputs),{inputs:[0]})}}),$l,Sf,fg=K(()=>{"use strict";ge(),we(),ke(),Rs(),$l=e=>{let t=e[0].dataType,r=U.size(e[0].dims),a=U.size(e[1].dims),n=a%4===0,i=s=>{let l=W("x",t,[1],4),d=W("bias",t,[1],4),p=ne("y",t,[1],4),m=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],h=$=>`
      let bias${$}_offset: u32 = (global_idx * 4 + ${$}) % uniforms.bias_size;
      let bias${$} = ${d.getByOffset(`bias${$}_offset / 4`)}[bias${$}_offset % 4];`,_=n?`
      let bias = ${d.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${h(0)}${h(1)}${h(2)}${h(3)}
      let bias = ${l.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(m).declareVariables(l,d,p)}

    ${os(nt(t))}

    ${s.mainStart(Wr)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${l.getByOffset("global_idx")};
      ${_}
      let x_in = x + bias;
      ${p.setByOffset("global_idx",us("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:i,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:a}],dispatchGroup:{x:Math.ceil(r/Wr/4)}})}},Sf=e=>{e.inputs.length<2||U.size(e.inputs[1].dims)===0?Vc(e):e.compute($l(e.inputs))}}),xl,kl,Tf,If,mg=K(()=>{"use strict";ge(),we(),Xe(),ke(),xl=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},kl=(e,t)=>{let r=e[0].dims,a=e[1].dims,n=r.length,i=U.normalizeAxis(t.axis,n),s=r.slice(0);s.splice(i,1,...a);let l=r[i],d=e[0].dataType===9?4:1,p=Math.ceil(U.size(s)/d),m=[{type:12,data:p},{type:6,data:l},{type:12,data:i},...ce(e[0].dims,e[1].dims,s)],h=_=>{let $=W("data",e[0].dataType,e[0].dims.length,d),b=W("inputIndices",e[1].dataType,e[1].dims.length),E=ne("output",e[0].dataType,s.length,d),I=k=>{let A=a.length,z=`var indicesIndices${k}  = ${b.type.indices}(0);`;for(let O=0;O<A;O++)z+=`${A>1?`indicesIndices${k}[${O}]`:`indicesIndices${k}`} = ${s.length>1?`outputIndices${k}[uniforms.axis + ${O}]`:`outputIndices${k}`};`;z+=`
          var idx${k} = ${b.getByIndices(`indicesIndices${k}`)};
          if (idx${k} < 0) {
            idx${k} = idx${k} + uniforms.axisDimLimit;
          }
          var dataIndices${k} : ${$.type.indices};
        `;for(let O=0,M=0;O<n;O++)O===i?(z+=`${n>1?`dataIndices${k}[${O}]`:`dataIndices${k}`} = u32(idx${k});`,M+=A):(z+=`${n>1?`dataIndices${k}[${O}]`:`dataIndices${k}`} = ${s.length>1?`outputIndices${k}[${M}]`:`outputIndices${k}`};`,M++);return z},T;if(e[0].dataType===9){let k=(A,z,O="")=>`
          let outputIndices${z} = ${E.offsetToIndices(`outputOffset + ${z}u`)};
          ${I(z)};
          let offset${z} = ${$.indicesToOffset(`dataIndices${z}`)};
          let index${z} = offset${z} / 4u;
          let component${z} = offset${z} % 4u;
          ${A}[${z}] = ${O}(${$.getByOffset(`index${z}`)}[component${z}]);
        `;T=`
        let outputOffset = global_idx * ${d};
        var value = vec4<u32>(0);
        ${k("value",0,"u32")}
        ${k("value",1,"u32")}
        ${k("value",2,"u32")}
        ${k("value",3,"u32")}
        ${E.setByOffset("global_idx","value")}
      `}else T=`
      let outputIndices = ${E.offsetToIndices("global_idx")};
      ${I("")};
      let value = ${$.getByIndices("dataIndices")};
      ${E.setByOffset("global_idx","value")};
      `;return`
      ${_.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables($,b,E)}
      ${_.mainStart()}
        ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${T}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:h}},Tf=e=>De({axis:e.axis}),If=(e,t)=>{let r=e.inputs;xl(r),e.compute(kl(e.inputs,t))}}),El,zf,Cf,hg=K(()=>{"use strict";ge(),we(),ke(),El=(e,t,r,a,n,i,s,l,d)=>{let p=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:r},{type:12,data:s},{type:12,data:l},{type:12,data:d}],m=[i];p.push(...ce(t.dims,m));let h=_=>{let $=W("indices_data",t.dataType,t.dims.length),b=ne("input_slice_offsets_data",12,1,1),E=[$,b],I=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${_.registerUniforms(I).declareVariables(...E)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:m,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:p}),getShaderSource:h},{inputs:[t],outputs:[-1]})[0]},zf=(e,t)=>{let r=e.inputs,a=r[0].dims,n=r[0].dataType,i=r[1].dims,s=i[i.length-1],l=U.sizeToDimension(i,i.length-1),d=U.sizeFromDimension(a,t.batchDims+s),p=U.sizeToDimension(a,t.batchDims),m=U.sizeFromDimension(a,t.batchDims),h=l/p,_=new Array(s),$=d;for(let z=0;z<s;++z)_[s-1-z]=$,$*=a[t.batchDims+s-1-z];let b=El(e,r[1],_,t.batchDims,a,l,h,m,s),E=t.batchDims+s;if(E>a.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let I=i.slice(0,-1).concat(a.slice(E)),T=U.size(I),k=[{type:12,data:T},{type:12,data:d},...ce(r[0].dims,b.dims,I)],A=z=>{let O=W("data",r[0].dataType,r[0].dims.length),M=W("slice_offsets",12,b.dims.length),B=ne("output",r[0].dataType,I.length);return`
          ${z.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(O,M,B)}
            ${z.mainStart()}
            ${z.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:I,dataType:n}],dispatchGroup:{x:Math.ceil(T/64)},programUniforms:k}),getShaderSource:A},{inputs:[r[0],b]})},Cf=e=>({batchDims:e.batch_dims,cacheKey:""})}),Sl,Tl,Af,Of,gg=K(()=>{"use strict";ge(),we(),Xe(),ke(),Sl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=U.normalizeAxis(t.quantizeAxis,e[0].dims.length),a=t.blockSize,n=e[0],i=e[2],s=e.length===4?e[3]:void 0;if(i.dims.length!==n.dims.length||!n.dims.map((l,d)=>d===r?Math.ceil(l/a)===i.dims[d]:l===i.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==i.dims.length||!s.dims.map((l,d)=>l===i.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},Tl=(e,t)=>{let r=e[0].dims,a=e[1].dims,n=r.length,i=U.normalizeAxis(t.gatherAxis,n),s=U.normalizeAxis(t.quantizeAxis,n),l=r.slice(0);l.splice(i,1,...a);let d=U.size(l),p=e[2].dataType,m=e[0].dataType===22,h=[{type:12,data:d},{type:12,data:s},{type:12,data:i},{type:12,data:t.blockSize},...ce(...e.map(($,b)=>$.dims),l)],_=$=>{let b=W("data",e[0].dataType,e[0].dims.length),E=W("inputIndices",e[1].dataType,e[1].dims.length),I=W("scales",e[2].dataType,e[2].dims.length),T=e.length>3?W("zeroPoint",e[3].dataType,e[3].dims.length):void 0,k=ne("output",p,l.length),A=[b,E,I];T&&A.push(T);let z=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${$.registerUniforms(z).declareVariables(...A,k)}
        ${$.mainStart()}
        let output_indices = ${k.offsetToIndices("global_idx")};
        var indices_indices = ${E.type.indices}(0);
        ${a.length>1?`
          for (var i: u32 = 0; i < ${a.length}; i++) {
            let index = ${k.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${E.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${k.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${b.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${k.indicesGet("output_indices","i")};
          ${b.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${E.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[i]};
        }
        ${b.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${l.length}; i++) {
          let index = ${k.indicesGet("output_indices",`i + ${a.length} - 1`)};
          ${b.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${b.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${b.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${m?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${I.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${I.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${I.getByIndices("scale_indices")};
        ${T?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${T.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${T.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${m?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${nt(p)}(quantized_data - zero_point) * scale;
        ${k.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter(($,b)=>b!==1).map($=>$.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},($,b)=>"rank")},getRunData:()=>({outputs:[{dims:l,dataType:p}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:h}),getShaderSource:_}},Af=(e,t)=>{let r=e.inputs;Sl(r,t),e.compute(Tl(e.inputs,t))},Of=e=>De({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),Il,zl,Rf,Df,_g=K(()=>{"use strict";ge(),we(),Xe(),ke(),Il=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},zl=(e,t)=>{let r=e[0].dims,a=e[0].dataType,n=r.length,i=e[1].dims,s=e[1].dataType,l=U.normalizeAxis(t.axis,n),d=r[l],p=i.slice(0),m=U.size(p),h=W("input",a,n),_=W("indicesInput",s,i.length),$=ne("output",a,p.length),b=[{type:12,data:m},{type:6,data:d},{type:12,data:l}];return b.push(...ce(r,i,p)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:b}),getShaderSource:E=>`
      ${E.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(h,_,$)}
      ${E.mainStart()}
      ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${$.offsetToIndices("global_idx")};

      var idx = ${_.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${h.type.indices}(outputIndices);
      ${h.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${h.getByIndices("inputIndices")};

      ${$.setByOffset("global_idx","value")};
  }`}},Rf=e=>De({axis:e.axis}),Df=(e,t)=>{let r=e.inputs;Il(r),e.compute(zl(e.inputs,t))}}),Cl,Al,Mf,Bf,yg=K(()=>{"use strict";ge(),we(),ke(),Cl=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},Al=(e,t)=>{let r=e[0].dims.slice(),a=e[1].dims.slice(),[n,i,s]=Op.getShapeOfGemmResult(r,t.transA,a,t.transB,e.length===3?e[2].dims:void 0),l=[n,i];if(!l)throw new Error("Can't use gemm on the given tensors");let d=16,p=Math.ceil(i/d),m=Math.ceil(n/d),h=!0,_=U.size(l),$=[{type:12,data:h?p:_},{type:12,data:n},{type:12,data:i},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],b=["type","type"];e.length===3&&($.push(...ce(e[2].dims)),b.push("rank")),$.push(...ce(l));let E=T=>{let k="";t.transA&&t.transB?k="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?k="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?k="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(k="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let A=t.alpha===1?"":"value *= uniforms.alpha;",z=W("a",e[0].dataType,e[0].dims),O=W("b",e[1].dataType,e[1].dims),M=z.type.value,B=null,q=[z,O];e.length===3&&(B=W("c",e[2].dataType,e[2].dims.length),q.push(B));let H=ne("output",e[0].dataType,l.length);q.push(H);let Z=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${T.registerUniforms(Z).declareVariables(...q)}

  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${M}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${k}
    }

    ${A}
    ${B!=null?`let cOffset = ${B.broadcastedIndicesToOffset("vec2(m, n)",H)}; value += ${M}(uniforms.beta) * ${B.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},I=T=>{let k=W("a",e[0].dataType,e[0].dims),A=W("b",e[1].dataType,e[1].dims),z=null,O=[k,A];e.length===3&&(z=W("c",e[2].dataType,e[2].dims.length),O.push(z));let M=ne("output",e[0].dataType,l.length);O.push(M);let B=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],q="",H="";t.transA&&t.transB?(H=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${k.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${A.type.value}(0);
      }
      `,q="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(H=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${k.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${A.type.value}(0);
      }
      `,q="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(H=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${k.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${A.type.value}(0);
      }
      `,q="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(H=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${k.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${A.type.value}(0);
      }
      `,q="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let Z=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${T.registerUniforms(B).declareVariables(...O)}
  var<workgroup> tile_a: array<array<${k.type.storage}, ${d}>, ${d}>;
  var<workgroup> tile_b: array<array<${A.type.storage}, ${d}>, ${d}>;
  ${T.mainStart([d,d,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${d};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${d};
    let num_tiles = (uniforms.K - 1) / ${d} + 1;
    var k_start = 0u;
    var value = ${M.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${H}
      k_start = k_start + ${d};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${d}; k++) {
        ${q}
      }
      workgroupBarrier();
    }

    ${Z}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${z!=null?`let cOffset = ${z.broadcastedIndicesToOffset("vec2(m, n)",M)}; value += ${M.type.value}(uniforms.beta) * ${z.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return h?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:p*m},programUniforms:$}),getShaderSource:I}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:$}),getShaderSource:E}},Mf=e=>{let t=e.transA,r=e.transB,a=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:a,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Bf=(e,t)=>{Cl(e.inputs),e.compute(Al(e.inputs,t))}}),Ut,Vt,or,ur,Ol,Rl,Dl,Ml,Bl,Pl,Nl,Ul,Pf,Nf,vg=K(()=>{"use strict";ge(),we(),Xe(),ke(),[Ut,Vt,or,ur]=[0,1,2,3],Ol=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Rl=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Dl=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Ml=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Bl=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Pl=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Ut}] = batch;
     indices[${Vt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${or}] = u32(r);
            indices[${ur}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${or}] = u32(clamp(r, 0, H - 1));
          indices[${ur}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${or}] = gs_reflect(r, border[1], border[3]);
          indices[${ur}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Nl=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Ut}], indices[${Vt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Ut}], indices[${Vt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Ut}], indices[${Vt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Ut}], indices[${Vt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Ut}], indices[${Vt}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Ut}], indices[${Vt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Ul=(e,t)=>{let r=W("x",e[0].dataType,e[0].dims.length),a=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=W("grid",e[1].dataType,a.length,2),i=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(i=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ut,Vt,or,ur]=[0,3,1,2]);let s=ne("output",e[0].dataType,i.length),l=r.type.value,d=U.size(i),p=[{type:12,data:d},...ce(e[0].dims,a,i)],m=h=>`
  ${h.registerUniform("output_size","u32").declareVariables(r,n,s)}
  ${Rl}
  ${Dl(l)}
  ${Ml(t)}
  ${Bl(t)}
  ${Pl(r,l,t)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${or}]);
      let W_in = i32(uniforms.x_shape[${ur}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${Ut}], indices[${or}], indices[${ur}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Nl(s,l,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:h=>{let _=U.size(i);return{outputs:[{dims:i,dataType:h[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:p}},getShaderSource:m}},Pf=(e,t)=>{Ol(e.inputs),e.compute(Ul(e.inputs,t))},Nf=e=>De({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),it,Fl,Uf,Ri,ql,_a,Ff,qf=K(()=>{"use strict";ge(),we(),Xe(),zs(),Os(),ke(),ar(),it=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Fl=(e,t)=>{let r=e[0],a=it(e,1),n=it(e,2),i=it(e,3),s=it(e,4),l=it(e,5),d=it(e,6),p=it(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let m=r.dims[0],h=r.dims[1],_=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],$=h,b=0,E=0,I=Math.floor(_/t.numHeads);if(d&&p&&U.size(d.dims)&&U.size(p.dims)){if(d.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(d.dims[0]!==m||d.dims[1]!==t.numHeads||d.dims[3]!==I)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==m||p.dims[1]!==t.numHeads||p.dims[3]!==I)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[2]!==p.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(p.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');b=d.dims[2],E=d.dims[2]}else if(d&&U.size(d.dims)||p&&U.size(p.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let T;if(a&&U.size(a.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(a.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');T=2,$=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==I)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');T=5,$=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==I)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');T=0,$=a.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');T=3}if(i&&U.size(i.dims)>0){if(i.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(a&&a.dims.length===5&&a.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let k=b+$,A=0;if(s&&U.size(s.dims)>0){A=8;let B=s.dims;throw B.length===1?B[0]===m?A=1:B[0]===3*m+2&&(A=3):B.length===2&&B[0]===m&&B[1]===k&&(A=5),A===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let z=!1,O=_;if(n&&U.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if($!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');O=n.dims[2]}else{if($!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');O=n.dims[1]*n.dims[3],z=!0}}let M=!1;if(s&&U.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(l&&U.size(l.dims)>0){if(l.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==m||l.dims[1]!==t.numHeads||l.dims[2]!==h||l.dims[3]!==k)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:m,sequenceLength:h,pastSequenceLength:b,kvSequenceLength:$,totalSequenceLength:k,maxSequenceLength:E,inputHiddenSize:0,hiddenSize:_,vHiddenSize:O,headSize:I,vHeadSize:Math.floor(O/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:A,scale:t.scale,broadcastResPosBias:M,passPastInKv:z,qkvFormat:T}},Uf=e=>De({...e}),Ri=De({perm:[0,2,1,3]}),ql=(e,t,r,a,n,i,s)=>{let l=[a,n,i],d=U.size(l),p=[{type:12,data:d},{type:12,data:s},{type:12,data:i}],m=h=>{let _=ne("qkv_with_bias",t.dataType,l),$=W("qkv",t.dataType,l),b=W("bias",r.dataType,l),E=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${h.registerUniforms(E).declareVariables($,b,_)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:l,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:m},{inputs:[t,r],outputs:[-1]})[0]},_a=(e,t,r,a,n,i,s,l)=>{let d=i;if(s&&U.size(s.dims)>0){if(a===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return d=ql(e,i,s,t,a,r*n,l),d=d.reshape([t,a,r,n]),r===1||a===1?d:e.compute(ft(d,Ri.perm),{inputs:[d],outputs:[-1]})[0]}else return i.dims.length===3&&(d=i.reshape([t,a,r,n])),r===1||a===1?d:e.compute(ft(d,Ri.perm),{inputs:[d],outputs:[-1]})[0]},Ff=(e,t)=>{let r=Fl(e.inputs,t),a=e.inputs[0],n=it(e.inputs,1),i=it(e.inputs,2),s=it(e.inputs,3),l=it(e.inputs,4),d=it(e.inputs,5),p=it(e.inputs,6),m=it(e.inputs,7);if(a.dims.length===5)throw new Error("Packed QKV is not implemented");if(n?.dims.length===5)throw new Error("Packed KV is not implemented");let h=n&&i&&n.dims.length===4&&i.dims.length===4,_=_a(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,a,s,0);if(h)return wa(e,_,n,i,l,void 0,p,m,d,r);if(!n||!i)throw new Error("key and value must be provided");let $=_a(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,s,r.hiddenSize),b=_a(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,i,s,2*r.hiddenSize);wa(e,_,$,b,l,void 0,p,m,d,r)}}),Ll,Wl,jl,Vl,fs,Lf,Wf,jf=K(()=>{"use strict";ge(),we(),Xe(),ke(),Ll=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Wl=(e,t)=>{let r=[],a=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),a=r.length),De({numOutputs:a,axis:t.axis,splitSizes:r})},jl=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${le("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Vl=e=>{let t=e.length,r=[];for(let a=0;a<t;++a){let n=e[a].setByIndices("indices","input[global_idx]");t===1?r.push(n):a===0?r.push(`if (output_number == ${a}u) { ${n} }`):a===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${a}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},fs=(e,t)=>{let r=e[0].dims,a=U.size(r),n=e[0].dataType,i=U.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),l=W("input",n,r.length),d=new Array(t.numOutputs),p=[],m=[],h=0,_=[{type:12,data:a}];for(let b=0;b<t.numOutputs;b++){h+=t.splitSizes[b],d[b]=h;let E=r.slice();E[i]=t.splitSizes[b],m.push(E),s[b]=ne(`output${b}`,n,E.length),p.push({dims:m[b],dataType:e[0].dataType})}_.push({type:12,data:d},...ce(r,...m));let $=b=>`
  ${b.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",d.length).declareVariables(l,...s)}
  ${jl(d.length)}
  ${Vl(s)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${l.offsetToIndices("global_idx")};
    var index = ${l.indicesGet("indices",i)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${le("uniforms.size_in_split_axis","output_number - 1u",d.length)};
      ${l.indicesSet("indices",i,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:p,dispatchGroup:{x:Math.ceil(a/64)},programUniforms:_})}},Lf=(e,t)=>{Ll(e.inputs);let r=e.inputs.length===1?t:Wl(e.inputs,t);e.compute(fs(e.inputs,r),{inputs:[0]})},Wf=e=>{let t=e.axis,r=e.splitSizes,a=e.numOutputs<0?r.length:e.numOutputs;if(a!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return De({axis:t,numOutputs:a,splitSizes:r})}}),Hl,yn,Vf,Hf=K(()=>{"use strict";ge(),we(),Xe(),ke(),Hl=(e,t)=>{let[r,a,n,i]=e,{numHeads:s,rotaryEmbeddingDim:l}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!U.areEqual(a.dims,[])&&!U.areEqual(a.dims,[1])&&a.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(i.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(!U.areEqual(n.dims,i.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(l>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let d=r.dims[0],p=r.dims[r.dims.length-2],m=n.dims[0],h=U.sizeFromDimension(r.dims,1)/p,_=l===0?n.dims[1]*2:h/s;if(l>_)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(a.dims.length===2){if(d!==a.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${a.dims[0]}`);if(p!==a.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${a.dims[1]}`)}if(_/2!==n.dims[1]&&l/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`);if(p>m)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},yn=(e,t)=>{let{interleaved:r,numHeads:a,rotaryEmbeddingDim:n,scale:i}=t,s=e[0].dims[0],l=U.sizeFromDimension(e[0].dims,1),d=e[0].dims[e[0].dims.length-2],p=l/d,m=e[2].dims[1],h=n===0?m*2:p/a,_=new Array(s,d,p/h,h-m),$=U.computeStrides(_),b=[{type:1,data:i},{type:12,data:_},{type:12,data:$},...e[0].dims.length===3?new Array({type:12,data:[l,p,h,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[l,h,d*h,1]}):[],...ce(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],E=I=>{let T=W("input",e[0].dataType,e[0].dims.length),k=W("position_ids",e[1].dataType,e[1].dims.length),A=W("cos_cache",e[2].dataType,e[2].dims.length),z=W("sin_cache",e[3].dataType,e[3].dims.length),O=ne("output",e[0].dataType,e[0].dims.length);return I.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:_.length},{name:"global_strides",type:"u32",length:$.length},{name:"input_output_strides",type:"u32",length:$.length}]),`
        ${I.declareVariables(T,k,A,z,O)}

        ${I.mainStart(Wr)}
          let half_rotary_emb_dim = uniforms.${A.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${I.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${k.broadcastedIndicesToOffset("bsnh.xy",ne("",k.type.tensor,2))};
            let position_id =
                u32(${k.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${T.getByOffset("i")} * ${A.get("position_id","bsnh[3]")} -
                ${T.getByOffset("j")} * ${z.get("position_id","bsnh[3]")};
            ${O.setByOffset("i","re")}
            let im = ${T.getByOffset("i")} * ${z.get("position_id","bsnh[3]")} +
                ${T.getByOffset("j")} * ${A.get("position_id","bsnh[3]")};
            ${O.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${O.setByOffset("k",T.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:De({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:E,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(U.size(_)/Wr)},programUniforms:b})}},Vf=(e,t)=>{Hl(e.inputs,t),e.compute(yn(e.inputs,t))}}),Gl,Kl,Di,Xl,Gf,bg=K(()=>{"use strict";Xe(),ge(),Os(),qf(),jf(),ar(),Hf(),ke(),Gl=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],a=e[1],n=e[2],i=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let l=!1,d=r.dims[0],p=r.dims[1],m=r.dims.length===3?l?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],h=p,_=0,$=!a||a.dims.length===0,b=Math.floor($?m/(t.numHeads+2*t.kvNumHeads):m/t.numHeads);$&&(m=b*t.numHeads);let E=i&&i.dims.length!==0,I=s&&s.dims.length!==0;if(E&&i.dims.length===4&&i.dims[0]===d&&i.dims[1]!==t.kvNumHeads&&i.dims[2]===t.kvNumHeads&&i.dims[3]===b)throw new Error("BSNH pastKey/pastValue is not supported");if(E&&I){if(i.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=i.dims[2]}else if(E||I)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let T=1;if(a&&a.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(a.dims.length<3||a.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(a.dims.length===3){if(r.dims[2]%a.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');h=a.dims[1]}else if(a.dims.length===5){if(a.dims[2]!==t.numHeads||a.dims[3]!==2||a.dims[4]!==b)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');h=a.dims[1]}else{if(a.dims[1]!==t.numHeads||a.dims[3]!==b)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');h=a.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');T=3}let k=0,A=!1,z=t.kvNumHeads?b*t.kvNumHeads:m;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(h!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');z=n.dims[2]}else{if(h!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');z=n.dims[1]*n.dims[3],A=!0}}let O=e.length>4?e[5]:void 0;if(O&&O.dims.length!==1&&O.dims[0]!==d)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:d,sequenceLength:p,pastSequenceLength:_,kvSequenceLength:h,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:m,vHiddenSize:z,headSize:b,vHeadSize:Math.floor(z/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:k,scale:t.scale,broadcastResPosBias:!1,passPastInKv:A,qkvFormat:T}},Kl=De({perm:[0,2,1,3]}),Di=(e,t,r)=>{let a=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(a=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),a=e.compute(ft(a,Kl.perm),{inputs:[a],outputs:[-1]})[0]),a},Xl=(e,t,r,a)=>{let n=7,i=["type","type"],s=[e*t],l=e*t,d=[{type:12,data:l},{type:12,data:t},{type:12,data:e}],p=m=>{let h=W("seq_lens",r.dataType,r.dims),_=W("total_seq_lens",a.dataType,a.dims),$=ne("pos_ids",n,s),b=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${m.registerUniforms(b).declareVariables(h,_,$)}
  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${_.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${h.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${$.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${$.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${$.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:i},getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:d}),getShaderSource:p}},Gf=(e,t)=>{let r=Gl(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let a=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,i=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,l=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,d=e.inputs.length>4?e.inputs[5]:void 0,p=e.inputs.length>5?e.inputs[6]:void 0,m=r.kvNumHeads?r.kvNumHeads:r.numHeads,h=De({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,m*r.headSize,m*r.headSize]}),[_,$,b]=!n&&!i?e.compute(fs([a],h),{inputs:[a],outputs:[-1,-1,-1]}):[a,n,i],E,I;if(t.doRotary){let z=e.compute(Xl(r.batchSize,r.sequenceLength,d,p),{inputs:[d,p],outputs:[-1]})[0],O=e.inputs[7],M=e.inputs[8],B=De({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),q=[_,z,O,M],H=[-1];E=e.compute(yn(q,B),{inputs:q,outputs:H})[0],q.splice(0,1,$);let Z=De({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});I=e.compute(yn(q,Z),{inputs:q,outputs:H})[0]}let T=_a(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?E:_,void 0,0),k=Di(e,t.doRotary?I:$,r),A=Di(e,b,r);wa(e,T,k,A,void 0,void 0,s,l,void 0,r,d,p)}}),Mi,Zl,Yl,Kf,wg=K(()=>{"use strict";ge(),we(),ar(),ke(),Mi=(e,t,r,a,n,i,s,l)=>{let d=Ke(i),p=d===1?"f32":`vec${d}f`,m=d===1?"vec2f":`mat2x${d}f`,h=n*s,_=64;h===1&&(_=256);let $=[n,s,i/d],b=[n,s,2],E=["rank","type","type"],I=[];I.push(...ce($,b));let T=k=>{let A=W("x",t.dataType,3,d),z=W("scale",r.dataType,r.dims),O=W("bias",a.dataType,a.dims),M=ne("output",1,3,2),B=[A,z,O,M];return`
  var<workgroup> workgroup_shared : array<${m}, ${_}>;
  const workgroup_size = ${_}u;
  ${k.declareVariables(...B)}
  ${k.mainStart(_)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${p}(0);
    var squared_sum = ${p}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${p}(${A.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${m}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${rr("workgroup_shared[0][0]",d)} / f32(hight * ${d});
      let squared_sum_final = ${rr("workgroup_shared[0][1]",d)} / f32(hight * ${d});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${l}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${d};${l};${_}`,inputDependencies:E},getRunData:()=>({outputs:[{dims:b,dataType:1}],dispatchGroup:{x:h},programUniforms:I}),getShaderSource:T},{inputs:[t,r,a],outputs:[-1]})[0]},Zl=(e,t,r)=>{let a=t[0].dims,n=a,i=2,s=a[0],l=a[1],d=U.sizeFromDimension(a,i),p=Ke(d),m=U.size(n)/p,h=Mi(e,t[0],t[1],t[2],s,d,l,r.epsilon),_=[s,l,d/p],$=[s,l],b=["type","none"],E=I=>{let T=W("x",t[0].dataType,_.length,p),k=W("scale_shift",1,$.length,2),A=ne("output",t[0].dataType,_.length,p),z=[T,k,A];return`
  ${I.registerUniform("output_size","u32").declareVariables(...z)}
  ${I.mainStart()}
  ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${A.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${k.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${T.getByOffset("global_idx")} * ${A.type.value}(scale_shift.x) + ${A.type.value}(scale_shift.y);
      ${A.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${p}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...ce(_,$,_)]}),getShaderSource:E},{inputs:[t[0],h]})},Yl=(e,t,r)=>{let a=t[0].dims,n=a,i=a[0],s=a[a.length-1],l=U.sizeFromDimension(a,1)/s,d=Ke(s),p=U.size(n)/d,m=[{type:12,data:l},{type:12,data:Math.floor(s/d)}],h=["type","type"],_=!1,$=[0,a.length-1];for(let T=0;T<a.length-2;T++)_=_||a[T+1]!==1,$.push(T+1);_=_&&a[a.length-1]!==1;let b=_?e.compute(ft(e.inputs[0],$),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:a.length},(T,k)=>a[$[k]])),E=Mi(e,b,t[1],t[2],i,l,s,r.epsilon),I=T=>{let k=Qe(t[0].dataType),A=d===1?"vec2f":`mat${d}x2f`,z=B=>{let q=B===0?"x":"y",H=d===1?"f32":`vec${d}f`;switch(d){case 1:return`${k}(${H}(scale.${q}))`;case 2:return`vec2<${k}>(${H}(scale[0].${q}, scale[1].${q}))`;case 4:return`vec4<${k}>(${H}(scale[0].${q}, scale[1].${q}, scale[2].${q}, scale[3].${q}))`;default:throw new Error(`Not supported compoents ${d}`)}},O=W("input",t[0].dataType,t[0].dims,d),M=ne("output",t[0].dataType,n,d);return`
  @group(0) @binding(0) var<storage, read> input : array<${O.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${A}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${M.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${T.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${z(0)}, ${z(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${d}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:m}),getShaderSource:I},{inputs:[t[0],E]})},Kf=(e,t)=>{t.format==="NHWC"?Yl(e,e.inputs,t):Zl(e,e.inputs,t)}}),Ql,Jl,Xf,$g=K(()=>{"use strict";ge(),we(),ke(),Ql=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Jl=(e,t,r)=>{let a=t.simplified,n=e[0].dims,i=e[1],s=!a&&e[2],l=n,d=U.normalizeAxis(t.axis,n.length),p=U.sizeToDimension(n,d),m=U.sizeFromDimension(n,d),h=U.size(i.dims),_=s?U.size(s.dims):0;if(h!==m||s&&_!==m)throw new Error(`Size of X.shape()[axis:] == ${m}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${h} and bias size of ${_}`);let $=[];for(let O=0;O<n.length;++O)O<d?$.push(n[O]):$.push(1);let b=Ke(m),E=["type","type"],I=[{type:12,data:p},{type:1,data:m},{type:12,data:Math.floor(m/b)},{type:1,data:t.epsilon}];s&&E.push("type");let T=r>1,k=r>2,A=O=>{let M=Qe(e[0].dataType),B=[W("x",e[0].dataType,e[0].dims,b),W("scale",i.dataType,i.dims,b)];s&&B.push(W("bias",s.dataType,s.dims,b)),B.push(ne("output",e[0].dataType,l,b)),T&&B.push(ne("mean_data_output",1,$)),k&&B.push(ne("inv_std_output",1,$));let q=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${O.registerUniforms(q).declareVariables(...B)}
  ${O.mainStart()}
    ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ns("f32",b)};
    var mean_square_vector = ${ns("f32",b)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${qr(M,b,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${rr("mean_vector",b)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${rr("mean_square_vector",b)} / uniforms.norm_size ${a?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${qr(M,b,"x[j + offset]")};
      let f32scale = ${qr(M,b,"scale[j]")};
      output[j + offset] = ${B[0].type.value}((f32input ${a?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${qr(M,b,"bias[j]")}`:""}
      );
    }

    ${T?"mean_data_output[global_idx] = mean":""};
    ${k?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},z=[{dims:l,dataType:e[0].dataType}];return T&&z.push({dims:$,dataType:1}),k&&z.push({dims:$,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${b};${r};${a}`,inputDependencies:E},getRunData:()=>({outputs:z,dispatchGroup:{x:Math.ceil(p/64)},programUniforms:I}),getShaderSource:A}},Xf=(e,t)=>{Ql(e.inputs),e.compute(Jl(e.inputs,t,e.outputCount))}}),ed,Zf,xg=K(()=>{"use strict";we(),Ps(),Ns(),ed=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Zf=e=>{ed(e.inputs);let t=Lr.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],a=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&a<8)e.compute(Bs(e.inputs,{activation:""},t));else{let n=t[t.length-2],i=U.size(e.inputs[0].dims.slice(0,-2)),s=U.size(e.inputs[1].dims.slice(0,-2));if(i!==1&&n===1&&s===1){let l=e.inputs[0].reshape([1,i,a]),d=e.inputs[1].reshape([1,a,r]),p=[1,i,r],m=[l,d];e.compute(_n(m,{activation:""},t,p),{inputs:m})}else e.compute(_n(e.inputs,{activation:""},t))}}}),td,rd,ad,Yf,Qf,kg=K(()=>{"use strict";ge(),we(),Xe(),ke(),td=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],a=r.dims.length;if(r.dims[a-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),i=t.blockSize/8*t.bits,s=e[1];if(!U.areEqual(s.dims,[t.n,n,i]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let l=e[2].dims;if(U.size(l)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let d=e[3].dims,p=t.bits>4?t.n*n:t.n*Math.floor((n+1)/2);if(U.size(d)!==p)throw new Error("zeroPoints input size error.")}},rd=(e,t)=>{let r=e[0].dims,a=r.length,n=r[a-2],i=t.k,s=t.n,l=r.slice(0,a-2),d=U.size(l),p=e[1].dims[2]/4,m=e[0].dataType,h=Ke(t.k),_=Ke(p),$=Ke(s),b=l.concat([n,s]),E=n>1&&s/$%2===0?2:1,I=U.size(b)/$/E,T=64,k=[],A=[d,n,i/h],z=U.convertShape(e[1].dims).slice();z.splice(-1,1,p/_),k.push(...ce(A)),k.push(...ce(z)),k.push(...ce(e[2].dims)),e.length===4&&k.push(...ce(U.convertShape(e[3].dims)));let O=[d,n,s/$];k.push(...ce(O));let M=B=>{let q=A.length,H=W("a",e[0].dataType,q,h),Z=W("b",12,z.length,_),de=W("scales",e[2].dataType,e[2].dims.length),ae=[H,Z,de],Y=e.length===4?W("zero_points",12,e[3].dims.length):void 0;Y&&ae.push(Y);let X=O.length,ie=ne("output",e[0].dataType,X,$),J=Qe(e[0].dataType),me=(()=>{switch(h){case 1:return`array<${J}, 8>`;case 2:return`mat4x2<${J}>`;case 4:return`mat2x4<${J}>`;default:throw new Error(`${h}-component is not supported.`)}})(),ye=()=>{let j=`
          // reuse a data
            var input_offset = ${H.indicesToOffset(`${H.type.indices}(batch, row, word_offset)`)};
            var a_data: ${me};
            for (var j: u32 = 0; j < ${8/h}; j++) {
              a_data[j] = ${H.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let Q=0;Q<$*E;Q++)j+=`
            b_value = ${_===1?`b${Q}_data`:`b${Q}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${me}(${Array.from({length:4},(_e,F)=>`${J}(b_value_lower[${F}]), ${J}(b_value_upper[${F}])`).join(", ")});
            b_dequantized_values = ${h===1?`${me}(${Array.from({length:8},(_e,F)=>`(b_quantized_values[${F}] - ${Y?`zero_point${Q}`:"zero_point"}) * scale${Q}`).join(", ")});`:`(b_quantized_values - ${me}(${Array(8).fill(`${Y?`zero_point${Q}`:"zero_point"}`).join(",")})) * scale${Q};`};
            workgroup_shared[local_id.x * ${E} + ${Math.floor(Q/$)}]${$>1?`[${Q%$}]`:""} += ${Array.from({length:8/h},(_e,F)=>`${h===1?`a_data[${F}] * b_dequantized_values[${F}]`:`dot(a_data[${F}], b_dequantized_values[${F}])`}`).join(" + ")};
          `;return j},fe=()=>{let j=`
            var col_index = col * ${$};
            ${Y?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${J}(8);`}
            `;for(let Q=0;Q<$*E;Q++)j+=`
            let scale${Q} = ${de.getByOffset("col_index * nBlocksPerCol + block")};
            ${Y?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${Y.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${Q} = ${J}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return j},Me=()=>{let j=`col_index = col * ${$};`;for(let Q=0;Q<$*E;Q++)j+=`
            let b${Q}_data = ${Z.getByIndices(`${Z.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return j+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${me};
            var b_dequantized_values: ${me};`,j};return`
        var<workgroup> workgroup_shared: array<${ie.type.value}, ${E*T}>;
        ${B.declareVariables(...ae,ie)}
        ${B.mainStart([T,1,1])}
          let output_indices = ${ie.offsetToIndices(`(global_idx / ${T}) * ${E}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${T}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/h};
            ${fe()}
            for (var word: u32 = 0; word < ${p}; word += ${_}) {
              ${Me()}
              for (var i: u32 = 0; i < ${_}; i++) {
                ${ye()}
                word_offset += ${8/h};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${E}) {
            var output_value: ${ie.type.value} = ${ie.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${T}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${E};
            }
            ${ie.setByIndices(`${ie.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${h};${_};${$};${E};${T}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:b,dataType:m}],dispatchGroup:{x:I},programUniforms:k}),getShaderSource:M}},ad=(e,t)=>{let r=e[0].dims,a=r.length,n=r[a-2],i=t.k,s=t.n,l=r.slice(0,a-2),d=U.size(l),p=e[1].dims[2]/4,m=e[0].dataType,h=Ke(t.k),_=Ke(p),$=l.concat([n,s]),b=128,E=s%8===0?8:s%4===0?4:1,I=b/E,T=I*_*8,k=T/h,A=T/t.blockSize,z=U.size($)/E,O=[],M=[d,n,i/h],B=U.convertShape(e[1].dims).slice();B.splice(-1,1,p/_),O.push(...ce(M)),O.push(...ce(B)),O.push(...ce(e[2].dims)),e.length===4&&O.push(...ce(U.convertShape(e[3].dims)));let q=[d,n,s];O.push(...ce(q));let H=Z=>{let de=M.length,ae=W("a",e[0].dataType,de,h),Y=W("b",12,B.length,_),X=W("scales",e[2].dataType,e[2].dims.length),ie=[ae,Y,X],J=e.length===4?W("zero_points",12,e[3].dims.length):void 0;J&&ie.push(J);let me=q.length,ye=ne("output",e[0].dataType,me),fe=Qe(e[0].dataType),Me=()=>{switch(h){case 1:return`
          let a_data0 = vec4<${fe}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${fe}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${fe}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${fe}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${h}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ae.type.value}, ${k}>;
        var<workgroup> inter_results: array<array<${ye.type.value}, ${I}>, ${E}>;
        ${Z.declareVariables(...ie,ye)}
        ${Z.mainStart([I,E,1])}
          let output_indices = ${ye.offsetToIndices(`workgroup_index * ${E}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${A} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${k};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${k}; a_offset += ${b})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ae.getByIndices(`${ae.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ae.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${A} + local_id.x;
            ${J?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${J.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${fe}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${fe}(8);`}
            let scale = ${X.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${Y.getByIndices(`${Y.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/h};
            for (var i: u32 = 0; i < ${_}; i++) {
              ${Me()}
              let b_value = ${_===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${fe}>(${Array.from({length:4},(j,Q)=>`${fe}(b_value_lower[${Q}]), ${fe}(b_value_upper[${Q}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${fe}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(j,Q)=>`${`dot(a_data${Q}, b_dequantized_values[${Q}])`}`).join(" + ")};
              word_offset += ${8/h};
            }
            workgroupBarrier();
          }

          if (local_idx < ${E}) {
            var output_value: ${ye.type.value} = ${ye.type.value}(0);
            for (var b = 0u; b < ${I}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${ye.setByIndices(`${ye.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${h};${_};${I};${E}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:$,dataType:m}],dispatchGroup:{x:z},programUniforms:O}),getShaderSource:H}},Yf=(e,t)=>{td(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(ad(e.inputs,t)):e.compute(rd(e.inputs,t))},Qf=e=>De(e)}),nd,id,sd,od,ud,ld,dd,pd,Jf,Eg=K(()=>{"use strict";ge(),we(),ke(),nd=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},id=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
            k = i32(${e.indicesGet("indices",n)}) - ${le("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${le("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${le("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${a}
            value = x[offset];
          }
      `},sd=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
                k = i32(${e.indicesGet("indices",n)}) - ${le("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${le("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${le("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${le("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},od=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
                k = i32(${e.indicesGet("indices",n)}) - ${le("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${le("uniforms.x_shape",n,t)})) {
                  k = i32(${le("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${le("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},ud=(e,t,r)=>{let a="";for(let n=t-1;n>=0;--n)a+=`
                k = i32(${e.indicesGet("indices",n)}) - ${le("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${le("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${le("uniforms.x_shape",n,t)})) {
                  k -= i32(${le("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${le("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${a}
              value = x[offset];
          `},ld=(e,t,r)=>{switch(r.mode){case 0:return id(e,t,r.pads.length);case 1:return sd(e,t,r.pads.length);case 2:return od(e,t,r.pads.length);case 3:return ud(e,t,r.pads.length);default:throw new Error("Invalid mode")}},dd=(e,t)=>{let r=U.padShape(e[0].dims.slice(),t.pads),a=e[0].dims,n=U.size(r),i=[{type:12,data:n},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&i.push({type:s?e[2].dataType:1,data:t.value}),i.push(...ce(e[0].dims,r));let l=["rank"],d=p=>{let m=ne("output",e[0].dataType,r.length),h=W("x",e[0].dataType,a.length),_=h.type.value,$=ld(m,a.length,t),b=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&b.push({name:"constant_value",type:s?_:"f32"}),`
            ${p.registerUniforms(b).declareVariables(h,m)}
            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${m.offsetToIndices("global_idx")};

            var value = ${_}(0);
            ${$}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(U.size(r)/64)},programUniforms:i}),getShaderSource:d}},pd=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),a=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,i=new Int32Array(2*n).fill(0);if(e.length>=4){let l=e[3].getBigInt64Array();for(let d=0;d<l.length;d++)i[Number(l[d])]=Number(r[d]),i[Number(l[d])+n]=Number(r[d+l.length])}else r.forEach((l,d)=>i[Number(d)]=Number(l));let s=[];return i.forEach(l=>s.push(l)),{mode:t.mode,value:a,pads:s}}else return t},Jf=(e,t)=>{nd(e.inputs);let r=pd(e.inputs,t);e.compute(dd(e.inputs,r),{inputs:[0]})}}),da,Bi,Pi,Ni,Ui,cd,fd,Fi,qi,em,tm,Li,rm,am,Wi,nm,im,sm,om,Sg=K(()=>{"use strict";Ot(),ge(),we(),ke(),da=e=>{if(je.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Bi=(e,t,r)=>{let a=t.format==="NHWC",n=e.dims.slice();a&&n.splice(1,0,n.pop());let i=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),l=t.strides.slice(),d=i?t.dilations.slice():[],p=t.pads.slice();hn.adjustPoolAttributes(r,n,s,l,d,p);let m=hn.computePoolOutputShape(r,n,l,d,s,p,t.autoPad),h=Object.assign({},t);i?Object.assign(h,{kernelShape:s,strides:l,pads:p,dilations:d,cacheKey:t.cacheKey}):Object.assign(h,{kernelShape:s,strides:l,pads:p,cacheKey:t.cacheKey});let _=m.slice();return _.push(_.splice(1,1)[0]),[h,a?_:m]},Pi=(e,t)=>{let r=t.format==="NHWC",a=U.size(e),n=U.size(t.kernelShape),i=[{type:12,data:a},{type:12,data:n}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let l=t.kernelShape[t.kernelShape.length-1],d=t.strides[t.strides.length-1],p=t.pads[t.pads.length/2-1],m=t.pads[t.pads.length-1],h=!!(p+m);i.push({type:12,data:l},{type:12,data:d},{type:12,data:p},{type:12,data:m}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let _=!1;if(t.kernelShape.length===2){let $=t.kernelShape[t.kernelShape.length-2],b=t.strides[t.strides.length-2],E=t.pads[t.pads.length/2-2],I=t.pads[t.pads.length-2];_=!!(E+I),i.push({type:12,data:$},{type:12,data:b},{type:12,data:E},{type:12,data:I}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[i,s,!0,h,_]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let l=U.computeStrides(t.kernelShape);i.push({type:12,data:l},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:l.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let d=t.pads.reduce((p,m)=>p+m);return[i,s,!!d,!1,!1]}},Ni=(e,t,r,a,n,i,s,l,d,p,m,h)=>{let _=n.format==="NHWC",$=t.type.value,b=ne("output",t.type.tensor,a);if(n.kernelShape.length<=2){let E="",I="",T="",k=r-(_?2:1);if(m?E=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${k}] < 0 || xIndices[${k}]
                      >= uniforms.x_shape[${k}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`:E=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${i}
                }`,n.kernelShape.length===2){let A=r-(_?3:2);h?I=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${A}] = indices[${A}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${A}] < 0 || xIndices[${A}] >= uniforms.x_shape[${A}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:I=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${A}] = indices[${A}] * uniforms.sh - uniforms.phStart + j;
                `,T=`
              }
            `}return`
            ${e.registerUniforms(d).declareVariables(t,b)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${b.offsetToIndices("global_idx")};
              var xIndices = ${b.offsetToIndices("global_idx")};

              var value = ${$}(${l});
              var pad = 0;
              ${I}
              ${E}
              ${T}
              ${s}

              output[global_idx] = value;
            }`}else{if(_)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let E=n.kernelShape.length,I=n.pads.length,T="";return p?T=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${i}
              }`:T=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${i}
            `,`
            ${e.registerUniforms(d).declareVariables(t,b)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${b.offsetToIndices("global_idx")};
              var xIndices = ${b.offsetToIndices("global_idx")};

              var offsets: array<u32, ${E}>;

              var value = ${$}(${l});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${E-1}u; j++) {
                  offsets[j] = offset / ${le("uniforms.kernelStrides","j",E)};
                  offset -= offsets[j] * ${le("uniforms.kernelStrides","j",E)};
                }
                offsets[${E-1}] = offset;

                isPad = false;
                for (var j = ${r-E}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${le("uniforms.strides",`j - ${r-E}u`,E)}
                    + offsets[j - ${r-E}u] - ${le("uniforms.pads","j - 2u",I)};
                  ${T}
              }
              ${s}

              output[global_idx] = value;
            }`}},Ui=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,cd=e=>`${Ui(e)};${e.countIncludePad}`,fd=e=>`${Ui(e)};${e.storageOrder};${e.dilations}`,Fi=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),qi=(e,t,r,a)=>{let[n,i]=Bi(t,a,r),s=W("x",t.dataType,t.dims.length),l=s.type.value,d="value += x_val;",p="";n.countIncludePad?p+=`value /= ${l}(uniforms.kernelSize);`:p+=`value /= ${l}(i32(uniforms.kernelSize) - pad);`;let[m,h,_,$,b]=Pi(i,n);m.push(...ce(t.dims,i));let E=["rank"];return{name:e,shaderCache:{hint:`${a.cacheKey};${_};${$};${b}`,inputDependencies:E},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(U.size(i)/64)},programUniforms:m}),getShaderSource:I=>Ni(I,s,t.dims.length,i.length,n,d,p,0,h,_,$,b)}},em=e=>{let t=e.count_include_pad!==0,r=Fi(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let a={countIncludePad:t,...r,cacheKey:""};return{...a,cacheKey:cd(a)}},tm=(e,t)=>{da(e.inputs),e.compute(qi("AveragePool",e.inputs[0],!1,t))},Li={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},rm=e=>{let t=e.format;return{format:t,...Li,cacheKey:t}},am=(e,t)=>{da(e.inputs),e.compute(qi("GlobalAveragePool",e.inputs[0],!0,t))},Wi=(e,t,r,a)=>{let[n,i]=Bi(t,a,r),s=`
      value = max(x_val, value);
    `,l="",d=W("x",t.dataType,t.dims.length),p=["rank"],[m,h,_,$,b]=Pi(i,n);return m.push(...ce(t.dims,i)),{name:e,shaderCache:{hint:`${a.cacheKey};${_};${$};${b}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:i,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(U.size(i)/64)},programUniforms:m}),getShaderSource:E=>Ni(E,d,t.dims.length,i.length,n,s,l,t.dataType===10?-65504:-1e5,h,_,$,b)}},nm=(e,t)=>{da(e.inputs),e.compute(Wi("MaxPool",e.inputs[0],!1,t))},im=e=>{let t=e.storage_order,r=e.dilations,a=Fi(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(a.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...a,cacheKey:""};return{...n,cacheKey:fd(n)}},sm=e=>{let t=e.format;return{format:t,...Li,cacheKey:t}},om=(e,t)=>{da(e.inputs),e.compute(Wi("GlobalMaxPool",e.inputs[0],!0,t))}}),md,hd,um,lm,Tg=K(()=>{"use strict";ge(),we(),Xe(),ke(),md=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,a)=>r===e[2].dims[a]).reduce((r,a)=>r&&a,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,i)=>i===t.axis||n===e[0].dims[i]).reduce((n,i)=>n&&i,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],a=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/a)||t.blockSize>Math.ceil(r/(a-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},hd=(e,t)=>{let r=U.normalizeAxis(t.axis,e[0].dims.length),a=e[0].dataType,n=a===3,i=e[0].dims,s=e[1].dataType,l=U.size(i),d=a===3||a===2,p=d?[Math.ceil(U.size(e[0].dims)/4)]:e[0].dims,m=e[1].dims,h=e.length>2?e[2]:void 0,_=h?d?[Math.ceil(U.size(h.dims)/4)]:h.dims:void 0,$=m.length===0||m.length===1&&m[0]===1,b=$===!1&&m.length===1,E=Ke(l),I=$&&(!d||E===4),T=I?E:1,k=I&&!d?E:1,A=W("input",d?12:a,p.length,k),z=W("scale",s,m.length),O=h?W("zero_point",d?12:a,_.length):void 0,M=ne("output",s,i.length,T),B=[A,z];O&&B.push(O);let q=[p,m];h&&q.push(_);let H=[{type:12,data:l/T},{type:12,data:r},{type:12,data:t.blockSize},...ce(...q,i)],Z=de=>{let ae=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${de.registerUniforms(ae).declareVariables(...B,M)}
      ${de.mainStart()}
          ${de.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${M.offsetToIndices("global_idx")};

          // Set input x
          ${d?`
            let input = ${A.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${T===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${A.getByOffset("global_idx")};`};

          // Set scale input
          ${$?`let scale_value= ${z.getByOffset("0")}`:b?`
            let scale_index = ${M.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${z.getByOffset("scale_index")};`:`
            var scale_indices: ${z.type.indices} = output_indices;
            let index = ${z.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${z.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${z.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${O?$?d?`
                let zero_point_input = ${O.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${O.getByOffset("0")}`:b?d?`
                let zero_point_index = ${M.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${O.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${M.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${O.getByOffset("zero_point_index")};`:d?`
                let zero_point_offset = ${z.indicesToOffset("scale_indices")};
                let zero_point_input = ${O.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${O.getByIndices("scale_indices")};`:`let zero_point_value = ${d?n?"i32":"u32":A.type.value}(0);`};
      // Compute and write output
      ${M.setByOffset("global_idx",`${M.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:O?["rank","rank","rank"]:["rank","rank"]},getShaderSource:Z,getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:Math.ceil(l/T/64),y:1,z:1},programUniforms:H})}},um=(e,t)=>{md(e.inputs,t),e.compute(hd(e.inputs,t))},lm=e=>De({axis:e.axis,blockSize:e.blockSize})}),gd,_d,dm,Ig=K(()=>{"use strict";Ot(),ge(),ke(),gd=(e,t,r)=>{let a=e===t,n=e<t&&r<0,i=e>t&&r>0;if(a||n||i)throw new Error("Range these inputs' contents are invalid.")},_d=(e,t,r,a)=>{let n=Math.abs(Math.ceil((t-e)/r)),i=[n],s=n,l=[{type:12,data:s},{type:a,data:e},{type:a,data:r},...ce(i)],d=p=>{let m=ne("output",a,i.length),h=m.type.value,_=[{name:"outputSize",type:"u32"},{name:"start",type:h},{name:"delta",type:h}];return`
        ${p.registerUniforms(_).declareVariables(m)}
        ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${h}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${a}`},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:a}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l})}},dm=e=>{let t=0,r=0,a=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],a=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],a=e.inputs[2].getFloat32Array()[0]),je.webgpu.validateInputContent&&gd(t,r,a),e.compute(_d(t,r,a,e.inputs[0].dataType),{inputs:[]})}}),yd,ji,Vi,vd,pm,cm,zg=K(()=>{"use strict";ge(),we(),Xe(),ke(),yd=(e,t,r,a)=>{if(e!=="none"&&a!=="i32"&&a!=="u32"&&a!=="f32")throw new Error(`Input ${a} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,i=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return a==="i32"||a==="u32"?`atomicAdd(&${t}, bitcast<${a}>(${r}));`:`
              ${n}bitcast<${a}>(oldValue) + (${r})${i}`;case"max":return a==="i32"||a==="u32"?`atomicMax(&${t}, bitcast<${a}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${i}`;case"min":return a==="i32"||a==="u32"?`atomicMin(&${t}, bitcast<${a}>(${r}));`:`${n}min(bitcast<${a}>(oldValue), (${r}))${i}`;case"mul":return`${n}(bitcast<${a}>(oldValue) * (${r}))${i}`;default:throw new Error(`Reduction ${e} is not supported.`)}},ji=(e,t)=>`${e===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[${t?"i - indices_start":"i"}];
    let dim_value = uniforms.output_shape[${t?"i - indices_start":"i"} + uniforms.last_index_dimension];`}
    
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));`,Vi=(e,t,r)=>`for (var i = 0u; i < uniforms.num_updates_elements; i++) {
        let value = updates[uniforms.num_updates_elements * ${r?"global_idx":"idx"} + i];
        ${yd(e.reduction,"output[data_offset + i]","value",t)}
      }`,vd=(e,t)=>{let r=e[0].dims,a=e[1].dims,n=r,i=1,s=Math.ceil(U.size(a)/i),l=a[a.length-1],d=U.sizeFromDimension(r,l),p=U.sizeFromDimension(a,0)/l,m=[{type:12,data:s},{type:12,data:l},{type:12,data:d},...ce(e[1].dims,e[2].dims,n)],h=_=>{let $=W("indices",e[1].dataType,e[1].dims.length),b=W("updates",e[2].dataType,e[2].dims.length,i),E=t.reduction!=="none"&&t.reduction!==""?Up("output",e[0].dataType,n.length):ne("output",e[0].dataType,n.length,i);return`
      ${_.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables($,b,E)}
      ${_.mainStart()}
        ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    for (var i = 0; i < ${p}; i = i + 1) {
      for (var j = i + 1; j < ${p}; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  if (${t.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    // Process each index-update pair individually when duplicates exist
    for (var idx = 0u; idx < ${p}u; idx++) {
      var data_offset = 0u;
      for (var i = 0u; i < uniforms.last_index_dimension; i++) {
        var index = i32(indices[idx * uniforms.last_index_dimension + i].x);
        ${ji(r.length,!1)}
      }
      ${Vi(t,E.type.value,!1)}
    }
    return;
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  var indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${ji(r.length,!0)}
  }
  ${Vi(t,E.type.value,!0)}
  }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:m}),getShaderSource:h}},pm=e=>De({reduction:e.reduction}),cm=(e,t)=>{e.compute(vd(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),bd,wd,$d,Hi,xd,kd,Ed,Sd,Td,Id,zd,Cd,Gi,Ad,Od,Rd,Dd,Md,fm,mm,Cg=K(()=>{"use strict";ge(),we(),Xe(),ke(),bd=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},wd=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let a=new Array(r).fill(1);return t.forEach((n,i)=>a[n]=e[i]),a},$d=(e,t,r,a,n,i)=>{let[s,l,d]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],p=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(m=>i.push(m));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0){if(e[l].getFloat32Array().forEach(m=>a.push(m)),a.length!==0&&a.length!==p&&r>=18&&a.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");bd(a,t),t.axes.length>0&&wd(a,t.axes,p).forEach((m,h)=>a[h]=m)}if(d>0&&e.length>d&&e[d].dims.length===1&&e[d].dims[0]>0&&(e[d].getBigInt64Array().forEach(m=>n.push(Number(m))),n.length!==0&&n.length!==p&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(a.length!==0&&a.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof a<"u"&&typeof n<"u"&&a.length>0&&n.length>p)throw new Error("Resize requires only of scales or sizes to be specified")},Hi=(e,t,r,a)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${a}(big / (${r}));
  let fract = ${a}(big % (${r})) / ${a}(${r});
  return whole + fract;
`,xd=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${Hi("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${Hi("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",kd=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Ed=(e,t,r)=>{let a=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?a:e.slice();return t.length>0?(t.forEach((i,s)=>{a[i]=n[s],a[s+r]=n[t.length+s]}),a):n},Sd=(e,t,r,a)=>{let n=[];if(r.length>0)if(a.length>0){if(e.forEach(i=>n.push(i)),Math.max(...a)>e.length)throw new Error("axes is out of bound");a.forEach((i,s)=>n[i]=r[s])}else r.forEach(i=>n.push(i));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((i,s)=>Math.round(i*t[s]))}return n},Td=(e,t,r)=>{let a=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(i=>t[i]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(i=>t[i]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(i=>t[i]=a),r.axes.forEach(i=>n[i]=Math.round(e[i]*t[i]))):(t.fill(a,0,t.length),n.forEach((i,s)=>n[s]=Math.round(i*t[s]))),n},Id=(e,t,r,a,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${le("uniforms.scales","i",a)};
        var roi_low = ${le("uniforms.roi","i",n)};
        var roi_hi = ${le("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${le("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${le("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,zd=(e,t,r,a,n,i,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${a.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${le("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${le("uniforms.roi","i",i)};
          var roi_hi = ${le("uniforms.roi",`i + ${r.length}`,i)};
          var input_shape_i = ${le("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${le("uniforms.output_shape","i",a.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,Cd=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${le("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Gi=(e,t,r,a)=>e.rank>a?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Ad=(e,t,r,a,n)=>{let[i,s,l,d]=r.length===2?[-1,0,1,-1]:[0,2,3,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(col, ${r[l]} - 1))`)};
      ${Gi(e,d,i,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${p} = originalIndices[${s}];
      var col:${p} = originalIndices[${l}];
      ${a?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[l]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[l]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${i}])`:"0"};
      var x11: ${p} = getInputValue(batch, channel, row1, col1);
      var x12: ${p} = getInputValue(batch, channel, row1, col2);
      var x21: ${p} = getInputValue(batch, channel, row2, col1);
      var x22: ${p} = getInputValue(batch, channel, row2, col2);
      var dx1: ${p} = abs(row - ${p}(row1));
      var dx2: ${p} = abs(${p}(row2) - row);
      var dy1: ${p} = abs(col - ${p}(col1));
      var dy2: ${p} = abs(${p}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Od=(e,t,r,a,n,i,s,l,d,p)=>{let m=r.length===2,h=!0,[_,$]=m?[0,1]:h?[2,3]:[1,2],b=e.type.value,E=I=>{let T=I===_?"row":"col";return`
      fn ${T}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${b} {
        var output_index = ${t.indicesGet("output_indices",I)};
        var originalIdx: ${b} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[I]},
        ${a[I]}, ${r[I]}, ${i[I]}, ${i[I]} + ${r.length});
        var fractOriginalIdx: ${b} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${l} && (originalIdx < 0 || originalIdx > (${r[I]} - 1))) {
          return ${d};
        }
        var data: array<${b}, 4> = array<${b}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${T}: ${b} = originalIdx + ${b}(i);
          if (${T} < 0 || ${T} >= ${r[I]}) {
            ${p?`coefs[i + 1] = 0.0;
                        continue;`:l?`return ${d};`:`${T} = max(0, min(${T}, ${r[I]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",I,`u32(${T})`)};
          data[i + 1] = ${I===_?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${E(_)};
    ${E($)};
  fn getCubicInterpolationCoefs(s: ${b}) -> array<${b}, 4> {
    var absS = abs(s);
    var coeffs: array<${b}, 4> = array<${b}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${b} = 1.0 - absS;
    var twoMinusAbsS: ${b} = 2.0 - absS;
    var onePlusAbsS: ${b} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${b}, 4>, coefs: array<${b}, 4>) -> ${b} {
    var coefsSum: ${b} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${b} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Rd=(e,t,r,a,n)=>{let[i,s,l,d,p]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],m=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${m} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(height, ${r[l]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(width, ${r[d]} - 1))`)};
      ${Gi(e,p,i,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${m} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${m} = originalIndices[${s}];
      var height:${m} = originalIndices[${l}];
      var width:${m} = originalIndices[${d}];
      ${a?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[l]} - 1) || width < 0 || (width > ${r[d]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[l]} - 1));
      width = max(0, min(width, ${r[d]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${i}])`:"0"};

      var x111: ${m} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${m} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${m} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${m} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${m} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${m} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${m} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${m} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${m} = abs(depth - ${m}(depth1));
      var dx2: ${m} = abs(${m}(depth2) - depth);
      var dy1: ${m} = abs(height - ${m}(height1));
      var dy2: ${m} = abs(${m}(height2) - height);
      var dz1: ${m} = abs(width - ${m}(width1));
      var dz2: ${m} = abs(${m}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Dd=(e,t,r,a,n,i)=>{let s=e.dims,l=Ed(i,t.axes,s.length),d=Sd(s,a,n,t.axes),p=a.slice();a.length===0&&(p=s.map((k,A)=>k===0?1:d[A]/k),t.keepAspectRatioPolicy!=="stretch"&&(d=Td(s,p,t)));let m=ne("output",e.dataType,d.length),h=W("input",e.dataType,s.length),_=U.size(d),$=s.length===d.length&&s.every((k,A)=>k===d[A]),b=t.coordinateTransformMode==="tf_crop_and_resize",E=t.extrapolationValue,I=h.type.value,T=k=>`
      ${$?"":`
      ${xd(t.coordinateTransformMode,I)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Cd(h,s)};
              ${kd(t.nearestMode,r,I)};
              ${zd(h,m,s,d,p.length,l.length,b)};
              `;case"linear":return`
              ${Id(m,s,d,p.length,l.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Ad(h,m,s,b,E)}`;if(s.length===3||s.length===5)return`${Rd(h,m,s,b,E)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Od(h,m,s,d,p,l,t.cubicCoeffA,b,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${k.registerUniform("output_size","u32").registerUniform("scales","f32",p.length).registerUniform("roi","f32",l.length).declareVariables(h,m)}
      ${k.mainStart()}
        ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${$?"output[global_idx] = input[global_idx];":`
        let output_indices = ${m.offsetToIndices("global_idx")};
        var input_indices: ${h.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${h.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${p.length>0?t.mode==="cubic"?p:p.length:""}|${n.length>0?n:""}|${l.length>0?l:""}|${$}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:T,getRunData:()=>({outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},{type:1,data:p},{type:1,data:l},...ce(s,d)]})}},Md=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},fm=(e,t)=>{let r=[],a=[],n=[],i=Md(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");$d(e.inputs,t,i,r,a,n),e.compute(Dd(e.inputs[0],t,i,r,a,n),{inputs:[0]})},mm=e=>{let t=e.antialias,r=e.axes,a=e.coordinateTransformMode,n=e.cubicCoeffA,i=e.excludeOutside!==0,s=e.extrapolationValue,l=e.keepAspectRatioPolicy,d=e.mode,p=e.nearestMode===""?"simple":e.nearestMode;return De({antialias:t,axes:r,coordinateTransformMode:a,cubicCoeffA:n,excludeOutside:i,extrapolationValue:s,keepAspectRatioPolicy:l,mode:d,nearestMode:p})}}),Bd,Pd,hm,Ag=K(()=>{"use strict";ge(),we(),ke(),Bd=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],a=e[2];if(t.dataType!==r.dataType||t.dataType!==a.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],i=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==i)throw new Error("Skip must have the same sequence length as input");if(a.dims.length!==1)throw new Error("Gamma must be 1D");if(a.dims[a.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},Pd=(e,t,r,a)=>{let n=t.simplified,i=e[0].dims,s=U.size(i),l=i,d=s,p=i.slice(-1)[0],m=a?i.slice(0,-1).concat(1):[],h=!n&&e.length>3,_=e.length>4,$=a&&r>1,b=a&&r>2,E=r>3,I=64,T=Ke(p),k=[{type:12,data:d},{type:12,data:T},{type:12,data:p},{type:1,data:t.epsilon}],A=O=>{let M=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],B=[W("x",e[0].dataType,e[0].dims,T),W("skip",e[1].dataType,e[1].dims,T),W("gamma",e[2].dataType,e[2].dims,T)];h&&B.push(W("beta",e[3].dataType,e[3].dims,T)),_&&B.push(W("bias",e[4].dataType,e[4].dims,T)),B.push(ne("output",e[0].dataType,l,T)),$&&B.push(ne("mean_output",1,m)),b&&B.push(ne("inv_std_output",1,m)),E&&B.push(ne("input_skip_bias_sum",e[0].dataType,l,T));let q=Qe(e[0].dataType),H=Qe(1,T);return`

      ${O.registerUniforms(M).declareVariables(...B)}
      var<workgroup> sum_shared : array<${H}, ${I}>;
      var<workgroup> sum_squared_shared : array<${H}, ${I}>;

      ${O.mainStart([I,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${I};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${I};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${I-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${_?"bias[offset1d + i]":q+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${E?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${qr(q,T,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${I};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${rr("sum",T)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${rr("square_sum",T)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${$?"mean_output[global_idx] = mean;":""}
        ${b?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${q}(mean)`}) *
            ${q}(inv_std_dev) * gamma[offset1d + i]
            ${h?"+ beta[offset1d + i]":""};
        }
      }`},z=[{dims:l,dataType:e[0].dataType}];return r>1&&z.push({dims:m,dataType:1}),r>2&&z.push({dims:m,dataType:1}),r>3&&z.push({dims:i,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${T};${$};${b};${E}`,inputDependencies:e.map((O,M)=>"type")},getShaderSource:A,getRunData:()=>({outputs:z,dispatchGroup:{x:Math.ceil(d/p)},programUniforms:k})}},hm=(e,t)=>{Bd(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Pd(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Nd,pa,Ud,Ki,Fd,qd,gm,_m,Og=K(()=>{"use strict";ge(),we(),Xe(),ke(),Nd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,a)=>{if(e[a+1].dataType!==6&&e[a+1].dataType!==7)throw new Error(`Input ${a} must be an array of int32 or int64`)})},pa=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(a=>r.push(Number(a)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(a=>r.push(Number(a)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Ud=(e,t)=>{if(e.length>1){let r=pa(e,1),a=pa(e,2),n=pa(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),De({starts:r,ends:a,axes:n})}else return t},Ki=(e,t,r,a,n)=>{let i=e;return e<0&&(i+=r[a[t]]),n[t]<0?Math.max(0,Math.min(i,r[a[t]]-1)):Math.max(0,Math.min(i,r[a[t]]))},Fd=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${le("uniforms.input_shape","i",r.length)};
            let steps_i = ${le("uniforms.steps","i",r.length)};
            let signs_i = ${le("uniforms.signs","i",r.length)};
            let starts_i = ${le("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,qd=(e,t)=>{let r=e[0].dims,a=U.size(r),n=t.axes.length>0?U.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],i=pa(e,4);i.forEach(T=>T!==0||(()=>{throw new Error("step cannot be 0")})),i.length===0&&(i=Array(n.length).fill(1));let s=t.starts.map((T,k)=>Ki(T,k,r,n,i)),l=t.ends.map((T,k)=>Ki(T,k,r,n,i));if(n.length!==s.length||n.length!==l.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let T=0;T<r.length;++T)n.includes(T)||(s.splice(T,0,0),l.splice(T,0,r[T]),i.splice(T,0,1));let d=i.map(T=>Math.sign(T));i.forEach((T,k,A)=>{if(T<0){let z=(l[k]-s[k])/T,O=s[k],M=O+z*i[k];s[k]=M,l[k]=O,A[k]=-T}});let p=r.slice(0);n.forEach((T,k)=>{p[T]=Math.ceil((l[T]-s[T])/i[T])});let m={dims:p,dataType:e[0].dataType},h=ne("output",e[0].dataType,p.length),_=W("input",e[0].dataType,e[0].dims.length),$=U.size(p),b=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:d.length},{name:"steps",type:"u32",length:i.length}],E=[{type:12,data:$},{type:12,data:s},{type:6,data:d},{type:12,data:i},...ce(e[0].dims,p)],I=T=>`
      ${T.registerUniforms(b).declareVariables(_,h)}
        ${Fd(_,h,r)}
        ${T.mainStart()}
          ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${h.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${h.setByOffset("global_idx",_.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${d.length}_${s.length}_${i.length}`,inputDependencies:["rank"]},getShaderSource:I,getRunData:()=>({outputs:[m],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:E})}},gm=(e,t)=>{Nd(e.inputs,t);let r=Ud(e.inputs,t);e.compute(qd(e.inputs,r),{inputs:[0]})},_m=e=>{let t=e.starts,r=e.ends,a=e.axes;return De({starts:t,ends:r,axes:a})}}),Ld,Wd,ym,vm,Rg=K(()=>{"use strict";ge(),we(),Xe(),ar(),ke(),Ld=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Wd=(e,t)=>{let r=e.inputs[0],a=r.dims,n=U.size(a),i=a.length,s=U.normalizeAxis(t.axis,i),l=s<a.length-1,d,p=[];l?(p=Array.from({length:i},(B,q)=>q),p[s]=i-1,p[i-1]=s,d=e.compute(ft(r,p),{inputs:[r],outputs:[-1]})[0]):d=r;let m=d.dims,h=m[i-1],_=n/h,$=Ke(h),b=h/$,E=64;_===1&&(E=256);let I=(B,q)=>q===4?`max(max(${B}.x, ${B}.y), max(${B}.z, ${B}.w))`:q===2?`max(${B}.x, ${B}.y)`:q===3?`max(max(${B}.x, ${B}.y), ${B}.z)`:B,T=W("x",d.dataType,d.dims,$),k=ne("result",d.dataType,d.dims,$),A=T.type.value,z=Qe(d.dataType)==="f32"?`var threadMax = ${A}(-3.402823e+38f);`:`var threadMax = ${A}(-65504.0h);`,O=B=>`
      var<workgroup> rowMaxShared : ${A};
      var<workgroup> rowSumShared : ${A};
      var<workgroup> threadShared : array<${A}, ${E}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${A} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${A}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${B.registerUniform("packedCols","i32").declareVariables(T,k)}
      ${B.mainStart(E)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${E};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${z}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${A}(${I("threadShared[0]",$)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${A}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${A}(${rr("threadShared[0]",$)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,M=e.compute({name:"Softmax",shaderCache:{hint:`${$};${E}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:m,dataType:d.dataType}],dispatchGroup:{x:_},programUniforms:[{type:6,data:b}]}),getShaderSource:O},{inputs:[d],outputs:[l?-1:0]})[0];l&&e.compute(ft(M,p),{inputs:[M]})},ym=(e,t)=>{Ld(e.inputs),Wd(e,t)},vm=e=>De({axis:e.axis})}),Xi,jd,Vd,Hd,bm,Dg=K(()=>{"use strict";ge(),we(),ke(),Xi=e=>Array.from(e.getBigInt64Array(),Number),jd=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Xi(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Vd=(e,t)=>{let r=[];for(let a=0;a<e.length;++a)r.push(e[a]*t[a]);return r},Hd=(e,t)=>{let r=e[0].dims,a=t??Xi(e[1]),n=Vd(r,a),i=U.size(n),s=e[0].dataType,l=W("input",s,r.length),d=ne("output",s,n.length),p=m=>`
      const inputShape = ${l.indices(...r)};
      ${m.registerUniform("output_size","u32").declareVariables(l,d)}
      ${m.mainStart()}
      ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${d.offsetToIndices("global_idx")};
      var input_indices: ${l.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${l.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${d.indicesGet("output_indices","i")}  % input_dim_i;

        ${l.indicesSet("input_indices","i","input_dim_value")}
      }
      ${d.setByOffset("global_idx",l.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${a}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},...ce(e[0].dims,n)]}),getShaderSource:p}},bm=e=>{jd(e.inputs),e.compute(Hd(e.inputs),{inputs:[0]})}}),Gd,Kd,wm,Mg=K(()=>{"use strict";ge(),we(),ke(),Gd=(e,t,r,a,n)=>{let i=ne("output_data",n,r.length,4),s=W("a_data",t[1].dataType,t[1].dims.length,4),l=W("b_data",t[2].dataType,t[2].dims.length,4),d=W("c_data",t[0].dataType,t[0].dims.length,4),p,m=(h,_,$)=>`select(${_}, ${h}, ${$})`;if(!a)p=i.setByOffset("global_idx",m(s.getByOffset("global_idx"),l.getByOffset("global_idx"),d.getByOffset("global_idx")));else{let h=(_,$,b="")=>{let E=`a_data[index_a${$}][component_a${$}]`,I=`b_data[index_b${$}][component_b${$}]`,T=`bool(c_data[index_c${$}] & (0xffu << (component_c${$} * 8)))`;return`
            let output_indices${$} = ${i.offsetToIndices(`global_idx * 4u + ${$}u`)};
            let offset_a${$} = ${s.broadcastedIndicesToOffset(`output_indices${$}`,i)};
            let offset_b${$} = ${l.broadcastedIndicesToOffset(`output_indices${$}`,i)};
            let offset_c${$} = ${d.broadcastedIndicesToOffset(`output_indices${$}`,i)};
            let index_a${$} = offset_a${$} / 4u;
            let index_b${$} = offset_b${$} / 4u;
            let index_c${$} = offset_c${$} / 4u;
            let component_a${$} = offset_a${$} % 4u;
            let component_b${$} = offset_b${$} % 4u;
            let component_c${$} = offset_c${$} % 4u;
            ${_}[${$}] = ${b}(${m(E,I,T)});
          `};n===9?p=`
            var data = vec4<u32>(0);
            ${h("data",0,"u32")}
            ${h("data",1,"u32")}
            ${h("data",2,"u32")}
            ${h("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:p=`
            ${h("output_data[global_idx]",0)}
            ${h("output_data[global_idx]",1)}
            ${h("output_data[global_idx]",2)}
            ${h("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(d,s,l,i)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${p}
      }`},Kd=e=>{let t=e[1].dims,r=e[2].dims,a=e[0].dims,n=e[1].dataType,i=!(U.areEqual(t,r)&&U.areEqual(r,a)),s=t,l=U.size(t);if(i){let p=Lr.calcShape(Lr.calcShape(t,r,!1),a,!1);if(!p)throw new Error("Can't perform where op on the given tensors");s=p,l=U.size(s)}let d=Math.ceil(l/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:p=>Gd(p,e,s,i,n),getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(l/64/4)},programUniforms:[{type:12,data:d},...ce(a,t,r,s)]})}},wm=e=>{e.compute(Kd(e.inputs))}}),$m,Bg=K(()=>{"use strict";Zh(),Os(),Yh(),Qh(),Jh(),eg(),tg(),sg(),ug(),lg(),dg(),pg(),cg(),fg(),mg(),hg(),gg(),_g(),yg(),vg(),bg(),wg(),$g(),xg(),kg(),qf(),Eg(),Sg(),Tg(),Ig(),zg(),As(),Cg(),Hf(),Ag(),Og(),Rg(),jf(),Dg(),ar(),Rs(),Mg(),$m=new Map([["Abs",[mc]],["Acos",[hc]],["Acosh",[gc]],["Add",[Zc]],["ArgMax",[dc,ss]],["ArgMin",[lc,ss]],["Asin",[_c]],["Asinh",[yc]],["Atan",[vc]],["Atanh",[bc]],["Attention",[pc]],["AveragePool",[tm,em]],["BatchNormalization",[cc]],["BiasAdd",[fc]],["BiasSplitGelu",[Xc]],["Cast",[$c,wc]],["Ceil",[kc]],["Clip",[xc]],["Concat",[of,uf]],["Conv",[cs,ps]],["ConvTranspose",[yf,_f]],["Cos",[Ec]],["Cosh",[Sc]],["CumSum",[vf,bf]],["DepthToSpace",[wf,$f]],["DequantizeLinear",[um,lm]],["Div",[Yc]],["Einsum",[xf,kf]],["Elu",[Tc,ga]],["Equal",[Qc]],["Erf",[Ic]],["Exp",[zc]],["Expand",[Ef]],["FastGelu",[Sf]],["Floor",[Cc]],["FusedConv",[cs,ps]],["Gather",[If,Tf]],["GatherElements",[Df,Rf]],["GatherBlockQuantized",[Af,Of]],["GatherND",[zf,Cf]],["Gelu",[Ac]],["Gemm",[Bf,Mf]],["GlobalAveragePool",[am,rm]],["GlobalMaxPool",[om,sm]],["Greater",[rf]],["GreaterOrEqual",[nf]],["GridSample",[Pf,Nf]],["GroupQueryAttention",[Gf]],["HardSigmoid",[Uc,Nc]],["InstanceNormalization",[Kf]],["LayerNormalization",[Xf]],["LeakyRelu",[Oc,ga]],["Less",[af]],["LessOrEqual",[sf]],["Log",[Gc]],["MatMul",[Zf]],["MatMulNBits",[Yf,Qf]],["MaxPool",[nm,im]],["Mul",[Jc]],["MultiHeadAttention",[Ff,Uf]],["Neg",[Dc]],["Not",[Rc]],["Pad",[Jf]],["Pow",[ef]],["QuickGelu",[Kc,ga]],["Range",[dm]],["Reciprocal",[Mc]],["ReduceMin",[nc]],["ReduceMean",[Jp]],["ReduceMax",[ac]],["ReduceSum",[sc]],["ReduceProd",[ic]],["ReduceL1",[ec]],["ReduceL2",[tc]],["ReduceLogSum",[uc]],["ReduceLogSumExp",[rc]],["ReduceSumSquare",[oc]],["Relu",[Bc]],["Resize",[fm,mm]],["RotaryEmbedding",[Vf]],["ScatterND",[cm,pm]],["Sigmoid",[Pc]],["Sin",[Fc]],["Sinh",[qc]],["Slice",[gm,_m]],["SkipLayerNormalization",[hm]],["Split",[Lf,Wf]],["Sqrt",[Lc]],["Softmax",[ym,vm]],["Sub",[tf]],["Tan",[Wc]],["Tanh",[jc]],["ThresholdedRelu",[Hc,ga]],["Tile",[bm]],["Transpose",[qp,Lp]],["Where",[wm]]])}),xm,Pg=K(()=>{"use strict";Ot(),Gt(),ke(),xm=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,a,n){At(e.programInfo.name);let i=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let l=[];for(let p of t)l.push({binding:l.length,resource:{buffer:p.buffer}});for(let p of r)l.push({binding:l.length,resource:{buffer:p.buffer}});n&&l.push({binding:l.length,resource:n});let d=i.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:l,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let p={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:d,dispatchGroup:a};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(p)}s.setPipeline(e.computePipeline),s.setBindGroup(0,d),s.dispatchWorkgroups(...a),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),vt(e.programInfo.name)}dispose(){}build(e,t){At(e.name);let r=this.backend.device,a=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(p=>{r.features.has(p.feature)&&a.push(`enable ${p.extension};`)});let n=Fp(t,this.backend.device.limits),i=e.getShaderSource(n),s=`${a.join(`
`)}
${n.additionalImplementations}
${i}`,l=r.createShaderModule({code:s,label:e.name});ze("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let d=r.createComputePipeline({compute:{module:l,entryPoint:"main"},layout:"auto",label:e.name});return vt(e.name),{programInfo:e,computePipeline:d,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,a=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&a<=n)return[t,r,a];let i=t*r*a,s=Math.ceil(Math.sqrt(i));if(s>n){if(s=Math.ceil(Math.cbrt(i)),s>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),km={};jr(km,{WebGpuBackend:()=>Em});var Xd,Zd,Yd,Em,Ng=K(()=>{"use strict";Ot(),ge(),Gt(),Mp(),Kh(),Bg(),Pg(),Xd=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let a=0;a<e.length;++a){let n=e[a].dataType;switch(t[a]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let i=e[a].dims.length;r.push(`${n};${i}`);break}case"dims":{let i=e[a].dims.join(",");r.push(`${n};${i}`);break}default:throw new Error(`unsupported input dependency: ${t[a]}`)}}return r.join("|")},Zd=(e,t,r)=>{let a=e.name;return e.shaderCache?.hint&&(a+="["+e.shaderCache.hint+"]"),a+=":"+r+`:${Xd(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,a},Yd=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Em=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],a={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=i=>t.features.has(i)&&r.push(i)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups"),this.device=await t.requestDevice(a),this.adapterInfo=new Yd(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Np(this),this.programManager=new xm(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ts(e.logLevel,!!e.debug),this.device.onuncapturederror=i=>{i.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${i.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;At(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let a=0;a<t.length/2;a++){let n=r[a],i=n.kernelId,s=this.kernels.get(i),l=s.kernelType,d=s.kernelName,p=n.programName,m=n.inputTensorViews,h=n.outputTensorViews,_=t[a*2],$=t[a*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=_);let b=Number(_-this.queryTimeBase),E=Number($-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(E))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:m.map(I=>({dims:I.dims,dataType:Ht(I.dataType)})),outputsMetadata:h.map(I=>({dims:I.dims,dataType:Ht(I.dataType)})),kernelId:i,kernelType:l,kernelName:d,programName:p,startTime:b,endTime:E});else{let I="";m.forEach((k,A)=>{I+=`input[${A}]: [${k.dims}] | ${Ht(k.dataType)}, `});let T="";h.forEach((k,A)=>{T+=`output[${A}]: [${k.dims}] | ${Ht(k.dataType)}, `}),console.log(`[profiling] kernel "${i}|${l}|${d}|${p}" ${I}${T}execution time: ${E-b} ns`)}ba("GPU",`${p}::${_}::${$}`)}e.unmap(),this.pendingQueries.delete(e)}),vt()}run(e,t,r,a,n,i){At(e.name);let s=[];for(let k=0;k<t.length;++k){let A=t[k].data;if(A===0)continue;let z=this.gpuDataManager.get(A);if(!z)throw new Error(`no GPU data for input: ${A}`);s.push(z)}let{outputs:l,dispatchGroup:d,programUniforms:p}=e.getRunData(t),m=r.length===0?l.map((k,A)=>A):r;if(m.length!==l.length)throw new Error(`Output size ${m.length} must be equal to ${l.length}.`);let h=[],_=[];for(let k=0;k<l.length;++k){if(!Number.isInteger(m[k])||m[k]<-3||m[k]>=i)throw new Error(`Invalid output index: ${m[k]}`);if(m[k]===-3)continue;let A=m[k]===-1,z=m[k]===-2,O=A||z?n(l[k].dataType,l[k].dims):a(m[k],l[k].dataType,l[k].dims);if(h.push(O),O.data===0)continue;let M=this.gpuDataManager.get(O.data);if(!M)throw new Error(`no GPU data for output: ${O.data}`);if(A&&this.temporaryData.push(M),z){let B=this.kernelPersistentData.get(this.currentKernelId);B||(B=[],this.kernelPersistentData.set(this.currentKernelId,B)),B.push(M)}_.push(M)}if(s.length!==t.length||_.length!==h.length){if(_.length===0)return vt(e.name),h;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let $;if(p){let k=0,A=[];p.forEach(B=>{let q=typeof B.data=="number"?[B.data]:B.data;if(q.length===0)return;let H=B.type===10?2:4,Z,de;B.type===10?(de=q.length>4?16:q.length>2?8:q.length*H,Z=q.length>4?16:H*q.length):(de=q.length<=2?q.length*H:16,Z=16),k=Math.ceil(k/de)*de,A.push(k);let ae=B.type===10?8:4;k+=q.length>4?Math.ceil(q.length/ae)*Z:q.length*H});let z=16;k=Math.ceil(k/z)*z;let O=new ArrayBuffer(k);p.forEach((B,q)=>{let H=A[q],Z=typeof B.data=="number"?[B.data]:B.data;if(B.type===6)new Int32Array(O,H,Z.length).set(Z);else if(B.type===12)new Uint32Array(O,H,Z.length).set(Z);else if(B.type===10)new Uint16Array(O,H,Z.length).set(Z);else if(B.type===1)new Float32Array(O,H,Z.length).set(Z);else throw new Error(`Unsupported uniform type: ${Ht(B.type)}`)});let M=this.gpuDataManager.create(k,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(M.buffer,0,O,0,k),this.gpuDataManager.release(M.id),$={offset:0,size:k,buffer:M.buffer}}let b=this.programManager.normalizeDispatchGroupSize(d),E=b[1]===1&&b[2]===1,I=Zd(e,t,E),T=this.programManager.getArtifact(I);if(T||(T=this.programManager.build(e,b),this.programManager.setArtifact(I,T),ze("info",()=>`[artifact] key: ${I}, programName: ${e.name}`)),p&&T.uniformVariablesInfo){if(p.length!==T.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${T.uniformVariablesInfo.length}, got ${p.length} in program "${T.programInfo.name}".`);for(let k=0;k<p.length;k++){let A=p[k],z=A.type,O=typeof A.data=="number"?1:A.data.length,[M,B]=T.uniformVariablesInfo[k];if(z!==M||O!==B)throw new Error(`Uniform variable ${k} mismatch: expect type ${M} with size ${B}, got type ${z} with size ${O} in program "${T.programInfo.name}".`)}}if(ze("info",()=>`[ProgramManager] run "${e.name}" (key=${I}) with ${b[0]}x${b[1]}x${b[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let k={kernelId:this.currentKernelId,programName:T.programInfo.name,inputTensorViews:t,outputTensorViews:h};this.pendingKernels.push(k),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(k)}return this.programManager.run(T,s,_,b,$),vt(e.name),h}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,a){let n=$m.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let i={kernelType:e,kernelName:a,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,i)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let a=this.kernels.get(e);if(!a)throw new Error(`kernel not created: ${e}`);let n=a.kernelType,i=a.kernelName,s=a.kernelEntry,l=a.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${i}" is not allowed to be called recursively`);this.currentKernelId=e,l[0]&&(l[1]=l[0](l[1]),l[0]=void 0),ze("info",()=>`[WebGPU] Start to run kernel "[${n}] ${i}"...`);let d=this.env.debug;this.temporaryData=[];try{return d&&this.device.pushErrorScope("validation"),s(t,l[1]),0}catch(p){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${i}" failed. ${p}`)),1}finally{d&&r.push(this.device.popErrorScope().then(p=>p?`GPU validation error for kernel "[${n}] ${i}": ${p.message}`:null));for(let p of this.temporaryData)this.gpuDataManager.release(p.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,a){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let i=n.get(t),s=this.gpuDataManager.registerExternalBuffer(r,a,i);return n.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let a=await as(this,e,t);return Is(a.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ze("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){ze("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){ze("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let a=0;a<r;a++){let n=this.getComputePassEncoder(),i=e[a];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(i.computePipeline),n.setBindGroup(0,i.bindGroup),n.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[a]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Sm={};jr(Sm,{init:()=>Tm});var un,Qd,Tm,Ug=K(()=>{"use strict";ge(),Gt(),we(),Gh(),un=class Im{constructor(t,r,a,n){this.module=t,this.dataType=r,this.data=a,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=U.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=U.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=U.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=U.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(U.size(t)!==U.size(this.dims))throw new Error("Invalid new shape");return new Im(this.module,this.dataType,this.data,t)}},Qd=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let a=e.PTR_SIZE,n=r/e.PTR_SIZE,i=a===4?"i32":"i64";this.opKernelContext=Number(e.getValue(a*n++,i));let s=Number(e.getValue(a*n++,i));this.outputCount=Number(e.getValue(a*n++,i)),this.customDataOffset=Number(e.getValue(a*n++,"*")),this.customDataSize=Number(e.getValue(a*n++,i));let l=[];for(let d=0;d<s;d++){let p=Number(e.getValue(a*n++,i)),m=Number(e.getValue(a*n++,"*")),h=Number(e.getValue(a*n++,i)),_=[];for(let $=0;$<h;$++)_.push(Number(e.getValue(a*n++,i)));l.push(new un(e,p,m,_))}this.inputs=l}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,a=t?.outputs??[],n=(s,l,d)=>new un(this.module,l,this.output(s,d),d),i=(s,l)=>{let d=cr(s,l);if(!d)throw new Error(`Unsupported data type: ${s}`);let p=d>0?this.backend.gpuDataManager.create(d).id:0;return new un(this.module,s,p,l)};return this.backend.run(e,r,a,n,i,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let a=this.module.PTR_SIZE,n=a===4?"i32":"i64",i=this.module.stackAlloc((1+t.length)*a);this.module.setValue(i,t.length,n);for(let s=0;s<t.length;s++)this.module.setValue(i+a*(s+1),t[s],n);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(a){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${a}`)}finally{this.module.stackRestore(r)}}},Tm=async(e,t,r,a)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let i=(Ng(),va(km)).WebGpuBackend,s=new i;await s.initialize(r,a),n("webgpu",[s,l=>s.alloc(Number(l)),l=>s.free(l),(l,d,p,m=!1)=>{if(m)ze("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(l)}, dst=${Number(d)}, size=${Number(p)}`),s.memcpy(Number(l),Number(d));else{ze("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(l)}, gpuDataId=${Number(d)}, size=${Number(p)}`);let h=t.HEAPU8.subarray(Number(l>>>0),Number(l>>>0)+Number(p));s.upload(Number(d),h)}},async(l,d,p)=>{ze("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${l}, dataOffset=${d}, size=${p}`),await s.download(Number(l),()=>t.HEAPU8.subarray(Number(d)>>>0,Number(d+p)>>>0))},(l,d,p)=>s.createKernel(l,Number(d),p,t.UTF8ToString(t._JsepGetNodeName(Number(d)))),l=>s.releaseKernel(l),(l,d,p,m)=>{ze("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${p}, kernel=${l}, contextDataOffset=${d}`);let h=new Qd(t,s,Number(d));return s.computeKernel(Number(l),h,m)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let i=new Pp(r);n("webnn",[i,()=>i.reserveTensorId(),s=>i.releaseTensorId(s),async(s,l,d,p,m)=>i.ensureTensor(s,l,d,p,m),(s,l)=>{i.uploadTensor(s,l)},async(s,l)=>i.downloadTensor(s,l)])}}}),Jd,Us,Fs,er,ep,Zi,vn,qs,Ls,Yi,Ws,js,Vs,zm=K(()=>{"use strict";jh(),Vh(),ge(),_r(),$s(),Ap(),Jd=(e,t)=>{We()._OrtInit(e,t)!==0&&Pe("Can't initialize onnxruntime.")},Us=async e=>{Jd(e.wasm.numThreads,mn(e.logLevel))},Fs=async(e,t)=>{We().asyncInit?.();{let r=(Ug(),va(Sm)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let a=e.webgpu.adapter;if(a){if(typeof a.limits!="object"||typeof a.features!="object"||typeof a.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let i=e.webgpu.forceFallbackAdapter;if(i!==void 0&&typeof i!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${i}"`);if(a=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:i}),!a)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",We(),e,a)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",We(),e)}}},er=new Map,ep=e=>{let t=We(),r=t.stackSave();try{let a=t.PTR_SIZE,n=t.stackAlloc(2*a);t._OrtGetInputOutputCount(e,n,n+a)!==0&&Pe("Can't get session input/output count.");let i=a===4?"i32":"i64";return[Number(t.getValue(n,i)),Number(t.getValue(n+a,i))]}finally{t.stackRestore(r)}},Zi=(e,t)=>{let r=We(),a=r.stackSave(),n=0;try{let i=r.PTR_SIZE,s=r.stackAlloc(2*i);r._OrtGetInputOutputMetadata(e,t,s,s+i)!==0&&Pe("Can't get session input/output metadata.");let l=Number(r.getValue(s,"*"));n=Number(r.getValue(s+i,"*"));let d=r.HEAP32[n/4];if(d===0)return[l,0];let p=r.HEAPU32[n/4+1],m=[];for(let h=0;h<p;h++){let _=Number(r.getValue(n+8+h*i,"*"));m.push(_!==0?r.UTF8ToString(_):Number(r.getValue(n+8+(h+p)*i,"*")))}return[l,d,m]}finally{r.stackRestore(a),n!==0&&r._OrtFree(n)}},vn=e=>{let t=We(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},qs=async(e,t)=>{let r,a,n=We();Array.isArray(e)?[r,a]=e:e.buffer===n.HEAPU8.buffer?[r,a]=[e.byteOffset,e.byteLength]:[r,a]=vn(e);let i=0,s=0,l=0,d=[],p=[],m=[];try{if([s,d]=await Cp(t),t?.externalData&&n.mountExternalData){let z=[];for(let O of t.externalData){let M=typeof O=="string"?O:O.path;z.push(Ss(typeof O=="string"?O:O.data).then(B=>{n.mountExternalData(M,B)}))}await Promise.all(z)}for(let z of t?.executionProviders??[])if((typeof z=="string"?z:z.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof z!="string"){let O=z,M=O?.context,B=O?.gpuDevice,q=O?.deviceType,H=O?.powerPreference;M?n.currentContext=M:B?n.currentContext=await n.webnnCreateMLContext(B):n.currentContext=await n.webnnCreateMLContext({deviceType:q,powerPreference:H})}else n.currentContext=await n.webnnCreateMLContext();break}i=await n._OrtCreateSession(r,a,s),n.webgpuOnCreateSession?.(i),i===0&&Pe("Can't create a session."),n.jsepOnCreateSession?.(),n.currentContext&&(n.webnnRegisterMLContext(i,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[h,_]=ep(i),$=!!t?.enableGraphCapture,b=[],E=[],I=[],T=[],k=[];for(let z=0;z<h;z++){let[O,M,B]=Zi(i,z);O===0&&Pe("Can't get an input name."),p.push(O);let q=n.UTF8ToString(O);b.push(q),I.push(M===0?{name:q,isTensor:!1}:{name:q,isTensor:!0,type:Ht(M),shape:B})}for(let z=0;z<_;z++){let[O,M,B]=Zi(i,z+h);O===0&&Pe("Can't get an output name."),m.push(O);let q=n.UTF8ToString(O);E.push(q),T.push(M===0?{name:q,isTensor:!1}:{name:q,isTensor:!0,type:Ht(M),shape:B});{if($&&t?.preferredOutputLocation===void 0){k.push("gpu-buffer");continue}let H=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[q]??"cpu";if(H!=="cpu"&&H!=="cpu-pinned"&&H!=="gpu-buffer"&&H!=="ml-tensor")throw new Error(`Not supported preferred output location: ${H}.`);if($&&H!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${H}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);k.push(H)}}let A=null;return k.some(z=>z==="gpu-buffer"||z==="ml-tensor")&&(l=n._OrtCreateBinding(i),l===0&&Pe("Can't create IO binding."),A={handle:l,outputPreferredLocations:k,outputPreferredLocationsEncoded:k.map(z=>ts(z))}),er.set(i,[i,p,m,A,$,!1]),[i,b,E,I,T]}catch(h){throw p.forEach(_=>n._OrtFree(_)),m.forEach(_=>n._OrtFree(_)),l!==0&&n._OrtReleaseBinding(l)!==0&&Pe("Can't release IO binding."),i!==0&&n._OrtReleaseSession(i)!==0&&Pe("Can't release session."),h}finally{n._free(r),s!==0&&n._OrtReleaseSessionOptions(s)!==0&&Pe("Can't release session options."),d.forEach(h=>n._free(h)),n.unmountExternalData?.()}},Ls=e=>{let t=We(),r=er.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[a,n,i,s,l]=r;s&&(l&&t._OrtClearBoundOutputs(s.handle)!==0&&Pe("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&Pe("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),n.forEach(d=>t._OrtFree(d)),i.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(a)!==0&&Pe("Can't release session."),er.delete(e)},Yi=async(e,t,r,a,n,i,s=!1)=>{if(!e){t.push(0);return}let l=We(),d=l.PTR_SIZE,p=e[0],m=e[1],h=e[3],_=h,$,b;if(p==="string"&&(h==="gpu-buffer"||h==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&h!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${i} when enableGraphCapture is true.`);if(h==="gpu-buffer"){let T=e[2].gpuBuffer;b=cr(Fr(p),m);{let k=l.jsepRegisterBuffer;if(!k)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');$=k(a,i,T,b)}}else if(h==="ml-tensor"){let T=e[2].mlTensor;b=cr(Fr(p),m);let k=l.webnnRegisterMLTensor;if(!k)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');$=k(a,T,Fr(p),m)}else{let T=e[2];if(Array.isArray(T)){b=d*T.length,$=l._malloc(b),r.push($);for(let k=0;k<T.length;k++){if(typeof T[k]!="string")throw new TypeError(`tensor data at index ${k} is not a string`);l.setValue($+k*d,zt(T[k],r),"*")}}else{let k=l.webnnIsGraphInput;if(p!=="string"&&k){let A=l.UTF8ToString(n);if(k(a,A)){let z=Fr(p);b=cr(z,m),_="ml-tensor";let O=l.webnnCreateTemporaryTensor,M=l.webnnUploadTensor;if(!O||!M)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let B=await O(a,z,m);M(B,new Uint8Array(T.buffer,T.byteOffset,T.byteLength)),$=B}else b=T.byteLength,$=l._malloc(b),r.push($),l.HEAPU8.set(new Uint8Array(T.buffer,T.byteOffset,b),$)}else b=T.byteLength,$=l._malloc(b),r.push($),l.HEAPU8.set(new Uint8Array(T.buffer,T.byteOffset,b),$)}}let E=l.stackSave(),I=l.stackAlloc(4*m.length);try{m.forEach((k,A)=>l.setValue(I+A*d,k,d===4?"i32":"i64"));let T=l._OrtCreateTensor(Fr(p),$,b,I,m.length,ts(_));T===0&&Pe(`Can't create tensor for input/output. session=${a}, index=${i}.`),t.push(T)}finally{l.stackRestore(E)}},Ws=async(e,t,r,a,n,i)=>{let s=We(),l=s.PTR_SIZE,d=er.get(e);if(!d)throw new Error(`cannot run inference. invalid session id: ${e}`);let p=d[0],m=d[1],h=d[2],_=d[3],$=d[4],b=d[5],E=t.length,I=a.length,T=0,k=[],A=[],z=[],O=[],M=s.stackSave(),B=s.stackAlloc(E*l),q=s.stackAlloc(E*l),H=s.stackAlloc(I*l),Z=s.stackAlloc(I*l);try{[T,k]=zp(i);for(let Y=0;Y<E;Y++)await Yi(r[Y],A,O,e,m[t[Y]],t[Y],$);for(let Y=0;Y<I;Y++)await Yi(n[Y],z,O,e,h[a[Y]],E+a[Y],$);for(let Y=0;Y<E;Y++)s.setValue(B+Y*l,A[Y],"*"),s.setValue(q+Y*l,m[t[Y]],"*");for(let Y=0;Y<I;Y++)s.setValue(H+Y*l,z[Y],"*"),s.setValue(Z+Y*l,h[a[Y]],"*");if(_&&!b){let{handle:Y,outputPreferredLocations:X,outputPreferredLocationsEncoded:ie}=_;if(m.length!==E)throw new Error(`input count from feeds (${E}) is expected to be always equal to model's input count (${m.length}).`);for(let J=0;J<E;J++){let me=t[J];await s._OrtBindInput(Y,m[me],A[J])!==0&&Pe(`Can't bind input[${J}] for session=${e}.`)}for(let J=0;J<I;J++){let me=a[J];n[J]?.[3]?s._OrtBindOutput(Y,h[me],z[J],0)!==0&&Pe(`Can't bind pre-allocated output[${J}] for session=${e}.`):s._OrtBindOutput(Y,h[me],0,ie[me])!==0&&Pe(`Can't bind output[${J}] to ${X[J]} for session=${e}.`)}er.set(e,[p,m,h,_,$,!0])}s.jsepOnRunStart?.(p),s.webnnOnRunStart?.(p);let de;_?de=await s._OrtRunWithBinding(p,_.handle,I,H,T):de=await s._OrtRun(p,q,B,E,Z,I,H,T),de!==0&&Pe("failed to call OrtRun().");let ae=[];for(let Y=0;Y<I;Y++){let X=Number(s.getValue(H+Y*l,"*"));if(X===z[Y]){ae.push(n[Y]);continue}let ie=s.stackSave(),J=s.stackAlloc(4*l),me=!1,ye,fe=0;try{s._OrtGetTensorData(X,J,J+l,J+2*l,J+3*l)!==0&&Pe(`Can't access output tensor data on index ${Y}.`);let Me=l===4?"i32":"i64",j=Number(s.getValue(J,Me));fe=s.getValue(J+l,"*");let Q=s.getValue(J+l*2,"*"),_e=Number(s.getValue(J+l*3,Me)),F=[];for(let Ve=0;Ve<_e;Ve++)F.push(Number(s.getValue(Q+Ve*l,Me)));s._OrtFree(Q)!==0&&Pe("Can't free memory for tensor dims.");let be=F.reduce((Ve,Ze)=>Ve*Ze,1);ye=Ht(j);let ut=_?.outputPreferredLocations[a[Y]];if(ye==="string"){if(ut==="gpu-buffer"||ut==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Ve=[];for(let Ze=0;Ze<be;Ze++){let mt=s.getValue(fe+Ze*l,"*"),nr=s.getValue(fe+(Ze+1)*l,"*"),Ye=Ze===be-1?void 0:nr-mt;Ve.push(s.UTF8ToString(mt,Ye))}ae.push([ye,F,Ve,"cpu"])}else if(ut==="gpu-buffer"&&be>0){let Ve=s.jsepGetBuffer;if(!Ve)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let Ze=Ve(fe),mt=cr(j,be);if(mt===void 0||!ks(ye))throw new Error(`Unsupported data type: ${ye}`);me=!0,ae.push([ye,F,{gpuBuffer:Ze,download:s.jsepCreateDownloader(Ze,mt,ye),dispose:()=>{s._OrtReleaseTensor(X)!==0&&Pe("Can't release tensor.")}},"gpu-buffer"])}else if(ut==="ml-tensor"&&be>0){let Ve=s.webnnEnsureTensor,Ze=s.webnnIsInt64Supported;if(!Ve||!Ze)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(cr(j,be)===void 0||!Es(ye))throw new Error(`Unsupported data type: ${ye}`);if(ye==="int64"&&!Ze(e))throw new Error('preferredLocation "ml-tensor" for int64 output is not supported by current WebNN Context.');let mt=await Ve(e,fe,j,F,!1);me=!0,ae.push([ye,F,{mlTensor:mt,download:s.webnnCreateMLTensorDownloader(fe,ye),dispose:()=>{s.webnnReleaseTensorId(fe),s._OrtReleaseTensor(X)}},"ml-tensor"])}else{let Ve=xs(ye),Ze=new Ve(be);new Uint8Array(Ze.buffer,Ze.byteOffset,Ze.byteLength).set(s.HEAPU8.subarray(fe,fe+Ze.byteLength)),ae.push([ye,F,Ze,"cpu"])}}finally{s.stackRestore(ie),ye==="string"&&fe&&s._free(fe),me||s._OrtReleaseTensor(X),s.webnnOnRunEnd?.(p)}}return _&&!$&&(s._OrtClearBoundOutputs(_.handle)!==0&&Pe("Can't clear bound outputs."),er.set(e,[p,m,h,_,$,!1])),ae}finally{s.stackRestore(M),A.forEach(de=>s._OrtReleaseTensor(de)),z.forEach(de=>s._OrtReleaseTensor(de)),O.forEach(de=>s._free(de)),T!==0&&s._OrtReleaseRunOptions(T),k.forEach(de=>s._free(de))}},js=e=>{let t=We(),r=er.get(e);if(!r)throw new Error("invalid session id");let a=r[0],n=t._OrtEndProfiling(a);n===0&&Pe("Can't get an profile file name."),t._OrtFree(n)},Vs=e=>{let t=[];for(let r of e){let a=r[2];!Array.isArray(a)&&"buffer"in a&&t.push(a.buffer)}return t}}),tr,_t,Ur,ca,fa,ln,Qi,dn,lr,dr,tp,Cm,Am,Om,Rm,Dm,Mm,Bm,Pm=K(()=>{"use strict";Ot(),zm(),_r(),bs(),tr=()=>!!je.wasm.proxy&&typeof document<"u",Ur=!1,ca=!1,fa=!1,dn=new Map,lr=(e,t)=>{let r=dn.get(e);r?r.push(t):dn.set(e,[t])},dr=()=>{if(Ur||!ca||fa||!_t)throw new Error("worker not ready")},tp=e=>{switch(e.data.type){case"init-wasm":Ur=!1,e.data.err?(fa=!0,Qi[1](e.data.err)):(ca=!0,Qi[0]()),ln&&(URL.revokeObjectURL(ln),ln=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=dn.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},Cm=async()=>{if(!ca){if(Ur)throw new Error("multiple calls to 'initWasm()' detected.");if(fa)throw new Error("previous call to 'initWasm()' failed.");if(Ur=!0,tr())return new Promise((e,t)=>{_t?.terminate(),Tp().then(([r,a])=>{try{_t=a,_t.onerror=i=>t(i),_t.onmessage=tp,Qi=[e,t];let n={type:"init-wasm",in:je};!n.in.wasm.wasmPaths&&(r||es)&&(n.in.wasm.wasmPaths={wasm:new URL("ort-wasm-simd-threaded.jsep.wasm",import.meta.url).href}),_t.postMessage(n),ln=r}catch(n){t(n)}},t)});try{await ws(je.wasm),await Us(je),ca=!0}catch(e){throw fa=!0,e}finally{Ur=!1}}},Am=async e=>{if(tr())return dr(),new Promise((t,r)=>{lr("init-ep",[t,r]);let a={type:"init-ep",in:{epName:e,env:je}};_t.postMessage(a)});await Fs(je,e)},Om=async e=>tr()?(dr(),new Promise((t,r)=>{lr("copy-from",[t,r]);let a={type:"copy-from",in:{buffer:e}};_t.postMessage(a,[e.buffer])})):vn(e),Rm=async(e,t)=>{if(tr()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return dr(),new Promise((r,a)=>{lr("create",[r,a]);let n={type:"create",in:{model:e,options:{...t}}},i=[];e instanceof Uint8Array&&i.push(e.buffer),_t.postMessage(n,i)})}else return qs(e,t)},Dm=async e=>{if(tr())return dr(),new Promise((t,r)=>{lr("release",[t,r]);let a={type:"release",in:e};_t.postMessage(a)});Ls(e)},Mm=async(e,t,r,a,n,i)=>{if(tr()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return dr(),new Promise((s,l)=>{lr("run",[s,l]);let d=r,p={type:"run",in:{sessionId:e,inputIndices:t,inputs:d,outputIndices:a,options:i}};_t.postMessage(p,Vs(d))})}else return Ws(e,t,r,a,n,i)},Bm=async e=>{if(tr())return dr(),new Promise((t,r)=>{lr("end-profiling",[t,r]);let a={type:"end-profiling",in:e};_t.postMessage(a)});js(e)}}),Ji,rp,Nm,Fg=K(()=>{"use strict";Ot(),Pm(),ge(),vs(),Ap(),Ji=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},rp=e=>{switch(e[3]){case"cpu":return new Ct(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!ks(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:a,dispose:n}=e[2];return Ct.fromGpuBuffer(r,{dataType:t,dims:e[1],download:a,dispose:n})}case"ml-tensor":{let t=e[0];if(!Es(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:a,dispose:n}=e[2];return Ct.fromMLTensor(r,{dataType:t,dims:e[1],download:a,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},Nm=class{async fetchModelAndCopyToWasmMemory(e){return Om(await Ss(e))}async loadModel(e,t){At();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await Rm(r,t),vt()}async dispose(){return Dm(this.sessionId)}async run(e,t,r){At();let a=[],n=[];Object.entries(e).forEach(h=>{let _=h[0],$=h[1],b=this.inputNames.indexOf(_);if(b===-1)throw new Error(`invalid input '${_}'`);a.push($),n.push(b)});let i=[],s=[];Object.entries(t).forEach(h=>{let _=h[0],$=h[1],b=this.outputNames.indexOf(_);if(b===-1)throw new Error(`invalid output '${_}'`);i.push($),s.push(b)});let l=a.map((h,_)=>Ji(h,()=>`input "${this.inputNames[n[_]]}"`)),d=i.map((h,_)=>h?Ji(h,()=>`output "${this.outputNames[s[_]]}"`):null),p=await Mm(this.sessionId,n,l,s,d,r),m={};for(let h=0;h<p.length;h++)m[this.outputNames[s[h]]]=i[h]??rp(p[h]);return vt(),m}startProfiling(){}endProfiling(){Bm(this.sessionId)}}}),Um={};jr(Um,{OnnxruntimeWebAssemblyBackend:()=>hs,initializeFlags:()=>ms,wasmBackend:()=>Fm});var ms,hs,Fm,qg=K(()=>{"use strict";Ot(),Pm(),Fg(),ms=()=>{(typeof je.wasm.initTimeout!="number"||je.wasm.initTimeout<0)&&(je.wasm.initTimeout=0);let e=je.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),je.wasm.simd=!1),typeof je.wasm.proxy!="boolean"&&(je.wasm.proxy=!1),typeof je.wasm.trace!="boolean"&&(je.wasm.trace=!1),typeof je.wasm.numThreads!="number"||!Number.isInteger(je.wasm.numThreads)||je.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)je.wasm.numThreads=1;else{let t=typeof navigator>"u"?Th("node:os").cpus().length:navigator.hardwareConcurrency;je.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},hs=class{async init(e){ms(),await Cm(),await Am(e)}async createInferenceSessionHandler(e,t){let r=new Nm;return await r.loadModel(e,t),r}},Fm=new hs});Ot();Ot();Ot();var Lg="1.22.0-dev.20250409-89f8206ba4",Wg=wp;{let e=(qg(),va(Um)).wasmBackend;fr("webgpu",e,5),fr("webnn",e,5),fr("cpu",e,10),fr("wasm",e,10)}Object.defineProperty(je.versions,"web",{value:Lg,enumerable:!0});var export_createPiperPhonemize=jg.default;export{export_createPiperPhonemize as createPiperPhonemize,qm as ort};
/*! Bundled license information:

onnxruntime-web/dist/ort.bundle.min.mjs:
  (*!
   * ONNX Runtime Web v1.22.0-dev.20250409-89f8206ba4
   * Copyright (c) Microsoft Corporation. All rights reserved.
   * Licensed under the MIT License.
   *)

onnxruntime-web/dist/ort.bundle.min.mjs:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
*/
