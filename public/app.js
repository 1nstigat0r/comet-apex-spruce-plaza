const COLORS = { houthi:'#c45c26', plc:'#22c55e', saudi:'#1f8a7a', contested:'#e9c46a', mixed:'#457b9d' };
const EVENT_COLORS = { combat:'#facc15', strike:'#dc2626', vessel:'#06b6d4', port:'#f97316', statement:'#a855f7' };
const LABELS = { houthi:'חות׳ים', plc:'הממשלה הלגיטימית', saudi:'סעודיה', contested:'במחלוקת', mixed:'מעורב' };
const INITIAL_REPORTS = 8;
const MORE_STEP = 12;

const PLACE_COORDS = {
  "עַבְּהַא":[18.2164,42.5053],
  "עבהא":[18.2164,42.5053],
  "ח׳מיס מושייט":[18.3,42.73],
  "חמיס מושייט":[18.3,42.73],
  "טאיף":[21.2703,40.4158],
  "אלטאיף":[21.2703,40.4158],
  "גַ׳אזאן":[16.8892,42.5511],
  "ג׳אזאן":[16.8892,42.5511],
  "נַגְ׳רַאן":[17.4917,44.1322],
  "נג׳ראן":[17.4917,44.1322],
  "יַנְבּוּע":[24.0231,38.1899],
  "ינבוע":[24.0231,38.1899],
  "גִ׳דַּה":[21.4858,39.1925],
  "ג׳דה":[21.4858,39.1925],
  "מכה":[21.3891,39.8579],
  "ריאד":[24.7136,46.6753],
  "אלשֻקַיְק":[17.7,42.05],

  "צנעאא׳":[15.3694,44.191],
  "צנעא":[15.3694,44.191],
  "סעדה":[16.94,43.76],
  "אלחודיידה":[14.80,42.95],
  "אל־חודיידה":[14.80,42.95],
  "אלמח׳א":[13.32,43.25],
  "אל־מח׳א":[13.32,43.25],
  "המכא":[13.32,43.25],
  "מיון":[12.65,43.414],
  "מַיוּן":[12.65,43.414],
  "חניש":[13.706,42.724],
  "חַניש":[13.706,42.724],
  "עדן":[12.79,45.02],
  "מאריב":[15.47,45.32],
  "תעז":[13.58,44.02],
  "אלואזעיה":[13.35,43.55],
  "אל־ואזעיה":[13.35,43.55],
  "ואזעיה":[13.35,43.55],
  "ד׳ובאב":[12.94,43.41],
  "כַּהבּוּב":[12.85,43.55],
  "אלבַּאזִלַה":[12.90,43.58],
  "בַּאזִלַה":[12.90,43.58],
  "אלאַעְ׳בִּרַה":[12.92,43.60],
  "כהבוב":[12.85,43.55],
  "לחג׳":[13.05,44.88],
  "אלדאלע":[13.70,44.73],
  "א־דאלע":[13.70,44.73],
  "אלביידא":[13.99,45.57],
  "אל־ביידא":[13.99,45.57],
  "אלג׳וף":[16.72,44.76],
  "אל־ג׳וף":[16.72,44.76],
  "חג׳ה":[15.69,43.60],
  "שבְּוה":[14.55,46.83],
  "חצרמוות":[15.55,48.50],
  "אלסֻדַיְר":[12.95,44.20],
  "א־סֻדַיְר":[12.95,44.20],
  "באב אלמנדב":[12.70,43.47],
  "באב אל־מנדב":[12.70,43.47],
  "באב אלמַנדב":[12.70,43.47],
  "באב אל־מַנדב":[12.70,43.47],
  "אלח׳וחה":[13.81,43.25],
  "אל־ח׳וחה":[13.81,43.25],
  "חֵיס":[13.98,43.33],
  "ג׳יבוטי":[11.59,43.15],
  "שַרִירַה":[13.38,43.52],
  "אלעַלְקַמַה":[13.36,43.50],
  "אל־עַלְקַמַה":[13.36,43.50],
  "אַעְ׳בַּרַה":[13.40,43.48],
  "אלאע׳ברה":[13.40,43.48],
  "אלאַעְ׳בַּרַה":[13.40,43.48],
  "אל־אַעְ׳בַּרַה":[13.40,43.48],
  "גַ׳הַנַּם":[12.70,43.45],
  "אלעַקְרַב":[12.72,43.48],
  "אל־עַקְרַב":[12.72,43.48],
  "רום":[12.88,43.52],
  "מֻרַיְס":[13.85,44.70],
  "אלפאח׳ר":[13.92,44.78],
  "אל־פאח׳ר":[13.92,44.78],
  "אלמסימיר":[13.44,44.61],
  "אלחיימה":[14.05,43.12],
  "ודיעה":[17.30,47.12],
  "אל־ודיעה":[17.30,47.12],
  "קַלַבַּה":[13.68,44.12],
  "אלסלו":[13.38,44.22],
  "חַדְרַאן":[13.52,43.88],
  "אלרֻוַיְק":[15.55,45.85],
  "יַפַע":[13.78,45.20],
  "יפע":[13.78,45.20],
  "מִדִי":[16.32,42.76],
  "מידי":[16.32,42.76],
  "אלסויידא":[15.40,45.10],
  "א־סויידא":[15.40,45.10],
  "צַרְוַאח":[15.45,45.05],
  "בַּלְק":[15.35,45.15],
  "אלבַּלַק":[15.35,45.15],
  "אל־בַּלַק":[15.35,45.15],
  "כמראן":[15.35,42.59],
  "כַּמְרַאן":[15.35,42.59],
  "שרורה":[17.48,47.12],
  "שַׁרוּרָה":[17.48,47.12],
  "יתמה":[16.18,44.62],
  "יַתְמַה":[16.18,44.62],
  "אלחַזְם":[16.16,44.78],
  "אלחַזם":[16.16,44.78],
  "מחנה ח׳אלד":[13.35,43.28],
  "אלבַּרְח":[13.48,43.72],
  "אלברח":[13.48,43.72],
  "ראס תַנּוּרַה":[26.64,50.16],
  "ראס תנורה":[26.64,50.16],
  "ח׳מיס מושייט":[18.30,42.73],
  "אבהא":[18.22,42.50],
  "חריב":[14.93,45.50],
  "חַרִיב":[14.93,45.50],
  "נג׳ראן":[17.49,44.13]
};


/** kind + where — woven inline, no parentheses. */
const PLACE_META = {
  "צנעאא׳": { kind: "", where: "", skip: true },
  "צנעא": { kind: "", where: "", skip: true },
  "סעדה": { kind: "מחוז", where: "בצפון הרחוק" },
  "אל-חודיידה": { kind: "עיר הנמל הראשית", where: "בחוף המערבי" },
  "א־חודיידה": { kind: "עיר הנמל הראשית", where: "בחוף המערבי" },
  "אלחודיידה": { kind: "עיר הנמל הראשית", where: "בחוף המערבי" },
  "א-חודיידה": { kind: "עיר הנמל הראשית", where: "בחוף המערבי" },
  "אל־חודיידה": { kind: "עיר הנמל הראשית", where: "בחוף המערבי" },
  "אל-מח׳א": { kind: "עיר הנמל", where: "בדרום־מערב המדינה" },
  "א-מח׳א": { kind: "עיר הנמל", where: "בדרום־מערב המדינה" },
  "אל־מח׳א": { kind: "עיר הנמל", where: "בדרום־מערב המדינה" },
  "אלמח׳א": { kind: "עיר הנמל", where: "בדרום־מערב המדינה" },
  "א־מח׳א": { kind: "עיר הנמל", where: "בדרום־מערב המדינה" },
  "המכא": { kind: "עיר הנמל", where: "בדרום־מערב המדינה" },
  "מוח׳א": { kind: "עיר הנמל", where: "בדרום־מערב המדינה" },
  "מיון": { kind: "אי", where: "במצר באב אלמַנדב בדרום־מערב" },
  "מַיוּן": { kind: "אי", where: "במצר באב אלמַנדב בדרום־מערב" },
  "חניש": { kind: "קבוצת איים", where: "מול החוף המערבי" },
  "חַניש": { kind: "קבוצת איים", where: "מול החוף המערבי" },
  "עדן": { kind: "עיר נמל גדולה", where: "בדרום המדינה" },
  "מאריב": { kind: "עיר ומחוז", where: "במזרח־מרכז המדינה" },
  "תעז": { kind: "עיר ומחוז", where: "בדרום־מערב, בין הרמה לחוף" },
  "א־ואזעיה": { kind: "נפה", where: "במערב תעז לכיוון החוף" },
  "אלואזעיה": { kind: "נפה", where: "במערב תעז לכיוון החוף" },
  "א-ואזעיה": { kind: "נפה", where: "במערב תעז לכיוון החוף" },
  "אל־ואזעיה": { kind: "נפה", where: "במערב תעז לכיוון החוף" },
  "אל-ואזעיה": { kind: "נפה", where: "במערב תעז לכיוון החוף" },
  "ואזעיה": { kind: "נפה", where: "במערב תעז לכיוון החוף" },
  "ד׳ובאב": { kind: "אזור חוף", where: "ליד באב אלמַנדב בדרום־מערב" },
  "כַּהבּוּב": { kind: "גבעה", where: "במחוז לחג׳ מול באב אלמַנדב" },
  "כהבוב": { kind: "גבעה", where: "במחוז לחג׳ מול באב אלמַנדב" },
  "לחג׳": { kind: "מחוז", where: "בדרום־מערב בין עדן לתעז" },
  "אל־דאלע": { kind: "מחוז", where: "בדרום, צפונית־מערבית לעדן" },
  "א־דאלע": { kind: "מחוז", where: "בדרום, צפונית־מערבית לעדן" },
  "אל-דאלע": { kind: "מחוז", where: "בדרום, צפונית־מערבית לעדן" },
  "א-דאלע": { kind: "מחוז", where: "בדרום, צפונית־מערבית לעדן" },
  "אלדאלע": { kind: "מחוז", where: "בדרום, צפונית־מערבית לעדן" },
  "א-ביידא": { kind: "מחוז", where: "במרכז המדינה" },
  "אל-ביידא": { kind: "מחוז", where: "במרכז המדינה" },
  "א־ביידא": { kind: "מחוז", where: "במרכז המדינה" },
  "אל־ביידא": { kind: "מחוז", where: "במרכז המדינה" },
  "אלביידא": { kind: "מחוז", where: "במרכז המדינה" },
  "אל-ג׳וף": { kind: "מחוז", where: "בצפון־מזרח" },
  "א־ג׳וף": { kind: "מחוז", where: "בצפון־מזרח" },
  "אל־ג׳וף": { kind: "מחוז", where: "בצפון־מזרח" },
  "אלג׳וף": { kind: "מחוז", where: "בצפון־מזרח" },
  "א-ג׳וף": { kind: "מחוז", where: "בצפון־מזרח" },
  "חג׳ה": { kind: "מחוז", where: "בצפון־מערב" },
  "שבְּוה": { kind: "מחוז", where: "במזרח המדינה" },
  "חצרמוות": { kind: "מחוז גדול", where: "במזרח המדינה" },
  "אלסֻדַיְר": { kind: "חזית גבולית", where: "בלחג׳ בדרום־מערב" },
  "אל־סֻדַיְר": { kind: "חזית גבולית", where: "בלחג׳ בדרום־מערב" },
  "א-סֻדַיְר": { kind: "חזית גבולית", where: "בלחג׳ בדרום־מערב" },
  "א־סֻדַיְר": { kind: "חזית גבולית", where: "בלחג׳ בדרום־מערב" },
  "אל-סֻדַיְר": { kind: "חזית גבולית", where: "בלחג׳ בדרום־מערב" },
  "באב אלמנדב": { kind: "מצר", where: "בדרום־מערב בין הים האדום להים הערבי" },
  "באב אלמַנדב": { kind: "מצר", where: "בדרום־מערב בין הים האדום להים הערבי" },
  "אל־ח׳וחה": { kind: "עיירה", where: "בחוף המערבי" },
  "אל-ח׳וחה": { kind: "עיירה", where: "בחוף המערבי" },
  "א-ח׳וחה": { kind: "עיירה", where: "בחוף המערבי" },
  "א־ח׳וחה": { kind: "עיירה", where: "בחוף המערבי" },
  "אלח׳וחה": { kind: "עיירה", where: "בחוף המערבי" },
  "חֵיס": { kind: "עיירה", where: "בחוף המערבי דרומית לאלחודיידה" },
  "חַיְס": { kind: "עיירה", where: "בחוף המערבי דרומית לאלחודיידה" },
  "ג׳יבוטי": { kind: "מדינה", where: "ממול מעבר למצר בדרום־מערב" },
  "שַרִירַה": { kind: "אתר", where: "במערב תעז" },
  "אלעַלְקַמַה": { kind: "אזור", where: "במערב תעז" },
  "אל-עַלְקַמַה": { kind: "אזור", where: "במערב תעז" },
  "א-עַלְקַמַה": { kind: "אזור", where: "במערב תעז" },
  "א־עַלְקַמַה": { kind: "אזור", where: "במערב תעז" },
  "אל־עַלְקַמַה": { kind: "אזור", where: "במערב תעז" },
  "אַעְ׳בַּרַה": { kind: "אתר", where: "בקצה אלואזעיה במערב תעז" },
  "א-אַעְ׳בַּרַה": { kind: "אתר", where: "בקצה אלואזעיה במערב תעז" },
  "אל-אַעְ׳בַּרַה": { kind: "אתר", where: "בקצה אלואזעיה במערב תעז" },
  "אלאַעְ׳בַּרַה": { kind: "אתר", where: "בקצה אלואזעיה במערב תעז" },
  "א־אַעְ׳בַּרַה": { kind: "אתר", where: "בקצה אלואזעיה במערב תעז" },
  "אל־אַעְ׳בַּרַה": { kind: "אתר", where: "בקצה אלואזעיה במערב תעז" },
  "גַ׳הַנַּם": { kind: "גזרה", where: "ליד באב אלמַנדב" },
  "אלעַקְרַב": { kind: "גזרה", where: "ליד באב אלמַנדב" },
  "אל-עַקְרַב": { kind: "גזרה", where: "ליד באב אלמַנדב" },
  "א-עַקְרַב": { kind: "גזרה", where: "ליד באב אלמַנדב" },
  "א־עַקְרַב": { kind: "גזרה", where: "ליד באב אלמַנדב" },
  "אל־עַקְרַב": { kind: "גזרה", where: "ליד באב אלמַנדב" },
  "מֻרַיְס": { kind: "חזית", where: "בצפון אלדאלע בדרום המדינה" },
  "אלסויידא": { kind: "אזור", where: "במערב מאריב" },
  "אל-סויידא": { kind: "אזור", where: "במערב מאריב" },
  "אל־סויידא": { kind: "אזור", where: "במערב מאריב" },
  "א־סויידא": { kind: "אזור", where: "במערב מאריב" },
  "א-סויידא": { kind: "אזור", where: "במערב מאריב" },
  "צַרְוַאח": { kind: "אזור", where: "ממערב למאריב" },
  "בַּלְק": { kind: "רכס", where: "ממערב־דרום למאריב" },
  "אל־בַּלַק": { kind: "רכס", where: "ממערב־דרום למאריב" },
  "אל-בַּלַק": { kind: "רכס", where: "ממערב־דרום למאריב" },
  "א-בַּלַק": { kind: "רכס", where: "ממערב־דרום למאריב" },
  "א־בַּלַק": { kind: "רכס", where: "ממערב־דרום למאריב" },
  "אלבַּלַק": { kind: "רכס", where: "ממערב־דרום למאריב" },
  "ריאד": { kind: "בירת סעודיה", where: "במרכז הממלכה" },
  "ח׳מיס מושייט": { kind: "עיר", where: "בדרום־מערב סעודיה" },
  "אבהא": { kind: "עיר", where: "בדרום־מערב סעודיה" },
  "נג׳ראן": { kind: "עיר", where: "בדרום סעודיה ליד הגבול" },
  "אל־צֻבַּיְחַה": { kind: "שבטים ואזור", where: "בלחג׳ בדרום־מערב" },
  "א-צֻבַּיְחַה": { kind: "שבטים ואזור", where: "בלחג׳ בדרום־מערב" },
  "אל-צֻבַּיְחַה": { kind: "שבטים ואזור", where: "בלחג׳ בדרום־מערב" },
  "אלצֻבַּיְחַה": { kind: "שבטים ואזור", where: "בלחג׳ בדרום־מערב" },
  "א־צֻבַּיְחַה": { kind: "שבטים ואזור", where: "בלחג׳ בדרום־מערב" },
  "אל-סַבְּעִין": { kind: "כיכר", where: "בצנעאא׳" },
  "אלסַבְּעִין": { kind: "כיכר", where: "בצנעאא׳" },
  "אל־סַבְּעִין": { kind: "כיכר", where: "בצנעאא׳" },
  "א־סַבְּעִין": { kind: "כיכר", where: "בצנעאא׳" },
  "א-סַבְּעִין": { kind: "כיכר", where: "בצנעאא׳" },
  "א-סַבְעִין": { kind: "כיכר", where: "בצנעאא׳" },
  "אלסַבְעִין": { kind: "כיכר", where: "בצנעאא׳" },
  "א־סַבְעִין": { kind: "כיכר", where: "בצנעאא׳" },
  "אל-סַבְעִין": { kind: "כיכר", where: "בצנעאא׳" },
  "אל־סַבְעִין": { kind: "כיכר", where: "בצנעאא׳" }
};


function tidyHebrewProse(text) {
  let s = String(text || '');
  // No comma before connecting vav (ו) — rare exceptions left to the writer
  s = s.replace(/,\s+ו/g, ' ו');
  s = s.replace(/שבטי\s+שבטים ואזור\s+/g, 'שבטי ');
  // Never display «אנצאר אללה» — always חות׳ים
  s = s.replace(/ממשלת אנצאר אללה בצנעאא׳/g, 'ממשלת החות׳ים בצנעאא׳');
  s = s.replace(/ממשלת אנצאר אללה בצנעא/g, 'ממשלת החות׳ים בצנעאא׳');
  s = s.replace(/ממשלת אנצאר אללה/g, 'ממשלת החות׳ים');
  s = s.replace(/הנהגת אנצאר אללה/g, 'הנהגת החות׳ים');
  s = s.replace(/דובר אנצאר אללה/g, 'דובר החות׳ים');
  s = s.replace(/דובר אנצאר(?!\s*אללה)/g, 'דובר החות׳ים');
  s = s.replace(/עם אנצאר אללה/g, 'עם החות׳ים');
  s = s.replace(/לאנצאר אללה/g, 'לחות׳ים');
  s = s.replace(/להחות['׳]ים/g, 'לחות׳ים');
  s = s.replace(/של אנצאר אללה/g, 'של החות׳ים');
  s = s.replace(/אנצאר אללה/g, 'החות׳ים');
  // Never address the reader / desk internals in published copy
  s = s.replace(/\s*לא לבלבל עם[^.!?\n]*[.!?]?/g, '');
  s = s.replace(/\s*\([^)]*לא לבלבל[^)]*\)/g, '');
  s = s.replace(/\s*שכבר בדסק\.?/g, '');
  s = s.replace(/\s*כבר בדסק\.?/g, '');
  s = s.replace(/ההים האדום/g, 'הים האדום');
  s = s.replace(/ההים הערבי/g, 'הים הערבי');
  s = s.replace(/(^|[^\u0590-\u05FF׳״])ים האדום/g, '$1הים האדום');
  s = s.replace(/בהים האדום/g, 'בים האדום');
  s = s.replace(/להים האדום/g, 'לים האדום');
  s = s.replace(/בהים הערבי/g, 'בים הערבי');
  s = s.replace(/להים הערבי/g, 'לים הערבי');
  s = s.replace(/אלעמאליק(?:ה)?/g, 'חטיבות הענקים');
  s = s.replace(/אלעמאלק(?:ה)?/g, 'חטיבות הענקים');
  // Strip reader-address / desk-meta leftover phrases
  s = s.replace(/\s*לקורא זה אומר:?\s*/g, ' ');
  s = s.replace(/\s*לקורא שאינו בקיא:?\s*/g, ' ');
  s = s.replace(/\s*למה זה חשוב למי שלא בקיא:?\s*/g, ' ');
  s = s.replace(/\s*חשוב להבין:?\s*/g, ' ');
  s = s.replace(/\s*לתימן זה אומר:?\s*/g, ' ');
  s = s.replace(/המפה בראש הדסק[^.]{0,200}\.?/g, '');
  s = s.replace(/הרטרו כאן נותן את המסגרת:?\s*/g, '');
  s = s.replace(/הנקודות החיות בדסק\s*—?\s*/g, '');
  s = s.replace(/מפת השליטה והנקודות החיות בדסק\s*—?\s*/g, '');

  // Seas with definite article
  s = s.replace(/(^|[^\u0590-\u05FFa-zA-Z])ים האדום/g, '$1הים האדום');
  s = s.replace(/בים האדום/g, 'בים האדום'); // already has ב + הים if wrong

  s = s.replace(/שבטים ואזור\s+(אלצֻבַּיְחַה)/g, 'שבטי $1');
  s = s.replace(/מזרח[־\-]מרכז/g, 'מזרח תימן');
  s = s.replace(/מרכז[־\-]מזרח/g, 'מזרח תימן');
  s = s.replace(/בדרום[־\-]מערב(?!\s+(תימן|המדינה|הממלכה))/g, 'בדרום־מערב תימן');
  s = s.replace(/(^|[^\u0590-\u05FF])דרום[־\-]מערב(?!\s+(תימן|המדינה|הממלכה))/g, '$1דרום־מערב תימן');
  s = s.replace(/דרום־מערב תימן תימן/g, 'דרום־מערב תימן');
  s = s.replace(/מזרח תימן תימן/g, 'מזרח תימן');
  s = s.replace(/\s*…+\s*/g, '. ').replace(/\.{3,}/g, '. ');
  s = s.replace(/\s{2,}/g, ' ').trim();
  return s;
}

