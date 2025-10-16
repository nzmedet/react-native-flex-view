"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
function clean(obj) {
    for (var propName in obj) {
        if (obj[propName] == null) {
            delete obj[propName];
        }
    }
    return obj;
}
var View = function (_a) {
    var style = _a.style, children = _a.children, props = __rest(_a, ["style", "children"]);
    var accessible = props.accessible, accessibilityLabel = props.accessibilityLabel, accessibilityRole = props.accessibilityRole, accessibilityHint = props.accessibilityHint, collapsable = props.collapsable, needsOffscreenAlphaCompositing = props.needsOffscreenAlphaCompositing, renderToHardwareTextureAndroid = props.renderToHardwareTextureAndroid, accessibilityViewIsModal = props.accessibilityViewIsModal, accessibilityActions = props.accessibilityActions, onAccessibilityAction = props.onAccessibilityAction, shouldRasterizeIOS = props.shouldRasterizeIOS, onStartShouldSetResponder = props.onStartShouldSetResponder, onMoveShouldSetResponder = props.onMoveShouldSetResponder, onResponderEnd = props.onResponderEnd, onResponderGrant = props.onResponderGrant, onResponderReject = props.onResponderReject, onResponderMove = props.onResponderMove, onResponderRelease = props.onResponderRelease, onResponderStart = props.onResponderStart, onResponderTerminationRequest = props.onResponderTerminationRequest, onResponderTerminate = props.onResponderTerminate, onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture, onMoveShouldSetResponderCapture = props.onMoveShouldSetResponderCapture, onTouchStart = props.onTouchStart, onTouchMove = props.onTouchMove, onTouchEnd = props.onTouchEnd, onTouchCancel = props.onTouchCancel, onTouchEndCapture = props.onTouchEndCapture, accessibilityElementsHidden = props.accessibilityElementsHidden, accessibilityLabelledBy = props.accessibilityLabelledBy, accessibilityIgnoresInvertColors = props.accessibilityIgnoresInvertColors, accessibilityLanguage = props.accessibilityLanguage, accessibilityLargeContentTitle = props.accessibilityLargeContentTitle, accessibilityLiveRegion = props.accessibilityLiveRegion, accessibilityRespondsToUserInteraction = props.accessibilityRespondsToUserInteraction, accessibilityShowsLargeContentViewer = props.accessibilityShowsLargeContentViewer, accessibilityState = props.accessibilityState, accessibilityValue = props.accessibilityValue, importantForAccessibility = props.importantForAccessibility, collapsableChildren = props.collapsableChildren, focusable = props.focusable, hitSlop = props.hitSlop, id = props.id, nativeID = props.nativeID, isTVSelectable = props.isTVSelectable, onAccessibilityEscape = props.onAccessibilityEscape, onBlur = props.onBlur, onAccessibilityTap = props.onAccessibilityTap, onFocus = props.onFocus, onLayout = props.onLayout, onMagicTap = props.onMagicTap, onPointerCancel = props.onPointerCancel, onPointerCancelCapture = props.onPointerCancelCapture, onPointerDown = props.onPointerDown, onPointerEnter = props.onPointerEnter, onPointerDownCapture = props.onPointerDownCapture, onPointerEnterCapture = props.onPointerEnterCapture, onPointerLeave = props.onPointerLeave, onPointerLeaveCapture = props.onPointerLeaveCapture, onPointerMove = props.onPointerMove, onPointerMoveCapture = props.onPointerMoveCapture, onPointerUp = props.onPointerUp, pointerEvents = props.pointerEvents, onPointerUpCapture = props.onPointerUpCapture, removeClippedSubviews = props.removeClippedSubviews, role = props.role, tabIndex = props.tabIndex, screenReaderFocusable = props.screenReaderFocusable, testID = props.testID, tvParallaxMagnification = props.tvParallaxMagnification, tvParallaxShiftDistanceX = props.tvParallaxShiftDistanceX, tvParallaxTiltAngle = props.tvParallaxTiltAngle, tvParallaxShiftDistanceY = props.tvParallaxShiftDistanceY, styleProps = __rest(props, ["accessible", "accessibilityLabel", "accessibilityRole", "accessibilityHint", "collapsable", "needsOffscreenAlphaCompositing", "renderToHardwareTextureAndroid", "accessibilityViewIsModal", "accessibilityActions", "onAccessibilityAction", "shouldRasterizeIOS", "onStartShouldSetResponder", "onMoveShouldSetResponder", "onResponderEnd", "onResponderGrant", "onResponderReject", "onResponderMove", "onResponderRelease", "onResponderStart", "onResponderTerminationRequest", "onResponderTerminate", "onStartShouldSetResponderCapture", "onMoveShouldSetResponderCapture", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel", "onTouchEndCapture", "accessibilityElementsHidden", "accessibilityLabelledBy", "accessibilityIgnoresInvertColors", "accessibilityLanguage", "accessibilityLargeContentTitle", "accessibilityLiveRegion", "accessibilityRespondsToUserInteraction", "accessibilityShowsLargeContentViewer", "accessibilityState", "accessibilityValue", "importantForAccessibility", "collapsableChildren", "focusable", "hitSlop", "id", "nativeID", "isTVSelectable", "onAccessibilityEscape", "onBlur", "onAccessibilityTap", "onFocus", "onLayout", "onMagicTap", "onPointerCancel", "onPointerCancelCapture", "onPointerDown", "onPointerEnter", "onPointerDownCapture", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "pointerEvents", "onPointerUpCapture", "removeClippedSubviews", "role", "tabIndex", "screenReaderFocusable", "testID", "tvParallaxMagnification", "tvParallaxShiftDistanceX", "tvParallaxTiltAngle", "tvParallaxShiftDistanceY"]);
    var viewProps = {
        accessible: accessible,
        accessibilityLabel: accessibilityLabel,
        accessibilityRole: accessibilityRole,
        accessibilityHint: accessibilityHint,
        collapsable: collapsable,
        needsOffscreenAlphaCompositing: needsOffscreenAlphaCompositing,
        renderToHardwareTextureAndroid: renderToHardwareTextureAndroid,
        accessibilityViewIsModal: accessibilityViewIsModal,
        accessibilityActions: accessibilityActions,
        onAccessibilityAction: onAccessibilityAction,
        shouldRasterizeIOS: shouldRasterizeIOS,
        onStartShouldSetResponder: onStartShouldSetResponder,
        onMoveShouldSetResponder: onMoveShouldSetResponder,
        onResponderEnd: onResponderEnd,
        onResponderGrant: onResponderGrant,
        onResponderReject: onResponderReject,
        onResponderMove: onResponderMove,
        onResponderRelease: onResponderRelease,
        onResponderStart: onResponderStart,
        onResponderTerminationRequest: onResponderTerminationRequest,
        onResponderTerminate: onResponderTerminate,
        onStartShouldSetResponderCapture: onStartShouldSetResponderCapture,
        onMoveShouldSetResponderCapture: onMoveShouldSetResponderCapture,
        onTouchStart: onTouchStart,
        onTouchMove: onTouchMove,
        onTouchEnd: onTouchEnd,
        onTouchCancel: onTouchCancel,
        onTouchEndCapture: onTouchEndCapture,
        accessibilityElementsHidden: accessibilityElementsHidden,
        accessibilityLabelledBy: accessibilityLabelledBy,
        accessibilityIgnoresInvertColors: accessibilityIgnoresInvertColors,
        accessibilityLanguage: accessibilityLanguage,
        accessibilityLargeContentTitle: accessibilityLargeContentTitle,
        accessibilityLiveRegion: accessibilityLiveRegion,
        accessibilityRespondsToUserInteraction: accessibilityRespondsToUserInteraction,
        accessibilityShowsLargeContentViewer: accessibilityShowsLargeContentViewer,
        accessibilityState: accessibilityState,
        accessibilityValue: accessibilityValue,
        importantForAccessibility: importantForAccessibility,
        collapsableChildren: collapsableChildren,
        focusable: focusable,
        hitSlop: hitSlop,
        id: id,
        nativeID: nativeID,
        isTVSelectable: isTVSelectable,
        onAccessibilityEscape: onAccessibilityEscape,
        onBlur: onBlur,
        onAccessibilityTap: onAccessibilityTap,
        onFocus: onFocus,
        onLayout: onLayout,
        onMagicTap: onMagicTap,
        onPointerCancel: onPointerCancel,
        onPointerCancelCapture: onPointerCancelCapture,
        onPointerDown: onPointerDown,
        onPointerEnter: onPointerEnter,
        onPointerDownCapture: onPointerDownCapture,
        onPointerEnterCapture: onPointerEnterCapture,
        onPointerLeave: onPointerLeave,
        onPointerLeaveCapture: onPointerLeaveCapture,
        onPointerMove: onPointerMove,
        onPointerMoveCapture: onPointerMoveCapture,
        onPointerUp: onPointerUp,
        pointerEvents: pointerEvents,
        onPointerUpCapture: onPointerUpCapture,
        removeClippedSubviews: removeClippedSubviews,
        role: role,
        tabIndex: tabIndex,
        screenReaderFocusable: screenReaderFocusable,
        testID: testID,
        tvParallaxMagnification: tvParallaxMagnification,
        tvParallaxShiftDistanceX: tvParallaxShiftDistanceX,
        tvParallaxTiltAngle: tvParallaxTiltAngle,
        tvParallaxShiftDistanceY: tvParallaxShiftDistanceY
    };
    var passedStyle = clean(styleProps);
    var paneProps = clean(viewProps);
    return (react_1.default.createElement(react_native_1.View, __assign({ style: [passedStyle, style] }, paneProps), children));
};
exports.default = View;
