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

1. **Döntsük el, hány szóból álljon a jelmondat.** Egy ötszavas jelmondat már sokkal magasabb biztonságot nyújt, mint az általában használt egyszerű jelszavak. Jelszókezelő mesterjelszavaként legalább hat szó ajánlott, bár erre én inkább egy nyolc- vagy tízszavas jelmondatot használnék. Kevésbé gyakori felhasználásra vagy nagyértékű adat védelmére akár húszszavas jelmondat is készíthető. (Húsz szó használata már valamivel biztonságosabb, mint egy 256 bites szimmetrikus kulcsé, így nem igazán van értelme feljebb menni. További információkért lásd „A Matek” bekezdést.)

2. **Tegyük fel, hogy hatszavas jelmondat mellett döntöttünk. Ehhez 6 \* 5 = 30 darab egy és hat közötti számra, azaz összesen harminc kockadobásra lesz szükségünk.** Dobhatunk egy kockával harmincszor, harminc kockával egyszerre, vagy bármilyen más kombinációban is; de dobás előtt mindenképpen alaposan rázzuk össze a kocká(ka)t. Ha egyszerre több kockával dobunk, balról jobbra olvassuk le őket. Írjuk le a kockadobások eredményét ötösével csoportosítva egy papírra; jobb, ha nem használunk elektronikát az eredmény rögzítéséhez.

3. **Keressük ki a leírt ötjegyű számokat a Diceware-listáról, és olvassuk le a hozzájuk tartozó szavakat.** Például a 25341 azt jelenti, hogy a jelmondatba kerülő szó a „TODO”.

4. **Ajánlatos lecserélnünk a talált szavakban lévő ékezetes betűket ékezet nélküliekre.** Sok alkalmazás borzalmasan rosszul kezeli a nem ASCII-karaktereket is tartalmazó jelszavakat; de még ha alkalmazásszinten nincs is hiba, sem feltétlenül fog működni a nem ASCII-jelszavunk esetleges karakterkódolási, Unicode-normalizálási, stb. különbségek miatt (és ilyeneket okozhat akár eltérő operációs rendszer használata is). Egyébként is célszerű olyan jelszót választani, amit bármilyen billentyűzetkiosztással be tudunk gépelni. Az ékezet nélküli betűk használata nem jelenti, hogy bármit is be kellene áldoznunk a biztonságunkból, de lehet, hogy hosszabb jelmondatra lesz szükségünk; lásd a következő lépést.

5. **Győződjünk meg róla, hogy a hat megtalált szóban lévő betűk száma összesen legalább annyi, mint az alábbi táblázat megfelelő mezőjében.** Ha nem, kezdjük újra a jelmondatkészítést a 2. lépéstől. A minimális összbetűszám követelmény okáért lásd „A Matek” bekezdést.

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

A számítástechnikában a jelszavak erősségét általában az információelméletből származó, shannonban (Sh) mért információs entrópia nevű mennyiséggel jellemzik. Ez egy adott típusú jelszóban lévő információ tárolásához minimálisan szükséges bitek számaként értelmezhető. A jelszó biztos megtalálásához szükséges próbálkozások száma helyett annak kettes alapú logaritmusát véve kapott értékre általában a jelszó „entrópiabitjeinek” számaként szoktak hivatkozni, bár ez valójában nem ugyanaz a mennyiség, mint a jelszó információs entrópiája. Egy ilyen módon számolva 42 bit entrópiával rendelkező jelszó ugyanolyan erős lenne, mint egy 42 elemű bitlánc, amelynek minden eleme véletlenszerűen, pl. igazságos pénzfeldobással lett kiválasztva. Másképp fogalmazva, egy 42 bit entrópiával rendelkező jelszó $`2^{42} = 4,398,046,511,104`$ kísérletet igényelne az összes lehetőség végigpróbálgatásához egy kimerítő keresés során. A jelszó entrópiájának egy bittel való megnövelése tehát megduplázza a szükséges próbálkozások számát, kétszer nehezebbé téve egy támadó dolgát. A támadónak átlagosan a lehetséges jelszavak felét kell végigpróbálgatnia a helyes jelszó megtalálásához.

