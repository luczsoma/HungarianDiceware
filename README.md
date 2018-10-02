# Hungarian DicewareDice-Indexed Passphrase Word List in Hungarian  
*Version 1.1 (description update) (3rd October, 2018)*

Created by Soma Lucz ([https://github.com/luczsoma](https://github.com/luczsoma)).


### What is Diceware?Diceware™ is a method for picking passphrases that uses dice to select words at random from a special list called the Diceware Word List. Each word in the list is preceded by a five-digit number. All the digits are between one and six, allowing you to use the outcomes of five dice rolls to select a word from the list.


### Using Diceware
To use the Diceware list you will need one or more dice.
1. Decide how many words you want in your passphrase. A five-word passphrase provides a level of security much higher than the simple passwords most people use. We recommend a minimum of six words for using with GPG, wireless security and file encryption programs. A seven-, eight- or nine-word passphrase is recommended for high-value uses such as whole disk encryption, BitCoin, and any other sensitive information.2. Roll the dice and write down the results on a slip of paper. Write the numbers in groups of five. Make as many of these five-digit groups as you want words in your passphrase. You can roll one die five times or roll five dice once, or any combination in between. If you roll several dice at a time, read the dice from left to right.3. Look up each five-digit number in the Diceware list and find the word next to it. For example, 21141 means your next passphrase word would be “csali”.4. When you are done, the words that you have found are your new passphrase. Memorize them and then either destroy the scrap of paper or keep it in a really safe place. That’s all there is to it!


### The Math

It is usual in the computer industry to specify password strength in terms of information entropy, measured in bits, a concept from information theory. Instead of the number of guesses needed to find the password with certainty, the base-2 logarithm of that number is given, which is the number of “entropy bits” in a password. A password with, say, 42 bits of strength calculated in this way would be as strong as a string of 42 bits chosen randomly, say by a fair coin toss. Put another way, a password with 42 bits of strength would require 2^42 = 4,398,046,511,104 attempts to exhaust all possibilities during a brute force search. Thus, adding one bit of entropy to a password doubles the number of guesses required, which makes an attacker’s task twice as difficult. On average, an attacker will have to try half of the possible passwords before finding the correct one.


### Entropy per symbol for different symbol sets

| Symbol set                                       | Symbol count N | Entropy per symbol H |
| ------------------------------------------------ | -------------- | -------------------- |
| Arabic numerals (0–9) (e.g. PIN)                 | 10             | 3.322 bits           |
| Hexadecimal numerals (0–9 & A–F) (e.g. WEP keys) | 16             | 4.000 bits           |
| Case insensitive Latin alphabet (a–z / A–Z)      | 26             | 4.700 bits           |
| Case insensitive alphanumeric (a–z / A–Z & 0–9)  | 36             | 5.170 bits           |
| Case sensitive Latin alphabet (a–z & A–Z)        | 52             | 5.700 bits           |
| Case sensitive alphanumeric (a–z & A–Z & 0–9)    | 62             | 5.954 bits           |
| All ASCII printable characters except space      | 94             | 6.555 bits           |
| All ASCII printable characters                   | 95             | 6.570 bits           |
| All extended ASCII printable characters          | 218            | 7.768 bits           |
| Binary (0–255 or 8 bits or 1 byte)               | 256            | 8.000 bits           |
| Diceware word list                               | 7776           | 12.925 bits          |


### Lengths L of truly randomly generated passwords required to achieve a desired password entropy H for symbol sets containing N symbols

| Desired password entropy H | Case sensitive Latin alphabet | Case sensitive alphanumeric | All ASCII printable characters | All extended ASCII printable characters | Diceware word list |
| -------------------------- | ----------------------------- | --------------------------- | ------------------------------ | --------------------------------------- | ------------------ |
| 8 bits (1 byte)            | 2                             | 2                           | 2                              | 2                                       | 1                  |
| 32 bits (4 bytes)          | 6                             | 6                           | 5                              | 5                                       | 3                  |
| 40 bits (5 bytes)          | 8                             | 7                           | 7                              | 6                                       | 4                  |
| 64 bits (8 bytes)          | 12                            | 11                          | 10                             | 9                                       | 5                  |
| 80 bits (10 bytes)         | 15                            | 14                          | 13                             | 11                                      | 7                  |
| 96 bits (12 bytes)         | 17                            | 17                          | 15                             | 13                                      | 8                  |
| 128 bits (16 bytes)        | 23                            | 22                          | 20                             | 17                                      | 10                 |
| 160 bits (20 bytes)        | 29                            | 27                          | 25                             | 21                                      | 13                 |
| 192 bits (24 bytes)        | 34                            | 33                          | 30                             | 25                                      | 15                 |
| 224 bits (28 bytes)        | 40                            | 38                          | 35                             | 29                                      | 18                 |
| 256 bits (32 bytes)        | 45                            | 43                          | 39                             | 33                                      | 20                 |


### Required bits of entropy
The minimum number of bits of entropy needed for a password depends on the threat model for the given application. If key stretching is not used, passwords with more entropy are needed. RFC 4086, “Randomness Requirements for Security”, presents some example threat models and how to calculate the entropy desired for each one. Their answers vary between 29 bits of entropy needed if only online attacks are expected, and up to 128 bits of entropy needed for important cryptographic keys used in applications like encryption where the password or key needs to be secure for a long period of time and stretching isn’t applicable. A 2010 Georgia Tech Research Institute study based on unstretched keys recommended a 12-character random password, but as a minimum length requirement.The upper end is related to the stringent requirements of choosing keys used in encryption. In 1999, an Electronic Frontier Foundation project broke 56-bit DES encryption in less than a day using specially designed hardware. In 2002, distributed.net cracked a 64-bit key in 4 years, 9 months, and 23 days. As of October 12, 2011, distributed.net estimates that cracking a 72-bit key using current hardware will take about 45,579 days or 124.8 years. Due to currently understood limitations from fundamental physics, there is no expectation that any digital computer (or combination) will be capable of breaking 256-bit encryption via a brute-force attack. Whether or not quantum computers will be able to do so in practice is still unknown, though theoretical analysis suggests such possibilities.


### Sources used:

- [http://world.std.com/~reinhold/diceware.html](http://world.std.com/~reinhold/diceware.html)
- [https://en.wikipedia.org/wiki/Password_strength](https://en.wikipedia.org/wiki/Password_strength)

---

# Diceware magyarulDobókocka-indexelt szólista magyar jelmondatok készítéséhez  
*1.1 verzió (frissített leírás) (2018. október 3.)*

Készítette Lucz Soma ([https://github.com/luczsoma](https://github.com/luczsoma)).


### Mi a Diceware?A Diceware™ egy jelmondat-készítő eljárás, melyben a felhasználó dobókockát használ ahhoz, hogy szavakat válasszon egy ún. dobókocka-indexelt szólistából. A lista minden eleme ötjegyű sorszámmal rendelkezik. A sorszám minden jegye egy és hat között van, így az értéke öt dobással meghatározható.

### Using Diceware
A Diceware használatához egy vagy több dobókocka szükséges.
1. Döntsd el, hány szóból álljon a jelmondat. Már egy ötszavas jelmondat is sokkal magasabb szintű biztonságot nyújt, mint a legtöbb átlagos jelszó. Hatszavas jelmondat ajánlott GPG, vezetéknélküli hálózatok, illetve fájltitkosító programok használatához. Hét-, nyolc- vagy kilencszavas jelmondat ajánlott abban az esetben, ha merevlemez-titkosításhoz, BitCoin-tárcák védelméhez vagy bármilyen más érzékeny információ védelmére akarjuk felhasználni a jelmondatot.2. Dobj a kockával, az eredményt írd le egy papírra. A kockadobások eredményeit ötösével csoportosítsd. Csinálj annyi ilyen ötös csoportot, amennyi szót a jelmondatod tartalmazni fog. Dobhatsz egy kockával ötször, öt kockával egyszer, vagy bármilyen más kombinációban. Ha több kockával dobsz egyszerre, a számokat balról jobbra olvasd le.3. Minden ötjegyű számhoz keresd ki a listából a hozzá tartozó szót. Például a 21141 azt jelenti, hogy a következő szó a jelmondatban a „csali”.4. Ha készen vagy, a jelmondatodat a leírt szavak összeolvasásából kapod. Jegyezd meg jól, aztán semmisítsd meg a papírt, vagy rejtsd el egy igazán biztonságos helyre. Ennyi az egész!


### A Matek

A számítástechnikában megszokott, hogy a jelszó erősségét az információelméletben használt entrópia fogalmával, bitekben határozzák meg. Annak száma helyett, hogy mennyi találgatás volna szükséges egy jelszó biztos kitalálásához, a szám kettes alapú logaritmusával a jelszó „entrópiabitjeinek” mennyiségét adják meg. Egy pl. 42 bit erősségű jelszó ilyen számítások mentén ugyanolyan erősnek minősül, mint egy 42 bitből álló, véletlenszerűen (például érmedobásokkal) választott bitsorozat. Más- képpen fogalmazva: egy 42 bit erősségű jelszó 2^42 = 4 398 046 511 104 kísérletet igényelne, ha kimerítő kereséssel akarnánk megtalálni a jelszót. Egy bit hozzáadásával tehát duplázódik a kimerítő keresés esetén szükséges próbálkozások száma, így ezzel megnehezíthetjük egy rosszindulatú támadó dolgát. Átlagosan egy támadónak az összes lehetőség felét kell végigpróbálgatnia ahhoz, hogy megtalálja a helyes jelszót.


### Szimbólumkészletek szimbólumonkénti entrópiatartalma

| Szimbólumkészlet                                          | N szimbólumszám | H entrópia/szimbólum |
| --------------------------------------------------------- | --------------- | -------------------- |
| Arab számok (0–9) (pl. PIN-kód)                           | 10              | 3,322 bit            |
| Hexadecimális számok (0–9 & A–F) (pl. WEP-kulcsok)        | 16              | 4,000 bit            |
| Nem kis-nagybetű érzékeny ABC (a–z / A–Z)                 | 26              | 4,700 bit            |
| Nem kis-nagybetű érzékeny alfanumerikus (a–z / A–Z & 0–9) | 36              | 5,170 bit            |
| Kis-nagybetű érzékeny ABC (a–z & A–Z)                     | 52              | 5,700 bit            |
| Kis-nagybetű érzékeny alfanumerikus (a–z / A–Z & 0–9)     | 62              | 5,954 bit            |
| Minden ASCII nyomtatható karakter, kivéve szóköz          | 94              | 6,555 bit            |
| Minden ASCII nyomtatható karakter                         | 95              | 6,570 bit            |
| Minden kiterjesztett ASCII nyomtatható karakter           | 218             | 7,768 bit            |
| Bináris (0–255 / 8 bit / 1 bájt)                          | 256             | 8,000 bit            |
| Diceware szólista                                         | 7776            | 12,925 bit           |


### H kívánt entrópia eléréséhez szükséges L szóhossz N szimbólumszámot tartalmazó szimbólumkészletből valódi véletlengenerált jelszavak esetén

| H kívánt entrópia | Kis-nagybetű érzékeny ABC | Kis-nagybetű érzékeny alfanumerikus | Minden ASCII nyomtatható karakter | Minden kiterjesztett ASCII nyomtatható karakter | Diceware szólista |
| -------------------------- | ----------------------------- | --------------------------- | ------------------------------ | --------------------------------------- | ------------------ |
| 8 bit (1 bájt)             | 2                             | 2                           | 2                              | 2                                       | 1                  |
| 32 bit (4 bájt)            | 6                             | 6                           | 5                              | 5                                       | 3                  |
| 40 bit (5 bájt)            | 8                             | 7                           | 7                              | 6                                       | 4                  |
| 64 bit (8 bájt)            | 12                            | 11                          | 10                             | 9                                       | 5                  |
| 80 bit (10 bájt)           | 15                            | 14                          | 13                             | 11                                      | 7                  |
| 96 bit (12 bájt)           | 17                            | 17                          | 15                             | 13                                      | 8                  |
| 128 bit (16 bájt)          | 23                            | 22                          | 20                             | 17                                      | 10                 |
| 160 bit (20 bájt)          | 29                            | 27                          | 25                             | 21                                      | 13                 |
| 192 bit (24 bájt)          | 34                            | 33                          | 30                             | 25                                      | 15                 |
| 224 bit (28 bájt)          | 40                            | 38                          | 35                             | 29                                      | 18                 |
| 256 bit (32 bájt)          | 45                            | 43                          | 39                             | 33                                      | 20                 |


### Szükséges entrópiatartalom
Egy jelszó minimálisan entrópiája a jelszó alkalmazásának támadási modelljétől függ. Amennyiben key stretching nem alkalmazható, magasabb entrópia szükséges. A „Randomness Requirements for Security” című RFC 4086 több példát mutat arra, hogyan érdemes kiszámolni az egyes támadási modellekhez szükséges entrópiát. A dokumentum szerint 29 bit szükséges, ha csak online támadások várhatóak, és 128 bit entrópia szükséges fontos kriptográfiai kulcsok védelméhez olyan alkalmazások esetén, ahol a jelszó vagy kulcs hosszú időn keresztül igényel biztonságos tárolást, és key stretching nem alkalmazható. Egy 2010-es Georgia Tech Research Institute által key stretching nélküli jelszavakon végzett kutatás 12 karakteres jelszavakat ajánl minimális hosszúsági követelményként.

1999-ben egy EFF-projekt speciális hardver segítségével kevesebb mint egy nap alatt feltörte az 56 bites DES titkosítást. 2002-ben, 4 év, 9 hónap és 23 nap munkájával a distributed.net feltört egy 64 bites kulcsot. 2011 október 12-én végzett becslések szerint egy 72 bites kulcs feltörése mai erőforrások igénybevételével 45 579 napot (124,8 évet) venne igénybe. Jelenlegi ismereteink szerint alapvető fizikai korlátok akadályozzák, hogy bármilyen digitális számítógép (vagy ezek kombinációja) képes legyen egy 256 bites kulcs kimerítő kereséssel történő feltörésére. Nem tudjuk, hogy a kvantumszámítógépek gyakorlatban képesek lesznek-e ilyesmire, de elméleti vizsgálatok felvetik ennek lehetőségét.


### Felhasznált források:

- [http://world.std.com/~reinhold/diceware.html](http://world.std.com/~reinhold/diceware.html)
- [https://en.wikipedia.org/wiki/Password_strength](https://en.wikipedia.org/wiki/Password_strength)

