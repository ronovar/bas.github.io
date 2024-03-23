---
title: "JEDNOSTAVAN PRORAČUN IZLAZNOG AUDIO TRANSFORMATORA (ZA JEDNU CEV)"
date: 2024-03-18
description: "Osnovni izračun"
paige:
  math: true
draft: false
tags: ["JEDNOSTAVAN PRORAČUN IZLAZNOG AUDIO TRANSFORMATORA (ZA JEDNU CEV)"]
weight: 10
---
## Osnovni izračun

Kod većine *cevnih* **("lampaških")** audio izlaznih stepena neminovna je upotreba izlaznog transformatora da bi se prenela snaga na potrošač tj. zvučnik. Izlazna otpornost cevi je uvek mnogo veća od otpornosti zvučnika pa direktno priključivanje nije moguće već se mora koristiti transformator. Ovde je dat jedan dosta uprošćen ali za praksu sasvim primenjljiv proračun jednog takvog transformatora za slučaj kada je korišćena jedna cev u izlazu, dakle SE ili Single-Ended tip izlaznog stepena.

> Za proračun je potrebno u startu znati neke parametre i to:
- <span style="color: red;">Pa</span> = izlazna snaga cevi (korisna audio snaga a ne anodna disipacija!)
- <span style="color: red;">Ia</span> = anodna struja cevi
- <span style="color: red;">Ra</span> = izlazna impedansa cevi
- <span style="color: red;">Rz</span> = impedansa zvučnika

<p class="text-center">Potrebna površina poprečnog preseka jezgra (srednjeg stuba) je:</p>

$$
 S = 2 * \sqrt{P_{A}}
$$

<p class="text-center">Broj navoja po voltu se računa kao:</p>

$$
 n_{x} = \frac{75} {S} &ensp;(za &ensp;f_{d} = 100Hz)
$$

$$
 n_{x} = \frac{90} {S} &ensp;(za &ensp;f_{d} = 50Hz)
$$

<p class="text-center">Prenosni odnos "PRo" tj. odnos transformacijese dobija kao:</p>

$$
 PR_{o} = \sqrt{\frac{R_{A}} {R_{Z}}}   &emsp;&emsp;&emsp;   R_{Z} = 1,25 * R_{Ω}&ensp;(R_{Ω} &ensp;= &ensp;omski &ensp;otpor &ensp;zvučnika)
$$

<p class="text-center">Broj navoja primara se računa kao:</p>

$$
 N_{P} = U_{A} * n_{X}
$$

<p class="text-center">Pri čemu se naizmenični napon na primaru dobija iz:</p>

$$
 U_{A} = \sqrt{R_{A} * P_{A}}
$$

<p class="text-center">Broj navoja sekundara se računa kao:</p>

$$
 N_{S} = \frac{N_{P}} {PR_{o}}
$$

<p class="text-center">Debljina žice za primarni namotaj je:</p>

$$
 d_{p} = \sqrt{\frac{I_{a}} {2}}
$$

<p class="text-center">A za sekundarni namotaj je:</p>

$$
 d_{s} = \sqrt{\frac{I_{z}} {2}}
$$

<p class="text-center">Pri čemu se struja zvučnika računa kao:</p>

$$
 I_{z} = \sqrt{\frac{P_{a}} {R_{z}}}
$$

Sva jednosmerna struja izlazne cevi prolazi kroz primar trafoa i svojim prolaskom vrši predmagnetizaciju jezgra pa se u cilju izbegavanja zasićenja, limovi slažu tako da se svi "E" limovi slažu zajedno kao i svi "I" limovi, pa se pri definitivnom sklapanju transformatora između ta dva paketa limova postavlja tanki sloj papira ili prespana cija debljina (u milimetrima) se računa kao:

$$
 δ = 0,62 * 10^{-6} * I_{a} * N_{p}   &emsp;&emsp;&emsp;   (I_{a} &ensp;- &ensp;u &ensp;miliamperima &ensp;"mA")
$$

> Značenje određenih veličina korišćenih u proračunu je sledeće:
- <span style="color: red;">Pa</span> = izlazna snaga cevi (u vatima)
- <span style="color: red;">Ra</span> = izlazna impedansa cevi (u omima)
- <span style="color: red;">Ia</span> = anodna struja (u amperima)
- <span style="color: red;">Ua</span> = naizmenični napon primarnog namotaja
- <span style="color: red;">Rz</span> = impedansa zvučnika (u omima)
- <span style="color: red;">Iz</span> = struja zvučnika (u amperima)
- <span style="color: red;">S</span> = poprečni presek jezgra (u cm2)
- <span style="color: red;">PRo</span> = prenosni odnos trafoa
- <span style="color: red;">Np</span> = broj navoja primara
- <span style="color: red;">Ns</span> = broj navoja sekundara
- <span style="color: red;">fd</span> = donja granična frekvenca
- <span style="color: red;">dp</span> = debljina žice primara
- <span style="color: red;">ds</span> = debljina žice sekundara
