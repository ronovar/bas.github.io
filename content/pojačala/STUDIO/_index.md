---
title: "STUDIO"
date: 2024-03-18
description: "Pojačalo visoke dinamike"
draft: false
tags: ["STUDIO"]
weight: 10
---
## Pojačalo visoke dinamike

<hr>
{{< load-photoswipe >}}
{{< gallery caption-effect="fade" >}}
  {{< figure src="./gallery/STUDIO/STUDIO - Pločica (nonick).jpg" caption="STUDIO - Pločica (nonick)" >}}
  {{< figure src="./gallery/STUDIO/STUDIO - Testiranje (nonick).jpg" caption="STUDIO - Testiranje (nonick)" >}}
  {{< figure src="./gallery/STUDIO/STUDIO - Kućište (nonick).jpg" caption="STUDIO - Kućište (nonick)" >}}
  {{< figure src="./gallery/STUDIO/STUDIO - Zadnja Strana (nonick).jpg" caption="STUDIO - Zadnja Strana (nonick)" >}}
{{< /gallery >}}
<hr>

Ovo je *jedan* **visoko** kvalitetan izlazni stepen izuzetne dinamike i vrlo ubedljiv u svim delovima frekventnog opsega. Najčešće je korišćen kao master pojačalo za kućni studio ali i kao master monitor za profesionalna studija. Fantastično zvuči sa Tannoy-Monitorima, ali je i vrlo "definisan" sa večinom drugih zvucnika.

Dizajn je prilično standardan, i ako poštujete specifikaciju materijala sa šeme, imaćete jedno stvarno dobro pojačalo sa kojim se nećete postideti sem uz bas vrhunske High-End mašine.

Odgovarajuće predpojačalo sa tonskom kontrolom čete naci u odeljku "PREDPOJAČALA" pod imenom "PreStudio". Svakako da će i mnoga druga predpojačala (ako su dovoljno kvalitetna) završiti posao kako treba.

> PAŽNJA!!!
> Na šemi nema nekih delova koji se nalaze na pločici a to su:
- dva elektrolita od 220μF/63V
- dva bloka od 100nF (paralelno ovim elektrolitima)
- dva osigurača od 4 Amp

Takođe, na ploćici se ne nalazi sklop za zaštitu jer se u praksi pokazalo da ona delimično utiče na izobličenje (u negativnom smislu), pa je sa pločice izostavljena.

"ZOBEL" komponente (10 oma u seriji sa 100nF) na izlazu za zvučnik se ne nalaze na pločici već se stavljaju direktno na izlazne kleme za zvučnike na zadnjoj ploči pojačala.

{{< file-download title="download" file="STUDIO">}}

## STUDIO - III (Bootstrap pojačalo visoke dinamike)

Pre izvesnog vremena je do mene došla i jedna nova ideja u vrlo lepoj analizi šeme Studio pojačala koju je uradio "ILIMZN" sa Hrvatskih foruma. Znajući o kakvom visokom "kalibru" čoveka i elektroničara se radi, odmah me je zainteresovalo ali i isto tako odmah osvojila njegova ideja da se bootstrap-uje polarizacija aktivne diode u prvim stepenima trostrukog CFP u izlazu. Nisam o tome nikad razmišljao jer se sklop savršeno i bez toga ponaša a ja nisam sklon da baš često razmišljam o ekstremnim graničnim uslovima rada kao što su klipovanje i rad sa jako reaktivnim opterećenjima jer ne smatram da pojačala treba da ikada rade u takvim uslovima. Iako je ideja veoma duhovita i skoro da bode oči (a ja je nisam video dok je ILIMZN nije pomenuo?!) u praksi se radi o zameni otpornika od 6k8 (koji kod originalne verzije polariše aktivnu diodu) sa bootstrap sklopom koji se sastoji od (u svakoj grani napajanja) dva seriski vezana otpornika od 3k3 i elektrolita od oko 220 do 470uF sa njihovog spoja na zvučnicki izlaz.

- {{< file-download title="download" file="STUDIO - III">}}
- 
> PAŽNJA!!!
> Obratite pažnju koji je dati na rasporedu pločice pojačala:
- Na rasporedu su dodani novi dodatni kondenzatori od 220uF(C19 i C20) i moraju biti od 160V kao i blokovi C21 i C22 od 100nF koji su paralelni tim elektrolitima.
- Predviđen je REMOTE SENSE (dva dodatna kabla RS+ i RS- koji se spajaju direktno na sam zvučnik i tako anuliraju uticaj kablova. Dakle, imamo dva standardna kabla do zvučnika označena na rasporedu SPK i SPK GND i ta dva dodatna kabla koji ne treba da budu tako velikog prečnika kao SPK i SPK GND. Ta dva dodatna kabla idu direktno na kutijum, ne sme na buksne pojačala jer je njihov uticaj da anuliraju greške glavnih kablova do zvučnika.
- Ukoliko se ne želi REMOTE SENSE, umesto R3 i R13 stavljaju se kratkospajači.
- Zobela(10ohma+100nF) nema na pločici i mora se staviti na kleme pojačala.

- {{< file-download title="download" file="STUDIO - III (viktor1986)">}}

<p style="color: red;" class="text-center">Ako ste manje iskusni u gradnji audio uređaja, preporučujem da pogledate neka uputstva u TUTORIJALIMA.</p>
