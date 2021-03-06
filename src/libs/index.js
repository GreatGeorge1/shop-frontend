var _images;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';

var ImageSliderPreLoader = function () {
  var loadedUrl = {};
  var loadQueue = [];
  var loaderCount = 3;
  var loaderPool = new Array(loaderCount).fill(0).map(function () {
    return new Image();
  });
  return {
    load: function load(url) {
      if (!url || loadedUrl[url]) {
        return;
      }

      if (loaderPool.length === 0) {
        loadQueue.push(url);
      } else {
        var imageLoader = loaderPool.shift();
        imageLoader.src = url;

        imageLoader.onload = function () {
          loadedUrl[url] = true;

          if (loadQueue.length > 0) {
            imageLoader.src = loadQueue.shift();
          } else {
            loaderPool.push(imageLoader);
          }
        };
      }
    }
  };
}();

var basic = {
  display: "block",
  margin: "0",
  padding: "0",
  border: "0"
};
var basicRootContainer = {
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%"
};
var basicSlide = {
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  backgroundSize: "cover"
};
var basicNav = {
  position: "absolute",
  top: "50%",
  cursor: "pointer",
  outline: "none",
  background: "none"
};
var bulletContainer = {
  position: "absolute",
  left: "10%",
  bottom: "15px"
};
var bulletSize = 15;
var bulletMargin = 3;
var basicBullet = {
  display: "inline-block",
  cursor: "pointer",
  outline: "none",
  background: "none",
  boxShadow: "1px 1px 1px 0px #1a1a1a",
  borderRadius: "50%",
  border: "1px solid #FFFFFF",
  width: "".concat(bulletSize, "px"),
  height: "".concat(bulletSize, "px"),
  marginLeft: "".concat(bulletMargin, "px"),
  marginRight: "".concat(bulletMargin, "px")
};
var styles = {
  ImageSlider: _objectSpread(_objectSpread({}, basic), basicRootContainer),
  ImageSlideCurrent: _objectSpread(_objectSpread({}, basicSlide), {}, {
    overflow: "hidden"
  }),
  ImageSlideNext: _objectSpread(_objectSpread({}, basicSlide), {}, {
    overflow: "hidden"
  }),
  NavLeft: _objectSpread(_objectSpread(_objectSpread({}, basic), basicNav), {}, {
    left: "30px",
    marginTop: "-25px"
  }),
  NavRight: _objectSpread(_objectSpread(_objectSpread({}, basic), basicNav), {}, {
    right: "30px",
    marginTop: "-25px"
  }),
  BulletNormal: _objectSpread(_objectSpread({}, basic), basicBullet),
  BulletActive: _objectSpread(_objectSpread(_objectSpread({}, basic), basicBullet), {}, {
    background: "#FFF"
  }),
  getRootContainer: function getRootContainer(width, height, backgroundColor) {
    return _objectSpread(_objectSpread({}, basic), {}, {
      overflow: "hidden",
      width: width,
      height: height,
      backgroundColor: backgroundColor
    });
  },
  getSubContainer: function getSubContainer(width, height) {
    return _objectSpread(_objectSpread({}, basic), {}, {
      position: "absolute",
      overflow: "hidden",
      width: width,
      height: height
    });
  },
  getBulletContainer: function getBulletContainer(bulletLength) {
    return _objectSpread(_objectSpread(_objectSpread({}, basic), bulletContainer), {}, {
      marginLeft: "-".concat(bulletLength * (bulletSize + bulletMargin * 2) / 2, "px")
    });
  },
  getImageSlide: function getImageSlide(url, duration, idx, isGpuRender) {
    return _objectSpread(_objectSpread({}, basicSlide), {}, {
      overflow: "hidden",
      transition: "".concat(duration, "s"),
      backgroundImage: "url(".concat(url, ")"),
      transform: isGpuRender ? "translate3d(".concat(idx * 100, "%, 0px, 0px)") : "translate(".concat(idx * 100, "%, 0px)")
    });
  }
};
var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAABQklEQVRYhe3VsUoDQRAG4H/B4yBeIIUoNgkWQipTiD5BLO19AckbpAkIKWKl5BV8AYuUQtL5EIYrLGySM50iKULGQq7Q290r7p9Y5G7LW/hYZv4ZCPTPBogSKZF/RHL/m0UTJvdWEQTBW19W02vsqCEI4lsRWY/vUVVCfoi1DJ/QVkJS4m6CKzQQKCB/CYXCZwk6YiPISLYWdMRWbjJi7ygq4mpaIuLOBQ3xRY+E+NNNQfIGCAMJ4oF/RhGQg/3kReRjedHFkX0MMl5yeNyZvot8Jg+nMFrILs7qN/Fc5Gs2OrExDMQgwrmP4XRXDsPKiZfhJT5lkizDnF1OhjuFHQx7n1gZ/ma0MBo7PsMoIC6GjNgZOuLPDQ35zbw+oqKCpEyjN3reu0StIOL5DCK00EYToR4CGISoIixYeM4pkS1FvgHo6Qgr01CvgAAAAABJRU5ErkJggg==";
var img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAABg0lEQVRYhe3WvUoDQRAH8DlELkSNIipYaREbC1EPQYgRbQS1sfAFfAZBX0H86MQmYG0dNdaCYpHG2k6TiCRY5EMsROLtnUv2vN2LeP/VwptpZ/mxy+zuUJP05y8QERIhf4S4EbjYKCfJ+EbdzxEyK0fvtfwydWhDyCxkmna8Na5XGaMB4QSL+r01oAERieeXtS0aJgOMiETldeGQ5ikB3omPWKR+1mFAREUAETUBQ4IIECIneBUEURFARE3AkCAChAQTGKQNAUBGY8XjYCI8YmyOVx85cnMXX/ETAIRGZrcLVc485FI9ikMNhSQoNbFbrHHmKbvUhUYY09uOQXSXnzn1Mph74jCTAlP2MKgbz5g5m6nLGNzb5TJ7MgaGcGZqX2DOXAaISJlzxkCRFlPyMGBEyuQ4A0M+mbQlMhcuA0Qcps9mDkqNFmPF4WPqV+YqS0M6ZmGBObmldRrUM9U7zMxO5pI2aIzMsG+XKhgzbf+VSUboQhgTo27qDNXCuIyQf4p8AIChAHbSxD08AAAAAElFTkSuQmCC";
var img$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAABQ0lEQVRYw+3WvWoCQRQF4LPgEhAWLESJpY15A4mNbdoUgkWKPIWF2NmKFiEWeYBsI+YhQl4gCQGfwEII/oGVXn9IBOPc2cIzTdyZduFj9t57ZiBwvxEjMfKvEaAWzNv9DDz9i+06DbkYhiKzj4ecxjCQVOX+eywy/dQYBpJEsdQazXSGgXhIoXzd1hkGEslQkKjTkBA7Q0NsDBHRGSqiMWTkkJn8MHTExDhANIaMmBk6Yq4NHdkznflCZPxeCJwgOybTe1qJyMszLl0h/ldDNsbjG26RdvO7/EF9S3RfcYc8fBeF/0O4aOEjgj+MBoIdK0e14AekodzsqDd2FPfSUpqWef2qc8F7SFhGj/Uksk4353EXESAMJDKjGEgQNpcrWwxSEJRvmqjqSctAEsjiCrnfjNLWqYX3NpAHOEQ4O0bOFFkD6w4BsXFPGt0AAAAASUVORK5CYII=";
var img$3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAABf0lEQVRYw+3Wv0vDQBQH8BeCpDqJQqS4COJvRxc3Bwf/AyE41bUOzo79IwRXHUpxdbH+BjcnNwdtTN3qIGosdDlzqdc77d0J9euieQdZcvAhee/eO2L0+4syJEP+MMIjefa9bF2Nk2PeQx87e0bIq+8w1owqs3oGgaQEj/hBzwAQf+TmkjEbg/gSvz84v+sw9W4GgeRo3ts4rUmmPPOZwSQ+ZU4UZn9aZSAI62YilQEhgjnWMjAkZea84pEsgagy1WaAiJmBIhrmnjNgpMPcSmZXYUCIYKpaBobYGCAimEPJhO3cQBHBXISy0rbHTPOmZyR5M1BcfXoWyFk1h0fIOVh4exRE+ZoCyoMRTjQbCrFOk+Rhq+srUaAJTiDPiZHAnXgLgepdVgLThbUEdp4YCORkNBK4GW8hULcVK4FBviEgyOLQa2gjEIhD+c1S3DITmN81SMvBXtwyERjEJZ9Wlkq0pidQ1eXScNLKR9UGoo+fIDwzrnq/AiOolSH/FHkHtYX8nGW/BYIAAAAASUVORK5CYII=";
var ImageSliderNavStyle;

