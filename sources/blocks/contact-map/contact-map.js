if ($('.ya-map').length) {
  ymaps.ready(function () {
    var yaMaps = $('.ya-map');

    yaMaps.each(function () {
      var dataPlacemark = $(this).data('placemark');

      var myMap = new ymaps.Map(this, {
        center: dataPlacemark[0].coordinates,
        zoom: 17//,
        //bounds: $(this).hasClass('ya-map-route') ? [dataPlacemark[0].coordinates, dataPlacemark[dataPlacemark.length-1].coordinates] : false,
        //behaviors: ['dblClickZoom', 'multiTouch', 'rightMouseButtonMagnifier']
      });

      var arrCoords = [], myPlacemark;
      for (var i = 0; i < dataPlacemark.length; i++) {
        arrCoords.push(dataPlacemark[i].coordinates);
        myPlacemark = new ymaps.Placemark(dataPlacemark[i].coordinates, {
          hintContent: dataPlacemark[i].hintContent,
          balloonContent: dataPlacemark[i].balloonContent,
          iconContent: ''
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjM1LjcyNHB4IiBoZWlnaHQ9IjUwcHgiIHZpZXdCb3g9IjIzOC4xMzggMjMxIDM1LjcyNCA1MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAyMzguMTM4IDIzMSAzNS43MjQgNTAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGZpbGw9IiNFRTM0MjIiIGQ9Ik0yNTYuNjMsMjMxLjAxYy0xMC4xNTQtMC4zNDItMTguNDkzLDcuNzg3LTE4LjQ5MywxNy44NjRjMCwxMS40MzYsMTAuOTc1LDE5LjczNSwxNy4xMjYsMzEuNjcxYzAuMzEyLDAuNjA2LDEuMTg1LDAuNjA3LDEuNDk4LDAuMDAxYzUuNTY1LTEwLjc0LDE1LjA3NS0xNy45NDEsMTYuODM4LTI4LjI4OEMyNzUuNDI1LDI0MS41NTIsMjY3LjQ4NSwyMzEuMzc2LDI1Ni42MywyMzEuMDF6IE0yNTYuMDEyLDI1OC4yMzdjLTUuMTcxLDAtOS4zNjItNC4xOTItOS4zNjItOS4zNjNzNC4xOTItOS4zNjMsOS4zNjItOS4zNjNjNS4xNzEsMCw5LjM2Myw0LjE5Miw5LjM2Myw5LjM2M1MyNjEuMTgyLDI1OC4yMzcsMjU2LjAxMiwyNTguMjM3eiIvPjwvZz48L3N2Zz4=",
          // Размеры метки.
          iconImageSize: [32, 47],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-16, -47]
        });

        myMap.geoObjects.add(myPlacemark);
      }
      //myMap.setBounds(myMap.geoObjects.getBounds());
      $(window).on('resize.YaMap', function () {
        myMap.setCenter(dataPlacemark[0].coordinates);
      });

      /*
       // Создаем ломаную с помощью вспомогательного класса Polyline.
       var myPolyline = new ymaps.Polyline(arrCoords, {
       // Описываем свойства геообъекта.
       // Содержимое балуна.
       balloonContent: ""
       }, {
       // Задаем опции геообъекта.
       // Отключаем кнопку закрытия балуна.
       balloonCloseButton: false,
       // Цвет линии.
       strokeColor: "#d44c3f",
       // Ширина линии.
       strokeWidth: 2,
       // Коэффициент прозрачности.
       strokeOpacity: 1
       });
       // Добавляем линии на карту.
       myMap.geoObjects.add(myPolyline);*/
    });
  });
}