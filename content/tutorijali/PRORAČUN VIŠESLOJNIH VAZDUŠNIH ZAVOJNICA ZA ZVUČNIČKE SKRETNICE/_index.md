---
title: "PRORAČUN VIŠESLOJNIH VAZDUŠNIH ZAVOJNICA ZA ZVUČNIČKE SKRETNICE"
date: 2024-03-18
description: "Osnovni proračun"
paige:
  math: true
draft: false
tags: ["PRORAČUN VIŠESLOJNIH VAZDUŠNIH ZAVOJNICA ZA ZVUČNIČKE SKRETNICE"]
weight: 10
---
## Osnovni proračun

Čest problem većine manje iskusnih konstruktora i samograditelja audio uređaja je proračun i izrada zavojnica (kalemova) za pasivne skretnice u zvučnim kutijama. Ovde opisan način daje u praksi više nego zadovoljavajuće rezultate i smatram da je dovoljno jednostavan za gotovo bilo koga ko se iole bavi makar i bazičnom elektronikom.

Osnovni proračun induktivnosti je baziran na Wilerovoj (Wheeler) formuli (ovaj nema veze sa goblenima) koja glasi:

$$
 L = \frac{7,87N^2 * M^2} {3M + 9B + 10C}
$$

<p class="text-center" style="color: red;">PAŽNJA!!! Induktivitet je u nanohenrijima "nH" u SVIM formulama koje slede!!!</p>

i odnosi se na sledeću sliku:

<p>{{< paige/image alt="Kalem" class="rounded-2" src="./images/Kalem.png" title="Kalem" >}}</p>

<p class="text-center" style="color: red;">(SVE DIMENZIJE SU U MILIMETRIMA !)</p>

U praksi je moguće korišćenjem ove formule postići preciznost od oko 1-2%, u koliko se trudimo da nam sabirci ispod razlomačke crte budu po vrednosti isti ili što bliži tome. Dakle, idealno bi bilo da uklopimo vrednosti tako da je 3M=9B=10C.

Formula je izvrsna kada znamo sve vrednosti za proračun, ali je u životu najčešće upravo obrnuto... znamo induktivnost ali ne znamo ništa drugo. Zato ćemo malko "pretumbati" osnovnu formulu kako bi došli do obrazaca za njene "sastojke".

Omska otpornost kalema se može izračunati koristeći prečnik i dužinu upotrebljene žice, što takođe može biti izraženo pomoću ukupnog broja zavoja i srednjeg prečnika kalema:

$$
  R = \frac{N * M} {14250W^2}
$$

<p class="text-center">(gde je "W" prečnik žice u milimetrima)</p>

<p class="text-center">Odnos između broja navoja koji mogu da stanu u dati presek kalema i debljine žice se računa kao:</p>

$$
 N * (\frac{W} {P})^2 = B * C
$$

<p class="text-center">Bazirano na predpostavci da želimo idealan oblik i dimenzije kalema (a to je kada se trudimo da nam dizajn kalema zadovoljava odnos 3M=9B=10C), evo još dve korisne jednačine:</p>

$$
 B_{i} = \frac{M_{i}} {3}   &ensp;&ensp;&ensp;   C_{i} = 0,3 * M_{i}
$$

<p class="text-center">Malo slovo "i" ovde znači "idealan".</p>

<p class="text-center">U tom slučaju se osnovna Wilerova formula može napisati kao:</p>

$$
 L = 0,875 * N_{i}^2 * M_{i}
$$

<p class="text-center">a formula za "pakovanje" kao:</p>

$$
 N * ( \frac{W} {P})^2 = 0,1 * M_{i}^2
$$

<p class="text-center">Sada se mogu izraziti i drugi parametri:</p>

$$
 M_{i} = 0,0354 * \sqrt{\frac{L} {R}}   &ensp;&ensp;&ensp;   N_{i} = 1,07 * \sqrt{\frac{L} {M_{i}}}   &ensp;&ensp;&ensp;   W_{i} = 0,253 * \sqrt{\frac{M_{i}} {\sqrt{N_{i}}}}   &ensp;&ensp;&ensp;   I = M - C = 0,7* M   &ensp;&ensp;&ensp;   O =  M + C  = 1,3 * M
