---
title: "DC-DC SMPS"
date: 2024-03-18
description: "(ulaz 12VDC, izlaz 2x±30 do ±80VDC/ oko 600W max)"
draft: false
tags: ["DC-DC SMPS"]
weight: 10
---
## (ulaz 12VDC, izlaz 2x±30 do ±80VDC/ oko 600W max)

Prevashodna *namena* ovog **pretvarača** je napajanje snažnih pojačala u automobilu što je već neko vreme prava "moda" posebno među mlađim vlasnicima automobila. Sa standardnih 12V napona, auto-akumulator nije idealan izvor za audio pojačalo ako ono treba da bude velike snage. Danas se već standardno "traži" da takva pojačala za auto imaju 150..200W pa i više a to se na 12V jednostavno neda izvesti bez obzira na impedansu zvučnika (u praktičnim okvirima). Rešenje je u podizanju jednosmernog napona ili još tačnije na pretvaranju jednostrukog 12V napona u dva dosta viša i simetrična jednosmerna napona u opsegu od oko ±30V do oko ±80V. Sa takvim izvorom napajanja više nije problem napraviti snažno pojačalo jer se može koristiti svaka standardna šema.

Tako je nastao ovaj pretvarač koji u osnovi radi u prekidačkom režimu koji je široko korišćen u mnogim oblastima elektronike i poznat je pod imenom SMPS što je skračenica od "Switch Mode Power Supply" ili po naški "Izvor napajanja u prekidačkom režimu rada". Po istom ovom principu rade i sva kompjuterska napajanja i napajanja za velika profesionalna ozvučenja. Zato će vam i šema izgledati vrlo poznato jer u ovoj oblasti i nije baš moguće uvek i mnogo izmišljati nove "rupe na saksiji". Sve je tu već više manje poznato i rađeno pa ni ja nisam mnogo filozofirao. Odavno postoje specijalizovana integralna kola za ovu namenu i ja sam se odlučio za TL494 koje baš i nije novijeg datuma ali je skoro svuda nabavljivo i vrlo pouzdano.

> Gradnju ovog pretvarača ne bih savetovao manje iskusnim graditeljima (mada to ne znači da im nebi uspelo) jer ovakav uređaj traži prilično iskustva iako se šema može učiniti relativno jednostavna. Ovde ču dati samo nekoliko ključnih napomena:
- Ja sam za transformator koristio Filipsovo feritno jezgro ETD49 pa će te morati sami da eksperimentišete sa brojevima navoja ako koristite jezgro sa drugačijim karakteristikama. Jezgro ETD49 je probano do 600W snage pojačala i nije bilo problema a verujem da bi moglo i više. Za njega treba u primaru namotati BIFILARNO 2x3 navoja a za svaku "žicu" sam koristio po tri komada 1,8mm CuL trafo-žice. Kada namotate primar prekrijte ga sa dva-tri sloja bele Teflonske trake (vodoinstalaterske, na koturu kao selotejp) pa preko toga, opet bifilarno motajte sekundar. Debljina žice i broj navoja sekundara će zavisiti od veličine izlaznog napona i snage koja vam treba. Pošto je odnos broja navoja primara i sekundara upravno proporcionalan odnosu njihovih napona, neće biti problem da to preračunate ali će te verovatno morati još malo da praktično eksperimentišete zbog dodatnih gubitaka. Debljina žice sekundara će zavisiti od snage pojačala (jer će od toga zavisiti jačina struje) i za potrošnju od oko 200W pa naviše, svakako ne bi trebalo da je tanja od oko 1,2mm (jednostruka žica).
- Izlazne prigušnice od 23-25uH su zajedno motane na jednom toroidnom (prstenastom) NEOSID jezgru model 17-745-22 i to kao takozvana "kompenzovana" prigušnica, gde jedna prigušnica zauzima jednu polovinu torusa a druga ide na drugu polovinu ali su motane u suprotnom smeru tako da se flux koji pravi jedna polovina poništava flux-om druge polovine da nebi došlo do zasićenja jezgra. Svaka prigušnica ima po 14 navoja žice 1,5mmCuL.
  <p style="color: red;">Ja ne znam koje bi evropsko jezgro odgovaralo ovom Neosidovom koje sam ja koristio (ovo sam radio dok sam živeo u inostranstvu i tada mi je taj toroid bio na raspolaganju!), pa molim bilo koga ko eventualno poređenjem pronađe odgovarajuće jezgro da mi se javi da bih taj podatak mogao ovde da dodam kao pomoć eventualnim graditeljima!!!</p>
- Diode koje čine izlazni Grec (mostni ispravljač) MORAJU biti brže i za struju od oko 15Amp i 200-600V. Takođe, tada su mi diode MUR1560 bile na raspolaganju, ali bi umesto njih mogle mnoge druge. Poželjno je da su u TO220 kućištu ili nekom sličnom radi boljeg hlađenja. Trebalo bi da odgovaraju i neke kao što su BYV32/200 ili BYV42/200.
- 6 kondenzatora od po 10uF između sredine primara trafoa i mase se montiraju i leme sa iste strane pločice kao i ostali elementi samo što za njih ne treba bušiti rupice već se direktno leme između dva vrlo široka paralelna bakarna voda.
- Pazite na kablove i veze koje vode velike ulazne struje, jer se pri velikim snagama pojačala, iz akumulatora tada "vuče" i 60 Ampera!!!
- Bimetalni termo-prekidač se montira na hladnjak na kome su prekidački FET-ovi.

<p style="color: red;" class="text-center">Ako ste manje iskusni u gradnji audio uređaja, preporučujem da pogledate neka uputstva u TUTORIJALIMA.</p>
