# Magyar Diceware

_Dobókocka-indexelt szólista magyar nyelvű jelmondatok készítéséhez, készítette: Lucz Soma ([https://github.com/luczsoma](https://github.com/luczsoma))_

[![en](https://img.shields.io/badge/lang-en-blue)](https://github.com/luczsoma/HungarianDiceware/blob/main/README.md)
[![hu](https://img.shields.io/badge/lang-hu-red)](https://github.com/luczsoma/HungarianDiceware/blob/main/README.hu.md)

## Mi a Diceware?

A [Diceware](https://theworld.com/~reinhold/diceware.html) egy biztonságos, de egyszerűen megjegyezhető jelmondatokat készítő eljárás, amely véletlenszerűen, dobókockák segítségével választ szavakat egy erre a célra készített Diceware-szólistáról. A lista olyan ötjegyű számokkal van indexelve, amelyek minden számjegye egy és hat között van: öt kockadobás eredménye határozza meg, melyik szó kerüljön a listáról a jelmondatba.

## Miért biztonságos?

Digitális biztonságunk sok mindentől függ, de a biztonságos jelszavak használata az egyik legfontosabb tényező. A biztonságos jelszókezelés szintén összetett téma. A Diceware egy biztonságos jelszógenerálási módszernek számít, de nem több annál; minden más a felhasználóján múlik. Általánosan ajánlott mindenre egyedi, egy biztonságos jelszókezelő\* által generált és abban tárolt jelszavakat használni; a jelszókezelő mesterjelszavát pedig célszerű Diceware-rel generálni.

\*A felhőalapú jelszókezelők közül határozottan a [1Password](https://1password.com)öt, offline felhasználásra pedig a [KeePassXC](https://keepassxc.org)-t ajánlom.

Szerintem a Diceware biztonságos jelszógeneráló módszer, mert:

- Teljesen offline: elektronikus eszközök nélkül működik. Ez jelentősen megnehezíti magának a generálási módszernek a kompromittálását, vagy a jelszó már létrehozáskori megszerzését. Ugyan egy hacker később is el tudja lopni a jelszót pszichológiai manipulációval (social engineering), a billentyűleütések naplózásával (keylogging) vagy közbeékelődéses (MITM) támadással, a Diceware a biztonság maximalizálásáról szól; emiatt nem javaslom online vagy elektronikus Diceware-eszközök használatát.

- Valódi véletlenszám-generátorból – a kockákból – származó entrópiával működik, a számítógépekben megszokott álvéletlenszám-generátorok használata helyett. Ugyan a TRNG-k által hozzáadott biztonságot általában semlegesítik más tényezők, a Diceware a biztonság maximalizálásáról szól; megfelelő, TRNG-k által biztosított véletlenszámok használatával pedig nehezebben megjósolható, így nehezebben feltörhető jelmondat készíthető. Online vagy elektronikus Diceware-eszközök esetében többnyire nem ellenőrizhető, hogy biztonságos TRNG-t vagy egyáltalán biztonságos véletlenszám-generátort használnak-e; emiatt sem javaslom ezek használatát. (Az álvéletlen és a valódi véletlen közötti különbségek megismeréséhez ajánlom [a Mediumon angol nyelven olvasható cikkemet](https://medium.com/tresorit-engineering/randomness-demystified-df47f9308717); ingyenes változat [itt](https://gist.github.com/luczsoma/ac5a1783f51879ade5e1dd7bfa032b40).)

- Jelszavaink feltöréséhez gyakran használják fel személyes adatainkat. A Diceware-rel készített jelmondatok azonban semmilyen módon nem kapcsolódnak a felhasználójukhoz, azaz nehezebben megjósolhatóak, így nehezebben feltörhetőek.

- A Diceware-rel generált jelmondatokat könnyű megjegyezni.

- A Diceware mögötti matematika stimmel. Részletekért lásd „A Matek” bekezdést.

## Hogyan használjuk?

0. **Szükségünk lesz egy vagy több dobókockára.** Határozottan nem javaslom online vagy elektronikus Diceware-eszközök használatát, mert ezzel a Diceware-módszer két fontos biztonsági jellemzőjét is semlegesítjük. A maximális biztonság érdekében jobb, ha kinyomtatjuk a Diceware-szólistát, hogy még a szavak kikeresését se lehessen elektronikusan kifigyelni.

1. **Döntsük el, hány szóból álljon a jelmondat.** Egy ötszavas jelmondat már sokkal magasabb biztonságot nyújt, mint az általában használt egyszerű jelszavak. Jelszókezelő mesterjelszavaként legalább hat szó ajánlott, bár erre én inkább egy nyolc- vagy tízszavas jelmondatot használnék. Kevésbé gyakori felhasználásra vagy nagyértékű adat védelmére húszszavas jelmondat is készíthető. (Húsz szó használata már valamivel biztonságosabb, mint egy 256 bites szimmetrikus kulcsé, így nem igazán van értelme feljebb menni. További információkért lásd „A Matek” bekezdést.)

2. **Tegyük fel, hogy egy hatszavas jelmondat mellett döntöttünk. Ehhez 6 \* 5 = 30 darab egy és hat közötti számra, azaz összesen harminc kockadobásra lesz szükségünk.** Dobhatunk egy kockával harmincszor, harminc kockával egyszerre, vagy bármilyen más kombinációban is; de dobás előtt mindenképpen alaposan rázzuk össze a kocká(ka)t. Ha egyszerre több kockával dobunk, balról jobbra olvassuk le őket. Írjuk le a kockadobások eredményét ötösével csoportosítva egy papírra; jobb, ha nem használunk elektronikát az eredmény rögzítéséhez.

3. **Keressük ki a leírt ötjegyű számokat a Diceware-listáról, és olvassuk le a hozzájuk tartozó szavakat.** Például a 25341 azt jelenti, hogy a jelmondatba kerülő szó a „TODO”.

4. **Ajánlatos lecserélnünk a talált szavakban lévő ékezetes betűket ékezet nélküliekre.** Sok alkalmazás borzasztóan rosszul kezeli a nem ASCII-karaktereket is tartalmazó jelszavakat; de még ha alkalmazásszinten nincs is hiba, sem feltétlenül fog működni a jelszavunk esetleges karakterkódolási, Unicode-normalizálási, stb. különbségek miatt (és ilyeneket okozhat akár eltérő operációs rendszer használata is). Egyébként is célszerű olyan jelszót választani, amit bármilyen billentyűzetkiosztással be tudunk gépelni. Az ékezet nélküli betűk használata nem jelenti, hogy bármit is be kellene áldoznunk a biztonságunkból, de lehet, hogy hosszabb jelmondatra lesz szükségünk; lásd a következő lépést.

5. **Győződjünk meg róla, hogy a hat megtalált szóban lévő betűk száma összesen legalább annyi, mint az alábbi táblázat megfelelő mezőjében.** Ha nem, kezdjük újra a jelmondatkészítést az 1. lépéstől. A minimális összbetűszám szükségességének okáért lásd „A Matek” bekezdést.

6. **A kész jelmondatunk a hat megtalált szó, szóközökkel elválasztva.** A szavak elválasztása fontos, enélkül a jelmondatunk gyengébb lehet a szavak közötti esetleges redundancia miatt.

7. **Igény szerint dekorálhatjuk a jelmondatunkat.** Még biztonságosabbá tehetjük, ha – a könnyű megjegyezhetőség szempontjának megtartásával – néhány kisbetűt nagybetűre cserélünk, hozzáadunk egy-két nem-alfabetikus karaktert, és szóközök helyett más karaktereket is használunk a szavak elválasztására. Ugyanakkor továbbra is ajánlatos csak ASCII-kararktereket használnunk a jelmondatban; lásd a 4. lépést.

8. **Jegyezzük meg jól a jelmondatot, és semmisítsük meg a papírt, amire az eredményeket írtuk.** Persze el is rejthetjük valami biztonságos helyre.

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

Az 1. verzió elég rossz minőségű. Tartalmaz furcsa szavakat és szavaknak nem mondható furcsaságokat is, ezek miatt nehezebb lehet megjegyezni egy jelmondatot. Nem emlékszem a szólista forrására, ráadásul valamiért jó ötletnek tartottam minden ékezetes betűt az ékezet nélküli párjára cserélni a teljes listán.

### 2. verzió

A 2. verzió a [Magyar Nemzeti Szövegtár](http://corpus.nytud.hu/mnsz/index_hun.html) felhasználásával készült, amelyet a [Magyar Tudományos Akadémia](https://mta.hu) Nyelvtudományi Intézete állított össze. (A Nyelvtudományi Intézet ma a [Nyelvtudományi Kutatóközpont](https://nytud.hu) nevet viseli, és a [Magyar Kutatási Hálózat](https://hun-ren.hu) részeként működik.) A lista a korpusz azon 7776 leggyakoribb szavát tartalmazza, amely főnév (de nem tulajdonnév), melléknév vagy ige szótári alakja, nem vulgáris jelentéstartalmú, és 2–6 betű hosszúságú. A vulgáris jelentéstartalmú szavakat kézzel válogattam ki. Külön köszönet [Sass Bálintnak](https://nytud.hu/munkatars/sass-balint) a korpuszból készített részleges gyakorisági listáért.
