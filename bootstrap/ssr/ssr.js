import { mergeProps, unref, withCtx, createVNode, useSSRContext, ref, onMounted, createBlock, createCommentVNode, openBlock, Fragment, renderList, toDisplayString, createTextVNode, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { Link, Head, createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _imports_0$1 = "/build/assets/logo-DyLf0qO_.png";
const _imports_1$1 = "/build/assets/main-BAMkUpqr.svg";
const _imports_2$1 = "/build/assets/boatheader-Bwv9SM1Z.svg";
const _imports_3$1 = "/build/assets/about-us-BMCSkFTA.svg";
const _imports_4$1 = "/build/assets/faq-DBteQbcb.svg";
const _imports_5$1 = "/build/assets/checklist-CJGwUmIy.svg";
const _imports_6$1 = "/build/assets/globe-BW63dHV2.svg";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$3 = {
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "navbar" }, _attrs))} data-v-4e8b709f><div class="logo" data-v-4e8b709f><img${ssrRenderAttr("src", _imports_0$1)} alt="" data-v-4e8b709f><div class="logo-text" data-v-4e8b709f>Fler&amp;Co</div></div><nav class="navbar-links" data-v-4e8b709f>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/",
        class: ["nav-link", { active: _ctx.$page.url === "/" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1$1)} class="icon" alt="" data-v-4e8b709f${_scopeId}><div class="title" data-v-4e8b709f${_scopeId}>Главная</div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1$1,
                class: "icon",
                alt: ""
              }),
              createVNode("div", { class: "title" }, "Главная")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "/catalog",
        class: ["nav-link", { active: _ctx.$page.url.startsWith("/catalog") }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_2$1)} class="icon" alt="" data-v-4e8b709f${_scopeId}><div class="title" data-v-4e8b709f${_scopeId}>Каталог</div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_2$1,
                class: "icon",
                alt: ""
              }),
              createVNode("div", { class: "title" }, "Каталог")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "#",
        class: ["nav-link", { active: false }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_3$1)} class="icon" alt="" data-v-4e8b709f${_scopeId}><div class="title" data-v-4e8b709f${_scopeId}>Про нас</div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_3$1,
                class: "icon",
                alt: ""
              }),
              createVNode("div", { class: "title" }, "Про нас")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: "#",
        class: ["nav-link", { active: false }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_4$1)} class="icon" alt="" data-v-4e8b709f${_scopeId}><div class="title" data-v-4e8b709f${_scopeId}>Помощь</div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_4$1,
                class: "icon",
                alt: ""
              }),
              createVNode("div", { class: "title" }, "Помощь")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="navbar-buttons" data-v-4e8b709f><a href="#" class="navbar-button" data-v-4e8b709f><img${ssrRenderAttr("src", _imports_5$1)} alt="" data-v-4e8b709f></a><a href="#" class="navbar-button" data-v-4e8b709f><img${ssrRenderAttr("src", _imports_6$1)} alt="" data-v-4e8b709f></a></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Navbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-4e8b709f"]]);
