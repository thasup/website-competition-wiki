/* @ds-bundle: {"format":4,"namespace":"TerraDigitalVenturesDesignSystem_f41591","components":[{"name":"GradientMesh","sourcePath":"components/brand/GradientMesh.jsx"},{"name":"Orb","sourcePath":"components/brand/Orb.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Metric","sourcePath":"components/display/Metric.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/brand/GradientMesh.jsx":"59e9ae8aabc8","components/brand/Orb.jsx":"08f0fabc3911","components/display/Card.jsx":"3c7bd627a298","components/display/Metric.jsx":"056ead8405c3","components/display/Tag.jsx":"7f4dde68f479","components/forms/Button.jsx":"863bc2d44a64","components/forms/Input.jsx":"d2e98b903248","ui_kits/marketing-site/Footer.jsx":"e8728e2ea7df","ui_kits/marketing-site/HomeScreen.jsx":"b2c921946d81","ui_kits/marketing-site/Nav.jsx":"2c16b6820dd6","ui_kits/marketing-site/PlatformScreen.jsx":"fbef7e4c74be","ui_kits/marketing-site/PricingScreen.jsx":"6ecb1e9efd74"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TerraDigitalVenturesDesignSystem_f41591 = window.TerraDigitalVenturesDesignSystem_f41591 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Orb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Terra Orb — the signature light source.
 * Rendered as a CSS sphere (white hotspot → Cerulean → Viridian edge) with a soft glow,
 * so it is fully portable. Pass `src` to use the exact brand image instead.
 * `drift` adds the slow ambient float that covers the signature animated moment.
 */