function canonAl(text) {
  // Full אל always (ignore sun/moon), no hyphen/maqaf; keep nikud on the name
  let s = String(text || '');
  if (!s) return s;
  s = s.replace(/א[־\-](?=[\u0590-\u05FF׳״])/g, 'אל');
  s = s.replace(/אל[־\-](?=[\u0590-\u05FF׳״])/g, 'אל');
  // Canonical: צנעאא׳ (not צנעא)
  s = s.replace(/צנעאא['׳]/g, 'צנעאא׳');
  s = s.replace(/צנעא(?!א׳)/g, 'צנעאא׳');
  return s;
}

function expandPlaceAliasMaps() {
  const add = (obj) => {
    Object.keys(obj).forEach((k) => {
      const v = obj[k];
      const nk = canonAl(k);
      if (nk && !(nk in obj)) obj[nk] = v;
      if (!nk.startsWith('אל') || nk.length <= 2) return;
      const rest = nk.slice(2);
      ['אל־' + rest, 'א־' + rest, 'אל-' + rest, 'א-' + rest].forEach((vk) => {
        if (!(vk in obj)) obj[vk] = v;
      });
    });
  };
  add(PLACE_COORDS);
  add(PLACE_META);
}
expandPlaceAliasMaps();

function placePhrase(name, meta) {
  if (!meta || meta.skip) return name;
  const kind = meta.kind || '';
  const where = meta.where || '';
  if (!kind) return name;
  if (!where) return kind + ' ' + name;
  // «עיר הנמל אלמח׳א שבדרום־מערב המדינה» — never «מצר ימי» / never «ים ערב»
  if (/^[בלמ]/.test(where)) return kind + ' ' + name + ' ש' + where;
  return kind + ' ' + name + ' ' + where;
}

function annotatePlaces(text) {
  let s = canonAl(text);
  if (!s) return s;
  // Drop old parenthesis glosses — they read heavy
  s = s.replace(/\s*\([^)]{0,120}\)/g, '');
  const names = Object.keys(PLACE_META).sort((a, b) => b.length - a.length);
  const holes = [];
  const usedCanon = new Set();
  for (const name of names) {
    const canon = canonAl(name);
    if (usedCanon.has(canon)) continue;
    if (PLACE_META[name] && PLACE_META[name].skip) { usedCanon.add(canon); continue; }
    const idx = s.indexOf(name);
    if (idx < 0) continue;
    if (name.length <= 3) {
      const before = idx > 0 ? s[idx - 1] : ' ';
      const after = s[idx + name.length] || ' ';
      const isLetter = (ch) => /[\u0590-\u05FFa-zA-Z]/.test(ch);
      if (isLetter(before) || isLetter(after)) continue;
    }
    // Skip if already woven (kind word sits right before the name)
    const pre = s.slice(Math.max(0, idx - 28), idx);
    if (/(עיר הנמל|הבירה|מחוז|נפה|גבעה|מצר|עיירה|אזור|חזית|אי|רכס|כיכר|שבטים|שבטי|לוחמי|כוחות)\s+$/.test(pre)) {
      usedCanon.add(canon);
      continue;
    }
    const phrase = placePhrase(canonAl(name), PLACE_META[name]);
    // Drop redundant «בחוף/בנמל/באזור» right before a place that already carries its kind
    let from = idx;
    const red = s.slice(Math.max(0, idx - 10), idx);
    // «ובחוף אלמח׳א» → drop בחוף so we get «ועיר הנמל אלמח׳א…»
    const mRed = red.match(/בחוף\s*$/) || red.match(/בנמל\s*$/) || red.match(/באזור\s*$/);
    if (mRed) from = idx - mRed[0].length;
    const token = `\uE000${holes.length}\uE001`;
    holes.push(phrase);
    s = s.slice(0, from) + token + s.slice(idx + name.length);
    usedCanon.add(canon);
  }
  s = s.replace(/\uE000(\d+)\uE001/g, (_, n) => holes[Number(n)]);
  s = s.replace(/\s{2,}/g, ' ').replace(/\s+([,.;:!؟])/g, '$1').trim();
  s = s.replace(/מצר ימי/g, 'מצר');
  s = s.replace(/ים ערב/g, 'הים הערבי');
  s = s.replace(/\bאל (?!לה\b)([\u0590-\u05FF׳״])/g, 'אל$1');
  return tidyHebrewProse(s);
}

let map, geoLayer, saudiGeoLayer = null, eventLayers = [], islandLayers = [], islandGeoCache = null, data = null, geoCache = null, saudiGeoCache = null;
let miniGeo = null;
let layersOn = { houthi:true, plc:true, saudi:true, contested:true, combat:true, strike:true, vessel:true, port:true, statement:true };
let frontFloatTimer = null;
let frontFloatIdx = null;
let frontFloatWired = false;
let frontFloatAnchor = null;
let frontFloatOpenedAt = 0;
let highlightIds = new Set();
let highlightPulse = false;
let highlightTimer = null;
let straitHighlightLayer = null;
let straitLabelLayer = null;
let frontSpotLayer = null;
let islandTagLayers = [];
let keepHighlightUntil = 0;
let liveOverlay = { reports: [], scannedAt: null, sourcesOk: 0, sourcesTried: 0 };
const HOME_VIEW = [15.4, 47.6, 6];
const GOV_WEIGHT = {
  'YE-HD': 30, 'YE-MR': 8, 'YE-SH': 8, 'YE-AB': 5, 'YE-AD': 4, 'YE-SU': 2,
  'YE-HU': 6, 'YE-IB': 5, 'YE-SA': 4, 'YE-SN': 4, 'YE-SD': 3, 'YE-HJ': 3,
  'YE-DH': 3, 'YE-AM': 2, 'YE-MW': 1, 'YE-RA': 1,
  'YE-TA': 2, 'YE-MA': 2, 'YE-JA': 2, 'YE-LA': 2, 'YE-BA': 1, 'YE-DA': 1
};
let reportsShown = INITIAL_REPORTS;
const openFeedFps = new Set(); // keep "הרחב" open across auto-refresh
let mapFocus = false;
let mapDate = null; // YYYY-MM-DD in Asia/Jerusalem; null = today
let mapMode = 'day'; // day | range | all | control
let mapDateFrom = null;
let mapDateTo = null;
let activeEpoch = null;
let controlOverlayLayers = [];
const MAP_ROUND_START = '2026-07-01';
const CONFLICT_START = '2026-07-03';
const FRONT_HOME_VIEW = [15.35, 46.15, 6];
const MAX_MAP_PINS = 80;
const MAX_MAP_PINS_RANGE = 220;

function reportTime(r) { return r.at || r.t || data?.updatedAt; }
function eventTime(e) {
  if (!e) return '';
  if (e.at || e.t) return e.at || e.t;
  if (e.when) {
    const w = String(e.when).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(w)) return w + 'T12:00:00+03:00';
    return w;
  }
  return '';
}

function fmtStamp(ts) {
  if (!ts) return '';
  const d = new Date(ts);
  const date = d.toLocaleDateString('he-IL', { timeZone:'Asia/Jerusalem', day:'2-digit', month:'2-digit' });
  const time = d.toLocaleTimeString('he-IL', { timeZone:'Asia/Jerusalem', hour:'2-digit', minute:'2-digit', hour12:false });
  return date + ' · ' + time;
}

function fmtClock(ts) {
  if (!ts) return '';
  return new Date(ts).toLocaleTimeString('he-IL', {
    timeZone:'Asia/Jerusalem', hour:'2-digit', minute:'2-digit', hour12:false
  });
}


function jerusalemYmd(ts) {
  if (!ts) return '';
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Jerusalem', year: 'numeric', month: '2-digit', day: '2-digit'
  }).formatToParts(new Date(ts));
  const y = parts.find(p => p.type === 'year').value;
  const m = parts.find(p => p.type === 'month').value;
  const d = parts.find(p => p.type === 'day').value;
  return `${y}-${m}-${d}`;
}

function todayYmd() {
  return jerusalemYmd(Date.now());
}

function effectiveMapDate() {
  return mapDate || todayYmd();
}

function shiftYmd(ymd, deltaDays) {
  const [y, m, d] = ymd.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + deltaDays));
  const yy = dt.getUTCFullYear();
  const mm = String(dt.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(dt.getUTCDate()).padStart(2, '0');
  return `${yy}-${mm}-${dd}`;
}

function clampMapDate(ymd) {
  const today = todayYmd();
  if (!ymd || ymd < MAP_ROUND_START) return MAP_ROUND_START;
  if (ymd > today) return today;
  return ymd;
}