const _sfc_main$2 = {
  __name: "FrontendLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<html${ssrRenderAttrs(mergeProps({ lang: "en" }, _attrs))}><head>`);
      _push(ssrRenderComponent(unref(Head), null, null, _parent));
      _push(`</head><body class="body">`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</body></html>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/FrontendLayout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const activeProduct = ref(0);
    const products = ref([
      {
        id: 1,
        thumbnail_url: "/images/seat1.png",
        images: [
          "/images/seat1.png",
          "/images/seat2.png",
          "/images/seat3.png"
        ],
        blueprints: [
          "/images/bgfishseatbp 1.png",
          "/images/bgfishseatbp 2.png",
          "/images/bgfishseatbp1.png"
        ],
        title: "Лодочное кресло складное Fler&Co™"
      },
      {
        id: 2,
        thumbnail_url: "/images/seat2.png",
        images: [
          "/images/seat1.png",
          "/images/seat2.png",
          "/images/seat3.png"
        ],
        blueprints: [
          "/images/bgfishseatbp 1.png",
          "/images/bgfishseatbp 2.png",
          "/images/bgfishseatbp1.png"
        ],
        title: "Лодочное кресло складное Fler&Co™"
      },
      {
        id: 3,
        thumbnail_url: "/images/seat3.png",
        images: [
          "/images/seat1.png",
          "/images/seat2.png",
          "/images/seat3.png"
        ],
        blueprints: [
          "/images/bgfishseatbp 1.png",
          "/images/bgfishseatbp 2.png",
          "/images/bgfishseatbp1.png"
        ],
        title: "Лодочное кресло складное Fler&Co™"
      },
      {
        id: 4,
        thumbnail_url: "/images/seat1.png",
        images: [
          "/images/seat1.png",
          "/images/seat2.png",
          "/images/seat3.png"
        ],
        blueprints: [
          "/images/bgfishseatbp 1.png",
          "/images/bgfishseatbp 2.png",
          "/images/bgfishseatbp1.png"
        ],
        title: "Лодочное кресло складное Fler&Co™"
      },
      {
        id: 5,
        thumbnail_url: "/images/seat1.png",
        images: [
          "/images/seat1.png",
          "/images/seat2.png",
          "/images/seat3.png"
        ],
        blueprints: [
          "/images/bgfishseatbp 1.png",
          "/images/bgfishseatbp 2.png",
          "/images/bgfishseatbp1.png"
        ],
        title: "Лодочное кресло складное Fler&Co™"
      }
    ]);
    onMounted(() => {
      activeProduct.value = products.value[0];
    });
    const switchCard = (product) => {
      activeProduct.value = product;
    };
    const changePhoto = (photoIndex) => {
      activeProduct.value.selectedPhoto = photoIndex;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="catalog-wrapper" data-v-5a516c1d${_scopeId}><h1 data-v-5a516c1d${_scopeId}>Наши изделия</h1><div class="product-cards container" data-v-5a516c1d${_scopeId}><!--[-->`);
            ssrRenderList(products.value, (product) => {
              _push2(`<div class="${ssrRenderClass([{ active: activeProduct.value.id === product.id }, "product-card"])}" data-v-5a516c1d${_scopeId}><div class="product-card-content" data-v-5a516c1d${_scopeId}><img${ssrRenderAttr("src", product.thumbnail_url)} alt="" class="product-card-image" data-v-5a516c1d${_scopeId}><div class="product-card-title" data-v-5a516c1d${_scopeId}>${ssrInterpolate(product.title)}</div></div></div>`);
            });
            _push2(`<!--]--></div><div class="progress-bar" data-v-5a516c1d${_scopeId}><!--[-->`);
            ssrRenderList(products.value, (product) => {
              _push2(`<div class="${ssrRenderClass([{ active: product.id === activeProduct.value.id }, "line"])}" data-v-5a516c1d${_scopeId}></div>`);
            });
            _push2(`<!--]--></div>`);
            if (activeProduct.value) {
              _push2(`<div class="container" data-v-5a516c1d${_scopeId}><div class="product-layout" data-v-5a516c1d${_scopeId}><div class="row" data-v-5a516c1d${_scopeId}><div class="col" data-v-5a516c1d${_scopeId}><div class="card product-gallery" data-v-5a516c1d${_scopeId}><div class="main-image" data-v-5a516c1d${_scopeId}><img${ssrRenderAttr("src", activeProduct.value.selectedPhoto ? (_a = activeProduct.value) == null ? void 0 : _a.images[activeProduct.value.selectedPhoto] : ((_b = activeProduct.value) == null ? void 0 : _b.images[0]) ?? "")} alt="" data-v-5a516c1d${_scopeId}></div><div class="gallery-images" data-v-5a516c1d${_scopeId}><!--[-->`);
              ssrRenderList(activeProduct.value.images, (image, index) => {
                _push2(`<div class="${ssrRenderClass([{ active: activeProduct.value.selectedPhoto === index || !activeProduct.value.selectedPhoto && index === 0 }, "gallery-image"])}" data-v-5a516c1d${_scopeId}><div class="flashlight-bg" data-v-5a516c1d${_scopeId}></div><img${ssrRenderAttr("src", image)}${ssrRenderAttr("alt", activeProduct.value.title + " - Фото " + (index + 1))} data-v-5a516c1d${_scopeId}></div>`);
              });
              _push2(`<!--]--></div></div></div><div class="col" data-v-5a516c1d${_scopeId}><div class="card product-info" data-v-5a516c1d${_scopeId}></div><div class="card product-blueprints" data-v-5a516c1d${_scopeId}><!--[-->`);
              ssrRenderList(activeProduct.value.blueprints, (blueprint, index) => {
                _push2(`<img${ssrRenderAttr("src", blueprint)}${ssrRenderAttr("alt", activeProduct.value.title + " - Чертеж " + (index + 1))} data-v-5a516c1d${_scopeId}>`);
              });
              _push2(`<!--]--></div></div></div><div class="row" data-v-5a516c1d${_scopeId}><div class="col" data-v-5a516c1d${_scopeId}><div class="card product-colors" data-v-5a516c1d${_scopeId}>1</div></div></div><div class="row" data-v-5a516c1d${_scopeId}><div class="col" data-v-5a516c1d${_scopeId}><div class="card product-controls" data-v-5a516c1d${_scopeId}>1</div></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "catalog-wrapper" }, [
                createVNode("h1", null, "Наши изделия"),
                createVNode("div", { class: "product-cards container" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(products.value, (product) => {
                    return openBlock(), createBlock("div", {
                      class: ["product-card", { active: activeProduct.value.id === product.id }],
                      key: product.id,
                      onClick: ($event) => switchCard(product)
                    }, [
                      createVNode("div", { class: "product-card-content" }, [
                        createVNode("img", {
                          src: product.thumbnail_url,
                          alt: "",
                          class: "product-card-image"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "product-card-title" }, toDisplayString(product.title), 1)
                      ])
                    ], 10, ["onClick"]);
                  }), 128))
                ]),
                createVNode("div", { class: "progress-bar" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(products.value, (product) => {
                    return openBlock(), createBlock("div", {
                      class: ["line", { active: product.id === activeProduct.value.id }]
                    }, null, 2);
                  }), 256))
                ]),
                activeProduct.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "container"
                }, [
                  createVNode("div", { class: "product-layout" }, [
                    createVNode("div", { class: "row" }, [
                      createVNode("div", { class: "col" }, [
                        createVNode("div", { class: "card product-gallery" }, [
                          createVNode("div", { class: "main-image" }, [
                            createVNode("img", {
                              src: activeProduct.value.selectedPhoto ? (_c = activeProduct.value) == null ? void 0 : _c.images[activeProduct.value.selectedPhoto] : ((_d = activeProduct.value) == null ? void 0 : _d.images[0]) ?? "",
                              alt: ""
                            }, null, 8, ["src"])
                          ]),
                          createVNode("div", { class: "gallery-images" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(activeProduct.value.images, (image, index) => {
                              return openBlock(), createBlock("div", {
                                class: ["gallery-image", { active: activeProduct.value.selectedPhoto === index || !activeProduct.value.selectedPhoto && index === 0 }],
                                key: index,
                                onClick: ($event) => changePhoto(index)
                              }, [
                                createVNode("div", { class: "flashlight-bg" }),
                                createVNode("img", {
                                  src: image,
                                  alt: activeProduct.value.title + " - Фото " + (index + 1)
                                }, null, 8, ["src", "alt"])
                              ], 10, ["onClick"]);
                            }), 128))
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col" }, [
                        createVNode("div", { class: "card product-info" }),
                        createVNode("div", { class: "card product-blueprints" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(activeProduct.value.blueprints, (blueprint, index) => {
                            return openBlock(), createBlock("img", {
                              key: index,
                              src: blueprint,
                              alt: activeProduct.value.title + " - Чертеж " + (index + 1)
                            }, null, 8, ["src", "alt"]);
                          }), 128))
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row" }, [
                      createVNode("div", { class: "col" }, [
                        createVNode("div", { class: "card product-colors" }, "1")
                      ])
                    ]),
                    createVNode("div", { class: "row" }, [
                      createVNode("div", { class: "col" }, [
                        createVNode("div", { class: "card product-controls" }, "1")
                      ])
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Catalog/Index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5a516c1d"]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
const _imports_0 = "/build/assets/landscape-C4L5ok_S.png";
const _imports_1 = "/build/assets/medal-BSpcdiJD.svg";
const _imports_2 = "/build/assets/boat-0CrhRVMm.svg";
const _imports_3 = "/build/assets/globe-white-DsXKnxQW.svg";
const _imports_4 = "/build/assets/like-DQCgnwIy.svg";
const _imports_5 = "/build/assets/checkmark-CU4Yv9o1.png";
const _imports_6 = "/build/assets/lodka-CBD5lB22.png";
const _imports_7 = "/build/assets/seat1-Cxe27AU_.png";
const _imports_8 = "/build/assets/seat2-BGUFPmip.png";
const _imports_9 = "/build/assets/seat3-ge-0kSnd.png";
const _imports_10 = "/build/assets/pin-CD-fRdjo.svg";
const _imports_11 = "/build/assets/cell-rBqlYlLS.svg";
const _imports_12 = "/build/assets/mail-BNdoMRtj.svg";
const _imports_13 = "/build/assets/clock-white-BJ_xX43x.svg";
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="gradient-sides-container"${_scopeId}><section class="banner-section" id="header-section"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} class="banner-bg" alt=""${_scopeId}><div class="banner-content"${_scopeId}><h1${_scopeId}> Кресла для вашей лодки <br${_scopeId}><span${_scopeId}>Родом из Украины</span></h1><p class="banner-description"${_scopeId}> Хотите ощутить новизну своего судна? Покупать лодку ни к чему — наши мастера сделают лучше специально для вас. Испытайте новый уровень удобства, надежности и стиля с Fler&amp;Co </p><div class="banner-btns"${_scopeId}><div class="btn btn-primary"${_scopeId}>Узнать больше</div><div class="btn btn-outline"${_scopeId}>Написать нам</div></div></div></section><section class="stats" id="stats"${_scopeId}><div class="gradient-sides"${_scopeId}><div class="side"${_scopeId}></div><div class="side"${_scopeId}></div></div><div class="stats-items"${_scopeId}><div class="stats-item"${_scopeId}><img class="stats-item__icon" alt=""${ssrRenderAttr("src", _imports_1)}${_scopeId}><b class="stats-item__title"${_scopeId}>16 лет</b><div class="stats-item__desc"${_scopeId}>На рынке</div></div><div class="stats-item"${_scopeId}><img class="stats-item__icon" alt=""${ssrRenderAttr("src", _imports_2)}${_scopeId}><b class="stats-item__title"${_scopeId}>5000+</b><div class="stats-item__desc"${_scopeId}>Изделий изготовлено</div></div><div class="stats-item"${_scopeId}><img class="stats-item__icon" alt=""${ssrRenderAttr("src", _imports_3)}${_scopeId}><b class="stats-item__title"${_scopeId}>20 стран</b><div class="stats-item__desc"${_scopeId}>Экспорт</div></div><div class="stats-item"${_scopeId}><img class="stats-item__icon" alt=""${ssrRenderAttr("src", _imports_4)}${_scopeId}><b class="stats-item__title"${_scopeId}>98%</b><div class="stats-item__desc"${_scopeId}>Позитивных отзывов</div></div></div><div class="section-content"${_scopeId}><h2 class="section-title"${_scopeId}>Украинские изделия – Европейские стандарты</h2><p class="section-desc"${_scopeId}> Наша мастерская запустила производство в 2008 году, и за это время мы стали лидирующим поставщиком лодочных изделий в Украине, комбинируя премиальные материалы и мастерскую обивку </p></div></section><section class="why-us" id="why-us"${_scopeId}><div class="section-content"${_scopeId}><h2 class="section-title"${_scopeId}>Почему Fler&amp;Co?</h2></div><div class="why-us-content"${_scopeId}><div class="advantages"${_scopeId}><div class="advantage"${_scopeId}><img${ssrRenderAttr("src", _imports_5)} alt="" class="advantage-icon"${_scopeId}><div class="advantage-content"${_scopeId}><div class="advantage-title"${_scopeId}>100% украинский продукт</div><div class="advantage-desc"${_scopeId}>Начиная с разработки дизайна, цепочка создания кресел и аксессуаров полностью базируется в Украине</div></div></div><div class="advantage"${_scopeId}><img${ssrRenderAttr("src", _imports_5)} alt="" class="advantage-icon"${_scopeId}><div class="advantage-content"${_scopeId}><div class="advantage-title"${_scopeId}>Современные технологии</div><div class="advantage-desc"${_scopeId}>Для точнейшей работы с деталями мы используем компьютерные чертежи и лазерный станок для выкройки авторского производства</div></div></div><div class="advantage"${_scopeId}><img${ssrRenderAttr("src", _imports_5)} alt="" class="advantage-icon"${_scopeId}><div class="advantage-content"${_scopeId}><div class="advantage-title"${_scopeId}>Низкая цена - высокое качество</div><div class="advantage-desc"${_scopeId}>Обивка из морского винила устойчива к УФ и прослужит десятилетия, а наши цены до 30% ниже рыночных за счёт украинского производства</div></div></div><div class="advantage"${_scopeId}><img${ssrRenderAttr("src", _imports_5)} alt="" class="advantage-icon"${_scopeId}><div class="advantage-content"${_scopeId}><div class="advantage-title"${_scopeId}>Доставка от 2 дней по всей Европе</div><div class="advantage-desc"${_scopeId}>Начиная с разработки дизайна, цепочка создания кресел и аксессуаров полностью базируется в Украине</div></div></div></div><img${ssrRenderAttr("src", _imports_6)} class="why-us-image" alt=""${_scopeId}></div></section></div><section class="our-products" id="our-products"${_scopeId}><div class="section-content"${_scopeId}><h2 class="section-title"${_scopeId}>Наши изделия</h2><p class="section-desc"${_scopeId}>Любой дизайн, любая прихоть - выберите основу под ваши требования и настройте её под ваши нравы</p></div><div class="products"${_scopeId}><a href="#" class="product"${_scopeId}><img${ssrRenderAttr("src", _imports_7)} alt=""${_scopeId}></a><a href="#" class="product"${_scopeId}><img${ssrRenderAttr("src", _imports_8)} alt=""${_scopeId}></a><a href="#" class="product"${_scopeId}><img${ssrRenderAttr("src", _imports_9)} alt=""${_scopeId}></a></div><div class="btn btn-primary"${_scopeId}>Подробнее</div></section><section class="contact-us" id="contact-us"${_scopeId}><div class="section-content"${_scopeId}><h2 class="section-title"${_scopeId}>Напишите нам</h2><p class="section-desc"${_scopeId}> Хотите повысить комфорт своих путешествий? <br${_scopeId}> Свяжитесь с нами, чтобы получить техническую поддержку, уточнить цену или узнать подробности о продукции </p></div><div class="contacts"${_scopeId}><form action="" class="contact-form"${_scopeId}><div class="row"${_scopeId}><div class="input-group col"${_scopeId}><label${_scopeId}>Имя</label><input type="text"${_scopeId}></div><div class="input-group col"${_scopeId}><label${_scopeId}>Email / Номер телефона</label><input type="text"${_scopeId}></div></div><div class="input-group"${_scopeId}><label${_scopeId}>Тема</label><input type="text"${_scopeId}></div><div class="input-group"${_scopeId}><label${_scopeId}>Сообщение</label><textarea rows="8"${_scopeId}></textarea></div><div class="btn btn-primary"${_scopeId}>Отправить</div></form><div class="contact-info"${_scopeId}><div class="contact-info-title"${_scopeId}>Контактная информация</div><div class="contact-info-items"${_scopeId}><div class="contact-info-item"${_scopeId}><img alt="" class="contact-info-item__icon"${ssrRenderAttr("src", _imports_10)}${_scopeId}><div class="contact-info-item-content"${_scopeId}><div class="contact-info-item__title"${_scopeId}>Адрес</div><div class="contact-info-item__desc"${_scopeId}>ул. Алматинская 66A, Киев, Украина 02000</div></div></div><div class="contact-info-item"${_scopeId}><img alt="" class="contact-info-item__icon"${ssrRenderAttr("src", _imports_11)}${_scopeId}><div class="contact-info-item-content"${_scopeId}><div class="contact-info-item__title"${_scopeId}>Телефон</div><div class="contact-info-item__desc"${_scopeId}>+38 (048) 123-4567</div></div></div><div class="contact-info-item"${_scopeId}><img alt="" class="contact-info-item__icon"${ssrRenderAttr("src", _imports_12)}${_scopeId}><div class="contact-info-item-content"${_scopeId}><div class="contact-info-item__title"${_scopeId}>Email адрес</div><div class="contact-info-item__desc"${_scopeId}>office@flerco.com</div></div></div><div class="contact-info-item"${_scopeId}><img alt="" class="contact-info-item__icon"${ssrRenderAttr("src", _imports_13)}${_scopeId}><div class="contact-info-item-content"${_scopeId}><div class="contact-info-item__title"${_scopeId}>Часы работы</div><div class="contact-info-item__desc"${_scopeId}>Понедельник-пятница: 9:00-18:00 (EET) <br${_scopeId}>Суббота: 10:00–15:00</div></div></div></div></div></div><div class="copyright"${_scopeId}> © 2025 Fler&amp;Co Все права сохранены </div></section>`);
          } else {
            return [
              createVNode("div", { class: "gradient-sides-container" }, [
                createVNode("section", {
                  class: "banner-section",
                  id: "header-section"
                }, [
                  createVNode("img", {
                    src: _imports_0,
                    class: "banner-bg",
                    alt: ""
                  }),
                  createVNode("div", { class: "banner-content" }, [
                    createVNode("h1", null, [
                      createTextVNode(" Кресла для вашей лодки "),
                      createVNode("br"),
                      createVNode("span", null, "Родом из Украины")
                    ]),
                    createVNode("p", { class: "banner-description" }, " Хотите ощутить новизну своего судна? Покупать лодку ни к чему — наши мастера сделают лучше специально для вас. Испытайте новый уровень удобства, надежности и стиля с Fler&Co "),
                    createVNode("div", { class: "banner-btns" }, [
                      createVNode("div", { class: "btn btn-primary" }, "Узнать больше"),
                      createVNode("div", { class: "btn btn-outline" }, "Написать нам")
                    ])
                  ])
                ]),
                createVNode("section", {
                  class: "stats",
                  id: "stats"
                }, [
                  createVNode("div", { class: "gradient-sides" }, [
                    createVNode("div", { class: "side" }),
                    createVNode("div", { class: "side" })
                  ]),
                  createVNode("div", { class: "stats-items" }, [
                    createVNode("div", { class: "stats-item" }, [
                      createVNode("img", {
                        class: "stats-item__icon",
                        alt: "",
                        src: _imports_1
                      }),
                      createVNode("b", { class: "stats-item__title" }, "16 лет"),
                      createVNode("div", { class: "stats-item__desc" }, "На рынке")
                    ]),
                    createVNode("div", { class: "stats-item" }, [
                      createVNode("img", {
                        class: "stats-item__icon",
                        alt: "",
                        src: _imports_2
                      }),
                      createVNode("b", { class: "stats-item__title" }, "5000+"),
                      createVNode("div", { class: "stats-item__desc" }, "Изделий изготовлено")
                    ]),
                    createVNode("div", { class: "stats-item" }, [
                      createVNode("img", {
                        class: "stats-item__icon",
                        alt: "",
                        src: _imports_3
                      }),
                      createVNode("b", { class: "stats-item__title" }, "20 стран"),
                      createVNode("div", { class: "stats-item__desc" }, "Экспорт")
                    ]),
                    createVNode("div", { class: "stats-item" }, [
                      createVNode("img", {
                        class: "stats-item__icon",
                        alt: "",
                        src: _imports_4
                      }),
                      createVNode("b", { class: "stats-item__title" }, "98%"),
                      createVNode("div", { class: "stats-item__desc" }, "Позитивных отзывов")
                    ])
                  ]),
                  createVNode("div", { class: "section-content" }, [
                    createVNode("h2", { class: "section-title" }, "Украинские изделия – Европейские стандарты"),
                    createVNode("p", { class: "section-desc" }, " Наша мастерская запустила производство в 2008 году, и за это время мы стали лидирующим поставщиком лодочных изделий в Украине, комбинируя премиальные материалы и мастерскую обивку ")
                  ])
                ]),
                createVNode("section", {
                  class: "why-us",
                  id: "why-us"
                }, [
                  createVNode("div", { class: "section-content" }, [
                    createVNode("h2", { class: "section-title" }, "Почему Fler&Co?")
                  ]),
                  createVNode("div", { class: "why-us-content" }, [
                    createVNode("div", { class: "advantages" }, [
                      createVNode("div", { class: "advantage" }, [
                        createVNode("img", {
                          src: _imports_5,
                          alt: "",
                          class: "advantage-icon"
                        }),
                        createVNode("div", { class: "advantage-content" }, [
                          createVNode("div", { class: "advantage-title" }, "100% украинский продукт"),
                          createVNode("div", { class: "advantage-desc" }, "Начиная с разработки дизайна, цепочка создания кресел и аксессуаров полностью базируется в Украине")
                        ])
                      ]),
                      createVNode("div", { class: "advantage" }, [
                        createVNode("img", {
                          src: _imports_5,
                          alt: "",
                          class: "advantage-icon"
                        }),
                        createVNode("div", { class: "advantage-content" }, [
                          createVNode("div", { class: "advantage-title" }, "Современные технологии"),
                          createVNode("div", { class: "advantage-desc" }, "Для точнейшей работы с деталями мы используем компьютерные чертежи и лазерный станок для выкройки авторского производства")
                        ])
                      ]),
                      createVNode("div", { class: "advantage" }, [
                        createVNode("img", {
                          src: _imports_5,
                          alt: "",
                          class: "advantage-icon"
                        }),
                        createVNode("div", { class: "advantage-content" }, [
                          createVNode("div", { class: "advantage-title" }, "Низкая цена - высокое качество"),
                          createVNode("div", { class: "advantage-desc" }, "Обивка из морского винила устойчива к УФ и прослужит десятилетия, а наши цены до 30% ниже рыночных за счёт украинского производства")
                        ])
                      ]),
                      createVNode("div", { class: "advantage" }, [
                        createVNode("img", {
                          src: _imports_5,
                          alt: "",
                          class: "advantage-icon"
                        }),
                        createVNode("div", { class: "advantage-content" }, [
                          createVNode("div", { class: "advantage-title" }, "Доставка от 2 дней по всей Европе"),
                          createVNode("div", { class: "advantage-desc" }, "Начиная с разработки дизайна, цепочка создания кресел и аксессуаров полностью базируется в Украине")
                        ])
                      ])
                    ]),
                    createVNode("img", {
                      src: _imports_6,
                      class: "why-us-image",
                      alt: ""
                    })
                  ])
                ])
              ]),
              createVNode("section", {
                class: "our-products",
                id: "our-products"
              }, [
                createVNode("div", { class: "section-content" }, [
                  createVNode("h2", { class: "section-title" }, "Наши изделия"),
                  createVNode("p", { class: "section-desc" }, "Любой дизайн, любая прихоть - выберите основу под ваши требования и настройте её под ваши нравы")
                ]),
                createVNode("div", { class: "products" }, [
                  createVNode("a", {
                    href: "#",
                    class: "product"
                  }, [
                    createVNode("img", {
                      src: _imports_7,
                      alt: ""
                    })
                  ]),
                  createVNode("a", {
                    href: "#",
                    class: "product"
                  }, [
                    createVNode("img", {
                      src: _imports_8,
                      alt: ""
                    })
                  ]),
                  createVNode("a", {
                    href: "#",
                    class: "product"
                  }, [
                    createVNode("img", {
                      src: _imports_9,
                      alt: ""
                    })
                  ])
                ]),
                createVNode("div", { class: "btn btn-primary" }, "Подробнее")
              ]),
              createVNode("section", {
                class: "contact-us",
                id: "contact-us"
              }, [
                createVNode("div", { class: "section-content" }, [
                  createVNode("h2", { class: "section-title" }, "Напишите нам"),
                  createVNode("p", { class: "section-desc" }, [
                    createTextVNode(" Хотите повысить комфорт своих путешествий? "),
                    createVNode("br"),
                    createTextVNode(" Свяжитесь с нами, чтобы получить техническую поддержку, уточнить цену или узнать подробности о продукции ")
                  ])
                ]),
                createVNode("div", { class: "contacts" }, [
                  createVNode("form", {
                    action: "",
                    class: "contact-form"
                  }, [
                    createVNode("div", { class: "row" }, [
                      createVNode("div", { class: "input-group col" }, [
                        createVNode("label", null, "Имя"),
                        createVNode("input", { type: "text" })
                      ]),
                      createVNode("div", { class: "input-group col" }, [
                        createVNode("label", null, "Email / Номер телефона"),
                        createVNode("input", { type: "text" })
                      ])
                    ]),
                    createVNode("div", { class: "input-group" }, [
                      createVNode("label", null, "Тема"),
                      createVNode("input", { type: "text" })
                    ]),
                    createVNode("div", { class: "input-group" }, [
                      createVNode("label", null, "Сообщение"),
                      createVNode("textarea", { rows: "8" })
                    ]),
                    createVNode("div", { class: "btn btn-primary" }, "Отправить")
                  ]),
                  createVNode("div", { class: "contact-info" }, [
                    createVNode("div", { class: "contact-info-title" }, "Контактная информация"),
                    createVNode("div", { class: "contact-info-items" }, [
                      createVNode("div", { class: "contact-info-item" }, [
                        createVNode("img", {
                          alt: "",
                          class: "contact-info-item__icon",
                          src: _imports_10
                        }),
                        createVNode("div", { class: "contact-info-item-content" }, [
                          createVNode("div", { class: "contact-info-item__title" }, "Адрес"),
                          createVNode("div", { class: "contact-info-item__desc" }, "ул. Алматинская 66A, Киев, Украина 02000")
                        ])
                      ]),
                      createVNode("div", { class: "contact-info-item" }, [
                        createVNode("img", {
                          alt: "",
                          class: "contact-info-item__icon",
                          src: _imports_11
                        }),
                        createVNode("div", { class: "contact-info-item-content" }, [
                          createVNode("div", { class: "contact-info-item__title" }, "Телефон"),
                          createVNode("div", { class: "contact-info-item__desc" }, "+38 (048) 123-4567")
                        ])
                      ]),
                      createVNode("div", { class: "contact-info-item" }, [
                        createVNode("img", {
                          alt: "",
                          class: "contact-info-item__icon",
                          src: _imports_12
                        }),
                        createVNode("div", { class: "contact-info-item-content" }, [
                          createVNode("div", { class: "contact-info-item__title" }, "Email адрес"),
                          createVNode("div", { class: "contact-info-item__desc" }, "office@flerco.com")
                        ])
                      ]),
                      createVNode("div", { class: "contact-info-item" }, [
                        createVNode("img", {
                          alt: "",
                          class: "contact-info-item__icon",
                          src: _imports_13
                        }),
                        createVNode("div", { class: "contact-info-item-content" }, [
                          createVNode("div", { class: "contact-info-item__title" }, "Часы работы"),
                          createVNode("div", { class: "contact-info-item__desc" }, [
                            createTextVNode("Понедельник-пятница: 9:00-18:00 (EET) "),
                            createVNode("br"),
                            createTextVNode("Суббота: 10:00–15:00")
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "copyright" }, " © 2025 Fler&Co Все права сохранены ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Catalog/Index.vue": __vite_glob_0_0, "./Pages/Home.vue": __vite_glob_0_1 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);
