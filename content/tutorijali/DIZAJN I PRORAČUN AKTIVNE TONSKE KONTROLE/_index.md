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
