"use strict";
angular.module("angularTypewrite", []), angular.module("angularTypewrite").directive("typewrite", ["$timeout", function (a) {
    function b(b, c, d) {
        function e() {
            p = a(function () {
                f(c, 0, 0, l)
            }, q)
        }

        function f(c, d, e, i) {
            return d <= i.length ? (k(c, i.substring(0, d) + u), d++, void(p = a(function () {
                f(c, d, e, i)
            }, r))) : (d--, void(m && e < m.length - 1 ? p = a(function () {
                h(c, d, e, m[e])
            }, q) : (b.callbackFn && b.callbackFn(), g(c, d, l))))
        }

        function g(a, b) {
            var c = a.text().substring(0, a.text().length - 1);
            v ? t ? (o = "-webkit-animation:blink-it steps(1) " + t + " infinite;-moz-animation:blink-it steps(1) " + t + " infinite -ms-animation:blink-it steps(1) " + t + " infinite;-o-animation:blink-it steps(1) " + t + " infinite; animation:blink-it steps(1) " + t + " infinite;", k(a, c.substring(0, b) + '<span class="blink" style="' + o + '">' + u + "</span>")) : k(a, c.substring(0, b) + '<span class="blink">' + u + "</span>") : k(a, c.substring(0, b))
        }

        function h(b, c, d, e) {
            return c > 0 ? (e = e.slice(0, -1), k(b, e + u), c--, void(p = a(function () {
                h(b, c, d, e)
            }, s))) : (d++, e = m[d], p = a(function () {
                f(b, 0, d, e)
            }, r), void 0)
        }

        function i(a) {
            return "string" == typeof a ? "s" === a.charAt(a.length - 1) ? 1e3 * parseInt(a.substring(0, a.length - 1), 10) : +a : !1
        }

        function j(a) {
            return "string" == typeof a ? "s" === a.charAt(a.length - 1) ? a : parseInt(a.substring(0, a.length - 1), 10) / 1e3 : void 0
        }

        function k(a, b) {
            return "INPUT" === a.prop("nodeName").toUpperCase() ? a.val(b) : a.html(b)
        }

        var l, m, n, o, p = null, q = d.initialDelay ? i(d.initialDelay) : 200, r = d.typeDelay || 200, s = d.eraseDelay || r / 2, t = d.blinkDelay ? j(d.blinkDelay) : !1, u = d.cursor || "|", v = "undefined" != typeof d.blinkCursor ? "true" === d.blinkCursor : !0;
        b.text && (b.text instanceof Array ? (m = b.text, l = m[0]) : l = b.text), ("undefined" == typeof b.start || b.start) && e(), b.$on("$destroy", function () {
            p && a.cancel(p)
        }), b.$watch("start", function (a) {
            !n && a && (n = !n, e())
        })
    }

    return {restrict: "A", link: b, scope: {text: "=", callbackFn: "&", start: "="}}
}]);
