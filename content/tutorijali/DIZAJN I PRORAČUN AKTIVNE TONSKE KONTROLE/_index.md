---
title: "DIZAJN I PRORAČUN AKTIVNE TONSKE KONTROLE"
date: 2024-03-18
description: "Osnovni proračun"
paige:
  math: true
draft: false
tags: ["DIZAJN I PRORAČUN AKTIVNE TONSKE KONTROLE"]
weight: 10
---
## Osnovni proračun

U *najvećem* broju **slučajeva** se između izvora signala i izlaznog audio pojačavačkog stepena nalazi neka vrsta predpojačala sa kontrolom "boje tona". Neki moderni trendovi i njihovi sledbenici zagovaraju potpuno i bezuslovno izbacivanje bilo kakve tonske korekcije sa opravdanjem da je to jedini način da se čuje "originalan" zvuk. To je takva ordinarna glupost da po meni nije vredna čak ni najobičnijeg objašnjenja, ali ću ja ipak to uraditi zbog onih mlađih koji ovakvim tvrdnjama vrlo lako mogu biti teško obmanuti. Na žalost, mnogi već jesu...

> Ovakve tvrdnje bi bile tačne ISKLJUČIVO I SAMO pod sledećim uslovima:
- U toku celog procesa snimanja u studiju i kasnijih faza u toku produkcije sve do momenta završetka izrade (na primer CD-a) nije vršena nikakva tonska korekcija
- Audio sistem koji koristite (CD plejer, pojačalo, zvučnici..... ) su apsolutno takvog kvaliteta da ni na koji način ne menjaju bilo koji parametar audio signala koji slušate
- Prostorija koja služi za slušanje ima idealan oblik i dimenzije, zvučnici su idealno postavljeni u odnosu na prostoriju i njen sadržaj, ostatak stvari u prostoriji (zidovi, zavese, nameštaj, police, tepisi, prozori..... itd.) ne vrše nikakve apsorpcije, rezonanse, refleksije ili refraksije signala
- Vi ste izuzetan i vrlo reprezentativan primerak ljudske vrste sa potpuno fiziološki pravilnom krivuljom sluha

Ako bilo šta od ovoga nije ispunjeno, trebaće vam tonska korekcija, ili će te morati da nađete način da sebe (a to je vrlo lako) ali i druge ubedite da je to što tog momenta slušaju bez obzira kako zvuči, upravo originalni zvuk jer ide "direktno" tj. ne prolazi kroz bilo kakvu tonsku kontrolu u vašem sistemu. Ne... u 99,9% slučajeva, ne poneki već NI JEDAN od gore navedenih uslova nije u potpunosti ispunjen (a mnogi ni približno a kamoli potpuno!). Ne dajte da vam ispiraju mozak pseudo-majstori i samozvani Hi-Fi "guru"-i ! Dovoljan je običan zdrav razum da vam kaže šta je tu istina a šta ne! Trebalo bi da je suština u tome da VAŠE UŠI čuju original a ne da vaš CD-plejer, pojačalo i zvučnici reprodukuju original, jer čak i da to postignu, zvuk koji stiže do vasih ušiju može biti mnogo, mnogo drugačiji!

U globalu, tonske kontrole se dele na pasivne i aktivne. Pasivne su one kontrole koje su, generalno uzevši, postavljene paralelno između toka signala i mase i nisu sastavni deo nikakve povratne sprege. One rade kao naponski delitelji za naizmenični (audio) signal i u suštini UVEK samo više ili manje oslabljuju signal. To što će te na prednjoj ploči takvih uređaja naći oko potenciometra baždareno i srednji položaj tj. "nulu" i potiskivanje i izdizanje samo je privid, jer i kod najbolje urađene pasivne boje tona imate u bilo kom položaju potenciometra UVEK I SAMO potiskivanje signala. "FLAT" položaj kod ovakve tonske kontrole u stvari nije kad su potenciometri na sredini tj. u "nuli" već kada su i "bass" i "treble" sasvim na maksimumu!!! Zato se kod ovakve tonske kontrole, da bi baždarenje oko potenciometara na prednjoj ploči bilo ispravno, mora iza tonske korekcije nalaziti još jedan što linearniji pojačavački stepen da nadoknadi tačno onoliki gubitak signala koliki postoji kada se kontrole nalaze na sredini tj. "nuli". Ovakav tip tonske kontrole će te najčešće naći kod "lampaških" i starijih tipova poluprovodničkih predpojačala. Po meni, nemaju nikakvih prednosti nad aktivnim kontrolama pa se ovde neću dalje njima baviti.

