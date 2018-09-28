function init() {
  var e = document;
  var t = 'iframe';
  var titulo = document.title;
  var pageLink = document.URL;
  var url = 'https://wild-bookmarklet.firebaseapp.com/add';
  var metas = document.getElementsByTagName('meta');
  var site_name = '';
  var description = '';

  // Nome do site
  for (var i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute('property') === 'og:site_name') {
      site_name = metas[i].getAttribute('content');
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

  // Cria IFrame
  var b = e.createElement('div');
  b.id = 'base';
  b.style.position = 'absolute';
  b.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  b.style.width = '100%';
  b.style.height = '100%';
  b.style.zIndex = '999999997';
  b.style.top = '0';
  b.style.left = '0';
  b.style.opacity = 0.75;
  b.onclick = function() {
    location.reload();
  };

  var n = e.createElement('div');
  n.id = 'dummy';
  n.style.position = 'fixed';
  n.style.top = '0px';
  n.style.left = '0px';
  n.style.width = '100%';
  n.style.height = '100%';
  n.style.zIndex = '999999996';

  var s = e.createElement('iframe');
  s.id = t;
  s.src = url +'?site=' +     encodeURIComponent(titulo) +    '&url=' +    encodeURIComponent(pageLink) +    '&site_name=' +    encodeURIComponent(site_name) +    '&description=' +    encodeURIComponent(description);
  s.style.position = 'absolute';
  s.style.top = '0px';
  s.style.left = '-400px';
  s.style.marginLeft = '50%';
  s.style.right = '30px';
  s.style.bottom = '30px';
  s.style.zIndex = '999999999';
  s.style.width = '800px';
  s.style.height = '500px';
  s.style.backgroundColor = 'rgba(255,255,255,1)';

  document.body.appendChild(n);
  document.getElementById('dummy').appendChild(b);
  document.getElementById('dummy').appendChild(s);
}

init();
