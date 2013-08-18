  var portait  = Math.abs(window.orientation) != 90,
window.addEventListener('orientationchange', function() {
      viewport = window.document.querySelector('meta[name=viewport]'),
      content  = viewport.getAttributer('content');
  content = content.replace(/(width=)(device-[^,]*)/, '$1device-' + portait ? 'width' : 'height');
  content = content.replace(/(height=)(device-[^,]*)/, '$1device-' + portait ? 'height' : 'width');
  viewport.setAttribute('content', content);
});
