# Yemen desk — OSINT source pool (no Israeli sources)

**Scan cadence (every run, ~5 minutes):**
- The desk hits `/api/scan` every 5 minutes. Server cache is 4 minutes, so a new pull starts each cycle.
- **Every cycle:** all Telegram channels (78) + all RSS feeds (57).
- **X / Twitter:** 41 priority accounts every cycle; the remaining 112 rotate in chunks of 50 (full rest-catalog in about 15 minutes).
- Total catalog: **288 endpoints** (TG + RSS + unique X). Overlapping names across TG/X/RSS are the same outlet on different pipes.
- Rule: never name a source without an article/post URL. If the link cannot be opened, the source is not used.
- Map never plots statements (התבטאויות). Those stay in the feed only.

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
Hazam al-Asad, Yahya Saree (`@saree_ye` + `@army21ye`), YPA, Al-Mayadeen, Asharq News, Barran Press, Crater Sky, South24, Baghdad Today, Rapid Response, AP, Al Qahera News, Al-Mamlaka, Mohammed Abdulsalam, Mohammed Ali al-Houthi, Ansarollah, Saba, Erem News, SPA, Saudi News 50, Sabq, Al Ekhbariya, Okaz, Almashhad, Aden Time, Al-Mahrah News, Al-Masdar Online, Aden al-Ghad, Al-Janoob Alyoum, Yemen Monitor, Sky News Arabia, Marib Press, Taiz Online, Aden Alyoum, Al-Omnaa, Nation Shield, Giants Brigades, Sheba Intelligence, Iraqi News, Shafaq News, Al-Manar, Al-Akhbar, Saudi Civil Defense, NCEC, Khbr Press, Yemen Future, Mokha News, Basha Report, Al Jazeera Breaking, Reuters Arabic, AFP, Al Hadath Yemen, 26 September, Yemen Shabab, Al-Mahrah Post, Arab News, **Al-Thawrah**, **Al-Khabar al-Yemeni**.

### X (added — priority always-on, plus rotating rest)
**Also always-on (priority, not named by the operator):** `@AlqadyMyr49009`, `@spagov`, `@SaudiDCD`, `@ncec_ksa`, `@KSAcivildfnse`, `@Yahya_Saree`, `@hezamalasad`, `@abdulqadermortd`, `@CENTCOM`, `@UKMTO`, `@AlMashhadNews`, `@AlHadath`, `@AlArabiya`, `@Reuters`, `@AFP`, `@AJArabic`, `@AJABreaking`, `@shebaintelligen`, `@BashaReport`, `@MenchOsint`, `@South24net`, `@AlMasirahTV`, `@YPA_agency`, `@Moh_Alhouthi`, `@AlArabiya_Brk`, `@sabqorg`, `@okaz_online`, **`@AlAkhbarNews`**, **`@AlArabyTV`**, **`@aawsat_News`**, **`@Jamal_Atamimi`**, **`@YemenFutureNet`**.

**Rotating (~50 per cycle):** SPA, KSAMOFA, Saudi News 50, Al Ekhbariya, Asharq Al-Awsat, Al-Watan, Al Riyadh, Saudi Gazette, Arab News, Sky News Arabia, Ansarollah, Erem News, Al-Araby, Al-Mayadeen, Al Qahera News, Baghdad Today, Mokha News, Taiz News, Marib News, Crater Sky, Barran Press, Alsahwa, Yemen Monitor, Conflicts, Sentdefender, Calibre Obscura, Intel Crab, OSINTtechnical, ISW, Abdulsalam Mohammed, Nasser Arrabyee, Hisham Al-Omeisy, Afrah Nasser, Iona Craig, Farea al-Muslimi, Maged al-Madhaji, Aden al-Ghad, Al-Masdar Online, Al-Janoob Alyoum, TankerTrackers, gCaptain, US 5th Fleet, Gerjon, ELINT News, Archer83Able, IMINT Analyst, Intel Sky, War Mapper, Aurora Intel, GeoConfirmed, Oryx, Dryad Global, Ambrey, Lloyd's List, Alhurra, Al-Monitor, Middle East Eye, The National, Anadolu, France 24, BBC, AP, Al Jazeera EN, AFP Arabic, Bloomberg, CNN, Fox News, CNBC, Politico, Marib Press, Taiz Online, Aden Alyoum, Khbr Press, Yemen Future, Nation Shield, Giants Brigades, Nabil Shamsan, Shafaq, CMF, Sana'a Center, Crisis Group, ACLED, ReliefWeb, OCHA, IRNA, Yemen Shabab, Al-Mahrah Post, Adnan al-Gabarni, Abaad Studies, OSINT Defender, VCDGF, Detresfa, Makkah Newspaper, Guardian, TradeWinds, EUNAVFOR, NAVCENT, Al-Thawrah, Al-Khabar al-Yemeni, Türkiye Today, Independent Arabia, CNN Arabic, Ajel.

