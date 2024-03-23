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
