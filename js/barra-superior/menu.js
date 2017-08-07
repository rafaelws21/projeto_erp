  document.write('\
  <header id="header">\
      <div id="logo-group">\
        <!-- PLACE YOUR LOGO HERE -->\
        <span id="logo"> \
            <a href="javascript:void(0);" class="btn btn-default" id="show-shortcut" data-action="toggleShortcut">\
              <i class="fa fa-reorder"></i>\
            </a>\
        </span>\
        <!-- END LOGO PLACEHOLDER -->\
      </div>\
      <!-- #SEARCH -->\
          <!-- input: search field -->\
          <form action="search.html" class="header-search pull-left">\
            <input id="search-fld" type="text" name="param" placeholder="Pesquise...">\
            <button type="submit">\
              <i class="fa fa-search"></i>\
            </button>\
            <a href="javascript:void(0);" id="cancel-search-js" title="Cancel Search"><i class="fa fa-times"></i></a>\
          </form>\
          <!-- end input: search field -->\
          <!-- projects dropdown -->\
      <div class="project-context hidden-xs">\
        <span class="label"> </span>\
        <span class="project-selector dropdown-toggle" data-toggle="dropdown">Demandas <i class="fa fa-angle-down"></i></span>\
        <ul class="dropdown-menu">\
          <li>\
            <a href="javascript:void(0);">Sistema 01</a>\
          </li>\
          <li class="divider"></li>\
          <li>\
            <a href="../pagina-inicial/pagina-inicial.html"><i class="fa fa-power-off"></i> Fechar Todas</a>\
          </li>\
        </ul>\
        <!-- end dropdown-menu-->\
      </div>\
      <!-- end projects dropdown -->\
      <!-- pulled right: nav area -->\
      <div class="pull-right">\
        <!-- #MOBILE -->\
        <!-- Top menu profile link : this shows only when top menu is active -->\
        <ul id="mobile-profile-img" class="header-dropdown-list hidden-xs padding-5">\
          <li class="">\
            <a href="#" class="dropdown-toggle no-margin userdropdown" data-toggle="dropdown">\
                <img src="../img/avatars/sunny.png" alt="John Doe" class="online" />\
              </a>\
            <ul class="dropdown-menu pull-right">\
              <li>\
                <a href="javascript:void(0);" class="padding-10 padding-top-0 padding-bottom-0"><i class="fa fa-cog"></i> Setting</a>\
              </li>\
              <li class="divider"></li>\
              <li>\
                <a href="profile.html" class="padding-10 padding-top-0 padding-bottom-0"> <i class="fa fa-user"></i> <u>P</u>rofile</a>\
              </li>\
              <li class="divider"></li>\
              <li>\
                <a href="javascript:void(0);" class="padding-10 padding-top-0 padding-bottom-0" data-action="toggleShortcut"><i class="fa fa-arrow-down"></i> <u>S</u>hortcut</a>\
              </li>\
              <li class="divider"></li>\
              <li>\
                <a href="javascript:void(0);" class="padding-10 padding-top-0 padding-bottom-0" data-action="launchFullscreen"><i class="fa fa-arrows-alt"></i> Full <u>S</u>creen</a>\
              </li>\
              <li class="divider"></li>\
              <li>\
                <a href="../login.html" class="padding-10 padding-top-5 padding-bottom-5" data-action="userLogout"><i class="fa fa-sign-out fa-lg"></i> <strong><u>S</u>air</strong></a>\
              </li>\
              <li>\
                <a href="../login.html" class="padding-10 padding-top-5 padding-bottom-5" data-action="userLogout"><i class="fa fa-sign-out fa-lg"></i> <strong><u>S</u>air</strong></a>\
              </li>\
            </ul>\
          </li>\
        </ul>\
        <!-- logout button -->\
        <div id="logout" class="btn-header transparent pull-right">\
          <div class="login-barra-header">\
            <a href="../login.html">\
              <i class="fa fa-sign-out"></i>\
            </a>\
          </div>\
          <!--<span> <a href="../login.html" title="Sair" data-action="userLogout" data-logout-msg="Você pode melhorar sua segurança ainda depois de sair fechando esse navegador"><i class="fa fa-sign-out"></i></a> </span>-->\
        </div>\
        <!-- end logout button -->\
        <!-- search mobile button (this is hidden till mobile view port) -->\
        <div id="search-mobile" class="btn-header transparent pull-right">\
          <span> <a href="javascript:void(0)" title="Search"><i class="fa fa-search"></i></a> </span>\
        </div>\
        <!-- end search mobile button -->\
        <!-- fullscreen button -->\
        <div id="fullscreen" class="btn-header transparent pull-right">\
          <span> <a href="javascript:void(0);" data-action="launchFullscreen" title="Full Screen"><i class="fa fa-arrows-alt"></i></a> </span>\
        </div>\
        <!-- end fullscreen button -->\
      </div>\
      <!-- end pulled right: nav area -->\
    </header>\
    <!-- END HEADER -->\
  ');
