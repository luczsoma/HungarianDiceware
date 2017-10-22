# Hungarian DicewareDice-Indexed Passphrase Word List in Hungarian  
*Version 1 (22nd October, 2017)*

Created by Soma Lucz ([https://github.com/luczsoma](https://github.com/luczsoma)).


### What is Diceware?Diceware™ is a method for picking passphrases that uses dice to select words at random from a special list called the Diceware Word List. Each word in the list is preceded by a five digit number. All the digits are between one and six, allowing you to use the outcomes of five dice rolls to select a word from the list.


### Using Diceware
To use the Diceware list you will need one or more dice.
1. Decide how many words you want in your passphrase. A five word passphrase provides a level of security much higher than the simple passwords most people use. We recommend a minimum of six words for use with GPG, wireless security and file encryption programs. A seven, eight or nine word pass phrase is recommended for high value uses such as whole disk encryption, BitCoin, and the like.2. Now roll the dice and write down the results on a slip of paper. Write the numbers in groups of five. Make as many of these five-digit groups as you want words in your passphrase. You can roll one die five times or roll five dice once, or any combination in between. If you do roll several dice at a time, read the dice from left to right.3. Look up each five digit number in the Diceware list and find the word next to it. For example, 21141 means your next passphrase word would be “csali”.4. When you are done, the words that you have found are your new passphrase. Memorize them and then either destroy the scrap of paper or keep it in a really safe place. That’s all there is to it!


### The Math

It is usual in the computer industry to specify password strength in terms of information entropy, measured in bits, a concept from information theory. Instead of the number of guesses needed to find the password with certainty, the base-2 logarithm of that number is given, which is the number of “entropy bits” in a password. A password with, say, 42 bits of strength calculated in this way would be as strong as a string of 42 bits chosen randomly, say by a fair coin toss. Put another way, a password with 42 bits of strength would require 242 attempts to exhaust all possibilities during a brute force search. Thus, adding one bit of entropy to a password doubles the number of guesses required, which makes an attacker’s task twice as difficult. On average, an attacker will have to try half of the possible passwords before finding the correct one.


### Entropy per symbol for different symbol sets

| Symbol set                                      | Symbol count N | Entropy per symbol H |
| ----------------------------------------------- | -------------- | -------------------- |
| Arabic numerals (0–9) (e.g. PIN)                | 10             | 3.322 bits           |
| Hexadecimal numerals (0–9, A–F) (e.g. WEP keys) | 16             | 4.000 bits           |
| Case insensitive Latin alphabet (a–z or A–Z)    | 26             | 4.700 bits           |
| Case insensitive alphanumeric (a–z or A–Z, 0–9) | 36             | 5.170 bits           |
| Case sensitive Latin alphabet (a–z, A–Z)        | 52             | 5.700 bits           |
| Case sensitive alphanumeric (a–z, A–Z, 0–9)     | 62             | 5.954 bits           |
| All ASCII printable characters except space     | 94             | 6.555 bits           |
| All ASCII printable characters                  | 95             | 6.570 bits           |
| All extended ASCII printable characters         | 218            | 7.768 bits           |
| Binary (0–255 or 8 bits or 1 byte)              | 256            | 8.000 bits           |
| Diceware word list                              | 7776           | 12.925 bits          |


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