function escapeHtml(s) {
  return String(s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}


function collectMedia(obj) {
  const arr = obj && obj.media;
  if (!Array.isArray(arr)) return [];
  return arr.filter(m => m && m.src && (m.type === 'image' || m.type === 'video' || !m.type)).slice(0, 4);
}

function mediaBlock(items, compact) {
  const list = Array.isArray(items) ? items : collectMedia(items);
  if (!list.length) return '';
  return `<div class="media-block${compact ? ' compact' : ''}">` + list.map(m => {
    const cap = escapeHtml(m.captionHe || '');
    const credit = m.credit ? ` <span class="media-credit">${escapeHtml(m.credit)}</span>` : '';
    return `<figure class="media-fig"><button type="button" class="media-open" data-src="${escapeHtml(m.src)}"><img src="${escapeHtml(m.src)}" alt="${cap}"></button><figcaption>${cap}${credit}</figcaption></figure>`;
  }).join('') + `</div>`;
}

function wireMediaClicks(root) {
  if (!root) return;
  root.querySelectorAll('.media-open').forEach(btn => {
    btn.onclick = (ev) => {
      if (ev) { ev.preventDefault(); ev.stopPropagation(); }
      const src = btn.getAttribute('data-src');
      const flo = document.getElementById('media-float');
      if (!src || !flo) return;
      flo.hidden = false;
      flo.classList.add('show');
      flo.innerHTML = `<button type="button" class="media-float-close">סגור</button><img src="${escapeHtml(src)}" alt="">`;
      const close = () => { flo.classList.remove('show'); flo.hidden = true; flo.innerHTML = ''; };
      const cl = flo.querySelector('.media-float-close');
      if (cl) cl.onclick = close;
      flo.onclick = (e) => { if (e.target === flo) close(); };
    };
  });
}

function rtlOrgLead(text) {
  const t = String(text || '').trim().replace(/^\u200F+/, '');
  if (!t) return t;
  if (/^ה-/.test(t)) return '\u200F' + t;
  if (/^(UNHCR|WHO|IOM|OCHA|OHCHR|UNICEF|WFP|UN)\b/.test(t)) return '\u200Fה-' + t;
  return t;
}

function sourceOf(r) {
  if (r && r.source) return String(r.source).replace(/\s*\/\s*/g, ' · ');
  const t = (r && (r.text || r.labelHe)) || '';
  const m = t.match(/^דווח ב([^\s(:]+)/);
  if (m) return m[1];
  const m2 = t.match(/ב(אל־מַשְׁהַד|רויטרס|אלג׳זירה|אנאדולו|BBC|AFP|AP|Xinhua|IOM|OCHA)/);
  if (m2) return m2[1];
  return '';
}


/** Outlet lean for feed border color — first named outlet wins. */
const SOURCE_LEAN = {
  // Houthi / Sana'a-aligned
  'YPA': 'houthi', 'Saba': 'houthi', 'Al-Masirah': 'houthi', 'Al Masirah': 'houthi',
  'Al Manar': 'houthi', 'Al-Mayadeen': 'houthi', 'Al Mayadeen': 'houthi',
  'Al-Akhbar': 'houthi', 'Al Akhbar': 'houthi', 'IRNA': 'houthi',
  'Al-Alam': 'houthi', 'Al Alam': 'houthi', 'Press TV': 'houthi',
  'Ali Bk': 'houthi', 'Alibk': 'houthi',
  'Sabereen News': 'houthi', 'Sabereen': 'houthi', 'Naya Sabereen': 'houthi',
  'Al-Mihwar': 'houthi',
  'Yahya Saree': 'houthi', 'Saree': 'houthi', 'Mohammed Abdulsalam': 'houthi',
  'Baghdad Today': 'houthi',
  'Hazam al-Asad': 'houthi', 'Hezam al-Asad': 'houthi',
  'South24': 'south',
  'Fox News': 'intl', 'Rapid Response': 'intl', 'AP': 'intl',
  'Al-Araby Al-Jadeed': 'intl', 'Al-Akhbar': 'houthi',
  'Asharq News': 'gov', 'Politico': 'intl', 'Middle East Eye': 'intl',
  'Al Qahera News': 'intl', 'Al-Mamlaka': 'intl',
  'Yemenat': 'indep', 'Reuters': 'intl', 'CNBC': 'intl', 'WSJ': 'intl',
  'Mohammed Abdulsalam': 'houthi', 'Mohammed Ali al-Houthi': 'houthi',
  'Ansarollah': 'houthi', 'Saba': 'houthi',
  'Ali Al-Sakani': 'gov', 'Abdulqader al-Murtada': 'houthi',
  'Asharq Al-Awsat': 'gov', 'Alhurra': 'intl', 'Erem News': 'intl',
  'Okaz': 'gov', 'Al-Watan': 'gov',
  // Government / Saudi orbit
  'September Net': 'gov', '26 September': 'gov', '26sep': 'gov',
  'SPA': 'gov', 'Okaz': 'gov', 'Al-Watan': 'gov', 'Al Watan': 'gov',
  'Arab News': 'gov', 'Asharq Al-Awsat': 'gov', 'Asharq News': 'gov',
  'Al Arabiya': 'gov', 'Al Hadath': 'gov', 'AlArabiya al-Hadath': 'gov',
  'The National': 'gov',
  // Southern separatist / STC orbit
  'South24': 'south', 'Aden Observer': 'south', 'Aden Gad': 'south', 'AdenGhad': 'south',
  'Crater Sky': 'south',
  // Independent / no clear lean (incl. Almashhad)
  'Almashhad': 'indep', 'Alsahwa': 'indep', 'Barran Press': 'indep', 'Yemen Monitor': 'indep',
  'Al-Khlaasa': 'indep', 'Khbr': 'indep', 'Khlaasa': 'indep', 'Sheba Intelligence': 'indep',
  // International / UN
  'Reuters': 'intl', 'AFP': 'intl', 'AP': 'intl', 'BBC': 'intl', 'BBC Verify': 'intl',
  'Anadolu': 'intl', 'Xinhua': 'intl', 'China Daily': 'intl', 'DPA': 'intl', 'EFE': 'intl',
  'Guardian': 'intl', 'Al Jazeera': 'intl', 'Al Jazeera Net': 'intl',
  'IOM': 'intl', 'UNHCR': 'intl', 'OCHA': 'intl', 'OHCHR': 'intl', 'WHO': 'intl', 'WFP': 'intl',
  'Guardian': 'intl', 'The Guardian': 'intl',
  'UKMTO': 'intl', 'Middle East Eye': 'intl', 'Al-Monitor': 'intl', 'The New Arab': 'intl',
};

const LEAN_LABEL = {
  houthi: 'מזוהה חות׳ים',
  gov: 'מזוהה הממשלה הלגיטימית / סעודיה',
  south: 'ללא הזדהות',
  indep: 'ללא הזדהות',
  intl: 'ללא הזדהות',
  other: 'ללא הזדהות',
};

function primaryOutlet(sourceStr) {
  const parts = String(sourceStr || '').split(/\s*[·|/]\s*|\s+and\s+/i).map(s => s.trim()).filter(Boolean);
  return parts[0] || '';
}

function sourceLean(sourceStr) {
  const first = primaryOutlet(sourceStr);
  if (!first) return 'indep';
  if (SOURCE_LEAN[first]) return SOURCE_LEAN[first];
  const low = first.toLowerCase();
  for (const [name, lean] of Object.entries(SOURCE_LEAN)) {
    if (low.includes(name.toLowerCase()) || name.toLowerCase().includes(low)) return lean;
  }
  if (/ypa|masirah|manar|mayadeen|akhbar|irna|\bsaba\b|ali bk|sabereen|mihwar|saree|abdulsalam|al-alam|press tv/i.test(first)) return 'houthi';
  if (/spa|okaz|arabiya|hadath|september|26sep|arab news|asharq/i.test(first)) return 'gov';
  if (/south24|aden observer|crater|aden gad/i.test(first)) return 'south';
  if (/reuters|afp|\bap\b|bbc|anadolu|xinhua|iom|unhcr|ocha|al jazeera|guardian/i.test(first)) return 'intl';
  return 'indep';
}

const SOURCE_HOME = {
  'Almashhad': 'https://www.almashhad.news/',
  'אל־מַשְׁהַד': 'https://www.almashhad.news/',
  'Alsahwa': 'https://alsahwa-yemen.net/',
  'Al Jazeera': 'https://www.aljazeera.com/',
  'Al Jazeera Net': 'https://www.aljazeera.net/',
  'אלג׳זירה': 'https://www.aljazeera.net/',
  'Reuters': 'https://www.reuters.com/',
  'רויטרס': 'https://www.reuters.com/',
  'Arab News': 'https://www.arabnews.com/',
  'AFP': 'https://www.afp.com/',
  'AP': 'https://apnews.com/',
  'BBC': 'https://www.bbc.com/',
  'BBC Verify': 'https://www.bbc.com/',
  'Xinhua': 'https://english.news.cn/',
  'China Daily': 'https://www.chinadaily.com.cn/',
  'Anadolu': 'https://www.aa.com.tr/',
  'אנאדולו': 'https://www.aa.com.tr/',
  'IOM': 'https://www.iom.int/',
  'UNHCR': 'https://www.unhcr.org/',
  'OCHA': 'https://www.unocha.org/',
  'OHCHR': 'https://www.ohchr.org/',
  'WHO': 'https://www.who.int/',
  'YPA': 'https://en.ypagency.net/',
  'Aden Observer': 'https://www.adenobserver.com/',
  'Okaz': 'https://www.okaz.com.sa/',
  'Barran Press': 'https://barran.press/',
  'Yemen Monitor': 'https://www.yemenmonitor.com/',
  'The National': 'https://www.thenationalnews.com/',
  'Guardian': 'https://www.theguardian.com/',
  'DPA': 'https://www.dpa.com/',
  'UKMTO': 'https://www.ukmto.org/',
  'IRNA': 'https://en.irna.ir/',
  'Al-Akhbar': 'https://al-akhbar.com/',
  'Al-Mayadeen': 'https://english.almayadeen.net/',
  'WFP': 'https://www.wfp.org/',
  'Crater Sky': 'https://cratersky.net/',
  'Khbr': 'https://www.khbr.ye/'
};

function splitSources(sourceStr) {
  return String(sourceStr || '')
    .split(/\s*[·•|/]\s*|\s+\/\s+/)
    .map(s => s.replace(/\([^)]*\)/g, '').trim())
    .filter(Boolean);
}

/** One English display name per outlet — never mix EN/HE for the same source. */
function canonicalSourceName(name) {
  const n = String(name || '').trim();
  if (!n) return '';
  const key = n.toLowerCase().normalize('NFKC');
  const map = [
    [/almashhad|al-?mashhad|אל־?מַשְׁהַד|אל-משהד|mashhad/i, 'Almashhad'],
    [/alsahwa|אל־?צַחְוַה|sahwa/i, 'Alsahwa'],
    [/reuters|רויטרס/i, 'Reuters'],
    [/al\s*jazeera\s*net|אלג׳זירה\s*נט/i, 'Al Jazeera Net'],
    [/al\s*jazeera|אלג׳זירה/i, 'Al Jazeera'],
    [/anadolu|אנאדולו|\baa\b/i, 'Anadolu'],
    [/arab\s*news|ערב ניוז/i, 'Arab News'],
    [/xinhua|שינחואה/i, 'Xinhua'],
    [/china\s*daily|צ׳יינה דיילי/i, 'China Daily'],
    [/ypa|ypagency|yemen press agency|סוכנות הידיעות התימנית/i, 'YPA'],
    [/aden\s*observer|עדן אובזרבר/i, 'Aden Observer'],
    [/okaz|עוכאז/i, 'Okaz'],
    [/barran|באראן/i, 'Barran Press'],
    [/yemen\s*monitor|תימן מוניטור/i, 'Yemen Monitor'],
    [/the\s*national|דה נשיונל/i, 'The National'],
    [/guardian|גרדיאן/i, 'Guardian'],
    [/south24|סאות׳24/i, 'South24'],
    [/^סבא$|\bsaba\b/i, 'Saba'],
    [/al-?watan|אל־?וטן|الوطن/i, 'Al-Watan'],
    [/bbc/i, 'BBC'],
    [/\bafp\b/i, 'AFP'],
    [/\bap\b|associated press/i, 'AP'],
    [/\biom\b/i, 'IOM'],
    [/ocha/i, 'OCHA'],
    [/unhcr/i, 'UNHCR'],
    [/ohchr/i, 'OHCHR'],
    [/\bwho\b/i, 'WHO'],
    [/\bwfp\b/i, 'WFP'],
    [/khlaasa|אל־?חֻ׳לַאצַה|خلاصة/i, 'Al-Khlaasa'],
    [/khbr|ח׳בר/i, 'Khbr'],
    [/crater\s*sky|קרייטר/i, 'Crater Sky'],
    [/irna/i, 'IRNA'],
    [/dpa/i, 'DPA'],
    [/ukmto/i, 'UKMTO'],
    [/middle\s*east\s*eye|\bmee\b/i, 'Middle East Eye'],
    [/al-?monitor/i, 'Al-Monitor'],
    [/al-?masirah|מסירה/i, 'Al-Masirah'],
    [/al-?hadath/i, 'Al Hadath'],
    [/al\s*arabiya/i, 'Al Arabiya'],
    [/euronews/i, 'Euronews'],
    [/cgtn/i, 'CGTN'],
    [/janes/i, 'Janes'],
    [/al-?masirah|מסירה/i, 'Al-Masirah'],
    [/al\s*manar|אלמנאר|מנאר/i, 'Al Manar'],
    [/sheba\s*intelligence/i, 'Sheba Intelligence'],
    [/al-?mahriah|מהריה/i, 'Al-Mahriah'],
    [/new\s*arab/i, 'The New Arab'],
    [/middle\s*east\s*eye|\bmee\b/i, 'Middle East Eye'],
    [/france\s*24/i, 'France 24'],
    [/\bdw\b|deutsche\s*welle/i, 'DW'],
    [/rfi/i, 'RFI'],
    [/spa\b|saudi\s*press/i, 'SPA'],
    [/26\s*september|september\s*net/i, '26 September'],
    [/critical\s*threats/i, 'Critical Threats'],
    [/acled/i, 'ACLED'],
    [/telegram|טלגרם/i, 'Telegram'],
    [/\bx\b|twitter|טוויטר/i, 'X'],
    [/sabereen|צאברין|صابرين/i, 'Sabereen News'],
    [/ali\s*bk|עלי בק|علي بك/i, 'Ali Bk'],
    [/al-?mihwar|אלמחור|المحور/i, 'Al-Mihwar'],
    [/\bsana\b|סאנא/i, 'SANA']
  ];
  for (const [rx, en] of map) {
    if (rx.test(n) || rx.test(key)) return en;
  }
  return n;
}

function urlBelongsToOutlet(url, name) {
  if (!url || !name) return false;
  let host = '', href = '';
  try {
    const u = new URL(url);
    host = u.hostname.replace(/^www\./, '').toLowerCase();
    href = (host + (u.pathname || '')).toLowerCase();
  } catch (e) { return false; }
  const n = String(name).toLowerCase();
  const canon = canonicalSourceName(name);
  const aliases = [];
  if (/almashhad|mashhad|אל־מַשְׁהַד/i.test(canon + n)) aliases.push('almashhad.news');
  if (/reuters|רויטרס/i.test(canon + n)) aliases.push('reuters.com');
  if (/al jazeera|aljazeera|אלג׳זירה/i.test(canon + n)) aliases.push('aljazeera.com', 'aljazeera.net');
  if (/carnegie/i.test(canon + n)) aliases.push('carnegieendowment.org');
  if (/un news|\bun\b|או.?ם/i.test(canon + n)) aliases.push('news.un.org', 'un.org', 'press.un.org');
  if (/peacemaker|un peacemaker/i.test(canon + n)) aliases.push('peacemaker.un.org');
  if (/iom/i.test(canon + n)) aliases.push('iom.int');
  if (/ocha/i.test(canon + n)) aliases.push('unocha.org');

  if (/anadolu|אנאדולו/i.test(canon + n)) aliases.push('aa.com.tr');
  if (/arab news|ערב ניוז/i.test(canon + n)) aliases.push('arabnews.com');
  if (/xinhua|china daily|שינחואה|chinadaily/i.test(canon + n)) aliases.push('news.cn', 'xinhuanet.com', 'chinadaily');
  if (/\bypa\b|ypagency|yemen press|סוכנות/i.test(canon + n)) aliases.push('ypagency.net');
  if (/alsahwa|אל־צַחְוַה/i.test(canon + n)) aliases.push('alsahwa');
  if (/aden observer|adenobserver|עדן/i.test(canon + n)) aliases.push('adenobserver.com');
  if (/okaz|עוכאז/i.test(canon + n)) aliases.push('okaz.com.sa');
  if (/barran|באראן/i.test(canon + n)) aliases.push('barran.press');
  if (/yemen monitor|yemenmonitor|תימן מוניטור/i.test(canon + n)) aliases.push('yemenmonitor.com');
  if (/the national|thenational|דה נשיונל/i.test(canon + n)) aliases.push('thenationalnews.com');
  if (/guardian|גרדיאן/i.test(canon + n)) aliases.push('theguardian.com');
  if (/south24|סאות׳24/i.test(canon + n)) aliases.push('south24.net');
  if (/^saba$/i.test(canon) || /saba|סבא/i.test(n)) aliases.push('sabanew.net', 'saba.ye');
  if (/al-watan|alwatan|אל־וטן/i.test(canon + n)) aliases.push('alwatan.com.sa');
  if (/bbc/i.test(canon + n)) aliases.push('bbc.');
  if (/^afp$/i.test(canon)) aliases.push('afp.com');
  if (/^ap$/i.test(canon)) aliases.push('apnews.com');
  if (/^iom$/i.test(canon)) aliases.push('iom.int');
  if (/ocha/i.test(canon)) aliases.push('unocha.org', 'reliefweb.int');
  if (/unhcr/i.test(canon)) aliases.push('unhcr.org');
  if (/ohchr/i.test(canon)) aliases.push('ohchr.org');
  if (/^who$/i.test(canon)) aliases.push('who.int');
  if (/^wfp$/i.test(canon)) aliases.push('wfp.org');
  if (/khlaasa|al-khlaasa|אל־חֻ׳לַאצַה/i.test(canon + n)) aliases.push('khlaasa.net');
  if (/khbr|ח׳בר/i.test(canon + n)) aliases.push('khbr');
  if (/crater|קרייטר/i.test(canon + n)) aliases.push('crater');
  if (/irna/i.test(canon + n)) aliases.push('irna.ir');
  if (/state\.gov|מחלקת המדינה/i.test(canon + n)) aliases.push('state.gov');
  if (/ukmto/i.test(canon + n)) aliases.push('ukmto.org');
  if (/sana/i.test(canon + n)) aliases.push('sana.sy');
  if (/sabereen|sabren|naya/i.test(canon + n)) aliases.push('t.me/sabren', 't.me/naya_saberin');
  if (/ali bk|alibk|עלי בכר/i.test(canon + n)) aliases.push('t.me/alibk');
  if (/alomhoar|אלמחור/i.test(canon + n)) aliases.push('t.me/alomhoar');
  if (/masirah|אלמסירה/i.test(canon + n)) aliases.push('t.me/almasirah');
  if (/saree|יחיא סריע/i.test(canon + n)) aliases.push('t.me/saree_ye');
  if (/guardian|גרדיאן/i.test(canon + n)) aliases.push('theguardian.com');
  if (!aliases.length) {
    const token = n.replace(/[^a-z0-9]+/gi, '').slice(0, 8);
    if (token.length >= 4 && (host.includes(token.slice(0, 6)) || href.includes(token.slice(0, 6)))) return true;
    return false;
  }
  return aliases.some(a => {
    const al = a.replace(/^www\./, '').toLowerCase();
    if (al.includes('/')) return href.includes(al);
    return host.includes(al) || href.includes(al);
  });
}

function hostLabelFromUrl(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '').toLowerCase();
    const path = new URL(url).pathname.toLowerCase();
    if (/almashhad/.test(host)) return 'Almashhad';
    if (/reuters/.test(host)) return 'Reuters';
    if (/aljazeera/.test(host)) return 'Al Jazeera';
    if (/aa\.com\.tr/.test(host)) return 'Anadolu';
    if (/arabnews/.test(host)) return 'Arab News';
    if (/news\.cn|xinhua|chinadaily/.test(host)) return 'Xinhua';
    if (/ypagency/.test(host)) return 'YPA';
    if (/alsahwa/.test(host)) return 'Alsahwa';
    if (/yemenmonitor/.test(host)) return 'Yemen Monitor';
    if (/south24/.test(host)) return 'South24';
    if (/khlaasa/.test(host)) return 'Al-Khlaasa';
    if (/theguardian/.test(host)) return 'Guardian';
    if (/thenationalnews/.test(host)) return 'The National';
    if (/bbc\./.test(host)) return 'BBC';
    if (/unhcr/.test(host)) return 'UNHCR';
    if (/ukmto/.test(host)) return 'UKMTO';
    if (host === 't.me') {
      if (/alibk/i.test(path)) return 'Ali Bk';
      if (/sabren/i.test(path)) return 'Sabereen News';
      if (/naya_saberin/i.test(path)) return 'Naya Sabereen';
      if (/alomhoar/i.test(path)) return 'Al-Mihwar';
      if (/hezamalasad/i.test(path)) return 'Hazam al-Asad';
      if (/almasirah/i.test(path)) return 'Al-Masirah';
      if (/saree/i.test(path)) return 'Yahya Saree';
      return 'Telegram';
    }
    return host.split('.')[0] || host;
  } catch (e) { return ''; }
}

/**
 * No nameless orphans, no name-without-link, no homepage fallback.
 */
function normalizeSourceList(list, primaryUrl) {
  if (list == null) return [];
  const raw = [];
  const arr = Array.isArray(list) ? list : [list];
  arr.forEach((item) => {
    if (!item) return;
    if (typeof item === 'object' && (item.name || item.url)) {
      raw.push({ name: canonicalSourceName(item.name || 'מקור'), url: item.url || '' });
      return;
    }
    splitSources(String(item)).forEach((name) => {
      raw.push({ name: canonicalSourceName(name), url: '' });
    });
  });

  // Attach primaryUrl to the matching outlet only
  if (primaryUrl) {
    const owner = raw.find(x => urlBelongsToOutlet(primaryUrl, x.name));
    if (owner) owner.url = primaryUrl;
    else {
      // Infer English outlet name from the article host
      let label = 'Source';
      try {
        const host = new URL(primaryUrl).hostname.replace(/^www\./, '').toLowerCase();
        if (/almashhad/.test(host)) label = 'Almashhad';
        else if (/reuters/.test(host)) label = 'Reuters';
        else if (/aljazeera/.test(host)) label = 'Al Jazeera';
        else if (/aa\.com\.tr/.test(host)) label = 'Anadolu';
        else if (/arabnews/.test(host)) label = 'Arab News';
        else if (/news\.cn|xinhua|chinadaily/.test(host)) label = 'Xinhua';
        else if (/ypagency/.test(host)) label = 'YPA';
        else if (/alsahwa/.test(host)) label = 'Alsahwa';
        else if (/yemenmonitor/.test(host)) label = 'Yemen Monitor';
        else if (/south24/.test(host)) label = 'South24';
        else if (/khlaasa/.test(host)) label = 'Al-Khlaasa';
        else label = host || 'Source';
      } catch (e) {}
      raw.push({ name: label, url: primaryUrl });
    }
  }

  // Drop homepages; if the name doesn't own the URL, relabel from host instead of hiding the link
  const seen = new Set();
  const out = [];
  raw.forEach((row) => {
    let { name, url } = row;
    if (!url) return;
    if (isHomepageOrSectionUrl(url)) return;
    let host = '';
    try { host = new URL(url).hostname.replace(/^www\./, ''); } catch (e) { return; }
    if (!urlBelongsToOutlet(url, name) && name !== host && name !== 'Source' && name !== 'מקור') {
      name = hostLabelFromUrl(url) || host || name;
    }
    const k = (name || url).toLowerCase();
    if (seen.has(k) || seen.has(url)) return;
    seen.add(k); seen.add(url);
    out.push({ name, url });
  });
  return out;
}

/** Linked sources only — if we used it, it has a URL; otherwise omit. */
function sourceAnchors(sourceStrOrList, primaryUrl) {
  let items;
  if (Array.isArray(sourceStrOrList)) {
    items = normalizeSourceList(sourceStrOrList, primaryUrl);
  } else if (sourceStrOrList && typeof sourceStrOrList === 'object' && (sourceStrOrList.name || sourceStrOrList.url)) {
    items = normalizeSourceList([sourceStrOrList], primaryUrl);
  } else {
    items = normalizeSourceList(String(sourceStrOrList || ''), primaryUrl);
  }
  if (!items.length) {
    return primaryUrl
      ? `<a class="src-link" href="${escapeHtml(primaryUrl)}" target="_blank" rel="noopener">Source</a>`
      : '';
  }
  return items.map(({ name, url }) =>
    `<a class="src-link" href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(name)}</a>`
  ).join(' · ');
}


/** True if URL is just a site/section home — not a specific article. */
function isHomepageOrSectionUrl(url) {
  try {
    const u = new URL(url);
    let path = (u.pathname || '/').replace(/\/+$/, '') || '/';
    if (path === '/' || path === '') return true;
    // thin section paths without an article slug
    const thin = [
      '/world', '/world/middle-east', '/middle-east', '/en', '/news',
      '/hub/yemen', '/countries/yemen', '/yemen', '/gulf-and-arabian-peninsula/yemen'
    ];
    if (thin.includes(path.toLowerCase())) return true;
    // no digit/slug depth (e.g. /middle-east only)
    const parts = path.split('/').filter(Boolean);
    if (parts.length <= 1) return true;
    return false;
  } catch (e) { return true; }
}

/**
 * Source credits: link ONLY real article URLs matching the outlet.
 * Name without a real article URL is shown as plain text — never homepage.
 */
function sourceCreditsHtml(sourceStrOrList, primaryUrl) {
  let raw = [];
  if (Array.isArray(sourceStrOrList)) raw = sourceStrOrList;
  else if (sourceStrOrList && typeof sourceStrOrList === 'object') raw = [sourceStrOrList];
  else if (sourceStrOrList) {
    return sourceAnchors(sourceStrOrList, primaryUrl);
  }
  const parts = [];
  const seen = new Set();
  raw.forEach((item) => {
    let name = '', url = '';
    if (typeof item === 'string') name = item;
    else if (item && typeof item === 'object') {
      name = item.name || '';
      url = item.url || '';
    }
    name = String(name || '').trim();
    url = String(url || '').trim();
    if (!name && !url) return;
    if (url && isHomepageOrSectionUrl(url)) url = '';
    const key = (name || url).toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    if (url && name) {
      parts.push(`<a class="src-link" href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(name)}</a>`);
    } else if (name) {
      parts.push(escapeHtml(name));
    } else if (url) {
      parts.push(`<a class="src-link" href="${escapeHtml(url)}" target="_blank" rel="noopener">${escapeHtml(name || 'לדיווח')}</a>`);
    }
  });
  if (!parts.length && primaryUrl && !isHomepageOrSectionUrl(primaryUrl)) {
    parts.push(`<a class="src-link" href="${escapeHtml(primaryUrl)}" target="_blank" rel="noopener">לדיווח</a>`);
  }
  return parts.join(' · ');
}

function sourcesLine(list, primaryUrl) {
  const html = sourceCreditsHtml(list, primaryUrl);
  return html ? `<div class="srcs">מקור: ${html}</div>` : '';
}



function cleanBody(text) {
  let t = String(text || '');
  t = t.replace(/^דווח ב[\s\S]*?\)\s*:\s*/, '');
  t = t.replace(/^דווח ב[^:]{1,80}:\s*/, '');
  t = t.replace(/^\([^)]{0,160}\)\s*:\s*/, '');
  t = t.replace(/\+\s*0?3\b/g, '');
  t = t.replace(/^[,:·\-–—\s]+/, '');
  t = t.replace(/\s{2,}/g, ' ').trim();
  return t;
}

/**
 * Teaser (תכלול): ONE short complete sentence of essence — never … mid-cut.
 * Must be meaningfully shorter than the full report; details/numbers/quotes stay in full.
 * Prefer r.summary from data when the ingest wrote a real teaser.
 */
function summaryFrom(text) {
  let t = tidyHebrewProse(cleanBody(text));
  t = t.replace(/\([^)]*$/g, '');
  t = t.replace(/\([^)]{0,220}\)/g, ' ');
  t = t.replace(/\s{2,}/g, ' ').trim();

  let place = '';
  let body = t;
  const em = t.match(/^(.{2,40}?)\s*[—–]\s+([\s\S]+)$/);
  if (em) {
    place = em[1].replace(/[—–].*$/, '').trim();
    body = em[2].trim();
  }
  body = body.replace(/^«[^»]{4,100}»[,:]?\s*/, '');

  const clauses = body.split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(Boolean);
  let pick = clauses.filter(c =>
    /טוענ|דיווח|טיהר|הפיל|השתלט|התכתש|נפל|כבש|שחרר|גינ|הזהיר|הודיע|טען|נפגע|נהרג|תקיפ|מסר|התקדם|נסיג|יירט|הופל/.test(c)
  );
  let core = (pick[0] || clauses[0] || body).trim();

  core = core.split(/\s*;\s*/)[0].trim();
  if (core.length > 120) {
    const cut = core.slice(0, 120);
    const at = Math.max(cut.lastIndexOf('،'), cut.lastIndexOf(','), cut.lastIndexOf(' '));
    if (at > 60) core = cut.slice(0, at).trim();
    else core = cut.trim();
  }
  core = tidyHebrewProse(core);
  core = core.replace(/[—–,;:\s]+$/g, '');
  if (core && !/[.!?]$/.test(core)) core += '.';
  core = core.replace(/…+/g, '').replace(/\.{3,}/g, '.');

  place = (place.split(/\s+/)[0] || '');
  if (place.length > 18) place = place.slice(0, 18);
  const raw = place ? (place + ' — ' + core) : core;
  return tidyHebrewProse(annotatePlaces(raw));
}

/** Prefer ingest-written teaser; else derive a short one from full text. */