(function (ImageSliderNavStyle) {
  ImageSliderNavStyle[ImageSliderNavStyle["NORMAL"] = 1] = "NORMAL";
  ImageSliderNavStyle[ImageSliderNavStyle["BOLD"] = 2] = "BOLD";
})(ImageSliderNavStyle || (ImageSliderNavStyle = {}));

var ImageSliderNavDirection;

(function (ImageSliderNavDirection) {
  ImageSliderNavDirection["LEFT"] = "left";
  ImageSliderNavDirection["RIGHT"] = "right";
})(ImageSliderNavDirection || (ImageSliderNavDirection = {}));

var altNavArrowLeft = "slide to left";
var altNavArrowRight = "slide to right";
var images = (_images = {}, _defineProperty(_images, "image-".concat(ImageSliderNavDirection.LEFT, "-").concat(ImageSliderNavStyle.NORMAL), img), _defineProperty(_images, "image-".concat(ImageSliderNavDirection.RIGHT, "-").concat(ImageSliderNavStyle.NORMAL), img$2), _defineProperty(_images, "image-".concat(ImageSliderNavDirection.LEFT, "-").concat(ImageSliderNavStyle.BOLD), img$1), _defineProperty(_images, "image-".concat(ImageSliderNavDirection.RIGHT, "-").concat(ImageSliderNavStyle.BOLD), img$3), _images);

