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
 P_{Dis} = 0,1 * \frac{U_B^2} {R_Z} = 0,1 * \frac{36^2} {8} + 16,2W
$$

i to je disipacija po jednom tranzistoru. Ne sme se zaboraviti da zbog rada u AB klasi kroz tranzistor protiče i mirna struja, pa pošto je ona retko kada preko 100mA i uz napon od 36V dobijamo dodatnu disipaciju pri mirnoj struji od nekih 3,6W koju treba dodati na 16,2W pa možemo zbir zaokružiti na oko 20W disipacije po tranzistoru. Uz veliki izbor tranzistora koji danas stoje na raspolaganju, nebi trebalo da bude teško da se nađe odgovarajući par.

Za određivanje parametara pobudnih (drajverskih) tranzistora T3 i T4 moramo poći od predpostavke da je strujno pojačanje izlaznih tranzistora 30 što je sasvim realna pa čak i skromna vrednost kod današnjih izlaznih tranzistora. Podrazumevajući tu vrednost, možemo izračunati maksimalne kolektorske struje drajvera kao:

$$
 I_{DR} = \frac{Io_{peak}} {β_iz} = \frac{3,5} {30} = 0,116A = 116mA
$$

pa za sigurnost treba uzeti tranzistore sa barem dva puta većom strujom, dakle recimo 250mA, a još bolje je odabrati i nešto višu vrednost što neće biti problem za moderne drajverske tranzistore. Za maksimalni napon kolektor-emiter treba i za drajvere odabrati isti kao i za izlazne tranzistore, dakle oko 90V. Pošto rade na praktično istom naponu kao i izlazni, njihova će disipacija biti onoliko manja koliko je manja nihova struja od struje izlaznih tranzistora tj. umanjena za strujno pojačanje " β " izlaznih tranzistora. Dakle:

