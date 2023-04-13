jQuery(document).ready(function($) {

  const PUZZLE_HOVER_TINT = '#009900';

  var _stage;
  var _canvas;
  var _img;
  var _pieces;
  var _puzzleWidth;
  var _puzzleHeight;
  var _pieceWidth;
  var _pieceHeight;
  var _currentPiece;
  var _currentDropPiece;
  var _mouse;

  var eventsMap = {
    select: "click",
    down: "mousedown",
    up: "mouseup",
    move: "mousemove"
  };
  var touchSupported = false;

  if (Modernizr.touch) {
    touchSupported = true;
    eventsMap = {
      select: "touchstart",
      down: "touchstart",
      up: "touchend",
      move: "touchmove"
    };
  }

  // game
  var timeout;
  var totalTime;
  var puzzleLevel;
  var level = document.querySelector('.level');
  var playButton = document.querySelector('#play');
  var stopButton = document.querySelector('#stop');
  var legend = document.querySelector('.legend');
  var clock = document.querySelector('.timer');

  level.innerText = 'Normal';
  playButton.style.display = 'inline-block';
  stopButton.style.display = 'none';
  legend.innerText = 'Upload your picture or/and push play to start the game!';

  $('.level').on('click touchend', function() {
       return false
   }, false);

  var game = {
    LEVEL: 5,
    TOTAL_SECONDS: 60,
    secondsLeft: -1,
    isStarted: false,
    isPlaying: false,
    renderTime: function(sec) {
      clock.innerText = (sec > 0 && sec || 0).toString();
    },
    reset: function() {
      this.renderTime(0);
      this.isStarted = false;
      this.isPlaying = false;
      stopButton.style.display = 'none';
      playButton.style.display = 'inline-block';
      legend.innerText = 'Upload your picture or/and push play to start the game!';
      timeout && clearInterval(timeout);
    },
    timer: function() {
      switch (this.secondsLeft--) {
        case 60:
          clock.style.color = 'LimeGreen';
          break;
        case 31:
          clock.style.color = 'DarkOrange';
          break;
        case 11:
          clock.style.color = 'Red';
          break;
        default:
          break;
      }
      if (this.secondsLeft < 0) {
        timeout && clearInterval(timeout);
        gameOver();
      } else {
        this.renderTime(this.secondsLeft);
      }
    },
    play: function() {
      legend.innerText = 'Game is started!';
      if (playButton.style.display === 'inline-block' || stopButton.style.display === 'none') {
        playButton.style.display = 'none';
        stopButton.style.display = 'inline-block';
      }

      if (this.isStarted && !this.isPlaying) {
        timeout = setInterval(this.timer.bind(this), 1000);
        this.isPlaying = true;
      } else {
        // new game
        this.isStarted = true;
        this.isPlaying = true;
        this.secondsLeft = this.TOTAL_SECONDS;
        // Time for game
        timeout = setInterval(this.timer.bind(this), 1000);
        clock.style.color = 'LimeGreen';
        this.renderTime(this.secondsLeft);
      }
    },
    stopOrPause: function(e) {
      this.isPlaying = false;
      legend.innerText = 'Game is paused!';
      playButton.style.display = 'inline-block';
      stopButton.style.display = 'none';
      timeout && clearInterval(timeout);
    },
    reload: function(e) {
      this.renderTime(0);
      this.isStarted = false;
      this.isPlaying = false;
      initPuzzle();
      legend.innerText = 'Game is reloaded. Upload your picture or/and push play to start the game!';
      playButton.style.display = 'inline-block';
      stopButton.style.display = 'none';
      timeout && clearInterval(timeout);
    },
    selectLevel: function (_level, evt) {
      evt.preventDefault();
      level.innerText = _level;
      switch (_level) {
        case 'Easy': {
          this.LEVEL = 4;
          this.TOTAL_SECONDS = 30;
          break;
        }
        case 'Normal': {
          this.LEVEL = 5;
          this.TOTAL_SECONDS = 60;
          break;
        }
        case 'Hard': {
          this.LEVEL = 6;
          this.TOTAL_SECONDS = 90;
          break;
        }
        default:
          break;
      }
      //onImage(evt);
    }
  }

  $('#easy').on('click touchend', game.selectLevel.bind(game, 'Easy'));
  $('#normal').on('click touchend', game.selectLevel.bind(game, 'Normal'));
  $('#hard').on('click touchend', game.selectLevel.bind(game, 'Hard'));

  game.reset();
  // end game

  var imageLoader = document.getElementById('imageLoader');
  imageLoader.addEventListener('change', init, false);

  function init(img) {
    $('.legend').innerText = 'Picture is uploaded. Push play to start the game!';
    var reader = new FileReader();
    reader.onload = function(event) {
      _img = new Image();
      _img.addEventListener('load', onImage, false);
      _img.src = event.target.result;
    }
    reader.readAsDataURL(img.target.files[0]);
  }

  function onImage(e) {
    _pieceWidth = Math.floor(_img.width / game.LEVEL)
    _pieceHeight = Math.floor(_img.height / game.LEVEL)
    _puzzleWidth = _pieceWidth * game.LEVEL;
    _puzzleHeight = _pieceHeight * game.LEVEL;
    game.reset();
    setCanvas();
    initPuzzle();
  }

  function setCanvas() {
    _canvas = $('#canvas');
    _stage = _canvas[0].getContext('2d'); // _stage = ctx
    _canvas[0].width = _puzzleWidth;
    _canvas[0].height = _puzzleHeight;
  }

  function initPuzzle() {
    _pieces = [];
    _mouse = {
      x: 0,
      y: 0
    };
    _currentPiece = null;
    _currentDropPiece = null;
    _stage.drawImage(_img, 0, 0, _puzzleWidth, _puzzleHeight, 0, 0, _puzzleWidth, _puzzleHeight);
    $('body').removeClass('loading');
    buildPieces();
  }

  function buildPieces() {
    var i;
    var piece;
    var xPos = 0;
    var yPos = 0;

    for (i = 0; i < game.LEVEL * game.LEVEL; i++) {
      piece = {};
      piece.sx = xPos;
      piece.sy = yPos;
      _pieces.push(piece);
      xPos += _pieceWidth;
      if (xPos >= _puzzleWidth) {
        xPos = 0;
        yPos += _pieceHeight;
      }
    }
  }

  $('#play').on('click touchend', function(e) {
    e.preventDefault();
    if (Modernizr.touch && Modernizr.mq('(min-width: 950px) and (orientation: landscape)')) {
      goFullScreen();
    }!game.isStarted && shufflePuzzle();
    game.play();
  });

  $('#stop').on('click touchend', game.stopOrPause.bind(game));
  $('#reload').on('click touchend', game.reload.bind(game));

  function shufflePuzzle() {
    var _pieces_original = [].concat(_pieces); // Тут получаем координаты перемещения пазлов для использования их в анимации
    _pieces = shuffleArray(_pieces);

    _stage.clearRect(0, 0, _puzzleWidth, _puzzleHeight);
    var i;
    var piece;
    var xPos = 0;
    var yPos = 0;
    for (i = 0; i < _pieces.length; i++) {console.log('process piece : ', piece); // Тут выводим полученные координаты
      piece = _pieces[i];
      piece.xPos = xPos;
      piece.yPos = yPos;
      ///////////////////////////////////////////////////////////
      // TODO Тут должна быть анимация пазлов
      //_stage.animate({_stage.translate(xPos, yPos)}, 2000);
      ///////////////////////////////////////////////////////////
      _stage.drawImage(_img, piece.sx, piece.sy, _pieceWidth, _pieceHeight, xPos, yPos, _pieceWidth, _pieceHeight);
      //_stage.strokeRect(xPos, yPos, _pieceWidth, _pieceHeight);
      xPos += _pieceWidth;
      if (xPos >= _puzzleWidth) {
        xPos = 0;
        yPos += _pieceHeight;
      }
    }

    if (!touchSupported) {
      $('#canvas').on('mousedown', onPuzzleClick);
    } else {
      $('#canvas').on('touchstart', function(e) {
        var e = e.originalEvent;
        e.preventDefault();
        onPuzzleClick(e);
      });
    }
  }

  function onPuzzleClick(e) {
    // alert(e);

    // если игра начата и на паузе - игнорировать этот ивент
    if (game.isStarted && !game.isPlaying) {
      return;
    }

    if (!Modernizr.touch) {
      _mouse.x = e.pageX - _canvas.offset().left;
      _mouse.y = e.pageY - _canvas.offset().top;
    } else {
      _mouse.x = e.touches[0].pageX - _canvas.offset().left;
      _mouse.y = e.touches[0].pageY - _canvas.offset().top;
    }

    // alert("x "+_mouse.x+" y: "+_mouse.y);
    _currentPiece = checkPieceClicked();
    if (_currentPiece != null) {
      _stage.clearRect(_currentPiece.xPos, _currentPiece.yPos, _pieceWidth, _pieceHeight);
      _stage.save();
      _stage.globalAlpha = .9;
      _stage.drawImage(_img, _currentPiece.sx, _currentPiece.sy, _pieceWidth, _pieceHeight, _mouse.x - (_pieceWidth / 2), _mouse.y - (_pieceHeight / 2), _pieceWidth, _pieceHeight);
      _stage.restore();

      if (!touchSupported) {
        document.onmousemove = updatePuzzle;
        document.onmouseup = pieceDropped;
      } else {
        $('#canvas').bind('touchmove', function(e) {
          var e = e.originalEvent;
          updatePuzzle(e);
        });

        $('#canvas').bind('touchend', function(ev) {
          var e = ev.originalEvent;
          pieceDropped(e);
        });
      }
    }
  }

  function checkPieceClicked() {
    var i;
    var piece;
    for (i = 0; i < _pieces.length; i++) {
      piece = _pieces[i];
      if (_mouse.x < piece.xPos || _mouse.x > (piece.xPos + _pieceWidth) || _mouse.y < piece.yPos || _mouse.y > (piece.yPos + _pieceHeight)) {} else {
        return piece;
      }
    }
    return null;
  }

  function updatePuzzle(e) {

    e.preventDefault();
    e.stopPropagation();

    _currentDropPiece = null;

    if (!Modernizr.touch) {
      _mouse.x = e.pageX - _canvas.offset().left;
      _mouse.y = e.pageY - _canvas.offset().top;
    } else {
      _mouse.x = e.touches[0].pageX - _canvas.offset().left;
      _mouse.y = e.touches[0].pageY - _canvas.offset().top;
    }

    _stage.clearRect(0, 0, _puzzleWidth, _puzzleHeight);
    var i;
    var piece;
    for (i = 0; i < _pieces.length; i++) {
      piece = _pieces[i];
      if (piece == _currentPiece) {
        continue;
      }
      _stage.drawImage(_img, piece.sx, piece.sy, _pieceWidth, _pieceHeight, piece.xPos, piece.yPos, _pieceWidth, _pieceHeight);
      //_stage.strokeRect(piece.xPos, piece.yPos, _pieceWidth, _pieceHeight);
      if (_currentDropPiece == null) {
        if (_mouse.x < piece.xPos || _mouse.x > (piece.xPos + _pieceWidth) || _mouse.y < piece.yPos || _mouse.y > (piece.yPos + _pieceHeight)) {} else {
          _currentDropPiece = piece;
          _stage.save();
          _stage.globalAlpha = .4;
          _stage.fillStyle = PUZZLE_HOVER_TINT;
          _stage.fillRect(_currentDropPiece.xPos, _currentDropPiece.yPos, _pieceWidth, _pieceHeight);
          _stage.restore();
        }
      }
    }
    _stage.save();
    _stage.globalAlpha = .6;
    _stage.drawImage(_img, _currentPiece.sx, _currentPiece.sy, _pieceWidth, _pieceHeight, _mouse.x - (_pieceWidth / 2), _mouse.y - (_pieceHeight / 2), _pieceWidth, _pieceHeight);
    _stage.restore();
    _stage.strokeRect(_mouse.x - (_pieceWidth / 2), _mouse.y - (_pieceHeight / 2), _pieceWidth, _pieceHeight);
  }

  function pieceDropped(e) {
    if (!touchSupported) {
      document.onmousemove = null;
      document.onmouseup = null;
    } else {
      $('#canvas').unbind('touchend');
    }

    if (_currentDropPiece != null) {
      var tmp = {
        xPos: _currentPiece.xPos,
        yPos: _currentPiece.yPos
      };
      _currentPiece.xPos = _currentDropPiece.xPos;
      _currentPiece.yPos = _currentDropPiece.yPos;
      _currentDropPiece.xPos = tmp.xPos;
      _currentDropPiece.yPos = tmp.yPos;
    }
    resetPuzzleAndCheckWin();
  }

  function resetPuzzleAndCheckWin() {
    _stage.clearRect(0, 0, _puzzleWidth, _puzzleHeight);

    var gameWin = true;
    var i;
    var piece;
    for (i = 0; i < _pieces.length; i++) {
      piece = _pieces[i];
      _stage.drawImage(_img, piece.sx, piece.sy, _pieceWidth, _pieceHeight, piece.xPos, piece.yPos, _pieceWidth, _pieceHeight);
      //_stage.strokeRect(piece.xPos, piece.yPos, _pieceWidth, _pieceHeight);
      if (piece.xPos != piece.sx || piece.yPos != piece.sy) {
        gameWin = false;
      }
    }
    if (gameWin) {
      setTimeout(gameOver, 2500);
      legend.innerText = 'You Win!';
      playButton.style.display = 'inline-block';
      stopButton.style.display = 'none';
      clearInterval(timeout);
    }
  }

  function gameOver() {
    document.onmousedown = null;
    document.onmousemove = null;
    document.onmouseup = null;
    $('#canvas').unbind();
    initPuzzle();
    if (game.secondsLeft <= 0) {
      legend.innerText = 'Try Again!';
      playButton.style.display = 'inline-block';
      stopButton.style.display = 'none';
    }
    game.isStarted = false;
    game.isPlaying = false;
  }

  function loadDefaultImage() {
    _img = new Image();
    _img.addEventListener('load', onImage, false);
    _img.src = '../img/g01.png';
    _img.addEventListener('error', function(evt) {
      alert('Error loading image');
    })
  }

  function shuffleArray(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

  loadDefaultImage();
});
