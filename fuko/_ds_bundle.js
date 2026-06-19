/* @ds-bundle: {"format":3,"namespace":"FUKODesignSystem_23dd6b","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarStack","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Kbd","sourcePath":"components/core/Kbd.jsx"},{"name":"Separator","sourcePath":"components/core/Separator.jsx"},{"name":"Skeleton","sourcePath":"components/core/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/core/Spinner.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"CardHeader","sourcePath":"components/display/Card.jsx"},{"name":"CardFooter","sourcePath":"components/display/Card.jsx"},{"name":"Progress","sourcePath":"components/display/Progress.jsx"},{"name":"Table","sourcePath":"components/display/Table.jsx"},{"name":"Tooltip","sourcePath":"components/display/Tooltip.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Label","sourcePath":"components/forms/Field.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"AISummaryBlock","sourcePath":"components/fuko/AISummaryBlock.jsx"},{"name":"CommentItem","sourcePath":"components/fuko/CommentItem.jsx"},{"name":"CycleCard","sourcePath":"components/fuko/CycleCard.jsx"},{"name":"CycleStatusBadge","sourcePath":"components/fuko/CycleStatusBadge.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"NavItem","sourcePath":"components/navigation/NavItem.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"f416a33b5e1c","components/core/Avatar.jsx":"1a28f7a71899","components/core/Badge.jsx":"658a87f36734","components/core/Button.jsx":"322358602686","components/core/IconButton.jsx":"3af29dfceced","components/core/Kbd.jsx":"d6bb88655d7d","components/core/Separator.jsx":"85996383d4f3","components/core/Skeleton.jsx":"fca0158948ad","components/core/Spinner.jsx":"e6ee122f7507","components/display/Card.jsx":"0e259aebe877","components/display/Progress.jsx":"6da928b371c5","components/display/Table.jsx":"ffd94ac72101","components/display/Tooltip.jsx":"c38b11c433d5","components/feedback/Alert.jsx":"b03c581386c3","components/feedback/Dialog.jsx":"d91049a24e9d","components/feedback/EmptyState.jsx":"7ae79230761c","components/feedback/Toast.jsx":"5dd23c7f8ebd","components/forms/Checkbox.jsx":"7d8ef384ae99","components/forms/Field.jsx":"926e6a048c81","components/forms/Input.jsx":"cb499a02aeef","components/forms/RadioGroup.jsx":"c54366079a12","components/forms/Select.jsx":"485704b3bd3a","components/forms/Switch.jsx":"9a26addc9075","components/forms/Textarea.jsx":"efdaa2a634e3","components/fuko/AISummaryBlock.jsx":"cfd12ee0a774","components/fuko/CommentItem.jsx":"51be5e7a17e1","components/fuko/CycleCard.jsx":"abb1aff54fa6","components/fuko/CycleStatusBadge.jsx":"19dfe793723f","components/navigation/Breadcrumb.jsx":"dae7b15f44ff","components/navigation/NavItem.jsx":"36e8b6cc42bf","components/navigation/Tabs.jsx":"1709ba65a7e6","ui_kits/fuko-app/chats.jsx":"3a998f101f51","ui_kits/fuko-app/create-cycle.jsx":"85ed9c84ab1f","ui_kits/fuko-app/cycle-detail.jsx":"5c9b225821f2","ui_kits/fuko-app/home.jsx":"48443db0a8fc","ui_kits/fuko-app/my-cycles.jsx":"790ecb3ee5a5","ui_kits/fuko-app/notifications.jsx":"036aea3e2a57","ui_kits/fuko-app/people.jsx":"413294776ebb","ui_kits/fuko-app/screens.jsx":"35dff6263e05","ui_kits/fuko-app/shell.jsx":"cda9687ed7aa"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FUKODesignSystem_23dd6b = window.FUKODesignSystem_23dd6b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
/** FUKO logo — dot-grid "pulse" mark + ФУКО wordmark. */
function Logo({
  size = 32,
  showWordmark = true,
  wordmark = "ФУКО",
  tone = "default",
  style = {}
}) {
  const radius = size * 0.25;
  const pad = size * 0.25;
  const inner = size - pad * 2;
  const gap = inner * 0.18;
  const dot = (inner - gap * 2) / 3;
  const tileBg = tone === "light" ? "var(--brand-soft)" : "var(--brand-dark)";
  const dotColor = tone === "light" ? "var(--primary)" : "var(--primary-fg)";
  const wordColor = tone === "onDark" ? "var(--on-dark)" : "var(--fg)";
  // 3x3 grid with center brighter (pulse)
  const cells = [1, 1, 1, 1, 2, 1, 1, 1, 1];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: size * 0.25,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: radius,
      background: tone === "onDark" ? "var(--primary)" : tileBg,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(3, ${dot}px)`,
      gap
    }
  }, cells.map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: dot,
      height: dot,
      borderRadius: "50%",
      background: dotColor,
      opacity: c === 2 ? 1 : 0.55
    }
  })))), showWordmark && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: size * 0.62,
      letterSpacing: "0.02em",
      color: wordColor
    }
  }, wordmark));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Avatar — user image with initials/icon fallback. */
function Avatar({
  src = null,
  name = "",
  size = "default",
  roundness = "round",
  status = null,
  style = {},
  ...rest
}) {
  const dim = {
    xs: 20,
    sm: 24,
    default: 32,
    lg: 40,
    xl: 48,
    "2xl": 64
  }[size] || 32;
  const fs = Math.round(dim * 0.4);
  const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
  const radius = roundness === "square" ? "var(--r-lg)" : "var(--r-full)";
  const statusColor = {
    online: "var(--success)",
    away: "var(--warning)",
    busy: "var(--danger)",
    offline: "var(--fg-subtle)"
  }[status];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      width: dim,
      height: dim,
      flexShrink: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: "100%",
      height: "100%",
      borderRadius: radius,
      overflow: "hidden",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: src ? "transparent" : "var(--brand-soft)",
      color: "var(--primary)",
      fontFamily: "var(--font-sans)",
      fontSize: fs,
      fontWeight: 600,
      border: "1px solid var(--border)",
      boxSizing: "border-box"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "?"), statusColor && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: -1,
      bottom: -1,
      width: dim * 0.28,
      height: dim * 0.28,
      minWidth: 8,
      minHeight: 8,
      borderRadius: "var(--r-full)",
      background: statusColor,
      border: "2px solid var(--surface)",
      boxSizing: "border-box"
    }
  }));
}

/** Overlapping group of avatars. */
function AvatarStack({
  people = [],
  size = "default",
  max = 4,
  style = {}
}) {
  const dim = {
    xs: 20,
    sm: 24,
    default: 32,
    lg: 40
  }[size] || 32;
  const shown = people.slice(0, max);
  const extra = people.length - shown.length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      ...style
    }
  }, shown.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginLeft: i === 0 ? 0 : -dim * 0.32,
      outline: "2px solid var(--surface)",
      borderRadius: "var(--r-full)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, _extends({}, p, {
    size: size
  })))), extra > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -dim * 0.32,
      width: dim,
      height: dim,
      borderRadius: "var(--r-full)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--secondary)",
      color: "var(--fg-muted)",
      fontSize: dim * 0.36,
      fontWeight: 600,
      border: "1px solid var(--border)",
      outline: "2px solid var(--surface)",
      boxSizing: "border-box"
    }
  }, "+", extra));
}
Object.assign(__ds_scope, { Avatar, AvatarStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Compact status / label pill. */
function Badge({
  variant = "neutral",
  roundness = "default",
  size = "default",
  iconLeft = null,
  style = {},
  children,
  ...rest
}) {
  const v = {
    neutral: {
      background: "var(--secondary)",
      color: "var(--fg)",
      border: "1px solid var(--border)"
    },
    primary: {
      background: "var(--primary-subtle)",
      color: "var(--primary-subtle-fg)",
      border: "1px solid var(--primary-border)"
    },
    solid: {
      background: "var(--primary)",
      color: "var(--primary-fg)",
      border: "1px solid transparent"
    },
    outline: {
      background: "transparent",
      color: "var(--fg)",
      border: "1px solid var(--border-strong)"
    },
    success: {
      background: "var(--success-subtle)",
      color: "var(--success-fg)",
      border: "1px solid var(--success-border)"
    },
    warning: {
      background: "var(--warning-subtle)",
      color: "var(--warning-fg)",
      border: "1px solid var(--warning-border)"
    },
    danger: {
      background: "var(--danger-subtle)",
      color: "var(--danger-fg)",
      border: "1px solid var(--danger-border)"
    },
    info: {
      background: "var(--info-subtle)",
      color: "var(--info-fg)",
      border: "1px solid var(--info-border)"
    }
  }[variant] || {};
  const s = {
    sm: {
      h: 18,
      px: 6,
      fs: 11
    },
    default: {
      h: 22,
      px: 8,
      fs: 12
    },
    lg: {
      h: 26,
      px: 10,
      fs: 13
    }
  }[size] || {};
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      height: s.h,
      padding: `0 ${s.px}px`,
      fontFamily: "var(--font-sans)",
      fontSize: s.fs,
      fontWeight: 500,
      lineHeight: 1,
      whiteSpace: "nowrap",
      borderRadius: roundness === "round" ? "var(--r-full)" : "var(--r-md)",
      ...v,
      ...style
    }
  }, rest), iconLeft, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * FUKO Button — the primary action primitive.
 * Variants map to the Figma Button set (Variant × Size × Roundness × State).
 */
function Button({
  variant = "primary",
  size = "default",
  roundness = "default",
  disabled = false,
  loading = false,
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  type = "button",
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: {
      h: 32,
      px: 12,
      fs: 14,
      gap: 6
    },
    default: {
      h: 36,
      px: 14,
      fs: 14,
      gap: 8
    },
    lg: {
      h: 44,
      px: 18,
      fs: 16,
      gap: 8
    },
    xl: {
      h: 52,
      px: 22,
      fs: 16,
      gap: 10
    },
    icon: {
      h: 36,
      px: 0,
      fs: 14,
      gap: 0
    }
  }[size] || {};
  const variants = {
    primary: {
      background: "var(--primary)",
      color: "var(--primary-fg)",
      border: "1px solid var(--primary-border)",
      boxShadow: "var(--shadow-primary)",
      "--hover-bg": "var(--primary-hover)",
      "--active-bg": "var(--primary-active)"
    },
    secondary: {
      background: "var(--secondary)",
      color: "var(--secondary-fg)",
      border: "1px solid var(--border)",
      boxShadow: "var(--shadow-2xs)",
      "--hover-bg": "var(--secondary-hover)",
      "--active-bg": "var(--secondary-hover)"
    },
    outline: {
      background: "var(--surface)",
      color: "var(--fg)",
      border: "1px solid var(--border)",
      boxShadow: "var(--shadow-2xs)",
      "--hover-bg": "var(--accent)",
      "--active-bg": "var(--accent-hover)"
    },
    ghost: {
      background: "transparent",
      color: "var(--fg)",
      border: "1px solid transparent",
      "--hover-bg": "var(--accent)",
      "--active-bg": "var(--accent-hover)"
    },
    destructive: {
      background: "var(--destructive)",
      color: "var(--destructive-fg)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-xs)",
      "--hover-bg": "color-mix(in srgb, var(--destructive) 88%, black)",
      "--active-bg": "color-mix(in srgb, var(--destructive) 78%, black)"
    },
    link: {
      background: "transparent",
      color: "var(--primary)",
      border: "1px solid transparent",
      "--hover-bg": "transparent",
      "--active-bg": "transparent"
    }
  }[variant] || {};
  const radius = roundness === "round" ? "var(--r-full)" : "var(--r-lg)";
  const isIcon = size === "icon";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled || loading,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: sizes.gap,
      height: sizes.h,
      width: fullWidth ? "100%" : isIcon ? sizes.h : "auto",
      padding: isIcon ? 0 : `0 ${sizes.px}px`,
      fontFamily: "var(--font-sans)",
      fontSize: sizes.fs,
      fontWeight: 500,
      lineHeight: 1,
      letterSpacing: "-0.005em",
      whiteSpace: "nowrap",
      borderRadius: radius,
      cursor: disabled || loading ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      textDecoration: variant === "link" ? "underline" : "none",
      textUnderlineOffset: 3,
      transition: "background var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast), transform var(--dur-fast)",
      outline: "none",
      ...variants,
      ...style
    },
    onMouseDown: e => {
      if (!disabled && !loading && variant !== "link") e.currentTarget.style.transform = "scale(0.98)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseEnter: e => {
      if (!disabled && !loading) e.currentTarget.style.background = e.currentTarget.style.getPropertyValue("--hover-bg");
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
      if (!disabled && !loading) e.currentTarget.style.background = variants.background;
    }
  }, rest), loading && /*#__PURE__*/React.createElement(Spinner, null), !loading && iconLeft, children && /*#__PURE__*/React.createElement("span", null, children), !loading && iconRight);
}
function Spinner() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: "50%",
      border: "2px solid currentColor",
      borderTopColor: "transparent",
      display: "inline-block",
      animation: "fuko-spin 0.7s linear infinite"
    }
  });
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square icon-only button. Mirrors Button variants at icon dimensions. */
function IconButton({
  variant = "ghost",
  size = "default",
  roundness = "default",
  disabled = false,
  ariaLabel,
  style = {},
  children,
  ...rest
}) {
  const dim = {
    sm: 32,
    default: 36,
    lg: 44
  }[size] || 36;
  const variants = {
    primary: {
      background: "var(--primary)",
      color: "var(--primary-fg)",
      border: "1px solid var(--primary-border)",
      "--h": "var(--primary-hover)"
    },
    secondary: {
      background: "var(--secondary)",
      color: "var(--secondary-fg)",
      border: "1px solid var(--border)",
      "--h": "var(--secondary-hover)"
    },
    outline: {
      background: "var(--surface)",
      color: "var(--fg)",
      border: "1px solid var(--border)",
      "--h": "var(--accent)"
    },
    ghost: {
      background: "transparent",
      color: "var(--fg-muted)",
      border: "1px solid transparent",
      "--h": "var(--accent)"
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": ariaLabel,
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: dim,
      height: dim,
      padding: 0,
      borderRadius: roundness === "round" ? "var(--r-full)" : "var(--r-lg)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast)",
      outline: "none",
      ...variants,
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = e.currentTarget.style.getPropertyValue("--h");
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.background = variants.background;
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Kbd.jsx
try { (() => {
/** Keyboard key cap. */
function Kbd({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("kbd", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: 20,
      height: 20,
      padding: "0 5px",
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 500,
      color: "var(--fg-muted)",
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "var(--r-sm)",
      boxShadow: "var(--shadow-2xs)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Kbd });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kbd.jsx", error: String((e && e.message) || e) }); }

// components/core/Separator.jsx
try { (() => {
/** Hairline divider. */
function Separator({
  orientation = "horizontal",
  spacing = 0,
  label = null,
  style = {}
}) {
  if (label) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        margin: `${spacing}px 0`,
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--fg-muted)",
        fontFamily: "var(--font-sans)",
        whiteSpace: "nowrap"
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border)"
      }
    }));
  }
  return orientation === "vertical" ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: 1,
      alignSelf: "stretch",
      background: "var(--border)",
      margin: `0 ${spacing}px`,
      ...style
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      width: "100%",
      background: "var(--border)",
      margin: `${spacing}px 0`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Separator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Separator.jsx", error: String((e && e.message) || e) }); }

// components/core/Skeleton.jsx
try { (() => {
/** Skeleton loading placeholder. */
function Skeleton({
  width = "100%",
  height = 16,
  radius = "var(--r-md)",
  circle = false,
  style = {}
}) {
  const size = circle ? typeof height === "number" ? height : 32 : height;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: circle ? size : width,
      height: size,
      borderRadius: circle ? "var(--r-full)" : radius,
      background: "var(--sand-300-2)",
      animation: "fuko-pulse 1.6s var(--ease-standard) infinite",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/core/Spinner.jsx
try { (() => {
/** Indeterminate loading spinner. */
function Spinner({
  size = 16,
  thickness = 2,
  color = "var(--primary)",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    role: "status",
    "aria-label": "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430",
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      border: `${thickness}px solid color-mix(in srgb, ${color} 22%, transparent)`,
      borderTopColor: color,
      display: "inline-block",
      animation: "fuko-spin 0.7s linear infinite",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface container. Compose with CardHeader / CardBody / CardFooter or pass children. */
function Card({
  padding = 20,
  interactive = false,
  style = {},
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "var(--r-xl)",
      boxShadow: "var(--shadow-xs)",
      padding,
      transition: "box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base)",
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.boxShadow = "var(--shadow-md)";
      e.currentTarget.style.borderColor = "var(--border-strong)";
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.boxShadow = "var(--shadow-xs)";
      e.currentTarget.style.borderColor = "var(--border)";
    } : undefined
  }, rest), children);
}
function CardHeader({
  title,
  description,
  action,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12,
      marginBottom: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 18,
      color: "var(--fg)"
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--fg-muted)"
    }
  }, description)), action);
}
function CardFooter({
  style = {},
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginTop: 16,
      paddingTop: 14,
      borderTop: "1px solid var(--border)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Progress.jsx
try { (() => {
/** Progress bar. value 0–100. */
function Progress({
  value = 0,
  size = "default",
  tone = "primary",
  showLabel = false,
  style = {}
}) {
  const h = {
    sm: 4,
    default: 8,
    lg: 12
  }[size] || 8;
  const v = Math.max(0, Math.min(100, value));
  const fill = {
    primary: "var(--primary)",
    success: "var(--success)",
    warning: "var(--warning)",
    danger: "var(--danger)"
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: h,
      background: "var(--sand-300-2)",
      borderRadius: "var(--r-full)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${v}%`,
      height: "100%",
      background: fill,
      borderRadius: "var(--r-full)",
      transition: "width var(--dur-slow) var(--ease-out)"
    }
  })), showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      color: "var(--fg-muted)",
      minWidth: 34,
      textAlign: "right"
    }
  }, Math.round(v), "%"));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Progress.jsx", error: String((e && e.message) || e) }); }

// components/display/Table.jsx
try { (() => {
/** Simple data table. columns:[{key,header,align?,width?,render?}] rows:[{...}] */
function Table({
  columns = [],
  rows = [],
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--border)",
      borderRadius: "var(--r-xl)",
      overflow: "hidden",
      background: "var(--surface)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: "var(--surface-2)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      padding: "10px 14px",
      width: c.width,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.02em",
      color: "var(--fg-muted)",
      borderBottom: "1px solid var(--border)",
      whiteSpace: "nowrap"
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri,
    style: {
      transition: "background var(--dur-fast)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = "var(--accent)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "transparent";
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      padding: "11px 14px",
      fontSize: 14,
      color: "var(--fg)",
      borderBottom: ri === rows.length - 1 ? "none" : "1px solid var(--border)"
    }
  }, c.render ? c.render(row[c.key], row) : row[c.key])))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Table.jsx", error: String((e && e.message) || e) }); }

// components/display/Tooltip.jsx
try { (() => {
/** Tooltip on hover/focus. */
function Tooltip({
  content,
  side = "top",
  children,
  style = {}
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 6px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 6px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 60,
      ...pos,
      whiteSpace: "nowrap",
      background: "var(--surface-dark)",
      color: "var(--on-dark)",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 500,
      padding: "5px 9px",
      borderRadius: "var(--r-md)",
      boxShadow: "var(--shadow-md)",
      pointerEvents: "none",
      animation: "fuko-fade-in var(--dur-fast) var(--ease-out)"
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
/** Inline alert / callout. */
function Alert({
  tone = "info",
  title,
  icon = null,
  onClose = null,
  action = null,
  style = {},
  children
}) {
  const map = {
    info: {
      bg: "var(--info-subtle)",
      border: "var(--info-border)",
      fg: "var(--info-fg)",
      accent: "var(--info)"
    },
    success: {
      bg: "var(--success-subtle)",
      border: "var(--success-border)",
      fg: "var(--success-fg)",
      accent: "var(--success)"
    },
    warning: {
      bg: "var(--warning-subtle)",
      border: "var(--warning-border)",
      fg: "var(--warning-fg)",
      accent: "var(--warning)"
    },
    danger: {
      bg: "var(--danger-subtle)",
      border: "var(--danger-border)",
      fg: "var(--danger-fg)",
      accent: "var(--danger)"
    },
    neutral: {
      bg: "var(--surface-2)",
      border: "var(--border)",
      fg: "var(--fg)",
      accent: "var(--fg-muted)"
    }
  }[tone] || {};
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: "flex",
      gap: 10,
      padding: "12px 14px",
      background: map.bg,
      border: `1px solid ${map.border}`,
      borderRadius: "var(--r-lg)",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: map.accent,
      flexShrink: 0,
      marginTop: 1,
      display: "flex"
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2,
      fontFamily: "var(--font-sans)"
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: map.fg
    }
  }, title), children && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--fg)",
      lineHeight: 1.45
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: map.fg,
      opacity: 0.6,
      padding: 0,
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l8 8M12 4l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** Modal dialog. Controlled via open/onClose. */
function Dialog({
  open = false,
  onClose,
  title,
  description,
  footer = null,
  size = "default",
  icon = null,
  children
}) {
  if (!open) return null;
  const width = {
    sm: 380,
    default: 480,
    lg: 640
  }[size] || 480;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 24,
      background: "var(--unofficial-backdrop)",
      backdropFilter: "blur(2px)",
      animation: "fuko-fade-in var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      width: "100%",
      maxWidth: width,
      maxHeight: "90vh",
      overflow: "auto",
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "var(--r-2xl)",
      boxShadow: "var(--shadow-2xl)",
      padding: 24,
      animation: "fuko-fade-in var(--dur-slow) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      marginBottom: description || children ? 16 : 0
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      flexShrink: 0,
      borderRadius: "var(--r-lg)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--primary-subtle)",
      color: "var(--primary)"
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 20,
      color: "var(--fg)"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--fg-muted)",
      lineHeight: 1.5
    }
  }, description)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--fg-muted)",
      padding: 4,
      display: "flex",
      borderRadius: "var(--r-md)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l8 8M12 4l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })))), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--fg)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 8,
      marginTop: 24
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
/** Empty state — illustration/icon, title, description, action. */
function EmptyState({
  icon = null,
  image = null,
  title,
  description,
  action = null,
  compact = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: compact ? 8 : 12,
      padding: compact ? "24px 20px" : "48px 32px",
      ...style
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: compact ? 96 : 160,
      height: "auto",
      marginBottom: 4,
      opacity: 0.9
    }
  }) : icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: compact ? 44 : 56,
      height: compact ? 44 : 56,
      borderRadius: "var(--r-xl)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--secondary)",
      color: "var(--fg-muted)",
      marginBottom: 4
    }
  }, icon), title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: compact ? 16 : 20,
      color: "var(--fg)"
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--fg-muted)",
      maxWidth: 340,
      lineHeight: 1.5
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/** Single toast notification (Sonner-style). Stack several in a fixed container. */
function Toast({
  tone = "neutral",
  title,
  description,
  icon = null,
  onClose = null,
  style = {}
}) {
  const accent = {
    neutral: "var(--fg-muted)",
    success: "var(--success)",
    warning: "var(--warning)",
    danger: "var(--danger)",
    info: "var(--info)"
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      width: 340,
      padding: "12px 14px",
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "var(--r-lg)",
      boxShadow: "var(--shadow-lg)",
      fontFamily: "var(--font-sans)",
      animation: "fuko-fade-in var(--dur-base) var(--ease-out)",
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent,
      flexShrink: 0,
      marginTop: 1,
      display: "flex"
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--fg)"
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--fg-muted)",
      lineHeight: 1.4
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--fg-muted)",
      padding: 0,
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4l8 8M12 4l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with label. Controlled via checked/onChange or uncontrolled. */
function Checkbox({
  checked,
  defaultChecked = false,
  indeterminate = false,
  disabled = false,
  label = null,
  onChange,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const isOn = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const next = !isOn;
    if (checked === undefined) setInternal(next);
    onChange && onChange(next);
  };
  const active = isOn || indeterminate;
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      width: 18,
      height: 18,
      flexShrink: 0,
      borderRadius: "var(--r-sm)",
      background: active ? "var(--primary)" : "var(--surface)",
      border: `1px solid ${active ? "var(--primary)" : "var(--border-strong)"}`,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--primary-fg)",
      transition: "all var(--dur-fast) var(--ease-standard)"
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 2,
      background: "currentColor",
      borderRadius: 1
    }
  }) : isOn && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2l2.2 2.3L9.5 3.5",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--fg)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Form label. Pair with Field or a control's id. */
function Label({
  children,
  required = false,
  htmlFor,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    htmlFor: htmlFor,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 3,
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--fg)",
      ...style
    }
  }, rest), children, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--danger)"
    }
  }, "*"));
}