var ImageSliderNavigation = function ImageSliderNavigation(props) {
  return React.createElement("button", {
    type: "button",
    style: props.direction === ImageSliderNavDirection.LEFT ? styles.NavLeft : styles.NavRight,
    onClick: props.onClickNav(props.direction)
  }, React.createElement("img", {
    src: images["image-".concat(props.direction, "-").concat(props.navStyle)],
    alt: props.direction === ImageSliderNavDirection.LEFT ? altNavArrowLeft : altNavArrowRight
  }));
};

var SimpleImageSlider = function SimpleImageSlider(_ref) {
  var width = _ref.width,
      height = _ref.height,
      images = _ref.images,
      showNavs = _ref.showNavs,
      showBullets = _ref.showBullets,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? undefined : _ref$style,
      _ref$slideDuration = _ref.slideDuration,
      slideDuration = _ref$slideDuration === void 0 ? 0.5 : _ref$slideDuration,
      _ref$bgColor = _ref.bgColor,
      bgColor = _ref$bgColor === void 0 ? '#000' : _ref$bgColor,
      _ref$useGPURender = _ref.useGPURender,
      useGPURender = _ref$useGPURender === void 0 ? true : _ref$useGPURender,
      _ref$navStyle = _ref.navStyle,
      navStyle = _ref$navStyle === void 0 ? ImageSliderNavStyle.NORMAL : _ref$navStyle,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? undefined : _ref$onClick,
      _ref$onClickNav = _ref.onClickNav,
      onClickNav = _ref$onClickNav === void 0 ? undefined : _ref$onClickNav,
      _ref$onClickBullets = _ref.onClickBullets,
      onClickBullets = _ref$onClickBullets === void 0 ? undefined : _ref$onClickBullets,
      _ref$onStartSlide = _ref.onStartSlide,
      onStartSlide = _ref$onStartSlide === void 0 ? undefined : _ref$onStartSlide,
      _ref$onCompleteSlide = _ref.onCompleteSlide,
      onCompleteSlide = _ref$onCompleteSlide === void 0 ? undefined : _ref$onCompleteSlide;
  var rootStyle = React.useMemo(function () {
    return styles.getRootContainer(width, height, bgColor);
  }, [width, height, bgColor]);

  var _React$useState = React.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      slideIdx = _React$useState2[0],
      setSlideIdx = _React$useState2[1];

  var _React$useState3 = React.useState(ImageSliderNavDirection.RIGHT),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      slideDirection = _React$useState4[0],
      setSlideDirection = _React$useState4[1];

  var _React$useState5 = React.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      isSliding = _React$useState6[0],
      setIsSliding = _React$useState6[1];

  var _React$useState7 = React.useState(styles.getImageSlide(images[0].url, slideDuration, 0, useGPURender)),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      currentSliderStyle = _React$useState8[0],
      setCurrentSlideStyle = _React$useState8[1];

  var _React$useState9 = React.useState(styles.getImageSlide(images[1].url, slideDuration, 1, useGPURender)),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      nextSliderStyle = _React$useState10[0],
      setNextSliderStyle = _React$useState10[1];

  var handleClick = React.useCallback(function (event) {
    onClick && onClick(slideIdx, event);
  }, [slideIdx]);
  var handleClickNav = React.useCallback(function (direction) {
    return function () {
      if (isSliding) {
        return;
      }

      onClickNav && onClickNav(true);
      slide(direction === ImageSliderNavDirection.RIGHT ? slideIdx + 1 : slideIdx - 1);
    };
  }, [slideIdx, isSliding]);
  var handleClickBullets = React.useCallback(function (idx) {
    return function () {
      console.log(idx, slideIdx, isSliding);

      if (idx === slideIdx || isSliding) {
        return;
      }

      onClickBullets && onClickBullets(idx);
      slide(idx);
    };
  }, [slideIdx, isSliding]);

  var slide = function slide(idx) {
    var toNext = idx > slideIdx;
    var currentUrl = images[slideIdx].url;
    var nextUrl = images[idx].url;
    var nextReadyX = toNext ? 1 : -1;
    setSlideIdx(idx);
    setSlideDirection(idx > slideIdx ? ImageSliderNavDirection.RIGHT : ImageSliderNavDirection.LEFT);
    setCurrentSlideStyle(styles.getImageSlide(currentUrl, 0, 0, useGPURender));
    setNextSliderStyle(styles.getImageSlide(nextUrl, 0, nextReadyX, useGPURender));
    setIsSliding(true);
    onStartSlide && onStartSlide(idx + 1, images.length);
    idx + 2 < images.length && ImageSliderPreLoader.load(images[idx + 2].url);
  };

  React.useEffect(function () {
    if (isSliding) {
      setTimeout(function () {
        var toRight = slideDirection === ImageSliderNavDirection.RIGHT;
        var currentUrl = images[toRight ? slideIdx - 1 : slideIdx + 1].url;
        var nextUrl = images[slideIdx].url;
        var currentOffetX = toRight ? -1 : 1;
        setCurrentSlideStyle(styles.getImageSlide(currentUrl, slideDuration, currentOffetX, useGPURender));
        setNextSliderStyle(styles.getImageSlide(nextUrl, slideDuration, 0, useGPURender));
      }, 50);
    }
  }, [slideIdx, isSliding]);
  var handleSlideEnd = React.useCallback(function () {
    setCurrentSlideStyle(styles.getImageSlide(images[slideIdx].url, 0, 0, useGPURender));
    setIsSliding(false);
    onCompleteSlide && onCompleteSlide(slideIdx + 1, images.length);
  }, [slideIdx]);
  return React.createElement("div", {
    style: _objectSpread(_objectSpread({}, rootStyle), style)
  }, React.createElement("div", {
    style: styles.getSubContainer(width, height)
  }, React.createElement("div", {
    style: styles.ImageSlider,
    onClick: handleClick
  }, React.createElement("div", {
    style: currentSliderStyle,
    onTransitionEnd: handleSlideEnd
  }), React.createElement("div", {
    style: nextSliderStyle
  })), showNavs && images.length > 0 && slideIdx > 0 && React.createElement(ImageSliderNavigation, {
    direction: ImageSliderNavDirection.LEFT,
    navStyle: navStyle,
    onClickNav: handleClickNav
  }), showNavs && images.length > 0 && slideIdx < images.length - 1 && React.createElement(ImageSliderNavigation, {
    direction: ImageSliderNavDirection.RIGHT,
    navStyle: navStyle,
    onClickNav: handleClickNav
  }), showBullets && images.length > 0 && React.createElement("div", {
    style: styles.getBulletContainer(images.length)
  }, Array.from(Array(images.length).keys()).map(function (e) {
    return React.createElement("button", {
      key: "bullet-".concat(e),
      type: "button",
      "data-id": "bullet-".concat(e),
      style: e === slideIdx ? styles.BulletActive : styles.BulletNormal,
      onClick: handleClickBullets(e)
    });
  }))));
};

export default SimpleImageSlider;
