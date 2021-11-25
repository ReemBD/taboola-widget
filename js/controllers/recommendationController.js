function onLoadRecommendations() {
  query(function (err, res) {
    renderRecommendations(res.list);
  });
}

function renderRecommendations(recs) {
  var elRecommendationList = document.querySelector('.recommendation-list');
  for (var i = 0; i < recs.length; i++) {
    elRecommendationList.innerHTML += getRecommendationItemHtml(recs[i]);
  }
}

function getRecommendationItemHtml(rec) {
  return `
           <article onclick="openInNewTab('${rec.url}')" class="recommendation-item link">
           <div class="img-container">
           <img src="${rec.thumbnail[0].url}" />
           </div>
           <p class="recommendation-name">${rec.name}</p>
           <footer>${rec.branding} on MySite</footer>
         </article>
      `;
}

module.exports = {
  renderRecommendations,
  getRecommendationItemHtml,
};
