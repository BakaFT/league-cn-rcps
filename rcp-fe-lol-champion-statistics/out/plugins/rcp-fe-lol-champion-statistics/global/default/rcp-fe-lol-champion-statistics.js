﻿(() => {
    "use strict";
    var e = [, (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return function() {
                    Object.keys(r).forEach((e => {
                        Object.keys(r[e]).forEach((t => {
                            const n = r[e][t],
                                c = {
                                    pos: e,
                                    rate: n
                                };
                            o[t] ? o[t].push(c) : o[t] = [c]
                        }))
                    })), Object.keys(o).forEach((e => {
                        o[e].sort(((e, t) => e - t))
                    }))
                }(), {
                    getPlayRates: function() {
                        return r
                    },
                    getPreferredPosition: function(e) {
                        const t = o[e] || [];
                        return t.length > 0 ? t[0].pos : "NONE"
                    }
                }
            };
            const r = n(2),
                o = {}
        }, e => {
            e.exports = JSON.parse('{"BOTTOM":{"15":0.02151,"18":0.02195,"21":0.03589,"22":0.05015,"29":0.02195,"51":0.08273,"67":0.04924,"81":0.10277,"96":0.00724,"110":0.01695,"115":0.02266,"119":0.0286,"145":0.10898,"157":0.01275,"202":0.059,"221":0.01599,"222":0.08163,"236":0.03266,"360":0.03956,"429":0.01484,"498":0.05885,"523":0.03412,"895":0.01763},"SUPPORT":{"12":0.03118,"16":0.02688,"25":0.0299,"26":0.0108,"35":0.0108,"37":0.01102,"40":0.01526,"43":0.02705,"44":0.00726,"50":0.01737,"53":0.04466,"63":0.01761,"74":0.0053,"80":0.01055,"89":0.02365,"99":0.05184,"101":0.02808,"111":0.04627,"117":0.03224,"143":0.0229,"147":0.0165,"161":0.00804,"201":0.01394,"235":0.06277,"267":0.03191,"350":0.0256,"412":0.07254,"432":0.01972,"497":0.05096,"518":0.01245,"526":0.02075,"555":0.03609,"888":0.01697,"902":0.02404},"TOP":{"2":0.01119,"6":0.00923,"10":0.01476,"14":0.018,"17":0.01774,"23":0.01398,"24":0.05057,"27":0.00822,"31":0.01093,"36":0.01456,"39":0.01805,"41":0.02539,"48":0.00552,"54":0.02604,"58":0.03334,"68":0.01546,"75":0.02344,"80":0.01097,"82":0.02089,"83":0.01185,"84":0.01551,"85":0.00836,"86":0.05234,"92":0.01923,"98":0.01028,"106":0.01664,"114":0.02545,"122":0.04583,"126":0.0228,"133":0.00785,"150":0.01597,"157":0.01237,"164":0.02072,"223":0.01357,"240":0.00716,"266":0.04807,"420":0.02062,"516":0.01837,"777":0.03946,"875":0.02644,"887":0.01569,"897":0.04909},"MIDDLE":{"1":0.00596,"3":0.00668,"4":0.01541,"7":0.01588,"8":0.01635,"13":0.00854,"18":0.01292,"34":0.00861,"38":0.0207,"39":0.01754,"42":0.00357,"45":0.01863,"55":0.02937,"61":0.05572,"69":0.00843,"80":0.01011,"84":0.04499,"90":0.01744,"91":0.0168,"99":0.02164,"101":0.01521,"103":0.03556,"105":0.02338,"112":0.01835,"115":0.01329,"126":0.02209,"127":0.01603,"134":0.04208,"136":0.01698,"142":0.01107,"157":0.04968,"163":0.01138,"166":0.00987,"238":0.04585,"245":0.0116,"246":0.01097,"268":0.02004,"517":0.04696,"518":0.01196,"711":0.0176,"777":0.04568,"950":0.01816},"JUNGLE":{"5":0.00897,"9":0.01895,"11":0.02817,"19":0.01275,"20":0.01448,"28":0.02143,"30":0.01381,"32":0.01328,"33":0.01952,"35":0.02708,"48":0.00572,"56":0.0299,"57":0.02381,"59":0.05109,"60":0.0107,"62":0.00845,"64":0.07892,"72":0.0044,"76":0.02031,"77":0.01207,"78":0.01243,"79":0.01334,"102":0.00895,"104":0.06225,"107":0.01319,"113":0.01527,"120":0.02107,"121":0.03073,"131":0.02162,"141":0.04011,"154":0.02067,"163":0.01682,"200":0.01434,"203":0.01248,"233":0.04886,"234":0.03567,"245":0.02607,"254":0.02479,"421":0.00546,"427":0.01035,"517":0.01667,"876":0.02296}}')
        }, (e, t, n) => {
            n.r(t)
        }],
        t = {};

    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var c = t[r] = {
            exports: {}
        };
        return e[r](c, c.exports, n), c.exports
    }
    n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e, t = (e = n(1)) && e.__esModule ? e : {
            default: e
        };
        n(3);
        const r = document.currentScript.ownerDocument;
        const o = window.getPluginAnnounceEventName("rcp-fe-lol-champion-statistics");
        r.addEventListener(o, (function(e) {
            (0, e.registrationHandler)((function() {
                return (0, t.default)()
            }))
        }), {
            once: !0
        })
    })()
})();
