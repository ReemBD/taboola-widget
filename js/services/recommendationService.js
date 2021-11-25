var BASE_URL =
  'http://api.taboola.com/1.0/json/taboola-templates/recommendations';
var DEFAULT_QUERY_PARAMS = {
  'app.type': 'desktop',
  'app.apikey': 'f9040ab1b9c802857aa783c469d0e0ff7e7366e4',
  count: 10,
  'source.type': 'video',
  'source.id': '214321562187',
  'source.url': 'http://www.site.com/videos/214321562187.html',
};

function query(callback, params = DEFAULT_QUERY_PARAMS) {
  let xhr = new XMLHttpRequest();
  var qString = queryString(params);
  xhr.open('GET', `${BASE_URL}.get?${qString}`);

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        callback(null, JSON.parse(xhr.responseText || '[]'));
      } else {
        callback(xhr.status);
      }
    }
  };

  xhr.send();
}

function queryString(params) {
  return Object.keys(params)
    .map(function (key) {
      return key + '=' + params[key];
    })
    .join('&');
}

module.exports = {
  query,
};
