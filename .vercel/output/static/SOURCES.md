# Yemen desk — OSINT source pool (no Israeli sources)

**Scan cadence (every run, ~5 minutes):**
- The desk hits `/api/scan` every 5 minutes. Server cache is 4 minutes, so a new pull starts each cycle.
- **Every cycle:** all Telegram channels (75) + all RSS feeds (43).
- **X / Twitter:** 36 priority accounts every cycle; the remaining 109 rotate in chunks of 50 (full rest-catalog in about 15 minutes).
- Total catalog: **263 endpoints** (TG + RSS + unique X). Overlapping names across TG/X/RSS are the same outlet on different pipes.
- Rule: never name a source without an article/post URL. If the link cannot be opened, the source is not used.

---

## A. Sources the operator named (this conversation)

Used exactly as given; they sit in the **priority** X batch and/or the always-on TG/RSS pool.

### Telegram (Iraqi / axis + Arab desks)
- Ali Bk — `@Alibk3`
- Sabereen News — `@SabrenNews22`
- Sabereen Plus — `@Sabren_News1`
- Naya Sabereen — `@naya_saberin`
- Al-Mihwar — `@Alomhoar`
- Al-Masirah — `@almasirah`
- Al Hadath / Al Arabiya al-Hadath — `@alhadath`, `@AlArabiya_alhadath`, `@AlHadath_Brk`, `@AlArabiya`, `@AlArabiya_Brk`
- Al Jazeera — `@AlJazeera`

### X (named handles)
- `@tmrrah9` Tmrrah
- `@alrougui` Al-Rougui
- `@modgovksa` Saudi MoD
- `@Osint613` OSINT613
- `@ly83764` LY OSINT
- `@SaudiArabitcr4` Saudi Arabia Tracker
- `@al_ghandri` Al-Ghandri
- `@Alsakaniali` Ali Al-Sakani
- `@FaresALhemyari` Fares al-Hemyari

### Wires / press the operator named
- Reuters, WSJ, Washington Post, NYT, NY Post, BBC, CBS
- Al-Araby Al-Jadeed, Asharq Al-Awsat, Erem News, Al-Akhbar, Alhurra, Arab News

---

## B. Sources the desk added on its own

Same cadence as above. English display names in the feed.

### Telegram (added)
Hazam al-Asad, Yahya Saree, YPA, Al-Mayadeen, Asharq News, Barran Press, Crater Sky, South24, Baghdad Today, Rapid Response, AP, Al Qahera News, Al-Mamlaka, Mohammed Abdulsalam, Mohammed Ali al-Houthi, Ansarollah, Saba, Erem News, SPA, Saudi News 50, Sabq, Al Ekhbariya, Okaz, Almashhad, Aden Time, Al-Mahrah News, Al-Masdar Online, Aden al-Ghad, Al-Janoob Alyoum, Yemen Monitor, Sky News Arabia, Marib Press, Taiz Online, Aden Alyoum, Al-Omnaa, Nation Shield, Giants Brigades, Sheba Intelligence, Iraqi News, Shafaq News, Al-Manar, Saudi Civil Defense, NCEC, Khbr Press, Yemen Future, Mokha News, Basha Report, Al Jazeera Breaking, Reuters Arabic, AFP, Al Hadath Yemen, 26 September, Yemen Shabab, Al-Mahrah Post, Arab News.

### X (added — priority always-on, plus rotating rest)
**Also always-on (priority, not named by the operator):** `@AlqadyMyr49009`, `@spagov`, `@SaudiDCD`, `@ncec_ksa`, `@KSAcivildfnse`, `@Yahya_Saree`, `@hezamalasad`, `@abdulqadermortd`, `@CENTCOM`, `@UKMTO`, `@AlMashhadNews`, `@AlHadath`, `@AlArabiya`, `@Reuters`, `@AFP`, `@AJArabic`, `@AJABreaking`, `@shebaintelligen`, `@BashaReport`, `@MenchOsint`, `@South24net`, `@AlMasirahTV`, `@YPA_agency`, `@Moh_Alhouthi`, `@AlArabiya_Brk`, `@sabqorg`, `@okaz_online`.