/** Field wrapper: label, control, help/error text. */
function Field({
  label,
  required = false,
  help = null,
  error = null,
  htmlFor,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement(Label, {
    htmlFor: htmlFor,
    required: required
  }, label), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--danger-fg)",
      fontFamily: "var(--font-sans)"
    }
  }, error) : help && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--fg-muted)",
      fontFamily: "var(--font-sans)"
    }
  }, help));
}
Object.assign(__ds_scope, { Label, Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input. Wrap with Field for label + help/error. */
function Input({
  size = "default",
  invalid = false,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  style = {},
  ...rest
}) {
  const h = {
    sm: 32,
    default: 36,
    lg: 44
  }[size] || 36;
  const [focus, setFocus] = React.useState(false);
  const border = invalid ? "var(--danger-border)" : focus ? "var(--primary)" : "var(--border)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: h,
      padding: "0 12px",
      background: disabled ? "var(--muted)" : "var(--surface)",
      border: `1px solid ${border}`,
      borderRadius: "var(--r-lg)",
      boxShadow: focus ? `0 0 0 3px ${invalid ? "var(--focus-ring-error)" : "var(--ring)"}` : "var(--shadow-2xs)",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: "var(--fg-subtle)"
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--fg)",
      height: "100%"
    }
  }, rest)), iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: "var(--fg-subtle)"
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
/** Radio group. options: [{value,label,help?}] */
function RadioGroup({
  options = [],
  value,
  defaultValue,
  name,
  disabled = false,
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const current = value !== undefined ? value : internal;
  const pick = v => {
    if (disabled) return;
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      ...style
    }
  }, options.map(o => {
    const on = current === o.value;
    return /*#__PURE__*/React.createElement("label", {
      key: o.value,
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 8,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      onClick: () => pick(o.value),
      style: {
        width: 18,
        height: 18,
        marginTop: 1,
        flexShrink: 0,
        borderRadius: "var(--r-full)",
        border: `1px solid ${on ? "var(--primary)" : "var(--border-strong)"}`,
        background: "var(--surface)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "border-color var(--dur-fast)"
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: "var(--r-full)",
        background: "var(--primary)"
      }
    })), /*#__PURE__*/React.createElement("span", {
      onClick: () => pick(o.value),
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--fg)"
      }
    }, o.label), o.help && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--fg-muted)"
      }
    }, o.help)));
  }));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/** Select / combobox. options: [{value,label}] */
