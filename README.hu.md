# Magyar Diceware

_Dobókocka-indexelt szólista magyar nyelvű jelmondatok készítéséhez, készítette: Lucz Soma ([https://github.com/luczsoma](https://github.com/luczsoma))_

[![en](https://img.shields.io/badge/lang-en-blue)](https://github.com/luczsoma/HungarianDiceware/blob/main/README.md)
[![hu](https://img.shields.io/badge/lang-hu-red)](https://github.com/luczsoma/HungarianDiceware/blob/main/README.hu.md)

## Mi a Diceware?

A [Diceware](https://theworld.com/~reinhold/diceware.html) egy biztonságos, de egyszerűen megjegyezhető jelmondatokat készítő eljárás, amely véletlenszerűen, dobókockák segítségével választ szavakat egy erre a célra készített Diceware-szólistáról. A lista olyan ötjegyű számokkal van indexelve, amelyek minden számjegye egy és hat között van: öt kockadobás eredménye határozza meg, melyik szó kerüljön a listáról a jelmondatba.

## Miért biztonságos?

Digitális biztonságunk sok mindentől függ, de a biztonságos jelszavak használata az egyik legfontosabb tényező. A biztonságos jelszókezelés szintén összetett téma. A Diceware egy biztonságos jelszógenerálási módszernek számít, de nem több annál; minden más a felhasználóján múlik. Általánosan ajánlott mindenre egyedi, egy biztonságos jelszókezelő\* által generált és abban tárolt jelszavakat használni; a jelszókezelő mesterjelszavát pedig célszerű és biztonságos Diceware-rel generálni.

\*A felhőalapú jelszókezelők közül határozottan a [1Passwordöt](https://1password.com), offline felhasználásra pedig a [KeePassXC](https://keepassxc.org)-t ajánlom.

Szerintem a Diceware biztonságos jelszógeneráló módszer, mert:

- Offline: elektronikus eszközök nélkül működik. Ez jelentősen megnehezíti magának a generálási módszernek a kompromittálását, vagy a jelszó már létrehozáskori megszerzését. Ugyan egy hacker később is el tudja lopni a jelszót pszichológiai manipulációval (social engineering), a billentyűleütések naplózásával (keylogging) vagy közbeékelődéses (MITM) támadással, a Diceware a biztonság maximalizálásáról szól; emiatt nem javaslom online vagy elektronikus Diceware-eszközök használatát.

- Valódi véletlenszám-generátorból – a kockákból – származó entrópiával működik, a számítógépekben megszokott álvéletlenszám-generátorok használata helyett. Ugyan a TRNG-k által hozzáadott biztonságot általában csökkentik vagy semlegesítik más tényezők, a Diceware a biztonság maximalizálásáról szól; megfelelő, TRNG-k által biztosított véletlenszámok használatával pedig nehezebben megjósolható, így nehezebben feltörhető jelmondat készíthető. Online vagy elektronikus Diceware-eszközök esetében többnyire nem ellenőrizhető, hogy biztonságos TRNG-t vagy egyáltalán biztonságos véletlenszám-generátort használnak-e; emiatt sem javaslom ezek használatát. (Az álvéletlen és a valódi véletlen közötti különbségek megismeréséhez ajánlom [a Mediumon megjelent, angol nyelven olvasható cikkemet](https://medium.com/tresorit-engineering/randomness-demystified-df47f9308717); ingyenes változat [itt](https://gist.github.com/luczsoma/ac5a1783f51879ade5e1dd7bfa032b40).)

- Jelszavaink feltöréséhez gyakran használják fel személyes adatainkat. A Diceware-rel készített jelmondatok azonban semmilyen módon nem kapcsolódnak a felhasználójukhoz, azaz nehezebben megjósolhatók, így nehezebben feltörhetők.

- A Diceware-rel generált jelmondatokat könnyű megjegyezni.

- A Diceware mögötti matematika stimmel. Részletekért lásd „A Matek” bekezdést.

## Hogyan használjuk?

0. **Szükségünk lesz egy vagy több dobókockára.** Határozottan nem javaslom online vagy elektronikus Diceware-eszközök használatát, mert ezzel a Diceware-módszer két fontos biztonsági jellemzőjét is semlegesítjük. A maximális biztonság érdekében jobb, ha kinyomtatjuk a Diceware-szólistát, hogy még a szavak kikeresését se lehessen elektronikusan kifigyelni.

1. **Döntsük el, hány szóból álljon a jelmondat.** Egy ötszavas jelmondat már sokkal magasabb biztonságot nyújt, mint az általában használt egyszerű jelszavak. Jelszókezelő mesterjelszavaként legalább hat szó ajánlott, bár erre én inkább egy nyolc- vagy tízszavas jelmondatot használnék. Kevésbé gyakori felhasználásra vagy nagyértékű adat védelmére húszszavas jelmondat is készíthető. (Húsz szó használata már valamivel biztonságosabb, mint egy 256 bites szimmetrikus kulcsé, így nem igazán van értelme feljebb menni. További információkért lásd „A Matek” bekezdést.)

2. **Tegyük fel, hogy hatszavas jelmondat mellett döntöttünk. Ehhez 6 \* 5 = 30 darab egy és hat közötti számra, azaz összesen harminc kockadobásra lesz szükségünk.** Dobhatunk egy kockával harmincszor, harminc kockával egyszerre, vagy bármilyen más kombinációban is; de dobás előtt mindenképpen alaposan rázzuk össze a kocká(ka)t. Ha egyszerre több kockával dobunk, balról jobbra olvassuk le őket. Írjuk le a kockadobások eredményét ötösével csoportosítva egy papírra; jobb, ha nem használunk elektronikát az eredmény rögzítéséhez.

3. **Keressük ki a leírt ötjegyű számokat a Diceware-listáról, és olvassuk le a hozzájuk tartozó szavakat.** Például a 25341 azt jelenti, hogy a jelmondatba kerülő szó a „TODO”.

4. **Ajánlatos lecserélnünk a talált szavakban lévő ékezetes betűket ékezet nélküliekre.** Sok alkalmazás borzalmasan rosszul kezeli a nem ASCII-karaktereket is tartalmazó jelszavakat; de még ha alkalmazásszinten nincs is hiba, sem feltétlenül fog működni a nem ASCII-jelszavunk esetleges karakterkódolási, Unicode-normalizálási, stb. különbségek miatt (és ilyeneket okozhat akár eltérő operációs rendszer használata is). Egyébként is célszerű olyan jelszót választani, amit bármilyen billentyűzetkiosztással be tudunk gépelni. Az ékezet nélküli betűk használata nem jelenti, hogy bármit is be kellene áldoznunk a biztonságunkból, de lehet, hogy hosszabb jelmondatra lesz szükségünk; lásd a következő lépést.

5. **Győződjünk meg róla, hogy a hat megtalált szóban lévő betűk száma összesen legalább annyi, mint az alábbi táblázat megfelelő mezőjében.** Ha nem, kezdjük újra a jelmondatkészítést a 2. lépéstől. A minimális összbetűszám szükségességének okáért lásd „A Matek” bekezdést.

6. **A kész jelmondatunk a hat megtalált szó szóközökkel elválasztva.** A szavak elválasztása fontos, enélkül a jelmondatunk gyengébb lehet a szavak közötti esetleges redundancia miatt.

7. **Ha szeretnénk, fel is díszíthetjük a jelmondatunkat.** Még biztonságosabbá tehetjük, ha – a könnyű megjegyezhetőség szempontjának megtartásával – néhány kisbetűt nagybetűre cserélünk, hozzáadunk egy-két nem-alfabetikus karaktert, és szóközök helyett más karaktereket is használunk a szavak elválasztására. Ugyanakkor továbbra is ajánlatos csak ASCII-kararktereket használnunk a jelmondatban (lásd a 4. lépést).

8. **Jegyezzük meg jól a jelmondatunkat, és semmisítsük meg a papírt, amire az eredményeket írtuk.** Persze el is rejthetjük valami biztonságos helyre.

| Szavak száma | Minimális összbetűszám<br />ékezetes karakterek használata esetén | Minimális összbetűszám<br />ékezetes karakterek használata nélkül |
| ------------ | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| 5            |                                                                   |                                                                   |
| 6            |                                                                   |                                                                   |
| 7            |                                                                   |                                                                   |
| 8            |                                                                   |                                                                   |
| 9            |                                                                   |                                                                   |
| 10           |                                                                   |                                                                   |
| 11           |                                                                   |                                                                   |
| 12           |                                                                   |                                                                   |
| 13           |                                                                   |                                                                   |
| 14           |                                                                   |                                                                   |
| 15           |                                                                   |                                                                   |
| 16           |                                                                   |                                                                   |
| 17           |                                                                   |                                                                   |
| 18           |                                                                   |                                                                   |
| 19           |                                                                   |                                                                   |
| 20           |                                                                   |                                                                   |

## Magyar Diceware lista verziók

**Új jelmondatok készítéséhez a Magyar Diceware szólista 2. verziójának használata ajánlott.**

### 1. verzió

Az 1. verzió nem túl jó minőségű. Furcsa, ritka szavakat és random karakterláncokat is tartalmaz, ezek miatt nehezebb lehet megjegyezni egy jelmondatot. Nem emlékszem a szólista forrására, ráadásul valamiért jó ötletnek tartottam minden ékezetes betűt az ékezet nélküli párjára cserélni a teljes listán.

### 2. verzió

A 2. verzió a [Magyar Nemzeti Szövegtár](http://corpus.nytud.hu/mnsz/index_hun.html) felhasználásával készült, amelyet a [Magyar Tudományos Akadémia](https://mta.hu) Nyelvtudományi Intézete állított össze. (A Nyelvtudományi Intézet ma a [Nyelvtudományi Kutatóközpont](https://nytud.hu) nevet viseli, és a [Magyar Kutatási Hálózat](https://hun-ren.hu) részeként működik.) A lista a korpusz azon 7776 leggyakoribb szavát tartalmazza, amely főnév (de nem tulajdonnév), melléknév vagy ige szótári alakja, nem vulgáris jelentéstartalmú, és 2–6 betű hosszúságú. A vulgáris jelentéstartalmú szavakat kézzel válogattam ki. Külön köszönet [Sass Bálintnak](https://nytud.hu/munkatars/sass-balint) a korpuszból készített részleges gyakorisági listáért.

## A Matek

A számítástechnikában a jelszavak erősségét általában az információelméletből származó, shannonban (Sh) mért információs entrópia nevű mennyiséggel jellemzik. Ez egy adott típusú jelszóban lévő információ tárolásához minimálisan szükséges bitek számaként értelmezhető. A jelszó biztos megtalálásához szükséges próbálkozások száma helyett annak kettes alapú logaritmusát véve kapott értékre általában a jelszó „entrópiabitjeinek” számaként szokásos hivatkozni, bár ez valójában nem ugyanaz a mennyiség, mint a jelszó információs entrópiája. Egy ilyen módon számolva 42 bit entrópiával rendelkező jelszó ugyanolyan erős lenne, mint egy 42 elemű bitlánc, amelynek minden eleme véletlenszerűen, pl. igazságos pénzfeldobással lett kiválasztva. Másképp fogalmazva, egy 42 bit entrópiával rendelkező jelszó 2<sup>42</sup> (4 398 046 511 104) kísérletet igényelne az összes lehetőség végigpróbálgatásához egy kimerítő keresés során. A jelszó entrópiájának egy bittel való megnövelése tehát megduplázza a szükséges próbálkozások számát, kétszer nehezebbé téve egy támadó dolgát. A támadónak átlagosan a lehetséges jelszavak felét kell végigpróbálgatnia a helyes jelszó megtalálásához.

### Szimbólumonkénti entrópia egy olyan szimbólumkészlet esetén, ahol minden szimbólum egyforma valószínűségű

Ha az elemeket véletlenszerűen választjuk ki egy N elemű szimbólumhalmazból, a H<sub>s</sub> szimbólumonkénti entrópiát a H<sub>s</sub> = log<sub>2</sub>(N) képlet adja meg. Az alábbi táblázat néhány gyakori szimbólumkészlet szimbólumonkénti entrópiaértékét tartalmazza.

| Szimbólumkészet                                                        | Szimbólumok száma (N) | Szimbólumonkénti entrópia (H<sub>s</sub>) |
| ---------------------------------------------------------------------- | --------------------- | ----------------------------------------- |
| Arab számok (0–9)                                                      | 10                    | ~3,322 bit                                |
| Hexadecimális számok (0–9 & A–F)                                       | 16                    | 4 bit                                     |
| Kisbetű-nagybetű érzéketlen latin ábécé (a–z / A–Z)                    | 26                    | ~4,700 bit                                |
| Kisbetű-nagybetű érzéketlen alfanumerikus karakterek (a–z / A–Z & 0–9) | 36                    | ~5,170 bit                                |
| Kisbetű-nagybetű érzékeny latin ábécé (a–z & A–Z)                      | 52                    | ~5,700 bit                                |
| Kisbetű-nagybetű érzékeny alfanumerikus karakterek (a–z & A–Z & 0–9)   | 62                    | ~5,954 bit                                |
| ASCII nyomtatható karakterek, kivéve szókoz                            | 94                    | ~6,555 bit                                |
| ASCII nyomtatható karakterek                                           | 95                    | ~6,570 bit                                |
| Kiterjesztett ASCII nyomhatható karakterek                             | 218                   | ~7,768 bit                                |
| Bináris karakterek (0–255 vagy 8 bit vagy 1 bájt)                      | 256                   | 8 bit                                     |
| Diceware szólista                                                      | 7776                  | ~12,925 bit                               |

A Diceware ~12,925 bites szimbólumonkénti entrópiaértéke feltételezi, hogy a potenciális támadók három dolgot tudnak a jelmondatról: hogy Diceware-rel készült, hogy milyen szólistát használtak az elkészítéséhez, és hogy hány szóból áll. Ha egy támadó kevesebb információval rendelkezik, akkor a szimbólumonkénti entrópia nagyobb is lehet ~12,925 bitnél. Vagyis, ha egy támadó nem tudja, hogy Diceware-rel készítettük a jelmondatainkat, még nagyobb biztonságban is lehetünk; ezzel együtt továbbra is ajánlott legalább hat szót használni, figyelni a minimális összbetűszám követelményére, valamint feldíszíteni a jelmondatot kis- és nagybetűkkel és nem-alfabetikus karakterekkel.

### Adott jelszóentrópia (H) eléréséhez szükséges minimális jelszóhossz (L) egy N elemű szimbólumhalmazból véletlenszerűen generált jelszó esetén

Egy N elemű szimbólumhalmazból véletlenszerűen generált jelszó minimálisan szükséges hosszát (L) a kívánt jelszóentrópia (H) eléréséhez az L = ceil(H / log<sub>2</sub>(N)) képlet adja meg, ahol a ceil a matematikai felső egészrész függvényt jelöli (azaz ami x-hez a legkisebb x-nél nagyobb vagy vele egyenlő számot rendeli hozzá). Az alábbi táblázat az adott jelszóentrópia-szintekhez minimálisan szükséges jelszóhosszakat tartalmazza néhány gyakori szimbólumkészletre.

| Kívánt jelszóentrópia (H) | Kisbetű-nagybetű érzékeny latin ábécé (N = 52) | Kisbetű-nagybetű érzékeny alfanumerikus karakterek (N = 62) | ASCII nyomtatható karakterek (N = 95) | Kiterjesztett ASCII nyomhatható karakterek (N = 218) | Diceware szólista (N = 7776) |
| ------------------------- | ---------------------------------------------- | ----------------------------------------------------------- | ------------------------------------- | ---------------------------------------------------- | ---------------------------- |
| 8 bit (1 bájt)            | 2                                              | 2                                                           | 2                                     | 2                                                    | 1                            |
| 32 bit (4 bájt)           | 6                                              | 6                                                           | 5                                     | 5                                                    | 3                            |
| 40 bit (5 bájt)           | 8                                              | 7                                                           | 7                                     | 6                                                    | 4                            |
| 64 bit (8 bájt)           | 12                                             | 11                                                          | 10                                    | 9                                                    | 5                            |
| 80 bit (10 bájt)          | 15                                             | 14                                                          | 13                                    | 11                                                   | 7                            |
| 96 bit (12 bájt)          | 17                                             | 17                                                          | 15                                    | 13                                                   | 8                            |
| 128 bit (16 bájt)         | 23                                             | 22                                                          | 20                                    | 17                                                   | 10                           |
| 160 bit (20 bájt)         | 29                                             | 27                                                          | 25                                    | 21                                                   | 13                           |
| 192 bit (24 bájt)         | 34                                             | 33                                                          | 30                                    | 25                                                   | 15                           |
| 224 bit (28 bájt)         | 40                                             | 38                                                          | 35                                    | 29                                                   | 18                           |
| 256 bit (32 bájt)         | 45                                             | 43                                                          | 39                                    | 33                                                   | 20                           |

A Diceware értékei feltételezik, hogy a potenciális támadók három dolgot tudnak a jelmondatról: hogy Diceware-rel készült, hogy milyen szólistát használtak az elkészítéséhez, és hogy hány szóból áll. Ha egy támadó kevesebb információval rendelkezik, a kívánt jelszóentrópia rövidebb jelmondattal is elérhető. Vagyis, ha egy támadó nem tudja, hogy Diceware-rel készítettük a jelmondatainkat, még nagyobb biztonságban is lehetünk; ezzel együtt továbbra is ajánlott legalább hat szót használni, figyelni a minimális összbetűszám követelményére, valamint feldíszíteni a jelmondatot kis- és nagybetűkkel és nem-alfabetikus karakterekkel.

### Mennyi jelszóentrópia szükséges?

Egy jelszó entrópiabitjeinek minimális száma az adott alkalmazás biztonsági modelljétől függ. Ha a szoftver nem alkalmaz kulcsnyújtást (key stretching), magasabb entrópiájú jelszavak használata szükséges. A 2005 júniusában közzétett RFC 4086, „Randomness Requirements for Security”, mutat néhány példát arra, hogy különféle biztonsági modellek esetén milyen kívánt jelszóentrópiával számoljunk. Az ebben megfogalmazott javaslatok alsó korlátja, ha csak online támadások várhatók, 29 bit; felső korlátja pedig 96 bit, hosszú ideig használatban lévő fontos kriptográfiai kulcsok esetén, pl. titkosító alkalmazásokban, ha kulcsnyújtás nem alkalmazható. Egy nyújtatlan kulcsokra alapozó 2010-es Giorgia Tech Research Institute-tanulmány legalább 12 karakter hosszúságú véletlenszerű jelszavakat javasolt. Az offline támadások megelőzése érdekében ajánlott szem előtt tartani, hogy a számítási teljesítmény folyamatos növekedésével párhuzamosan a szükséges entrópiabitek számának is növekednie kell.

A felső korlát a titkosításhoz használt kulcsok kiválasztásának követelményein alapul. 1999-ben egy Electronic Frontier Foundation-projekt kevesebb mint egy nap alatt feltörte az 56 bites DES titkosítást egy erre a célra tervezett hardver segítségével. 2002-re a distributed.net – 4 év, 9 hónap és 23 nap alatt – feltört egy 64 bites kulcsot. Egy 2012. október 12-i distributed.net-becslés szerint egy 72 bites kulcs feltörése akkori hardverekkel 45 479 napig, azaz 124,8 évig tartott volna. A jelenlegi ismereteink szerinti alapvető fizikai korlátok miatt nem várható, hogy bármilyen digitális számítógép vagy hálózat kimerítő kereséssel fel tudjon törni 256 bites titkosítást. Még nem ismert, hogy a kvantumszámítógépek a gyakorlatban képesek lesznek-e erre; az elméleti elemzés nem zárja ki ezt az eshetőséget.

Hat Diceware szó használata ~77,549 bit jelszóentrópiát jelent. Mindennapi használatra ez elég kell hogy legyen. Tíz szó használata ~129,248 bit entrópiát jelent; ez már magasabb, mint a klasszikus 128 bites biztonság, és a biztonsági tartaléka nagy valószínűséggel ki fog tartani a kvantumszámítógépek érkezéséig. Húsz szó használata ~258,426 bit entrópiát jelent; mai ismereteink szerint ez védelmet nyújt a kvantumszámítógépek ellen is.
