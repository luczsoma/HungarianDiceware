# Hungarian Diceware

_Dice-Indexed Passphrase Word List in Hungarian, created by Soma Lucz ([https://github.com/luczsoma](https://github.com/luczsoma))_

[![en](https://img.shields.io/badge/lang-en-blue)](https://github.com/luczsoma/HungarianDiceware/blob/master/README.md)
[![hu](https://img.shields.io/badge/lang-hu-red)](https://github.com/luczsoma/HungarianDiceware/blob/master/README.hu.md)

## What is Diceware?

[Diceware](https://theworld.com/~reinhold/diceware.html) is a method for picking secure but easy-to-remember passphrases. It selects words from a purpose-built Diceware word list randomly, using dice. The list is indexed by five-digit numbers, all digits being between one and six: the outcome of five dice rolls selects a word from the list for the passphrase.

## Why is it secure?

One’s digital security depends on lots of factors, but having secure passwords is a necessary basis. Managing passwords securely also has many aspects. Diceware is considered a secure password generation method, but that is all it is; the rest if up to the user. It is universally recommended to use unique passwords for everything, generated by and stored in a secure password manager\*. Diceware is a practical choice for creating a passphrase to be used as the password manager’s master password.

\*My definite recommendation is [1Password](https://1password.com) for a cloud-based use case, or [KeePassXC](https://keepassxc.org) for a self-hosted use case.

Reasons why I consider Diceware a secure password generation method:

- It is completely offline: it does not use electronic technology. This makes it infeasible to compromise the generation method itself, or to intercept the passphrase at the time of its creation. Even though the passphrase can still be stolen by a hacker later by social engineering, keylogging, or MITM attacks, Diceware is all about maximizing security; therefore, I advise against using online or electronic Diceware tools.

- It incorporates entropy into the passphrase that is provided by a true random number generator, the dice, instead of a pseudorandom number generator usually used by computers. Even though other factors generally diminish the security contribution of TRNGs, Diceware is all about maximizing security; and using proper randomness supplied by TRNGs makes the passphrase harder to predict, thus harder to crack. Online or electronic Diceware tools usually do not allow to verify whether they use secure TRNGs or even secure RNGs; this is another reason I advise against using them. (For more information about pseudorandom vs. true random, check out [my article on Medium](https://medium.com/tresorit-engineering/randomness-demystified-df47f9308717); free version [here](https://gist.github.com/luczsoma/ac5a1783f51879ade5e1dd7bfa032b40).)

- Available personal data about an individual is frequently utilized in the process of cracking their passwords. Diceware produces passphrases that are not related to their user in any way, making them harder to predict, thus harder to crack.

- Diceware produces passphrases that are easy to remember.

- The math behind Diceware is sound. See The Math section for details.

## How to use it?

0. You will need one or more dice. I strongly advise against using online or electronic Diceware tools, because it eradicates two important security properties of the Diceware method. For maximizing security, it is best if you have a hard copy of the Diceware word list, so your word lookups cannot be spied on electronically.

1. Decide how many words you want in your passphrase. A five-word passphrase provides a level of security much higher than the simple passwords most people use. A minimum of six words is recommended as a password manager’s master password, but for this I most likely would go for an eight- or ten-word passphrase. You can go up to twenty words for less frequent usage or for protecting higher-value data. (Since using twenty Diceware words in your passphrase results its security level being already a little more than a 256-bit symmetric key’s, it doesn't really make sense to go further. See The Math section below for more information.)

2. Let us say you decided on a six-word passphrase. For that, you need 6 \* 5 = 30 numbers between one and six, meaning thirty dice rolls altogether. You can roll one die thirty times, roll thirty dice once, or any combination in between; but make sure to shake the di(c)e vigorously beforehand. If you roll several dice at a time, read them from left to right. Write down the results of the thirty dice rolls in groups of five, on a piece of paper; it is best not to use electronics for recording the results.

3. Look up each five-digit number you wrote down in the Diceware word list and read its corresponding word. For example, 25341 means your next passphrase word would be “TODO”. To make it easier to type in the passphrase on various keyboard layouts, you can substitute accented letters with their accent-free variants — you can do this without sacrificing security, see the next step.

4. Make sure that the number of total letters in the six found words is at least the corresponding number in the table below. See The Math section for why this is important.

5. Your new passphrase is the six words you found, separated by spaces. It is indeed important to separate the words, otherwise the passphrase can become weaker due to possible redundancy amongst the words. As long as you will still remember it, you can make the passphrase even more secure by adding non-alphabetic characters, or by replacing some lowercase letters with their uppercase variants. Memorize the passphrase well, then destroy the paper you wrote the results on. (You can also hide the paper in a safe place.)

| Diceware words | Minimum letter count<br />when using accented letters | Minimum letter count<br />when not using accented letters |
| -------------- | ----------------------------------------------------- | --------------------------------------------------------- |
| 5              |                                                       |                                                           |
| 6              |                                                       |                                                           |
| 7              |                                                       |                                                           |
| 8              |                                                       |                                                           |
| 9              |                                                       |                                                           |
| 10             |                                                       |                                                           |
| 11             |                                                       |                                                           |
| 12             |                                                       |                                                           |
| 13             |                                                       |                                                           |
| 14             |                                                       |                                                           |
| 15             |                                                       |                                                           |
| 16             |                                                       |                                                           |
| 17             |                                                       |                                                           |
| 18             |                                                       |                                                           |
| 19             |                                                       |                                                           |
| 20             |                                                       |                                                           |

## Hungarian Diceware list versions

**I recommend using Version 2 of the Hungarian Diceware word list for generating new passphrases.**

### Version 1

Version 1 is of low quality. It contains weird words (and non-words, too), which can make it harder to remember them. I cannot remember the source of the word list, moreover, for some reason I thought it would be wise to convert all accented characters in the list to their accent-free variants.

### Version 2

Version 2 was created using the [Hungarian National Corpus](http://corpus.nytud.hu/mnsz/index_eng.html) compiled by the Research Institute for Linguistics of the [Hungarian Academy of Sciences](https://mta.hu/english). (The Research Institute for Linguistics is now called the [Hungarian Research Centre for Linguistics](https://nytud.hu/en) and operates under the supervision of the [Eötvös Loránd Research Network](https://elkh.org/en).) The list contains the 7,776 most frequent non-vulgar words of the corpus that are the dictionary form of nouns (excl. proper nouns), adjectives, or verbs, and are 2-6 characters in length. Vulgarity was filtered out manually by me. Special thanks to [Bálint Sass](https://nytud.hu/en/colleague/balint-sass) for providing a partial frequency list of the corpus.

## The Math

It is usual in the computer industry to specify password strength in terms of information entropy, which is measured in shannon (Sh) and is a concept from information theory. It can be regarded as the minimum number of bits necessary to hold the information in a password of a given type. Instead of the number of guesses needed to find the password with certainty, the base-2 logarithm of that number is given, which is commonly referred to as the number of “entropy bits” in a password, though this is not the same quantity as information entropy. A password with an entropy of 42 bits calculated in this way would be as strong as a string of 42 bits chosen randomly, for example by a fair coin toss. Put another way, a password with an entropy of 42 bits would require 2<sup>42</sup> (4,398,046,511,104) attempts to exhaust all possibilities during a brute force search. Thus, increasing the entropy of the password by one bit doubles the number of guesses required, making an attacker’s task twice as difficult. On average, an attacker will have to try half the possible number of passwords before finding the correct one.

### Entropy per symbol for different symbol sets, where each is symbol is equally likely

If symbols are chosen randomly from a set of N elements, the entropy per symbol H<sub>s</sub> is given by the formula H<sub>s</sub> = log<sub>2</sub>(N). Entropy per symbol values for common symbol sets are summarized in the table below.

| Symbol set                                       | Symbol count N | Entropy per symbol H<sub>s</sub> |
| ------------------------------------------------ | -------------- | -------------------------------- |
| Arabic numerals (0–9) (e.g. PIN)                 | 10             | ~3.322 bits                      |
| Hexadecimal numerals (0–9 & A–F) (e.g. WEP keys) | 16             | 4.000 bits                       |
| Case insensitive Latin alphabet (a–z / A–Z)      | 26             | ~4.700 bits                      |
| Case insensitive alphanumeric (a–z / A–Z & 0–9)  | 36             | ~5.170 bits                      |
| Case sensitive Latin alphabet (a–z & A–Z)        | 52             | ~5.700 bits                      |
| Case sensitive alphanumeric (a–z & A–Z & 0–9)    | 62             | ~5.954 bits                      |
| All ASCII printable characters except space      | 94             | ~6.555 bits                      |
| All ASCII printable characters                   | 95             | ~6.570 bits                      |
| All extended ASCII printable characters          | 218            | ~7.768 bits                      |
| Binary (0–255 or 8 bits or 1 byte)               | 256            | 8.000 bits                       |
| Diceware word list                               | 7776           | ~12.925 bits                     |

Diceware’s ~12.925 bits of per-symbol entropy value assumes that potential attackers know three things: that Diceware has been used to create the passphrase, the particular word list used, and exactly how many words make up the passphrase. If an attacker has less information, the per-symbol entropy can be greater than ~12.925 bits. That is, if an attacker does not know you use Diceware to create your passphrases, you may be even safer; but it is still recommended to use at least six words, adhere to the minimum letter count requirement, and decorate the passphrase with mixed-case letters and non-alphabetic characters.

### Lengths L of randomly generated passwords required to achieve a desired password entropy H for symbol sets containing N symbols

With a password generated randomly from a set of N symbols, the length L, needed to achieve a desired password entropy H, is given by the formula L = ceil(H / log<sub>2</sub>(N)), where ceil denotes the mathematical ceiling function, i.e., rounding up to the next largest whole number. Length values for common symbol sets are summarized in the table below.

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

Diceware’s values assume that potential attackers know three things: that Diceware has been used to create the passphrase, the particular word list used, and exactly how many words make up the passphrase. If an attacker has less information, the desired password entropy can be achieved with a shorter passphrase. That is, if an attacker does not know you use Diceware for creating your passphrases, you may be even safer; but it is still recommended to use at least six words, adhere to the minimum letter count requirement, and decorate the passphrase with mixed-case letters and non-alphabetic characters.

### Required bits of entropy

The minimum number of bits of entropy needed for a password depends on the threat model for the given application. If key stretching is not used, passwords with more entropy are needed. RFC 4086, “Randomness Requirements for Security”, published June 2005, presents some example threat models and how to calculate the entropy desired for each one. Their answers vary between 29 bits of entropy needed if only online attacks are expected, and up to 96 bits of entropy needed for important cryptographic keys used in applications like encryption where the password or key needs to be secure for a long period and stretching is not applicable. A 2010 Georgia Tech Research Institute study based on unstretched keys recommended a 12-character random password but as a minimum length requirement. It pays to bear in mind that since computing power continually grows, to prevent offline attacks the required number of bits of entropy should also increase over time.

The upper end is related to the stringent requirements of choosing keys used in encryption. In 1999, an Electronic Frontier Foundation project broke 56-bit DES encryption in less than a day using specially designed hardware. In 2002, distributed.net cracked a 64-bit key in 4 years, 9 months, and 23 days. As of October 12, 2011, distributed.net estimates that cracking a 72-bit key using current hardware will take about 45,579 days or 124.8 years. Due to currently understood limitations from fundamental physics, there is no expectation that any digital computer (or combination) will be capable of breaking 256-bit encryption via a brute-force attack. Whether or not quantum computers will be able to do so in practice is still unknown, though theoretical analysis suggests such possibilities.

### Relevant statistical properties of the Version 2 list

#### Probability distribution of possible word lengths

Let random variable L represent the possible lengths of words chosen by Diceware from the Version 2 list. L has the following probability distribution:

- P(L = 2) = ? / ? ≈ ? = ?%
- P(L = 3) =
- P(L = 4) =
- P(L = 5) =
- P(L = 6) =

#### Chance of creating a passphrase not satisfying the minimum letter count requirement

TODO

#### Probability distribution of possible characters

Let random variable C<sub>1</sub> represent the 35 possible characters present in a passphrase created with Diceware using the Version 2 list. These are the lowercase letters of the extended Hungarian alphabet excl. double and triple letters (‘cs’, ‘dz’, ‘dzs’, ‘gy’, ‘ly’, ‘ny’, ‘sz’, ‘ty’, ‘zs’): ‘a’, ‘á’, ‘b’, ‘c’, ‘d’, ‘e’, ‘é’, ‘f’, ‘g’, ‘h’, ‘i’, ‘í’, ‘j’, ‘k’, ‘l’, ‘m’, ‘n’, ‘o’, ‘ó’, ‘ö’, ‘ő’, ‘p’, ‘q’, ‘r’, ‘s’, ‘t’, ‘u’, ‘ú’, ‘ü’, ‘ű’, ‘v’, ‘w’, ‘x’, ‘y’, ‘z’.

C<sub>1</sub> has the following probability distribution:

- P(C<sub>1</sub> = 'a') = ? / ? ≈ ? = ?%
- P(C<sub>1</sub> = 'á') =
- P(C<sub>1</sub> = 'b') =
- P(C<sub>1</sub> = 'c') =
- P(C<sub>1</sub> = 'd') =
- P(C<sub>1</sub> = 'e') =
- P(C<sub>1</sub> = 'é') =
- P(C<sub>1</sub> = 'f') =
- P(C<sub>1</sub> = 'g') =
- P(C<sub>1</sub> = 'h') =
- P(C<sub>1</sub> = 'i') =
- P(C<sub>1</sub> = 'í') =
- P(C<sub>1</sub> = 'j') =
- P(C<sub>1</sub> = 'k') =
- P(C<sub>1</sub> = 'l') =
- P(C<sub>1</sub> = 'm') =
- P(C<sub>1</sub> = 'n') =
- P(C<sub>1</sub> = 'o') =
- P(C<sub>1</sub> = 'ó') =
- P(C<sub>1</sub> = 'ö') =
- P(C<sub>1</sub> = 'ő') =
- P(C<sub>1</sub> = 'p') =
- P(C<sub>1</sub> = 'q') =
- P(C<sub>1</sub> = 'r') =
- P(C<sub>1</sub> = 's') =
- P(C<sub>1</sub> = 't') =
- P(C<sub>1</sub> = 'u') =
- P(C<sub>1</sub> = 'ú') =
- P(C<sub>1</sub> = 'ü') =
- P(C<sub>1</sub> = 'ű') =
- P(C<sub>1</sub> = 'v') =
- P(C<sub>1</sub> = 'w') =
- P(C<sub>1</sub> = 'x') =
- P(C<sub>1</sub> = 'y') =
- P(C<sub>1</sub> = 'z') =

Let random variable C<sub>2</sub> represent the 26 possible characters present in a passphrase created with Diceware using the Version 2 list, but substituting accented characters with their non-accented variants according to the following substitution rules (the sign ‘>’ denoting substitution): ‘á’ > ‘a’, ‘é’ > ‘e’, ‘í’ > ‘i’, ‘ó’ > ‘o’, ‘ö’ > ‘o’, ‘ő’ > ‘o’, ‘ú’ > ‘u’, ‘ü’ > ‘u’, ‘ű’ > ‘u’. These are the lowercase letters of the English alphabet: ‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’, ‘g’, ‘h’, ‘i’, ‘j’, ‘k’, ‘l’, ‘m’, ‘n’, ‘o’, ‘p’, ‘q’, ‘r’, ‘s’, ‘t’, ‘u’, ‘v’, ‘w’, ‘x’, ‘y’, ‘z’.

C<sub>2</sub> has the following probability distribution:

- P(C<sub>2</sub> = 'a') = ? / ? ≈ ? = ?%=
- P(C<sub>2</sub> = 'b') =
- P(C<sub>2</sub> = 'c') =
- P(C<sub>2</sub> = 'd') =
- P(C<sub>2</sub> = 'e') =
- P(C<sub>2</sub> = 'f') =
- P(C<sub>2</sub> = 'g') =
- P(C<sub>2</sub> = 'h') =
- P(C<sub>2</sub> = 'i') =
- P(C<sub>2</sub> = 'j') =
- P(C<sub>2</sub> = 'k') =
- P(C<sub>2</sub> = 'l') =
- P(C<sub>2</sub> = 'm') =
- P(C<sub>2</sub> = 'n') =
- P(C<sub>2</sub> = 'o') =
- P(C<sub>2</sub> = 'p') =
- P(C<sub>2</sub> = 'q') =
- P(C<sub>2</sub> = 'r') =
- P(C<sub>2</sub> = 's') =
- P(C<sub>2</sub> = 't') =
- P(C<sub>2</sub> = 'u') =
- P(C<sub>2</sub> = 'v') =
- P(C<sub>2</sub> = 'w') =
- P(C<sub>2</sub> = 'x') =
- P(C<sub>2</sub> = 'y') =
- P(C<sub>2</sub> = 'z') =

### Why is there a minimum letter count requirement? Thinking of a Diceware passphrase as a string of characters

As seen above, a password of high entropy can be the result of two factors:

- a large symbol set,
- using many of those symbols in the password.

Diceware operates with a large symbol set: its symbols are the 7,776 words on a Diceware word list. In contrast, a case-sensitive Latin alphanumeric password uses a symbol set that only has 62 elements (26 lower- and 26 uppercase letters, and 10 numbers). With its large symbol set, Diceware can produce high-entropy passwords while using less symbols (words) in them.

The minimum letter count requirement follows from the fact that one does not want to lose any security by considering their Diceware passphrase as a string of independent characters present in a particular Diceware word list. That is, one does not want to be less secure if an attacker — in possession of the information that they use Diceware with a particular word list — decides to start brute-force cracking their passphrase not word by word, but character by character. This can be achieved by keeping the passphrase’s “letter-based” per-symbol entropy at least as high as its “word-based” per-symbol entropy.

The “word-based” per-symbol entropy of a Diceware passphrase is H<sub>w</sub> ≈ 12.925 bits. This means that each word in the passphrase needs to contain at least ~12.925 bits of “letter-based” per-symbol entropy as well, in order not to weaken the overall security of the passphrase. Based on the probability distribution of the letters in the Version 2 list, the “letter-based” per-symbol entropy of a passphrase created with the Version 2 list is H<sub>l</sub> = TODO bits in the worst case (neither using spaces in the passphrase nor decorating it with mixed-case letters or non-alphabetic characters). If not using accented characters, the letters’ probability distribution changes, so the “letter-based” per-symbol entropy of a passphrase created this way drops to H<sub>l</sub> = TODO bits in the worst case, and longer passphrases may be required.

With a Diceware passphrase containing W words, the passphrase’s minimum number of letters L, needed to achieve at least the same “letter-based” entropy as the “word-based” entropy H = W \* H<sub>w</sub> of the passphrase, is given by the formula L = ceil(W \* H<sub>w</sub> / H<sub>l</sub>), where ceil denotes the mathematical ceiling function, i.e., rounding up to the next largest whole number. Values of L for 5 <= W <= 20 with H<sub>l</sub> = TODO (using accented characters) and H<sub>l</sub> = TODO (not using accented characters) are summarized in the table in the How to use section.

It is to be noted that the security of a Diceware passphrase can easily be surpassed than demanded by the minimum letter count requirement: one should add additional “character-based” entropy to the passphrase by using mixed-case letters and non-alphabetic characters, and also by using spaces as word separators (even though the main goal of the latter is to prevent redundancy amongst words).

## Sources used:

- [https://theworld.com/~reinhold/diceware.html](https://theworld.com/~reinhold/diceware.html)
- [https://en.wikipedia.org/wiki/Diceware](https://en.wikipedia.org/wiki/Diceware)
- [https://en.wikipedia.org/wiki/Password_strength](https://en.wikipedia.org/wiki/Password_strength)