### Szimbólumonkénti entrópia egy olyan szimbólumkészlet esetén, ahol minden szimbólum egyforma valószínűségű

Ha az elemeket véletlenszerűen választjuk ki egy $`N`$ elemű szimbólumhalmazból, a szimbólumonkénti entrópiát ($`H_s`$) bitekben a $`H_s = \log_2 N`$ képlet adja meg. Az alábbi táblázat néhány gyakori szimbólumkészlet szimbólumonkénti entrópiaértékét tartalmazza.

| Szimbólumkészet                                                        | Szimbólumok száma ($`N`$) | Szimbólumonkénti entrópia ($`H_s`$) |
| ---------------------------------------------------------------------- | ------------------------- | ----------------------------------- |
| Arab számok (0–9)                                                      | 10                        | ~3,322 bit                          |
| Hexadecimális számok (0–9 & A–F)                                       | 16                        | 4 bit                               |
| Kisbetű-nagybetű érzéketlen latin ábécé (a–z / A–Z)                    | 26                        | ~4,700 bit                          |
| Kisbetű-nagybetű érzéketlen alfanumerikus karakterek (a–z / A–Z & 0–9) | 36                        | ~5,170 bit                          |
| Kisbetű-nagybetű érzékeny latin ábécé (a–z & A–Z)                      | 52                        | ~5,700 bit                          |
| Kisbetű-nagybetű érzékeny alfanumerikus karakterek (a–z & A–Z & 0–9)   | 62                        | ~5,954 bit                          |
| ASCII nyomtatható karakterek, kivéve szókoz                            | 94                        | ~6,555 bit                          |
| ASCII nyomtatható karakterek                                           | 95                        | ~6,570 bit                          |
| Kiterjesztett ASCII nyomhatható karakterek                             | 218                       | ~7,768 bit                          |
| Bináris karakterek (0–255 vagy 8 bit vagy 1 bájt)                      | 256                       | 8 bit                               |
| Diceware szólista                                                      | 7776                      | ~12,925 bit                         |

A Diceware ~12,925 bites szimbólumonkénti entrópiaértéke feltételezi, hogy a potenciális támadók három dolgot tudnak a jelmondatról: hogy Diceware-rel készült, hogy milyen szólistát használtak az elkészítéséhez, és hogy hány szóból áll. Ha egy támadó kevesebb információval rendelkezik, akkor a szimbólumonkénti entrópia nagyobb is lehet ~12,925 bitnél. Azaz ha egy támadó nem tudja, hogy Diceware-rel készítettük a jelmondatainkat, még nagyobb biztonságban is lehetünk; ezzel együtt továbbra is ajánlott legalább hat szót használni, betartani a minimális összbetűszám követelményt, valamint feldíszíteni a jelmondatot kis- és nagybetűkkel és nem-alfabetikus karakterekkel.

### Adott jelszóentrópia eléréséhez szükséges minimális jelszóhossz egy adott szimbólumhalmazból véletlenszerűen generált jelszó esetén

Egy $`N`$ elemű szimbólumhalmazból véletlenszerűen generált jelszó minimálisan szükséges hosszát ($`L_\mathrm{min}`$) a kívánt jelszóentrópia ($`H`$) eléréséhez az

```math
L_\mathrm{min} = \left\lceil \frac{H}{\log_2 N} \right\rceil,
```

képlet adja meg, ahol a $`\lceil~\rceil`$ a matematikai felső egészrész függvényt jelöli (azaz azt a $`c`$ függvényt, amit a következő képlet definiál: $`c(x) = \min \{ y \in \mathbb{Z} \mid y \geq x \} \quad (x \in \mathbb{R})`$). Az alábbi táblázat az adott jelszóentrópia-szintekhez minimálisan szükséges jelszóhosszakat tartalmazza néhány gyakoribb szimbólumkészletre.

