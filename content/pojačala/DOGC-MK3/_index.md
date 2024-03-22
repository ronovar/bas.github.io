---
title: "DOGC-MK3"
date: 2024-03-18
description: "Current dumping audio pojačalo"
draft: false
tags: ["DOGC-MK3"]
weight: 10
---
## Current dumping audio pojačalo
<hr>
{{< load-photoswipe >}}
{{< gallery caption-effect="fade" >}}
  {{< figure src="./gallery/DOGC-MK3/DOGC-MK3 - Pločica (nonick).jpg" caption="DOGC-MK3 - Pločica (nonick)" >}}
  {{< figure src="./gallery/DOGC-MK3/DOGC-MK3 - Testiranje (nonick).jpg" caption="DOGC-MK3 - Testiranje (nonick)" >}}
  {{< figure src="./gallery/DOGC-MK3/DOGC-MK3 - Mosfeti (nonick).jpg" caption="DOGC-MK3 - Mosfeti (nonick)" >}}
  {{< figure src="./gallery/DOGC-MK3/DOGC-MK3 - Driveri (nonick).jpg" caption="DOGC-MK3 - Driveri (nonick)" >}}
{{< /gallery >}}
<hr>

*Ovaj* dizajn pomalo **neobične** topologije potiče u izvornom obliku od jednog bugarskog dizajnera koji se na internacionalnom DIY Audio forumu javlja pod imenom Widowmaker. Imao sam utisak da se njegov osnovni dizajn može još poboljšati i to sam najzad uspeo pa evo objavljujem rezultate tog rada. Ovaj dizajn smatram svojim jer je početna šema do te mere modifikovana da se na kraju dobio sasvim nov dizajn koji samo podseća na osnovni.

Osnova ove topologije mnogo poznatije kao "Current Dumping" potiče od radova P.J. Walkera i M.P. Albinsona iz davne 1974 god. mada prava osnova seže jos mnogo dalje u prošlost tačnije u 1929 god. i američi patent #1.686.792 koji je dobio Harold Black za ideju "feed forward error correction". Walker i Albinson su tu ideju dalje praktično razvili i prvi put je komercijalno upotrebili u nekada (ali i danas jos uvek) čuvenom pojacalu "QUAD-405". Dosta toga se o svemu ovome moze nači na NET-u pa na te izvore upučujem one koji bi da nešto više saznaju.

Za one koji žele da to prvo naprave i poslušaju, donosim ovde sve potrebne fajlove za samogradnju MOJE verzije DOGC pojačala. Mali kuriozitet je da ovo pojačalo nema ni podešavanje simetrije ni podešavanje mirne struje. Sve je već koncepcijski rešeno i to se automatski postavlja na pravu meru ako je pojačalo tačno urađeno i sa kvalitetnim komponentama. O simetriji se brine DC-servo sklop sa LF411. Sam izlazni stepen NEMA nikakvu mirnu struju tj. radi u klasi C. Drajveri pak rade u čistoj klasi A i predviđena je njihova mirna struja od oko 330mA što deluje prilično veliko ali sam ja baš tako i hteo. Naime, želeo sam da kod prvih nekiliko vati snage pojačalo radi u klasi A i tada praktično rade samo drajveri, a tek kod većih snaga počinju da im pomažu izlazni tranzistori. Tu mirnu struju drajverskog para određuje paralelna veza otpornika od 3,9 oma u sorsu IRF530 koji zajedno sa malim BC550 pretstavlja izvor konstantne struje.

Iako izlazni tranzistori nemaju nikakvu mirnu struju, hladnjak za ovo pojačalo treba vrlo dobro dimenzionisati jer se drajveri "solidno" greju a kod većih snaga kada i izlazni budu "upregnuti" počinju i oni da značajno doprinose ukupnoj temperaturi hladnjaka. Tri mala IRFD110 MOSFET-a se takođe pomalo greju te im je potrebno staviti mali hladnjak kao na slici mog prototipa. Taj sam hladnjak isekao sa jednog veceg IC-a sa neke stare matične ploče kompjutera. U izlazu mogu bez izmena biti korišćeni i neki drugi (možda lakše nabavljivi) tranzistori kao MJL4281A/4302A ili MJL21193/21194 ili 2SC5200/2SA1943. Blok kondenzator od 220pF (sa što kraćim izvodima) se lemi ispod pločice direktno na D i G ulaznog IRFD110.

Pojačalo zvuči izuzetno dobro i vrlo je stabilno u radu. Dajte mu dobre hladnjake i izdašan sistem napajanja i nećete ni zažaliti ni postideti se što ste ga napravili.

### Specifikacije
<hr>
{{< paige/quote >}}
oko 70 - 80W/8Ω<br>(74W na mom prototipu)<br>***Prosečna izlazna snaga***
{{< /paige/quote >}}

{{< paige/quote >}}
10Hz - 100kHz<br>(-1dB (pri 5W RMS i THD<0.008%))<br>***Frekventni opseg snage***
{{< /paige/quote >}}

{{< paige/quote >}}
<0.012%<br>(70W/1KHz/8Ω)<br>***THD***
{{< /paige/quote >}}

{{< paige/quote >}}
<0.007%<br>(20Hz-20kHz/80%snage)<br>***TIM***
{{< /paige/quote >}}
<hr>

## DOGC-H

<hr>
{{< load-photoswipe >}}
{{< gallery caption-effect="fade" >}}
  {{< figure src="./gallery/DOGC-MK3/DOGC-H - Pločica (nonick).jpg" caption="DOGC-H - Pločica (nonick)" >}}
  {{< figure src="./gallery/DOGC-MK3/DOGC-H - Testiranje (nonick).jpg" caption="DOGC-H - Testiranje (nonick)" >}}
{{< /gallery >}}
<hr>

Veliki broj ljudi je do sada uradio DOGC-MK3 i jedan broj njih je, iako veoma zadovoljan, ipak poželeo da DOGC ima više snage i da može sa lakoćom da radi i na nižim impedansama od 8 oma. To sam im sada ispunio o dizajnirao modifikaciju koja to omogućava i nazvao je DOGC-H. Ono dodatno "H" bi značilo High Power. Da bi se dimenzije pločice zadržale u razumnim granicama, kao izlazni tranzistori su predviđeni ONsemi u TO264 kučištu jer bi sa Sanken tranzistorima širina pločice bila prevelika. Uneseno je još nekoliko izmena neophodnih zbog paralelnog vezivanja dodatnog para tranzistora. Dva spoljna otpornika za napajanje sklopa sa LF411 koji su kod MK3 bili 3k3/2W , u ovoj verziji treba da su 3k9/2W zbog višeg napona napajanja.

<p style="color: red;" class="text-center">Ako ste manje iskusni u gradnji audio uređaja, preporučujem da pogledate neka uputstva u TUTORIJALIMA.</p>

