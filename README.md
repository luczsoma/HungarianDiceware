# Hungarian Diceware

_Dice-Indexed Passphrase Word List in Hungarian, created by Soma Lucz ([https://github.com/luczsoma](https://github.com/luczsoma))_

[![en](https://img.shields.io/badge/lang-en-blue)](https://github.com/luczsoma/HungarianDiceware/blob/main/README.md)
[![hu](https://img.shields.io/badge/lang-hu-red)](https://github.com/luczsoma/HungarianDiceware/blob/main/README.hu.md)

## What is Diceware?

[Diceware](https://theworld.com/~reinhold/diceware.html) is a method for picking secure but easy-to-remember passphrases. It selects words from a purpose-built Diceware word list randomly, using dice. The list is indexed by five-digit numbers, all digits being between one and six: the outcome of five dice rolls selects a word from the list for the passphrase.

## Why is it secure?

One’s digital security depends on lots of factors, but using secure passwords is a necessary basis. Managing passwords securely also has many aspects. Diceware is considered a secure password generation method, but that is all it is; the rest is up to its user. It is universally recommended to use unique passwords for everything, generated by and stored in a secure password manager\*. Diceware is a practical and secure choice for creating a passphrase to be used as the password manager’s master password.

\*My definite recommendation is [1Password](https://1password.com) for a cloud-based use case, or [KeePassXC](https://keepassxc.org) for a self-hosted use case.

Reasons why I consider Diceware a secure password generation method:

- It is offline: it does not use electronic technology. This makes it infeasible to compromise the generation method itself, or to intercept the passphrase at the time of its creation. Even though the passphrase can still be stolen by a hacker later by social engineering, keylogging, or MITM attacks, Diceware is all about maximizing security; therefore, I advise against using online or electronic Diceware tools.

- It incorporates entropy into the passphrase that is provided by a true random number generator — the dice — instead of a pseudorandom number generator usually used by computers. Even though other factors generally diminish the security contribution of TRNGs, Diceware is all about maximizing security; and using proper randomness supplied by TRNGs makes the passphrase harder to predict, thus harder to crack. Online or electronic Diceware tools usually do not allow to verify whether they use a secure TRNG or even a secure RNG; this is another reason I advise against using them. (For more information about pseudorandom vs. true random, check out [my article on Medium](https://medium.com/tresorit-engineering/randomness-demystified-df47f9308717); free version [here](https://gist.github.com/luczsoma/ac5a1783f51879ade5e1dd7bfa032b40).)

- Available personal data about an individual is frequently utilized in the process of cracking their passwords. Diceware produces passphrases that are not related to their user in any way, making them harder to predict, thus harder to crack.

- Diceware produces passphrases that are easy to remember.

- The math behind Diceware is sound. See “The Math” section for details.

## How to use it?

0. **You will need one or more dice.** I strongly advise against using online or electronic Diceware tools, because it eradicates two important security properties of the Diceware method. For maximizing security, it is best if you have a hard copy of the Diceware word list, so your word lookups cannot be spied on electronically.

1. **Decide how many words you want in your passphrase.** A five-word passphrase provides a level of security much higher than simple passwords most people use. A minimum of six words is recommended as a password manager’s master password, but for this I most likely would go for an eight- or ten-word passphrase. You can go up to twenty words for less frequent usage or for protecting high-value data. (Since using twenty Diceware words in your passphrase results its security level being already a little more than a 256-bit symmetric key’s, it doesn't really make sense to go further. See “The Math” section for more information.)

2. **Let us say you decided on a six-word passphrase. For that, you need 6 \* 5 = 30 numbers between one and six, meaning thirty dice rolls altogether.** You can roll one die thirty times, thirty dice simultaneously, or any combination in between; but make sure to shake the di(c)e vigorously beforehand. If you roll several dice at a time, read them from left to right. Write down the results of the thirty dice rolls in groups of five, on a piece of paper; it is best not to use electronics for recording the results.

3. **Look up each five-digit number you wrote down in the Diceware word list and read its corresponding word.** For example, 25341 means your next passphrase word would be “TODO”.

4. **I advise that you substitute accented letters with their accent-free variants in the words you found.** Many applications handle passwords containing non-ASCII characters terribly wrongly; even if they get it right, your non-ASCII password might still not work due to possible differences in character encoding, Unicode normalization, etc. (and even differing operating systems can cause such discrepancies). Also, you should be able to type in your passphrase using any keyboard layout. Using accent-free letters does not mean sacrificing security, but you may have to ensure that your passphrase is longer; see the next step.

5. **Make sure that the total number of letters in the six found words is at least the corresponding number in the table below.** If not, go back to step 2. See “The Math” section for why this is important.

6. **Your new passphrase is the six words you found, separated by spaces.** Separation is indeed important, otherwise the passphrase can become weaker due to possible redundancy amongst the words.

7. **You can decorate your passphrase if you want.** As long as you will still remember it, you can make the passphrase even more secure by replacing some lowercase letters with their uppercase variants and by adding non-alphabetic characters to it; you can also use characters other than space for word separators. However, I still advise that you only use ASCII characters in your passphrase (see step 4).

8. **Memorize the passphrase well, then destroy the paper you wrote the results on.** Or you can also hide the paper in a safe place.

| Diceware words | Minimum total letter count<br />if using accented letters | Minimum total letter count<br />if not using accented letters |
| -------------- | --------------------------------------------------------- | ------------------------------------------------------------- |
| 5              |                                                           |                                                               |
| 6              |                                                           |                                                               |
| 7              |                                                           |                                                               |
| 8              |                                                           |                                                               |
| 9              |                                                           |                                                               |
| 10             |                                                           |                                                               |
| 11             |                                                           |                                                               |
| 12             |                                                           |                                                               |
| 13             |                                                           |                                                               |
| 14             |                                                           |                                                               |
| 15             |                                                           |                                                               |
| 16             |                                                           |                                                               |
| 17             |                                                           |                                                               |
| 18             |                                                           |                                                               |
| 19             |                                                           |                                                               |
| 20             |                                                           |                                                               |

## Hungarian Diceware list versions

**I recommend using Version 2 of the Hungarian Diceware word list for generating new passphrases.**

### Version 1

Version 1 is of low quality. It contains weird, lesser-known words (and non-words, too), which can make it harder to remember a passphrase. I cannot recall the source of the word list, moreover, for some reason I thought it would be wise to convert all accented letters on the list to their accent-free variants.

### Version 2

Version 2 was created using the [Hungarian National Corpus](http://corpus.nytud.hu/mnsz/index_eng.html) compiled by the Research Institute for Linguistics of the [Hungarian Academy of Sciences](https://mta.hu/english). (The Research Institute for Linguistics is now called the [Hungarian Research Centre for Linguistics](https://nytud.hu/en) and operates under the supervision of the [Hungarian Research Network](https://hun-ren.hu/en).) The list contains the 7,776 most frequent non-vulgar words of the corpus that are the dictionary form of nouns (excl. proper nouns), adjectives, or verbs, and are 2–6 characters in length. Vulgarity was filtered out manually by me. Special thanks to [Bálint Sass](https://nytud.hu/en/colleague/balint-sass) for providing a partial frequency list of the corpus.

## The Math

It is usual in the computer industry to specify password strength in terms of information entropy, which is measured in shannon (Sh) and is a concept from information theory. It can be regarded as the minimum number of bits necessary to hold the information in a password of a given type. Instead of the number of guesses needed to find the password with certainty, the base-2 logarithm of that number is given, which is commonly referred to as the number of “entropy bits” in a password, though this is actually not the same quantity as the information entropy of a password. A password with an entropy of 42 bits calculated in this way would be as strong as a string of 42 bits chosen randomly, for example by a fair coin toss. Put another way, a password with an entropy of 42 bits would require $`2^{42} = 4,398,046,511,104`$ attempts to exhaust all possibilities during a brute force search. Thus, increasing the entropy of the password by one bit doubles the number of guesses required, making an attacker’s task twice as difficult. On average, an attacker will have to try half the possible number of passwords before finding the correct one.

### Entropy per symbol for a symbol set, where each is symbol is equally likely

If elements are chosen randomly from a set of $`N`$ symbols, the entropy per symbol ($`H_s`$) in bits is given by the formula $`H_s = \log_2 N`$. Per-symbol entropy values for common symbol sets are summarized in the table below.

| Symbol set                                                 | Symbol count ($`N`$) | Entropy per symbol ($`H_s`$) in bits |
| ---------------------------------------------------------- | -------------------- | ------------------------------------ |
| Arabic numerals (0–9)                                      | 10                   | ~3.322 bits                          |
| Hexadecimal numerals (0–9 & A–F)                           | 16                   | 4 bits                               |
| Case insensitive Latin alphabet (a–z / A–Z)                | 26                   | ~4.700 bits                          |
| Case insensitive alphanumeric characters (a–z / A–Z & 0–9) | 36                   | ~5.170 bits                          |
| Case sensitive Latin alphabet (a–z & A–Z)                  | 52                   | ~5.700 bits                          |
| Case sensitive alphanumeric characters (a–z & A–Z & 0–9)   | 62                   | ~5.954 bits                          |
| ASCII printable characters except space                    | 94                   | ~6.555 bits                          |
| ASCII printable characters                                 | 95                   | ~6.570 bits                          |
| Extended ASCII printable characters                        | 218                  | ~7.768 bits                          |
| Binary characters (0–255 or 8 bits or 1 byte)              | 256                  | 8 bits                               |
| Diceware word list                                         | 7776                 | ~12.925 bits                         |

Diceware’s ~12.925 bits of per-symbol entropy value assumes that potential attackers know three things: that Diceware has been used to create the passphrase, the particular word list used, and exactly how many words make up the passphrase. If an attacker has less information, the per-symbol entropy can be greater than ~12.925 bits. That is, if an attacker does not know you use Diceware to create your passphrases, you may be even safer; but it is still recommended to use at least six words, adhere to the minimum letter count requirement, and decorate the passphrase with mixed-case letters and non-alphabetic characters.

### The minimum length of a password generated randomly from a set symbols, required to achieve given password entropy

With a password generated randomly from a set of $`N`$ symbols, the minimum length of the password ($`L_\mathrm{min}`$) required to achieve a desired password entropy ($`H`$) is given by the formula

```math
L_\mathrm{min} = \left\lceil \frac{H}{\log_2 N} \right\rceil,
```

where $`\lceil~\rceil`$ denotes the mathematical ceiling function (i.e., the function $`c`$ defined by the formula $`c(x) = \min \{ y \in \mathbb{Z} \mid y \geq x \} \quad (x \in \mathbb{R})`$). For the given levels of desired password entropy, the minimum required length values for common symbol sets are summarized in the table below.

| Desired password entropy ($`H`$) | Case sensitive Latin alphabet ($`N = 52`$) | Case sensitive alphanumeric characters ($`N = 62`$) | ASCII printable characters ($`N = 95`$) | Extended ASCII printable characters ($`N = 218`$) | Diceware word list ($`N = 7776`$) |
| -------------------------------- | ------------------------------------------ | --------------------------------------------------- | --------------------------------------- | ------------------------------------------------- | --------------------------------- |
| 8 bits (1 byte)                  | 2                                          | 2                                                   | 2                                       | 2                                                 | 1                                 |
| 32 bits (4 bytes)                | 6                                          | 6                                                   | 5                                       | 5                                                 | 3                                 |
| 40 bits (5 bytes)                | 8                                          | 7                                                   | 7                                       | 6                                                 | 4                                 |
| 64 bits (8 bytes)                | 12                                         | 11                                                  | 10                                      | 9                                                 | 5                                 |
| 80 bits (10 bytes)               | 15                                         | 14                                                  | 13                                      | 11                                                | 7                                 |
| 96 bits (12 bytes)               | 17                                         | 17                                                  | 15                                      | 13                                                | 8                                 |
| 128 bits (16 bytes)              | 23                                         | 22                                                  | 20                                      | 17                                                | 10                                |
| 160 bits (20 bytes)              | 29                                         | 27                                                  | 25                                      | 21                                                | 13                                |
| 192 bits (24 bytes)              | 34                                         | 33                                                  | 30                                      | 25                                                | 15                                |
| 224 bits (28 bytes)              | 40                                         | 38                                                  | 35                                      | 29                                                | 18                                |
| 256 bits (32 bytes)              | 45                                         | 43                                                  | 39                                      | 33                                                | 20                                |

Diceware’s values assume that potential attackers know three things: that Diceware has been used to create the passphrase, the particular word list used, and exactly how many words make up the passphrase. If an attacker has less information, the desired password entropy can be achieved with a shorter passphrase. That is, if an attacker does not know you use Diceware for creating your passphrases, you may be even safer; but it is still recommended to use at least six words, adhere to the minimum letter count requirement, and decorate the passphrase with mixed-case letters and non-alphabetic characters.

### Required bits of password entropy

The minimum number of bits of entropy needed for a password depends on the threat model for the given application. If key stretching is not used, passwords with more entropy are needed. RFC 4086, “Randomness Requirements for Security”, published June 2005, presents some example threat models and how to calculate the entropy desired for each one. Their answers vary between 29 bits of entropy needed if only online attacks are expected, and up to 96 bits of entropy needed for important cryptographic keys used in applications like encryption where the password or key needs to be secure for a long period and stretching is not applicable. A 2010 Georgia Tech Research Institute study based on unstretched keys recommended a 12-character random password but as a minimum length requirement. It pays to bear in mind that since computing power continually grows, to prevent offline attacks the required number of bits of entropy should also increase over time.

The upper end is related to the stringent requirements of choosing keys used in encryption. In 1999, an Electronic Frontier Foundation project broke 56-bit DES encryption in less than a day using specially designed hardware. In 2002, distributed.net cracked a 64-bit key in 4 years, 9 months, and 23 days. As of October 12, 2011, distributed.net estimated that cracking a 72-bit key using hardware of the time would take about 45,579 days or 124.8 years. Due to currently understood limitations from fundamental physics, there is no expectation that any digital computer (or combination) will be capable of breaking 256-bit encryption via a brute-force attack. Whether or not quantum computers will be able to do so in practice is still unknown, though theoretical analysis suggests such possibilities.

Choosing six Diceware words yields ~77.549 bits of entropy; this should be enough for everyday use cases. Ten words yield ~129.248 bits of entropy; this is already more than the classic “128-bit security level”, and its security margin will most likely hold until the arrival of quantum computers. Twenty words yield ~258.426 bits of entropy; according to our current knowledge, it means quantum-resistance.

### Relevant statistical properties of the Version 2 list

#### Probability distribution of word lengths

Let $`L`$ be a random variable that represents the length of a word chosen randomly from the Version 2 list. $`L`$ has the following probability distribution:

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

#### Chance of creating a passphrase not satisfying the minimum letter count requirement

TODO

#### Probability distribution of letters

Let $`L_1`$ be the set of the 35 letters that can be present in a non-decorated passphrase created with Diceware using the Version 2 list. These are the lowercase letters of the extended Hungarian alphabet excl. double and triple letters (‘cs’, ‘dz’, ‘dzs’, ‘gy’, ‘ly’, ‘ny’, ‘sz’, ‘ty’, ‘zs’):

```math
L_1 = \{ \mathrm{a}, \mathrm{á}, \mathrm{b}, \mathrm{c}, \mathrm{d}, \mathrm{e}, \mathrm{é}, \mathrm{f}, \mathrm{g}, \mathrm{h}, \mathrm{i}, \mathrm{í}, \mathrm{j}, \mathrm{k}, \mathrm{l}, \mathrm{m}, \mathrm{n}, \mathrm{o}, \mathrm{ó}, \mathrm{ö}, \mathrm{ő}, \mathrm{p}, \mathrm{q}, \mathrm{r}, \mathrm{s}, \mathrm{t}, \mathrm{u}, \mathrm{ú}, \mathrm{ü}, \mathrm{ű}, \mathrm{v}, \mathrm{w}, \mathrm{x}, \mathrm{y}, \mathrm{z} \}
```

Let $`i_1`$ be a function that maps the elements of $`L_1`$ to their numeric position in the Hungarian alphabetically ordered enumeration of $`L_1`$, such that

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

Let $`l \in L_1`$ be a letter chosen randomly from the Version 2 list, and let $`X_1`$ be a random variable that represents $`i_1(l)`$. $`X_1`$ has the following probability distribution:

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

Let $`H_1`$ be the entropy of $`X_1`$ in bits:

```math
H_1 := H(X_1) = - \sum_{l \in L_1} P(X_1 = i_1(l)) \log_2 P(X_1 = i_1(l)) \approx TODO~\mathrm{bit}
```

Let $`L_2`$ be the set of the 26 letters that can be present in a non-decorated passphrase created with Diceware using the Version 2 list, if its accented letters are substituted with their non-accented variants according to the following substitution rules (the sign ‘>’ denoting substitution): ‘á’ > ‘a’, ‘é’ > ‘e’, ‘í’ > ‘i’, ‘ó’ > ‘o’, ‘ö’ > ‘o’, ‘ő’ > ‘o’, ‘ú’ > ‘u’, ‘ü’ > ‘u’, ‘ű’ > ‘u’. These are the lowercase letters of the English alphabet:

```math
L_2 = \{ \mathrm{a}, \mathrm{b}, \mathrm{c}, \mathrm{d}, \mathrm{e}, \mathrm{f}, \mathrm{g}, \mathrm{h}, \mathrm{i}, \mathrm{j}, \mathrm{k}, \mathrm{l}, \mathrm{m}, \mathrm{n}, \mathrm{o}, \mathrm{p}, \mathrm{q}, \mathrm{r}, \mathrm{s}, \mathrm{t}, \mathrm{u}, \mathrm{v}, \mathrm{w}, \mathrm{x}, \mathrm{y}, \mathrm{z} \}
```

Let $`i_2`$ be a function that maps the elements of $`L_2`$ to their numeric position in the alphabetically ordered enumeration of $`L_2`$, such that

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

Let $`l \in L_2`$ be a letter chosen randomly from the Version 2 list, if its accented letters are substituted with their non-accented variants according to the substitution rules above, and let $`X_2`$ be a random variable that represents $`i_2(l)`$. $`X_2`$ has the following probability distribution:

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

Let $`H_2`$ be the entropy of $`X_2`$ in bits:

```math
H_2 := H(X_2) = - \sum_{l \in L_2} P(X_2 = i_2(l)) \log_2 P(X_2 = i_2(l)) \approx TODO~\mathrm{bit}
```

### Why is there a minimum letter count requirement? Thinking of a Diceware passphrase as a string of characters

As seen above, a password of high entropy can be the result of two factors:

- a large symbol set,
- using many of those symbols in the password.

Diceware operates with a large symbol set: its symbols are the 7,776 words on a Diceware word list. In contrast, a case-sensitive Latin alphanumeric password uses a symbol set that only has 62 elements (26 lower- and 26 uppercase letters, and 10 numbers). With its large symbol set, Diceware can produce high-entropy passwords using less symbols (words).

The minimum letter count requirement follows from the fact that one does not want to lose any security by considering their Diceware passphrase as a string of independent characters present in a particular Diceware word list. That is, one does not want to be less secure in case an attacker — in possession of the information that one uses Diceware with a particular word list — decides to start brute-force cracking one’s passphrase not word by word, but character by character, based on the probability distribution of the used word list’s characters. This can be achieved by ensuring that the passphrase’s “character-based” entropy ($`H_\mathrm{C}`$) is at least as much as its “word-based” entropy ($`H_\mathrm{W}`$):

```math
H_\mathrm{C} \geq H_\mathrm{W}.
```

The “word-based” entropy bits of a Diceware passphrase containing $`W`$ words is given by the formula $`H_\mathrm{W} = W \cdot \log_2 7776`$. The “character-based” entropy bits of a Diceware passphrase in the worst case (if neither using word separators in the passphrase nor decorating it in any way) is given by the formula $`H_\mathrm{C} = L \cdot H_\mathrm{c}`$, where $`L`$ is the total number of letters in the words chosen from the Diceware word list, and $`H_\mathrm{c}`$ is the per-letter entropy bits of the particular Diceware word list used.

Substituting the above formulae into the inequality gives the following:

```math
L \cdot H_\mathrm{c} \geq W \cdot \log_2 7776.
```

Rearranging this inequality to make $`L`$ the subject gives a formula for determining the required minimum letter count in order not to lose security:

```math
L \geq \frac{W \cdot \log_2 7776}{H_\mathrm{c}}.
```

Expressing the above inequality as an equation gives an explicit formula for calculating the minimum letter count:

```math
L_\mathrm{min} = \left\lceil \frac{W \cdot \log_2{7776}}{H_\mathrm{c}} \right\rceil,
```

where $`\lceil~\rceil`$ denotes the mathematical ceiling function (i.e., the function $`c`$ defined by the formula $`c(x) = \min \{ y \in \mathbb{Z} \mid y \geq x \} \quad (x \in \mathbb{R})`$), and $`W`$ and $`H_\mathrm{c}`$ denote the same as above.

The $`H_\mathrm{c}`$ value of the Version 2 list is $`H_1 \approx TODO~\mathrm{bit}`$ if using accented letters and $`H_2 \approx TODO~\mathrm{bit}`$ if not using accented letters.

Values of $`L`$ for $`5 \leq W \leq 20`$ with $`H_\mathrm{c} = H_1`$ and $`H_\mathrm{c} = H_2`$ are summarized in the table in the “How to use it?” section.

Note that in practice, separating the words likely provides enough additional “character-based” entropy in itself not to weaken the overall security of a passphrase otherwise not satisfying the minimum letter count requirement. Nevertheless, it is still recommended to adhere to the minimum letter count requirement (and to use at least six words in the passphrase, and to decorate it with mixed-case letters and non-alphabetic characters).

## Sources used:

- [https://theworld.com/~reinhold/diceware.html](https://theworld.com/~reinhold/diceware.html)
- [https://en.wikipedia.org/wiki/Diceware](https://en.wikipedia.org/wiki/Diceware)
- [https://en.wikipedia.org/wiki/Password_strength](https://en.wikipedia.org/wiki/Password_strength)
- [https://en.wikipedia.org/wiki/Entropy\_(information_theory)](<https://en.wikipedia.org/wiki/Entropy_(information_theory)>)
