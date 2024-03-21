---
title: "CALOR-Gold"
date: 2024-03-18
description: "Vrhunsko pojačalo u A-klasi"
draft: false
tags: ["CALOR-Gold"]
weight: 10
---
## Vrhunsko pojačalo u A-klasi
<hr>
{{< load-photoswipe >}}
{{< gallery caption-effect="fade" >}}
  {{< figure src="./gallery/CALOR-Gold/CALOR-Gold - Pločica (hifistor).jpg" caption="CALOR-Gold - Pločica (hifistor)" >}}
  {{< figure src="./gallery/CALOR-Gold/CALOR-Gold - Testiranje (hifistor).jpg" caption="CALOR-Gold - Testiranje (hifistor)" >}}
  {{< figure src="./gallery/CALOR-Gold/CALOR-Gold - Pločica (maxwell007).jpg" caption="CALOR-Gold - Pločica (maxwell007)" >}}
  {{< figure src="./gallery/CALOR-Gold/CALOR-Gold - Ugradnja (maxwell007).jpg" caption="CALOR-Gold - Ugradnja (maxwell007)" >}}
  {{< figure src="./gallery/CALOR-Gold/CALOR-Gold - Kućište (maxwell007).jpg" caption="CALOR-Gold - Kućište (maxwell007)" >}}
{{< /gallery >}}
<hr>

*CALOR-Gold* je izlazno pojačalo snage najvišeg kvaliteta dizajnirano tako da zadovolji i najrafiniranije ukuse audiofila. Pojačalo radi u takozvanoj **"klasi A"** i ova snažnija verzija "Gold" proizvodi 40W snage na opterećenju od 8 oma. CALOR-Gold je apsolutno uporediv po osobinama sa gotovo bilo kojim drugim pojačalom HiEnd klase te snage. Da bi se postigle te osobine, a imajući na umu prirodu rada pojačala u klasi A, od presudne važnosti je da se za CALOR-Gold obezbedi odgovarajući izvor napajanja kao i dovoljno efikasno hlađenje. O tim potrebama ćemo govoriti kasnije u ovom uputstvu.

### Sklapanje Modula

Počnite sklapanje tako što će te se prvo dobro upoznati sa šemom, pločicom i rasporedom na njoj. To je veoma važno iako na prvi pogled može izgledati trivijalno, a to posebno važi za manje iskusne graditelje jer dobro poznavanje rasporeda na pločici bitno smanjuje mogućnost greške. Pri tom podrazumevamo da ste već dovoljno vešti u prepoznavanju i “čitanju” vrednosti elemenata. Za postavljanje elemenata koristite i strogo se pridržavajte rasporeda prikazanog na slici rasporeda elemenata. Ona je prikazana onako kako se to vidi gledano sa strane komponenata.

Najzgodnije je gradnju započeti sa ugradnjom otpornika. Razmak rupa predviđen za većinu otpornika je 10mm, a DALE otpornici korišćeni u našim KIT-ovima imaju nešto veće kućište od standardnog, pa je potrebno saviti im nožice odmah po izlasku iz kućišta. po postavljanju otpornika pređite na ugradnju blok kondenzatora. Njih treba postaviti tako da sasvim naležu donjom stranom na pločicu. Inače je kod svih komponenata bitno da im ne ostavljate dugačke izvode tj. da ih ne montirate tako da daleko odstoje od pločice. Za pouzdan rad je važno da izvodi komponenata budu što kraći! Kod obe prethodne vrste komponenata polaritet tj. način na koji ste okrenuli komponentu, nije bitan, ali kod komponenti koje sada slede to je veoma važno! Nakon otpornika i blok-kondenzatora ugrađujte male elektrolitske kondenzatore strogo pazeći na njihov polaritet i orijentaciju na pločici. Na kućištima svih elektrolitskih kondenzatora uvek je jasno odštampan polaritet time što je označena negativna (minus) nožica. Postavite svaki elektrolit na pločicu ali pre nego ga zalemite ponovo proverite da li je okrenut kako treba! Posle elektrolita ugradite i dva višeobrtna trimer-potenciometra. Oni se već iz fabrike isporučuju sa klizačem postavljenim negde na sredini hoda i ne bi ih trebalo dirati jer su ti klizači upravo u potrebnom položaju za prvo uključenje. Za svaki slučaj, pre ugradnje proverite ommetrom da se kod oba trimera između srednje nožice i obe krajnje meri pribložno po pola ukupne vrednosti otpora tog trimera. Ako treba, dodatno podesite da bude tako i tek onda ih ugradite. Time su sve pasivne komponente osim velikih elektrolitskih kondenzatora postavljene na pločicu. Ti se veliki elektroliti ugrađuju na kraju jer je pločicom lakše rukovati dok njih nema na njoj.