function confidenceSourcesHtml(r) {
  const items = [];
  const seen = new Set();
  const push = (name, url) => {
    const n = String(name || '').trim();
    if (!n || seen.has(n.toLowerCase())) return;
    seen.add(n.toLowerCase());
    items.push({ name: n, url: url || '' });
  };
  (r.confidenceSources || r.sources || []).forEach(s => {
    if (typeof s === 'string') push(s, '');
    else if (s && s.name) push(s.name, s.url || '');
  });
  String(r.source || '').split(/\s*[·|/]\s*/).forEach(p => push(p.trim(), ''));
  if (r.url && items.length) {
    // attach primary url to first outlet without url
    if (!items[0].url) items[0].url = r.url;
  } else if (r.url && !items.length) {
    push(primaryOutlet(r.source) || 'מקור', r.url);
  }
  if (!items.length) return '';
  const lis = items.map(it => {
    if (!it.url || (isHomepageOrSectionUrl && isHomepageOrSectionUrl(it.url))) return '';
    return `<li><a href="${escapeHtml(it.url)}" target="_blank" rel="noopener">${escapeHtml(it.name)}</a></li>`;
  }).filter(Boolean).join('');
  if (!lis) return '';
  return `<details class="conf-sources"><summary>מקורות לרמת הסמך</summary><ul>${lis}</ul></details>`;
}

function formatConfidence(r) {
  let c = r.confidence;
  if (c == null || c === '') return '';
  const n = Number(c);
  if (!Number.isFinite(n)) return '';
  const shown = (Math.round(n * 10) / 10).toFixed(1);
  return `רמת סמך: ${shown}/5`;
}

function hasArabicScript(s) {
  return /[\u0600-\u06FF]/.test(String(s || ''));
}

function hebrewFallbackReport(r) {
  const src = canonicalSourceName(sourceOf(r) || r.source || '') || 'מקור';
  const t = String((r && (r.text || r.summary)) || '');
  const places = [];
  const blob = t + ' ' + String(r && r.summary || '') + ' ' + String(r && r.place || '');
  (typeof PLACE_COORDS === 'object' ? Object.keys(PLACE_COORDS) : []).forEach(p => {
    if (p.length >= 3 && blob.includes(p) && places.indexOf(p) < 0) places.push(p);
  });
  if (data && data.governorates) {
    data.governorates.forEach(g => {
      if (g.nameAr && blob.includes(g.nameAr) && g.nameHe && places.indexOf(g.nameHe) < 0) places.push(g.nameHe);
    });
  }
  if (r && r.place && places.indexOf(r.place) < 0) places.unshift(r.place);
  const where = places.filter(p => p !== 'ריאד' && p !== 'תימן').slice(0, 2).join(' ו') || '';
  const loc = where || 'תימן';
  const kind = r && r.type;
  let summary, text;
  if (kind === 'strike' || kind === 'missile' || kind === 'launch' || kind === 'drone') {
    const w = kind === 'drone' ? 'כטב״ם' : /בליסט/.test(blob) ? 'טיל בליסטי' : 'טיל';
    const toward = loc && loc !== 'תימן' ? ` לעבר ${loc}` : '';
    summary = `דווח על שיגור ${w}${toward}.`;
    text = `לפי ${src}: ${summary}`;
  } else if (kind === 'combat' || kind === 'clash' || kind === 'capture') {
    summary = `לחימה ב${loc}.`;
    text = `לפי ${src}: מדווח על לחימה קרקעית ב${loc}.`;
  } else if (kind === 'port') {
    summary = `פגיעה בנמל ב${loc}.`;
    text = `לפי ${src}: דיווח על פגיעה בנמל ב${loc}.`;
  } else if (kind === 'vessel') {
    summary = `תקרית ימית${where ? ' מול ' + loc : ' מול תימן'}.`;
    text = `לפי ${src}: דיווח על תקרית בכלי שיט.`;
  } else {
    summary = where ? `עדכון מ${loc}.` : 'עדכון על תימן, בלי פירוט קינטי.';
    text = `לפי ${src}: ידיעה${where ? ' מ' + loc : ' על תימן'}.`;
  }
  return { summary, text };
}

function stripLiveSourcePrefix(s) {
  let t = String(s || '').trim();
  t = t.replace(/^(Ali Bk|Sabereen(?: News| Plus)?|Naya Sabereen|Al-Mihwar(?: News)?|Al-Masirah|Yahya Saree|YPA|Al Hadath|Al Arabiya(?: al-Hadath)?|Al Jazeera|BBC|ReliefWeb|Almashhad|Barran Press|Yemen Monitor|Arab News|Aden Observer|Anadolu|France 24|Guardian|Al-Monitor|The National|Crater Sky|Al-Mayadeen|Baghdad Today|Alsahwa|Hazam al-Asad)[:：]\s*/i, '');
  return t.trim();
}

