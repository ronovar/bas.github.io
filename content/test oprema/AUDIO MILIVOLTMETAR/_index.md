---
title: "AUDIO MILIVOLTMETAR"
date: 2024-03-18
description: "Instrument za mjerenje naizmjeničnog audio signala"
draft: false
tags: ["AUDIO MILIVOLTMETAR"]
weight: 10
---
## Predpojačalo

*Audio-milivoltmetar* je jedan od onih pratećih ali **nezamenjljivih** instrumenata u laboratoriji svakog iole ozbiljnijeg samograditelja. Istina, većina današnjih boljih "digitalnih univerzalaca" je vrlo sposobna da vrši slična merenja naizmeničnog signala u gotovo celom audio opsegu, a posebno su za tu svrhu rađeni takozvani "True RMS" tipovi instrumenata. Ako ipak nemate takav, dobro će poslužiti i jedan napravljen po ovoj šemi koju sam uradio još dosta davno i takvim se instrumentom koristio godinama. Upoređivan je u više navrata sa fabričkim laboratorijskim instrumentima istog tipa i nije nikada pravio grešku veću od 2-2,5%, a ako ga pažljivo uradite poštujući vrednosti na šemi i logičan raspored, zadovoljiće sve vaše potrebe za merenjem audio signala sve do nekih 100KHz, što je za amaterske potrebe više nego dovoljno.

Šema je sasvim jednostavna i korišćena su dva FET-operaciona pojačavača CA3140 koji su tada (kada je ovo konstruisano) bili vrhunski integralci, a danas su već sasvim obični i gotovo svuda nabavljivi. Oba pojačavača su spojeni kao neinvertujući pojačavači i prvi ima naponsko pojačanje 30 dok je drugi vezan kao strujni drajver za instrument koji mu se inače nalazi u petlji negativne povratne sprege. Razlog za ovakvo rešenje je da se tako postiže poništavanje nelinearnosti i naponski padovi diodnog mosta na izlazu. U mostu su korišćene Germanijumske diode i to nemojte menjati ako hoćete da zadrzite širinu opsega. Ona četvrta dioda paralelno instrumentu može i treba da bude Silicijumska. Tu je i elektrolit od 1000uF čija je uloga da spreči "oscilovanje" tj. poskakivanje igle instrumenta kada merite signal jako niske frekvence. Njegova vrednost može biti i manja i odredite je eksperimentalno kada vam gotov instrument proradi kako treba. Mereći signal na 50Hz ili čak i na 20Hz, počnite sa 10uF i menjajte vrednost sve dok igla na instrumentu ne stoji mirno bez poskakivanja. Nemojte ni preterati jer će pokazivanje postati "tromo" sa prevelikom vrednosću ovog elektrolita.

Uz drugi integralac postoje i dva trimer-potenciometra. Onaj od 10k služi za podešavanje nultog pokazivanja instrumenta kada su ulazne priključnice kratko-spojene. Trimer od 1k služi za kalibraciju. Da bi vam instrument bio dovoljno tačan, MORATE se držati tačnih vrednosti otpornika u ulaznom delitelju. Ti se otpornici nalaze na samom preklopniku i rasporedite ih tako da budu što dalje jedni od drugih ali ipak sa što kraćim nožicama.

Za one koje "mrzi" da posebno baždare skalu instrumenta dajem jedno od mogućih rešenja na donjoj slici. Odštampajte i umanjite sliku prema vašim potrebama odnosno veličini skale vašeg instrumenta.

<p>{{< paige/image alt="Skala mVAC" class="rounded-2" src="./images/Skala AC-mV.png" title="Skala mVAC" >}}</p>

Kalibracija instrumenta je takođe prilično jednostavna i jedino što vam treba je da od nekoga na kratko pozajmite drugi što tačniji audio-milivoltmetar ili (takođe što tačniji) audio signal-generator. Podesite izvor signala na 1KHz i izlazni nivo na 3mV. Ako taj generator nije u stanju da se dovoljno precizno podesi na tako mali nivo, podesite ga na 775mV odnosno 0dB. Postavite za početak oba trimer-potenciometra u srednji položaj. Uključite milivoltmetar, postavite preklopnik opsega na "OFF" (ulaz je tada praktično kratko-spojen) i podesite sa trimerom od 10k da instrument pokazuje tačno nulu na levoj strani "mV/V" skale. Ako za kalibraciju koristite izlazni nivo iz generatora od 3mV, postavite preklopnik opsega na "3mV" i podesite trimerom od 1k da instrument pokazuje tačno broj "3" na donjoj skali. Ako koristite nivo od 0dB (775mV), postavite preklopnik opsega na "1V" i podesite trimerom 1k da instrument pokaže tačno "0" ali na gornjoj "dB" skali. Time je podešavanje-kalibracija završena. Tačnost svih opsega će sada zavisiti SAMO od tačnosti otpornika koje ste koristili u ulaznom delitelju!

> Neke od osnovnih karakteristika ovog instrumenta su:
- Ulazna impedansa - 1M/V paralelno sa ~15pF na opsegu 3mV (~7pF na ostalim opsezima)
- Frekventni opseg - 5Hz-100KHz (+-0,5dB)
- Rezidualni šum manji od ~200uV pri otvorenom (ali oklopljenom) ulazu
- Potrošnja struje oko 5-6mA iz svake baterije

<p style="color: red;" class="text-center">Ako ste manje iskusni u gradnji audio uređaja, preporučujem da pogledate neka uputstva u TUTORIJALIMA.</p>
