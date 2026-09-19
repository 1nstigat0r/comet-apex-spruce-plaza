import assert from "node:assert/strict";
import { heDigest, hePrep, tidyDeskHe } from "./yemen-scan.server.ts";
import { test } from "node:test";

test("hePrep elides ה after ל/ב", () => {
  assert.equal(hePrep("ל", "החות׳ים"), "לחות׳ים");
  assert.equal(hePrep("ב", "הים האדום"), "בים האדום");
  assert.equal(hePrep("ב", "הים הערבי"), "בים הערבי");
  assert.equal(hePrep("ל", "חטיבות הענקים"), "לחטיבות הענקים");
  assert.equal(hePrep("מ", "החות׳ים"), "מהחות׳ים");
});

test("tidyDeskHe fixes bad Hebrew", () => {
  assert.equal(tidyDeskHe("בין אלעמאליק להחות'ים"), "בין חטיבות הענקים לחות׳ים");
  assert.equal(tidyDeskHe("בהים הערבי"), "בים הערבי");
});

test("Giants brigades clash is Hebrew and not a ticker clone", () => {
  const d = heDigest(
    "Almashhad",
    "اشتباكات بين ألوية العمالقة والحوثيين في باب المندب وكهبوب",
    "",
  );
  assert.match(d.summary, /חטיבות הענקים/);
  assert.doesNotMatch(d.summary, /להחות/);
  assert.doesNotMatch(d.summary, /אלעמאליק/);
  assert.equal(d.type, "combat");
  assert.match(d.summary, /^עימותים בין/);
});

test("Giants family warning is a statement, not word salad", () => {
  const d = heDigest(
    "Almashhad",
    "قيادي بارز في العمالقة يوجه تحذيرًا أخيرًا للأسر اليمنية بشأن أبنائها في صفوف الحوثيين في عدن",
    "",
  );
  assert.match(d.summary, /מזהיר/);
  assert.match(d.summary, /חטיבות הענקים/);
  assert.doesNotMatch(d.summary, /חטיבות הענקים חות׳ים חטיבות/);
  assert.equal(d.type, "statement");
});

test("word-salad giants headline is rejected", () => {
  const d = heDigest("Almashhad", "العمالقة الحوثيين العمالقة عدن العمالقة", "");
  assert.equal(d.summary, "");
});

test("Saudi sirens become one flash", () => {
  const d = heDigest(
    "Al Hadath",
    "دوي صافرات الإنذار المبكر في جدة والطائف وينبع وخميس مشيط وأبها وجازان",
    "gov",
  );
  assert.match(d.summary, /התרעות/);
  assert.match(d.summary, /גִ׳דַּה/);
  assert.doesNotMatch(d.summary, /^דווח על/);
  assert.equal(d.type, "strike");
});

test("Jeddah and Taif sirens without Jazan still flash", () => {
  const d = heDigest(
    "SPA",
    "دوي صفارات الإنذار في جدة والطائف",
    "gov",
  );
  assert.match(d.summary, /^התרעות/);
  assert.match(d.summary, /גִ׳דַּה/);
  assert.match(d.summary, /טאיף/);
  assert.equal(d.type, "strike");
});

test("airstrike flash has no דווח על prefix", () => {
  const d = heDigest("Alsahwa", "غارات جوية على مواقع الحوثيين في الوازعية وتعز", "");
  assert.match(d.summary, /^תקיפה אווירית/);
  assert.doesNotMatch(d.summary, /דווח על/);
});

test("Riyadh and Al-Kharj sirens flash with explosions", () => {
  const d = heDigest(
    "BBC",
    "Saudi civil defence issued the first air raid alerts for Riyadh and Al-Kharj. Reuters journalists heard two explosions in Olaya. All-clear later.",
    "intl",
  );
  assert.match(d.summary, /התרעות/);
  assert.match(d.summary, /ריאד/);
  assert.match(d.summary, /אלחַ׳רג׳/);
  assert.doesNotMatch(d.summary, /^דווח על/);
  assert.equal(d.type, "strike");
});

test("Sana'a security compound blast is combat, not a statement", () => {
  const d = heDigest(
    "Yemen Future",
    "أقرت جماعة الحوثي بوقوع عملية أمنية داخل العاصمة صنعاء. التفجير استهدف فجر الجمعة مقرا أمنيا في منطقة ظهر حمير بمديرية آزال. مقتل أربعة بينهم قيادي يدعى أبو أحمد المداني وإصابة ثلاثة.",
    "intl",
  );
  assert.match(d.summary, /פיצוץ/);
  assert.match(d.summary, /אזאל/);
  assert.equal(d.type, "combat");
  assert.doesNotMatch(d.summary, /^דווח על/);
});

test("Syria refused Saudi request for fighters is diplomacy", () => {
  const d = heDigest(
    "Al-Akhbar",
    "تقرير تركي: سوريا رفضت طلباً سعودياً لإرسال مقاتلين إلى اليمن لمواجهة أنصار الله. مصادر تركية تنفي دورا لأنقرة.",
    "houthi",
  );
  assert.match(d.summary, /סוריה דחתה/);
  assert.match(d.summary, /לוחמים/);
  assert.equal(d.type, "diplomacy");
});

test("Saree foil-only claim stays a statement", () => {
  const d = heDigest(
    "Al-Thawrah",
    "العميد يحيى سريع: إفشال محاولات إجرامية في العاصمة صنعاء قام بها العدو السعودي مصبوغة بالصبغة الداعشية ولن تمر دون رد.",
    "houthi",
  );
  assert.equal(d.type, "statement");
  assert.match(d.summary, /סריע/);
});
