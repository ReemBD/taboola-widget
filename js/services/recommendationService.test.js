/**
 * @jest-environment jsdom
 */

const { query } = require('./recommendationService');

test('query', () => {

  const xhrMock = {
    open: jest.fn(),
    send: jest.fn(),
    setRequestHeader: jest.fn(),
    readyState: 4,
    status: 200,
    response: 'Hello World!',
  };
  jest.spyOn(window, 'XMLHttpRequest').mockImplementation(() => xhrMock);

  const callback = jest.fn();
  query(callback);
  expect(xhrMock.open).toBeCalledWith(
    'GET',
    'http://api.taboola.com/1.0/json/taboola-templates/recommendations.get?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&count=10&source.type=video&source.id=214321562187&source.url=http://www.site.com/videos/214321562187.html'
  );
  xhrMock.onreadystatechange(new Event(''));
});
