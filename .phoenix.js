Key.on('f', [ 'cmd', 'alt' ], function () {
  var focused = Window.focused();

  if(focused){
    focused.maximize();
  }
});


function resizeAndCentre(widthRatio, heightRatio){
  var focused = Window.focused();

  if(focused){
    var size;
    var screen = Screen.main().frame();

    size = {
      width: screen.width * widthRatio,
      height: screen.height * heightRatio,
    };

    focused.setTopLeft({
      x: screen.width / 2 - size.width / 2,
      y: screen.height / 2 - size.height / 2
    });

    focused.setSize(size);
  }
}

Key.on('m', [ 'cmd', 'alt' ], function(){
  var widthRatio = 0.5;
  var heightRatio = 0.48;

  resizeAndCentre(widthRatio, heightRatio);
});

Key.on('c', [ 'cmd', 'alt' ], function(){
  var widthRatio = 0.55;
  var heightRatio = 0.6;

  resizeAndCentre(widthRatio, heightRatio);
});

Key.on('k', [ 'cmd', 'alt' ], function(){
  var widthRatio = 0.6;
  var heightRatio = 0.65;

  resizeAndCentre(widthRatio, heightRatio);
});

Key.on('l', [ 'cmd', 'alt' ], function () {
  var widthRatio = 0.70;
  var heightRatio = 0.65;

  resizeAndCentre(widthRatio, heightRatio);
});

Key.on('j', [ 'cmd', 'shift' ], function () {
    var app = App.focused();
    var allWindows = app.windows();
    var newWindowToFocus = allWindows[allWindows.length - 1];

    if(newWindowToFocus.isMinimised()){
      newWindowToFocus.unminimise();
    }

    newWindowToFocus.focus();
  }
);

Key.on('k', [ 'cmd', 'shift' ], function () {
    var app = App.focused();
    var allWindows = app.windows();
    var newWindowToFocus = allWindows[2];

    if(newWindowToFocus){
      if(newWindowToFocus.isMinimised()){
        newWindowToFocus.unminimise();
      }

      newWindowToFocus.focus();
    }
  }
);