function stripDeskCaveat(s) {
  return String(s || '')
    .replace(/\s*זו טענת צד בלבד[,.]?\s*(בלי אישור עצמאי מהדסק)?\.?/g, '')
    .replace(/\s*זו הודעת צד בלבד[,.]?\s*(בלי פירוט מבצעי מאומת מהדסק)?\.?/g, '')
    .replace(/\s*בלי אישור עצמאי מהדסק\.?/g, '')
    .replace(/\s*בלי פירוט מבצעי מאומת מהדסק\.?/g, '')
    .replace(/\s*לא אומת באופן עצמאי\.?/g, '')
    .replace(/\s*לא אומת עצמאית\.?/g, '')
    .replace(/\s*—?\s*בלי אימות עצמאי\.?/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function reportTeaser(r) {
  const custom = (r && (r.summary || r.summaryHe || r.teaser)) || '';
  if (r && r.live) {
    let s = (custom && String(custom).trim().length >= 8 && !hasArabicScript(custom))
      ? String(custom).trim()
      : hebrewFallbackReport(r).summary;
    s = stripDeskCaveat(stripLiveSourcePrefix(s));
    return rtlOrgLead(tidyHebrewProse(s));
  }
  if (custom && String(custom).trim().length >= 12 && !hasArabicScript(custom)) {
    const t = String(custom).trim();
    const alreadyPlaced = /במרחב|במרחבי|בחזית|בנמל|באי /.test(t);
    return rtlOrgLead(tidyHebrewProse(stripDeskCaveat(alreadyPlaced ? t : annotatePlaces(t))));
  }
  if (hasArabicScript(custom) || hasArabicScript(r && r.text)) {
    return rtlOrgLead(hebrewFallbackReport(r).summary);
  }
  return rtlOrgLead(summaryFrom(r && r.text));
}

function formatFullReport(text, r) {
  if (r && r.live) {
    const raw = String(text || '');
    if (raw && !hasArabicScript(raw)) return tidyHebrewProse(stripDeskCaveat(raw));
    return hebrewFallbackReport(r || { text }).text;
  }
  if (hasArabicScript(text)) {
    return hebrewFallbackReport(r || { text }).text;
  }
  let t = annotatePlaces(cleanBody(text));
  return tidyHebrewProse(stripDeskCaveat(t));
}

function headlineFrom(text) {
  // keep for map labels: compact place+action
  return summaryFrom(text);
}


function isSeaishPlaceName(name) {
  return /^(באב|מיון|מַיוּן|חַניש|חניש)/.test(String(name || ''));
}

/** True open water in Bab al-Mandab — not Mayun/Hanish islands, not Yemen mainland tip. */
function isOpenSeaNearBab(lat, lng) {
  if (lat == null || lng == null) return false;
  // Mayun / Perim island footprint (actual land, not the water to its west)
  if (Math.hypot(lat - 12.65, lng - 43.414) < 0.05) return false;
  // Hanish group
  if (Math.hypot(lat - 13.73, lng - 42.75) < 0.15) return false;
  // Yemen mainland / Bab tip / Dhubab coast
  if (lng >= 43.40) return false;
  // Djibouti / African shore
  if (lng <= 43.12) return false;
  return lat >= 11.95 && lat <= 13.15 && lng >= 42.85 && lng <= 43.40;
}

/** Open-sea / strait coords are only for vessel hits — not statements. Islands + mainland OK. */
function allowCoordsForCategory(cat, placeName, lat, lng) {
  if (!cat) return false;
  if (cat === 'vessel') return true;
  // Statements never on open water or on Bab/Mayun/Hanish place labels
  if (cat === 'statement') {
    if (isSeaishPlaceName(placeName) || isOpenSeaNearBab(lat, lng)) return false;
    return true;
  }
  // Non-vessel pins must not float in open Bab water
  if (isOpenSeaNearBab(lat, lng)) return false;
  // Island place names (Mayun/Hanish) are land for capture/combat/strike
  return true;
}

function guessCoords(text) {
  if (!text) return null;
  const t = String(text);
  const names = Object.keys(PLACE_COORDS).sort((a, b) => b.length - a.length);
  const hits = [];
  for (const name of names) {
    const idx = t.indexOf(name);
    if (idx >= 0) hits.push({ name, idx, len: name.length, lat: PLACE_COORDS[name][0], lng: PLACE_COORDS[name][1] });
  }
  if (!hits.length) return null;
  // Prefer earliest substantive place; Bab/Mayun only if nothing else in first 180 chars
  const seaish = /^(באב|מיון|מַיוּן|חַניש)/;
  const early = hits.filter(h => h.idx < 180 && !seaish.test(h.name));
  const pool = early.length ? early : hits.filter(h => !seaish.test(h.name));
  const use = (pool.length ? pool : hits).sort((a, b) => a.idx - b.idx || b.len - a.len)[0];
  return { lat: use.lat, lng: use.lng, place: use.name };
}

function isForeignActorText(text) {
  const t = String(text || '');
  // Saudi kinetic / vessel / port hits are map-worthy even if foreign outlet reports them
  // Arms sales / US approvals are NOT kinetic — do not exempt F-35 here
  if (/מכלית|כלי שיט|ספינ(?:ה|ות)|ארמקו|יַנְבּוּע|ינבוע|עַבְּהַא|ח׳מיס|טאיף|גַ׳אזאן|נַגְ׳רַאן|גִ׳דַּה|ראס תנורה|שיגור.{0,20}סעוד|תקיפ.{0,20}סעוד/.test(t)
      && /כטב״ם|טיל|שיגור|פגע|נפגע|הותקף|יירוט|סקיף/.test(t)
      && !/F-?35|מכיר(?:ה|ת) אפשרית|ממשל טראמפ|state\.gov|אישור מכירה/.test(t)) {
    return false;
  }
  // Pure foreign diplomacy / pledges / UN tallies — feed only
  if (/F-?35|מטוסי F-?35|מכירה אפשרית של .{0,40}לסעודיה|ממשל טראמפ אישר|state\.gov|סיוע הגנה אווירית מארה״ב|יירוט אמריקאי|מטוסי קרב אמריקאים לסעודיה/.test(t)
      && !/כטב״ם (?:חות׳י )?(?:פגע|הופל)|טיל בליסטי נפל|פגע בנמל|מכלית נפגעה/.test(t)) {
    return true; // US arms / diplomacy — reports only, never map
  }
  return /שר ההגנה האיטל|צי האיטל|פקיסטן תגן|דובר הצבא הפקיסט|רמטכ״ל פקיסט|איחוד האירופי|דובר מדיניות החוץ של האיחוד|אנואר אל־ענוני|CENTCOM|סין ביקשה|בייג׳ינג|טהראן לסייע|עומאן וטורקיה|טורקיה גינו|עומאן דיברה|מתווכים עומאניים|נָקָּת נפט|מעברי כלי שיט|תנועת כלי שיט|IOM|OCHA|WHO|UNHCR|OHCHR|עקורים פנימיים|עקירה פנימית|WFP|קטר גינה|גינוי חריף|גינו בנפרד|נציבות האיחוד האפריקאי/.test(t)
    && !/שיגור|כטב״ם|טיל בליסטי|פגע ב|הותקף|מכלית|ארמקו/.test(t);
}

/** Named Yemeni speaker (Houthi or government/tribal) — for statements only. */
function yemeniStatementActor(text) {
  const t = String(text || '');
  return /יחיא\s*ס[ַּ]?רִיע|סַרִיעַ|דובר אנצאר|אַבּוּ\s*רַאס|נַצְר\s*טַהַ\s*מֻצְטַפַא|רשאד אל־עלימי|מושל סעדה|שר הפנים אבראהים|הכחיש בחריפות|ממשלת אנצאר אללה בצנעא|סגן שר החוץ בממשלת אנצאר|מקור צבאי ממשלתי|דובר (?:הצבא|כוחות הממשלה|הכוחות)|הנהגת אנצאר|מועצת הנשיאות|יועץ ליו״ר/.test(t);
}

/** Quote / priority / capability claim — speech, not a battle on the ground. */
function isCapabilityOrPriorityStatement(text) {
  const t = String(text || '');
  const speech = /עדיפות עליונה|«עדיפות|הוכנסו לחזיתות|מערכי ארטילריה חדשים|טענה:\s*אתמול הוכנסו|שלא תתעכב»|ייחס את נפילת|כינה אותה|בתגובה אמר|הודיע כי/.test(t);
  const realFight = /התכתשות|התכתש|קרב מטווח|מטווח אפס|ניסיון חדיר|חדירה חות|התקפת־נגד|התקפת נגד|בלימת התקפ|השתלטו על אתר|השבת אתרים|חילופי מהלומות|ניסו להתקדם לעבר/.test(t);
  return speech && !realFight;
}

function hasGroundCombat(text) {
  const t = String(text || '');
  // Do NOT treat bare "ארטילריה" / "שחרור … עדיפות" as combat — those are often statements
  return /התכתשות|התכתש|עימות(?:ים)?|לחימה|קרבות?\s|קרב מטווח|מטווח אפס|ניסיון חדיר|חדירה חות|ירי ארטילרי|הפגז(?:ה|ות)|הפגיז|מרגמ(?:ה|ות)|חילופי אש|ארטילריה (?:כבדה )?(?:על|לעבר)|התקפת־נגד|התקפת נגד|בלימת התקפ|התבצר|השתלטו על אתר|השבת אתרים|שחרור\/פריצה|טענה לשחרור (?:עיירה|כפר|גבעה|אתר)|שליטה מלאה ברום|לוחמים מהאזור|חילופי מהלומות קרק|לחימה נוזלית|כוחות .+ התקדמ|ניסו להתקדם לעבר/.test(t);
}

function hasKineticStrike(text) {
  const t = String(text || '');
  // Real launch / impact / airstrike / drone hit — not merely the word in a speech
  return /טיל(?:ים)? בליסטי|טיל חות׳י|טילים בליסטיים נורו|נורו לעבר|כטב״ם (?:חות׳י )?(?:פגע|הופל|נושא)|הפלת כטב״ם|יירוט כטב״ם|שיגור(?:ים)? |תקיפ(?:ה|ות) אוויר(?:ית|יות)? (?:ממשלתי|סעודי|קואליצ|על )|תקיפות אוויר על|הפצצ|F-15|טייפון|שרידי מטוס קרב|מכות תגמול —|בליסטיים וכטב״ם על|דיווח על (?:כטב״ם|טיל|שיגור|תקיפה אוויר)|שיגור או פגיעה|אירוע קינטי/.test(t);
}

/**
 * Strict map categories:
 *  combat    = ground fighting only
 *  strike    = missiles / drones / airstrikes (land)
 *  vessel    = hit on ship / tanker at sea
 *  port      = hit on a port facility
 *  statement = speakers talking — not the battle itself
 *  null      = everything else (feed only)
 */
function classifyForMap(text, hintedType) {
  const t = String(text || '');
  if (!t.trim()) return null;

  // Explicit event types from data.json / live scan always win
  const hint = String(hintedType || '').toLowerCase();
  if (hint === 'vessel') return 'vessel';
  if (hint === 'port') return 'port';
  if (hint === 'statement' || hint === 'diplomacy' || hint === 'intel') return 'statement';
  if (hint === 'combat' || hint === 'clash' || hint === 'capture' || hint === 'military') return 'combat';
  if (hint === 'economy' || hint === 'humanitarian') return null;
  if (hint === 'missile' || hint === 'strike' || hint === 'launch') {
    if (/מכלית|כלי שיט|ספינ/.test(t) && !/עַבְּהַא|ח׳מיס|טאיף|נַגְ׳רַאן/.test(t)) return 'vessel';
    if (/(?:יַנְבּוּע|ינבוע|גִ׳דַּה|Jeddah|ראס תנורה).{0,30}(?:ארמקו|נמל)|(?:ארמקו|נמל).{0,30}(?:יַנְבּוּע|ינבוע|גַ׳אזאן)/.test(t)
        && /שיגור|כטב״ם|טיל|פגע|תקיפ/.test(t)) return 'port';
    return 'strike';
  }

  // US / Israel statements & arms deals — never map (feed + retro only)
  if (/F-?35|ממשל טראמפ|state\.gov|סיוע .{0,20}ארה״ב|מטוסי קרב לסעודיה|אישור מכירה/.test(t)
      && !/כטב״ם חות׳י פגע|טיל .{0,15}נפל|פגיעה בנמל|מכלית/.test(t)) return null;

  // Never map foreign diplomacy / UN tallies (Saudi kinetic exempted inside helper)
  if (isForeignActorText(t)) return null;
  if (/נטמן|הלוויה|אפליה כספית|כעס בקרב מפקדים/.test(t) && !hasGroundCombat(t) && !hasKineticStrike(t)) return null;

  // Capability / priority quotes first (e.g. «עדיפות עליונה» + new artillery systems)
  if (isCapabilityOrPriorityStatement(t)) return 'statement';

  const ground = hasGroundCombat(t);
  const strike = hasKineticStrike(t);
  // Vessel / port hits (map categories)
  if (/מכלית|כלי שיט|ספינ(?:ה|ות)|אוני[הת]|פגיעה ב(?:כלי|ספינ|מכלית)|תקיפ(?:ה|ות) על (?:מכלית|ספינ|כלי שיט)/.test(t)
      && !/נמל/.test(t.split(/[.!?]/)[0] || '')) {
    if (strike || /נפגע|פגיע|שיגור|כטב״ם|טיל/.test(t)) return 'vessel';
  }
  if (/(?:תקיפ|פגיע|שיגור|כטב״ם|טיל).{0,40}נמל|נמל.{0,40}(?:נפגע|הותקף|פגיע)|ינבוע|בְּיַנְבּוּע|Yanbu|ג׳דה|Jeddah|ראס תנורה/.test(t)) {
    if (strike || /נפגע|הותקף|פגיע|שיגור/.test(t)) return 'port';
  }

  const yemeniTalk = yemeniStatementActor(t) && /טען|אמר|גינה|הכריז|ייחס|מסר|הכחיש|הודיע|פרסם|בתגובה|כינה אותה|עדיפות/.test(t);

  // Pure Yemeni statement (speech / denial / political claim) without a battle narrative as the main event
  if (yemeniTalk && !ground) {
    if (strike && /יַנְבּוּע|ינבוע|ארמקו|עַבְּהַא|ח׳מיס|טאיף|גַ׳אזאן|נַגְ׳רַאן|גִ׳דַּה|מכה|סעודיה/.test(t)) {
      if (/יַנְבּוּע|ינבוע|ארמקו|נמל/.test(t)) return 'port';
      return 'strike';
    }
    // "Saree announced retaliatory strikes" = statement; "missile fell on X" = strike
    if (strike && /נפל|פגע|הופל בשטח|התרסק|נורו לעבר מוקדי|תקיפות אוויר על מחנה|תקיפה אווירית על ריכוז/.test(t)) {
      return 'strike';
    }
    return 'statement';
  }

  // If both ground and air appear, prefer the dominant framing in the opening
  if (ground && strike) {
    const head = t.slice(0, 120);
    if (/תקיפ(?:ה|ות) אוויר|כטב״ם|טיל/.test(head) && !/קרב|התכתש|בלימת התקפ|חדיר/.test(head)) return 'strike';
    return 'combat';
  }
  if (ground) return 'combat';
  if (strike) return 'strike';

  // hintedType only if already strict
  if (hintedType === 'missile' || hintedType === 'strike') {
    if (hasKineticStrike(t)) return 'strike';
  }
  if (hintedType === 'combat' || hintedType === 'clash' || hintedType === 'capture') {
    if (hasGroundCombat(t)) return 'combat';
  }

  return null;
}

function inferType(text, fallback) {
  const c = classifyForMap(text, fallback);
  if (c === 'strike') return /כטב|טיל|missile/i.test(text || '') ? 'missile' : 'strike';
  if (c === 'combat') return /השתלט|נפילת|שחרור|השבת/.test(text || '') ? 'capture' : 'combat';
  if (c === 'statement') return 'statement';
  return fallback || 'military';
}

function pinCategory(typeOrText) {
  const t = String(typeOrText || '').toLowerCase();
  if (t === 'strike' || t === 'missile' || t === 'launch') return 'strike';
  if (t === 'vessel') return 'vessel';
  if (t === 'port') return 'port';
  if (t === 'statement' || t === 'diplomacy' || t === 'intel') return 'statement';
  if (t === 'combat' || t === 'clash' || t === 'capture' || t === 'military' || t === 'redeploy' || t === 'deployment' || t === 'position') return 'combat';
  // if full text passed:
  return classifyForMap(typeOrText, '') || 'combat';
}

function jitter(lat, lng, i) {
  const a = (i % 8) * 0.785;
  const r = 0.012 + (i % 5) * 0.004;
  return [lat + Math.sin(a) * r, lng + Math.cos(a) * r];
}

function isWeakHeadline(h) {
  if (!h) return true;
  const s = h.trim();
  if (s.length < 8) return true;
  if (/^(אירוע|עדכון|מקור גלוי|desk)/i.test(s)) return true;
  return false;
}

async function fetchData() {
  const res = await fetch('/data.json?ts=' + Date.now());
  return res.json();
}

function applyLiveOverlay(base) {
  if (!base) return base;
  const have = new Set((base.reports || []).map(r => (r.fp || '') + '|' + (r.url || '')));
  const extra = (liveOverlay.reports || []).filter(r => {
    if (!r || !r.url) return false;
    const k = (r.fp || '') + '|' + (r.url || '');
    if (have.has(k) || have.has('|' + r.url)) return false;
    have.add(k); have.add('|' + r.url);
    return true;
  }).map(r => {
    if (!hasArabicScript(r.summary) && !hasArabicScript(r.text)) return r;
    const he = hebrewFallbackReport(r);
    return { ...r, summary: he.summary, text: he.text };
  });
  if (extra.length) base.reports = [...extra, ...(base.reports || [])];
  if (liveOverlay.scannedAt) {
    const liveT = Date.parse(liveOverlay.scannedAt);
    const baseT = Date.parse(base.updatedAt || 0);
    if (Number.isFinite(liveT) && (!Number.isFinite(baseT) || liveT > baseT)) base.updatedAt = liveOverlay.scannedAt;
  }
  return base;
}

function stampText() {
  const age = Math.max(0, Math.round((Date.now() - new Date(data.updatedAt).getTime()) / 1000));
  const scan = liveOverlay.scannedAt
    ? ` · סריקה חיה ${liveOverlay.sourcesOk || 0}/${liveOverlay.sourcesTried || 0} מקורות`
    : ' · סריקה חיה כל 5 דק׳';
  return `עודכן ${fmtClock(data.updatedAt)} · לפני ${age} שנ׳${scan}`;
}

let liveInflight = null;

function isJunkLive(r) {
  const s = String((r && r.summary) || '').trim();
  if (!s || s.length < 28) return true;
  if (r && r.type === 'rally') return true;
  if (/עצרות/.test(s) && !/ירי|תקיפה|הרוג|טיל/.test(s)) return true;
  if (/«\s*»/.test(s) || /^[:\s«»]/.test(s)) return true;
  if ((s.match(/חות׳ים/g) || []).length >= 3) return true;
  return false;
}

function ingestLivePayload(live) {
  if (!live || live.ok === false) return false;
  liveOverlay.scannedAt = live.scannedAt || liveOverlay.scannedAt;
  liveOverlay.sourcesOk = live.sourcesOk || 0;
  liveOverlay.sourcesTried = live.sourcesTried || 0;
  const incoming = Array.isArray(live.reports) ? live.reports : [];
  const have = new Set((liveOverlay.reports || []).map(r => r.url));
  incoming.forEach(r => {
    if (r && r.url && !have.has(r.url)) {
      if (hasArabicScript(r.summary) || hasArabicScript(r.text)) {
        const he = hebrewFallbackReport(r);
        r = { ...r, summary: he.summary, text: he.text };
      }
      if (isJunkLive(r)) return;
      r = { ...r, summary: stripDeskCaveat(r.summary), text: stripDeskCaveat(r.text) };
      liveOverlay.reports.push(r);
      have.add(r.url);
    }
  });
  liveOverlay.reports = (liveOverlay.reports || []).filter(r => !isJunkLive(r));
  if (liveOverlay.reports.length > 60) liveOverlay.reports = liveOverlay.reports.slice(0, 60);
  return true;
}

function paintLive() {
  if (!data) return;
  data = applyLiveOverlay(data);
  const el = document.getElementById('updated');
  if (el) el.textContent = stampText();
  renderFeed(data);
  try { renderEvents(data); } catch (e) {}
}

async function hydrateSnapshot() {
  if (liveOverlay.reports.length) return;
  try {
    const res = await fetch('/live-reports.json?ts=' + Date.now());
    if (!res.ok) return;
    ingestLivePayload(await res.json());
  } catch (e) { /* no snapshot yet */ }
}

async function pullLive(opts) {
  const silent = !!(opts && opts.silent);
  if (!liveInflight) {
    liveInflight = (async () => {
      try {
        const res = await fetch('/api/scan?ts=' + Date.now());
        if (!res.ok) throw new Error('scan ' + res.status);
        ingestLivePayload(await res.json());
      } catch (e) {
        console.warn('live scan', e);
      }
    })().finally(() => { liveInflight = null; });
    liveInflight.then(() => paintLive());
  }
  if (silent) return liveInflight;
  await liveInflight;
  paintLive();
}

function renderSituation(d) {
  const el = document.getElementById('situation');
  if (!el) return;
  const s = d.situationHe || {};
  if (!s.summaryHe) { el.innerHTML = ''; return; }
  el.innerHTML = `<strong>מצב כללי</strong>
    <p>${escapeHtml(tidyHebrewProse(s.summaryHe))}</p>`;
}

function renderCasualties(d) {
  const el = document.getElementById('casualties');
  if (!el) return;
  const c = d.casualties || {};
  const bullets = c.bulletsHe || [];
  const summary = (c.summaryHe || c.noteHe || '').trim();
  const li = bullets.map(b => {
    const raw = String(b || '').trim();
    const m = raw.match(/^([^:]{2,48}):\s*([\s\S]+)$/);
    if (m) return `<li><strong>${escapeHtml(m[1])}</strong> — ${escapeHtml(annotatePlaces(m[2]))}</li>`;
    return `<li>${escapeHtml(annotatePlaces(raw))}</li>`;
  }).join('');
  el.innerHTML = `
    ${summary ? `<p class="cas-sum">${escapeHtml(annotatePlaces(summary))}</p>` : ''}
    ${bullets.length ? `<ul>${li}</ul>` : ''}
    ${sourcesLine(c.sources)}`;
}

function computeControlShares(d) {
  const sums = { houthi: 0, plc: 0, contested: 0 };
  (d.governorates || []).forEach(g => {
    if (String(g.id || '').startsWith('SA-')) return;
    const w = GOV_WEIGHT[g.id] || 1;
    const k = g.control === 'houthi' ? 'houthi' : (g.control === 'plc' ? 'plc' : 'contested');
    sums[k] += w;
  });
  (d.islandControl || []).forEach(isl => {
    const k = isl.control === 'houthi' ? 'houthi' : (isl.control === 'plc' ? 'plc' : 'contested');
    sums[k] += 0.6;
  });
  if ((d.governorates || []).some(g => g.id === 'YE-TA' && g.control !== 'houthi')) {
    sums.houthi += 1;
    sums.contested = Math.max(0, sums.contested - 1);
  }
  const tot = sums.houthi + sums.plc + sums.contested || 1;
  const h = Math.round(100 * sums.houthi / tot);
  const p = Math.round(100 * sums.plc / tot);
  return { houthi: h, plc: p, contested: Math.max(0, 100 - h - p) };
}

function renderBars(d) {
  const shares = computeControlShares(d);
  const rows = (d.control || []).filter(c => c.id !== 'saudi').map(c => {
    const pct = shares[c.id] != null ? shares[c.id] : c.pct;
    const color = c.id === 'plc' ? COLORS.plc : (c.color || COLORS[c.id]);
    return `<div class="bar" title="${escapeHtml(c.note||'')}">
      <h3>${escapeHtml(c.name)}</h3>
      <div class="pct" style="color:${color}">${pct}%</div>
      <div class="track"><div class="fill" style="width:${pct}%;background:${color}"></div></div>
    </div>`;
  }).join('');
  document.getElementById('bars').innerHTML = rows;
}

function stripNikud(s) {
  return String(s || '').replace(/[\u0591-\u05C7]/g, '').replace(/[׳'״"]/g, '');
}

function feedClusterKey(r) {
  const s = stripNikud(`${r.place || ''} ${r.summary || ''} ${r.text || ''}`);
  const ymd = jerusalemYmd(reportTime(r)) || String(r.at || '').slice(0, 10);
  const t = String(r.type || 'x').toLowerCase();
  let b = 'other';
  if (/כהבוב|באב אלמנדב|מיון|דובאב/.test(s)) b = 'bab';
  else if (/אלואזעיה|אלצריפה|שרירה|אלעלקמה/.test(s)) b = 'waziyah';
  else if (/מאריב|ואדי דנה|ואדי עבידה/.test(s)) b = 'marib';
  else if (/אלגוף|אלחזם/.test(s)) b = 'jawf';
  else if (/לחג|אלאעברה|אלמצארבה/.test(s)) b = 'lahj';
  else if (/אלחודיידה|אלחוחה/.test(s)) b = 'hudaydah';
  else if (/ינבוע|נפט|סואץ|ארמקו/.test(s) || t === 'economy') b = 'energy';
  else if (/צנעא/.test(s)) b = 'sanaa';
  if (t === 'combat' || t === 'strike' || t === 'economy') return ymd + '|' + t + '|' + b;
  return (r.fp || r.url || s.slice(0, 40));
}

function sortedReports(d) {
  const raw = [...(d.reports || [])]
    .filter(r => r && r.url && !isHomepageOrSectionUrl(r.url))
    .filter(r => !/israel|jpost|haaretz|ynet|walla\.co|israelnationalnews|timesofisrael/i.test((r.source || '') + ' ' + (r.url || '')))
    .sort((a, b) => new Date(reportTime(b)) - new Date(reportTime(a)));
  const seen = new Map();
  const out = [];
  for (const r of raw) {
    const k = feedClusterKey(r);
    const prev = seen.get(k);
    if (!prev) { seen.set(k, r); out.push(r); continue; }
    // Same front, same day, same type — keep the richer item, drop the ticker repeat
    const score = (x) => String(x.summary || '').length + (String(x.summary).match(/\d/g) || []).length * 10;
    if (score(r) > score(prev) + 12) {
      const i = out.indexOf(prev);
      if (i >= 0) out[i] = r;
      seen.set(k, r);
    }
  }
  return out;
}

function renderFeed(d) {
  const all = sortedReports(d);
  const slice = all.slice(0, reportsShown);
  const fc = document.getElementById('feed-count'); if (fc) fc.textContent = `${Math.min(reportsShown, all.length)} / ${all.length}`;
  document.getElementById('feed').innerHTML = slice.map((r, i) => {
    const ts = reportTime(r);
    const src = sourceOf(r);
    const fp = r.fp || ('i' + i);
    const sum = reportTeaser(r);
    const full = (typeof formatFullReport === 'function' ? formatFullReport(r.text, r) : annotatePlaces(cleanBody(r.text)));
    const srcHtml = sourceAnchors(src, r.url || '');
    // Only offer expand when the full text adds real detail
    const sumBare = sum.replace(/\([^)]*\)/g, '').replace(/\s+/g, ' ').trim();
    const fullBare = full.replace(/\([^)]*\)/g, '').replace(/\s+/g, ' ').trim();
    const fullCore = fullBare.replace(/זו טענת צד בלבד[\s\S]*$/g, '').replace(/זו הודעת צד בלבד[\s\S]*$/g, '').replace(/^לפי [^:]{2,40}:\s*/, '').trim();
    const worthExpand = fullCore.length >= Math.max(sumBare.length + 55, Math.floor(sumBare.length * 1.35));
    const isOpen = openFeedFps.has(fp);
    const leanRaw = sourceLean(src);
    const lean = (leanRaw === 'south' || leanRaw === 'intl' || leanRaw === 'other') ? 'indep' : leanRaw;
    const confHtml = formatConfidence(r);
    const confSrc = r.live ? '' : confidenceSourcesHtml(r);
    return `<article class="card lean-${lean}${worthExpand ? ' expandable' : ''}${isOpen ? ' open' : ''}" data-i="${i}" data-fp="${escapeHtml(fp)}" title="${escapeHtml(LEAN_LABEL[lean] || '')}"${worthExpand ? ' role="button" tabindex="0" aria-expanded="' + (isOpen ? 'true' : 'false') + '"' : ''}>
      <div class="meta">
        <time datetime="${escapeHtml(ts)}">${escapeHtml(fmtStamp(ts))}</time>
        <span class="src-wrap">${srcHtml}</span>
      </div>
      <p class="headline">${escapeHtml(sum)}</p>
      ${mediaBlock(r.media)}
      ${worthExpand ? `<div class="full">
        <p class="full-label">הדיווח המלא</p>
        <p>${escapeHtml(full)}</p>
        ${sourcesLine([src], r.url || '')}
        ${confSrc}
      </div>
      <div class="actions">
        <button type="button" class="toggle">${isOpen ? 'הסתר פרטים' : 'הרחב לפרטים'}</button>
      </div>` : `<div class="actions">${(r.url && !isHomepageOrSectionUrl(r.url)) ? `<a class="src-link" href="${escapeHtml(r.url)}" target="_blank" rel="noopener">לדיווח</a>` : ''}</div>${confSrc}`}
      ${confHtml ? `<div class="card-conf">${confHtml}</div>` : ''}
    </article>`;
  }).join('');

  function setCardOpen(card, open) {
    if (!card || !card.classList.contains('expandable')) return;
    card.classList.toggle('open', open);
    card.setAttribute('aria-expanded', open ? 'true' : 'false');
    const btn = card.querySelector('.toggle');
    if (btn) btn.textContent = open ? 'הסתר פרטים' : 'הרחב לפרטים';
    const fp = card.dataset.fp;
    if (fp) {
      if (open) openFeedFps.add(fp);
      else openFeedFps.delete(fp);
    }
  }

  function toggleCard(card) {
    if (!card || !card.classList.contains('expandable')) return;
    setCardOpen(card, !card.classList.contains('open'));
  }

  document.querySelectorAll('.card.expandable').forEach(card => {
    card.onclick = (ev) => {
      const t = ev.target;
      if (!t) return;
      // Links, nested buttons, and confidence <details> keep their own behavior
      if (t.closest('a, button, details, summary, input, textarea, select, .media-block, figure')) return;
      toggleCard(card);
    };
    card.onkeydown = (ev) => {
      if (ev.key !== 'Enter' && ev.key !== ' ') return;
      if (ev.target !== card) return;
      ev.preventDefault();
      toggleCard(card);
    };
  });

  document.querySelectorAll('.card .toggle').forEach(btn => {
    btn.onclick = (ev) => {
      if (ev) { ev.preventDefault(); ev.stopPropagation(); }
      const card = btn.closest('.card');
      toggleCard(card);
    };
  });

  const more = document.getElementById('btn-more-reports');
  if (reportsShown < all.length) {
    more.hidden = false;
    more.textContent = `הצג דיווחים קודמים (+${Math.min(MORE_STEP, all.length - reportsShown)})`;
  } else {
    more.hidden = true;
  }
  wireMediaClicks(document.getElementById('feed'));
}

function miniFillFor(id, d) {
  if (id === 'YE-MY' || id === 'YE-HN') {
    const want = id === 'YE-MY' ? 'mayun' : 'hanish';
    const meta = ((d && d.islandControl) || []).find(x => x.id === want);
    const ctrl = (meta && meta.control) || 'houthi';
    return COLORS[ctrl] || COLORS.houthi;
  }
  const g = ((d && d.governorates) || []).find(x => x.id === id) || {};
  const ctrl = g.control === 'mixed' ? 'contested' : (g.control === 'saudi' ? 'saudi' : g.control);
  return COLORS[ctrl] || COLORS.contested || '#334155';
}

function parsePathNums(cmd) {
  return String(cmd).replace(/[A-Za-z]/g, ' ').trim().split(/[\s,]+/).map(Number).filter(n => Number.isFinite(n));
}

function pathBBox(dcmds) {
  let minx = 1e9, miny = 1e9, maxx = -1e9, maxy = -1e9;
  (dcmds || []).forEach(cmd => {
    const nums = parsePathNums(cmd);
    for (let i = 0; i + 1 < nums.length; i += 2) {
      minx = Math.min(minx, nums[i]); maxx = Math.max(maxx, nums[i]);
      miny = Math.min(miny, nums[i+1]); maxy = Math.max(maxy, nums[i+1]);
    }
  });
  if (!Number.isFinite(minx) || minx > maxx) return null;
  return [minx, miny, maxx, maxy];
}

function pathCentroid(dcmds) {
  let sx = 0, sy = 0, n = 0;
  (dcmds || []).forEach(cmd => {
    const nums = parsePathNums(cmd);
    for (let i = 0; i + 1 < nums.length; i += 2) { sx += nums[i]; sy += nums[i+1]; n++; }
  });
  if (!n) return null;
  return [sx / n, sy / n];
}

function unionBox(a, b) {
  if (!b) return a;
  if (!a) return b.slice();
  return [Math.min(a[0], b[0]), Math.min(a[1], b[1]), Math.max(a[2], b[2]), Math.max(a[3], b[3])];
}

function frontMiniSvg(front, d) {
  const mini = miniGeo;
  if (!mini || !mini.features || !mini.features.length) return '<p class="front-float-miss">אין מפת אזור</p>';
  const locator = (front && front.mapFocus) || {};
  const ids = new Set(locator.ids || []);
  const name = (front && front.name) || '';
  const isBab = (ids.has('YE-MY') || ids.has('YE-HN')) && !ids.has('YE-TA');
  if (!ids.size) {
    if (/ואזעיה|מערב תעז/.test(name)) ids.add('YE-TA');
    else if (/מח׳א|מחא|ד׳ובאב|חוף הים/.test(name)) ids.add('YE-TA');
    else if (/מאריב/.test(name)) ids.add('YE-MA');
    else if (/דאלע/.test(name)) ids.add('YE-DA');
    else if (/ג׳וף|חזם/.test(name)) ids.add('YE-JA');
    else if (/באב\s*אלמ|מיון|חניש/.test(name)) { ids.add('YE-LA'); ids.add('YE-MY'); ids.add('YE-HN'); }
  }
  // Always the whole country as a locator — never crop/zoom into a governorate.
  let box = null;
  (mini.features || []).forEach(f => { box = unionBox(box, pathBBox(f.d)); });
  const pad = 10;
  const vx = box ? (box[0] - pad) : 0;
  const vy = box ? (box[1] - pad) : 0;
  const vw = box ? (box[2] - box[0] + pad * 2) : (mini.w || 240);
  const vh = box ? (box[3] - box[1] + pad * 2) : (mini.h || 280);
  const featById = {};
  (mini.features || []).forEach(f => { featById[f.id] = f; });
  const paths = (mini.features || []).map(f => {
    const on = ids.has(f.id);
    const col = miniFillFor(f.id, d);
    const fill = on ? col : '#8aa0b4';
    const op = on ? 0.96 : 0.78;
    const stroke = on ? '#f8fafc' : '#c5d4e2';
    const sw = on ? 1.2 : 0.55;
    return (f.d || []).map(dp =>
      `<path d="${dp}" fill="${fill}" fill-opacity="${op}" stroke="${stroke}" stroke-width="${sw}"/>`
    ).join('');
  }).join('');
  let strait = '';
  if (isBab) {
    strait = `<g class="strait-mark">
      <path d="M58,236 C64,244 70,250 78,252" fill="none" stroke="#7dd3fc" stroke-width="1.4" stroke-dasharray="3 2.2" opacity="0.95"/>
      <text x="78" y="268" fill="#c8e7fa" font-size="7" text-anchor="start">מצר באב אלמַנדב</text>
    </g>`;
  }
  let spotSvg = '';
  let sx, sy, lab;
  if (Array.isArray(locator.miniSpot) && locator.miniSpot.length === 2) {
    sx = locator.miniSpot[0]; sy = locator.miniSpot[1];
    lab = locator.miniLabel || '';
  } else if (isBab) {
    const my = featById['YE-MY'];
    const c = my && pathCentroid(my.d);
    if (c) { sx = c[0]; sy = c[1]; lab = 'מַיוּן'; }
  }
  if (sx != null) {
    spotSvg = `<g>
      <circle cx="${sx}" cy="${sy}" r="6.2" fill="#fbbf24" fill-opacity="0.28" stroke="#fde68a" stroke-width="1.3"/>
      <circle cx="${sx}" cy="${sy}" r="2.2" fill="#fbbf24" stroke="#111" stroke-width="0.5"/>
      ${lab ? `<text x="${sx}" y="${sy - 9}" fill="#fde68a" font-size="7.2" text-anchor="middle">${escapeHtml(lab)}</text>` : ''}
    </g>`;
  }
  return `<svg viewBox="${vx} ${vy} ${vw} ${vh}" class="front-mini" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
    <rect x="${vx}" y="${vy}" width="${vw}" height="${vh}" fill="#1a2836"/>
    ${paths}${strait}${spotSvg}
  </svg>`;
}

function hideFrontFloat() {
  const el = document.getElementById('front-float');
  if (!el) return;
  el.classList.remove('show');
  el.hidden = true;
  el.innerHTML = '';
  frontFloatIdx = null;
  frontFloatAnchor = null;
  document.querySelectorAll('.front-map-btn[aria-expanded="true"]').forEach(b => b.setAttribute('aria-expanded', 'false'));
}

function placeFrontFloat(anchor) {
  const el = document.getElementById('front-float');
  if (!el || !anchor) return;
  el.hidden = false;
  el.classList.add('show');
  const r = anchor.getBoundingClientRect();
  const w = el.offsetWidth || 280;
  const h = el.offsetHeight || 320;
  let left = r.right + 2;
  if (left + w > window.innerWidth - 8) left = r.left - w - 2;
  if (left < 8) left = 8;
  let top = r.top;
  if (top + h > window.innerHeight - 8) top = Math.max(8, window.innerHeight - h - 8);
  if (window.innerWidth < 800) {
    left = 8;
    el.style.right = '8px';
    el.style.left = '8px';
    el.style.width = 'auto';
    top = Math.min(r.bottom + 8, window.innerHeight - h - 8);
  } else {
    el.style.right = 'auto';
    el.style.width = '';
    el.style.left = left + 'px';
  }
  el.style.top = Math.max(8, top) + 'px';
}

function textOverlap(a, b) {
  const na = String(a || '').replace(/\s+/g, ' ').trim();
  const nb = String(b || '').replace(/\s+/g, ' ').trim();
  if (!na || !nb) return false;
  if (na === nb) return true;
  if (na.includes(nb) || nb.includes(na)) return true;
  const ta = new Set(na.split(/\s+/).filter(w => w.length > 3));
  const tb = nb.split(/\s+/).filter(w => w.length > 3);
  if (!tb.length) return false;
  return tb.filter(w => ta.has(w)).length / tb.length > 0.68;
}

function clearIslandTags() {
  islandTagLayers.forEach(l => { try { map.removeLayer(l); } catch (e) {} });
  islandTagLayers = [];
}

function placeIslandTags(d) {
  clearIslandTags();
  if (!map || !window.L) return;
  (d && d.islandControl || []).forEach(isl => {
    const hit = (isl.id === 'mayun' && highlightIds.has('YE-MY')) || (isl.id === 'hanish' && highlightIds.has('YE-HN'));
    if (!hit || isl.lat == null || isl.lng == null) return;
    const icon = L.divIcon({
      className: 'isl-tag-wrap',
      html: `<div class="isl-tag">${escapeHtml(isl.nameHe)}</div>`,
      iconSize: [78, 22],
      iconAnchor: [-8, 11]
    });
    const m = L.marker([isl.lat, isl.lng], { icon, interactive: false, keyboard: false, zIndexOffset: 2200 });
    m.addTo(map);
    islandTagLayers.push(m);
  });
}

function clearStraitOverlay() {
  if (straitHighlightLayer && map) {
    try { map.removeLayer(straitHighlightLayer); } catch (e) {}
    straitHighlightLayer = null;
  }
  if (straitLabelLayer && map) {
    try { map.removeLayer(straitLabelLayer); } catch (e) {}
    straitLabelLayer = null;
  }
}

function placeStraitOverlay() {
  clearStraitOverlay();
  if (!map || !window.L) return;
  straitHighlightLayer = L.polyline(
    [[12.63, 43.36], [12.655, 43.39], [12.68, 43.42]],
    { color: '#7dd3fc', weight: 3.2, dashArray: '8 6', opacity: 0.95, interactive: false }
  ).addTo(map);
  const icon = L.divIcon({
    className: 'isl-tag-wrap',
    html: '<div class="isl-tag strait-tag">מצר באב אלמַנדב</div>',
    iconSize: [118, 22],
    iconAnchor: [8, 28]
  });
  straitLabelLayer = L.marker([12.66, 43.50], { icon, interactive: false, keyboard: false, zIndexOffset: 2300 });
  straitLabelLayer.addTo(map);
  syncStraitForZoom();
}

function syncStraitForZoom() {
  if (!map) return;
  const z = map.getZoom();
  // Always show the strait name when the overlay is on — including country-scale zoom.
  try {
    const el = straitLabelLayer && (straitLabelLayer.getElement ? straitLabelLayer.getElement() : straitLabelLayer._icon);
    if (el) el.style.display = '';
  } catch (e) {}
  if (straitHighlightLayer && straitHighlightLayer.setStyle) {
    try { straitHighlightLayer.setStyle({ weight: z >= 9 ? 3.2 : 2.6, opacity: z >= 7 ? 0.95 : 0.8 }); } catch (e) {}
  }
}

function resetHomeView() {
  if (!map) return;
  try { map.setView(HOME_VIEW.slice(0, 2), HOME_VIEW[2], { animate: true }); } catch (e) {}
}

function scrollToMap() {
  const el = document.querySelector('.toolbar') || document.getElementById('map-wrap');
  if (!el) return;
  const jump = () => {
    let node = el.parentElement;
    while (node && node !== document.documentElement) {
      const st = (typeof getComputedStyle === 'function') ? getComputedStyle(node) : null;
      const oy = st && (st.overflowY || st.overflow);
      if (st && (oy === 'auto' || oy === 'scroll' || oy === 'overlay') && node.scrollHeight > node.clientHeight + 8) {
        const top = el.getBoundingClientRect().top - node.getBoundingClientRect().top + node.scrollTop - 6;
        try { node.scrollTop = Math.max(0, top); } catch (e) {}
      }
      node = node.parentElement;
    }
    const y = el.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.scrollTop || 0) - 4;
    const top = Math.max(0, y);
    try { window.scrollTo({ top, left: 0, behavior: 'instant' }); } catch (e) {
      try { window.scrollTo(0, top); } catch (e2) {}
    }
    try { document.documentElement.scrollTop = top; } catch (e) {}
    try { document.body.scrollTop = top; } catch (e) {}
    try { el.scrollIntoView({ behavior: 'auto', block: 'start', inline: 'nearest' }); } catch (e) {}
  };
  jump();
  try { requestAnimationFrame(jump); } catch (e) {}
  setTimeout(jump, 50);
  setTimeout(() => { try { map && map.invalidateSize(); } catch (e) {} }, 50);
  setTimeout(() => { try { map && map.invalidateSize(); } catch (e) {} }, 280);
}

function setHighlightChip(front) {
  const chip = document.getElementById('map-chip');
  if (!chip) return;
  chip.classList.add('chip-hl');
  chip.innerHTML = `<span>מציג: ${escapeHtml(front.name || 'החזית')}</span><button type="button" class="chip-clear" id="btn-clear-hl">בטל הדגשה</button>`;
  const btn = document.getElementById('btn-clear-hl');
  if (btn) {
    btn.onclick = (ev) => {
      if (ev) { ev.preventDefault(); ev.stopPropagation(); }
      clearMapHighlight({ home: true });
      resetHomeView();
    };
  }
}

function clearMapHighlight(opts) {
  highlightIds = new Set();
  highlightPulse = false;
  if (highlightTimer) { clearTimeout(highlightTimer); highlightTimer = null; }
  clearStraitOverlay();
  if (frontSpotLayer && map) {
    try { map.removeLayer(frontSpotLayer); } catch (e) {}
    frontSpotLayer = null;
  }
  clearIslandTags();
  try { document.body.classList.remove('front-hl'); } catch (e) {}
  const chip = document.getElementById('map-chip');
  if (chip) chip.classList.remove('chip-hl');
  applyMapFilters();
  if (opts && opts.home) resetHomeView();
}

function highlightFrontOnMap(front) {
  const loc = front.mapFocus || {};
  highlightIds = new Set(loc.ids || []);
  highlightPulse = true;
  clearStraitOverlay();
  if (frontSpotLayer && map) {
    try { map.removeLayer(frontSpotLayer); } catch (e) {}
    frontSpotLayer = null;
  }
  clearIslandTags();
  try { document.body.classList.add('front-hl'); } catch (e) {}
  applyMapFilters();

  const applyView = () => {
    if (!map) return;
    try { map.setView(FRONT_HOME_VIEW.slice(0, 2), FRONT_HOME_VIEW[2], { animate: true }); } catch (e) {}
    if (frontSpotLayer && map) {
      try { map.removeLayer(frontSpotLayer); } catch (e) {}
      frontSpotLayer = null;
    }
    if (loc.spot && loc.spot.length >= 2 && window.L) {
      frontSpotLayer = L.circle([loc.spot[0], loc.spot[1]], {
        radius: loc.spotRadius || 9000,
        color: '#f8fafc',
        weight: 2.4,
        fillColor: '#fbbf24',
        fillOpacity: 0.28,
        className: 'front-spot',
        interactive: false
      }).addTo(map);
    }
    if ((highlightIds.has('YE-MY') || highlightIds.has('YE-HN')) && window.L) {
      placeStraitOverlay();
      placeIslandTags(data);
    }
  };

  applyView();
  setHighlightChip(front);
  scrollToMap();
  setTimeout(() => {
    try { map && map.invalidateSize(); } catch (e) {}
    applyView();
  }, 420);
  if (highlightTimer) clearTimeout(highlightTimer);
  highlightTimer = setTimeout(() => {
    highlightPulse = false;
    applyMapFilters();
  }, 8000);
}

function showFrontFloat(idx, anchor, d) {
  const fronts = [...(d.fronts || [])].sort((a, b) => (a.importance||99) - (b.importance||99));
  const f = fronts[idx];
  const el = document.getElementById('front-float');
  if (!f || !el) return;
  frontFloatIdx = idx;
  frontFloatAnchor = anchor;
  frontFloatOpenedAt = Date.now();
  document.querySelectorAll('.front-map-btn').forEach((b, i) => b.setAttribute('aria-expanded', i === idx ? 'true' : 'false'));
  const locator = f.mapFocus || {};
  el.innerHTML = `
    <p class="front-float-title">${escapeHtml(f.name)}</p>
    ${f.whereHe ? `<p class="front-float-where">${escapeHtml(f.whereHe)}</p>` : ''}
    ${frontMiniSvg(f, d)}
    <div class="front-float-key">
      <span><span class="sw" style="background:${COLORS.houthi}"></span>חות׳ים</span>
      <span><span class="sw" style="background:${COLORS.plc}"></span>ממשלה לגיטימית</span>
      <span><span class="sw" style="background:${COLORS.contested}"></span>במחלוקת</span>
    </div>
    ${locator.view || (locator.spot && locator.spot.length) ? `<button type="button" class="front-float-go">עבור למפה הגדולה</button>` : ''}`;
  const go = el.querySelector('.front-float-go');
  if (go && (locator.view || (locator.spot && locator.spot.length))) {
    go.onclick = (ev) => {
      if (ev) { ev.preventDefault(); ev.stopPropagation(); try { ev.stopImmediatePropagation(); } catch (e) {} }
      keepHighlightUntil = Date.now() + 2200;
      hideFrontFloat();
      scrollToMap();
      highlightFrontOnMap(f);
      try { requestAnimationFrame(scrollToMap); } catch (e) {}
      setTimeout(scrollToMap, 80);
      setTimeout(scrollToMap, 360);
    };
  }
  el.onmouseenter = () => { if (frontFloatTimer) { clearTimeout(frontFloatTimer); frontFloatTimer = null; } };
  el.onmouseleave = () => { frontFloatTimer = setTimeout(hideFrontFloat, 220); };
  placeFrontFloat(anchor);
}

function renderFronts(d) {
  const fronts = [...(d.fronts || [])].sort((a, b) => (a.importance||99) - (b.importance||99));
  document.getElementById('fronts').innerHTML = fronts.map((f, i) => {
    const plain = (f.plainHe || '').trim();
    const sum = (f.summaryHe || f.status || '').trim();
    const dir = (f.direction || '').trim();
    const detail = (f.detailHe || '').trim();
    const showSum = sum && !textOverlap(plain, sum);
    const showDir = dir && !textOverlap(plain, dir) && !textOverlap(sum, dir);
    const showDetail = detail && !textOverlap(sum, detail) && detail.length > Math.max(80, (sum.length || 0) + 40);
    return `<article class="front-card">
      <div class="front-head">
        <strong>${escapeHtml(f.name)}</strong>
        <button type="button" class="front-map-btn" data-i="${i}" aria-expanded="false" aria-label="הצג איפה זה בתימן">מפה</button>
      </div>
      ${f.whereHe ? `<p class="front-where">${escapeHtml(f.whereHe)}</p>` : ''}
      ${plain ? `<p class="front-plain">${escapeHtml(plain)}</p>` : ''}
      ${showSum ? `<p class="front-sum">${escapeHtml(annotatePlaces(sum))}</p>` : ''}
      ${showDir ? `<p class="front-dir">${escapeHtml(annotatePlaces(dir))}</p>` : ''}
      <div class="srcs">מקור: ${sourceAnchors(f.sources || [], '')}</div>
      ${showDetail ? `<div class="full">${escapeHtml(annotatePlaces(detail))}</div>
      <button type="button" class="toggle-front">הצג עוד</button>` : ''}
    </article>`;
  }).join('');
  document.querySelectorAll('.toggle-front').forEach(btn => {
    btn.onclick = () => {
      const card = btn.closest('.front-card');
      const open = card.classList.toggle('open');
      btn.textContent = open ? 'הסתר' : 'הצג עוד';
    };
  });
  const canHover = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  document.querySelectorAll('.front-map-btn').forEach(btn => {
    const idx = parseInt(btn.dataset.i, 10);
    const open = () => {
      if (frontFloatTimer) { clearTimeout(frontFloatTimer); frontFloatTimer = null; }
      showFrontFloat(idx, btn, d);
    };
    const delayHide = () => { frontFloatTimer = setTimeout(hideFrontFloat, 280); };
    if (canHover) {
      btn.onmouseenter = open;
      btn.onmouseleave = delayHide;
    }
    btn.onclick = (ev) => {
      if (ev) { ev.preventDefault(); ev.stopPropagation(); }
      open();
    };
    btn.onpointerdown = (ev) => { if (ev) ev.stopPropagation(); };
  });
}

function controlByIso(d) {
  const m = {};
  (d.governorates || []).forEach(g => { m[g.id] = g; });
  return m;
}

function controlLayerKey(ctrl) {
  if (ctrl === 'houthi' || ctrl === 'plc' || ctrl === 'saudi') return ctrl;
  return 'contested';
}
function controlVisible(ctrl) {
  return !!layersOn[controlLayerKey(ctrl)];
}

function styleFeature(feature, byIso) {
  const iso = feature.properties.shapeISO;
  const g = byIso[iso] || {};
  const ctrl = (g.control === 'mixed') ? 'contested' : g.control;
  const c = COLORS[ctrl] || COLORS.contested || '#334155';
  const on = controlVisible(ctrl);
  const hl = highlightIds.has(iso);
  return {
    fillColor: c,
    fillOpacity: on ? (hl ? 0.88 : (highlightIds.size ? 0.22 : 0.55)) : 0,
    color: hl ? '#f8fafc' : '#0b0f14',
    weight: hl ? 2.6 : (on ? 1.2 : 0.6),
    opacity: on ? 1 : 0.2,
    className: hl && highlightPulse ? 'gov-hl-pulse' : (hl ? 'gov-hl' : '')
  };
}

function bindGov(feature, layer, byIso) {
  const iso = feature.properties.shapeISO;
  const g = byIso[iso];
  if (!g) return;
  const heRaw = canonAl(String(g.nameHe || '').trim());
  const isSaudi = String(g.id || iso || '').startsWith('SA-');
  let heTitle;
  if (g.id === 'YE-SA' || /\(עיר\)|עיר\b|אמאנה|أمانة/.test(heRaw + (g.nameAr||''))) {
    heTitle = heRaw.replace(/\s*\(עיר\)\s*$/, '').trim() || heRaw;
  } else if (/^מחוז\b/.test(heRaw) || /\(מחוז\)/.test(heRaw)) {
    heTitle = heRaw.replace(/\s*\(מחוז\)\s*/g, ' ').replace(/^מחוז\s+/, 'מחוז ').replace(/\s+/g, ' ').trim();
    if (!/^מחוז\b/.test(heTitle)) heTitle = 'מחוז ' + heTitle;
  } else {
    heTitle = 'מחוז ' + heRaw;
  }
  const arRaw = String(g.nameAr || '').trim();
  let arTitle = arRaw;
  if (arRaw && !/^محافظة\b/.test(arRaw) && !/^أمانة\b/.test(arRaw) && g.id !== 'YE-SA') {
    arTitle = `محافظة ${arRaw}`;
  }
  if (isSaudi) {
    // Saudi provinces: name only — kingdom is separate from PLC on the map
    layer.bindPopup(`<strong>${escapeHtml(heTitle)}</strong><br/><span dir="rtl">${escapeHtml(arTitle)}</span>`);
    return;
  }
  layer.bindPopup(`<strong>${escapeHtml(heTitle)}</strong><br/><span dir="rtl">${escapeHtml(arTitle)}</span><br/>
    שליטה: ${LABELS[g.control]||g.control}<br/><small>${escapeHtml(g.note||'')}</small>`);
}

function clearEvents() {
  eventLayers.forEach(l => map.removeLayer(l));
  eventLayers = [];
}

function buildMapPins(d) {
  const byFp = new Map();
  const push = (pin) => {
    if (!pin || pin.lat == null || pin.lng == null) return;
    if (isWeakHeadline(pin.labelHe)) return;
    if (!pin.url || isHomepageOrSectionUrl(pin.url)) return;
    const cat = classifyForMap(pin.text || pin.labelHe || '', pin.type);
    if (!cat) return; // humanitarian / foreign / other → feed only
    if (!allowCoordsForCategory(cat, pin.place, pin.lat, pin.lng)) return;
    pin.mapCat = cat;
    pin.type = cat === 'statement' ? 'statement' : (cat === 'strike' ? (pin.type === 'missile' ? 'missile' : 'strike') : (pin.type || 'combat'));
    const fp = pin.fp || (pin.labelHe + '|' + pin.at);
    const prev = byFp.get(fp);
    if (!prev) { byFp.set(fp, pin); return; }
    const keep = String(pin.text || '').length > String(prev.text || '').length ? pin : prev;
    const other = keep === pin ? prev : pin;
    if ((!keep.media || !keep.media.length) && other.media && other.media.length) keep.media = other.media;
    byFp.set(fp, keep);
  };

  // Live reports first (best text + source + url). Pin kinetic ones at the named place.
  sortedReports(d).forEach(r => {
    const blob = [r.summary, r.text, r.place].filter(Boolean).join('\n');
    let lat = (typeof r.lat === 'number') ? r.lat : null;
    let lng = (typeof r.lng === 'number') ? r.lng : null;
    let place = r.place || '';
    if (lat == null || lng == null) {
      const g = guessCoords(blob);
      if (!g) return;
      lat = g.lat; lng = g.lng; if (!place) place = g.place;
    } else if (!place) {
      const g = guessCoords(blob);
      if (g) place = g.place;
    }
    const label = (r.summary && !isWeakHeadline(r.summary) && !hasArabicScript(r.summary))
      ? r.summary
      : summaryFrom(blob);
    if (isWeakHeadline(label)) return;
    const cat = classifyForMap(blob, r.type);
    if (!cat) return;
    if (r.live && !(cat === 'strike' || cat === 'combat' || cat === 'vessel' || cat === 'port')) return;
    if (!allowCoordsForCategory(cat, place, lat, lng)) return;
    push({
      fp: r.fp || blob.slice(0, 80),
      at: reportTime(r),
      type: cat === 'statement' ? 'statement' : inferType(blob, r.type || cat),
      lat, lng, place,
      labelHe: label,
      text: (r.text && !hasArabicScript(r.text)) ? r.text : blob,
      source: sourceOf(r),
      url: r.url || '',
      priority: r.priority || 2,
      media: collectMedia(r),
      live: !!r.live
    });
  });

  // Enrich / add from events array
  (d.events || []).forEach(ev => {
    const blob = ev.text || ev.note || ev.labelHe || ev.titleHe || '';
    let lat = ev.lat, lng = ev.lng, place = ev.place || '';
    if (lat == null || lng == null) {
      const skipGuess = /^(desk-update|humanitarian|diplomacy|intel)$/i.test(ev.type || '');
      if (skipGuess) return;
      const g = guessCoords((ev.titleHe || ev.labelHe || '') + ' ' + blob);
      if (!g) return;
      lat = g.lat; lng = g.lng; place = g.place;
    } else if (!place) {
      const g = guessCoords((ev.titleHe || '') + ' ' + blob);
      if (g) place = g.place;
    }
    const rawLabel = ev.labelHe || ev.titleHe || '';
    const label = rawLabel && !isWeakHeadline(rawLabel) ? rawLabel : headlineFrom(blob);
    if (!blob && !label) return;
    push({
      fp: ev.fp || ev.id || label,
      at: eventTime(ev) || reportTime(ev),
      type: inferType(blob || label, (ev.type || 'military').toLowerCase()),
      lat, lng, place,
      labelHe: label,
      text: blob || label,
      source: ev.source || sourceOf(ev),
      url: ev.url || '',
      priority: ev.priority || 2,
      mapOnly: !!ev.mapOnly,
      media: collectMedia(ev)
    });
  });

  const day = effectiveMapDate();
  const today = todayYmd();
  const from = mapDateFrom || CONFLICT_START;
  const to = mapDateTo || today;
  let pins = [...byFp.values()].filter(p => {
    const y = jerusalemYmd(p.at);
    if (!y) return false;
    if (mapMode === 'control') return false;
    if (mapMode === 'all') return y >= CONFLICT_START && y <= today;
    if (mapMode === 'range') return y >= from && y <= to;
    return y === (day || today);
  }).sort((a, b) => new Date(b.at) - new Date(a.at));
  // Collapse spatial duplicates same day (report+event or near-identical)
  const seen = new Map();
  const deduped = [];
  for (const p of pins) {
    if (p.lat == null || p.lng == null) continue;
    const cat = p.mapCat || classifyForMap(p.text || '', p.type) || pinCategory(p.type);
    const k = [jerusalemYmd(p.at), Math.round(p.lat * 100) / 100, Math.round(p.lng * 100) / 100, cat].join('|');
    const prev = seen.get(k);
    if (!prev) { seen.set(k, p); deduped.push(p); continue; }
    // Prefer explicit mapOnly event / longer text
    if ((p.mapOnly && !prev.mapOnly) || String(p.text || '').length > String(prev.text || '').length) {
      const i = deduped.indexOf(prev);
      if (i >= 0) deduped[i] = p;
      seen.set(k, p);
    }
  }
  return deduped.slice(0, (mapMode === 'range' || mapMode === 'all') ? MAX_MAP_PINS_RANGE : MAX_MAP_PINS);
}

function popupHtml(ev) {
  let sum = (ev.labelHe && !isWeakHeadline(ev.labelHe)) ? ev.labelHe : summaryFrom(ev.text || ev.labelHe || '');
  if (sum.length > 140) sum = sum.slice(0, 137).replace(/\s+\S*$/, '') + '…';
  const full = cleanBody(ev.text || '');
  let anchors = sourceAnchors(ev.source || ev.sources || '', ev.url || '');
  if (!anchors && ev.url && !isHomepageOrSectionUrl(ev.url)) {
    const name = canonicalSourceName(sourceOf(ev)) || hostLabelFromUrl(ev.url) || 'לדיווח';
    anchors = `<a class="src-link" href="${escapeHtml(ev.url)}" target="_blank" rel="noopener">${escapeHtml(name)}</a>`;
  }
  const srcLine = anchors ? `<p class="pop-src">מקור: ${anchors}</p>` : '';
  const cat = ev.mapCat || classifyForMap(ev.text || '', ev.type) || pinCategory(ev.type);
  const catHe = cat === 'strike' ? 'שיגור' : cat === 'vessel' ? 'פגיעה בכלי שיט' : cat === 'port' ? 'פגיעה בנמל' : cat === 'statement' ? 'התבטאות' : 'לחימה קרקעית';
  const needExpand = full && full.length > sum.length + 20;
  return `<p class="pop-h">${escapeHtml(sum)}</p>
    <p class="pop-meta">${escapeHtml(fmtStamp(ev.at))}${ev.place ? ' · ' + escapeHtml(annotatePlaces(ev.place)) : ''} · ${catHe}</p>
    ${srcLine}
    ${mediaBlock(ev.media, true)}
    ${needExpand ? `<div class="pop-full">${escapeHtml(annotatePlaces(full))}</div>
    <button type="button" class="pop-toggle">הרחב לפרטים</button>` : ''}`;
}

function renderEvents(d) {
  if (!map) return;
  clearEvents();
  if (mapMode === 'control') {
    drawIslands(d);
    drawControlOverlays(activeEpoch);
    const chip = document.getElementById('map-chip');
    if (chip && !chip.classList.contains('chip-hl')) {
      const lab = (activeEpoch && activeEpoch.labelHe) ? activeEpoch.labelHe : '';
      const dt = (activeEpoch && activeEpoch.at) ? activeEpoch.at.slice(8,10) + '.' + activeEpoch.at.slice(5,7) + '.' + activeEpoch.at.slice(0,4) : '';
      chip.textContent = lab ? `שליטה ב־${dt} · ${lab}` : 'ציר שליטה — בלי סיכות אירועים';
    }
    return;
  }
  clearControlOverlays();
  if (highlightIds.size) {
    drawIslands(d);
    return;
  }
  const pins = buildMapPins(d);
  const chip = document.getElementById('map-chip');
  if (chip) {
    const fmt = (ymd) => {
      const [y, m, dd] = String(ymd || '').split('-');
      return (dd && m && y) ? `${dd}.${m}.${y}` : '';
    };
    const today = todayYmd();
    let label;
    if (mapMode === 'all') label = `${fmt(CONFLICT_START)}–${fmt(today)} · כל העימות`;
    else if (mapMode === 'range') label = `${fmt(mapDateFrom || CONFLICT_START)}–${fmt(mapDateTo || today)}`;
    else label = fmt(effectiveMapDate());
    chip.textContent = pins.length
      ? `${pins.length} אירועים ב־${label} · לחיצה = פרטים`
      : `אין אירועים ממופים ל־${label}`;
  }
  const placeCount = {};
  pins.forEach(ev => {
    const t = (ev.type || '').toLowerCase();
    const cat = ev.mapCat || classifyForMap(ev.text || ev.labelHe || '', t) || pinCategory(t);
    if (cat === 'strike' && !layersOn.strike) return;
    if (cat === 'combat' && !layersOn.combat) return;
    if (cat === 'vessel' && !layersOn.vessel) return;
    if (cat === 'port' && !layersOn.port) return;
    if (cat === 'statement' && !layersOn.statement) return;
    if (!['strike','combat','vessel','port','statement'].includes(cat)) return;
    const key = ev.place || (ev.lat + ',' + ev.lng);
    const n = placeCount[key] || 0;
    placeCount[key] = n + 1;
    const [lat, lng] = n ? jitter(ev.lat, ev.lng, n) : [ev.lat, ev.lng];
    const ageH = (Date.now() - new Date(ev.at).getTime()) / 3600000;
    const fresh = ageH <= 6 ? ' fresh' : '';
    const pinClass = cat === 'strike' ? 'strike' : cat === 'vessel' ? 'vessel' : cat === 'port' ? 'port' : cat === 'statement' ? 'statement' : 'combat';
    const icon = L.divIcon({
      className: '',
      html: `<div class="ev ${pinClass}${fresh}" title="${escapeHtml(ev.labelHe || '')}"></div>`,
      iconSize: [18, 18], iconAnchor: [9, 9]
    });
    const m = L.marker([lat, lng], { icon, zIndexOffset: Math.round(1000 - ageH) })
      .bindPopup(popupHtml(ev), { maxWidth: (ev.media && ev.media.length) ? 320 : 300, maxHeight: 360, autoPan: false, keepInView: false, autoClose: false, closeOnClick: false });
    m.addTo(map);
    eventLayers.push(m);
  });
    // Keep Mayun/Hanish above Aden polygons after event redraw — no circle pins
    drawIslands(d);
}

function ensureMap(d) {
  if (map) return;
  map = L.map('map', { zoomControl: true, attributionControl: true, closePopupOnClick: false }).setView([18.5, 45.5], 5.4);
  try { window.__yemenMap = map; } catch (e) {}
  map.on('zoomend', syncStraitForZoom);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: d.basemapAttribution || '© OpenStreetMap'
  }).addTo(map);
  map.on('popupopen', (e) => {
    const wrap = document.getElementById('map-wrap');
    if (wrap) wrap.classList.add('popup-open');
    const root = e.popup.getElement();
    if (!root) return;
    wireMediaClicks(root);
    // Keep clicks inside the popup from closing it / bubbling to the map
    try { L.DomEvent.disableClickPropagation(root); L.DomEvent.disableScrollPropagation(root); } catch (err) {}
    const btn = root.querySelector('.pop-toggle');
    const full = root.querySelector('.pop-full');
    if (!btn || !full) return;
    const content = root.querySelector('.leaflet-popup-content');
    const setOpen = (open) => {
      full.classList.toggle('open', open);
      btn.textContent = open ? 'הסתר פרטים' : 'הרחב לפרטים';
      // Reposition without rebuilding HTML (avoids losing open state / double paint on mobile)
      try {
        if (typeof e.popup.update === 'function') {
          // Only update layout size; content already in DOM
          e.popup._updateLayout && e.popup._updateLayout();
          e.popup._updatePosition && e.popup._updatePosition();
        }
      } catch (err) {}
      if (content) content.scrollTop = 0;
    };
    const toggle = () => setOpen(!full.classList.contains('open'));
    btn.onclick = (ev) => {
      if (ev) { ev.preventDefault(); ev.stopPropagation(); }
      try { L.DomEvent.stop(ev); } catch (err) {}
      toggle();
    };
    // Headline / meta tap also toggles — but not the expanded body (avoids scroll fights)
    if (content) {
      content.style.cursor = 'pointer';
      content.onclick = (ev) => {
        const t = ev.target;
        if (!t) return;
        if (t.closest('a, button, .pop-full')) return;
        toggle();
      };
    }
  });
  map.on('popupclose', () => {
    const wrap = document.getElementById('map-wrap');
    if (wrap) wrap.classList.remove('popup-open');
  });
}