Aktivne tonske kontrole su one kod kojih se elementi kontrole nalaze u petlji povratne sprege nekog pojačavačkog stepena. Kod modernih predpojačala su to stepeni sa tranzistorima ili u poslednje vreme skoro isključivo sa operacionim pojačavačima u formi integrisanih kola. Najčešće viđana varijanta ovakve aktivne tonske kontrole je takozvani "Baxandall" spoj i to njegova malo modifikovana varijanta, popularno poznata kao "Amerikanizovana" verzija "Baxandall"-a. Njena principijelna šema i prilično idealizovan grafik frekventne karakteristike je data na sledećoj slici:

<p>{{< paige/image alt="Tonska Kontrola" class="rounded-2" src="./images/Tone3.png" title="Tonska Kontrola" >}}</p>

$$
 f_{L} = \frac{1} {2\Pi * R_{2} * C_{1}}   &emsp;&emsp;&emsp;  f_{H} = \frac{1} {2\Pi * R_{3} * C_{3}}
$$

$$
 f_{LB} = \frac{1} {2\Pi * R_{1} * C_{1}}   &emsp;&emsp;&emsp;  f_{HB} = \frac{1} {2\Pi * (R_{1} + R_{3} + 2R_{5}) * C_{3}}
$$

$$
 A_{VB} = 1 + \frac{R_{2}} {R_{1}}   &emsp;&emsp;&emsp;    A_{VT} = 1 + \frac{R_{1} + 2R_{5}} {R_{3}}
$$

$$
 podrazumeva &ensp;se &ensp;R_{2} \gg R_{1}   &emsp;&emsp;&emsp;    podrazumeva &ensp;se &ensp;R_{4} \gg R_{1} + R_{3} + 2R_{5}
$$

Na vrlo niskim frekvencama su impedanse kondenzatora veoma visoke pa praktično možemo smatrati kao da i nisu prisutni u šemi. Dakle, zamislite istu šemu samo bez C1, C2, i C3. Ako C3 "ne postoji" to praktično znači da klizač "Treble" potenciometra R4 (regulacija visokih tonova) nije nigde vezan pa okretanje tog potenciometra ne utiče na naponsko pojačanje sklopa koje se označava sa "Av", koje će tada zavisiti samo od položaja klizača "Bass" potenciometra i iznosiće:

$$
  A_{VB} = \frac{R_{1} + R_{2}} {R_{1}} &emsp; (maksimalno &ensp;izdizanje &ensp;basova)
$$

$$
 \frac{1} {A_{VB}} = \frac{R_{1}} {R_{1} + R_{2}} &emsp; (maksimalno &ensp;potiskivanje &ensp;basova)
$$

Nasuprot tome, na vrlo visokim frekvencama će vrednosti impedansi kondenzatora biti dovoljno male da ih možemo smatrati kao kratak spoj. Tada će sva tri izvoda "Bass" potenciometra R2 praktično biti kratko spojeni pa njegovo okretanje neće uticati na pojačanje, već će ono tada zavisiti od položaja klizača "Treble" potenciometra i iznosiće:

$$
 A_{VT} = \frac{R_{1} + R_{3} + 2R_{5}} {R_{3}} &emsp; (maksimalno &ensp;izdizanje &ensp;visokih)
$$

$$
 \frac{1} {A_{VT}} = \frac{R_{3}} {R_{1} + R_{3} + 2R_{5}} &emsp; (maksimalno &ensp;potiskivanje &ensp;visokih)
$$

