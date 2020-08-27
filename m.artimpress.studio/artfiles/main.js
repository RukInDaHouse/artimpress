function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
var CubicBezier = function () {
    function t(t, e, i, n) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 1), void 0 === n && (n = 1), this.p1x = t, this.p1y = e, this.p2x = i, this.p2y = n, this.cx = 3 * this.p1x, this.cy = 3 * this.p1y, this.bx = 3 * (this.p2x - this.p1x) - this.cx, this.by = 3 * (this.p2y - this.p1y) - this.cy, this.ax = 1 - this.cx - this.bx, this.ay = 1 - this.cy - this.by, this.ease = this.ease.bind(this)
    }
    return t.create = function (e, i, n, o, s) {
        void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === o && (o = 1), void 0 === s && (s = 1);
        var r = new t(i, n, o, s);
        return "string" == typeof e && (t.easings[e] = r), r.ease
    }, t.config = function (e, i, n, o) {
        return void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 1), void 0 === o && (o = 1), new t(e, i, n, o).ease
    }, t.get = function (e) {
        return t.easings[e].ease
    }, t.prototype.getEpsilon = function (t) {
        return void 0 === t && (t = 400), 1 / (200 * t)
    }, t.prototype.ease = function (t, e, i, n) {
        return this.solve(t, this.getEpsilon(n))
    }, t.prototype.solve = function (t, e) {
        return this.sampleCurveY(this.solveCurveX(t, e))
    }, t.prototype.sampleCurveX = function (t) {
        return ((this.ax * t + this.bx) * t + this.cx) * t
    }, t.prototype.sampleCurveY = function (t) {
        return ((this.ay * t + this.by) * t + this.cy) * t
    }, t.prototype.sampleDerivX = function (t) {
        return (3 * this.ax * t + 2 * this.bx) * t + this.cx
    }, t.prototype.solveCurveX = function (t, e) {
        for (var i, n, o, s, r, a = 0, o = t; a < 8; a++) {
            if (s = this.sampleCurveX(o) - t, Math.abs(s) < e) return o;
            if (r = this.sampleDerivX(o), Math.abs(r) < e) break;
            o -= s / r
        }
        if (i = 0, n = 1, o = t, o < i) return i;
        if (o > n) return n;
        for (; i < n;) {
            if (s = this.sampleCurveX(o), Math.abs(s - t) < e) return o;
            t > s ? i = o : n = o, o = .5 * (n - i) + i
        }
        return o
    }, t.easings = {}, t
}();
! function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    function e() {
        var e, i, n = {
            height: c.innerHeight,
            width: c.innerWidth
        };
        return n.height || (e = l.compatMode, (e || !t.support.boxModel) && (i = "CSS1Compat" === e ? h : l.body, n = {
            height: i.clientHeight,
            width: i.clientWidth
        })), n
    }

    function i() {
        return {
            top: c.pageYOffset || h.scrollTop || l.body.scrollTop,
            left: c.pageXOffset || h.scrollLeft || l.body.scrollLeft
        }
    }

    function n() {
        if (a.length) {
            var n = 0,
                r = t.map(a, function (t) {
                    var e = t.data.selector,
                        i = t.$element;
                    return e ? i.find(e) : i
                });
            for (o = o || e(), s = s || i(); n < a.length; n++)
                if (t.contains(h, r[n][0])) {
                    var l = t(r[n]),
                        c = {
                            height: l[0].offsetHeight,
                            width: l[0].offsetWidth
                        },
                        d = l.offset(),
                        u = l.data("inview");
                    if (!s || !o) return;
                    d.top + c.height > s.top && d.top < s.top + o.height && d.left + c.width > s.left && d.left < s.left + o.width ? u || l.data("inview", !0).trigger("inview", [!0]) : u && l.data("inview", !1).trigger("inview", [!1])
                }
        }
    }
    var o, s, r, a = [],
        l = document,
        c = window,
        h = l.documentElement;
    t.event.special.inview = {
        add: function (e) {
            a.push({
                data: e,
                $element: t(this),
                element: this
            }), !r && a.length && (r = setInterval(n, 250))
        },
        remove: function (t) {
            for (var e = 0; e < a.length; e++) {
                var i = a[e];
                if (i.element === this && i.data.guid === t.guid) {
                    a.splice(e, 1);
                    break
                }
            }
            a.length || (clearInterval(r), r = null)
        }
    }, t(c).on("scroll resize scrollstop", function () {
        o = s = null
    }), !h.addEventListener && h.attachEvent && h.attachEvent("onfocusin", function () {
        s = null
    })
}),
function (t) {
    t.fn.lazyInterchange = function () {
        var e = this.each(function () {
            t(this).attr("data-lazy-interchange") && (t(this).attr("data-interchange", t(this).attr("data-lazy-interchange")), t(this).removeAttr("data-lazy-interchange"), Foundation.reflow(t(this), "interchange"))
        });
        return e
    }
}(jQuery), window.Modernizr = function (t, e, i) {
        function n(t) {
            y.cssText = t
        }

        function o(t, e) {
            return n(T.join(t + ";") + (e || ""))
        }

        function s(t, e) {
            return typeof t === e
        }

        function r(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function a(t, e) {
            for (var n in t) {
                var o = t[n];
                if (!r(o, "-") && y[o] !== i) return "pfx" != e || o
            }
            return !1
        }

        function l(t, e, n) {
            for (var o in t) {
                var r = e[t[o]];
                if (r !== i) return n === !1 ? t[o] : s(r, "function") ? r.bind(n || e) : r
            }
            return !1
        }

        function c(t, e, i) {
            var n = t.charAt(0).toUpperCase() + t.slice(1),
                o = (t + " " + k.join(n + " ") + n).split(" ");
            return s(e, "string") || s(e, "undefined") ? a(o, e) : (o = (t + " " + C.join(n + " ") + n).split(" "), l(o, e, i))
        }

        function h() {
            f.input = function (i) {
                for (var n = 0, o = i.length; n < o; n++) E[i[n]] = !!(i[n] in w);
                return E.list && (E.list = !(!e.createElement("datalist") || !t.HTMLDataListElement)), E
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), f.inputtypes = function (t) {
                for (var n, o, s, r = 0, a = t.length; r < a; r++) w.setAttribute("type", o = t[r]), n = "text" !== w.type, n && (w.value = b, w.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && w.style.WebkitAppearance !== i ? (g.appendChild(w), s = e.defaultView, n = s.getComputedStyle && "textfield" !== s.getComputedStyle(w, null).WebkitAppearance && 0 !== w.offsetHeight, g.removeChild(w)) : /^(search|tel)$/.test(o) || (n = /^(url|email)$/.test(o) ? w.checkValidity && w.checkValidity() === !1 : w.value != b)), O[t[r]] = !!n;
                return O
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var d, u, p = "2.8.2",
            f = {},
            m = !0,
            g = e.documentElement,
            v = "modernizr",
            _ = e.createElement(v),
            y = _.style,
            w = e.createElement("input"),
            b = ":)",
            x = {}.toString,
            T = " -webkit- -moz- -o- -ms- ".split(" "),
            S = "Webkit Moz O ms",
            k = S.split(" "),
            C = S.toLowerCase().split(" "),
            A = {
                svg: "http://www.w3.org/2000/svg"
            },
            P = {},
            O = {},
            E = {},
            M = [],
            I = M.slice,
            R = function (t, i, n, o) {
                var s, r, a, l, c = e.createElement("div"),
                    h = e.body,
                    d = h || e.createElement("body");
                if (parseInt(n, 10))
                    for (; n--;) a = e.createElement("div"), a.id = o ? o[n] : v + (n + 1), c.appendChild(a);
                return s = ["&#173;", '<style id="s', v, '">', t, "</style>"].join(""), c.id = v, (h ? c : d).innerHTML += s, d.appendChild(c), h || (d.style.background = "", d.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(d)), r = i(c, t), h ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d), g.style.overflow = l), !!r
            },
            z = function (e) {
                var i = t.matchMedia || t.msMatchMedia;
                if (i) return i(e) && i(e).matches || !1;
                var n;
                return R("@media " + e + " { #" + v + " { position: absolute; } }", function (e) {
                    n = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
                }), n
            },
            L = function () {
                function t(t, o) {
                    o = o || e.createElement(n[t] || "div"), t = "on" + t;
                    var r = t in o;
                    return r || (o.setAttribute || (o = e.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(t, ""), r = s(o[t], "function"), s(o[t], "undefined") || (o[t] = i), o.removeAttribute(t))), o = null, r
                }
                var n = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return t
            }(),
            D = {}.hasOwnProperty;
        u = s(D, "undefined") || s(D.call, "undefined") ? function (t, e) {
            return e in t && s(t.constructor.prototype[e], "undefined")
        } : function (t, e) {
            return D.call(t, e)
        }, Function.prototype.bind || (Function.prototype.bind = function (t) {
            var e = this;
            if ("function" != typeof e) throw new TypeError;
            var i = I.call(arguments, 1),
                n = function () {
                    if (this instanceof n) {
                        var o = function () {};
                        o.prototype = e.prototype;
                        var s = new o,
                            r = e.apply(s, i.concat(I.call(arguments)));
                        return Object(r) === r ? r : s
                    }
                    return e.apply(t, i.concat(I.call(arguments)))
                };
            return n
        }), P.flexbox = function () {
            return c("flexWrap")
        }, P.flexboxlegacy = function () {
            return c("boxDirection")
        }, P.canvas = function () {
            var t = e.createElement("canvas");
            return !(!t.getContext || !t.getContext("2d"))
        }, P.canvastext = function () {
            return !(!f.canvas || !s(e.createElement("canvas").getContext("2d").fillText, "function"))
        }, P.webgl = function () {
            return !!t.WebGLRenderingContext
        }, P.touch = function () {
            var i;
            return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? i = !0 : R(["@media (", T.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (t) {
                i = 9 === t.offsetTop
            }), i
        }, P.geolocation = function () {
            return "geolocation" in navigator
        }, P.postmessage = function () {
            return !!t.postMessage
        }, P.websqldatabase = function () {
            return !!t.openDatabase
        }, P.indexedDB = function () {
            return !!c("indexedDB", t)
        }, P.hashchange = function () {
            return L("hashchange", t) && (e.documentMode === i || e.documentMode > 7)
        }, P.history = function () {
            return !(!t.history || !history.pushState)
        }, P.draganddrop = function () {
            var t = e.createElement("div");
            return "draggable" in t || "ondragstart" in t && "ondrop" in t
        }, P.websockets = function () {
            return "WebSocket" in t || "MozWebSocket" in t
        }, P.rgba = function () {
            return n("background-color:rgba(150,255,150,.5)"), r(y.backgroundColor, "rgba")
        }, P.hsla = function () {
            return n("background-color:hsla(120,40%,100%,.5)"), r(y.backgroundColor, "rgba") || r(y.backgroundColor, "hsla")
        }, P.multiplebgs = function () {
            return n("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(y.background)
        }, P.backgroundsize = function () {
            return c("backgroundSize")
        }, P.borderimage = function () {
            return c("borderImage")
        }, P.borderradius = function () {
            return c("borderRadius")
        }, P.boxshadow = function () {
            return c("boxShadow")
        }, P.textshadow = function () {
            return "" === e.createElement("div").style.textShadow
        }, P.opacity = function () {
            return o("opacity:.55"), /^0.55$/.test(y.opacity)
        }, P.cssanimations = function () {
            return c("animationName")
        }, P.csscolumns = function () {
            return c("columnCount")
        }, P.cssgradients = function () {
            var t = "background-image:",
                e = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                i = "linear-gradient(left top,#9f9, white);";
            return n((t + "-webkit- ".split(" ").join(e + t) + T.join(i + t)).slice(0, -t.length)), r(y.backgroundImage, "gradient")
        }, P.cssreflections = function () {
            return c("boxReflect")
        }, P.csstransforms = function () {
            return !!c("transform")
        }, P.csstransforms3d = function () {
            var t = !!c("perspective");
            return t && "webkitPerspective" in g.style && R("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (e, i) {
                t = 9 === e.offsetLeft && 3 === e.offsetHeight
            }), t
        }, P.csstransitions = function () {
            return c("transition")
        }, P.fontface = function () {
            var t;
            return R('@font-face {font-family:"font";src:url("https://")}', function (i, n) {
                var o = e.getElementById("smodernizr"),
                    s = o.sheet || o.styleSheet,
                    r = s ? s.cssRules && s.cssRules[0] ? s.cssRules[0].cssText : s.cssText || "" : "";
                t = /src/i.test(r) && 0 === r.indexOf(n.split(" ")[0])
            }), t
        }, P.generatedcontent = function () {
            var t;
            return R(["#", v, "{font:0/0 a}#", v, ':after{content:"', b, '";visibility:hidden;font:3px/1 a}'].join(""), function (e) {
                t = e.offsetHeight >= 3
            }), t
        }, P.video = function () {
            var t = e.createElement("video"),
                i = !1;
            try {
                (i = !!t.canPlayType) && (i = new Boolean(i), i.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), i.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), i.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (n) {}
            return i
        }, P.audio = function () {
            var t = e.createElement("audio"),
                i = !1;
            try {
                (i = !!t.canPlayType) && (i = new Boolean(i), i.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), i.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), i.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), i.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (n) {}
            return i
        }, P.localstorage = function () {
            try {
                return localStorage.setItem(v, v), localStorage.removeItem(v), !0
            } catch (t) {
                return !1
            }
        }, P.sessionstorage = function () {
            try {
                return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
            } catch (t) {
                return !1
            }
        }, P.webworkers = function () {
            return !!t.Worker
        }, P.applicationcache = function () {
            return !!t.applicationCache
        }, P.svg = function () {
            return !!e.createElementNS && !!e.createElementNS(A.svg, "svg").createSVGRect
        }, P.inlinesvg = function () {
            var t = e.createElement("div");
            return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == A.svg
        }, P.smil = function () {
            return !!e.createElementNS && /SVGAnimate/.test(x.call(e.createElementNS(A.svg, "animate")))
        }, P.svgclippaths = function () {
            return !!e.createElementNS && /SVGClipPath/.test(x.call(e.createElementNS(A.svg, "clipPath")))
        };
        for (var F in P) u(P, F) && (d = F.toLowerCase(), f[d] = P[F](), M.push((f[d] ? "" : "no-") + d));
        return f.input || h(), f.addTest = function (t, e) {
                if ("object" == typeof t)
                    for (var n in t) u(t, n) && f.addTest(n, t[n]);
                else {
                    if (t = t.toLowerCase(), f[t] !== i) return f;
                    e = "function" == typeof e ? e() : e, "undefined" != typeof m && m && (g.className += " " + (e ? "" : "no-") + t), f[t] = e
                }
                return f
            }, n(""), _ = w = null,
            function (t, e) {
                function i(t, e) {
                    var i = t.createElement("p"),
                        n = t.getElementsByTagName("head")[0] || t.documentElement;
                    return i.innerHTML = "x<style>" + e + "</style>", n.insertBefore(i.lastChild, n.firstChild)
                }

                function n() {
                    var t = _.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function o(t) {
                    var e = v[t[m]];
                    return e || (e = {}, g++, t[m] = g, v[g] = e), e
                }

                function s(t, i, n) {
                    if (i || (i = e), h) return i.createElement(t);
                    n || (n = o(i));
                    var s;
                    return s = n.cache[t] ? n.cache[t].cloneNode() : f.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t), !s.canHaveChildren || p.test(t) || s.tagUrn ? s : n.frag.appendChild(s)
                }

                function r(t, i) {
                    if (t || (t = e), h) return t.createDocumentFragment();
                    i = i || o(t);
                    for (var s = i.frag.cloneNode(), r = 0, a = n(), l = a.length; r < l; r++) s.createElement(a[r]);
                    return s
                }

                function a(t, e) {
                    e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function (i) {
                        return _.shivMethods ? s(i, t, e) : e.createElem(i)
                    }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g, function (t) {
                        return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                    }) + ");return n}")(_, e.frag)
                }

                function l(t) {
                    t || (t = e);
                    var n = o(t);
                    return !_.shivCSS || c || n.hasCSS || (n.hasCSS = !!i(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), h || a(t, n), t
                }
                var c, h, d = "3.7.0",
                    u = t.html5 || {},
                    p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    m = "_html5shiv",
                    g = 0,
                    v = {};
                ! function () {
                    try {
                        var t = e.createElement("a");
                        t.innerHTML = "<xyz></xyz>", c = "hidden" in t, h = 1 == t.childNodes.length || function () {
                            e.createElement("a");
                            var t = e.createDocumentFragment();
                            return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                        }()
                    } catch (i) {
                        c = !0, h = !0
                    }
                }();
                var _ = {
                    elements: u.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: d,
                    shivCSS: u.shivCSS !== !1,
                    supportsUnknownElements: h,
                    shivMethods: u.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: s,
                    createDocumentFragment: r
                };
                t.html5 = _, l(e)
            }(this, e), f._version = p, f._prefixes = T, f._domPrefixes = C, f._cssomPrefixes = k, f.mq = z, f.hasEvent = L, f.testProp = function (t) {
                return a([t])
            }, f.testAllProps = c, f.testStyles = R, f.prefixed = function (t, e, i) {
                return e ? c(t, e, i) : c(t, "pfx")
            }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + M.join(" ") : ""), f
    }(this, this.document),
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function (t, e) {
        "use strict";
        t.infinitescroll = function (e, i, n) {
            this.element = t(n), this._create(e, i) || (this.failed = !0)
        }, t.infinitescroll.defaults = {
            loading: {
                finished: e,
                finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
                img: "data:image/gif;base64,R0lGODlh3AATAPQeAPDy+MnQ6LW/4N3h8MzT6rjC4sTM5r/I5NHX7N7j8c7U6tvg8OLl8uXo9Ojr9b3G5MfP6Ovu9tPZ7PT1+vX2+tbb7vf4+8/W69jd7rC73vn5/O/x+K243ai02////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgD/ACwAAAAA3AATAAAF/6AnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEj0BAScpHLJbDqf0Kh0Sq1ar9isdioItAKGw+MAKYMFhbF63CW438f0mg1R2O8EuXj/aOPtaHx7fn96goR4hmuId4qDdX95c4+RBIGCB4yAjpmQhZN0YGYGXitdZBIVGAsLoq4BBKQDswm1CQRkcG6ytrYKubq8vbfAcMK9v7q7EMO1ycrHvsW6zcTKsczNz8HZw9vG3cjTsMIYqQkCLBwHCgsMDQ4RDAYIqfYSFxDxEfz88/X38Onr16+Bp4ADCco7eC8hQYMAEe57yNCew4IVBU7EGNDiRn8Z831cGLHhSIgdFf9chIeBg7oA7gjaWUWTVQAGE3LqBDCTlc9WOHfm7PkTqNCh54rePDqB6M+lR536hCpUqs2gVZM+xbrTqtGoWqdy1emValeXKzggYBBB5y1acFNZmEvXAoN2cGfJrTv3bl69Ffj2xZt3L1+/fw3XRVw4sGDGcR0fJhxZsF3KtBTThZxZ8mLMgC3fRatCbYMNFCzwLEqLgE4NsDWs/tvqdezZf13Hvk2A9Szdu2X3pg18N+68xXn7rh1c+PLksI/Dhe6cuO3ow3NfV92bdArTqC2Ebd3A8vjf5QWfH6Bg7Nz17c2fj69+fnq+8N2Lty+fuP78/eV2X13neIcCeBRwxorbZrA1ANoCDGrgoG8RTshahQ9iSKEEzUmYIYfNWViUhheCGJyIP5E4oom7WWjgCeBFAJNv1DVV01MAdJhhjdkplWNzO/5oXI846njjVEIqR2OS2B1pE5PVscajkxhMycqLJghQSwT40PgfAl4GqNSXYdZXJn5gSkmmmmJu1aZYb14V51do+pTOCmA40AqVCIhG5IJ9PvYnhIFOxmdqhpaI6GeHCtpooisuutmg+Eg62KOMKuqoTaXgicQWoIYq6qiklmoqFV0UoeqqrLbq6quwxirrrLTWauutJ4QAACH5BAUKABwALAcABADOAAsAAAX/IPd0D2dyRCoUp/k8gpHOKtseR9yiSmGbuBykler9XLAhkbDavXTL5k2oqFqNOxzUZPU5YYZd1XsD72rZpBjbeh52mSNnMSC8lwblKZGwi+0QfIJ8CncnCoCDgoVnBHmKfByGJimPkIwtiAeBkH6ZHJaKmCeVnKKTHIihg5KNq4uoqmEtcRUtEREMBggtEr4QDrjCuRC8h7/BwxENeicSF8DKy82pyNLMOxzWygzFmdvD2L3P0dze4+Xh1Arkyepi7dfFvvTtLQkZBC0T/FX3CRgCMOBHsJ+EHYQY7OinAGECgQsB+Lu3AOK+CewcWjwxQeJBihtNGHSoQOE+iQ3//4XkwBBhRZMcUS6YSXOAwIL8PGqEaSJCiYt9SNoCmnJPAgUVLChdaoFBURN8MAzl2PQphwQLfDFd6lTowglHve6rKpbjhK7/pG5VinZP1qkiz1rl4+tr2LRwWU64cFEihwEtZgbgR1UiHaMVvxpOSwBA37kzGz9e8G+B5MIEKLutOGEsAH2ATQwYfTmuX8aETWdGPZmiZcccNSzeTCA1Sw0bdiitC7LBWgu8jQr8HRzqgpK6gX88QbrB14z/kF+ELpwB8eVQj/JkqdylAudji/+ts3039vEEfK8Vz2dlvxZKG0CmbkKDBvllRd6fCzDvBLKBDSCeffhRJEFebFk1k/Mv9jVIoIJZSeBggwUaNeB+Qk34IE0cXlihcfRxkOAJFFhwGmKlmWDiakZhUJtnLBpnWWcnKaAZcxI0piFGGLBm1mc90kajSCveeBVWKeYEoU2wqeaQi0PetoE+rr14EpVC7oAbAUHqhYExbn2XHHsVqbcVew9tx8+XJKk5AZsqqdlddGpqAKdbAYBn1pcczmSTdWvdmZ17c1b3FZ99vnTdCRFM8OEcAhLwm1NdXnWcBBSMRWmfkWZqVlsmLIiAp/o1gGV2vpS4lalGYsUOqXrddcKCmK61aZ8SjEpUpVFVoCpTj4r661Km7kBHjrDyc1RAIQAAIfkEBQoAGwAsBwAEAM4ACwAABf/gtmUCd4goQQgFKj6PYKi0yrrbc8i4ohQt12EHcal+MNSQiCP8gigdz7iCioaCIvUmZLp8QBzW0EN2vSlCuDtFKaq4RyHzQLEKZNdiQDhRDVooCwkbfm59EAmKi4SGIm+AjIsKjhsqB4mSjT2IOIOUnICeCaB/mZKFNTSRmqVpmJqklSqskq6PfYYCDwYHDC4REQwGCBLGxxIQDsHMwhAIX8bKzcENgSLGF9PU1j3Sy9zX2NrgzQziChLk1BHWxcjf7N046tvN82715czn9Pryz6Ilc4ACj4EBOCZM8KEnAYYADBRKnACAYUMFv1wotIhCEcaJCisqwJFgAUSQGyX/kCSVUUTIdKMwJlyo0oXHlhskwrTJciZHEXsgaqS4s6PJiCAr1uzYU8kBBSgnWFqpoMJMUjGtDmUwkmfVmVypakWhEKvXsS4nhLW5wNjVroJIoc05wSzTr0PtiigpYe4EC2vj4iWrFu5euWIMRBhacaVJhYQBEFjA9jHjyQ0xEABwGceGAZYjY0YBOrRLCxUp29QM+bRkx5s7ZyYgVbTqwwti2ybJ+vLtDYpycyZbYOlptxdx0kV+V7lC5iJAyyRrwYKxAdiz82ng0/jnAdMJFz0cPi104Ec1Vj9/M6F173vKL/feXv156dw11tlqeMMnv4V5Ap53GmjQQH97nFfg+IFiucfgRX5Z8KAgbUlQ4IULIlghhhdOSB6AgX0IVn8eReghen3NRIBsRgnH4l4LuEidZBjwRpt6NM5WGwoW0KSjCwX6yJSMab2GwwAPDXfaBCtWpluRTQqC5JM5oUZAjUNS+VeOLWpJEQ7VYQANW0INJSZVDFSnZphjSikfmzE5N4EEbQI1QJmnWXCmHulRp2edwDXF43txukenJwvI9xyg9Q26Z3MzGUcBYFEChZh6DVTq34AU8Iflh51Sd+CnKFYQ6mmZkhqfBKfSxZWqA9DZanWjxmhrWwi0qtCrt/43K6WqVjjpmhIqgEGvculaGKklKstAACEAACH5BAUKABwALAcABADOAAsAAAX/ICdyQmaMYyAUqPgIBiHPxNpy79kqRXH8wAPsRmDdXpAWgWdEIYm2llCHqjVHU+jjJkwqBTecwItShMXkEfNWSh8e1NGAcLgpDGlRgk7EJ/6Ae3VKfoF/fDuFhohVeDeCfXkcCQqDVQcQhn+VNDOYmpSWaoqBlUSfmowjEA+iEAEGDRGztAwGCDcXEA60tXEiCrq8vREMEBLIyRLCxMWSHMzExnbRvQ2Sy7vN0zvVtNfU2tLY3rPgLdnDvca4VQS/Cpk3ABwSLQkYAQwT/P309vcI7OvXr94jBQMJ/nskkGA/BQBRLNDncAIAiDcG6LsxAWOLiQzmeURBKWSLCQbv/1F0eDGinJUKR47YY1IEgQASKk7Yc7ACRwZm7mHweRJoz59BJUogisKCUaFMR0x4SlJBVBFTk8pZivTR0K73rN5wqlXEAq5Fy3IYgHbEzQ0nLy4QSoCjXLoom96VOJEeCosK5n4kkFfqXjl94wa+l1gvAcGICbewAOAxY8l/Ky/QhAGz4cUkGxu2HNozhwMGBnCUqUdBg9UuW9eUynqSwLHIBujePef1ZGQZXcM+OFuEBeBhi3OYgLyqcuaxbT9vLkf4SeqyWxSQpKGB2gQpm1KdWbu72rPRzR9Ne2Nu9Kzr/1Jqj0yD/fvqP4aXOt5sW/5qsXXVcv1Nsp8IBUAmgswGF3llGgeU1YVXXKTN1FlhWFXW3gIE+DVChApysACHHo7Q4A35lLichh+ROBmLKAzgYmYEYDAhCgxKGOOMn4WR4kkDaoBBOxJtdNKQxFmg5JIWIBnQc07GaORfUY4AEkdV6jHlCEISSZ5yTXpp1pbGZbkWmcuZmQCaE6iJ0FhjMaDjTMsgZaNEHFRAQVp3bqXnZED1qYcECOz5V6BhSWCoVJQIKuKQi2KFKEkEFAqoAo7uYSmO3jk61wUUMKmknJ4SGimBmAa0qVQBhAAAIfkEBQoAGwAsBwAEAM4ACwAABf/gJm5FmRlEqhJC+bywgK5pO4rHI0D3pii22+Mg6/0Ej96weCMAk7cDkXf7lZTTnrMl7eaYoy10JN0ZFdco0XAuvKI6qkgVFJXYNwjkIBcNBgR8TQoGfRsJCRuCYYQQiI+ICosiCoGOkIiKfSl8mJkHZ4U9kZMbKaI3pKGXmJKrngmug4WwkhA0lrCBWgYFCCMQFwoQDRHGxwwGCBLMzRLEx8iGzMMO0cYNeCMKzBDW19lnF9DXDIY/48Xg093f0Q3s1dcR8OLe8+Y91OTv5wrj7o7B+7VNQqABIoRVCMBggsOHE36kSoCBIcSH3EbFangxogJYFi8CkJhqQciLJEf/LDDJEeJIBT0GsOwYUYJGBS0fjpQAMidGmyVP6sx4Y6VQhzs9VUwkwqaCCh0tmKoFtSMDmBOf9phg4SrVrROuasRQAaxXpVUhdsU6IsECZlvX3kwLUWzRt0BHOLTbNlbZG3vZinArge5Dvn7wbqtQkSYAAgtKmnSsYKVKo2AfW048uaPmG386i4Q8EQMBAIAnfB7xBxBqvapJ9zX9WgRS2YMpnvYMGdPK3aMjt/3dUcNI4blpj7iwkMFWDXDvSmgAlijrt9RTR78+PS6z1uAJZIe93Q8g5zcsWCi/4Y+C8bah5zUv3vv89uft30QP23punGCx5954oBBwnwYaNCDY/wYrsYeggnM9B2Fpf8GG2CEUVWhbWAtGouEGDy7Y4IEJVrbSiXghqGKIo7z1IVcXIkKWWR361QOLWWnIhwERpLaaCCee5iMBGJQmJGyPFTnbkfHVZGRtIGrg5HALEJAZbu39BuUEUmq1JJQIPtZilY5hGeSWsSk52G9XqsmgljdIcABytq13HyIM6RcUA+r1qZ4EBF3WHWB29tBgAzRhEGhig8KmqKFv8SeCeo+mgsF7YFXa1qWSbkDpom/mqR1PmHCqJ3fwNRVXjC7S6CZhFVCQ2lWvZiirhQq42SACt25IK2hv8TprriUV1usGgeka7LFcNmCldMLi6qZMgFLgpw16Cipb7bC1knXsBiEAACH5BAUKABsALAcABADOAAsAAAX/4FZsJPkUmUGsLCEUTywXglFuSg7fW1xAvNWLF6sFFcPb42C8EZCj24EJdCp2yoegWsolS0Uu6fmamg8n8YYcLU2bXSiRaXMGvqV6/KAeJAh8VgZqCX+BexCFioWAYgqNi4qAR4ORhRuHY408jAeUhAmYYiuVlpiflqGZa5CWkzc5fKmbbhIpsAoQDRG8vQwQCBLCwxK6vb5qwhfGxxENahvCEA7NzskSy7vNzzzK09W/PNHF1NvX2dXcN8K55cfh69Luveol3vO8zwi4Yhj+AQwmCBw4IYclDAAJDlQggVOChAoLKkgFkSCAHDwWLKhIEOONARsDKryogFPIiAUb/95gJNIiw4wnI778GFPhzBKFOAq8qLJEhQpiNArjMcHCmlTCUDIouTKBhApELSxFWiGiVKY4E2CAekPgUphDu0742nRrVLJZnyrFSqKQ2ohoSYAMW6IoDpNJ4bLdILTnAj8KUF7UeENjAKuDyxIgOuGiOI0EBBMgLNew5AUrDTMGsFixwBIaNCQuAXJB57qNJ2OWm2Aj4skwCQCIyNkhhtMkdsIuodE0AN4LJDRgfLPtn5YDLdBlraAByuUbBgxQwICxMOnYpVOPej074OFdlfc0TqC62OIbcppHjV4o+LrieWhfT8JC/I/T6W8oCl29vQ0XjLdBaA3s1RcPBO7lFvpX8BVoG4O5jTXRQRDuJ6FDTzEWF1/BCZhgbyAKE9qICYLloQYOFtahVRsWYlZ4KQJHlwHS/IYaZ6sZd9tmu5HQm2xi1UaTbzxYwJk/wBF5g5EEYOBZeEfGZmNdFyFZmZIR4jikbLThlh5kUUVJGmRT7sekkziRWUIACABk3T4qCsedgO4xhgGcY7q5pHJ4klBBTQRJ0CeHcoYHHUh6wgfdn9uJdSdMiebGJ0zUPTcoS286FCkrZxnYoYYKWLkBowhQoBeaOlZAgVhLidrXqg2GiqpQpZ4apwSwRtjqrB3muoF9BboaXKmshlqWqsWiGt2wphJkQbAU5hoCACH5BAUKABsALAcABADOAAsAAAX/oGFw2WZuT5oZROsSQnGaKjRvilI893MItlNOJ5v5gDcFrHhKIWcEYu/xFEqNv6B1N62aclysF7fsZYe5aOx2yL5aAUGSaT1oTYMBwQ5VGCAJgYIJCnx1gIOBhXdwiIl7d0p2iYGQUAQBjoOFSQR/lIQHnZ+Ue6OagqYzSqSJi5eTpTxGcjcSChANEbu8DBAIEsHBChe5vL13G7fFuscRDcnKuM3H0La3EA7Oz8kKEsXazr7Cw9/Gztar5uHHvte47MjktznZ2w0G1+D3BgirAqJmJMAQgMGEgwgn5Ei0gKDBhBMALGRYEOJBb5QcWlQo4cbAihZz3GgIMqFEBSM1/4ZEOWPAgpIIJXYU+PIhRG8ja1qU6VHlzZknJNQ6UanCjQkWCIGSUGEjAwVLjc44+DTqUQtPPS5gejUrTa5TJ3g9sWCr1BNUWZI161StiQUDmLYdGfesibQ3XMq1OPYthrwuA2yU2LBs2cBHIypYQPPlYAKFD5cVvNPtW8eVGbdcQADATsiNO4cFAPkvHpedPzc8kUcPgNGgZ5RNDZG05reoE9s2vSEP79MEGiQGy1qP8LA4ZcdtsJE48ONoLTBtTV0B9LsTnPceoIDBDQvS7W7vfjVY3q3eZ4A339J4eaAmKqU/sV58HvJh2RcnIBsDUw0ABqhBA5aV5V9XUFGiHfVeAiWwoFgJJrIXRH1tEMiDFV4oHoAEGlaWhgIGSGBO2nFomYY3mKjVglidaNYJGJDkWW2xxTfbjCbVaOGNqoX2GloR8ZeTaECS9pthRGJH2g0b3Agbk6hNANtteHD2GJUucfajCQBy5OOTQ25ZgUPvaVVQmbKh9510/qQpwXx3SQdfk8tZJOd5b6JJFplT3ZnmmX3qd5l1eg5q00HrtUkUn0AKaiGjClSAgKLYZcgWXwocGRcCFGCKwSB6ceqphwmYRUFYT/1WKlOdUpipmxW0mlCqHjYkAaeoZlqrqZ4qd+upQKaapn/AmgAegZ8KUtYtFAQQAgAh+QQFCgAbACwHAAQAzgALAAAF/+C2PUcmiCiZGUTrEkKBis8jQEquKwU5HyXIbEPgyX7BYa5wTNmEMwWsSXsqFbEh8DYs9mrgGjdK6GkPY5GOeU6ryz7UFopSQEzygOGhJBjoIgMDBAcBM0V/CYqLCQqFOwobiYyKjn2TlI6GKC2YjJZknouaZAcQlJUHl6eooJwKooobqoewrJSEmyKdt59NhRKFMxLEEA4RyMkMEAjDEhfGycqAG8TQx9IRDRDE3d3R2ctD1RLg0ttKEnbY5wZD3+zJ6M7X2RHi9Oby7u/r9g38UFjTh2xZJBEBMDAboogAgwkQI07IMUORwocSJwCgWDFBAIwZOaJIsOBjRogKJP8wTODw5ESVHVtm3AhzpEeQElOuNDlTZ0ycEUWKWFASqEahGwYUPbnxoAgEdlYSqDBkgoUNClAlIHbSAoOsqCRQnQHxq1axVb06FWFxLIqyaze0Tft1JVqyE+pWXMD1pF6bYl3+HTqAWNW8cRUFzmih0ZAAB2oGKukSAAGGRHWJgLiR6AylBLpuHKKUMlMCngMpDSAa9QIUggZVVvDaJobLeC3XZpvgNgCmtPcuwP3WgmXSq4do0DC6o2/guzcseECtUoO0hmcsGKDgOt7ssBd07wqesAIGZC1YIBa7PQHvb1+SFo+++HrJSQfB33xfav3i5eX3Hnb4CTJgegEq8tH/YQEOcIJzbm2G2EoYRLgBXFpVmFYDcREV4HIcnmUhiGBRouEMJGJGzHIspqgdXxK0yCKHRNXoIX4uorCdTyjkyNtdPWrA4Up82EbAbzMRxxZRR54WXVLDIRmRcag5d2R6ugl3ZXzNhTecchpMhIGVAKAYpgJjjsSklBEd99maZoo535ZvdamjBEpusJyctg3h4X8XqodBMx0tiNeg/oGJaKGABpogS40KSqiaEgBqlQWLUtqoVQnytekEjzo0hHqhRorppOZt2p923M2AAV+oBtpAnnPNoB6HaU6mAAIU+IXmi3j2mtFXuUoHKwXpzVrsjcgGOauKEjQrwq157hitGq2NoWmjh7z6Wmxb0m5w66+2VRAuXN/yFUAIACH5BAUKABsALAcABADOAAsAAAX/4CZuRiaM45MZqBgIRbs9AqTcuFLE7VHLOh7KB5ERdjJaEaU4ClO/lgKWjKKcMiJQ8KgumcieVdQMD8cbBeuAkkC6LYLhOxoQ2PF5Ys9PKPBMen17f0CCg4VSh32JV4t8jSNqEIOEgJKPlkYBlJWRInKdiJdkmQlvKAsLBxdABA4RsbIMBggtEhcQsLKxDBC2TAS6vLENdJLDxMZAubu8vjIbzcQRtMzJz79S08oQEt/guNiyy7fcvMbh4OezdAvGrakLAQwyABsELQkY9BP+//ckyPDD4J9BfAMh1GsBoImMeQUN+lMgUJ9CiRMa5msxoB9Gh/o8GmxYMZXIgxtR/yQ46S/gQAURR0pDwYDfywoyLPip5AdnCwsMFPBU4BPFhKBDi444quCmDKZOfwZ9KEGpCKgcN1jdALSpPqIYsabS+nSqvqplvYqQYAeDPgwKwjaMtiDl0oaqUAyo+3TuWwUAMPpVCfee0cEjVBGQq2ABx7oTWmQk4FglZMGN9fGVDMCuiH2AOVOu/PmyxM630gwM0CCn6q8LjVJ8GXvpa5Uwn95OTC/nNxkda1/dLSK475IjCD6dHbK1ZOa4hXP9DXs5chJ00UpVm5xo2qRpoxptwF2E4/IbJpB/SDz9+q9b1aNfQH08+p4a8uvX8B53fLP+ycAfemjsRUBgp1H20K+BghHgVgt1GXZXZpZ5lt4ECjxYR4ScUWiShEtZqBiIInRGWnERNnjiBglw+JyGnxUmGowsyiiZg189lNtPGACjV2+S9UjbU0JWF6SPvEk3QZEqsZYTk3UAaRSUnznJI5LmESCdBVSyaOWUWLK4I5gDUYVeV1T9l+FZClCAUVA09uSmRHBCKAECFEhW51ht6rnmWBXkaR+NjuHpJ40D3DmnQXt2F+ihZxlqVKOfQRACACH5BAUKABwALAcABADOAAsAAAX/ICdyUCkUo/g8mUG8MCGkKgspeC6j6XEIEBpBUeCNfECaglBcOVfJFK7YQwZHQ6JRZBUqTrSuVEuD3nI45pYjFuWKvjjSkCoRaBUMWxkwBGgJCXspQ36Bh4EEB0oKhoiBgyNLjo8Ki4QElIiWfJqHnISNEI+Ql5J9o6SgkqKkgqYihamPkW6oNBgSfiMMDQkGCBLCwxIQDhHIyQwQCGMKxsnKVyPCF9DREQ3MxMPX0cu4wt7J2uHWx9jlKd3o39MiuefYEcvNkuLt5O8c1ePI2tyELXGQwoGDAQf+iEC2xByDCRAjTlAgIUWCBRgCPJQ4AQBFXAs0coT40WLIjRxL/47AcHLkxIomRXL0CHPERZkpa4q4iVKiyp0tR/7kwHMkTUBBJR5dOCEBAVcKKtCAyOHpowXCpk7goABqBZdcvWploACpBKkpIJI1q5OD2rIWE0R1uTZu1LFwbWL9OlKuWb4c6+o9i3dEgw0RCGDUG9KlRw56gDY2qmCByZBaASi+TACA0TucAaTteCcy0ZuOK3N2vJlx58+LRQyY3Xm0ZsgjZg+oPQLi7dUcNXi0LOJw1pgNtB7XG6CBy+U75SYfPTSQAgZTNUDnQHt67wnbZyvwLgKiMN3oCZB3C76tdewpLFgIP2C88rbi4Y+QT3+8S5USMICZXWj1pkEDeUU3lOYGB3alSoEiMIjgX4WlgNF2EibIwQIXauWXSRg2SAOHIU5IIIMoZkhhWiJaiFVbKo6AQEgQXrTAazO1JhkBrBG3Y2Y6EsUhaGn95hprSN0oWpFE7rhkeaQBchGOEWnwEmc0uKWZj0LeuNV3W4Y2lZHFlQCSRjTIl8uZ+kG5HU/3sRlnTG2ytyadytnD3HrmuRcSn+0h1dycexIK1KCjYaCnjCCVqOFFJTZ5GkUUjESWaUIKU2lgCmAKKQIUjHapXRKE+t2og1VgankNYnohqKJ2CmKplso6GKz7WYCgqxeuyoF8u9IQAgA7",
                msg: null,
                msgText: "<em>Loading the next set of posts...</em>",
                selector: null,
                speed: "fast",
                start: e
            },
            state: {
                isDuringAjax: !1,
                isInvalidPage: !1,
                isDestroyed: !1,
                isDone: !1,
                isPaused: !1,
                isBeyondMaxPage: !1,
                currPage: 1
            },
            debug: !1,
            behavior: e,
            binder: t(window),
            nextSelector: "div.navigation a:first",
            navSelector: "div.navigation",
            contentSelector: null,
            extraScrollPx: 150,
            itemSelector: "div.post",
            animate: !1,
            pathParse: e,
            dataType: "html",
            appendCallback: !0,
            bufferPx: 40,
            errorCallback: function () {},
            infid: 0,
            pixelsFromNavToBottom: e,
            path: e,
            prefill: !1,
            maxPage: e
        }, t.infinitescroll.prototype = {
            _binding: function (t) {
                var i = this,
                    n = i.options;
                return n.v = "2.0b2.120520", n.behavior && this["_binding_" + n.behavior] !== e ? void this["_binding_" + n.behavior].call(this) : "bind" !== t && "unbind" !== t ? (this._debug("Binding value  " + t + " not valid"), !1) : ("unbind" === t ? this.options.binder.unbind("smartscroll.infscr." + i.options.infid) : this.options.binder[t]("smartscroll.infscr." + i.options.infid, function () {
                    i.scroll()
                }), void this._debug("Binding", t))
            },
            _create: function (i, n) {
                var o = t.extend(!0, {}, t.infinitescroll.defaults, i);
                this.options = o;
                var s = t(window),
                    r = this;
                if (!r._validate(i)) return !1;
                var a = t(o.nextSelector).attr("href");
                if (!a) return this._debug("Navigation selector not found"), !1;
                o.path = o.path || this._determinepath(a), o.contentSelector = o.contentSelector || this.element, o.loading.selector = o.loading.selector || o.contentSelector, o.loading.msg = o.loading.msg || t('<div id="infscr-loading"><img alt="Loading..." src="' + o.loading.img + '" /><div>' + o.loading.msgText + "</div></div>"), (new Image).src = o.loading.img, o.pixelsFromNavToBottom === e && (o.pixelsFromNavToBottom = t(document).height() - t(o.navSelector).offset().top, this._debug("pixelsFromNavToBottom: " + o.pixelsFromNavToBottom));
                var l = this;
                return o.loading.start = o.loading.start || function () {
                    t(o.navSelector).hide(), o.loading.msg.appendTo(o.loading.selector).show(o.loading.speed, t.proxy(function () {
                        this.beginAjax(o)
                    }, l))
                }, o.loading.finished = o.loading.finished || function () {
                    o.state.isBeyondMaxPage || o.loading.msg.fadeOut(o.loading.speed)
                }, o.callback = function (i, r, a) {
                    o.behavior && i["_callback_" + o.behavior] !== e && i["_callback_" + o.behavior].call(t(o.contentSelector)[0], r, a), n && n.call(t(o.contentSelector)[0], r, o, a), o.prefill && s.bind("resize.infinite-scroll", i._prefill)
                }, i.debug && (!Function.prototype.bind || "object" != typeof console && "function" != typeof console || "object" != typeof console.log || ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function (t) {
                    console[t] = this.call(console[t], console)
                }, Function.prototype.bind)), this._setup(), o.prefill && this._prefill(), !0
            },
            _prefill: function () {
                function e() {
                    return t(i.options.contentSelector).height() <= n.height()
                }
                var i = this,
                    n = t(window);
                this._prefill = function () {
                    e() && i.scroll(), n.bind("resize.infinite-scroll", function () {
                        e() && (n.unbind("resize.infinite-scroll"), i.scroll())
                    })
                }, this._prefill()
            },
            _debug: function () {
                !0 === this.options.debug && ("undefined" != typeof console && "function" == typeof console.log ? 1 === Array.prototype.slice.call(arguments).length && "string" == typeof Array.prototype.slice.call(arguments)[0] ? console.log(Array.prototype.slice.call(arguments).toString()) : console.log(Array.prototype.slice.call(arguments)) : Function.prototype.bind || "undefined" == typeof console || "object" != typeof console.log || Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments)))
            },
            _determinepath: function (t) {
                var i = this.options;
                if (i.behavior && this["_determinepath_" + i.behavior] !== e) return this["_determinepath_" + i.behavior].call(this, t);
                if (i.pathParse) return this._debug("pathParse manual"), i.pathParse(t, this.options.state.currPage + 1);
                if (t.match(/^(.*?)\b2\b(.*?$)/)) t = t.match(/^(.*?)\b2\b(.*?$)/).slice(1);
                else if (t.match(/^(.*?)2(.*?$)/)) {
                    if (t.match(/^(.*?page=)2(\/.*|$)/)) return t = t.match(/^(.*?page=)2(\/.*|$)/).slice(1);
                    t = t.match(/^(.*?)2(.*?$)/).slice(1)
                } else {
                    if (t.match(/^(.*?page=)1(\/.*|$)/)) return t = t.match(/^(.*?page=)1(\/.*|$)/).slice(1);
                    this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com."), i.state.isInvalidPage = !0
                }
                return this._debug("determinePath", t), t
            },
            _error: function (t) {
                var i = this.options;
                return i.behavior && this["_error_" + i.behavior] !== e ? void this["_error_" + i.behavior].call(this, t) : ("destroy" !== t && "end" !== t && (t = "unknown"), this._debug("Error", t), ("end" === t || i.state.isBeyondMaxPage) && this._showdonemsg(), i.state.isDone = !0, i.state.currPage = 1, i.state.isPaused = !1, i.state.isBeyondMaxPage = !1, void this._binding("unbind"))
            },
            _loadcallback: function (i, n, o) {
                var s, r = this.options,
                    a = this.options.callback,
                    l = r.state.isDone ? "done" : r.appendCallback ? "append" : "no-append";
                if (r.behavior && this["_loadcallback_" + r.behavior] !== e) return void this["_loadcallback_" + r.behavior].call(this, i, n);
                switch (l) {
                    case "done":
                        return this._showdonemsg(), !1;
                    case "no-append":
                        if ("html" === r.dataType && (n = "<div>" + n + "</div>", n = t(n).find(r.itemSelector)), 0 === n.length) return this._error("end");
                        break;
                    case "append":
                        var c = i.children();
                        if (0 === c.length) return this._error("end");
                        for (s = document.createDocumentFragment(); i[0].firstChild;) s.appendChild(i[0].firstChild);
                        this._debug("contentSelector", t(r.contentSelector)[0]), t(r.contentSelector)[0].appendChild(s), n = c.get()
                }
                if (r.loading.finished.call(t(r.contentSelector)[0], r), r.animate) {
                    var h = t(window).scrollTop() + t(r.loading.msg).height() + r.extraScrollPx + "px";
                    t("html,body").animate({
                        scrollTop: h
                    }, 800, function () {
                        r.state.isDuringAjax = !1
                    })
                }
                r.animate || (r.state.isDuringAjax = !1), a(this, n, o), r.prefill && this._prefill()
            },
            _nearbottom: function () {
                var i = this.options,
                    n = 0 + t(document).height() - i.binder.scrollTop() - t(window).height();
                return i.behavior && this["_nearbottom_" + i.behavior] !== e ? this["_nearbottom_" + i.behavior].call(this) : (this._debug("math:", n, i.pixelsFromNavToBottom), n - i.bufferPx < i.pixelsFromNavToBottom)
            },
            _pausing: function (t) {
                var i = this.options;
                if (i.behavior && this["_pausing_" + i.behavior] !== e) return void this["_pausing_" + i.behavior].call(this, t);
                switch ("pause" !== t && "resume" !== t && null !== t && this._debug("Invalid argument. Toggling pause value instead"), t = !t || "pause" !== t && "resume" !== t ? "toggle" : t) {
                    case "pause":
                        i.state.isPaused = !0;
                        break;
                    case "resume":
                        i.state.isPaused = !1;
                        break;
                    case "toggle":
                        i.state.isPaused = !i.state.isPaused
                }
                return this._debug("Paused", i.state.isPaused), !1
            },
            _setup: function () {
                var t = this.options;
                return t.behavior && this["_setup_" + t.behavior] !== e ? void this["_setup_" + t.behavior].call(this) : (this._binding("bind"), !1)
            },
            _showdonemsg: function () {
                var i = this.options;
                return i.behavior && this["_showdonemsg_" + i.behavior] !== e ? void this["_showdonemsg_" + i.behavior].call(this) : (i.loading.msg.find("img").hide().parent().find("div").html(i.loading.finishedMsg).animate({
                    opacity: 1
                }, 2e3, function () {
                    t(this).parent().fadeOut(i.loading.speed);
                }), void i.errorCallback.call(t(i.contentSelector)[0], "done"))
            },
            _validate: function (e) {
                for (var i in e)
                    if (i.indexOf && i.indexOf("Selector") > -1 && 0 === t(e[i]).length) return this._debug("Your " + i + " found no elements."), !1;
                return !0
            },
            bind: function () {
                this._binding("bind")
            },
            destroy: function () {
                return this.options.state.isDestroyed = !0, this.options.loading.finished(), this._error("destroy")
            },
            pause: function () {
                this._pausing("pause")
            },
            resume: function () {
                this._pausing("resume")
            },
            beginAjax: function (i) {
                var n, o, s, r, a = this,
                    l = i.path;
                if (i.state.currPage++, i.maxPage !== e && i.state.currPage > i.maxPage) return i.state.isBeyondMaxPage = !0, void this.destroy();
                switch (n = t(t(i.contentSelector).is("table, tbody") ? "<tbody/>" : "<div/>"), o = "function" == typeof l ? l(i.state.currPage) : l.join(i.state.currPage), a._debug("heading into ajax", o), s = "html" === i.dataType || "json" === i.dataType ? i.dataType : "html+callback", i.appendCallback && "html" === i.dataType && (s += "+callback"), s) {
                    case "html+callback":
                        a._debug("Using HTML via .load() method"), n.load(o + " " + i.itemSelector, e, function (t) {
                            a._loadcallback(n, t, o)
                        });
                        break;
                    case "html":
                        a._debug("Using " + s.toUpperCase() + " via $.ajax() method"), t.ajax({
                            url: o,
                            dataType: i.dataType,
                            complete: function (t, e) {
                                r = "undefined" != typeof t.isResolved ? t.isResolved() : "success" === e || "notmodified" === e, r ? a._loadcallback(n, t.responseText, o) : a._error("end")
                            }
                        });
                        break;
                    case "json":
                        a._debug("Using " + s.toUpperCase() + " via $.ajax() method"), t.ajax({
                            dataType: "json",
                            type: "GET",
                            url: o,
                            success: function (t, s, l) {
                                if (r = "undefined" != typeof l.isResolved ? l.isResolved() : "success" === s || "notmodified" === s, i.appendCallback)
                                    if (i.template !== e) {
                                        var c = i.template(t);
                                        n.append(c), r ? a._loadcallback(n, c) : a._error("end")
                                    } else a._debug("template must be defined."), a._error("end");
                                else r ? a._loadcallback(n, t, o) : a._error("end")
                            },
                            error: function () {
                                a._debug("JSON ajax request failed."), a._error("end")
                            }
                        })
                }
            },
            retrieve: function (i) {
                i = i || null;
                var n = this,
                    o = n.options;
                return o.behavior && this["retrieve_" + o.behavior] !== e ? void this["retrieve_" + o.behavior].call(this, i) : o.state.isDestroyed ? (this._debug("Instance is destroyed"), !1) : (o.state.isDuringAjax = !0, void o.loading.start.call(t(o.contentSelector)[0], o))
            },
            scroll: function () {
                var t = this.options,
                    i = t.state;
                return t.behavior && this["scroll_" + t.behavior] !== e ? void this["scroll_" + t.behavior].call(this) : void(i.isDuringAjax || i.isInvalidPage || i.isDone || i.isDestroyed || i.isPaused || this._nearbottom() && this.retrieve())
            },
            toggle: function () {
                this._pausing()
            },
            unbind: function () {
                this._binding("unbind")
            },
            update: function (e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            }
        }, t.fn.infinitescroll = function (e, i) {
            var n = typeof e;
            switch (n) {
                case "string":
                    var o = Array.prototype.slice.call(arguments, 1);
                    this.each(function () {
                        var i = t.data(this, "infinitescroll");
                        return !!i && (!(!t.isFunction(i[e]) || "_" === e.charAt(0)) && void i[e].apply(i, o))
                    });
                    break;
                case "object":
                    this.each(function () {
                        var n = t.data(this, "infinitescroll");
                        n ? n.update(e) : (n = new t.infinitescroll(e, i, this), n.failed || t.data(this, "infinitescroll", n))
                    })
            }
            return this
        };
        var i, n = t.event;
        n.special.smartscroll = {
            setup: function () {
                t(this).bind("scroll", n.special.smartscroll.handler)
            },
            teardown: function () {
                t(this).unbind("scroll", n.special.smartscroll.handler)
            },
            handler: function (e, n) {
                var o = this,
                    s = arguments;
                e.type = "smartscroll", i && clearTimeout(i), i = setTimeout(function () {
                    t(o).trigger("smartscroll", s)
                }, "execAsap" === n ? 0 : 100)
            }
        }, t.fn.smartscroll = function (t) {
            return t ? this.bind("smartscroll", t) : this.trigger("smartscroll", ["execAsap"])
        }
    }),
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
    }(function (t) {
        function e(t) {
            return a.raw ? t : encodeURIComponent(t)
        }

        function i(t) {
            return a.raw ? t : decodeURIComponent(t)
        }

        function n(t) {
            return e(a.json ? JSON.stringify(t) : String(t))
        }

        function o(t) {
            0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return t = decodeURIComponent(t.replace(r, " ")), a.json ? JSON.parse(t) : t
            } catch (e) {}
        }

        function s(e, i) {
            var n = a.raw ? e : o(e);
            return t.isFunction(i) ? i(n) : n
        }
        var r = /\+/g,
            a = t.cookie = function (o, r, l) {
                if (void 0 !== r && !t.isFunction(r)) {
                    if (l = t.extend({}, a.defaults, l), "number" == typeof l.expires) {
                        var c = l.expires,
                            h = l.expires = new Date;
                        h.setTime(+h + 864e5 * c)
                    }
                    return document.cookie = [e(o), "=", n(r), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
                }
                for (var d = o ? void 0 : {}, u = document.cookie ? document.cookie.split("; ") : [], p = 0, f = u.length; p < f; p++) {
                    var m = u[p].split("="),
                        g = i(m.shift()),
                        v = m.join("=");
                    if (o && o === g) {
                        d = s(v, r);
                        break
                    }
                    o || void 0 === (v = s(v)) || (d[g] = v)
                }
                return d
            };
        a.defaults = {}, t.removeCookie = function (e, i) {
            return void 0 !== t.cookie(e) && (t.cookie(e, "", t.extend({}, i, {
                expires: -1
            })), !t.cookie(e))
        }
    }), ! function (t) {
        "use strict";

        function e(t) {
            if (void 0 === Function.prototype.name) {
                var e = /function\s([^(]{1,})\(/,
                    i = e.exec(t.toString());
                return i && i.length > 1 ? i[1].trim() : ""
            }
            return void 0 === t.prototype ? t.constructor.name : t.prototype.constructor.name
        }

        function i(t) {
            return !!/true/.test(t) || !/false/.test(t) && (isNaN(1 * t) ? t : parseFloat(t))
        }

        function n(t) {
            return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        }
        var o = "6.2.2",
            s = {
                version: o,
                _plugins: {},
                _uuids: [],
                rtl: function () {
                    return "rtl" === t("html").attr("dir")
                },
                plugin: function (t, i) {
                    var o = i || e(t),
                        s = n(o);
                    this._plugins[s] = this[o] = t
                },
                registerPlugin: function (t, i) {
                    var o = i ? n(i) : e(t.constructor).toLowerCase();
                    t.uuid = this.GetYoDigits(6, o), t.$element.attr("data-" + o) || t.$element.attr("data-" + o, t.uuid), t.$element.data("zfPlugin") || t.$element.data("zfPlugin", t), t.$element.trigger("init.zf." + o), this._uuids.push(t.uuid)
                },
                unregisterPlugin: function (t) {
                    var i = n(e(t.$element.data("zfPlugin").constructor));
                    this._uuids.splice(this._uuids.indexOf(t.uuid), 1), t.$element.removeAttr("data-" + i).removeData("zfPlugin").trigger("destroyed.zf." + i);
                    for (var o in t) t[o] = null
                },
                reInit: function (e) {
                    var i = e instanceof t;
                    try {
                        if (i) e.each(function () {
                            t(this).data("zfPlugin")._init()
                        });
                        else {
                            var o = typeof e,
                                s = this,
                                r = {
                                    object: function (e) {
                                        e.forEach(function (e) {
                                            e = n(e), t("[data-" + e + "]").foundation("_init")
                                        })
                                    },
                                    string: function () {
                                        e = n(e), t("[data-" + e + "]").foundation("_init")
                                    },
                                    undefined: function () {
                                        this.object(Object.keys(s._plugins))
                                    }
                                };
                            r[o](e)
                        }
                    } catch (a) {
                        console.error(a)
                    } finally {
                        return e
                    }
                },
                GetYoDigits: function (t, e) {
                    return t = t || 6, Math.round(Math.pow(36, t + 1) - Math.random() * Math.pow(36, t)).toString(36).slice(1) + (e ? "-" + e : "")
                },
                reflow: function (e, n) {
                    "undefined" == typeof n ? n = Object.keys(this._plugins) : "string" == typeof n && (n = [n]);
                    var o = this;
                    t.each(n, function (n, s) {
                        var r = o._plugins[s],
                            a = t(e).find("[data-" + s + "]").addBack("[data-" + s + "]");
                        a.each(function () {
                            var e = t(this),
                                n = {};
                            if (e.data("zfPlugin")) return void console.warn("Tried to initialize " + s + " on an element that already has a Foundation plugin.");
                            if (e.attr("data-options")) {
                                e.attr("data-options").split(";").forEach(function (t, e) {
                                    var o = t.split(":").map(function (t) {
                                        return t.trim()
                                    });
                                    o[0] && (n[o[0]] = i(o[1]))
                                })
                            }
                            try {
                                e.data("zfPlugin", new r(t(this), n))
                            } catch (o) {
                                console.error(o)
                            } finally {
                                return
                            }
                        })
                    })
                },
                getFnName: e,
                transitionend: function (t) {
                    var e, i = {
                            transition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "otransitionend"
                        },
                        n = document.createElement("div");
                    for (var o in i) "undefined" != typeof n.style[o] && (e = i[o]);
                    return e ? e : (e = setTimeout(function () {
                        t.triggerHandler("transitionend", [t])
                    }, 1), "transitionend")
                }
            };
        s.util = {
            throttle: function (t, e) {
                var i = null;
                return function () {
                    var n = this,
                        o = arguments;
                    null === i && (i = setTimeout(function () {
                        t.apply(n, o), i = null
                    }, e))
                }
            }
        };
        var r = function (i) {
            var n = typeof i,
                o = t("meta.foundation-mq"),
                r = t(".no-js");
            if (o.length || t('<meta class="foundation-mq">').appendTo(document.head), r.length && r.removeClass("no-js"), "undefined" === n) s.MediaQuery._init(), s.reflow(this);
            else {
                if ("string" !== n) throw new TypeError("We're sorry, " + n + " is not a valid parameter. You must use a string representing the method you wish to invoke.");
                var a = Array.prototype.slice.call(arguments, 1),
                    l = this.data("zfPlugin");
                if (void 0 === l || void 0 === l[i]) throw new ReferenceError("We're sorry, '" + i + "' is not an available method for " + (l ? e(l) : "this element") + ".");
                1 === this.length ? l[i].apply(l, a) : this.each(function (e, n) {
                    l[i].apply(t(n).data("zfPlugin"), a)
                })
            }
            return this
        };
        window.Foundation = s, t.fn.foundation = r,
            function () {
                Date.now && window.Date.now || (window.Date.now = Date.now = function () {
                    return (new Date).getTime()
                });
                for (var t = ["webkit", "moz"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) {
                    var i = t[e];
                    window.requestAnimationFrame = window[i + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]
                }
                if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
                    var n = 0;
                    window.requestAnimationFrame = function (t) {
                        var e = Date.now(),
                            i = Math.max(n + 16, e);
                        return setTimeout(function () {
                            t(n = i)
                        }, i - e)
                    }, window.cancelAnimationFrame = clearTimeout
                }
                window.performance && window.performance.now || (window.performance = {
                    start: Date.now(),
                    now: function () {
                        return Date.now() - this.start
                    }
                })
            }(), Function.prototype.bind || (Function.prototype.bind = function (t) {
                if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                var e = Array.prototype.slice.call(arguments, 1),
                    i = this,
                    n = function () {},
                    o = function () {
                        return i.apply(this instanceof n ? this : t, e.concat(Array.prototype.slice.call(arguments)))
                    };
                return this.prototype && (n.prototype = this.prototype), o.prototype = new n, o
            })
    }(jQuery), ! function (t) {
        function e(t) {
            var e = {};
            return "string" != typeof t ? e : (t = t.trim().slice(1, -1)) ? e = t.split("&").reduce(function (t, e) {
                var i = e.replace(/\+/g, " ").split("="),
                    n = i[0],
                    o = i[1];
                return n = decodeURIComponent(n), o = void 0 === o ? null : decodeURIComponent(o), t.hasOwnProperty(n) ? Array.isArray(t[n]) ? t[n].push(o) : t[n] = [t[n], o] : t[n] = o, t
            }, {}) : e
        }
        var i = {
            queries: [],
            current: "",
            _init: function () {
                var i, n = this,
                    o = t(".foundation-mq").css("font-family");
                i = e(o);
                for (var s in i) i.hasOwnProperty(s) && n.queries.push({
                    name: s,
                    value: "only screen and (min-width: " + i[s] + ")"
                });
                this.current = this._getCurrentSize(), this._watcher()
            },
            atLeast: function (t) {
                var e = this.get(t);
                return !!e && window.matchMedia(e).matches
            },
            get: function (t) {
                for (var e in this.queries)
                    if (this.queries.hasOwnProperty(e)) {
                        var i = this.queries[e];
                        if (t === i.name) return i.value
                    }
                return null
            },
            _getCurrentSize: function () {
                for (var t, e = 0; e < this.queries.length; e++) {
                    var i = this.queries[e];
                    window.matchMedia(i.value).matches && (t = i)
                }
                return "object" == typeof t ? t.name : t
            },
            _watcher: function () {
                var e = this;
                t(window).on("resize.zf.mediaquery", function () {
                    var i = e._getCurrentSize(),
                        n = e.current;
                    i !== n && (e.current = i, t(window).trigger("changed.zf.mediaquery", [i, n]))
                })
            }
        };
        Foundation.MediaQuery = i, window.matchMedia || (window.matchMedia = function () {
            "use strict";
            var t = window.styleMedia || window.media;
            if (!t) {
                var e = document.createElement("style"),
                    i = document.getElementsByTagName("script")[0],
                    n = null;
                e.type = "text/css", e.id = "matchmediajs-test", i.parentNode.insertBefore(e, i), n = "getComputedStyle" in window && window.getComputedStyle(e, null) || e.currentStyle, t = {
                    matchMedium: function (t) {
                        var i = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                        return e.styleSheet ? e.styleSheet.cssText = i : e.textContent = i, "1px" === n.width
                    }
                }
            }
            return function (e) {
                return {
                    matches: t.matchMedium(e || "all"),
                    media: e || "all"
                }
            }
        }()), Foundation.MediaQuery = i
    }(jQuery), ! function (t) {
        function e(t, e, i) {
            var n, o, s = this,
                r = e.duration,
                a = Object.keys(t.data())[0] || "timer",
                l = -1;
            this.isPaused = !1, this.restart = function () {
                l = -1, clearTimeout(o), this.start()
            }, this.start = function () {
                this.isPaused = !1, clearTimeout(o), l = l <= 0 ? r : l, t.data("paused", !1), n = Date.now(), o = setTimeout(function () {
                    e.infinite && s.restart(), i()
                }, l), t.trigger("timerstart.zf." + a)
            }, this.pause = function () {
                this.isPaused = !0, clearTimeout(o), t.data("paused", !0);
                var e = Date.now();
                l -= e - n, t.trigger("timerpaused.zf." + a)
            }
        }

        function i(e, i) {
            function n() {
                o--, 0 === o && i()
            }
            var o = e.length;
            0 === o && i(), e.each(function () {
                this.complete ? n() : "undefined" != typeof this.naturalWidth && this.naturalWidth > 0 ? n() : t(this).one("load", function () {
                    n()
                })
            })
        }
        Foundation.Timer = e, Foundation.onImagesLoaded = i
    }(jQuery);
var _createClass = function () {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    return function (e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e
    }
}();
! function (t) {
    var e = function () {
        function e(i, n) {
            _classCallCheck(this, e), this.$element = i, this.options = t.extend({}, e.defaults, n), this.rules = [], this.currentPath = "", this._init(), this._events(), Foundation.registerPlugin(this, "Interchange")
        }
        return _createClass(e, [{
            key: "_init",
            value: function () {
                this._addBreakpoints(), this._generateRules(), this._reflow()
            }
        }, {
            key: "_events",
            value: function () {
                t(window).on("resize.zf.interchange", Foundation.util.throttle(this._reflow.bind(this), 50))
            }
        }, {
            key: "_reflow",
            value: function () {
                var t;
                for (var e in this.rules)
                    if (this.rules.hasOwnProperty(e)) {
                        var i = this.rules[e];
                        window.matchMedia(i.query).matches && (t = i)
                    }
                t && this.replace(t.path)
            }
        }, {
            key: "_addBreakpoints",
            value: function () {
                for (var t in Foundation.MediaQuery.queries)
                    if (Foundation.MediaQuery.queries.hasOwnProperty(t)) {
                        var i = Foundation.MediaQuery.queries[t];
                        e.SPECIAL_QUERIES[i.name] = i.value
                    }
            }
        }, {
            key: "_generateRules",
            value: function (t) {
                var i, n = [];
                i = this.options.rules ? this.options.rules : this.$element.data("interchange").match(/\[.*?\]/g);
                for (var o in i)
                    if (i.hasOwnProperty(o)) {
                        var s = i[o].slice(1, -1).split(", "),
                            r = s.slice(0, -1).join(""),
                            a = s[s.length - 1];
                        e.SPECIAL_QUERIES[a] && (a = e.SPECIAL_QUERIES[a]), n.push({
                            path: r,
                            query: a
                        })
                    }
                this.rules = n
            }
        }, {
            key: "replace",
            value: function (e) {
                if (this.currentPath !== e) {
                    var i = this,
                        n = "replaced.zf.interchange";
                    "IMG" === this.$element[0].nodeName ? this.$element.attr("src", e).load(function () {
                        i.currentPath = e
                    }).trigger(n) : e.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i) ? this.$element.css({
                        "background-image": "url(" + e + ")"
                    }).trigger(n) : t.get(e, function (o) {
                        i.$element.html(o).trigger(n), t(o).foundation(), i.currentPath = e
                    })
                }
            }
        }, {
            key: "destroy",
            value: function () {}
        }]), e
    }();
    e.defaults = {
        rules: null
    }, e.SPECIAL_QUERIES = {
        landscape: "screen and (orientation: landscape)",
        portrait: "screen and (orientation: portrait)",
        retina: "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
    }, Foundation.plugin(e, "Interchange")
}(jQuery);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
                var n = function (t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    o = function (t, e, i) {
                        var n, o, s = t.cycle;
                        for (n in s) o = s[n], t[n] = "function" == typeof o ? o.call(e[i], i) : o[i % o.length];
                        delete t.cycle
                    },
                    s = function (t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render
                    },
                    r = 1e-10,
                    a = i._internals,
                    l = a.isSelector,
                    c = a.isArray,
                    h = s.prototype = i.to({}, .1, {}),
                    d = [];
                s.version = "1.18.5", h.constructor = s, h.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, h.invalidate = function () {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, h.updateTo = function (t, e) {
                    var n, o = this.ratio,
                        s = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in t) this.vars[n] = t[n];
                    if (this._initted || s)
                        if (e) this._initted = !1, s && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var r = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(r, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || s)
                        for (var a, l = 1 / (1 - o), c = this._firstPT; c;) a = c.s + c.c, c.c *= l, c.s = a - c.c, c = c._next;
                    return this
                }, h.render = function (t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var n, o, s, l, c, h, d, u, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        m = this._totalTime,
                        g = this._cycle,
                        v = this._duration,
                        _ = this._rawPrevTime;
                    if (t >= p - 1e-7 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, o = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > _ || 0 >= t && t >= -1e-7 || _ === r && "isPause" !== this.data) && _ !== t && (i = !0, _ > r && (o = "onReverseComplete")), this._rawPrevTime = u = !e || t || _ === t ? t : r)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === v && _ > 0) && (o = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (_ >= 0 && (i = !0), this._rawPrevTime = u = !e || t || _ === t ? t : r)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = v + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && t >= m && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : this._time < 0 && (this._time = 0)), this._easeType ? (c = this._time / v, h = this._easeType, d = this._easePower, (1 === h || 3 === h && c >= .5) && (c = 1 - c), 3 === h && (c *= 2), 1 === d ? c *= c : 2 === d ? c *= c * c : 3 === d ? c *= c * c * c : 4 === d && (c *= c * c * c * c), 1 === h ? this.ratio = 1 - c : 2 === h ? this.ratio = c : this._time / v < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2) : this.ratio = this._ease.getRatio(this._time / v)), f === this._time && !i && g === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = f, this._totalTime = m, this._rawPrevTime = _, this._cycle = g, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / v) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== f && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : o || (o = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || o) && this._callback("onUpdate")), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), o && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o), 0 === v && this._rawPrevTime === r && u !== r && (this._rawPrevTime = 0))
                }, s.to = function (t, e, i) {
                    return new s(t, e, i)
                }, s.from = function (t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i)
                }, s.fromTo = function (t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(t, e, n)
                }, s.staggerTo = s.allTo = function (t, e, r, a, h, u, p) {
                    a = a || 0;
                    var f, m, g, v, _ = 0,
                        y = [],
                        w = function () {
                            r.onComplete && r.onComplete.apply(r.onCompleteScope || this, arguments), h.apply(p || r.callbackScope || this, u || d)
                        },
                        b = r.cycle,
                        x = r.startAt && r.startAt.cycle;
                    for (c(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], 0 > a && (t = n(t), t.reverse(), a *= -1), f = t.length - 1, g = 0; f >= g; g++) {
                        m = {};
                        for (v in r) m[v] = r[v];
                        if (b && (o(m, t, g), null != m.duration && (e = m.duration, delete m.duration)), x) {
                            x = m.startAt = {};
                            for (v in r.startAt) x[v] = r.startAt[v];
                            o(m.startAt, t, g)
                        }
                        m.delay = _ + (m.delay || 0), g === f && h && (m.onComplete = w), y[g] = new s(t[g], e, m), _ += a
                    }
                    return y
                }, s.staggerFrom = s.allFrom = function (t, e, i, n, o, r, a) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, n, o, r, a)
                }, s.staggerFromTo = s.allFromTo = function (t, e, i, n, o, r, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, n, o, r, a, l)
                }, s.delayedCall = function (t, e, i, n, o) {
                    return new s(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: o,
                        overwrite: 0
                    })
                }, s.set = function (t, e) {
                    return new s(t, 0, e)
                }, s.isTweening = function (t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var u = function (t, e) {
                        for (var n = [], o = 0, s = t._first; s;) s instanceof i ? n[o++] = s : (e && (n[o++] = s), n = n.concat(u(s, e)), o = n.length), s = s._next;
                        return n
                    },
                    p = s.getAllTweens = function (e) {
                        return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e))
                    };
                s.killAll = function (t, i, n, o) {
                    null == i && (i = !0), null == n && (n = !0);
                    var s, r, a, l = p(0 != o),
                        c = l.length,
                        h = i && n && o;
                    for (a = 0; c > a; a++) r = l[a], (h || r instanceof e || (s = r.target === r.vars.onComplete) && n || i && !s) && (t ? r.totalTime(r._reversed ? 0 : r.totalDuration()) : r._enabled(!1, !1))
                }, s.killChildTweensOf = function (t, e) {
                    if (null != t) {
                        var o, r, h, d, u, p = a.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), c(t))
                            for (d = t.length; --d > -1;) s.killChildTweensOf(t[d], e);
                        else {
                            o = [];
                            for (h in p)
                                for (r = p[h].target.parentNode; r;) r === t && (o = o.concat(p[h].tweens)), r = r.parentNode;
                            for (u = o.length, d = 0; u > d; d++) e && o[d].totalTime(o[d].totalDuration()), o[d]._enabled(!1, !1)
                        }
                    }
                };
                var f = function (t, i, n, o) {
                    i = i !== !1, n = n !== !1, o = o !== !1;
                    for (var s, r, a = p(o), l = i && n && o, c = a.length; --c > -1;) r = a[c], (l || r instanceof e || (s = r.target === r.vars.onComplete) && n || i && !s) && r.paused(t)
                };
                return s.pauseAll = function (t, e, i) {
                    f(!0, t, e, i)
                }, s.resumeAll = function (t, e, i) {
                    f(!1, t, e, i)
                }, s.globalTimeScale = function (e) {
                    var n = t._rootTimeline,
                        o = i.ticker.time;
                    return arguments.length ? (e = e || r, n._startTime = o - (o - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, o = i.ticker.frame, n._startTime = o - (o - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, h.progress = function (t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, h.totalProgress = function (t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, h.time = function (t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, h.duration = function (e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, h.totalDuration = function (t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, h.repeat = function (t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function (t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function (t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, s
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
                var n = function (t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, o = this.vars;
                        for (n in o) i = o[n], l(i) && -1 !== i.join("").indexOf("{self}") && (o[n] = this._swapSelfInParams(i));
                        l(o.tweens) && this.add(o.tweens, 0, o.align, o.stagger)
                    },
                    o = 1e-10,
                    s = i._internals,
                    r = n._internals = {},
                    a = s.isSelector,
                    l = s.isArray,
                    c = s.lazyTweens,
                    h = s.lazyRender,
                    d = _gsScope._gsDefine.globals,
                    u = function (t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    p = function (t, e, i) {
                        var n, o, s = t.cycle;
                        for (n in s) o = s[n], t[n] = "function" == typeof o ? o.call(e[i], i) : o[i % o.length];
                        delete t.cycle
                    },
                    f = r.pauseCallback = function () {},
                    m = function (t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    g = n.prototype = new e;
                return n.version = "1.18.5", g.constructor = n, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function (t, e, n, o) {
                    var s = n.repeat && d.TweenMax || i;
                    return e ? this.add(new s(t, e, n), o) : this.set(t, n, o)
                }, g.from = function (t, e, n, o) {
                    return this.add((n.repeat && d.TweenMax || i).from(t, e, n), o)
                }, g.fromTo = function (t, e, n, o, s) {
                    var r = o.repeat && d.TweenMax || i;
                    return e ? this.add(r.fromTo(t, e, n, o), s) : this.set(t, o, s)
                }, g.staggerTo = function (t, e, o, s, r, l, c, h) {
                    var d, f, g = new n({
                            onComplete: l,
                            onCompleteParams: c,
                            callbackScope: h,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        v = o.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = m(t)), s = s || 0, 0 > s && (t = m(t), t.reverse(), s *= -1), f = 0; f < t.length; f++) d = u(o), d.startAt && (d.startAt = u(d.startAt), d.startAt.cycle && p(d.startAt, t, f)), v && (p(d, t, f), null != d.duration && (e = d.duration, delete d.duration)), g.to(t[f], e, d, f * s);
                    return this.add(g, r)
                }, g.staggerFrom = function (t, e, i, n, o, s, r, a) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, o, s, r, a)
                }, g.staggerFromTo = function (t, e, i, n, o, s, r, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, o, s, r, a, l)
                }, g.call = function (t, e, n, o) {
                    return this.add(i.delayedCall(0, t, e, n), o)
                }, g.set = function (t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function (t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var o, s, r = new n(t),
                        a = r._timeline;
                    for (null == e && (e = !0), a._remove(r, !0), r._startTime = 0, r._rawPrevTime = r._time = r._totalTime = a._time, o = a._first; o;) s = o._next, e && o instanceof i && o.target === o.vars.onComplete || r.add(o, o._startTime - o._delay), o = s;
                    return a.add(r, 0), r
                }, g.add = function (o, s, r, a) {
                    var c, h, d, u, p, f;
                    if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, o)), !(o instanceof t)) {
                        if (o instanceof Array || o && o.push && l(o)) {
                            for (r = r || "normal", a = a || 0, c = s, h = o.length, d = 0; h > d; d++) l(u = o[d]) && (u = new n({
                                tweens: u
                            })), this.add(u, c), "string" != typeof u && "function" != typeof u && ("sequence" === r ? c = u._startTime + u.totalDuration() / u._timeScale : "start" === r && (u._startTime -= u.delay())), c += a;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof o) return this.addLabel(o, s);
                        if ("function" != typeof o) throw "Cannot add " + o + " into the timeline; it is not a tween, timeline, function, or string.";
                        o = i.delayedCall(0, o)
                    }
                    if (e.prototype.add.call(this, o, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (p = this, f = p.rawTime() > o._startTime; p._timeline;) f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
                    return this
                }, g.remove = function (e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var n = e.length; --n > -1;) this.remove(e[n]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, g._remove = function (t, i) {
                    e.prototype._remove.call(this, t, i);
                    var n = this._last;
                    return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, g.append = function (t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, g.insert = g.insertMultiple = function (t, e, i, n) {
                    return this.add(t, e || 0, i, n)
                }, g.appendMultiple = function (t, e, i, n) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                }, g.addLabel = function (t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, g.addPause = function (t, e, n, o) {
                    var s = i.delayedCall(0, f, n, o || this);
                    return s.vars.onComplete = s.vars.onReverseComplete = e, s.data = "isPause", this._hasPause = !0, this.add(s, t)
                }, g.removeLabel = function (t) {
                    return delete this._labels[t], this
                }, g.getLabelTime = function (t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, g._parseTimeOrLabel = function (e, i, n, o) {
                    var s;
                    if (o instanceof t && o.timeline === this) this.remove(o);
                    else if (o && (o instanceof Array || o.push && l(o)))
                        for (s = o.length; --s > -1;) o[s] instanceof t && o[s].timeline === this && this.remove(o[s]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (s = e.indexOf("="), -1 === s) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : this.duration()
                    }
                    return Number(e) + i
                }, g.seek = function (t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, g.stop = function () {
                    return this.paused(!0)
                }, g.gotoAndPlay = function (t, e) {
                    return this.play(t, e)
                }, g.gotoAndStop = function (t, e) {
                    return this.pause(t, e)
                }, g.render = function (t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, r, a, l, d, u, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        m = this._startTime,
                        g = this._timeScale,
                        v = this._paused;
                    if (t >= p - 1e-7) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === o) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > o && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : o, t = p + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== o && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : o, 0 === t && s)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                            t = 0, this._initted || (l = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= f)
                                for (n = this._first; n && n._startTime <= t && !d;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (d = n), n = n._next;
                            else
                                for (n = this._last; n && n._startTime >= t && !d;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (d = n), n = n._prev;
                            d && (this._time = t = d._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== f && this._first || i || l || d) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), u = this._time, u >= f)
                            for (n = this._first; n && (r = n._next, u === this._time && (!this._paused || v));)(n._active || n._startTime <= u && !n._paused && !n._gc) && (d === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = r;
                        else
                            for (n = this._last; n && (r = n._prev, u === this._time && (!this._paused || v));) {
                                if (n._active || n._startTime <= f && !n._paused && !n._gc) {
                                    if (d === n) {
                                        for (d = n._prev; d && d.endTime() > this._time;) d.render(d._reversed ? d.totalDuration() - (t - d._startTime) * d._timeScale : (t - d._startTime) * d._timeScale, e, i), d = d._prev;
                                        d = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i);
                                }
                                n = r
                            }
                        this._onUpdate && (e || (c.length && h(), this._callback("onUpdate"))), a && (this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (s && (c.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                    }
                }, g._hasPausedChild = function () {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, g.getChildren = function (t, e, n, o) {
                    o = o || -9999999999;
                    for (var s = [], r = this._first, a = 0; r;) r._startTime < o || (r instanceof i ? e !== !1 && (s[a++] = r) : (n !== !1 && (s[a++] = r), t !== !1 && (s = s.concat(r.getChildren(!0, e, n)), a = s.length))), r = r._next;
                    return s
                }, g.getTweensOf = function (t, e) {
                    var n, o, s = this._gc,
                        r = [],
                        a = 0;
                    for (s && this._enabled(!0, !0), n = i.getTweensOf(t), o = n.length; --o > -1;)(n[o].timeline === this || e && this._contains(n[o])) && (r[a++] = n[o]);
                    return s && this._enabled(!1, !0), r
                }, g.recent = function () {
                    return this._recent
                }, g._contains = function (t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, g.shiftChildren = function (t, e, i) {
                    i = i || 0;
                    for (var n, o = this._first, s = this._labels; o;) o._startTime >= i && (o._startTime += t), o = o._next;
                    if (e)
                        for (n in s) s[n] >= i && (s[n] += t);
                    return this._uncache(!0)
                }, g._kill = function (t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, o = !1; --n > -1;) i[n]._kill(t, e) && (o = !0);
                    return o
                }, g.clear = function (t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, g.invalidate = function () {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, g._enabled = function (t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, g.totalTime = function (e, i, n) {
                    this._forcingPlayhead = !0;
                    var o = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, o
                }, g.duration = function (t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, g.totalDuration = function (t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, o = this._last, s = 999999999999; o;) e = o._prev, o._dirty && o.totalDuration(), o._startTime > s && this._sortChildren && !o._paused ? this.add(o, o._startTime - o._delay) : s = o._startTime, o._startTime < 0 && !o._paused && (n -= o._startTime, this._timeline.smoothChildTiming && (this._startTime += o._startTime / this._timeScale), this.shiftChildren(-o._startTime, !1, -9999999999), s = 0), i = o._startTime + o._totalDuration / o._timeScale, i > n && (n = i), o = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, g.paused = function (e) {
                    if (!e)
                        for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, g.usesFrames = function () {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, g.rawTime = function () {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, n
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
                var n = function (e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    o = 1e-10,
                    s = e._internals,
                    r = s.lazyTweens,
                    a = s.lazyRender,
                    l = new i(null, null, 1, 0),
                    c = n.prototype = new t;
                return c.constructor = n, c.kill()._gc = !1, n.version = "1.18.5", c.invalidate = function () {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, c.addCallback = function (t, i, n, o) {
                    return this.add(e.delayedCall(0, t, n, o), i)
                }, c.removeCallback = function (t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, o = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === o && i[n]._enabled(!1, !1);
                    return this
                }, c.removePause = function (e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, c.tweenTo = function (t, i) {
                    i = i || {};
                    var n, o, s, r = {
                        ease: l,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (o in i) r[o] = i[o];
                    return r.time = this._parseTimeOrLabel(t), n = Math.abs(Number(r.time) - this._time) / this._timeScale || .001, s = new e(this, n, r), r.onStart = function () {
                        s.target.paused(!0), s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), i.onStart && s._callback("onStart")
                    }, s
                }, c.tweenFromTo = function (t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var n = this.tweenTo(e, i);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, c.render = function (t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, l, c, h, d, u, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._duration,
                        g = this._time,
                        v = this._totalTime,
                        _ = this._startTime,
                        y = this._timeScale,
                        w = this._rawPrevTime,
                        b = this._paused,
                        x = this._cycle;
                    if (t >= f - 1e-7) this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, c = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > w || w === o) && w !== t && this._first && (h = !0, w > o && (c = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : o, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== g || 0 === m && w !== o && (w > 0 || 0 > t && w >= 0) && !this._locked) && (c = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = s = !0, c = "onReverseComplete") : w >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : o, 0 === t && s)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                            t = 0, this._initted || (h = !0)
                        }
                    else if (0 === m && 0 > w && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (d = m + this._repeatDelay, this._cycle = this._totalTime / d >> 0, 0 !== this._cycle && this._cycle === this._totalTime / d && t >= v && this._cycle--, this._time = this._totalTime - this._cycle * d, this._yoyo && 0 !== (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if (t = this._time, t >= g)
                            for (n = this._first; n && n._startTime <= t && !u;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (u = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !u;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (u = n), n = n._prev;
                        u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== x && !this._locked) {
                        var T = this._yoyo && 0 !== (1 & x),
                            S = T === (this._yoyo && 0 !== (1 & this._cycle)),
                            k = this._totalTime,
                            C = this._cycle,
                            A = this._rawPrevTime,
                            P = this._time;
                        if (this._totalTime = x * m, this._cycle < x ? T = !T : this._totalTime += m, this._time = g, this._rawPrevTime = 0 === m ? w - 1e-4 : w, this._cycle = x, this._locked = !0, g = T ? 0 : m, this.render(g, e, 0 === m), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), g !== this._time) return;
                        if (S && (g = T ? m + 1e-4 : -1e-4, this.render(g, !0, !1)), this._locked = !1, this._paused && !b) return;
                        this._time = P, this._totalTime = k, this._cycle = C, this._rawPrevTime = A
                    }
                    if (!(this._time !== g && this._first || i || h || u)) return void(v !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== v && t > 0 && (this._active = !0), 0 === v && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), p = this._time, p >= g)
                        for (n = this._first; n && (l = n._next, p === this._time && (!this._paused || b));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (u === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
                    else
                        for (n = this._last; n && (l = n._prev, p === this._time && (!this._paused || b));) {
                            if (n._active || n._startTime <= g && !n._paused && !n._gc) {
                                if (u === n) {
                                    for (u = n._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                                    u = null, this.pause()
                                }
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                            }
                            n = l
                        }
                    this._onUpdate && (e || (r.length && a(), this._callback("onUpdate"))), c && (this._locked || this._gc || (_ === this._startTime || y !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (s && (r.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[c] && this._callback(c)))
                }, c.getActive = function (t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, o, s = [],
                        r = this.getChildren(t, e, i),
                        a = 0,
                        l = r.length;
                    for (n = 0; l > n; n++) o = r[n], o.isActive() && (s[a++] = o);
                    return s
                }, c.getLabelAfter = function (t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; n > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, c.getLabelBefore = function (t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, c.getLabelsArray = function () {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function (t, e) {
                        return t.time - e.time
                    }), e
                }, c.progress = function (t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, c.totalProgress = function (t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, c.totalDuration = function (e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, c.time = function (t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, c.repeat = function (t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function (t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function (t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, c.currentLabel = function (t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
            function () {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    n = [],
                    o = {},
                    s = _gsScope._gsDefine.globals,
                    r = function (t, e, i, n) {
                        i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                    },
                    a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function (t, e, i, n) {
                        var o = {
                                a: t
                            },
                            s = {},
                            r = {},
                            a = {
                                c: n
                            },
                            l = (t + e) / 2,
                            c = (e + i) / 2,
                            h = (i + n) / 2,
                            d = (l + c) / 2,
                            u = (c + h) / 2,
                            p = (u - d) / 8;
                        return o.b = l + (t - l) / 4, s.b = d + p, o.c = s.a = (o.b + s.b) / 2, s.c = r.a = (d + u) / 2, r.b = u - p, a.b = h + (n - h) / 4, r.c = a.a = (r.b + a.b) / 2, [o, s, r, a]
                    },
                    c = function (t, o, s, r, a) {
                        var c, h, d, u, p, f, m, g, v, _, y, w, b, x = t.length - 1,
                            T = 0,
                            S = t[0].a;
                        for (c = 0; x > c; c++) p = t[T], h = p.a, d = p.d, u = t[T + 1].d, a ? (y = e[c], w = i[c], b = (w + y) * o * .25 / (r ? .5 : n[c] || .5), f = d - (d - h) * (r ? .5 * o : 0 !== y ? b / y : 0), m = d + (u - d) * (r ? .5 * o : 0 !== w ? b / w : 0), g = d - (f + ((m - f) * (3 * y / (y + w) + .5) / 4 || 0))) : (f = d - (d - h) * o * .5, m = d + (u - d) * o * .5, g = d - (f + m) / 2), f += g, m += g, p.c = v = f, 0 !== c ? p.b = S : p.b = S = p.a + .6 * (p.c - p.a), p.da = d - h, p.ca = v - h, p.ba = S - h, s ? (_ = l(h, S, v, d), t.splice(T, 1, _[0], _[1], _[2], _[3]), T += 4) : T++, S = m;
                        p = t[T], p.b = S, p.c = S + .4 * (p.d - S), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = S - p.a, s && (_ = l(p.a, S, p.c, p.d), t.splice(T, 1, _[0], _[1], _[2], _[3]))
                    },
                    h = function (t, n, o, s) {
                        var a, l, c, h, d, u, p = [];
                        if (s)
                            for (t = [s].concat(t), l = t.length; --l > -1;) "string" == typeof (u = t[l][n]) && "=" === u.charAt(1) && (t[l][n] = s[n] + Number(u.charAt(0) + u.substr(2)));
                        if (a = t.length - 2, 0 > a) return p[0] = new r(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n]), p;
                        for (l = 0; a > l; l++) c = t[l][n], h = t[l + 1][n], p[l] = new r(c, 0, 0, h), o && (d = t[l + 2][n], e[l] = (e[l] || 0) + (h - c) * (h - c), i[l] = (i[l] || 0) + (d - h) * (d - h));
                        return p[l] = new r(t[l][n], 0, 0, t[l + 1][n]), p
                    },
                    d = function (t, s, r, l, d, u) {
                        var p, f, m, g, v, _, y, w, b = {},
                            x = [],
                            T = u || t[0];
                        d = "string" == typeof d ? "," + d + "," : a, null == s && (s = 1);
                        for (f in t[0]) x.push(f);
                        if (t.length > 1) {
                            for (w = t[t.length - 1], y = !0, p = x.length; --p > -1;)
                                if (f = x[p], Math.abs(T[f] - w[f]) > .05) {
                                    y = !1;
                                    break
                                }
                            y && (t = t.concat(), u && t.unshift(u), t.push(t[1]), u = t[t.length - 3])
                        }
                        for (e.length = i.length = n.length = 0, p = x.length; --p > -1;) f = x[p], o[f] = -1 !== d.indexOf("," + f + ","), b[f] = h(t, f, o[f], u);
                        for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
                        if (!l) {
                            for (p = x.length; --p > -1;)
                                if (o[f])
                                    for (m = b[x[p]], _ = m.length - 1, g = 0; _ > g; g++) v = m[g + 1].da / i[g] + m[g].da / e[g] || 0, n[g] = (n[g] || 0) + v * v;
                            for (p = n.length; --p > -1;) n[p] = Math.sqrt(n[p])
                        }
                        for (p = x.length, g = r ? 4 : 1; --p > -1;) f = x[p], m = b[f], c(m, s, r, l, o[f]), y && (m.splice(0, g), m.splice(m.length - g, g));
                        return b
                    },
                    u = function (t, e, i) {
                        e = e || "soft";
                        var n, o, s, a, l, c, h, d, u, p, f, m = {},
                            g = "cubic" === e ? 3 : 2,
                            v = "soft" === e,
                            _ = [];
                        if (v && i && (t = [i].concat(t)), null == t || t.length < g + 1) throw "invalid Bezier data";
                        for (u in t[0]) _.push(u);
                        for (c = _.length; --c > -1;) {
                            for (u = _[c], m[u] = l = [], p = 0, d = t.length, h = 0; d > h; h++) n = null == i ? t[h][u] : "string" == typeof (f = t[h][u]) && "=" === f.charAt(1) ? i[u] + Number(f.charAt(0) + f.substr(2)) : Number(f), v && h > 1 && d - 1 > h && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                            for (d = p - g + 1, p = 0, h = 0; d > h; h += g) n = l[h], o = l[h + 1], s = l[h + 2], a = 2 === g ? 0 : l[h + 3], l[p++] = f = 3 === g ? new r(n, o, s, a) : new r(n, (2 * o + n) / 3, (2 * o + s) / 3, s);
                            l.length = p
                        }
                        return m
                    },
                    p = function (t, e, i) {
                        for (var n, o, s, r, a, l, c, h, d, u, p, f = 1 / i, m = t.length; --m > -1;)
                            for (u = t[m], s = u.a, r = u.d - s, a = u.c - s, l = u.b - s, n = o = 0, h = 1; i >= h; h++) c = f * h, d = 1 - c, n = o - (o = (c * c * r + 3 * d * (c * a + d * l)) * c), p = m * i + h - 1, e[p] = (e[p] || 0) + n * n
                    },
                    f = function (t, e) {
                        e = e >> 0 || 6;
                        var i, n, o, s, r = [],
                            a = [],
                            l = 0,
                            c = 0,
                            h = e - 1,
                            d = [],
                            u = [];
                        for (i in t) p(t[i], r, e);
                        for (o = r.length, n = 0; o > n; n++) l += Math.sqrt(r[n]), s = n % e, u[s] = l, s === h && (c += l, s = n / e >> 0, d[s] = u, a[s] = c, l = 0, u = []);
                        return {
                            length: c,
                            lengths: a,
                            segments: d
                        }
                    },
                    m = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.6",
                        API: 2,
                        global: !0,
                        init: function (t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, o, s, r, a, l = e.values || [],
                                c = {},
                                h = l[0],
                                p = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = p ? p instanceof Array ? p : [["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]] : null;
                            for (n in h) this._props.push(n);
                            for (s = this._props.length; --s > -1;) n = this._props[s], this._overwriteProps.push(n), o = this._func[n] = "function" == typeof t[n], c[n] = o ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || c[n] !== l[0][n] && (a = c);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? d(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : u(l, e.type, c), this._segCount = this._beziers[n].length, this._timeRes) {
                                var m = f(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (p = this._autoRotate)
                                for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), s = p.length; --s > -1;) {
                                    for (r = 0; 3 > r; r++) n = p[s][r], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                                    n = p[s][2], this._initialRotations[s] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function (e) {
                            var i, n, o, s, r, a, l, c, h, d, u = this._segCount,
                                p = this._func,
                                f = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (h = this._lengths, d = this._curSeg, e *= this._length, o = this._li, e > this._l2 && u - 1 > o) {
                                    for (c = u - 1; c > o && (this._l2 = h[++o]) <= e;);
                                    this._l1 = h[o - 1], this._li = o, this._curSeg = d = this._segments[o], this._s2 = d[this._s1 = this._si = 0]
                                } else if (e < this._l1 && o > 0) {
                                    for (; o > 0 && (this._l1 = h[--o]) >= e;);
                                    0 === o && e < this._l1 ? this._l1 = 0 : o++, this._l2 = h[o], this._li = o, this._curSeg = d = this._segments[o], this._s1 = d[(this._si = d.length - 1) - 1] || 0, this._s2 = d[this._si]
                                }
                                if (i = o, e -= this._l1, o = this._si, e > this._s2 && o < d.length - 1) {
                                    for (c = d.length - 1; c > o && (this._s2 = d[++o]) <= e;);
                                    this._s1 = d[o - 1], this._si = o
                                } else if (e < this._s1 && o > 0) {
                                    for (; o > 0 && (this._s1 = d[--o]) >= e;);
                                    0 === o && e < this._s1 ? this._s1 = 0 : o++, this._s2 = d[o], this._si = o
                                }
                                a = (o + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                            } else i = 0 > e ? 0 : e >= 1 ? u - 1 : u * e >> 0, a = (e - i * (1 / u)) * u;
                            for (n = 1 - a, o = this._props.length; --o > -1;) s = this._props[o], r = this._beziers[s][i], l = (a * a * r.da + 3 * n * (a * r.ca + n * r.ba)) * a + r.a, this._round[s] && (l = Math.round(l)), p[s] ? f[s](l) : f[s] = l;
                            if (this._autoRotate) {
                                var g, v, _, y, w, b, x, T = this._autoRotate;
                                for (o = T.length; --o > -1;) s = T[o][2], b = T[o][3] || 0, x = T[o][4] === !0 ? 1 : t, r = this._beziers[T[o][0]], g = this._beziers[T[o][1]], r && g && (r = r[i], g = g[i], v = r.a + (r.b - r.a) * a, y = r.b + (r.c - r.b) * a, v += (y - v) * a, y += (r.c + (r.d - r.c) * a - y) * a, _ = g.a + (g.b - g.a) * a, w = g.b + (g.c - g.b) * a, _ += (w - _) * a, w += (g.c + (g.d - g.c) * a - w) * a, l = m ? Math.atan2(w - _, y - v) * x + b : this._initialRotations[o], p[s] ? f[s](l) : f[s] = l)
                            }
                        }
                    }),
                    g = m.prototype;
                m.bezierThrough = d, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function (t, e, i) {
                    return new r(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, m._cssRegister = function () {
                    var t = s.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            n = e._setPluginRatio,
                            o = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function (t, e, s, r, a, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new m;
                                var c, h, d, u = e.values,
                                    p = u.length - 1,
                                    f = [],
                                    g = {};
                                if (0 > p) return a;
                                for (c = 0; p >= c; c++) d = i(t, u[c], r, a, l, p !== c), f[c] = d.end;
                                for (h in e) g[h] = e[h];
                                return g.values = f, a = new o(t, "bezier", 0, 0, d.pt, 2), a.data = d, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (c = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != d.end.left ? [["left", "top", "rotation", c, !1]] : null != d.end.x && [["x", "y", "rotation", c, !1]]), g.autoRotate && (r._transform || r._enableTransforms(!1), d.autoRotate = r._target._gsTransform, d.proxy.rotation = d.autoRotate.rotation || 0), l._onInitTween(d.proxy, g, r._tween), a
                            }
                        })
                    }
                }, g._roundProps = function (t, e) {
                    for (var i = this._overwriteProps, n = i.length; --n > -1;)(t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
                }, g._kill = function (t) {
                    var e, i, n = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
                var i, n, o, s, r = function () {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = r.prototype.setRatio
                    },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    c = r.prototype = new t("css");
                c.constructor = r, r.version = "1.18.5", r.API = 2, r.defaultTransformPerspective = 0, r.defaultSkewType = "compensated", r.defaultSmoothOrigin = !0, c = "px", r.suffixMap = {
                    top: c,
                    right: c,
                    bottom: c,
                    left: c,
                    width: c,
                    height: c,
                    fontSize: c,
                    padding: c,
                    margin: c,
                    perspective: c,
                    lineHeight: ""
                };
                var h, d, u, p, f, m, g = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    _ = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    w = /(?:\d|\-|\+|=|#|\.)*/g,
                    b = /opacity *= *([^)]*)/i,
                    x = /opacity:([^;]*)/i,
                    T = /alpha\(opacity *=.+?\)/i,
                    S = /^(rgb|hsl)/,
                    k = /([A-Z])/g,
                    C = /-([a-z])/gi,
                    A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    P = function (t, e) {
                        return e.toUpperCase()
                    },
                    O = /(?:Left|Right|Width)/i,
                    E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    M = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    I = /,(?=[^\)]*(?:\(|$))/gi,
                    R = /[\s,\(]/i,
                    z = Math.PI / 180,
                    L = 180 / Math.PI,
                    D = {},
                    F = document,
                    B = function (t) {
                        return F.createElementNS ? F.createElementNS("http://www.w3.org/1999/xhtml", t) : F.createElement(t)
                    },
                    j = B("div"),
                    q = B("img"),
                    N = r._internals = {
                        _specialProps: l
                    },
                    W = navigator.userAgent,
                    H = function () {
                        var t = W.indexOf("Android"),
                            e = B("a");
                        return u = -1 !== W.indexOf("Safari") && -1 === W.indexOf("Chrome") && (-1 === t || Number(W.substr(t + 8, 1)) > 3), f = u && Number(W.substr(W.indexOf("Version/") + 8, 1)) < 6, p = -1 !== W.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) && (m = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                    }(),
                    $ = function (t) {
                        return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    Y = function (t) {
                        window.console && console.log(t)
                    },
                    X = "",
                    U = "",
                    Q = function (t, e) {
                        e = e || j;
                        var i, n, o = e.style;
                        if (void 0 !== o[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === o[i[n] + t];);
                        return n >= 0 ? (U = 3 === n ? "ms" : i[n], X = "-" + U.toLowerCase() + "-", U + t) : null
                    },
                    G = F.defaultView ? F.defaultView.getComputedStyle : function () {},
                    K = r.getStyle = function (t, e, i, n, o) {
                        var s;
                        return H || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || G(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(k, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == o || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : o) : $(t)
                    },
                    V = N.convertToPixels = function (t, i, n, o, s) {
                        if ("px" === o || !o) return n;
                        if ("auto" === o || !n) return 0;
                        var a, l, c, h = O.test(i),
                            d = t,
                            u = j.style,
                            p = 0 > n,
                            f = 1 === n;
                        if (p && (n = -n), f && (n *= 100), "%" === o && -1 !== i.indexOf("border")) a = n / 100 * (h ? t.clientWidth : t.clientHeight);
                        else {
                            if (u.cssText = "border:0 solid red;position:" + K(t, "position") + ";line-height:0;", "%" !== o && d.appendChild && "v" !== o.charAt(0) && "rem" !== o) u[h ? "borderLeftWidth" : "borderTopWidth"] = n + o;
                            else {
                                if (d = t.parentNode || F.body, l = d._gsCache, c = e.ticker.frame, l && h && l.time === c) return l.width * n / 100;
                                u[h ? "width" : "height"] = n + o
                            }
                            d.appendChild(j), a = parseFloat(j[h ? "offsetWidth" : "offsetHeight"]), d.removeChild(j), h && "%" === o && r.cacheWidths !== !1 && (l = d._gsCache = d._gsCache || {}, l.time = c, l.width = a / n * 100), 0 !== a || s || (a = V(t, i, n, o, !0))
                        }
                        return f && (a /= 100), p ? -a : a
                    },
                    Z = N.calculateOffset = function (t, e, i) {
                        if ("absolute" !== K(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            o = K(t, "margin" + n, i);
                        return t["offset" + n] - (V(t, e, parseFloat(o), o.replace(w, "")) || 0)
                    },
                    J = function (t, e) {
                        var i, n, o, s = {};
                        if (e = e || G(t, null))
                            if (i = e.length)
                                for (; --i > -1;) o = e[i], (-1 === o.indexOf("-transform") || Ct === o) && (s[o.replace(C, P)] = e.getPropertyValue(o));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || kt === i) && (s[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(C, P)] = e[i]);
                        return H || (s.opacity = $(t)), n = jt(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, Pt && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                    },
                    tt = function (t, e, i, n, o) {
                        var s, r, a, l = {},
                            c = t.style;
                        for (r in i) "cssText" !== r && "length" !== r && isNaN(r) && (e[r] !== (s = i[r]) || o && o[r]) && -1 === r.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[r] = "auto" !== s || "left" !== r && "top" !== r ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[r] || "" === e[r].replace(y, "") ? s : 0 : Z(t, r), void 0 !== c[r] && (a = new mt(c, r, c[r], a)));
                        if (n)
                            for (r in n) "className" !== r && (l[r] = n[r]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    et = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    it = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    nt = function (t, e, i) {
                        if ("svg" === (t.nodeName + "").toLowerCase()) return (i || G(t))[e] || 0;
                        if (t.getBBox && Dt(t)) return t.getBBox()[e] || 0;
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            o = et[e],
                            s = o.length;
                        for (i = i || G(t, null); --s > -1;) n -= parseFloat(K(t, "padding" + o[s], i, !0)) || 0, n -= parseFloat(K(t, "border" + o[s] + "Width", i, !0)) || 0;
                        return n
                    },
                    ot = function (t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var i, n = t.split(" "),
                            o = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                            s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                        if (n.length > 3 && !e) {
                            for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(ot(n[i]));
                            return t.join(",")
                        }
                        return null == s ? s = "center" === o ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === o || isNaN(parseFloat(o)) && -1 === (o + "").indexOf("=")) && (o = "50%"), t = o + " " + s + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== o.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === o.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(o.replace(y, "")), e.oy = parseFloat(s.replace(y, "")), e.v = t), e || t
                    },
                    st = function (t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                    },
                    rt = function (t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                    },
                    at = function (t, e, i, n) {
                        var o, s, r, a, l, c = 1e-6;
                        return null == t ? a = e : "number" == typeof t ? a = t : (o = 360, s = t.split("_"), l = "=" === t.charAt(1), r = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : L) - (l ? 0 : e), s.length && (n && (n[i] = e + r), -1 !== t.indexOf("short") && (r %= o, r !== r % (o / 2) && (r = 0 > r ? r + o : r - o)), -1 !== t.indexOf("_cw") && 0 > r ? r = (r + 9999999999 * o) % o - (r / o | 0) * o : -1 !== t.indexOf("ccw") && r > 0 && (r = (r - 9999999999 * o) % o - (r / o | 0) * o)), a = e + r), c > a && a > -c && (a = 0), a
                    },
                    lt = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ct = function (t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 255 * (1 > 6 * t ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    },
                    ht = r.parseColor = function (t, e) {
                        var i, n, o, s, r, a, l, c, h, d, u;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), lt[t]) i = lt[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), o = t.charAt(2), s = t.charAt(3), t = "#" + n + n + o + o + s + s), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = u = t.match(g), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(v)
                                    } else r = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, o = .5 >= l ? l * (a + 1) : l + a - l * a, n = 2 * l - o, i.length > 3 && (i[3] = Number(t[3])), i[0] = ct(r + 1 / 3, n, o), i[1] = ct(r, n, o), i[2] = ct(r - 1 / 3, n, o);
                                else i = t.match(g) || lt.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = lt.black;
                        return e && !u && (n = i[0] / 255, o = i[1] / 255, s = i[2] / 255, c = Math.max(n, o, s), h = Math.min(n, o, s), l = (c + h) / 2, c === h ? r = a = 0 : (d = c - h, a = l > .5 ? d / (2 - c - h) : d / (c + h), r = c === n ? (o - s) / d + (s > o ? 6 : 0) : c === o ? (s - n) / d + 2 : (n - o) / d + 4, r *= 60), i[0] = r + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                    },
                    dt = function (t, e) {
                        var i, n, o, s = t.match(ut) || [],
                            r = 0,
                            a = s.length ? "" : t;
                        for (i = 0; i < s.length; i++) n = s[i], o = t.substr(r, t.indexOf(n, r) - r), r += o.length + n.length, n = ht(n, e), 3 === n.length && n.push(1), a += o + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                        return a + t.substr(r)
                    },
                    ut = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (c in lt) ut += "|" + c + "\\b";
                ut = new RegExp(ut + ")", "gi"), r.colorStringFilter = function (t) {
                    var e, i = t[0] + t[1];
                    ut.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = dt(t[0], e), t[1] = dt(t[1], e)), ut.lastIndex = 0
                }, e.defaultStringFilter || (e.defaultStringFilter = r.colorStringFilter);
                var pt = function (t, e, i, n) {
                        if (null == t) return function (t) {
                            return t
                        };
                        var o, s = e ? (t.match(ut) || [""])[0] : "",
                            r = t.split(s).join("").match(_) || [],
                            a = t.substr(0, t.indexOf(r[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            c = -1 !== t.indexOf(" ") ? " " : ",",
                            h = r.length,
                            d = h > 0 ? r[0].replace(g, "") : "";
                        return h ? o = e ? function (t) {
                            var e, u, p, f;
                            if ("number" == typeof t) t += d;
                            else if (n && I.test(t)) {
                                for (f = t.replace(I, "|").split("|"), p = 0; p < f.length; p++) f[p] = o(f[p]);
                                return f.join(",")
                            }
                            if (e = (t.match(ut) || [s])[0], u = t.split(e).join("").match(_) || [], p = u.length, h > p--)
                                for (; ++p < h;) u[p] = i ? u[(p - 1) / 2 | 0] : r[p];
                            return a + u.join(c) + c + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function (t) {
                            var e, s, u;
                            if ("number" == typeof t) t += d;
                            else if (n && I.test(t)) {
                                for (s = t.replace(I, "|").split("|"), u = 0; u < s.length; u++) s[u] = o(s[u]);
                                return s.join(",")
                            }
                            if (e = t.match(_) || [], u = e.length, h > u--)
                                for (; ++u < h;) e[u] = i ? e[(u - 1) / 2 | 0] : r[u];
                            return a + e.join(c) + l
                        } : function (t) {
                            return t
                        }
                    },
                    ft = function (t) {
                        return t = t.split(","),
                            function (e, i, n, o, s, r, a) {
                                var l, c = (i + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                                return o.parse(e, a, s, r)
                            }
                    },
                    mt = (N._setPluginRatio = function (t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, o, s, r = this.data, a = r.proxy, l = r.firstMPT, c = 1e-6; l;) e = a[l.v], l.r ? e = Math.round(e) : c > e && e > -c && (e = 0), l.t[l.p] = e, l = l._next;
                        if (r.autoRotate && (r.autoRotate.rotation = a.rotation), 1 === t || 0 === t)
                            for (l = r.firstMPT, s = 1 === t ? "e" : "b"; l;) {
                                if (i = l.t, i.type) {
                                    if (1 === i.type) {
                                        for (o = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) o += i["xn" + n] + i["xs" + (n + 1)];
                                        i[s] = o
                                    }
                                } else i[s] = i.s + i.xs0;
                                l = l._next
                            }
                    }, function (t, e, i, n, o) {
                        this.t = t, this.p = e, this.v = i, this.r = o, n && (n._prev = this, this._next = n)
                    }),
                    gt = (N._parseToProxy = function (t, e, i, n, o, s) {
                        var r, a, l, c, h, d = n,
                            u = {},
                            p = {},
                            f = i._transform,
                            m = D;
                        for (i._transform = null, D = e, n = h = i.parse(t, e, n, o), D = m, s && (i._transform = f, d && (d._prev = null, d._prev && (d._prev._next = null))); n && n !== d;) {
                            if (n.type <= 1 && (a = n.p, p[a] = n.s + n.c, u[a] = n.s, s || (c = new mt(n, "s", a, c, n.r), n.c = 0), 1 === n.type))
                                for (r = n.l; --r > 0;) l = "xn" + r, a = n.p + "_" + l, p[a] = n.data[l], u[a] = n[l], s || (c = new mt(n, l, a, c, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: u,
                            end: p,
                            firstMPT: c,
                            pt: h
                        }
                    }, N.CSSPropTween = function (t, e, n, o, r, a, l, c, h, d, u) {
                        this.t = t, this.p = e, this.s = n, this.c = o, this.n = l || e, t instanceof gt || s.push(this.n), this.r = c, this.type = a || 0, h && (this.pr = h, i = !0), this.b = void 0 === d ? n : d, this.e = void 0 === u ? n + o : u, r && (this._next = r, r._prev = this)
                    }),
                    vt = function (t, e, i, n, o, s) {
                        var r = new gt(t, e, i, n - i, o, (-1), s);
                        return r.b = i, r.e = r.xs0 = n, r
                    },
                    _t = r.parseComplex = function (t, e, i, n, o, s, a, l, c, d) {
                        i = i || s || "", a = new gt(t, e, 0, 0, a, d ? 2 : 1, null, (!1), l, i, n), n += "", o && ut.test(n + i) && (n = [i, n], r.colorStringFilter(n), i = n[0], n = n[1]);
                        var u, p, f, m, _, y, w, b, x, T, S, k, C, A = i.split(", ").join(",").split(" "),
                            P = n.split(", ").join(",").split(" "),
                            O = A.length,
                            E = h !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (A = A.join(" ").replace(I, ", ").split(" "), P = P.join(" ").replace(I, ", ").split(" "), O = A.length), O !== P.length && (A = (s || "").split(" "), O = A.length), a.plugin = c, a.setRatio = d, ut.lastIndex = 0, u = 0; O > u; u++)
                            if (m = A[u], _ = P[u], b = parseFloat(m), b || 0 === b) a.appendXtra("", b, st(_, b), _.replace(v, ""), E && -1 !== _.indexOf("px"), !0);
                            else if (o && ut.test(m)) k = _.indexOf(")") + 1, k = ")" + (k ? _.substr(k) : ""), C = -1 !== _.indexOf("hsl") && H, m = ht(m, C), _ = ht(_, C), x = m.length + _.length > 6, x && !H && 0 === _[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(P[u]).join("transparent")) : (H || (x = !1), C ? a.appendXtra(x ? "hsla(" : "hsl(", m[0], st(_[0], m[0]), ",", !1, !0).appendXtra("", m[1], st(_[1], m[1]), "%,", !1).appendXtra("", m[2], st(_[2], m[2]), x ? "%," : "%" + k, !1) : a.appendXtra(x ? "rgba(" : "rgb(", m[0], _[0] - m[0], ",", !0, !0).appendXtra("", m[1], _[1] - m[1], ",", !0).appendXtra("", m[2], _[2] - m[2], x ? "," : k, !0), x && (m = m.length < 4 ? 1 : m[3], a.appendXtra("", m, (_.length < 4 ? 1 : _[3]) - m, k, !1))), ut.lastIndex = 0;
                        else if (y = m.match(g)) {
                            if (w = _.match(v), !w || w.length !== y.length) return a;
                            for (f = 0, p = 0; p < y.length; p++) S = y[p], T = m.indexOf(S, f), a.appendXtra(m.substr(f, T - f), Number(S), st(w[p], S), "", E && "px" === m.substr(T + S.length, 2), 0 === p), f = T + S.length;
                            a["xs" + a.l] += m.substr(f)
                        } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + _ : _;
                        if (-1 !== n.indexOf("=") && a.data) {
                            for (k = a.xs0 + a.data.s, u = 1; u < a.l; u++) k += a["xs" + u] + a.data["xn" + u];
                            a.e = k + a["xs" + u]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    yt = 9;
                for (c = gt.prototype, c.l = c.pr = 0; --yt > 0;) c["xn" + yt] = 0, c["xs" + yt] = "";
                c.xs0 = "", c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null, c.appendXtra = function (t, e, i, n, o, s) {
                    var r = this,
                        a = r.l;
                    return r["xs" + a] += s && (a || r["xs" + a]) ? " " + t : t || "", i || 0 === a || r.plugin ? (r.l++, r.type = r.setRatio ? 2 : 1, r["xs" + r.l] = n || "", a > 0 ? (r.data["xn" + a] = e + i, r.rxp["xn" + a] = o, r["xn" + a] = e, r.plugin || (r.xfirst = new gt(r, "xn" + a, e, i, r.xfirst || r, 0, r.n, o, r.pr), r.xfirst.xs0 = 0), r) : (r.data = {
                        s: e + i
                    }, r.rxp = {}, r.s = e, r.c = i, r.r = o, r)) : (r["xs" + a] += e + (n || ""), r)
                };
                var wt = function (t, e) {
                        e = e || {}, this.p = e.prefix ? Q(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || pt(e.defaultValue, e.color, e.collapsible, e.multi),
                            e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    bt = N._registerComplexSpecialProp = function (t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, o, s = t.split(","),
                            r = e.defaultValue;
                        for (i = i || [r], n = 0; n < s.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || r, o = new wt(s[n], e)
                    },
                    xt = function (t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            bt(t, {
                                parser: function (t, i, n, o, s, r, c) {
                                    var h = a.com.greensock.plugins[e];
                                    return h ? (h._cssRegister(), l[n].parse(t, i, n, o, s, r, c)) : (Y("Error: " + e + " js file not loaded."), s)
                                }
                            })
                        }
                    };
                c = wt.prototype, c.parseComplex = function (t, e, i, n, o, s) {
                    var r, a, l, c, h, d, u = this.keyword;
                    if (this.multi && (I.test(i) || I.test(e) ? (a = e.replace(I, "|").split("|"), l = i.replace(I, "|").split("|")) : u && (a = [e], l = [i])), l) {
                        for (c = l.length > a.length ? l.length : a.length, r = 0; c > r; r++) e = a[r] = a[r] || this.dflt, i = l[r] = l[r] || this.dflt, u && (h = e.indexOf(u), d = i.indexOf(u), h !== d && (-1 === d ? a[r] = a[r].split(u).join("") : -1 === h && (a[r] += " " + u)));
                        e = a.join(", "), i = l.join(", ")
                    }
                    return _t(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, o, s)
                }, c.parse = function (t, e, i, n, s, r, a) {
                    return this.parseComplex(t.style, this.format(K(t, this.p, o, !1, this.dflt)), this.format(e), s, r)
                }, r.registerSpecialProp = function (t, e, i) {
                    bt(t, {
                        parser: function (t, n, o, s, r, a, l) {
                            var c = new gt(t, o, 0, 0, r, 2, o, (!1), i);
                            return c.plugin = a, c.setRatio = e(t, n, s._tween, o), c
                        },
                        priority: i
                    })
                }, r.useSVGTransformAttr = u || p;
                var Tt, St = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    kt = Q("transform"),
                    Ct = X + "transform",
                    At = Q("transformOrigin"),
                    Pt = null !== Q("perspective"),
                    Ot = N.Transform = function () {
                        this.perspective = parseFloat(r.defaultTransformPerspective) || 0, this.force3D = !(r.defaultForce3D === !1 || !Pt) && (r.defaultForce3D || "auto")
                    },
                    Et = window.SVGElement,
                    Mt = function (t, e, i) {
                        var n, o = F.createElementNS("http://www.w3.org/2000/svg", t),
                            s = /([a-z])([A-Z])/g;
                        for (n in i) o.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(o), o
                    },
                    It = F.documentElement,
                    Rt = function () {
                        var t, e, i, n = m || /Android/i.test(W) && !window.chrome;
                        return F.createElementNS && !n && (t = Mt("svg", It), e = Mt("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[At] = "50% 50%", e.style[kt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(p && Pt), It.removeChild(t)), n
                    }(),
                    zt = function (t, e, i, n, o, s) {
                        var a, l, c, h, d, u, p, f, m, g, v, _, y, w, b = t._gsTransform,
                            x = Bt(t, !0);
                        b && (y = b.xOrigin, w = b.yOrigin), (!n || (a = n.split(" ")).length < 2) && (p = t.getBBox(), e = ot(e).split(" "), a = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), i.xOrigin = h = parseFloat(a[0]), i.yOrigin = d = parseFloat(a[1]), n && x !== Ft && (u = x[0], p = x[1], f = x[2], m = x[3], g = x[4], v = x[5], _ = u * m - p * f, l = h * (m / _) + d * (-f / _) + (f * v - m * g) / _, c = h * (-p / _) + d * (u / _) - (u * v - p * g) / _, h = i.xOrigin = a[0] = l, d = i.yOrigin = a[1] = c), b && (s && (i.xOffset = b.xOffset, i.yOffset = b.yOffset, b = i), o || o !== !1 && r.defaultSmoothOrigin !== !1 ? (l = h - y, c = d - w, b.xOffset += l * x[0] + c * x[2] - l, b.yOffset += l * x[1] + c * x[3] - c) : b.xOffset = b.yOffset = 0), s || t.setAttribute("data-svg-origin", a.join(" "))
                    },
                    Lt = function (t) {
                        try {
                            return t.getBBox()
                        } catch (t) {}
                    },
                    Dt = function (t) {
                        return !!(Et && t.getBBox && t.getCTM && Lt(t) && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                    },
                    Ft = [1, 0, 0, 1, 0, 0],
                    Bt = function (t, e) {
                        var i, n, o, s, r, a, l = t._gsTransform || new Ot,
                            c = 1e5,
                            h = t.style;
                        if (kt ? n = K(t, Ct, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(E), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, i && kt && ((a = "none" === G(t).display) || !t.parentNode) && (a && (s = h.display, h.display = "block"), t.parentNode || (r = 1, It.appendChild(t)), n = K(t, Ct, null, !0), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, s ? h.display = s : a && Ht(h, "display"), r && It.removeChild(t)), (l.svg || t.getBBox && Dt(t)) && (i && -1 !== (h[kt] + "").indexOf("matrix") && (n = h[kt], i = 0), o = t.getAttribute("transform"), i && o && (-1 !== o.indexOf("matrix") ? (n = o, i = 0) : -1 !== o.indexOf("translate") && (n = "matrix(1,0,0,1," + o.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Ft;
                        for (o = (n || "").match(g) || [], yt = o.length; --yt > -1;) s = Number(o[yt]), o[yt] = (r = s - (s |= 0)) ? (r * c + (0 > r ? -.5 : .5) | 0) / c + s : s;
                        return e && o.length > 6 ? [o[0], o[1], o[4], o[5], o[12], o[13]] : o
                    },
                    jt = N.getTransform = function (t, i, n, o) {
                        if (t._gsTransform && n && !o) return t._gsTransform;
                        var s, a, l, c, h, d, u = n ? t._gsTransform || new Ot : new Ot,
                            p = u.scaleX < 0,
                            f = 2e-5,
                            m = 1e5,
                            g = Pt ? parseFloat(K(t, At, i, !1, "0 0 0").split(" ")[2]) || u.zOrigin || 0 : 0,
                            v = parseFloat(r.defaultTransformPerspective) || 0;
                        if (u.svg = !(!t.getBBox || !Dt(t)), u.svg && (zt(t, K(t, At, i, !1, "50% 50%") + "", u, t.getAttribute("data-svg-origin")), Tt = r.useSVGTransformAttr || Rt), s = Bt(t), s !== Ft) {
                            if (16 === s.length) {
                                var _, y, w, b, x, T = s[0],
                                    S = s[1],
                                    k = s[2],
                                    C = s[3],
                                    A = s[4],
                                    P = s[5],
                                    O = s[6],
                                    E = s[7],
                                    M = s[8],
                                    I = s[9],
                                    R = s[10],
                                    z = s[12],
                                    D = s[13],
                                    F = s[14],
                                    B = s[11],
                                    j = Math.atan2(O, R);
                                u.zOrigin && (F = -u.zOrigin, z = M * F - s[12], D = I * F - s[13], F = R * F + u.zOrigin - s[14]), u.rotationX = j * L, j && (b = Math.cos(-j), x = Math.sin(-j), _ = A * b + M * x, y = P * b + I * x, w = O * b + R * x, M = A * -x + M * b, I = P * -x + I * b, R = O * -x + R * b, B = E * -x + B * b, A = _, P = y, O = w), j = Math.atan2(-k, R), u.rotationY = j * L, j && (b = Math.cos(-j), x = Math.sin(-j), _ = T * b - M * x, y = S * b - I * x, w = k * b - R * x, I = S * x + I * b, R = k * x + R * b, B = C * x + B * b, T = _, S = y, k = w), j = Math.atan2(S, T), u.rotation = j * L, j && (b = Math.cos(-j), x = Math.sin(-j), T = T * b + A * x, y = S * b + P * x, P = S * -x + P * b, O = k * -x + O * b, S = y), u.rotationX && Math.abs(u.rotationX) + Math.abs(u.rotation) > 359.9 && (u.rotationX = u.rotation = 0, u.rotationY = 180 - u.rotationY), u.scaleX = (Math.sqrt(T * T + S * S) * m + .5 | 0) / m, u.scaleY = (Math.sqrt(P * P + I * I) * m + .5 | 0) / m, u.scaleZ = (Math.sqrt(O * O + R * R) * m + .5 | 0) / m, u.rotationX || u.rotationY ? u.skewX = 0 : (u.skewX = A || P ? Math.atan2(A, P) * L + u.rotation : u.skewX || 0, Math.abs(u.skewX) > 90 && Math.abs(u.skewX) < 270 && (p ? (u.scaleX *= -1, u.skewX += u.rotation <= 0 ? 180 : -180, u.rotation += u.rotation <= 0 ? 180 : -180) : (u.scaleY *= -1, u.skewX += u.skewX <= 0 ? 180 : -180))), u.perspective = B ? 1 / (0 > B ? -B : B) : 0, u.x = z, u.y = D, u.z = F, u.svg && (u.x -= u.xOrigin - (u.xOrigin * T - u.yOrigin * A), u.y -= u.yOrigin - (u.yOrigin * S - u.xOrigin * P))
                            } else if (!Pt || o || !s.length || u.x !== s[4] || u.y !== s[5] || !u.rotationX && !u.rotationY) {
                                var q = s.length >= 6,
                                    N = q ? s[0] : 1,
                                    W = s[1] || 0,
                                    H = s[2] || 0,
                                    $ = q ? s[3] : 1;
                                u.x = s[4] || 0, u.y = s[5] || 0, l = Math.sqrt(N * N + W * W), c = Math.sqrt($ * $ + H * H), h = N || W ? Math.atan2(W, N) * L : u.rotation || 0, d = H || $ ? Math.atan2(H, $) * L + h : u.skewX || 0, Math.abs(d) > 90 && Math.abs(d) < 270 && (p ? (l *= -1, d += 0 >= h ? 180 : -180, h += 0 >= h ? 180 : -180) : (c *= -1, d += 0 >= d ? 180 : -180)), u.scaleX = l, u.scaleY = c, u.rotation = h, u.skewX = d, Pt && (u.rotationX = u.rotationY = u.z = 0, u.perspective = v, u.scaleZ = 1), u.svg && (u.x -= u.xOrigin - (u.xOrigin * N + u.yOrigin * H), u.y -= u.yOrigin - (u.xOrigin * W + u.yOrigin * $))
                            }
                            u.zOrigin = g;
                            for (a in u) u[a] < f && u[a] > -f && (u[a] = 0)
                        }
                        return n && (t._gsTransform = u, u.svg && (Tt && t.style[kt] ? e.delayedCall(.001, function () {
                            Ht(t.style, kt)
                        }) : !Tt && t.getAttribute("transform") && e.delayedCall(.001, function () {
                            t.removeAttribute("transform")
                        }))), u
                    },
                    qt = function (t) {
                        var e, i, n = this.data,
                            o = -n.rotation * z,
                            s = o + n.skewX * z,
                            r = 1e5,
                            a = (Math.cos(o) * n.scaleX * r | 0) / r,
                            l = (Math.sin(o) * n.scaleX * r | 0) / r,
                            c = (Math.sin(s) * -n.scaleY * r | 0) / r,
                            h = (Math.cos(s) * n.scaleY * r | 0) / r,
                            d = this.t.style,
                            u = this.t.currentStyle;
                        if (u) {
                            i = l, l = -c, c = -i, e = u.filter, d.filter = "";
                            var p, f, g = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                _ = "absolute" !== u.position,
                                y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + c + ", M22=" + h,
                                x = n.x + g * n.xPercent / 100,
                                T = n.y + v * n.yPercent / 100;
                            if (null != n.ox && (p = (n.oxp ? g * n.ox * .01 : n.ox) - g / 2, f = (n.oyp ? v * n.oy * .01 : n.oy) - v / 2, x += p - (p * a + f * l), T += f - (p * c + f * h)), _ ? (p = g / 2, f = v / 2, y += ", Dx=" + (p - (p * a + f * l) + x) + ", Dy=" + (f - (p * c + f * h) + T) + ")") : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? d.filter = e.replace(M, y) : d.filter = y + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === c && 1 === h && (_ && -1 === y.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && d.removeAttribute("filter")), !_) {
                                var S, k, C, A = 8 > m ? 1 : -1;
                                for (p = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * v)) / 2 + x), n.ieOffsetY = Math.round((v - ((0 > h ? -h : h) * v + (0 > c ? -c : c) * g)) / 2 + T), yt = 0; 4 > yt; yt++) k = it[yt], S = u[k], i = -1 !== S.indexOf("px") ? parseFloat(S) : V(this.t, k, parseFloat(S), S.replace(w, "")) || 0, C = i !== n[k] ? 2 > yt ? -n.ieOffsetX : -n.ieOffsetY : 2 > yt ? p - n.ieOffsetX : f - n.ieOffsetY, d[k] = (n[k] = Math.round(i - C * (0 === yt || 2 === yt ? 1 : A))) + "px"
                            }
                        }
                    },
                    Nt = N.set3DTransformRatio = N.setTransformRatio = function (t) {
                        var e, i, n, o, s, r, a, l, c, h, d, u, f, m, g, v, _, y, w, b, x, T, S, k = this.data,
                            C = this.t.style,
                            A = k.rotation,
                            P = k.rotationX,
                            O = k.rotationY,
                            E = k.scaleX,
                            M = k.scaleY,
                            I = k.scaleZ,
                            R = k.x,
                            L = k.y,
                            D = k.z,
                            F = k.svg,
                            B = k.perspective,
                            j = k.force3D;
                        if (((1 === t || 0 === t) && "auto" === j && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !j) && !D && !B && !O && !P && 1 === I || Tt && F || !Pt) return void(A || k.skewX || F ? (A *= z, T = k.skewX * z, S = 1e5, e = Math.cos(A) * E, o = Math.sin(A) * E, i = Math.sin(A - T) * -M, s = Math.cos(A - T) * M, T && "simple" === k.skewType && (_ = Math.tan(T), _ = Math.sqrt(1 + _ * _), i *= _, s *= _, k.skewY && (e *= _, o *= _)), F && (R += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, L += k.yOrigin - (k.xOrigin * o + k.yOrigin * s) + k.yOffset, Tt && (k.xPercent || k.yPercent) && (m = this.t.getBBox(), R += .01 * k.xPercent * m.width, L += .01 * k.yPercent * m.height), m = 1e-6, m > R && R > -m && (R = 0), m > L && L > -m && (L = 0)), w = (e * S | 0) / S + "," + (o * S | 0) / S + "," + (i * S | 0) / S + "," + (s * S | 0) / S + "," + R + "," + L + ")", F && Tt ? this.t.setAttribute("transform", "matrix(" + w) : C[kt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + w) : C[kt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + M + "," + R + "," + L + ")");
                        if (p && (m = 1e-4, m > E && E > -m && (E = I = 2e-5), m > M && M > -m && (M = I = 2e-5), !B || k.z || k.rotationX || k.rotationY || (B = 0)), A || k.skewX) A *= z, g = e = Math.cos(A), v = o = Math.sin(A), k.skewX && (A -= k.skewX * z, g = Math.cos(A), v = Math.sin(A), "simple" === k.skewType && (_ = Math.tan(k.skewX * z), _ = Math.sqrt(1 + _ * _), g *= _, v *= _, k.skewY && (e *= _, o *= _))), i = -v, s = g;
                        else {
                            if (!(O || P || 1 !== I || B || F)) return void(C[kt] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + R + "px," + L + "px," + D + "px)" + (1 !== E || 1 !== M ? " scale(" + E + "," + M + ")" : ""));
                            e = s = 1, i = o = 0
                        }
                        c = 1, n = r = a = l = h = d = 0, u = B ? -1 / B : 0, f = k.zOrigin, m = 1e-6, b = ",", x = "0", A = O * z, A && (g = Math.cos(A), v = Math.sin(A), a = -v, h = u * -v, n = e * v, r = o * v, c = g, u *= g, e *= g, o *= g), A = P * z, A && (g = Math.cos(A), v = Math.sin(A), _ = i * g + n * v, y = s * g + r * v, l = c * v, d = u * v, n = i * -v + n * g, r = s * -v + r * g, c *= g, u *= g, i = _, s = y), 1 !== I && (n *= I, r *= I, c *= I, u *= I), 1 !== M && (i *= M, s *= M, l *= M, d *= M), 1 !== E && (e *= E, o *= E, a *= E, h *= E), (f || F) && (f && (R += n * -f, L += r * -f, D += c * -f + f), F && (R += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset, L += k.yOrigin - (k.xOrigin * o + k.yOrigin * s) + k.yOffset), m > R && R > -m && (R = x), m > L && L > -m && (L = x), m > D && D > -m && (D = 0)), w = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(", w += (m > e && e > -m ? x : e) + b + (m > o && o > -m ? x : o) + b + (m > a && a > -m ? x : a), w += b + (m > h && h > -m ? x : h) + b + (m > i && i > -m ? x : i) + b + (m > s && s > -m ? x : s), P || O || 1 !== I ? (w += b + (m > l && l > -m ? x : l) + b + (m > d && d > -m ? x : d) + b + (m > n && n > -m ? x : n), w += b + (m > r && r > -m ? x : r) + b + (m > c && c > -m ? x : c) + b + (m > u && u > -m ? x : u) + b) : w += ",0,0,0,0,1,0,", w += R + b + L + b + D + b + (B ? 1 + -D / B : 1) + ")", C[kt] = w
                    };
                c = Ot.prototype, c.x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0, c.scaleX = c.scaleY = c.scaleZ = 1, bt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function (t, e, i, n, s, a, l) {
                        if (n._lastParsedTransform === l) return s;
                        n._lastParsedTransform = l;
                        var c, h, d, u, p, f, m, g, v, _ = t._gsTransform,
                            y = t.style,
                            w = 1e-6,
                            b = St.length,
                            x = l,
                            T = {},
                            S = "transformOrigin",
                            k = jt(t, o, !0, l.parseTransform);
                        if (n._transform = k, "string" == typeof x.transform && kt) h = j.style, h[kt] = x.transform, h.display = "block", h.position = "absolute", F.body.appendChild(j), c = jt(j, null, !1), k.svg && (m = k.xOrigin, g = k.yOrigin, c.x -= k.xOffset, c.y -= k.yOffset, (x.transformOrigin || x.svgOrigin) && (d = {}, zt(t, ot(x.transformOrigin), d, x.svgOrigin, x.smoothOrigin, !0), m = d.xOrigin, g = d.yOrigin, c.x -= d.xOffset - k.xOffset, c.y -= d.yOffset - k.yOffset), (m || g) && (v = Bt(j, !0), c.x -= m - (m * v[0] + g * v[2]), c.y -= g - (m * v[1] + g * v[3]))), F.body.removeChild(j), c.perspective || (c.perspective = k.perspective), null != x.xPercent && (c.xPercent = rt(x.xPercent, k.xPercent)), null != x.yPercent && (c.yPercent = rt(x.yPercent, k.yPercent));
                        else if ("object" == typeof x) {
                            if (c = {
                                    scaleX: rt(null != x.scaleX ? x.scaleX : x.scale, k.scaleX),
                                    scaleY: rt(null != x.scaleY ? x.scaleY : x.scale, k.scaleY),
                                    scaleZ: rt(x.scaleZ, k.scaleZ),
                                    x: rt(x.x, k.x),
                                    y: rt(x.y, k.y),
                                    z: rt(x.z, k.z),
                                    xPercent: rt(x.xPercent, k.xPercent),
                                    yPercent: rt(x.yPercent, k.yPercent),
                                    perspective: rt(x.transformPerspective, k.perspective)
                                }, f = x.directionalRotation, null != f)
                                if ("object" == typeof f)
                                    for (h in f) x[h] = f[h];
                                else x.rotation = f;
                            "string" == typeof x.x && -1 !== x.x.indexOf("%") && (c.x = 0, c.xPercent = rt(x.x, k.xPercent)), "string" == typeof x.y && -1 !== x.y.indexOf("%") && (c.y = 0, c.yPercent = rt(x.y, k.yPercent)), c.rotation = at("rotation" in x ? x.rotation : "shortRotation" in x ? x.shortRotation + "_short" : "rotationZ" in x ? x.rotationZ : k.rotation - k.skewY, k.rotation - k.skewY, "rotation", T), Pt && (c.rotationX = at("rotationX" in x ? x.rotationX : "shortRotationX" in x ? x.shortRotationX + "_short" : k.rotationX || 0, k.rotationX, "rotationX", T), c.rotationY = at("rotationY" in x ? x.rotationY : "shortRotationY" in x ? x.shortRotationY + "_short" : k.rotationY || 0, k.rotationY, "rotationY", T)), c.skewX = at(x.skewX, k.skewX - k.skewY), (c.skewY = at(x.skewY, k.skewY)) && (c.skewX += c.skewY, c.rotation += c.skewY)
                        }
                        for (Pt && null != x.force3D && (k.force3D = x.force3D, p = !0), k.skewType = x.skewType || k.skewType || r.defaultSkewType, u = k.force3D || k.z || k.rotationX || k.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, u || null == x.scale || (c.scaleZ = 1); --b > -1;) i = St[b], d = c[i] - k[i], (d > w || -w > d || null != x[i] || null != D[i]) && (p = !0, s = new gt(k, i, k[i], d, s), i in T && (s.e = T[i]), s.xs0 = 0, s.plugin = a, n._overwriteProps.push(s.n));
                        return d = x.transformOrigin, k.svg && (d || x.svgOrigin) && (m = k.xOffset, g = k.yOffset, zt(t, ot(d), c, x.svgOrigin, x.smoothOrigin), s = vt(k, "xOrigin", (_ ? k : c).xOrigin, c.xOrigin, s, S), s = vt(k, "yOrigin", (_ ? k : c).yOrigin, c.yOrigin, s, S), (m !== k.xOffset || g !== k.yOffset) && (s = vt(k, "xOffset", _ ? m : k.xOffset, k.xOffset, s, S), s = vt(k, "yOffset", _ ? g : k.yOffset, k.yOffset, s, S)), d = Tt ? null : "0px 0px"), (d || Pt && u && k.zOrigin) && (kt ? (p = !0, i = At, d = (d || K(t, i, o, !1, "50% 50%")) + "", s = new gt(y, i, 0, 0, s, (-1), S), s.b = y[i], s.plugin = a, Pt ? (h = k.zOrigin, d = d.split(" "), k.zOrigin = (d.length > 2 && (0 === h || "0px" !== d[2]) ? parseFloat(d[2]) : h) || 0, s.xs0 = s.e = d[0] + " " + (d[1] || "50%") + " 0px", s = new gt(k, "zOrigin", 0, 0, s, (-1), s.n), s.b = h, s.xs0 = s.e = k.zOrigin) : s.xs0 = s.e = d) : ot(d + "", k)), p && (n._transformType = k.svg && Tt || !u && 3 !== this._transformType ? 2 : 3), s
                    },
                    prefix: !0
                }), bt("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), bt("borderRadius", {
                    defaultValue: "0px",
                    parser: function (t, e, i, s, r, a) {
                        e = this.format(e);
                        var l, c, h, d, u, p, f, m, g, v, _, y, w, b, x, T, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            k = t.style;
                        for (g = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), c = 0; c < S.length; c++) this.p.indexOf("border") && (S[c] = Q(S[c])), u = d = K(t, S[c], o, !1, "0px"), -1 !== u.indexOf(" ") && (d = u.split(" "), u = d[0], d = d[1]), p = h = l[c], f = parseFloat(u), y = u.substr((f + "").length), w = "=" === p.charAt(1), w ? (m = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), m *= parseFloat(p), _ = p.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(p), _ = p.substr((m + "").length)), "" === _ && (_ = n[i] || y), _ !== y && (b = V(t, "borderLeft", f, y), x = V(t, "borderTop", f, y), "%" === _ ? (u = b / g * 100 + "%", d = x / v * 100 + "%") : "em" === _ ? (T = V(t, "borderLeft", 1, "em"), u = b / T + "em", d = x / T + "em") : (u = b + "px", d = x + "px"), w && (p = parseFloat(u) + m + _, h = parseFloat(d) + m + _)), r = _t(k, S[c], u + " " + d, p + " " + h, !1, "0px", r);
                        return r
                    },
                    prefix: !0,
                    formatter: pt("0px 0px 0px 0px", !1, !0)
                }), bt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function (t, e, i, n, s, r) {
                        return _t(t.style, i, this.format(K(t, i, o, !1, "0px 0px")), this.format(e), !1, "0px", s)
                    },
                    prefix: !0,
                    formatter: pt("0px 0px", !1, !0)
                }), bt("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function (t, e, i, n, s, r) {
                        var a, l, c, h, d, u, p = "background-position",
                            f = o || G(t, null),
                            g = this.format((f ? m ? f.getPropertyValue(p + "-x") + " " + f.getPropertyValue(p + "-y") : f.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            v = this.format(e);
                        if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && (u = K(t, "backgroundImage").replace(A, ""), u && "none" !== u)) {
                            for (a = g.split(" "), l = v.split(" "), q.setAttribute("src", u), c = 2; --c > -1;) g = a[c], h = -1 !== g.indexOf("%"), h !== (-1 !== l[c].indexOf("%")) && (d = 0 === c ? t.offsetWidth - q.width : t.offsetHeight - q.height, a[c] = h ? parseFloat(g) / 100 * d + "px" : parseFloat(g) / d * 100 + "%");
                            g = a.join(" ")
                        }
                        return this.parseComplex(t.style, g, v, s, r)
                    },
                    formatter: ot
                }), bt("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: ot
                }), bt("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), bt("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), bt("transformStyle", {
                    prefix: !0
                }), bt("backfaceVisibility", {
                    prefix: !0
                }), bt("userSelect", {
                    prefix: !0
                }), bt("margin", {
                    parser: ft("marginTop,marginRight,marginBottom,marginLeft")
                }), bt("padding", {
                    parser: ft("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), bt("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function (t, e, i, n, s, r) {
                        var a, l, c;
                        return 9 > m ? (l = t.currentStyle, c = 8 > m ? " " : ",", a = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")", e = this.format(e).split(",").join(c)) : (a = this.format(K(t, this.p, o, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, s, r)
                    }
                }), bt("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), bt("autoRound,strictUnits", {
                    parser: function (t, e, i, n, o) {
                        return o
                    }
                }), bt("border", {
                    defaultValue: "0px solid #000",
                    parser: function (t, e, i, n, s, r) {
                        var a = K(t, "borderTopWidth", o, !1, "0px"),
                            l = this.format(e).split(" "),
                            c = l[0].replace(w, "");
                        return "px" !== c && (a = parseFloat(a) / V(t, "borderTopWidth", 1, c) + c), this.parseComplex(t.style, this.format(a + " " + K(t, "borderTopStyle", o, !1, "solid") + " " + K(t, "borderTopColor", o, !1, "#000")), l.join(" "), s, r)
                    },
                    color: !0,
                    formatter: function (t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ut) || ["#000"])[0]
                    }
                }), bt("borderWidth", {
                    parser: ft("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), bt("float,cssFloat,styleFloat", {
                    parser: function (t, e, i, n, o, s) {
                        var r = t.style,
                            a = "cssFloat" in r ? "cssFloat" : "styleFloat";
                        return new gt(r, a, 0, 0, o, (-1), i, (!1), 0, r[a], e)
                    }
                });
                var Wt = function (t) {
                    var e, i = this.t,
                        n = i.filter || K(this.data, "filter") || "",
                        o = this.s + this.c * t | 0;
                    100 === o && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !K(this.data, "filter")) : (i.filter = n.replace(T, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + o + ")"), -1 === n.indexOf("pacity") ? 0 === o && this.xn1 || (i.filter = n + " alpha(opacity=" + o + ")") : i.filter = n.replace(b, "opacity=" + o))
                };
                bt("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function (t, e, i, n, s, r) {
                        var a = parseFloat(K(t, "opacity", o, !1, "1")),
                            l = t.style,
                            c = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), c && 1 === a && "hidden" === K(t, "visibility", o) && 0 !== e && (a = 0), H ? s = new gt(l, "opacity", a, e - a, s) : (s = new gt(l, "opacity", 100 * a, 100 * (e - a), s), s.xn1 = c ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = r, s.setRatio = Wt), c && (s = new gt(l, "visibility", 0, 0, s, (-1), null, (!1), 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                    }
                });
                var Ht = function (t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(k, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    $t = function (t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ht(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                bt("className", {
                    parser: function (t, e, n, s, r, a, l) {
                        var c, h, d, u, p, f = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (r = s._classNamePT = new gt(t, n, 0, 0, r, 2), r.setRatio = $t, r.pr = -11, i = !0, r.b = f, h = J(t, o), d = t._gsClassPT) {
                            for (u = {}, p = d.data; p;) u[p.p] = 1, p = p._next;
                            d.setRatio(1)
                        }
                        return t._gsClassPT = r, r.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", r.e), c = tt(t, h, J(t), l, u), t.setAttribute("class", f), r.data = c.firstMPT, t.style.cssText = m, r = r.xfirst = s.parse(t, c.difs, r, a)
                    }
                });
                var Yt = function (t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, o, s, r = this.t.style,
                            a = l.transform.parse;
                        if ("all" === this.e) r.cssText = "", o = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === a ? o = !0 : i = "transformOrigin" === i ? At : l[i].p), Ht(r, i);
                        o && (Ht(r, kt), s = this.t._gsTransform, s && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (bt("clearProps", {
                        parser: function (t, e, n, o, s) {
                            return s = new gt(t, n, 0, 0, s, 2), s.setRatio = Yt, s.e = e, s.pr = -10, s.data = o._tween, i = !0, s
                        }
                    }), c = "bezier,throwProps,physicsProps,physics2D".split(","), yt = c.length; yt--;) xt(c[yt]);
                c = r.prototype, c._firstPT = c._lastParsedTransform = c._transform = null, c._onInitTween = function (t, e, a) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = a, this._vars = e, h = e.autoRound, i = !1, n = e.suffixMap || r.suffixMap, o = G(t, ""), s = this._overwriteProps;
                    var c, p, m, g, v, _, y, w, b, T = t.style;
                    if (d && "" === T.zIndex && (c = K(t, "zIndex", o), ("auto" === c || "" === c) && this._addLazySet(T, "zIndex", 0)), "string" == typeof e && (g = T.cssText, c = J(t, o), T.cssText = g + ";" + e, c = tt(t, c, J(t)).difs, !H && x.test(e) && (c.opacity = parseFloat(RegExp.$1)), e = c, T.cssText = g), e.className ? this._firstPT = p = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = p = this.parse(t, e, null), this._transformType) {
                        for (b = 3 === this._transformType, kt ? u && (d = !0, "" === T.zIndex && (y = K(t, "zIndex", o), ("auto" === y || "" === y) && this._addLazySet(T, "zIndex", 0)), f && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (b ? "visible" : "hidden"))) : T.zoom = 1, m = p; m && m._next;) m = m._next;
                        w = new gt(t, "transform", 0, 0, null, 2), this._linkCSSP(w, null, m), w.setRatio = kt ? Nt : qt, w.data = this._transform || jt(t, o, !0), w.tween = a, w.pr = -1, s.pop()
                    }
                    if (i) {
                        for (; p;) {
                            for (_ = p._next, m = g; m && m.pr > p.pr;) m = m._next;
                            (p._prev = m ? m._prev : v) ? p._prev._next = p: g = p, (p._next = m) ? m._prev = p : v = p, p = _
                        }
                        this._firstPT = g
                    }
                    return !0
                }, c.parse = function (t, e, i, s) {
                    var r, a, c, d, u, p, f, m, g, v, _ = t.style;
                    for (r in e) p = e[r], a = l[r], a ? i = a.parse(t, p, r, this, i, s, e) : (u = K(t, r, o) + "", g = "string" == typeof p, "color" === r || "fill" === r || "stroke" === r || -1 !== r.indexOf("Color") || g && S.test(p) ? (g || (p = ht(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = _t(_, r, u, p, !0, "transparent", i, 0, s)) : g && R.test(p) ? i = _t(_, r, u, p, !0, null, i, 0, s) : (c = parseFloat(u), f = c || 0 === c ? u.substr((c + "").length) : "", ("" === u || "auto" === u) && ("width" === r || "height" === r ? (c = nt(t, r, o), f = "px") : "left" === r || "top" === r ? (c = Z(t, r, o), f = "px") : (c = "opacity" !== r ? 0 : 1, f = "")), v = g && "=" === p.charAt(1), v ? (d = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), d *= parseFloat(p), m = p.replace(w, "")) : (d = parseFloat(p), m = g ? p.replace(w, "") : ""), "" === m && (m = r in n ? n[r] : f), p = d || 0 === d ? (v ? d + c : d) + m : e[r], f !== m && "" !== m && (d || 0 === d) && c && (c = V(t, r, c, f), "%" === m ? (c /= V(t, r, 100, "%") / 100, e.strictUnits !== !0 && (u = c + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? c /= V(t, r, 1, m) : "px" !== m && (d = V(t, r, d, m), m = "px"), v && (d || 0 === d) && (p = d + c + m)), v && (d += c), !c && 0 !== c || !d && 0 !== d ? void 0 !== _[r] && (p || p + "" != "NaN" && null != p) ? (i = new gt(_, r, d || c || 0, 0, i, (-1), r, (!1), 0, u, p), i.xs0 = "none" !== p || "display" !== r && -1 === r.indexOf("Style") ? p : u) : Y("invalid " + r + " tween value: " + e[r]) : (i = new gt(_, r, c, d - c, i, 0, r, h !== !1 && ("px" === m || "zIndex" === r), 0, u, p), i.xs0 = m))), s && i && !i.plugin && (i.plugin = s);
                    return i
                }, c.setRatio = function (t) {
                    var e, i, n, o = this._firstPT,
                        s = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; o;) {
                                if (e = o.c * t + o.s, o.r ? e = Math.round(e) : s > e && e > -s && (e = 0), o.type)
                                    if (1 === o.type)
                                        if (n = o.l, 2 === n) o.t[o.p] = o.xs0 + e + o.xs1 + o.xn1 + o.xs2;
                                        else if (3 === n) o.t[o.p] = o.xs0 + e + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3;
                                else if (4 === n) o.t[o.p] = o.xs0 + e + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3 + o.xn3 + o.xs4;
                                else if (5 === n) o.t[o.p] = o.xs0 + e + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3 + o.xn3 + o.xs4 + o.xn4 + o.xs5;
                                else {
                                    for (i = o.xs0 + e + o.xs1, n = 1; n < o.l; n++) i += o["xn" + n] + o["xs" + (n + 1)];
                                    o.t[o.p] = i
                                } else -1 === o.type ? o.t[o.p] = o.xs0 : o.setRatio && o.setRatio(t);
                                else o.t[o.p] = e + o.xs0;
                                o = o._next
                            } else
                                for (; o;) 2 !== o.type ? o.t[o.p] = o.b : o.setRatio(t), o = o._next;
                        else
                            for (; o;) {
                                if (2 !== o.type)
                                    if (o.r && -1 !== o.type)
                                        if (e = Math.round(o.s + o.c), o.type) {
                                            if (1 === o.type) {
                                                for (n = o.l, i = o.xs0 + e + o.xs1, n = 1; n < o.l; n++) i += o["xn" + n] + o["xs" + (n + 1)];
                                                o.t[o.p] = i
                                            }
                                        } else o.t[o.p] = e + o.xs0;
                                else o.t[o.p] = o.e;
                                else o.setRatio(t);
                                o = o._next
                            }
                }, c._enableTransforms = function (t) {
                    this._transform = this._transform || jt(this._target, o, !0), this._transformType = this._transform.svg && Tt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Xt = function (t) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                c._addLazySet = function (t, e, i) {
                    var n = this._firstPT = new gt(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Xt, n.data = this
                }, c._linkCSSP = function (t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, c._kill = function (e) {
                    var i, n, o, s = e;
                    if (e.autoAlpha || e.alpha) {
                        s = {};
                        for (n in e) s[n] = e[n];
                        s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (o = i.xfirst, o && o._prev ? this._linkCSSP(o._prev, i._next, o._prev._prev) : o === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, o._prev), this._classNamePT = null), t.prototype._kill.call(this, s)
                };
                var Ut = function (t, e, i) {
                    var n, o, s, r;
                    if (t.slice)
                        for (o = t.length; --o > -1;) Ut(t[o], e, i);
                    else
                        for (n = t.childNodes, o = n.length; --o > -1;) s = n[o], r = s.type, s.style && (e.push(J(s)), i && i.push(s)), 1 !== r && 9 !== r && 11 !== r || !s.childNodes.length || Ut(s, e, i)
                };
                return r.cascadeTo = function (t, i, n) {
                    var o, s, r, a, l = e.to(t, i, n),
                        c = [l],
                        h = [],
                        d = [],
                        u = [],
                        p = e._internals.reservedProps;
                    for (t = l._targets || l.target, Ut(t, h, u), l.render(i, !0, !0), Ut(t, d), l.render(0, !0, !0), l._enabled(!0), o = u.length; --o > -1;)
                        if (s = tt(u[o], h[o], d[o]), s.firstMPT) {
                            s = s.difs;
                            for (r in n) p[r] && (s[r] = n[r]);
                            a = {};
                            for (r in s) a[r] = h[o][r];
                            c.push(e.fromTo(u[o], i, a, s))
                        }
                    return c
                }, t.activate([r]), r
            }, !0),
            function () {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.5",
                        priority: -1,
                        API: 2,
                        init: function (t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = function (t) {
                        for (; t;) t.f || t.blob || (t.r = 1), t = t._next
                    },
                    i = t.prototype;
                i._onInitAllProps = function () {
                    for (var t, i, n, o = this._tween, s = o.vars.roundProps.join ? o.vars.roundProps : o.vars.roundProps.split(","), r = s.length, a = {}, l = o._propLookup.roundProps; --r > -1;) a[s[r]] = 1;
                    for (r = s.length; --r > -1;)
                        for (t = s[r], i = o._firstPT; i;) n = i._next, i.pg ? i.t._roundProps(a, !0) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : o._firstPT === i && (o._firstPT = n), i._next = i._prev = null, o._propLookup[t] = l)), i = n;
                    return !1
                }, i._add = function (t, e, i, n) {
                    this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
                }
            }(),
            function () {
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.5.0",
                    init: function (t, e, i) {
                        var n;
                        if ("function" != typeof t.setAttribute) return !1;
                        for (n in e) this._addTween(t, "setAttribute", t.getAttribute(n) + "", e[n] + "", n, !1, n), this._overwriteProps.push(n);
                        return !0
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function (t, e, i) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var n, o, s, r, a, l, c = e.useRadians === !0 ? 2 * Math.PI : 360,
                        h = 1e-6;
                    for (n in e) "useRadians" !== n && (l = (e[n] + "").split("_"), o = l[0], s = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), r = this.finals[n] = "string" == typeof o && "=" === o.charAt(1) ? s + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0, a = r - s, l.length && (o = l.join("_"), -1 !== o.indexOf("short") && (a %= c, a !== a % (c / 2) && (a = 0 > a ? a + c : a - c)), -1 !== o.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * c) % c - (a / c | 0) * c : -1 !== o.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * c) % c - (a / c | 0) * c)), (a > h || -h > a) && (this._addTween(t, n, s, s + a, n), this._overwriteProps.push(n)));
                    return !0
                },
                set: function (t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) {
                var e, i, n, o = _gsScope.GreenSockGlobals || _gsScope,
                    s = o.com.greensock,
                    r = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = s._class,
                    c = function (e, i) {
                        var n = l("easing." + e, function () {}, !0),
                            o = n.prototype = new t;
                        return o.constructor = n, o.getRatio = i, n
                    },
                    h = t.register || function () {},
                    d = function (t, e, i, n, o) {
                        var s = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return h(s, t), s
                    },
                    u = function (t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    p = function (e, i) {
                        var n = l("easing." + e, function (t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            o = n.prototype = new t;
                        return o.constructor = n, o.getRatio = i, o.config = function (t) {
                            return new n(t)
                        }, n
                    },
                    f = d("Back", p("BackOut", function (t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), p("BackIn", function (t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), p("BackInOut", function (t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function (t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    g = m.prototype = new t;
                return g.constructor = m, g.getRatio = function (t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), g.config = m.config = function (t, e, i) {
                    return new m(t, e, i)
                }, e = l("easing.SteppedEase", function (t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function (t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, g.config = e.config = function (t) {
                    return new e(t)
                }, i = l("easing.RoughEase", function (e) {
                    e = e || {};
                    for (var i, n, o, s, r, a, l = e.taper || "none", c = [], h = 0, d = 0 | (e.points || 20), p = d, f = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = f ? Math.random() : 1 / d * p, n = g ? g.getRatio(i) : i, "none" === l ? o = v : "out" === l ? (s = 1 - i, o = s * s * v) : "in" === l ? o = i * i * v : .5 > i ? (s = 2 * i, o = s * s * .5 * v) : (s = 2 * (1 - i), o = s * s * .5 * v), f ? n += Math.random() * o - .5 * o : p % 2 ? n += .5 * o : n -= .5 * o, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), c[h++] = {
                        x: i,
                        y: n
                    };
                    for (c.sort(function (t, e) {
                            return t.x - e.x
                        }), a = new u(1, 1, null), p = d; --p > -1;) r = c[p], a = new u(r.x, r.y, a);
                    this._prev = new u(0, 0, 0 !== a.t ? a : a.next)
                }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function (t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, g.config = function (t) {
                    return new i(t)
                }, i.ease = new i, d("Bounce", c("BounceOut", function (t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), c("BounceIn", function (t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), c("BounceInOut", function (t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), d("Circ", c("CircOut", function (t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), c("CircIn", function (t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), c("CircInOut", function (t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function (e, i, n) {
                    var o = l("easing." + e, function (t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / r * (Math.asin(1 / this._p1) || 0),
                                this._p2 = r / this._p2
                        }, !0),
                        s = o.prototype = new t;
                    return s.constructor = o, s.getRatio = i, s.config = function (t, e) {
                        return new o(t, e)
                    }, o
                }, d("Elastic", n("ElasticOut", function (t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), n("ElasticIn", function (t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), n("ElasticInOut", function (t) {
                    return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), d("Expo", c("ExpoOut", function (t) {
                    return 1 - Math.pow(2, -10 * t)
                }), c("ExpoIn", function (t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), c("ExpoInOut", function (t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), d("Sine", c("SineOut", function (t) {
                    return Math.sin(t * a)
                }), c("SineIn", function (t) {
                    return -Math.cos(t * a) + 1
                }), c("SineInOut", function (t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function (e) {
                        return t.map[e]
                    }
                }, !0), h(o.SlowMo, "SlowMo", "ease,"), h(i, "RoughEase", "ease,"), h(e, "SteppedEase", "ease,"), f
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function (t, e) {
        "use strict";
        var i = {},
            n = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!n.TweenLite) {
            var o, s, r, a, l, c = function (t) {
                    var e, i = t.split("."),
                        o = n;
                    for (e = 0; e < i.length; e++) o[i[e]] = o = o[i[e]] || {};
                    return o
                },
                h = c("com.greensock"),
                d = 1e-10,
                u = function (t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                p = function () {},
                f = function () {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function (i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                m = {},
                g = function (o, s, r, a) {
                    this.sc = m[o] ? m[o].sc : [], m[o] = this, this.gsClass = null, this.func = r;
                    var l = [];
                    this.check = function (h) {
                        for (var d, u, p, f, v, _ = s.length, y = _; --_ > -1;)(d = m[s[_]] || new g(s[_], [])).gsClass ? (l[_] = d.gsClass, y--) : h && d.sc.push(this);
                        if (0 === y && r) {
                            if (u = ("com.greensock." + o).split("."), p = u.pop(), f = c(u.join("."))[p] = this.gsClass = r.apply(r, l), a)
                                if (n[p] = f, v = "undefined" != typeof module && module.exports, !v && "function" == typeof define && define.amd) define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + o.split(".").pop(), [], function () {
                                    return f
                                });
                                else if (v)
                                if (o === e) {
                                    module.exports = i[e] = f;
                                    for (_ in i) f[_] = i[_]
                                } else i[e] && (i[e][p] = f);
                            for (_ = 0; _ < this.sc.length; _++) this.sc[_].check()
                        }
                    }, this.check(!0)
                },
                v = t._gsDefine = function (t, e, i, n) {
                    return new g(t, e, i, n)
                },
                _ = h._class = function (t, e, i) {
                    return e = e || function () {}, v(t, [], function () {
                        return e
                    }, i), e
                };
            v.globals = n;
            var y = [0, 0, 1, 1],
                w = [],
                b = _("easing.Ease", function (t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? y.concat(e) : y
                }, !0),
                x = b.map = {},
                T = b.register = function (t, e, i, n) {
                    for (var o, s, r, a, l = e.split(","), c = l.length, d = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                        for (s = l[c], o = n ? _("easing." + s, null, !0) : h.easing[s] || {}, r = d.length; --r > -1;) a = d[r], x[s + "." + a] = x[a + s] = o[a] = t.getRatio ? t : t[a] || new t
                };
            for (r = b.prototype, r._calcEnd = !1, r.getRatio = function (t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, o = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = o.length; --s > -1;) r = o[s] + ",Power" + s, T(new b(null, null, 1, s), r, "easeOut", !0), T(new b(null, null, 2, s), r, "easeIn" + (0 === s ? ",easeNone" : "")), T(new b(null, null, 3, s), r, "easeInOut");
            x.linear = h.easing.Linear.easeIn, x.swing = h.easing.Quad.easeInOut;
            var S = _("events.EventDispatcher", function (t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            r = S.prototype, r.addEventListener = function (t, e, i, n, o) {
                o = o || 0;
                var s, r, c = this._listeners[t],
                    h = 0;
                for (this !== a || l || a.wake(), null == c && (this._listeners[t] = c = []), r = c.length; --r > -1;) s = c[r], s.c === e && s.s === i ? c.splice(r, 1) : 0 === h && s.pr < o && (h = r + 1);
                c.splice(h, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: o
                })
            }, r.removeEventListener = function (t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, r.dispatchEvent = function (t) {
                var e, i, n, o = this._listeners[t];
                if (o)
                    for (e = o.length, i = this._eventTarget; --e > -1;) n = o[e], n && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var k = t.requestAnimationFrame,
                C = t.cancelAnimationFrame,
                A = Date.now || function () {
                    return (new Date).getTime()
                },
                P = A();
            for (o = ["ms", "moz", "webkit", "o"], s = o.length; --s > -1 && !k;) k = t[o[s] + "RequestAnimationFrame"], C = t[o[s] + "CancelAnimationFrame"] || t[o[s] + "CancelRequestAnimationFrame"];
            _("Ticker", function (t, e) {
                var i, n, o, s, r, c = this,
                    h = A(),
                    u = !(e === !1 || !k) && "auto",
                    f = 500,
                    m = 33,
                    g = "tick",
                    v = function (t) {
                        var e, a, l = A() - P;
                        l > f && (h += l - m), P += l, c.time = (P - h) / 1e3, e = c.time - r, (!i || e > 0 || t === !0) && (c.frame++, r += e + (e >= s ? .004 : s - e), a = !0), t !== !0 && (o = n(v)), a && c.dispatchEvent(g)
                    };
                S.call(c), c.time = c.frame = 0, c.tick = function () {
                    v(!0)
                }, c.lagSmoothing = function (t, e) {
                    f = t || 1 / d, m = Math.min(e, f, 0)
                }, c.sleep = function () {
                    null != o && (u && C ? C(o) : clearTimeout(o), n = p, o = null, c === a && (l = !1))
                }, c.wake = function (t) {
                    null !== o ? c.sleep() : t ? h += -P + (P = A()) : c.frame > 10 && (P = A() - f + 5), n = 0 === i ? p : u && k ? k : function (t) {
                        return setTimeout(t, 1e3 * (r - c.time) + 1 | 0)
                    }, c === a && (l = !0), v(2)
                }, c.fps = function (t) {
                    return arguments.length ? (i = t, s = 1 / (i || 60), r = this.time + s, void c.wake()) : i
                }, c.useRAF = function (t) {
                    return arguments.length ? (c.sleep(), u = t, void c.fps(i)) : u
                }, c.fps(t), setTimeout(function () {
                    "auto" === u && c.frame < 5 && "hidden" !== document.visibilityState && c.useRAF(!1)
                }, 1500)
            }), r = h.Ticker.prototype = new h.events.EventDispatcher, r.constructor = h.Ticker;
            var O = _("core.Animation", function (t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, Q) {
                    l || a.wake();
                    var i = this.vars.useFrames ? U : Q;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            a = O.ticker = new h.Ticker, r = O.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
            var E = function () {
                l && A() - P > 2e3 && a.wake(), setTimeout(E, 2e3)
            };
            E(), r.play = function (t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, r.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, r.resume = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, r.seek = function (t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, r.restart = function (t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, r.reverse = function (t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, r.render = function (t, e, i) {}, r.invalidate = function () {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, r.isActive = function () {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
            }, r._enabled = function (t, e) {
                return l || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, r._kill = function (t, e) {
                return this._enabled(!1, !1)
            }, r.kill = function (t, e) {
                return this._kill(t, e), this
            }, r._uncache = function (t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, r._swapSelfInParams = function (t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, r._callback = function (t) {
                var e = this.vars;
                e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || w)
            }, r.eventCallback = function (t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var o = this.vars;
                    if (1 === arguments.length) return o[t];
                    null == e ? delete o[t] : (o[t] = e, o[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, o[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, r.delay = function (t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, r.duration = function (t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, r.totalDuration = function (t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, r.time = function (t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, r.totalTime = function (t, e, i) {
                if (l || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            o = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : o._time) - (this._reversed ? n - t : t) / this._timeScale, o._dirty || this._uncache(!1), o._timeline)
                            for (; o._timeline;) o._timeline._time !== (o._startTime + o._totalTime) / o._timeScale && o.totalTime(o._totalTime, !0), o = o._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (L.length && K(), this.render(t, e, !1), L.length && K())
                }
                return this
            }, r.progress = r.totalProgress = function (t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, r.startTime = function (t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, r.endTime = function (t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, r.timeScale = function (t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || d, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, r.reversed = function (t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, r.paused = function (t) {
                if (!arguments.length) return this._paused;
                var e, i, n = this._timeline;
                return t != this._paused && n && (l || t || a.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var M = _("core.SimpleTimeline", function (t) {
                O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            r = M.prototype = new O, r.constructor = M, r.kill()._gc = !1, r._first = r._last = r._recent = null, r._sortChildren = !1, r.add = r.insert = function (t, e, i, n) {
                var o, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), o = this._last, this._sortChildren)
                    for (s = t._startTime; o && o._startTime > s;) o = o._prev;
                return o ? (t._next = o._next, o._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = o, this._recent = t, this._timeline && this._uncache(!0), this
            }, r._remove = function (t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, r.render = function (t, e, i) {
                var n, o = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; o;) n = o._next, (o._active || t >= o._startTime && !o._paused) && (o._reversed ? o.render((o._dirty ? o.totalDuration() : o._totalDuration) - (t - o._startTime) * o._timeScale, e, i) : o.render((t - o._startTime) * o._timeScale, e, i)), o = n
            }, r.rawTime = function () {
                return l || a.wake(), this._totalTime
            };
            var I = _("TweenLite", function (e, i, n) {
                    if (O.call(this, i, n), this.render = I.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : I.selector(e) || e;
                    var o, s, r, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? X[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : X[l], (a || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                        for (this._targets = r = u(e), this._propLookup = [], this._siblings = [], o = 0; o < r.length; o++) s = r[o], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (r.splice(o--, 1), this._targets = r = r.concat(u(s))) : (this._siblings[o] = V(s, this, !1), 1 === l && this._siblings[o].length > 1 && J(s, this, null, 1, this._siblings[o])) : (s = r[o--] = I.selector(s), "string" == typeof s && r.splice(o + 1, 1)) : r.splice(o--, 1);
                    else this._propLookup = {}, this._siblings = V(e, this, !1), 1 === l && this._siblings.length > 1 && J(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -d, this.render(Math.min(0, -this._delay)))
                }, !0),
                R = function (e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                z = function (t, e) {
                    var i, n = {};
                    for (i in t) Y[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!W[i] || W[i] && W[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            r = I.prototype = new O, r.constructor = I, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = r._lazy = !1, I.version = "1.18.5", I.defaultEase = r._ease = new b(null, null, 1, 1), I.defaultOverwrite = "auto", I.ticker = a, I.autoSleep = 120, I.lagSmoothing = function (t, e) {
                a.lagSmoothing(t, e)
            }, I.selector = t.$ || t.jQuery || function (e) {
                var i = t.$ || t.jQuery;
                return i ? (I.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var L = [],
                D = {},
                F = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                B = function (t) {
                    for (var e, i = this._firstPT, n = 1e-6; i;) e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                j = function (t, e, i, n) {
                    var o, s, r, a, l, c, h, d = [t, e],
                        u = 0,
                        p = "",
                        f = 0;
                    for (d.start = t, i && (i(d), t = d[0], e = d[1]), d.length = 0, o = t.match(F) || [], s = e.match(F) || [], n && (n._next = null, n.blob = 1, d._firstPT = n), l = s.length, a = 0; l > a; a++) h = s[a], c = e.substr(u, e.indexOf(h, u) - u), p += c || !a ? c : ",", u += c.length, f ? f = (f + 1) % 5 : "rgba(" === c.substr(-5) && (f = 1), h === o[a] || o.length <= a ? p += h : (p && (d.push(p), p = ""), r = parseFloat(o[a]), d.push(r), d._firstPT = {
                        _next: d._firstPT,
                        t: d,
                        p: d.length - 1,
                        s: r,
                        c: ("=" === h.charAt(1) ? parseInt(h.charAt(0) + "1", 10) * parseFloat(h.substr(2)) : parseFloat(h) - r) || 0,
                        f: 0,
                        r: f && 4 > f
                    }), u += h.length;
                    return p += e.substr(u), p && d.push(p), d.setRatio = B, d
                },
                q = function (t, e, i, n, o, s, r, a) {
                    var l, c, h = "get" === i ? t[e] : i,
                        d = typeof t[e],
                        u = "string" == typeof n && "=" === n.charAt(1),
                        p = {
                            t: t,
                            p: e,
                            s: h,
                            f: "function" === d,
                            pg: 0,
                            n: o || e,
                            r: s,
                            pr: 0,
                            c: u ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - h || 0
                        };
                    return "number" !== d && ("function" === d && "get" === i && (c = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), p.s = h = r ? t[c](r) : t[c]()), "string" == typeof h && (r || isNaN(h)) ? (p.fp = r, l = j(h, n, a || I.defaultStringFilter, p), p = {
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: o || e,
                        pr: 0
                    }) : u || (p.s = parseFloat(h), p.c = parseFloat(n) - p.s || 0)), p.c ? ((p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p) : void 0
                },
                N = I._internals = {
                    isArray: f,
                    isSelector: R,
                    lazyTweens: L,
                    blobDif: j
                },
                W = I._plugins = {},
                H = N.tweenLookup = {},
                $ = 0,
                Y = N.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1
                },
                X = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                U = O._rootFramesTimeline = new M,
                Q = O._rootTimeline = new M,
                G = 30,
                K = N.lazyRender = function () {
                    var t, e = L.length;
                    for (D = {}; --e > -1;) t = L[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    L.length = 0
                };
            Q._startTime = a.time, U._startTime = a.frame, Q._active = U._active = !0, setTimeout(K, 1), O._updateRoot = I.render = function () {
                var t, e, i;
                if (L.length && K(), Q.render((a.time - Q._startTime) * Q._timeScale, !1, !1), U.render((a.frame - U._startTime) * U._timeScale, !1, !1), L.length && K(), a.frame >= G) {
                    G = a.frame + (parseInt(I.autoSleep, 10) || 120);
                    for (i in H) {
                        for (e = H[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete H[i]
                    }
                    if (i = Q._first, (!i || i._paused) && I.autoSleep && !U._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep()
                    }
                }
            }, a.addEventListener("tick", O._updateRoot);
            var V = function (t, e, i) {
                    var n, o, s = t._gsTweenID;
                    if (H[s || (t._gsTweenID = s = "t" + $++)] || (H[s] = {
                            target: t,
                            tweens: []
                        }), e && (n = H[s].tweens, n[o = n.length] = e, i))
                        for (; --o > -1;) n[o] === e && n.splice(o, 1);
                    return H[s].tweens
                },
                Z = function (t, e, i, n) {
                    var o, s, r = t.vars.onOverwrite;
                    return r && (o = r(t, e, i, n)), r = I.onOverwrite, r && (s = r(t, e, i, n)), o !== !1 && s !== !1
                },
                J = function (t, e, i, n, o) {
                    var s, r, a, l;
                    if (1 === n || n >= 4) {
                        for (l = o.length, s = 0; l > s; s++)
                            if ((a = o[s]) !== e) a._gc || a._kill(null, t, e) && (r = !0);
                            else if (5 === n) break;
                        return r
                    }
                    var c, h = e._startTime + d,
                        u = [],
                        p = 0,
                        f = 0 === e._duration;
                    for (s = o.length; --s > -1;)(a = o[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (c = c || tt(e, 0, f), 0 === tt(a, c, f) && (u[p++] = a)) : a._startTime <= h && a._startTime + a.totalDuration() / a._timeScale > h && ((f || !a._initted) && h - a._startTime <= 2e-10 || (u[p++] = a)));
                    for (s = p; --s > -1;)
                        if (a = u[s], 2 === n && a._kill(i, t, e) && (r = !0), 2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !Z(a, e)) continue;
                            a._enabled(!1, !1) && (r = !0)
                        }
                    return r
                },
                tt = function (t, e, i) {
                    for (var n = t._timeline, o = n._timeScale, s = t._startTime; n._timeline;) {
                        if (s += n._startTime, o *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return s /= o, s > e ? s - e : i && s === e || !t._initted && 2 * d > s - e ? d : (s += t.totalDuration() / t._timeScale / o) > e + d ? 0 : s - e - d
                };
            r._init = function () {
                var t, e, i, n, o, s = this.vars,
                    r = this._overwrittenProps,
                    a = this._duration,
                    l = !!s.immediateRender,
                    c = s.ease;
                if (s.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), o = {};
                    for (n in s.startAt) o[n] = s.startAt[n];
                    if (o.overwrite = !1, o.immediateRender = !0, o.lazy = l && s.lazy !== !1, o.startAt = o.delay = null, this._startAt = I.to(this.target, 0, o), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== a) return
                } else if (s.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (n in s) Y[n] && "autoCSS" !== n || (i[n] = s[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && s.lazy !== !1, i.immediateRender = l, this._startAt = I.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = c = c ? c instanceof b ? c : "function" == typeof c ? new b(c, s.easeParams) : x[c] || I.defaultEase : I.defaultEase, s.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], r ? r[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, r);
                if (e && I._onPluginEvent("_onInitAllProps", this), r && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = s.onUpdate, this._initted = !0
            }, r._initProps = function (e, i, n, o) {
                var s, r, a, l, c, h;
                if (null == e) return !1;
                D[e._gsTweenID] && K(), this.vars.css || e.style && e !== t && e.nodeType && W.css && this.vars.autoCSS !== !1 && z(this.vars, e);
                for (s in this.vars)
                    if (h = this.vars[s], Y[s]) h && (h instanceof Array || h.push && f(h)) && -1 !== h.join("").indexOf("{self}") && (this.vars[s] = h = this._swapSelfInParams(h, this));
                    else if (W[s] && (l = new W[s])._onInitTween(e, this.vars[s], this)) {
                    for (this._firstPT = c = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: s,
                            pg: 1,
                            pr: l._priority
                        }, r = l._overwriteProps.length; --r > -1;) i[l._overwriteProps[r]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
                } else i[s] = q.call(this, e, s, "get", h, s, 0, null, this.vars.stringFilter);
                return o && this._kill(o, e) ? this._initProps(e, i, n, o) : this._overwrite > 1 && this._firstPT && n.length > 1 && J(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, o)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (D[e._gsTweenID] = !0), a)
            }, r.render = function (t, e, i) {
                var n, o, s, r, a = this._time,
                    l = this._duration,
                    c = this._rawPrevTime;
                if (t >= l - 1e-7) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, o = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > c || 0 >= t && t >= -1e-7 || c === d && "isPause" !== this.data) && c !== t && (i = !0, c > d && (o = "onReverseComplete")), this._rawPrevTime = r = !e || t || c === t ? t : d);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && c > 0) && (o = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (c !== d || "isPause" !== this.data) && (i = !0), this._rawPrevTime = r = !e || t || c === t ? t : d)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var h = t / l,
                        u = this._easeType,
                        p = this._easePower;
                    (1 === u || 3 === u && h >= .5) && (h = 1 - h), 3 === u && (h *= 2), 1 === p ? h *= h : 2 === p ? h *= h * h : 3 === p ? h *= h * h * h : 4 === p && (h *= h * h * h * h), 1 === u ? this.ratio = 1 - h : 2 === u ? this.ratio = h : .5 > t / l ? this.ratio = h / 2 : this.ratio = 1 - h / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = c, L.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : o || (o = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), o && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o), 0 === l && this._rawPrevTime === d && r !== d && (this._rawPrevTime = 0))
                }
            }, r._kill = function (t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;
                var n, o, s, r, a, l, c, h, d, u = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((f(e) || R(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) {
                                a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], o = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, o = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (c = t || a, h = t !== o && "all" !== o && t !== a && ("object" != typeof t || !t._tempKill), i && (I.onOverwrite || this.vars.onOverwrite)) {
                            for (s in c) a[s] && (d || (d = []), d.push(s));
                            if ((d || !t) && !Z(this, i, e, d)) return !1
                        }
                        for (s in c)(r = a[s]) && (u && (r.f ? r.t[r.p](r.s) : r.t[r.p] = r.s, l = !0), r.pg && r.t._kill(c) && (l = !0), r.pg && 0 !== r.t._overwriteProps.length || (r._prev ? r._prev._next = r._next : r === this._firstPT && (this._firstPT = r._next), r._next && (r._next._prev = r._prev), r._next = r._prev = null), delete a[s]), h && (o[s] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, r.invalidate = function () {
                return this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -d, this.render(Math.min(0, -this._delay))), this
            }, r._enabled = function (t, e) {
                if (l || a.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = V(n[i], this, !0);
                    else this._siblings = V(this.target, this, !0)
                }
                return O.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && I._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, I.to = function (t, e, i) {
                return new I(t, e, i)
            }, I.from = function (t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new I(t, e, i)
            }, I.fromTo = function (t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new I(t, e, n)
            }, I.delayedCall = function (t, e, i, n, o) {
                return new I(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: o,
                    overwrite: 0
                })
            }, I.set = function (t, e) {
                return new I(t, 0, e)
            }, I.getTweensOf = function (t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : I.selector(t) || t;
                var i, n, o, s;
                if ((f(t) || R(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(I.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (s = n[i], o = i; --o > -1;) s === n[o] && n.splice(i, 1)
                } else
                    for (n = V(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, I.killTweensOf = I.killDelayedCallsTo = function (t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = I.getTweensOf(t, e), o = n.length; --o > -1;) n[o]._kill(i, t)
            };
            var et = _("plugins.TweenPlugin", function (t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = et.prototype
            }, !0);
            if (r = et.prototype, et.version = "1.18.0", et.API = 2, r._firstPT = null, r._addTween = q, r.setRatio = B, r._kill = function (t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, r._roundProps = function (t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, I._onPluginEvent = function (t, e) {
                    var i, n, o, s, r, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (r = a._next, n = o; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : s) ? a._prev._next = a: o = a, (a._next = n) ? n._prev = a : s = a, a = r
                        }
                        a = e._firstPT = o
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                    return i
                }, et.activate = function (t) {
                    for (var e = t.length; --e > -1;) t[e].API === et.API && (W[(new t[e])._propName] = t[e]);
                    return !0
                }, v.plugin = function (t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        o = t.overwriteProps,
                        s = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        r = _("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                            et.call(this, i, n), this._overwriteProps = o || []
                        }, t.global === !0),
                        a = r.prototype = new et(i);
                    a.constructor = r, r.API = t.API;
                    for (e in s) "function" == typeof t[e] && (a[s[e]] = t[e]);
                    return r.version = t.version, et.activate([r]), r
                }, o = t._gsQueue) {
                for (s = 0; s < o.length; s++) o[s]();
                for (r in m) m[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
            }
            l = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
        "use strict";
        var t = document.documentElement,
            e = window,
            i = function (i, n) {
                var o = "x" === n ? "Width" : "Height",
                    s = "scroll" + o,
                    r = "client" + o,
                    a = document.body;
                return i === e || i === t || i === a ? Math.max(t[s], a[s]) - (e["inner" + o] || t[r] || a[r]) : i[s] - i["offset" + o]
            },
            n = _gsScope._gsDefine.plugin({
                propName: "scrollTo",
                API: 2,
                version: "1.7.6",
                init: function (t, n, o) {
                    return this._wdw = t === e, this._target = t, this._tween = o, "object" != typeof n && (n = {
                        y: n
                    }), this.vars = n, this._autoKill = n.autoKill !== !1, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != n.x ? (this._addTween(this, "x", this.x, "max" === n.x ? i(t, "x") : n.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != n.y ? (this._addTween(this, "y", this.y, "max" === n.y ? i(t, "y") : n.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
                },
                set: function (t) {
                    this._super.setRatio.call(this, t);
                    var n = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                        o = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                        s = o - this.yPrev,
                        r = n - this.xPrev;
                    this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (!this.skipX && (r > 7 || -7 > r) && n < i(this._target, "x") && (this.skipX = !0), !this.skipY && (s > 7 || -7 > s) && o < i(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? e.scrollTo(this.skipX ? n : this.x, this.skipY ? o : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
                }
            }),
            o = n.prototype;
        n.max = i, o.getX = function () {
            return this._wdw ? null != e.pageXOffset ? e.pageXOffset : null != t.scrollLeft ? t.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
        }, o.getY = function () {
            return this._wdw ? null != e.pageYOffset ? e.pageYOffset : null != t.scrollTop ? t.scrollTop : document.body.scrollTop : this._target.scrollTop
        }, o._kill = function (t) {
            return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
        }
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function (i) {
            return e(i, t, t.document, t.Math)
        }) : "undefined" != typeof exports ? module.exports = e(require("jquery"), t, t.document, t.Math) : e(jQuery, t, t.document, t.Math)
    }("undefined" != typeof window ? window : this, function (t, e, i, n, o) {
        "use strict";
        var s = "fullpage-wrapper",
            r = "." + s,
            a = "fp-scrollable",
            l = "." + a,
            c = "fp-responsive",
            h = "fp-notransition",
            d = "fp-destroyed",
            u = "fp-enabled",
            p = "fp-viewing",
            f = "active",
            m = "." + f,
            g = "fp-completely",
            v = "." + g,
            _ = ".section",
            y = "fp-section",
            w = "." + y,
            b = w + m,
            x = w + ":first",
            T = w + ":last",
            S = "fp-tableCell",
            k = "." + S,
            C = "fp-auto-height",
            A = "fp-normal-scroll",
            P = "fp-nav",
            O = "#" + P,
            E = "fp-tooltip",
            M = "." + E,
            I = "fp-show-active",
            R = ".slide",
            z = "fp-slide",
            L = "." + z,
            D = L + m,
            F = "fp-slides",
            B = "." + F,
            j = "fp-slidesContainer",
            q = "." + j,
            N = "fp-table",
            W = "fp-slidesNav",
            H = "." + W,
            $ = H + " a",
            Y = "fp-controlArrow",
            X = "." + Y,
            U = "fp-prev",
            Q = "." + U,
            G = Y + " " + U,
            K = X + Q,
            V = "fp-next",
            Z = "." + V,
            J = Y + " " + V,
            tt = X + Z,
            et = t(e),
            it = t(i),
            nt = {
                scrollbars: !0,
                mouseWheel: !0,
                hideScrollbars: !1,
                fadeScrollbars: !1,
                disableMouse: !0
            };
        t.fn.fullpage = function (a) {
            function l() {
                a.css3 && (a.css3 = we()), a.scrollBar = a.scrollBar || a.hybrid, Q(), V(), je.setAllowScrolling(!0), je.setAutoScrolling(a.autoScrolling, "internal");
                var e = t(b).find(D);
                e.length && (0 !== t(b).index(w) || 0 === t(b).index(w) && 0 !== e.index()) && Oe(e), Jt(), ye(), "complete" === i.readyState && Bt(), et.on("load", Bt)
            }

            function Y() {
                et.on("scroll", mt).on("hashchange", jt).blur(Xt).resize(Zt), it.keydown(qt).keyup(Wt).on("click touchstart", O + " a", Ut).on("click touchstart", $, Qt).on("click", M, Nt), t(w).on("click touchstart", X, Yt), a.normalScrollElements && (it.on("mouseenter", a.normalScrollElements, function () {
                    je.setMouseWheelScrolling(!1)
                }), it.on("mouseleave", a.normalScrollElements, function () {
                    je.setMouseWheelScrolling(!0)
                }))
            }

            function Q() {
                var e = Xe.find(a.sectionSelector);
                a.anchors.length || (a.anchors = e.filter("[data-anchor]").map(function () {
                    return t(this).data("anchor").toString()
                }).get()), a.navigationTooltips.length || (a.navigationTooltips = e.filter("[data-tooltip]").map(function () {
                    return t(this).data("tooltip").toString()
                }).get())
            }

            function V() {
                Xe.css({
                    height: "100%",
                    position: "relative"
                }), Xe.addClass(s), t("html").addClass(u), Ue = et.height(), Xe.removeClass(d), at(), t(w).each(function (e) {
                    var i = t(this),
                        n = i.find(L),
                        o = n.length;
                    st(i, e), rt(i, e), o > 0 ? Z(i, n, o) : a.verticalCentered && le(i)
                }), a.fixedElements && a.css3 && t(a.fixedElements).appendTo(Be), a.navigation && ct(), dt(), ut(), a.scrollOverflow ? ("complete" === i.readyState && ht(), et.on("load", ht)) : ft()
            }

            function Z(e, i, n) {
                var o = 100 * n,
                    s = 100 / n;
                i.wrapAll('<div class="' + j + '" />'), i.parent().wrap('<div class="' + F + '" />'), e.find(q).css("width", o + "%"), n > 1 && (a.controlArrows && lt(e), a.slidesNavigation && me(e, n)), i.each(function (e) {
                    t(this).css("width", s + "%"), a.verticalCentered && le(t(this))
                });
                var r = e.find(D);
                r.length && (0 !== t(b).index(w) || 0 === t(b).index(w) && 0 !== r.index()) ? Oe(r) : i.eq(0).addClass(f)
            }

            function st(e, i) {
                i || 0 !== t(b).length || e.addClass(f), e.css("height", Ue + "px"), a.paddingTop && e.css("padding-top", a.paddingTop), a.paddingBottom && e.css("padding-bottom", a.paddingBottom), "undefined" != typeof a.sectionsColor[i] && e.css("background-color", a.sectionsColor[i]), "undefined" != typeof a.anchors[i] && e.attr("data-anchor", a.anchors[i])
            }

            function rt(e, i) {
                "undefined" != typeof a.anchors[i] && e.hasClass(f) && oe(a.anchors[i], i), a.menu && a.css3 && t(a.menu).closest(r).length && t(a.menu).appendTo(Be)
            }

            function at() {
                Xe.find(a.sectionSelector).each(function () {
                    t(this).addClass(y)
                }), Xe.find(a.slideSelector).each(function () {
                    t(this).addClass(z)
                })
            }

            function lt(t) {
                t.find(B).after('<div class="' + G + '"></div><div class="' + J + '"></div>'), "#fff" != a.controlArrowColor && (t.find(tt).css("border-color", "transparent transparent transparent " + a.controlArrowColor), t.find(K).css("border-color", "transparent " + a.controlArrowColor + " transparent transparent")), a.loopHorizontal || t.find(K).hide()
            }

            function ct() {
                Be.append('<div id="' + P + '"><ul></ul></div>');
                var e = t(O);
                e.addClass(function () {
                    return a.showActiveTooltip ? I + " " + a.navigationPosition : a.navigationPosition
                });
                for (var i = 0; i < t(w).length; i++) {
                    var n = "";
                    a.anchors.length && (n = a.anchors[i]);
                    var o = '<li><a href="#' + n + '"><span class="fp-nav__mask"><span class="fp-nav__line"></span></span></a>',
                        s = a.navigationTooltips[i];
                    "undefined" != typeof s && "" !== s && (o += '<div class="' + E + " " + a.navigationPosition + '">' + s + "</div>"), o += "</li>", e.find("ul").append(o)
                }
                t(O).css("margin-top", "-" + t(O).height() / 2 + "px"), t(O).find("li").eq(t(b).index(w)).find("a").addClass(f)
            }

            function ht() {
                t(w).each(function () {
                    var e = t(this).find(L);
                    e.length ? e.each(function () {
                        ae(t(this))
                    }) : ae(t(this))
                }), ft()
            }

            function dt() {
                Xe.find('iframe[src*="youtube.com/embed/"]').each(function () {
                    var e = pt(t(this).attr("src"));
                    t(this).attr("src", t(this).attr("src") + e + "enablejsapi=1")
                })
            }

            function ut() {
                Xe.find('iframe[src*="player.vimeo.com/"]').each(function () {
                    var e = pt(t(this).attr("src"));
                    t(this).attr("src", t(this).attr("src") + e + "api=1")
                })
            }

            function pt(t) {
                return /\?/.test(t) ? "&" : "?"
            }

            function ft() {
                var e = t(b);
                e.addClass(g), a.scrollOverflowHandler.afterRender && a.scrollOverflowHandler.afterRender(e), zt(e), Lt(e), t.isFunction(a.afterLoad) && a.afterLoad.call(e, e.data("anchor"), e.index(w) + 1), t.isFunction(a.afterRender) && a.afterRender.call(Xe)
            }

            function mt() {
                var e;
                if (!a.autoScrolling || a.scrollBar) {
                    var n = et.scrollTop(),
                        o = vt(n),
                        s = 0,
                        r = n + et.height() / 2,
                        l = Be.height() - et.height() === n,
                        c = i.querySelectorAll(w);
                    if (l) s = c.length - 1;
                    else
                        for (var h = 0; h < c.length; ++h) {
                            var d = c[h];
                            d.offsetTop <= r && (s = h)
                        }
                    if (gt(o) && (t(b).hasClass(g) || t(b).addClass(g).siblings().removeClass(g)), e = t(c).eq(s), !e.hasClass(f)) {
                        ri = !0;
                        var u = t(b),
                            p = u.index(w) + 1,
                            m = se(e),
                            v = e.data("anchor"),
                            _ = e.index(w) + 1,
                            y = e.find(D);
                        if (y.length) var x = y.data("anchor"),
                            T = y.index();
                        Ke && (e.addClass(f).siblings().removeClass(f), t.isFunction(a.onLeave) && a.onLeave.call(u, p, _, m), t.isFunction(a.afterLoad) && a.afterLoad.call(e, v, _), Dt(u), zt(e), Lt(e), oe(v, _ - 1), a.anchors.length && (qe = v, ge(T, x, v, _))), clearTimeout(ii), ii = setTimeout(function () {
                            ri = !1
                        }, 100)
                    }
                    a.fitToSection && (clearTimeout(ni), ni = setTimeout(function () {
                        Ke && a.fitToSection && (t(b).is(e) && (Qe = !0), Pt(t(b)), Qe = !1)
                    }, a.fitToSectionDelay))
                }
            }

            function gt(e) {
                var i = t(b).position().top,
                    n = i + et.height();
                return "up" == e ? n >= et.scrollTop() + et.height() : i <= et.scrollTop()
            }

            function vt(t) {
                var e = t > ai ? "down" : "up";
                return ai = t, pi = t, e
            }

            function _t(t, e) {
                if (Ze.m[t]) {
                    var i, n;
                    if ("down" == t ? (i = "bottom", n = je.moveSectionDown) : (i = "top", n = je.moveSectionUp), e.length > 0) {
                        if (!a.scrollOverflowHandler.isScrolled(i, e)) return !0;
                        n()
                    } else n()
                }
            }

            function yt(e) {
                var i = e.originalEvent;
                if (!wt(e.target) && bt(i)) {
                    a.autoScrolling && e.preventDefault();
                    var o = t(b),
                        s = a.scrollOverflowHandler.scrollable(o);
                    if (Ke && !He) {
                        var r = Pe(i);
                        hi = r.y, di = r.x, o.find(B).length && n.abs(ci - di) > n.abs(li - hi) ? n.abs(ci - di) > et.outerWidth() / 100 * a.touchSensitivity && (ci > di ? Ze.m.right && je.moveSlideRight() : Ze.m.left && je.moveSlideLeft()) : a.autoScrolling && n.abs(li - hi) > et.height() / 100 * a.touchSensitivity && (li > hi ? _t("down", s) : hi > li && _t("up", s))
                    }
                }
            }

            function wt(e, i) {
                i = i || 0;
                var n = t(e).parent();
                return !!(i < a.normalScrollElementTouchThreshold && n.is(a.normalScrollElements)) || i != a.normalScrollElementTouchThreshold && wt(n, ++i)
            }

            function bt(t) {
                return "undefined" == typeof t.pointerType || "mouse" != t.pointerType
            }

            function xt(t) {
                var e = t.originalEvent;
                if (a.fitToSection && Fe.stop(), bt(e)) {
                    var i = Pe(e);
                    li = i.y, ci = i.x
                }
            }

            function Tt(t, e) {
                for (var i = 0, o = t.slice(n.max(t.length - e, 1)), s = 0; s < o.length; s++) i += o[s];
                return n.ceil(i / e)
            }

            function St(i) {
                var o = (new Date).getTime(),
                    s = t(v).hasClass(A);
                if (a.autoScrolling && !We && !s) {
                    i = i || e.event;
                    var r = i.wheelDelta || -i.deltaY || -i.detail,
                        l = n.max(-1, n.min(1, r)),
                        c = "undefined" != typeof i.wheelDeltaX || "undefined" != typeof i.deltaX,
                        h = n.abs(i.wheelDeltaX) < n.abs(i.wheelDelta) || n.abs(i.deltaX) < n.abs(i.deltaY) || !c;
                    Ve.length > 149 && Ve.shift(), Ve.push(n.abs(r)), a.scrollBar && (i.preventDefault ? i.preventDefault() : i.returnValue = !1);
                    var d = t(b),
                        u = a.scrollOverflowHandler.scrollable(d),
                        p = o - ui;
                    if (ui = o, p > 200 && (Ve = []), Ke) {
                        var f = Tt(Ve, 10),
                            m = Tt(Ve, 70),
                            g = f >= m;
                        g && h && (l < 0 ? _t("down", u) : _t("up", u))
                    }
                    return !1
                }
                a.fitToSection && Fe.stop()
            }

            function kt(e, i) {
                var n = "undefined" == typeof i ? t(b) : i,
                    o = n.find(B),
                    s = o.find(L).length;
                if (!(!o.length || He || s < 2)) {
                    var r = o.find(D),
                        l = null;
                    if (l = "prev" === e ? r.prev(L) : r.next(L), !l.length) {
                        if (!a.loopHorizontal) return;
                        l = "prev" === e ? r.siblings(":last") : r.siblings(":first")
                    }
                    He = !0, Vt(o, l)
                }
            }

            function Ct() {
                t(D).each(function () {
                    Oe(t(this), "internal")
                })
            }

            function At(t) {
                var e = t.position(),
                    i = e.top,
                    n = e.top > pi,
                    o = i - Ue + t.outerHeight(),
                    s = a.bigSectionsDestination;
                return t.outerHeight() > Ue ? (n || s) && "bottom" !== s || (i = o) : (n || Qe && t.is(":last-child")) && (i = o), pi = i, i
            }

            function Pt(e, i, n) {
                if ("undefined" != typeof e) {
                    var o = At(e),
                        s = {
                            element: e,
                            callback: i,
                            isMovementUp: n,
                            dtop: o,
                            yMovement: se(e),
                            anchorLink: e.data("anchor"),
                            sectionIndex: e.index(w),
                            activeSlide: e.find(D),
                            activeSection: t(b),
                            leavingSection: t(b).index(w) + 1,
                            localIsResizing: Qe
                        };
                    if (!(s.activeSection.is(e) && !Qe || a.scrollBar && et.scrollTop() === s.dtop && !e.hasClass(C))) {
                        if (s.activeSlide.length) var r = s.activeSlide.data("anchor"),
                            l = s.activeSlide.index();
                        a.autoScrolling && a.continuousVertical && "undefined" != typeof s.isMovementUp && (!s.isMovementUp && "up" == s.yMovement || s.isMovementUp && "down" == s.yMovement) && (s = Mt(s)), t.isFunction(a.onLeave) && !s.localIsResizing && a.onLeave.call(s.activeSection, s.leavingSection, s.sectionIndex + 1, s.yMovement) === !1 || (Dt(s.activeSection), e.addClass(f).siblings().removeClass(f), zt(e), a.scrollOverflowHandler.onLeave(), Ke = !1, ge(l, r, s.anchorLink, s.sectionIndex), Ot(s), qe = s.anchorLink, oe(s.anchorLink, s.sectionIndex))
                    }
                }
            }

            function Ot(e) {
                if (a.css3 && a.autoScrolling && !a.scrollBar) {
                    var i = "translate3d(0px, -" + e.dtop + "px, 0px)";
                    he(i, !0), a.scrollingSpeed ? ti = setTimeout(function () {
                        Rt(e)
                    }, a.scrollingSpeed) : Rt(e)
                } else {
                    var n = Et(e);
                    t(n.element).animate(n.options, a.scrollingSpeed, a.easing).promise().done(function () {
                        a.scrollBar ? setTimeout(function () {
                            Rt(e)
                        }, 30) : Rt(e)
                    })
                }
            }

            function Et(t) {
                var e = {};
                return a.autoScrolling && !a.scrollBar ? (e.options = {
                    top: -t.dtop
                }, e.element = r) : (e.options = {
                    scrollTop: t.dtop
                }, e.element = "html, body"), e
            }

            function Mt(e) {
                return e.isMovementUp ? t(b).before(e.activeSection.nextAll(w)) : t(b).after(e.activeSection.prevAll(w).get().reverse()), Ee(t(b).position().top), Ct(), e.wrapAroundElements = e.activeSection, e.dtop = e.element.position().top, e.yMovement = se(e.element), e
            }

            function It(e) {
                e.wrapAroundElements && e.wrapAroundElements.length && (e.isMovementUp ? t(x).before(e.wrapAroundElements) : t(T).after(e.wrapAroundElements), Ee(t(b).position().top), Ct())
            }

            function Rt(e) {
                It(e), t.isFunction(a.afterLoad) && !e.localIsResizing && a.afterLoad.call(e.element, e.anchorLink, e.sectionIndex + 1), a.scrollOverflowHandler.afterLoad(), Lt(e.element), e.element.addClass(g).siblings().removeClass(g), Ke = !0, t.isFunction(e.callback) && e.callback.call(this)
            }

            function zt(e) {
                var e = Ft(e);
                e.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function () {
                    t(this).attr("src", t(this).data("src")), t(this).removeAttr("data-src"), t(this).is("source") && t(this).closest("video").get(0).load()
                })
            }

            function Lt(e) {
                var e = Ft(e);
                e.find("video, audio").each(function () {
                    var e = t(this).get(0);
                    e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play()
                }), e.find('iframe[src*="youtube.com/embed/"]').each(function () {
                    var e = t(this).get(0);
                    /youtube\.com\/embed\//.test(t(this).attr("src")) && e.hasAttribute("data-autoplay") && e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
                })
            }

            function Dt(e) {
                var e = Ft(e);
                e.find("video, audio").each(function () {
                    var e = t(this).get(0);
                    e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause()
                }), e.find('iframe[src*="youtube.com/embed/"]').each(function () {
                    var e = t(this).get(0);
                    /youtube\.com\/embed\//.test(t(this).attr("src")) && !e.hasAttribute("data-keepplaying") && t(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                })
            }

            function Ft(e) {
                var i = e.find(D);
                return i.length && (e = t(i)), e
            }

            function Bt() {
                var t = e.location.hash.replace("#", "").split("/"),
                    i = decodeURIComponent(t[0]),
                    n = decodeURIComponent(t[1]);
                i && (a.animateAnchor ? pe(i, n) : je.silentMoveTo(i, n))
            }

            function jt() {
                if (!ri && !a.lockAnchors) {
                    var t = e.location.hash.replace("#", "").split("/"),
                        i = decodeURIComponent(t[0]),
                        n = decodeURIComponent(t[1]),
                        o = "undefined" == typeof qe,
                        s = "undefined" == typeof qe && "undefined" == typeof n && !He;
                    i.length && (i && i !== qe && !o || s || !He && Ne != n) && pe(i, n)
                }
            }

            function qt(e) {
                clearTimeout(oi);
                var i = t(":focus");
                if (!i.is("textarea") && !i.is("input") && !i.is("select") && "true" !== i.attr("contentEditable") && "" !== i.attr("contentEditable") && a.keyboardScrolling && a.autoScrolling) {
                    var n = e.which,
                        o = [40, 38, 32, 33, 34];
                    t.inArray(n, o) > -1 && e.preventDefault(), We = e.ctrlKey, oi = setTimeout(function () {
                        Gt(e)
                    }, 150)
                }
            }

            function Nt() {
                t(this).prev().trigger("click")
            }

            function Wt(t) {
                Ge && (We = t.ctrlKey)
            }

            function Ht(t) {
                2 == t.which && (fi = t.pageY, Xe.on("mousemove", Kt))
            }

            function $t(t) {
                2 == t.which && Xe.off("mousemove")
            }

            function Yt() {
                var e = t(this).closest(w);
                t(this).hasClass(U) ? Ze.m.left && je.moveSlideLeft(e) : Ze.m.right && je.moveSlideRight(e)
            }

            function Xt() {
                Ge = !1, We = !1
            }

            function Ut(e) {
                e.preventDefault();
                var i = t(this).parent().index();
                Pt(t(w).eq(i))
            }

            function Qt(e) {
                e.preventDefault();
                var i = t(this).closest(w).find(B),
                    n = i.find(L).eq(t(this).closest("li").index());
                Vt(i, n)
            }

            function Gt(e) {
                var i = e.shiftKey;
                switch (e.which) {
                    case 38:
                    case 33:
                        Ze.k.up && je.moveSectionUp();
                        break;
                    case 32:
                        if (i && Ze.k.up) {
                            je.moveSectionUp();
                            break
                        }
                    case 40:
                    case 34:
                        Ze.k.down && je.moveSectionDown();
                        break;
                    case 36:
                        Ze.k.up && je.moveTo(1);
                        break;
                    case 35:
                        Ze.k.down && je.moveTo(t(w).length);
                        break;
                    case 37:
                        Ze.k.left && je.moveSlideLeft();
                        break;
                    case 39:
                        Ze.k.right && je.moveSlideRight();
                        break;
                    default:
                        return
                }
            }

            function Kt(t) {
                Ke && (t.pageY < fi && Ze.m.up ? je.moveSectionUp() : t.pageY > fi && Ze.m.down && je.moveSectionDown()), fi = t.pageY
            }

            function Vt(e, i) {
                var o = i.position(),
                    s = i.index(),
                    r = e.closest(w),
                    l = r.index(w),
                    c = r.data("anchor"),
                    h = r.find(H),
                    d = _e(i),
                    u = r.find(D),
                    p = Qe;
                if (a.onSlideLeave) {
                    var g = u.index(),
                        v = re(g, s);
                    if (!p && "none" !== v && t.isFunction(a.onSlideLeave) && a.onSlideLeave.call(u, c, l + 1, g, v, s) === !1) return void(He = !1)
                }
                Dt(u), i.addClass(f).siblings().removeClass(f), p || zt(i), !a.loopHorizontal && a.controlArrows && (r.find(K).toggle(0 !== s), r.find(tt).toggle(!i.is(":last-child"))), r.hasClass(f) && ge(s, d, c, l);
                var _ = function () {
                    p || t.isFunction(a.afterSlideLoad) && a.afterSlideLoad.call(i, c, l + 1, d, s), Lt(i), He = !1
                };
                if (a.css3) {
                    var y = "translate3d(-" + n.round(o.left) + "px, 0px, 0px)";
                    te(e.find(q), a.scrollingSpeed > 0).css(Me(y)), ei = setTimeout(function () {
                        _()
                    }, a.scrollingSpeed, a.easing)
                } else e.animate({
                    scrollLeft: n.round(o.left)
                }, a.scrollingSpeed, a.easing, function () {
                    _()
                });
                h.find(m).removeClass(f), h.find("li").eq(s).find("a").addClass(f)
            }

            function Zt() {
                if (Jt(), $e) {
                    var e = t(i.activeElement);
                    if (!e.is("textarea") && !e.is("input") && !e.is("select")) {
                        var o = et.height();
                        n.abs(o - mi) > 20 * n.max(mi, o) / 100 && (je.reBuild(!0), mi = o)
                    }
                } else clearTimeout(Je), Je = setTimeout(function () {
                    je.reBuild(!0)
                }, 350)
            }

            function Jt() {
                var t = a.responsive || a.responsiveWidth,
                    e = a.responsiveHeight,
                    i = t && et.outerWidth() < t,
                    n = e && et.height() < e;
                t && e ? je.setResponsive(i || n) : t ? je.setResponsive(i) : e && je.setResponsive(n)
            }

            function te(t) {
                var e = "all " + a.scrollingSpeed + "ms " + a.easingcss3;
                return t.removeClass(h), t.css({
                    "-webkit-transition": e,
                    transition: e
                })
            }

            function ee(t) {
                return t.addClass(h)
            }

            function ie(e, i) {
                a.navigation && (t(O).find(m).removeClass(f), e ? t(O).find('a[href="#' + e + '"]').addClass(f) : t(O).find("li").eq(i).find("a").addClass(f))
            }

            function ne(e) {
                a.menu && (t(a.menu).find(m).removeClass(f), t(a.menu).find('[data-menuanchor="' + e + '"]').addClass(f))
            }

            function oe(t, e) {
                ne(t), ie(t, e)
            }

            function se(e) {
                var i = t(b).index(w),
                    n = e.index(w);
                return i == n ? "none" : i > n ? "up" : "down"
            }

            function re(t, e) {
                return t == e ? "none" : t > e ? "left" : "right"
            }

            function ae(t) {
                if (!t.hasClass("fp-noscroll")) {
                    t.css("overflow", "hidden");
                    var e, i = a.scrollOverflowHandler,
                        n = i.wrapContent(),
                        o = t.closest(w),
                        s = i.scrollable(t);
                    s.length ? e = i.scrollHeight(t) : (e = t.get(0).scrollHeight, a.verticalCentered && (e = t.find(k).get(0).scrollHeight));
                    var r = Ue - parseInt(o.css("padding-bottom")) - parseInt(o.css("padding-top"));
                    e > r ? s.length ? i.update(t, r) : (a.verticalCentered ? t.find(k).wrapInner(n) : t.wrapInner(n), i.create(t, r)) : i.remove(t), t.css("overflow", "")
                }
            }

            function le(t) {
                t.addClass(N).wrapInner('<div class="' + S + '" style="height:' + ce(t) + 'px;" />')
            }

            function ce(t) {
                var e = Ue;
                if (a.paddingTop || a.paddingBottom) {
                    var i = t;
                    i.hasClass(y) || (i = t.closest(w));
                    var n = parseInt(i.css("padding-top")) + parseInt(i.css("padding-bottom"));
                    e = Ue - n
                }
                return e
            }

            function he(t, e) {
                e ? te(Xe) : ee(Xe), Xe.css(Me(t)), setTimeout(function () {
                    Xe.removeClass(h)
                }, 10)
            }

            function de(e) {
                var i = Xe.find(w + '[data-anchor="' + e + '"]');
                return i.length || (i = t(w).eq(e - 1)), i
            }

            function ue(t, e) {
                var i = e.find(B),
                    n = i.find(L + '[data-anchor="' + t + '"]');
                return n.length || (n = i.find(L).eq(t)), n
            }

            function pe(t, e) {
                var i = de(t);
                "undefined" == typeof e && (e = 0), t === qe || i.hasClass(f) ? fe(i, e) : Pt(i, function () {
                    fe(i, e)
                })
            }

            function fe(t, e) {
                if ("undefined" != typeof e) {
                    var i = t.find(B),
                        n = ue(e, t);
                    n.length && Vt(i, n)
                }
            }

            function me(t, e) {
                t.append('<div class="' + W + '"><ul></ul></div>');
                var i = t.find(H);
                i.addClass(a.slidesNavPosition);
                for (var n = 0; n < e; n++) i.find("ul").append('<li><a href="#"><span></span></a></li>');
                i.css("margin-left", "-" + i.width() / 2 + "px"), i.find("li").first().find("a").addClass(f)
            }

            function ge(t, e, i, n) {
                var o = "";
                a.anchors.length && !a.lockAnchors && (t ? ("undefined" != typeof i && (o = i), "undefined" == typeof e && (e = t), Ne = e, ve(o + "/" + e)) : "undefined" != typeof t ? (Ne = e, ve(i)) : ve(i)), ye()
            }

            function ve(t) {
                if (a.recordHistory) location.hash = t;
                else if ($e || Ye) e.history.replaceState(o, o, "#" + t);
                else {
                    var i = e.location.href.split("#")[0];
                    e.location.replace(i + "#" + t)
                }
            }

            function _e(t) {
                var e = t.data("anchor"),
                    i = t.index();
                return "undefined" == typeof e && (e = i), e
            }

            function ye() {
                var e = t(b),
                    i = e.find(D),
                    n = _e(e),
                    o = _e(i),
                    s = String(n);
                i.length && (s = s + "-" + o), s = s.replace("/", "-").replace("#", "");
                var r = new RegExp("\\b\\s?" + p + "-[^\\s]+\\b", "g");
                Be[0].className = Be[0].className.replace(r, ""), Be.addClass(p + "-" + s)
            }

            function we() {
                var t, n = i.createElement("p"),
                    s = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                i.body.insertBefore(n, null);
                for (var r in s) n.style[r] !== o && (n.style[r] = "translate3d(1px,1px,1px)", t = e.getComputedStyle(n).getPropertyValue(s[r]));
                return i.body.removeChild(n), t !== o && t.length > 0 && "none" !== t
            }

            function be() {
                i.addEventListener ? (i.removeEventListener("mousewheel", St, !1), i.removeEventListener("wheel", St, !1), i.removeEventListener("MozMousePixelScroll", St, !1)) : i.detachEvent("onmousewheel", St)
            }

            function xe() {
                var t, n = "";
                e.addEventListener ? t = "addEventListener" : (t = "attachEvent", n = "on");
                var s = "onwheel" in i.createElement("div") ? "wheel" : i.onmousewheel !== o ? "mousewheel" : "DOMMouseScroll";
                "DOMMouseScroll" == s ? i[t](n + "MozMousePixelScroll", St, !1) : i[t](n + s, St, !1)
            }

            function Te() {
                Xe.on("mousedown", Ht).on("mouseup", $t)
            }

            function Se() {
                Xe.off("mousedown", Ht).off("mouseup", $t)
            }

            function ke() {
                if ($e || Ye) {
                    var e = Ae();
                    t(r).off("touchstart " + e.down).on("touchstart " + e.down, xt), t(r).off("touchmove " + e.move).on("touchmove " + e.move, yt)
                }
            }

            function Ce() {
                if ($e || Ye) {
                    var e = Ae();
                    t(r).off("touchstart " + e.down), t(r).off("touchmove " + e.move)
                }
            }

            function Ae() {
                var t;
                return t = e.PointerEvent ? {
                    down: "pointerdown",
                    move: "pointermove"
                } : {
                    down: "MSPointerDown",
                    move: "MSPointerMove"
                }
            }

            function Pe(t) {
                var e = [];
                return e.y = "undefined" != typeof t.pageY && (t.pageY || t.pageX) ? t.pageY : t.touches[0].pageY, e.x = "undefined" != typeof t.pageX && (t.pageY || t.pageX) ? t.pageX : t.touches[0].pageX, Ye && bt(t) && a.scrollBar && (e.y = t.touches[0].pageY, e.x = t.touches[0].pageX), e
            }

            function Oe(t, e) {
                je.setScrollingSpeed(0, "internal"), "undefined" != typeof e && (Qe = !0), Vt(t.closest(B), t), "undefined" != typeof e && (Qe = !1), je.setScrollingSpeed(si.scrollingSpeed, "internal")
            }

            function Ee(t) {
                if (a.scrollBar) Xe.scrollTop(t);
                else if (a.css3) {
                    var e = "translate3d(0px, -" + t + "px, 0px)";
                    he(e, !1)
                } else Xe.css("top", -t)
            }

            function Me(t) {
                return {
                    "-webkit-transform": t,
                    "-moz-transform": t,
                    "-ms-transform": t,
                    transform: t
                }
            }

            function Ie(t, e, i) {
                switch (e) {
                    case "up":
                        Ze[i].up = t;
                        break;
                    case "down":
                        Ze[i].down = t;
                        break;
                    case "left":
                        Ze[i].left = t;
                        break;
                    case "right":
                        Ze[i].right = t;
                        break;
                    case "all":
                        "m" == i ? je.setAllowScrolling(t) : je.setKeyboardScrolling(t)
                }
            }

            function Re() {
                Ee(0), Xe.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function () {
                    t(this).attr("src", t(this).data("src")), t(this).removeAttr("data-src")
                }), t(O + ", " + H + ", " + X).remove(), t(w).css({
                    height: "",
                    "background-color": "",
                    padding: ""
                }), t(L).css({
                    width: ""
                }), Xe.css({
                    height: "",
                    position: "",
                    "-ms-touch-action": "",
                    "touch-action": ""
                }), Fe.css({
                    overflow: "",
                    height: ""
                }), t("html").removeClass(u), Be.removeClass(c), t.each(Be.get(0).className.split(/\s+/), function (t, e) {
                    0 === e.indexOf(p) && Be.removeClass(e)
                }), t(w + ", " + L).each(function () {
                    a.scrollOverflowHandler.remove(t(this)), t(this).removeClass(N + " " + f)
                }), ee(Xe), Xe.find(k + ", " + q + ", " + B).each(function () {
                    t(this).replaceWith(this.childNodes)
                }), Fe.scrollTop(0);
                var e = [y, z, j];
                t.each(e, function (e, i) {
                    t("." + i).removeClass(i)
                })
            }

            function ze(t, e, i) {
                a[t] = e, "internal" !== i && (si[t] = e)
            }

            function Le() {
                return t("html").hasClass(u) ? void De("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (a.continuousVertical && (a.loopTop || a.loopBottom) && (a.continuousVertical = !1, De("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), a.scrollBar && a.scrollOverflow && De("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), a.continuousVertical && a.scrollBar && (a.continuousVertical = !1, De("warn", "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), void t.each(a.anchors, function (e, i) {
                    var n = it.find("[name]").filter(function () {
                            return t(this).attr("name") && t(this).attr("name").toLowerCase() == i.toLowerCase()
                        }),
                        o = it.find("[id]").filter(function () {
                            return t(this).attr("id") && t(this).attr("id").toLowerCase() == i.toLowerCase()
                        });
                    (o.length || n.length) && (De("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), o.length && De("error", '"' + i + '" is is being used by another element `id` property'), n.length && De("error", '"' + i + '" is is being used by another element `name` property'))
                }))
            }

            function De(t, e) {
                console && console[t] && console[t]("fullPage: " + e)
            }
            if (t("html").hasClass(u)) return void Le();
            var Fe = t("html, body"),
                Be = t("body"),
                je = t.fn.fullpage;
            a = t.extend({
                menu: !1,
                anchors: [],
                lockAnchors: !1,
                navigation: !1,
                navigationPosition: "right",
                navigationTooltips: [],
                showActiveTooltip: !1,
                slidesNavigation: !1,
                slidesNavPosition: "bottom",
                scrollBar: !1,
                hybrid: !1,
                css3: !0,
                scrollingSpeed: 700,
                autoScrolling: !0,
                fitToSection: !0,
                fitToSectionDelay: 1e3,
                easing: "easeInOutCubic",
                easingcss3: "ease",
                loopBottom: !1,
                loopTop: !1,
                loopHorizontal: !0,
                continuousVertical: !1,
                normalScrollElements: null,
                scrollOverflow: !1,
                scrollOverflowHandler: ot,
                scrollOverflowOptions: null,
                touchSensitivity: 5,
                normalScrollElementTouchThreshold: 5,
                bigSectionsDestination: null,
                keyboardScrolling: !0,
                animateAnchor: !0,
                recordHistory: !0,
                controlArrows: !0,
                controlArrowColor: "#fff",
                verticalCentered: !0,
                sectionsColor: [],
                paddingTop: 0,
                paddingBottom: 0,
                fixedElements: null,
                responsive: 0,
                responsiveWidth: 0,
                responsiveHeight: 0,
                sectionSelector: _,
                slideSelector: R,
                afterLoad: null,
                onLeave: null,
                afterRender: null,
                afterResize: null,
                afterReBuild: null,
                afterSlideLoad: null,
                onSlideLeave: null
            }, a);
            var qe, Ne, We, He = !1,
                $e = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                Ye = "ontouchstart" in e || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
                Xe = t(this),
                Ue = et.height(),
                Qe = !1,
                Ge = !0,
                Ke = !0,
                Ve = [],
                Ze = {};
            Ze.m = {
                up: !0,
                down: !0,
                left: !0,
                right: !0
            }, Ze.k = t.extend(!0, {}, Ze.m);
            var Je, ti, ei, ii, ni, oi, si = t.extend(!0, {}, a);
            Le(), nt.click = Ye, nt = t.extend(nt, a.scrollOverflowOptions), t.extend(t.easing, {
                easeInOutCubic: function (t, e, i, n, o) {
                    return (e /= o / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
                }
            }), je.setAutoScrolling = function (e, i) {
                ze("autoScrolling", e, i);
                var n = t(b);
                a.autoScrolling && !a.scrollBar ? (Fe.css({
                    overflow: "hidden",
                    height: "100%"
                }), je.setRecordHistory(si.recordHistory, "internal"), Xe.css({
                    "-ms-touch-action": "none",
                    "touch-action": "none"
                }), n.length && Ee(n.position().top)) : (Fe.css({
                    overflow: "visible",
                    height: "initial"
                }), je.setRecordHistory(!1, "internal"), Xe.css({
                    "-ms-touch-action": "",
                    "touch-action": ""
                }), Ee(0), n.length && Fe.scrollTop(n.position().top))
            }, je.setRecordHistory = function (t, e) {
                ze("recordHistory", t, e)
            }, je.setScrollingSpeed = function (t, e) {
                ze("scrollingSpeed", t, e)
            }, je.setFitToSection = function (t, e) {
                ze("fitToSection", t, e)
            }, je.setLockAnchors = function (t) {
                a.lockAnchors = t
            }, je.setMouseWheelScrolling = function (t) {
                t ? (xe(), Te()) : (be(), Se())
            }, je.setAllowScrolling = function (e, i) {
                "undefined" != typeof i ? (i = i.replace(/ /g, "").split(","), t.each(i, function (t, i) {
                    Ie(e, i, "m")
                })) : e ? (je.setMouseWheelScrolling(!0), ke()) : (je.setMouseWheelScrolling(!1), Ce())
            }, je.setKeyboardScrolling = function (e, i) {
                "undefined" != typeof i ? (i = i.replace(/ /g, "").split(","), t.each(i, function (t, i) {
                    Ie(e, i, "k")
                })) : a.keyboardScrolling = e
            }, je.moveSectionUp = function () {
                var e = t(b).prev(w);
                e.length || !a.loopTop && !a.continuousVertical || (e = t(w).last()), e.length && Pt(e, null, !0)
            }, je.moveSectionDown = function () {
                var e = t(b).next(w);
                e.length || !a.loopBottom && !a.continuousVertical || (e = t(w).first()), e.length && Pt(e, null, !1)
            }, je.silentMoveTo = function (t, e) {
                je.setScrollingSpeed(0, "internal"), je.moveTo(t, e), je.setScrollingSpeed(si.scrollingSpeed, "internal")
            }, je.moveTo = function (t, e) {
                var i = de(t);
                "undefined" != typeof e ? pe(t, e) : i.length > 0 && Pt(i)
            }, je.moveSlideRight = function (t) {
                kt("next", t)
            }, je.moveSlideLeft = function (t) {
                kt("prev", t)
            }, je.reBuild = function (e) {
                if (!Xe.hasClass(d)) {
                    Qe = !0, Ue = et.height(), t(w).each(function () {
                        var e = t(this).find(B),
                            i = t(this).find(L);
                        a.verticalCentered && t(this).find(k).css("height", ce(t(this)) + "px"), t(this).css("height", Ue + "px"), a.scrollOverflow && (i.length ? i.each(function () {
                            ae(t(this))
                        }) : ae(t(this))), i.length > 1 && Vt(e, e.find(D))
                    });
                    var i = t(b),
                        n = i.index(w);
                    n && je.silentMoveTo(n + 1), Qe = !1, t.isFunction(a.afterResize) && e && a.afterResize.call(Xe), t.isFunction(a.afterReBuild) && !e && a.afterReBuild.call(Xe)
                }
            }, je.setResponsive = function (e) {
                var i = Be.hasClass(c);
                e ? i || (je.setAutoScrolling(!1, "internal"), je.setFitToSection(!1, "internal"), t(O).hide(), Be.addClass(c)) : i && (je.setAutoScrolling(si.autoScrolling, "internal"), je.setFitToSection(si.autoScrolling, "internal"), t(O).show(), Be.removeClass(c))
            }, t(this).length && (l(), Y());
            var ri = !1,
                ai = 0,
                li = 0,
                ci = 0,
                hi = 0,
                di = 0,
                ui = (new Date).getTime(),
                pi = 0,
                fi = 0,
                mi = Ue;
            je.destroy = function (e) {
                je.setAutoScrolling(!1, "internal"), je.setAllowScrolling(!1), je.setKeyboardScrolling(!1), Xe.addClass(d), clearTimeout(ei), clearTimeout(ti), clearTimeout(Je), clearTimeout(ii), clearTimeout(ni), et.off("scroll", mt).off("hashchange", jt).off("resize", Zt), it.off("click", O + " a").off("mouseenter", O + " li").off("mouseleave", O + " li").off("click", $).off("mouseover", a.normalScrollElements).off("mouseout", a.normalScrollElements), t(w).off("click", X), clearTimeout(ei), clearTimeout(ti), e && Re()
            }
        }, "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function () {
            this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this)
        }, IScroll.prototype.wheelOff = function () {
            this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this)
        });
        var ot = {
            refreshId: null,
            iScrollInstances: [],
            onLeave: function () {
                var e = t(b).find(l).data("iscrollInstance");
                "undefined" != typeof e && e && e.wheelOff()
            },
            afterLoad: function () {
                var e = t(b).find(l).data("iscrollInstance");
                "undefined" != typeof e && e && e.wheelOn()
            },
            create: function (e, i) {
                var n = e.find(l);
                n.height(i), n.each(function () {
                    var e = jQuery(this),
                        i = e.data("iscrollInstance");
                    i && t.each(ot.iScrollInstances, function () {
                        t(this).destroy()
                    }), i = new IScroll(e.get(0), nt), ot.iScrollInstances.push(i), e.data("iscrollInstance", i)
                })
            },
            isScrolled: function (t, e) {
                var i = e.data("iscrollInstance");
                return !i || ("top" === t ? i.y >= 0 && !e.scrollTop() : "bottom" === t ? 0 - i.y + e.scrollTop() + 1 + e.innerHeight() >= e[0].scrollHeight : void 0)
            },
            scrollable: function (t) {
                return t.find(B).length ? t.find(D).find(l) : t.find(l)
            },
            scrollHeight: function (t) {
                return t.find(l).children().first().get(0).scrollHeight
            },
            remove: function (t) {
                var e = t.find(l);
                if (e.length) {
                    var i = e.data("iscrollInstance");
                    i.destroy(), e.data("iscrollInstance", null)
                }
                t.find(l).children().first().children().first().unwrap().unwrap()
            },
            update: function (e, i) {
                clearTimeout(ot.refreshId), ot.refreshId = setTimeout(function () {
                    t.each(ot.iScrollInstances, function () {
                        t(this).get(0).refresh()
                    })
                }, 150), e.find(l).css("height", i + "px").parent().css("height", i + "px")
            },
            wrapContent: function () {
                return '<div class="' + a + '"><div class="fp-scroller"></div></div>'
            }
        }
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }(this, function () {
        function t() {}
        var e = t.prototype;
        return e.on = function (t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return n.indexOf(e) == -1 && n.push(e), this
            }
        }, e.once = function (t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {},
                    n = i[t] = i[t] || [];
                return n[e] = !0, this
            }
        }, e.off = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return n != -1 && i.splice(n, 1), this
            }
        }, e.emitEvent = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = 0,
                    o = i[n];
                e = e || [];
                for (var s = this._onceEvents && this._onceEvents[t]; o;) {
                    var r = s && s[o];
                    r && (this.off(t, o), delete s[o]), o.apply(this, e), n += r ? 0 : 1, o = i[n]
                }
                return this
            }
        }, t
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
    }(window, function (t, e) {
        function i(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function n(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function o(t, e, s) {
            return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? s = e : i(this.options, e), s && this.on("always", s), this.getImages(), a && (this.jqDeferred = new a.Deferred), void setTimeout(function () {
                this.check()
            }.bind(this))) : new o(t, e, s)
        }

        function s(t) {
            this.img = t
        }

        function r(t, e) {
            this.url = t, this.element = e, this.img = new Image
        }
        var a = t.jQuery,
            l = t.console;
        o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, o.prototype.addElementImages = function (t) {
            "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
            var e = t.nodeType;
            if (e && c[e]) {
                for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                    var o = i[n];
                    this.addImage(o)
                }
                if ("string" == typeof this.options.background) {
                    var s = t.querySelectorAll(this.options.background);
                    for (n = 0; n < s.length; n++) {
                        var r = s[n];
                        this.addElementBackgroundImages(r)
                    }
                }
            }
        };
        var c = {
            1: !0,
            9: !0,
            11: !0
        };
        return o.prototype.addElementBackgroundImages = function (t) {
            var e = getComputedStyle(t);
            if (e)
                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                    var o = n && n[2];
                    o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
                }
        }, o.prototype.addImage = function (t) {
            var e = new s(t);
            this.images.push(e)
        }, o.prototype.addBackground = function (t, e) {
            var i = new r(t, e);
            this.images.push(i)
        }, o.prototype.check = function () {
            function t(t, i, n) {
                setTimeout(function () {
                    e.progress(t, i, n)
                })
            }
            var e = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (e) {
                e.once("progress", t), e.check()
            }) : void this.complete()
        }, o.prototype.progress = function (t, e, i) {
            this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + i, t, e)
        }, o.prototype.complete = function () {
            var t = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var e = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[e](this)
            }
        }, s.prototype = Object.create(e.prototype), s.prototype.check = function () {
            var t = this.getIsImageComplete();
            return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
        }, s.prototype.getIsImageComplete = function () {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, s.prototype.confirm = function (t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
        }, s.prototype.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, s.prototype.onload = function () {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, s.prototype.onerror = function () {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, s.prototype.unbindEvents = function () {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, r.prototype = Object.create(s.prototype), r.prototype.check = function () {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
            var t = this.getIsImageComplete();
            t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, r.prototype.unbindEvents = function () {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, r.prototype.confirm = function (t, e) {
            this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
        }, o.makeJQueryPlugin = function (e) {
            e = e || t.jQuery, e && (a = e, a.fn.imagesLoaded = function (t, e) {
                var i = new o(this, t, e);
                return i.jqDeferred.promise(a(this))
            })
        }, o.makeJQueryPlugin(), o
    }),
    function (t) {
        t.isScrollToFixed = function (e) {
            return !!t(e).data("ScrollToFixed")
        }, t.ScrollToFixed = function (e, i) {
            function n() {
                T.trigger("preUnfixed.ScrollToFixed"), h(), T.trigger("unfixed.ScrollToFixed"), A = -1, S = T.offset().top, k = T.offset().left, g.options.offsets && (k += T.offset().left - T.position().left), C == -1 && (C = k), v = T.css("position"), x = !0, g.options.bottom != -1 && (T.trigger("preFixed.ScrollToFixed"), l(), T.trigger("fixed.ScrollToFixed"))
            }

            function o() {
                var t = g.options.limit;
                return t ? "function" == typeof t ? t.apply(T) : t : 0
            }

            function s() {
                return "fixed" === v
            }

            function r() {
                return "absolute" === v
            }

            function a() {
                return !(s() || r())
            }

            function l() {
                if (!s()) {
                    var t = T[0].getBoundingClientRect();
                    P.css({
                        display: T.css("display"),
                        width: t.width,
                        height: t.height,
                        "float": T.css("float")
                    }), cssOptions = {
                        "z-index": g.options.zIndex,
                        position: "fixed",
                        top: g.options.bottom == -1 ? u() : "",
                        bottom: g.options.bottom == -1 ? "" : g.options.bottom,
                        "margin-left": "0px"
                    }, g.options.dontSetWidth || (cssOptions.width = T.css("width")), T.css(cssOptions), T.addClass(g.options.baseClassName), g.options.className && T.addClass(g.options.className), v = "fixed"
                }
            }

            function c() {
                var t = o(),
                    e = k;
                g.options.removeOffsets && (e = "", t -= S), cssOptions = {
                    position: "absolute",
                    top: t,
                    left: e,
                    "margin-left": "0px",
                    bottom: ""
                }, g.options.dontSetWidth || (cssOptions.width = T.css("width")), T.css(cssOptions), v = "absolute"
            }

            function h() {
                a() || (A = -1, P.css("display", "none"), T.css({
                    "z-index": b,
                    width: "",
                    position: _,
                    left: "",
                    top: w,
                    "margin-left": ""
                }), T.removeClass("scroll-to-fixed-fixed"), g.options.className && T.removeClass(g.options.className), v = null)
            }

            function d(t) {
                t != A && (T.css("left", k - t), A = t)
            }

            function u() {
                var t = g.options.marginTop;
                return t ? "function" == typeof t ? t.apply(T) : t : 0
            }

            function p() {
                if (t.isScrollToFixed(T) && !T.is(":hidden")) {
                    var e = x,
                        i = a();
                    x ? a() && (S = T.offset().top, k = T.offset().left) : n();
                    var p = t(window).scrollLeft(),
                        v = t(window).scrollTop(),
                        y = o();
                    g.options.minWidth && t(window).width() < g.options.minWidth ? a() && e || (m(), T.trigger("preUnfixed.ScrollToFixed"), h(), T.trigger("unfixed.ScrollToFixed")) : g.options.maxWidth && t(window).width() > g.options.maxWidth ? a() && e || (m(), T.trigger("preUnfixed.ScrollToFixed"), h(), T.trigger("unfixed.ScrollToFixed")) : g.options.bottom == -1 ? y > 0 && v >= y - u() ? i || r() && e || (m(), T.trigger("preAbsolute.ScrollToFixed"), c(), T.trigger("unfixed.ScrollToFixed")) : v >= S - u() ? (s() && e || (m(), T.trigger("preFixed.ScrollToFixed"), l(), A = -1, T.trigger("fixed.ScrollToFixed")), d(p)) : a() && e || (m(), T.trigger("preUnfixed.ScrollToFixed"), h(), T.trigger("unfixed.ScrollToFixed")) : y > 0 ? v + t(window).height() - T.outerHeight(!0) >= y - (u() || -f()) ? s() && (m(), T.trigger("preUnfixed.ScrollToFixed"), "absolute" === _ ? c() : h(), T.trigger("unfixed.ScrollToFixed")) : (s() || (m(), T.trigger("preFixed.ScrollToFixed"), l()), d(p), T.trigger("fixed.ScrollToFixed")) : d(p)
                }
            }

            function f() {
                return g.options.bottom ? g.options.bottom : 0
            }

            function m() {
                var t = T.css("position");
                "absolute" == t ? T.trigger("postAbsolute.ScrollToFixed") : "fixed" == t ? T.trigger("postFixed.ScrollToFixed") : T.trigger("postUnfixed.ScrollToFixed")
            }
            var g = this;
            g.$el = t(e), g.el = e, g.$el.data("ScrollToFixed", g);
            var v, _, y, w, b, x = !1,
                T = g.$el,
                S = 0,
                k = 0,
                C = -1,
                A = -1,
                P = null,
                O = function (t) {
                    T.is(":visible") ? (x = !1, p()) : h()
                },
                E = function (t) {
                    window.requestAnimationFrame ? requestAnimationFrame(p) : p()
                },
                M = function (t) {
                    t = t || window.event, t.preventDefault && t.preventDefault(), t.returnValue = !1
                };
            g.init = function () {
                g.options = t.extend({}, t.ScrollToFixed.defaultOptions, i), b = T.css("z-index"), g.$el.css("z-index", g.options.zIndex), P = t("<div />"), v = T.css("position"), _ = T.css("position"), y = T.css("float"), w = T.css("top"), a() && g.$el.after(P), t(window).bind("resize.ScrollToFixed", O), t(window).bind("scroll.ScrollToFixed", E), "ontouchmove" in window && t(window).bind("touchmove.ScrollToFixed", p), g.options.preFixed && T.bind("preFixed.ScrollToFixed", g.options.preFixed), g.options.postFixed && T.bind("postFixed.ScrollToFixed", g.options.postFixed), g.options.preUnfixed && T.bind("preUnfixed.ScrollToFixed", g.options.preUnfixed), g.options.postUnfixed && T.bind("postUnfixed.ScrollToFixed", g.options.postUnfixed), g.options.preAbsolute && T.bind("preAbsolute.ScrollToFixed", g.options.preAbsolute), g.options.postAbsolute && T.bind("postAbsolute.ScrollToFixed", g.options.postAbsolute), g.options.fixed && T.bind("fixed.ScrollToFixed", g.options.fixed), g.options.unfixed && T.bind("unfixed.ScrollToFixed", g.options.unfixed), g.options.spacerClass && P.addClass(g.options.spacerClass), T.bind("resize.ScrollToFixed", function () {
                    P.height(T.height())
                }), T.bind("scroll.ScrollToFixed", function () {
                    T.trigger("preUnfixed.ScrollToFixed"), h(), T.trigger("unfixed.ScrollToFixed"), p()
                }), T.bind("detach.ScrollToFixed", function (e) {
                    M(e), T.trigger("preUnfixed.ScrollToFixed"), h(), T.trigger("unfixed.ScrollToFixed"), t(window).unbind("resize.ScrollToFixed", O), t(window).unbind("scroll.ScrollToFixed", E), T.unbind(".ScrollToFixed"), P.remove(), g.$el.removeData("ScrollToFixed")
                }), O()
            }, g.init()
        }, t.ScrollToFixed.defaultOptions = {
            marginTop: 0,
            limit: 0,
            bottom: -1,
            zIndex: 1e3,
            baseClassName: "scroll-to-fixed-fixed"
        }, t.fn.scrollToFixed = function (e) {
            return this.each(function () {
                new t.ScrollToFixed(this, e)
            })
        }
    }(jQuery),
    function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function (t) {
        "use strict";
        var e = window.Slick || {};
        e = function () {
            function e(e, n) {
                var o, s = this;
                s.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(e),
                    appendDots: t(e),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (e, i) {
                        return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, s.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, t.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = t(e), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = t(e).data("slick") || {}, s.options = t.extend({}, s.defaults, n, o), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, "undefined" != typeof document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = t.proxy(s.autoPlay, s), s.autoPlayClear = t.proxy(s.autoPlayClear, s), s.autoPlayIterator = t.proxy(s.autoPlayIterator, s), s.changeSlide = t.proxy(s.changeSlide, s), s.clickHandler = t.proxy(s.clickHandler, s), s.selectHandler = t.proxy(s.selectHandler, s), s.setPosition = t.proxy(s.setPosition, s), s.swipeHandler = t.proxy(s.swipeHandler, s), s.dragHandler = t.proxy(s.dragHandler, s), s.keyHandler = t.proxy(s.keyHandler, s), s.instanceUid = i++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
            }
            var i = 0;
            return e
        }(), e.prototype.activateADA = function () {
            var t = this;
            t.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, e.prototype.addSlide = e.prototype.slickAdd = function (e, i, n) {
            var o = this;
            if ("boolean" == typeof i) n = i, i = null;
            else if (i < 0 || i >= o.slideCount) return !1;
            o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : n ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : n === !0 ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (e, i) {
                t(i).attr("data-slick-index", e)
            }), o.$slidesCache = o.$slides, o.reinit()
        }, e.prototype.animateHeight = function () {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({
                    height: e
                }, t.options.speed)
            }
        }, e.prototype.animateSlide = function (e, i) {
            var n = {},
                o = this;
            o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (e = -e), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
                left: e
            }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
                top: e
            }, o.options.speed, o.options.easing, i) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), t({
                animStart: o.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: o.options.speed,
                easing: o.options.easing,
                step: function (t) {
                    t = Math.ceil(t), o.options.vertical === !1 ? (n[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(n)) : (n[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(n))
                },
                complete: function () {
                    i && i.call()
                }
            })) : (o.applyTransition(), e = Math.ceil(e), o.options.vertical === !1 ? n[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function () {
                o.disableTransition(), i.call()
            }, o.options.speed))
        }, e.prototype.getNavTarget = function () {
            var e = this,
                i = e.options.asNavFor;
            return i && null !== i && (i = t(i).not(e.$slider)), i
        }, e.prototype.asNavFor = function (e) {
            var i = this,
                n = i.getNavTarget();
            null !== n && "object" == typeof n && n.each(function () {
                var i = t(this).slick("getSlick");
                i.unslicked || i.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function (t) {
            var e = this,
                i = {};
            e.options.fade === !1 ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.autoPlay = function () {
            var t = this;
            t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function () {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function () {
            var t = this,
                e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (t.options.infinite === !1 && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 === 0 && (t.direction = 1))), t.slideHandler(e))
        }, e.prototype.buildArrows = function () {
            var e = this;
            e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, e.prototype.buildDots = function () {
            var e, i, n = this;
            if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
                for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
                n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, e.prototype.buildOut = function () {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, i) {
                t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode !== !0 && e.options.swipeToSlide !== !0 || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
        }, e.prototype.buildRows = function () {
            var t, e, i, n, o, s, r, a = this;
            if (n = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
                for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), t = 0; t < o; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var c = document.createElement("div");
                        for (i = 0; i < a.options.slidesPerRow; i++) {
                            var h = t * r + (e * a.options.slidesPerRow + i);
                            s.get(h) && c.appendChild(s.get(h))
                        }
                        l.appendChild(c)
                    }
                    n.appendChild(l)
                }
                a.$slider.empty().append(n), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, e.prototype.checkResponsive = function (e, i) {
            var n, o, s, r = this,
                a = !1,
                l = r.$slider.width(),
                c = window.innerWidth || t(window).width();
            if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                o = null;
                for (n in r.breakpoints) r.breakpoints.hasOwnProperty(n) && (r.originalSettings.mobileFirst === !1 ? s < r.breakpoints[n] && (o = r.breakpoints[n]) : s > r.breakpoints[n] && (o = r.breakpoints[n]));
                null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = o), e || a === !1 || r.$slider.trigger("breakpoint", [r, a])
            }
        }, e.prototype.changeSlide = function (e, i) {
            var n, o, s, r = this,
                a = t(e.currentTarget);
            switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), s = r.slideCount % r.options.slidesToScroll !== 0, n = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
                case "previous":
                    o = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, i);
                    break;
                case "next":
                    o = 0 === n ? r.options.slidesToScroll : n, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, i);
                    break;
                case "index":
                    var l = 0 === e.data.index ? 0 : e.data.index || a.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function (t) {
            var e, i, n = this;
            if (e = n.getNavigableIndexes(), i = 0, t > e[e.length - 1]) t = e[e.length - 1];
            else
                for (var o in e) {
                    if (t < e[o]) {
                        t = i;
                        break
                    }
                    i = e[o]
                }
            return t
        }, e.prototype.cleanUpEvents = function () {
            var e = this;
            e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.cleanUpSlideEvents = function () {
            var e = this;
            e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.cleanUpRows = function () {
            var t, e = this;
            e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.empty().append(t))
        }, e.prototype.clickHandler = function (t) {
            var e = this;
            e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, e.prototype.destroy = function (e) {
            var i = this;
            i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
                t(this).attr("style", t(this).data("originalStyling"))
            }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
        }, e.prototype.disableTransition = function (t) {
            var e = this,
                i = {};
            i[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
        }, e.prototype.fadeSlide = function (t, e) {
            var i = this;
            i.cssTransitions === !1 ? (i.$slides.eq(t).css({
                zIndex: i.options.zIndex
            }), i.$slides.eq(t).animate({
                opacity: 1
            }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
                opacity: 1,
                zIndex: i.options.zIndex
            }), e && setTimeout(function () {
                i.disableTransition(t), e.call()
            }, i.options.speed))
        }, e.prototype.fadeSlideOut = function (t) {
            var e = this;
            e.cssTransitions === !1 ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }, e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.focusHandler = function () {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (i) {
                i.stopImmediatePropagation();
                var n = t(this);
                setTimeout(function () {
                    e.options.pauseOnFocus && (e.focussed = n.is(":focus"), e.autoPlay())
                }, 0)
            })
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
            var t = this;
            return t.currentSlide
        }, e.prototype.getDotCount = function () {
            var t = this,
                e = 0,
                i = 0,
                n = 0;
            if (t.options.infinite === !0)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (t.options.centerMode === !0) n = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return n - 1
        }, e.prototype.getLeft = function (t) {
            var e, i, n, o = this,
                s = 0;
            return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, s = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll !== 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, s = (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, s = o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, s = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = o.options.vertical === !1 ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + s, o.options.variableWidth === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = o.options.rtl === !0 ? n[0] ? (o.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1 : 0 : n[0] ? n[0].offsetLeft * -1 : 0, o.options.centerMode === !0 && (n = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = o.options.rtl === !0 ? n[0] ? (o.$slideTrack.width() - n[0].offsetLeft - n.width()) * -1 : 0 : n[0] ? n[0].offsetLeft * -1 : 0, e += (o.$list.width() - n.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function (t) {
            var e = this;
            return e.options[t]
        }, e.prototype.getNavigableIndexes = function () {
            var t, e = this,
                i = 0,
                n = 0,
                o = [];
            for (e.options.infinite === !1 ? t = e.slideCount : (i = e.options.slidesToScroll * -1, n = e.options.slidesToScroll * -1, t = 2 * e.slideCount); i < t;) o.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return o
        }, e.prototype.getSlick = function () {
            return this
        }, e.prototype.getSlideCount = function () {
            var e, i, n, o = this;
            return n = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function (e, s) {
                if (s.offsetLeft - n + t(s).outerWidth() / 2 > o.swipeLeft * -1) return i = s, !1
            }), e = Math.abs(t(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
        }, e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
            var i = this;
            i.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, e.prototype.init = function (e) {
            var i = this;
            t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), i.options.accessibility === !0 && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
        }, e.prototype.initADA = function () {
            var e = this;
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (i) {
                t(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + e.instanceUid + i
                })
            }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function (i) {
                t(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + e.instanceUid + i,
                    id: "slick-slide" + e.instanceUid + i
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
        }, e.prototype.initArrowEvents = function () {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, t.changeSlide))
        }, e.prototype.initDotEvents = function () {
            var e = this;
            e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.initSlideEvents = function () {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
        }, e.prototype.initializeEvents = function () {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.initUI = function () {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show()
        }, e.prototype.keyHandler = function (t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "next" : "previous"
                }
            }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "previous" : "next"
                }
            }))
        }, e.prototype.lazyLoad = function () {
            function e(e) {
                t("img[data-lazy]", e).each(function () {
                    var e = t(this),
                        i = t(this).attr("data-lazy"),
                        n = document.createElement("img");
                    n.onload = function () {
                        e.animate({
                            opacity: 0
                        }, 100, function () {
                            e.attr("src", i).animate({
                                opacity: 1
                            }, 200, function () {
                                e.removeAttr("data-lazy").removeClass("slick-loading")
                            }), r.$slider.trigger("lazyLoaded", [r, e, i])
                        })
                    }, n.onerror = function () {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, i])
                    }, n.src = i
                })
            }
            var i, n, o, s, r = this;
            r.options.centerMode === !0 ? r.options.infinite === !0 ? (o = r.currentSlide + (r.options.slidesToShow / 2 + 1), s = o + r.options.slidesToShow + 2) : (o = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), s = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (o = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, s = Math.ceil(o + r.options.slidesToShow), r.options.fade === !0 && (o > 0 && o--, s <= r.slideCount && s++)), i = r.$slider.find(".slick-slide").slice(o, s), e(i), r.slideCount <= r.options.slidesToShow ? (n = r.$slider.find(".slick-slide"), e(n)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (n = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(n)) : 0 === r.currentSlide && (n = r.$slider.find(".slick-cloned").slice(r.options.slidesToShow * -1), e(n))
        }, e.prototype.loadSlider = function () {
            var t = this;
            t.setPosition(), t.$slideTrack.css({
                opacity: 1
            }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function () {
            var t = this;
            t.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, e.prototype.orientationChange = function () {
            var t = this;
            t.checkResponsive(), t.setPosition()
        }, e.prototype.pause = e.prototype.slickPause = function () {
            var t = this;
            t.autoPlayClear(), t.paused = !0
        }, e.prototype.play = e.prototype.slickPlay = function () {
            var t = this;
            t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
        }, e.prototype.postSlide = function (t) {
            var e = this;
            e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), e.options.accessibility === !0 && e.initADA())
        }, e.prototype.prev = e.prototype.slickPrev = function () {
            var t = this;
            t.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, e.prototype.preventDefault = function (t) {
            t.preventDefault()
        }, e.prototype.progressiveLazyLoad = function (e) {
            e = e || 1;
            var i, n, o, s = this,
                r = t("img[data-lazy]", s.$slider);
            r.length ? (i = r.first(), n = i.attr("data-lazy"), o = document.createElement("img"), o.onload = function () {
                i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), s.options.adaptiveHeight === !0 && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, i, n]), s.progressiveLazyLoad()
            }, o.onerror = function () {
                e < 3 ? setTimeout(function () {
                    s.progressiveLazyLoad(e + 1)
                }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, i, n]), s.progressiveLazyLoad())
            }, o.src = n) : s.$slider.trigger("allImagesLoaded", [s])
        }, e.prototype.refresh = function (e) {
            var i, n, o = this;
            n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {
                currentSlide: i
            }), o.init(), e || o.changeSlide({
                data: {
                    message: "index",
                    index: i
                }
            }, !1)
        }, e.prototype.registerBreakpoints = function () {
            var e, i, n, o = this,
                s = o.options.responsive || null;
            if ("array" === t.type(s) && s.length) {
                o.respondTo = o.options.respondTo || "window";
                for (e in s)
                    if (n = o.breakpoints.length - 1, i = s[e].breakpoint, s.hasOwnProperty(e)) {
                        for (; n >= 0;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                        o.breakpoints.push(i), o.breakpointSettings[i] = s[e].settings
                    }
                o.breakpoints.sort(function (t, e) {
                    return o.options.mobileFirst ? t - e : e - t
                })
            }
        }, e.prototype.reinit = function () {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, e.prototype.resize = function () {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
                e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, i) {
            var n = this;
            return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : n.slideCount - 1) : t = e === !0 ? --t : t, !(n.slideCount < 1 || t < 0 || t > n.slideCount - 1) && (n.unload(),
                i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
        }, e.prototype.setCSS = function (t) {
            var e, i, n = this,
                o = {};
            n.options.rtl === !0 && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", o[n.positionProp] = t, n.transformsEnabled === !1 ? n.$slideTrack.css(o) : (o = {}, n.cssTransitions === !1 ? (o[n.animType] = "translate(" + e + ", " + i + ")", n.$slideTrack.css(o)) : (o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)", n.$slideTrack.css(o)))
        }, e.prototype.setDimensions = function () {
            var t = this;
            t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }, e.prototype.setFade = function () {
            var e, i = this;
            i.$slides.each(function (n, o) {
                e = i.slideWidth * n * -1, i.options.rtl === !0 ? t(o).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                }) : t(o).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }), i.$slides.eq(i.currentSlide).css({
                zIndex: i.options.zIndex - 1,
                opacity: 1
            })
        }, e.prototype.setHeight = function () {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function () {
            var e, i, n, o, s, r = this,
                a = !1;
            if ("object" === t.type(arguments[0]) ? (n = arguments[0], a = arguments[1], s = "multiple") : "string" === t.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? s = "responsive" : "undefined" != typeof arguments[1] && (s = "single")), "single" === s) r.options[n] = o;
            else if ("multiple" === s) t.each(n, function (t, e) {
                r.options[t] = e
            });
            else if ("responsive" === s)
                for (i in o)
                    if ("array" !== t.type(r.options.responsive)) r.options.responsive = [o[i]];
                    else {
                        for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === o[i].breakpoint && r.options.responsive.splice(e, 1), e--;
                        r.options.responsive.push(o[i])
                    }
            a && (r.unload(), r.reinit())
        }, e.prototype.setPosition = function () {
            var t = this;
            t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, e.prototype.setProps = function () {
            var t = this,
                e = document.body.style;
            t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
        }, e.prototype.setSlideClasses = function (t) {
            var e, i, n, o, s = this;
            i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), s.options.centerMode === !0 ? (e = Math.floor(s.options.slidesToShow / 2), s.options.infinite === !0 && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = s.options.infinite === !0 ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
        }, e.prototype.setupInfinite = function () {
            var e, i, n, o = this;
            if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (i = null, o.slideCount > o.options.slidesToShow)) {
                for (n = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; e -= 1) i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
                for (e = 0; e < n; e += 1) i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
                o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                    t(this).attr("id", "")
                })
            }
        }, e.prototype.interrupt = function (t) {
            var e = this;
            t || e.autoPlay(), e.interrupted = t
        }, e.prototype.selectHandler = function (e) {
            var i = this,
                n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                o = parseInt(n.attr("data-slick-index"));
            return o || (o = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(o), void i.asNavFor(o)) : void i.slideHandler(o)
        }, e.prototype.slideHandler = function (t, e, i) {
            var n, o, s, r, a, l = null,
                c = this;
            if (e = e || !1, (c.animating !== !0 || c.options.waitForAnimate !== !0) && !(c.options.fade === !0 && c.currentSlide === t || c.slideCount <= c.options.slidesToShow)) return e === !1 && c.asNavFor(t), n = t, l = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, c.options.infinite === !1 && c.options.centerMode === !1 && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(r, function () {
                c.postSlide(n)
            }) : c.postSlide(n))) : c.options.infinite === !1 && c.options.centerMode === !0 && (t < 0 || t > c.slideCount - c.options.slidesToScroll) ? void(c.options.fade === !1 && (n = c.currentSlide, i !== !0 ? c.animateSlide(r, function () {
                c.postSlide(n)
            }) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll !== 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll !== 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = c.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), c.options.fade === !0 ? (i !== !0 ? (c.fadeSlideOut(s), c.fadeSlide(o, function () {
                c.postSlide(o)
            })) : c.postSlide(o), void c.animateHeight()) : void(i !== !0 ? c.animateSlide(l, function () {
                c.postSlide(o)
            }) : c.postSlide(o)))
        }, e.prototype.startLoad = function () {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, e.prototype.swipeDirection = function () {
            var t, e, i, n, o = this;
            return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), n = Math.round(180 * i / Math.PI), n < 0 && (n = 360 - Math.abs(n)), n <= 45 && n >= 0 ? o.options.rtl === !1 ? "left" : "right" : n <= 360 && n >= 315 ? o.options.rtl === !1 ? "left" : "right" : n >= 135 && n <= 225 ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? n >= 35 && n <= 135 ? "down" : "up" : "vertical"
        }, e.prototype.swipeEnd = function (t) {
            var e, i, n = this;
            if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
            if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                switch (i = n.swipeDirection()) {
                    case "left":
                    case "down":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                }
                "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, e.prototype.swipeHandler = function (t) {
            var e = this;
            if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && t.type.indexOf("mouse") !== -1)) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function (t) {
            var e, i, n, o, s, r = this;
            return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!r.dragging || s && 1 !== s.length) && (e = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, r.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), r.options.verticalSwiping === !0 && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), i = r.swipeDirection(), "vertical" !== i ? (void 0 !== t.originalEvent && r.touchObject.swipeLength > 4 && t.preventDefault(), o = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), r.options.verticalSwiping === !0 && (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1), n = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (n = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.options.vertical === !1 ? r.swipeLeft = e + n * o : r.swipeLeft = e + n * (r.$list.height() / r.listWidth) * o, r.options.verticalSwiping === !0 && (r.swipeLeft = e + n * o), r.options.fade !== !0 && r.options.touchMove !== !1 && (r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0)
        }, e.prototype.swipeStart = function (t) {
            var e, i = this;
            return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(i.dragging = !0))
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function () {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function (t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]), e.destroy()
        }, e.prototype.updateArrows = function () {
            var t, e = this;
            t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function () {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, e.prototype.visibility = function () {
            var t = this;
            t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
        }, t.fn.slick = function () {
            var t, i, n = this,
                o = arguments[0],
                s = Array.prototype.slice.call(arguments, 1),
                r = n.length;
            for (t = 0; t < r; t++)
                if ("object" == typeof o || "undefined" == typeof o ? n[t].slick = new e(n[t], o) : i = n[t].slick[o].apply(n[t].slick, s), "undefined" != typeof i) return i;
            return n
        }
    }),
    function (t, e, i, n) {
        "use strict";
        if (!e.history.pushState) return t.fn.smoothState = function () {
            return this
        }, void(t.fn.smoothState.options = {});
        if (!t.fn.smoothState) {
            var o = t("html, body"),
                s = e.console,
                r = {
                    debug: !1,
                    anchors: "a",
                    forms: "form",
                    blacklist: ".no-smoothState",
                    prefetch: !1,
                    cacheLength: 0,
                    loadingClass: "is-loading",
                    alterRequest: function (t) {
                        return t
                    },
                    onBefore: function (t, e) {},
                    onStart: {
                        duration: 0,
                        render: function (t) {}
                    },
                    onProgress: {
                        duration: 0,
                        render: function (t) {}
                    },
                    onReady: {
                        duration: 0,
                        render: function (t, e) {
                            t.html(e)
                        }
                    },
                    onAfter: function (t, e) {}
                },
                a = {
                    isExternal: function (t) {
                        var i = t.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
                        return "string" == typeof i[1] && i[1].length > 0 && i[1].toLowerCase() !== e.location.protocol || "string" == typeof i[2] && i[2].length > 0 && i[2].replace(new RegExp(":(" + {
                            "http:": 80,
                            "https:": 443
                        } [e.location.protocol] + ")?$"), "") !== e.location.host
                    },
                    stripHash: function (t) {
                        return t.replace(/#.*/, "")
                    },
                    isHash: function (t, i) {
                        i = i || e.location.href;
                        var n = t.indexOf("#") > -1,
                            o = a.stripHash(t) === a.stripHash(i);
                        return n && o
                    },
                    translate: function (e) {
                        var i = {
                            dataType: "html",
                            type: "GET"
                        };
                        return e = "string" == typeof e ? t.extend({}, i, {
                            url: e
                        }) : t.extend({}, i, e)
                    },
                    shouldLoadAnchor: function (t, e) {
                        var i = t.prop("href");
                        return !(a.isExternal(i) || a.isHash(i) || t.is(e) || t.prop("target"))
                    },
                    clearIfOverCapacity: function (t, e) {
                        return Object.keys || (Object.keys = function (t) {
                            var e, i = [];
                            for (e in t) Object.prototype.hasOwnProperty.call(t, e) && i.push(e);
                            return i
                        }), Object.keys(t).length > e && (t = {}), t
                    },
                    storePageIn: function (e, i, n, o) {
                        var s = t(n);
                        return e[i] = {
                            status: "loaded",
                            title: s.filter("title").first().text(),
                            html: s.filter("#" + o)
                        }, e
                    },
                    triggerAllAnimationEndEvent: function (e, i) {
                        i = " " + i || "";
                        var n = 0,
                            o = "animationstart webkitAnimationStart oanimationstart MSAnimationStart",
                            s = "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
                            r = "allanimationend",
                            l = function (i) {
                                t(i.delegateTarget).is(e) && (i.stopPropagation(), n++)
                            },
                            c = function (i) {
                                t(i.delegateTarget).is(e) && (i.stopPropagation(), n--, 0 === n && e.trigger(r))
                            };
                        e.on(o, l), e.on(s, c), e.on("allanimationend" + i, function () {
                            n = 0, a.redraw(e)
                        })
                    },
                    redraw: function (t) {
                        t.height()
                    }
                },
                l = function (i) {
                    if (null !== i.state) {
                        var n = e.location.href,
                            o = t("#" + i.state.id),
                            s = o.data("smoothState");
                        s.href === n || a.isHash(n, s.href) || s.load(n, !1)
                    }
                },
                c = function (n, r) {
                    var l = t(n),
                        c = l.prop("id"),
                        h = null,
                        d = !1,
                        u = {},
                        p = e.location.href,
                        f = function (t) {
                            t = t || !1, t && u.hasOwnProperty(t) ? delete u[t] : u = {}, l.data("smoothState").cache = u
                        },
                        m = function (e, i) {
                            i = i || t.noop;
                            var n = a.translate(e);
                            if (!u.hasOwnProperty(n.url) || "undefined" != typeof n.data) {
                                u = a.clearIfOverCapacity(u, r.cacheLength), u[n.url] = {
                                    status: "fetching"
                                };
                                var o = t.ajax(n);
                                o.success(function (t) {
                                    a.storePageIn(u, n.url, t, c), l.data("smoothState").cache = u
                                }), o.error(function () {
                                    u[n.url].status = "error"
                                }), i && o.complete(i)
                            }
                        },
                        g = function () {
                            if (h) {
                                var e = t(h, l);
                                if (e.length) {
                                    var n = e.offset().top;
                                    i.body.scrollTop = n
                                }
                                h = null
                            }
                        },
                        v = function (n) {
                            var a = "#" + c,
                                h = u[n] ? t(u[n].html.html()) : null;
                            h.length ? (i.title = u[n].title, l.data("smoothState").href = n, r.loadingClass && o.removeClass(r.loadingClass), r.onReady.render(l, h), l.one("ss.onReadyEnd", function () {
                                d = !1, r.onAfter(l, h), g()
                            }), e.setTimeout(function () {
                                l.trigger("ss.onReadyEnd")
                            }, r.onReady.duration)) : !h && r.debug && s ? s.warn("No element with an id of " + a + " in response from " + n + " in " + u) : e.location = n
                        },
                        _ = function (t, i) {
                            var n = a.translate(t);
                            "undefined" == typeof i && (i = !0);
                            var h = !1,
                                d = !1,
                                p = {
                                    loaded: function () {
                                        var t = h ? "ss.onProgressEnd" : "ss.onStartEnd";
                                        d && h ? d && v(n.url) : l.one(t, function () {
                                            v(n.url)
                                        }), i && e.history.pushState({
                                            id: c
                                        }, u[n.url].title, n.url)
                                    },
                                    fetching: function () {
                                        h || (h = !0, l.one("ss.onStartEnd", function () {
                                            r.loadingClass && o.addClass(r.loadingClass), r.onProgress.render(l), e.setTimeout(function () {
                                                l.trigger("ss.onProgressEnd"), d = !0
                                            }, r.onProgress.duration)
                                        })), e.setTimeout(function () {
                                            u.hasOwnProperty(n.url) && p[u[n.url].status]()
                                        }, 10)
                                    },
                                    error: function () {
                                        r.debug && s ? s.log("There was an error loading: " + n.url) : e.location = n.url
                                    }
                                };
                            u.hasOwnProperty(n.url) || m(n), r.onStart.render(l), e.setTimeout(function () {
                                o.scrollTop(0), l.trigger("ss.onStartEnd")
                            }, r.onStart.duration), p[u[n.url].status]()
                        },
                        y = function (e) {
                            var i, n = t(e.currentTarget);
                            a.shouldLoadAnchor(n, r.blacklist) && !d && (e.stopPropagation(), i = a.translate(n.prop("href")), i = r.alterRequest(i), m(i))
                        },
                        w = function (e) {
                            var i = t(e.currentTarget);
                            if (!e.metaKey && !e.ctrlKey && a.shouldLoadAnchor(i, r.blacklist)) {
                                var n = a.translate(i.prop("href"));
                                d = !0, e.stopPropagation(), e.preventDefault(), h = i.prop("hash"), n = r.alterRequest(n), r.onBefore(i, l), _(n)
                            }
                        },
                        b = function (e) {
                            var i = t(e.currentTarget);
                            if (!i.is(r.blacklist)) {
                                e.preventDefault(), e.stopPropagation();
                                var n = {
                                    url: i.prop("action"),
                                    data: i.serialize(),
                                    type: i.prop("method")
                                };
                                d = !0, n = r.alterRequest(n), "get" === n.type.toLowerCase() && (n.url = n.url + "?" + n.data), r.onBefore(i, l), _(n)
                            }
                        },
                        x = function (t) {
                            t.on("click", r.anchors, w), t.on("submit", r.forms, b), r.prefetch && t.on("mouseover touchstart", r.anchors, y)
                        },
                        T = function () {
                            var t = l.prop("class");
                            l.removeClass(t), a.redraw(l), l.addClass(t)
                        };
                    return r = t.extend({}, t.fn.smoothState.options, r), null === e.history.state && e.history.replaceState({
                        id: c
                    }, i.title, p), a.storePageIn(u, p, i.documentElement.outerHTML, c), a.triggerAllAnimationEndEvent(l, "ss.onStartEnd ss.onProgressEnd ss.onEndEnd"), x(l), {
                        href: p,
                        cache: u,
                        clear: f,
                        load: _,
                        fetch: m,
                        restartCSSAnimations: T
                    }
                },
                h = function (e) {
                    return this.each(function () {
                        var i = this.tagName.toLowerCase();
                        this.id && "body" !== i && "html" !== i && !t.data(this, "smoothState") ? t.data(this, "smoothState", new c(this, e)) : !this.id && s ? s.warn("Every smoothState container needs an id but the following one does not have one:", this) : "body" !== i && "html" !== i || !s || s.warn("The smoothstate container cannot be the " + this.tagName + " tag")
                    })
                };
            e.onpopstate = l, t.smoothStateUtility = a, t.fn.smoothState = h, t.fn.smoothState.options = r
        }
    }(jQuery, window, document),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
            e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
    }(window, function (t, e) {
        "use strict";

        function i(i, s, a) {
            function l(t, e, n) {
                var o, s = "$()." + i + '("' + e + '")';
                return t.each(function (t, l) {
                    var c = a.data(l, i);
                    if (!c) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                    var h = c[e];
                    if (!h || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                    var d = h.apply(c, n);
                    o = void 0 === o ? d : o
                }), void 0 !== o ? o : t
            }

            function c(t, e) {
                t.each(function (t, n) {
                    var o = a.data(n, i);
                    o ? (o.option(e), o._init()) : (o = new s(n, e), a.data(n, i, o))
                })
            }
            a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }), a.fn[i] = function (t) {
                if ("string" == typeof t) {
                    var e = o.call(arguments, 1);
                    return l(this, t, e)
                }
                return c(this, t), this
            }, n(a))
        }

        function n(t) {
            !t || t && t.bridget || (t.bridget = i)
        }
        var o = Array.prototype.slice,
            s = t.console,
            r = "undefined" == typeof s ? function () {} : function (t) {
                s.error(t)
            };
        return n(e || t.jQuery), i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }(this, function () {
        function t() {}
        var e = t.prototype;
        return e.on = function (t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return n.indexOf(e) == -1 && n.push(e), this
            }
        }, e.once = function (t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {},
                    n = i[t] = i[t] || {};
                return n[e] = !0, this
            }
        }, e.off = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return n != -1 && i.splice(n, 1), this
            }
        }, e.emitEvent = function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = 0,
                    o = i[n];
                e = e || [];
                for (var s = this._onceEvents && this._onceEvents[t]; o;) {
                    var r = s && s[o];
                    r && (this.off(t, o), delete s[o]), o.apply(this, e), n += r ? 0 : 1, o = i[n]
                }
                return this
            }
        }, t
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
            return e()
        }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function () {
        "use strict";

        function t(t) {
            var e = parseFloat(t),
                i = t.indexOf("%") == -1 && !isNaN(e);
            return i && e
        }

        function e() {}

        function i() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; e < c; e++) {
                var i = l[e];
                t[i] = 0
            }
            return t
        }

        function n(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
        }

        function o() {
            if (!h) {
                h = !0;
                var e = document.createElement("div");
                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var o = n(e);
                s.isBoxSizeOuter = r = 200 == t(o.width), i.removeChild(e)
            }
        }

        function s(e) {
            if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var s = n(e);
                if ("none" == s.display) return i();
                var a = {};
                a.width = e.offsetWidth, a.height = e.offsetHeight;
                for (var h = a.isBorderBox = "border-box" == s.boxSizing, d = 0; d < c; d++) {
                    var u = l[d],
                        p = s[u],
                        f = parseFloat(p);
                    a[u] = isNaN(f) ? 0 : f
                }
                var m = a.paddingLeft + a.paddingRight,
                    g = a.paddingTop + a.paddingBottom,
                    v = a.marginLeft + a.marginRight,
                    _ = a.marginTop + a.marginBottom,
                    y = a.borderLeftWidth + a.borderRightWidth,
                    w = a.borderTopWidth + a.borderBottomWidth,
                    b = h && r,
                    x = t(s.width);
                x !== !1 && (a.width = x + (b ? 0 : m + y));
                var T = t(s.height);
                return T !== !1 && (a.height = T + (b ? 0 : g + w)), a.innerWidth = a.width - (m + y), a.innerHeight = a.height - (g + w), a.outerWidth = a.width + v, a.outerHeight = a.height + _, a
            }
        }
        var r, a = "undefined" == typeof console ? e : function (t) {
                console.error(t)
            },
            l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            c = l.length,
            h = !1;
        return s
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function () {
        "use strict";
        var t = function () {
            var t = Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i],
                    o = n + "MatchesSelector";
                if (t[o]) return o
            }
        }();
        return function (e, i) {
            return e[t](i)
        }
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function (t, e) {
        var i = {};
        i.extend = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, i.modulo = function (t, e) {
            return (t % e + e) % e
        }, i.makeArray = function (t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, i.removeFrom = function (t, e) {
            var i = t.indexOf(e);
            i != -1 && t.splice(i, 1)
        }, i.getParent = function (t, i) {
            for (; t != document.body;)
                if (t = t.parentNode, e(t, i)) return t
        }, i.getQueryElement = function (t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, i.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, i.filterFindElements = function (t, n) {
            t = i.makeArray(t);
            var o = [];
            return t.forEach(function (t) {
                if (t instanceof HTMLElement) {
                    if (!n) return void o.push(t);
                    e(t, n) && o.push(t);
                    for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) o.push(i[s])
                }
            }), o
        }, i.debounceMethod = function (t, e, i) {
            var n = t.prototype[e],
                o = e + "Timeout";
            t.prototype[e] = function () {
                var t = this[o];
                t && clearTimeout(t);
                var e = arguments,
                    s = this;
                this[o] = setTimeout(function () {
                    n.apply(s, e), delete s[o]
                }, i || 100)
            }
        }, i.docReady = function (t) {
            "complete" == document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
        }, i.toDashed = function (t) {
            return t.replace(/(.)([A-Z])/g, function (t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var n = t.console;
        return i.htmlInit = function (e, o) {
            i.docReady(function () {
                var s = i.toDashed(o),
                    r = "data-" + s,
                    a = document.querySelectorAll("[" + r + "]"),
                    l = document.querySelectorAll(".js-" + s),
                    c = i.makeArray(a).concat(i.makeArray(l)),
                    h = r + "-options",
                    d = t.jQuery;
                c.forEach(function (t) {
                    var i, s = t.getAttribute(r) || t.getAttribute(h);
                    try {
                        i = s && JSON.parse(s)
                    } catch (a) {
                        return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
                    }
                    var l = new e(t, i);
                    d && d.data(t, o, l)
                })
            })
        }, i
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, function (t, e) {
        "use strict";

        function i(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function n(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function o(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase()
            })
        }
        var s = document.documentElement.style,
            r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
            a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
            l = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            } [r],
            c = {
                transform: a,
                transition: r,
                transitionDuration: r + "Duration",
                transitionProperty: r + "Property",
                transitionDelay: r + "Delay"
            },
            h = n.prototype = Object.create(t.prototype);
        h.constructor = n, h._create = function () {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, h.handleEvent = function (t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, h.getSize = function () {
            this.size = e(this.element)
        }, h.css = function (t) {
            var e = this.element.style;
            for (var i in t) {
                var n = c[i] || i;
                e[n] = t[i]
            }
        }, h.getPosition = function () {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                n = t[e ? "left" : "right"],
                o = t[i ? "top" : "bottom"],
                s = this.layout.size,
                r = n.indexOf("%") != -1 ? parseFloat(n) / 100 * s.width : parseInt(n, 10),
                a = o.indexOf("%") != -1 ? parseFloat(o) / 100 * s.height : parseInt(o, 10);
            r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
        }, h.layoutPosition = function () {
            var t = this.layout.size,
                e = {},
                i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                o = i ? "paddingLeft" : "paddingRight",
                s = i ? "left" : "right",
                r = i ? "right" : "left",
                a = this.position.x + t[o];
            e[s] = this.getXValue(a), e[r] = "";
            var l = n ? "paddingTop" : "paddingBottom",
                c = n ? "top" : "bottom",
                h = n ? "bottom" : "top",
                d = this.position.y + t[l];
            e[c] = this.getYValue(d), e[h] = "", this.css(e), this.emitEvent("layout", [this])
        }, h.getXValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, h.getYValue = function (t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, h._transitionTo = function (t, e) {
            this.getPosition();
            var i = this.position.x,
                n = this.position.y,
                o = parseInt(t, 10),
                s = parseInt(e, 10),
                r = o === this.position.x && s === this.position.y;
            if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
            var a = t - i,
                l = e - n,
                c = {};
            c.transform = this.getTranslate(a, l), this.transition({
                to: c,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, h.getTranslate = function (t, e) {
            var i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop");
            return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
        }, h.goTo = function (t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, h.moveTo = h._transitionTo, h.setPosition = function (t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, h._nonTransition = function (t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, h.transition = function (t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var n = this.element.offsetHeight;
                n = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var d = "opacity," + o(a);
        h.enableTransition = function () {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({
                    transitionProperty: d,
                    transitionDuration: t,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(l, this, !1)
            }
        }, h.onwebkitTransitionEnd = function (t) {
            this.ontransitionend(t)
        }, h.onotransitionend = function (t) {
            this.ontransitionend(t)
        };
        var u = {
            "-webkit-transform": "transform"
        };
        h.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn,
                    n = u[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                    var o = e.onEnd[n];
                    o.call(this), delete e.onEnd[n]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, h.disableTransition = function () {
            this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
        }, h._removeStyles = function (t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var p = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return h.removeTransitionStyles = function () {
            this.css(p)
        }, h.stagger = function (t) {
            t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
        }, h.removeElem = function () {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, h.remove = function () {
            return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
        }, h.reveal = function () {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[i] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, h.onRevealTransitionEnd = function () {
            this.isHidden || this.emitEvent("reveal")
        }, h.getHideRevealTransitionEndProperty = function (t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, h.hide = function () {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, h.onHideTransitionEnd = function () {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, h.destroy = function () {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, n
    }),
    function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, s) {
            return e(t, i, n, o, s)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function (t, e, i, n, o) {
        "use strict";

        function s(t, e) {
            var i = n.getQueryElement(t);
            if (!i) return void(l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            this.element = i, c && (this.$element = c(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
            var o = ++d;
            this.element.outlayerGUID = o, u[o] = this, this._create();
            var s = this._getOption("initLayout");
            s && this.layout()
        }

        function r(t) {
            function e() {
                t.apply(this, arguments)
            }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
        }

        function a(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                n = e && e[2];
            if (!i.length) return 0;
            i = parseFloat(i);
            var o = f[n] || 1;
            return i * o
        }
        var l = t.console,
            c = t.jQuery,
            h = function () {},
            d = 0,
            u = {};
        s.namespace = "outlayer", s.Item = o, s.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var p = s.prototype;
        n.extend(p, e.prototype), p.option = function (t) {
            n.extend(this.options, t)
        }, p._getOption = function (t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        }, s.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, p._create = function () {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
            var t = this._getOption("resize");
            t && this.bindResize()
        }, p.reloadItems = function () {
            this.items = this._itemize(this.element.children)
        }, p._itemize = function (t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
                var s = e[o],
                    r = new i(s, this);
                n.push(r)
            }
            return n
        }, p._filterFindItemElements = function (t) {
            return n.filterFindElements(t, this.options.itemSelector)
        }, p.getItemElements = function () {
            return this.items.map(function (t) {
                return t.element
            })
        }, p.layout = function () {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, p._init = p.layout, p._resetLayout = function () {
            this.getSize()
        }, p.getSize = function () {
            this.size = i(this.element)
        }, p._getMeasurement = function (t, e) {
            var n, o = this.options[t];
            o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
        }, p.layoutItems = function (t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, p._getItemsForLayout = function (t) {
            return t.filter(function (t) {
                return !t.isIgnored
            })
        }, p._layoutItems = function (t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var i = [];
                t.forEach(function (t) {
                    var n = this._getItemLayoutPosition(t);
                    n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
                }, this), this._processLayoutQueue(i)
            }
        }, p._getItemLayoutPosition = function () {
            return {
                x: 0,
                y: 0
            }
        }, p._processLayoutQueue = function (t) {
            this.updateStagger(), t.forEach(function (t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e)
            }, this)
        }, p.updateStagger = function () {
            var t = this.options.stagger;
            return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
        }, p._positionItem = function (t, e, i, n, o) {
            n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
        }, p._postLayout = function () {
            this.resizeContainer()
        }, p.resizeContainer = function () {
            var t = this._getOption("resizeContainer");
            if (t) {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
            }
        }, p._getContainerSize = h, p._setContainerMeasure = function (t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, p._emitCompleteOnItems = function (t, e) {
            function i() {
                o.dispatchEvent(t + "Complete", null, [e])
            }

            function n() {
                r++, r == s && i()
            }
            var o = this,
                s = e.length;
            if (!e || !s) return void i();
            var r = 0;
            e.forEach(function (e) {
                e.once(t, n)
            })
        }, p.dispatchEvent = function (t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n), c)
                if (this.$element = this.$element || c(this.element), e) {
                    var o = c.Event(e);
                    o.type = t, this.$element.trigger(o, i)
                } else this.$element.trigger(t, i)
        }, p.ignore = function (t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, p.unignore = function (t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, p.stamp = function (t) {
            t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        }, p.unstamp = function (t) {
            t = this._find(t), t && t.forEach(function (t) {
                n.removeFrom(this.stamps, t), this.unignore(t)
            }, this)
        }, p._find = function (t) {
            if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)
        }, p._manageStamps = function () {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, p._getBoundingRect = function () {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, p._manageStamp = h, p._getElementOffset = function (t) {
            var e = t.getBoundingClientRect(),
                n = this._boundingRect,
                o = i(t),
                s = {
                    left: e.left - n.left - o.marginLeft,
                    top: e.top - n.top - o.marginTop,
                    right: n.right - e.right - o.marginRight,
                    bottom: n.bottom - e.bottom - o.marginBottom
                };
            return s
        }, p.handleEvent = n.handleEvent, p.bindResize = function () {
            t.addEventListener("resize", this), this.isResizeBound = !0
        }, p.unbindResize = function () {
            t.removeEventListener("resize", this), this.isResizeBound = !1
        }, p.onresize = function () {
            this.resize()
        }, n.debounceMethod(s, "onresize", 100), p.resize = function () {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, p.needsResizeLayout = function () {
            var t = i(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, p.addItems = function (t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, p.appended = function (t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, p.prepended = function (t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, p.reveal = function (t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function (t, i) {
                    t.stagger(i * e), t.reveal()
                })
            }
        }, p.hide = function (t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function (t, i) {
                    t.stagger(i * e), t.hide()
                })
            }
        }, p.revealItemElements = function (t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, p.hideItemElements = function (t) {
            var e = this.getItems(t);
            this.hide(e)
        }, p.getItem = function (t) {
            for (var e = 0; e < this.items.length; e++) {
                var i = this.items[e];
                if (i.element == t) return i
            }
        }, p.getItems = function (t) {
            t = n.makeArray(t);
            var e = [];
            return t.forEach(function (t) {
                var i = this.getItem(t);
                i && e.push(i)
            }, this), e
        }, p.remove = function (t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
                t.remove(), n.removeFrom(this.items, t)
            }, this)
        }, p.destroy = function () {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
                t.destroy()
            }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete u[e], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace)
        }, s.data = function (t) {
            t = n.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && u[e]
        }, s.create = function (t, e) {
            var i = r(s);
            return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(o), n.htmlInit(i, t), c && c.bridget && c.bridget(t, i), i
        };
        var f = {
            ms: 1,
            s: 1e3
        };
        return s.Item = o, s
    }),
    function (t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window, function (t, e) {
        var i = t.create("masonry");
        return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function () {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0
        }, i.prototype.measureColumns = function () {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var n = this.columnWidth += this.gutter,
                o = this.containerWidth + this.gutter,
                s = o / n,
                r = n - o % n,
                a = r && r < 1 ? "round" : "floor";
            s = Math[a](s), this.cols = Math.max(s, 1)
        }, i.prototype.getContainerWidth = function () {
            var t = this._getOption("fitWidth"),
                i = t ? this.element.parentNode : this.element,
                n = e(i);
            this.containerWidth = n && n.innerWidth
        }, i.prototype._getItemLayoutPosition = function (t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                i = e && e < 1 ? "round" : "ceil",
                n = Math[i](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var o = this._getColGroup(n), s = Math.min.apply(Math, o), r = o.indexOf(s), a = {
                    x: this.columnWidth * r,
                    y: s
                }, l = s + t.size.outerHeight, c = this.cols + 1 - o.length, h = 0; h < c; h++) this.colYs[r + h] = l;
            return a
        }, i.prototype._getColGroup = function (t) {
            if (t < 2) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) {
                var o = this.colYs.slice(n, n + t);
                e[n] = Math.max.apply(Math, o)
            }
            return e
        }, i.prototype._manageStamp = function (t) {
            var i = e(t),
                n = this._getElementOffset(t),
                o = this._getOption("originLeft"),
                s = o ? n.left : n.right,
                r = s + i.outerWidth,
                a = Math.floor(s / this.columnWidth);
            a = Math.max(0, a);
            var l = Math.floor(r / this.columnWidth);
            l -= r % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
            for (var c = this._getOption("originTop"), h = (c ? n.top : n.bottom) + i.outerHeight, d = a; d <= l; d++) this.colYs[d] = Math.max(h, this.colYs[d])
        }, i.prototype._getContainerSize = function () {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
        }, i.prototype._getContainerFitWidth = function () {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, i.prototype.needsResizeLayout = function () {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth
        }, i
    }),
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
    }(function (t) {
        function e(e) {
            var r = e || window.event,
                a = l.call(arguments, 1),
                c = 0,
                d = 0,
                u = 0,
                p = 0,
                f = 0,
                m = 0;
            if (e = t.event.fix(r), e.type = "mousewheel", "detail" in r && (u = r.detail * -1), "wheelDelta" in r && (u = r.wheelDelta), "wheelDeltaY" in r && (u = r.wheelDeltaY), "wheelDeltaX" in r && (d = r.wheelDeltaX * -1), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (d = u * -1, u = 0), c = 0 === u ? d : u, "deltaY" in r && (u = r.deltaY * -1, c = u), "deltaX" in r && (d = r.deltaX, 0 === u && (c = d * -1)), 0 !== u || 0 !== d) {
                if (1 === r.deltaMode) {
                    var g = t.data(this, "mousewheel-line-height");
                    c *= g, u *= g, d *= g
                } else if (2 === r.deltaMode) {
                    var v = t.data(this, "mousewheel-page-height");
                    c *= v, u *= v, d *= v
                }
                if (p = Math.max(Math.abs(u), Math.abs(d)), (!s || p < s) && (s = p, n(r, p) && (s /= 40)), n(r, p) && (c /= 40, d /= 40, u /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / s), d = Math[d >= 1 ? "floor" : "ceil"](d / s), u = Math[u >= 1 ? "floor" : "ceil"](u / s), h.settings.normalizeOffset && this.getBoundingClientRect) {
                    var _ = this.getBoundingClientRect();
                    f = e.clientX - _.left, m = e.clientY - _.top
                }
                return e.deltaX = d, e.deltaY = u, e.deltaFactor = s, e.offsetX = f, e.offsetY = m, e.deltaMode = 0, a.unshift(e, c, d, u), o && clearTimeout(o), o = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, a)
            }
        }

        function i() {
            s = null
        }

        function n(t, e) {
            return h.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
        }
        var o, s, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            l = Array.prototype.slice;
        if (t.event.fixHooks)
            for (var c = r.length; c;) t.event.fixHooks[r[--c]] = t.event.mouseHooks;
        var h = t.event.special.mousewheel = {
            version: "3.1.12",
            setup: function () {
                if (this.addEventListener)
                    for (var i = a.length; i;) this.addEventListener(a[--i], e, !1);
                else this.onmousewheel = e;
                t.data(this, "mousewheel-line-height", h.getLineHeight(this)), t.data(this, "mousewheel-page-height", h.getPageHeight(this))
            },
            teardown: function () {
                if (this.removeEventListener)
                    for (var i = a.length; i;) this.removeEventListener(a[--i], e, !1);
                else this.onmousewheel = null;
                t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function (e) {
                var i = t(e),
                    n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
                return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
            },
            getPageHeight: function (e) {
                return t(e).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };
        t.fn.extend({
            mousewheel: function (t) {
                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
            },
            unmousewheel: function (t) {
                return this.unbind("mousewheel", t)
            }
        })
    }),
    function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function (t) {
        "use strict";

        function e(e, o) {
            function s() {
                return f.update(), a(), f
            }

            function r() {
                y.css(S, f.thumbPosition), g.css(S, -f.contentPosition), v.css(T, f.trackSize), _.css(T, f.trackSize), y.css(T, f.thumbSize)
            }

            function a() {
                w && (m[0].ontouchstart = function (t) {
                    1 === t.touches.length && (t.stopPropagation(), h(t.touches[0]))
                }), y.bind("mousedown", function (t) {
                    t.stopPropagation(), h(t)
                }), _.bind("mousedown", function (t) {
                    h(t, !0)
                }), t(window).resize(function () {
                    f.update("relative")
                }), f.options.wheel && window.addEventListener ? e[0].addEventListener(b, d, !1) : f.options.wheel && (e[0].onmousewheel = d)
            }

            function l() {
                return f.contentPosition > 0
            }

            function c() {
                return f.contentPosition <= f.contentSize - f.viewportSize - 5
            }

            function h(e, n) {
                f.hasContentToSroll && (t("body").addClass("noSelect"), k = n ? y.offset()[S] : x ? e.pageX : e.pageY, w && (document.ontouchmove = function (t) {
                    (f.options.touchLock || l() && c()) && t.preventDefault(), t.touches[0][i + "Touch"] = 1, u(t.touches[0])
                }, document.ontouchend = p), t(document).bind("mousemove", u), t(document).bind("mouseup", p), y.bind("mouseup", p), _.bind("mouseup", p), u(e))
            }

            function d(i) {
                if (f.hasContentToSroll) {
                    var n = i || window.event,
                        o = -(n.deltaY || n.detail || -1 / 3 * n.wheelDelta) / 40,
                        s = 1 === n.deltaMode ? f.options.wheelSpeed : 1;
                    f.contentPosition -= o * s * f.options.wheelSpeed, f.contentPosition = Math.min(f.contentSize - f.viewportSize, Math.max(0, f.contentPosition)), f.thumbPosition = f.contentPosition / f.trackRatio, e.trigger("move"), y.css(S, f.thumbPosition), g.css(S, -f.contentPosition), (f.options.wheelLock || l() && c()) && (n = t.event.fix(n), n.preventDefault())
                }
                i.stopPropagation()
            }

            function u(t) {
                if (f.hasContentToSroll) {
                    var n = x ? t.pageX : t.pageY,
                        o = t[i + "Touch"] ? k - n : n - k,
                        s = Math.min(f.trackSize - f.thumbSize, Math.max(0, f.thumbPosition + o));
                    f.contentPosition = s * f.trackRatio, e.trigger("move"), y.css(S, s), g.css(S, -f.contentPosition)
                }
            }

            function p() {
                f.thumbPosition = parseInt(y.css(S), 10) || 0, t("body").removeClass("noSelect"), t(document).unbind("mousemove", u), t(document).unbind("mouseup", p), y.unbind("mouseup", p), _.unbind("mouseup", p), document.ontouchmove = document.ontouchend = null
            }
            this.options = t.extend({}, n, o), this._defaults = n, this._name = i;
            var f = this,
                m = e.find(".viewport"),
                g = e.find(".overview"),
                v = e.find(".scrollbar"),
                _ = v.find(".track"),
                y = v.find(".thumb"),
                w = "ontouchstart" in document.documentElement,
                b = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll",
                x = "x" === this.options.axis,
                T = x ? "width" : "height",
                S = x ? "left" : "top",
                k = 0;
            return this.contentPosition = 0, this.viewportSize = 0, this.contentSize = 0, this.contentRatio = 0, this.trackSize = 0, this.trackRatio = 0, this.thumbSize = 0, this.thumbPosition = 0, this.hasContentToSroll = !1, this.update = function (t) {
                var e = T.charAt(0).toUpperCase() + T.slice(1).toLowerCase();
                switch (this.viewportSize = m[0]["offset" + e], this.contentSize = g[0]["scroll" + e], this.contentRatio = this.viewportSize / this.contentSize, this.trackSize = this.options.trackSize || this.viewportSize, this.thumbSize = Math.min(this.trackSize, Math.max(this.options.thumbSizeMin, this.options.thumbSize || this.trackSize * this.contentRatio)), this.trackRatio = (this.contentSize - this.viewportSize) / (this.trackSize - this.thumbSize), this.hasContentToSroll = this.contentRatio < 1, v.toggleClass("disable", !this.hasContentToSroll), t) {
                    case "bottom":
                        this.contentPosition = Math.max(this.contentSize - this.viewportSize, 0);
                        break;
                    case "relative":
                        this.contentPosition = Math.min(Math.max(this.contentSize - this.viewportSize, 0), Math.max(0, this.contentPosition));
                        break;
                    default:
                        this.contentPosition = parseInt(t, 10) || 0
                }
                return this.thumbPosition = this.contentPosition / this.trackRatio, r(), f
            }, s()
        }
        var i = "tinyscrollbar",
            n = {
                axis: "y",
                wheel: !0,
                wheelSpeed: 40,
                wheelLock: !0,
                touchLock: !0,
                trackSize: !1,
                thumbSize: !1,
                thumbSizeMin: 20
            };
        t.fn[i] = function (n) {
            return this.each(function () {
                t.data(this, "plugin_" + i) || t.data(this, "plugin_" + i, new e(t(this), n))
            })
        }
    }),
    function (t, e) {
        var i = (Modernizr.touch, {
                small: 0,
                xsmall: 480,
                medium: 768,
                large: 960,
                xlarge: 1200,
                xxlarge: 1400,
                xxxlarge: 1600,
                xxxxlarge: 1800,
                xxxxxlarge: 2e3
            }),
            n = function () {
                var t = {};
                return function (e, i, n) {
                    n || (n = 1e3 * Math.random()), t[n] && clearTimeout(t[n]), t[n] = setTimeout(e, i)
                }
            }();
        t(e).ready(function () {
            o.ready()
        }), t(window).load(function () {}), t(window).scroll(function () {
            o.scroll()
        }), t(window).resize(function () {
            n(function () {
                o.resize()
            }, 500, "init")
        });
        var o = {
                ready: function () {
                    l.foundation(), l.fullPage.init(), l.infiniteScroll(), l.inview(), l.scrollToFixed.init(), l.smoothState(), l.pushy(), l.masonry.init(), l.tinyScrollbar(), s.backToTop(), s.burger(), s.beforeAfter.init(), s.disableLink(), s.footer.fade(), s.footer.init(), s.itemIntro(), s.fullHeight(), s.frameHover(), s.fadeScroll(), s.fpLink(), s.hero.init(), s.progress.init(), s.panel.init(), s.project.init(), s.projectOverview.init(), s.sidebarPreviewHover(), s.sticky.header.init(), s.sticky.title.init(), s.sticky.teamTitle.init(), s.transition.init(), s.underlay.init(), r.init(), c.init(), c.project.init(), c.post.init(), c.projectCaption(), c.projectHero()
                },
                scroll: function () {},
                resize: function () {
                    s.siteMark(), s.footer.init(), s.progress.init(), s.progress.resize(), s.underlay.resize(), l.scrollToFixed.resize(), c.project.resize()
                }
            },
            s = {
                backToTop: function () {
                    t(".js-btt").on("click", function (e) {
                        e.preventDefault(), t("html, body").animate({
                            scrollTop: 0
                        }, 500)
                    })
                },
                beforeAfter: {
                    init: function () {
                        this.hover(), this.click(), this.close()
                    },
                    hover: function () {
                        var e = t(".c-before-after");
                        t(".c-before-after__image--before").mouseenter(function () {
                            e.addClass("c-before-after--hover--before")
                        }).mouseleave(function () {
                            e.removeClass("c-before-after--hover--before")
                        }), t(".c-before-after__image--after").mouseenter(function () {
                            e.addClass("c-before-after--hover--after")
                        }).mouseleave(function () {
                            e.removeClass("c-before-after--hover--after")
                        })
                    },
                    click: function () {
                        var e = t(".c-before-after__btn"),
                            i = t(".c-before-after");
                        e.on("click", function () {
                            var n = t(this).data("dir");
                            e.fadeOut(), i.addClass("c-before-after--active--" + n)
                        })
                    },
                    close: function () {
                        var e = t(".c-before-after__btn"),
                            i = t(".c-before-after");
                        t(".c-before-after__close").on("click", function () {
                            i.removeClass("c-before-after--active--before"), i.removeClass("c-before-after--active--after"), setTimeout(function () {
                                e.fadeIn()
                            }, 250)
                        })
                    }
                },
                burger: function () {
                    t(".site-burger").on("click", function () {
                        t(this).toggleClass("site-burger--active")
                    }), t(".site-overlay").on("click", function () {
                        t(".site-burger").removeClass("site-burger--active"), t(".c-menu-filter").removeClass("c-menu-filter--active")
                    }), t(".c-menu-filter").click(function () {
                        t(this).toggleClass("c-menu-filter--active")
                    })
                },
                disableLink: function () {
                    t(".site-mark.pulse a").on("click", function () {
                        return !1
                    })
                },
                footer: {
                    init: function () {
                        var e = t(".l-footer");
                        if (e.length > 0) {
                            var i = e.find(".c-flush").outerHeight();
                            e.css("height", i)
                        }
                    },
                    fade: function () {
                        var i = function () {
                            var i = t(e).height() - (t(window).height() + 150);
                            t(window).scrollTop() >= i && t(".l-footer__fixed").css("opacity", 1)
                        };
                        t(window).off("scroll", i), t(window).scroll(i)
                    }
                },
                fullHeight: function () {
                    var e = t(".m-hero, .m-hero__bg__container"),
                        i = t(window).height();
                    e.css({
                        height: i + "px"
                    })
                },
                intro: function () {
                    if (t("#app").removeClass("is-exiting"), t(".home").length > 0) {
                        var e = t(".site-swipe"),
                            i = t(".site-swipe img"),
                            n = t(".site-mark"),
                            o = 1;
                        n.addClass("pulse"), n.find("svg").css("fill", "#010101"), setTimeout(function () {
                            t("#app").imagesLoaded({
                                background: !0
                            }, function () {
                                if (Foundation.MediaQuery.atLeast("medium") ? (TweenMax.to(e, o, {
                                        width: 80,
                                        ease: CubicBezier.config(.58, .13, .21, 1)
                                    }), TweenMax.to(e, .5, {
                                        opacity: 0,
                                        delay: o
                                    }), setTimeout(function () {
                                        e.remove(), t(".site-transition, .site-transition__inner").show()
                                    }, 1500)) : (TweenMax.to(e, o, {
                                        height: 70,
                                        ease: CubicBezier.config(.58, .13, .21, 1)
                                    }), TweenMax.to(e, .5, {
                                        opacity: 0,
                                        delay: o
                                    }), TweenMax.to(e, 0, {
                                        width: 0,
                                        delay: 1.5
                                    })), Foundation.MediaQuery.atLeast("medium")) {
                                    var s = n.width(),
                                        a = t(window).width(),
                                        l = a / 2 - s / 2;
                                    n.css("left", l), i.css("left", l + 110), TweenMax.to(n, o, {
                                        left: 25,
                                        ease: CubicBezier.config(.58, .13, .21, 1)
                                    }), TweenMax.to(i, 1.25 * o, {
                                        left: 25,
                                        ease: CubicBezier.config(.58, .13, .21, 1)
                                    }), TweenMax.to(i, .3, {
                                        opacity: 0
                                    }), n.removeClass("pulse")
                                } else {
                                    var c = n.height(),
                                        h = t(window).height(),
                                        d = h / 2 - c / 2;
                                    n.css("top", d), TweenMax.to(n, o, {
                                        top: 20,
                                        ease: CubicBezier.config(.58, .13, .21, 1)
                                    }), setTimeout(function () {
                                        n.removeClass("pulse").find("svg").removeAttr("style"), t(".site-transition, .site-transition__inner").show()
                                    }, 1e3)
                                }
                                r.init()
                            })
                        }, 4e3)
                    }
                }(),
                itemIntro: function () {
                    t(".post-type-archive-cpt_project").length > 0 ? setTimeout(function () {
                        t(".a-item").one("inview", function () {
                            t(this).addClass("a-item--active")
                        })
                    }, 400) : t(".a-item").one("inview", function () {
                        t(this).addClass("a-item--active")
                    })
                },
                fadeScroll: function () {
                    var e = t(".m-hero__bottom");
                    if (e.length > 0) {
                        var i = function () {
                            var i = t(window).scrollTop();
                            i >= 5 ? e.addClass("m-hero__bottom--fade-out") : e.removeClass("m-hero__bottom--fade-out")
                        };
                        t(window).off("scroll", i), t(window).scroll(i)
                    }
                },
                frameHover: function () {
                    t(".frame").hover(function () {
                        t("body").addClass("js-frame-hover")
                    }, function () {
                        t("body").removeClass("js-frame-hover")
                    }), t(".frame a").on("click", function () {
                        t("body").removeClass("js-frame-hover")
                    })
                },
                fpLink: function () {
                    Foundation.MediaQuery.atLeast("xlarge") && t(".fp-more__link").hover(function () {
                        var e = t(this).data("bg");
                        t(".fp-section__bg--" + e).addClass("fp-section__bg--active"), t(".fp-more__content").addClass("fp-more__content--active")
                    }, function () {
                        var e = t(this).data("bg");
                        t(".fp-section__bg--" + e).removeClass("fp-section__bg--active"), t(".fp-more__content").removeClass("fp-more__content--active")
                    })
                },
                hero: {
                    init: function () {
                        this.discover()
                    },
                    discover: function () {
                        t(".m-hero").on("click", function () {
                            var e = t(this).outerHeight();
                            t("html, body").animate({
                                scrollTop: e
                            }, 1e3)
                        })
                    }
                },
                nav: {
                    init: function () {
                        this.hover()
                    },
                    hover: function () {
                        t(".site-burger:not(.site-burger--right), .site-mark").mouseenter(function () {
                            t(".l-nav.pushy-left").addClass("l-nav--hover")
                        }).mouseleave(function () {
                            t(".l-nav.pushy-left").removeClass("l-nav--hover")
                        }), t(".site-burger.site-burger--right").mouseenter(function () {
                            t(".l-nav.pushy-right").addClass("l-nav--hover")
                        }).mouseleave(function () {
                            t(".l-nav.pushy-right").removeClass("l-nav--hover")
                        })
                    }
                },
                panel: {
                    init: function () {
                        this.toggle(), this.close()
                    },
                    toggle: function () {
                        var e = t(".m-panel");
                        t(".m-panel__trigger").on("click", function () {
                            e.toggleClass("m-panel--active")
                        })
                    },
                    close: function () {
                        var e = t(".m-panel");
                        t(".m-panel__close").on("click", function () {
                            e.removeClass("m-panel--active")
                        })
                    }
                },
                progress: {
                    height: function () {
                        var i = t(e).height() - t(window).height();
                        return i
                    },
                    init: function () {
                        var e = this;
                        t(".post__right").imagesLoaded(function () {
                            t(".c-progress").length > 0 && (Foundation.MediaQuery.atLeast("xlarge") ? e.scroll(e.height()) : e.callBack(!0))
                        })
                    },
                    scroll: function (e) {
                        var i = this,
                            n = function () {
                                var n = t(window).scrollTop() / e;
                                i.update(n.toFixed(3))
                            };
                        t(window).off(".progress"), t(window).on("scroll.progress", n)
                    },
                    update: function (e) {
                        var i = this;
                        e >= 1 ? (t(".c-progress__line").css({
                            width: "100%"
                        }), i.callBack(!0)) : (t(".c-progress__line").css({
                            width: 100 * e + "%"
                        }), i.callBack(!1))
                    },
                    callBack: function (e) {
                        e ? (t(".single").addClass("js-bottom"), t(".post__fixed--bottom").addClass("post__fixed--bottom--relative")) : (t(".single").removeClass("js-bottom"), t(".post__fixed--bottom").removeClass("post__fixed--bottom--relative"))
                    },
                    resize: function () {
                        Foundation.MediaQuery.atLeast("xlarge") || (t(window).off(".progress"), t(".c-progress__line").css({
                            width: 0
                        }))
                    }
                },
                project: {
                    init: function () {
                        this.introImg(), this.pagination(), this.overflow(), this.readMore()
                    },
                    introImg: function () {
                        var e = t(".js-lazy-interchange"),
                            i = e.lazyInterchange().css("display", "none");
                        e.imagesLoaded({
                            background: !0
                        }, function () {
                            i.fadeIn()
                        })
                    },
                    pagination: function () {
                        t(".single-cpt_project .frame a").on("click", function () {
                            var e = t(this).data("dir");
                            t(".single-cpt_project").addClass("js-" + e)
                        })
                    },
                    overflow: function () {
                        t(".single-cpt_project").length > 0 && Foundation.MediaQuery.atLeast("xlarge") ? t("html").css("overflow", "hidden") : t("html").removeAttr("style")
                    },
                    readMore: function () {
                        t(".js-project-read").on("click", function (e) {
                            e.preventDefault();
                            var i = t(".m-panel");
                            Foundation.MediaQuery.atLeast("xlarge") ? (t(".slideshow--project").slick("slickNext"), setTimeout(function () {
                                i.addClass("m-panel--active")
                            }, 250)) : t("html, body").animate({
                                scrollTop: i.offset().top
                            }, 500)
                        })
                    }
                },
                projectOverview: {
                    init: function () {
                        var e = this;
                        t(".projects-overview").length > 0 && Foundation.MediaQuery.atLeast("xlarge") && e.heroScroll()
                    },
                    heroScroll: function () {
                        t(window).scroll(function () {
                            var e = t(window).scrollTop(),
                                i = t(".slideshow--hero"),
                                n = i.height(),
                                o = 1 - e / (n / 1);
                            i.css({
                                opacity: o
                            })
                        })
                    }
                },
                siteMark: function () {
                    var e = t(".site-mark");
                    Foundation.MediaQuery.atLeast("medium") ? e.css({
                        left: "25px",
                        top: "calc(50% - 15px)"
                    }) : e.css({
                        top: "20px",
                        left: "calc(50% - 15px)"
                    })
                },
                sidebarPreviewHover: function () {
                    Foundation.MediaQuery.atLeast("xlarge") && t(".l-nav--right .c-tablealike__row:not(.active)").mouseenter(function () {
                        var e = t(this);
                        e.mousemove(function (i) {
                            var n = e.find(".c-tablealike__preview-img"),
                                o = n.data("bg"),
                                s = t(".js-preview-img");
                            s.show(), s.css({
                                top: i.clientY + e.height() - 25,
                                left: i.clientX - e.offset().left + s.width() / 2,
                                "background-image": "url(" + o + ")"
                            })
                        })
                    }).mouseleave(function () {
                        t(".js-preview-img").hide()
                    })
                },
                transition: {
                    init: function () {
                        this.updateCategoryOutro()
                    },
                    updateCategoryOutro: function () {
                        (t(".archive.category").length > 0 || t(".blog.journal").length > 0 || t(".archive.date").length > 0) && t("a").on("click", function () {
                            var e = t(this).data("category");
                            "undefined" == typeof e && (e = '<img src="' + six.template_directory + '/assets/img/logo.svg" alt="Daniel Hopwood">'), t(".site-transition__inner div").html(e)
                        })
                    }
                },
                sticky: {
                    header: {
                        visibleClass: "l-header-thin--visible",
                        init: function () {
                            var e = this;
                            t(".l-header-thin--hidden").length > 0 && e.render()
                        },
                        render: function () {
                            var e = this,
                                i = function () {
                                    Foundation.MediaQuery.atLeast("medium") ? t(window).scrollTop() >= t(".page-title").outerHeight() ? e.addClass() : e.removeClass() : t(window).scrollTop() >= 40 ? e.addClass() : e.removeClass()
                                };
                            t(window).off("scroll", i), t(window).scroll(i)
                        },
                        addClass: function () {
                            t(".l-header-thin--hidden").addClass(this.visibleClass)
                        },
                        removeClass: function () {
                            t(".l-header-thin--hidden").removeClass(this.visibleClass)
                        }
                    },
                    title: {
                        visibleClass: "post__title-secondary--visible",
                        init: function () {
                            var e = this;
                            t(".post__title-secondary").length > 0 && !t(".single-cpt_team").length > 0 && e.render()
                        },
                        render: function () {
                            var e = this,
                                i = function () {
                                    var i = t(".c-journal__title");
                                    t(window).scrollTop() >= i.outerHeight() + i.offset().top ? e.addClass() : e.removeClass()
                                };
                            t(window).off("scroll", i), t(window).scroll(i)
                        },
                        addClass: function () {
                            t(".post__title-secondary").addClass(this.visibleClass)
                        },
                        removeClass: function () {
                            t(".post__title-secondary").removeClass(this.visibleClass)
                        }
                    },
                    teamTitle: {
                        visibleClass: "post__title-secondary--visible",
                        init: function () {
                            var e = this;
                            (t(".single-cpt_team").length > 0 && "small" == Foundation.MediaQuery.current || t(".single-cpt_team").length > 0 && "xsmall" == Foundation.MediaQuery.current) && e.render()
                        },
                        render: function () {
                            var e = t(".c-team__title"),
                                i = this,
                                n = function () {
                                    t(window).scrollTop() >= e.outerHeight() + e.offset().top ? i.addClass() : i.removeClass()
                                };
                            t(window).off("scroll", n), t(window).scroll(n)
                        },
                        addClass: function () {
                            t(".post__title-secondary").addClass(this.visibleClass)
                        },
                        removeClass: function () {
                            t(".post__title-secondary").removeClass(this.visibleClass)
                        }
                    }
                },
                underlay: {
                    underlayActive: "site-underlay--active",
                    underlayContentActive: "site-underlay__content--active",
                    init: function () {
                        var e = this;
                        t(".js-site-underlay-trigger").on("click", function (i) {
                            if (i.preventDefault(), Foundation.MediaQuery.atLeast("medium")) return t(".site-underlay").hasClass(e.underlayActive) ? (e.contentClose(), e.close()) : (t("body").addClass("js-underlay--active"), e.open()), !1
                        }), t(".site-underlay__close").on("click", function () {
                            e.contentClose(), e.close()
                        }), t(".l-nav__menu li").on("click", function () {
                            t(".site-underlay").hasClass(e.underlayActive) && (e.contentClose(), e.close())
                        })
                    },
                    contentOpen: function () {
                        var e = this;
                        t(".site-underlay").addClass(e.underlayActive), t(".site-underlay__content").addClass(e.underlayContentActive)
                    },
                    contentClose: function () {
                        var e = this;
                        setTimeout(function () {
                            t(".site-underlay").removeClass(e.underlayActive), t("body").removeClass("js-underlay--active")
                        }, 600), t(".site-underlay__content").removeClass(e.underlayContentActive)
                    },
                    open: function () {
                        var e = t(".site-underlay"),
                            i = this;
                        TweenMax.to(e, .75, {
                            width: t(window).width(),
                            ease: Expo.easeOut,
                            onComplete: function () {
                                i.contentOpen()
                            }
                        })
                    },
                    close: function () {
                        var e = t(".site-underlay");
                        TweenMax.to(e, .75, {
                            delay: .6,
                            width: t(".l-nav.pushy-left").outerWidth(),
                            ease: Expo.easeOut,
                            onComplete: function () {
                                e.css("width", "0%")
                            }
                        })
                    },
                    resize: function () {
                        var e = this;
                        t(".site-underlay").hasClass(e.underlayActive) && (e.contentClose(), e.close())
                    }
                }
            },
            r = {
                init: function () {
                    var t = this;
                    setTimeout(function () {
                        t.projectOverview()
                    }, 600)
                },
                projectOverview: function () {
                    t(".projects-overview").length > 0 && t(".m-hero__bottom").addClass("m-hero__bottom--intro")
                }
            },
            a = {
                lang_switcher: {
                    add_cookie: function () {
                        a.lang_switcher.has_cookie() || t.cookie("six-lang-switcher", !0)
                    },
                    has_cookie: function () {
                        return "undefined" != typeof t.cookie("six-lang-switcher")
                    }
                }
            },
            l = {
                foundation: function () {
                    t(e).foundation()
                },
                fullPage: {
                    speed: 6e3,
                    lineAnimation: TweenMax,
                    init: function () {
                        var e = t("#fullpage"),
                            i = this;
                        e.length > 0 && !t("html").hasClass("fp-enabled") && (e.fullpage({
                            navigation: !0
                        }), setTimeout(function () {
                            l.fullPage.autoplay()
                        }, 5500), i.hover())
                    },
                    autoplay: function () {
                        var i = [],
                            n = this;
                        t(".fp-section").each(function (e) {
                            n.timer(1), 0 != e && i.push(setTimeout(function () {
                                t.fn.fullpage.moveSectionDown(), n.timer(e + 1)
                            }, n.speed * e))
                        }), t(e).on("click keydown mousewheel DOMMouseScroll touchend", function () {
                            t.each(i, function (t, e) {
                                clearTimeout(e)
                            }), n.resetTimer(), i = []
                        })
                    },
                    resetTimer: function () {
                        t("#fp-nav li .fp-nav__line").css("transform", "translateY(0)"), this.lineAnimation.kill()
                    },
                    timer: function (e) {
                        var i = this,
                            n = e,
                            o = i.speed / 1e3,
                            s = t("#fp-nav li:nth-child(" + n + ") span.fp-nav__line");
                        i.lineAnimation = TweenMax.to(s, o, {
                            y: 0,
                            ease: Power0.easeNone
                        })
                    },
                    hover: function () {
                        t(".fp-project__content").mouseenter(function () {
                            t(this).parents(".fp-project").addClass("fp-project--hover");
                        }).mouseleave(function () {
                            t(".fp-project").removeClass("fp-project--hover")
                        })
                    }
                },
                infiniteScroll: function () {
                    var e = t(".infinite");
                    e.length > 0 && e.infinitescroll({
                        loading: {
                            finishedMsg: "",
                            img: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                            msgText: ""
                        },
                        nextSelector: ".next",
                        navSelector: ".pagination",
                        itemSelector: t(".infinite--article").length > 0 ? "article" : ".infinite__container"
                    }, function () {
                        t(".infinite--article").length > 0 ? s.itemIntro() : (l.masonry.init(), s.itemIntro(), Foundation.reflow(t(".m-project-flush"), "interchange"))
                    })
                },
                inview: function () {
                    function i() {
                        var e, i, n = {
                            height: h.innerHeight,
                            width: h.innerWidth
                        };
                        return n.height || (e = c.compatMode, !e && t.support.boxModel || (i = "CSS1Compat" === e ? d : c.body, n = {
                            height: i.clientHeight,
                            width: i.clientWidth
                        })), n
                    }

                    function n() {
                        return {
                            top: h.pageYOffset || d.scrollTop || c.body.scrollTop,
                            left: h.pageXOffset || d.scrollLeft || c.body.scrollLeft
                        }
                    }

                    function o() {
                        if (l.length) {
                            var e = 0,
                                o = t.map(l, function (t) {
                                    var e = t.data.selector,
                                        i = t.$element;
                                    return e ? i.find(e) : i
                                });
                            for (s = s || i(), r = r || n(); e < l.length; e++)
                                if (t.contains(d, o[e][0])) {
                                    var a = t(o[e]),
                                        c = {
                                            height: a[0].offsetHeight,
                                            width: a[0].offsetWidth
                                        },
                                        h = a.offset(),
                                        u = a.data("inview");
                                    if (!r || !s) return;
                                    h.top + c.height > r.top && h.top < r.top + s.height && h.left + c.width > r.left && h.left < r.left + s.width ? u || a.data("inview", !0).trigger("inview", [!0]) : u && a.data("inview", !1).trigger("inview", [!1])
                                }
                        }
                    }
                    var s, r, a, l = [],
                        c = e,
                        h = window,
                        d = c.documentElement;
                    t.event.special.inview = {
                        add: function (e) {
                            l.push({
                                data: e,
                                $element: t(this),
                                element: this
                            }), !a && l.length && (a = setInterval(o, 250))
                        },
                        remove: function (t) {
                            for (var e = 0; e < l.length; e++) {
                                var i = l[e];
                                if (i.element === this && i.data.guid === t.guid) {
                                    l.splice(e, 1);
                                    break
                                }
                            }
                            l.length || (clearInterval(a), a = null)
                        }
                    }, t(h).bind("scroll resize scrollstop", function () {
                        s = r = null
                    }), !d.addEventListener && d.attachEvent && d.attachEvent("onfocusin", function () {
                        r = null
                    })
                },
                masonry: {
                    init: function () {
                        var e = t(".row--macy"),
                            i = this;
                        e.imagesLoaded(function () {
                            var t = e.masonry();
                            t.masonry("on", "layoutComplete", function () {
                                i.elPosition(e)
                            }), t.masonry()
                        })
                    },
                    elPosition: function (e) {
                        e.find("article").each(function () {
                            var e = t(this);
                            parseInt(e.parent().css("left")) > 0 && e.addClass("macy--right")
                        })
                    }
                },
                pushy: function () {
                    function i(t) {
                        "left" == t || l.hasClass(u) ? (l.toggleClass(u), a.lang_switcher.add_cookie()) : ("right" == t || l.hasClass(p)) && l.toggleClass(p)
                    }

                    function n() {
                        r.hasClass(d) ? (l.addClass(u), r.animate({
                            left: "0px"
                        }, g), c.animate({
                            left: v
                        }, g), h.animate({
                            left: v
                        }, g)) : (l.addClass(p), r.animate({
                            right: "0px"
                        }, g), c.animate({
                            right: v
                        }, g), h.animate({
                            right: v
                        }, g))
                    }

                    function o() {
                        r.hasClass(d) ? (l.removeClass(u), r.animate({
                            left: "-" + v
                        }, g), c.animate({
                            left: "0px"
                        }, g), h.animate({
                            left: "0px"
                        }, g)) : (l.removeClass(p), r.animate({
                            right: "-" + v
                        }, g), c.animate({
                            right: "0px"
                        }, g), h.animate({
                            right: "0px"
                        }, g))
                    }
                    var r = t(".pushy"),
                        l = t("body"),
                        c = t("#container"),
                        h = t(".push"),
                        d = "pushy-left",
                        u = "pushy-open-left",
                        p = "pushy-open-right",
                        f = t(".site-overlay"),
                        m = t(".menu-btn, .pushy-link"),
                        g = 200,
                        v = r.width() + "px",
                        _ = ".pushy-submenu",
                        y = (t(_), function () {
                            var t = e.createElement("p"),
                                i = !1,
                                n = {
                                    webkitTransform: "-webkit-transform",
                                    OTransform: "-o-transform",
                                    msTransform: "-ms-transform",
                                    MozTransform: "-moz-transform",
                                    transform: "transform"
                                };
                            e.body.insertBefore(t, null);
                            for (var o in n) void 0 !== t.style[o] && (t.style[o] = "translate3d(1px,1px,1px)", i = window.getComputedStyle(t).getPropertyValue(n[o]));
                            return e.body.removeChild(t), void 0 !== i && i.length > 0 && "none" !== i
                        }());
                    if (y) r.css({
                        visibility: "visible"
                    }), m.on("click", function () {
                        var e = t(this).data("pushy-dir");
                        t(".site-underlay--active").length > 0 ? (s.underlay.contentClose(), s.underlay.close(), setTimeout(function () {
                            i(e)
                        }, 1350)) : i(e)
                    }), f.on("click", function () {
                        i()
                    });
                    else {
                        l.addClass("no-csstransforms3d"), r.hasClass(d) ? r.css({
                            left: "-" + v
                        }) : r.css({
                            right: "-" + v
                        }), r.css({
                            visibility: "visible"
                        }), c.css({
                            "overflow-x": "hidden"
                        });
                        var w = !1;
                        m.on("click", function () {
                            w ? (o(), w = !1) : (n(), w = !0)
                        }), f.on("click", function () {
                            w ? (o(), w = !1) : (n(), w = !0)
                        })
                    }
                },
                scrollToFixed: {
                    init: function () {
                        if (t(".js-about-sticky").length > 0 && Foundation.MediaQuery.atLeast("xlarge")) {
                            var e = 0,
                                i = [];
                            t("#app").imagesLoaded(function () {
                                t(".js-about-sticky").each(function () {
                                    var n = t(this);
                                    i.push(n.offset().top + n.height() - t(".js-about-sticky__stick--" + e).outerHeight(!0)), t(".js-about-sticky__stick--" + e).scrollToFixed({
                                        marginTop: 160,
                                        limit: i[e],
                                        removeOffsets: !0
                                    }), e++
                                })
                            })
                        }
                    },
                    resize: function () {
                        t('div[class^="js-about-sticky"]').trigger("detach.ScrollToFixed"), this.init()
                    }
                },
                smoothState: function () {
                    var e = t("#app"),
                        i = {
                            prefetch: !1,
                            forms: !1,
                            onStart: {
                                duration: 1e3,
                                render: function (i) {
                                    t(".page.projects-overview").length > 0, t(".js-last-slide").length > 0 ? t(".single-cpt_project").hasClass("js-next") ? t(".frame--bottom").append('<div class="ajax-loader"></div>') : t(".frame--top").append('<div class="ajax-loader"></div>') : e.addClass("is-exiting"), t(".pushy-open-left, .pushy-open-right").length > 0 && setTimeout(function () {
                                        t(".site-overlay").trigger("click")
                                    }, 600)
                                }
                            },
                            onReady: {
                                duration: 600,
                                render: function (e, i) {
                                    i.find(".site-swipe").remove(), i.find(".site-transition, .site-transition__inner").removeAttr("style"), t("#app").imagesLoaded(function () {
                                        t(".js-last-slide").length > 0 ? (t("body").removeClass("js-last-slide"), t(".slideshow__title--active").removeClass("slideshow__title--active"), setTimeout(function () {
                                            function n() {
                                                t(window).scrollTop() > 0 ? t(i).prev()[0].remove() : t(i).next()[0].remove(), t("body").removeClass("js-frame-hover"), s.siteMark(), t(window).unbind("scroll"), o.ready(), setTimeout(function () {
                                                    t(".is-exiting").removeClass("is-exiting"), r.init()
                                                }, 400)
                                            }
                                            t("body").css("overflow", "hidden"), t(".single-cpt_project").hasClass("js-next") ? (e.append(i), TweenMax.to(window, .5, {
                                                scrollTo: {
                                                    y: parseInt(t(window).height())
                                                },
                                                ease: Power1.easeInOut,
                                                onComplete: n
                                            })) : (e.prepend(i), t("html, body").animate({
                                                scrollTop: parseInt(t(window).height())
                                            }, 0), TweenMax.to(window, .5, {
                                                scrollTo: {
                                                    y: 0
                                                },
                                                ease: Power1.easeInOut,
                                                onComplete: n
                                            }))
                                        }, 400)) : (t("body").removeAttr("style"), t("html").filter(".fp-enabled").length > 0 && t(i).filter(".home").length > 0 && (t("html").removeClass("fp-enabled"), t.fn.fullpage.destroy("all")), t("html").filter(".fp-enabled").length > 0 && !t(i).filter(".home").length > 0 && t.fn.fullpage.destroy("all"), e.html(i), s.siteMark(), t(window).unbind("scroll"), o.ready(), setTimeout(function () {
                                            t(".is-exiting").removeClass("is-exiting"), r.init()
                                        }, 400))
                                    })
                                }
                            },
                            onAfter: function () {}
                        },
                        n = e.smoothState(i).data(n)
                },
                tinyScrollbar: function () {
                    Foundation.MediaQuery.atLeast("xlarge") && t(".tinyscroll").tinyscrollbar(), t(".tinyscroll--nav").tinyscrollbar()
                }
            },
            c = {
                init: function () {
                    this.closeCaption()
                },
                closeCaption: function () {
                    t("body").removeClass("js-caption"), t(".slideshow__caption__trigger").removeClass("slideshow__caption__trigger--active")
                },
                post: {
                    init: function () {
                        this.flush(), this.inset()
                    },
                    flush: function () {
                        var e = t("body").height(),
                            i = t(".post__gallery .m-gallery__item").length,
                            n = e / i,
                            o = 0;
                        t(window).scroll(function () {
                            var e = t(this).scrollTop();
                            if (e > o)
                                for (var s = 0; s < i; s++) t(window).scrollTop() >= n * s && t(window).scrollTop() <= n * (s + 1) && 0 != s && t(".post__gallery .m-gallery__item").eq(s - 1).css("height", "0%");
                            else
                                for (var s = 0; s < i; s++) t(window).scrollTop() >= n * s && t(window).scrollTop() <= n * (s + 1) && t(".post__gallery .m-gallery__item").eq(s).css("height", "100%");
                            o = e
                        })
                    },
                    inset: function () {
                        var e = t(".m-gallery--inset");
                        e.slick({
                            arrows: !1,
                            fade: !0,
                            speed: 600,
                            autoplay: !0,
                            autoplaySpeed: 5e3,
                            responsive: [{
                                breakpoint: i.xlarge - 1,
                                settings: "unslick"
                            }]
                        })
                    }
                },
                project: {
                    init: function () {
                        var i = t(".slideshow--project"),
                            n = this;
                        i.on("beforeChange", function (e, o, s, r) {
                            setTimeout(function () {
                                t(".slideshow__pagination__scroller").css("top", r * -20)
                            }, 100), r < 1 && n.clearActive(), t('.slideshow__slide[data-slick-index="' + r + '"]').find(".c-video").length > 0 ? i.addClass("slideshow--project--video") : i.removeClass("slideshow--project--video"), t('.slideshow__slide[data-slick-index="' + r + '"]').find(".c-before-after").length > 0 ? i.addClass("slideshow--project--before-after") : i.removeClass("slideshow--project--before-after")
                        }), i.on("afterChange", function (e, n, o) {
                            var s = i.slick("slickCurrentSlide"),
                                r = t(".slideshow__title"),
                                a = t(".slideshow__controls");
                            s >= 1 && (r.addClass("slideshow__title--active"), a.addClass("slideshow__controls--active")), s + 1 === i.slick("getSlick").slideCount ? t(".slideshow--project").addClass("slideshow--project--last") : (t(".slideshow--project").removeClass("slideshow--project--last"), t("body").removeClass("js-last-slide"))
                        }), i.one("afterChange", function () {
                            console.log("one"), setTimeout(function () {
                                t("body").addClass("js-caption")
                            }, 400)
                        }), n.slickInit();
                        var o = i.slick("getSlick").slideCount;
                        t(".slideshow__pagination--total").text(o), t(e).on("click", ".slideshow--project--last .slick-next", function () {
                            c.closeCaption(), setTimeout(function () {
                                t("body").addClass("js-last-slide")
                            }, 400)
                        })
                    },
                    clearActive: function () {
                        var e = t(".slideshow__title"),
                            i = t(".slideshow__controls");
                        e.removeClass("slideshow__title--active"), i.removeClass("slideshow__controls--active"), t("body").removeClass("js-caption"), t(".slideshow__caption__trigger").removeClass("slideshow__caption__trigger--active")
                    },
                    slickInit: function () {
                        var e = t(".slideshow--project");
                        e.slick({
                            infinite: !1,
                            arrows: !0,
                            speed: 1e3,
                            cssEase: "cubic-bezier(0.850, 0.050, 0.105, 0.950)",
                            asNavFor: ".slideshow--project-caption",
                            responsive: [{
                                breakpoint: i.xlarge - 1,
                                settings: "unslick"
                            }]
                        })
                    },
                    resize: function () {
                        var e = this;
                        Foundation.MediaQuery.atLeast("xlarge") && !t(".slideshow--project.slick-initialized").length > 0 && e.slickInit(), Foundation.MediaQuery.atLeast("xlarge") || (e.clearActive(), t("html").removeAttr("style"))
                    }
                },
                projectCaption: function () {
                    var e = t(".slideshow--project-caption");
                    e.on("afterChange", function (i, n, o) {
                        var s = e.slick("slickCurrentSlide"),
                            r = t(".slick-active .slideshow__caption").text();
                        t(".js-caption--number").text(s + 1 + "."), t(".js-caption--title").text(r)
                    }), e.slick({
                        fade: !0,
                        infinite: !1,
                        arrows: !1,
                        speed: 1e3,
                        asNavFor: ".slideshow--project"
                    }), t(".slideshow__caption__trigger").on("click", function () {
                        t(this).toggleClass("slideshow__caption__trigger--active"), t("body").toggleClass("js-caption")
                    })
                },
                projectHero: function () {
                    var e = t(".slideshow--hero");
                    e.on("init", function () {
                        t(".slick-active .m-hero__bg, .slick-active + .slick-slide .m-hero__bg").addClass("m-hero--animation")
                    }), e.on("beforeChange", function (e, i, n, o) {
                        t('.slick-slide[data-slick-index="' + o + '"]').find(".m-hero__bg").addClass("m-hero--animation")
                    }), e.on("afterChange", function (e, i, n, o) {
                        0 !== n ? t('.slick-slide[data-slick-index="' + n + '"]').prev().find(".m-hero__bg").removeClass("m-hero--animation") : t('.slick-slide[data-slick-index="' + (i.slideCount - 1) + '"]').find(".m-hero__bg").removeClass("m-hero--animation")
                    }), e.slick({
                        arrows: !1,
                        autoplay: !0,
                        fade: !0,
                        speed: 1e3,
                        draggable: !1,
                        autoplaySpeed: 4e3,
                        pauseOnHover: !1
                    })
                }
            }
    }(jQuery, document);
    window.addEventListener(orientationEvent, function() {
    var orientation = Math.abs(window.orientation) == 90 ? 'landscape' : 'portrait';
    // Применяем нужные нам стили
}, false);