| Kívánt jelszóentrópia ($`H`$) | Kisbetű-nagybetű érzékeny latin ábécé ($`N = 52`$) | Kisbetű-nagybetű érzékeny alfanumerikus karakterek ($`N = 62`$) | ASCII nyomtatható karakterek ($`N = 95`$) | Kiterjesztett ASCII nyomhatható karakterek ($`N = 218`$) | Diceware szólista ($`N = 7776`$) |
| ----------------------------- | -------------------------------------------------- | --------------------------------------------------------------- | ----------------------------------------- | -------------------------------------------------------- | -------------------------------- |
| 8 bit (1 bájt)                | 2                                                  | 2                                                               | 2                                         | 2                                                        | 1                                |
| 32 bit (4 bájt)               | 6                                                  | 6                                                               | 5                                         | 5                                                        | 3                                |
| 40 bit (5 bájt)               | 8                                                  | 7                                                               | 7                                         | 6                                                        | 4                                |
| 64 bit (8 bájt)               | 12                                                 | 11                                                              | 10                                        | 9                                                        | 5                                |
| 80 bit (10 bájt)              | 15                                                 | 14                                                              | 13                                        | 11                                                       | 7                                |
| 96 bit (12 bájt)              | 17                                                 | 17                                                              | 15                                        | 13                                                       | 8                                |
| 128 bit (16 bájt)             | 23                                                 | 22                                                              | 20                                        | 17                                                       | 10                               |
| 160 bit (20 bájt)             | 29                                                 | 27                                                              | 25                                        | 21                                                       | 13                               |
| 192 bit (24 bájt)             | 34                                                 | 33                                                              | 30                                        | 25                                                       | 15                               |
| 224 bit (28 bájt)             | 40                                                 | 38                                                              | 35                                        | 29                                                       | 18                               |
| 256 bit (32 bájt)             | 45                                                 | 43                                                              | 39                                        | 33                                                       | 20                               |

A Diceware értékei feltételezik, hogy a potenciális támadók három dolgot tudnak a jelmondatról: hogy Diceware-rel készült, hogy milyen szólistát használtak az elkészítéséhez, és hogy hány szóból áll. Ha egy támadó kevesebb információval rendelkezik, a kívánt jelszóentrópia rövidebb jelmondattal is elérhető. Azaz ha egy támadó nem tudja, hogy Diceware-rel készítettük a jelmondatainkat, még nagyobb biztonságban is lehetünk; ezzel együtt továbbra is ajánlott legalább hat szót használni, betartani a minimális összbetűszám követelményt, valamint feldíszíteni a jelmondatot kis- és nagybetűkkel és nem-alfabetikus karakterekkel.

### Mennyi jelszóentrópia szükséges?

Egy jelszó entrópiabitjeinek minimális száma az adott alkalmazás biztonsági modelljétől függ. Ha a jelszó nem esik át kulcsnyújtáson (key stretching), több entrópia szükséges. A 2005 júniusában közzétett RFC 4086, „Randomness Requirements for Security”, mutat néhány példát arra, hogy különféle biztonsági modellek esetén milyen kívánt jelszóentrópiával számoljunk. A megfogalmazott javaslatok alsó korlátja, ha csak online támadások várhatók, 29 bit; felső korlátja pedig 96 bit, hosszú ideig használatban lévő fontos kriptográfiai kulcsok esetén, pl. titkosító alkalmazásokban, ha kulcsnyújtás nem alkalmazható. Egy nyújtatlan kulcsokra alapozó 2010-es Giorgia Tech Research Institute-tanulmány legalább 12 karakter hosszúságú véletlenszerű jelszavakat javasolt. Az offline támadások megelőzése érdekében ajánlott szem előtt tartani, hogy a számítási teljesítmény folyamatos növekedésével párhuzamosan a szükséges entrópiabitek számának is növekednie kell.

A felső korlát a titkosításhoz használt kulcsok kiválasztásának követelményein alapul. 1999-ben egy Electronic Frontier Foundation-projekt kevesebb mint egy nap alatt feltörte az 56 bites DES titkosítást egy erre a célra tervezett hardver segítségével. 2002-re a distributed.net – 4 év, 9 hónap és 23 nap alatt – feltört egy 64 bites kulcsot. Egy 2012. október 12-i distributed.net-becslés szerint egy 72 bites kulcs feltörése akkori hardverekkel 45 479 napig, azaz 124,8 évig tartott volna. A jelenlegi ismereteink szerinti alapvető fizikai korlátok miatt nem várható, hogy bármilyen digitális számítógép vagy hálózat kimerítő kereséssel fel tudjon törni 256 bites titkosítást. Még nem ismert, hogy a kvantumszámítógépek a gyakorlatban képesek lesznek-e erre; az elmélet nem zárja ki ezt az eshetőséget.