function Select({
  options = [],
  value,
  defaultValue,
  placeholder = "Выберите…",
  disabled = false,
  size = "default",
  onChange,
  style = {}
}) {
  const [open, setOpen] = React.useState(false);
  const [internal, setInternal] = React.useState(defaultValue);
  const current = value !== undefined ? value : internal;
  const ref = React.useRef(null);
  const h = {
    sm: 32,
    default: 36,
    lg: 44
  }[size] || 36;
  const selected = options.find(o => o.value === current);
  React.useEffect(() => {
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const pick = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(o => !o),
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8,
      width: "100%",
      height: h,
      padding: "0 12px",
      background: "var(--surface)",
      border: `1px solid ${open ? "var(--primary)" : "var(--border)"}`,
      borderRadius: "var(--r-lg)",
      boxShadow: open ? `0 0 0 3px var(--ring)` : "var(--shadow-2xs)",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: selected ? "var(--fg)" : "var(--fg-subtle)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.6 : 1,
      outline: "none",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, selected ? selected.label : placeholder), /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      flexShrink: 0,
      color: "var(--fg-muted)",
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform var(--dur-fast)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 6l4 4 4-4",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "calc(100% + 4px)",
      left: 0,
      right: 0,
      zIndex: 50,
      background: "var(--popover)",
      border: "1px solid var(--border)",
      borderRadius: "var(--r-lg)",
      boxShadow: "var(--shadow-lg)",
      padding: 4,
      maxHeight: 240,
      overflowY: "auto",
      animation: "fuko-fade-in var(--dur-fast) var(--ease-out)"
    }
  }, options.map(o => {
    const on = o.value === current;
    return /*#__PURE__*/React.createElement("div", {
      key: o.value,
      onClick: () => pick(o.value),
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
        padding: "7px 8px",
        borderRadius: "var(--r-md)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: on ? "var(--primary-subtle-fg)" : "var(--fg)",
        background: on ? "var(--primary-subtle)" : "transparent"
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = "var(--accent)";
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = "transparent";
      }
    }, /*#__PURE__*/React.createElement("span", null, o.label), on && /*#__PURE__*/React.createElement("svg", {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M2.5 6.2l2.2 2.3L9.5 3.5",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })));
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toggle switch. */
function Switch({
  checked,
  defaultChecked = false,
  disabled = false,
  label = null,
  onChange,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked);
  const isOn = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const next = !isOn;
    if (checked === undefined) setInternal(next);
    onChange && onChange(next);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      width: 36,
      height: 20,
      borderRadius: "var(--r-full)",
      padding: 2,
      flexShrink: 0,
      background: isOn ? "var(--primary)" : "var(--sand-400-2)",
      display: "inline-flex",
      alignItems: "center",
      transition: "background var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: "var(--r-full)",
      background: "var(--surface)",
      boxShadow: "var(--shadow-sm)",
      transform: isOn ? "translateX(16px)" : "translateX(0)",
      transition: "transform var(--dur-base) var(--ease-out)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--fg)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text input. */
function Textarea({
  invalid = false,
  rows = 4,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const border = invalid ? "var(--danger-border)" : focus ? "var(--primary)" : "var(--border)";
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      padding: "10px 12px",
      resize: "vertical",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      lineHeight: 1.5,
      color: "var(--fg)",
      background: disabled ? "var(--muted)" : "var(--surface)",
      border: `1px solid ${border}`,
      borderRadius: "var(--r-lg)",
      outline: "none",
      boxShadow: focus ? `0 0 0 3px ${invalid ? "var(--focus-ring-error)" : "var(--ring)"}` : "var(--shadow-2xs)",
      transition: "border-color var(--dur-fast), box-shadow var(--dur-fast)",
      opacity: disabled ? 0.6 : 1,
      boxSizing: "border-box",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/fuko/AISummaryBlock.jsx
try { (() => {
/** AI-generated feedback summary block. */
function AISummaryBlock({
  title = "ИИ-сводка",
  state = "ready",
  summary = "",
  points = [],
  style = {}
}) {
  const Spark = /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      flexShrink: 0,
      borderRadius: "var(--r-md)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--primary-subtle)",
      color: "var(--primary)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 1.5l1.4 3.6L13 6.5 9.4 7.9 8 11.5 6.6 7.9 3 6.5l3.6-1.4L8 1.5z",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12.5",
    cy: "12.5",
    r: "1.3",
    fill: "currentColor"
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: 16,
      background: "var(--surface)",
      border: "1px solid var(--primary-border)",
      borderRadius: "var(--r-xl)",
      boxShadow: "var(--shadow-xs)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, Spark, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 14,
      color: "var(--fg)"
    }
  }, title), state === "loading" && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--primary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: "50%",
      border: "2px solid currentColor",
      borderTopColor: "transparent",
      animation: "fuko-spin 0.7s linear infinite"
    }
  }), "\u0444\u043E\u0440\u043C\u0438\u0440\u0443\u0435\u0442\u0441\u044F")), state === "loading" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Skeleton, {
    width: "100%"
  }), /*#__PURE__*/React.createElement(__ds_scope.Skeleton, {
    width: "92%"
  }), /*#__PURE__*/React.createElement(__ds_scope.Skeleton, {
    width: "70%"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, summary && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      lineHeight: 1.55,
      color: "var(--fg)"
    }
  }, summary), points.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, points.map((p, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 8,
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--fg)",
      lineHeight: 1.45
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: "50%",
      background: "var(--primary)",
      marginTop: 7,
      flexShrink: 0
    }
  }), p)))));
}
Object.assign(__ds_scope, { AISummaryBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/fuko/AISummaryBlock.jsx", error: String((e && e.message) || e) }); }

// components/fuko/CommentItem.jsx
try { (() => {
/** Comment / feedback thread item. */
function CommentItem({
  author,
  time,
  body,
  avatarSrc = null,
  role = null,
  pinned = false,
  actions = null,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      padding: 12,
      background: pinned ? "var(--brand-soft)" : "transparent",
      border: pinned ? "1px solid var(--primary-border)" : "1px solid transparent",
      borderRadius: "var(--r-lg)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: author,
    src: avatarSrc,
    size: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 14,
      color: "var(--fg)"
    }
  }, author), role && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 500,
      color: "var(--primary-subtle-fg)",
      background: "var(--primary-subtle)",
      padding: "1px 6px",
      borderRadius: "var(--r-full)"
    }
  }, role), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--fg-subtle)"
    }
  }, time), pinned && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      color: "var(--primary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2l4 4-3 1-2 4-1-1-2 2-1-1 2-2-1-1 4-2 1-3z",
    fill: "currentColor"
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      lineHeight: 1.5,
      color: "var(--fg)"
    }
  }, body), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 4
    }
  }, actions)));
}
Object.assign(__ds_scope, { CommentItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/fuko/CommentItem.jsx", error: String((e && e.message) || e) }); }

// components/fuko/CycleStatusBadge.jsx
try { (() => {
/** Status pill for a feedback cycle. */
function CycleStatusBadge({
  status = "open",
  roundness = "round",
  style = {}
}) {
  const map = {
    draft: {
      label: "Черновик",
      variant: "neutral",
      dot: "var(--fg-subtle)"
    },
    open: {
      label: "Активный",
      variant: "success",
      dot: "var(--success)"
    },
    action: {
      label: "Требует действия",
      variant: "primary",
      dot: "var(--primary)"
    },
    review: {
      label: "На проверке",
      variant: "warning",
      dot: "var(--warning)"
    },
    done: {
      label: "Завершён",
      variant: "info",
      dot: "var(--info)"
    },
    archived: {
      label: "В архиве",
      variant: "neutral",
      dot: "var(--fg-subtle)"
    }
  }[status] || {};
  return /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: map.variant,
    roundness: roundness,
    style: style,
    iconLeft: /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: map.dot,
        flexShrink: 0
      }
    })
  }, map.label);
}
Object.assign(__ds_scope, { CycleStatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/fuko/CycleStatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/fuko/CycleCard.jsx
try { (() => {
/** Feedback cycle summary card. */
function CycleCard({
  title,
  cycleLabel = null,
  status = "open",
  progress = null,
  deadline = null,
  participants = [],
  highlight = false,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      padding: 18,
      width: "100%",
      background: highlight ? "var(--brand-soft)" : "var(--surface)",
      border: `1px solid ${highlight ? "var(--primary-border)" : "var(--border)"}`,
      borderRadius: "var(--r-2xl)",
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-xs)",
      cursor: onClick ? "pointer" : "default",
      boxSizing: "border-box",
      transition: "box-shadow var(--dur-base) var(--ease-standard)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CycleStatusBadge, {
    status: status
  }), cycleLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--fg-muted)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 7a5 5 0 1 1-1.5-3.5M13 2v3h-3",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), cycleLabel)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 1.25,
      color: "var(--fg)"
    }
  }, title), progress != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--fg-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--fg)"
    }
  }, progress, "%")), /*#__PURE__*/React.createElement(__ds_scope.Progress, {
    value: progress
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 10,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.AvatarStack, {
    people: participants,
    size: "sm",
    max: 4
  }), deadline && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--fg-muted)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 16 16",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "6",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 5v3l2 1.2",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round"
  })), deadline)));
}
Object.assign(__ds_scope, { CycleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/fuko/CycleCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/** Breadcrumb trail. items:[{label,href?,icon?}] */
function Breadcrumb({
  items = [],
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      ...style
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        color: last ? "var(--fg)" : "var(--fg-muted)",
        fontWeight: last ? 600 : 400,
        cursor: last ? "default" : "pointer"
      }
    }, it.icon, it.label), !last && /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 16 16",
      fill: "none",
      style: {
        color: "var(--fg-subtle)"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 4l4 4-4 4",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavItem.jsx
try { (() => {
/** Sidebar navigation item (app shell). */
function NavItem({
  icon = null,
  label,
  active = false,
  badge = null,
  collapsed = false,
  onClick,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    title: collapsed ? label : undefined,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: "100%",
      height: 38,
      padding: collapsed ? 0 : "0 10px",
      justifyContent: collapsed ? "center" : "flex-start",
      background: active ? "var(--primary-subtle)" : hover ? "var(--accent)" : "transparent",
      color: active ? "var(--primary-subtle-fg)" : "var(--sidebar-sidebar-foreground)",
      border: "none",
      borderRadius: "var(--r-lg)",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: active ? 600 : 500,
      transition: "background var(--dur-fast), color var(--dur-fast)",
      textAlign: "left"
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexShrink: 0,
      width: 18,
      height: 18
    }
  }, icon), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, label), !collapsed && badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 20,
      height: 20,
      padding: "0 6px",
      borderRadius: "var(--r-full)",
      background: active ? "var(--primary)" : "var(--secondary)",
      color: active ? "var(--primary-fg)" : "var(--fg-muted)",
      fontSize: 11,
      fontWeight: 600,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, badge));
}
Object.assign(__ds_scope, { NavItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Tabs. items: [{value,label,count?,icon?}] */
function Tabs({
  items = [],
  value,
  defaultValue,
  variant = "line",
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? (items[0] && items[0].value));
  const current = value !== undefined ? value : internal;
  const pick = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  const pill = variant === "pill";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: pill ? 4 : 2,
      padding: pill ? 4 : 0,
      background: pill ? "var(--secondary)" : "transparent",
      borderRadius: pill ? "var(--r-lg)" : 0,
      borderBottom: pill ? "none" : "1px solid var(--border)",
      ...style
    }
  }, items.map(it => {
    const on = it.value === current;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      type: "button",
      onClick: () => pick(it.value),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: pill ? 30 : 38,
        padding: pill ? "0 12px" : "0 12px",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: on ? 600 : 500,
        color: on ? pill ? "var(--fg)" : "var(--primary)" : "var(--fg-muted)",
        background: pill ? on ? "var(--surface)" : "transparent" : "transparent",
        border: "none",
        borderRadius: pill ? "var(--r-md)" : 0,
        cursor: "pointer",
        borderBottom: pill ? "none" : `2px solid ${on ? "var(--primary)" : "transparent"}`,
        marginBottom: pill ? 0 : -1,
        boxShadow: pill && on ? "var(--shadow-2xs)" : "none",
        transition: "color var(--dur-fast), background var(--dur-fast)"
      }
    }, it.icon, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 18,
        height: 18,
        padding: "0 5px",
        borderRadius: "var(--r-full)",
        background: on ? "var(--primary-subtle)" : "var(--secondary)",
        color: on ? "var(--primary-subtle-fg)" : "var(--fg-muted)",
        fontSize: 11,
        fontWeight: 600,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/fuko-app/chats.jsx
try { (() => {
/* FUKO — "Чаты" screen (Figma nodes 2698-48137 default + 2698-48138 thread open).
   IIFE-wrapped so it can reuse window.FukoMyCycles.{Sidebar,Topbar} without leaking
   top-level identifiers into the shared Babel scope. Exposes window.FukoChats. */
(() => {
  const CNS = window.FUKODesignSystem_23dd6b;
  const {
    Avatar,
    IconButton,
    Input
  } = CNS;
  const CIcon = (n, size = 18, sw = 2) => /*#__PURE__*/React.createElement("i", {
    "data-lucide": n,
    style: {
      width: size,
      height: size,
      strokeWidth: sw
    }
  });
  const plural = (n, one, few, many) => {
    const m10 = n % 10,
      m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return one;
    if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
    return many;
  };

  /* ---------------- data ---------------- */
  const PEOPLE = [{
    id: 1,
    name: "Кристина Юрьевна Н.",
    subject: "Астрономия, доц.",
    preview: "Посмотрела кривую блеска — обсудим подписи осей",
    when: "10:58",
    unread: 2
  }, {
    id: 2,
    name: "Аркаправо Г.",
    subject: "Право",
    preview: "Список источников согласован, можно писать",
    when: "Вчера",
    unread: 0
  }, {
    id: 3,
    name: "Екатерина Александровна Ш.",
    subject: "Социология",
    preview: "Вопрос 7 в анкете наводящий — переформулируйте",
    when: "Вчера",
    unread: 1
  }, {
    id: 4,
    name: "Роман Игоревич А.",
    subject: "История",
    preview: "Сноски оформите по ГОСТ, остальное хорошо",
    when: "Пн",
    unread: 0
  }, {
    id: 5,
    name: "Даниил Олегович П.",
    subject: "Экономика",
    preview: "Поясните, почему выбрали именно эту модель",
    when: "Пн",
    unread: 3
  }, {
    id: 6,
    name: "Екатерина Кирилловна К.",
    subject: "Философия",
    preview: "Сильный тезис, но не хватает контраргумента",
    when: "5 апр",
    unread: 0
  }, {
    id: 7,
    name: "Виталий Сергеевич О.",
    subject: "Физика",
    preview: "Посчитайте погрешность измерений и пришлите",
    when: "3 апр",
    unread: 1
  }, {
    id: 8,
    name: "Евгений Витальевич Р.",
    subject: "Информатика",
    preview: "Логику стоит вынести из контроллера в сервис",
    when: "2 апр",
    unread: 0
  }, {
    id: 9,
    name: "Дарья Дмитриевна С.",
    subject: "Лингвистика",
    preview: "Уточните корпус примеров — сейчас их маловато",
    when: "28 мар",
    unread: 1
  }];
  const THREAD_ICON = {
    general: {
      icon: "hash",
      bg: "var(--brand-soft)",
      fg: "var(--primary)"
    },
    mail: {
      icon: "mail",
      bg: "var(--icon-neutral-bg)",
      fg: "var(--icon-neutral-fg)"
    },
    check: {
      icon: "check",
      bg: "var(--icon-neutral-bg)",
      fg: "var(--icon-neutral-fg)"
    },
    cycle: {
      icon: "refresh-cw",
      bg: "var(--icon-neutral-bg)",
      fg: "var(--icon-neutral-fg)"
    }
  };

  /* threads per teacher (subject-relevant) */
  const THREADS_BY_PERSON = {
    1: [{
      id: "general",
      kind: "general",
      title: "Общее",
      preview: "Дедлайн по первому циклу — 5 апреля",
      time: "16:31"
    }, {
      id: "exo",
      kind: "mail",
      title: "Курсовая: экзопланеты",
      preview: "Нужно обосновать выбор метода поиска",
      time: "14:20"
    }, {
      id: "calc",
      kind: "check",
      title: "Расчёты и графики",
      preview: "Проверьте кривую блеска и подписи осей",
      time: "12 мар"
    }, {
      id: "defense",
      kind: "cycle",
      title: "Подготовка к защите",
      preview: "Соберём вопросы комиссии заранее",
      time: "10 мар"
    }],
    2: [{
      id: "general",
      kind: "general",
      title: "Общее",
      preview: "Список источников согласован",
      time: "15:02"
    }, {
      id: "essay",
      kind: "mail",
      title: "Эссе: правовые коллизии",
      preview: "Уточните юрисдикцию в примере 2",
      time: "Вчера"
    }, {
      id: "practice",
      kind: "check",
      title: "Судебная практика",
      preview: "Добавьте 2–3 свежих постановления",
      time: "9 апр"
    }],
    3: [{
      id: "general",
      kind: "general",
      title: "Общее",
      preview: "Жду исправленную анкету к среде",
      time: "11:40"
    }, {
      id: "survey",
      kind: "mail",
      title: "Анкета для опроса",
      preview: "Вопрос 7 наводящий — переформулируйте",
      time: "Вчера"
    }, {
      id: "sample",
      kind: "check",
      title: "Выборка и метод",
      preview: "Обоснуйте размер выборки",
      time: "7 апр"
    }],
    4: [{
      id: "general",
      kind: "general",
      title: "Общее",
      preview: "В целом готово, правки косметические",
      time: "18:10"
    }, {
      id: "essay",
      kind: "mail",
      title: "Реферат: реформы 1860-х",
      preview: "Сноски оформите по ГОСТ",
      time: "Пн"
    }, {
      id: "sources",
      kind: "check",
      title: "Работа с источниками",
      preview: "Сравните две летописи между собой",
      time: "4 апр"
    }],
    5: [{
      id: "general",
      kind: "general",
      title: "Общее",
      preview: "Жду пояснение по модели до пятницы",
      time: "09:25"
    }, {
      id: "course",
      kind: "mail",
      title: "Курсовая: инфляция",
      preview: "Поясните выбор именно этой модели",
      time: "Пн"
    }, {
      id: "charts",
      kind: "check",
      title: "Данные и графики",
      preview: "Подпишите оси и укажите источник данных",
      time: "31 мар"
    }],
    6: [{
      id: "general",
      kind: "general",
      title: "Общее",
      preview: "Хорошая динамика, продолжайте",
      time: "5 апр"
    }, {
      id: "essay",
      kind: "mail",
      title: "Эссе: свобода воли",
      preview: "Сильный тезис, но нужен контраргумент",
      time: "5 апр"
    }],
    7: [{
      id: "general",
      kind: "general",
      title: "Общее",
      preview: "Отчёт принят, замечаний нет",
      time: "3 апр"
    }, {
      id: "lab",
      kind: "mail",
      title: "Лабораторная: маятник",
      preview: "Посчитайте погрешность измерений",
      time: "3 апр"
    }, {
      id: "report",
      kind: "check",
      title: "Отчёт по проекту",
      preview: "Добавьте вывод по графику",
      time: "1 апр"
    }],
    8: [{
      id: "general",
      kind: "general",
      title: "Общее",
      preview: "Спринт закрыли, отличная работа",
      time: "2 апр"
    }, {
      id: "api",
      kind: "mail",
      title: "Проект: API кабинета",
      preview: "Опишите модель данных подробнее",
      time: "2 апр"
    }, {
      id: "review",
      kind: "check",
      title: "Код-ревью",
      preview: "Вынесите логику из контроллера в сервис",
      time: "30 мар"
    }],
    9: [{
      id: "general",
      kind: "general",
      title: "Общее",
      preview: "Жду расширенный список примеров",
      time: "28 мар"
    }, {
      id: "course",
      kind: "mail",
      title: "Курсовая: заимствования",
      preview: "Уточните корпус примеров",
      time: "28 мар"
    }]
  };

  /* one themed conversation per teacher */
  const CONVO_BY_PERSON = {
    1: [{
      id: 1,
      side: "in",
      text: "Добрый день, Алексей! Давайте начнём первый цикл. Сформулируйте, пожалуйста, исследовательский вопрос и метод поиска экзопланет, на который опираетесь.",
      time: "15:31"
    }, {
      id: 2,
      divider: "Сегодня"
    }, {
      id: 3,
      side: "out",
      text: "Здравствуйте! Беру транзитный метод — по кривой блеска звезды. Прикладываю черновик главы и графики, которые успел построить.",
      time: "09:42",
      files: [{
        name: "Глава 1 — метод.pdf",
        size: "312 КБ",
        type: "pdf"
      }, {
        name: "Кривая блеска.png",
        size: "196 КБ",
        type: "doc"
      }]
    }, {
      id: 4,
      side: "in",
      author: "Кристина Юрьевна",
      avatar: true,
      text: "Хороший выбор. Но на графике не подписаны оси и не указан период наблюдения — без этого данные трудно читать. Поправьте и обоснуйте выбор именно транзитного метода.",
      time: "10:55"
    }, {
      id: 5,
      side: "in",
      text: "И добавьте 1–2 ссылки на свежие исследования по теме — это усилит обзор.",
      time: "10:58"
    }],
    2: [{
      id: 1,
      side: "in",
      text: "Добрый день! По эссе: тема интересная, но в примере 2 не ясно, о какой юрисдикции речь. Уточните, пожалуйста.",
      time: "14:30"
    }, {
      id: 2,
      side: "out",
      text: "Здравствуйте! Да, имел в виду российскую практику. Перепишу абзац и сошлюсь на конкретные нормы.",
      time: "14:48"
    }, {
      id: 3,
      side: "in",
      author: "Аркаправо Г.",
      avatar: true,
      text: "Отлично. И список источников согласован — можно переходить к чистовику.",
      time: "15:02"
    }],
    3: [{
      id: 1,
      side: "in",
      text: "Посмотрела анкету. Вопрос 7 наводящий — респондент почувствует «правильный» ответ. Переформулируйте нейтрально.",
      time: "11:20"
    }, {
      id: 2,
      side: "out",
      text: "Поняла, спасибо. Сделаю его открытым, без оценочных слов. Заодно проверю формулировки 5 и 9.",
      time: "11:35"
    }, {
      id: 3,
      side: "in",
      author: "Екатерина Александровна",
      avatar: true,
      text: "Да, и обоснуйте размер выборки — почему именно столько человек. Жду исправленную версию к среде.",
      time: "11:40"
    }],
    4: [{
      id: 1,
      side: "in",
      text: "Реферат прочитал, содержание сильное. Но сноски оформлены вразнобой — приведите всё к ГОСТ.",
      time: "17:50"
    }, {
      id: 2,
      side: "out",
      text: "Здравствуйте! Исправлю оформление сегодня и пришлю обновлённый файл.",
      time: "18:05"
    }, {
      id: 3,
      side: "in",
      author: "Роман Игоревич",
      avatar: true,
      text: "Хорошо. В целом готово, правки косметические — после них можно сдавать.",
      time: "18:10"
    }],
    5: [{
      id: 1,
      side: "in",
      text: "По курсовой: вы взяли модель Филлипса, но не объяснили, почему именно её. Добавьте обоснование выбора.",
      time: "09:10"
    }, {
      id: 2,
      side: "out",
      text: "Здравствуйте! Да, поясню — она лучше описывает связь инфляции и безработицы на наших данных. Допишу абзац.",
      time: "09:20"
    }, {
      id: 3,
      side: "in",
      author: "Даниил Олегович",
      avatar: true,
      text: "Хорошо. И на графиках подпишите оси и укажите источник данных. Жду до пятницы.",
      time: "09:25"
    }],
    6: [{
      id: 1,
      side: "in",
      text: "Эссе про свободу воли — сильный тезис. Но вы рассматриваете только детерминизм; добавьте контраргумент со стороны компатибилизма.",
      time: "16:40"
    }, {
      id: 2,
      side: "out",
      text: "Спасибо! Согласен, односторонне получилось. Введу контрпозицию и разберу её.",
      time: "16:52"
    }, {
      id: 3,
      side: "in",
      author: "Екатерина Кирилловна",
      avatar: true,
      text: "Отлично. Хорошая динамика по сравнению с прошлым циклом — продолжайте.",
      time: "5 апр"
    }],
    7: [{
      id: 1,
      side: "in",
      text: "По лабораторной: данные собраны верно, но нет оценки погрешности измерений. Посчитайте и добавьте в отчёт.",
      time: "12:15"
    }, {
      id: 2,
      side: "out",
      text: "Здравствуйте! Посчитаю случайную и приборную погрешность, оформлю таблицей.",
      time: "12:30"
    }, {
      id: 3,
      side: "in",
      author: "Виталий Сергеевич",
      avatar: true,
      text: "Верно. После этого отчёт можно принимать — замечаний больше нет.",
      time: "3 апр"
    }],
    8: [{
      id: 1,
      side: "in",
      text: "Глянул проект API. Работает, но логика лежит прямо в контроллере — вынесите её в отдельный сервис, так будет чище.",
      time: "19:05"
    }, {
      id: 2,
      side: "out",
      text: "Привет! Понял, отрефакторю — заодно опишу модель данных в README.",
      time: "19:20"
    }, {
      id: 3,
      side: "in",
      author: "Евгений Витальевич",
      avatar: true,
      text: "Супер. Спринт тогда закрываем — отличная работа.",
      time: "2 апр"
    }],
    9: [{
      id: 1,
      side: "in",
      text: "По курсовой о заимствованиях: тема хорошая, но корпус примеров маловат — на 12 словах выводы шаткие.",
      time: "10:05"
    }, {
      id: 2,
      side: "out",
      text: "Здравствуйте! Расширю выборку до 40–50 примеров и сгруппирую по источнику заимствования.",
      time: "10:18"
    }, {
      id: 3,
      side: "in",
      author: "Дарья Дмитриевна",
      avatar: true,
      text: "Отлично, так анализ будет убедительнее. Жду расширенный список.",
      time: "28 мар"
    }]
  };
  const PANEL = {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "var(--r-3xl)",
    boxShadow: "var(--shadow-xs)",
    display: "flex",
    flexDirection: "column",
    minHeight: 0,
    overflow: "hidden"
  };

  /* ---------------- people list (column 1) ---------------- */
  function ChatListItem({
    p,
    active,
    onClick
  }) {
    const [hover, setHover] = React.useState(false);
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 14,
        width: "100%",
        textAlign: "left",
        cursor: "pointer",
        border: "none",
        borderRadius: "var(--r-xl)",
        padding: "14px 16px",
        background: active ? "var(--surface-2)" : hover ? "var(--surface-2)" : "transparent",
        transition: "background var(--dur-fast) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: p.name,
      size: "lg",
      status: "online"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        fontWeight: 600,
        color: "var(--fg)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, p.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-subtle)",
        flexShrink: 0
      }
    }, p.when)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--fg-muted)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, p.preview), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        padding: "3px 10px",
        borderRadius: "var(--r-full)",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-muted)"
      }
    }, p.topics, " ", plural(p.topics, "тема", "темы", "тем")), p.unread > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 20,
        height: 20,
        padding: "0 5px",
        boxSizing: "border-box",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "var(--r-full)",
        border: "1px solid var(--primary-border)",
        color: "var(--primary)",
        background: "var(--primary-subtle)",
        fontSize: 12,
        fontWeight: 600
      }
    }, p.unread)))));
  }
  function PeopleList({
    activeId,
    onSelect,
    onNew
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...PANEL,
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "24px 24px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 38,
        letterSpacing: "-0.02em",
        color: "var(--fg)"
      }
    }, "\u0427\u0430\u0442\u044B"), /*#__PURE__*/React.createElement("button", {
      onClick: onNew,
      "aria-label": "\u041D\u043E\u0432\u044B\u0439 \u0447\u0430\u0442",
      style: {
        width: 48,
        height: 48,
        borderRadius: "var(--r-full)",
        border: "none",
        cursor: "pointer",
        background: "var(--primary)",
        color: "var(--primary-fg)",
        boxShadow: "var(--shadow-primary)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, CIcon("plus", 22))), /*#__PURE__*/React.createElement(Input, {
      placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E\xA0\u0447\u0430\u0442\u0430\u043C\u2026",
      iconLeft: CIcon("search", 17)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflowY: "auto",
        padding: "0 14px 16px",
        display: "flex",
        flexDirection: "column",
        gap: 2
      }
    }, PEOPLE.map(p => /*#__PURE__*/React.createElement(ChatListItem, {
      key: p.id,
      p: {
        ...p,
        topics: (THREADS_BY_PERSON[p.id] || []).length
      },
      active: activeId === p.id,
      onClick: () => onSelect(p.id)
    }))));
  }

  /* ---------------- thread list (column 2) ---------------- */
  function ThreadItem({
    t,
    active,
    onOpen
  }) {
    const conf = THREAD_ICON[t.kind];
    const [hover, setHover] = React.useState(false);
    return /*#__PURE__*/React.createElement("button", {
      onClick: onOpen,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 14,
        width: "100%",
        textAlign: "left",
        cursor: "pointer",
        border: "none",
        borderRadius: "var(--r-xl)",
        padding: "14px 16px",
        background: active ? "var(--surface-2)" : hover ? "var(--surface-2)" : "transparent",
        transition: "background var(--dur-fast) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        flexShrink: 0,
        borderRadius: "var(--r-xl)",
        background: conf.bg,
        color: conf.fg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, CIcon(conf.icon, 20)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        fontWeight: 600,
        color: "var(--fg)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, t.title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--fg-muted)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, t.preview)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 12,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-subtle)"
      }
    }, t.time), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--fg-subtle)",
        display: "flex"
      }
    }, CIcon("pin", 15))));
  }
  function ThreadPanel({
    person,
    threads,
    openId,
    onOpen,
    onBack,
    compact
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...PANEL,
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "18px 22px",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        gap: 14
      }
    }, compact && /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      ariaLabel: "\u041D\u0430\u0437\u0430\u0434",
      onClick: onBack
    }, CIcon("arrow-left", 18)), /*#__PURE__*/React.createElement(Avatar, {
      name: person.name,
      size: "default",
      status: "online"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        lineHeight: 1.25
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-heading)",
        fontWeight: 600,
        fontSize: 19,
        color: "var(--fg)"
      }
    }, person.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--fg-muted)"
      }
    }, person.subject)), /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      ariaLabel: "\u041E\xA0\u0447\u0430\u0442\u0435"
    }, CIcon("info", 18))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflowY: "auto",
        padding: "8px 14px 16px",
        display: "flex",
        flexDirection: "column",
        gap: 2
      }
    }, threads.map(t => /*#__PURE__*/React.createElement(ThreadItem, {
      key: t.id,
      t: t,
      active: openId === t.id,
      onOpen: () => onOpen(t.id)
    }))));
  }

  /* ---------------- conversation (column 3) ---------------- */
  function FileChip({
    f
  }) {
    const pdf = f.type === "pdf";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-lg)",
        padding: "10px 12px",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        flexShrink: 0,
        borderRadius: "var(--r-md)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: pdf ? "var(--primary)" : "#3B6FB0",
        color: pdf ? "var(--primary-fg)" : "#fff",
        fontFamily: "var(--font-sans)",
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.02em"
      }
    }, pdf ? "PDF" : "doc"), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0,
        lineHeight: 1.3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--fg)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, f.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        color: "var(--fg-muted)"
      }
    }, f.size, " \xB7 ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--primary)"
      }
    }, "\u0441\u043A\u0430\u0447\u0430\u0442\u044C"))));
  }
  function Bubble({
    m
  }) {
    if (m.divider) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          justifyContent: "center",
          margin: "6px 0"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          padding: "5px 14px",
          borderRadius: "var(--r-full)",
          background: "var(--surface-2)",
          border: "1px solid var(--border)",
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          fontWeight: 600,
          color: "var(--fg-muted)"
        }
      }, m.divider));
    }
    const out = m.side === "out";
    const bubble = /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560,
        padding: "12px 16px",
        borderRadius: 18,
        borderBottomRightRadius: out ? 6 : 18,
        borderBottomLeftRadius: out ? 18 : 6,
        background: out ? "var(--bubble-out)" : "var(--bubble-in)",
        color: "var(--bubble-out-fg)",
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, m.author && !out && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 700,
        color: "var(--fg)"
      }
    }, m.author), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        lineHeight: 1.5
      }
    }, m.text), m.files && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10
      }
    }, m.files.map((f, i) => /*#__PURE__*/React.createElement(FileChip, {
      key: i,
      f: f
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        alignSelf: "flex-end",
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        color: "var(--fg-subtle)"
      }
    }, m.time));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: out ? "flex-end" : "flex-start",
        gap: 12
      }
    }, !out && m.avatar && /*#__PURE__*/React.createElement(Avatar, {
      name: m.author,
      size: "default"
    }), !out && !m.avatar && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        flexShrink: 0
      }
    }), bubble);
  }
  function Conversation({
    thread,
    convo
  }) {
    const conf = THREAD_ICON[thread.kind];
    const scrollRef = React.useRef(null);
    React.useEffect(() => {
      const el = scrollRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    }, [thread.id]);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        ...PANEL,
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "16px 24px",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: "var(--r-xl)",
        background: conf.bg,
        color: conf.fg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, CIcon(conf.icon, 22)), /*#__PURE__*/React.createElement("h2", {
      style: {
        flex: 1,
        margin: 0,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 30,
        letterSpacing: "-0.01em",
        color: "var(--fg)"
      }
    }, thread.title), /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      ariaLabel: "\u041C\u0435\u043D\u044E"
    }, CIcon("more-horizontal", 20))), /*#__PURE__*/React.createElement("div", {
      ref: scrollRef,
      style: {
        flex: 1,
        minHeight: 0,
        overflowY: "auto",
        padding: "22px 28px",
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, convo.map(m => /*#__PURE__*/React.createElement(Bubble, {
      key: m.id,
      m: m
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "14px 24px 20px",
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      variant: "outline",
      roundness: "round",
      ariaLabel: "\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C"
    }, CIcon("plus", 20)), /*#__PURE__*/React.createElement(IconButton, {
      variant: "outline",
      roundness: "round",
      ariaLabel: "\u042D\u043C\u043E\u0434\u0437\u0438"
    }, CIcon("smile", 20)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Input, {
      size: "lg",
      placeholder: "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435\u2026"
    })), /*#__PURE__*/React.createElement("button", {
      "aria-label": "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
      style: {
        width: 48,
        height: 48,
        flexShrink: 0,
        borderRadius: "var(--r-full)",
        border: "none",
        cursor: "pointer",
        background: "var(--primary)",
        color: "var(--primary-fg)",
        boxShadow: "var(--shadow-primary)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, CIcon("send", 19))));
  }

  /* ---------------- screen orchestrator ---------------- */
  function ChatsScreen() {
    const [personId, setPersonId] = React.useState(1);
    const [openId, setOpenId] = React.useState(null);
    const person = PEOPLE.find(p => p.id === personId) || PEOPLE[0];
    const threads = THREADS_BY_PERSON[personId] || [];
    const thread = threads.find(t => t.id === openId);
    const convo = CONVO_BY_PERSON[personId] || [];
    React.useEffect(() => {
      window.lucide && window.lucide.createIcons();
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        width: "100%",
        display: "flex",
        gap: 18
      }
    }, openId == null ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PeopleList, {
      activeId: personId,
      onSelect: id => {
        setPersonId(id);
        setOpenId(null);
      },
      onNew: () => {}
    }), /*#__PURE__*/React.createElement(ThreadPanel, {
      person: person,
      threads: threads,
      openId: openId,
      onOpen: setOpenId,
      compact: false
    })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ThreadPanel, {
      person: person,
      threads: threads,
      openId: openId,
      onOpen: setOpenId,
      onBack: () => setOpenId(null),
      compact: true
    }), /*#__PURE__*/React.createElement(Conversation, {
      thread: thread,
      convo: convo
    })));
  }
  window.FukoChats = {
    ChatsScreen
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/fuko-app/chats.jsx", error: String((e && e.message) || e) }); }

// ui_kits/fuko-app/create-cycle.jsx
try { (() => {
/* FUKO — "Создать запрос обратной связи" wizard (4 steps + success modal).
   Full-screen takeover overlay. Exposes window.FukoCreateCycle. */
(() => {
  const WNS = window.FUKODesignSystem_23dd6b;
  const {
    Logo,
    IconButton,
    Avatar
  } = WNS;
  const WIcon = (n, size = 16, sw = 2) => /*#__PURE__*/React.createElement("i", {
    "data-lucide": n,
    style: {
      width: size,
      height: size,
      strokeWidth: sw,
      flexShrink: 0
    }
  });
  const AVATAR = "../../assets/people/alexey-borisov.png";
  const STEPS = [{
    id: 1,
    label: "Работа и материал",
    sub: "выберите работу и материал"
  }, {
    id: 2,
    label: "Цель и вопросы",
    sub: "сформулируйте цель и вопросы"
  }, {
    id: 3,
    label: "Респондент и срок",
    sub: "выберите респондента и срок"
  }, {
    id: 4,
    label: "Проверка",
    sub: "проверьте и отправьте запрос"
  }];

  /* ---------- shared bits ---------- */
  function Field({
    label,
    hint,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 700,
        color: "var(--fg)"
      }
    }, label), children, hint && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-muted)"
      }
    }, hint));
  }
  function Select({
    value
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        height: 56,
        padding: "0 18px",
        boxSizing: "border-box",
        background: "var(--surface)",
        border: "1px solid var(--border-strong)",
        borderRadius: "var(--r-xl)",
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        color: "var(--fg)",
        cursor: "pointer"
      }
    }, value), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        right: 16,
        top: "50%",
        transform: "translateY(-50%)",
        color: "var(--fg-muted)",
        pointerEvents: "none",
        display: "flex"
      }
    }, WIcon("chevron-down", 18)));
  }
  function GhostBtn({
    icon,
    children,
    onClick
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 16px",
        border: "1px solid var(--border)",
        background: "var(--surface-2)",
        borderRadius: "var(--r-lg)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--fg)"
      }
    }, WIcon(icon, 15), children);
  }
  function SectionCard({
    title,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-3xl)",
        boxShadow: "var(--shadow-xs)",
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 22
      }
    }, title && /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 24,
        color: "var(--fg)"
      }
    }, title), children);
  }

  /* ---------- stepper ---------- */
  function Stepper({
    current
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-3xl)",
        boxShadow: "var(--shadow-xs)",
        padding: 24,
        alignSelf: "flex-start",
        width: 260,
        boxSizing: "border-box"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--fg-muted)"
      }
    }, "\u042D\u0442\u0430\u043F\u044B"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        marginTop: 16
      }
    }, STEPS.map((s, i) => {
      const done = s.id < current,
        active = s.id === current;
      return /*#__PURE__*/React.createElement("div", {
        key: s.id,
        style: {
          display: "flex",
          gap: 14,
          alignItems: "flex-start"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 30,
          height: 30,
          flexShrink: 0,
          borderRadius: "var(--r-full)",
          boxSizing: "border-box",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-sans)",
          fontSize: 14,
          fontWeight: 600,
          background: done ? "var(--primary)" : active ? "transparent" : "transparent",
          color: done ? "var(--primary-fg)" : active ? "var(--primary)" : "var(--fg-subtle)",
          border: active ? "2px solid var(--primary)" : done ? "none" : "2px solid var(--border-strong)"
        }
      }, done ? WIcon("check", 15) : s.id), i < STEPS.length - 1 && /*#__PURE__*/React.createElement("span", {
        style: {
          width: 2,
          height: 30,
          background: done ? "var(--primary)" : "var(--border)"
        }
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          marginTop: 4,
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          fontWeight: active ? 700 : 500,
          color: active ? "var(--primary)" : done ? "var(--fg)" : "var(--fg-subtle)"
        }
      }, s.label));
    })));
  }

  /* ---------- step 1 ---------- */
  function Step1({
    data
  }) {
    return /*#__PURE__*/React.createElement(SectionCard, {
      title: "\u0420\u0430\u0431\u043E\u0442\u0430 \u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B"
    }, /*#__PURE__*/React.createElement(Field, {
      label: "\u0420\u0430\u0431\u043E\u0442\u0430",
      hint: "\u0423\u0447\u0435\u0431\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430, \u043F\u043E \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043D\u0443\u0436\u043D\u0430 \u043E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C"
    }, /*#__PURE__*/React.createElement(Select, {
      value: data.work
    })), /*#__PURE__*/React.createElement(Field, {
      label: "\u0412\u0435\u0440\u0441\u0438\u044F",
      hint: "\u0412\u0435\u0440\u0441\u0438\u044F, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0443\u0432\u0438\u0434\u0438\u0442 \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0442"
    }, /*#__PURE__*/React.createElement(Select, {
      value: data.version
    })), /*#__PURE__*/React.createElement(Field, {
      label: "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-xl)",
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 52,
        height: 52,
        flexShrink: 0,
        borderRadius: "var(--r-md)",
        background: "var(--primary)",
        color: "var(--primary-fg)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        fontWeight: 700
      }
    }, "PDF"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        fontWeight: 700,
        color: "var(--fg)"
      }
    }, data.file), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-muted)"
      }
    }, "PDF \xB7 12 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \xB7 2.4 \u041C\u0411 \xB7 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E \u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0432 12:48")), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 11px",
        borderRadius: "var(--r-full)",
        background: "var(--success-subtle)",
        color: "var(--success)",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: "var(--success)"
      }
    }), "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B \u0433\u043E\u0442\u043E\u0432")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(GhostBtn, {
      icon: "refresh-cw"
    }, "\u0417\u0430\u043C\u0435\u043D\u0438\u0442\u044C \u0444\u0430\u0439\u043B"), /*#__PURE__*/React.createElement(GhostBtn, {
      icon: "link"
    }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443"))));
  }

  /* ---------- step 2 ---------- */
  const AI_ACTIONS = ["Сформулировать вопросы по материалу", "Предложить критерии проверки", "Сделать формулировку короче", "Усилить акцент на методологии"];
  const AI_SUGGEST = ["Что было самым сложным при анализе данных?", "Достаточно ли обоснован выбор выборки?", "Какие выводы стоит усилить?"];
  function TextArea({
    value
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: 88,
        padding: "14px 18px",
        boxSizing: "border-box",
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-xl)",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        lineHeight: 1.5,
        color: "var(--fg)"
      }
    }, value);
  }
  function Step2({
    data,
    setData
  }) {
    const [sugIdx, setSugIdx] = React.useState(0);
    const addQuestion = text => setData(d => ({
      ...d,
      questions: [...d.questions, text]
    }));
    const removeQuestion = i => setData(d => ({
      ...d,
      questions: d.questions.filter((_, j) => j !== i)
    }));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 380px",
        gap: 22,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(SectionCard, {
      title: "\u0426\u0435\u043B\u044C \u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"
    }, /*#__PURE__*/React.createElement(Field, {
      label: "\u0427\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C?"
    }, /*#__PURE__*/React.createElement(TextArea, {
      value: data.goal
    })), /*#__PURE__*/React.createElement(Field, {
      label: "\u041F\u043E\u0447\u0435\u043C\u0443 \u044D\u0442\u043E \u0432\u0430\u0436\u043D\u043E \u0441\u0435\u0439\u0447\u0430\u0441?"
    }, /*#__PURE__*/React.createElement(TextArea, {
      value: data.why
    })), /*#__PURE__*/React.createElement(Field, {
      label: "\u041A\u0430\u043A\u043E\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u043C?"
    }, /*#__PURE__*/React.createElement(TextArea, {
      value: data.result
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 700,
        color: "var(--fg)"
      }
    }, "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043A \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0442\u0443"), data.questions.map((q, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-xl)",
        padding: "14px 16px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        flexShrink: 0,
        borderRadius: "var(--r-full)",
        background: "var(--fg)",
        color: "var(--bg)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 600
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        color: "var(--fg)"
      }
    }, q), /*#__PURE__*/React.createElement("button", {
      onClick: () => removeQuestion(i),
      "aria-label": "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
      style: {
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color: "var(--fg-subtle)",
        display: "flex"
      }
    }, WIcon("x", 18)))), /*#__PURE__*/React.createElement("button", {
      onClick: () => addQuestion("Новый вопрос"),
      style: {
        alignSelf: "flex-start",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 16px",
        border: "1px dashed var(--border-strong)",
        background: "transparent",
        borderRadius: "var(--r-lg)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--fg-muted)"
      }
    }, "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441"))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-dark)",
        borderRadius: "var(--r-3xl)",
        padding: 22,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        color: "#fff",
        alignSelf: "stretch"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: "var(--r-md)",
        background: "rgba(255,255,255,0.08)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, WIcon("sparkle", 20)), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.25
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 19
      }
    }, "\u0418\u0418-\u043F\u043E\u043C\u043E\u0449\u043D\u0438\u043A"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "rgba(255,255,255,0.55)"
      }
    }, "\u041F\u043E\u0434\u0441\u043A\u0430\u0436\u0435\u0442, \u0447\u0442\u043E \u0441\u043F\u0440\u043E\u0441\u0438\u0442\u044C"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 12px",
        borderRadius: "var(--r-lg)",
        background: "rgba(255,255,255,0.06)",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "rgba(255,255,255,0.75)"
      }
    }, WIcon("link", 14), " \u041F\u0440\u0438\u043C\u0435\u043D\u044F\u0435\u0442\u0441\u044F \u043A: \u0412\u043E\u043F\u0440\u043E\u0441\u044B \u043A \u0440\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0442\u0443"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, AI_ACTIONS.map(a => /*#__PURE__*/React.createElement("button", {
      key: a,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        width: "100%",
        textAlign: "left",
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.04)",
        borderRadius: "var(--r-lg)",
        padding: "12px 14px",
        cursor: "pointer",
        color: "#fff",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 9
      }
    }, WIcon("sparkle", 14), a), WIcon("arrow-right", 15)))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "var(--r-xl)",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "rgba(255,255,255,0.6)"
      }
    }, "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        lineHeight: 1.45
      }
    }, "\u0423\u0442\u043E\u0447\u043D\u0438\u0442\u0435, \u043A\u0430\u043A\u0438\u0435 \u0438\u043C\u0435\u043D\u043D\u043E \u0432\u044B\u0432\u043E\u0434\u044B \u0432\u044B\u0437\u044B\u0432\u0430\u044E\u0442 \u0441\u043E\u043C\u043D\u0435\u043D\u0438\u0435 \u0438\xA0\u043F\u043E\u0447\u0435\u043C\u0443."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => addQuestion("Какие выводы вызывают сомнение и почему?"),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        padding: "9px 16px",
        border: "none",
        background: "#fff",
        color: "var(--surface-dark)",
        borderRadius: "var(--r-md)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600
      }
    }, WIcon("check", 15), " \u041F\u0440\u0438\u043D\u044F\u0442\u044C"), /*#__PURE__*/React.createElement("button", {
      style: {
        padding: "9px 16px",
        border: "1px solid rgba(255,255,255,0.2)",
        background: "transparent",
        color: "#fff",
        borderRadius: "var(--r-md)",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600
      }
    }, "\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C"))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "rgba(255,255,255,0.55)"
      }
    }, "\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u2014 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0432 \u0441\u043F\u0438\u0441\u043E\u043A"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "var(--r-lg)",
        padding: "12px 14px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        lineHeight: 1.4
      }
    }, AI_SUGGEST[sugIdx]), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        addQuestion(AI_SUGGEST[sugIdx]);
        setSugIdx(i => (i + 1) % AI_SUGGEST.length);
      },
      style: {
        flexShrink: 0,
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        border: "none",
        background: "transparent",
        color: "#fff",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600
      }
    }, "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"))));
  }

  /* ---------- step 3 ---------- */
  function ParamRow({
    icon,
    label,
    value
  }) {
    return /*#__PURE__*/React.createElement("button", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        width: "100%",
        textAlign: "left",
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-xl)",
        padding: "14px 18px",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--fg-muted)",
        display: "flex"
      }
    }, WIcon(icon, 18)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        lineHeight: 1.3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-muted)"
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 700,
        color: "var(--fg)"
      }
    }, value)), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--fg-subtle)",
        display: "flex"
      }
    }, WIcon("chevron-right", 16)));
  }
  function Step3({
    data
  }) {
    const [audience, setAudience] = React.useState("Один респондент");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 360px",
        gap: 22,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(SectionCard, {
      title: "\u0420\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0442 \u0438 \u0441\u0440\u043E\u043A"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 2,
        padding: 4,
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-lg)"
      }
    }, ["Один респондент", "Несколько", "Группа"].map(t => {
      const on = audience === t;
      return /*#__PURE__*/React.createElement("button", {
        key: t,
        onClick: () => setAudience(t),
        style: {
          flex: 1,
          border: "none",
          cursor: "pointer",
          padding: "9px 12px",
          borderRadius: "var(--r-md)",
          fontFamily: "var(--font-sans)",
          fontSize: 14,
          fontWeight: 600,
          background: on ? "var(--surface)" : "transparent",
          color: on ? "var(--fg)" : "var(--fg-muted)",
          boxShadow: on ? "var(--shadow-xs)" : "none"
        }
      }, t);
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 16,
        top: "50%",
        transform: "translateY(-50%)",
        color: "var(--fg-subtle)",
        display: "flex"
      }
    }, WIcon("search", 17)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        height: 52,
        padding: "0 16px 0 44px",
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-xl)",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        color: "var(--fg-subtle)"
      }
    }, "\u041D\u0430\u0439\u0442\u0438 \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044F, \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u0430 \u0438\u043B\u0438 \u0433\u0440\u0443\u043F\u043F\u0443\u2026")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        background: "var(--primary-subtle)",
        border: "1.5px solid var(--primary)",
        borderRadius: "var(--r-xl)",
        padding: 16
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "\u041F\u0440\u043E\u0444. \u0418\u0432\u0430\u043D\u043E\u0432\u0430",
      size: "xl",
      status: "online"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        fontWeight: 700,
        color: "var(--fg)"
      }
    }, data.respondent), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--fg-muted)"
      }
    }, "\u041C\u0435\u0442\u043E\u0434\u043E\u043B\u043E\u0433\u0438\u044F \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F \xB7 \u043D\u0430\u0443\u0447\u043D\u044B\u0439 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--success)",
        marginTop: 2
      }
    }, "\u25CF \u041E\u0431\u044B\u0447\u043D\u043E \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 1\u20132 \u0434\u043D\u044F")), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "8px 14px",
        borderRadius: "var(--r-full)",
        background: "var(--primary)",
        color: "var(--primary-fg)",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600
      }
    }, WIcon("check", 15), " \u0412\u044B\u0431\u0440\u0430\u043D")), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: "6px 0 0",
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 20,
        color: "var(--fg)"
      }
    }, "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0437\u0430\u043F\u0440\u043E\u0441\u0430"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(ParamRow, {
      icon: "calendar",
      label: "\u0414\u0435\u0434\u043B\u0430\u0439\u043D",
      value: "22 \u043C\u0430\u044F \xB7 23:59"
    }), /*#__PURE__*/React.createElement(ParamRow, {
      icon: "lock",
      label: "\u0412\u0438\u0434\u0438\u043C\u043E\u0441\u0442\u044C",
      value: "\u0422\u043E\u043B\u044C\u043A\u043E \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u0446\u0438\u043A\u043B\u0430"
    }), /*#__PURE__*/React.createElement(ParamRow, {
      icon: "sparkle",
      label: "\u0418\u0418-\u0441\u0432\u043E\u0434\u043A\u0430 \u043E\u0442\u0432\u0435\u0442\u0430",
      value: "\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u0430"
    }), /*#__PURE__*/React.createElement(ParamRow, {
      icon: "bell",
      label: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F",
      value: "Email \u0438 \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-3xl)",
        boxShadow: "var(--shadow-xs)",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--fg-muted)"
      }
    }, "\u0427\u0442\u043E \u043F\u0440\u043E\u0438\u0437\u043E\u0439\u0434\u0451\u0442 \u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438"), [["Запрос получит 1 респондент", "Проф. Иванова"], ["Ответ ожидается до 22 мая", "5 рабочих дней"], ["ИИ-сводка будет создана", "после получения ответа"], ["Вы получите уведомление", "email и в приложении"]].map(([t, s], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        flexShrink: 0,
        borderRadius: "var(--r-full)",
        background: "var(--fg)",
        color: "var(--bg)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 600
      }
    }, i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.35
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 700,
        color: "var(--fg)"
      }
    }, t), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-muted)"
      }
    }, s))))));
  }

  /* ---------- step 4 ---------- */
  function EditLink({
    onClick
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color: "var(--primary)",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600
      }
    }, WIcon("pencil", 15), " \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C");
  }
  function Step4({
    data,
    goTo
  }) {
    return /*#__PURE__*/React.createElement(SectionCard, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 26,
        color: "var(--fg)",
        lineHeight: 1.2
      }
    }, "\u0417\u0430\u043F\u0440\u043E\u0441 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438 \xB7 ", data.work), /*#__PURE__*/React.createElement(EditLink, {
      onClick: () => goTo(1)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 20,
        borderBottom: "1px solid var(--border)",
        paddingBottom: 22
      }
    }, [["Автор", "Алексей Миронов", "Студент · 3 курс"], ["Респондент", data.respondent, "Научный руководитель"], ["Дедлайн", "22 мая · 23:59", "5 рабочих дней"], ["Версия", "v3 · 12 страниц", "PDF · 2.4 МБ"]].map(([l, a, b]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        lineHeight: 1.35
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-muted)"
      }
    }, l), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        fontWeight: 700,
        color: "var(--fg)"
      }
    }, a), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-muted)"
      }
    }, b)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-muted)"
      }
    }, "\u0426\u0435\u043B\u044C \u0437\u0430\u043F\u0440\u043E\u0441\u0430"), /*#__PURE__*/React.createElement(EditLink, {
      onClick: () => goTo(2)
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "-8px 0 0",
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        lineHeight: 1.5,
        color: "var(--fg)"
      }
    }, data.goal), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-muted)"
      }
    }, "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0434\u043B\u044F \u043E\u0442\u0432\u0435\u0442\u0430"), /*#__PURE__*/React.createElement(EditLink, {
      onClick: () => goTo(2)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, data.questions.map((q, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-xl)",
        padding: "14px 16px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        flexShrink: 0,
        borderRadius: "var(--r-full)",
        background: "var(--fg)",
        color: "var(--bg)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 600
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 600,
        color: "var(--fg)"
      }
    }, q)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-muted)"
      }
    }, "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B"), /*#__PURE__*/React.createElement(EditLink, {
      onClick: () => goTo(1)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-xl)",
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        flexShrink: 0,
        borderRadius: "var(--r-md)",
        background: "var(--primary)",
        color: "var(--primary-fg)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-sans)",
        fontSize: 11,
        fontWeight: 700
      }
    }, "PDF"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 700,
        color: "var(--fg)"
      }
    }, data.file), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-muted)"
      }
    }, "PDF \xB7 12 \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \xB7 2.4 \u041C\u0411"))));
  }

  /* ---------- success modal ---------- */
  function SuccessModal({
    data,
    onCard,
    onHome
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        background: "rgba(20,16,16,0.5)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 560,
        maxWidth: "100%",
        background: "var(--surface)",
        borderRadius: "var(--r-3xl)",
        boxShadow: "var(--shadow-2xl)",
        padding: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 18,
        boxSizing: "border-box"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 72,
        height: 72,
        borderRadius: "var(--r-full)",
        background: "var(--success)",
        color: "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, WIcon("check", 36)), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 32,
        color: "var(--fg)"
      }
    }, "\u0417\u0430\u043F\u0440\u043E\u0441 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        textAlign: "center",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        lineHeight: 1.5,
        color: "var(--fg-muted)",
        maxWidth: 420
      }
    }, data.respondent, " \u043F\u043E\u043B\u0443\u0447\u0438\u0442 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u0438\xA0\u0441\u043C\u043E\u0436\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u0434\u043E\xA022\xA0\u043C\u0430\u044F \xB7 23:59"), /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        background: "var(--surface-2)",
        borderRadius: "var(--r-xl)",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, [["Работа", data.work], ["Версия", "v3 · " + data.file], ["Респондент", data.respondent], ["Дедлайн", "22 мая · 23:59"]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: "flex",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 96,
        flexShrink: 0,
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--fg-muted)"
      }
    }, l), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 700,
        color: "var(--fg)"
      }
    }, v))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 96,
        flexShrink: 0,
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--fg-muted)"
      }
    }, "\u0421\u0442\u0430\u0442\u0443\u0441"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 700,
        color: "var(--fg)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "var(--warning)"
      }
    }), "\u041E\u0436\u0438\u0434\u0430\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0430"))), /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        background: "var(--surface-2)",
        borderRadius: "var(--r-xl)",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-muted)"
      }
    }, "\u0427\u0442\u043E \u0434\u0430\u043B\u044C\u0448\u0435"), ["Мы покажем уведомление, когда появится ответ", "ИИ-сводка будет создана автоматически", "Вы можете напомнить респонденту, если ответ задерживается"].map(t => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "var(--fg-subtle)",
        marginTop: 7,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--fg)"
      }
    }, t)))), /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        display: "flex",
        gap: 12,
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onCard,
      style: {
        flex: 1,
        border: "none",
        cursor: "pointer",
        background: "var(--primary)",
        color: "var(--primary-fg)",
        borderRadius: "var(--r-lg)",
        padding: "14px",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 600
      }
    }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u0446\u0438\u043A\u043B\u0430"), /*#__PURE__*/React.createElement("button", {
      onClick: onHome,
      style: {
        flex: 1,
        border: "1px solid var(--border)",
        cursor: "pointer",
        background: "var(--surface-2)",
        color: "var(--fg)",
        borderRadius: "var(--r-lg)",
        padding: "14px",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 600
      }
    }, "\u041D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E"))));
  }

  /* ---------- wizard shell ---------- */
  function CreateCycleWizard({
    onClose,
    onComplete,
    onOpenCard
  }) {
    const [step, setStep] = React.useState(1);
    const [sent, setSent] = React.useState(false);
    const [data, setData] = React.useState({
      work: "Курсовая работа: анализ данных пользователей",
      version: "v3 · текущая",
      file: "Курсовая_Миронов_v3.pdf",
      goal: "Проверьте логику изложения, методологию исследования и корректность выводов.",
      why: "Я готовлю следующую версию курсовой и хочу понять, какие правки стоит внести в первую очередь.",
      result: "Список конкретных замечаний и рекомендаций перед доработкой v4.",
      questions: ["Насколько понятна логика изложения?", "Какие места требуют доработки в первую очередь?", "Что стоит улучшить перед следующей версией?"],
      respondent: "Проф. Иванова"
    });
    React.useEffect(() => {
      window.lucide && window.lucide.createIcons();
    });
    const last = step === 4;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 70,
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("header", {
      style: {
        height: 72,
        flexShrink: 0,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        gap: 20,
        padding: "0 28px",
        borderBottom: "1px solid var(--border)"
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      size: 34
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        color: "var(--fg-muted)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color: "var(--fg-muted)",
        fontFamily: "var(--font-sans)",
        fontSize: 16
      }
    }, "\u0426\u0438\u043A\u043B\u044B"), WIcon("chevron-right", 16), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--fg)",
        fontWeight: 600
      }
    }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      ariaLabel: "\u041F\u043E\u043C\u043E\u0449\u044C"
    }, WIcon("circle-help", 18)), /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      ariaLabel: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"
    }, WIcon("bell", 18)), /*#__PURE__*/React.createElement(Avatar, {
      src: AVATAR,
      name: "\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0411\u043E\u0440\u0438\u0441\u043E\u0432",
      size: "default"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflowY: "auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1240,
        margin: "0 auto",
        padding: "28px 40px 120px",
        display: "flex",
        gap: 36,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 320,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 24,
        position: "sticky",
        top: 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        alignSelf: "flex-start",
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color: "var(--fg-muted)",
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        fontWeight: 500
      }
    }, WIcon("arrow-left", 18), " \u041D\u0430\u0437\u0430\u0434"), /*#__PURE__*/React.createElement(Stepper, {
      current: step
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 48,
        letterSpacing: "-0.02em",
        color: "var(--fg)"
      }
    }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        color: "var(--fg-muted)"
      }
    }, "\u0428\u0430\u0433 ", step, " \u0438\u0437 4 \xB7 ", STEPS[step - 1].sub)), step === 1 && /*#__PURE__*/React.createElement(Step1, {
      data: data
    }), step === 2 && /*#__PURE__*/React.createElement(Step2, {
      data: data,
      setData: setData
    }), step === 3 && /*#__PURE__*/React.createElement(Step3, {
      data: data
    }), step === 4 && /*#__PURE__*/React.createElement(Step4, {
      data: data,
      goTo: setStep
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        padding: "16px 40px",
        borderTop: "1px solid var(--border)",
        background: "var(--bg)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 700,
        color: "var(--fg)"
      }
    }, "\u0428\u0430\u0433 ", step, " \u0438\u0437 4"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6
      }
    }, STEPS.map(s => /*#__PURE__*/React.createElement("span", {
      key: s.id,
      style: {
        width: 44,
        height: 4,
        borderRadius: "var(--r-full)",
        background: s.id <= step ? "var(--primary)" : "var(--border-strong)"
      }
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-muted)"
      }
    }, WIcon("circle-check", 14), " \u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D \u0432 14:32")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("button", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        border: "1px solid var(--border)",
        background: "var(--surface-2)",
        color: "var(--fg)",
        borderRadius: "var(--r-lg)",
        padding: "13px 22px",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 600
      }
    }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A ", WIcon("save", 16)), step > 1 && !last && /*#__PURE__*/React.createElement("button", {
      onClick: () => setStep(s => s - 1),
      style: {
        border: "1px solid var(--border)",
        background: "var(--surface-2)",
        color: "var(--fg)",
        borderRadius: "var(--r-lg)",
        padding: "13px 22px",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 600
      }
    }, "\u041D\u0430\u0437\u0430\u0434"), !last ? /*#__PURE__*/React.createElement("button", {
      onClick: () => setStep(s => s + 1),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        border: "none",
        background: "var(--primary)",
        color: "var(--primary-fg)",
        borderRadius: "var(--r-lg)",
        padding: "13px 26px",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 600
      }
    }, "\u0414\u0430\u043B\u0435\u0435 ", WIcon("arrow-right", 16)) : /*#__PURE__*/React.createElement("button", {
      onClick: () => setSent(true),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        border: "none",
        background: "var(--primary)",
        color: "var(--primary-fg)",
        borderRadius: "var(--r-lg)",
        padding: "13px 26px",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 600
      }
    }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u043F\u0440\u043E\u0441 ", WIcon("arrow-right", 16)))), sent && /*#__PURE__*/React.createElement(SuccessModal, {
      data: data,
      onCard: () => {
        setSent(false);
        onOpenCard ? onOpenCard() : onComplete && onComplete();
      },
      onHome: () => {
        setSent(false);
        onComplete && onComplete();
      }
    }));
  }
  window.FukoCreateCycle = {
    CreateCycleWizard
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/fuko-app/create-cycle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/fuko-app/cycle-detail.jsx
try { (() => {
/* FUKO — "Карточка цикла" (cycle detail / incoming feedback request).
   Full-screen takeover. Exposes window.FukoCycleDetail. */
(() => {
  const DNS = window.FUKODesignSystem_23dd6b;
  const {
    Logo,
    IconButton,
    Avatar
  } = DNS;
  const DIcon = (n, size = 16, sw = 2) => /*#__PURE__*/React.createElement("i", {
    "data-lucide": n,
    style: {
      width: size,
      height: size,
      strokeWidth: sw,
      flexShrink: 0
    }
  });
  const AVATAR = "../../assets/people/alexey-borisov.png";
  const MAP = [{
    id: "context",
    label: "Контекст",
    icon: "check",
    done: true
  }, {
    id: "material",
    label: "Материал",
    icon: "check",
    active: true
  }, {
    id: "score",
    label: "Оценка",
    icon: "circle",
    todo: true
  }, {
    id: "improve",
    label: "Улучшения",
    icon: "circle",
    todo: true
  }];
  const SECTIONS = [{
    h: "1. Введение",
    comment: 1,
    lead: "Настоящая работа посвящена анализу данных пользователей образовательных платформ. Целью исследования является выявление паттернов взаимодействия студентов с учебными материалами в цифровой среде. Актуальность темы обусловлена стремительным ростом онлайн-образования и необходимостью оптимизации учебных процессов на основе данных.",
    body: "В качестве объекта исследования выбрана платформа LMS университета, содержащая записи активности 1 247 студентов за два учебных семестра (2024–2025). Предметом исследования являются количественные и качественные характеристики взаимодействия пользователей с контентом: время на платформе, частота обращений к материалам, последовательность действий."
  }, {
    h: "2. Методология",
    comment: 1,
    lead: "Исследование основано на смешанном методологическом подходе, сочетающем количественный анализ лог-данных и качественные интервью с выборкой из 30 студентов. Для обработки лог-данных использовался Python (библиотеки pandas, scikit-learn). Кластерный анализ проведён методом k-means с предварительной нормализацией признаков.",
    body: "В качестве объекта исследования выбрана платформа LMS университета, содержащая записи активности 1 247 студентов за два учебных семестра (2024–2025). Предметом исследования являются количественные и качественные характеристики взаимодействия пользователей с контентом: время на платформе, частота обращений к материалам, последовательность действий."
  }, {
    h: "3. Результаты",
    body: "Кластерный анализ выявил четыре устойчивые модели поведения пользователей: (1) «линейные» — последовательно проходят все материалы, (2) «селективные» — выбирают только ключевые темы, (3) «интенсивные» — повторно обращаются к материалам перед дедлайнами, (4) «нерегулярные» — эпизодически взаимодействуют с платформой.",
    body2: "Наиболее высокую академическую успеваемость демонстрируют студенты из кластеров «линейных» и «интенсивных» (средний балл 4.2 и 4.0 соответственно). «Селективные» студенты показывают средний балл 3.6, а «нерегулярные» — 2.9. Различия статистически значимы (p < 0.01)."
  }, {
    h: "4. Выводы",
    body: "Результаты исследования подтверждают гипотезу о связи паттернов взаимодействия с платформой и академической успеваемостью. Полученные данные могут быть использованы для ранней диагностики студентов из группы риска и персонализации учебного опыта. Рекомендуется внедрение адаптивных уведомлений для «нерегулярных» пользователей."
  }];
  const COMMENTS = [{
    author: "Проф. Иванова",
    time: "Вчера",
    text: "Стоит добавить ссылку на конкретные исследования по росту онлайн-образования."
  }, {
    author: "Проф. Иванова",
    time: "Вчера",
    text: "Уточните размер выборки в разделе методологии — сейчас цифра появляется только во введении."
  }];
  const RESOLVED = [{
    author: "Проф. Иванова",
    text: "Хорошо, что указали ограничения. Можно ещё добавить про размер выборки."
  }];
  const QUESTIONS = ["Насколько понятна логика изложения?", "Какие места требуют доработки в первую очередь?", "Что стоит улучшить перед следующей версией?"];

  /* ---------- left sidebar ---------- */
  function MapTile({
    t
  }) {
    const on = t.done || t.active;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        padding: "18px 10px",
        borderRadius: "var(--r-xl)",
        boxSizing: "border-box",
        background: t.active ? "var(--primary-subtle)" : "var(--surface-2)",
        border: on ? "1.5px solid var(--primary)" : "1px solid var(--border)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        borderRadius: "var(--r-full)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        border: on ? "2px solid var(--primary)" : "2px solid var(--border-strong)",
        color: on ? "var(--primary)" : "var(--fg-subtle)"
      }
    }, DIcon(t.done || t.active ? "check" : "circle", 15)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600,
        color: on ? "var(--primary)" : "var(--fg-muted)"
      }
    }, t.label));
  }
  function NavRow({
    icon,
    label,
    onClick
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        width: "100%",
        textAlign: "left",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        padding: "11px 12px",
        borderRadius: "var(--r-lg)",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 500,
        color: "var(--fg)"
      },
      onMouseEnter: e => e.currentTarget.style.background = "var(--surface-2)",
      onMouseLeave: e => e.currentTarget.style.background = "transparent"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--fg-muted)",
        display: "flex"
      }
    }, DIcon(icon, 18)), label);
  }
  function Sidebar({
    onClose,
    onOpenChat,
    onOpenAnalytics,
    onOpenHistory
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 300,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 18,
        position: "sticky",
        top: 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        border: "none",
        background: "var(--primary)",
        color: "var(--primary-fg)",
        borderRadius: "var(--r-xl)",
        padding: "13px",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 600,
        boxShadow: "var(--shadow-primary)"
      }
    }, DIcon("arrow-left", 17), " \u041D\u0430\u0437\u0430\u0434"), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-2xl)",
        boxShadow: "var(--shadow-xs)",
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--fg-muted)"
      }
    }, "\u041A\u0430\u0440\u0442\u0430 \u0446\u0438\u043A\u043B\u0430"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12
      }
    }, MAP.map(t => /*#__PURE__*/React.createElement(MapTile, {
      key: t.id,
      t: t
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-2xl)",
        boxShadow: "var(--shadow-xs)",
        padding: 14,
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "\u0410\u0440\u043A\u0430\u043F\u0440\u0430\u0432\u043E \u0413.",
      size: "lg",
      status: "online"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        lineHeight: 1.3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 700,
        color: "var(--fg)"
      }
    }, "\u0410\u0440\u043A\u0430\u043F\u0440\u0430\u0432\u043E \u0413."), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-muted)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, "\u0414\u043E\u0431\u0440\u044B\u0439 \u0434\u0435\u043D\u044C! \u041C\u043E\u0436\u043D\u043E \u043E\u0431\u0441\u2026")), /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      ariaLabel: "\u0427\u0430\u0442",
      onClick: onOpenChat
    }, DIcon("message-circle", 18))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-2xl)",
        boxShadow: "var(--shadow-xs)",
        padding: 8,
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement(NavRow, {
      icon: "bar-chart-3",
      label: "\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430",
      onClick: onOpenAnalytics
    }), /*#__PURE__*/React.createElement(NavRow, {
      icon: "file",
      label: "\u0410\u0440\u0442\u0435\u0444\u0430\u043A\u0442\u044B"
    }), /*#__PURE__*/React.createElement(NavRow, {
      icon: "history",
      label: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0446\u0438\u043A\u043B\u0430",
      onClick: onOpenHistory
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-2xl)",
        boxShadow: "var(--shadow-xs)",
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--fg-muted)"
      }
    }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "var(--font-sans)",
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--fg)"
      }
    }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0435"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: "var(--primary)"
      }
    }, "2")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "var(--font-sans)",
        fontSize: 15
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--fg)"
      }
    }, "\u0417\u0430\u0432\u0435\u0440\u0448\u0451\u043D\u043D\u044B\u0435"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: "var(--fg-muted)"
      }
    }, "1"))));
  }

  /* ---------- main ---------- */
  function StatusPill({
    text,
    tone
  }) {
    const m = {
      info: ["var(--info-subtle)", "var(--info)"],
      success: ["var(--success-subtle)", "var(--success)"]
    }[tone] || ["var(--surface-2)", "var(--fg-muted)"];
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 12px",
        borderRadius: "var(--r-full)",
        background: m[0],
        color: m[1],
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: m[1]
      }
    }), text);
  }
  function HeaderCard() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-3xl)",
        boxShadow: "var(--shadow-xs)",
        padding: 28,
        display: "flex",
        gap: 24,
        justifyContent: "space-between",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "var(--fg)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "var(--primary)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "var(--border-strong)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--fg-muted)"
      }
    }, "\u0426\u0438\u043A\u043B 2 \u0438\u0437 4")), /*#__PURE__*/React.createElement(StatusPill, {
      text: "\u041A\u0443\u0440\u0441\u043E\u0432\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430",
      tone: "info"
    }), /*#__PURE__*/React.createElement(StatusPill, {
      text: "\u0410\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u043E",
      tone: "success"
    })), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 38,
        letterSpacing: "-0.02em",
        color: "var(--fg)",
        lineHeight: 1.15
      }
    }, "\u041A\u0443\u0440\u0441\u043E\u0432\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430: \u0430\u043D\u0430\u043B\u0438\u0437 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: "6px 28px",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--fg-muted)"
      }
    }, /*#__PURE__*/React.createElement("span", null, "\u0420\u0435\u0441\u043F\u043E\u043D\u0434\u0435\u043D\u0442: ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: "var(--fg)"
      }
    }, "\u041D\u0438\u043A\u043E\u043B\u0430\u0435\u0432\u0430 \u041A.\u042E.")), /*#__PURE__*/React.createElement("span", null, "\u0422\u0435\u043C\u0430: ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: "var(--fg)"
      }
    }, "\u041C\u0435\u0442\u043E\u0434\u043E\u043B\u043E\u0433\u0438\u044F \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F")), /*#__PURE__*/React.createElement("span", null, "\u0414\u0435\u0434\u043B\u0430\u0439\u043D: ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: "var(--primary)"
      }
    }, "\u0434\u043E 22 \u043C\u0430\u044F \xB7 \u0447\u0435\u0440\u0435\u0437 2 \u0434\u043D\u044F")))), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 230,
        flexShrink: 0,
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-2xl)",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.04em",
        color: "var(--fg-muted)"
      }
    }, "AI-\u041E\u0426\u0415\u041D\u041A\u0410 \u0413\u041E\u0422\u041E\u0412\u041D\u041E\u0421\u0422\u0418"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 22,
        color: "var(--fg)"
      }
    }, "84%")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        borderRadius: "var(--r-full)",
        background: "var(--input)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "84%",
        height: "100%",
        background: "var(--info)",
        borderRadius: "var(--r-full)"
      }
    })), /*#__PURE__*/React.createElement("button", {
      style: {
        border: "none",
        background: "var(--primary)",
        color: "var(--primary-fg)",
        borderRadius: "var(--r-md)",
        padding: "9px",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600
      }
    }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435")));
  }
  function CommentBadge({
    n
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        color: "var(--fg-muted)",
        fontFamily: "var(--font-sans)",
        fontSize: 13
      }
    }, DIcon("message-circle", 14), " ", n);
  }
  function Para({
    children
  }) {
    return /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        lineHeight: 1.6,
        color: "var(--fg)"
      }
    }, children);
  }
  function MaterialCard() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-3xl)",
        boxShadow: "var(--shadow-xs)",
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 26
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 20,
        color: "var(--fg)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "var(--primary)"
      }
    }), "\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        color: "var(--fg-muted)",
        fontFamily: "var(--font-sans)",
        fontSize: 14
      }
    }, DIcon("file-text", 16), " \u041A\u0443\u0440\u0441\u043E\u0432\u0430\u044F_\u0440\u0430\u0431\u043E\u0442\u0430_v2.pdf \xB7 2.4 \u041C\u0411")), SECTIONS.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: "var(--font-heading)",
        fontWeight: 600,
        fontSize: 18,
        color: "var(--fg)"
      }
    }, s.h), s.lead ? /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        background: "var(--surface-2)",
        borderLeft: "3px solid var(--primary)",
        borderRadius: "0 var(--r-lg) var(--r-lg) 0",
        padding: "14px 16px"
      }
    }, /*#__PURE__*/React.createElement(Para, null, s.lead), s.comment && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(CommentBadge, {
      n: s.comment
    }))) : null, s.body && /*#__PURE__*/React.createElement(Para, null, s.body), s.body2 && /*#__PURE__*/React.createElement(Para, null, s.body2))));
  }
  function CommentCard({
    c,
    resolved
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-xl)",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        opacity: resolved ? 0.6 : 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 700,
        color: "var(--fg)"
      }
    }, c.author), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-subtle)"
      }
    }, c.time || (resolved ? "Открыть" : ""))), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        lineHeight: 1.45,
        color: resolved ? "var(--fg-muted)" : "var(--fg)"
      }
    }, c.text), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 600,
        color: "var(--success)"
      }
    }, DIcon("check", 14), " \u0420\u0435\u0448\u0435\u043D\u043E"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-muted)"
      }
    }, DIcon("corner-down-left", 14), " \u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C")));
  }
  function CommentsRail() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
        position: "sticky",
        top: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 700,
        color: "var(--fg)"
      }
    }, "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"), COMMENTS.map((c, i) => /*#__PURE__*/React.createElement(CommentCard, {
      key: i,
      c: c
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 700,
        color: "var(--fg)",
        marginTop: 4
      }
    }, "\u0420\u0435\u0448\u0451\u043D\u043D\u044B\u0435 (1)"), RESOLVED.map((c, i) => /*#__PURE__*/React.createElement(CommentCard, {
      key: i,
      c: {
        ...c,
        time: "Открыть"
      },
      resolved: true
    })));
  }
  function FormTextarea({
    ph
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: 52,
        padding: "14px 16px",
        boxSizing: "border-box",
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-lg)",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        color: "var(--fg-subtle)"
      }
    }, ph);
  }
  function ScoreCard() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-3xl)",
        boxShadow: "var(--shadow-xs)",
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 20,
        color: "var(--fg)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "var(--primary)"
      }
    }), "\u041E\u0446\u0435\u043D\u043A\u0430 \u0438 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u044F"), QUESTIONS.map((q, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--fg-muted)"
      }
    }, "\u0412\u043E\u043F\u0440\u043E\u0441 ", i + 1, ": ", q), /*#__PURE__*/React.createElement(FormTextarea, {
      ph: "\u0412\u0430\u0448\u0430 \u043E\u0446\u0435\u043D\u043A\u0430 \u0438 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u044F\u2026"
    }))));
  }
  function ImproveCard() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-3xl)",
        boxShadow: "var(--shadow-xs)",
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 20,
        color: "var(--fg)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "var(--primary)"
      }
    }), "\u0427\u0442\u043E \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435"), /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: 80,
        padding: "14px 16px",
        boxSizing: "border-box",
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-lg)",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        color: "var(--fg-subtle)"
      }
    }, "\u0412\u0430\u0448\u0438 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043F\u043E \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044E\u2026"));
  }
  function CycleDetail({
    onClose
  }) {
    const [chatOpen, setChatOpen] = React.useState(false);
    const [analyticsOpen, setAnalyticsOpen] = React.useState(false);
    const [historyOpen, setHistoryOpen] = React.useState(false);
    React.useEffect(() => {
      window.lucide && window.lucide.createIcons();
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 70,
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("header", {
      style: {
        height: 64,
        flexShrink: 0,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "0 24px",
        borderBottom: "1px solid var(--border)"
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      size: 30
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        minWidth: 0,
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        color: "var(--fg-muted)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        border: "none",
        background: "transparent",
        cursor: "pointer",
        color: "var(--fg-muted)",
        fontFamily: "var(--font-sans)",
        fontSize: 15
      }
    }, "\u0426\u0438\u043A\u043B\u044B"), DIcon("chevron-right", 15), /*#__PURE__*/React.createElement("span", null, "\u0412\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u044B"), DIcon("chevron-right", 15), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--fg)",
        fontWeight: 600,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, "\u041A\u0443\u0440\u0441\u043E\u0432\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430: \u0430\u043D\u0430\u043B\u0438\u0437 \u0434\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      ariaLabel: "\u041F\u043E\u043C\u043E\u0449\u044C"
    }, DIcon("circle-help", 18)), /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      ariaLabel: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"
    }, DIcon("bell", 18)), /*#__PURE__*/React.createElement(Avatar, {
      src: AVATAR,
      name: "\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0411\u043E\u0440\u0438\u0441\u043E\u0432",
      size: "default"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflowY: "auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1320,
        margin: "0 auto",
        padding: "24px 32px 120px",
        display: "flex",
        gap: 28,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement(Sidebar, {
      onClose: onClose,
      onOpenChat: () => setChatOpen(true),
      onOpenAnalytics: () => setAnalyticsOpen(true),
      onOpenHistory: () => setHistoryOpen(true)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(HeaderCard, null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 300px",
        gap: 24,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(MaterialCard, null), /*#__PURE__*/React.createElement(ScoreCard, null), /*#__PURE__*/React.createElement(ImproveCard, null)), /*#__PURE__*/React.createElement(CommentsRail, null))))), /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        padding: "16px 40px",
        borderTop: "1px solid var(--border)",
        background: "var(--bg)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 700,
        color: "var(--fg)"
      }
    }, "\u041E\u0442\u0432\u0435\u0442 \u0435\u0449\u0451 \u043D\u0435 \u0433\u043E\u0442\u043E\u0432 \xB7 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \xAB\u041E\u0446\u0435\u043D\u043A\u0443\xBB \u0438 \xAB\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F\xBB"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-muted)"
      }
    }, "\u041C\u043E\u0436\u043D\u043E \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0438 \u043E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u043E \u0434\u0435\u0434\u043B\u0430\u0439\u043D\u0430 \u2014 3 \u0430\u043F\u0440 2026, 23:59")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("button", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        border: "1px solid var(--border)",
        background: "var(--surface-2)",
        color: "var(--fg)",
        borderRadius: "var(--r-lg)",
        padding: "13px 22px",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 600
      }
    }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0447\u0435\u0440\u043D\u043E\u0432\u0438\u043A ", DIcon("save", 16)), /*#__PURE__*/React.createElement("button", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        border: "none",
        background: "var(--primary)",
        color: "var(--primary-fg)",
        borderRadius: "var(--r-lg)",
        padding: "13px 26px",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 600
      }
    }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442 ", DIcon("arrow-right", 16)))), /*#__PURE__*/React.createElement(DiscussionDrawer, {
      open: chatOpen,
      onClose: () => setChatOpen(false)
    }), /*#__PURE__*/React.createElement(AnalyticsDrawer, {
      open: analyticsOpen,
      onClose: () => setAnalyticsOpen(false)
    }), /*#__PURE__*/React.createElement(HistoryDrawer, {
      open: historyOpen,
      onClose: () => setHistoryOpen(false)
    }));
  }

  /* ---------- discussion drawer (slides from right) ---------- */
  const DISCUSSION = [{
    divider: "Сегодня · 17 мая"
  }, {
    side: "in",
    author: "Кристина Юрьевна",
    avatar: true,
    text: "Добрый день! Начнём обсуждение проекта. Сначала разберём цель, потом посмотрим файл и решим, что доработать.",
    time: "23:58"
  }, {
    side: "in",
    text: "Предлагаю действовать как Artemis II: сначала аккуратный облёт темы, проверка всех систем, а потом уже посадка в финальную версию.",
    time: "23:58"
  }, {
    divider: "Сегодня · 17 мая"
  }, {
    side: "out",
    text: "Отлично. Я прикрепил черновик. Пока это скорее Orion на старте: всё собрано, но страшно нажимать «запуск».",
    time: "00:23"
  }, {
    side: "in",
    author: "Кристина Юрьевна",
    avatar: true,
    text: "Не переживайте. Главное — проверить траекторию аргументации. Если где-то уводит от темы, скорректируем курс до следующего цикла.",
    time: "10:58"
  }, {
    side: "out",
    text: "Тогда отправляю файл. Надеюсь, миссия пройдёт без аварийного отделения введения от основной части.",
    time: "11:08",
    files: [{
      name: "Бриф цикла 1.pdf",
      size: "248 КБ",
      type: "pdf"
    }, {
      name: "Бриф цикла 1.doc",
      size: "248 КБ",
      type: "doc"
    }, {
      name: "Бриф цикла 1.pdf",
      size: "248 КБ",
      type: "pdf"
    }, {
      name: "Бриф цикла 1.pdf",
      size: "248 КБ",
      type: "pdf"
    }]
  }];
  function DFile({
    f
  }) {
    const pdf = f.type === "pdf";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-lg)",
        padding: "10px 12px",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        flexShrink: 0,
        borderRadius: "var(--r-md)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: pdf ? "var(--primary)" : "#3B6FB0",
        color: pdf ? "var(--primary-fg)" : "#fff",
        fontFamily: "var(--font-sans)",
        fontSize: 10,
        fontWeight: 700
      }
    }, pdf ? "PDF" : "doc"), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0,
        lineHeight: 1.3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--fg)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, f.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        color: "var(--fg-muted)"
      }
    }, f.size, " \xB7 ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--primary)"
      }
    }, "\u0441\u043A\u0430\u0447\u0430\u0442\u044C"))));
  }
  function DBubble({
    m
  }) {
    if (m.divider) return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        margin: "6px 0"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        padding: "5px 14px",
        borderRadius: "var(--r-full)",
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 600,
        color: "var(--fg-muted)"
      }
    }, m.divider));
    const out = m.side === "out";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: out ? "flex-end" : "flex-start",
        gap: 12
      }
    }, !out && (m.avatar ? /*#__PURE__*/React.createElement(Avatar, {
      name: m.author,
      size: "default"
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        width: 32,
        flexShrink: 0
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 460,
        padding: "12px 16px",
        borderRadius: 18,
        borderBottomRightRadius: out ? 6 : 18,
        borderBottomLeftRadius: out ? 18 : 6,
        background: out ? "var(--bubble-out)" : "var(--bubble-in)",
        color: "var(--bubble-out-fg)",
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, m.author && !out && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 700,
        color: "var(--fg)"
      }
    }, m.author), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        lineHeight: 1.5
      }
    }, m.text), m.files && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10
      }
    }, m.files.map((f, i) => /*#__PURE__*/React.createElement(DFile, {
      key: i,
      f: f
    }))), /*#__PURE__*/React.createElement("span", {
      style: {
        alignSelf: "flex-end",
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        color: "var(--fg-subtle)"
      }
    }, m.time)));
  }
  function DiscussionDrawer({
    open,
    onClose
  }) {
    const scrollRef = React.useRef(null);
    React.useEffect(() => {
      if (open) {
        window.lucide && window.lucide.createIcons();
        const el = scrollRef.current;
        if (el) el.scrollTop = el.scrollHeight;
      }
    }, [open]);
    React.useEffect(() => {
      const onKey = e => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": !open,
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 75,
        pointerEvents: open ? "auto" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: "absolute",
        inset: 0,
        background: "rgba(20,16,16,0.32)",
        opacity: open ? 1 : 0,
        transition: "opacity var(--dur-base) var(--ease-standard)"
      }
    }), /*#__PURE__*/React.createElement("aside", {
      style: {
        position: "absolute",
        top: 0,
        right: 0,
        height: "100%",
        width: 540,
        maxWidth: "94vw",
        background: "var(--surface)",
        borderLeft: "1px solid var(--border)",
        boxShadow: "var(--shadow-2xl)",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform var(--dur-slow) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "20px 24px",
        borderBottom: "1px solid var(--border)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 44,
        height: 44,
        borderRadius: "var(--r-xl)",
        background: "var(--brand-soft)",
        color: "var(--primary)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, DIcon("hash", 22)), /*#__PURE__*/React.createElement("h2", {
      style: {
        flex: 1,
        margin: 0,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 28,
        letterSpacing: "-0.01em",
        color: "var(--fg)"
      }
    }, "\u041E\u0431\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u0435"), /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      ariaLabel: "\u0415\u0449\u0451"
    }, DIcon("more-horizontal", 20)), /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      ariaLabel: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
      onClick: onClose
    }, DIcon("x", 18))), /*#__PURE__*/React.createElement("div", {
      ref: scrollRef,
      style: {
        flex: 1,
        minHeight: 0,
        overflowY: "auto",
        padding: "20px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, DISCUSSION.map((m, i) => /*#__PURE__*/React.createElement(DBubble, {
      key: i,
      m: m
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "14px 20px",
        borderTop: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      variant: "outline",
      roundness: "round",
      ariaLabel: "\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C"
    }, DIcon("plus", 20)), /*#__PURE__*/React.createElement(IconButton, {
      variant: "outline",
      roundness: "round",
      ariaLabel: "\u042D\u043C\u043E\u0434\u0437\u0438"
    }, DIcon("smile", 20)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        height: 48,
        padding: "0 16px",
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-full)",
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        color: "var(--fg-subtle)"
      }
    }, "\u041A\u0430\u043A \u0434\u0443\u043C\u0430\u0435\u0442\u0435, \u0435\u0441\u0442\u044C \u043B\u0438 \u0436\u0438\u0437\u043D\u044C \u043D\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u043F\u043B\u0430\u043D\u0435\u0442\u0430\u0445?"), /*#__PURE__*/React.createElement("button", {
      "aria-label": "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",
      style: {
        width: 48,
        height: 48,
        flexShrink: 0,
        borderRadius: "var(--r-full)",
        border: "none",
        cursor: "pointer",
        background: "var(--primary)",
        color: "var(--primary-fg)",
        boxShadow: "var(--shadow-primary)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, DIcon("send", 19)))));
  }

  /* ---------- generic right drawer ---------- */
  function RightDrawer({
    open,
    onClose,
    title,
    width = 600,
    children
  }) {
    React.useEffect(() => {
      if (open) window.lucide && window.lucide.createIcons();
    }, [open]);
    React.useEffect(() => {
      const onKey = e => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": !open,
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 76,
        pointerEvents: open ? "auto" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: "absolute",
        inset: 0,
        background: "rgba(20,16,16,0.32)",
        opacity: open ? 1 : 0,
        transition: "opacity var(--dur-base) var(--ease-standard)"
      }
    }), /*#__PURE__*/React.createElement("aside", {
      style: {
        position: "absolute",
        top: 0,
        right: 0,
        height: "100%",
        width,
        maxWidth: "96vw",
        background: "var(--bg)",
        borderLeft: "1px solid var(--border)",
        boxShadow: "var(--shadow-2xl)",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform var(--dur-slow) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "22px 28px 12px"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        flex: 1,
        margin: 0,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 36,
        letterSpacing: "-0.02em",
        color: "var(--fg)"
      }
    }, title), /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      ariaLabel: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
      onClick: onClose
    }, DIcon("x", 20))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflowY: "auto",
        padding: "8px 28px 28px",
        display: "flex",
        flexDirection: "column",
        gap: 22
      }
    }, children)));
  }

  /* ---------- analytics drawer ---------- */
  const NEXT_ACTIONS = [{
    n: 1,
    title: "Добавить визуализацию распределения признаков",
    tag: "критично",
    tone: "danger",
    src: "источник: комм. №2, Проф. Иванова"
  }, {
    n: 2,
    title: "Расширить обоснование выбора DBSCAN",
    tag: "критично",
    tone: "danger",
    src: "источник: комм. №2, Проф. Иванова"
  }, {
    n: 3,
    title: "Усилить связку методологии с теоретической рамкой курса",
    tag: "важно",
    tone: "warning",
    src: "источник: вывод AI · паттерн 2 цикла подряд"
  }, {
    n: 4,
    title: "Подписать оси на графиках стр. 8",
    tag: "мелкая правка",
    tone: "neutral",
    src: "источник: комм. №5, Проф. Иванова"
  }];
  const GROWTH = [{
    label: "Структура текста",
    pct: 76,
    delta: "+18",
    up: true
  }, {
    label: "Аргументация",
    pct: 72,
    delta: "+18",
    up: true
  }, {
    label: "Визуальные доказательства",
    pct: 41,
    delta: "−12",
    up: false
  }, {
    label: "Связь с теорией",
    pct: 68,
    delta: "+18",
    up: true
  }];
  const DYN = [62, 84, 70, 58, 66, 72];
  function TagPill({
    tag,
    tone
  }) {
    const m = {
      danger: ["var(--danger-subtle)", "var(--danger)"],
      warning: ["var(--warning-subtle)", "var(--warning)"],
      neutral: ["var(--surface-2)", "var(--fg-muted)"]
    }[tone];
    return /*#__PURE__*/React.createElement("span", {
      style: {
        padding: "2px 9px",
        borderRadius: "var(--r-full)",
        background: m[0],
        color: m[1],
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        fontWeight: 600
      }
    }, tag);
  }
  function AnalyticsDrawer({
    open,
    onClose
  }) {
    return /*#__PURE__*/React.createElement(RightDrawer, {
      open: open,
      onClose: onClose,
      title: "\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430",
      width: 620
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-dark)",
        borderRadius: "var(--r-3xl)",
        padding: 26,
        display: "flex",
        flexDirection: "column",
        gap: 18,
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: "var(--r-md)",
        background: "rgba(255,255,255,0.08)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, DIcon("sparkle", 20)), /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 26
      }
    }, "\u0421\u0432\u043E\u0434\u043A\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u0430")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "var(--r-xl)",
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        lineHeight: 1.5,
        color: "rgba(255,255,255,0.82)"
      }
    }, "\u041F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u0430 \u043C\u0435\u0442\u043E\u0434\u043E\u043B\u043E\u0433\u0438\u044F: \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B \u043D\u043E\u0432\u044B\u0435 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445, \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u0430 \u0432\u044B\u0431\u043E\u0440\u043A\u0430. \u041F\u0440\u043E\u0441\u044F\u0442 \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C, \u043D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u0430 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u0438\xA0\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u0435\u043D \u0430\u043D\u0430\u043B\u0438\u0437."), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: "0.06em",
        color: "rgba(255,255,255,0.6)"
      }
    }, "\u0427\u0422\u041E \u041F\u0420\u041E\u0412\u0415\u0420\u0418\u0422\u042C"), ["Структуру аргументации и логику переходов между разделами", "Корректность выводов и связь их с выборкой данных", "Обоснование выбора алгоритма кластеризации (DBSCAN)"].map(t => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "var(--primary)",
        marginTop: 8,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        lineHeight: 1.45,
        color: "#fff"
      }
    }, t))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 22,
        color: "var(--fg)"
      }
    }, "\u0427\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C \u0434\u0430\u043B\u044C\u0448\u0435"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-muted)"
      }
    }, "4 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F, \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0418\u0418 \u043F\u043E \u0438\u0442\u043E\u0433\u0430\u043C \u0446\u0438\u043A\u043B\u0430")), NEXT_ACTIONS.map(a => /*#__PURE__*/React.createElement("div", {
      key: a.n,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-xl)",
        padding: "14px 16px",
        boxShadow: "var(--shadow-xs)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 30,
        height: 30,
        flexShrink: 0,
        borderRadius: "var(--r-full)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 700,
        background: a.tone === "danger" ? "var(--primary)" : "var(--surface-2)",
        color: a.tone === "danger" ? "var(--primary-fg)" : "var(--fg-muted)",
        border: a.tone === "danger" ? "none" : "1px solid var(--border-strong)"
      }
    }, a.n), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 600,
        color: "var(--fg)"
      }
    }, a.title), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(TagPill, {
      tag: a.tag,
      tone: a.tone
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-muted)"
      }
    }, a.src))), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--fg-subtle)",
        display: "flex",
        flexShrink: 0
      }
    }, DIcon("message-circle", 17))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-2xl)",
        boxShadow: "var(--shadow-xs)",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("h4", {
      style: {
        margin: 0,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 18,
        color: "var(--fg)"
      }
    }, "\u0417\u043E\u043D\u044B \u0440\u043E\u0441\u0442\u0430"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        color: "var(--fg-muted)"
      }
    }, "\u043F\u043E AI-\u0430\u043D\u0430\u043B\u0438\u0437\u0443 24 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432 2 \u0446\u0438\u043A\u043B\u043E\u0432")), GROWTH.map(g => /*#__PURE__*/React.createElement("div", {
      key: g.label,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: g.up ? 0 : "10px 12px",
        background: g.up ? "transparent" : "var(--danger-subtle)",
        borderRadius: g.up ? 0 : "var(--r-lg)",
        border: g.up ? "none" : "1px solid var(--danger-border)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--fg)"
      }
    }, g.label), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 600,
        color: g.up ? "var(--success)" : "var(--danger)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9
      }
    }, g.up ? "▲" : "▼"), g.delta.replace(/[+−-]/, ""))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        borderRadius: "var(--r-full)",
        background: "var(--input)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: g.pct + "%",
        height: "100%",
        borderRadius: "var(--r-full)",
        background: "var(--primary)"
      }
    }))))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-2xl)",
        boxShadow: "var(--shadow-xs)",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("h4", {
      style: {
        margin: 0,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 18,
        color: "var(--fg)"
      }
    }, "\u0414\u0438\u043D\u0430\u043C\u0438\u043A\u0430 \u043C\u0435\u0436\u0434\u0443 \u0446\u0438\u043A\u043B\u0430\u043C\u0438"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        color: "var(--fg-muted)"
      }
    }, "\u0413\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u044C \u043F\u043E AI-\u043E\u0446\u0435\u043D\u043A\u0435")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: 8,
        height: 130
      }
    }, DYN.map((v, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        height: v + "%",
        borderRadius: "var(--r-sm)",
        background: "var(--primary)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "45%",
        background: "var(--brand-soft)"
      }
    })))), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 8,
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-muted)",
        lineHeight: 1.4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "var(--primary)",
        marginTop: 6,
        flexShrink: 0
      }
    }), "\u0417\u0430 \u0446\u0438\u043A\u043B 2 \u0433\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u044C \u0432\u044B\u0440\u043E\u0441\u043B\u0430 \u043D\u0430 +12 \u043F.\u043F. \u041F\u0440\u043E\u0433\u043D\u043E\u0437 \u2014 \u0437\u0430\u043A\u0440\u044B\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443 \u043A\xA0\u0446\u0438\u043A\u043B\u0443 4."))));
  }

  /* ---------- history drawer ---------- */
  const HISTORY = [{
    group: "Сегодня · 20 мая",
    items: [{
      time: "14:32",
      who: "AI",
      actor: "AI",
      dot: "var(--primary)",
      title: "Сгенерирован новый разбор итерации",
      text: "Сводка обновлена с учётом 6 комментариев Проф. Ивановой по разделу «Методология».",
      action: "Открыть в Аналитике",
      aicon: "sparkle"
    }, {
      time: "12:48",
      who: "АМ",
      actor: "Вы",
      dot: "var(--fg-subtle)",
      title: "Загружена новая версия артефакта",
      text: "Курсовая_Миронов_v3.pdf · 12 страниц · 4,2 МБ. Предыдущая версия v2 сохранена.",
      action: "Открыть артефакт",
      aicon: "file"
    }, {
      time: "11:42",
      who: "ИИ",
      actor: "Проф. Иванова",
      dot: "var(--primary)",
      title: "Оставлен комментарий в разделе «Методология»",
      text: "«Нужна визуализация распределения признаков — сейчас этого не хватает».",
      action: "Перейти к фрагменту",
      aicon: "file-text",
      highlight: true
    }]
  }, {
    group: "Вчера · 19 мая",
    items: [{
      time: "18:12",
      who: "АМ",
      actor: "Вы",
      dot: "var(--fg-subtle)",
      title: "Ответ в треде «Срок отправки v4»",
      text: "«Думаю, к четвергу подготовлю. Подойдёт?»",
      action: "Открыть тред",
      aicon: "message-circle"
    }, {
      time: "10:05",
      who: "ФУКО",
      actor: "Система",
      dot: "var(--border-strong)",
      title: "Дедлайн ответа продлён до 22 мая",
      text: "По запросу Проф. Ивановой. Старый дедлайн — 20 мая."
    }]
  }, {
    group: "17 мая",
    items: [{
      time: "09:30",
      who: "ИИ",
      actor: "Проф. Иванова",
      dot: "var(--warning)",
      title: "Начата вторая итерация ревью",
      text: "Цикл 2 из 4 запущен. Респондент: Проф. Иванова. Дедлайн: 22 мая.",
      action: "К запросу",
      aicon: "sparkle"
    }]
  }, {
    group: "12 апр · цикл 1 завершён",
    items: [{
      time: "16:20",
      who: "AI",
      actor: "AI",
      dot: "var(--fg)",
      title: "Цикл 1 закрыт · +12 п.п. готовности",
      text: "Принято 6 правок из 8 предложенных. Главное улучшение: структура методологии.",
      action: "Скопировать контекст",
      aicon: "copy"
    }]
  }];
  function HistoryDrawer({
    open,
    onClose
  }) {
    return /*#__PURE__*/React.createElement(RightDrawer, {
      open: open,
      onClose: onClose,
      title: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0446\u0438\u043A\u043B\u0430",
      width: 620
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-3xl)",
        boxShadow: "var(--shadow-xs)",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, HISTORY.map((grp, gi) => /*#__PURE__*/React.createElement("div", {
      key: gi,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 700,
        color: "var(--fg-muted)",
        margin: "10px 0 4px"
      }
    }, grp.group), grp.items.map((it, ii) => /*#__PURE__*/React.createElement("div", {
      key: ii,
      style: {
        display: "flex",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 44,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        color: "var(--fg-subtle)"
      }
    }, it.time), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: it.dot,
        marginTop: 6,
        border: it.dot === "var(--border-strong)" ? "2px solid var(--border-strong)" : "none",
        boxSizing: "border-box"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        width: 2,
        background: "var(--border)",
        marginTop: 4
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        background: it.highlight ? "var(--danger-subtle)" : "transparent",
        border: it.highlight ? "1px solid var(--danger-border)" : "none",
        borderRadius: "var(--r-lg)",
        padding: it.highlight ? 14 : "0 0 18px",
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        flexShrink: 0,
        borderRadius: "var(--r-full)",
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-sans)",
        fontSize: 9,
        fontWeight: 700,
        color: "var(--fg-muted)"
      }
    }, it.who), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--fg-muted)"
      }
    }, it.actor), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--fg-subtle)"
      }
    }, "\xB7"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 700,
        color: "var(--fg)"
      }
    }, it.title)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        lineHeight: 1.45,
        color: "var(--fg-muted)"
      }
    }, it.text), it.action && /*#__PURE__*/React.createElement("button", {
      style: {
        alignSelf: "flex-start",
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        marginTop: 2,
        border: "1px solid var(--border)",
        background: "var(--surface-2)",
        borderRadius: "var(--r-md)",
        padding: "6px 12px",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 600,
        color: it.highlight ? "var(--primary)" : "var(--fg)"
      }
    }, DIcon(it.aicon || "arrow-right", 14), " ", it.action, " ", DIcon("arrow-right", 13)))))))));
  }
  window.FukoCycleDetail = {
    CycleDetail
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/fuko-app/cycle-detail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/fuko-app/home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FUKO — "Главная" dashboard screen. IIFE-wrapped. Exposes window.FukoHome. */
(() => {
  const HNS = window.FUKODesignSystem_23dd6b;
  const HIcon = (n, size = 16, sw = 2) => /*#__PURE__*/React.createElement("i", {
    "data-lucide": n,
    style: {
      width: size,
      height: size,
      strokeWidth: sw,
      flexShrink: 0
    }
  });

  /* delta pill — small caret + value, green up / ruby down */
  function Delta({
    value,
    up,
    onDark
  }) {
    const pos = up;
    const bg = onDark ? "rgba(255,255,255,0.1)" : pos ? "var(--success-subtle)" : "var(--danger-subtle)";
    const fg = onDark ? "#fff" : pos ? "var(--success)" : "var(--danger)";
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "3px 10px",
        borderRadius: "var(--r-full)",
        background: bg,
        color: fg,
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 600,
        whiteSpace: "nowrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        lineHeight: 1
      }
    }, pos ? "▲" : "▼"), value);
  }

  /* clean sparkline — straight polyline + end node + subtle area, geometry matches progress map */
  function Sparkline({
    points,
    color,
    down
  }) {
    const W = 132,
      H = 46,
      pad = 4;
    const min = Math.min(...points),
      max = Math.max(...points),
      r = max - min || 1;
    const pts = points.map((y, i) => [pad + i / (points.length - 1) * (W - pad * 2), pad + (1 - (y - min) / r) * (H - pad * 2)]);
    const line = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
    const fill = `${line} L${pts[pts.length - 1][0].toFixed(1)} ${H} L${pts[0][0].toFixed(1)} ${H} Z`;
    const end = pts[pts.length - 1];
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: `0 0 ${W} ${H}`,
      width: "100%",
      height: H,
      preserveAspectRatio: "xMaxYMid meet",
      style: {
        display: "block",
        overflow: "hidden",
        maxWidth: W
      }
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "sg" + color.replace(/\W/g, ""),
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0",
      stopColor: color,
      stopOpacity: "0.18"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "1",
      stopColor: color,
      stopOpacity: "0"
    }))), /*#__PURE__*/React.createElement("path", {
      d: fill,
      fill: `url(#sg${color.replace(/\W/g, "")})`
    }), /*#__PURE__*/React.createElement("path", {
      d: line,
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinejoin: "round",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: end[0],
      cy: end[1],
      r: "3.5",
      fill: color,
      stroke: "var(--surface)",
      strokeWidth: "1.5"
    }));
  }
  function StatCard({
    label,
    value,
    delta,
    up,
    points,
    down
  }) {
    const color = down ? "var(--primary)" : "var(--info)";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-2xl)",
        boxShadow: "var(--shadow-xs)",
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 500,
        color: "var(--fg-muted)"
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 42,
        lineHeight: 1,
        color: "var(--fg)",
        letterSpacing: "-0.02em",
        flexShrink: 0
      }
    }, value), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "1 1 auto",
        minWidth: 0,
        maxWidth: 132,
        display: "flex",
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/React.createElement(Sparkline, {
      points: points,
      color: color,
      down: down
    }))), /*#__PURE__*/React.createElement(Delta, {
      value: delta,
      up: up
    }));
  }

  /* ---- progress map chart (right side) ---- */
  const SERIES = [{
    name: "Дипломная — Глава 2",
    color: "var(--primary)",
    active: true,
    pts: [30, 46, 58, 72, 84],
    proj: 100
  }, {
    name: "Исследование аудитории",
    color: "rgba(255,255,255,0.45)",
    pts: [22, 34, 48, 56, 64]
  }, {
    name: "Прототип кабинета",
    color: "rgba(255,255,255,0.28)",
    pts: [18, 26, 33, 40, 44]
  }];
  function ProgressChart() {
    const W = 640,
      H = 360,
      L = 44,
      R = 52,
      T = 44,
      B = 44;
    const ix = i => L + i / 5 * (W - L - R);
    const iy = p => T + (1 - p / 100) * (H - T - B);
    const toPath = pts => pts.map((p, i) => (i ? "L" : "M") + ix(i) + " " + iy(p)).join(" ");
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: `0 0 ${W} ${H}`,
      width: "100%",
      style: {
        display: "block",
        overflow: "visible",
        fontFamily: "var(--font-sans)"
      }
    }, [0, 25, 50, 75, 100].map(g => /*#__PURE__*/React.createElement("g", {
      key: g
    }, /*#__PURE__*/React.createElement("line", {
      x1: L,
      y1: iy(g),
      x2: W - R,
      y2: iy(g),
      stroke: "rgba(255,255,255,0.08)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("text", {
      x: W - R + 10,
      y: iy(g) + 4,
      fill: "rgba(255,255,255,0.4)",
      fontSize: "12"
    }, g))), [0, 1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("text", {
      key: i,
      x: ix(i),
      y: H - 16,
      fill: "rgba(255,255,255,0.45)",
      fontSize: "13",
      textAnchor: "middle"
    }, i + 1)), SERIES.filter(s => !s.active).map((s, si) => /*#__PURE__*/React.createElement("g", {
      key: si
    }, /*#__PURE__*/React.createElement("path", {
      d: toPath(s.pts),
      fill: "none",
      stroke: s.color,
      strokeWidth: "2",
      strokeDasharray: "2 5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), s.pts.map((p, i) => /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: ix(i),
      cy: iy(p),
      r: "2.5",
      fill: s.color
    })))), (() => {
      const s = SERIES[0];
      return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
        d: `M${ix(4)} ${iy(84)} L${ix(5)} ${iy(s.proj)}`,
        fill: "none",
        stroke: "var(--primary)",
        strokeWidth: "2.5",
        strokeDasharray: "2 6",
        strokeLinecap: "round",
        opacity: "0.7"
      }), /*#__PURE__*/React.createElement("path", {
        d: toPath(s.pts),
        fill: "none",
        stroke: "var(--primary)",
        strokeWidth: "3",
        strokeLinejoin: "round",
        strokeLinecap: "round"
      }), s.pts.map((p, i) => /*#__PURE__*/React.createElement("g", {
        key: i
      }, /*#__PURE__*/React.createElement("circle", {
        cx: ix(i),
        cy: iy(p),
        r: i === 4 ? 6 : 4,
        fill: i === 4 ? "var(--primary)" : "var(--surface-dark)",
        stroke: "var(--primary)",
        strokeWidth: "2.5"
      }), /*#__PURE__*/React.createElement("text", {
        x: ix(i),
        y: iy(p) - 14,
        fill: "#fff",
        fontSize: "13",
        fontWeight: "600",
        textAnchor: "middle"
      }, p, "%"))), /*#__PURE__*/React.createElement("circle", {
        cx: ix(5),
        cy: iy(s.proj),
        r: "5",
        fill: "none",
        stroke: "var(--primary)",
        strokeWidth: "2.5",
        opacity: "0.8"
      }), /*#__PURE__*/React.createElement("text", {
        x: ix(5),
        y: iy(s.proj) - 14,
        fill: "rgba(255,255,255,0.8)",
        fontSize: "13",
        fontWeight: "600",
        textAnchor: "middle"
      }, "100%"), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
        x: ix(4) - 50,
        y: iy(84) - 50,
        width: "100",
        height: "24",
        rx: "12",
        fill: "var(--primary)"
      }), /*#__PURE__*/React.createElement("text", {
        x: ix(4),
        y: iy(84) - 33,
        fill: "#fff",
        fontSize: "12.5",
        fontWeight: "600",
        textAnchor: "middle"
      }, "\u0436\u0434\u0451\u0442 \u043E\u0442\u0432\u0435\u0442\u0430")));
    })());
  }
  function Legend() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 16,
        marginTop: 4
      }
    }, SERIES.map(s => /*#__PURE__*/React.createElement("span", {
      key: s.name,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: s.active ? "#fff" : "rgba(255,255,255,0.6)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 14,
        height: 3,
        borderRadius: 2,
        background: s.active ? "var(--primary)" : s.color
      }
    }), s.name)));
  }
  function ProgressMap({
    onAnswer
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-dark)",
        borderRadius: "var(--r-3xl)",
        padding: 32,
        display: "grid",
        gridTemplateColumns: "320px 1fr",
        gap: 32,
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        alignSelf: "flex-start",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "5px 12px",
        borderRadius: "var(--r-full)",
        background: "rgba(255,255,255,0.08)",
        fontFamily: "var(--font-sans)",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.06em"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "var(--primary)"
      }
    }), "\u0422\u0420\u0410\u0415\u041A\u0422\u041E\u0420\u0418\u042F \u041D\u0415\u0414\u0415\u041B\u0418 \xB7 7 \u0418\u0422\u0415\u0420\u0410\u0426\u0418\u0419"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: 0,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 30,
        letterSpacing: "-0.02em"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#fff"
      }
    }, "\u041A\u0430\u0440\u0442\u0430 \u043F\u0440\u043E\u0433\u0440\u0435\u0441\u0441\u0430")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        lineHeight: 1.5,
        color: "rgba(255,255,255,0.65)"
      }
    }, "\u0423\u0437\u043B\u044B \u2014 \u0430\u0440\u0442\u0435\u0444\u0430\u043A\u0442\u044B \u0438\xA0\u0432\u0435\u0440\u0441\u0438\u0438. \u041B\u0438\u043D\u0438\u0438 \u2014 \u0438\u0442\u0435\u0440\u0430\u0446\u0438\u0438 \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438. \u041A\u0440\u0430\u0441\u043D\u044B\u0439 \u2014 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0446\u0438\u043A\u043B, \u0436\u0434\u0451\u0442 \u0432\u0430\u0448\u0435\u0433\u043E \u043E\u0442\u0432\u0435\u0442\u0430."), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "var(--r-xl)",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "rgba(255,255,255,0.65)"
      }
    }, "\u0413\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u044C \u043F\u043E\xA0AI-\u043E\u0446\u0435\u043D\u043A\u0435"), /*#__PURE__*/React.createElement(Delta, {
      value: "+12 \u043F.\u043F.",
      up: true,
      onDark: true
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 40,
        lineHeight: 1
      }
    }, "84", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22,
        color: "rgba(255,255,255,0.6)"
      }
    }, "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        borderRadius: "var(--r-full)",
        background: "rgba(255,255,255,0.15)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "84%",
        height: "100%",
        background: "#fff",
        borderRadius: "var(--r-full)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        color: "rgba(255,255,255,0.6)"
      }
    }, /*#__PURE__*/React.createElement("span", null, "\u0414\u0438\u043F\u043B\u043E\u043C\u043D\u0430\u044F \u2014 \u0413\u043B\u0430\u0432\u0430 2"), /*#__PURE__*/React.createElement("span", null, "\u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C 16%"))), /*#__PURE__*/React.createElement("button", {
      onClick: onAnswer,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        border: "none",
        cursor: "pointer",
        textAlign: "left",
        background: "var(--primary)",
        color: "#fff",
        borderRadius: "var(--r-xl)",
        padding: "14px 18px",
        boxShadow: "var(--shadow-primary)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.06em",
        color: "rgba(255,255,255,0.75)"
      }
    }, "\u0421\u041B\u0415\u0414\u0423\u042E\u0429\u0418\u0419 \u0428\u0410\u0413 \xB7 \u0421\u0415\u0413\u041E\u0414\u041D\u042F"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-heading)",
        fontWeight: 600,
        fontSize: 17
      }
    }, "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043D\u0430\xA0\u0446\u0438\u043A\u043B \u2014 \u0413\u043B\u0430\u0432\u0430 2")), HIcon("arrow-right", 20))), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(ProgressChart, null), /*#__PURE__*/React.createElement(Legend, null)));
  }

  /* ---- growth zones — consistent rows ---- */
  function GrowthRow({
    label,
    pct,
    delta,
    priority,
    last
  }) {
    const color = priority ? "var(--primary)" : "var(--fg)";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "16px 0",
        borderBottom: last ? "none" : "1px solid var(--border)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 600,
        color: "var(--fg)"
      }
    }, label), priority && /*#__PURE__*/React.createElement("span", {
      style: {
        padding: "2px 10px",
        borderRadius: "var(--r-full)",
        background: "var(--primary-subtle)",
        color: "var(--primary)",
        border: "1px solid var(--primary-border)",
        fontFamily: "var(--font-sans)",
        fontSize: 12,
        fontWeight: 600
      }
    }, "\u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442"), /*#__PURE__*/React.createElement(Delta, {
      value: delta,
      up: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        flex: 1,
        height: 6,
        borderRadius: "var(--r-full)",
        background: "var(--input)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: pct + "%",
        height: "100%",
        borderRadius: "var(--r-full)",
        background: color
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 46,
        textAlign: "right",
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 16,
        color: "var(--fg)"
      }
    }, pct, "%")));
  }
  function GrowthZones() {
    const rows = [{
      label: "Аргументация",
      pct: 72,
      delta: "+8"
    }, {
      label: "Структура текста",
      pct: 58,
      delta: "+12"
    }, {
      label: "Визуальные доказательства",
      pct: 41,
      delta: "+4",
      priority: true
    }, {
      label: "Цитирование",
      pct: 85,
      delta: "+2"
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-3xl)",
        boxShadow: "var(--shadow-xs)",
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 22,
        color: "var(--fg)"
      }
    }, "\u0417\u043E\u043D\u044B \u0440\u043E\u0441\u0442\u0430"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-muted)"
      }
    }, "\u043F\u043E\xA0AI-\u0430\u043D\u0430\u043B\u0438\u0437\u0443 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432 \xB7 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E \u0441\u0435\u0433\u043E\u0434\u043D\u044F")), /*#__PURE__*/React.createElement("button", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--primary)"
      }
    }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 ", HIcon("arrow-right", 15))), rows.map((r, i) => /*#__PURE__*/React.createElement(GrowthRow, _extends({
      key: r.label
    }, r, {
      last: i === rows.length - 1
    }))));
  }

  /* ---- AI summary ---- */
  function Dots({
    filled
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        gap: 4
      }
    }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: i < filled ? "#fff" : "rgba(255,255,255,0.22)"
      }
    })));
  }
  function AiSummary({
    onOpen
  }) {
    const rows = [["Структура текста", 4], ["Доказательность", 3], ["Визуальные данные", 2], ["Следующий шаг", 3]];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-dark)",
        borderRadius: "var(--r-3xl)",
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 18,
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: "var(--r-lg)",
        background: "rgba(255,255,255,0.08)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, HIcon("sparkle", 20)), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.2
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        margin: 0,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 24
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#fff"
      }
    }, "\u0418\u0418-\u0441\u0432\u043E\u0434\u043A\u0430 \u043D\u0435\u0434\u0435\u043B\u0438")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "rgba(255,255,255,0.55)"
      }
    }, "12 \u043C\u0438\u043D \u043D\u0430\u0437\u0430\u0434"))), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        lineHeight: 1.55,
        color: "rgba(255,255,255,0.82)"
      }
    }, "\u041F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u0438 \u043E\u0442\u043C\u0435\u0447\u0430\u044E\u0442 \u0440\u043E\u0441\u0442 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438 \u0438\xA0\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B. \u0413\u043B\u0430\u0432\u043D\u0430\u044F \u043F\u0440\u043E\u0441\u044C\u0431\u0430 \u2014 \u0443\u0441\u0438\u043B\u0438\u0442\u044C \u0432\u0438\u0437\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0438\xA0\u0441\u0432\u044F\u0437\u043A\u0443 \u043C\u0435\u0436\u0434\u0443 \u0433\u043B\u0430\u0432\u0430\u043C\u0438. \u041E\u0434\u0438\u043D \u0446\u0438\u043A\u043B \u0436\u0434\u0451\u0442 \u0432\u0430\u0448\u0435\u0433\u043E \u043E\u0442\u0432\u0435\u0442\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 0
      }
    }, rows.map(([l, f], i) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "11px 0",
        borderBottom: i === rows.length - 1 ? "none" : "1px solid rgba(255,255,255,0.08)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "rgba(255,255,255,0.85)"
      }
    }, l), /*#__PURE__*/React.createElement(Dots, {
      filled: f
    })))), /*#__PURE__*/React.createElement("button", {
      onClick: onOpen,
      style: {
        marginTop: 4,
        width: "100%",
        border: "none",
        cursor: "pointer",
        background: "rgba(255,255,255,0.1)",
        color: "#fff",
        borderRadius: "var(--r-full)",
        padding: "13px 18px",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 600
      }
    }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0440\u0430\u0437\u0431\u043E\u0440 ", HIcon("arrow-right", 16)));
  }
  function Segmented({
    items,
    value,
    onChange
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        gap: 2,
        padding: 4,
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-full)"
      }
    }, items.map(it => {
      const on = it === value;
      return /*#__PURE__*/React.createElement("button", {
        key: it,
        onClick: () => onChange(it),
        style: {
          border: "none",
          cursor: "pointer",
          padding: "7px 18px",
          borderRadius: "var(--r-full)",
          fontFamily: "var(--font-sans)",
          fontSize: 14,
          fontWeight: 500,
          background: on ? "var(--surface)" : "transparent",
          color: on ? "var(--fg)" : "var(--fg-muted)",
          boxShadow: on ? "var(--shadow-xs)" : "none",
          transition: "all var(--dur-fast) var(--ease-standard)"
        }
      }, it);
    }));
  }
  function HomeScreen({
    onNavigate
  }) {
    const [period, setPeriod] = React.useState("Неделя");
    React.useEffect(() => {
      window.lucide && window.lucide.createIcons();
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 24,
        maxWidth: 1280,
        margin: "0 auto",
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 52,
        lineHeight: 1,
        letterSpacing: "-0.02em",
        color: "var(--fg)"
      }
    }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 16,
        color: "var(--fg-muted)"
      }
    }, "\u0421\u0435\u0433\u043E\u0434\u043D\u044F, 17\xA0\u043C\u0430\u044F. \u0423\xA0\u0432\u0430\u0441 12 \u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0446\u0438\u043A\u043B\u043E\u0432, 7\xA0\u0436\u0434\u0443\u0442 \u043E\u0442\u0432\u0435\u0442\u0430")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Segmented, {
      items: ["Неделя", "Месяц", "Семестр"],
      value: period,
      onChange: setPeriod
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(StatCard, {
      label: "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0446\u0438\u043A\u043B\u044B",
      value: "12",
      delta: "3 \u0437\u0430\xA0\u043D\u0435\u0434\u0435\u043B\u044E",
      up: true,
      points: [7, 8, 8, 9, 10, 11, 12]
    }), /*#__PURE__*/React.createElement(StatCard, {
      label: "\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438",
      value: "24",
      delta: "8 \u0437\u0430\xA0\u043D\u0435\u0434\u0435\u043B\u044E",
      up: true,
      points: [10, 12, 14, 13, 18, 21, 24]
    }), /*#__PURE__*/React.createElement(StatCard, {
      label: "\u0413\u043E\u0442\u043E\u0432\u043D\u043E\u0441\u0442\u044C",
      value: "84%",
      delta: "12 \u043F.\u043F.",
      up: true,
      points: [58, 60, 65, 68, 72, 79, 84]
    }), /*#__PURE__*/React.createElement(StatCard, {
      label: "\u0416\u0434\u0443\u0442 \u043E\u0442\u0432\u0435\u0442\u0430",
      value: "7",
      delta: "2 \u0437\u0430\xA0\u0441\u0435\u0433\u043E\u0434\u043D\u044F",
      up: false,
      down: true,
      points: [12, 11, 12, 10, 9, 9, 7]
    })), /*#__PURE__*/React.createElement(ProgressMap, {
      onAnswer: () => onNavigate && onNavigate("cycles")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr",
        gap: 22,
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(GrowthZones, null), /*#__PURE__*/React.createElement(AiSummary, {
      onOpen: () => {}
    })));
  }
  window.FukoHome = {
    HomeScreen
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/fuko-app/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/fuko-app/my-cycles.jsx
try { (() => {
/* FUKO — "Мои циклы" screen (Figma node 2698-48139 recreation).
   Self-contained shell + screen. Exposes window.FukoMyCycles. */
const MNS = window.FUKODesignSystem_23dd6b;
const {
  Logo,
  NavItem,
  Avatar,
  Button,
  IconButton,
  Input,
  Separator
} = MNS;
const MIcon = (n, size = 18, sw = 2) => /*#__PURE__*/React.createElement("i", {
  "data-lucide": n,
  style: {
    width: size,
    height: size,
    strokeWidth: sw
  }
});

/* ---------------- data ---------------- */
const STATUS = {
  action: {
    label: "Требует действия",
    dot: "var(--primary)"
  },
  waiting: {
    label: "Ждут ответа",
    dot: "var(--warning)"
  },
  inwork: {
    label: "В работе",
    dot: "var(--info)"
  },
  done: {
    label: "Завершён",
    dot: "var(--success)"
  }
};
const CYCLES = [{
  id: 1,
  status: "action",
  cycle: 2,
  title: "Курсовая: анализ поведения пользователей",
  course: "Методология исследования",
  teacher: "Анна Иоанновна С.",
  date: "28 мар"
}, {
  id: 2,
  status: "action",
  cycle: 1,
  title: "Эссе: этика искусственного интеллекта",
  course: "Философия техники",
  teacher: "Екатерина Кирилловна К.",
  date: "30 мар"
}, {
  id: 3,
  status: "waiting",
  cycle: 4,
  title: "Дипломная — Глава 2: обзор литературы",
  course: "Научный семинар",
  teacher: "Пётр Сергеевич М.",
  date: "2 апр"
}, {
  id: 4,
  status: "waiting",
  cycle: 2,
  title: "Лабораторная: колебания маятника",
  course: "Общая физика",
  teacher: "Виталий Сергеевич О.",
  date: "3 апр"
}, {
  id: 5,
  status: "inwork",
  cycle: 3,
  title: "Исследование аудитории: интервью",
  course: "UX-исследования",
  teacher: "Елена Викторовна Т.",
  date: "5 апр"
}, {
  id: 6,
  status: "inwork",
  cycle: 2,
  title: "Курсовая: инфляция и безработица",
  course: "Макроэкономика",
  teacher: "Даниил Олегович П.",
  date: "6 апр"
}, {
  id: 7,
  status: "done",
  cycle: 4,
  title: "Прототип личного кабинета студента",
  course: "Проектный практикум",
  teacher: "Игорь Павлович Д.",
  date: "20 мар"
}, {
  id: 8,
  status: "done",
  cycle: 3,
  title: "Реферат: реформы 1860-х годов",
  course: "История России",
  teacher: "Роман Игоревич А.",
  date: "15 мар"
}];
const FILTERS = [{
  id: "all",
  label: "Все"
}, {
  id: "action",
  label: "Требуют действия"
}, {
  id: "waiting",
  label: "Ждут ответа"
}, {
  id: "inwork",
  label: "В работе"
}, {
  id: "done",
  label: "Завершённые"
}];

/* ---------------- small primitives ---------------- */
function Segmented({
  items,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      gap: 2,
      padding: 4,
      background: "var(--surface-2)",
      border: "1px solid var(--border)",
      borderRadius: "var(--r-full)"
    }
  }, items.map(it => {
    const on = it === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it,
      onClick: () => onChange(it),
      style: {
        border: "none",
        cursor: "pointer",
        padding: "7px 18px",
        borderRadius: "var(--r-full)",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 500,
        background: on ? "var(--surface)" : "transparent",
        color: on ? "var(--fg)" : "var(--fg-muted)",
        boxShadow: on ? "var(--shadow-xs)" : "none",
        transition: "all var(--dur-fast) var(--ease-standard)"
      }
    }, it);
  }));
}
function FilterPill({
  label,
  count,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: "pointer",
      padding: "8px 14px",
      borderRadius: "var(--r-full)",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 500,
      background: active ? "var(--primary)" : "var(--surface)",
      color: active ? "var(--primary-fg)" : "var(--fg-muted)",
      border: active ? "1px solid var(--primary)" : "1px solid var(--border)",
      transition: "all var(--dur-fast) var(--ease-standard)"
    }
  }, label, /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 18,
      height: 18,
      padding: "0 5px",
      boxSizing: "border-box",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--r-full)",
      fontSize: 12,
      fontWeight: 600,
      background: active ? "rgba(255,255,255,0.22)" : "var(--surface-2)",
      color: active ? "var(--primary-fg)" : "var(--fg-subtle)"
    }
  }, count));
}
function CycleTile({
  c,
  onOpen
}) {
  const st = STATUS[c.status];
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      cursor: "pointer",
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "var(--r-2xl)",
      padding: 20,
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-xs)",
      transform: hover ? "translateY(-2px)" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "5px 11px 5px 9px",
      borderRadius: "var(--r-full)",
      background: "var(--surface-2)",
      border: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      border: `2px solid ${st.dot}`,
      boxSizing: "border-box"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--fg)"
    }
  }, st.label)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      color: "var(--fg-muted)",
      fontFamily: "var(--font-sans)",
      fontSize: 13
    }
  }, MIcon("refresh-cw", 14), " \u0426\u0438\u043A\u043B ", c.cycle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 19,
      lineHeight: 1.25,
      color: "var(--fg)"
    }
  }, c.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--fg-muted)"
    }
  }, c.course)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: c.teacher,
    size: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 600,
      color: "var(--fg)"
    }
  }, c.teacher), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--primary)"
    }
  }, c.date))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      flexShrink: 0,
      borderRadius: "var(--r-full)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid var(--border)",
      background: hover ? "var(--primary)" : "var(--surface-2)",
      color: hover ? "var(--primary-fg)" : "var(--fg-muted)",
      transition: "all var(--dur-base) var(--ease-standard)"
    }
  }, MIcon("arrow-right", 17))));
}
function CycleRow({
  c,
  onOpen
}) {
  const st = STATUS[c.status];
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      cursor: "pointer",
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: "var(--r-xl)",
      padding: "14px 18px",
      boxShadow: hover ? "var(--shadow-sm)" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: "50%",
      border: `2px solid ${st.dot}`,
      boxSizing: "border-box",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 16,
      color: "var(--fg)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--fg-muted)"
    }
  }, c.course, " \xB7 ", st.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "var(--fg-muted)",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      flexShrink: 0
    }
  }, MIcon("refresh-cw", 14), " \u0426\u0438\u043A\u043B ", c.cycle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: 200,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: c.teacher,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--fg)"
    }
  }, c.teacher), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--primary)"
    }
  }, c.date))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-muted)",
      display: "flex",
      flexShrink: 0
    }
  }, MIcon("arrow-right", 17)));
}