function Orb({
  size = 120,
  drift = true,
  glow = true,
  src,
  style,
  ...rest
}) {
  const sphere = src ? {
    backgroundImage: `url(${src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  } : {
    background: 'radial-gradient(circle at 32% 26%, #ffffff 0%, #dbe9f2 12%, #7cb0d3 38%, #529bc9 58%, #2e6e99 78%, #003849 100%)'
  };
  const styles = {
    width: size,
    height: size,
    borderRadius: '50%',
    flex: 'none',
    filter: glow ? 'drop-shadow(var(--orb-glow))' : 'none',
    animation: drift ? 'tdv-orb-drift 9s var(--ease-inout, ease-in-out) infinite' : 'none',
    ...sphere,
    ...style
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, `@keyframes tdv-orb-drift {
        0%,100% { transform: translate(0,0); }
        50% { transform: translate(10px, 12px); }
      }
      @media (prefers-reduced-motion: reduce) {
        [data-tdv-orb] { animation: none !important; }
      }`), /*#__PURE__*/React.createElement("div", _extends({
    "data-tdv-orb": true,
    style: styles,
    "aria-hidden": "true"
  }, rest)));
}
Object.assign(__ds_scope, { Orb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Orb.jsx", error: String((e && e.message) || e) }); }

// components/brand/GradientMesh.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Terra Orb Mesh — the signature hero backdrop.
 * An earth-to-sky wash (Viridian → Swamp → Cerulean → Light Tawny → Terra Cotta) of
 * layered organic blobs across the upper region, fading to the page canvas, with the
 * Orb as focal light. Wrap hero content as children.
 */
function GradientMesh({
  height = 'auto',
  orb = true,
  orbSize = 132,
  orbTop = 48,
  orbLeft = 64,
  fade = '#ffffff',
  style,
  children,
  ...rest
}) {
  const mesh = {
    position: 'relative',
    height,
    overflow: 'hidden',
    background: 'radial-gradient(58% 92% at 12% 4%, rgba(82,155,201,0.82) 0%, rgba(82,155,201,0) 60%),' + 'radial-gradient(54% 82% at 40% -10%, rgba(53,120,135,0.70) 0%, rgba(53,120,135,0) 62%),' + 'radial-gradient(62% 92% at 72% -2%, rgba(231,214,205,0.92) 0%, rgba(231,214,205,0) 60%),' + 'radial-gradient(50% 82% at 97% 8%, rgba(117,42,25,0.50) 0%, rgba(117,42,25,0) 60%),' + `linear-gradient(180deg, rgba(0,56,73,0.10) 0%, ${fade} 60%)`,
    backgroundColor: fade,
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: mesh
  }, rest), orb && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: orbTop,
      left: orbLeft,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Orb, {
    size: orbSize
  })), children);
}
Object.assign(__ds_scope, { GradientMesh });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GradientMesh.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Terra Card — surface container.
 * `feature` (white + hairline), `featured` (inverted Taupe), `warm` (Light-Tawny interlude),
 * `mockup` (product-UI chrome, deeper shadow).
 */
function Card({
  variant = 'feature',
  interactive = false,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    feature: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-default)',
      boxShadow: hover && interactive ? 'var(--shadow-2)' : 'var(--shadow-1)'
    },
    featured: {
      background: 'var(--surface-dark)',
      color: 'var(--tdv-on-dark-mute)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-3)'
    },
    warm: {
      background: 'var(--surface-warm)',
      color: 'var(--text-body)',
      border: '1px solid transparent',
      boxShadow: 'none'
    },
    mockup: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border-default)',
      boxShadow: hover && interactive ? 'var(--shadow-3)' : 'var(--shadow-2)'
    }
  };
  const v = variants[variant] || variants.feature;
  const styles = {
    borderRadius: variant === 'mockup' ? 'var(--radius-xl)' : 'var(--radius-lg)',
    padding: variant === 'mockup' ? 'var(--pad-mockup)' : 'var(--pad-card)',
    transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)',
    transform: hover && interactive ? 'translateY(-2px)' : 'none',
    cursor: interactive ? 'pointer' : 'default',
    ...v,
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: styles,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Metric.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Terra Metric — a big tabular-figure number with label and optional delta.
 * Every money/numeric cell uses tabular figures — the brand's financial-data signal.
 */
function Metric({
  label,
  value,
  unit,
  delta,
  deltaDirection = 'up',
  align = 'left',
  onDark = false,
  style,
  ...rest
}) {
  const deltaColor = deltaDirection === 'down' ? 'var(--tdv-terracotta)' : 'var(--tdv-swamp)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--tdv-on-dark-mute)' : 'var(--tdv-cerulean-ink)',
      marginBottom: 8
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-metric)',
      letterSpacing: 'var(--track-metric)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums',
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      justifyContent: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", null, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-heading-md)',
      color: onDark ? 'var(--tdv-on-dark-mute)' : 'var(--text-muted)'
    }
  }, unit), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--fw-medium) 14px/1 var(--font-sans)',
      color: deltaColor,
      fontVariantNumeric: 'tabular-nums'
    }
  }, deltaDirection === 'down' ? '▾' : '▴', " ", delta)));
}
Object.assign(__ds_scope, { Metric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Metric.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Terra Tag — soft pill for labels, categories, and status.
 * Default is the subdued Cerulean; earth tones available for data-viz legends.
 */
function Tag({
  tone = 'cerulean',
  children,
  style,
  ...rest
}) {
  const tones = {
    cerulean: {
      background: 'var(--tdv-cerulean-soft)',
      color: 'var(--tdv-cerulean-press)'
    },
    neutral: {
      background: 'var(--tdv-frost)',
      color: 'var(--text-body)'
    },
    laurel: {
      background: 'var(--tdv-laurel)',
      color: 'var(--tdv-viridian)'
    },
    tawny: {
      background: 'var(--tdv-light-tawny)',
      color: 'var(--tdv-sienna)'
    },
    sienna: {
      background: 'rgba(124,75,60,0.14)',
      color: 'var(--tdv-sienna)'
    }
  };
  const v = tones[tone] || tones.cerulean;
  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '4px 10px',
    borderRadius: 'var(--radius-pill)',
    font: 'var(--fw-semibold) 11px/1.2 var(--font-sans)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    ...v,
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: styles
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Terra Button — the single-accent CTA.
 * Cerulean is the ONLY filled color; one filled button per band.
 */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  as = 'button',
  href,
  children,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    md: {
      padding: '11px 22px',
      font: 'var(--type-button)',
      minHeight: 44
    },
    sm: {
      padding: '8px 16px',
      font: 'var(--fw-medium) 14px/1 var(--font-sans)',
      minHeight: 36
    }
  };
  const variants = {
    primary: {
      background: active ? 'var(--color-primary-press)' : hover ? 'var(--color-primary-hover)' : 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      border: '1px solid transparent'
    },
    secondary: {
      background: hover ? 'var(--tdv-cerulean-subtle)' : 'var(--surface-card)',
      color: 'var(--tdv-cerulean-ink)',
      border: '1px solid ' + (hover ? 'var(--color-primary)' : 'var(--tdv-cerulean-ink)')
    },
    ghost: {
      background: hover ? 'var(--surface-frost)' : 'transparent',
      color: 'var(--text-strong)',
      border: '1px solid transparent'
    },
    'on-dark': {
      background: active ? 'rgba(255,255,255,0.16)' : hover ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.08)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--tdv-on-dark-line)'
    }
  };
  const v = variants[variant] || variants.primary;
  const s = sizes[size] || sizes.md;
  const styles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: s.padding,
    font: s.font,
    minHeight: s.minHeight,
    width: fullWidth ? '100%' : 'auto',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    transform: active && !disabled ? 'translateY(1px)' : 'none',
    ...v,
    ...style
  };
  const Tag = href ? 'a' : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: styles,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    "aria-disabled": disabled || undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Terra Input — text field with Cerulean focus ring.
 * Pairs with Label; supports optional leading/trailing adornment.
 */
function Input({
  type = 'text',
  size = 'md',
  invalid = false,
  disabled = false,
  prefix,
  suffix,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const pad = size === 'sm' ? '7px 10px' : '10px 12px';
  const font = size === 'sm' ? 'var(--type-body-sm)' : 'var(--type-body-md)';
  const wrap = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    background: disabled ? 'var(--surface-frost)' : 'var(--surface-card)',
    border: '1px solid ' + (invalid ? 'var(--tdv-terracotta)' : focus ? 'var(--border-focus)' : 'var(--border-input)'),
    borderRadius: 'var(--radius-sm)',
    padding: pad,
    boxShadow: focus ? 'var(--ring-focus)' : 'none',
    transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
    opacity: disabled ? 0.6 : 1,
    ...style
  };
  const input = {
    flex: 1,
    minWidth: 0,
    border: 'none',
    outline: 'none',
    background: 'transparent',
    font,
    color: 'var(--text-strong)',
    fontVariantNumeric: type === 'number' ? 'tabular-nums' : undefined
  };
  const adorn = {
    color: 'var(--text-muted)',
    font,
    display: 'inline-flex',
    alignItems: 'center'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: adorn
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    disabled: disabled,
    style: input,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: adorn
  }, suffix));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Footer.jsx
try { (() => {
// Terra marketing site — footer
const {
  Orb
} = window.TerraDigitalVenturesDesignSystem_f41591;
function Footer() {
  const cols = [['Platform', ['Payments', 'Treasury', 'Data rails', 'Settlement', 'Status']], ['Developers', ['Documentation', 'API reference', 'SDKs', 'Changelog']], ['Company', ['About', 'Careers', 'Newsroom', 'Contact']], ['Legal', ['Privacy', 'Terms', 'Compliance', 'Security']]];
  const head = {
    font: 'var(--type-eyebrow)',
    letterSpacing: 'var(--track-eyebrow)',
    textTransform: 'uppercase',
    color: 'var(--text-faint)',
    marginBottom: 14
  };
  const li = {
    font: 'var(--type-body-sm)',
    color: 'var(--text-muted)',
    marginBottom: 10,
    cursor: 'pointer'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-page)',
      borderTop: '1px solid var(--border-default)',
      padding: '64px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 220px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Orb, {
    size: 28,
    drift: false
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/terra-logo-dark.png",
    alt: "terra",
    style: {
      height: 22
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      maxWidth: 200
    }
  }, "Financial infrastructure for ventures that compound.")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 32
    }
  }, cols.map(([h, items], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: head
  }, h), items.map((it, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: li
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '40px auto 0',
      paddingTop: 24,
      borderTop: '1px solid var(--border-default)',
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--type-caption)',
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Terra Digital Ventures. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Bangkok \xB7 Singapore \xB7 London")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/HomeScreen.jsx
try { (() => {
// Terra marketing site — Home
const {
  Button,
  Card,
  Tag,
  Metric,
  GradientMesh,
  Orb
} = window.TerraDigitalVenturesDesignSystem_f41591;
function DashboardMockup() {
  const rows = [['acq_9f2', 'Settled', '$12,480.00', 'Swamp'], ['acq_7b1', 'Pending', '$3,905.20', 'Cerulean'], ['acq_5c8', 'Settled', '$48,120.75', 'Swamp'], ['acq_2a4', 'Review', '$1,204.00', 'Sienna']];
  const dot = {
    Swamp: 'var(--tdv-swamp)',
    Cerulean: 'var(--tdv-cerulean)',
    Sienna: 'var(--tdv-sienna)'
  };
  const bars = [38, 52, 44, 68, 60, 82, 74, 96];
  return /*#__PURE__*/React.createElement(Card, {
    variant: "mockup",
    style: {
      width: 520,
      padding: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '14px 18px',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--tdv-terracotta)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--tdv-light-tawny)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--tdv-laurel)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      font: 'var(--type-caption)',
      color: 'var(--text-muted)'
    }
  }, "dashboard.terra.co / settlement")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 60%',
      padding: 18,
      borderRight: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--tdv-cerulean-ink)',
      marginBottom: 12
    }
  }, "Recent settlements"), /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontVariantNumeric: 'tabular-nums'
    }
  }, /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderTop: i ? '1px solid var(--border-default)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '9px 0',
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, r[0]), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '9px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      font: 'var(--type-caption)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: dot[r[3]]
    }
  }), r[1])), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '9px 0',
      textAlign: 'right',
      font: 'var(--fw-medium) 14px/1.4 var(--font-sans)',
      color: 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, r[2])))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 40%',
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-eyebrow)',
      letterSpacing: 'var(--track-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--tdv-cerulean-ink)',
      marginBottom: 12
    }
  }, "Volume \xB7 7d"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 6,
      height: 92
    }
  }, bars.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: h + '%',
      borderRadius: '3px 3px 0 0',
      background: i === bars.length - 1 ? 'var(--tdv-cerulean)' : 'var(--tdv-cerulean-soft)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      font: 'var(--type-metric)',
      fontSize: 26,
      color: 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: 'var(--track-metric)'
    }
  }, "$3.48M"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--tdv-swamp)'
    }
  }, "\u25B4 12.4% vs last week"))));
}
function FeatureIcon({
  name
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: 22,
      height: 22,
      color: 'var(--tdv-cerulean-ink)'
    }
  });
}
function HomeScreen({
  setPage
}) {
  const features = [['route', 'Unified rails', 'One integration for payments, treasury, and settlement across markets.'], ['bar-chart-3', 'Data analytics', 'Every flow instrumented — reconcile, forecast, and report in real time.'], ['shield-check', 'Compliance built in', 'KYC, sanctions, and audit trails handled at the infrastructure layer.']];
  const wrap = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 40px'
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GradientMesh, {
    fade: "#ffffff",
    style: {
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: 64,
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Financial infrastructure"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-display-xxl)',
      letterSpacing: 'var(--track-display)',
      color: 'var(--text-strong)',
      margin: '16px 0 0'
    }
  }, "Move capital on Terra rails"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-body)',
      margin: '20px 0 28px',
      maxWidth: 520
    }
  }, "One set of rails for payments, treasury, and settlement \u2014 instrumented end to end, so every venture you back can compound."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setPage('pricing')
  }, "Start building"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setPage('platform')
  }, "Explore the platform")), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      marginTop: 20
    }
  }, "Trusted by 240+ ventures \xB7 SOC 2 Type II \xB7 99.99% uptime")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: -60
    }
  }, /*#__PURE__*/React.createElement(DashboardMockup, null)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      padding: '8px 0 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, ['NORTHWIND', 'Meridian', 'ARC Capital', 'Loomis', 'Verano', 'Halcyon'].map((n, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      font: 'var(--fw-semibold) 18px/1 var(--font-sans)',
      color: 'var(--text-faint)',
      letterSpacing: '0.02em'
    }
  }, n)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-soft)',
      padding: '72px 0',
      borderTop: '1px solid var(--border-default)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      justifyContent: 'space-between',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Metric, {
    label: "Volume settled",
    value: "$14.2B",
    delta: "18%"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Ventures live",
    value: "240",
    unit: "+"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Markets",
    value: "38"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Uptime",
    value: "99.99",
    unit: "%"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      padding: '96px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Why Terra"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-display-lg)',
      letterSpacing: 'var(--track-display)',
      color: 'var(--text-strong)',
      margin: '14px 0 40px',
      maxWidth: 640
    }
  }, "The product is the argument"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, features.map(([icon, title, body], i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    variant: "feature",
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-md)',
      background: 'var(--tdv-cerulean-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(FeatureIcon, {
    name: icon
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-heading-lg)',
      color: 'var(--text-strong)',
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-md)',
      color: 'var(--text-body)'
    }
  }, body)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-warm)',
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      maxWidth: 860,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "tawny"
  }, "Customer story"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-display-md)',
      color: 'var(--text-strong)',
      letterSpacing: 'var(--track-heading)',
      margin: '20px 0 24px',
      lineHeight: 1.3
    }
  }, "\"We replaced four vendors with Terra and cut settlement time from days to minutes.\""), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-md)',
      color: 'var(--tdv-sienna)'
    }
  }, "Priya N. \xB7 Head of Treasury, Meridian"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-deep)',
      padding: '96px 0',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: 'relative',
      textAlign: 'center',
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 24
    }
  }, Orb && /*#__PURE__*/React.createElement(Orb, {
    size: 72
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-display-lg)',
      letterSpacing: 'var(--track-display)',
      color: 'var(--text-on-dark)',
      marginBottom: 16
    }
  }, "Build your next venture on Terra"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--tdv-on-dark-mute)',
      marginBottom: 32
    }
  }, "Start in test mode in minutes. Go live when you're ready."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setPage('pricing')
  }, "Start building"), /*#__PURE__*/React.createElement(Button, {
    variant: "on-dark",
    onClick: () => setPage('platform')
  }, "Talk to sales")))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Nav.jsx
try { (() => {
// Terra marketing site — top navigation
const {
  Button
} = window.TerraDigitalVenturesDesignSystem_f41591;
function Nav({
  page,
  setPage,
  onDark = false
}) {
  const link = {
    font: 'var(--type-body-sm)',
    color: onDark ? 'var(--tdv-on-dark-mute)' : 'var(--text-body)',
    cursor: 'pointer',
    padding: '6px 2px',
    background: 'none',
    border: 'none',
    fontFamily: 'var(--font-sans)'
  };
  const links = [['Platform', 'platform'], ['Pricing', 'pricing'], ['Developers', 'platform'], ['Company', 'home']];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32,
      padding: '18px 40px',
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: onDark ? '../../assets/terra-logo-light.png' : '../../assets/terra-logo-dark.png',
    alt: "terra",
    style: {
      height: 26,
      cursor: 'pointer'
    },
    onClick: () => setPage('home')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 26,
      marginLeft: 8
    }
  }, links.map(([label, target], i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    style: {
      ...link,
      color: page === target && !onDark ? 'var(--tdv-cerulean-ink)' : link.color
    },
    onClick: () => setPage(target)
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      ...link,
      fontWeight: 500
    },
    onClick: () => setPage('pricing')
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: onDark ? 'on-dark' : 'primary',
    size: "sm",
    onClick: () => setPage('pricing')
  }, "Start building")));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/PlatformScreen.jsx
try { (() => {
// Terra marketing site — Platform / feature deep-dive
const {
  Button,
  Card,
  Tag,
  GradientMesh
} = window.TerraDigitalVenturesDesignSystem_f41591;
function CodePanel() {
  const line = (indent, content) => /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: indent * 16
    }
  }, content);
  const c = {
    key: 'var(--tdv-laurel)',
    str: 'var(--tdv-light-tawny)',
    fn: 'var(--tdv-cerulean)',
    mute: 'rgba(255,255,255,0.45)',
    txt: 'rgba(255,255,255,0.86)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--tdv-taupe)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '14px 18px',
      borderBottom: '1px solid var(--tdv-on-dark-line)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--tdv-terracotta)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--tdv-light-tawny)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--tdv-laurel)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      font: 'var(--type-caption)',
      color: c.mute
    }
  }, "settle.ts")), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: 20,
      font: 'var(--fw-regular) 13px/1.7 ui-monospace, SFMono-Regular, Menlo, monospace',
      color: c.txt,
      fontVariantNumeric: 'tabular-nums'
    }
  }, line(0, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: c.key
    }
  }, "const"), " terra = ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: c.fn
    }
  }, "Terra"), "(", /*#__PURE__*/React.createElement("span", {
    style: {
      color: c.str
    }
  }, "process.env.TERRA_KEY"), ");")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), line(0, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      color: c.key
    }
  }, "const"), " settlement = ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: c.key
    }
  }, "await"), " terra.settlements.", /*#__PURE__*/React.createElement("span", {
    style: {
      color: c.fn
    }
  }, "create"), "(", '{')), line(1, /*#__PURE__*/React.createElement("span", null, "amount: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: c.cerulean || c.str
    }
  }, "1_248_000"), ",")), line(1, /*#__PURE__*/React.createElement("span", null, "currency: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: c.str
    }
  }, "\"THB\""), ",")), line(1, /*#__PURE__*/React.createElement("span", null, "rail: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: c.str
    }
  }, "\"instant\""), ",")), line(0, /*#__PURE__*/React.createElement("span", null, '}', ");")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), line(0, /*#__PURE__*/React.createElement("span", {
    style: {
      color: c.mute
    }
  }, "// \u2192 settled in 1.8min"))));
}
function PlatformScreen({
  setPage
}) {
  const wrap = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 40px'
  };
  const capabilities = [['Payments', 'Accept and disburse across 38 markets with a single API.'], ['Treasury', 'Hold, convert, and sweep balances with programmable rules.'], ['Settlement', 'Instant or scheduled settlement with full reconciliation.'], ['Data rails', 'Every event streamed to your warehouse in real time.']];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GradientMesh, {
    fade: "var(--surface-page)",
    orbLeft: 64,
    orbTop: 40
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: 72,
      paddingBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Platform \xB7 Payments"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-display-xl)',
      letterSpacing: 'var(--track-display)',
      color: 'var(--text-strong)',
      margin: '16px 0 20px'
    }
  }, "One API, every market"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-body)',
      marginBottom: 28
    }
  }, "Integrate once and route capital anywhere Terra operates. The same primitives power payments, treasury, and settlement."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setPage('pricing')
  }, "Start building"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Read the docs"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Developer first"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-display-md)',
      letterSpacing: 'var(--track-heading)',
      color: 'var(--text-strong)',
      margin: '14px 0 16px'
    }
  }, "Settle money in three lines"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-md)',
      color: 'var(--text-body)',
      marginBottom: 20
    }
  }, "Typed SDKs, idempotent requests, and predictable errors. Move from test mode to production without changing a line."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "neutral"
  }, "TypeScript"), /*#__PURE__*/React.createElement(Tag, {
    tone: "neutral"
  }, "Python"), /*#__PURE__*/React.createElement(Tag, {
    tone: "neutral"
  }, "Go"), /*#__PURE__*/React.createElement(Tag, {
    tone: "neutral"
  }, "REST"))), /*#__PURE__*/React.createElement(CodePanel, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-soft)',
      padding: '96px 0',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Capabilities"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--type-display-lg)',
      letterSpacing: 'var(--track-display)',
      color: 'var(--text-strong)',
      margin: '14px 0 40px'
    }
  }, "The full stack of financial primitives"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2,1fr)',
      gap: 20
    }
  }, capabilities.map(([t, b], i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    variant: "feature",
    interactive: true,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-metric)',
      fontSize: 22,
      color: 'var(--tdv-cerulean)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-heading-md)',
      color: 'var(--text-strong)',
      marginBottom: 6
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-md)',
      color: 'var(--text-body)'
    }
  }, b))))))));
}
window.PlatformScreen = PlatformScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/PlatformScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/PricingScreen.jsx
try { (() => {
// Terra marketing site — Pricing
const {
  Button,
  Card,
  Tag,
  Metric
} = window.TerraDigitalVenturesDesignSystem_f41591;
function Check({
  onDark
}) {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 16,
      height: 16,
      color: onDark ? 'var(--tdv-laurel)' : 'var(--tdv-swamp)',
      flex: 'none',
      marginTop: 3
    }
  });
}
function PricingCard({
  tier,
  price,
  unit,
  blurb,
  features,
  featured,
  cta
}) {
  const onDark = featured;
  return /*#__PURE__*/React.createElement(Card, {
    variant: featured ? 'featured' : 'feature',
    style: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }
  }, featured && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 20,
      right: 20
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "cerulean"
  }, "Most popular")), /*#__PURE__*/React.createElement("h3", {
    style: {
      font: 'var(--type-heading-lg)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
      marginBottom: 6
    }
  }, tier), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: onDark ? 'var(--tdv-on-dark-mute)' : 'var(--text-muted)',
      marginBottom: 20,
      minHeight: 40
    }
  }, blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-metric)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-strong)',
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: 'var(--track-metric)'
    }
  }, price), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-md)',
      color: onDark ? 'var(--tdv-on-dark-mute)' : 'var(--text-muted)'
    }
  }, unit)), /*#__PURE__*/React.createElement(Button, {
    variant: featured ? 'primary' : 'secondary',
    fullWidth: true
  }, cta), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Check, {
    onDark: onDark
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: onDark ? 'var(--tdv-on-dark-mute)' : 'var(--text-body)'
    }
  }, f)))));
}
function PricingScreen() {
  const wrap = {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 40px'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: 72,
      textAlign: 'center',
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Pricing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--type-display-xl)',
      letterSpacing: 'var(--track-display)',
      color: 'var(--text-strong)',
      margin: '16px 0 16px'
    }
  }, "Pay for what settles"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-lg)',
      color: 'var(--text-body)'
    }
  }, "Transparent, volume-based pricing. No platform fees, no minimums \u2014 start in test mode for free.")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: 48,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(PricingCard, {
    tier: "Starter",
    price: "$0",
    unit: "/mo",
    cta: "Start free",
    blurb: "For prototypes and early ventures finding fit.",
    features: ['Up to $50k/mo volume', '0.9% per settlement', 'Core payments API', 'Community support']
  }), /*#__PURE__*/React.createElement(PricingCard, {
    tier: "Growth",
    price: "$499",
    unit: "/mo",
    featured: true,
    cta: "Start building",
    blurb: "For ventures scaling across markets.",
    features: ['Up to $2M/mo volume', '0.6% per settlement', 'Treasury + data rails', 'Priority support', 'Sandbox & staging']
  }), /*#__PURE__*/React.createElement(PricingCard, {
    tier: "Scale",
    price: "Custom",
    cta: "Contact sales",
    blurb: "For platforms with bespoke settlement needs.",
    features: ['Unlimited volume', 'Negotiated rates', 'Dedicated infrastructure', 'Named solutions engineer', 'Custom compliance']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-soft)',
      padding: '64px 0',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      justifyContent: 'space-between',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Metric, {
    label: "Avg. settlement",
    value: "1.8",
    unit: "min",
    deltaDirection: "down",
    delta: "41%"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Effective rate",
    value: "0.62",
    unit: "%"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Volume settled",
    value: "$14.2B",
    delta: "18%"
  }), /*#__PURE__*/React.createElement(Metric, {
    label: "Support SLA",
    value: "< 4",
    unit: "hr"
  }))));
}
window.PricingScreen = PricingScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/PricingScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.GradientMesh = __ds_scope.GradientMesh;

__ds_ns.Orb = __ds_scope.Orb;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Metric = __ds_scope.Metric;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

})();
