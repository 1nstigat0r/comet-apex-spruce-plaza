import{n as e,r as t,t as n}from"./index-hZvC0ofi.js";var r=t(e(),1),i=n(),a=`
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
  <div class="time-filter" id="time-filter" title="יום, טווח, כל העימות, או ציר שליטה">
    <span class="tf-label">יום במפה:</span>
    <button type="button" id="btn-day-prev" class="day-nav" dir="ltr" aria-label="אחורה בזמן — יום קודם"><span>אחורה</span><span class="day-nav-arr" aria-hidden="true">→</span></button>
    <input type="date" id="map-date" min="2026-07-01" />
    <button type="button" id="btn-day-next" class="day-nav" dir="ltr" aria-label="קדימה בזמן — יום הבא"><span class="day-nav-arr" aria-hidden="true">←</span><span>קדימה</span></button>
    <button type="button" id="btn-day-today">היום</button>
    <span class="tf-sep" aria-hidden="true"></span>
    <span class="tf-label">מ־</span>
    <input type="date" id="map-from" min="2026-07-03" title="מתאריך" />
    <span class="tf-to">עד</span>
    <input type="date" id="map-to" min="2026-07-03" title="עד תאריך" />
    <button type="button" id="btn-range-apply">הצג טווח</button>
    <button type="button" id="btn-conflict-all">כל העימות</button>
    <div class="ctrl-slider-wrap">
      <label class="tf-label" for="ctrl-slider">שליטה בשטח</label>
      <input type="range" id="ctrl-slider" min="0" max="4" step="1" value="4" />
      <span id="ctrl-slider-label" class="ctrl-slider-label"></span>
    </div>
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
  </aside>
</main>
<section class="fronts-wrap" id="fronts-wrap">
  <h2>חזיתות</h2>
  <div id="fronts"></div>
</section>
<section class="cas-wrap" id="cas-wrap">
  <h2>העימות במספרים</h2>
  <div id="casualties"></div>
</section>
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
<div id="front-float" hidden></div>
<div id="media-float" hidden></div>
`;function o(){return(0,r.useEffect)(()=>{let e=window.startYemenDesk;e&&e()},[]),(0,i.jsx)(`div`,{id:`yemen-desk-root`,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:a}})}function s(){return(0,i.jsx)(o,{})}export{s as component};