---
title: "IZLAZNA IMPEDANSA I DAMPING FAKTOR AUDIO POJAČALA"
date: 2024-03-18
description: "Osnovni pojmovi"
paige:
  math: true
draft: false
tags: ["IZLAZNA IMPEDANSA I DAMPING FAKTOR AUDIO POJAČALA"]
weight: 10
---
## Osnovni pojmovi

Nedavno sam u formi *E-maila* dobio nekoliko **pisama** sa više-manje sličnom sadržinom koja su se odnosila na određivanje izlazne impedanse i damping faktora audio pojačala, pa je bilo jasno da postoji potreba da se i ta tema obradi i postavi ovde kako bi svima bila dostupna (i kako bih sebe poštedeo odgovaranja svakome ponaosob!).

> Merenje izlazne impedanse pojačala nije u suštini ni teško ni komplikovano. Za taj postupak je potrebno nekoliko stvari koje bi svako ko se bavi samogradnjom u audio tehnici i inače trebalo da već ima. To su:
- Pojačalo koje se testira
- Audio Signal-generator ili bilo kakav drugi izvor kvalitetnog sinusnog audio signala sa mogućnošću fine promene izlaznog nivoa (može i kvalitetna zvučna kartica iz PC-a uz odgovarajući softver)
- Otpornik takve otpornosti koja odgovara impedansi zvučnika koji će se kasnije koristiti. Dakle, oko 8 oma mada to ne mora baš fanatično tačno biti 8 oma. Snaga mora biti barem 10W ili više! Može (i najbolje je) da to bude paralelna kombinacija više otpornika tako da se dobije 8 oma (recimo 15 komada od 120 oma/2W vezani paralelno = 8 oma/30W).
- Audio-voltmetar ili noviji digitalni "univerzalni" instrument, ali je poželjno da to bude jedan od onih na kojima piše "TRUE RMS"

> To bi od prilike bilo sve što je potrebno, a sama procedura je prilično jednostavna i teče ovim tokom:
- Uključite i izvor signala i pojačalo barem desetak minuta pre merenja da se "stabilišu". Još uvek ih nemojte međusobno povezivati! Na izlaz pojačala se NISTA ne priključuje! ZA SADA!
- Za to vreme što preciznije izmerite otpornost onog otpornika tj. "veštačkog opterećenja". Nemojte se oslanjati na prost račun prema vrednosti koja piše na otporniku nego stvarno izmerite zbog mogućih tolerancija!!! Recimo da ste izmerili tačno 8,00 oma.
- Na zvučnički izlaz pojačala postavite audio-voltmetar na opsegu od recimo 10V
- Podesite "Volume" na pojačalu na oko 1/3 snage, povežite ga sa signal-generatorom koji treba da podesite negde na 100 do 200Hz i polako podižite njegov izlazni nivo dok audio-voltmetar ne očita recimo 5..6.. do 10V. Nije kritično koliko ali je "zgodno" da podesite na neku "okruglu" vrednost. Neka to za ovaj proračun bude 7VRMS. Taj napon zabeležite kao "U1".
- Ne gaseći ništa i ne dirajući nivoe i podešavanja, samo prekinite signal na ulazu pojačala
- Sada na izlaz pojačala vežite otpornik a na ulaz ponovo pustite signal iz generatora
- Povežite audio-voltmetar paralelno tom otporniku ("veštačkom opterećenju") i izmerite što tačnije napon u tom momentu i zabeležite kao "U2"i recimo da ste izmerili 6,94V. Ovaj napon bi svakako MORAO da bude malo niži od "U1".
- Sada možete da izračunajte struju kroz opterećenje kao:
  
$$
 I_{opt} = \frac{U^2} {R} = \frac{6,94} {8} = 0,8675A
$$

- Izračunajte i razliku napona U1 i U2 kao:

$$
 U_{raz} = U1 - U2 = 0.06V
$$

- Iz svega što ste do sada izračunali možete izračunati izlaznu impedansu pojačala kao:

$$
 Z_{izl} =  \frac{U_{raz}} {I_{opt}} = \frac{0,06V} {0,8675A} = 0,069Ω = 69 mΩ
$$

Sve ovo vam najčešće treba da biizračunali takozvani "damping faktor" pojačala koji se računa tako što se impedansa zvučnika podeli sa izlaznom impedansom pojačala. Dakle ako na ovo pojačalo priključite zvucnik od 8 oma "damping faktor" će biti:

$$
 D_{f} = \frac{Z_{zv}} {Z_{izl}} = \frac{8} {0,069} = 115,94 &ensp;tj. &ensp;približno &ensp;116
$$

ali to važi na toj frekvenci na kojoj ste vršili merenja. Damping faktor se menja sa frekvencom i najveći je na najnižim frekvencama!!! Zato je pošteno za damping faktor navesti na kojoj frekvenci je meren.

### Savet

Nemojte mnogo patiti oko "damping faktora"! Postoje zablude da je on važan u smislu: kao on drži pod kontrolom bas zvučnik... kao nešto ga prigušuje... neda da bude "mlitav" bas nego čvrst i "definisan"...itd. itd. To je čista glupost i NIJE TAČNO!!! To bi značilo da bi pojačalo sa izlaznom impedansom "0 oma" (takvo ne postoji) imalo POTPUNU kontrolu nad pokretima membrane zvučnika?!?!? Ako pojačalo sa takvom impedansom apsolutno kontroliše svaki pokret membrane, probajte da otkačite pojačalo i kleme bas zvučnika nakraćim putem direktno kratkospojite komadom debele bakarne žice. Pa ne može biti bliže željenih "0 oma" nego što je to parče od nekoliko santimetara. Trebalo bi da ne možete da rukom pomerite membranu zvučnika ako je gurate unutra ili izvlačite upolje!!! Probajte! Shvatićete o čemu pričam. Moramo polako da brišemo lažne "istine" i zablude, a ova nije jedina! Pa kakvu to kontrolu onda imaju "lampaška" pojačala kad ni jedno nema damping faktor bolji od oko 10 a kod većine se kreće oko 1..2..3.. retko do 5!

<p style="color: red;" class="text-center">Oni koji nemaju a žele da sebi naprave vrlo kvalitetan audio-milivoltmetar mogu šemu takvog instrumenta naći na ovom <a href="##">LINKU</a>. Ja sam instrument urađen po ovoj šemi koristio godinama!</p>