/* ---------------- sidebar ---------------- */
function RecentItem({
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("button", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
      width: "100%",
      textAlign: "left",
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: "7px 8px",
      borderRadius: "var(--r-lg)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--surface-2)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-subtle)",
      marginTop: 1,
      display: "flex"
    }
  }, MIcon("refresh-cw", 15)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--fg)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--fg-subtle)"
    }
  }, sub)));
}

/* collapsed-rail icon button */
function RailItem({
  icon,
  label,
  active,
  badge,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    title: label,
    "aria-label": label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      width: 44,
      height: 44,
      border: "none",
      cursor: "pointer",
      borderRadius: "var(--r-lg)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: active ? "var(--surface-2)" : hover ? "var(--surface-2)" : "transparent",
      color: active ? "var(--fg)" : "var(--fg-muted)",
      transition: "background var(--dur-fast) var(--ease-standard)"
    }
  }, MIcon(icon, 20), badge > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 4,
      right: 4,
      minWidth: 8,
      height: 8,
      borderRadius: "var(--r-full)",
      background: "var(--primary)",
      border: "2px solid var(--surface)",
      boxSizing: "content-box"
    }
  }));
}
function Sidebar({
  active,
  onNavigate
}) {
  const [collapsed, setCollapsed] = React.useState(false);
  const [logoHover, setLogoHover] = React.useState(false);
  React.useLayoutEffect(() => {
    window.lucide && window.lucide.createIcons();
  }, [collapsed, logoHover, active]);
  const nav = [{
    id: "home",
    icon: "house",
    label: "Главная"
  }, {
    id: "cycles",
    icon: "refresh-cw",
    label: "Циклы"
  }, {
    id: "chats",
    icon: "message-circle",
    label: "Чаты",
    badge: 12
  }, {
    id: "people",
    icon: "users",
    label: "Персоналии"
  }, {
    id: "artifacts",
    icon: "file",
    label: "Артефакты"
  }, {
    id: "analytics",
    icon: "bar-chart-3",
    label: "Аналитика"
  }, {
    id: "knowledge",
    icon: "sparkle",
    label: "База знаний"
  }];
  if (collapsed) {
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        width: 76,
        flexShrink: 0,
        height: "100%",
        boxSizing: "border-box",
        background: "var(--surface)",
        borderRight: "1px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "16px 0",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setCollapsed(false),
      "aria-label": "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043C\u0435\u043D\u044E",
      onMouseEnter: () => setLogoHover(true),
      onMouseLeave: () => setLogoHover(false),
      style: {
        width: 52,
        height: 52,
        border: "none",
        cursor: "pointer",
        marginBottom: 12,
        borderRadius: "var(--r-xl)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: logoHover ? "var(--surface-2)" : "transparent",
        color: "var(--fg)",
        transition: "background var(--dur-fast) var(--ease-standard)"
      }
    }, logoHover ? MIcon("panel-left", 22) : /*#__PURE__*/React.createElement(Logo, {
      size: 40,
      showWordmark: false
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6
      }
    }, nav.map(n => /*#__PURE__*/React.createElement(RailItem, {
      key: n.id,
      icon: n.icon,
      label: n.label,
      badge: n.badge,
      active: active === n.id,
      onClick: () => onNavigate && onNavigate(n.id)
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "auto"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      src: "../../assets/people/alexey-borisov.png",
      name: "\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0411\u043E\u0440\u0438\u0441\u043E\u0432",
      size: "default",
      status: "online"
    })));
  }
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 280,
      flexShrink: 0,
      height: "100%",
      boxSizing: "border-box",
      background: "var(--surface)",
      borderRight: "1px solid var(--border)",
      display: "flex",
      flexDirection: "column",
      padding: 16,
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 44,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 34
  }), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    ariaLabel: "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C",
    onClick: () => setCollapsed(true)
  }, MIcon("panel-left", 18))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, nav.map(n => /*#__PURE__*/React.createElement(NavItem, {
    key: n.id,
    icon: MIcon(n.icon),
    label: n.label,
    badge: n.badge,
    active: active === n.id,
    onClick: () => onNavigate && onNavigate(n.id)
  }))), /*#__PURE__*/React.createElement(Separator, {
    style: {
      margin: "12px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement(RecentItem, {
    title: "\u0414\u0438\u043F\u043B\u043E\u043C\u043D\u0430\u044F \u2014 \u0413\u043B\u0430\u0432\u0430 2",
    sub: "\u0446\u0438\u043A\u043B 4/6"
  }), /*#__PURE__*/React.createElement(RecentItem, {
    title: "\u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438",
    sub: "\u0446\u0438\u043A\u043B 2/4"
  }), /*#__PURE__*/React.createElement(RecentItem, {
    title: "\u041F\u0440\u043E\u0442\u043E\u0442\u0438\u043F \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0430",
    sub: "\u0446\u0438\u043A\u043B 1/3"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement(Separator, {
    style: {
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      width: "100%",
      border: "none",
      cursor: "pointer",
      background: "transparent",
      padding: "6px 6px",
      borderRadius: "var(--r-lg)"
    },
    onMouseEnter: e => e.currentTarget.style.background = "var(--surface-2)",
    onMouseLeave: e => e.currentTarget.style.background = "transparent"
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: "../../assets/people/alexey-borisov.png",
    name: "\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0411\u043E\u0440\u0438\u0441\u043E\u0432",
    size: "default",
    status: "online"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      minWidth: 0,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 600,
      color: "var(--fg)",
      whiteSpace: "nowrap"
    }
  }, "\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0411\u043E\u0440\u0438\u0441\u043E\u0432"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--fg-muted)"
    }
  }, "3 \u043A\u0443\u0440\u0441 \xB7 \u0414\u0438\u0437\u0430\u0439\u043D")), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      color: "var(--fg-subtle)",
      display: "flex"
    }
  }, MIcon("chevron-down", 16)))));
}