**Rotating (~50 per cycle):** SPA, KSAMOFA, Saudi News 50, Al Ekhbariya, Asharq Al-Awsat, Al-Watan, Al Riyadh, Saudi Gazette, Arab News, Sky News Arabia, Ansarollah, Erem News, Al-Araby, Al-Mayadeen, Al Qahera News, Baghdad Today, Mokha News, Taiz News, Marib News, Crater Sky, Barran Press, Alsahwa, Yemen Monitor, Conflicts, Sentdefender, Calibre Obscura, Intel Crab, OSINTtechnical, ISW, Abdulsalam Mohammed, Nasser Arrabyee, Hisham Al-Omeisy, Afrah Nasser, Iona Craig, Farea al-Muslimi, Maged al-Madhaji, Aden al-Ghad, Al-Masdar Online, Al-Janoob Alyoum, TankerTrackers, gCaptain, US 5th Fleet, Gerjon, ELINT News, Archer83Able, IMINT Analyst, Intel Sky, War Mapper, Aurora Intel, GeoConfirmed, Oryx, Dryad Global, Ambrey, Lloyd's List, Alhurra, Al-Monitor, Middle East Eye, The National, Anadolu, France 24, BBC, AP, Al Jazeera EN, AFP Arabic, Bloomberg, CNN, Fox News, CNBC, Politico, Marib Press, Taiz Online, Aden Alyoum, Khbr Press, Yemen Future, Nation Shield, Giants Brigades, Nabil Shamsan, Shafaq, CMF, Sana'a Center, Crisis Group, ACLED, ReliefWeb, OCHA, IRNA, Yemen Shabab, Al-Mahrah Post, Adnan al-Gabarni, Abaad Studies, OSINT Defender, VCDGF, Detresfa, Makkah Newspaper, Guardian, TradeWinds, EUNAVFOR, NAVCENT.

### RSS (added)
Almashhad, Yemen Monitor, Alsahwa, YPA, Aden Observer, Yemenat, Al Jazeera EN/AR, BBC ME, Guardian Yemen, France 24, Anadolu, Arab News, Al-Monitor, The National, Middle East Eye, Politico, plus Google News queries for Fox, Al-Araby, Al-Akhbar, Asharq Al-Awsat, Alhurra, Erem, Okaz, Al-Watan, Reuters, WSJ, WaPo, NYT, NY Post, CBS, CNN, Bloomberg, Al Arabiya, Al Hadath, Saudi sirens, X sirens, X Yemen, energy/shipping/US-politics slices.

**Hard exclusion:** no Israeli sources (Ynet, IDF, Abu Ali Express, etc.).

---

Use this list on every scan. Prefer primary / field reporting; cross-check; English display names in the desk.

## Yemeni / local (all sides, independent + aligned)
- Almashhad (almashhad.news)
- Alsahwa (alsahwa-yemen.net)
- Yemen Monitor (yemenmonitor.com)
- South24 (south24.net)
- Barran Press (barran.press) — Telegram @barranpress
- Aden Observer / Aden Gad
- Crater Sky, Khbr, Al-Khlaasa (khlaasa.net)
- YPA / Yemen Press Agency (ypagency.net) — Houthi-aligned — Telegram @yemenpressagency
- Saba (sabanew.net / saba.ye) — Houthi-aligned state — Telegram media @yemen_agency_saba and «وكالة سبأ - خدمات الوسائط»
- Al-Masirah — Houthi media — Telegram @almasirah
- Yahya Saree (Houthi military spokesman) — Telegram @saree_ye
- Mohammed Abdulsalam (Houthi political spokesman)
- Nasr al-Din Amer (Saba / Houthi media figure)
- 26 September Net / September Net (gov-aligned)
- Al-Mahriah — Telegram @almahriah
- Al-Watan (Saudi), Okaz
- Sheba Intelligence (shebaintelligence.uk)
- Yemen Security Media Cell (خلية الإعلام الأمني) — Houthi-aligned security media
- Shabakat al-Furqan (شبكة الفرقان) — Houthi-aligned front reporting
- Yemeni Voices / local tribal pages when attributable

## Arab regional — TV / wires
- Al Jazeera / Al Jazeera Net — Telegram @AlJazeeraChannel (when public)
- Al Arabiya / Al Hadath — Telegram @AlArabiya_Brk, @alhadath, @AlArabiya_alhadath («العربية الحدث»)
- Asharq News / Asharq Al-Awsat
- Al-Monitor, Middle East Eye, The New Arab (العربي الجديد)
- Arab News, Al Majalla
- Al-Akhbar, Al-Mayadeen, Al-Alam (note alignment)
- SPA (Saudi Press Agency) — for Saudi claims only, label clearly
- Al Qahera News (القاهرة الإخبارية), Roya News (Jordan), Al-Mamlaka (Jordan)

## Iraqi / «axis» Arabic Telegram (high volume on regional war; label lean)
- Ali Bk — @Alibk3 (Iraqi/regional aggregator; useful for Red Sea / escalation threads). Scan every run; they often publish Yemen claims before Yemeni locals.
- Al-Mihwar — @Alomhoar only. Do **not** use @akhbar_alme7war.
- Sabereen News — @SabrenNews22 (+ @Sabren_News1 Sabereen Plus; @naya_saberin Naya–Sabereen)
- Baghdad Today — @baghdadtoday (when public)
- Iraqi News Agency (INA / واع)
- Popular Mobilization Forces Media Directorate (مديرية إعلام الحشد) — label militia media
- Al-Nujaba / Iraqi resistance coordination channels — label clearly; use only for attributable claims

## Iranian state / aligned (label; never sole source for Yemen ground facts)
- IRNA / IRNA Arabic, ISNA, Tasnim, Fars, Mehr, Nour News, Press TV, Al-Alam

