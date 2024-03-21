---
title: "STANDARD"
date: 2024-03-19
description: "Standardno audio pojačalo"
draft: false
tags: ["STANDARD"]
weight: 10
---
## Standardno audio pojačalo
<hr>
{{< load-photoswipe >}}
{{< gallery caption-effect="fade" >}}
  {{< figure src="./gallery/STANDARD/STANDARD - Pločica (nonick).jpg" caption="STANDARD - Pločica (nonick)" >}}
  {{< figure src="./gallery/STANDARD/STANDARD - Ugradnja (nonick).jpg" caption="STANDARD - Ugradnja (nonick)" >}}
  {{< figure src="./gallery/STANDARD/STANDARD - Kućište (nonick).jpg" caption="STANDARD - Kućište (nonick)" >}}
  {{< figure src="./gallery/STANDARD/STANDARD - Prednja Strana (nonick).jpg" caption="STANDARD - Prednja Strana (nonick)" >}}
  {{< figure src="./gallery/STANDARD/STANDARD - Zadnja Strana (nonick).jpg" caption="STANDARD - Zadnja Strana (nonick)" >}}
{{< /gallery >}}
<hr>

*"Standard"* je jedan sasvim običan ali vrlo **dobar** izlazni stepen manje snage za vrlo različite namene. Šema je vrlo standardna i naći će te na NET-u barem još desetak vrlo, vrlo sličnih. Gotovo da ne može biti jednostavnije konstrukcije i po tome je sličan "Legend"-u, mada je od njega ipak nešto skromniji po svim parametrima. I pored toga ja ga smatram veoma vrednim pažnje posebno za one koji žele da steknu prva iskustva u gradnji audio pojačala. Za početak, "Standard" je više nego dobrog kvaliteta, veoma je lak i jednostavan za izradu i što je najvažnije, toliko pouzdan da je potrebno stvarno "mnogo veštine" pa da vam ne proradi od prve!!! Da neko ne bi na osnovu ovih prvih redova pomislio kako je ovo neko "početničko" pojačalo, dovoljno je da pogleda na kraju karakteristike.

Pojačalo je stvarno jednostavno za izradu i sasvim nekritično kad je u pitanju izbor delova, ali je kao i uvek, preporučljivo da što manje odstupate od specifikacije! Mirnu struju izlaznih tranzistora treba podesiti trimerom od 500 oma na oko 50-55mA. Osigurači su za 1,8 do 2Ampera. Napon napajanja se može podići do +/-42..43V (MAKSIMALNO!!!)bez promena komponenata pa je tada moguće koristiti mrežni trafo sa 2x30V AC na sekundaru što je jedna od standardnih vrednosti. Takođe se bez izmena ostatka šeme može paralelno postojećem izlaznom paru dodati još jedan par. Tada se i baze i kolektori vezuju direktno na postojeće tranzistore ali emiteri dodatnog para moraju imati svoje zasebne otpornike od 0,47 oma pa dakle treba još 4 takva otpornika. Snaga ce svakako biti veća (ali ne duplo kako bi se očekivalo!) a dobija se i mogućnost postizanja značajno veće snage na opterećenju od 4 oma.

<hr>
Za one koje to zanima, u toku razvoja ovog pojačala, postojala je i jedna prilično neobična verzija sa jednostrukim napajanjem koja takođe izuzetno lepo radi, čak ništa lošije od Standarda. Mnogi će pomisliti da postoji greška u crtanju ulaznog stepena, ali će pogrešiti jer je to komplementarni diferencijalni stepen dakle sa jednim NPN i jednim PNP tranzistorom a ne kako smo navikli sa dva tranzistora istog tipa. Kod ovog rešenja ne može biti razlike u strujama ova dva tranzistora jer sva struja koja prodje kroz jedan mora proci i kroz drugi. Ima i nekih drugih specifičnosti i ovu šemu sam ovde uvrstio više kao informaciju mada se oni koji se odluče da rade po toj šemi sigurno neće prevariti i razočarati. Za nju nisam posebno razrađivao pločicu, ali nema problema da i to odradim na nečiji zahtev.<br>

<p style="color: red;" class="text-center">Ako ste manje iskusni u gradnji audio uređaja, preporučujem da pogledate neke od TUTORIJALA na početnoj stranici Audio Projekata!!!</p>

### Specifikacije
<hr>
{{< paige/quote >}}
50 - 60W RMS/8Ω<br>(pri 80% izlazne snage)<br>***Prosečna izlazna snaga***
{{< /paige/quote >}}

{{< paige/quote >}}
500 - 600mV<br>(za punu snagu)<br>***Ulazna osetljivost***
{{< /paige/quote >}}
  
{{< paige/quote >}}
15Hz - 45KHz<br>(pri 80% izlazne snage)<br>***Frekventni opseg snage***
{{< /paige/quote >}}

{{< paige/quote >}}
0.07%<br>(na 1KHz i 45W RMS)<br>***THD***
{{< /paige/quote >}}

{{< paige/quote >}}
15V/μS<br>(pri 80% izlazne snage)<br>***Slew rate***
{{< /paige/quote >}}

{{< paige/quote >}}
&#62;80<br>(pri 80% izlazne snage)<br>***Damping faktor***
{{< /paige/quote >}}
<hr>
