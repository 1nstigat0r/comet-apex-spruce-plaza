"use client";

import { useEffect } from "react";

const DESK_HTML = `
<header class="top">
  <div class="brand">
    <h1>דסק מלחמה — תימן</h1>
    <p class="sub">מבוסס על מודיעין גלוי</p>
  </div>
  <div class="stamp">
    <span class="pulse" aria-hidden="true"></span>
    <span id="updated">מתחבר…</span>
  </div>
</header>
<section class="bars" id="bars"></section>
<section class="situation" id="situation" tabindex="-1"></section>
<div class="toolbar">
  <div class="layers" id="layers">
    <button type="button" class="on" data-layer="control">שליטה</button>
    <button type="button" class="on" data-layer="combat" title="קרבות, חדירות, השתלטויות קרקע">לחימה קרקעית</button>
    <button type="button" class="on" data-layer="strike" title="טילים, כטב״מים, תקיפות אוויר">שיגורים</button>
    <button type="button" class="on" data-layer="vessel" title="פגיעה בכלי שיט / מכליות">כלי שיט</button>
    <button type="button" class="on" data-layer="port" title="פגיעה בנמלים">נמלים</button>
    <button type="button" class="on" data-layer="statement" title="הצהרות והתבטאויות">התבטאויות</button>
  </div>
  <div class="time-filter" id="time-filter" title="בחרו יום מהסבב הנוכחי (מיולי 2026)">
    <span class="tf-label">יום במפה:</span>
    <button type="button" id="btn-day-prev" aria-label="אחורה בזמן — יום קודם">אחורה</button>
    <input type="date" id="map-date" min="2026-07-01" />
    <button type="button" id="btn-day-next" aria-label="קדימה בזמן — יום הבא">קדימה</button>
    <button type="button" id="btn-day-today">היום</button>
  </div>
  <button type="button" class="ghost" id="btn-focus-map">הגדל מפה</button>
</div>
<main class="stage" id="stage">
  <section class="map-wrap" id="map-wrap">
    <div id="map"></div>
    <div class="legend" id="legend"></div>
    <div class="map-chip" id="map-chip">לחיצה על מחוז / סימן = פרטים</div>
  </section>
  <div class="rail-splitter" id="rail-splitter" role="separator" aria-orientation="vertical" aria-label="שינוי רוחב עמודת הדיווחים" title="גררו להרחבת עמודת הדיווחים"></div>
  <aside class="rail" id="rail">
    <div class="rail-head"><h2>ההתפתחויות האחרונות</h2></div>
    <div class="feed-legend" id="feed-legend" aria-label="מקרא צבעי דיווחים">
      <span><span class="sw" style="background:#c45c26"></span>מזוהה חות׳ים</span>
      <span><span class="sw" style="background:#22c55e"></span>מזוהה הממשלה הלגיטימית / סעודיה</span>
      <span><span class="sw" style="background:#94a3b8"></span>ללא הזדהות</span>
    </div>
    <div id="feed" class="feed"></div>
    <button type="button" class="more" id="btn-more-reports" hidden>הצג דיווחים קודמים</button>
    <h2 class="mt">חזיתות</h2>
    <p class="hint">סיכום מצב לפי חשיבות, לא רשימת אירועים</p>
    <div id="fronts"></div>
    <details class="cas-box" open>
      <summary>נפגעים / הומניטרי — תכלול</summary>
      <div id="casualties"></div>
    </details>
  </aside>
</main>
<section class="timeline-wrap">
  <div class="timeline-head">
    <div><h2>ציר הזמן</h2></div>
    <button type="button" id="btn-now" class="ghost" title="בוחר את תקופת ההווה ברטרו ומאפס את יום המפה להיום">לתקופה הנוכחית</button>
  </div>
  <div class="timeline" id="timeline"></div>
  <div class="phase" id="phase"></div>
</section>
<footer>
  <span id="attrib"></span>
  <span id="disclaimer"></span>
</footer>
`;

declare global {
  interface Window {
    startYemenDesk?: () => Promise<void>;
    L?: unknown;
  }
}

export function YemenDesk() {
  useEffect(() => {
    const boot = window.startYemenDesk;
    if (boot) void boot();
  }, []);

  return (
    <div
      id="yemen-desk-root"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: DESK_HTML }}
    />
  );
}