## International wire / press
- Reuters, AFP, AP, BBC, RFI, DW, France 24
- Anadolu (AA), Xinhua, CGTN, EFE, DPA
- The Guardian, The National (UAE)
- RT Arabic — use sparingly; label

## Maritime / military OSINT
- UKMTO, IMO GISIS notes, PortWatch / shipping trackers when public
- Critical Threats / ISW Yemen notes (cite carefully)
- ACLED public Yemen notes when available
- NetBlocks (outages only)

## Social / messaging (high value — harvest every run)

### Telegram — priority pool from operator feed (public t.me/s previews; no Israeli)
**Yemen / Houthi-aligned:** @almasirah, @saree_ye, @yemenpressagency, Saba media services, Mohammed Abdulsalam, Nasr al-Din Amer, Security Media Cell, شبكة الفرقان, Kamal Sharaf (cartoons — color only).

**Yemen / other local:** @barranpress, @almahriah, Aden/Taiz/Marib field channels when named.

**Saudi / Gulf media:** @alhadath, @AlArabiya_alhadath, @AlArabiya_Brk, Asharq News TG when public.

**Iraqi / axis Arabic:** @Alibk3, @Alomhoar, @SabrenNews22, @Sabren_News1, @naya_saberin, Baghdad Today, PMF media (label).

**US / Trump (for US statements, not Yemen ground facts):** Fox News, Rapid Response 47 (@RapidResponse), Politico, AP, CNBC/WSJ when they actually quote Trump/WH on Yemen-Houthis.

**Regional Arabic extras:** العربي الجديد (Al-Araby Al-Jadeed), Al-Akhbar (Lebanon, morning briefs), Asharq News, Al Qahera News, Al-Mamlaka, Middle East Eye, South24.

**Regional Arabic:** Al Jazeera, العربي الجديد, Al-Akhbar, Al-Mayadeen, Al-Alam عاجل, Roya, Al-Mamlaka.

**Folders in operator Telegram (reference):** الخليج · لبنان · ایران — scan الخليج heavily for Saudi/Yemen spillover; Iran/Lebanon for axis claims only.

### X / Twitter
- Named Yemeni journalists and stringers
- Official accounts: Yemen MoD / PLC, Houthi SPC / Saree
- Maritime: UKMTO, ship trackers, Red Sea shipping accounts
- Regional desks: AJ/Reuters/AFP correspondents on Yemen beat

## UN / humanitarian (for casualties & displacement sections)
- IOM, UNHCR, OCHA, OHCHR, WFP, WHO, ReliefWeb

## Hard exclusions
- **No Israeli sources ever** — including Hebrew channels that appear in a mixed Telegram list (e.g. Abu Ali Express, Ynet, Amit Segal, IDF Arabic, Doron Peskin, Carmelist). Do not cite, link, or mirror them.

## Rules
1. No Israeli sources ever.
2. Attribute every claim; **never name a source without an article/post URL**. If you cannot open a link, you cannot use the source — omit it.
3. English canonical outlet names in the desk (Almashhad, Ali Bk, Sabereen News, Al-Mihwar News, Al Hadath…).
4. Telegram/X: quote handle or channel name; prefer posts that are primary, not pure reposts.
5. Rotate: each scan should hit wires + at least 2 Yemeni locals + Telegram from the priority pool (not only Almashhad).
6. Iraqi/Iranian TG are **leads and claims** — chase Yemeni primary or wire confirmation for ground control / casualties when possible.

## Primary source rule (mandatory)
- Always attribute and link the **originating** outlet for the fact.
- If Almashhad / AA / Arab News etc. write «according to Reuters / Xinhua / a military source published on …», **open that original** and cite *it* (name + article URL), not the republisher.
- Secondary digests are leads only — chase the primary when reachable.
- For Telegram/X: prefer the original post/channel over a screenshot quoted elsewhere.
- If the primary is unreachable, say so briefly and keep the republisher labeled as such (e.g. «Almashhad citing Reuters — primary not opened»).

## Feed lean colors (UI)
Border color on each report = **outlet affiliation**, not who is winning the fight:
- houthi: YPA, Saba (Sanaa), Al-Masirah, Saree, Abdulsalam, Al Manar, Al-Mayadeen, Al-Alam, IRNA, Sabereen, Al-Mihwar, Ali Bk (when axis-lean), Furqan…
- gov: September Net, SPA, Okaz, Arab News, Al Arabiya, Al Hadath, Asharq…
- south: South24, Aden Observer, Crater Sky…
- indep: Almashhad, Alsahwa, Barran, Yemen Monitor… (no clear state lean)
- intl: Reuters/AFP/AP/BBC/AJ/Anadolu/UN…

Almashhad is fine as a high-volume independent local — use heavily when freshest; still scan the full pool every run.

## Teaser vs full (mandatory on every new report)
- Write **two lengths**: `summary` (תכלול — one short sentence) + `text` (full — numbers, places, quotes, caveats from the source).
- If summary and full end up the same length, you failed: either summarize harder, or pull more detail from the primary source into `text`.
- Never ship a card where expand shows almost nothing new.
