import React from "react";

export const ShowcaseHotprice: React.FC = () => {
  const widgetHTML = `
    <div id="showcase_hotprice_v3_showcase_module"></div>
    <script src="https://www.ittour.com.ua/showcase_search.jsx?id=575242D8485G24N619969750&type=110"></script>
  `;

  return <div dangerouslySetInnerHTML={{ __html: widgetHTML }} />;
};