Hat Diceware szó használata ~77,549 bit jelszóentrópiát jelent; mindennapi használatra ez elég kellene hogy legyen. Tíz szó használata ~129,248 bit entrópiát jelent; ez már magasabb, mint a klasszikus „128 bites biztonság”, és a biztonsági tartaléka nagy valószínűséggel ki fog tartani a kvantumszámítógépek érkezéséig. Húsz szó használata ~258,426 bit entrópiát jelent; mai ismereteink szerint ez védelmet nyújt a kvantumszámítógépek ellen is.

### A lista 2. verziójának fontosabb statisztikai tulajdonságai

#### A szóhosszak valószínűségi eloszlása

Jelölje $`L`$ valószínűségi változó egy, a lista 2. verziójáról véletlenszerűen választott szó hosszát. $`L`$ valószínűségi eloszlása a következő:

```math
P(L < 2) = 0
```

```math
P(L = 2) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(L = 3) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(L = 4) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(L = 5) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(L = 6) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(L > 6) = 0
```

#### A minimális összbetűszám követelményét nem teljesítő jelmondat készítésének esélye

TODO

#### A betűk valószínűségi eloszlása

Legyen $`L_1`$ annak a 35 betűnek a halmaza, amelyek egy 2. verziójú lista használatával készített, nem feldíszített Diceware-jelmondatban szerepelhetnek. Ezek a kiterjesztett magyar ábécé kisbetűi a két- és háromjegyű betűk (‘cs’, ‘dz’, ‘dzs’, ‘gy’, ‘ly’, ‘ny’, ‘sz’, ‘ty’, ‘zs’) kivételével:

```math
L_1 = \{ \mathrm{a}, \mathrm{á}, \mathrm{b}, \mathrm{c}, \mathrm{d}, \mathrm{e}, \mathrm{é}, \mathrm{f}, \mathrm{g}, \mathrm{h}, \mathrm{i}, \mathrm{í}, \mathrm{j}, \mathrm{k}, \mathrm{l}, \mathrm{m}, \mathrm{n}, \mathrm{o}, \mathrm{ó}, \mathrm{ö}, \mathrm{ő}, \mathrm{p}, \mathrm{q}, \mathrm{r}, \mathrm{s}, \mathrm{t}, \mathrm{u}, \mathrm{ú}, \mathrm{ü}, \mathrm{ű}, \mathrm{v}, \mathrm{w}, \mathrm{x}, \mathrm{y}, \mathrm{z} \}
```

Legyen $`i_1`$ az a függvény, amely $`L_1`$ elemeihez azok számszerű elhelyezkedését rendeli hozzá $`L_1`$ magyar ábécé szerint rendezett felsorolásában:

```math
i_1(\mathrm{a}) = 1,
```

```math
i_1(\mathrm{á}) = 2,
```

```math
\ldots
```

```math
i_1(\mathrm{z}) = 35.
```

Legyen $`l \in L_1`$ egy, a 2. verziójú listáról véletlenszerűen választott betű, és jelölje $`X_1`$ azt a valószínűségi változót, amely értéke $`i_1(l)`$. $`X_1`$ valószínűségi eloszlása a következő:

```math
P(X_1 < i_1(\mathrm{a})) = 0
```

```math
P(X_1 = i_1(\mathrm{a})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{á})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{b})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{c})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{d})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{e})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{é})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{f})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{g})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{h})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{i})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{í})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{j})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{k})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{l})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{m})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{n})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{o})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{ó})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{ö})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{ő})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{p})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{q})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{r})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{s})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{t})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{u})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{ú})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{ü})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{ű})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{v})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{w})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{x})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{y})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 = i_1(\mathrm{z})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_1 > i_1(\mathrm{z})) = 0
```

Legyen $`H_1`$ $`X_1`$ entrópiája bitekben:

