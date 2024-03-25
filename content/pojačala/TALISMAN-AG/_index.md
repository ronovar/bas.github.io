---
title: "TALISMAN-AG"
date: 2024-03-18
description: "High-End thermaltrak pojačalo"
draft: false
tags: ["TALISMAN-AG"]
weight: 10
---
## High-End thermaltrak pojačalo

<hr>
{{< load-photoswipe >}}
{{< gallery caption-effect="fade" >}}
  {{< figure src="./gallery/TALISMAN-AG/TALISMAN-AG - Pločica (ziki).jpg" caption="TALISMAN-AG - Pločica (ziki)" >}}
  {{< figure src="./gallery/TALISMAN-AG/TALISMAN-AG - Komplet Napajanje (ziki).jpg" caption="TALISMAN-AG - Komplet Napajanje (ziki)" >}}
{{< /gallery >}}
<hr>

U *procesu* rešavanja ovog **prototipa**, pojačalo je doživelo tri potpuno različite verzije i četiri redizajniranja pločice dok se nije došlo do zadovoljavajućih rezultata. Na žalost, počev' od prošlog leta nemam više mogućnosti da koristim kvalitetne instrumente za neka završna merenja, tako da detaljnije i sveobuhvatnije tehničke podatke za sada ne mogu da dam. Ono što sam mogao da izmerim je izlazna snaga od 104W na opterečenju 8 oma bez klipovanja i vidljivih znakova izobličenja na osciloskopu. Pojačalo je sposobno da proizvede punu snagu na 90kHz (istina probano sasvim kratkotrajno... dve-tri sekunde).

Zvuči izvanredno ali ja i inače nisam sklon preteranom glorifikovanju svojih uređaja, tako da će više značiti ocena onih koji ga jednom eventualno budu sebi uradili.

Ne savetujem manje vešte ili manje iskusne da se prihvataju ovog dizajna jer je vrlo zahtevan. Za pune rezultate apsolutno je neophodno savršeno uparivanje poluprovodnika - posebno u ulaznom delu, kao i korišćenje što kvalitetnijih ostalih komponenti. To je sve i finansijski vrlo zahtevno ali smatram da rezultat dobijen na kraju opravdava i ulaganja i onaj dodatak imenu "AG" što je skraćeno od "Audiofil Grade".

Ugrađena dioda je u tako dobrom termalnom kontaktu sa substratom ugrađenog tranzistora da apsolutno momentalno uspeva da odrazi temperaturne promene u toku rada. Nema ni jednog drugog standardnog načina niti komponente kojima bi "tracking" tj. praćenje temperaturnih promena moglo da se izvede sa većom preciznošću i manjom vremenskom zadrškom. Šema iz ONsemi-jeve brošure je vrlo trapavo urađena, ali je zato izvanredno duhovito rešenje dao veliki majstor R.Cordell na DIY Audio forumu. Upravo njegovo rešenje sam i koristio u Talismanu (jer je bilo dosta bolje od bilo čega što je meni do tog momenta palo na pamet!) i ukupna mirna struja se održava u granicama od -2mA do +3mA u odnosu na nominalno podešenu (300mA) u opsegu temperature hladnjaka od +20*C pa do +70...75*C.

O preciznijem uticaju na neke tehničke karakteristike koje pominju u brošuri, ne mogu govoriti jer zbog hendikepa sa nedostatkom adekvatnih mernih instrumenata nisam bio u mogućnosti da takva merenja provedem. Jedina (PO MENI!) eventualna mana je prilično komplikovanje pločice da bi sve bilo gde treba a vodovi razumno kratki. Izlazne tranzistore hteo-nehteo moraš razmestiti dovoljnim razmacima da bi se dobro hladili ali to za sobom povlači velika rastojanja između dioda ugrađenih u njih... pa onda imaš na umu brzinu i granične frekvence modernih komponenata i mogućnost oscilovanja i "skupljanja" svega i svačega iz okoline... Ta "mala mana" je pojela dosta sati mozganja i vrtenja okolo u programu za dizajn, raznih koncepcija pločice dok nisam došao do finalnog rešenja.

### Specifikacije
<hr>
{{< paige/quote >}}
100W RMS/8Ω<br>(pri 80% izlazne snage)<br>***Prosečna izlazna snaga***
{{< /paige/quote >}}

{{< paige/quote >}}
3Hz - 90kHz<br>(pri 80-90% snage)<br>***Frekventni opseg snage***
{{< /paige/quote >}}

{{< paige/quote >}}
<0.06%<br>(20Hz-20KHz)<br>***THD***
{{< /paige/quote >}}

{{< paige/quote >}}
&#62;110dB<br>(20Hz-20KHz)<br>***Odnos signal/šum***
{{< /paige/quote >}}

{{< paige/quote >}}
200V/μS<br>(pri 80% izlazne snage)<br>***Slew rate***
{{< /paige/quote >}}
<hr>

{{< file-download title="download" file="TALISMAN-AG">}}

{{< file-download title="download" file="TALISMAN-AG PSU">}}

{{< file-download title="download" file="TALISMAN-AG AC">}}

<p style="color: red;" class="text-center">Ako ste manje iskusni u gradnji audio uređaja, preporučujem da pogledate neka uputstva u TUTORIJALIMA.</p>
