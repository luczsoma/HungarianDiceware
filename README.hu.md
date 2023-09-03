# Diceware, magyarul

_Dobókocka-indexelt szólista magyar nyelvű jelmondatok készítéséhez, készítette: Lucz Soma ([https://github.com/luczsoma](https://github.com/luczsoma))_

[![en](https://img.shields.io/badge/lang-en-blue)](https://github.com/luczsoma/HungarianDiceware/blob/master/README.md)
[![hu](https://img.shields.io/badge/lang-hu-red)](https://github.com/luczsoma/HungarianDiceware/blob/master/README.hu.md)

## Mi a Diceware?

A Diceware egy biztonságos, de egyszerűen megjegyezhető jelmondatokat készítő eljárás, amely dobókockák segítségével választ véletlenszerűen szavakat egy erre a célra készített Diceware-szólistáról. A lista olyan ötjegyű számokkal van indexelve, amelyek minden jegye egy és hat közötti van: öt kockadobás eredményével választhatunk ki egy szót a listáról a jelmondatba.

## Miért biztonságos?

Digitális biztonságunk sok tényezőtől függ, de biztonságos jelszavakat használni alapvető fontosságú. A biztonságos jelszókezelés szintén összetett téma. A Diceware biztonságos jelszógenerálási módszernek számít, de nem több annál; minden más a felhasználón múlik. Általánosan ajánlott mindenre egyedi, egy biztonságos jelszókezelő\* által generált és abban tárolt jelszavakat használni, a jelszókezelő mesterjelszavát pedig célszerű Diceware-rel generálni.

\*A felhőalapú jelszókezelők közül határozottan a [1Password](https://1password.com)öt, offline felhasználásra pedig a [KeePassXC](https://keepassxc.org)-t ajánlom.

Szerintem ezért biztonságos jelszógeneráló módszer a Diceware:

- Teljesen offline: elektronikus eszközök nélkül működik. Ez jelentősen megnehezíti magának a generálási módszernek a kompromittálását, vagy a jelszó már létrehozáskori megszerzését. Ugyan egy hacker később is el tudja lopni a jelszót pszichológiai manipulációval (social engineering), a billentyűleütések naplózásával (keylogging) vagy közbeékelődéses (MITM) támadással, a Diceware a biztonság maximalizálásáról szól; emiatt nem javaslom online vagy elektronikus Diceware-eszközök használatát.

- Valódi véletlenszám-generátorból (a kockákból) származó entrópiával dolgozik, a számítógépekben megszokott álvéletlenszám-generátorok használata helyett. Ugyan a TRNG-k által hozzáadott biztonságot általában semlegesítik más tényezők, a Diceware a biztonság maximalizálásáról szól; TRNG-k használatával pedig nehezebben megjósolható, így nehezebben feltörhető jelmondat készíthető. Emiatt sem javaslom online vagy elektronikus Diceware-eszközök használatát. (Az álvéletlen és a valódi véletlen közötti különbségek megismeréséhez ajánlom [a Mediumon olvasható cikkemet](https://medium.com/tresorit-engineering/randomness-demystified-df47f9308717); ingyenes változat [itt](https://gist.github.com/luczsoma/ac5a1783f51879ade5e1dd7bfa032b40).).)

- Gyakran használják fel emberek személyes adatait a jelszavaik feltöréséhez. A Diceware-rel készített jelmondatok azonban semmilyen módon nem kapcsolódnak a felhasználójukhoz, azaz nehezebben megjósolhatóak, így nehezebben feltörhetőek.

- A Diceware-rel generált jelmondatokat könnyű megjegyezni.

- A Diceware mögötti matematika stimmel. Részletekért lásd A Matek bekezdést.

## Hogyan használjuk

0. Szükségünk lesz egy vagy több dobókockára. Határozottan nem javaslom online vagy elektronikus Diceware-eszközök használatát, mert ez a Diceware-módszer két fontos biztonsági tulajdonságát is semmissé teszi. A maximális biztonság érdekében jobb, ha kinyomtatjuk a Diceware-szólistát, hogy még a szavak kikeresését se lehessen elektronikusan kifigyelni.

1. Döntsük el, hány szóból álljon a jelmondat. Egy ötszavas jelmondat már sokkal magasabb biztonsági szintet nyújt, mint az általában használt egyszerű jelszavak. Jelszókezelő mesterjelszavaként legalább hat szó ajánlott, bár erre én inkább egy nyolc- vagy tízszavas jelmondatot használnék. Kevésbé gyakori felhasználásra vagy nagyértékű adat védelmére húszszavas jelmondat is készíthető. (Húsz szó használata már valamivel biztonságosabb, mint egy 256 bites szimmetrikus kulcsé, így nem igazán van értelme feljebb menni. További információkért lásd A Matek bekezdést.)

2. Tegyük fel, hogy egy hatszavas jelmondat mellett döntöttünk. Ehhez 6 \* 5 = 30 darab egy és hat közötti számra, azaz összesen harminc kockadobásra lesz szükségünk. Dobhatunk egy kockával harmincszor, harminc kockával egyszerre, vagy bármilyen más kombinációban is; de dobás előtt mindenképpen alaposan rázzuk össze a kocká(ka)t. Ha egyszerre több kockával dobunk, balról jobbra olvassuk le őket. Írjuk le a kockadobások eredményét ötösével csoportosítva egy papírra; jobb, ha nem használunk elektronikát az eredmény rögzítéséhez.

3. Keressük ki a hat leírt ötjegyű számot a Diceware-listáról, és olvassuk le a hozzájuk tartozó szavakat. Például a 25341 azt jelenti, hogy a jelmondatba kerülő szó a „TODO”.

4. Az elkészített jelmondatunk a hat leolvasott szóból áll, szóközökkel elválasztva. Amíg megjegyezhető marad, nyugodtan kozmetikázzuk a jelmondatot, pl. szimbólumok hozzáadásával, egy-két kisbetű nagybetűre cserélésével, vagy ékezetes karakterek ékezet nélküli változatára cserélésével, hogy mindenféle billentyűzeten egyszerű legyen begépelni. Jegyezzük meg jól a jelmondatot, majd semmisítsük meg a papírt, amire a kockadobások eredményét írtuk. (Persze el is rejthetjük a papírt egy biztonságos helyre.)