function polyCentroid(poly) {
  const ring = (poly && poly[0]) || [];
  if (!ring.length) return { lat: 0, lng: 0, minLng: 0, maxLng: 0, minLat: 0, maxLat: 0 };
  const lngs = ring.map(p => p[0]);
  const lats = ring.map(p => p[1]);
  return {
    lng: (Math.min(...lngs) + Math.max(...lngs)) / 2,
    lat: (Math.min(...lats) + Math.max(...lats)) / 2,
    minLng: Math.min(...lngs), maxLng: Math.max(...lngs),
    minLat: Math.min(...lats), maxLat: Math.max(...lats)
  };
}

function asMultiOrPoly(polys) {
  if (!polys.length) return null;
  if (polys.length === 1) return { type: 'Polygon', coordinates: polys[0] };
  return { type: 'MultiPolygon', coordinates: polys };
}

function splitIslandFeatures(geo) {
  const mainland = [];
  const islands = [];
  (geo.features || []).forEach(f => {
    const iso = (f.properties || {}).shapeISO;
    const geom = f.geometry || {};
    if (iso === 'YE-AD' && geom.type === 'MultiPolygon') {
      const aden = [];
      const mayun = [];
      (geom.coordinates || []).forEach(poly => {
        const c = polyCentroid(poly);
        // Mayun / Perim is Aden's western exclave around 12.65N 43.41E
        if (c.maxLng < 44.0) mayun.push(poly);
        else aden.push(poly);
      });
      const adenGeom = asMultiOrPoly(aden);
      if (adenGeom) mainland.push({ ...f, geometry: adenGeom });
      const mayunGeom = asMultiOrPoly(mayun);
      if (mayunGeom) {
        islands.push({
          type: 'Feature',
          properties: { islandId: 'mayun', shapeISO: 'YE-MY' },
          geometry: mayunGeom
        });
      }
      return;
    }
    if (iso === 'YE-HU' && geom.type === 'MultiPolygon') {
      const rest = [];
      const hanish = [];
      (geom.coordinates || []).forEach(poly => {
        const c = polyCentroid(poly);
        // Hanish–Zuqar group west of the Tihama coast
        if (c.lng < 42.82 && c.lat >= 13.58 && c.lat <= 14.10) hanish.push(poly);
        else rest.push(poly);
      });
      const restGeom = asMultiOrPoly(rest);
      if (restGeom) mainland.push({ ...f, geometry: restGeom });
      const hanishGeom = asMultiOrPoly(hanish);
      if (hanishGeom) {
        islands.push({
          type: 'Feature',
          properties: { islandId: 'hanish', shapeISO: 'YE-HN' },
          geometry: hanishGeom
        });
      }
      return;
    }
    mainland.push(f);
  });
  return {
    mainland: { type: 'FeatureCollection', features: mainland },
    islands: { type: 'FeatureCollection', features: islands }
  };
}

