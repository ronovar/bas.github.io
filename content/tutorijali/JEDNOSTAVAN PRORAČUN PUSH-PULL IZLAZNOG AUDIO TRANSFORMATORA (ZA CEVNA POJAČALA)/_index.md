---
title: "JEDNOSTAVAN PRORAČUN PUSH-PULL IZLAZNOG AUDIO TRANSFORMATORA (ZA CEVNA POJAČALA)"
date: 2024-03-18
description: "Osnovni proračun"
paige:
  math: true
draft: false
tags: ["JEDNOSTAVAN PRORAČUN PUSH-PULL IZLAZNOG AUDIO TRANSFORMATORA (ZA CEVNA POJAČALA)"]
weight: 10
---
## Osnovni proračun

Za *postizanje* veće **snage** i boljeg iskorišćenja kod cevnih audio izlaznih stepena se najčešće koristi takozvani PUSH-PULL spoj tj. spoj sa dve cevi u izlazu kod koga svaka cev pojačava po jednu polu-periodu signala. Pošto cevi rade u protivfazi a primarni namotaj se uvek mota "bifilarno" to će se predmagnetizacija (koju izaziva prolazak jednosmerne struje kroz svaku polovinu primarnog namotaja) praktično poništavati pa se limovi kod ovih transformatora mogu prilikom pakovanja slagati naizmenično kao kod mrežnog trafoa. Razumljivo, tada nema ni vazdušnog procepa tzv. "air-gap"-a, koji je neophodan kod SE izlaznih transformatora.

Ovaj proračun važi za transformatore koji koriste klasične "E-I" limove od silicijumskog gvožđja.

> Za proračun je potrebno u startu znati neke parametre i to:
- <span style="color: red">Paa</span> = izlazna snaga obe cevi (korisna audio snaga a ne anodna disipacija!)
- <span style="color: red">Ia</span> = anodna struja jedne cevi
- <span style="color: red">Raa</span> = izlazna impedansa cevi (od anode do anode)
- <span style="color: red">Rz</span> = impedansa zvučnika

<p class="text-center">Potrebna površina poprečnog preseka jezgra (srednjeg stuba) je:</p>

$$
 S = 2 * \sqrt{P_{aa}}
$$

<p class="text-center">Induktivnost primarnog namotaja (u Henrijima "H") se računa kao:</p>

$$
 L_{p} = \frac{R_{aa}} {7 * f_{d}}
$$

<p class="text-center">Prenosni odnos "PRo" tj. odnos transformacije se dobija kao:</p>

$$
 PR_{o} = \sqrt{\frac{R_{aa}} {R_{z}}}   &emsp;&emsp;&emsp;   R_{z} = 1,25 * R_{Ω}&emsp;&emsp;(R_{Ω}  &ensp;-  &ensp;omski  &ensp;otpor  &ensp;zvučnika)
$$

<p class="text-center">Ukupan broj navoja primara (zbir navoja obe polovine) se računa kao:</p>

$$
 N_{p} = 450 * \sqrt{\frac{L_{p} * l_{m}} {S}}
$$

<p class="text-center">lm -je dužina srednje magnetne linije jezgra u "cm" i to morate naći u tabelama sa podatcima o tranformatorskim jezgrima.</p>

<p class="text-center">Broj navoja sekundara se računa kao:</p>

$$
 N_{s} = \frac{N_{p}} {PR_{o}}
$$

<p class="text-center">Debljina žice za primarni namotaj je:</p>

$$
 d_{p} = 0,1 * \sqrt{\frac{I_{a}} {20}}   &emsp;&emsp;&emsp;   (I_{a}  &ensp;-  &ensp;u  &ensp;miliamperima)
$$

<p class="text-center">A za sekundarni namotaj je:</p>

$$
 d_{s} = \sqrt{\frac{I_{z}} {2}}   &emsp;&emsp;&emsp;   (I_{z}  &ensp;-  &ensp;u  &ensp;amperima)
$$

<p class="text-center">Pri čemu se struja zvučnika računa kao:</p>

$$
 I_{z} = \sqrt{\frac{P_{aa}} {R_{z}}}
$$

<p class="text-center">Naizmenični napon na primaru se dobija iz:</p>

$$
 U_{aa} = \sqrt{R_{aa} * P_{aa}}
$$

<p class="text-center">Maksimalno dozvoljena indukcija u jezgru je:</p>

$$
 B_{max} = \frac{10^8 * U_{aa}} {4,4 * N_{p} * f_{d} * S}   &emsp;&emsp;&emsp;   N_{p} &ensp;odgovara &ensp;ako &ensp;je &ensp;B_{max} &ensp;< &ensp;7000 &ensp;Gausa
$$

- <span style="color: red">Paa</span> = izlazna snaga obe cevi (u vatima)
- <span style="color: red">Raa</span> = izlazna impedansa između anoda cevi (u omima)
- <span style="color: red">Ia</span> = anodna struja jedne cevi (u amperima)
- <span style="color: red">Uaa</span> = naizmenični napon celog primarnog namotaja
- <span style="color: red">Rz</span> = impedansa zvučnika (u omima)
- <span style="color: red">Iz</span> = struja zvučnika (u amperima)
- <span style="color: red">S</span> = poprečni presek jezgra (u cm2)
- <span style="color: red">PRo</span> = prenosni odnos trafoa
- <span style="color: red">Np</span> = broj navoja celog primarnog namotaja
- <span style="color: red">Ns</span> = broj navoja sekundara
- <span style="color: red">fd</span> = donja granična frekvenca
- <span style="color: red">dp</span> = debljina žice primara
- <span style="color: red">ds</span> = debljina žice sekundara

Za pojačala koja u izlazu imaju tetrode ili pentode i koja spadaju u višu klasu kvaliteta se često na obe strane primara ostavljaju još dva izvoda preko kojih se napajaju druge mrežice izlaznih cevi i ti se transformatori najčešće nazivaju "ultra-linearni". Tačno mesto tih izvoda zavisi uglavnom od upotrebljenih cevi ali je za praksu dovoljno da znate da oni mogu biti između 20% i 50% a najčešće i najoptimalnije je da su na 35-40% od broja navoja svake polovine primara i to računajući od anodnog kraja.

Izrada ovih transformatora nije nimalo naivan posao ako hoćete visok kvalitet, jer se namotavaju drugačije od klasičnih mrežnih transformatora. Najčešće se i primarni i sekundarni namotaj podele u nekoliko sekcija koje se motaju naizmenično u slojevima (takozvano "sendvič motanje") ali se mora mnogo voditi računa o kvalitetnoj izolaciji između slojeva a posebno o pravilnom "faziranju" tj. redosledu povezivanja sekcija istog namotaja što može biti dosta komplikovano.
