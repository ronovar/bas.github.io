---
title: "UPROŠĆEN PRORAČUN STANDARDNOG AUDIO POJAČALA SNAGE"
date: 2024-03-18
description: "Tutorijal"
paige:
  math: true
draft: false
tags: ["Tutorijal"]
weight: 10
---
## Tutorijal

Ovaj *vrlo* **uprošćen** opis rada i proračun jednog (uslovno rečeno) standardnog tranzistorskog pojačavača snage kakav se danas najčešće viđa, je nastao iz želje da se donekle pomogne mlađim i manje iskusnim entuzijastima-samograditeljima. Konstrukcija jednog takvog sklopa nije nikakva "misterija" iako to tako verovatno izgleda većini početnika. Model pojačala koji je korišćen kao primer za ovo objašnjenje je jedna "ogoljena" osnovna koncepcija koja se danas najčešće viđa. Sačinjavaju je ulazni diferencijalni par, naponski pojačavač u klasi A sa svojim izvorom konstantne struje, pobudni komplementarni par i komplementarni izlazni par u konfiguraciji "Emiter-folovera" tj. emiterskog sledila kako je to kod nas poznato. Još jednom podvlačim da je proračun veoma uprošćen ali za početak... za prve korake sasvim praktično upotrebljiv jer će izračunato pojačalo sasvim sigurno raditi ako se proračun tačno odradi a i praktična konstrukcija posle toga. Neće to biti "High End" dizajn ali, pošteno rečeno, i NE POČINJU SE PRVI KORACI U AUDIO ELEKTRONICI SA High-End-om!!!... (mada bi većina želela da odmah napravi najvrhunskije pojačalo... i tako se u startu najčešće počinje sa razočarenjima jer za High-End treba mnogo znanja i iskustva!).

<p>{{< paige/image alt="Primer" class="rounded-2" src="./images/Primer.png" title="Primer" >}}</p>

Možda to nekome neće izgledati logično, ali po meni je najbolje u proces krenuti od izlaza prema ulazu. Neke stvari ćemo u startu morati da predpostavimo ili postavimo kao unapred zadate, pa ćemo recimo odlučiti da gradimo pojačalo koje radi u klasi AB i treba da postigne 50W RMS na opterećenju od 8 oma. Potrebno je da prvo odredimo vršnu vrednost napona na izlazu odnosno na zvučniku i to računamo kao:

$$
 Uo_peak = \sqrt2 * \sqrt50 * 8 = 28,2V
$$

$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$
