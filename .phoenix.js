Key.on('f', [ 'cmd', 'alt' ], function () {
  var focused = Window.focused();

  if(focused){
    focused.maximize();
  }
});

Key.on('c', [ 'cmd', 'alt' ], function () {
  var focused = Window.focused();

  if(focused){
    var size = focused.frame();
    var screen = Screen.main().frame();

    focused.setTopLeft({
      x: screen.width / 2 - size.width / 2,
      y: screen.height / 2 - size.height / 2
    });
  }
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
