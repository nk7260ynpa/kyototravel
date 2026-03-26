// 地圖初始化
const map = L.map('map', {
  center: [35.011, 135.768],
  zoom: 13,
  zoomControl: true
});

// OpenStreetMap 圖磚圖層
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(map);

// 路線圖層群組（每條路線一個 layerGroup）
const routeLayers = {};

// 初始化路線
KYOTO_BUS_ROUTES.forEach(route => {
  const layerGroup = L.layerGroup();

  // 繪製路線 polyline
  L.polyline(route.path, {
    color: route.color,
    weight: 4,
    opacity: 0.8
  }).addTo(layerGroup);

  // 繪製站點 circleMarker
  route.stops.forEach(stop => {
    const marker = L.circleMarker([stop.lat, stop.lng], {
      radius: stop.isTerminal ? 8 : 6,
      fillColor: route.color,
      color: '#fff',
      weight: stop.isTerminal ? 3 : 2,
      fillOpacity: 0.9
    }).addTo(layerGroup);

    // 站點彈窗
    const routesAtStop = findRoutesAtStop(stop.lat, stop.lng);
    const popupContent = buildPopupContent(stop.name, routesAtStop);
    marker.bindPopup(popupContent);
  });

  layerGroup.addTo(map);
  routeLayers[route.id] = layerGroup;
});

/**
 * 尋找同一站點的所有經過路線
 */
function findRoutesAtStop(lat, lng) {
  const threshold = 0.001;
  return KYOTO_BUS_ROUTES.filter(route =>
    route.stops.some(s =>
      Math.abs(s.lat - lat) < threshold && Math.abs(s.lng - lng) < threshold
    )
  );
}

/**
 * 建立站點彈窗內容
 */
function buildPopupContent(stopName, routes) {
  const routeList = routes.map(r =>
    `<span style="color:${r.color};font-weight:bold;">${r.nameShort}</span> ${r.name}`
  ).join('<br>');
  return `<div class="text-sm"><strong>${stopName}</strong><hr class="my-1"><div>${routeList}</div></div>`;
}

// 建立圖例面板內容
const legendRoutes = document.getElementById('legend-routes');
KYOTO_BUS_ROUTES.forEach(route => {
  const item = document.createElement('label');
  item.className = 'legend-item';
  item.innerHTML = `
    <input type="checkbox" checked data-route-id="${route.id}" class="route-checkbox">
    <span class="legend-color" style="background:${route.color};"></span>
    <span class="legend-label">
      <span class="font-semibold">${route.nameShort}</span>
      <span class="text-xs text-gray-500 block">${route.description}</span>
    </span>
  `;
  legendRoutes.appendChild(item);
});

// 勾選框切換路線顯示/隱藏
legendRoutes.addEventListener('change', (e) => {
  if (e.target.classList.contains('route-checkbox')) {
    const routeId = e.target.dataset.routeId;
    if (e.target.checked) {
      routeLayers[routeId].addTo(map);
    } else {
      map.removeLayer(routeLayers[routeId]);
    }
  }
});

// 全部顯示
document.getElementById('show-all').addEventListener('click', () => {
  document.querySelectorAll('.route-checkbox').forEach(cb => {
    cb.checked = true;
    routeLayers[cb.dataset.routeId].addTo(map);
  });
});

// 全部隱藏
document.getElementById('hide-all').addEventListener('click', () => {
  document.querySelectorAll('.route-checkbox').forEach(cb => {
    cb.checked = false;
    map.removeLayer(routeLayers[cb.dataset.routeId]);
  });
});

// 手機版圖例面板收合/展開
const legend = document.getElementById('legend');
const legendToggle = document.getElementById('legend-toggle');
const legendClose = document.getElementById('legend-close');

legendToggle.addEventListener('click', () => {
  legend.classList.toggle('legend-visible');
});

legendClose.addEventListener('click', () => {
  legend.classList.remove('legend-visible');
});

// Mobile hamburger menu 切換
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});
