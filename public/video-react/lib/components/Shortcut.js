'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _dom = require('../utils/dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  manager: _propTypes2.default.object,
  actions: _propTypes2.default.object,
  player: _propTypes2.default.object,
  shortcuts: _propTypes2.default.array
};

var Shortcut = function (_Component) {
  _inherits(Shortcut, _Component);

  function Shortcut(props, context) {
    _classCallCheck(this, Shortcut);

    var _this = _possibleConstructorReturn(this, (Shortcut.__proto__ || Object.getPrototypeOf(Shortcut)).call(this, props, context));

    _this.defaultShortcuts = [{
      keyCode: 32, // spacebar
      handle: _this.togglePlay
    }, {
      keyCode: 75, // k
      handle: _this.togglePlay
    }, {
      keyCode: 70, // f
      handle: _this.toggleFullscreen
    }, {
      keyCode: 37, // Left arrow
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        actions.replay(5, {
          action: 'replay-5',
          source: 'shortcut'
        }); // Go back 5 seconds
      }
    }, {
      keyCode: 74, // j
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        actions.replay(10, {
          action: 'replay-10',
          source: 'shortcut'
        }); // Go back 10 seconds
      }
    }, {
      keyCode: 39, // Right arrow
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        actions.forward(5, {
          action: 'forward-5',
          source: 'shortcut'
        }); // Go forward 5 seconds
      }
    }, {
      keyCode: 76, // l
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        actions.forward(10, {
          action: 'forward-10',
          source: 'shortcut'
        }); // Go forward 10 seconds
      }
    }, {
      keyCode: 36, // Home
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        actions.seek(0); // Go to beginning of video
      }
    }, {
      keyCode: 35, // End
      handle: function handle(player, actions) {
        if (!player.hasStarted) {
          return;
        }
        // Go to end of video
        actions.seek(player.duration);
      }
    }, {
      keyCode: 38, // Up arrow
      handle: function handle(player, actions) {
        // Increase volume 5%
        var v = player.volume + 0.05;
        if (v > 1) {
          v = 1;
        }
        actions.changeVolume(v, {
          action: 'volume-up',
          source: 'shortcut'
        });
      }
    }, {
      keyCode: 40, // Down arrow
      handle: function handle(player, actions) {
        // Decrease volume 5%
        var v = player.volume - 0.05;
        if (v < 0) {
          v = 0;
        }
        var action = v > 0 ? 'volume-down' : 'volume-off';
        actions.changeVolume(v, {
          action: action,
          source: 'shortcut'
        });
      }
    }, {
      keyCode: 190, // Shift + >
      shift: true,
      handle: function handle(player, actions) {
        // Increase speed
        var playbackRate = player.playbackRate;
        if (playbackRate >= 1.5) {
          playbackRate = 2;
        } else if (playbackRate >= 1.25) {
          playbackRate = 1.5;
        } else if (playbackRate >= 1.0) {
          playbackRate = 1.25;
        } else if (playbackRate >= 0.5) {
          playbackRate = 1.0;
        } else if (playbackRate >= 0.25) {
          playbackRate = 0.5;
        } else if (playbackRate >= 0) {
          playbackRate = 0.25;
        }
        actions.changeRate(playbackRate, {
          action: 'fast-forward',
          source: 'shortcut'
        });
      }
    }, {
      keyCode: 188, // Shift + <
      shift: true,
      handle: function handle(player, actions) {
        // Decrease speed
        var playbackRate = player.playbackRate;
        if (playbackRate <= 0.5) {
          playbackRate = 0.25;
        } else if (playbackRate <= 1.0) {
          playbackRate = 0.5;
        } else if (playbackRate <= 1.25) {
          playbackRate = 1.0;
        } else if (playbackRate <= 1.5) {
          playbackRate = 1.25;
        } else if (playbackRate <= 2) {
          playbackRate = 1.5;
        }
        actions.changeRate(playbackRate, {
          action: 'fast-rewind',
          source: 'shortcut'
        });
      }
    }];

    _this.shortcuts = [].concat(_toConsumableArray(_this.defaultShortcuts));

    _this.mergeShortcuts = _this.mergeShortcuts.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleDoubleClick = _this.handleDoubleClick.bind(_this);
    return _this;
  }

  _createClass(Shortcut, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mergeShortcuts();
      document.addEventListener('keydown', this.handleKeyPress);
      document.addEventListener('click', this.handleClick);
      document.addEventListener('dblclick', this.handleDoubleClick);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.shortcuts !== this.props.shortcuts) {
        this.mergeShortcuts();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }

    // merge the shortcuts from props

  }, {
    key: 'mergeShortcuts',
    value: function mergeShortcuts() {
      var gradeShortcut = function gradeShortcut(s) {
        var score = 0;
        var ps = ['ctrl', 'shift', 'alt'];
        ps.forEach(function (key) {
          if (s[key]) {
            score++;
          }
        });
        return score;
      };

      var shortcuts = (this.props.shortcuts || []).filter(function (s) {
        return s.keyCode && s.handle && typeof s.handle === 'function';
      });

      this.shortcuts = [].concat(_toConsumableArray(shortcuts), _toConsumableArray(this.defaultShortcuts)).sort(function (a, b) {
        return gradeShortcut(b) - gradeShortcut(a);
      });
    }
  }, {
    key: 'togglePlay',
    value: function togglePlay(player, actions) {
      if (player.paused) {
        actions.play({
          action: 'play',
          source: 'shortcut'
        });
      } else {
        actions.pause({
          action: 'pause',
          source: 'shortcut'
        });
      }
    }
  }, {
    key: 'toggleFullscreen',
    value: function toggleFullscreen(player, actions) {
      actions.toggleFullscreen(player);
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {
      var _props = this.props,
          player = _props.player,
          actions = _props.actions;

      if (!player.isActive) {
        return;
      }
      if (document.activeElement && ((0, _dom.hasClass)(document.activeElement, 'video-react-control') || (0, _dom.hasClass)(document.activeElement, 'video-react-menu-button-active'
      // || hasClass(document.activeElement, 'video-react-slider')
      ) || (0, _dom.hasClass)(document.activeElement, 'video-react-big-play-button'))) {
        return;
      }

      var keyCode = e.keyCode || e.which;
      var ctrl = e.ctrlKey || e.metaKey;
      var shift = e.shiftKey;
      var alt = e.altKey;

      var shortcut = this.shortcuts.find(function (s) {
        if (!s.keyCode || s.keyCode - keyCode !== 0) {
          return false;
        }
        if (s.ctrl !== undefined && s.ctrl !== ctrl || s.shift !== undefined && s.shift !== shift || s.alt !== undefined && s.alt !== alt) {
          return false;
        }
        return true;
      });

      if (shortcut) {
        shortcut.handle(player, actions);
        e.preventDefault();
      }
    }

    // only if player is active and player is ready

  }, {
    key: 'canBeClicked',
    value: function canBeClicked(player, e) {
      if (!player.isActive || e.target.nodeName !== 'VIDEO' || player.readyState !== 4) {
        return false;
      }
      return true;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _props2 = this.props,
          player = _props2.player,
          actions = _props2.actions;

      if (!this.canBeClicked(player, e)) {
        return;
      }
      this.togglePlay(player, actions);
      // e.preventDefault();
    }
  }, {
    key: 'handleDoubleClick',
    value: function handleDoubleClick(e) {
      var _props3 = this.props,
          player = _props3.player,
          actions = _props3.actions;

      if (!this.canBeClicked(player, e)) {
        return;
      }
      this.toggleFullscreen(player, actions);
      // e.preventDefault();
    }

    // this component dose not render anything
    // it's just for the key down event

  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Shortcut;
}(_react.Component);

exports.default = Shortcut;


Shortcut.propTypes = propTypes;