/* ---------------- topbar ---------------- */
function ThemeIcon({
  dark
}) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  return dark ? /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("path", {
    d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
  })) : /*#__PURE__*/React.createElement("svg", common, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 20v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m4.93 4.93 1.41 1.41"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m17.66 17.66 1.41 1.41"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 12h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 12h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6.34 17.66-1.41 1.41"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m19.07 4.93-1.41 1.41"
  }));
}
function Topbar({
  onCreate,
  onNotifications,
  dark,
  onToggleTheme
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 76,
      flexShrink: 0,
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "0 32px",
      background: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u041D\u0430\u0439\u0442\u0438 \u0446\u0438\u043A\u043B, \u0430\u0440\u0442\u0435\u0444\u0430\u043A\u0442, \u043E\u0442\u0432\u0435\u0442 \u0438\u043B\u0438\xA0\u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044F\u2026",
    iconLeft: MIcon("search", 17)
  })), /*#__PURE__*/React.createElement(IconButton, {
    variant: "outline",
    ariaLabel: dark ? "Светлая тема" : "Тёмная тема",
    onClick: onToggleTheme
  }, /*#__PURE__*/React.createElement(ThemeIcon, {
    dark: dark
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "outline",
    ariaLabel: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F",
    onClick: onNotifications
  }, MIcon("bell", 18)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 6,
      right: 7,
      width: 8,
      height: 8,
      borderRadius: "var(--r-full)",
      background: "var(--primary)",
      border: "2px solid var(--bg)",
      boxSizing: "content-box",
      pointerEvents: "none"
    }
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: MIcon("plus", 16),
    onClick: onCreate
  }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0446\u0438\u043A\u043B"));
}

