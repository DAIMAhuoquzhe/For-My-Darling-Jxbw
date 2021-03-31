/**
 * ime JS
 * index
 * 2015-02-02
 */

(function () {         
    //alert(window.innerWidth);
 
    var WIN = window,
            DOC = document,
            NAV = navigator,
            LOC = location,
            HIS = history;
    var innerHTML = "innerHTML",
            className = "className",
            appendChild = "appendChild",
            style = "style";
 
    var Base = BASE;
    var Touch = Base.cfg.isTouch;
  
    var $$ = Base.getEle,
            $_ = Base.creEle,
            $D = Base.disEle,
            $T = Base.txtEle,
            $R = Base.rmvEle,
            $G = Base.getUrl,
            $GC = Base.getCoord,
            $GP = Base.getPrefix,
            $EF = Base.execFun,
            $JP = Base.jsonParse,
            $JS = Base.jsonStringify,
            $SS = Base.setStorage,
            $GS = Base.getStorage,
            $AJAX = Base.ajax,
            $ADPALLSTYLE = Base.adpAllStyle,
            $CREATESTYLE = Base.createStyle,
            $CSSREADER = Base.cssReader;
  
    var body = DOC.body;
    var PageIndex = 0;
    var Activing, Hovering;
    var Time = 500;
    var IE;
	
    function initialize() {
        checkBrowserVer();
        if(body[className].indexOf('ie') === 0) {
            initIE();
        }else {
            $CSSREADER('ime150416/css/index-adp.css', 'adp', function () { 
                $D(body, 1);           
            }); 
        }
        initModel();
        initEvent();
    }
    function initIE() {
        IE = getIE();
        $CSSREADER('ime150416/css/index-ie.css', 'ie', function () {
            rmSvg();
            replaceImg();
            setTimeout(function () {
                $D(body, 1);
            }, 500);
        });     
        function rmSvg() {
            var len = $$("#swipe").children.length;
            for (var i = 1; i <= len; i++) {
                $R($$("#p" + i + "_img"));
            }
        }
        function replaceImg() {
            var adr = 'ime150416/img/ie/';
            $$("#nav_logo").src = adr + 'logo-lab.png';
            $$("#p0_img_0").src = adr + 'p0-img.png';
            $$("#p0_btm_lab1_0").src = adr + 'p0-lab1.png';
            $$("#p0_btm_lab2_0").src = adr + 'p0-lab2.png';
            $$("#p1_lab_0").src = adr + 'p1-lab.png';
            $$("#p2_lab_0").src = adr + 'p2-lab.png';
            $$("#p3_lab_0").src = adr + 'p3-lab.png';
            $$("#p4_lab_0").src = adr + 'p4-lab.png';
            $$("#p5_lab_0").src = adr + 'p5-lab.png';

            $$("#foot_info_ico_wx_0").src = adr + 'ewm.png';
            $$("#guide").src = adr + 'guide.png';

            $$("#p0_ewm_0").src = adr + 'ewm-img0.png';
            $$("#nav_btn_a_down").src = adr + 'ewm-img1.png';
            $$("#nav_btn_i_down").src = adr + 'ewm-img2.png';
        }

        function getIE() {
            var ie = 1;
            var cls = body[className];
            if (cls.indexOf('ie9') > 0) {
                ie = 9;
            } else if (cls.indexOf('ie8') > 0) {
                ie = 8;
            } else if (cls.indexOf('ie7') > 0) {
                ie = 7;
            }
            return ie;
        }
    }
    function initModel() {
        var cls = 'page active';
        modelP0();
        modelP1();
        modelP2();
        modelP3();
        modelP4();
        modelP5();

        function modelP0() {
            var page = $$("#p0");
            page.init = function (callback) {
                page.register = 1;
                $EF(callback);
            };
        }
        function modelP1() {
            var page = $$("#p1");
            page.init = function (callback) {
                page.register = 1;
                page[className] = cls;

                setTimeout(function () {
                    $EF(callback);
                }, Time);
            };
        }
        function modelP2() {
            var page = $$("#p2");
            page.init = function (callback) {
                page.register = 1;
                page[className] = cls;

                setTimeout(function () {
                    $EF(callback);
                }, Time);
                setTimeout(function () {
                    page[className] = cls + ' run';
                }, 500);
            };
        }
        function modelP3() {
            var page = $$("#p3");
            page.init = function (callback) {
                page.register = 1;
                page[className] = cls;

                setTimeout(function () {
                    $EF(callback);
                }, Time);
                setTimeout(function () {
                    page[className] = cls + ' run';
                }, 1010);
            };
        }
        function modelP4() {
            var page = $$("#p4");
            page.init = function (callback) {
                page.register = 1;
                page[className] = cls;
                setTimeout(function () {
                    $EF(callback);
                }, Time);
                if (IE)
                    return;

 setTimeout(function () {
                    page[className] = cls + ' run';
                }, 500);

               
            };
        }
        function modelP5() {
            var page = $$("#p5");
            page.init = function (callback) {
                page.register = 1;
                page[className] = cls;

 setTimeout(function () {
                    var len = $$("#p4_imgs").children.length;
                    var index = 1;
                    interval();
                    setInterval(interval, 3000);

                    function interval() {
                        for (var i = 0; i < len; i++) {
                            deal(i);
                        }
                        index++;
                        (index === len) && (index = 0);

                        function deal(i) {
                            var val = i + index;
                            (val >= len) && (val -= len);
                            $$("#p4_img" + i)[className] = 'p4-img' + val;
                        }
                    }
                }, 1000);
                setTimeout(function () {
                    $EF(callback);
                }, Time);
            };
        }
    }
    function initEvent() {
        initKeyboard();
        initFixbar(gotoPage);
        initBtnClick();
        Touch && initTouchEvent();

        function initKeyboard() {
            //IE ? DOC.attachEvent("onkeyup", keyupFun) : (DOC.onkeyup = keyupFun);
            var mousewheelevt = (/Firefox/i.test(NAV.userAgent)) ? "DOMMouseScroll" : "mousewheel";  //FF doesn't recognize mousewheel as of FF3.x
            if (DOC.attachEvent) {  //if IE (and Opera depending on user setting)
                DOC.attachEvent("on" + mousewheelevt, wheelHandler);
                DOC.attachEvent("onkeyup", keyupFun);
            } else if (DOC.addEventListener) {//WC3 browsers
                DOC.addEventListener(mousewheelevt, wheelHandler, false);
                DOC.onkeyup = keyupFun;
            }

            function wheelHandler(e) {
                if (!e)
                    return;
                var delta = e.detail ? e.detail / 3 : e.wheelDelta / -120;
                if (delta > 0) {
                    nextPage();
                } else if (delta < 0) {
                    prePage();
                }
            }
            function keyupFun(e) {
                if (!e || !e.keyCode)
                    return;
                //console.log(e.keyCode);
                var obj = {
                    '38': prePage,
                    '40': nextPage
                };
                obj[e.keyCode + ''] && obj[e.keyCode + '']();
            }
        }
        function initTouchEvent() {
            var START_EVENT = Touch ? 'ontouchstart' : 'onmousedown',
                    MOVE_EVENT = Touch ? 'ontouchmove' : 'onmousemove',
                    END_EVENT = Touch ? 'ontouchend' : 'onmouseup';

            var parEle = $$("#main");
            parEle[className] = 'grab';
            var ele = $$("#swipe");
            var Trsf = $GP('transform');
            var Trst = $GP('transition');
            var begin;
            var height;
            var listLength;
            var startTime, startY, currY;

            parEle[START_EVENT] = onStart;

            function onStart(e) {
                if (Activing || begin)
                    return;
                e.stopPropagation();
                begin = true;
                ele[style][Trst] = 'initial';
                height = WIN.innerHeight;
                listLength = ele.children.length;
                startTime = new Date();
                startY = $GC(e, 'Y');

                DOC[MOVE_EVENT] = onMove;
                DOC[END_EVENT] = onEnd;
            }
            function onMove(e) {
                if (Activing || !begin)
                    return;
                e.preventDefault();
                //e.stopPropagation();

                currY = $GC(e, 'Y');
                var dist = currY - startY;

                if (PageIndex === 0 && dist > 0) {  //top img to top
                    dist = 0;
                } else if (PageIndex === listLength - 1 && dist < 0) {  //btm img to btm
                    return disBtm(1);
                    //dist /= 3;
                    //(dist <= (-1 * height / 3)) && (dist = (-1 * height / 3));
                } else if (PageIndex === listLength && dist > 0) {
                    return disBtm();
                } else if (PageIndex === listLength && dist <= 0) {
                    return;
                }

                (dist >= height) && (dist = height);
                (dist <= -height) && (dist = -height);

                ele[style]['top'] = (dist / height - PageIndex) * 100 + '%';
            }
            function onEnd(e) {
                if (Activing || !begin)
                    return;
                DOC[MOVE_EVENT] = '';
                DOC[END_EVENT] = '';

                if (PageIndex === listLength)
                    return reset();

                currY = $GC(e, 'Y');
                var index = PageIndex;
                var dist = currY - startY;
                var distTime = new Date() - startTime;

                if (distTime < 300) {
                    var d = Math.pow(dist / distTime, 2) / 0.003;
                    dist = Math.abs(dist) / dist * d;
                }
                dist > height / 4 && (index--);
                dist < -height / 4 && (index++);

                (index < 0) && (index = 0);
                (index >= listLength) && (index = listLength - 1);

                if (index !== PageIndex || (index === PageIndex && dist)) {
                    moveTo(index);
                } else {
                    reset();
                }
            }

            function reset() {
                begin = false;
                ele[style][Trst] = "";
                $$("#cont")[style][Trst] = "";
            }

            function moveTo(index, callback) {
                ele[style][Trst] = "0.3s";
                gotoPage(index, reset);
            }
            function disBtm(bool) {
                var len = ele.children.length;
                if (bool && PageIndex === len) {
                    return;
                }
                DOC[MOVE_EVENT] = '';
                DOC[END_EVENT] = '';

                $$("#cont")[style][Trst] = "0.3s";
                displayBtm(bool, reset);
            }
        }
    }

    function prePage() {
        var len = $$("#swipe").children.length;
        var index = PageIndex - 1;
        if (index < 0)
            return;
        (index === len - 1) ? displayBtm() : gotoPage(index);
    }
    function nextPage() {
        var len = $$("#swipe").children.length;
        var index = PageIndex + 1;
        if (index > len)
            return;
        (index === len) ? displayBtm(1) : gotoPage(index);
    }
    function gotoPage(index, callback) {
        var len = $$("#swipe").children.length;
        if (Activing || index >= len)
            return;
        if(index>0){
            $D($$("#guide"));
        }else{
            setTimeout(function () {
               $D($$("#guide"),1)
            }, 800);
        }
        Activing = 1;
        dealNav(index);

        if (IE) {
            ieSwipe($$("#swipe"), 'top', -100 * PageIndex, -100 * index, '%');
        } else {
            $$("#swipe")[style]['top'] = -100 * index + '%';
        }

        Cnzz('浏览页面' + index, '翻页');
        showFixbar(index);
        setTimeout(deal, Time);

        function deal() {
            PageIndex = index;
            dealNav(index);

            var page = $$("#p" + index);
            if (page.register)
                return clearActiving(50, callback);
            if (typeof page.init === 'function') {
                $EF(page.init, function () {
                    clearActiving(50, callback);
                });
            } else {
                clearActiving(50, callback);
            }
        }
        function dealNav(index) {
            var nav = $$("#nav");
            if (index && !nav[className]) {
                nav[className] = 'open';
            } else if (!index && nav[className]) {
                nav[className] = '';
            }
        }
    }
    function displayBtm(bool, callback) {
        if (Activing)
            return;
        Activing = 1;
        var len = $$("#swipe").children.length;
        var str = '';
        var footHeight = $$("#foot").offsetHeight;
        var oldIndex = -1 * footHeight;
        var newIndex = oldIndex;
        if (bool) {
            Cnzz('浏览页面页脚', '翻页');
            PageIndex = len;
            str = newIndex + 'px';
            oldIndex = 0;
            $$("#fixbar")[className] = 'close';
            setTimeout(function () {
                $D($$("#fixbar"));
            }, Time);
        } else {
            newIndex = 0;
            PageIndex = len - 1;
            $D($$("#fixbar"), 1);
            setTimeout(function () {
                $$("#fixbar")[className] = '';
            }, Time);
        }
        if (IE) {
            ieSwipe($$("#cont"), 'marginTop', oldIndex, newIndex, 'px', 300);
        } else {
            $$("#cont")[style]['marginTop'] = str;
        }

        clearActiving(Time + 50, callback);
//        setTimeout(function () {
//            Activing = 0;
//        }, Time);
    }

    function ieSwipe(ele, atr, oldIndex, newIndex, unit, time) {
        if (time === 0) {
            ele[style][atr] = newIndex + unit;
            return;
        }
        var ti = time ? time : Time;
        var date1 = new Date();
        var fs = 10;
        var num = 1;
        var deta = newIndex - oldIndex;
        var u = deta / ti;

        var interver = setInterval(function () {
            var t = fs * num;
            if (t >= ti) {
                clearInterval(interver);
                ele[style][atr] = newIndex + unit;
                //console.log(new Date() - date1);
                return;
            }
            ele[style][atr] = (oldIndex + u * t) + unit;
            num++;
        }, fs);
    }

    function initFixbar(callback) {
        var len = $$("#fixbar").children.length;
        for (var i = 0; i < len; i++) {
            deal(i);
        }

        function deal(i) {
            var fixbar = $$("#fixbar" + i);
            fixbar.onclick = function () {
                if(Activing)
                    return;
                $EF(callback, i);
                //gotoPage(i);
            };
            fixbar.onmouseover = function () {
                if(Activing)
                    return;
                Hovering = 1;
                showFixbar(i);
            };
            fixbar.onmouseout = function () {
                if(Activing)
                    return;
                Hovering = 0;
                setTimeout(function () {
                    !Hovering && showFixbar(PageIndex);
                }, 50);
            };
        }
    }
    function showFixbar(index) {
        var len = $$("#fixbar").children.length;
        for (var i = 0; i < len; i++) {
            $$("#fixbar" + i)[className] = '';
        }
        $$("#fixbar" + index)[className] = 'open';
    }
    function initBtnClick() {
        $$("#nav_btn_a").onclick = function () {
            Cnzz('导航安卓下载');
        };
        $$("#nav_btn_i").onclick = function () {
            Cnzz('导航苹果下载');
        };
		$$("#nav_btn_pc").onclick = function () {
            Cnzz('导航pc下载');
        };
        $$("#p0_btm_btn1").onclick = function () {
            Cnzz('首页安卓下载');
        };
        $$("#p0_btm_btn2").onclick = function () {
            Cnzz('首页苹果下载');
        };
		$$("#p0_btm_btn3").onclick = function () {
            Cnzz('首页pc下载');
        };
    }
  
    function checkBrowserVer() {
        var v = getBrowserInfo();
        //alert(v);
        var t = v.split(' ');
        var x = t[1].split('.')[0] - 0;

        if (t[0] === 'Chrome' && x <= 31) {
            body[className] = 'ie';
        }

        function getBrowserInfo() {
            var ua = NAV.userAgent,
                    N = NAV.appName, tem,
                    M = ua.match(/(opera|chrome|safari|firefox|msie|trident)\/?\s*([\d\.]+)/i) || [];
            M = M[2] ? [M[1], M[2]] : [N, NAV.appVersion, '-?'];
            if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null)
                M[2] = tem[1];
            return M.join(' ');
        }
    }
    function clearActiving(time, callback) {
        var t = time ? time : 50;
        setTimeout(function () {
            Activing = 0;
            $EF(callback);
        }, t);
    }
    function Cnzz(category, action) {
        !action && (action = '点击');
        try {
            _czc.push(["_trackEvent", category, action, '输入法-pc-首页']);
        } catch (e) {
            //console.log(e);
        }
    }
		
    initialize();
})();
