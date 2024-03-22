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
 Uo_{peak} = \sqrt2 * \sqrt{50*8} = 28,2V
$$

<p class="text-center">a takođe i vršnu vrednost struje koju dobijamo kao:</p>

$$
 Io_{peak} = \sqrt2 * \sqrt\frac{50}{8} = 3,5A
$$

Da bi izračunali potreban napon napajanja moramo još proceniti i dodatne padove napona na R1, T2, T4, T5 i R5. Za R1, T2 i T4 se može računati da im je ukupan propusni napon oko 2V. Pri maksimalnoj negativnoj amplitudi kolektorskog napona može se na T5 i R5 računati sa po 1,5V tj. zajedno ukupno oko 3V. Takođe ne treba zaboraviti da se većina pojačala napaja iz nestabilisanog ispravljača kome će (čak i kada je vrlo izdašno dimenzionisan) napon pri punom opterećenju verovatno padati za barem 2,5V. Zbir svih ovih napona će nam dati potreban napon napajanja negativne polovine ispravljača (kada nema pobude) koji će iznositi:

$$
 -U_B = 28,2 + 2 + 3 + 2,5 = 35,7V (\approx36V)
$$

<p class="text-center">pa će nam isto toliko trebati i u pozitivnoj grani, što znači da ispravljač na svom izlazu treba da obezbedi +- 36V jednosmernog napona bez opterećenja.</p>

Uzimajući u obzir sve što smo do sada izračunali, možemo odabrati odgovarajuće izlazne tranzistore. Znajući da je vršna vrednost kolektorske struje 3,5A odabraćemo za sigurnost tranzistore kojima je dozvoljena vršna struja barem dva puta veća, pa će odgovarati svi kojima je taj parametar 7...10A. Maksimalan napon između kolektora i emitera izlaznog tranzistora je u momentu kada njemu komplementarni tranzistor ima punu pobudu, i taj napon je tada

$$
 Uo_{peak} + U_B = 28,2 + 36 = 64,2V
$$

<p class="text-center">Za sigurnost treba ovoj vrednosti dodati barem još 30%, pa dakle treba odabrati tranzistore kojima je Uce barem 90V.</p>

<p class="text-center">Još jedan parametar je bitan kod određivanja izlaznih tranzistora a to je disipacija. Ona se računa ovako:</p>

$$
 P_{Dis} = 0,1 * \frac c d
$$