Sledeći korak je ugradnja poluprovodničkih komponenata i sada je potrebna dodatna pažnja jer su svi poluprovodnici “polarisani” tj. kod njih nije nimalo svejedno kako ste ih okrenuli i koja nožica ide u koju rupu! Ako ovde napravite grešku velike su šanse da trajno oštetite komponentu a sasvim je sigurno da vam uređaj neće proraditi. Uz to je vrlo moguće da jedna pogrešno okrenuta komponenta dovede već kod prvog uključenja, do pregorevanja mnogih drugih komponenti iako su one možda i dobro postavljene! Na pločici postoje četiri diode i to dve manje signalne i dve nešto veće Zener diode. Sve su one u staklenim kućištima i budite pažljivi prilikom savijanja njihovih nožica i nikada to ne radite uz samo stakleno kućište! Diode imaju na svom kućištu bojom otisnut i jedan prsten koji je uvek bliže jednom kraju. Taj kraj diode je katoda i položaj tog prstena se mora poklapati sa položajem na simbolu diode na gornjoj strani pločice. Male tranzistore ugradite tako da njihova donja površina bude udaljena od plocice oko 2 do 3mm tj. oni zbog razmaka rupa ne mogu (i ne treba!) da se spuste sve do površine plocice. Njihove nožice formirajte kao na donjoj slici. Pazite i da se ravna strana kućišta tranzistora poklapa sa ravnom stranom na simbolu tranzistora na gornjoj površini pločice. Izvode svih elemenata treba skraćivati tek pošto su zalemljeni i to na nivou vrha kupe od kalaja kojim su zalemljeni. Lemljenje ne sme trajati dugo pogotovo kada lemite poluprovodnike!

Predviđeno je da se veliki izlazni MOSFET-ovi nalaze ispod nivoa pločice pa se na pločicu postavljaju malo drugačije nego sto je to uobičajeno. Ovo je verovatno najkomplikovaniji deo procedure pa treba da ga obavite sa najvećom pažnjom i preciznošću da bi izbegli kasnije probleme u funkcionisanju uređaja!

Prvo je potrebno da pažljivo savijete njihove (prilično krute) izvode pod uglom od 90 u stranu na kojoj su oznake elementa tj. suprotnu od one na kojoj je metalna pločica koja ide prema hladnjaku. Postoji nešto širi deo izvodnih nožica odmah po njihovom izlasku iz plastičnog kućišta i u tom delu ne bi trebalo savijati već to treba učiniti odmah na početku suženog dela nožica kao na sledećoj slici.

<p>{{< paige/image alt="Legs" class="rounded-2" src="./images/Legs.png" title="Legs" >}}</p>

> Budući da su lemne tačke nožica izlaznih MOSFET-ova fizički nedostupne kada su i oni a i pločica pričvršćeni na hladnjak, neophodno je da se njihovo lemljenje obavi pre toga. Mora se paziti na nekoliko stvari istovremeno:
- zadnje strane MOSFET-ova, na kojima je metalna površina, moraju biti sve međusobno paralelne i pri tom u isto vreme paralelne i sa površinom pločice
- udaljenost te zadnje površine MOSFET-ova od donje površine plocice na kojoj su bakarni vodovi treba da je 10mm zato što ćete kod montaže pločice koristiti na njenim uglovima odstojnike koji su upravo dužine 10mm

Da bi ovo izveli što tačnije i jednostavnije, pomoći će sami MOSFET-ovi. Kako? Vrlo je zgodno što je njihova debljina upravo 5mm (IRFP FET-ovi) te ako stavite dva jedan na drugi, dobićete obe stvari od jednom: i paralelnost sa pločicom (a samim tim i međusobno!) i tačnu distancu do pločice. U ovoj fazi ne žurite već to odradite precizno. Biće jasnije ako pogledate sledeću sliku:

<p>{{< paige/image alt="Legs PCB" class="rounded-2" src="./images/LegsPCB.png" title="Legs PCB" >}}</p>