function islandPopupHtml(isl) {
  if (!isl) return '';
  const heRaw = String(isl.nameHe || '').trim();
  const he = /^אי\b/.test(heRaw) ? heRaw : `אי ${heRaw}`;
  const ar = isl.nameAr ? `<br/><span dir="rtl">${escapeHtml(isl.nameAr)}</span>` : '';
  const note = isl.note ? `<br/><small>${escapeHtml(isl.note)}</small>` : '';
  return `<strong>${escapeHtml(he)}</strong>${ar}<br/>
    שליטה: ${LABELS[isl.control] || isl.control}${note}
    ${mediaBlock(isl.media, true)}`;
}

async function drawGeo(d) {
  const byIso = controlByIso(d);
  if (geoLayer) map.removeLayer(geoLayer);
  if (saudiGeoLayer) map.removeLayer(saudiGeoLayer);
  islandLayers.forEach(l => { try { map.removeLayer(l); } catch (e) {} });
  islandLayers = [];

  if (!geoCache) geoCache = await fetch('/yemen-adm1.geojson').then(r => r.json());
  const split = splitIslandFeatures(geoCache);
  islandGeoCache = split.islands;

  geoLayer = L.geoJSON(split.mainland, {
    style: f => styleFeature(f, byIso),
    onEachFeature: (f, layer) => bindGov(f, layer, byIso)
  }).addTo(map);

  try {
    if (!saudiGeoCache) {
      const res = await fetch('/saudi-adm1.geojson');
      if (res.ok) saudiGeoCache = await res.json();
    }
    if (saudiGeoCache) {
      saudiGeoLayer = L.geoJSON(saudiGeoCache, {
        style: () => {
          const on = controlVisible('saudi');
          return {
            fillColor: COLORS.saudi, fillOpacity: on ? 0.38 : 0,
            color: '#0b0f14', weight: 0.8, opacity: on ? 0.75 : 0.15
          };
        },
        onEachFeature: (f, layer) => bindGov(f, layer, byIso)
      }).addTo(map);
    }
  } catch (e) { console.warn('saudi geo', e); }

  drawIslands(d);
}

function ensureIslandPane() {
  if (!map || map.getPane('islands')) return;
  map.createPane('islands');
  map.getPane('islands').style.zIndex = 450; // above overlay polygons (~400), below markers (~600)
  map.getPane('islands').style.pointerEvents = 'auto';
}

function islandIdOfFeature(f) {
  const p = (f && f.properties) || {};
  if (p.islandId === 'mayun' || p.islandId === 'hanish') return p.islandId;
  if (p.shapeISO === 'YE-MY') return 'mayun';
  if (p.shapeISO === 'YE-HN') return 'hanish';
  return '';
}

function islandControlNow(id, d) {
  if (mapMode === 'control' && activeEpoch && activeEpoch.islands && id && activeEpoch.islands[id]) {
    return activeEpoch.islands[id];
  }
  const meta = ((d && d.islandControl) || []).find(x => x && x.id === id);
  return (meta && meta.control) || 'houthi';
}

function drawIslands(d) {
  islandLayers.forEach(l => { try { map.removeLayer(l); } catch (e) {} });
  islandLayers = [];
  if (!map) return;
  ensureIslandPane();
  const fc = islandGeoCache || { type: 'FeatureCollection', features: [] };
  if (!fc.features || !fc.features.length) return;
  const byId = {};
  ((d && d.islandControl) || []).forEach(isl => {
    if (!isl || !isl.id) return;
    byId[isl.id] = { ...isl, control: islandControlNow(isl.id, d) };
  });
  const styleIsland = (f) => {
    const id = islandIdOfFeature(f);
    const meta = byId[id] || {};
    const ctrl = islandControlNow(id, d);
    const col = COLORS[ctrl] || COLORS.houthi;
    const on = controlVisible(ctrl);
    const iso = (f.properties || {}).shapeISO;
    const hl = highlightIds.has(iso) || (id === 'mayun' && highlightIds.has('YE-MY')) || (id === 'hanish' && highlightIds.has('YE-HN'));
    return {
      fillColor: col, fillOpacity: on ? (hl ? 0.92 : 0.78) : 0,
      color: hl ? '#f8fafc' : '#0b0f14',
      weight: hl ? 2.4 : 1.15,
      opacity: on ? 1 : 0.15,
      className: hl && highlightPulse ? 'gov-hl-pulse' : (hl ? 'gov-hl' : '')
    };
  };
  const layer = L.geoJSON(fc, {
    pane: 'islands',
    style: styleIsland,
    onEachFeature: (f, lyr) => {
      const meta = byId[islandIdOfFeature(f)];
      if (!meta) return;
      lyr.bindPopup(islandPopupHtml(meta), { maxWidth: 300 });
    }
  });
  layer.addTo(map);
  try {
    layer.eachLayer(lyr => {
      const st = styleIsland(lyr.feature || {});
      lyr.setStyle({
        fillColor: st.fillColor,
        fillOpacity: st.fillOpacity,
        color: st.color,
        weight: st.weight,
        opacity: st.opacity
      });
    });
  } catch (e) {}
  islandLayers.push(layer);
}

function clearControlOverlays() {
  controlOverlayLayers.forEach(l => { try { map.removeLayer(l); } catch (e) {} });
  controlOverlayLayers = [];
}

function drawControlOverlays(epoch) {
  clearControlOverlays();
  if (!map || !window.L || !epoch) return;
  (epoch.cities || []).forEach(c => {
    if (c.lat == null || c.lng == null) return;
    const col = COLORS[c.control] || COLORS.contested;
    const m = L.circleMarker([c.lat, c.lng], {
      radius: 10,
      color: '#f8fafc',
      weight: 1.6,
      fillColor: col,
      fillOpacity: 0.9,
      pane: 'islands'
    }).bindPopup(`<strong>${escapeHtml(c.nameHe || '')}</strong><br/>שליטה: ${LABELS[c.control] || c.control}`);
    m.addTo(map);
    controlOverlayLayers.push(m);
  });
}

function epochForDate(ymd) {
  const epochs = ((data && data.controlEpochs) || []).slice().sort((a, b) => String(a.at).localeCompare(String(b.at)));
  if (!epochs.length) return null;
  let pick = epochs[0];
  for (const e of epochs) {
    if (String(e.at).slice(0, 10) <= ymd) pick = e;
  }
  return pick;
}