Za detaljnije razumevanje ovih procesa bi trebalo izvršiti takozvane "ipsilon-delta" transformacije (kod nas ih zovu i "zvezda-trougao"), ali pošto smatram da vam za praktičnu upotrebu i razumevanje takav nivo detalja nije potreban, neću se ni upuštati u to. Jedino je još važno napomenuti da bi vrednost R4 trebalo da je barem 10 puta (ili više) veća od zbira R3+R1+2R5. Bez daljeg ulaženja u detalje, evo i formula za izračunavanje ostalih komponenata:

$$
 C_{1} = \frac{1} {2\Pi * R_{1} * f_{LB}}   &emsp;&emsp;&emsp;    podrazumeva &ensp;se &ensp;R_{2} \gg R_{1}
$$

$$
 R_{2} = \frac{1} {2\Pi * C_{1} * f_{L}}
$$

$$
 C_{3} = \frac{1} {2\Pi * R_{3} * f_{H}}
$$

$$
 R_{5} = \frac{1} {2} * \left(\frac{1} {2\Pi * C_{3} * f_{HB}} - R_{1} - R_{3}\right)
$$

Tačni odnosi između fL i fLB kao i fH i fHB su nešto kompleksniji nego što se to na prvi pogled čini. Ove frekvence u stvari predstavljaju +-3dB tačke u odnosu na sredinu i krajnje pozicije. Gornji grafikon predstavlja frekventnu karakteristiku prosečne tonske kontrole sa recimo +-20dB maksimalne regulacije, i tu možete lepo videti odnose tih frekvenci. Ovaj grafik je prilično idealizovan i stvarna slika će biti sa nešto zaobljenijim prelomnim tačkama. Takođe, prema tom grafiku se čini da je u središnjem delu karakteristike, sudeći po onom ravnom delu, pojačanje 1 što u stvarnosti neće biti tako već je u tom delu opsega oko +-2dB. To je zbog blizine "polova" i "nula" u prenosnoj karakteristici, i upravo iz istog tog razloga ni nagib krivulja neće biti kao što bi se očekivalo +-6dB po oktavi već nekih +-4dB po oktavi. Znajući da su fL od fLB kao i fH od fHB udaljeni po magnitudi 14dB a nagib karakteristike je 4dB po oktavi mogu se između tih frekvenci izvesti sledeći odnosi:

$$
 \frac{f_{LB}} {f_{L}} = \frac{f_{H}} {f_{HB}}  \gg 10
$$

### Praktičan proračun

> U želji da sve ovo bude što jasnije kao i način kako sve to pretočiti u praksu, evo i jednog celokupnog praktičnog proračuna. Pošao sam od nekih zadatih vrednosti prema svojoj želji (arbitrerne vrednosti) a to su:
- Maksimalno izdizanje i potiskivanje i dubokih i visokih je 15dB
- fL i fH tačke su na 50Hz odnosno na 10KHz

$$
 Odaberite &ensp;da &ensp;je &ensp;R_{2} &ensp;= &ensp;47k &ensp;(arbitrerna &ensp;vrednost)
$$

$$
 A_{VB} = 1 + \frac{R_{2}} {R_{1}} = 5,62 &ensp;(15dB)
$$

$$
 iz &ensp;toga &ensp;je:
$$

$$
 R_{1} = \frac{R_{2}} {A_{VB} - 1} = \frac{47k} {5,62 - 1} = \frac{47k} {4,62} = 10,17k \gg 10k
$$

$$
 Odaberemo &ensp;da &ensp;je  &ensp; f_{L} = 50Hz
$$

$$
 sledi &ensp;da &ensp;je &ensp;f_{LB} = 10 f_{L} = 500Hz = 0,5kHz
$$

$$
 a &ensp;onda &ensp;računamo:
$$

$$
 C_{1} = C_{2} = \frac{1} {2\Pi * R_{1} * f_{LB}} = \frac{1} {6,28 * 10k * 0,5kHz} = \frac{1} {31,4}
$$

$$
 C_{1} = C_{2} = 0,032μF \gg 33nF
$$
