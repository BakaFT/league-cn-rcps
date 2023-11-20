﻿(() => {
    var e = [, e => {
            "use strict";
            let n;

            function t() {
                return n || (console.error("The `provider` object has not been set, please do so by calling the `init` method."), null)
            }
            const a = {
                init: function(e, t) {
                    return n = e, this.add(t)
                },
                _getValue: function(e, t) {
                    let a;
                    return "function" == typeof t ? (a = t(n), a || console.warn("The function for key " + e + " returned a falsy value: ", a)) : "string" == typeof t ? (a = n.get(t), a || console.warn("The provider `get` invocation for the key " + e + " returned a falsy value: ", a)) : "object" == typeof t && (a = t), a
                },
                add: function(e) {
                    e = e || {};
                    const n = [],
                        t = this;
                    return Object.keys(e).forEach((function(a) {
                        const r = e[a],
                            i = t._getValue(a, r);
                        i && i.then ? (i.then((function(e) {
                            e || console.warn("The promise for the key " + a + " resolved with a falsy value: ", e), t._addValue(a, e)
                        })), n.push(i)) : t._addValue(a, i)
                    })), Promise.all(n)
                },
                _addValue: function(e, n) {
                    this[e] = n
                },
                provider: function() {
                    return console.error("The function `provider` has been deprecated, please use `getProvider`", (new Error).stack), t()
                },
                getProvider: function() {
                    return t()
                }
            };
            e.exports = a
        }, (e, n, t) => {
            "use strict";
            t.r(n)
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = t(4);
            n.default = class {
                init(e) {
                    const {
                        storeBaseUrl: n,
                        regionLocale: t
                    } = e;
                    this.storeBaseUrl = n, this.language = t.locale, this.storeUrlTemplate = (0, a.buildStoreUrlTemplate)(e)
                }
                getStoreUrl(e = {}) {
                    const n = e.page || "featured",
                        t = e.items || [],
                        r = e.recipientSummonerId || "",
                        i = (0, a.buildSelectedItemsParam)(t),
                        o = this.storeUrlTemplate;
                    return o.searchParams.set("selectedItems", i), o.searchParams.set("page", n), o.searchParams.set("recipientSummonerId", r), o.toString()
                }
            }
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.buildSelectedItemsParam = function(e) {
                if (!Array.isArray(e)) return "";
                return e.reduce(((e, n) => [...e, `${n.inventoryType}-${n.itemId}`]), []).join(",")
            }, n.buildStoreUrlTemplate = function({
                storeBaseUrl: e,
                regionLocale: n
            }) {
                const {
                    region: t,
                    locale: a
                } = function(e) {
                    const n = e.region,
                        t = e.locale;
                    let a = r.default.getRegion(n),
                        i = null;
                    if (t) {
                        const e = t.substring(0, 2);
                        i = r.default.getLocale(a, e), null === i && (i = t)
                    }
                    null === a && (a = "na");
                    null === i && (i = "en_US");
                    return {
                        region: a,
                        locale: i
                    }
                }(n), i = new URL(`${e}/storefront/ui/v1/app.html`);
                return i.search = new URLSearchParams({
                    language: a,
                    port: window.location.port,
                    storeApiUrl: e,
                    clientRegion: t
                }), i
            };
            var a, r = (a = t(5)) && a.__esModule ? a : {
                default: a
            }
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            const t = {
                    na: {
                        en: "en_US"
                    },
                    euw: {
                        de: "de_DE",
                        en: "en_GB",
                        es: "es_ES",
                        fr: "fr_FR",
                        it: "it_IT"
                    },
                    eune: {
                        cs: "cs_CZ",
                        el: "el_GR",
                        en: "en_PL",
                        hu: "hu_HU",
                        pl: "pl_PL",
                        ro: "ro_RO"
                    },
                    tr: {
                        tr: "tr_TR"
                    },
                    br: {
                        pt: "pt_BR"
                    },
                    ru: {
                        ru: "ru_RU"
                    },
                    lan: {
                        es: "es_MX"
                    },
                    las: {
                        es: "es_AR"
                    },
                    oce: {
                        en: "en_AU"
                    },
                    pbe: {
                        en: "en_US"
                    },
                    kr: {
                        ko: "ko_KR"
                    },
                    jp: {
                        ja: "ja_JP"
                    }
                },
                a = {
                    NA1: "na",
                    NA: "na",
                    EUW1: "euw",
                    EUW: "euw",
                    BR1: "br",
                    BR: "br",
                    EUN1: "eune",
                    EUN: "eune",
                    EUNE: "eune",
                    LA1: "lan",
                    LAN: "lan",
                    LA2: "las",
                    LAS: "las",
                    TR1: "tr",
                    TR: "tr",
                    OC1: "oce",
                    OCE: "oce",
                    RU: "ru",
                    RU1: "ru",
                    KR: "kr",
                    KR1: "kr",
                    PBE1: "pbe",
                    PBE: "pbe"
                };
            var r = {
                getRegion: function(e) {
                    return e && (e = e.toUpperCase(), a.hasOwnProperty(e)) ? a[e] : null
                },
                getLocale: function(e, n) {
                    return e = this.getRegion(e), t.hasOwnProperty(e) && t[e].hasOwnProperty(n) ? t[e][n] : null
                }
            };
            n.default = r
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = t(1);
            const r = "/v1/store-ready",
                i = "/v1/namespaces/LCUStore",
                o = "/v1/getStoreUrl";
            n.default = class {
                constructor(e) {
                    const n = e.getSocket();
                    this.bindings = {
                        dataStore: (0, a.dataBinding)("/data-store", n),
                        rclient: (0, a.dataBinding)("/riotclient", n),
                        store: (0, a.dataBinding)("/lol-store", n),
                        platformConfig: (0, a.dataBinding)("/lol-platform-config", n),
                        gameData: (0, a.dataBinding)("/lol-game-data", n),
                        rsoAuth: (0, a.dataBinding)("/lol-rso-auth", n),
                        clientConfig: (0, a.dataBinding)("/lol-client-config", n),
                        inventory: (0, a.dataBinding)("/lol-inventory", n)
                    }, this.sidebarBackgroundColor = "#0A1C24"
                }
                getEndpoint(e, n) {
                    return (0, a.dataBinding)(e).get(n, {
                        skipCache: !0
                    })
                }
                getRegionLocale() {
                    return this.bindings.rclient.get("/region-locale")
                }
                getRegionData() {
                    return this.bindings.dataStore.get("/v1/system-settings/region_data")
                }
                getStoreUrl() {
                    return this.bindings.store.get(o)
                }
                getLcuStoreConfig() {
                    return this.bindings.platformConfig.get(i)
                }
                getStoreReady(e) {
                    return this.bindings.store.get(r)
                }
                addStoreReadyObserver(e) {
                    this.bindings.store.observe(r, e)
                }
                getCatalogItemData(e, n) {
                    return this.bindings.store.get(`/v1/catalog/${n}?itemIds=[${e}]`)
                }
                addBlueEssenceBalanceObserver(e) {
                    this.bindings.inventory.observe("/v1/wallet/lol_blue_essence", e)
                }
                addRpBalanceObserver(e) {
                    this.bindings.inventory.observe("/v1/wallet/RP", e)
                }
                addStoreUrlObserver(e) {
                    this.bindings.store.observe(o, e)
                }
                addOrderNotificationsObserver(e) {
                    this.bindings.store.observe("/v1/order-notifications", e)
                }
                addRsoAccessTokenObserver(e) {
                    this.bindings.rsoAuth.observe("/v1/authorization/access-token", e)
                }
                addStoreGlobalToggleObserver(e) {
                    this.bindings.platformConfig.observe(i, e)
                }
                getChampionData(e) {
                    return (0, a.dataBinding)("/lol-game-data").get("/assets/v1/champions/" + e + ".json")
                }
                getWardSkinData() {
                    return (0, a.dataBinding)("/lol-game-data").get("/assets/v1/ward-skins.json")
                }
                getStoreStatus() {
                    return this.bindings.store.get("/v1/status", {
                        skipCache: !0
                    })
                }
                getStatstonesData() {
                    return (0, a.dataBinding)("/lol-game-data").get("/assets/v1/statstones.json")
                }
                getEnableRpTopUpConfiguration() {
                    return this.bindings.clientConfig.get("/v3/client-config/lol.client_settings.paw.enableRPTopUp")
                }
                getStoreClientConfigurations() {
                    return this.bindings.clientConfig.get("/v3/client-config/lol.client_settings.store")
                }
            }
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function() {
                const e = new o.default,
                    n = new i.default(a.UIKit, e);
                return new r.default(n, e)
            };
            var a = t(1);
            t(8);
            var r = E(t(9)),
                i = E(t(12)),
                o = E(t(15));

            function E(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        }, (e, n, t) => {
            "use strict";
            t.r(n)
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a, r = t(1),
                i = (a = t(10)) && a.__esModule ? a : {
                    default: a
                },
                o = t(11);
            n.default = class {
                constructor(e, n) {
                    this.api = e, this.dataLayer = n, this.openPayments = this.openPayments.bind(this), this.getGifteeSummoner = this.getGifteeSummoner.bind(this)
                }
                getGifteeSummoner(e) {
                    return e.gifteeAccountId && (r.logger.trace(`Gift Transaction: Received ID: ${e.gifteeAccountId}, Message: ${e.giftMessage}`), !(0, o.isUuid)(e.gifteeAccountId)) ? this.dataLayer.getSummonerById(e.gifteeAccountId) : Promise.resolve(null)
                }
                openPayments(e, n) {
                    const t = n || e;
                    if ("object" != typeof t) throw new TypeError("First or second parameter must be an object");
                    const a = (n ? e : t.mode) || i.default.RIOT;
                    if (!i.default[a]) throw new RangeError(`Payments mode was ${a}, expected one of ${Object.keys(i.default).join(", ")}`);
                    Promise.all([this.dataLayer.getRegionData(), this.dataLayer.getRegionLocale(), this.dataLayer.getPaymentsPlatformConfig(), this.dataLayer.getRsoAuthToken(), this.dataLayer.getCurrentSummoner(), this.getGifteeSummoner(t)]).then((e => {
                        const n = e[0],
                            i = e[1],
                            o = e[2],
                            E = e[3],
                            _ = e[4],
                            s = e[5];
                        o && o.PmcEdgeHost && o.RiotPayEnabled && (this.isWhitelisted(o.BypassAccountIds, _.accountId) || this.withinThrottle(o.RiotPayThrottle)) ? (r.logger.trace("Using RiotPay for account id: " + _.accountId), t.riotPayEnabled = o.RiotPayEnabled) : this.api.setPaymentsBaseUrl(this.getPayletterHost(o, n, i)), t.pmcSessionsEnabled = !(!o || !o.PmcSessionsEnabled), i && (t.locale = i.locale), E ? t.rsoToken = E.token : r.logger.trace("Rso is null and might not be enabled in this environment"), _ && (t.summonerLevel = _.summonerLevel), s && (t.gifteeAccountId = s.accountId), this.api.initPaymentsWindow(t, a)
                    }))
                }
                getPayletterHost(e, n, t) {
                    return e && e.Host ? (r.logger.trace("Using host from platform config"), e.Host) : (r.logger.trace("Host in platform config not found, defaulting to local config"), n[t.region].servers.payments.payments_host)
                }
                isWhitelisted(e, n) {
                    return e && e.includes(n)
                }
                withinThrottle(e) {
                    return e && 1e6 * Math.random() % 100 < e
                }
            }
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = {
                RIOT: "RIOT",
                KOREA: "KOREA",
                TENCENT: "TENCENT"
            };
            n.default = t
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.isUuid = function(e) {
                const n = ("" + e).match(t);
                return !!n && 1 === n.length
            };
            const t = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = t(1),
                r = E(t(13)),
                i = E(t(14)),
                o = E(t(10));

            function E(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const _ = ["ReadyCheck", "ChampSelect", "GameStart", "InProgress", "FailedToLaunch", "Reconnect", "WaitingForStats", "EndOfGame"];
            n.default = class {
                constructor(e, n) {
                    this.uiKit = e, this.dataLayer = n, this.setPaymentsBaseUrl = this.setPaymentsBaseUrl.bind(this)
                }
                setPaymentsBaseUrl(e) {
                    this.paymentsBaseUrl = e
                }
                initPaymentsWindow(e, n) {
                    if (e = e || {}, !this.paymentsBaseUrl && !e.riotPayEnabled) throw new Error("Invalid paymentsBaseUrl, value cannot be null when not using RiotPay.");
                    switch (a.logger.trace(`Opening ${n} Payments window with base url ${this.paymentsBaseUrl}.`), n) {
                        case o.default.KOREA:
                            this.initKoreaWindow(e);
                            break;
                        case o.default.TENCENT:
                            this.initTencentWindow(e);
                            break;
                        case o.default.RIOT:
                            this.initRiotWindow(e);
                            break;
                        default:
                            throw new RangeError(`Invalid mode, expected one of ${Object.keys(o.default).join(", ")}`)
                    }
                }
                initRiotWindow(e) {
                    e.riotPayEnabled ? this.getTokenizedStartUrl(e).then((n => {
                        this.createWindows(e, i.default.riotpay(n, e))
                    })) : this.createWindows(e, i.default.riot(this.paymentsBaseUrl, e))
                }
                initKoreaWindow(e) {
                    e.riotPayEnabled ? this.getTokenizedStartUrl(e).then((n => {
                        e.onOpen = () => window.open(n, "_blank"), this.createWindows(e, i.default.korea())
                    })) : (e && (e.onOpen = () => window.open(`${this.paymentsBaseUrl}/?payload=${e.payload}`, "_blank")), this.createWindows(e, i.default.korea()))
                }
                initTencentWindow(e) {
                    this.createWindows(e, i.default.tencent(this.paymentsBaseUrl, e))
                }
                openWindowHandler(e) {
                    e && "function" == typeof e && e()
                }
                closeWindowHandler(e, n) {
                    a.logger.trace("Closing Payments windows."), this.shouldShowOnUnload = !1, this.topManagedWindow.getNativeWindow().close(), this.bottomManagedWindow.getNativeWindow().close(), this.uiKit.getModalManager().remove(e), n && "function" == typeof n && n(), this.paymentsActive = !1, a.logger.trace("Payments windows closed.")
                }
                createWindows(e, n) {
                    const t = this.uiKit.getWindowManager();
                    if (this.paymentsActive) return void a.logger.trace("Cannot create windows as payments is already active.");
                    this.paymentsActive = !0, this.shouldShowOnUnload = !0, this.bottomManagedWindow = t.create(null, "payments-main-bottom", null, {
                        parented: !0
                    }), this.bottomManagedWindow.hide(), this.topManagedWindow = t.create(null, "payments-main-top", this.bottomManagedWindow.getNativeWindow(), {
                        parented: !0
                    });
                    const i = this.createPaymentsDialog();
                    i.okPromise.then(this.closeWindowHandler.bind(this, i, e.onClose)), r.default.addRequestHandler("closePaymentsWindow", (() => this.closeWindowHandler(i, e.onClose))), r.default.addRequestHandler("openPaymentsWindow", (() => this.openWindowHandler(e.onOpen))), this.bottomManagedWindow.getNativeWindow().onbeforeunload = function() {
                        this.shouldShowOnUnload && this.resizeAndShow(this.bottomManagedWindow)
                    }.bind(this), this.dataLayer.addGameflowObserver((n => {
                        this.paymentsActive && n && n.phase && _.includes(n.phase) && (a.logger.trace(`Gameflow phase '${n.phase}' is closing Payments.`), this.closeWindowHandler(i, e.onClose))
                    })), this.resizeAndShow(this.topManagedWindow, n, (() => this.openWindowHandler(e.onOpen)), !0)
                }
                resizeAndShow(e, n, t, r = !1) {
                    const i = e.getNativeWindow().name;
                    a.logger.trace(`Opening window '${i}'.`), e.setDragBarHeight(0), e.setDragEnabled(!1), e.resizeTo(1058, 596), e.centerWithinParent(), e.show(), r && e.activate(), n && e.setContent(n), t && "function" == typeof t && t(), a.logger.trace(`Window '${i}' opened.`)
                }
                createPaymentsDialog() {
                    const e = document.createElement("div");
                    e.setAttribute("class", "payments-wrapper");
                    return this.uiKit.getModalManager().add({
                        type: "DialogAlert",
                        data: {
                            contents: e,
                            okText: !1,
                            dismissible: !0
                        }
                    })
                }
                getTokenizedStartUrl(e) {
                    if (!e.rsoToken) throw new Error("RSO Token is null, cannot get tokenized PMC URL");
                    return new Promise(((n, t) => {
                        a.logger.trace("getTokenizedStartUrl starting!");
                        const r = {
                            isPrepaid: "CODES_REDEMPTION" === e.action,
                            localeId: e.locale,
                            summonerLevel: e.summonerLevel,
                            rsoToken: e.rsoToken,
                            usePmcSessions: e.pmcSessionsEnabled,
                            game: "lol"
                        };
                        "TC_PURCHASE" === e.action && (r.game = "tft"), e.gifteeAccountId && (r.gifteeAccountId = String(e.gifteeAccountId)), e.giftMessage && (r.gifteeMessage = String(e.giftMessage)), this.dataLayer.getTokenizedPmcUrl(r).then((e => {
                            e ? (a.logger.trace("Got a start URL: " + e.url), n(e.url)) : t()
                        }))
                    }))
                }
            }
        }, e => {
            "use strict";
            const n = {};
            window.addEventListener("message", (function(e) {
                const t = n[e.data.action];
                "function" == typeof t && t(e)
            })), e.exports = {
                addRequestHandler: function(e, t) {
                    n[e] = t
                },
                removeRequestHandler: function(e) {
                    void 0 !== n[e] && delete n[e]
                }
            }
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0, n.korea = o, n.riot = r, n.riotpay = i, n.tencent = E;
            var a = t(1);

            function r(e, n) {
                const t = _(),
                    a = document.createElement("form");
                a.setAttribute("method", "POST");
                const r = document.createElement("input");
                r.type = "hidden", r.name = "payload", r.value = n.payload;
                const i = document.createElement("input");
                i.type = "hidden", i.name = "lcu", i.value = "1";
                const o = document.createElement("input");
                o.type = "hidden", o.name = "locale", o.value = n.locale;
                const E = document.createElement("input");
                E.type = "hidden", E.name = "summonerLevel", E.value = n.summonerLevel;
                const s = document.createElement("input");
                s.type = "hidden", s.name = "gifteeAccountId", s.value = n.gifteeAccountId;
                const T = document.createElement("input");
                T.type = "hidden", T.name = "giftMessage", T.value = n.giftMessage;
                const l = document.createElement("input");
                if (l.type = "hidden", l.name = "rsoToken", l.value = n.rsoToken, a.appendChild(r), a.appendChild(i), a.appendChild(o), a.appendChild(E), a.appendChild(s), a.appendChild(T), a.appendChild(l), "CODES_REDEMPTION" === n.action) {
                    const e = document.createElement("input");
                    e.type = "hidden", e.name = "storeprepaid", e.value = "true", a.appendChild(e)
                }
                let u = `${e}/session/new/`;
                n.riotPayEnabled && (u = e), a.setAttribute("action", u);
                const R = document.createElement("script");
                return R.setAttribute("type", "text/javascript"), R.innerText = "document.forms[0].submit();", t.appendChild(a), t.appendChild(R), t
            }

            function i(e, n) {
                const t = _(),
                    a = document.createElement("form");
                a.setAttribute("method", "GET");
                const r = s("pid", e);
                if (r) {
                    const e = document.createElement("input");
                    e.type = "hidden", e.name = "pid", e.value = r, a.appendChild(e)
                }
                const i = s("s", e);
                if (i) {
                    const e = document.createElement("input");
                    e.type = "hidden", e.name = "s", e.value = i, a.appendChild(e)
                }
                if (e.includes("/riotpay/psps/vng/")) {
                    const n = s("sfac", e),
                        t = s("puuid", e);
                    if (n && t) {
                        const e = document.createElement("input");
                        e.type = "hidden", e.name = "sfac", e.value = n;
                        const r = document.createElement("input");
                        r.type = "hidden", r.name = "puuid", r.value = t, a.appendChild(r), a.appendChild(e)
                    }
                }
                const o = document.createElement("input");
                o.type = "hidden", o.name = "locale", o.value = s("locale", e);
                const E = document.createElement("input");
                E.type = "hidden", E.name = "t", E.value = s("t", e);
                const T = s("i", e);
                if (T) {
                    const e = document.createElement("input");
                    e.type = "hidden", e.name = "i", e.value = T, a.appendChild(e)
                }
                const l = `${e}`;
                a.setAttribute("action", l);
                const u = document.createElement("script");
                if (u.setAttribute("type", "text/javascript"), u.innerText = "document.forms[0].submit();", a.appendChild(o), a.appendChild(E), "CODES_REDEMPTION" === n.action) {
                    const e = document.createElement("input");
                    e.type = "hidden", e.name = "prepaid", e.value = "true", a.appendChild(e)
                }
                return t.appendChild(a), t.appendChild(u), t
            }

            function o() {
                const e = _(),
                    n = document.createElement("form");
                n.setAttribute("method", "GET");
                n.setAttribute("action", "https://d36939fcigz4eo.cloudfront.net/");
                const t = document.createElement("script");
                return t.setAttribute("type", "text/javascript"), t.innerText = "document.forms[0].submit();", e.appendChild(n), e.appendChild(t), e
            }

            function E(e, n) {
                const t = _(),
                    a = document.createElement("form");
                a.setAttribute("method", "GET");
                const r = `${e}?username=` + n.playerAccountId;
                a.setAttribute("action", r);
                const i = document.createElement("script");
                return i.setAttribute("type", "text/javascript"), i.innerText = "document.forms[0].submit();", t.appendChild(a), t.appendChild(i), t
            }

            function _() {
                const e = document.createElement("div");
                return e.style.width = "1056px", e.style.height = "594px", e
            }

            function s(e, n) {
                const t = n.split("?")[1].split("&");
                for (let n = 0; n < t.length; n++) {
                    const a = t[n].split("=");
                    if (a[0] === e) return a[1]
                }
                a.logger.trace("Couldn't find " + e + " in url: " + n)
            }
            var T = {
                riot: r,
                korea: o,
                tencent: E,
                riotpay: i
            };
            n.default = T
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = t(1);
            const r = "/v1/session";
            n.default = class {
                constructor() {
                    const e = (0, a.getProvider)().getSocket();
                    this.bindings = {
                        dataStore: (0, a.dataBinding)("/data-store", e),
                        rclient: (0, a.dataBinding)("/riotclient", e),
                        login: (0, a.dataBinding)("/lol-login", e),
                        gameflow: (0, a.dataBinding)("/lol-gameflow", e),
                        auth: (0, a.dataBinding)("/lol-rso-auth", e),
                        platformConfig: (0, a.dataBinding)("/lol-platform-config", e),
                        summoner: (0, a.dataBinding)("/lol-summoner", e),
                        payments: (0, a.dataBinding)("/payments", e)
                    }
                }
                getRegionLocale() {
                    return this.bindings.rclient.get("/region-locale")
                }
                getRegionData() {
                    return this.bindings.dataStore.get("/v1/system-settings/region_data")
                }
                getRsoAuthToken() {
                    return this.bindings.auth.get("/v1/authorization/access-token")
                }
                getPaymentsPlatformConfig() {
                    return this.bindings.platformConfig.get("/v1/namespaces/LcuPayments")
                }
                getSummonerById(e) {
                    return this.bindings.summoner.get(`/v1/summoners/${e}`)
                }
                getCurrentSummoner() {
                    return this.bindings.summoner.get("/v1/current-summoner")
                }
                addLoginObserver(e) {
                    this.bindings.login.observe(r, e)
                }
                addGameflowObserver(e) {
                    this.bindings.gameflow.observe(r, e)
                }
                getTokenizedPmcUrl(e) {
                    return this.bindings.payments.post("/v1/pmc-start-url", e)
                }
            }
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            n.default = class {
                constructor(e) {
                    this._api = e, this.displayNameLocKey = "navbar_store", this.show = this.show.bind(this), this.hide = this.hide.bind(this)
                }
                show(e) {
                    const n = e || {
                        viaNav: !0
                    };
                    return this._api.showStore(n)
                }
                hide() {
                    this._api.hideStore()
                }
            }
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = l(t(18)),
                r = t(21),
                i = l(t(1)),
                o = s(t(20)),
                E = t(23),
                _ = s(t(42));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function T(e) {
                if ("function" != typeof WeakMap) return null;
                var n = new WeakMap,
                    t = new WeakMap;
                return (T = function(e) {
                    return e ? t : n
                })(e)
            }

            function l(e, n) {
                if (!n && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = T(n);
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var i in e)
                    if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                        o && (o.get || o.set) ? Object.defineProperty(a, i, o) : a[i] = e[i]
                    } return a.default = e, t && t.set(e, a), a
            }
            n.default = class {
                constructor() {
                    const {
                        getProvider: e,
                        Screen: n,
                        DataLayer: t,
                        WindowMessenger: r,
                        StoreAPI: o,
                        Viewport: E
                    } = i.default;
                    this.viewport = E, this.screen = n, this.provider = e(), this.frameUiAppended = !1, this.windowMessenger = r, this.dataLayer = t, this.storeAPI = o, this.sentCapNotifications = [], this.isStoreShowing = !1, this.isStoreLoading = !1, this.IFRAME_LOADED_TIMEOUT = 3e4, this.useLocalStorefront = !1, this.tencentStorefront = null, this.localStorefrontAnimationFrame = null, this.balances = {
                        rp: 0,
                        ip: 0
                    }, a.default.svuLoadedNotification || (a.default.svuLoadedNotification = this.svuLoadedNotification.bind(this)), i.default.add({
                        PrivateAPI: this
                    })
                }
                handleToggleNotification(e) {
                    const n = (e = e || {}).Enabled;
                    i.logger.trace("global store toggle: ", n), n || this.hideStore()
                }
                setupStoreUrls() {
                    return Promise.all([this.dataLayer.getRegionLocale(), this.dataLayer.getStoreUrl()]).then((e => {
                        const n = e[0],
                            t = e[1];
                        this.storeAPI.init({
                            storeBaseUrl: t,
                            regionLocale: n
                        })
                    })).catch((e => {
                        i.logger.error("privateApi->setupStoreUrls", {
                            errorTrace: e
                        })
                    }))
                }
                setupObservers(e) {
                    return e && !this.observersInitialized ? (this.observersInitialized = !0, this.dataLayer.addStoreGlobalToggleObserver(this.handleToggleNotification.bind(this)), this.dataLayer.addOrderNotificationsObserver(this.markCapPurchase.bind(this)), this.dataLayer.addRsoAccessTokenObserver(this.updateRsoAccessToken.bind(this)), this.dataLayer.addBlueEssenceBalanceObserver(this.updateBlueEssenceBalance.bind(this)), this.dataLayer.addRpBalanceObserver(this.updateRpBalance.bind(this)), this.viewport.sidebar().on("backgroundUnset", this.setSidebarBackground.bind(this)), this.screen.on("willHide", this.beforeHideStore.bind(this)), this.setupStoreUrls()) : Promise.resolve()
                }
                beforeHideStore(e) {
                    if (e && e._viewport && e._viewport._srController && e._viewport._srController._viewIdsStack && e._viewport._srController._viewIdsStack.length) {
                        const n = e._viewport._srController._viewIdsStack.slice(-1)[0];
                        if (!n || "rcp-fe-lol-store" === n.name) return;
                        a.default.viewportScreenChanged(n.name)
                    }(0, E.pageSessionEnd)("exit")
                }
                hideStore() {
                    const e = (0, r.getIframe)(this.screen);
                    e && (this.removeWindowMessageListeners(), this.svuLoadedNotification(), this.useLocalStorefront ? (cancelAnimationFrame(this.localStorefrontAnimationFrame), e.contentDocument || (e.contentDocument.open(), e.contentDocument.write(""), e.contentDocument.close())) : e.src = ""), this.isStoreShowing = !1, this.screen.release(), this.errorTimeoutCheck && (window.clearTimeout(this.errorTimeoutCheck), this.errorTimeoutCheck = null)
                }
                renderLocalStorefront(e) {
                    const n = (0, r.getIframe)(this.screen);
                    if (!n || !n.contentDocument || "" !== n.contentDocument.getElementsByTagName("body")[0].innerHTML) return cancelAnimationFrame(this.localStorefrontAnimationFrame), void(this.localStorefrontAnimationFrame = requestAnimationFrame((() => this.renderLocalStorefront(e))));
                    const t = {};
                    new URLSearchParams(new URL(e).search).forEach(((e, n) => t[n] = e)), n.contentDocument.open(), n.contentWindow.storefrontParameters = t, n.contentDocument.write(_.default), n.contentDocument.close()
                }
                showStore(e) {
                    e && e.viaNav && i.Telemetry.sendCustomData(E.STORE_TELEMETRY_TABLE, {
                        eventName: E.LCU_NAVIGATION_STORE_CLICK
                    }), this.isStoreLoading || (i.Telemetry.startTracingEvent("store-loaded"), this.isStoreLoading = !0), this.isStoreShowing = !0, this.screen.bump(), this.resolveShowPromise = void 0;
                    const n = new Promise((e => {
                        this.resolveShowPromise = e
                    }));
                    return this.errorTimeoutCheck && window.clearTimeout(this.errorTimeoutCheck), this.errorTimeoutCheck = this.timeoutToCheckStoreLoadingErrors(), this.dataLayer.getStoreReady().then((e => this.setupObservers(e))).then((async () => {
                        const n = this.storeAPI.getStoreUrl(e),
                            t = await this.dataLayer.getStoreClientConfigurations();
                        this.useLocalStorefront = t.use_local_storefront && !t.tencent_storefront, this.tencentStorefront = t.tencent_storefront, i.logger.always("privateApi->showStore", {
                            local: this.useLocalStorefront,
                            custom: this.tencentStorefront
                        });
                        let a = n;
                        if (this.tencentStorefront && (a = this.tencentStorefront + new URL(n).search), this.frameUiAppended)
                            if (this.useLocalStorefront) this.renderLocalStorefront(a);
                            else {
                                (0, r.getIframe)(this.screen).src = a
                            }
                        else this.initializeScreen(a), this.frameUiAppended = !0;
                        this.showLoading()
                    })), n
                }
                initializeScreen(e) {
                    const n = this.screen.getElement(),
                        t = document.createDocumentFragment(),
                        a = document.createElement("div");
                    a.className = "store-backdrop", t.appendChild(a);
                    const r = document.createElement("div");
                    r.className = "bottom-gradient", t.appendChild(r);
                    const i = document.createElement("div");
                    i.classList.add("__rcp-fe-lol-store"), i.setAttribute("id", "rcp-fe-lol-store-iframe");
                    const o = document.createElement("iframe");
                    o.setAttribute("referrerpolicy", "no-referrer-when-downgrade"), this.useLocalStorefront || (o.src = e), o.onload = () => {
                        this.removeWindowMessageListeners(), this.addWindowMessageListeners(), this.tencentStorefront && this.svuLoadedNotification()
                    }, i.appendChild(o), t.appendChild(i), n.appendChild(t), this.useLocalStorefront && this.renderLocalStorefront(e);
                    const E = document.createElement("div");
                    E.classList.add("store-loading"), E.addEventListener("transitionend", (() => {
                        E.style.display = "none"
                    })), n.appendChild(E)
                }
                showLoading() {
                    const e = this.screen.getElement().querySelector(".store-loading");
                    e.classList.remove("fade-out"), e.style.display = "block"
                }
                isLoadingVisible() {
                    const e = this.screen.getElement().querySelector(".store-loading");
                    return !(!e || "none" === e.style.display)
                }
                hideLoading() {
                    const e = this.screen.getElement().querySelector(".store-loading");
                    this.isLoadingVisible() && e.classList.add("fade-out")
                }
                markCdpPurchase() {
                    (0, o.default)({
                        messageType: "markCdpPurchase"
                    })
                }
                markCapPurchase(e) {
                    e && e.forEach(((e = {}) => {
                        Number.isInteger(e.id) && !this.sentCapNotifications.includes(e.id) && ((0, o.default)({
                            messageType: "markCapPurchase",
                            data: e
                        }), this.sentCapNotifications.push(e.id))
                    }))
                }
                updateRsoAccessToken(e) {
                    e && e.token && (0, o.default)({
                        messageType: "updateRsoAccessToken",
                        data: e.token
                    })
                }
                updateBlueEssenceBalance(e) {
                    this.balances.ip = e.lol_blue_essence || 0, this.updateCdpBalance()
                }
                updateRpBalance(e) {
                    this.balances.rp = e.RP || 0, this.updateCdpBalance()
                }
                updateCdpBalance() {
                    const e = this.balances;
                    if (!e || !e.hasOwnProperty("ip") || !e.hasOwnProperty("rp")) return;
                    const {
                        ip: n,
                        rp: t
                    } = e, a = {
                        item: {
                            ip_balance: n,
                            rp_balance: t
                        }
                    };
                    (0, o.default)({
                        messageType: "updateCdpBalance",
                        data: a
                    })
                }
                removeWindowMessageListeners() {
                    if (!this.messageListenersAdded) return;
                    const e = (0, r.getIframe)(this.screen);
                    e && (this.windowMessenger.removeMessageListener(e.contentWindow), this.messageListenersAdded = !1)
                }
                addWindowMessageListeners() {
                    const e = (0, r.getIframe)(this.screen);
                    if (e && this.isStoreShowing) {
                        const n = [{
                            messageType: a.incomingMessageTypes.HANDSHAKE_REQUEST,
                            handlers: a.default.handshakeRequest
                        }, {
                            messageType: a.incomingMessageTypes.OPEN_EXTERNAL_URL,
                            handlers: a.default.openExternalURL
                        }, {
                            messageType: a.incomingMessageTypes.OPEN_LCU_PAW_MODAL,
                            handlers: a.default.openLCUPawModal
                        }, {
                            messageType: a.incomingMessageTypes.OPEN_LCU_CHOICE_PAW_MODAL,
                            handlers: a.default.openLCUChoicePawModal
                        }, {
                            messageType: a.incomingMessageTypes.OPEN_LCU_PAW_TEMPLATE_MODAL,
                            handlers: a.default.openLCUPawTemplateModal
                        }, {
                            messageType: a.incomingMessageTypes.OPEN_LCU_DROP_RATES_MODAL,
                            handlers: a.default.openLCUDropRatesModal
                        }, {
                            messageType: a.incomingMessageTypes.NAVIGATE_TO_LOOT,
                            handlers: a.default.navigateToLoot
                        }, {
                            messageType: a.incomingMessageTypes.SHOW_INTERNAL_BROWSER,
                            handlers: a.default.showInternalBrowser
                        }, {
                            messageType: a.incomingMessageTypes.GET_BUDDY_LIST,
                            handlers: a.default.getBuddyList
                        }, {
                            messageType: a.incomingMessageTypes.RUNE_INVENTORY_COUNT,
                            handlers: a.default.runeInventoryCount
                        }, {
                            messageType: a.incomingMessageTypes.OPEN_INVENTORY_BROWSER,
                            handlers: a.default.openInventoryBrowser
                        }, {
                            messageType: a.incomingMessageTypes.TEST_IF_USER_IS_IN_QUEUE,
                            handlers: a.default.testIfUserIsInQueue
                        }, {
                            messageType: a.incomingMessageTypes.PLAY_CHOOSE_ME,
                            handlers: a.default.playChooseMe
                        }, {
                            messageType: a.incomingMessageTypes.PLAY_STORE_SOUND,
                            handlers: a.default.playStoreSound
                        }, {
                            messageType: a.incomingMessageTypes.OPEN_LCU_PAYMENTS_MODAL,
                            handlers: a.default.openLCUPaymentsModal
                        }, {
                            messageType: a.incomingMessageTypes.REQUEST_SKIN_EMBLEMS,
                            handlers: a.default.requestSkinEmblems
                        }, {
                            messageType: a.incomingMessageTypes.REQUEST_WARD_SKIN_IMAGE_PATHS,
                            handlers: a.default.requestWardSkinImagePaths
                        }, {
                            messageType: a.incomingMessageTypes.SUMMONER_NAME_CHANGE_COMPLETED,
                            handlers: a.default.createSummonerNameChangeModalHandler()
                        }, {
                            messageType: a.incomingMessageTypes.ACCOUNT_TRANSFER_STARTED,
                            handlers: a.default.createTransferModalHandler()
                        }, {
                            messageType: a.incomingMessageTypes.REQUEST_LCU_ENDPOINT,
                            handlers: a.default.requestLCUEndpoint
                        }, {
                            messageType: a.incomingMessageTypes.OPEN_ERROR_MODAL,
                            handlers: a.default.createErrorModal
                        }, {
                            messageType: a.incomingMessageTypes.SEND_LCU_TELEMETRY_EVENT,
                            handlers: a.default.sendLCUTelemetryEvent
                        }, {
                            messageType: a.incomingMessageTypes.SEND_TELEMETRY_PAGE_SESSION_START,
                            handlers: a.default.sendTelemetryPageSessionStart
                        }, {
                            messageType: a.incomingMessageTypes.SEND_TELEMETRY_PAGE_SESSION_UPDATE,
                            handlers: a.default.sendTelemetryPageSessionUpdate
                        }, {
                            messageType: a.incomingMessageTypes.SVU_LOADED_NOTIFICATION,
                            handlers: a.default.svuLoadedNotification
                        }, {
                            messageType: a.incomingMessageTypes.SEND_LCU_ERROR_LOG,
                            handlers: a.default.sendLCUErrorLog
                        }];
                        this.windowMessenger.addMessageListeners(e.contentWindow, n), this.messageListenersAdded = !0
                    }
                }
                timeoutToCheckStoreLoadingErrors() {
                    return window.setTimeout((() => {
                        if (this.svuIsLoading()) {
                            this.dataLayer.getStoreStatus().then((e => {
                                if (e && !e.isStorefrontRunning) {
                                    const e = {
                                        errorCode: 900,
                                        message: "storefront-not-running"
                                    };
                                    i.logger.error("privateApi->timeoutToCheckStoreLoadingError storefront not running", e), a.default.createErrorModal("openErrorModal", e)
                                } else i.logger.error("privateApi->timeoutToCheckStoreLoadingError storefront check not working")
                            })).catch((e => {
                                const n = {
                                    errorCode: 901,
                                    message: "store-status-non-reachable",
                                    errorTrace: e
                                };
                                i.logger.error("privateApi->timeoutToCheckStoreLoadingError lol-store/status catch", n), a.default.createErrorModal("openErrorModal", n)
                            })).finally((() => {
                                this.svuLoadedNotification()
                            }))
                        }
                    }), this.IFRAME_LOADED_TIMEOUT)
                }
                svuIsLoading() {
                    return this.isStoreShowing && this.isLoadingVisible()
                }
                svuLoadedNotification() {
                    this.hideLoading(), this.resolveShowPromise && this.resolveShowPromise(), this.isStoreLoading && (i.Telemetry.endTracingEvent("store-loaded"), this.isStoreLoading = !1)
                }
                setSidebarBackground() {
                    const e = this.viewport.main().getCurrentScreenRoot();
                    e && e._id && "rcp-fe-lol-store" === e._id.name && this.viewport.sidebar().setBackgroundGradient(this.dataLayer.sidebarBackgroundColor)
                }
            }
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.viewportScreenChanged = n.testIfUserIsInQueue = n.showInternalBrowser = n.sendTelemetryPageSessionUpdate = n.sendTelemetryPageSessionStart = n.sendLCUTelemetryEvent = n.sendLCUErrorLog = n.runeInventoryCount = n.requestWardSkinImagePaths = n.requestSkinEmblems = n.requestLCUEndpoint = n.playStoreSound = n.playChooseMe = n.outgoingMessageTypes = n.openLCUPaymentsModal = n.openLCUPawTemplateModal = n.openLCUPawModal = n.openLCUDropRatesModal = n.openLCUChoicePawModal = n.openInventoryBrowser = n.openExternalURL = n.navigateToLoot = n.incomingMessageTypes = n.handshakeRequest = n.getBuddyList = n.default = n.createTransferModalHandler = n.createSummonerNameChangeModalHandler = n.createErrorModal = void 0;
            var a, r = function(e, n) {
                    if (!n && e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = T(n);
                    if (t && t.has(e)) return t.get(e);
                    var a = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
                            var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, i, o) : a[i] = e[i]
                        } a.default = e, t && t.set(e, a);
                    return a
                }(t(1)),
                i = t(19),
                o = (a = t(20)) && a.__esModule ? a : {
                    default: a
                },
                E = t(22),
                _ = t(23),
                s = t(24);

            function T(e) {
                if ("function" != typeof WeakMap) return null;
                var n = new WeakMap,
                    t = new WeakMap;
                return (T = function(e) {
                    return e ? t : n
                })(e)
            }
            const l = Object.freeze({
                HANDSHAKE_REQUEST: "handshakeRequest",
                OPEN_EXTERNAL_URL: "openExternalURL",
                OPEN_INVENTORY_BROWSER: "openInventoryBrowser",
                OPEN_LCU_PAW_MODAL: "openLCUPawModal",
                OPEN_LCU_CHOICE_PAW_MODAL: "openLCUChoicePawModal",
                OPEN_LCU_PAW_TEMPLATE_MODAL: "openLCUPawTemplateModal",
                OPEN_LCU_PAYMENTS_MODAL: "openLCUPaymentsModal",
                OPEN_LCU_DROP_RATES_MODAL: "openLCUDropRatesModal",
                NAVIGATE_TO_LOOT: "navigateToLoot",
                REQUEST_SKIN_EMBLEMS: "requestSkinEmblems",
                ACCOUNT_TRANSFER_STARTED: "accountTransferStarted",
                SUMMONER_NAME_CHANGE_COMPLETED: "summonerNameChangeCompleted",
                SHOW_INTERNAL_BROWSER: "showInternalBrowser",
                GET_BUDDY_LIST: "getBuddyList",
                RUNE_INVENTORY_COUNT: "runeInventoryCount",
                TEST_IF_USER_IS_IN_QUEUE: "testIfUserIsInQueue",
                PLAY_CHOOSE_ME: "playChooseMe",
                PLAY_STORE_SOUND: "playStoreSound",
                REQUEST_WARD_SKIN_IMAGE_PATHS: "requestWardSkinImagePaths",
                REQUEST_LCU_ENDPOINT: "requestLCUEndpoint",
                OPEN_ERROR_MODAL: "openErrorModal",
                SEND_LCU_TELEMETRY_EVENT: "sendLCUTelemetryEvent",
                SEND_TELEMETRY_PAGE_SESSION_START: "sendTelemetryPageSessionStart",
                SEND_TELEMETRY_PAGE_SESSION_UPDATE: "sendTelemetryPageSessionUpdate",
                SEND_LCU_ERROR_LOG: "sendLCUErrorLog",
                SVU_LOADED_NOTIFICATION: "svuLoadedNotification"
            });
            n.incomingMessageTypes = l;
            const u = Object.freeze({
                HANDSHAKE_SUCCESS: "handshakeSuccess",
                RECEIVE_SKIN_EMBLEMS: "receiveSkinEmblems",
                RECEIVE_WARD_SKIN_IMAGE_PATHS: "receiveWardSkinImagePaths",
                RECIEVE_LCU_ENDPOINT_RESOLVE: "recieveLcuEndpointResolve",
                RECIEVE_LCU_ENDPOINT_REJECT: "recieveLcuEndpointReject",
                LCU_PAW_MODAL_SUCCESS: "lcuPawModalSuccess",
                VIEWPORT_SCREEN_CHANGE_EVENT: "viewportScreenChangeEvent"
            });
            n.outgoingMessageTypes = u;
            const R = () => {
                (0, o.default)({
                    messageType: u.HANDSHAKE_SUCCESS
                })
            };
            n.handshakeRequest = R;
            const I = e => {
                (0, o.default)({
                    messageType: u.VIEWPORT_SCREEN_CHANGE_EVENT,
                    data: {
                        screen: e
                    }
                })
            };
            n.viewportScreenChanged = I;
            const c = (e, {
                url: n
            }) => {
                n && window.open(n, "_blank")
            };
            n.openExternalURL = c;
            const A = (e, {
                fullChampionId: n
            }) => {
                const {
                    ChampionDetails: t
                } = r.default;
                if (!n) return;
                const a = parseInt(n.replace("champions_", ""), 10);
                t.show({
                    championId: a
                })
            };
            n.openInventoryBrowser = A;
            const N = (e, n) => {
                const t = n && n.lcuDataRequestId;
                n && n.basePath && n.subPath && t && r.DataLayer.getEndpoint(n.basePath, n.subPath).then((e => {
                    (0, o.default)({
                        messageType: u.RECIEVE_LCU_ENDPOINT_RESOLVE,
                        data: {
                            endpointData: e,
                            lcuDataRequestId: t
                        }
                    })
                })).catch((e => {
                    const a = {
                        errorTrace: e,
                        requestLCUEndpointData: n
                    };
                    r.logger.error("messageHandlers>requestLCUEndpoint", a), (0, o.default)({
                        messageType: u.RECIEVE_LCU_ENDPOINT_REJECT,
                        data: {
                            lcuDataRequestId: t,
                            error: e
                        }
                    })
                }))
            };
            n.requestLCUEndpoint = N;
            const S = (e, n) => {
                (0, _.sendTelemetry)(n)
            };
            n.sendLCUTelemetryEvent = S;
            const d = (e, n) => {
                (0, _.pageSessionStart)(n)
            };
            n.sendTelemetryPageSessionStart = d;
            const O = (e, n) => {
                (0, _.pageSessionUpdate)(n)
            };
            n.sendTelemetryPageSessionUpdate = O;
            const p = (e, n) => {
                r.logger.error("messageHandlers->sendLCUErrorLogFromSvu", n)
            };
            n.sendLCUErrorLog = p;
            const C = (e, {
                errorCode: n,
                customMessage: t
            }) => {
                const a = r.UIKit.getTemplateHelper(),
                    i = t || r.tra.formatString("notifications_error_details", {
                        errorCode: n
                    }),
                    o = a.contentBlockDialog(r.tra.get("notifications_error_title"), i);
                r.UIKit.getModalManager().add({
                    type: "DialogAlert",
                    data: {
                        contents: o,
                        okText: r.tra.get("notifications_error_button"),
                        dismissible: !1
                    }
                })
            };
            n.createErrorModal = C;
            const m = (e, n, t, a = void 0, i = void 0) => {
                    const {
                        PrivateAPI: o,
                        sharedPayments: _,
                        Payments: s
                    } = r.default;
                    r.DataLayer.getEnableRpTopUpConfiguration().then((T => {
                        (0, r.dataBinding)("lol-store").get(e, {
                            skipCache: !0
                        }).then((e => {
                            let r = t;
                            "CODE_REDEMPTION" === r && (r = "CODES_REDEMPTION"), T ? _.openPayments({
                                payload: JSON.parse(e).encryptedParameters,
                                action: r,
                                gifteeAccountId: a,
                                giftMessage: i,
                                mode: n,
                                playerAccountId: o.accountId,
                                openedFrom: "lol-store"
                            }) : s.openPayments({
                                payload: JSON.parse(e).encryptedParameters,
                                action: r,
                                gifteeAccountId: a,
                                giftMessage: i,
                                mode: n,
                                playerAccountId: o.accountId
                            })
                        })).catch((e => {
                            let n;
                            if (e && e.data && e.data.message) try {
                                const t = JSON.parse(e.data.message),
                                    a = JSON.parse(t.message)[0],
                                    i = E.giftErrorTranslation[a];
                                n = i ? r.tra.get(i) : ""
                            } catch (e) {}
                            C(0, n ? {
                                customMessage: n
                            } : {
                                errorCode: 200
                            })
                        }))
                    }))
                },
                L = (e, n) => {
                    const {
                        action: t,
                        summonerId: a,
                        giftMessage: i,
                        mode: o
                    } = n;
                    let E = `/v1/paymentDetails?action=${t}`;
                    a ? Promise.all([r.DataLayer.getLcuStoreConfig(), r.DataLayer.getEndpoint("/lol-summoner", `/v1/summoners/${a}`)]).then((e => {
                        const n = e[0],
                            r = e[1];
                        let _ = a;
                        if (n.PaymentsGiftingViaPuuid && (_ = r.puuid), E += `&giftRecipientAccountId=${a}`, i) {
                            const e = encodeURIComponent(i);
                            E += `&giftMessage=${e}`
                        }
                        m(E, o, t, _, i)
                    })) : m(E, o, t)
                };
            n.openLCUPaymentsModal = L;
            const P = (e, {
                championId: n
            }) => {
                (0, i.enqueueRequestSkinEmblemsCall)(n)
            };
            n.requestSkinEmblems = P;
            n.requestWardSkinImagePaths = () => {
                r.DataLayer.getWardSkinData().then((e => {
                    const n = e.reduce(((e, n) => {
                        const {
                            id: t,
                            wardImagePath: a,
                            wardShadowImagePath: r
                        } = n, i = Object.assign({}, e);
                        return i[t] = {
                            wardImagePath: a,
                            wardShadowImagePath: r
                        }, i
                    }), {});
                    (0, o.default)({
                        messageType: u.RECEIVE_WARD_SKIN_IMAGE_PATHS,
                        data: n
                    })
                }))
            };
            const h = () => {};
            n.showInternalBrowser = h;
            const M = () => {};
            n.getBuddyList = M;
            const g = () => {};
            n.runeInventoryCount = g;
            const f = () => {};
            n.testIfUserIsInQueue = f;
            const U = () => {};
            n.playChooseMe = U;
            const D = () => {};
            n.playStoreSound = D;
            const G = () => {
                let e;
                return () => {
                    e || (e = r.ComponentFactory.create("AccountTransfer"), r.UIKit.getLayerManager().addLayer(e.domNode))
                }
            };
            n.createTransferModalHandler = G;
            const b = () => {
                let e;
                return () => {
                    if (e) return;
                    const n = r.UIKit.getTemplateHelper().contentBlockDialog(r.tra.get("summoner_name_change_complete_heading"), r.tra.get("summoner_name_change_complete_message")),
                        t = r.UIKit.getModalManager();
                    e = t.add({
                        type: "DialogAlert",
                        data: {
                            contents: n,
                            okText: r.tra.get("summoner_name_change_complete_restart_button"),
                            dismissible: !1
                        }
                    }), e.okPromise.then((() => {
                        (0, r.dataBinding)("process-control").post("/v1/process/quit")
                    }))
                }
            };
            n.createSummonerNameChangeModalHandler = b;
            const y = (e, n) => {
                    !1 !== n && (0, o.default)({
                        messageType: u.LCU_PAW_MODAL_SUCCESS
                    })
                },
                v = "svuPaw",
                k = (e, n) => {
                    const {
                        PawModal: t
                    } = r.default, a = n && n.itemId, i = n && n.inventoryType;
                    a && i && t.createPAWModal({
                        itemId: a,
                        inventoryType: i
                    }, v, null, null, y)
                };
            n.openLCUPawModal = k;
            const F = (e, n) => {
                const {
                    PawModal: t
                } = r.default, a = n && n.itemId, i = n && n.inventoryType;
                a && i && r.DataLayer.getStatstonesData().then((e => {
                    const n = [a];
                    e.packItemIdToContainingPackItemId && e.packItemIdToContainingPackItemId[a] && e.packItemIdToContainingPackItemId[a][0] && n.push(e.packItemIdToContainingPackItemId[a][0]), t.createPAWChoiceModal({
                        itemIds: n,
                        inventoryType: i
                    }, v, null, null, y)
                })).catch((e => {
                    r.logger.error("Failed to retrieve eternals GDS data", e)
                }))
            };
            n.openLCUChoicePawModal = F;
            const H = (e, n) => {
                const {
                    PawModal: t,
                    DataLayer: a
                } = r.default, i = n && n.itemId, o = n && n.inventoryType;
                i && o && a.getCatalogItemData(i, o).then((e => {
                    if (!e || 1 !== e.length) return;
                    const n = e[0].offerId,
                        a = {
                            templateType: s.PAW.TEMPLATE_TYPES.LARGE_TWO_COLUMN_LANDSCAPE
                        };
                    t.createPawTemplateModalAsync(n, a, v).then((() => {
                        t.getBaseSkinLineData(n).then((e => {
                            e.onPurchaseComplete = y, t.populatePawTemplateModal(e)
                        }))
                    }))
                }))
            };
            n.openLCUPawTemplateModal = H;
            const B = (e, n) => {
                const t = n + "_OPEN";
                r.LootPlugin.createDropRatesModal(t)
            };
            n.openLCUDropRatesModal = B;
            const Y = (e, n) => {
                const t = {};
                n && (t.initialSelectedLootItem = n), r.Router.navigateTo("rcp-fe-lol-loot", t)
            };
            n.navigateToLoot = Y;
            var w = {
                handshakeRequest: R,
                viewportScreenChanged: I,
                openExternalURL: c,
                openInventoryBrowser: A,
                openLCUPawModal: k,
                openLCUChoicePawModal: F,
                openLCUPawTemplateModal: H,
                openLCUPaymentsModal: L,
                openLCUDropRatesModal: B,
                navigateToLoot: Y,
                requestLCUEndpoint: N,
                requestSkinEmblems: P,
                showInternalBrowser: h,
                getBuddyList: M,
                runeInventoryCount: g,
                testIfUserIsInQueue: f,
                playChooseMe: U,
                playStoreSound: D,
                createTransferModalHandler: G,
                createSummonerNameChangeModalHandler: b,
                createErrorModal: C,
                sendLCUTelemetryEvent: S,
                sendTelemetryPageSessionStart: d,
                sendTelemetryPageSessionUpdate: O,
                sendLCUErrorLog: p
            };
            n.default = w
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.enqueueRequestSkinEmblemsCall = function(e) {
                n = e, E.push(n), E.length === _ && (l(), T = null),
                    function() {
                        if (T) return null;
                        T = setTimeout(l, s)
                    }();
                var n
            };
            var a, r = t(1),
                i = (a = t(20)) && a.__esModule ? a : {
                    default: a
                },
                o = t(18);
            let E = [];
            const _ = 50,
                s = 250;
            let T = null;

            function l() {
                if (T = null, !E.length) return;
                const e = E.splice(-1 * _);
                E = [];
                const n = e.map((e => new Promise((n => {
                    r.DataLayer.getChampionData(e).then((t => {
                        const a = t.skins.reduce(((e, n) => Object.assign({}, e, {
                            [n.name]: n.emblems || []
                        })), {});
                        n({
                            championId: e,
                            emblemsBySkin: a
                        })
                    })).catch((() => {
                        n({})
                    }))
                }))));
                Promise.all(n).then((e => {
                    (0, i.default)({
                        messageType: o.outgoingMessageTypes.RECEIVE_SKIN_EMBLEMS,
                        data: e
                    }), T = setTimeout(l, s)
                }))
            }
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = function({
                messageType: e,
                data: n
            }) {
                const {
                    Screen: t,
                    WindowMessenger: a
                } = r.default, o = (0, i.getIframe)(t);
                o && o.contentWindow && a.sendMessage(o.contentWindow, {
                    messageType: e,
                    data: n
                })
            };
            var a, r = (a = t(1)) && a.__esModule ? a : {
                    default: a
                },
                i = t(21)
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.getIframe = function(e) {
                let n = e.getElement().getElementsByClassName("__rcp-fe-lol-store") || [];
                if (n = n[0], n) {
                    let e = n.getElementsByTagName("iframe") || [];
                    if (e) return e = e[0], e
                }
                return null
            }
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.giftErrorTranslation = void 0;
            n.giftErrorTranslation = {
                "exchange.rpGiftReceive.minLevelRequired": "gift_recipient_ineligible_min_level"
            }
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.STORE_TELEMETRY_TABLE = n.LCU_NAVIGATION_STORE_CLICK = n.FEATURED_PAGE = void 0, n.pageSessionEnd = T, n.pageSessionStart = function(e) {
                _.startPageSession(e)
            }, n.pageSessionUpdate = function(e) {
                _.updatePageSession(e)
            }, n.sendTelemetry = s;
            var a = t(1);
            const r = "featured";
            n.FEATURED_PAGE = r;
            const i = "league_store_2020";
            n.STORE_TELEMETRY_TABLE = i;
            n.LCU_NAVIGATION_STORE_CLICK = "lcu-navigation-store-click";
            const o = {
                    "lol-store-page-click": "pageName",
                    "lol-store-gifting-click": "gifting",
                    "lol-store-account-click": "account",
                    "lol-store-purchase-rp-click": "purchase-rp"
                },
                E = ["whatsnew", "featured", "topseller", "popular"];
            const _ = new class {
                constructor() {
                    this.currentPage = "", this.sessionStartTs = 0, this.sessionData = null
                }
                startPageSession(e) {
                    this.currentPage = e, this.sessionStartTs = window.performance.now(), this.sessionData = e === r ? {
                        furthestRowIndex: -1,
                        furthestRowSection: "",
                        furthestRowContent: "",
                        scrolledToBottom: !1
                    } : {
                        pageName: e,
                        furthestRowIndex: -1,
                        furthestRowContent: ""
                    }
                }
                updatePageSession(e) {
                    if (this.currentPage === r) {
                        const n = E.indexOf(e.furthestRowSection),
                            t = E.indexOf(this.sessionData.furthestRowSection);
                        (n > t || n === t && parseInt(e.furthestRowIndex) > parseInt(this.sessionData.furthestRowIndex) || "true" === e.scrolledToBottom) && (this.sessionData = e)
                    } else parseInt(e.furthestRowIndex) > parseInt(this.sessionData.furthestRowIndex) && (this.sessionData = e)
                }
                endPageSession(e = "unknown") {
                    if (!this.currentPage || !this.sessionStartTs) return;
                    const n = this.currentPage === r ? "lol-store-featured-page-session" : "lol-store-page-session",
                        t = Math.round(window.performance.now() - this.sessionStartTs) + "";
                    s(Object.assign({
                        eventName: n,
                        pageSessionDuration: t,
                        destination: e
                    }, this.sessionData)), this.currentPage = "", this.sessionStartTs = 0, this.sessionData = null
                }
            };

            function s(e) {
                a.Telemetry.sendCustomData(i, e);
                const n = e.eventName || "";
                if (o[n]) {
                    T(e[o[n]] || o[n])
                }
            }

            function T(e) {
                _.endPageSession(e)
            }
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), Object.defineProperty(n, "PAW", {
                enumerable: !0,
                get: function() {
                    return a.default
                }
            }), Object.defineProperty(n, "PROFILE_PRIVACY", {
                enumerable: !0,
                get: function() {
                    return _.default
                }
            }), Object.defineProperty(n, "QUEUES", {
                enumerable: !0,
                get: function() {
                    return r.default
                }
            }), Object.defineProperty(n, "REWARD_TRACKER", {
                enumerable: !0,
                get: function() {
                    return i.default
                }
            }), Object.defineProperty(n, "SETTINGS", {
                enumerable: !0,
                get: function() {
                    return E.default
                }
            }), Object.defineProperty(n, "SOCIAL", {
                enumerable: !0,
                get: function() {
                    return o.default
                }
            }), Object.defineProperty(n, "TIME", {
                enumerable: !0,
                get: function() {
                    return s.default
                }
            });
            var a = T(t(25)),
                r = T(t(36)),
                i = T(t(37)),
                o = T(t(38)),
                E = T(t(39)),
                _ = T(t(40)),
                s = T(t(41));

            function T(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        }, (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = R(t(26)),
                r = R(t(27)),
                i = R(t(28)),
                o = R(t(29)),
                E = R(t(30)),
                _ = R(t(31)),
                s = R(t(32)),
                T = R(t(33)),
                l = R(t(34)),
                u = R(t(35));

            function R(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var I = {
                COMPONENT_TYPES: a.default,
                CURRENCY_TYPES: r.default,
                INVENTORY_TYPES: i.default,
                MEDIA_TYPES: o.default,
                MEDIA_LOAD_TYPES: E.default,
                MODAL_TYPES: _.default,
                OFFER_PURCHASE_STATES: s.default,
                OFFER_VALIDATION_STATES: T.default,
                SCROLL_LIST_DISPLAY_TYPES: l.default,
                TEMPLATE_TYPES: u.default
            };
            n.default = I
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = {
                TEXT: "TEXT",
                TITLE_SUBTITLE: "TITLE_SUBTITLE",
                PURCHASE: "PURCHASE",
                MEDIA: "MEDIA",
                IMAGE_CAROUSEL: "IMAGE_CAROUSEL",
                SCROLL_LIST: "SCROLL_LIST",
                VERTICAL_LIST: "VERTICAL_LIST"
            };
            n.default = t
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = {
                RP: "RP",
                IP: "IP",
                BE: "lol_blue_essence"
            };
            n.default = t
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = {
                CHAMPION: "CHAMPION",
                CHAMPION_SKIN: "CHAMPION_SKIN",
                WARD_SKIN: "WARD_SKIN",
                BATTLE_BOOST: "BATTLE_BOOST",
                GIFT: "GIFT",
                MYSTERY: "MYSTERY",
                BUNDLES: "BUNDLES",
                SUMMONER_ICON: "SUMMONER_ICON",
                STATSTONE: "STATSTONE"
            };
            n.default = t
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = {
                SVG: "SVG",
                IMAGE: "IMAGE",
                VIDEO: "VIDEO"
            };
            n.default = t
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = {
                LOCAL_ASSET: "LOCAL_ASSET",
                EXTERNAL_URL: "EXTERNAL_URL",
                GAME_DATA: "GAME_DATA"
            };
            n.default = t
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = {
                CHAMPION_MODAL: "CHAMPION_MODAL",
                SKIN_VIEWER_MODAL: "SKIN_VIEWER_MODAL",
                MULTIPLE_PURCHASE_MODAL: "MULTIPLE_PURCHASE_MODAL",
                CHROMA_MODAL: "CHROMA_MODAL",
                CHROMA_BUNDLE_MODAL: "CHROMA_BUNDLE_MODAL",
                SUMMONER_ICON_MODAL: "SUMMONER_ICON_MODAL",
                WARD_SKIN_MODAL: "WARD_SKIN_MODAL",
                SKIN_WITH_DEPENDENCY_MODAL: "SKIN_WITH_DEPENDENCY_MODAL",
                PAW_GENERIC_MODAL: "PAW_GENERIC_MODAL"
            };
            n.default = t
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = {
                NOT_STARTED: "NOT_STARTED",
                IN_PROGRESS: "IN_PROGRESS",
                SUCCESS: "SUCCESS",
                FAIL: "FAIL"
            };
            n.default = t
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = {
                NOT_STARTED: "NOT_STARTED",
                IN_PROGRESS: "IN_PROGRESS",
                COMPLETED: "COMPLETED"
            };
            n.default = t
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = {
                EXPANDED: "EXPANDED",
                COMPACT: "COMPACT",
                DETAILED: "DETAILED"
            };
            n.default = t
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = {
                LARGE_TWO_COLUMN_LANDSCAPE: "LARGE_TWO_COLUMN_LANDSCAPE"
            };
            n.default = t
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            const t = "RANKED_SOLO_5x5",
                a = "RANKED_FLEX_SR",
                r = "RANKED_FLEX_TT",
                i = "CHERRY",
                o = "RANKED_TFT",
                E = "RANKED_TFT_DOUBLE_UP",
                _ = "RANKED_TFT_TURBO",
                s = "RANKED_TFT_PAIRS",
                T = [t, a],
                l = [...T, r],
                u = [i],
                R = [o, E],
                I = [_, s],
                c = [...R, ...I],
                A = [...l, ...R],
                N = [...I, ...u];
            var S = {
                RANKED_SOLO_5x5_QUEUE_TYPE: t,
                RANKED_FLEX_SR_QUEUE_TYPE: a,
                RANKED_FLEX_TT_QUEUE_TYPE: r,
                RANKED_CHERRY_QUEUE_TYPE: i,
                RANKED_TFT_QUEUE_TYPE: o,
                RANKED_TFT_DOUBLE_UP_QUEUE_TYPE: E,
                RANKED_TFT_TURBO_QUEUE_TYPE: _,
                RANKED_TFT_PAIRS_QUEUE_TYPE: s,
                RANKED_LOL_QUEUE_TYPES: l,
                RANKED_SR_QUEUE_TYPES: T,
                RANKED_TFT_QUEUE_TYPES: R,
                RATED_TFT_QUEUE_TYPES: I,
                RANKED_AND_RATED_TFT_QUEUE_TYPES: c,
                ALL_RANKED_QUEUE_TYPES: A,
                ALL_RATED_QUEUE_TYPES: N,
                ALL_RANKED_AND_RATED_QUEUE_TYPES: [...A, ...N]
            };
            n.default = S
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = {
                REWARD_TAGS: {
                    INSTANT: "Instant",
                    RARE: "Rare",
                    CHOICE: "Choice",
                    MULTIPLE: "Multiple"
                },
                MILESTONE_STAGES: {
                    COMPLETED: "completed",
                    CURRENT: "current",
                    FUTURE: "future",
                    HOVERING_COMPLETED: "future-completed"
                },
                REWARD_STATE: {
                    LOCKED: "Locked",
                    UNLOCKED: "Unlocked",
                    UNSELECTED: "Unselected",
                    SELECTED: "Selected"
                },
                TRACKER_SIZE: {
                    SMALL: "tracker-size-small",
                    MEDIUM: "tracker-size-medium"
                },
                REWARD_OPTION_HEADER_TYPE: {
                    FREE: "FREE",
                    PREMIUM: "PREMIUM",
                    NONE: "NONE"
                }
            };
            n.default = t
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = {
                DEFAULT_SUMMONER_ICON_ID: 29
            };
            n.default = t
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = {
                AUTO: "auto",
                ALWAYS: "always",
                NEVER: "never"
            };
            n.default = t
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            const t = {
                    UNKNOWN: "UNKNOWN",
                    ENABLED: "ENABLED",
                    DISABLED: "DISABLED"
                },
                a = {
                    PRIVATE: "PRIVATE",
                    PUBLIC: "PUBLIC"
                };
            var r = {
                ProfilePrivacyEnabledState: t,
                ProfilePrivacySetting: a,
                DEFAULT_PROFILE_PRIVACY: {
                    enabledState: t.UNKNOWN,
                    setting: a.PUBLIC
                }
            };
            n.default = r
        }, (e, n) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = n.TIME_UNITS = n.TIME_CONVERSIONS = void 0;
            const t = {
                MILLISECONDS: "milliseconds",
                SECONDS: "seconds",
                MINUTES: "minutes",
                HOURS: "hours",
                DAYS: "days",
                WEEKS: "weeks",
                MONTHS: "months",
                YEARS: "years"
            };
            n.TIME_UNITS = t;
            const a = 36e5,
                r = 864e5,
                i = 6048e5,
                o = {
                    MILLISECONDS_IN_A_SECOND: 1e3,
                    MILLISECONDS_IN_A_MINUTE: 6e4,
                    MILLISECONDS_IN_A_HOUR: a,
                    MILLISECONDS_IN_A_DAY: r,
                    MILLISECONDS_IN_A_WEEK: i,
                    MILLISECONDS_IN_A_YEAR: 314496e5
                };
            n.TIME_CONVERSIONS = o;
            var E = {
                TIME_UNITS: t,
                TIME_CONVERSIONS: o
            };
            n.default = E
        }, e => {
            "use strict";
        }, (e, n, t) => {
            "use strict";
            var a = t(1);
            t(44);
            const r = (0, a.emberDataBinding)({
                    Ember: a.Ember,
                    websocket: (0, a.getProvider)().getSocket(),
                    basePaths: {
                        login: "/lol-login",
                        processControl: "/process-control"
                    },
                    boundProperties: {
                        accountState: "/lol-login/v1/account-state"
                    }
                }),
                i = a.Ember.Component.extend(r, {
                    classNames: ["account-transfer-component"],
                    layout: t(45),
                    transferred: a.Ember.computed.not("transferring"),
                    quitDisabled: a.Ember.computed.alias("transferring"),
                    onInit: a.Ember.on("init", (function() {
                        this.get("api.login").post("/v1/account-state")
                    })),
                    transferring: a.Ember.computed("accountState.state", (function() {
                        const e = this.get("accountState.state");
                        return !e || "TRANSFERRING_OUT" === e
                    })),
                    actions: {
                        quit() {
                            this.get("api.processControl").post("/v1/process/quit")
                        }
                    }
                });
            e.exports = i
        }, (e, n, t) => {
            "use strict";
            t.r(n)
        }, (e, n, t) => {
            const a = t(1).Ember;
            e.exports = a.HTMLBars.template({
                id: "ljfBcSvL",
                block: '{"statements":[["comment","#ember-component template-path=\\"T:\\\\cid\\\\p4\\\\Releases_13_22\\\\LeagueClientContent_Release\\\\15682\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-store\\\\src\\\\app\\\\account-transfer-component\\\\layout.hbs\\" style-path=\\"T:\\\\cid\\\\p4\\\\Releases_13_22\\\\LeagueClientContent_Release\\\\15682\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-store\\\\src\\\\app\\\\account-transfer-component\\\\style.styl\\" js-path=\\"T:\\\\cid\\\\p4\\\\Releases_13_22\\\\LeagueClientContent_Release\\\\15682\\\\DevRoot\\\\Client\\\\fe\\\\rcp-fe-lol-store\\\\src\\\\app\\\\account-transfer-component\\\\index.js\\" "],["text","\\n"],["open-element","lol-uikit-full-page-backdrop",[]],["flush-element"],["text","\\n  "],["open-element","lol-uikit-dialog-frame",[]],["flush-element"],["text","\\n    "],["open-element","lol-uikit-content-block",[]],["static-attr","type","dialog-medium"],["flush-element"],["text","\\n"],["block",["if"],[["get",["transferring"]]],null,2,1],["text","    "],["close-element"],["text","\\n\\n    "],["open-element","lol-uikit-flat-button",[]],["dynamic-attr","disabled",["unknown",["quitDisabled"]],null],["dynamic-attr","onclick",["helper",["action"],[["get",[null]],"quit"],null],null],["flush-element"],["text","\\n      "],["append",["unknown",["tra","account_transfer_restart"]],false],["text","\\n    "],["close-element"],["text","\\n  "],["close-element"],["text","\\n"],["close-element"],["text","\\n"]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","        "],["open-element","h5",[]],["flush-element"],["append",["unknown",["tra","account_transferred_out"]],false],["close-element"],["text","\\n      "]],"locals":[]},{"statements":[["block",["if"],[["get",["transferred"]]],null,0]],"locals":[]},{"statements":[["text","        "],["open-element","h5",[]],["flush-element"],["append",["unknown",["tra","account_transferring_out"]],false],["close-element"],["text","\\n        "],["open-element","div",[]],["static-attr","class","transferring-spinner"],["flush-element"],["close-element"],["text","\\n"]],"locals":[]}],"hasPartials":false}',
                meta: {}
            })
        }],
        n = {};

    function t(a) {
        var r = n[a];
        if (void 0 !== r) return r.exports;
        var i = n[a] = {
            exports: {}
        };
        return e[a](i, i.exports, t), i.exports
    }
    t.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        "use strict";
        var e, n = (e = t(1)) && e.__esModule ? e : {
            default: e
        };
        t(2);
        const a = "rcp-fe-lol-store",
            r = document.currentScript.ownerDocument;
        const i = window.getPluginAnnounceEventName(a);
        r.addEventListener(i, (function(e) {
            (0, e.registrationHandler)((e => {
                const r = e.get("rcp-fe-lol-shared-components").getApi_Viewport(),
                    i = e.get("rcp-fe-common-libs"),
                    o = i.getTelemetry(1),
                    E = i.getHtmlSanitizer();
                return n.default.init(e, {
                    sharedPayments: e => e.get("rcp-fe-lol-shared-components").getApi_Payments(),
                    ChampionDetails: e => e.get("rcp-fe-lol-champion-details"),
                    ComponentFactory: e => e.get("rcp-fe-common-libs").getComponentFactory("1"),
                    dataBinding: e => e.get("rcp-fe-common-libs").getDataBinding("rcp-fe-lol-store"),
                    Ember: e => e.get("rcp-fe-ember-libs").getEmber(),
                    emberDataBinding: e => e.get("rcp-fe-ember-libs").getEmberDataBinding("rcp-fe-lol-store"),
                    emberL10n: e => e.get("rcp-fe-ember-libs").getEmberL10n("1"),
                    HtmlSanitizer: () => E,
                    logger: e => e.get("rcp-fe-common-libs").logging.create(a),
                    LootPlugin: e => e.get("rcp-fe-lol-loot"),
                    PawModal: e => e.get("rcp-fe-lol-paw"),
                    Router: e => e.get("rcp-fe-lol-shared-components").getApi_Router(),
                    Screen: () => r.main().getScreenRoot("rcp-fe-lol-store"),
                    Telemetry: () => o,
                    tra: e => e.get("rcp-fe-lol-l10n").tra().overlay("/fe/lol-l10n/trans.json").overlay("/fe/lol-store/trans.json"),
                    UIKit: e => e.get("rcp-fe-lol-uikit"),
                    Viewport: () => r,
                    WindowMessenger: e => e.get("rcp-fe-common-libs").getWindowMessenger()
                }).then((() => {
                    const e = t(3).default;
                    return n.default.add({
                        StoreAPI: () => new e
                    })
                })).then((() => {
                    const a = t(6).default;
                    return n.default.add({
                        EmberApplicationFactory: e => e.get("rcp-fe-ember-libs").getEmberApplicationFactory(),
                        DataLayer: () => new a(e)
                    })
                })).then((() => {
                    const e = t(7).default;
                    n.default.Payments = e();
                    const a = t(16).default,
                        r = t(17).default,
                        {
                            Ember: i,
                            emberL10n: o,
                            EmberApplicationFactory: E,
                            tra: _
                        } = n.default,
                        s = new a(new r),
                        T = o(i, _);
                    return E.setFactoryDefinition({
                        name: "AccountTransfer",
                        tra: T,
                        AccountTransferComponent: t(43),
                        ComponentFactory: n.default.ComponentFactory
                    }), s
                }))
            }))
        }), {
            once: !0
        })
    })()
})();