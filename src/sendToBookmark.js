function init() {
  var e = document;
  var t = 'iframe';
  var titulo = document.title;
  var pageLink = document.URL;
  var url = 'https://services.slicedpixel.com/bookmarks/create/';
  var metas = document.getElementsByTagName('meta');
  var site_name = '';
  var description = '';
  var preview = '';

  // Nome do site
  for (var i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('property') === 'og:site_name') {
      site_name = metas[i].getAttribute('content');
    }
    if (metas[i].getAttribute('property') === 'og:image') {
      preview = metas[i].getAttribute('content');
    }
    if (metas[i].name.toLowerCase() === 'description') {
      description = metas[i].getAttribute('content');
    }
    if (metas[i].getAttribute('property') === 'og:description') {
      description = metas[i].getAttribute('content');
    }
  }
  if (site_name === '') {
    site_name = window.location.hostname;
    site_name = site_name.replace('www.', '');
  }


  var url = url +
    '?titulo=' + encodeURIComponent(titulo) +
    '&url=' + encodeURIComponent(pageLink) +
    '&site_name=' + encodeURIComponent(site_name) +
    '&description=' + encodeURIComponent(description);
    '&preview=' + encodeURIComponent(preview) +
    
  url = url.substring(0, 1800);
  window.location.href = url;
}

init();