### RSS (added)
Almashhad, Yemen Monitor, Alsahwa, YPA, Aden Observer, Yemenat, Al Jazeera EN/AR, BBC ME, Guardian Yemen, France 24, Anadolu, Arab News, Al-Monitor, The National, Middle East Eye, Politico, **Al-Thawrah, Yemen Future, Al-Khabar al-Yemeni, Al-Mayadeen, Saudi Gazette**, plus Google News queries for Fox, Al-Araby, Al-Akhbar (incl. Syria-fighters slice), Asharq Al-Awsat, Alhurra, Erem, Okaz, Al-Watan, Reuters, WSJ, WaPo, NYT, NY Post, CBS, CNN, Bloomberg, Al Arabiya (incl. Riyadh alerts), Al Hadath, Saudi sirens, X sirens, X Yemen, energy/shipping/US-politics slices, **Türkiye Today, CNN Arabic, Independent Arabia, Al-Sahil**.

**Hard exclusion:** no Israeli sources (Ynet, IDF, Abu Ali Express, etc.).

---

Use this list on every scan. Prefer primary / field reporting; cross-check; English display names in the desk.

## Yemeni / local (all sides, independent + aligned)
- Almashhad (almashhad.news)
- Alsahwa (alsahwa-yemen.net)
- Yemen Monitor (yemenmonitor.com)
- Yemen Future (yemenfuture.net)
- Al-Thawrah (althawrah.ye) — Houthi-aligned state paper
- Al-Khabar al-Yemeni (alkhabaralyemeni.net)
- Al-Sahil (alsahil.net) — western-coast field notes
- South24 (south24.net)
- Barran Press (barran.press) — Telegram @barranpress
- Aden Observer / Aden Gad
- Crater Sky, Khbr, Al-Khlaasa (khlaasa.net)
- YPA / Yemen Press Agency (ypagency.net) — Houthi-aligned — Telegram @yemenpressagency
- Saba (sabanew.net / saba.ye) — Houthi-aligned state — Telegram media @yemen_agency_saba and «وكالة سبأ - خدمات الوسائط»
- Al-Masirah — Houthi media — Telegram @almasirah
- Yahya Saree (Houthi military spokesman) — Telegram @saree_ye and @army21ye
- Mohammed Abdulsalam (Houthi political spokesman)
- Nasr al-Din Amer (Saba / Houthi media figure)
- 26 September Net / September Net (gov-aligned)
- Al-Mahriah — Telegram @almahriah
- Al-Watan (Saudi), Okaz
- Sheba Intelligence (shebaintelligence.uk)
- Yemen Security Media Cell (خلية الإعلام الأمني) — Houthi-aligned security media
- Shabakat al-Furqan (شبكة الفرقان) — Houthi-aligned front reporting
- Yemeni Voices / local tribal pages when attributable
- Fares al-Hemyari (`@FaresALhemyari`) — field OSINT, often first on Sana'a security incidents
- Jamal Atamimi (`@Jamal_Atamimi`) — rotating / watchlist; claims of SF raids are not taken as fact without a second source

## Arab regional — TV / wires / morning & afternoon papers
- Al Jazeera / Al Jazeera Net
- Al Arabiya / Al Hadath
- **Al-Akhbar** (Lebanon, morning paper exclusives — e.g. Syrian fighters) — TG/X priority
- **Al-Araby Al-Jadeed** (The New Arab) — X priority + RSS
- **Asharq Al-Awsat** (afternoon paper) — X priority + RSS
- Al-Monitor, Middle East Eye
- Arab News, Al Majalla, Saudi Gazette, Okaz, Al-Watan
- Al-Mayadeen, Al-Alam (note alignment)
- SPA (Saudi Press Agency) — for Saudi claims only, label clearly
- Al Qahera News (القاهرة الإخبارية), Roya News (Jordan), Al-Mamlaka (Jordan)
- Independent Arabia, CNN Arabic, Türkiye Today

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
