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
});
