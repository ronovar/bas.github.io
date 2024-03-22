---
title: "LOW THD AUDIO GENERATOR"
date: 2024-03-18
description: "Vrhunski generator sa veoma malim izobličenjima"
draft: false
tags: ["LOW THD AUDIO GENERATOR"]
weight: 10
---
## Vrhunski generator sa veoma malim izobličenjima
<hr>
{{< load-photoswipe >}}
{{< gallery caption-effect="fade" >}}
  {{< figure src="./gallery/LOW THD AUDIO GENERATOR/LOW THD AUDIO GENERATOR - Pločica (HomeMadeAudioProject).jpg" caption="LOW THD AUDIO GENERATOR - Pločica (HomeMadeAudioProject)" >}}
  {{< figure src="./gallery/LOW THD AUDIO GENERATOR/LOW THD AUDIO GENERATOR - Ugradnja (HomeMadeAudioProject).jpg" caption="LOW THD AUDIO GENERATOR - Ugradnja (HomeMadeAudioProject)" >}}
  {{< figure src="./gallery/LOW THD AUDIO GENERATOR/LOW THD AUDIO GENERATOR - Prednja Strana (HomeMadeAudioProject).jpg" caption="LOW THD AUDIO GENERATOR - Prednja Strana (HomeMadeAudioProject)" >}}
  {{< figure src="./gallery/LOW THD AUDIO GENERATOR/LOW THD AUDIO GENERATOR - Zadnja Strana (HomeMadeAudioProject).jpg" caption="LOW THD AUDIO GENERATOR - Zadnja Strana (HomeMadeAudioProject)" >}}
{{< /gallery >}}
<hr>

*Samograditelji* i **konstruktori** kvalitetnih audio uređaja imaju u toku rada potrebe za dobrim izvorom signala promenjljive frekvence i nivoa. Za većinu "običnijih" poslova i situacija, posao će savršeno odraditi Generator Funkcija koji se takođe nalazi ovde na mom sajtu. Međutim, kada se radi baš vrhunski uređaj biće u završnim testovima neophodan takav izvor signala čije je izobličenje manje od očekivanog izobličenja testiranog sklopa. Pomenuti Generator Funkcija u tim slučajevima ne zadovoljava, pa ovde donosim šemu jednog visoko-kvalitetnog audio generatora koji radi u opsegu od 15Hz do 150kHz, proizvodi na izlazu sinusni i četvrtast oblik signala do maksimalnog nivoa od 3V RMS koji je uz to i kontinualno promenjljiv. Ono što je najvažnije i što ga izdvaja od drugih takvih izvora signala su veoma niska izobličenja koja na 1kHz ne prelaze 0,003%, a rastu na 0,018% na 20Hz tj. 0,01% na 100kHz. Da bi se postigle ovakve karakteristike neophodno je sve vrlo pažljivo i kvalitetno uraditi ali i koristiti stvarno najkvalitetnije komponente i držati se striktno specifikacije materijala sa šeme.

Kao i veliki broj sličnih uređaja, i ovaj radi na principu Wien-ovog mosta. U osnovi se radi o visoko-kvalitetnom "operacionom" pojačavaču urađenom u diskretnoj tehnici koji ima visoko pojačanje i kome je na ulaz jednom frekventno zavisnom mrežom dovedena pozitivna povratna sprega sa izlaza prouzrokujući oscilacije na "pseudo-rezonantnoj" frekvenci te mreže. Na toj frekvenci signal sa izlaza se kroz mrežu vraća na ulaz bez ikakvog faznog pomaka i skoro bez slabljenja što prouzrokuje nastajanje oscilacija.

Podešavanje uređaja je vrlo jednostavno i svodi se na podešavanje mirne struje izlaznog stepena na vrednost od 5mA trimer-potenciometrom "BIAS" od 2k. Merite pad napona na oba izlazna otpornika od 22 oma (dakle između emitera izlaznih tranzistora) i taj napon treba da je 220mV. Izlazni nivo se podešava tako što se potenciometar 1k "IZLAZNI NIVO" postavi na maksimum, preklopnik izlaznog atenuatora se postavi na polozaj 3V i tada se trimer-potenciometrom 2k "PODEŠAVANJE IZLAZNOG NIVOA" podesi da na izlazu bude tačno 3V RMS na frekvenci od 1kHz.

Na izlazu za "četvrtku" se dobija savršeno čist i pravilan i veoma "brz" četvrtasti signal koji ima Slew-Rate bolji od 300V/μS odnosno vreme porasta i pada vertikalnih ivica je manje od 20nS. Ovime se mogu testirati i najbrža audio pojačala jer je jako malo njih sa Slew-Rate boljim od 300V/μS.

<p style="color: red;" class="text-center">Ako ste manje iskusni u gradnji audio uređaja, preporučujem da pogledate neka uputstva u TUTORIJALIMA.</p>
