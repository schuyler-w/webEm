/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document)
                throw new Error("jQuery requires a window with a document");
            return t(e)
        }
        : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = []
        , E = C.document
        , r = Object.getPrototypeOf
        , s = t.slice
        , g = t.concat
        , u = t.push
        , i = t.indexOf
        , n = {}
        , o = n.toString
        , v = n.hasOwnProperty
        , a = v.toString
        , l = a.call(Object)
        , y = {}
        , m = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
        , x = function(e) {
        return null != e && e === e.window
    }
        , c = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
    };
    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e,
            t)
            for (r in c)
                (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }
    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.4.1"
        , k = function(e, t) {
        return new k.fn.init(e,t)
    }
        , p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function d(e) {
        var t = !!e && "length"in e && e.length
            , n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    k.fn = k.prototype = {
        jquery: f,
        constructor: k,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this,
                t
        },
        each: function(e) {
            return k.each(this, e)
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
                , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    },
        k.extend = k.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
            for ("boolean" == typeof a && (l = a,
                a = arguments[s] || {},
                s++),
                 "object" == typeof a || m(a) || (a = {}),
                 s === u && (a = this,
                     s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        r = e[t],
                        "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                            o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {},
                            i = !1,
                            a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
            return a
        }
        ,
        k.extend({
            expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            globalEval: function(e, t) {
                b(e, {
                    nonce: t && t.nonce
                })
            },
            each: function(e, t) {
                var n, r = 0;
                if (d(e)) {
                    for (n = e.length; r < n; r++)
                        if (!1 === t.call(e[r], r, e[r]))
                            break
                } else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r]))
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(p, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
                    n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : i.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                    e[i++] = t[r];
                return e.length = i,
                    e
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                    !t(e[i], i) !== a && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var r, i, o = 0, a = [];
                if (d(e))
                    for (r = e.length; o < r; o++)
                        null != (i = t(e[o], o, n)) && a.push(i);
                else
                    for (o in e)
                        null != (i = t(e[o], o, n)) && a.push(i);
                return g.apply([], a)
            },
            guid: 1,
            support: y
        }),
    "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]),
        k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            n["[object " + t + "]"] = t.toLowerCase()
        });
    var h = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, k = "sizzle" + 1 * new Date, m = n.document, S = 0, r = 0, p = ue(), x = ue(), N = ue(), A = ue(), D = function(e, t) {
            return e === t && (l = !0),
                0
        }, j = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", F = new RegExp(M + "+","g"), B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp($), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + $),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + R + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)","ig"), ne = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
            return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, oe = function() {
            T()
        }, ae = be(function(e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            H.apply(t = O.call(m.childNodes), m.childNodes),
                t[m.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                        L.apply(e, O.call(t))
                    }
                    : function(e, t) {
                        var n = e.length
                            , r = 0;
                        while (e[n++] = t[r++])
                            ;
                        e.length = n - 1
                    }
            }
        }
        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
            if (n = n || [],
            "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                return n;
            if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e),
                e = e || C,
                E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i)))
                                return n;
                            if (a.id === i)
                                return n.push(a),
                                    n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                            return n.push(a),
                                n
                    } else {
                        if (u[2])
                            return H.apply(n, e.getElementsByTagName(t)),
                                n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                            return H.apply(n, e.getElementsByClassName(i)),
                                n
                    }
                if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t,
                        f = e,
                    1 === p && U.test(t)) {
                        (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k),
                            o = (l = h(t)).length;
                        while (o--)
                            l[o] = "#" + s + " " + xe(l[o]);
                        c = l.join(","),
                            f = ee.test(t) && ye(e.parentNode) || e
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)),
                            n
                    } catch (e) {
                        A(t, !0)
                    } finally {
                        s === k && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }
        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                    e[t + " "] = n
            }
        }
        function le(e) {
            return e[k] = !0,
                e
        }
        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                    t = null
            }
        }
        function fe(e, t) {
            var n = e.split("|")
                , r = n.length;
            while (r--)
                b.attrHandle[n[r]] = t
        }
        function pe(e, t) {
            var n = t && e
                , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function ge(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function ve(a) {
            return le(function(o) {
                return o = +o,
                    le(function(e, t) {
                        var n, r = a([], e.length, o), i = r.length;
                        while (i--)
                            e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                    })
            })
        }
        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {},
            i = se.isXML = function(e) {
                var t = e.namespaceURI
                    , n = (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }
            ,
            T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : m;
                return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement,
                        E = !i(C),
                    m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
                        d.attributes = ce(function(e) {
                            return e.className = "i",
                                !e.getAttribute("className")
                        }),
                        d.getElementsByTagName = ce(function(e) {
                            return e.appendChild(C.createComment("")),
                                !e.getElementsByTagName("*").length
                        }),
                        d.getElementsByClassName = K.test(C.getElementsByClassName),
                        d.getById = ce(function(e) {
                            return a.appendChild(e).id = k,
                            !C.getElementsByName || !C.getElementsByName(k).length
                        }),
                        d.getById ? (b.filter.ID = function(e) {
                                var t = e.replace(te, ne);
                                return function(e) {
                                    return e.getAttribute("id") === t
                                }
                            }
                                ,
                                b.find.ID = function(e, t) {
                                    if ("undefined" != typeof t.getElementById && E) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : []
                                    }
                                }
                        ) : (b.filter.ID = function(e) {
                                var n = e.replace(te, ne);
                                return function(e) {
                                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                    return t && t.value === n
                                }
                            }
                                ,
                                b.find.ID = function(e, t) {
                                    if ("undefined" != typeof t.getElementById && E) {
                                        var n, r, i, o = t.getElementById(e);
                                        if (o) {
                                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                                return [o];
                                            i = t.getElementsByName(e),
                                                r = 0;
                                            while (o = i[r++])
                                                if ((n = o.getAttributeNode("id")) && n.value === e)
                                                    return [o]
                                        }
                                        return []
                                    }
                                }
                        ),
                        b.find.TAG = d.getElementsByTagName ? function(e, t) {
                                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                            }
                            : function(e, t) {
                                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    while (n = o[i++])
                                        1 === n.nodeType && r.push(n);
                                    return r
                                }
                                return o
                            }
                        ,
                        b.find.CLASS = d.getElementsByClassName && function(e, t) {
                            if ("undefined" != typeof t.getElementsByClassName && E)
                                return t.getElementsByClassName(e)
                        }
                        ,
                        s = [],
                        v = [],
                    (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                        a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                        e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                        e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="),
                        e.querySelectorAll(":checked").length || v.push(":checked"),
                        e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]")
                    }),
                        ce(function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = C.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                            e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                            2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                                a.appendChild(e).disabled = !0,
                            2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                v.push(",.*:")
                        })),
                    (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                        d.disconnectedMatch = c.call(e, "*"),
                            c.call(e, "[s!='']:x"),
                            s.push("!=", $)
                    }),
                        v = v.length && new RegExp(v.join("|")),
                        s = s.length && new RegExp(s.join("|")),
                        t = K.test(a.compareDocumentPosition),
                        y = t || K.test(a.contains) ? function(e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e
                                    , r = t && t.parentNode;
                                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                            }
                            : function(e, t) {
                                if (t)
                                    while (t = t.parentNode)
                                        if (t === e)
                                            return !0;
                                return !1
                            }
                        ,
                        D = t ? function(e, t) {
                                if (e === t)
                                    return l = !0,
                                        0;
                                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                            }
                            : function(e, t) {
                                if (e === t)
                                    return l = !0,
                                        0;
                                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                                if (!i || !o)
                                    return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                                if (i === o)
                                    return pe(e, t);
                                n = e;
                                while (n = n.parentNode)
                                    a.unshift(n);
                                n = t;
                                while (n = n.parentNode)
                                    s.unshift(n);
                                while (a[r] === s[r])
                                    r++;
                                return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
                            }
                ),
                    C
            }
            ,
            se.matches = function(e, t) {
                return se(e, null, null, t)
            }
            ,
            se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== C && T(e),
                d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t)))
                    try {
                        var n = c.call(e, t);
                        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return n
                    } catch (e) {
                        A(t, !0)
                    }
                return 0 < se(t, C, null, [e]).length
            }
            ,
            se.contains = function(e, t) {
                return (e.ownerDocument || e) !== C && T(e),
                    y(e, t)
            }
            ,
            se.attr = function(e, t) {
                (e.ownerDocument || e) !== C && T(e);
                var n = b.attrHandle[t.toLowerCase()]
                    , r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }
            ,
            se.escape = function(e) {
                return (e + "").replace(re, ie)
            }
            ,
            se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            se.uniqueSort = function(e) {
                var t, n = [], r = 0, i = 0;
                if (l = !d.detectDuplicates,
                    u = !d.sortStable && e.slice(0),
                    e.sort(D),
                    l) {
                    while (t = e[i++])
                        t === e[i] && (r = n.push(i));
                    while (r--)
                        e.splice(n[r], 1)
                }
                return u = null,
                    e
            }
            ,
            o = se.getText = function(e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += o(e)
                    } else if (3 === i || 4 === i)
                        return e.nodeValue
                } else
                    while (t = e[r++])
                        n += o(t);
                return n
            }
            ,
            (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                            e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                                return !0
                            }
                            : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                    },
                    CLASS: function(e) {
                        var t = p[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "",
                                "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3)
                            , m = "last" !== h.slice(-4)
                            , x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                                return !!e.parentNode
                            }
                            : function(e, t, n) {
                                var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                                if (c) {
                                    if (y) {
                                        while (l) {
                                            a = e;
                                            while (a = a[l])
                                                if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                                    return !1;
                                            u = l = "only" === h && !u && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (u = [m ? c.firstChild : c.lastChild],
                                    m && p) {
                                        d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2],
                                            a = s && c.childNodes[s];
                                        while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                            if (1 === a.nodeType && ++d && a === e) {
                                                i[h] = [S, s, d];
                                                break
                                            }
                                    } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]),
                                    !1 === d)
                                        while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                            if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]),
                                            a === e))
                                                break;
                                    return (d -= v) === g || d % g == 0 && 0 <= d / g
                                }
                            }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                                b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                                    var n, r = a(e, o), i = r.length;
                                    while (i--)
                                        e[n = P(e, r[i])] = !(t[n] = r[i])
                                }) : function(e) {
                                    return a(e, 0, t)
                                }
                        ) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = []
                            , i = []
                            , s = f(e.replace(B, "$1"));
                        return s[k] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []), a = e.length;
                            while (a--)
                                (i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e,
                                s(r, null, n, i),
                                r[0] = null,
                                !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n),
                            n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                        return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function(e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: ve(function(e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                            e.push(r);
                        return e
                    }),
                    gt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; )
                            e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq,
            {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
            b.pseudos[e] = de(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            b.pseudos[e] = he(e);
        function me() {}
        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function be(s, e, t) {
            var u = e.dir
                , l = e.next
                , c = l || u
                , f = t && "parentNode" === c
                , p = r++;
            return e.first ? function(e, t, n) {
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            return s(e, t, n);
                    return !1
                }
                : function(e, t, n) {
                    var r, i, o, a = [S, p];
                    if (n) {
                        while (e = e[u])
                            if ((1 === e.nodeType || f) && s(e, t, n))
                                return !0
                    } else
                        while (e = e[u])
                            if (1 === e.nodeType || f)
                                if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                                l && l === e.nodeName.toLowerCase())
                                    e = e[u] || e;
                                else {
                                    if ((r = i[c]) && r[0] === S && r[1] === p)
                                        return a[2] = r[2];
                                    if ((i[c] = a)[2] = s(e, t, n))
                                        return !0
                                }
                    return !1
                }
        }
        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                    var r = i.length;
                    while (r--)
                        if (!i[r](e, t, n))
                            return !1;
                    return !0
                }
                : i[0]
        }
        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                l && t.push(s)));
            return a
        }
        function Ce(d, h, g, v, y, e) {
            return v && !v[k] && (v = Ce(v)),
            y && !y[k] && (y = Ce(y, e)),
                le(function(e, t, n, r) {
                    var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++)
                            se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                    if (g && g(f, p, n, r),
                        v) {
                        i = Te(p, u),
                            v(i, [], n, r),
                            o = i.length;
                        while (o--)
                            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                    }
                    if (e) {
                        if (y || d) {
                            if (y) {
                                i = [],
                                    o = p.length;
                                while (o--)
                                    (a = p[o]) && i.push(f[o] = a);
                                y(null, p = [], i, r)
                            }
                            o = p.length;
                            while (o--)
                                (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                        }
                    } else
                        p = Te(p === t ? p.splice(l, p.length) : p),
                            y ? y(null, t, p, r) : H.apply(t, p)
                })
        }
        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                return e === i
            }, a, !0), l = be(function(e) {
                return -1 < P(i, e)
            }, a, !0), c = [function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null,
                    r
            }
            ]; s < r; s++)
                if (t = b.relative[e[s].type])
                    c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type])
                                break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos,
            b.setFilters = new me,
            h = se.tokenize = function(e, t) {
                var n, r, i, o, a, s, u, l = x[e + " "];
                if (l)
                    return t ? 0 : l.slice(0);
                a = e,
                    s = [],
                    u = b.preFilter;
                while (a) {
                    for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                        s.push(i = [])),
                        n = !1,
                    (r = z.exec(a)) && (n = r.shift(),
                        i.push({
                            value: n,
                            type: r[0].replace(B, " ")
                        }),
                        a = a.slice(n.length)),
                        b.filter)
                        !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                            i.push({
                                value: n,
                                type: o,
                                matches: r
                            }),
                            a = a.slice(n.length));
                    if (!n)
                        break
                }
                return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
            }
            ,
            f = se.compile = function(e, t) {
                var n, v, y, m, x, r, i = [], o = [], a = N[e + " "];
                if (!a) {
                    t || (t = h(e)),
                        n = t.length;
                    while (n--)
                        (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
                    (a = N(e, (v = o,
                        m = 0 < (y = i).length,
                        x = 0 < v.length,
                        r = function(e, t, n, r, i) {
                            var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = S += null == p ? 1 : Math.random() || .1, g = d.length;
                            for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                                if (x && o) {
                                    a = 0,
                                    t || o.ownerDocument === C || (T(o),
                                        n = !E);
                                    while (s = v[a++])
                                        if (s(o, t || C, n)) {
                                            r.push(o);
                                            break
                                        }
                                    i && (S = h)
                                }
                                m && ((o = !s && o) && u--,
                                e && c.push(o))
                            }
                            if (u += l,
                            m && l !== u) {
                                a = 0;
                                while (s = y[a++])
                                    s(c, f, t, n);
                                if (e) {
                                    if (0 < u)
                                        while (l--)
                                            c[l] || f[l] || (f[l] = q.call(r));
                                    f = Te(f)
                                }
                                H.apply(r, f),
                                i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                            }
                            return i && (S = h,
                                w = p),
                                c
                        }
                        ,
                        m ? le(r) : r))).selector = e
                }
                return a
            }
            ,
            g = se.select = function(e, t, n, r) {
                var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
                if (n = n || [],
                1 === c.length) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                        if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                            return n;
                        l && (t = t.parentNode),
                            e = e.slice(o.shift().value.length)
                    }
                    i = G.needsContext.test(e) ? 0 : o.length;
                    while (i--) {
                        if (a = o[i],
                            b.relative[s = a.type])
                            break;
                        if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                            if (o.splice(i, 1),
                                !(e = r.length && xe(o)))
                                return H.apply(n, r),
                                    n;
                            break
                        }
                    }
                }
                return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t),
                    n
            }
            ,
            d.sortStable = k.split("").sort(D).join("") === k,
            d.detectDuplicates = !!l,
            T(),
            d.sortDetached = ce(function(e) {
                return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
            }),
        ce(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
            se
    }(C);
    k.find = h,
        k.expr = h.selectors,
        k.expr[":"] = k.expr.pseudos,
        k.uniqueSort = k.unique = h.uniqueSort,
        k.text = h.getText,
        k.isXMLDoc = h.isXML,
        k.contains = h.contains,
        k.escapeSelector = h.escape;
    var T = function(e, t, n) {
        var r = []
            , i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType)
            if (1 === e.nodeType) {
                if (i && k(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
        , S = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
        , N = k.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, n, r) {
        return m(n) ? k.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? k.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? k.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : k.filter(n, e, r)
    }
    k.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function(e) {
                return 1 === e.nodeType
            }))
    }
        ,
        k.fn.extend({
            find: function(e) {
                var t, n, r = this.length, i = this;
                if ("string" != typeof e)
                    return this.pushStack(k(e).filter(function() {
                        for (t = 0; t < r; t++)
                            if (k.contains(i[t], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                         t = 0; t < r; t++)
                    k.find(e, i[t], n);
                return 1 < r ? k.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(j(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(j(this, e || [], !0))
            },
            is: function(e) {
                return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length
            }
        });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function(e, t, n) {
            var r, i;
            if (!e)
                return this;
            if (n = n || q,
            "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof k ? t[0] : t,
                        k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                    D.test(r[1]) && k.isPlainObject(t))
                        for (r in t)
                            m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (i = E.getElementById(r[2])) && (this[0] = i,
                    this.length = 1),
                    this
            }
            return e.nodeType ? (this[0] = e,
                this.length = 1,
                this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
        }
    ).prototype = k.fn,
        q = k(E);
    var H = /^(?:parents|prev(?:Until|All))/
        , O = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType)
            ;
        return e
    }
    k.fn.extend({
        has: function(e) {
            var t = k(e, this)
                , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (k.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && k(e);
            if (!N.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? k.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
        k.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return T(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return T(e, "parentNode", n)
            },
            next: function(e) {
                return P(e, "nextSibling")
            },
            prev: function(e) {
                return P(e, "previousSibling")
            },
            nextAll: function(e) {
                return T(e, "nextSibling")
            },
            prevAll: function(e) {
                return T(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return T(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return T(e, "previousSibling", n)
            },
            siblings: function(e) {
                return S((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return S(e.firstChild)
            },
            contents: function(e) {
                return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e),
                    k.merge([], e.childNodes))
            }
        }, function(r, i) {
            k.fn[r] = function(e, t) {
                var n = k.map(this, i, e);
                return "Until" !== r.slice(-5) && (t = e),
                t && "string" == typeof t && (n = k.filter(t, n)),
                1 < this.length && (O[r] || k.uniqueSort(n),
                H.test(r) && n.reverse()),
                    this.pushStack(n)
            }
        });
    var R = /[^\x20\t\r\n\f]+/g;
    function M(e) {
        return e
    }
    function I(e) {
        throw e
    }
    function W(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    k.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r,
            n = {},
            k.each(e.match(R) || [], function(e, t) {
                n[t] = !0
            }),
            n) : k.extend({}, r);
        var i, t, o, a, s = [], u = [], l = -1, c = function() {
            for (a = a || r.once,
                     o = i = !0; u.length; l = -1) {
                t = u.shift();
                while (++l < s.length)
                    !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                        t = !1)
            }
            r.memory || (t = !1),
                i = !1,
            a && (s = t ? [] : "")
        }, f = {
            add: function() {
                return s && (t && !i && (l = s.length - 1,
                    u.push(t)),
                    function n(e) {
                        k.each(e, function(e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments),
                t && !i && c()),
                    this
            },
            remove: function() {
                return k.each(arguments, function(e, t) {
                    var n;
                    while (-1 < (n = k.inArray(t, s, n)))
                        s.splice(n, 1),
                        n <= l && l--
                }),
                    this
            },
            has: function(e) {
                return e ? -1 < k.inArray(e, s) : 0 < s.length
            },
            empty: function() {
                return s && (s = []),
                    this
            },
            disable: function() {
                return a = u = [],
                    s = t = "",
                    this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return a = u = [],
                t || i || (s = t = ""),
                    this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, t) {
                return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                    u.push(t),
                i || c()),
                    this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                    this
            },
            fired: function() {
                return !!o
            }
        };
        return f
    }
        ,
        k.extend({
            Deferred: function(e) {
                var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]]
                    , i = "pending"
                    , a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments),
                            this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return k.Deferred(function(r) {
                            k.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }),
                                i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;
                        function l(i, o, a, s) {
                            return function() {
                                var n = this
                                    , r = arguments
                                    , e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise())
                                                throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                                m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++,
                                                    t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0,
                                                    r = [e]),
                                                    (s || o.resolveWith)(n, r))
                                        }
                                    }
                                    , t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace),
                                            u <= i + 1 && (a !== I && (n = void 0,
                                                r = [e]),
                                                o.rejectWith(n, r))
                                        }
                                    }
                                ;
                                i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()),
                                    C.setTimeout(t))
                            }
                        }
                        return k.Deferred(function(e) {
                            o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)),
                                o[1][3].add(l(0, e, m(t) ? t : M)),
                                o[2][3].add(l(0, e, m(n) ? n : I))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? k.extend(e, a) : a
                    }
                }
                    , s = {};
                return k.each(o, function(e, t) {
                    var n = t[2]
                        , r = t[5];
                    a[t[1]] = n.add,
                    r && n.add(function() {
                        i = r
                    }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                        n.add(t[3].fire),
                        s[t[0]] = function() {
                            return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                                this
                        }
                        ,
                        s[t[0] + "With"] = n.fireWith
                }),
                    a.promise(s),
                e && e.call(s, s),
                    s
            },
            when: function(e) {
                var n = arguments.length
                    , t = n
                    , r = Array(t)
                    , i = s.call(arguments)
                    , o = k.Deferred()
                    , a = function(t) {
                    return function(e) {
                        r[t] = this,
                            i[t] = 1 < arguments.length ? s.call(arguments) : e,
                        --n || o.resolveWith(r, i)
                    }
                };
                if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n),
                "pending" === o.state() || m(i[t] && i[t].then)))
                    return o.then();
                while (t--)
                    W(i[t], a(t), o.reject);
                return o.promise()
            }
        });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }
        ,
        k.readyException = function(e) {
            C.setTimeout(function() {
                throw e
            })
        }
    ;
    var F = k.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
            C.removeEventListener("load", B),
            k.ready()
    }
    k.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            k.readyException(e)
        }),
            this
    }
        ,
        k.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k])
            }
        }),
        k.ready.then = F.then,
        "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B),
            C.addEventListener("load", B));
    var _ = function(e, t, n, r, i, o, a) {
        var s = 0
            , u = e.length
            , l = null == n;
        if ("object" === w(n))
            for (s in i = !0,
                n)
                _(e, t, s, n[s], !0, o, a);
        else if (void 0 !== r && (i = !0,
        m(r) || (a = !0),
        l && (a ? (t.call(e, r),
            t = null) : (l = t,
                t = function(e, t, n) {
                    return l.call(k(e), n)
                }
        )),
            t))
            for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
        , z = /^-ms-/
        , U = /-([a-z])/g;
    function X(e, t) {
        return t.toUpperCase()
    }
    function V(e) {
        return e.replace(z, "ms-").replace(U, X)
    }
    var G = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    function Y() {
        this.expando = k.expando + Y.uid++
    }
    Y.uid = 1,
        Y.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {},
                G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                    t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t)
                    i[V(t)] = n;
                else
                    for (r in t)
                        i[V(r)] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                    void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(V) : (t = V(t))in r ? [t] : t.match(R) || []).length;
                        while (n--)
                            delete r[t[n]]
                    }
                    (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !k.isEmptyObject(t)
            }
        };
    var Q = new Y
        , J = new Y
        , K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , Z = /[A-Z]/g;
    function ee(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Z, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                J.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    k.extend({
        hasData: function(e) {
            return J.hasData(e) || Q.hasData(e)
        },
        data: function(e, t, n) {
            return J.access(e, t, n)
        },
        removeData: function(e, t) {
            J.remove(e, t)
        },
        _data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        _removeData: function(e, t) {
            Q.remove(e, t)
        }
    }),
        k.fn.extend({
            data: function(n, e) {
                var t, r, i, o = this[0], a = o && o.attributes;
                if (void 0 === n) {
                    if (this.length && (i = J.get(o),
                    1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                        t = a.length;
                        while (t--)
                            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)),
                                ee(o, r, i[r]));
                        Q.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof n ? this.each(function() {
                    J.set(this, n)
                }) : _(this, function(e) {
                    var t;
                    if (o && void 0 === e)
                        return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
                    this.each(function() {
                        J.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    J.remove(this, e)
                })
            }
        }),
        k.extend({
            queue: function(e, t, n) {
                var r;
                if (e)
                    return t = (t || "fx") + "queue",
                        r = Q.get(e, t),
                    n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)),
                    r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = k.queue(e, t)
                    , r = n.length
                    , i = n.shift()
                    , o = k._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(),
                    r--),
                i && ("fx" === t && n.unshift("inprogress"),
                    delete o.stop,
                    i.call(e, function() {
                        k.dequeue(e, t)
                    }, o)),
                !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Q.get(e, n) || Q.access(e, n, {
                    empty: k.Callbacks("once memory").add(function() {
                        Q.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        k.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return "string" != typeof t && (n = t,
                    t = "fx",
                    e--),
                    arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                        var e = k.queue(this, t, n);
                        k._queueHooks(this, t),
                        "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
                    })
            },
            dequeue: function(e) {
                return this.each(function() {
                    k.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1, i = k.Deferred(), o = this, a = this.length, s = function() {
                    --r || i.resolveWith(o, [o])
                };
                "string" != typeof e && (t = e,
                    e = void 0),
                    e = e || "fx";
                while (a--)
                    (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++,
                        n.empty.add(s));
                return s(),
                    i.promise(t)
            }
        });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$","i")
        , re = ["Top", "Right", "Bottom", "Left"]
        , ie = E.documentElement
        , oe = function(e) {
        return k.contains(e.ownerDocument, e)
    }
        , ae = {
        composed: !0
    };
    ie.getRootNode && (oe = function(e) {
            return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument
        }
    );
    var se = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display")
    }
        , ue = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t)
            a[o] = e.style[o],
                e.style[o] = t[o];
        for (o in i = n.apply(e, r || []),
            t)
            e.style[o] = a[o];
        return i
    };
    function le(e, t, n, r) {
        var i, o, a = 20, s = r ? function() {
                return r.cur()
            }
            : function() {
                return k.css(e, t, "")
            }
            , u = s(), l = n && n[3] || (k.cssNumber[t] ? "" : "px"), c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));
        if (c && c[3] !== l) {
            u /= 2,
                l = l || c[3],
                c = +u || 1;
            while (a--)
                k.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                    c /= o;
            c *= 2,
                k.style(e, t, c + l),
                n = n || []
        }
        return n && (c = +c || +u || 0,
            i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = l,
            r.start = c,
            r.end = i)),
            i
    }
    var ce = {};
    function fe(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
            (r = e[c]).style && (n = r.style.display,
                t ? ("none" === n && (l[c] = Q.get(r, "display") || null,
                l[c] || (r.style.display = "")),
                "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0,
                    a = (i = r).ownerDocument,
                    s = i.nodeName,
                (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)),
                    u = k.css(o, "display"),
                    o.parentNode.removeChild(o),
                "none" === u && (u = "block"),
                    ce[s] = u)))) : "none" !== n && (l[c] = "none",
                    Q.set(r, "display", n)));
        for (c = 0; c < f; c++)
            null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    k.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                se(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i
        , de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
        , he = /^$|^module$|\/(?:java|ecma)script/i
        , ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
            void 0 === t || t && A(e, t) ? k.merge([e], n) : n
    }
    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option,
        ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
        ge.th = ge.td;
    var me, xe, be = /<|&#?\w+;/;
    function we(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o))
                    k.merge(p, o.nodeType ? [o] : o);
                else if (be.test(o)) {
                    a = a || f.appendChild(t.createElement("div")),
                        s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                        u = ge[s] || ge._default,
                        a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2],
                        c = u[0];
                    while (c--)
                        a = a.lastChild;
                    k.merge(p, a.childNodes),
                        (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(o));
        f.textContent = "",
            d = 0;
        while (o = p[d++])
            if (r && -1 < k.inArray(o, r))
                i && i.push(o);
            else if (l = oe(o),
                a = ve(f.appendChild(o), "script"),
            l && ye(a),
                n) {
                c = 0;
                while (o = a[c++])
                    he.test(o.type || "") && n.push(o)
            }
        return f
    }
    me = E.createDocumentFragment().appendChild(E.createElement("div")),
        (xe = E.createElement("input")).setAttribute("type", "radio"),
        xe.setAttribute("checked", "checked"),
        xe.setAttribute("name", "t"),
        me.appendChild(xe),
        y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked,
        me.innerHTML = "<textarea>x</textarea>",
        y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
    var Te = /^key/
        , Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
        , Ee = /^([^.]*)(?:\.(.+)|)/;
    function ke() {
        return !0
    }
    function Se() {
        return !1
    }
    function Ne(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }
    function Ae(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n,
                n = void 0),
                t)
                Ae(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n,
            r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
            r = void 0) : (i = r,
            r = n,
            n = void 0)),
        !1 === i)
            i = Se;
        else if (!i)
            return e;
        return 1 === o && (a = i,
            (i = function(e) {
                    return k().off(e),
                        a.apply(this, arguments)
                }
            ).guid = a.guid || (a.guid = k.guid++)),
            e.each(function() {
                k.event.add(this, t, i, r, n)
            })
    }
    function De(e, i, o) {
        o ? (Q.set(e, i, !1),
            k.event.add(e, i, {
                namespace: !1,
                handler: function(e) {
                    var t, n, r = Q.get(this, i);
                    if (1 & e.isTrigger && this[i]) {
                        if (r.length)
                            (k.event.special[i] || {}).delegateType && e.stopPropagation();
                        else if (r = s.call(arguments),
                            Q.set(this, i, r),
                            t = o(this, i),
                            this[i](),
                            r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {},
                        r !== n)
                            return e.stopImmediatePropagation(),
                                e.preventDefault(),
                                n.value
                    } else
                        r.length && (Q.set(this, i, {
                            value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
                        }),
                            e.stopImmediatePropagation())
                }
            })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke)
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.get(t);
            if (v) {
                n.handler && (n = (o = n).handler,
                    i = o.selector),
                i && k.find.matchesSelector(ie, i),
                n.guid || (n.guid = k.guid++),
                (u = v.events) || (u = v.events = {}),
                (a = v.handle) || (a = v.handle = function(e) {
                        return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                    }
                ),
                    l = (e = (e || "").match(R) || [""]).length;
                while (l--)
                    d = g = (s = Ee.exec(e[l]) || [])[1],
                        h = (s[2] || "").split(".").sort(),
                    d && (f = k.event.special[d] || {},
                        d = (i ? f.delegateType : f.bindType) || d,
                        f = k.event.special[d] || {},
                        c = k.extend({
                            type: d,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && k.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o),
                    (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                    f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                        i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                        k.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Q.hasData(e) && Q.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(R) || [""]).length;
                while (l--)
                    if (d = g = (s = Ee.exec(t[l]) || [])[1],
                        h = (s[2] || "").split(".").sort(),
                        d) {
                        f = k.event.special[d] || {},
                            p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                            s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            a = o = p.length;
                        while (o--)
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle),
                            delete u[d])
                    } else
                        for (d in u)
                            k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && Q.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = k.event.fix(e), u = new Array(arguments.length), l = (Q.get(this, "events") || {})[s.type] || [], c = k.event.special[s.type] || {};
            for (u[0] = s,
                     t = 1; t < arguments.length; t++)
                u[t] = arguments[t];
            if (s.delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                a = k.event.handlers.call(this, s, l),
                    t = 0;
                while ((i = a[t++]) && !s.isPropagationStopped()) {
                    s.currentTarget = i.elem,
                        n = 0;
                    while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped())
                        s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o,
                            s.data = o.data,
                        void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(),
                            s.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, s),
                    s.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [],
                                 a = {},
                                 n = 0; n < u; n++)
                            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this,
            u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }),
                s
        },
        addProp: function(t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                        if (this.originalEvent)
                            return e(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[t]
                    }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[k.expando] ? e : new k.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke),
                        !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"),
                        !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
        k.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        k.Event = function(e, t) {
            if (!(this instanceof k.Event))
                return new k.Event(e,t);
            e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se,
                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                this.currentTarget = e.currentTarget,
                this.relatedTarget = e.relatedTarget) : this.type = e,
            t && k.extend(this, t),
                this.timeStamp = e && e.timeStamp || Date.now(),
                this[k.expando] = !0
        }
        ,
        k.Event.prototype = {
            constructor: k.Event,
            isDefaultPrevented: Se,
            isPropagationStopped: Se,
            isImmediatePropagationStopped: Se,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = ke,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = ke,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = ke,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        k.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            "char": !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, k.event.addProp),
        k.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            k.event.special[e] = {
                setup: function() {
                    return De(this, e, Ne),
                        !1
                },
                trigger: function() {
                    return De(this, e),
                        !0
                },
                delegateType: t
            }
        }),
        k.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, i) {
            k.event.special[e] = {
                delegateType: i,
                bindType: i,
                handle: function(e) {
                    var t, n = e.relatedTarget, r = e.handleObj;
                    return n && (n === this || k.contains(this, n)) || (e.type = r.origType,
                        t = r.handler.apply(this, arguments),
                        e.type = i),
                        t
                }
            }
        }),
        k.fn.extend({
            on: function(e, t, n, r) {
                return Ae(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return Ae(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                        k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                        this;
                if ("object" == typeof e) {
                    for (i in e)
                        this.off(i, t, e[i]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t,
                    t = void 0),
                !1 === n && (n = Se),
                    this.each(function() {
                        k.event.remove(this, e, n, t)
                    })
            }
        });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
        , qe = /<script|<style|<link/i
        , Le = /checked\s*(?:[^=]|=\s*.checked.)/i
        , He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Oe(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e
    }
    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
    }
    function Re(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
            e
    }
    function Me(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.access(e),
                a = Q.set(t, o),
                l = o.events))
                for (i in delete a.handle,
                    a.events = {},
                    l)
                    for (n = 0,
                             r = l[i].length; n < r; n++)
                        k.event.add(t, i, l[i][n]);
            J.hasData(e) && (s = J.access(e),
                u = k.extend({}, s),
                J.set(t, u))
        }
    }
    function Ie(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d))
            return n.each(function(e) {
                var t = n.eq(e);
                h && (r[0] = d.call(this, e, t.html())),
                    Ie(t, r, i, o)
            });
        if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild,
        1 === e.childNodes.length && (e = t),
        t || o)) {
            for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++)
                u = e,
                c !== p && (u = k.clone(u, !0, !0),
                s && k.merge(a, ve(u, "script"))),
                    i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                         k.map(a, Re),
                         c = 0; c < s; c++)
                    u = a[c],
                    he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
                        nonce: u.nonce || u.getAttribute("nonce")
                    }) : b(u.textContent.replace(He, ""), u, l))
        }
        return n
    }
    function We(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || k.cleanData(ve(r)),
            r.parentNode && (n && oe(r) && ye(ve(r, "script")),
                r.parentNode.removeChild(r));
        return e
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e.replace(je, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = oe(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (a = ve(c),
                         r = 0,
                         i = (o = ve(e)).length; r < i; r++)
                    s = o[r],
                        u = a[r],
                        void 0,
                        "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e),
                             a = a || ve(c),
                             r = 0,
                             i = o.length; r < i; r++)
                        Me(o[r], a[r]);
                else
                    Me(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")),
                c
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (G(n)) {
                    if (t = n[Q.expando]) {
                        if (t.events)
                            for (r in t.events)
                                i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                        n[Q.expando] = void 0
                    }
                    n[J.expando] && (n[J.expando] = void 0)
                }
        }
    }),
        k.fn.extend({
            detach: function(e) {
                return We(this, e, !0)
            },
            remove: function(e) {
                return We(this, e)
            },
            text: function(e) {
                return _(this, function(e) {
                    return void 0 === e ? k.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return Ie(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return Ie(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Oe(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return Ie(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return Ie(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (k.cleanData(ve(e, !1)),
                        e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                    t = null == t ? e : t,
                    this.map(function() {
                        return k.clone(this, e, t)
                    })
            },
            html: function(e) {
                return _(this, function(e) {
                    var t = this[0] || {}
                        , n = 0
                        , r = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = k.htmlPrefilter(e);
                        try {
                            for (; n < r; n++)
                                1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)),
                                    t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return Ie(this, arguments, function(e) {
                    var t = this.parentNode;
                    k.inArray(this, n) < 0 && (k.cleanData(ve(this)),
                    t && t.replaceChild(e, this))
                }, n)
            }
        }),
        k.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, a) {
            k.fn[e] = function(e) {
                for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++)
                    t = o === i ? this : this.clone(!0),
                        k(r[o])[a](t),
                        u.apply(n, t.get());
                return this.pushStack(n)
            }
        });
    var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$","i")
        , Fe = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C),
            t.getComputedStyle(e)
    }
        , Be = new RegExp(re.join("|"),"i");
    function _e(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)),
        !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width,
            i = s.minWidth,
            o = s.maxWidth,
            s.minWidth = s.maxWidth = s.width = a,
            a = n.width,
            s.width = r,
            s.minWidth = i,
            s.maxWidth = o)),
            void 0 !== a ? a + "" : a
    }
    function ze(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    !function() {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    ie.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top,
                    a = 12 === t(e.marginLeft),
                    u.style.right = "60%",
                    o = 36 === t(e.right),
                    r = 36 === t(e.width),
                    u.style.position = "absolute",
                    i = 12 === t(u.offsetWidth / 3),
                    ie.removeChild(s),
                    u = null
            }
        }
        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s = E.createElement("div"), u = E.createElement("div");
        u.style && (u.style.backgroundClip = "content-box",
            u.cloneNode(!0).style.backgroundClip = "",
            y.clearCloneStyle = "content-box" === u.style.backgroundClip,
            k.extend(y, {
                boxSizingReliable: function() {
                    return e(),
                        r
                },
                pixelBoxStyles: function() {
                    return e(),
                        o
                },
                pixelPosition: function() {
                    return e(),
                        n
                },
                reliableMarginLeft: function() {
                    return e(),
                        a
                },
                scrollboxSize: function() {
                    return e(),
                        i
                }
            }))
    }();
    var Ue = ["Webkit", "Moz", "ms"]
        , Xe = E.createElement("div").style
        , Ve = {};
    function Ge(e) {
        var t = k.cssProps[e] || Ve[e];
        return t || (e in Xe ? e : Ve[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1)
                , n = Ue.length;
            while (n--)
                if ((e = Ue[n] + t)in Xe)
                    return e
        }(e) || e)
    }
    var Ye = /^(none|table(?!-c[ea]).+)/
        , Qe = /^--/
        , Je = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
        , Ke = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function Ze(e, t, n) {
        var r = ne.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function et(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0
            , s = 0
            , u = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += k.css(e, n + re[a], !0, i)),
                r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)),
                "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i),
                    "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
            u
    }
    function tt(e, t, n) {
        var r = Fe(e)
            , i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r)
            , o = i
            , a = _e(e, t, r)
            , s = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
            if (!n)
                return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r),
        (o = s in e) && (a = e[s])),
        (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }
    function nt(e, t, n, r, i) {
        return new nt.prototype.init(e,t,n,r,i)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = _e(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = V(t), u = Qe.test(t), l = e.style;
                if (u || (t = Ge(s)),
                    a = k.cssHooks[t] || k.cssHooks[s],
                void 0 === n)
                    return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i),
                    o = "number"),
                null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")),
                y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = V(t);
            return Qe.test(t) || (t = Ge(s)),
            (a = k.cssHooks[t] || k.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
            void 0 === i && (i = _e(e, t, r)),
            "normal" === i && t in Ke && (i = Ke[t]),
                "" === n || n ? (o = parseFloat(i),
                    !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }),
        k.each(["height", "width"], function(e, u) {
            k.cssHooks[u] = {
                get: function(e, t, n) {
                    if (t)
                        return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function() {
                            return tt(e, u, n)
                        })
                },
                set: function(e, t, n) {
                    var r, i = Fe(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i), s = n ? et(e, u, n, a, i) : 0;
                    return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)),
                    s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                        t = k.css(e, u)),
                        Ze(0, t, s)
                }
            }
        }),
        k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function(e, t) {
            if (t)
                return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
        }),
        k.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(i, o) {
            k.cssHooks[i + o] = {
                expand: function(e) {
                    for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                        n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
                    return n
                }
            },
            "margin" !== i && (k.cssHooks[i + o].set = Ze)
        }),
        k.fn.extend({
            css: function(e, t) {
                return _(this, function(e, t, n) {
                    var r, i, o = {}, a = 0;
                    if (Array.isArray(t)) {
                        for (r = Fe(e),
                                 i = t.length; a < i; a++)
                            o[t[a]] = k.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
                }, e, t, 1 < arguments.length)
            }
        }),
        ((k.Tween = nt).prototype = {
            constructor: nt,
            init: function(e, t, n, r, i, o) {
                this.elem = e,
                    this.prop = n,
                    this.easing = i || k.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = r,
                    this.unit = o || (k.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = nt.propHooks[this.prop];
                return e && e.get ? e.get(this) : nt.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = nt.propHooks[this.prop];
                return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : nt.propHooks._default.set(this),
                    this
            }
        }).init.prototype = nt.prototype,
        (nt.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }).scrollTop = nt.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        k.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        k.fx = nt.prototype.init,
        k.fx.step = {};
    var rt, it, ot, at, st = /^(?:toggle|show|hide)$/, ut = /queueHooks$/;
    function lt() {
        it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval),
            k.fx.tick())
    }
    function ct() {
        return C.setTimeout(function() {
            rt = void 0
        }),
            rt = Date.now()
    }
    function ft(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            i["margin" + (n = re[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
            i
    }
    function pt(e, t, n) {
        for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function dt(o, e, t) {
        var n, a, r = 0, i = dt.prefilters.length, s = k.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (a)
                return !1;
            for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]),
                n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
                    s.resolveWith(o, [l]),
                    !1)
        }, l = s.promise({
            elem: o,
            props: k.extend({}, e),
            opts: k.extend(!0, {
                specialEasing: {},
                easing: k.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: rt || ct(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n),
                    n
            },
            stop: function(e) {
                var t = 0
                    , n = e ? l.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; t < n; t++)
                    l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]),
                    s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                    this
            }
        }), c = l.props;
        for (!function(e, t) {
            var n, r, i, o, a;
            for (n in e)
                if (i = t[r = V(n)],
                    o = e[n],
                Array.isArray(o) && (i = o[1],
                    o = e[n] = o[0]),
                n !== r && (e[r] = o,
                    delete e[n]),
                (a = k.cssHooks[r]) && "expand"in a)
                    for (n in o = a.expand(o),
                        delete e[r],
                        o)
                        n in e || (e[n] = o[n],
                            t[n] = i);
                else
                    t[r] = i
        }(c, l.opts.specialEasing); r < i; r++)
            if (n = dt.prefilters[r].call(l, o, c, l.opts))
                return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                    n;
        return k.map(c, pt, l),
        m(l.opts.start) && l.opts.start.call(o, l),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
            k.fx.timer(k.extend(u, {
                elem: o,
                anim: l,
                queue: l.opts.queue
            })),
            l
    }
    k.Animation = k.extend(dt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return le(n.elem, e, ne.exec(t), n),
                    n
            }
            ]
        },
        tweener: function(e, t) {
            m(e) ? (t = e,
                e = ["*"]) : e = e.match(R);
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                    dt.tweeners[n] = dt.tweeners[n] || [],
                    dt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && se(e), v = Q.get(e, "fxshow");
            for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
                    s = a.empty.fire,
                    a.empty.fire = function() {
                        a.unqueued || s()
                    }
            ),
                a.unqueued++,
                p.always(function() {
                    p.always(function() {
                        a.unqueued--,
                        k.queue(e, "fx").length || a.empty.fire()
                    })
                })),
                t)
                if (i = t[r],
                    st.test(i)) {
                    if (delete t[r],
                        o = o || "toggle" === i,
                    i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r])
                            continue;
                        g = !0
                    }
                    d[r] = v && v[r] || k.style(e, r)
                }
            if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (l = v && v.display) && (l = Q.get(e, "display")),
                "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0),
                    l = e.style.display || l,
                    c = k.css(e, "display"),
                    fe([e]))),
                ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function() {
                    h.display = l
                }),
                null == l && (c = h.display,
                    l = "none" === c ? "" : c)),
                    h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                    p.always(function() {
                        h.overflow = n.overflow[0],
                            h.overflowX = n.overflow[1],
                            h.overflowY = n.overflow[2]
                    })),
                    u = !1,
                    d)
                    u || (v ? "hidden"in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
                        display: l
                    }),
                    o && (v.hidden = !g),
                    g && fe([e], !0),
                        p.done(function() {
                            for (r in g || fe([e]),
                                Q.remove(e, "fxshow"),
                                d)
                                k.style(e, r, d[r])
                        })),
                        u = pt(g ? v[r] : 0, r, p),
                    r in v || (v[r] = u.start,
                    g && (u.end = u.start,
                        u.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? dt.prefilters.unshift(e) : dt.prefilters.push(e)
        }
    }),
        k.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? k.extend({}, e) : {
                complete: n || !n && t || m(e) && e,
                duration: e,
                easing: n && t || t && !m(t) && t
            };
            return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default),
            null != r.queue && !0 !== r.queue || (r.queue = "fx"),
                r.old = r.complete,
                r.complete = function() {
                    m(r.old) && r.old.call(this),
                    r.queue && k.dequeue(this, r.queue)
                }
                ,
                r
        }
        ,
        k.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(se).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(t, e, n, r) {
                var i = k.isEmptyObject(t)
                    , o = k.speed(e, n, r)
                    , a = function() {
                    var e = dt(this, k.extend({}, t), o);
                    (i || Q.get(this, "finish")) && e.stop(!0)
                };
                return a.finish = a,
                    i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(i, e, o) {
                var a = function(e) {
                    var t = e.stop;
                    delete e.stop,
                        t(o)
                };
                return "string" != typeof i && (o = e,
                    e = i,
                    i = void 0),
                e && !1 !== i && this.queue(i || "fx", []),
                    this.each(function() {
                        var e = !0
                            , t = null != i && i + "queueHooks"
                            , n = k.timers
                            , r = Q.get(this);
                        if (t)
                            r[t] && r[t].stop && a(r[t]);
                        else
                            for (t in r)
                                r[t] && r[t].stop && ut.test(t) && a(r[t]);
                        for (t = n.length; t--; )
                            n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                                e = !1,
                                n.splice(t, 1));
                        !e && o || k.dequeue(this, i)
                    })
            },
            finish: function(a) {
                return !1 !== a && (a = a || "fx"),
                    this.each(function() {
                        var e, t = Q.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = k.timers, o = n ? n.length : 0;
                        for (t.finish = !0,
                                 k.queue(this, a, []),
                             r && r.stop && r.stop.call(this, !0),
                                 e = i.length; e--; )
                            i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                                i.splice(e, 1));
                        for (e = 0; e < o; e++)
                            n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish
                    })
            }
        }),
        k.each(["toggle", "show", "hide"], function(e, r) {
            var i = k.fn[r];
            k.fn[r] = function(e, t, n) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n)
            }
        }),
        k.each({
            slideDown: ft("show"),
            slideUp: ft("hide"),
            slideToggle: ft("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, r) {
            k.fn[e] = function(e, t, n) {
                return this.animate(r, e, t, n)
            }
        }),
        k.timers = [],
        k.fx.tick = function() {
            var e, t = 0, n = k.timers;
            for (rt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || k.fx.stop(),
                rt = void 0
        }
        ,
        k.fx.timer = function(e) {
            k.timers.push(e),
                k.fx.start()
        }
        ,
        k.fx.interval = 13,
        k.fx.start = function() {
            it || (it = !0,
                lt())
        }
        ,
        k.fx.stop = function() {
            it = null
        }
        ,
        k.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        k.fn.delay = function(r, e) {
            return r = k.fx && k.fx.speeds[r] || r,
                e = e || "fx",
                this.queue(e, function(e, t) {
                    var n = C.setTimeout(e, r);
                    t.stop = function() {
                        C.clearTimeout(n)
                    }
                })
        }
        ,
        ot = E.createElement("input"),
        at = E.createElement("select").appendChild(E.createElement("option")),
        ot.type = "checkbox",
        y.checkOn = "" !== ot.value,
        y.optSelected = at.selected,
        (ot = E.createElement("input")).value = "t",
        ot.type = "radio",
        y.radioValue = "t" === ot.value;
    var ht, gt = k.expr.attrHandle;
    k.fn.extend({
        attr: function(e, t) {
            return _(this, k.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e)
            })
        }
    }),
        k.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)),
                        void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                            n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!y.radioValue && "radio" === t && A(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                                t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0, i = t && t.match(R);
                if (i && 1 === e.nodeType)
                    while (n = i[r++])
                        e.removeAttribute(n)
            }
        }),
        ht = {
            set: function(e, t, n) {
                return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n),
                    n
            }
        },
        k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var a = gt[t] || k.find.attr;
            gt[t] = function(e, t, n) {
                var r, i, o = t.toLowerCase();
                return n || (i = gt[o],
                    gt[o] = r,
                    r = null != a(e, t, n) ? o : null,
                    gt[o] = i),
                    r
            }
        });
    var vt = /^(?:input|select|textarea|button)$/i
        , yt = /^(?:a|area)$/i;
    function mt(e) {
        return (e.match(R) || []).join(" ")
    }
    function xt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function bt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || []
    }
    k.fn.extend({
        prop: function(e, t) {
            return _(this, k.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e]
            })
        }
    }),
        k.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t,
                        i = k.propHooks[t]),
                        void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = k.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }),
    y.optSelected || (k.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
                null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
        k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            k.propFix[this.toLowerCase()] = this
        }),
        k.fn.extend({
            addClass: function(t) {
                var e, n, r, i, o, a, s, u = 0;
                if (m(t))
                    return this.each(function(e) {
                        k(this).addClass(t.call(this, e, xt(this)))
                    });
                if ((e = bt(t)).length)
                    while (n = this[u++])
                        if (i = xt(n),
                            r = 1 === n.nodeType && " " + mt(i) + " ") {
                            a = 0;
                            while (o = e[a++])
                                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (s = mt(r)) && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, r, i, o, a, s, u = 0;
                if (m(t))
                    return this.each(function(e) {
                        k(this).removeClass(t.call(this, e, xt(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ((e = bt(t)).length)
                    while (n = this[u++])
                        if (i = xt(n),
                            r = 1 === n.nodeType && " " + mt(i) + " ") {
                            a = 0;
                            while (o = e[a++])
                                while (-1 < r.indexOf(" " + o + " "))
                                    r = r.replace(" " + o + " ", " ");
                            i !== (s = mt(r)) && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function(i, t) {
                var o = typeof i
                    , a = "string" === o || Array.isArray(i);
                return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                    k(this).toggleClass(i.call(this, e, xt(this), t), t)
                }) : this.each(function() {
                    var e, t, n, r;
                    if (a) {
                        t = 0,
                            n = k(this),
                            r = bt(i);
                        while (e = r[t++])
                            n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                    } else
                        void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e),
                        this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                t = " " + e + " ";
                while (n = this[r++])
                    if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t))
                        return !0;
                return !1
            }
        });
    var wt = /\r/g;
    k.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n),
                this.each(function(e) {
                    var t;
                    1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function(e) {
                        return null == e ? "" : e + ""
                    })),
                    (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
                })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0
        }
    }),
        k.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = k.find.attr(e, "value");
                        return null != t ? t : mt(k.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                if (t = k(n).val(),
                                    a)
                                    return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        var n, r, i = e.options, o = k.makeArray(t), a = i.length;
                        while (a--)
                            ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
                        return n || (e.selectedIndex = -1),
                            o
                    }
                }
            }
        }),
        k.each(["radio", "checkbox"], function() {
            k.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t))
                        return e.checked = -1 < k.inArray(k(e).val(), t)
                }
            },
            y.checkOn || (k.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
            )
        }),
        y.focusin = "onfocusin"in C;
    var Tt = /^(?:focusinfocus|focusoutblur)$/
        , Ct = function(e) {
        e.stopPropagation()
    };
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E,
            3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
                h.sort()),
                u = d.indexOf(":") < 0 && "on" + d,
                (e = e[k.expando] ? e : new k.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
                e.namespace = h.join("."),
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                e.result = void 0,
            e.target || (e.target = n),
                t = null == t ? [e] : k.makeArray(t, [e]),
                c = k.event.special[d] || {},
            r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d,
                         Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                            a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped())
                    f = o,
                        e.type = 1 < i ? s : c.bindType || d,
                    (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t),
                    (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t),
                    !1 === e.result && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null),
                    k.event.triggered = d,
                e.isPropagationStopped() && f.addEventListener(d, Ct),
                    n[d](),
                e.isPropagationStopped() && f.removeEventListener(d, Ct),
                    k.event.triggered = void 0,
                a && (n[u] = a)),
                    e.result
            }
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event, n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(r, null, t)
        }
    }),
        k.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    k.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return k.event.trigger(e, t, n, !0)
            }
        }),
    y.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            k.event.simulate(r, e.target, k.event.fix(e))
        };
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this
                    , t = Q.access(e, r);
                t || e.addEventListener(n, i, !0),
                    Q.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                    , t = Q.access(e, r) - 1;
                t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0),
                    Q.remove(e, r))
            }
        }
    });
    var Et = C.location
        , kt = Date.now()
        , St = /\?/;
    k.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e),
            t
    }
    ;
    var Nt = /\[\]$/
        , At = /\r?\n/g
        , Dt = /^(?:submit|button|image|reset|file)$/i
        , jt = /^(?:input|select|textarea|keygen)/i;
    function qt(n, e, r, i) {
        var t;
        if (Array.isArray(e))
            k.each(e, function(e, t) {
                r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
            });
        else if (r || "object" !== w(e))
            i(n, e);
        else
            for (t in e)
                qt(n + "[" + t + "]", e[t], r, i)
    }
    k.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e)
            return "";
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e))
            k.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                qt(n, e[n], t, i);
        return r.join("&")
    }
        ,
        k.fn.extend({
            serialize: function() {
                return k.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = k.prop(this, "elements");
                    return e ? k.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e))
                }).map(function(e, t) {
                    var n = k(this).val();
                    return null == n ? null : Array.isArray(n) ? k.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(At, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(At, "\r\n")
                    }
                }).get()
            }
        });
    var Lt = /%20/g
        , Ht = /#.*$/
        , Ot = /([?&])_=[^&]*/
        , Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm
        , Rt = /^(?:GET|HEAD)$/
        , Mt = /^\/\//
        , It = {}
        , Wt = {}
        , $t = "*/".concat("*")
        , Ft = E.createElement("a");
    function Bt(o) {
        return function(e, t) {
            "string" != typeof e && (t = e,
                e = "*");
            var n, r = 0, i = e.toLowerCase().match(R) || [];
            if (m(t))
                while (n = i[r++])
                    "+" === n[0] ? (n = n.slice(1) || "*",
                        (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }
    function _t(t, i, o, a) {
        var s = {}
            , u = t === Wt;
        function l(e) {
            var r;
            return s[e] = !0,
                k.each(t[e] || [], function(e, t) {
                    var n = t(i, o, a);
                    return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                        l(n),
                        !1)
                }),
                r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }
    function zt(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r),
            e
    }
    Ft.href = Et.href,
        k.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Et.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $t,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": k.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e)
            },
            ajaxPrefilter: Bt(It),
            ajaxTransport: Bt(Wt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e,
                    e = void 0),
                    t = t || {};
                var c, f, p, n, d, r, h, g, i, o, v = k.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event, x = k.Deferred(), b = k.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Pt.exec(p))
                                    n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                            a[e] = t),
                            this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (v.mimeType = e),
                            this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h)
                                T.always(e[T.status]);
                            else
                                for (t in e)
                                    w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t),
                            l(0, t),
                            this
                    }
                };
                if (x.promise(T),
                    v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"),
                    v.type = t.method || t.type || v.method || v.type,
                    v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""],
                null == v.crossDomain) {
                    r = E.createElement("a");
                    try {
                        r.href = v.url,
                            r.href = r.href,
                            v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host
                    } catch (e) {
                        v.crossDomain = !0
                    }
                }
                if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)),
                    _t(It, v, t, T),
                    h)
                    return T;
                for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"),
                    v.type = v.type.toUpperCase(),
                    v.hasContent = !Rt.test(v.type),
                    f = v.url.replace(Ht, ""),
                    v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length),
                    v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data,
                        delete v.data),
                    !1 === v.cache && (f = f.replace(Ot, "$1"),
                        o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o),
                        v.url = f + o),
                v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]),
                k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])),
                (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
                    T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]),
                    v.headers)
                    T.setRequestHeader(i, v.headers[i]);
                if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                    return T.abort();
                if (u = "abort",
                    b.add(v.complete),
                    T.done(v.success),
                    T.fail(v.error),
                    c = _t(Wt, v, t, T)) {
                    if (T.readyState = 1,
                    g && m.trigger("ajaxSend", [T, v]),
                        h)
                        return T;
                    v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                        T.abort("timeout")
                    }, v.timeout));
                    try {
                        h = !1,
                            c.send(a, l)
                    } catch (e) {
                        if (h)
                            throw e;
                        l(-1, e)
                    }
                } else
                    l(-1, "No Transport");
                function l(e, t, n, r) {
                    var i, o, a, s, u, l = t;
                    h || (h = !0,
                    d && C.clearTimeout(d),
                        c = void 0,
                        p = r || "",
                        T.readyState = 0 < e ? 4 : 0,
                        i = 200 <= e && e < 300 || 304 === e,
                    n && (s = function(e, t, n) {
                        var r, i, o, a, s = e.contents, u = e.dataTypes;
                        while ("*" === u[0])
                            u.shift(),
                            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (i in s)
                                if (s[i] && s[i].test(r)) {
                                    u.unshift(i);
                                    break
                                }
                        if (u[0]in n)
                            o = u[0];
                        else {
                            for (i in n) {
                                if (!u[0] || e.converters[i + " " + u[0]]) {
                                    o = i;
                                    break
                                }
                                a || (a = i)
                            }
                            o = o || a
                        }
                        if (o)
                            return o !== u[0] && u.unshift(o),
                                n[o]
                    }(v, T, n)),
                        s = function(e, t, n, r) {
                            var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                            if (c[1])
                                for (a in e.converters)
                                    l[a.toLowerCase()] = e.converters[a];
                            o = c.shift();
                            while (o)
                                if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                                !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                                    u = o,
                                    o = c.shift())
                                    if ("*" === o)
                                        o = u;
                                    else if ("*" !== u && u !== o) {
                                        if (!(a = l[u + " " + o] || l["* " + o]))
                                            for (i in l)
                                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                                        c.unshift(s[1]));
                                                    break
                                                }
                                        if (!0 !== a)
                                            if (a && e["throws"])
                                                t = a(t);
                                            else
                                                try {
                                                    t = a(t)
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: a ? e : "No conversion from " + u + " to " + o
                                                    }
                                                }
                                    }
                            return {
                                state: "success",
                                data: t
                            }
                        }(v, s, T, i),
                        i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u),
                        (u = T.getResponseHeader("etag")) && (k.etag[f] = u)),
                            204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                                o = s.data,
                                i = !(a = s.error))) : (a = l,
                        !e && l || (l = "error",
                        e < 0 && (e = 0))),
                        T.status = e,
                        T.statusText = (t || l) + "",
                        i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                        T.statusCode(w),
                        w = void 0,
                    g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                        b.fireWith(y, [T, l]),
                    g && (m.trigger("ajaxComplete", [T, v]),
                    --k.active || k.event.trigger("ajaxStop")))
                }
                return T
            },
            getJSON: function(e, t, n) {
                return k.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return k.get(e, void 0, t, "script")
            }
        }),
        k.each(["get", "post"], function(e, i) {
            k[i] = function(e, t, n, r) {
                return m(t) && (r = r || n,
                    n = t,
                    t = void 0),
                    k.ajax(k.extend({
                        url: e,
                        type: i,
                        dataType: r,
                        data: t,
                        success: n
                    }, k.isPlainObject(e) && e))
            }
        }),
        k._evalUrl = function(e, t) {
            return k.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    k.globalEval(e, t)
                }
            })
        }
        ,
        k.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (m(e) && (e = e.call(this[0])),
                    t = k(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && t.insertBefore(this[0]),
                    t.map(function() {
                        var e = this;
                        while (e.firstElementChild)
                            e = e.firstElementChild;
                        return e
                    }).append(this)),
                    this
            },
            wrapInner: function(n) {
                return m(n) ? this.each(function(e) {
                    k(this).wrapInner(n.call(this, e))
                }) : this.each(function() {
                    var e = k(this)
                        , t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function(t) {
                var n = m(t);
                return this.each(function(e) {
                    k(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    k(this).replaceWith(this.childNodes)
                }),
                    this
            }
        }),
        k.expr.pseudos.hidden = function(e) {
            return !k.expr.pseudos.visible(e)
        }
        ,
        k.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        k.ajaxSettings.xhr = function() {
            try {
                return new C.XMLHttpRequest
            } catch (e) {}
        }
    ;
    var Ut = {
        0: 200,
        1223: 204
    }
        , Xt = k.ajaxSettings.xhr();
    y.cors = !!Xt && "withCredentials"in Xt,
        y.ajax = Xt = !!Xt,
        k.ajaxTransport(function(i) {
            var o, a;
            if (y.cors || Xt && !i.crossDomain)
                return {
                    send: function(e, t) {
                        var n, r = i.xhr();
                        if (r.open(i.type, i.url, i.async, i.username, i.password),
                            i.xhrFields)
                            for (n in i.xhrFields)
                                r[n] = i.xhrFields[n];
                        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                        i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                            e)
                            r.setRequestHeader(n, e[n]);
                        o = function(e) {
                            return function() {
                                o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                                    "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                        binary: r.response
                                    } : {
                                        text: r.responseText
                                    }, r.getAllResponseHeaders()))
                            }
                        }
                            ,
                            r.onload = o(),
                            a = r.onerror = r.ontimeout = o("error"),
                            void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                                4 === r.readyState && C.setTimeout(function() {
                                    o && a()
                                })
                            }
                            ,
                            o = o("abort");
                        try {
                            r.send(i.hasContent && i.data || null)
                        } catch (e) {
                            if (o)
                                throw e
                        }
                    },
                    abort: function() {
                        o && o()
                    }
                }
        }),
        k.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        k.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return k.globalEval(e),
                        e
                }
            }
        }),
        k.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }),
        k.ajaxTransport("script", function(n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function(e, t) {
                        r = k("<script>").attr(n.scriptAttrs || {}).prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", i = function(e) {
                                r.remove(),
                                    i = null,
                                e && t("error" === e.type ? 404 : 200, e.type)
                            }
                        ),
                            E.head.appendChild(r[0])
                    },
                    abort: function() {
                        i && i()
                    }
                }
        });
    var Vt, Gt = [], Yt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Gt.pop() || k.expando + "_" + kt++;
            return this[e] = !0,
                e
        }
    }),
        k.ajaxPrefilter("json jsonp", function(e, t, n) {
            var r, i, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                    a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                    e.converters["script json"] = function() {
                        return o || k.error(r + " was not called"),
                            o[0]
                    }
                    ,
                    e.dataTypes[0] = "json",
                    i = C[r],
                    C[r] = function() {
                        o = arguments
                    }
                    ,
                    n.always(function() {
                        void 0 === i ? k(C).removeProp(r) : C[r] = i,
                        e[r] && (e.jsonpCallback = t.jsonpCallback,
                            Gt.push(r)),
                        o && m(i) && i(o[0]),
                            o = i = void 0
                    }),
                    "script"
        }),
        y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
        2 === Vt.childNodes.length),
        k.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
                t = !1),
            t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
                t.head.appendChild(r)) : t = E),
                o = !n && [],
                (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o),
                o && o.length && k(o).remove(),
                    k.merge([], i.childNodes)));
            var r, i, o
        }
        ,
        k.fn.load = function(e, t, n) {
            var r, i, o, a = this, s = e.indexOf(" ");
            return -1 < s && (r = mt(e.slice(s)),
                e = e.slice(0, s)),
                m(t) ? (n = t,
                    t = void 0) : t && "object" == typeof t && (i = "POST"),
            0 < a.length && k.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments,
                    a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }
            ),
                this
        }
        ,
        k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            k.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        k.expr.pseudos.animated = function(t) {
            return k.grep(k.timers, function(e) {
                return t === e.elem
            }).length
        }
        ,
        k.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, a, s, u, l = k.css(e, "position"), c = k(e), f = {};
                "static" === l && (e.style.position = "relative"),
                    s = c.offset(),
                    o = k.css(e, "top"),
                    u = k.css(e, "left"),
                    ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
                        i = r.left) : (a = parseFloat(o) || 0,
                        i = parseFloat(u) || 0),
                m(t) && (t = t.call(e, n, k.extend({}, s))),
                null != t.top && (f.top = t.top - s.top + a),
                null != t.left && (f.left = t.left - s.left + i),
                    "using"in t ? t.using.call(e, f) : c.css(f)
            }
        },
        k.fn.extend({
            offset: function(t) {
                if (arguments.length)
                    return void 0 === t ? this : this.each(function(e) {
                        k.offset.setOffset(this, t, e)
                    });
                var e, n, r = this[0];
                return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
                    n = r.ownerDocument.defaultView,
                    {
                        top: e.top + n.pageYOffset,
                        left: e.left + n.pageXOffset
                    }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0], i = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === k.css(r, "position"))
                        t = r.getBoundingClientRect();
                    else {
                        t = this.offset(),
                            n = r.ownerDocument,
                            e = r.offsetParent || n.documentElement;
                        while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position"))
                            e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0),
                            i.left += k.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - i.top - k.css(r, "marginTop", !0),
                        left: t.left - i.left - k.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent;
                    while (e && "static" === k.css(e, "position"))
                        e = e.offsetParent;
                    return e || ie
                })
            }
        }),
        k.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, i) {
            var o = "pageYOffset" === i;
            k.fn[t] = function(e) {
                return _(this, function(e, t, n) {
                    var r;
                    if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                    void 0 === n)
                        return r ? r[i] : e[t];
                    r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
                }, t, e, arguments.length)
            }
        }),
        k.each(["top", "left"], function(e, n) {
            k.cssHooks[n] = ze(y.pixelPosition, function(e, t) {
                if (t)
                    return t = _e(e, n),
                        $e.test(t) ? k(e).position()[n] + "px" : t
            })
        }),
        k.each({
            Height: "height",
            Width: "width"
        }, function(a, s) {
            k.each({
                padding: "inner" + a,
                content: s,
                "": "outer" + a
            }, function(r, o) {
                k.fn[o] = function(e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e)
                        , i = r || (!0 === e || !0 === t ? "margin" : "border");
                    return _(this, function(e, t, n) {
                        var r;
                        return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                            Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
                    }, s, n ? e : void 0, n)
                }
            })
        }),
        k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
            k.fn[n] = function(e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        }),
        k.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        k.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        k.proxy = function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t],
                t = e,
                e = n),
                m(e))
                return r = s.call(arguments, 2),
                    (i = function() {
                            return e.apply(t || this, r.concat(s.call(arguments)))
                        }
                    ).guid = e.guid = e.guid || k.guid++,
                    i
        }
        ,
        k.holdReady = function(e) {
            e ? k.readyWait++ : k.ready(!0)
        }
        ,
        k.isArray = Array.isArray,
        k.parseJSON = JSON.parse,
        k.nodeName = A,
        k.isFunction = m,
        k.isWindow = x,
        k.camelCase = V,
        k.type = w,
        k.now = Date.now,
        k.isNumeric = function(e) {
            var t = k.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }
        ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    });
    var Qt = C.jQuery
        , Jt = C.$;
    return k.noConflict = function(e) {
        return C.$ === k && (C.$ = Jt),
        e && C.jQuery === k && (C.jQuery = Qt),
            k
    }
        ,
    e || (C.jQuery = C.$ = k),
        k
});

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function() {
    "use strict";
    var e, i;
    function c() {
        return e.apply(null, arguments)
    }
    function o(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }
    function u(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }
    function l(e) {
        return void 0 === e
    }
    function h(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }
    function d(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }
    function f(e, t) {
        var n, s = [];
        for (n = 0; n < e.length; ++n)
            s.push(t(e[n], n));
        return s
    }
    function m(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function _(e, t) {
        for (var n in t)
            m(t, n) && (e[n] = t[n]);
        return m(t, "toString") && (e.toString = t.toString),
        m(t, "valueOf") && (e.valueOf = t.valueOf),
            e
    }
    function y(e, t, n, s) {
        return Tt(e, t, n, s, !0).utc()
    }
    function g(e) {
        return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }),
            e._pf
    }
    function v(e) {
        if (null == e._isValid) {
            var t = g(e)
                , n = i.call(t.parsedDateParts, function(e) {
                return null != e
            })
                , s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
            if (e._strict && (s = s && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour),
            null != Object.isFrozen && Object.isFrozen(e))
                return s;
            e._isValid = s
        }
        return e._isValid
    }
    function p(e) {
        var t = y(NaN);
        return null != e ? _(g(t), e) : g(t).userInvalidated = !0,
            t
    }
    i = Array.prototype.some ? Array.prototype.some : function(e) {
        for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++)
            if (s in t && e.call(this, t[s], s, t))
                return !0;
        return !1
    }
    ;
    var r = c.momentProperties = [];
    function w(e, t) {
        var n, s, i;
        if (l(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
        l(t._i) || (e._i = t._i),
        l(t._f) || (e._f = t._f),
        l(t._l) || (e._l = t._l),
        l(t._strict) || (e._strict = t._strict),
        l(t._tzm) || (e._tzm = t._tzm),
        l(t._isUTC) || (e._isUTC = t._isUTC),
        l(t._offset) || (e._offset = t._offset),
        l(t._pf) || (e._pf = g(t)),
        l(t._locale) || (e._locale = t._locale),
        0 < r.length)
            for (n = 0; n < r.length; n++)
                l(i = t[s = r[n]]) || (e[s] = i);
        return e
    }
    var t = !1;
    function M(e) {
        w(this, e),
            this._d = new Date(null != e._d ? e._d.getTime() : NaN),
        this.isValid() || (this._d = new Date(NaN)),
        !1 === t && (t = !0,
            c.updateOffset(this),
            t = !1)
    }
    function k(e) {
        return e instanceof M || null != e && null != e._isAMomentObject
    }
    function S(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }
    function D(e) {
        var t = +e
            , n = 0;
        return 0 !== t && isFinite(t) && (n = S(t)),
            n
    }
    function a(e, t, n) {
        var s, i = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), a = 0;
        for (s = 0; s < i; s++)
            (n && e[s] !== t[s] || !n && D(e[s]) !== D(t[s])) && a++;
        return a + r
    }
    function Y(e) {
        !1 === c.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }
    function n(i, r) {
        var a = !0;
        return _(function() {
            if (null != c.deprecationHandler && c.deprecationHandler(null, i),
                a) {
                for (var e, t = [], n = 0; n < arguments.length; n++) {
                    if (e = "",
                    "object" == typeof arguments[n]) {
                        for (var s in e += "\n[" + n + "] ",
                            arguments[0])
                            e += s + ": " + arguments[0][s] + ", ";
                        e = e.slice(0, -2)
                    } else
                        e = arguments[n];
                    t.push(e)
                }
                Y(i + "\nArguments: " + Array.prototype.slice.call(t).join("") + "\n" + (new Error).stack),
                    a = !1
            }
            return r.apply(this, arguments)
        }, r)
    }
    var s, O = {};
    function T(e, t) {
        null != c.deprecationHandler && c.deprecationHandler(e, t),
        O[e] || (Y(t),
            O[e] = !0)
    }
    function b(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }
    function x(e, t) {
        var n, s = _({}, e);
        for (n in t)
            m(t, n) && (u(e[n]) && u(t[n]) ? (s[n] = {},
                _(s[n], e[n]),
                _(s[n], t[n])) : null != t[n] ? s[n] = t[n] : delete s[n]);
        for (n in e)
            m(e, n) && !m(t, n) && u(e[n]) && (s[n] = _({}, s[n]));
        return s
    }
    function P(e) {
        null != e && this.set(e)
    }
    c.suppressDeprecationWarnings = !1,
        c.deprecationHandler = null,
        s = Object.keys ? Object.keys : function(e) {
            var t, n = [];
            for (t in e)
                m(e, t) && n.push(t);
            return n
        }
    ;
    var W = {};
    function C(e, t) {
        var n = e.toLowerCase();
        W[n] = W[n + "s"] = W[t] = e
    }
    function H(e) {
        return "string" == typeof e ? W[e] || W[e.toLowerCase()] : void 0
    }
    function R(e) {
        var t, n, s = {};
        for (n in e)
            m(e, n) && (t = H(n)) && (s[t] = e[n]);
        return s
    }
    var U = {};
    function F(e, t) {
        U[e] = t
    }
    function L(e, t, n) {
        var s = "" + Math.abs(e)
            , i = t - s.length;
        return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + s
    }
    var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
        , G = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
        , V = {}
        , E = {};
    function I(e, t, n, s) {
        var i = s;
        "string" == typeof s && (i = function() {
                return this[s]()
            }
        ),
        e && (E[e] = i),
        t && (E[t[0]] = function() {
                return L(i.apply(this, arguments), t[1], t[2])
            }
        ),
        n && (E[n] = function() {
                return this.localeData().ordinal(i.apply(this, arguments), e)
            }
        )
    }
    function A(e, t) {
        return e.isValid() ? (t = j(t, e.localeData()),
            V[t] = V[t] || function(s) {
                var e, i, t, r = s.match(N);
                for (e = 0,
                         i = r.length; e < i; e++)
                    E[r[e]] ? r[e] = E[r[e]] : r[e] = (t = r[e]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
                return function(e) {
                    var t, n = "";
                    for (t = 0; t < i; t++)
                        n += b(r[t]) ? r[t].call(e, s) : r[t];
                    return n
                }
            }(t),
            V[t](e)) : e.localeData().invalidDate()
    }
    function j(e, t) {
        var n = 5;
        function s(e) {
            return t.longDateFormat(e) || e
        }
        for (G.lastIndex = 0; 0 <= n && G.test(e); )
            e = e.replace(G, s),
                G.lastIndex = 0,
                n -= 1;
        return e
    }
    var Z = /\d/
        , z = /\d\d/
        , $ = /\d{3}/
        , q = /\d{4}/
        , J = /[+-]?\d{6}/
        , B = /\d\d?/
        , Q = /\d\d\d\d?/
        , X = /\d\d\d\d\d\d?/
        , K = /\d{1,3}/
        , ee = /\d{1,4}/
        , te = /[+-]?\d{1,6}/
        , ne = /\d+/
        , se = /[+-]?\d+/
        , ie = /Z|[+-]\d\d:?\d\d/gi
        , re = /Z|[+-]\d\d(?::?\d\d)?/gi
        , ae = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i
        , oe = {};
    function ue(e, n, s) {
        oe[e] = b(n) ? n : function(e, t) {
            return e && s ? s : n
        }
    }
    function le(e, t) {
        return m(oe, e) ? oe[e](t._strict, t._locale) : new RegExp(he(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, s, i) {
            return t || n || s || i
        })))
    }
    function he(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    var de = {};
    function ce(e, n) {
        var t, s = n;
        for ("string" == typeof e && (e = [e]),
             h(n) && (s = function(e, t) {
                     t[n] = D(e)
                 }
             ),
                 t = 0; t < e.length; t++)
            de[e[t]] = s
    }
    function fe(e, i) {
        ce(e, function(e, t, n, s) {
            n._w = n._w || {},
                i(e, n._w, n, s)
        })
    }
    var me = 0
        , _e = 1
        , ye = 2
        , ge = 3
        , ve = 4
        , pe = 5
        , we = 6
        , Me = 7
        , ke = 8;
    function Se(e) {
        return De(e) ? 366 : 365
    }
    function De(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }
    I("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e
    }),
        I(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }),
        I(0, ["YYYY", 4], 0, "year"),
        I(0, ["YYYYY", 5], 0, "year"),
        I(0, ["YYYYYY", 6, !0], 0, "year"),
        C("year", "y"),
        F("year", 1),
        ue("Y", se),
        ue("YY", B, z),
        ue("YYYY", ee, q),
        ue("YYYYY", te, J),
        ue("YYYYYY", te, J),
        ce(["YYYYY", "YYYYYY"], me),
        ce("YYYY", function(e, t) {
            t[me] = 2 === e.length ? c.parseTwoDigitYear(e) : D(e)
        }),
        ce("YY", function(e, t) {
            t[me] = c.parseTwoDigitYear(e)
        }),
        ce("Y", function(e, t) {
            t[me] = parseInt(e, 10)
        }),
        c.parseTwoDigitYear = function(e) {
            return D(e) + (68 < D(e) ? 1900 : 2e3)
        }
    ;
    var Ye, Oe = Te("FullYear", !0);
    function Te(t, n) {
        return function(e) {
            return null != e ? (xe(this, t, e),
                c.updateOffset(this, n),
                this) : be(this, t)
        }
    }
    function be(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
    }
    function xe(e, t, n) {
        e.isValid() && !isNaN(n) && ("FullYear" === t && De(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Pe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
    }
    function Pe(e, t) {
        if (isNaN(e) || isNaN(t))
            return NaN;
        var n, s = (t % (n = 12) + n) % n;
        return e += (t - s) / 12,
            1 === s ? De(e) ? 29 : 28 : 31 - s % 7 % 2
    }
    Ye = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
        var t;
        for (t = 0; t < this.length; ++t)
            if (this[t] === e)
                return t;
        return -1
    }
        ,
        I("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        }),
        I("MMM", 0, 0, function(e) {
            return this.localeData().monthsShort(this, e)
        }),
        I("MMMM", 0, 0, function(e) {
            return this.localeData().months(this, e)
        }),
        C("month", "M"),
        F("month", 8),
        ue("M", B),
        ue("MM", B, z),
        ue("MMM", function(e, t) {
            return t.monthsShortRegex(e)
        }),
        ue("MMMM", function(e, t) {
            return t.monthsRegex(e)
        }),
        ce(["M", "MM"], function(e, t) {
            t[_e] = D(e) - 1
        }),
        ce(["MMM", "MMMM"], function(e, t, n, s) {
            var i = n._locale.monthsParse(e, s, n._strict);
            null != i ? t[_e] = i : g(n).invalidMonth = e
        });
    var We = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
        , Ce = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
    var He = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
    function Re(e, t) {
        var n;
        if (!e.isValid())
            return e;
        if ("string" == typeof t)
            if (/^\d+$/.test(t))
                t = D(t);
            else if (!h(t = e.localeData().monthsParse(t)))
                return e;
        return n = Math.min(e.date(), Pe(e.year(), t)),
            e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
            e
    }
    function Ue(e) {
        return null != e ? (Re(this, e),
            c.updateOffset(this, !0),
            this) : be(this, "Month")
    }
    var Fe = ae;
    var Le = ae;
    function Ne() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, s = [], i = [], r = [];
        for (t = 0; t < 12; t++)
            n = y([2e3, t]),
                s.push(this.monthsShort(n, "")),
                i.push(this.months(n, "")),
                r.push(this.months(n, "")),
                r.push(this.monthsShort(n, ""));
        for (s.sort(e),
                 i.sort(e),
                 r.sort(e),
                 t = 0; t < 12; t++)
            s[t] = he(s[t]),
                i[t] = he(i[t]);
        for (t = 0; t < 24; t++)
            r[t] = he(r[t]);
        this._monthsRegex = new RegExp("^(" + r.join("|") + ")","i"),
            this._monthsShortRegex = this._monthsRegex,
            this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")","i"),
            this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")","i")
    }
    function Ge(e) {
        var t;
        if (e < 100 && 0 <= e) {
            var n = Array.prototype.slice.call(arguments);
            n[0] = e + 400,
                t = new Date(Date.UTC.apply(null, n)),
            isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)
        } else
            t = new Date(Date.UTC.apply(null, arguments));
        return t
    }
    function Ve(e, t, n) {
        var s = 7 + t - n;
        return -((7 + Ge(e, 0, s).getUTCDay() - t) % 7) + s - 1
    }
    function Ee(e, t, n, s, i) {
        var r, a, o = 1 + 7 * (t - 1) + (7 + n - s) % 7 + Ve(e, s, i);
        return a = o <= 0 ? Se(r = e - 1) + o : o > Se(e) ? (r = e + 1,
        o - Se(e)) : (r = e,
            o),
            {
                year: r,
                dayOfYear: a
            }
    }
    function Ie(e, t, n) {
        var s, i, r = Ve(e.year(), t, n), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
        return a < 1 ? s = a + Ae(i = e.year() - 1, t, n) : a > Ae(e.year(), t, n) ? (s = a - Ae(e.year(), t, n),
            i = e.year() + 1) : (i = e.year(),
            s = a),
            {
                week: s,
                year: i
            }
    }
    function Ae(e, t, n) {
        var s = Ve(e, t, n)
            , i = Ve(e + 1, t, n);
        return (Se(e) - s + i) / 7
    }
    I("w", ["ww", 2], "wo", "week"),
        I("W", ["WW", 2], "Wo", "isoWeek"),
        C("week", "w"),
        C("isoWeek", "W"),
        F("week", 5),
        F("isoWeek", 5),
        ue("w", B),
        ue("ww", B, z),
        ue("W", B),
        ue("WW", B, z),
        fe(["w", "ww", "W", "WW"], function(e, t, n, s) {
            t[s.substr(0, 1)] = D(e)
        });
    function je(e, t) {
        return e.slice(t, 7).concat(e.slice(0, t))
    }
    I("d", 0, "do", "day"),
        I("dd", 0, 0, function(e) {
            return this.localeData().weekdaysMin(this, e)
        }),
        I("ddd", 0, 0, function(e) {
            return this.localeData().weekdaysShort(this, e)
        }),
        I("dddd", 0, 0, function(e) {
            return this.localeData().weekdays(this, e)
        }),
        I("e", 0, 0, "weekday"),
        I("E", 0, 0, "isoWeekday"),
        C("day", "d"),
        C("weekday", "e"),
        C("isoWeekday", "E"),
        F("day", 11),
        F("weekday", 11),
        F("isoWeekday", 11),
        ue("d", B),
        ue("e", B),
        ue("E", B),
        ue("dd", function(e, t) {
            return t.weekdaysMinRegex(e)
        }),
        ue("ddd", function(e, t) {
            return t.weekdaysShortRegex(e)
        }),
        ue("dddd", function(e, t) {
            return t.weekdaysRegex(e)
        }),
        fe(["dd", "ddd", "dddd"], function(e, t, n, s) {
            var i = n._locale.weekdaysParse(e, s, n._strict);
            null != i ? t.d = i : g(n).invalidWeekday = e
        }),
        fe(["d", "e", "E"], function(e, t, n, s) {
            t[s] = D(e)
        });
    var Ze = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
    var ze = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
    var $e = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    var qe = ae;
    var Je = ae;
    var Be = ae;
    function Qe() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, s, i, r, a = [], o = [], u = [], l = [];
        for (t = 0; t < 7; t++)
            n = y([2e3, 1]).day(t),
                s = this.weekdaysMin(n, ""),
                i = this.weekdaysShort(n, ""),
                r = this.weekdays(n, ""),
                a.push(s),
                o.push(i),
                u.push(r),
                l.push(s),
                l.push(i),
                l.push(r);
        for (a.sort(e),
                 o.sort(e),
                 u.sort(e),
                 l.sort(e),
                 t = 0; t < 7; t++)
            o[t] = he(o[t]),
                u[t] = he(u[t]),
                l[t] = he(l[t]);
        this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")","i"),
            this._weekdaysShortRegex = this._weekdaysRegex,
            this._weekdaysMinRegex = this._weekdaysRegex,
            this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")","i"),
            this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")","i"),
            this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")","i")
    }
    function Xe() {
        return this.hours() % 12 || 12
    }
    function Ke(e, t) {
        I(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }
    function et(e, t) {
        return t._meridiemParse
    }
    I("H", ["HH", 2], 0, "hour"),
        I("h", ["hh", 2], 0, Xe),
        I("k", ["kk", 2], 0, function() {
            return this.hours() || 24
        }),
        I("hmm", 0, 0, function() {
            return "" + Xe.apply(this) + L(this.minutes(), 2)
        }),
        I("hmmss", 0, 0, function() {
            return "" + Xe.apply(this) + L(this.minutes(), 2) + L(this.seconds(), 2)
        }),
        I("Hmm", 0, 0, function() {
            return "" + this.hours() + L(this.minutes(), 2)
        }),
        I("Hmmss", 0, 0, function() {
            return "" + this.hours() + L(this.minutes(), 2) + L(this.seconds(), 2)
        }),
        Ke("a", !0),
        Ke("A", !1),
        C("hour", "h"),
        F("hour", 13),
        ue("a", et),
        ue("A", et),
        ue("H", B),
        ue("h", B),
        ue("k", B),
        ue("HH", B, z),
        ue("hh", B, z),
        ue("kk", B, z),
        ue("hmm", Q),
        ue("hmmss", X),
        ue("Hmm", Q),
        ue("Hmmss", X),
        ce(["H", "HH"], ge),
        ce(["k", "kk"], function(e, t, n) {
            var s = D(e);
            t[ge] = 24 === s ? 0 : s
        }),
        ce(["a", "A"], function(e, t, n) {
            n._isPm = n._locale.isPM(e),
                n._meridiem = e
        }),
        ce(["h", "hh"], function(e, t, n) {
            t[ge] = D(e),
                g(n).bigHour = !0
        }),
        ce("hmm", function(e, t, n) {
            var s = e.length - 2;
            t[ge] = D(e.substr(0, s)),
                t[ve] = D(e.substr(s)),
                g(n).bigHour = !0
        }),
        ce("hmmss", function(e, t, n) {
            var s = e.length - 4
                , i = e.length - 2;
            t[ge] = D(e.substr(0, s)),
                t[ve] = D(e.substr(s, 2)),
                t[pe] = D(e.substr(i)),
                g(n).bigHour = !0
        }),
        ce("Hmm", function(e, t, n) {
            var s = e.length - 2;
            t[ge] = D(e.substr(0, s)),
                t[ve] = D(e.substr(s))
        }),
        ce("Hmmss", function(e, t, n) {
            var s = e.length - 4
                , i = e.length - 2;
            t[ge] = D(e.substr(0, s)),
                t[ve] = D(e.substr(s, 2)),
                t[pe] = D(e.substr(i))
        });
    var tt, nt = Te("Hours", !0), st = {
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        months: Ce,
        monthsShort: He,
        week: {
            dow: 0,
            doy: 6
        },
        weekdays: Ze,
        weekdaysMin: $e,
        weekdaysShort: ze,
        meridiemParse: /[ap]\.?m?\.?/i
    }, it = {}, rt = {};
    function at(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }
    function ot(e) {
        var t = null;
        if (!it[e] && "undefined" != typeof module && module && module.exports)
            try {
                t = tt._abbr,
                    require("./locale/" + e),
                    ut(t)
            } catch (e) {}
        return it[e]
    }
    function ut(e, t) {
        var n;
        return e && ((n = l(t) ? ht(e) : lt(e, t)) ? tt = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")),
            tt._abbr
    }
    function lt(e, t) {
        if (null === t)
            return delete it[e],
                null;
        var n, s = st;
        if (t.abbr = e,
        null != it[e])
            T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                s = it[e]._config;
        else if (null != t.parentLocale)
            if (null != it[t.parentLocale])
                s = it[t.parentLocale]._config;
            else {
                if (null == (n = ot(t.parentLocale)))
                    return rt[t.parentLocale] || (rt[t.parentLocale] = []),
                        rt[t.parentLocale].push({
                            name: e,
                            config: t
                        }),
                        null;
                s = n._config
            }
        return it[e] = new P(x(s, t)),
        rt[e] && rt[e].forEach(function(e) {
            lt(e.name, e.config)
        }),
            ut(e),
            it[e]
    }
    function ht(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
            !e)
            return tt;
        if (!o(e)) {
            if (t = ot(e))
                return t;
            e = [e]
        }
        return function(e) {
            for (var t, n, s, i, r = 0; r < e.length; ) {
                for (t = (i = at(e[r]).split("-")).length,
                         n = (n = at(e[r + 1])) ? n.split("-") : null; 0 < t; ) {
                    if (s = ot(i.slice(0, t).join("-")))
                        return s;
                    if (n && n.length >= t && a(i, n, !0) >= t - 1)
                        break;
                    t--
                }
                r++
            }
            return tt
        }(e)
    }
    function dt(e) {
        var t, n = e._a;
        return n && -2 === g(e).overflow && (t = n[_e] < 0 || 11 < n[_e] ? _e : n[ye] < 1 || n[ye] > Pe(n[me], n[_e]) ? ye : n[ge] < 0 || 24 < n[ge] || 24 === n[ge] && (0 !== n[ve] || 0 !== n[pe] || 0 !== n[we]) ? ge : n[ve] < 0 || 59 < n[ve] ? ve : n[pe] < 0 || 59 < n[pe] ? pe : n[we] < 0 || 999 < n[we] ? we : -1,
        g(e)._overflowDayOfYear && (t < me || ye < t) && (t = ye),
        g(e)._overflowWeeks && -1 === t && (t = Me),
        g(e)._overflowWeekday && -1 === t && (t = ke),
            g(e).overflow = t),
            e
    }
    function ct(e, t, n) {
        return null != e ? e : null != t ? t : n
    }
    function ft(e) {
        var t, n, s, i, r, a = [];
        if (!e._d) {
            var o, u;
            for (o = e,
                     u = new Date(c.now()),
                     s = o._useUTC ? [u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate()] : [u.getFullYear(), u.getMonth(), u.getDate()],
                 e._w && null == e._a[ye] && null == e._a[_e] && function(e) {
                     var t, n, s, i, r, a, o, u;
                     if (null != (t = e._w).GG || null != t.W || null != t.E)
                         r = 1,
                             a = 4,
                             n = ct(t.GG, e._a[me], Ie(bt(), 1, 4).year),
                             s = ct(t.W, 1),
                         ((i = ct(t.E, 1)) < 1 || 7 < i) && (u = !0);
                     else {
                         r = e._locale._week.dow,
                             a = e._locale._week.doy;
                         var l = Ie(bt(), r, a);
                         n = ct(t.gg, e._a[me], l.year),
                             s = ct(t.w, l.week),
                             null != t.d ? ((i = t.d) < 0 || 6 < i) && (u = !0) : null != t.e ? (i = t.e + r,
                             (t.e < 0 || 6 < t.e) && (u = !0)) : i = r
                     }
                     s < 1 || s > Ae(n, r, a) ? g(e)._overflowWeeks = !0 : null != u ? g(e)._overflowWeekday = !0 : (o = Ee(n, s, i, r, a),
                         e._a[me] = o.year,
                         e._dayOfYear = o.dayOfYear)
                 }(e),
                 null != e._dayOfYear && (r = ct(e._a[me], s[me]),
                 (e._dayOfYear > Se(r) || 0 === e._dayOfYear) && (g(e)._overflowDayOfYear = !0),
                     n = Ge(r, 0, e._dayOfYear),
                     e._a[_e] = n.getUTCMonth(),
                     e._a[ye] = n.getUTCDate()),
                     t = 0; t < 3 && null == e._a[t]; ++t)
                e._a[t] = a[t] = s[t];
            for (; t < 7; t++)
                e._a[t] = a[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[ge] && 0 === e._a[ve] && 0 === e._a[pe] && 0 === e._a[we] && (e._nextDay = !0,
                e._a[ge] = 0),
                e._d = (e._useUTC ? Ge : function(e, t, n, s, i, r, a) {
                        var o;
                        return e < 100 && 0 <= e ? (o = new Date(e + 400,t,n,s,i,r,a),
                        isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e,t,n,s,i,r,a),
                            o
                    }
                ).apply(null, a),
                i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
            null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            e._nextDay && (e._a[ge] = 24),
            e._w && void 0 !== e._w.d && e._w.d !== i && (g(e).weekdayMismatch = !0)
        }
    }
    var mt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/
        , _t = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/
        , yt = /Z|[+-]\d\d(?::?\d\d)?/
        , gt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]]
        , vt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]]
        , pt = /^\/?Date\((\-?\d+)/i;
    function wt(e) {
        var t, n, s, i, r, a, o = e._i, u = mt.exec(o) || _t.exec(o);
        if (u) {
            for (g(e).iso = !0,
                     t = 0,
                     n = gt.length; t < n; t++)
                if (gt[t][1].exec(u[1])) {
                    i = gt[t][0],
                        s = !1 !== gt[t][2];
                    break
                }
            if (null == i)
                return void (e._isValid = !1);
            if (u[3]) {
                for (t = 0,
                         n = vt.length; t < n; t++)
                    if (vt[t][1].exec(u[3])) {
                        r = (u[2] || " ") + vt[t][0];
                        break
                    }
                if (null == r)
                    return void (e._isValid = !1)
            }
            if (!s && null != r)
                return void (e._isValid = !1);
            if (u[4]) {
                if (!yt.exec(u[4]))
                    return void (e._isValid = !1);
                a = "Z"
            }
            e._f = i + (r || "") + (a || ""),
                Yt(e)
        } else
            e._isValid = !1
    }
    var Mt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
    function kt(e, t, n, s, i, r) {
        var a = [function(e) {
            var t = parseInt(e, 10);
            {
                if (t <= 49)
                    return 2e3 + t;
                if (t <= 999)
                    return 1900 + t
            }
            return t
        }(e), He.indexOf(t), parseInt(n, 10), parseInt(s, 10), parseInt(i, 10)];
        return r && a.push(parseInt(r, 10)),
            a
    }
    var St = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    function Dt(e) {
        var t, n, s, i = Mt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        if (i) {
            var r = kt(i[4], i[3], i[2], i[5], i[6], i[7]);
            if (t = i[1],
                n = r,
                s = e,
            t && ze.indexOf(t) !== new Date(n[0],n[1],n[2]).getDay() && (g(s).weekdayMismatch = !0,
                !(s._isValid = !1)))
                return;
            e._a = r,
                e._tzm = function(e, t, n) {
                    if (e)
                        return St[e];
                    if (t)
                        return 0;
                    var s = parseInt(n, 10)
                        , i = s % 100;
                    return (s - i) / 100 * 60 + i
                }(i[8], i[9], i[10]),
                e._d = Ge.apply(null, e._a),
                e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                g(e).rfc2822 = !0
        } else
            e._isValid = !1
    }
    function Yt(e) {
        if (e._f !== c.ISO_8601)
            if (e._f !== c.RFC_2822) {
                e._a = [],
                    g(e).empty = !0;
                var t, n, s, i, r, a, o, u, l = "" + e._i, h = l.length, d = 0;
                for (s = j(e._f, e._locale).match(N) || [],
                         t = 0; t < s.length; t++)
                    i = s[t],
                    (n = (l.match(le(i, e)) || [])[0]) && (0 < (r = l.substr(0, l.indexOf(n))).length && g(e).unusedInput.push(r),
                        l = l.slice(l.indexOf(n) + n.length),
                        d += n.length),
                        E[i] ? (n ? g(e).empty = !1 : g(e).unusedTokens.push(i),
                            a = i,
                            u = e,
                        null != (o = n) && m(de, a) && de[a](o, u._a, u, a)) : e._strict && !n && g(e).unusedTokens.push(i);
                g(e).charsLeftOver = h - d,
                0 < l.length && g(e).unusedInput.push(l),
                e._a[ge] <= 12 && !0 === g(e).bigHour && 0 < e._a[ge] && (g(e).bigHour = void 0),
                    g(e).parsedDateParts = e._a.slice(0),
                    g(e).meridiem = e._meridiem,
                    e._a[ge] = function(e, t, n) {
                        var s;
                        if (null == n)
                            return t;
                        return null != e.meridiemHour ? e.meridiemHour(t, n) : (null != e.isPM && ((s = e.isPM(n)) && t < 12 && (t += 12),
                        s || 12 !== t || (t = 0)),
                            t)
                    }(e._locale, e._a[ge], e._meridiem),
                    ft(e),
                    dt(e)
            } else
                Dt(e);
        else
            wt(e)
    }
    function Ot(e) {
        var t, n, s, i, r = e._i, a = e._f;
        return e._locale = e._locale || ht(e._l),
            null === r || void 0 === a && "" === r ? p({
                nullInput: !0
            }) : ("string" == typeof r && (e._i = r = e._locale.preparse(r)),
                k(r) ? new M(dt(r)) : (d(r) ? e._d = r : o(a) ? function(e) {
                    var t, n, s, i, r;
                    if (0 === e._f.length)
                        return g(e).invalidFormat = !0,
                            e._d = new Date(NaN);
                    for (i = 0; i < e._f.length; i++)
                        r = 0,
                            t = w({}, e),
                        null != e._useUTC && (t._useUTC = e._useUTC),
                            t._f = e._f[i],
                            Yt(t),
                        v(t) && (r += g(t).charsLeftOver,
                            r += 10 * g(t).unusedTokens.length,
                            g(t).score = r,
                        (null == s || r < s) && (s = r,
                            n = t));
                    _(e, n || t)
                }(e) : a ? Yt(e) : l(n = (t = e)._i) ? t._d = new Date(c.now()) : d(n) ? t._d = new Date(n.valueOf()) : "string" == typeof n ? (s = t,
                    null === (i = pt.exec(s._i)) ? (wt(s),
                    !1 === s._isValid && (delete s._isValid,
                        Dt(s),
                    !1 === s._isValid && (delete s._isValid,
                        c.createFromInputFallback(s)))) : s._d = new Date(+i[1])) : o(n) ? (t._a = f(n.slice(0), function(e) {
                    return parseInt(e, 10)
                }),
                    ft(t)) : u(n) ? function(e) {
                    if (!e._d) {
                        var t = R(e._i);
                        e._a = f([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                            return e && parseInt(e, 10)
                        }),
                            ft(e)
                    }
                }(t) : h(n) ? t._d = new Date(n) : c.createFromInputFallback(t),
                v(e) || (e._d = null),
                    e))
    }
    function Tt(e, t, n, s, i) {
        var r, a = {};
        return !0 !== n && !1 !== n || (s = n,
            n = void 0),
        (u(e) && function(e) {
            if (Object.getOwnPropertyNames)
                return 0 === Object.getOwnPropertyNames(e).length;
            var t;
            for (t in e)
                if (e.hasOwnProperty(t))
                    return !1;
            return !0
        }(e) || o(e) && 0 === e.length) && (e = void 0),
            a._isAMomentObject = !0,
            a._useUTC = a._isUTC = i,
            a._l = n,
            a._i = e,
            a._f = t,
            a._strict = s,
        (r = new M(dt(Ot(a))))._nextDay && (r.add(1, "d"),
            r._nextDay = void 0),
            r
    }
    function bt(e, t, n, s) {
        return Tt(e, t, n, s, !1)
    }
    c.createFromInputFallback = n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }),
        c.ISO_8601 = function() {}
        ,
        c.RFC_2822 = function() {}
    ;
    var xt = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = bt.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : p()
    })
        , Pt = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = bt.apply(null, arguments);
        return this.isValid() && e.isValid() ? this < e ? this : e : p()
    });
    function Wt(e, t) {
        var n, s;
        if (1 === t.length && o(t[0]) && (t = t[0]),
            !t.length)
            return bt();
        for (n = t[0],
                 s = 1; s < t.length; ++s)
            t[s].isValid() && !t[s][e](n) || (n = t[s]);
        return n
    }
    var Ct = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    function Ht(e) {
        var t = R(e)
            , n = t.year || 0
            , s = t.quarter || 0
            , i = t.month || 0
            , r = t.week || t.isoWeek || 0
            , a = t.day || 0
            , o = t.hour || 0
            , u = t.minute || 0
            , l = t.second || 0
            , h = t.millisecond || 0;
        this._isValid = function(e) {
            for (var t in e)
                if (-1 === Ye.call(Ct, t) || null != e[t] && isNaN(e[t]))
                    return !1;
            for (var n = !1, s = 0; s < Ct.length; ++s)
                if (e[Ct[s]]) {
                    if (n)
                        return !1;
                    parseFloat(e[Ct[s]]) !== D(e[Ct[s]]) && (n = !0)
                }
            return !0
        }(t),
            this._milliseconds = +h + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60,
            this._days = +a + 7 * r,
            this._months = +i + 3 * s + 12 * n,
            this._data = {},
            this._locale = ht(),
            this._bubble()
    }
    function Rt(e) {
        return e instanceof Ht
    }
    function Ut(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
    }
    function Ft(e, n) {
        I(e, 0, 0, function() {
            var e = this.utcOffset()
                , t = "+";
            return e < 0 && (e = -e,
                t = "-"),
            t + L(~~(e / 60), 2) + n + L(~~e % 60, 2)
        })
    }
    Ft("Z", ":"),
        Ft("ZZ", ""),
        ue("Z", re),
        ue("ZZ", re),
        ce(["Z", "ZZ"], function(e, t, n) {
            n._useUTC = !0,
                n._tzm = Nt(re, e)
        });
    var Lt = /([\+\-]|\d\d)/gi;
    function Nt(e, t) {
        var n = (t || "").match(e);
        if (null === n)
            return null;
        var s = ((n[n.length - 1] || []) + "").match(Lt) || ["-", 0, 0]
            , i = 60 * s[1] + D(s[2]);
        return 0 === i ? 0 : "+" === s[0] ? i : -i
    }
    function Gt(e, t) {
        var n, s;
        return t._isUTC ? (n = t.clone(),
            s = (k(e) || d(e) ? e.valueOf() : bt(e).valueOf()) - n.valueOf(),
            n._d.setTime(n._d.valueOf() + s),
            c.updateOffset(n, !1),
            n) : bt(e).local()
    }
    function Vt(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }
    function Et() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }
    c.updateOffset = function() {}
    ;
    var It = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/
        , At = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function jt(e, t) {
        var n, s, i, r = e, a = null;
        return Rt(e) ? r = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : h(e) ? (r = {},
            t ? r[t] = e : r.milliseconds = e) : (a = It.exec(e)) ? (n = "-" === a[1] ? -1 : 1,
            r = {
                y: 0,
                d: D(a[ye]) * n,
                h: D(a[ge]) * n,
                m: D(a[ve]) * n,
                s: D(a[pe]) * n,
                ms: D(Ut(1e3 * a[we])) * n
            }) : (a = At.exec(e)) ? (n = "-" === a[1] ? -1 : 1,
            r = {
                y: Zt(a[2], n),
                M: Zt(a[3], n),
                w: Zt(a[4], n),
                d: Zt(a[5], n),
                h: Zt(a[6], n),
                m: Zt(a[7], n),
                s: Zt(a[8], n)
            }) : null == r ? r = {} : "object" == typeof r && ("from"in r || "to"in r) && (i = function(e, t) {
            var n;
            if (!e.isValid() || !t.isValid())
                return {
                    milliseconds: 0,
                    months: 0
                };
            t = Gt(t, e),
                e.isBefore(t) ? n = zt(e, t) : ((n = zt(t, e)).milliseconds = -n.milliseconds,
                    n.months = -n.months);
            return n
        }(bt(r.from), bt(r.to)),
            (r = {}).ms = i.milliseconds,
            r.M = i.months),
            s = new Ht(r),
        Rt(e) && m(e, "_locale") && (s._locale = e._locale),
            s
    }
    function Zt(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
    }
    function zt(e, t) {
        var n = {};
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()),
        e.clone().add(n.months, "M").isAfter(t) && --n.months,
            n.milliseconds = +t - +e.clone().add(n.months, "M"),
            n
    }
    function $t(s, i) {
        return function(e, t) {
            var n;
            return null === t || isNaN(+t) || (T(i, "moment()." + i + "(period, number) is deprecated. Please use moment()." + i + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
                n = e,
                e = t,
                t = n),
                qt(this, jt(e = "string" == typeof e ? +e : e, t), s),
                this
        }
    }
    function qt(e, t, n, s) {
        var i = t._milliseconds
            , r = Ut(t._days)
            , a = Ut(t._months);
        e.isValid() && (s = null == s || s,
        a && Re(e, be(e, "Month") + a * n),
        r && xe(e, "Date", be(e, "Date") + r * n),
        i && e._d.setTime(e._d.valueOf() + i * n),
        s && c.updateOffset(e, r || a))
    }
    jt.fn = Ht.prototype,
        jt.invalid = function() {
            return jt(NaN)
        }
    ;
    var Jt = $t(1, "add")
        , Bt = $t(-1, "subtract");
    function Qt(e, t) {
        var n = 12 * (t.year() - e.year()) + (t.month() - e.month())
            , s = e.clone().add(n, "months");
        return -(n + (t - s < 0 ? (t - s) / (s - e.clone().add(n - 1, "months")) : (t - s) / (e.clone().add(n + 1, "months") - s))) || 0
    }
    function Xt(e) {
        var t;
        return void 0 === e ? this._locale._abbr : (null != (t = ht(e)) && (this._locale = t),
            this)
    }
    c.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
        c.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Kt = n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    });
    function en() {
        return this._locale
    }
    var tn = 126227808e5;
    function nn(e, t) {
        return (e % t + t) % t
    }
    function sn(e, t, n) {
        return e < 100 && 0 <= e ? new Date(e + 400,t,n) - tn : new Date(e,t,n).valueOf()
    }
    function rn(e, t, n) {
        return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - tn : Date.UTC(e, t, n)
    }
    function an(e, t) {
        I(0, [e, e.length], 0, t)
    }
    function on(e, t, n, s, i) {
        var r;
        return null == e ? Ie(this, s, i).year : ((r = Ae(e, s, i)) < t && (t = r),
            function(e, t, n, s, i) {
                var r = Ee(e, t, n, s, i)
                    , a = Ge(r.year, 0, r.dayOfYear);
                return this.year(a.getUTCFullYear()),
                    this.month(a.getUTCMonth()),
                    this.date(a.getUTCDate()),
                    this
            }
                .call(this, e, t, n, s, i))
    }
    I(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }),
        I(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }),
        an("gggg", "weekYear"),
        an("ggggg", "weekYear"),
        an("GGGG", "isoWeekYear"),
        an("GGGGG", "isoWeekYear"),
        C("weekYear", "gg"),
        C("isoWeekYear", "GG"),
        F("weekYear", 1),
        F("isoWeekYear", 1),
        ue("G", se),
        ue("g", se),
        ue("GG", B, z),
        ue("gg", B, z),
        ue("GGGG", ee, q),
        ue("gggg", ee, q),
        ue("GGGGG", te, J),
        ue("ggggg", te, J),
        fe(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, s) {
            t[s.substr(0, 2)] = D(e)
        }),
        fe(["gg", "GG"], function(e, t, n, s) {
            t[s] = c.parseTwoDigitYear(e)
        }),
        I("Q", 0, "Qo", "quarter"),
        C("quarter", "Q"),
        F("quarter", 7),
        ue("Q", Z),
        ce("Q", function(e, t) {
            t[_e] = 3 * (D(e) - 1)
        }),
        I("D", ["DD", 2], "Do", "date"),
        C("date", "D"),
        F("date", 9),
        ue("D", B),
        ue("DD", B, z),
        ue("Do", function(e, t) {
            return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
        }),
        ce(["D", "DD"], ye),
        ce("Do", function(e, t) {
            t[ye] = D(e.match(B)[0])
        });
    var un = Te("Date", !0);
    I("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
        C("dayOfYear", "DDD"),
        F("dayOfYear", 4),
        ue("DDD", K),
        ue("DDDD", $),
        ce(["DDD", "DDDD"], function(e, t, n) {
            n._dayOfYear = D(e)
        }),
        I("m", ["mm", 2], 0, "minute"),
        C("minute", "m"),
        F("minute", 14),
        ue("m", B),
        ue("mm", B, z),
        ce(["m", "mm"], ve);
    var ln = Te("Minutes", !1);
    I("s", ["ss", 2], 0, "second"),
        C("second", "s"),
        F("second", 15),
        ue("s", B),
        ue("ss", B, z),
        ce(["s", "ss"], pe);
    var hn, dn = Te("Seconds", !1);
    for (I("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }),
             I(0, ["SS", 2], 0, function() {
                 return ~~(this.millisecond() / 10)
             }),
             I(0, ["SSS", 3], 0, "millisecond"),
             I(0, ["SSSS", 4], 0, function() {
                 return 10 * this.millisecond()
             }),
             I(0, ["SSSSS", 5], 0, function() {
                 return 100 * this.millisecond()
             }),
             I(0, ["SSSSSS", 6], 0, function() {
                 return 1e3 * this.millisecond()
             }),
             I(0, ["SSSSSSS", 7], 0, function() {
                 return 1e4 * this.millisecond()
             }),
             I(0, ["SSSSSSSS", 8], 0, function() {
                 return 1e5 * this.millisecond()
             }),
             I(0, ["SSSSSSSSS", 9], 0, function() {
                 return 1e6 * this.millisecond()
             }),
             C("millisecond", "ms"),
             F("millisecond", 16),
             ue("S", K, Z),
             ue("SS", K, z),
             ue("SSS", K, $),
             hn = "SSSS"; hn.length <= 9; hn += "S")
        ue(hn, ne);
    function cn(e, t) {
        t[we] = D(1e3 * ("0." + e))
    }
    for (hn = "S"; hn.length <= 9; hn += "S")
        ce(hn, cn);
    var fn = Te("Milliseconds", !1);
    I("z", 0, 0, "zoneAbbr"),
        I("zz", 0, 0, "zoneName");
    var mn = M.prototype;
    function _n(e) {
        return e
    }
    mn.add = Jt,
        mn.calendar = function(e, t) {
            var n = e || bt()
                , s = Gt(n, this).startOf("day")
                , i = c.calendarFormat(this, s) || "sameElse"
                , r = t && (b(t[i]) ? t[i].call(this, n) : t[i]);
            return this.format(r || this.localeData().calendar(i, this, bt(n)))
        }
        ,
        mn.clone = function() {
            return new M(this)
        }
        ,
        mn.diff = function(e, t, n) {
            var s, i, r;
            if (!this.isValid())
                return NaN;
            if (!(s = Gt(e, this)).isValid())
                return NaN;
            switch (i = 6e4 * (s.utcOffset() - this.utcOffset()),
                t = H(t)) {
                case "year":
                    r = Qt(this, s) / 12;
                    break;
                case "month":
                    r = Qt(this, s);
                    break;
                case "quarter":
                    r = Qt(this, s) / 3;
                    break;
                case "second":
                    r = (this - s) / 1e3;
                    break;
                case "minute":
                    r = (this - s) / 6e4;
                    break;
                case "hour":
                    r = (this - s) / 36e5;
                    break;
                case "day":
                    r = (this - s - i) / 864e5;
                    break;
                case "week":
                    r = (this - s - i) / 6048e5;
                    break;
                default:
                    r = this - s
            }
            return n ? r : S(r)
        }
        ,
        mn.endOf = function(e) {
            var t;
            if (void 0 === (e = H(e)) || "millisecond" === e || !this.isValid())
                return this;
            var n = this._isUTC ? rn : sn;
            switch (e) {
                case "year":
                    t = n(this.year() + 1, 0, 1) - 1;
                    break;
                case "quarter":
                    t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                    break;
                case "month":
                    t = n(this.year(), this.month() + 1, 1) - 1;
                    break;
                case "week":
                    t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                    break;
                case "isoWeek":
                    t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                    break;
                case "day":
                case "date":
                    t = n(this.year(), this.month(), this.date() + 1) - 1;
                    break;
                case "hour":
                    t = this._d.valueOf(),
                        t += 36e5 - nn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
                    break;
                case "minute":
                    t = this._d.valueOf(),
                        t += 6e4 - nn(t, 6e4) - 1;
                    break;
                case "second":
                    t = this._d.valueOf(),
                        t += 1e3 - nn(t, 1e3) - 1;
                    break
            }
            return this._d.setTime(t),
                c.updateOffset(this, !0),
                this
        }
        ,
        mn.format = function(e) {
            e || (e = this.isUtc() ? c.defaultFormatUtc : c.defaultFormat);
            var t = A(this, e);
            return this.localeData().postformat(t)
        }
        ,
        mn.from = function(e, t) {
            return this.isValid() && (k(e) && e.isValid() || bt(e).isValid()) ? jt({
                to: this,
                from: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }
        ,
        mn.fromNow = function(e) {
            return this.from(bt(), e)
        }
        ,
        mn.to = function(e, t) {
            return this.isValid() && (k(e) && e.isValid() || bt(e).isValid()) ? jt({
                from: this,
                to: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }
        ,
        mn.toNow = function(e) {
            return this.to(bt(), e)
        }
        ,
        mn.get = function(e) {
            return b(this[e = H(e)]) ? this[e]() : this
        }
        ,
        mn.invalidAt = function() {
            return g(this).overflow
        }
        ,
        mn.isAfter = function(e, t) {
            var n = k(e) ? e : bt(e);
            return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
        }
        ,
        mn.isBefore = function(e, t) {
            var n = k(e) ? e : bt(e);
            return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
        }
        ,
        mn.isBetween = function(e, t, n, s) {
            var i = k(e) ? e : bt(e)
                , r = k(t) ? t : bt(t);
            return !!(this.isValid() && i.isValid() && r.isValid()) && ("(" === (s = s || "()")[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) && (")" === s[1] ? this.isBefore(r, n) : !this.isAfter(r, n))
        }
        ,
        mn.isSame = function(e, t) {
            var n, s = k(e) ? e : bt(e);
            return !(!this.isValid() || !s.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() === s.valueOf() : (n = s.valueOf(),
            this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
        }
        ,
        mn.isSameOrAfter = function(e, t) {
            return this.isSame(e, t) || this.isAfter(e, t)
        }
        ,
        mn.isSameOrBefore = function(e, t) {
            return this.isSame(e, t) || this.isBefore(e, t)
        }
        ,
        mn.isValid = function() {
            return v(this)
        }
        ,
        mn.lang = Kt,
        mn.locale = Xt,
        mn.localeData = en,
        mn.max = Pt,
        mn.min = xt,
        mn.parsingFlags = function() {
            return _({}, g(this))
        }
        ,
        mn.set = function(e, t) {
            if ("object" == typeof e)
                for (var n = function(e) {
                    var t = [];
                    for (var n in e)
                        t.push({
                            unit: n,
                            priority: U[n]
                        });
                    return t.sort(function(e, t) {
                        return e.priority - t.priority
                    }),
                        t
                }(e = R(e)), s = 0; s < n.length; s++)
                    this[n[s].unit](e[n[s].unit]);
            else if (b(this[e = H(e)]))
                return this[e](t);
            return this
        }
        ,
        mn.startOf = function(e) {
            var t;
            if (void 0 === (e = H(e)) || "millisecond" === e || !this.isValid())
                return this;
            var n = this._isUTC ? rn : sn;
            switch (e) {
                case "year":
                    t = n(this.year(), 0, 1);
                    break;
                case "quarter":
                    t = n(this.year(), this.month() - this.month() % 3, 1);
                    break;
                case "month":
                    t = n(this.year(), this.month(), 1);
                    break;
                case "week":
                    t = n(this.year(), this.month(), this.date() - this.weekday());
                    break;
                case "isoWeek":
                    t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                    break;
                case "day":
                case "date":
                    t = n(this.year(), this.month(), this.date());
                    break;
                case "hour":
                    t = this._d.valueOf(),
                        t -= nn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                    break;
                case "minute":
                    t = this._d.valueOf(),
                        t -= nn(t, 6e4);
                    break;
                case "second":
                    t = this._d.valueOf(),
                        t -= nn(t, 1e3);
                    break
            }
            return this._d.setTime(t),
                c.updateOffset(this, !0),
                this
        }
        ,
        mn.subtract = Bt,
        mn.toArray = function() {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
        }
        ,
        mn.toObject = function() {
            var e = this;
            return {
                years: e.year(),
                months: e.month(),
                date: e.date(),
                hours: e.hours(),
                minutes: e.minutes(),
                seconds: e.seconds(),
                milliseconds: e.milliseconds()
            }
        }
        ,
        mn.toDate = function() {
            return new Date(this.valueOf())
        }
        ,
        mn.toISOString = function(e) {
            if (!this.isValid())
                return null;
            var t = !0 !== e
                , n = t ? this.clone().utc() : this;
            return n.year() < 0 || 9999 < n.year() ? A(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : b(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", A(n, "Z")) : A(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
        }
        ,
        mn.inspect = function() {
            if (!this.isValid())
                return "moment.invalid(/* " + this._i + " */)";
            var e = "moment"
                , t = "";
            this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
                t = "Z");
            var n = "[" + e + '("]'
                , s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"
                , i = t + '[")]';
            return this.format(n + s + "-MM-DD[T]HH:mm:ss.SSS" + i)
        }
        ,
        mn.toJSON = function() {
            return this.isValid() ? this.toISOString() : null
        }
        ,
        mn.toString = function() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }
        ,
        mn.unix = function() {
            return Math.floor(this.valueOf() / 1e3)
        }
        ,
        mn.valueOf = function() {
            return this._d.valueOf() - 6e4 * (this._offset || 0)
        }
        ,
        mn.creationData = function() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            }
        }
        ,
        mn.year = Oe,
        mn.isLeapYear = function() {
            return De(this.year())
        }
        ,
        mn.weekYear = function(e) {
            return on.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }
        ,
        mn.isoWeekYear = function(e) {
            return on.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
        }
        ,
        mn.quarter = mn.quarters = function(e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        }
        ,
        mn.month = Ue,
        mn.daysInMonth = function() {
            return Pe(this.year(), this.month())
        }
        ,
        mn.week = mn.weeks = function(e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d")
        }
        ,
        mn.isoWeek = mn.isoWeeks = function(e) {
            var t = Ie(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d")
        }
        ,
        mn.weeksInYear = function() {
            var e = this.localeData()._week;
            return Ae(this.year(), e.dow, e.doy)
        }
        ,
        mn.isoWeeksInYear = function() {
            return Ae(this.year(), 1, 4)
        }
        ,
        mn.date = un,
        mn.day = mn.days = function(e) {
            if (!this.isValid())
                return null != e ? this : NaN;
            var t, n, s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? (t = e,
                n = this.localeData(),
                e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10),
                this.add(e - s, "d")) : s
        }
        ,
        mn.weekday = function(e) {
            if (!this.isValid())
                return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d")
        }
        ,
        mn.isoWeekday = function(e) {
            if (!this.isValid())
                return null != e ? this : NaN;
            if (null == e)
                return this.day() || 7;
            var t, n, s = (t = e,
                n = this.localeData(),
                "string" == typeof t ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t);
            return this.day(this.day() % 7 ? s : s - 7)
        }
        ,
        mn.dayOfYear = function(e) {
            var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d")
        }
        ,
        mn.hour = mn.hours = nt,
        mn.minute = mn.minutes = ln,
        mn.second = mn.seconds = dn,
        mn.millisecond = mn.milliseconds = fn,
        mn.utcOffset = function(e, t, n) {
            var s, i = this._offset || 0;
            if (!this.isValid())
                return null != e ? this : NaN;
            if (null == e)
                return this._isUTC ? i : Vt(this);
            if ("string" == typeof e) {
                if (null === (e = Nt(re, e)))
                    return this
            } else
                Math.abs(e) < 16 && !n && (e *= 60);
            return !this._isUTC && t && (s = Vt(this)),
                this._offset = e,
                this._isUTC = !0,
            null != s && this.add(s, "m"),
            i !== e && (!t || this._changeInProgress ? qt(this, jt(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
                c.updateOffset(this, !0),
                this._changeInProgress = null)),
                this
        }
        ,
        mn.utc = function(e) {
            return this.utcOffset(0, e)
        }
        ,
        mn.local = function(e) {
            return this._isUTC && (this.utcOffset(0, e),
                this._isUTC = !1,
            e && this.subtract(Vt(this), "m")),
                this
        }
        ,
        mn.parseZone = function() {
            if (null != this._tzm)
                this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
                var e = Nt(ie, this._i);
                null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
            }
            return this
        }
        ,
        mn.hasAlignedHourOffset = function(e) {
            return !!this.isValid() && (e = e ? bt(e).utcOffset() : 0,
            (this.utcOffset() - e) % 60 == 0)
        }
        ,
        mn.isDST = function() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }
        ,
        mn.isLocal = function() {
            return !!this.isValid() && !this._isUTC
        }
        ,
        mn.isUtcOffset = function() {
            return !!this.isValid() && this._isUTC
        }
        ,
        mn.isUtc = Et,
        mn.isUTC = Et,
        mn.zoneAbbr = function() {
            return this._isUTC ? "UTC" : ""
        }
        ,
        mn.zoneName = function() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }
        ,
        mn.dates = n("dates accessor is deprecated. Use date instead.", un),
        mn.months = n("months accessor is deprecated. Use month instead", Ue),
        mn.years = n("years accessor is deprecated. Use year instead", Oe),
        mn.zone = n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
            return null != e ? ("string" != typeof e && (e = -e),
                this.utcOffset(e, t),
                this) : -this.utcOffset()
        }),
        mn.isDSTShifted = n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
            if (!l(this._isDSTShifted))
                return this._isDSTShifted;
            var e = {};
            if (w(e, this),
                (e = Ot(e))._a) {
                var t = e._isUTC ? y(e._a) : bt(e._a);
                this._isDSTShifted = this.isValid() && 0 < a(e._a, t.toArray())
            } else
                this._isDSTShifted = !1;
            return this._isDSTShifted
        });
    var yn = P.prototype;
    function gn(e, t, n, s) {
        var i = ht()
            , r = y().set(s, t);
        return i[n](r, e)
    }
    function vn(e, t, n) {
        if (h(e) && (t = e,
            e = void 0),
            e = e || "",
        null != t)
            return gn(e, t, n, "month");
        var s, i = [];
        for (s = 0; s < 12; s++)
            i[s] = gn(e, s, n, "month");
        return i
    }
    function pn(e, t, n, s) {
        t = ("boolean" == typeof e ? h(t) && (n = t,
            t = void 0) : (t = e,
            e = !1,
        h(n = t) && (n = t,
            t = void 0)),
        t || "");
        var i, r = ht(), a = e ? r._week.dow : 0;
        if (null != n)
            return gn(t, (n + a) % 7, s, "day");
        var o = [];
        for (i = 0; i < 7; i++)
            o[i] = gn(t, (i + a) % 7, s, "day");
        return o
    }
    yn.calendar = function(e, t, n) {
        var s = this._calendar[e] || this._calendar.sameElse;
        return b(s) ? s.call(t, n) : s
    }
        ,
        yn.longDateFormat = function(e) {
            var t = this._longDateFormat[e]
                , n = this._longDateFormat[e.toUpperCase()];
            return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                return e.slice(1)
            }),
                this._longDateFormat[e])
        }
        ,
        yn.invalidDate = function() {
            return this._invalidDate
        }
        ,
        yn.ordinal = function(e) {
            return this._ordinal.replace("%d", e)
        }
        ,
        yn.preparse = _n,
        yn.postformat = _n,
        yn.relativeTime = function(e, t, n, s) {
            var i = this._relativeTime[n];
            return b(i) ? i(e, t, n, s) : i.replace(/%d/i, e)
        }
        ,
        yn.pastFuture = function(e, t) {
            var n = this._relativeTime[0 < e ? "future" : "past"];
            return b(n) ? n(t) : n.replace(/%s/i, t)
        }
        ,
        yn.set = function(e) {
            var t, n;
            for (n in e)
                b(t = e[n]) ? this[n] = t : this["_" + n] = t;
            this._config = e,
                this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
        }
        ,
        yn.months = function(e, t) {
            return e ? o(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || We).test(t) ? "format" : "standalone"][e.month()] : o(this._months) ? this._months : this._months.standalone
        }
        ,
        yn.monthsShort = function(e, t) {
            return e ? o(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[We.test(t) ? "format" : "standalone"][e.month()] : o(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
        }
        ,
        yn.monthsParse = function(e, t, n) {
            var s, i, r;
            if (this._monthsParseExact)
                return function(e, t, n) {
                    var s, i, r, a = e.toLocaleLowerCase();
                    if (!this._monthsParse)
                        for (this._monthsParse = [],
                                 this._longMonthsParse = [],
                                 this._shortMonthsParse = [],
                                 s = 0; s < 12; ++s)
                            r = y([2e3, s]),
                                this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(),
                                this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
                    return n ? "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : null : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : null : "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : null : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : null
                }
                    .call(this, e, t, n);
            for (this._monthsParse || (this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = []),
                     s = 0; s < 12; s++) {
                if (i = y([2e3, s]),
                n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$","i"),
                    this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$","i")),
                n || this._monthsParse[s] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""),
                    this._monthsParse[s] = new RegExp(r.replace(".", ""),"i")),
                n && "MMMM" === t && this._longMonthsParse[s].test(e))
                    return s;
                if (n && "MMM" === t && this._shortMonthsParse[s].test(e))
                    return s;
                if (!n && this._monthsParse[s].test(e))
                    return s
            }
        }
        ,
        yn.monthsRegex = function(e) {
            return this._monthsParseExact ? (m(this, "_monthsRegex") || Ne.call(this),
                e ? this._monthsStrictRegex : this._monthsRegex) : (m(this, "_monthsRegex") || (this._monthsRegex = Le),
                this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
        }
        ,
        yn.monthsShortRegex = function(e) {
            return this._monthsParseExact ? (m(this, "_monthsRegex") || Ne.call(this),
                e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (m(this, "_monthsShortRegex") || (this._monthsShortRegex = Fe),
                this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
        }
        ,
        yn.week = function(e) {
            return Ie(e, this._week.dow, this._week.doy).week
        }
        ,
        yn.firstDayOfYear = function() {
            return this._week.doy
        }
        ,
        yn.firstDayOfWeek = function() {
            return this._week.dow
        }
        ,
        yn.weekdays = function(e, t) {
            var n = o(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
            return !0 === e ? je(n, this._week.dow) : e ? n[e.day()] : n
        }
        ,
        yn.weekdaysMin = function(e) {
            return !0 === e ? je(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
        }
        ,
        yn.weekdaysShort = function(e) {
            return !0 === e ? je(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
        }
        ,
        yn.weekdaysParse = function(e, t, n) {
            var s, i, r;
            if (this._weekdaysParseExact)
                return function(e, t, n) {
                    var s, i, r, a = e.toLocaleLowerCase();
                    if (!this._weekdaysParse)
                        for (this._weekdaysParse = [],
                                 this._shortWeekdaysParse = [],
                                 this._minWeekdaysParse = [],
                                 s = 0; s < 7; ++s)
                            r = y([2e3, 1]).day(s),
                                this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(),
                                this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(),
                                this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
                    return n ? "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : null : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : null
                }
                    .call(this, e, t, n);
            for (this._weekdaysParse || (this._weekdaysParse = [],
                this._minWeekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._fullWeekdaysParse = []),
                     s = 0; s < 7; s++) {
                if (i = y([2e3, 1]).day(s),
                n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$","i"),
                    this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$","i"),
                    this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$","i")),
                this._weekdaysParse[s] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""),
                    this._weekdaysParse[s] = new RegExp(r.replace(".", ""),"i")),
                n && "dddd" === t && this._fullWeekdaysParse[s].test(e))
                    return s;
                if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e))
                    return s;
                if (n && "dd" === t && this._minWeekdaysParse[s].test(e))
                    return s;
                if (!n && this._weekdaysParse[s].test(e))
                    return s
            }
        }
        ,
        yn.weekdaysRegex = function(e) {
            return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Qe.call(this),
                e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (m(this, "_weekdaysRegex") || (this._weekdaysRegex = qe),
                this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
        }
        ,
        yn.weekdaysShortRegex = function(e) {
            return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Qe.call(this),
                e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (m(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Je),
                this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        }
        ,
        yn.weekdaysMinRegex = function(e) {
            return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Qe.call(this),
                e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (m(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Be),
                this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        }
        ,
        yn.isPM = function(e) {
            return "p" === (e + "").toLowerCase().charAt(0)
        }
        ,
        yn.meridiem = function(e, t, n) {
            return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM"
        }
        ,
        ut("en", {
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function(e) {
                var t = e % 10;
                return e + (1 === D(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
            }
        }),
        c.lang = n("moment.lang is deprecated. Use moment.locale instead.", ut),
        c.langData = n("moment.langData is deprecated. Use moment.localeData instead.", ht);
    var wn = Math.abs;
    function Mn(e, t, n, s) {
        var i = jt(t, n);
        return e._milliseconds += s * i._milliseconds,
            e._days += s * i._days,
            e._months += s * i._months,
            e._bubble()
    }
    function kn(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }
    function Sn(e) {
        return 4800 * e / 146097
    }
    function Dn(e) {
        return 146097 * e / 4800
    }
    function Yn(e) {
        return function() {
            return this.as(e)
        }
    }
    var On = Yn("ms")
        , Tn = Yn("s")
        , bn = Yn("m")
        , xn = Yn("h")
        , Pn = Yn("d")
        , Wn = Yn("w")
        , Cn = Yn("M")
        , Hn = Yn("Q")
        , Rn = Yn("y");
    function Un(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN
        }
    }
    var Fn = Un("milliseconds")
        , Ln = Un("seconds")
        , Nn = Un("minutes")
        , Gn = Un("hours")
        , Vn = Un("days")
        , En = Un("months")
        , In = Un("years");
    var An = Math.round
        , jn = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    };
    var Zn = Math.abs;
    function zn(e) {
        return (0 < e) - (e < 0) || +e
    }
    function $n() {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var e, t, n = Zn(this._milliseconds) / 1e3, s = Zn(this._days), i = Zn(this._months);
        t = S((e = S(n / 60)) / 60),
            n %= 60,
            e %= 60;
        var r = S(i / 12)
            , a = i %= 12
            , o = s
            , u = t
            , l = e
            , h = n ? n.toFixed(3).replace(/\.?0+$/, "") : ""
            , d = this.asSeconds();
        if (!d)
            return "P0D";
        var c = d < 0 ? "-" : ""
            , f = zn(this._months) !== zn(d) ? "-" : ""
            , m = zn(this._days) !== zn(d) ? "-" : ""
            , _ = zn(this._milliseconds) !== zn(d) ? "-" : "";
        return c + "P" + (r ? f + r + "Y" : "") + (a ? f + a + "M" : "") + (o ? m + o + "D" : "") + (u || l || h ? "T" : "") + (u ? _ + u + "H" : "") + (l ? _ + l + "M" : "") + (h ? _ + h + "S" : "")
    }
    var qn = Ht.prototype;
    return qn.isValid = function() {
        return this._isValid
    }
        ,
        qn.abs = function() {
            var e = this._data;
            return this._milliseconds = wn(this._milliseconds),
                this._days = wn(this._days),
                this._months = wn(this._months),
                e.milliseconds = wn(e.milliseconds),
                e.seconds = wn(e.seconds),
                e.minutes = wn(e.minutes),
                e.hours = wn(e.hours),
                e.months = wn(e.months),
                e.years = wn(e.years),
                this
        }
        ,
        qn.add = function(e, t) {
            return Mn(this, e, t, 1)
        }
        ,
        qn.subtract = function(e, t) {
            return Mn(this, e, t, -1)
        }
        ,
        qn.as = function(e) {
            if (!this.isValid())
                return NaN;
            var t, n, s = this._milliseconds;
            if ("month" === (e = H(e)) || "quarter" === e || "year" === e)
                switch (t = this._days + s / 864e5,
                    n = this._months + Sn(t),
                    e) {
                    case "month":
                        return n;
                    case "quarter":
                        return n / 3;
                    case "year":
                        return n / 12
                }
            else
                switch (t = this._days + Math.round(Dn(this._months)),
                    e) {
                    case "week":
                        return t / 7 + s / 6048e5;
                    case "day":
                        return t + s / 864e5;
                    case "hour":
                        return 24 * t + s / 36e5;
                    case "minute":
                        return 1440 * t + s / 6e4;
                    case "second":
                        return 86400 * t + s / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * t) + s;
                    default:
                        throw new Error("Unknown unit " + e)
                }
        }
        ,
        qn.asMilliseconds = On,
        qn.asSeconds = Tn,
        qn.asMinutes = bn,
        qn.asHours = xn,
        qn.asDays = Pn,
        qn.asWeeks = Wn,
        qn.asMonths = Cn,
        qn.asQuarters = Hn,
        qn.asYears = Rn,
        qn.valueOf = function() {
            return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * D(this._months / 12) : NaN
        }
        ,
        qn._bubble = function() {
            var e, t, n, s, i, r = this._milliseconds, a = this._days, o = this._months, u = this._data;
            return 0 <= r && 0 <= a && 0 <= o || r <= 0 && a <= 0 && o <= 0 || (r += 864e5 * kn(Dn(o) + a),
                o = a = 0),
                u.milliseconds = r % 1e3,
                e = S(r / 1e3),
                u.seconds = e % 60,
                t = S(e / 60),
                u.minutes = t % 60,
                n = S(t / 60),
                u.hours = n % 24,
                o += i = S(Sn(a += S(n / 24))),
                a -= kn(Dn(i)),
                s = S(o / 12),
                o %= 12,
                u.days = a,
                u.months = o,
                u.years = s,
                this
        }
        ,
        qn.clone = function() {
            return jt(this)
        }
        ,
        qn.get = function(e) {
            return e = H(e),
                this.isValid() ? this[e + "s"]() : NaN
        }
        ,
        qn.milliseconds = Fn,
        qn.seconds = Ln,
        qn.minutes = Nn,
        qn.hours = Gn,
        qn.days = Vn,
        qn.weeks = function() {
            return S(this.days() / 7)
        }
        ,
        qn.months = En,
        qn.years = In,
        qn.humanize = function(e) {
            if (!this.isValid())
                return this.localeData().invalidDate();
            var t, n, s, i, r, a, o, u, l, h, d, c = this.localeData(), f = (n = !e,
                s = c,
                i = jt(t = this).abs(),
                r = An(i.as("s")),
                a = An(i.as("m")),
                o = An(i.as("h")),
                u = An(i.as("d")),
                l = An(i.as("M")),
                h = An(i.as("y")),
                (d = r <= jn.ss && ["s", r] || r < jn.s && ["ss", r] || a <= 1 && ["m"] || a < jn.m && ["mm", a] || o <= 1 && ["h"] || o < jn.h && ["hh", o] || u <= 1 && ["d"] || u < jn.d && ["dd", u] || l <= 1 && ["M"] || l < jn.M && ["MM", l] || h <= 1 && ["y"] || ["yy", h])[2] = n,
                d[3] = 0 < +t,
                d[4] = s,
                function(e, t, n, s, i) {
                    return i.relativeTime(t || 1, !!n, e, s)
                }
                    .apply(null, d));
            return e && (f = c.pastFuture(+this, f)),
                c.postformat(f)
        }
        ,
        qn.toISOString = $n,
        qn.toString = $n,
        qn.toJSON = $n,
        qn.locale = Xt,
        qn.localeData = en,
        qn.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", $n),
        qn.lang = Kt,
        I("X", 0, 0, "unix"),
        I("x", 0, 0, "valueOf"),
        ue("x", se),
        ue("X", /[+-]?\d+(\.\d{1,3})?/),
        ce("X", function(e, t, n) {
            n._d = new Date(1e3 * parseFloat(e, 10))
        }),
        ce("x", function(e, t, n) {
            n._d = new Date(D(e))
        }),
        c.version = "2.24.0",
        e = bt,
        c.fn = mn,
        c.min = function() {
            return Wt("isBefore", [].slice.call(arguments, 0))
        }
        ,
        c.max = function() {
            return Wt("isAfter", [].slice.call(arguments, 0))
        }
        ,
        c.now = function() {
            return Date.now ? Date.now() : +new Date
        }
        ,
        c.utc = y,
        c.unix = function(e) {
            return bt(1e3 * e)
        }
        ,
        c.months = function(e, t) {
            return vn(e, t, "months")
        }
        ,
        c.isDate = d,
        c.locale = ut,
        c.invalid = p,
        c.duration = jt,
        c.isMoment = k,
        c.weekdays = function(e, t, n) {
            return pn(e, t, n, "weekdays")
        }
        ,
        c.parseZone = function() {
            return bt.apply(null, arguments).parseZone()
        }
        ,
        c.localeData = ht,
        c.isDuration = Rt,
        c.monthsShort = function(e, t) {
            return vn(e, t, "monthsShort")
        }
        ,
        c.weekdaysMin = function(e, t, n) {
            return pn(e, t, n, "weekdaysMin")
        }
        ,
        c.defineLocale = lt,
        c.updateLocale = function(e, t) {
            if (null != t) {
                var n, s, i = st;
                null != (s = ot(e)) && (i = s._config),
                    (n = new P(t = x(i, t))).parentLocale = it[e],
                    it[e] = n,
                    ut(e)
            } else
                null != it[e] && (null != it[e].parentLocale ? it[e] = it[e].parentLocale : null != it[e] && delete it[e]);
            return it[e]
        }
        ,
        c.locales = function() {
            return s(it)
        }
        ,
        c.weekdaysShort = function(e, t, n) {
            return pn(e, t, n, "weekdaysShort")
        }
        ,
        c.normalizeUnits = H,
        c.relativeTimeRounding = function(e) {
            return void 0 === e ? An : "function" == typeof e && (An = e,
                !0)
        }
        ,
        c.relativeTimeThreshold = function(e, t) {
            return void 0 !== jn[e] && (void 0 === t ? jn[e] : (jn[e] = t,
            "s" === e && (jn.ss = t - 1),
                !0))
        }
        ,
        c.calendarFormat = function(e, t) {
            var n = e.diff(t, "days", !0);
            return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
        }
        ,
        c.prototype = mn,
        c.HTML5_FMT = {
            DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
            DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
            DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
            DATE: "YYYY-MM-DD",
            TIME: "HH:mm",
            TIME_SECONDS: "HH:mm:ss",
            TIME_MS: "HH:mm:ss.SSS",
            WEEK: "GGGG-[W]WW",
            MONTH: "YYYY-MM"
        },
        c
});

!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(e) {
    function t(t) {
        var n = t || window.event
            , a = [].slice.call(arguments, 1)
            , r = 0
            , l = 0
            , s = 0
            , c = 0
            , c = 0;
        t = e.event.fix(n),
            t.type = "mousewheel",
        n.wheelDelta && (r = n.wheelDelta),
        n.detail && (r = -1 * n.detail),
        n.deltaY && (r = s = -1 * n.deltaY),
        n.deltaX && (l = n.deltaX,
            r = -1 * l),
        void 0 !== n.wheelDeltaY && (s = n.wheelDeltaY),
        void 0 !== n.wheelDeltaX && (l = -1 * n.wheelDeltaX),
            c = Math.abs(r),
        (!i || c < i) && (i = c),
            c = Math.max(Math.abs(s), Math.abs(l)),
        (!o || c < o) && (o = c),
            n = 0 < r ? "floor" : "ceil",
            r = Math[n](r / i),
            l = Math[n](l / o),
            s = Math[n](s / o);
        try {
            t.originalEvent.hasOwnProperty("wheelDelta")
        } catch (d) {
            s = r
        }
        return a.unshift(t, r, l, s),
            (e.event.dispatch || e.event.handle).apply(this, a)
    }
    var i, o, n = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], a = "onwheel"in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"];
    if (e.event.fixHooks)
        for (var r = n.length; r; )
            e.event.fixHooks[n[--r]] = e.event.mouseHooks;
    e.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var e = a.length; e; )
                    this.addEventListener(a[--e], t, !1);
            else
                this.onmousewheel = t
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = a.length; e; )
                    this.removeEventListener(a[--e], t, !1);
            else
                this.onmousewheel = null
        }
    },
        e.fn.extend({
            mousewheel: function(e) {
                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
            },
            unmousewheel: function(e) {
                return this.unbind("mousewheel", e)
            }
        })
}),
    function(e, t, i, o) {
        var n = i("html")
            , a = i(e)
            , r = i(t)
            , l = i.fancybox = function() {
            l.open.apply(this, arguments)
        }
            , s = navigator.userAgent.match(/msie/i)
            , c = null
            , d = t.createTouch !== o
            , h = function(e) {
            return e && e.hasOwnProperty && e instanceof i
        }
            , p = function(e) {
            return e && "string" === i.type(e)
        }
            , f = function(e) {
            return p(e) && 0 < e.indexOf("%")
        }
            , u = function(e, t) {
            var i = parseInt(e, 10) || 0;
            return t && f(e) && (i *= l.getViewport()[t] / 100),
                Math.ceil(i)
        }
            , g = function(e, t) {
            return u(e, t) + "px"
        };
        i.extend(l, {
            version: "2.1.5",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                pixelRatio: 1,
                autoSize: !0,
                autoHeight: !1,
                autoWidth: !1,
                autoResize: !0,
                autoCenter: !d,
                fitToView: !0,
                aspectRatio: !1,
                topRatio: .5,
                leftRatio: .5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: !0,
                closeBtn: !0,
                closeClick: !1,
                nextClick: !1,
                mouseWheel: !0,
                autoPlay: !1,
                playSpeed: 3e3,
                preload: 3,
                modal: !1,
                loop: !0,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": !0
                    }
                },
                iframe: {
                    scrolling: "auto",
                    preload: !0
                },
                swf: {
                    wmode: "transparent",
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                },
                keys: {
                    next: {
                        13: "left",
                        34: "up",
                        39: "left",
                        40: "up"
                    },
                    prev: {
                        8: "right",
                        33: "down",
                        37: "right",
                        38: "down"
                    },
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {
                    next: "left",
                    prev: "right"
                },
                scrollOutside: !0,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (s ? ' allowtransparency="true"' : "") + "></iframe>",
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: !0,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: !0,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: !0,
                    title: !0
                },
                onCancel: i.noop,
                beforeLoad: i.noop,
                afterLoad: i.noop,
                beforeShow: i.noop,
                afterShow: i.noop,
                beforeChange: i.noop,
                beforeClose: i.noop,
                afterClose: i.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: !1
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(e, t) {
                if (e && (i.isPlainObject(t) || (t = {}),
                !1 !== l.close(!0)))
                    return i.isArray(e) || (e = h(e) ? i(e).get() : [e]),
                        i.each(e, function(n, a) {
                            var r, s, c, d, f, u = {};
                            "object" === i.type(a) && (a.nodeType && (a = i(a)),
                                h(a) ? (u = {
                                    href: a.data("fancybox-href") || a.attr("href"),
                                    title: i("<div/>").text(a.data("fancybox-title") || a.attr("title")).html(),
                                    isDom: !0,
                                    element: a
                                },
                                i.metadata && i.extend(!0, u, a.metadata())) : u = a),
                                r = t.href || u.href || (p(a) ? a : null),
                                s = t.title !== o ? t.title : u.title || "",
                                d = (c = t.content || u.content) ? "html" : t.type || u.type,
                            !d && u.isDom && (d = a.data("fancybox-type"),
                            d || (d = (d = a.prop("class").match(/fancybox\.(\w+)/)) ? d[1] : null)),
                            p(r) && (d || (l.isImage(r) ? d = "image" : l.isSWF(r) ? d = "swf" : "#" === r.charAt(0) ? d = "inline" : p(a) && (d = "html",
                                c = a)),
                            "ajax" === d && (f = r.split(/\s+/, 2),
                                r = f.shift(),
                                f = f.shift())),
                            c || ("inline" === d ? r ? c = i(p(r) ? r.replace(/.*(?=#[^\s]+$)/, "") : r) : u.isDom && (c = a) : "html" === d ? c = r : d || r || !u.isDom || (d = "inline",
                                c = a)),
                                i.extend(u, {
                                    href: r,
                                    type: d,
                                    content: c,
                                    title: s,
                                    selector: f
                                }),
                                e[n] = u
                        }),
                        l.opts = i.extend(!0, {}, l.defaults, t),
                    t.keys !== o && (l.opts.keys = !!t.keys && i.extend({}, l.defaults.keys, t.keys)),
                        l.group = e,
                        l._start(l.opts.index)
            },
            cancel: function() {
                var e = l.coming;
                e && !1 === l.trigger("onCancel") || (l.hideLoading(),
                e && (l.ajaxLoad && l.ajaxLoad.abort(),
                    l.ajaxLoad = null,
                l.imgPreload && (l.imgPreload.onload = l.imgPreload.onerror = null),
                e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(),
                    l.coming = null,
                l.current || l._afterZoomOut(e)))
            },
            close: function(e) {
                l.cancel(),
                !1 !== l.trigger("beforeClose") && (l.unbindEvents(),
                l.isActive && (l.isOpen && !0 !== e ? (l.isOpen = l.isOpened = !1,
                    l.isClosing = !0,
                    i(".fancybox-item, .fancybox-nav").remove(),
                    l.wrap.stop(!0, !0).removeClass("fancybox-opened"),
                    l.transitions[l.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(),
                    l._afterZoomOut())))
            },
            play: function(e) {
                var t = function() {
                    clearTimeout(l.player.timer)
                }
                    , i = function() {
                    t(),
                    l.current && l.player.isActive && (l.player.timer = setTimeout(l.next, l.current.playSpeed))
                }
                    , o = function() {
                    t(),
                        r.unbind(".player"),
                        l.player.isActive = !1,
                        l.trigger("onPlayEnd")
                };
                !0 === e || !l.player.isActive && !1 !== e ? l.current && (l.current.loop || l.current.index < l.group.length - 1) && (l.player.isActive = !0,
                    r.bind({
                        "onCancel.player beforeClose.player": o,
                        "onUpdate.player": i,
                        "beforeLoad.player": t
                    }),
                    i(),
                    l.trigger("onPlayStart")) : o()
            },
            next: function(e) {
                var t = l.current;
                t && (p(e) || (e = t.direction.next),
                    l.jumpto(t.index + 1, e, "next"))
            },
            prev: function(e) {
                var t = l.current;
                t && (p(e) || (e = t.direction.prev),
                    l.jumpto(t.index - 1, e, "prev"))
            },
            jumpto: function(e, t, i) {
                var n = l.current;
                n && (e = u(e),
                    l.direction = t || n.direction[e >= n.index ? "next" : "prev"],
                    l.router = i || "jumpto",
                n.loop && (0 > e && (e = n.group.length + e % n.group.length),
                    e %= n.group.length),
                n.group[e] !== o && (l.cancel(),
                    l._start(e)))
            },
            reposition: function(e, t) {
                var o, n = l.current, a = n ? n.wrap : null;
                a && (o = l._getPosition(t),
                    e && "scroll" === e.type ? (delete o.position,
                        a.stop(!0, !0).animate(o, 200)) : (a.css(o),
                        n.pos = i.extend({}, n.dim, o)))
            },
            update: function(e) {
                var t = e && e.originalEvent && e.originalEvent.type
                    , i = !t || "orientationchange" === t;
                i && (clearTimeout(c),
                    c = null),
                l.isOpen && !c && (c = setTimeout(function() {
                    var o = l.current;
                    o && !l.isClosing && (l.wrap.removeClass("fancybox-tmp"),
                    (i || "load" === t || "resize" === t && o.autoResize) && l._setDimension(),
                    "scroll" === t && o.canShrink || l.reposition(e),
                        l.trigger("onUpdate"),
                        c = null)
                }, i && !d ? 0 : 300))
            },
            toggle: function(e) {
                l.isOpen && (l.current.fitToView = "boolean" === i.type(e) ? e : !l.current.fitToView,
                d && (l.wrap.removeAttr("style").addClass("fancybox-tmp"),
                    l.trigger("onUpdate")),
                    l.update())
            },
            hideLoading: function() {
                r.unbind(".loading"),
                    i("#fancybox-loading").remove()
            },
            showLoading: function() {
                var e, t;
                l.hideLoading(),
                    e = i('<div id="fancybox-loading"><div></div></div>').click(l.cancel).appendTo("body"),
                    r.bind("keydown.loading", function(e) {
                        27 === (e.which || e.keyCode) && (e.preventDefault(),
                            l.cancel())
                    }),
                l.defaults.fixed || (t = l.getViewport(),
                    e.css({
                        position: "absolute",
                        top: .5 * t.h + t.y,
                        left: .5 * t.w + t.x
                    })),
                    l.trigger("onLoading")
            },
            getViewport: function() {
                var t = l.current && l.current.locked || !1
                    , i = {
                    x: a.scrollLeft(),
                    y: a.scrollTop()
                };
                return t && t.length ? (i.w = t[0].clientWidth,
                    i.h = t[0].clientHeight) : (i.w = d && e.innerWidth ? e.innerWidth : a.width(),
                    i.h = d && e.innerHeight ? e.innerHeight : a.height()),
                    i
            },
            unbindEvents: function() {
                l.wrap && h(l.wrap) && l.wrap.unbind(".fb"),
                    r.unbind(".fb"),
                    a.unbind(".fb")
            },
            bindEvents: function() {
                var e, t = l.current;
                t && (a.bind("orientationchange.fb" + (d ? "" : " resize.fb") + (t.autoCenter && !t.locked ? " scroll.fb" : ""), l.update),
                (e = t.keys) && r.bind("keydown.fb", function(n) {
                    var a = n.which || n.keyCode
                        , r = n.target || n.srcElement;
                    return (27 !== a || !l.coming) && void (n.ctrlKey || n.altKey || n.shiftKey || n.metaKey || r && (r.type || i(r).is("[contenteditable]")) || i.each(e, function(e, r) {
                        return 1 < t.group.length && r[a] !== o ? (l[e](r[a]),
                            n.preventDefault(),
                            !1) : -1 < i.inArray(a, r) ? (l[e](),
                            n.preventDefault(),
                            !1) : void 0
                    }))
                }),
                i.fn.mousewheel && t.mouseWheel && l.wrap.bind("mousewheel.fb", function(e, o, n, a) {
                    for (var r = i(e.target || null), s = !1; r.length && !(s || r.is(".fancybox-skin") || r.is(".fancybox-wrap")); )
                        s = r[0] && !(r[0].style.overflow && "hidden" === r[0].style.overflow) && (r[0].clientWidth && r[0].scrollWidth > r[0].clientWidth || r[0].clientHeight && r[0].scrollHeight > r[0].clientHeight),
                            r = i(r).parent();
                    0 !== o && !s && 1 < l.group.length && !t.canShrink && (0 < a || 0 < n ? l.prev(0 < a ? "down" : "left") : (0 > a || 0 > n) && l.next(0 > a ? "up" : "right"),
                        e.preventDefault())
                }))
            },
            trigger: function(e, t) {
                var o, n = t || l.coming || l.current;
                if (n) {
                    if (i.isFunction(n[e]) && (o = n[e].apply(n, Array.prototype.slice.call(arguments, 1))),
                    !1 === o)
                        return !1;
                    n.helpers && i.each(n.helpers, function(t, o) {
                        o && l.helpers[t] && i.isFunction(l.helpers[t][e]) && l.helpers[t][e](i.extend(!0, {}, l.helpers[t].defaults, o), n)
                    })
                }
                r.trigger(e)
            },
            isImage: function(e) {
                return p(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
            },
            isSWF: function(e) {
                return p(e) && e.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function(e) {
                var t, o, n = {};
                if (e = u(e),
                    t = l.group[e] || null,
                    !t)
                    return !1;
                if (n = i.extend(!0, {}, l.opts, t),
                    t = n.margin,
                    o = n.padding,
                "number" === i.type(t) && (n.margin = [t, t, t, t]),
                "number" === i.type(o) && (n.padding = [o, o, o, o]),
                n.modal && i.extend(!0, n, {
                    closeBtn: !1,
                    closeClick: !1,
                    nextClick: !1,
                    arrows: !1,
                    mouseWheel: !1,
                    keys: null,
                    helpers: {
                        overlay: {
                            closeClick: !1
                        }
                    }
                }),
                n.autoSize && (n.autoWidth = n.autoHeight = !0),
                "auto" === n.width && (n.autoWidth = !0),
                "auto" === n.height && (n.autoHeight = !0),
                    n.group = l.group,
                    n.index = e,
                    l.coming = n,
                !1 === l.trigger("beforeLoad"))
                    l.coming = null;
                else {
                    if (o = n.type,
                        t = n.href,
                        !o)
                        return l.coming = null,
                        !(!l.current || !l.router || "jumpto" === l.router) && (l.current.index = e,
                            l[l.router](l.direction));
                    if (l.isActive = !0,
                    "image" !== o && "swf" !== o || (n.autoHeight = n.autoWidth = !1,
                        n.scrolling = "visible"),
                    "image" === o && (n.aspectRatio = !0),
                    "iframe" === o && d && (n.scrolling = "scroll"),
                        n.wrap = i(n.tpl.wrap).addClass("fancybox-" + (d ? "mobile" : "desktop") + " fancybox-type-" + o + " fancybox-tmp " + n.wrapCSS).appendTo(n.parent || "body"),
                        i.extend(n, {
                            skin: i(".fancybox-skin", n.wrap),
                            outer: i(".fancybox-outer", n.wrap),
                            inner: i(".fancybox-inner", n.wrap)
                        }),
                        i.each(["Top", "Right", "Bottom", "Left"], function(e, t) {
                            n.skin.css("padding" + t, g(n.padding[e]))
                        }),
                        l.trigger("onReady"),
                    "inline" === o || "html" === o) {
                        if (!n.content || !n.content.length)
                            return l._error("content")
                    } else if (!t)
                        return l._error("href");
                    "image" === o ? l._loadImage() : "ajax" === o ? l._loadAjax() : "iframe" === o ? l._loadIframe() : l._afterLoad()
                }
            },
            _error: function(e) {
                i.extend(l.coming, {
                    type: "html",
                    autoWidth: !0,
                    autoHeight: !0,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: e,
                    content: l.coming.tpl.error
                }),
                    l._afterLoad()
            },
            _loadImage: function() {
                var e = l.imgPreload = new Image;
                e.onload = function() {
                    this.onload = this.onerror = null,
                        l.coming.width = this.width / l.opts.pixelRatio,
                        l.coming.height = this.height / l.opts.pixelRatio,
                        l._afterLoad()
                }
                    ,
                    e.onerror = function() {
                        this.onload = this.onerror = null,
                            l._error("image")
                    }
                    ,
                    e.src = l.coming.href,
                !0 !== e.complete && l.showLoading()
            },
            _loadAjax: function() {
                var e = l.coming;
                l.showLoading(),
                    l.ajaxLoad = i.ajax(i.extend({}, e.ajax, {
                        url: e.href,
                        error: function(e, t) {
                            l.coming && "abort" !== t ? l._error("ajax", e) : l.hideLoading()
                        },
                        success: function(t, i) {
                            "success" === i && (e.content = t,
                                l._afterLoad())
                        }
                    }))
            },
            _loadIframe: function() {
                var e = l.coming
                    , t = i(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", d ? "auto" : e.iframe.scrolling).attr("src", e.href);
                i(e.wrap).bind("onReset", function() {
                    try {
                        i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                    } catch (e) {}
                }),
                e.iframe.preload && (l.showLoading(),
                    t.one("load", function() {
                        i(this).data("ready", 1),
                        d || i(this).bind("load.fb", l.update),
                            i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),
                            l._afterLoad()
                    })),
                    e.content = t.appendTo(e.inner),
                e.iframe.preload || l._afterLoad()
            },
            _preloadImages: function() {
                var e, t, i = l.group, o = l.current, n = i.length, a = o.preload ? Math.min(o.preload, n - 1) : 0;
                for (t = 1; t <= a; t += 1)
                    e = i[(o.index + t) % n],
                    "image" === e.type && e.href && ((new Image).src = e.href)
            },
            _afterLoad: function() {
                var e, t, o, n, a, r = l.coming, s = l.current;
                if (l.hideLoading(),
                r && !1 !== l.isActive)
                    if (!1 === l.trigger("afterLoad", r, s))
                        r.wrap.stop(!0).trigger("onReset").remove(),
                            l.coming = null;
                    else {
                        switch (s && (l.trigger("beforeChange", s),
                            s.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),
                            l.unbindEvents(),
                            e = r.content,
                            t = r.type,
                            o = r.scrolling,
                            i.extend(l, {
                                wrap: r.wrap,
                                skin: r.skin,
                                outer: r.outer,
                                inner: r.inner,
                                current: r,
                                previous: s
                            }),
                            n = r.href,
                            t) {
                            case "inline":
                            case "ajax":
                            case "html":
                                r.selector ? e = i("<div>").html(e).find(r.selector) : h(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", i('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),
                                    e = e.show().detach(),
                                    r.wrap.bind("onReset", function() {
                                        i(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                                    }));
                                break;
                            case "image":
                                e = r.tpl.image.replace(/\{href\}/g, n);
                                break;
                            case "swf":
                                e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + n + '"></param>',
                                    a = "",
                                    i.each(r.swf, function(t, i) {
                                        e += '<param name="' + t + '" value="' + i + '"></param>',
                                            a += " " + t + '="' + i + '"'
                                    }),
                                    e += '<embed src="' + n + '" type="application/x-shockwave-flash" width="100%" height="100%"' + a + "></embed></object>"
                        }
                        h(e) && e.parent().is(r.inner) || r.inner.append(e),
                            l.trigger("beforeShow"),
                            r.inner.css("overflow", "yes" === o ? "scroll" : "no" === o ? "hidden" : o),
                            l._setDimension(),
                            l.reposition(),
                            l.isOpen = !1,
                            l.coming = null,
                            l.bindEvents(),
                            l.isOpened ? s.prevMethod && l.transitions[s.prevMethod]() : i(".fancybox-wrap").not(r.wrap).stop(!0).trigger("onReset").remove(),
                            l.transitions[l.isOpened ? r.nextMethod : r.openMethod](),
                            l._preloadImages()
                    }
            },
            _setDimension: function() {
                var e, t, o, n, a, r, s, c, d, h = l.getViewport(), p = 0, m = !1, y = !1, m = l.wrap, w = l.skin, v = l.inner, b = l.current, y = b.width, x = b.height, k = b.minWidth, C = b.minHeight, M = b.maxWidth, S = b.maxHeight, O = b.scrolling, j = b.scrollOutside ? b.scrollbarWidth : 0, P = b.margin, T = u(P[1] + P[3]), _ = u(P[0] + P[2]);
                if (m.add(w).add(v).width("auto").height("auto").removeClass("fancybox-tmp"),
                    P = u(w.outerWidth(!0) - w.width()),
                    e = u(w.outerHeight(!0) - w.height()),
                    t = T + P,
                    o = _ + e,
                    n = f(y) ? (h.w - t) * u(y) / 100 : y,
                    a = f(x) ? (h.h - o) * u(x) / 100 : x,
                "iframe" === b.type) {
                    if (d = b.content,
                    b.autoHeight && 1 === d.data("ready"))
                        try {
                            d[0].contentWindow.document.location && (v.width(n).height(9999),
                                r = d.contents().find("body"),
                            j && r.css("overflow-x", "hidden"),
                                a = r.outerHeight(!0))
                        } catch (E) {}
                } else
                    (b.autoWidth || b.autoHeight) && (v.addClass("fancybox-tmp"),
                    b.autoWidth || v.width(n),
                    b.autoHeight || v.height(a),
                    b.autoWidth && (n = v.width()),
                    b.autoHeight && (a = v.height()),
                        v.removeClass("fancybox-tmp"));
                if (y = u(n),
                    x = u(a),
                    c = n / a,
                    k = u(f(k) ? u(k, "w") - t : k),
                    M = u(f(M) ? u(M, "w") - t : M),
                    C = u(f(C) ? u(C, "h") - o : C),
                    S = u(f(S) ? u(S, "h") - o : S),
                    r = M,
                    s = S,
                b.fitToView && (M = Math.min(h.w - t, M),
                    S = Math.min(h.h - o, S)),
                    t = h.w - T,
                    _ = h.h - _,
                    b.aspectRatio ? (y > M && (y = M,
                        x = u(y / c)),
                    x > S && (x = S,
                        y = u(x * c)),
                    y < k && (y = k,
                        x = u(y / c)),
                    x < C && (x = C,
                        y = u(x * c))) : (y = Math.max(k, Math.min(y, M)),
                    b.autoHeight && "iframe" !== b.type && (v.width(y),
                        x = v.height()),
                        x = Math.max(C, Math.min(x, S))),
                    b.fitToView)
                    if (v.width(y).height(x),
                        m.width(y + P),
                        h = m.width(),
                        T = m.height(),
                        b.aspectRatio)
                        for (; (h > t || T > _) && y > k && x > C && !(19 < p++); )
                            x = Math.max(C, Math.min(S, x - 10)),
                                y = u(x * c),
                            y < k && (y = k,
                                x = u(y / c)),
                            y > M && (y = M,
                                x = u(y / c)),
                                v.width(y).height(x),
                                m.width(y + P),
                                h = m.width(),
                                T = m.height();
                    else
                        y = Math.max(k, Math.min(y, y - (h - t))),
                            x = Math.max(C, Math.min(x, x - (T - _)));
                j && "auto" === O && x < a && y + P + j < t && (y += j),
                    v.width(y).height(x),
                    m.width(y + P),
                    h = m.width(),
                    T = m.height(),
                    m = (h > t || T > _) && y > k && x > C,
                    y = b.aspectRatio ? y < r && x < s && y < n && x < a : (y < r || x < s) && (y < n || x < a),
                    i.extend(b, {
                        dim: {
                            width: g(h),
                            height: g(T)
                        },
                        origWidth: n,
                        origHeight: a,
                        canShrink: m,
                        canExpand: y,
                        wPadding: P,
                        hPadding: e,
                        wrapSpace: T - w.outerHeight(!0),
                        skinSpace: w.height() - x
                    }),
                !d && b.autoHeight && x > C && x < S && !y && v.height("auto")
            },
            _getPosition: function(e) {
                var t = l.current
                    , i = l.getViewport()
                    , o = t.margin
                    , n = l.wrap.width() + o[1] + o[3]
                    , a = l.wrap.height() + o[0] + o[2]
                    , o = {
                    position: "absolute",
                    top: o[0],
                    left: o[3]
                };
                return t.autoCenter && t.fixed && !e && a <= i.h && n <= i.w ? o.position = "fixed" : t.locked || (o.top += i.y,
                    o.left += i.x),
                    o.top = g(Math.max(o.top, o.top + (i.h - a) * t.topRatio)),
                    o.left = g(Math.max(o.left, o.left + (i.w - n) * t.leftRatio)),
                    o
            },
            _afterZoomIn: function() {
                var e = l.current;
                e && (l.isOpen = l.isOpened = !0,
                    l.wrap.css("overflow", "visible").addClass("fancybox-opened"),
                    l.update(),
                (e.closeClick || e.nextClick && 1 < l.group.length) && l.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                    i(t.target).is("a") || i(t.target).parent().is("a") || (t.preventDefault(),
                        l[e.closeClick ? "close" : "next"]())
                }),
                e.closeBtn && i(e.tpl.closeBtn).appendTo(l.skin).bind("click.fb", function(e) {
                    e.preventDefault(),
                        l.close()
                }),
                e.arrows && 1 < l.group.length && ((e.loop || 0 < e.index) && i(e.tpl.prev).appendTo(l.outer).bind("click.fb", l.prev),
                (e.loop || e.index < l.group.length - 1) && i(e.tpl.next).appendTo(l.outer).bind("click.fb", l.next)),
                    l.trigger("afterShow"),
                    e.loop || e.index !== e.group.length - 1 ? l.opts.autoPlay && !l.player.isActive && (l.opts.autoPlay = !1,
                        l.play(!0)) : l.play(!1))
            },
            _afterZoomOut: function(e) {
                e = e || l.current,
                    i(".fancybox-wrap").trigger("onReset").remove(),
                    i.extend(l, {
                        group: {},
                        opts: {},
                        router: !1,
                        current: null,
                        isActive: !1,
                        isOpened: !1,
                        isOpen: !1,
                        isClosing: !1,
                        wrap: null,
                        skin: null,
                        outer: null,
                        inner: null
                    }),
                    l.trigger("afterClose", e)
            }
        }),
            l.transitions = {
                getOrigPosition: function() {
                    var e = l.current
                        , t = e.element
                        , i = e.orig
                        , o = {}
                        , n = 50
                        , a = 50
                        , r = e.hPadding
                        , s = e.wPadding
                        , c = l.getViewport();
                    return !i && e.isDom && t.is(":visible") && (i = t.find("img:first"),
                    i.length || (i = t)),
                        h(i) ? (o = i.offset(),
                        i.is("img") && (n = i.outerWidth(),
                            a = i.outerHeight())) : (o.top = c.y + (c.h - a) * e.topRatio,
                            o.left = c.x + (c.w - n) * e.leftRatio),
                    ("fixed" === l.wrap.css("position") || e.locked) && (o.top -= c.y,
                        o.left -= c.x),
                        o = {
                            top: g(o.top - r * e.topRatio),
                            left: g(o.left - s * e.leftRatio),
                            width: g(n + s),
                            height: g(a + r)
                        }
                },
                step: function(e, t) {
                    var i, o, n = t.prop;
                    o = l.current;
                    var a = o.wrapSpace
                        , r = o.skinSpace;
                    "width" !== n && "height" !== n || (i = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start),
                    l.isClosing && (i = 1 - i),
                        o = "width" === n ? o.wPadding : o.hPadding,
                        o = e - o,
                        l.skin[n](u("width" === n ? o : o - a * i)),
                        l.inner[n](u("width" === n ? o : o - a * i - r * i)))
                },
                zoomIn: function() {
                    var e = l.current
                        , t = e.pos
                        , o = e.openEffect
                        , n = "elastic" === o
                        , a = i.extend({
                        opacity: 1
                    }, t);
                    delete a.position,
                        n ? (t = this.getOrigPosition(),
                        e.openOpacity && (t.opacity = .1)) : "fade" === o && (t.opacity = .1),
                        l.wrap.css(t).animate(a, {
                            duration: "none" === o ? 0 : e.openSpeed,
                            easing: e.openEasing,
                            step: n ? this.step : null,
                            complete: l._afterZoomIn
                        })
                },
                zoomOut: function() {
                    var e = l.current
                        , t = e.closeEffect
                        , i = "elastic" === t
                        , o = {
                        opacity: .1
                    };
                    i && (o = this.getOrigPosition(),
                    e.closeOpacity && (o.opacity = .1)),
                        l.wrap.animate(o, {
                            duration: "none" === t ? 0 : e.closeSpeed,
                            easing: e.closeEasing,
                            step: i ? this.step : null,
                            complete: l._afterZoomOut
                        })
                },
                changeIn: function() {
                    var e, t = l.current, i = t.nextEffect, o = t.pos, n = {
                        opacity: 1
                    }, a = l.direction;
                    o.opacity = .1,
                    "elastic" === i && (e = "down" === a || "up" === a ? "top" : "left",
                        "down" === a || "right" === a ? (o[e] = g(u(o[e]) - 200),
                            n[e] = "+=200px") : (o[e] = g(u(o[e]) + 200),
                            n[e] = "-=200px")),
                        "none" === i ? l._afterZoomIn() : l.wrap.css(o).animate(n, {
                            duration: t.nextSpeed,
                            easing: t.nextEasing,
                            complete: l._afterZoomIn
                        })
                },
                changeOut: function() {
                    var e = l.previous
                        , t = e.prevEffect
                        , o = {
                        opacity: .1
                    }
                        , n = l.direction;
                    "elastic" === t && (o["down" === n || "up" === n ? "top" : "left"] = ("up" === n || "left" === n ? "-" : "+") + "=200px"),
                        e.wrap.animate(o, {
                            duration: "none" === t ? 0 : e.prevSpeed,
                            easing: e.prevEasing,
                            complete: function() {
                                i(this).trigger("onReset").remove()
                            }
                        })
                }
            },
            l.helpers.overlay = {
                defaults: {
                    closeClick: !0,
                    speedOut: 200,
                    showEarly: !0,
                    css: {},
                    locked: !d,
                    fixed: !0
                },
                overlay: null,
                fixed: !1,
                el: i("html"),
                create: function(e) {
                    var t;
                    e = i.extend({}, this.defaults, e),
                    this.overlay && this.close(),
                        t = l.coming ? l.coming.parent : e.parent,
                        this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(t && t.lenth ? t : "body"),
                        this.fixed = !1,
                    e.fixed && l.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"),
                        this.fixed = !0)
                },
                open: function(e) {
                    var t = this;
                    e = i.extend({}, this.defaults, e),
                        this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e),
                    this.fixed || (a.bind("resize.overlay", i.proxy(this.update, this)),
                        this.update()),
                    e.closeClick && this.overlay.bind("click.overlay", function(e) {
                        if (i(e.target).hasClass("fancybox-overlay"))
                            return l.isActive ? l.close() : t.close(),
                                !1
                    }),
                        this.overlay.css(e.css).show()
                },
                close: function() {
                    a.unbind("resize.overlay"),
                    this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"),
                        this.el.removeClass("fancybox-lock"),
                        a.scrollTop(this.scrollV).scrollLeft(this.scrollH)),
                        i(".fancybox-overlay").remove().hide(),
                        i.extend(this, {
                            overlay: null,
                            fixed: !1
                        })
                },
                update: function() {
                    var e, i = "100%";
                    this.overlay.width(i).height("100%"),
                        s ? (e = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth),
                        r.width() > e && (i = r.width())) : r.width() > a.width() && (i = r.width()),
                        this.overlay.width(i).height(r.height())
                },
                onReady: function(e, t) {
                    var o = this.overlay;
                    i(".fancybox-overlay").stop(!0, !0),
                    o || this.create(e),
                    e.locked && this.fixed && t.fixed && (t.locked = this.overlay.append(t.wrap),
                        t.fixed = !1),
                    !0 === e.showEarly && this.beforeShow.apply(this, arguments)
                },
                beforeShow: function(e, t) {
                    t.locked && !this.el.hasClass("fancybox-lock") && (!1 !== this.fixPosition && i("*").filter(function() {
                        return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
                    }).addClass("fancybox-margin"),
                        this.el.addClass("fancybox-margin"),
                        this.scrollV = a.scrollTop(),
                        this.scrollH = a.scrollLeft(),
                        this.el.addClass("fancybox-lock"),
                        a.scrollTop(this.scrollV).scrollLeft(this.scrollH)),
                        this.open(e)
                },
                onUpdate: function() {
                    this.fixed || this.update()
                },
                afterClose: function(e) {
                    this.overlay && !l.coming && this.overlay.fadeOut(e.speedOut, i.proxy(this.close, this))
                }
            },
            l.helpers.title = {
                defaults: {
                    type: "float",
                    position: "bottom"
                },
                beforeShow: function(e) {
                    var t = l.current
                        , o = t.title
                        , n = e.type;
                    if (i.isFunction(o) && (o = o.call(t.element, t)),
                    p(o) && "" !== i.trim(o)) {
                        switch (t = i('<div class="fancybox-title fancybox-title-' + n + '-wrap">' + o + "</div>"),
                            n) {
                            case "inside":
                                n = l.skin;
                                break;
                            case "outside":
                                n = l.wrap;
                                break;
                            case "over":
                                n = l.inner;
                                break;
                            default:
                                n = l.skin,
                                    t.appendTo("body"),
                                s && t.width(t.width()),
                                    t.wrapInner('<span class="child"></span>'),
                                    l.current.margin[2] += Math.abs(u(t.css("margin-bottom")))
                        }
                        t["top" === e.position ? "prependTo" : "appendTo"](n)
                    }
                }
            },
            i.fn.fancybox = function(e) {
                var t, o = i(this), n = this.selector || "", a = function(a) {
                    var r, s, c = i(this).blur(), d = t;
                    a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || c.is(".fancybox-wrap") || (r = e.groupAttr || "data-fancybox-group",
                        s = c.attr(r),
                    s || (r = "rel",
                        s = c.get(0)[r]),
                    s && "" !== s && "nofollow" !== s && (c = n.length ? i(n) : o,
                        c = c.filter("[" + r + '="' + s + '"]'),
                        d = c.index(this)),
                        e.index = d,
                    !1 !== l.open(c, e) && a.preventDefault())
                };
                return e = e || {},
                    t = e.index || 0,
                    n && !1 !== e.live ? r.undelegate(n, "click.fb-start").delegate(n + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", a) : o.unbind("click.fb-start").bind("click.fb-start", a),
                    this.filter("[data-fancybox-start=1]").trigger("click"),
                    this
            }
            ,
            r.ready(function() {
                var t, a;
                i.scrollbarWidth === o && (i.scrollbarWidth = function() {
                        var e = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body")
                            , t = e.children()
                            , t = t.innerWidth() - t.height(99).innerWidth();
                        return e.remove(),
                            t
                    }
                ),
                i.support.fixedPosition === o && (i.support.fixedPosition = function() {
                    var e = i('<div style="position:fixed;top:20px;"></div>').appendTo("body")
                        , t = 20 === e[0].offsetTop || 15 === e[0].offsetTop;
                    return e.remove(),
                        t
                }()),
                    i.extend(l.defaults, {
                        scrollbarWidth: i.scrollbarWidth(),
                        fixed: i.support.fixedPosition,
                        parent: i("body")
                    }),
                    t = i(e).width(),
                    n.addClass("fancybox-lock-test"),
                    a = i(e).width(),
                    n.removeClass("fancybox-lock-test"),
                    i("<style type='text/css'>.fancybox-margin{margin-right:" + (a - t) + "px;}</style>").appendTo("head")
            })
    }(window, document, jQuery),
    function(e) {
        var t = e.fancybox;
        t.helpers.buttons = {
            defaults: {
                skipSingle: !1,
                position: "top",
                tpl: '<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:;"></a></li></ul></div>'
            },
            list: null,
            buttons: null,
            beforeLoad: function(e, t) {
                return e.skipSingle && t.group.length < 2 ? (t.helpers.buttons = !1,
                    void (t.closeBtn = !0)) : void (t.margin["bottom" === e.position ? 2 : 0] += 30)
            },
            onPlayStart: function() {
                this.buttons && this.buttons.play.attr("title", "Pause slideshow").addClass("btnPlayOn")
            },
            onPlayEnd: function() {
                this.buttons && this.buttons.play.attr("title", "Start slideshow").removeClass("btnPlayOn")
            },
            afterShow: function(i, o) {
                var n = this.buttons;
                n || (this.list = e(i.tpl).addClass(i.position).appendTo("body"),
                    n = {
                        prev: this.list.find(".btnPrev").click(t.prev),
                        next: this.list.find(".btnNext").click(t.next),
                        play: this.list.find(".btnPlay").click(t.play),
                        toggle: this.list.find(".btnToggle").click(t.toggle),
                        close: this.list.find(".btnClose").click(t.close)
                    }),
                    o.index > 0 || o.loop ? n.prev.removeClass("btnDisabled") : n.prev.addClass("btnDisabled"),
                    o.loop || o.index < o.group.length - 1 ? (n.next.removeClass("btnDisabled"),
                        n.play.removeClass("btnDisabled")) : (n.next.addClass("btnDisabled"),
                        n.play.addClass("btnDisabled")),
                    this.buttons = n,
                    this.onUpdate(i, o)
            },
            onUpdate: function(e, t) {
                var i;
                this.buttons && (i = this.buttons.toggle.removeClass("btnDisabled btnToggleOn"),
                    t.canShrink ? i.addClass("btnToggleOn") : t.canExpand || i.addClass("btnDisabled"))
            },
            beforeClose: function() {
                this.list && this.list.remove(),
                    this.list = null,
                    this.buttons = null
            }
        }
    }(jQuery),
    function(e) {
        var t = e.fancybox;
        t.helpers.thumbs = {
            defaults: {
                width: 50,
                height: 50,
                position: "bottom",
                source: function(t) {
                    var i;
                    return t.element && (i = e(t.element).find("img").attr("src")),
                    !i && "image" === t.type && t.href && (i = t.href),
                        i
                }
            },
            wrap: null,
            list: null,
            width: 0,
            init: function(t, i) {
                var o, n = this, a = t.width, r = t.height, l = t.source;
                o = "";
                for (var s = 0; s < i.group.length; s++)
                    o += '<li><a style="width:' + a + "px;height:" + r + 'px;" href="javascript:jQuery.fancybox.jumpto(' + s + ');"></a></li>';
                this.wrap = e('<div id="fancybox-thumbs"></div>').addClass(t.position).appendTo("body"),
                    this.list = e("<ul>" + o + "</ul>").appendTo(this.wrap),
                    e.each(i.group, function(t) {
                        var o = i.group[t]
                            , s = l(o);
                        s && e("<img />").on("load", function() {
                            var i, o, l, s = this.width, c = this.height;
                            n.list && s && c && (i = s / a,
                                o = c / r,
                                l = n.list.children().eq(t).find("a"),
                            i >= 1 && o >= 1 && (i > o ? (s = Math.floor(s / o),
                                c = r) : (s = a,
                                c = Math.floor(c / i))),
                                e(this).css({
                                    width: s,
                                    height: c,
                                    top: Math.floor(r / 2 - c / 2),
                                    left: Math.floor(a / 2 - s / 2)
                                }),
                                l.width(a).height(r),
                                e(this).hide().appendTo(l).fadeIn(300))
                        }).attr("src", s).attr("title", o.title)
                    }),
                    this.width = this.list.children().eq(0).outerWidth(!0),
                    this.list.width(this.width * (i.group.length + 1)).css("left", Math.floor(.5 * e(window).width() - (i.index * this.width + .5 * this.width)))
            },
            beforeLoad: function(e, t) {
                return t.group.length < 2 ? void (t.helpers.thumbs = !1) : void (t.margin["top" === e.position ? 0 : 2] += e.height + 15)
            },
            afterShow: function(e, t) {
                this.list ? this.onUpdate(e, t) : this.init(e, t),
                    this.list.children().removeClass("active").eq(t.index).addClass("active")
            },
            onUpdate: function(t, i) {
                this.list && this.list.stop(!0).animate({
                    left: Math.floor(.5 * e(window).width() - (i.index * this.width + .5 * this.width))
                }, 150)
            },
            beforeClose: function() {
                this.wrap && this.wrap.remove(),
                    this.wrap = null,
                    this.list = null,
                    this.width = 0
            }
        }
    }(jQuery),
    function(e) {
        "use strict";
        var t = e.fancybox
            , i = function(t, i, o) {
            return o = o || "",
            "object" === e.type(o) && (o = e.param(o, !0)),
                e.each(i, function(e, i) {
                    t = t.replace("$" + e, i || "")
                }),
            o.length && (t += (t.indexOf("?") > 0 ? "&" : "?") + o),
                t
        };
        t.helpers.media = {
            defaults: {
                youtube: {
                    matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
                    params: {
                        autoplay: 1,
                        autohide: 1,
                        fs: 1,
                        rel: 0,
                        hd: 1,
                        wmode: "opaque",
                        enablejsapi: 1,
                        ps: "docs",
                        controls: 1
                    },
                    type: "iframe",
                    url: "//www.youtube.com/embed/$3"
                },
                vimeo: {
                    matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
                    params: {
                        autoplay: 1,
                        hd: 1,
                        show_title: 1,
                        show_byline: 1,
                        show_portrait: 0,
                        fullscreen: 1
                    },
                    type: "iframe",
                    url: "//player.vimeo.com/video/$1"
                },
                metacafe: {
                    matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
                    params: {
                        autoPlay: "yes"
                    },
                    type: "swf",
                    url: function(t, i, o) {
                        return o.swf.flashVars = "playerVars=" + e.param(i, !0),
                        "//www.metacafe.com/fplayer/" + t[1] + "/.swf"
                    }
                },
                dailymotion: {
                    matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                    params: {
                        additionalInfos: 0,
                        autoStart: 1
                    },
                    type: "swf",
                    url: "//www.dailymotion.com/swf/video/$1"
                },
                twitvid: {
                    matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
                    params: {
                        autoplay: 0
                    },
                    type: "iframe",
                    url: "//www.twitvid.com/embed.php?guid=$1"
                },
                twitpic: {
                    matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
                    type: "image",
                    url: "//twitpic.com/show/full/$1/"
                },
                instagram: {
                    matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                    type: "image",
                    url: "//$1/p/$2/media/?size=l"
                },
                google_maps: {
                    matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
                    type: "iframe",
                    url: function(e) {
                        return "//maps.google." + e[1] + "/" + e[3] + e[4] + "&output=" + (e[4].indexOf("layer=c") > 0 ? "svembed" : "embed")
                    }
                }
            },
            beforeLoad: function(t, o) {
                var n, a, r, l, s = o.href || "", c = !1;
                for (n in t)
                    if (t.hasOwnProperty(n) && (a = t[n],
                        r = s.match(a.matcher))) {
                        c = a.type,
                            l = e.extend(!0, {}, a.params, o[n] || (e.isPlainObject(t[n]) ? t[n].params : null)),
                            s = "function" === e.type(a.url) ? a.url.call(this, r, l, o) : i(a.url, r, l);
                        break
                    }
                c && (o.href = s,
                    o.type = c,
                    o.autoHeight = !1)
            }
        }
    }(jQuery);

"use strict";
jQuery(window.document).ready(function() {
    jQuery(".fancybox").fancybox({
        minWidth: 0,
        minHeight: 0,
        preload: 0,
        modal: !1,
        loop: !1,
        openEffect: "none",
        closeEffect: "none",
        nextEffect: "none",
        prevEffect: "none",
        openSpeed: 0,
        closeSpeed: 0,
        nextSpeed: 0,
        prevSpeed: 0
    })
});
