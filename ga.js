// Google Analytics 4 (GA4)
// analytics.google.com でプロパティを作成すると測定ID(G-XXXXXXXXXX)が発行される。
// 発行されたら、下の GA_MEASUREMENT_ID だけ書き換える。各ページの<head>を編集する必要はない。
(function () {
  var GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: 発行された測定IDに置き換える

  if (GA_MEASUREMENT_ID.indexOf('XXXXXXXXXX') !== -1) return; // 未設定の間は何も送信しない

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
})();