```math
H_1 := H(X_1) = - \sum_{l \in L_1} P(X_1 = i_1(l)) \log_2 P(X_1 = i_1(l)) \approx TODO~\mathrm{bit}
```

Legyen $`L_2`$ annak a 26 betűnek a halmaza, amelyek egy 2. verziójú lista használatával készített, nem feldíszített Diceware-jelmondatban szerepelhetnek, ha az ékezetes betűket ékezet nélküliekre cseréljük a következő szabályok szerint (a ‘>’ jel jelöli a cserét): ‘á’ > ‘a’, ‘é’ > ‘e’, ‘í’ > ‘i’, ‘ó’ > ‘o’, ‘ö’ > ‘o’, ‘ő’ > ‘o’, ‘ú’ > ‘u’, ‘ü’ > ‘u’, ‘ű’ > ‘u’. Ezek az angol ábécé kisbetűi:

```math
L_2 = \{ \mathrm{a}, \mathrm{b}, \mathrm{c}, \mathrm{d}, \mathrm{e}, \mathrm{f}, \mathrm{g}, \mathrm{h}, \mathrm{i}, \mathrm{j}, \mathrm{k}, \mathrm{l}, \mathrm{m}, \mathrm{n}, \mathrm{o}, \mathrm{p}, \mathrm{q}, \mathrm{r}, \mathrm{s}, \mathrm{t}, \mathrm{u}, \mathrm{v}, \mathrm{w}, \mathrm{x}, \mathrm{y}, \mathrm{z} \}
```

Legyen $`i_2`$ az a függvény, amely $`L_2`$ elemeihez azok számszerű elhelyezkedését rendeli hozzá $`L_2`$ ábécé szerint rendezett felsorolásában:

```math
i_2(\mathrm{a}) = 1,
```

```math
i_2(\mathrm{b}) = 2,
```

```math
\ldots
```

```math
i_2(\mathrm{z}) = 26.
```

Legyen $`l \in L_2`$ egy, a 2. verziójú listáról véletlenszerűen választott betű, ha az ékezetes betűket ékezet nélküliekre cseréljük a fenti szabályok szerint, és jelölje $`X_2`$ azt a valószínűségi változót, amely értéke $`i_2(l)`$. $`X_2`$ valószínűségi eloszlása a következő:

```math
P(X_2 < i_2(\mathrm{a})) = 0
```

```math
P(X_2 = i_2(\mathrm{a})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{b})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{c})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{d})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{e})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{f})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{g})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{h})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{i})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{j})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{k})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{l})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{m})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{n})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{o})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{p})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{q})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{r})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{s})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{t})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{u})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{v})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{w})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{x})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{y})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 = i_2(\mathrm{z})) = \frac{TODO}{TODO} \approx TODO = TODO\%
```

```math
P(X_2 > i_2(\mathrm{z})) = 0
```

Legyen $`H_2`$ $`X_2`$ entrópiája bitekben:

```math
H_2 := H(X_2) = - \sum_{l \in L_2} P(X_2 = i_2(l)) \log_2 P(X_2 = i_2(l)) \approx TODO~\mathrm{bit}
```

### Miért a minimális összbetűszám követelmény? Diceware-jelmondatok, mint karakterláncok

Ahogyan azt fentebb láthattuk, a magas jelszóentrópia két hozzávalója:

- egy nagyméretű szimbólumkészlet,
- sok szimbólum felhasználása a jelszóban.

A Diceware nagyméretű szimbólumkészlettel dolgozik: a szimbólumai a Diceware szólistán szereplő 7776 szó. Ezzel szemben például egy kisbetű-nagybetű érzékeny latin alfanumerikus jelszó egy mindössze 62 elemből álló szimbólumkészletből épül fel (26 kis-, 26 nagybetű és 10 szám). A Diceware a nagyméretű szimbólumkészletének köszönhetően kevesebb szimbólum (szó) felhasználásával is magas entrópiájú jelszavakat készít.

