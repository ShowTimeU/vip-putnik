import React from "react";

export const ItTourWidget: React.FC = () => {
  const widgetHTML = `
    <div id="itTourWidgetWrapper"></div>
    <script id="itTourWidgetScriptJsx" tourTab="1" euroTab="1" guidedTab="1" ticketsTab="2" src="https://www.ittour.com.ua/tour_search.jsx?id=58D6190G66640N6020321308&ver=3"></script>
  `;

  return <div dangerouslySetInnerHTML={{ __html: widgetHTML }} />;
};
