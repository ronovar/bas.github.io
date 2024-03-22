---
title: "OMNI PROTECTOR"
date: 2024-03-18
description: "Univerzalni zaštitni sistem"
draft: false
tags: ["OMNI PROTECTOR"]
weight: 10
---
## Univerzalni zaštitni sistem

<hr>
{{< load-photoswipe >}}
{{< gallery caption-effect="fade" >}}
  {{< figure src="./gallery/OMNI PROTECTOR/OMNI PROTECTOR - Pločica (nonick).jpg" caption="OMNI PROTECTOR - Pločica (nonick)" >}}
{{< /gallery >}}
<hr>

*OMNI-protektor* je **univerzalni** zaštitni sistem za izlazne stepene audio pojačala, i prvenstveno je razvijen za potrebe visoke i High-End klase pojačala ali je apsolutno podjednako upotrebljiv za gotovo svako pojačalo koje radi sa takozvanim "split" napajanjem (+V 0 -V).

> Obuhvaćeni su svi u praksi važni parametri zaštite tako da OMNI sadrži:
- zaštitu od prevelike struje i preopterečenja izlaznih komponenata
- zaštitu od oštećenja usled nestanka jedne od grana napajanja
- zaštitu od kratkog spoja na zvučniku ili zvučničkom kablu
- zaštitu od priključenja zvučnika niže impedanse od dozvoljene (zadate)
- kašnjenje priključenja zvučnika u momentu uključenja pojačala

<p style="color: red;" class="text-center">::::::::::: U nekim podvarijantama, uglavnom rađenim za snažna profi ozvučenja, OMNI je sadržavao još neke zaštite kao što su kontrola prisutnosti i simetričnosti izvora za napajanje, kontrola temperature nekoliko tačaka (hladnjaci, trafo, grec) sa komandovanjem rada ventilatora itd. itd. :::::::::::</p>

Za večinu potreba će i ova standardna varijanta sasvim zadovoljiti pa sam se ovde za nju i odlučio. Da bih olakšao snalaženje manje iskusnim graditeljima, data je i šema povezivanja OMNI-protektora na neko standardno stereo pojačalo i njegov ispravljač.

OMNI je napravljen tako da bude što fleksibilniji što se tiče napajanja svojih sklopova jer treba da radi uz vrlo različite izlazne stepene sa različitim naponima napajanja. Vrednosti date na šemi odgovaraju za napon napajanja od oko +-56V a ako koristite drukčije napone moraćete malo da eksperimentišete i promenite neke vrednosti otpornika da sve prilagodite drukčijem naponu. Radi se o otpornicima od 3k9/1W sa kontakata broj 2, 5, 13 i 14 kao i o otporniku Rx u seriji sa namotajem releja i 4k7 u seriji sa LED diodom. SVE OSTALO OSTAJE ISTO !!!

### Pažnja !!!

<p style="color: red;" class="text-center">Date su dve verzije pločice, prva potpuno odgovara šemi i tu je predviđeno da se radni rele (ili releji) ne nalazi na pločici, dok druga verzija ima dva releja na samoj pločici kao i 24V stabilizator za njihovo napajanje koji inače ne postoji na šemi. U ovoj drugoj verziji takođe nema izvoda broj 15 i 16 jer nisu ni potrebni budući da su ti vodovi već izvedeni na samoj pločici a ne treba ni koristiti izvod broj 11 jer je i ta veza već na pločici. Kod ove pločice napajanje LED diode NE treba vezati na +Vcc već na stabilizovanih 24V sa kojim se napajaju i releji. Ovaj stabilizator TREBA da ima hladnjak!!! Takođe su na ovoj pločici predviđena mesta i za izlazne zavojnice ali se tu po potrebi mogu staviti i kratkospojnici u koliko su te zavojnice već predviđene da budu na pločicama samih izlaznih stepena.</p>

<p>{{< paige/image alt="Omni Protektor Regulator 24V" class="rounded-2" src="./images/Omni Protektor Reg-24V.png" title="Omni Protektor Regulator 24V" >}}</p>

Jedino što bi možda moglo da malo komplikuje stvari je potreba da se na pločicu dovede oko 7...8V NAIZMENIČNOG napona ali vrlo male struje. To je najbolje izvesti tako da se pri izradi glavnog transformatora predvidi i namota i taj mali pomoćni namotaj, ali se taj napon može dobiti i sa postojećeg sekundara (koji je obično za mnogo viši napon) uz upotrebu odgovarajućeg otpornika koji se mora eksperimentom odrediti. Sve ovo služi za stvaranje malog pomoćnog negativnog napona za rad OMNI-protektora, ali se taj negativni napon NE SME dovesti sa visokog negativnog napona iz glavne negativne grane napajanja pojačala, jer taj mali pomoćni negativni napon mora u momentu isključenja pojačala da isto tako MOMENTALNO nestane, a napon u negativnoj grani napajanja pojačala će zbog povelikog elektrolita ostati prisutan još neko vreme po isključenju pojačala!!!

Ulaz označen kao "accessory input" je pomoćni kontrolni ulaz na koji se može dovesti bilo kakva dodatna spoljna kontrola od nekakvih sezora ili nečeg drugog. Jednostavno rečeno, bilo šta spolja priključeno što taj ulaz kratkospoji na masu će aktivirati OMNI zaštitu i releji neće uključiti zvučnike.

Ako vaše pojačalo ima ugrađen OMNI-protektor, uvek ga prvo isključite ako hoćete da bilo šta menjate u sistemu zvučnika i zvučničkih kablova.<p style="color: red;">NIKADA nemojte priključivati ili otkačinjati zvučnike ili kablove dok pojačalo radi !!!!!!!!!!!!!!!!!!!!!</p>