function setControlEpochByIndex(i) {
  const epochs = ((data && data.controlEpochs) || []).slice().sort((a, b) => String(a.at).localeCompare(String(b.at)));
  if (!epochs.length) return;
  const idx = Math.max(0, Math.min(epochs.length - 1, Number(i) || 0));
  activeEpoch = epochs[idx];
  mapMode = 'control';
  try { document.body.classList.add('ctrl-mode'); } catch (e) {}
  ['combat', 'strike', 'vessel', 'port', 'statement'].forEach((k) => { layersOn[k] = false; });
  try { if (data) renderLegend(data); } catch (e) {}
  const lab = document.getElementById('ctrl-slider-label');
  if (lab && activeEpoch) {
    const at = String(activeEpoch.at).slice(0, 10);
    const [y, m, dd] = at.split('-');
    lab.textContent = `${dd}.${m} · ${activeEpoch.labelHe || ''}`;
  }
  const sl = document.getElementById('ctrl-slider');
  if (sl) sl.value = String(idx);
  document.querySelectorAll('#time-filter button').forEach(b => b.classList.remove('on'));
  applyMapFilters();
}

function applyMapFilters() {
  if (!data) return;
  const byIso = controlByIso(data);
  if (geoLayer) geoLayer.setStyle(f => styleFeature(f, byIso));
  if (saudiGeoLayer) {
    saudiGeoLayer.setStyle(() => {
      const on = controlVisible('saudi');
      return {
        fillColor: COLORS.saudi, fillOpacity: on ? 0.38 : 0,
        color: '#0b0f14', weight: 0.8, opacity: on ? 0.75 : 0.15
      };
    });
  }
  drawIslands(data);
  renderEvents(data);
}

function renderTimeline(d) {
  const el = document.getElementById('timeline');
  const phases = d.timeline || [];
  el.innerHTML = phases.map(t => {
    const isNow = t.id === 'phase_2026_09_offensive' || t === phases[phases.length - 1];
    const title = isNow && t.id === 'phase_2026_09_offensive'
      ? (t.titleHe + ' · הווה')
      : t.titleHe;
    return `<button type="button" class="chip" data-id="${escapeHtml(t.id)}">
      <b>${escapeHtml(title)}</b>
      <i>${escapeHtml((t.from||'') + (t.to ? ' – ' + t.to : ''))}</i>
    </button>`;
  }).join('');

  const showPhase = (phase) => {
    el.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c.dataset.id === phase.id));
    const box = document.getElementById('phase');
    box.classList.add('show');
    box.innerHTML = `
      <div class="phase-head">
        <strong>${escapeHtml(phase.titleHe)}</strong>
        <span class="muted">${escapeHtml((phase.from||'') + (phase.to ? ' – ' + phase.to : ''))}</span>
      </div>
      <p class="phase-sum">${escapeHtml(annotatePlaces(phase.summaryHe || phase.mapNoteHe || ''))}</p>
      <div class="full">
        <p>${escapeHtml(annotatePlaces(phase.detailHe || (phase.bulletsHe||[]).join(' ')))}</p>
        ${phase.mapNoteHe ? `<p class="muted">מפה: ${escapeHtml(annotatePlaces(phase.mapNoteHe))}</p>` : ''}
        <div class="srcs">מקור: ${sourceCreditsHtml(phase.sources || [], '')}</div>
      </div>
      <button type="button" class="toggle-phase">הצג עוד</button>`;
    const btn = box.querySelector('.toggle-phase');
    btn.onclick = () => {
      const open = box.classList.toggle('open');
      btn.textContent = open ? 'הסתר' : 'הצג עוד';
    };
  };

  el.querySelectorAll('.chip').forEach(btn => {
    btn.onclick = () => {
      const phase = phases.find(x => x.id === btn.dataset.id);
      if (phase) showPhase(phase);
    };
  });

  function goPresent(opts) {
    const scroll = !opts || opts.scroll !== false;
    const current = phases.find(p => p.id === 'phase_2026_09_offensive') || phases[phases.length - 1];
    if (current) showPhase(current);
    // Stay in the retro section — select the current-period chip, do not jump to page top
    mapDate = todayYmd();
    mapMode = 'day';
    activeEpoch = null;
    try { document.body.classList.remove('ctrl-mode'); } catch (e) {}
    const inp = document.getElementById('map-date');
    if (inp) { inp.value = mapDate; inp.max = mapDate; }
    if (data) renderEvents(data);
    syncDayNav();
    if (scroll) {
      const chip = el.querySelector('.chip.on');
      const box = document.getElementById('phase');
      const target = chip || box || document.getElementById('btn-now');
      if (target && target.scrollIntoView) {
        try { target.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); } catch (e) {
          try { target.scrollIntoView(false); } catch (e2) {}
        }
      }
    }
  }

  document.getElementById('btn-now').onclick = () => goPresent({ scroll: true });

  // default: present phase selected, no scroll jump on first load
  goPresent({ scroll: false });
}

function renderLegend(d) {
  const shortName = (c) => {
    if (c.id === 'plc') return 'הממשלה הלגיטימית';
    if (c.id === 'houthi') return 'חות׳ים';
    if (c.id === 'contested') return 'במחלוקת';
    return (c.name || '').split(' / ')[0] || c.name || '';
  };
  const inkFor = (hex) => {
    const h = String(hex || '').replace('#', '');
    if (h.length < 6) return '';
    const r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16);
    const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return lum > 0.55 ? ' ink-dark' : '';
  };
  const row = (layer, color, label) => {
    const on = layersOn[layer] ? ' on' : '';
    return `<button type="button" class="leg-item${on}" data-layer="${escapeHtml(layer)}" title="לחצו על הריבוע כדי להציג או להסתיר" aria-pressed="${layersOn[layer] ? 'true' : 'false'}">
      <span class="sw${inkFor(color)}" style="background:${color}"><span class="tick">✓</span></span>
      ${escapeHtml(label)}
    </button>`;
  };
  const controlRows = (d.control || []).map(c => {
    const key = controlLayerKey(c.id);
    return row(key, c.color, shortName(c));
  }).join('');
  document.getElementById('legend').innerHTML = `
    <div class="leg-sec">שליטה בשטח</div>
    <p class="leg-hint">ריבוע מסומן = מוצג במפה</p>
    ${controlRows}
    ${row('saudi', COLORS.saudi, 'סעודיה')}
    <div class="leg-sec">אירועים</div>
    ${row('combat', EVENT_COLORS.combat, 'לחימה קרקעית')}
    ${row('strike', EVENT_COLORS.strike, 'שיגור')}
    ${row('vessel', EVENT_COLORS.vessel, 'פגיעה בכלי שיט')}
    ${row('port', EVENT_COLORS.port, 'פגיעה בנמל')}
    ${row('statement', EVENT_COLORS.statement, 'התבטאות')}`;
  document.querySelectorAll('#legend .leg-item').forEach(btn => {
    btn.onclick = (ev) => {
      if (ev) { ev.preventDefault(); ev.stopPropagation(); }
      const k = btn.dataset.layer;
      if (!k || !(k in layersOn)) return;
      layersOn[k] = !layersOn[k];
      renderLegend(d);
      applyMapFilters();
    };
  });
}

function syncDayNav() {
  const next = document.getElementById('btn-day-next');
  const today = todayYmd();
  const day = mapDate || today;
  if (next) next.hidden = mapMode !== 'day' ? false : day >= today;
  if (next && mapMode !== 'day') next.hidden = true;
  const todayBtn = document.getElementById('btn-day-today');
  if (todayBtn) todayBtn.classList.toggle('on', mapMode === 'day' && day === today);
}

function enterDayMode(ymd) {
  mapMode = 'day';
  mapDate = clampMapDate(ymd || todayYmd());
  activeEpoch = null;
  try { document.body.classList.remove('ctrl-mode'); } catch (e) {}
  clearControlOverlays();
}

function wireUi(d) {
  const legendEl = document.getElementById('legend');
  if (legendEl && window.L) {
    try {
      L.DomEvent.disableClickPropagation(legendEl);
      L.DomEvent.disableScrollPropagation(legendEl);
    } catch (e) {}
  }
  const chipEl = document.getElementById('map-chip');
  if (chipEl && window.L) {
    try {
      L.DomEvent.disableClickPropagation(chipEl);
      L.DomEvent.disableScrollPropagation(chipEl);
    } catch (e) {}
  }
  const dateInp = document.getElementById('map-date');
  const markDayBtn = (id) => {
    document.querySelectorAll('#time-filter button').forEach(b => b.classList.remove('on'));
    const el = document.getElementById(id);
    if (el) el.classList.add('on');
  };
  if (dateInp) {
    if (!mapDate) mapDate = todayYmd();
    dateInp.min = MAP_ROUND_START;
    dateInp.max = todayYmd();
    dateInp.value = mapDate;
    dateInp.onchange = () => {
      enterDayMode(dateInp.value);
      dateInp.value = mapDate;
      markDayBtn(null);
      syncDayNav();
      applyMapFilters();
    };
  }
  const prev = document.getElementById('btn-day-prev');
  const next = document.getElementById('btn-day-next');
  const todayBtn = document.getElementById('btn-day-today');
  if (prev) prev.onclick = () => {
    const base = mapDate || todayYmd();
    enterDayMode(shiftYmd(base, -1));
    if (dateInp) dateInp.value = mapDate;
    markDayBtn(null);
    syncDayNav();
    applyMapFilters();
  };
  if (next) next.onclick = () => {
    const base = mapDate || todayYmd();
    enterDayMode(shiftYmd(base, 1));
    if (dateInp) dateInp.value = mapDate;
    markDayBtn(null);
    syncDayNav();
    applyMapFilters();
  };
  if (todayBtn) todayBtn.onclick = (ev) => {
    if (ev) { ev.preventDefault(); ev.stopPropagation(); }
    const y = window.scrollY || document.documentElement.scrollTop || 0;
    enterDayMode(todayYmd());
    if (dateInp) { dateInp.value = mapDate; dateInp.max = mapDate; dateInp.blur(); }
    markDayBtn('btn-day-today');
    syncDayNav();
    applyMapFilters();
    requestAnimationFrame(() => { try { window.scrollTo(0, y); } catch (e) {} });
  };
  const fromInp = document.getElementById('map-from');
  const toInp = document.getElementById('map-to');
  const applyRange = () => {
    const today = todayYmd();
    let a = clampMapDate(fromInp && fromInp.value ? fromInp.value : CONFLICT_START);
    let b = clampMapDate(toInp && toInp.value ? toInp.value : today);
    if (a < CONFLICT_START) a = CONFLICT_START;
    if (a > b) { const t = a; a = b; b = t; }
    mapDateFrom = a;
    mapDateTo = b;
    mapMode = 'range';
    activeEpoch = null;
    try { document.body.classList.remove('ctrl-mode'); } catch (e) {}
    clearControlOverlays();
    if (fromInp) fromInp.value = a;
    if (toInp) toInp.value = b;
    markDayBtn('btn-range-apply');
    syncDayNav();
    applyMapFilters();
  };
  if (fromInp) {
    fromInp.min = CONFLICT_START;
    fromInp.max = todayYmd();
    if (!fromInp.value) fromInp.value = CONFLICT_START;
    fromInp.onchange = applyRange;
  }
  if (toInp) {
    toInp.min = CONFLICT_START;
    toInp.max = todayYmd();
    if (!toInp.value) toInp.value = todayYmd();
    toInp.onchange = applyRange;
  }
  const rangeBtn = document.getElementById('btn-range-apply');
  if (rangeBtn) rangeBtn.onclick = (ev) => { if (ev) ev.preventDefault(); applyRange(); };
  const allBtn = document.getElementById('btn-conflict-all');
  if (allBtn) allBtn.onclick = (ev) => {
    if (ev) ev.preventDefault();
    mapMode = 'all';
    mapDateFrom = CONFLICT_START;
    mapDateTo = todayYmd();
    activeEpoch = null;
    try { document.body.classList.remove('ctrl-mode'); } catch (e) {}
    clearControlOverlays();
    if (fromInp) fromInp.value = CONFLICT_START;
    if (toInp) toInp.value = todayYmd();
    markDayBtn('btn-conflict-all');
    syncDayNav();
    applyMapFilters();
  };
  const slider = document.getElementById('ctrl-slider');
  const epochs = ((d && d.controlEpochs) || []).slice().sort((a, b) => String(a.at).localeCompare(String(b.at)));
  if (slider) {
    slider.min = '0';
    slider.max = String(Math.max(0, epochs.length - 1));
    slider.value = String(Math.max(0, epochs.length - 1));
    const lab = document.getElementById('ctrl-slider-label');
    if (lab && epochs.length) {
      const last = epochs[epochs.length - 1];
      const at = String(last.at).slice(0, 10);
      const [y, m, dd] = at.split('-');
      lab.textContent = `${dd}.${m} · ${last.labelHe || ''}`;
    }
    slider.oninput = () => setControlEpochByIndex(slider.value);
    slider.onchange = () => setControlEpochByIndex(slider.value);
  }
  syncDayNav();
  document.getElementById('btn-more-reports').onclick = () => {
    reportsShown += MORE_STEP;
    renderFeed(data);
  };
  document.getElementById('btn-focus-map').onclick = () => {
    mapFocus = !mapFocus;
    document.body.classList.toggle('map-focus', mapFocus);
    document.getElementById('btn-focus-map').textContent = mapFocus ? 'הקטן מפה' : 'הגדל מפה';
    setTimeout(() => map && map.invalidateSize(), 50);
  };
  if (!frontFloatWired) {
    frontFloatWired = true;
    document.addEventListener('click', (ev) => {
      if (Date.now() - frontFloatOpenedAt < 400) return;
      const t = ev.target;
      if (!t) return;
      if (t.closest('#front-float, .front-map-btn')) return;
      hideFrontFloat();
      const mf = document.getElementById('media-float');
      if (mf && !mf.hidden && !t.closest('#media-float, .media-open')) {
        mf.classList.remove('show'); mf.hidden = true; mf.innerHTML = '';
      }
    });
    document.addEventListener('keydown', (ev) => {
      if (ev.key !== 'Escape') return;
      hideFrontFloat();
      clearMapHighlight({ home: true });
      const mf = document.getElementById('media-float');
      if (mf && !mf.hidden) { mf.classList.remove('show'); mf.hidden = true; mf.innerHTML = ''; }
    });
    window.addEventListener('scroll', () => {
      if (Date.now() - frontFloatOpenedAt < 400) return;
      if (!frontFloatAnchor) return;
      const r = frontFloatAnchor.getBoundingClientRect();
      const vis = r.bottom > 40 && r.top < window.innerHeight - 20;
      if (!vis) hideFrontFloat();
      else placeFrontFloat(frontFloatAnchor);
    }, true);
    document.addEventListener('click', (ev) => {
      if (Date.now() < keepHighlightUntil) return;
      const t = ev.target;
      if (!t) return;
      const path = (typeof ev.composedPath === 'function') ? ev.composedPath() : [];
      if (path.some(n => n && n.matches && n.matches('#legend, .front-float-go, .front-map-btn, #front-float, #map-chip, .chip-clear, #btn-clear-hl'))) return;
      if (t.closest && t.closest('#legend, .front-float-go, .front-map-btn, #map-chip, .chip-clear')) return;
      if (highlightIds.size && !(t.closest && t.closest('.leaflet-interactive, .leaflet-popup, .leaflet-control'))) {
        clearMapHighlight({ home: true });
      }
    });
  }
}

async function refresh(first) {
  const baseP = fetchData();
  if (first) await hydrateSnapshot();
  const liveP = pullLive({ silent: true });
  if (first && !liveOverlay.reports.length) {
    await Promise.race([liveP, new Promise((r) => setTimeout(r, 2000))]);
  }
  const base = await baseP;
  data = applyLiveOverlay(base);
  if (!miniGeo) {
    try { miniGeo = await fetch('/yemen-mini.json').then(r => r.json()); }
    catch (e) { miniGeo = { w: 240, h: 280, features: [] }; }
  }
  const stamp = document.getElementById('updated');
  if (stamp) stamp.textContent = stampText();
  renderBars(data);
  renderSituation(data);
  renderCasualties(data);
  renderFeed(data);
  renderFronts(data);
  ensureMap(data);
  if (first) {
    try { renderTimeline(data); } catch (e) { console.error(e); }
    try { renderLegend(data); } catch (e) { console.error(e); }
    try { wireUi(data); } catch (e) { console.error(e); }
    document.getElementById('attrib').textContent = data.basemapAttribution || '© OpenStreetMap contributors';
    const disc = document.getElementById('disclaimer');
    if (disc) disc.textContent = '';
    try { await drawGeo(data); } catch (e) { console.error(e); }
  } else {
    applyMapFilters();
  }
  if (first) {
    try { renderEvents(data); } catch (e) { console.error(e); }
  }
  if (map) setTimeout(() => map && map.invalidateSize(), 30);
}


function wireRailResize() {
  const stage = document.getElementById('stage');
  const split = document.getElementById('rail-splitter');
  const rail = document.getElementById('rail');
  if (!stage || !split || !rail) return;
  if (split.dataset.wired === '1') return;
  split.dataset.wired = '1';
  const KEY = 'yemenDeskRailW';
  const apply = (px) => {
    const min = 280;
    const max = Math.min(640, Math.max(320, Math.floor(window.innerWidth * 0.55)));
    const w = Math.max(min, Math.min(max, Math.round(px)));
    stage.style.setProperty('--rail-w', w + 'px');
    try { localStorage.setItem(KEY, String(w)); } catch (e) {}
    if (map) setTimeout(() => map && map.invalidateSize(), 40);
  };
  // Reset bad saved widths that collapsed the side-by-side layout
  try {
    const saved = parseInt(localStorage.getItem(KEY) || '', 10);
    if (saved >= 280 && saved <= 640) apply(saved);
    else {
      localStorage.removeItem(KEY);
      apply(360);
    }
  } catch (e) { apply(360); }

  let dragging = false;
  const onMove = (clientX) => {
    if (!dragging) return;
    const rect = stage.getBoundingClientRect();
    // dir=rtl: map is on the right, rail on the left → rail width = x from stage left edge
    const railW = clientX - rect.left;
    apply(railW);
  };
  split.addEventListener('pointerdown', (e) => {
    dragging = true;
    try { split.setPointerCapture(e.pointerId); } catch (err) {}
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
    e.preventDefault();
  });
  split.addEventListener('pointermove', (e) => { if (dragging) onMove(e.clientX); });
  const end = () => {
    if (!dragging) return;
    dragging = false;
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
    if (map) map.invalidateSize();
  };
  split.addEventListener('pointerup', end);
  split.addEventListener('pointercancel', end);
  window.addEventListener('resize', () => {
    const cur = parseInt(getComputedStyle(stage).getPropertyValue('--rail-w'), 10);
    if (cur) apply(cur);
  });
}

async function startYemenDesk() {
  const el = document.getElementById('map');
  if (!el) return;

  if (window.__yemenDeskTimer) {
    clearInterval(window.__yemenDeskTimer);
    window.__yemenDeskTimer = null;
  }
  if (window.__yemenLiveTimer) {
    clearInterval(window.__yemenLiveTimer);
    window.__yemenLiveTimer = null;
  }

  const bootTimers = () => {
    const jsonMs = Math.max(30, Number(data?.refreshSeconds) || 60) * 1000;
    window.__yemenDeskTimer = setInterval(() => refresh(false), jsonMs);
    window.__yemenLiveTimer = setInterval(() => pullLive(), 5 * 60 * 1000);
  };

  if (map) {
    const container = map.getContainer && map.getContainer();
    if (!container || container !== el || !el.isConnected) {
      try { map.remove(); } catch (e) {}
      map = null;
      geoLayer = null;
      saudiGeoLayer = null;
      eventLayers = [];
      islandLayers = [];
    } else {
      try { await refresh(false); } catch (e) { console.error(e); }
      bootTimers();
      return;
    }
  }

  try {
    await refresh(true);
    try { wireRailResize(); } catch (e) { console.error(e); }
    bootTimers();
  } catch (err) {
    console.error(err);
    const stamp = document.getElementById('updated');
    if (stamp && !String(stamp.textContent || '').includes('עודכן')) {
      stamp.textContent = 'שגיאה בטעינה';
    }
  }
}

window.startYemenDesk = startYemenDesk;
startYemenDesk();

