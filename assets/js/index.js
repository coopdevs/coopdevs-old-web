(function() {

  var hamburger = {
    openButton: document.querySelector('#sidebar-open'),
    closeButton: document.querySelector('#sidebar-close'),
    sidebar: document.querySelector('#sidebar'),

    toggle: function(e) {
      e.preventDefault();
      this.openButton.classList.toggle('hidden');
      this.closeButton.classList.toggle('hidden');
      this.sidebar.classList.toggle('hidden');
    }
  };

  hamburger.openButton.addEventListener('click', function(e) { hamburger.toggle(e); });
  hamburger.closeButton.addEventListener('click', function(e) { hamburger.toggle(e); });

}());
