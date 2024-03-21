---
title: "STUDIO-SE"
date: 2024-03-18
description: "Pojačalo visoke dinamike"
draft: false
tags: ["STUDIO-SE"]
weight: 10
---
## Pojačalo visoke dinamike

<hr>
{{< load-photoswipe >}}
{{< gallery caption-effect="fade" >}}
  {{< figure src="./gallery/STUDIO-SE/STUDIO-SE - Pločica (viktor1986).jpg" caption="STUDIO-SE - Pločica (viktor1986)" >}}
  {{< figure src="./gallery/STUDIO-SE/STUDIO-SE - Kućište (viktor1986).jpg" caption="STUDIO-SE - Kućište (viktor1986)" >}}
  {{< figure src="./gallery/STUDIO-SE/STUDIO-SE - Napajanje (viktor1986).jpg" caption="STUDIO-SE - Napajanje (viktor1986)" >}}
  {{< figure src="./gallery/STUDIO-SE/STUDIO-SE - Prednja Strana (viktor1986).jpg" caption="STUDIO-SE - Prednja Strana (viktor1986)" >}}
  {{< figure src="./gallery/STUDIO-SE/STUDIO-SE - Zadnja Strana (viktor1986).jpg" caption="STUDIO-SE - Zadnja Strana (viktor1986)" >}}
{{< /gallery >}}
<hr>

*Prošlo* je **dovoljno** vremena od kad se prva verzija Studia pojavila na sajtu, i ovaj je dizajn našao svoje mesto u srcima i planovima jednog broja samograditelja. Sada je bilo vreme da se pokuša na doradi dizajna, ali moram priznati da se to uglavnom dogodilo na sugestije i nagovor drugih, a ne nekom mojom spontanom inicijativom.

Pokazalo se da u svojoj oceni da se radi o stvarno visoko kvalitetnom pojačalu, nisam mnogo preterao i da Studio ima još potencijala koje sam ovim modifikacijama pokušao da iz njega izvučem. Značajnih izmena osnovne koncepcije gotovo da i nema. Izlazni par je zamenjen mojim omiljenim Sanken-čokoladicama 2SC3264/2SA1295 mada napominjem da će bez ikakvih izmena u izlaznom stepenu raditi i tipovi u TO264 kućistu a ponajpre ONsemi-jevi MJL4281A/MJL4302A ili MJL21193/MJL21194 ali i još niz drugih.

Jedan od većih dobitaka bi trebalo da bude odvajanje napajanja ulaznog/VAS dela i izlaznog dela. Napon napajanja za oba dela je isti ali se napajanje ulaza obavlja preko kapacitivnih množitelja. Takodje značajnija izmena je i izbacivanje klasičnih zičanih keramičkih otpornika u emiterima izlaznih tranzistora. Njih je zamenila kombinacija 10 paralelno vezanih Metal Film otpornika od 1/2W 1% tako da se dobio otpornik koji po svemu apsolutno parira najskupljim egzotičnim i relativno teško nabavljivim VISHAU ili DALE komponentama. Jedino treba uložiti još malo rada da se ovakvi otpornici naprave na malim pomoćnim pločicama. Sasatavljeni "emiterski otpornici" bi trebalo da izgledaju kao na sledećoj slici.

<p>{{< paige/image alt="Emit-Res" class="rounded-2" src="./images/Emit-Res.png" title="Emit-Res" >}}</p>

Ovu novu verziju StudioSE do danas (08April2008) još niko nije praktično sklopio i testirao, tako da dole navedene karakteristike potiču od prve verzije, ali treba oćekivati još bolje rezultate!

### Specifikacije
<hr>
{{< paige/quote >}}
85W/8Ω<br>(pri 80% izlazne snage)<br>***Prosečna izlazna snaga***
{{< /paige/quote >}}

{{< paige/quote >}}
4Hz - 73kHz<br>(pri 80-90% snage i THD ispod 0.02%)<br>***Frekventni opseg snage***
{{< /paige/quote >}}

{{< paige/quote >}}
<0.003%<br>(20Hz-16KHz), 0.008% na 20KHz<br>***THD***
{{< /paige/quote >}}

{{< paige/quote >}}
<0.002%<br>(pri 80% izlazne snage)<br>***TIM***
{{< /paige/quote >}}

{{< paige/quote >}}
50V/μS<br>(pri 80% izlazne snage)<br>***Slew rate***
{{< /paige/quote >}}

{{< paige/quote >}}
&#62;300<br>(pri 80% izlazne snage)<br>***Damping faktor***
{{< /paige/quote >}}
<hr>

<p style="color: red;" class="text-center">Ako ste manje iskusni u gradnji audio uređaja, preporučujem da pogledate neka uputstva u TUTORIJALIMA.</p>