A minimális összbetűszám követelmény abból adódik, hogy nem szeretnénk biztonságot veszíteni pusztán amiatt, mert úgy tekintünk a Diceware-jelmondatunkra, mintha az egy adott Diceware-szólistán előforduló független karakterek lánca lenne. Pontosabban, nem szeretnénk kevésbé biztonságban tudni az adatainkat, ha egy támadó – annak tudatában, hogy Diceware-t használunk egy adott szólistával – úgy dönt, hogy nem szavanként, hanem karakterenként próbálja meg feltörni a jelmondatunkat kimerítő kereséssel, az általunk használt szólistán szereplő karakterek valószínűségi eloszlása alapján. Ezt úgy biztosíthatjuk, ha legalább annyi „karakteralapú” entrópiája ($`H_\mathrm{C}`$) van a jelmondatunknak, mint „szóalapú” entrópiája ($`H_\mathrm{W}`$):

```math
H_\mathrm{C} \geq H_\mathrm{W}.
```

Egy $`W`$ szót tartalmazó Diceware-jelmondat „szóalapú” entrópiabitjeinek számát a $`H_\mathrm{W} = W \cdot \log_2 7776`$ képlet adja meg. Egy Diceware-jelmondat „karakteralapú” entrópiabitjeinek számát a legrosszabb esetben (ha nem választjuk el a szavakat a jelmondatban és nem is díszítjük fel azt) a $`H_\mathrm{C} = L \cdot H_\mathrm{c}`$ képlet adja meg, ahol $`L`$ a Diceware-szólistáról kiválasztott szavakban lévő betűk száma összesen, $`H_\mathrm{c}`$ pedig a felhasznált Diceware szólista betűnkénti entrópiabitjeinek száma.

A fenti képleteket behelyettesítve az egyenlőtlenségbe:

```math
L \cdot H_\mathrm{c} \geq W \cdot \log_2 7776.
```

Az egyenlőtlenséget $`L`$-re átrendezve meghatározható az ahhoz szükséges minimális összbetűszám, hogy ne veszítsünk biztonságot:

```math
L \geq \frac{W \cdot \log_2 7776}{H_\mathrm{c}}.
```

A fenti egyenlőtlenséget egyenletként kifejezve kapunk egy explicit képletet a minimális összbetűszám kiszámításához:

```math
L_\mathrm{min} = \left\lceil \frac{W \cdot \log_2{7776}}{H_\mathrm{c}} \right\rceil,
```

ahol a $`\lceil~\rceil`$ a matematikai felső egészrész függvényt jelöli (azaz azt a $`c`$ függvényt, amit a következő képlet definiál: $`c(x) = \min \{ y \in \mathbb{Z} \mid y \geq x \} \quad (x \in \mathbb{R})`$), $`W`$ és $`H_\mathrm{c}`$ pedig ugyanazt, mint fentebb.

A 2. verziójú lista $`H_\mathrm{c}`$ értéke $`H_1 \approx TODO~\mathrm{bit}`$ ékezetes betűk használata esetén, és $`H_2 \approx TODO~\mathrm{bit}`$ ékezet nélküli betűk használata esetén.

Az $`L_\mathrm{min}`$ értékeit $`5 \leq W \leq 20`$, illetve $`H_\mathrm{c} = H_1`$ és $`H_\mathrm{c} = H_2`$ esetén a „Hogyan használjuk?” bekezdésben található táblázat tartalmazza.

Megjegyezzük, hogy a gyakorlatban valószínűleg pusztán a szavak elválasztása is elégséges további „karakteralapú” entrópiát biztosít ahhoz, hogy egy, a minimális összbetűszám követelményt egyébként nem teljesítő jelmondat biztonságát ne gyengítse. Mindemellett továbbra is ajánlott betartani a minimális összbetűszám követelményt (illetve legalább hatszavas jelmondatot készíteni, és feldíszíteni azt kis- és nagybetűkkel és nem-alfabetikus karakterekkel).

## Felhasznált források:

- [https://theworld.com/~reinhold/diceware.html](https://theworld.com/~reinhold/diceware.html)
- [https://en.wikipedia.org/wiki/Diceware](https://en.wikipedia.org/wiki/Diceware)
- [https://en.wikipedia.org/wiki/Password_strength](https://en.wikipedia.org/wiki/Password_strength)
- [https://en.wikipedia.org/wiki/Entropy\_(information_theory)](<https://en.wikipedia.org/wiki/Entropy_(information_theory)>)