/* ---------------- screen ---------------- */
function MyCycles({
  onCreate,
  onOpenCycle
}) {
  const [period, setPeriod] = React.useState("Неделя");
  const [filter, setFilter] = React.useState("all");
  const [view, setView] = React.useState("grid");
  const counts = React.useMemo(() => {
    const c = {
      all: CYCLES.length
    };
    FILTERS.slice(1).forEach(f => {
      c[f.id] = CYCLES.filter(x => x.status === f.id).length;
    });
    return c;
  }, []);
  const shown = filter === "all" ? CYCLES : CYCLES.filter(c => c.status === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 26,
      maxWidth: 1240,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 64,
      lineHeight: 1.0,
      letterSpacing: "-0.02em",
      color: "var(--fg)"
    }
  }, "\u041C\u043E\u0438 \u0446\u0438\u043A\u043B\u044B"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      color: "var(--fg-muted)"
    }
  }, "\u0412\u0441\u0435 \u0446\u0438\u043A\u043B\u044B \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438 \u043F\u043E\xA0\u0443\u0447\u0435\u0431\u043D\u044B\u043C \u0440\u0430\u0431\u043E\u0442\u0430\u043C \xB7 6 \u0446\u0438\u043A\u043B\u043E\u0432 \u0432\xA0\u043F\u043E\u0440\u0442\u0444\u0435\u043B\u0435")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginTop: 6,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Segmented, {
    items: ["Неделя", "Месяц", "Семестр"],
    value: period,
    onChange: setPeriod
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: MIcon("plus", 16),
    onClick: onCreate
  }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0446\u0438\u043A\u043B"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u041D\u0430\u0439\u0442\u0438 \u0446\u0438\u043A\u043B, \u0430\u0440\u0442\u0435\u0444\u0430\u043A\u0442, \u043E\u0442\u0432\u0435\u0442 \u0438\u043B\u0438\xA0\u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044F\u2026",
    iconLeft: MIcon("search", 17)
  })), /*#__PURE__*/React.createElement(IconButton, {
    variant: "outline",
    ariaLabel: "\u0424\u0438\u043B\u044C\u0442\u0440\u044B"
  }, MIcon("sliders-horizontal", 18)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      gap: 2,
      padding: 4,
      background: "var(--surface-2)",
      border: "1px solid var(--border)",
      borderRadius: "var(--r-lg)"
    }
  }, [["grid", "layout-grid"], ["list", "list"]].map(([v, ic]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setView(v),
    "aria-label": v,
    style: {
      width: 36,
      height: 32,
      border: "none",
      cursor: "pointer",
      borderRadius: "var(--r-md)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: view === v ? "var(--surface)" : "transparent",
      color: view === v ? "var(--fg)" : "var(--fg-muted)",
      boxShadow: view === v ? "var(--shadow-xs)" : "none",
      transition: "all var(--dur-fast) var(--ease-standard)"
    }
  }, MIcon(ic, 17))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10
    }
  }, FILTERS.map(f => /*#__PURE__*/React.createElement(FilterPill, {
    key: f.id,
    label: f.label,
    count: counts[f.id] ?? 0,
    active: filter === f.id,
    onClick: () => setFilter(f.id)
  }))), view === "grid" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
      gap: 18
    }
  }, shown.map(c => /*#__PURE__*/React.createElement(CycleTile, {
    key: c.id,
    c: c,
    onOpen: () => onOpenCycle && onOpenCycle(c)
  }))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, shown.map(c => /*#__PURE__*/React.createElement(CycleRow, {
    key: c.id,
    c: c,
    onOpen: () => onOpenCycle && onOpenCycle(c)
  }))));
}
function MyCyclesApp() {
  const [nav, setNav] = React.useState("cycles");
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      width: "100%",
      background: "var(--bg)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: nav,
    onNavigate: setNav
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    onCreate: () => {}
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: "auto",
      padding: "12px 40px 40px"
    }
  }, /*#__PURE__*/React.createElement(MyCycles, {
    onCreate: () => {}
  }))));
}
window.FukoMyCycles = {
  MyCyclesApp,
  MyCycles,
  Sidebar,
  Topbar
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/fuko-app/my-cycles.jsx", error: String((e && e.message) || e) }); }

// ui_kits/fuko-app/notifications.jsx
try { (() => {
/* FUKO — Notifications drawer (slides in from right). Exposes window.FukoNotifications. */
(() => {
  const NNS = window.FUKODesignSystem_23dd6b;
  const {
    IconButton
  } = NNS;
  const NIcon = (n, size = 18, sw = 2) => /*#__PURE__*/React.createElement("i", {
    "data-lucide": n,
    style: {
      width: size,
      height: size,
      strokeWidth: sw,
      flexShrink: 0
    }
  });
  const TYPE_ICON = {
    mail: {
      icon: "mail",
      bg: "var(--icon-neutral-bg)",
      fg: "var(--icon-neutral-fg)"
    },
    comment: {
      icon: "message-circle",
      bg: "var(--brand-soft)",
      fg: "var(--primary)"
    },
    cycle: {
      icon: "refresh-cw",
      bg: "var(--success-subtle)",
      fg: "var(--success)"
    },
    mention: {
      icon: "at-sign",
      bg: "var(--info-subtle)",
      fg: "var(--info)"
    }
  };
  const NOTES = [{
    id: 1,
    type: "mail",
    title: "Курсовая: экзопланеты",
    text: "Предварительно — нужно обосновать метод поиска",
    time: "14:20",
    unread: true,
    tab: "unread"
  }, {
    id: 2,
    type: "comment",
    title: "Дипломная — Глава 2",
    text: "Кристина Юрьевна оставила 3 комментария к черновику",
    time: "14:20",
    unread: true,
    tab: "unread"
  }, {
    id: 3,
    type: "mention",
    title: "Научный семинар",
    text: "Пётр Сергеевич упомянул вас в обсуждении главы 2",
    time: "13:05",
    unread: false,
    tab: "mention"
  }, {
    id: 4,
    type: "cycle",
    title: "Расчёты и графики",
    text: "Цикл 3 завершён — готовность выросла до 84%",
    time: "12:40",
    unread: false,
    tab: "all"
  }, {
    id: 5,
    type: "mail",
    title: "Эссе: правовые коллизии",
    text: "Аркаправо Г. согласовал список источников",
    time: "11:18",
    unread: false,
    tab: "all"
  }, {
    id: 6,
    type: "mention",
    title: "Анкета для опроса",
    text: "Екатерина Александровна упомянула вас в правках",
    time: "Вчера",
    unread: false,
    tab: "mention"
  }, {
    id: 7,
    type: "comment",
    title: "Прототип кабинета",
    text: "Игорь Павлович отметил готовность к защите",
    time: "Вчера",
    unread: false,
    tab: "all"
  }, {
    id: 8,
    type: "cycle",
    title: "Лабораторная: маятник",
    text: "Отчёт принят — замечаний больше нет",
    time: "2 апр",
    unread: false,
    tab: "all"
  }];
  const TABS = [{
    id: "all",
    label: "Все"
  }, {
    id: "unread",
    label: "Непрочитанные"
  }, {
    id: "mention",
    label: "Упоминания"
  }, {
    id: "archive",
    label: "Архивные"
  }];
  function NoteRow({
    n,
    last
  }) {
    const conf = TYPE_ICON[n.type];
    const [hover, setHover] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 14,
        padding: "16px 24px",
        cursor: "pointer",
        background: hover ? "var(--surface-2)" : "transparent",
        borderBottom: last ? "none" : "1px solid var(--border)",
        transition: "background var(--dur-fast) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        flexShrink: 0,
        borderRadius: "var(--r-lg)",
        background: conf.bg,
        color: conf.fg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, NIcon(conf.icon, 20)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15,
        fontWeight: 700,
        color: "var(--fg)"
      }
    }, n.title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        lineHeight: 1.4,
        color: "var(--fg-muted)"
      }
    }, n.text)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 8,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-subtle)"
      }
    }, n.time), n.unread && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: "var(--r-full)",
        background: "var(--primary)"
      }
    })));
  }
  function NotificationsDrawer({
    open,
    onClose
  }) {
    const [tab, setTab] = React.useState("all");
    React.useEffect(() => {
      if (open) window.lucide && window.lucide.createIcons();
    });
    const unreadCount = NOTES.filter(n => n.unread).length;
    const shown = NOTES.filter(n => {
      if (tab === "all") return true;
      if (tab === "unread") return n.unread;
      if (tab === "mention") return n.type === "mention";
      if (tab === "archive") return false;
      return true;
    });
    return /*#__PURE__*/React.createElement("div", {
      "aria-hidden": !open,
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 60,
        pointerEvents: open ? "auto" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: "absolute",
        inset: 0,
        background: "rgba(20,16,16,0.32)",
        opacity: open ? 1 : 0,
        transition: "opacity var(--dur-base) var(--ease-standard)"
      }
    }), /*#__PURE__*/React.createElement("aside", {
      style: {
        position: "absolute",
        top: 0,
        right: 0,
        height: "100%",
        width: 480,
        maxWidth: "92vw",
        background: "var(--surface)",
        borderLeft: "1px solid var(--border)",
        boxShadow: "var(--shadow-2xl)",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform var(--dur-slow) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "22px 24px 16px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: "var(--r-lg)",
        background: "var(--brand-soft)",
        color: "var(--primary)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      }
    }, NIcon("bell", 20)), /*#__PURE__*/React.createElement("h2", {
      style: {
        flex: 1,
        margin: 0,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 30,
        letterSpacing: "-0.01em",
        color: "var(--fg)"
      }
    }, "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      ariaLabel: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
    }, NIcon("settings", 18)), /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      ariaLabel: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
      onClick: onClose
    }, NIcon("x", 18))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "0 24px 16px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        gap: 2,
        padding: 4,
        background: "var(--surface-2)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-full)",
        overflow: "hidden"
      }
    }, TABS.map(t => {
      const on = tab === t.id;
      return /*#__PURE__*/React.createElement("button", {
        key: t.id,
        onClick: () => setTab(t.id),
        style: {
          flex: 1,
          border: "none",
          cursor: "pointer",
          padding: "8px 10px",
          borderRadius: "var(--r-full)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          whiteSpace: "nowrap",
          fontFamily: "var(--font-sans)",
          fontSize: 14,
          fontWeight: 500,
          background: on ? "var(--surface)" : "transparent",
          color: on ? "var(--fg)" : "var(--fg-muted)",
          boxShadow: on ? "var(--shadow-xs)" : "none",
          transition: "all var(--dur-fast) var(--ease-standard)"
        }
      }, t.label, t.id === "unread" && unreadCount > 0 && /*#__PURE__*/React.createElement("span", {
        style: {
          minWidth: 18,
          height: 18,
          padding: "0 5px",
          boxSizing: "border-box",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "var(--r-full)",
          background: on ? "var(--primary)" : "var(--border)",
          color: on ? "var(--primary-fg)" : "var(--fg-muted)",
          fontSize: 12,
          fontWeight: 600
        }
      }, unreadCount));
    })), /*#__PURE__*/React.createElement(IconButton, {
      variant: "outline",
      ariaLabel: "\u0415\u0449\u0451"
    }, NIcon("more-horizontal", 18))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflowY: "auto"
      }
    }, shown.length === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        color: "var(--fg-subtle)",
        padding: 40
      }
    }, NIcon("inbox", 40, 1.5), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 15
      }
    }, "\u0417\u0434\u0435\u0441\u044C \u043F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u043E")) : shown.map((n, i) => /*#__PURE__*/React.createElement(NoteRow, {
      key: n.id,
      n: n,
      last: i === shown.length - 1
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "14px 24px",
        borderTop: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("button", {
      style: {
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--primary)"
      }
    }, "\u041E\u0442\u043C\u0435\u0442\u0438\u0442\u044C \u0432\u0441\u0435 \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u043D\u043D\u044B\u043C\u0438"), /*#__PURE__*/React.createElement("button", {
      style: {
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--fg-muted)"
      }
    }, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"))));
  }
  window.FukoNotifications = {
    NotificationsDrawer
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/fuko-app/notifications.jsx", error: String((e && e.message) || e) }); }

// ui_kits/fuko-app/people.jsx
try { (() => {
/* FUKO — "Персоналии" screen (reference: myITMO people directory).
   Content area only — shell/topbar untouched. Exposes window.FukoPeople. */
(() => {
  const PNS = window.FUKODesignSystem_23dd6b;
  const {
    Input,
    Button,
    Avatar
  } = PNS;
  const PIcon = (n, size = 16, sw = 2) => /*#__PURE__*/React.createElement("i", {
    "data-lucide": n,
    style: {
      width: size,
      height: size,
      strokeWidth: sw,
      flexShrink: 0
    }
  });
  const PEOPLE = [{
    id: "205826",
    name: "Новиков Сергей Павлович",
    meta: null,
    phone: null,
    email: "novikov.s@fuko.ru"
  }, {
    id: "365310",
    name: "Смирнов Дмитрий Алексеевич",
    meta: null,
    phone: "+7 (969) 735-52-06",
    email: "smirnov.d@fuko.ru"
  }, {
    id: "407315",
    name: "Козлов Антон Игоревич",
    meta: "Студент, 2-й курс, R4237c, ФСУ и Р",
    phone: null,
    email: null
  }, {
    id: "521033",
    name: "Морозов Кирилл Сергеевич",
    meta: "Студент, 1-й курс, G4150c, ФЭТ",
    phone: null,
    email: null
  }, {
    id: "175742",
    name: "Волков Максим Юрьевич",
    meta: null,
    phone: null,
    email: null
  }, {
    id: "506432",
    name: "Соколова Анна Дмитриевна",
    meta: "Студент, 1-й курс, A4130, ПИШ ФУКО",
    phone: null,
    email: null,
    avatar: true
  }, {
    id: "198184",
    name: "Лебедева Мария Андреевна",
    meta: null,
    phone: "+7 (921) 899-50-23",
    email: "lebedeva.m@fuko.ru",
    avatar: true
  }, {
    id: "160177",
    name: "Ковалёв Иван Степанович",
    meta: null,
    phone: null,
    email: null
  }, {
    id: "199592",
    name: "Попов Артём Васильевич",
    meta: null,
    phone: "+7 (953) 375-97-26",
    email: "popov.a@fuko.ru"
  }, {
    id: "311416",
    name: "Морозова Елена Викторовна",
    meta: "Студент, 4-й курс, U3475, ФТМИ",
    phone: "+7 (916) 325-65-30",
    email: null,
    avatar: true
  }, {
    id: "169958",
    name: "Васильева Ольга Николаевна",
    meta: null,
    phone: null,
    email: null,
    avatar: true
  }, {
    id: "142770",
    name: "Степанов Павел Григорьевич",
    meta: null,
    phone: null,
    email: null
  }];
  const TOTAL = 71435;
  function PlaceholderAvatar({
    filled
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        width: 116,
        height: 116,
        flexShrink: 0,
        borderRadius: "var(--r-xl)",
        background: filled ? "var(--brand-soft)" : "var(--surface-2)",
        border: "1px solid var(--border)",
        color: "var(--fg-subtle)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }
    }, filled ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-heading)",
        fontWeight: 600,
        fontSize: 34,
        color: "var(--primary)"
      }
    }, filled) : PIcon("user", 52, 1.5));
  }
  function ContactRow({
    icon,
    value,
    link
  }) {
    const has = !!value;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: has ? "var(--primary)" : "var(--fg-subtle)",
        display: "flex"
      }
    }, PIcon(icon, 16)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        minWidth: 0,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: has ? link ? "var(--primary)" : "var(--fg)" : "var(--fg-subtle)"
      }
    }, has ? value : "не указан"));
  }
  function PersonCard({
    p
  }) {
    const [hover, setHover] = React.useState(false);
    const initials = p.avatar ? p.name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase() : null;
    return /*#__PURE__*/React.createElement("div", {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        display: "flex",
        gap: 18,
        padding: 18,
        cursor: "pointer",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-2xl)",
        boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-xs)",
        transition: "box-shadow var(--dur-base) var(--ease-standard)"
      }
    }, /*#__PURE__*/React.createElement(PlaceholderAvatar, {
      filled: initials
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        alignSelf: "flex-start",
        padding: "3px 12px",
        borderRadius: "var(--r-full)",
        background: "var(--brand-soft)",
        color: "var(--primary)",
        border: "1px solid var(--primary-border)",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        fontWeight: 600,
        letterSpacing: "0.01em"
      }
    }, p.id), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-heading)",
        fontWeight: 600,
        fontSize: 17,
        lineHeight: 1.25,
        color: "var(--fg)"
      }
    }, p.name), p.meta && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: "var(--fg-muted)"
      }
    }, p.meta)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 7,
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(ContactRow, {
      icon: "phone",
      value: p.phone
    }), /*#__PURE__*/React.createElement(ContactRow, {
      icon: "mail",
      value: p.email,
      link: true
    }))));
  }
  function Pagination() {
    const pages = ["1", "2", "3", "…", "5953"];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 14,
        paddingTop: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-sans)",
        fontSize: 14,
        color: "var(--fg-muted)"
      }
    }, /*#__PURE__*/React.createElement("b", {
      style: {
        color: "var(--fg)"
      }
    }, "1\u201312"), " \u0438\u0437 ", TOTAL.toLocaleString("ru-RU")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("button", {
      "aria-label": "\u041D\u0430\u0437\u0430\u0434",
      style: pageBtn(false)
    }, PIcon("chevron-left", 16)), pages.map((pg, i) => {
      const active = pg === "1";
      const dots = pg === "…";
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        disabled: dots,
        style: pageBtn(active, dots)
      }, pg);
    }), /*#__PURE__*/React.createElement("button", {
      "aria-label": "\u0412\u043F\u0435\u0440\u0451\u0434",
      style: pageBtn(false)
    }, PIcon("chevron-right", 16))));
  }
  function pageBtn(active, dots) {
    return {
      minWidth: 34,
      height: 34,
      padding: "0 8px",
      border: "none",
      cursor: dots ? "default" : "pointer",
      borderRadius: "var(--r-md)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: active ? 600 : 500,
      background: active ? "var(--primary)" : "transparent",
      color: active ? "var(--primary-fg)" : dots ? "var(--fg-subtle)" : "var(--fg-muted)",
      boxShadow: active ? "var(--shadow-primary)" : "none"
    };
  }
  function PeopleScreen() {
    const [q, setQ] = React.useState("");
    React.useEffect(() => {
      window.lucide && window.lucide.createIcons();
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 22,
        maxWidth: 1320,
        margin: "0 auto",
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 40,
        letterSpacing: "-0.02em",
        color: "var(--fg)"
      }
    }, "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0438"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement(Input, {
      value: q,
      onChange: e => setQ(e.target.value),
      placeholder: "\u041F\u043E\u0438\u0441\u043A \u043F\u043E\xA0\u0424.\u0418.\u041E., \u043D\u043E\u043C\u0435\u0440\u0443, \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044E\u2026",
      iconLeft: PIcon("search", 17)
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "primary"
    }, "\u041F\u043E\u0438\u0441\u043A")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-heading)",
        fontWeight: 700,
        fontSize: 19,
        color: "var(--fg)"
      }
    }, TOTAL.toLocaleString("ru-RU"), " \u043F\u0435\u0440\u0441\u043E\u043D \u043D\u0430\u0439\u0434\u0435\u043D\u043E"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
        gap: 16
      }
    }, PEOPLE.map(p => /*#__PURE__*/React.createElement(PersonCard, {
      key: p.id,
      p: p
    }))), /*#__PURE__*/React.createElement(Pagination, null));
  }
  window.FukoPeople = {
    PeopleScreen
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/fuko-app/people.jsx", error: String((e && e.message) || e) }); }

// ui_kits/fuko-app/screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* FUKO screens — Dashboard, CycleDetail, EmptyHome. Exposes window.FukoScreens. */
const SNS = window.FUKODesignSystem_23dd6b;
const {
  CycleCard,
  AISummaryBlock,
  CommentItem,
  CycleStatusBadge,
  Tabs,
  Breadcrumb,
  Card,
  CardHeader,
  Button,
  Badge,
  Avatar,
  AvatarStack,
  Progress,
  EmptyState,
  Separator,
  Textarea
} = SNS;
const SIcon = window.FukoShell.Icon;
const CYCLES = [{
  id: 1,
  title: "Q2 Design Review — Лендинг",
  cycleLabel: "Цикл 2",
  status: "action",
  progress: 68,
  deadline: "2 дня",
  highlight: true,
  participants: [{
    name: "АК"
  }, {
    name: "МС"
  }, {
    name: "ИП"
  }, {
    name: "ДВ"
  }]
}, {
  id: 2,
  title: "Онбординг мобильного приложения",
  cycleLabel: "Цикл 5",
  status: "open",
  progress: 40,
  deadline: "5 дней",
  participants: [{
    name: "ЕЛ"
  }, {
    name: "ТЗ"
  }, {
    name: "РС"
  }]
}, {
  id: 3,
  title: "Ребрендинг — система иконок",
  cycleLabel: "Цикл 1",
  status: "review",
  progress: 90,
  deadline: "Завтра",
  participants: [{
    name: "НК"
  }, {
    name: "АБ"
  }]
}, {
  id: 4,
  title: "Презентация для инвесторов",
  cycleLabel: "Цикл 3",
  status: "done",
  progress: 100,
  deadline: "Завершён",
  participants: [{
    name: "МС"
  }, {
    name: "АК"
  }, {
    name: "ИП"
  }, {
    name: "ЕЛ"
  }, {
    name: "ДВ"
  }]
}];
function StatCard({
  icon,
  label,
  value,
  tone
}) {
  return /*#__PURE__*/React.createElement(Card, {
    padding: 16,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--r-lg)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--primary-subtle)",
      color: "var(--primary)"
    }
  }, SIcon(icon, 20)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 26,
      color: "var(--fg)",
      lineHeight: 1.1
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--fg-muted)"
    }
  }, label))));
}
function Dashboard({
  onOpenCycle
}) {
  const [tab, setTab] = React.useState("all");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24,
      maxWidth: 1100,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--fg-muted)"
    }
  }, "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C, \u0410\u043B\u0435\u043A\u0441\u0435\u0439. \u0423 \u0432\u0430\u0441 1 \u0446\u0438\u043A\u043B \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    icon: "layers",
    value: "3",
    label: "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u0446\u0438\u043A\u043B\u0430"
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "message-circle",
    value: "14",
    label: "\u041D\u043E\u0432\u044B\u0445 \u043E\u0442\u0437\u044B\u0432\u0430"
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "circle-check",
    value: "89%",
    label: "\u0421\u0440\u0435\u0434\u043D\u0435\u0435 \u0443\u0447\u0430\u0441\u0442\u0438\u0435"
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "clock",
    value: "2",
    label: "\u0421\u043A\u043E\u0440\u043E \u0434\u0435\u0434\u043B\u0430\u0439\u043D"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: "all",
      label: "Все циклы",
      count: 4
    }, {
      value: "mine",
      label: "Требуют действия",
      count: 1
    }, {
      value: "done",
      label: "Завершённые",
      count: 1
    }]
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    iconLeft: SIcon("sliders-horizontal", 15)
  }, "\u0424\u0438\u043B\u044C\u0442\u0440\u044B")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: 16
    }
  }, CYCLES.filter(c => tab === "all" || tab === "mine" && c.status === "action" || tab === "done" && c.status === "done").map(c => /*#__PURE__*/React.createElement(CycleCard, _extends({
    key: c.id
  }, c, {
    onClick: () => onOpenCycle(c)
  })))));
}
function CycleDetail({
  cycle,
  onBack
}) {
  const c = cycle || CYCLES[0];
  const [tab, setTab] = React.useState("feedback");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      maxWidth: 1100,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: SIcon("arrow-left", 16),
    onClick: onBack
  }, "\u041D\u0430\u0437\u0430\u0434"), /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: "Циклы"
    }, {
      label: c.cycleLabel
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(CycleStatusBadge, {
    status: c.status
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--fg-muted)"
    }
  }, "\u0414\u0435\u0434\u043B\u0430\u0439\u043D \u0447\u0435\u0440\u0435\u0437 ", c.deadline)), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, c.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconLeft: SIcon("share-2", 16)
  }, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: SIcon("pen-line", 16)
  }, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 240,
      background: "var(--surface-2)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      color: "var(--fg-subtle)",
      fontFamily: "var(--font-sans)",
      fontSize: 14
    }
  }, SIcon("image", 18), " \u041F\u0440\u0435\u0432\u044C\u044E \u0430\u0440\u0442\u0435\u0444\u0430\u043A\u0442\u0430 \xB7 \u041B\u0435\u043D\u0434\u0438\u043D\u0433 v2")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: "feedback",
      label: "Отзывы",
      count: 3
    }, {
      value: "activity",
      label: "Активность"
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(CommentItem, {
    author: "\u041C\u0430\u0440\u0438\u044F \u0421\u0435\u0434\u043E\u0432\u0430",
    role: "\u0410\u0432\u0442\u043E\u0440",
    time: "2 \u0447 \u043D\u0430\u0437\u0430\u0434",
    pinned: true,
    body: "\u041A\u043E\u043D\u0442\u0440\u0430\u0441\u0442 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u043A\u043D\u043E\u043F\u043A\u0438 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043D\u0438\u0437\u043A\u0438\u0439 \u043D\u0430 \u0441\u0432\u0435\u0442\u043B\u043E\u043C \u0444\u043E\u043D\u0435 \u2014 \u0435\u0451 \u043B\u0435\u0433\u043A\u043E \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      size: "sm"
    }, "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C"), /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      size: "sm"
    }, "\u041E\u0442\u043C\u0435\u0442\u0438\u0442\u044C \u0440\u0435\u0448\u0451\u043D\u043D\u044B\u043C"))
  }), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement(CommentItem, {
    author: "\u0418\u0432\u0430\u043D \u041F\u0435\u0442\u0440\u043E\u0432",
    time: "1 \u0447 \u043D\u0430\u0437\u0430\u0434",
    body: "\u0421\u043E\u0433\u043B\u0430\u0441\u0435\u043D. \u0418 \u0432\u0442\u043E\u0440\u0430\u044F CTA \u0432 \u0433\u0435\u0440\u043E\u0431\u043B\u043E\u043A\u0435 \u043E\u0442\u0432\u043B\u0435\u043A\u0430\u0435\u0442 \u2014 \u043E\u0441\u0442\u0430\u0432\u0438\u043B \u0431\u044B \u043E\u0434\u043D\u0443.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "link",
      size: "sm"
    }, "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C")
  }), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement(CommentItem, {
    author: "\u0414\u0430\u0440\u044C\u044F \u0412\u043B\u0430\u0441\u043E\u0432\u0430",
    time: "40 \u043C\u0438\u043D \u043D\u0430\u0437\u0430\u0434",
    body: "\u0422\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0430 \u043E\u0442\u043B\u0438\u0447\u043D\u0430\u044F. \u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0431\u043B\u043E\u043A \u0441 \u043E\u0442\u0437\u044B\u0432\u0430\u043C\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043D\u0438\u0436\u0435."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u041A\u0430\u0440\u043F\u043E\u0432",
    size: "default"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 2,
    placeholder: "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439\u2026"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(AISummaryBlock, {
    summary: "\u0411\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u043E\u0442\u043C\u0435\u0442\u0438\u043B\u0438 \u0441\u0438\u043B\u044C\u043D\u0443\u044E \u0442\u0438\u043F\u043E\u0433\u0440\u0430\u0444\u0438\u043A\u0443. \u0413\u043B\u0430\u0432\u043D\u0430\u044F \u043A\u0440\u0438\u0442\u0438\u043A\u0430 \u2014 \u043D\u0438\u0437\u043A\u0438\u0439 \u043A\u043E\u043D\u0442\u0440\u0430\u0441\u0442 CTA \u0438 \u043F\u0435\u0440\u0435\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0439 \u0433\u0435\u0440\u043E\u0431\u043B\u043E\u043A.",
    points: ["Усилить контраст основной кнопки", "Оставить одну CTA в героблоке", "Добавить блок с отзывами клиентов"]
  }), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, {
    title: "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438",
    description: `${c.participants.length} человек`
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--fg-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u041E\u0442\u0432\u0435\u0442\u0438\u043B\u0438"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--fg)"
    }
  }, c.progress, "%")), /*#__PURE__*/React.createElement(Progress, {
    value: c.progress
  })), /*#__PURE__*/React.createElement(AvatarStack, {
    people: c.participants,
    size: "default",
    max: 6
  }))))));
}
function EmptyHome({
  onCreate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(EmptyState, {
    image: "../../assets/illustrations/empty-state-monkey.png",
    title: "\u0417\u0434\u0435\u0441\u044C \u0441\u043A\u043E\u0440\u043E \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0438\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442",
    description: "\u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u0439 \u0446\u0438\u043A\u043B \u043E\u0431\u0440\u0430\u0442\u043D\u043E\u0439 \u0441\u0432\u044F\u0437\u0438, \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0447\u0430\u0442\u044C \u0441\u043E\u0431\u0438\u0440\u0430\u0442\u044C \u043E\u0442\u0437\u044B\u0432\u044B \u043E\u0442 \u043A\u043E\u043C\u0430\u043D\u0434\u044B.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconLeft: SIcon("plus", 16),
      onClick: onCreate
    }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0446\u0438\u043A\u043B")
  }));
}
window.FukoScreens = {
  Dashboard,
  CycleDetail,
  EmptyHome,
  CYCLES
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/fuko-app/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/fuko-app/shell.jsx
try { (() => {
/* FUKO app shell — sidebar + topbar chrome. Exposes window.FukoShell. */
const NS = window.FUKODesignSystem_23dd6b;
const {
  Logo,
  NavItem,
  Avatar,
  IconButton,
  Button,
  Input,
  Separator
} = NS;
const Icon = (n, size = 18) => /*#__PURE__*/React.createElement("i", {
  "data-lucide": n,
  style: {
    width: size,
    height: size
  }
});
function Sidebar({
  active,
  onNavigate,
  collapsed,
  onToggle
}) {
  const nav = [{
    id: "home",
    icon: "house",
    label: "Главная"
  }, {
    id: "cycles",
    icon: "layers",
    label: "Циклы",
    badge: 3
  }, {
    id: "chats",
    icon: "messages-square",
    label: "Чаты",
    badge: 12
  }, {
    id: "people",
    icon: "users",
    label: "Персонажи"
  }, {
    id: "artifacts",
    icon: "file-text",
    label: "Артефакты"
  }, {
    id: "analytics",
    icon: "chart-no-axes-column",
    label: "Аналитика"
  }, {
    id: "knowledge",
    icon: "book-open",
    label: "База знаний"
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: collapsed ? 68 : 248,
      flexShrink: 0,
      height: "100%",
      boxSizing: "border-box",
      background: "var(--surface)",
      borderRight: "1px solid var(--border)",
      display: "flex",
      flexDirection: "column",
      padding: 12,
      gap: 4,
      transition: "width var(--dur-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: collapsed ? "center" : "space-between",
      height: 48,
      paddingLeft: collapsed ? 0 : 4,
      marginBottom: 6
    }
  }, collapsed ? /*#__PURE__*/React.createElement(Logo, {
    size: 32,
    showWordmark: false
  }) : /*#__PURE__*/React.createElement(Logo, {
    size: 30
  }), !collapsed && /*#__PURE__*/React.createElement(IconButton, {
    ariaLabel: "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C",
    onClick: onToggle
  }, Icon("panel-left-close"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, nav.map(n => /*#__PURE__*/React.createElement(NavItem, {
    key: n.id,
    icon: Icon(n.icon),
    label: n.label,
    badge: n.badge,
    active: active === n.id,
    collapsed: collapsed,
    onClick: () => onNavigate(n.id)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, collapsed && /*#__PURE__*/React.createElement(IconButton, {
    ariaLabel: "\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C",
    onClick: onToggle,
    style: {
      alignSelf: "center"
    }
  }, Icon("panel-left-open")), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: collapsed ? 0 : "6px 4px",
      justifyContent: collapsed ? "center" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u041A\u0430\u0440\u043F\u043E\u0432",
    size: "default",
    status: "online"
  }), !collapsed && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--fg)",
      whiteSpace: "nowrap"
    }
  }, "\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u041A\u0430\u0440\u043F\u043E\u0432"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--fg-muted)"
    }
  }, "\u0422\u0430\u0440\u0438\u0444 \xB7 \u041A\u043E\u043C\u0430\u043D\u0434\u0430")), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      color: "var(--fg-subtle)",
      display: "flex"
    }
  }, Icon("chevrons-up-down", 16)))));
}
function Topbar({
  title,
  breadcrumb,
  onCreate
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      flexShrink: 0,
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "0 28px",
      borderBottom: "1px solid var(--border)",
      background: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u041D\u0430\u0439\u0442\u0438 \u0446\u0438\u043A\u043B, \u0430\u0440\u0442\u0435\u0444\u0430\u043A\u0442, \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430\u2026",
    iconLeft: Icon("search", 16)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "outline",
    ariaLabel: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"
  }, Icon("bell")), /*#__PURE__*/React.createElement(IconButton, {
    variant: "outline",
    ariaLabel: "\u041F\u043E\u043C\u043E\u0449\u044C"
  }, Icon("circle-help")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: Icon("plus", 16),
    onClick: onCreate
  }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0446\u0438\u043A\u043B")));
}
function AppShell({
  active,
  onNavigate,
  onCreate,
  children
}) {
  const [collapsed, setCollapsed] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      width: "100%",
      background: "var(--bg)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: active,
    onNavigate: onNavigate,
    collapsed: collapsed,
    onToggle: () => setCollapsed(c => !c)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    onCreate: onCreate
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: "auto",
      padding: "28px 40px"
    }
  }, children)));
}
window.FukoShell = {
  AppShell,
  Sidebar,
  Topbar,
  Icon
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/fuko-app/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarStack = __ds_scope.AvatarStack;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Kbd = __ds_scope.Kbd;

__ds_ns.Separator = __ds_scope.Separator;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Label = __ds_scope.Label;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.AISummaryBlock = __ds_scope.AISummaryBlock;

__ds_ns.CommentItem = __ds_scope.CommentItem;

__ds_ns.CycleCard = __ds_scope.CycleCard;

__ds_ns.CycleStatusBadge = __ds_scope.CycleStatusBadge;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.NavItem = __ds_scope.NavItem;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