$$

<p class="text-center">kao i još dve korisne formule:</p>

$$
 M_{i} = 3,08 * L^{0,2} * W^{0,8}   &ensp;&ensp;&ensp;   N_{i} = 0,61 * (\frac{L} {W})^{0,4}
$$

<p class="text-center">Evo i dva praktična primera:</p>

### Primer 1:
Poznata je potrebna induktivnost od 200mH i omska otpornost kalema od 0.3Ω.
Pošto je 200µH = 200.000nH= 200x10^3nH dalje računamo:

$$
 M_{i} = 0,0354 * \sqrt{\frac{200 * 10^3} {0,3}} = 28,9mm
$$

$$
 N_{i} = 1,07 * \sqrt{\frac{200 * 10^3} {28,9}} = 89
$$

$$
 W_{i} = 0,253 * \frac{28,9} {\sqrt{89}} = 0,775mm
$$

<p class="text-center">U ovom momentu se može modifikovati prečnik žice da se prilagodi postojećim standardnim prečnicima, pod uslovom da ste svesni svih posledica takvih promena (povećanje prečnika žice smanjuje omsku otpornost ali povećava dimenzije kalema pa počinjete da odstupate od "ideala"). Neka sada novo-odabrani precnik žice bude 1mm (umesto izračunatih 0,775mm).</p>

$$
 M_{i} = 3,08 * 200000^{0,2} * 1^{0,8} = 35,4 
$$

$$
 C_{i} = 0,3 * 35,4 = 10,6
$$

$$
 B_{i} = \frac{35,4} {3} = 11,8
$$

$$
 I = 35,4 - 10,6 = 24,8mm
$$

$$
 O = 35,4 + 10,6 = 46mm
$$

$$
 N_{i} = 0,61 * (\frac{200000} {1})^{0,4} = 132
$$

Kada završite motanje, nemojte zaboraviti da PRE NEGO ŠTO ISEČETE ŽICU ponovo premerite spoljašnji prečnik kalema i ponovo preračunate induktivnost po osnovnoj Wilerovoj formuli, ali sada koristeći novo-izmereni prečnik namotanog kalema, i da onda korigujete broj navoja (odmotavanjem ili domotavanjem), pa tek onda isečite žicu!!!

### Primer 2:
Primer 2 polazi od pretpostavke da već imamo neko telo za kalem i da treba da na njega "smestimo" potrebnu zavojnicu. Recimo da je potrebna induktivnost od 2mH, a telo ima takve dimenzije da će namotan kalem imati unutrašnji prečnik "I" od 12mm, dužinu namotaja "B" od 16mm i debljinu namotaja "C" od 6mm.

$$
 2 * 10^6 = \frac{7,87 * N^2 * 18^2} {3 * 18 + 9 * 16 + 10 * 6} => N = 450
$$

$$
 450 * (\frac{W} {0,8})^2 = 16 * 6 => W = 0,369mm
$$

<p class="text-center">Izaberite najbliži manji standardni presek žice "W" od 0,35mm, i opet preračunajte debljinu namotaja "C"</p>

$$
 450 * (\frac{0,35} {0,8})^2 = 16C => C = 5,4mm
$$

<p class="text-center">Novo dobijena vrednost za debljinu namotaja i srednji prečnik će možda zahtevati ponovnu kalkulaciju induktiviteta i korekciju broja zavoja. Proverite sada i omsku otpornost:
</p>

$$
 R = \frac{17,6 * 450} {14250 * 0,35^2} = 4,54Ω
$$

<p class="text-center">Vidite da li je vrednost prihvatljiva, a ako je prevelika, odaberite drugo telo većeg prečnika i/ili većeg preseka prostora za namotaj (površina koja se dobija kao BxC).</p>

