---
title: "PINK NOISE GENERATOR"
date: 2024-03-18
description: "Generator ROZE šuma"
draft: false
tags: ["PINK NOISE GENERATOR"]
weight: 10
---
## Generator ROZE šuma

*Iako se*, generalno uzevši, šum najčešće **smatra** kao nužno zlo, u nekim slučajevima može biti i veoma koristan. U audio oblasti roze šum nam obezbeđuje signal koji ravnomerno pokriva celokupan spektar. Dakle, u njemu je sadržana svaka moguća frekvenca iz audio spektra koju možete da zamislite.

Ova vrsta šuma se karakteriše time da ima podjednaku energiju po oktavi tj. šum u opsegu od 20Hz do 40Hz ima istu energiju kao i šum u opsegu između 10KHz i 20KHz iako u donjoj oktavi ima samo 20Hz razlike a u gornjoj ima 10KHz. U elektronici postoji i druga, generička vrsta šuma i njega prirodno proizvode elektronske komponente. Taj šum se zove "Beli" Šum ili "White Noise" i za razliku od roze šuma ovaj ima podjednaku energiju po datoj širini opsega. To znači da će mu energija biti ista u opsegu od 20Hz do 10,02KHz kao i u opsegu od 10KHz do 20KHz. U osnovi, roze šum je "izveden" šum i dobija se specifičnom filtracijom od belog šuma.

Način da se to postigne vidi se na šemi. Spoj B-E tranzistora BC548 je inverzno polarisan i služi kao izvor belog šuma ali dosta niskog nivoa. Zbog toga je korišćena jedna polovina TL072 koja radi kao pojačavač koji nivo podiže oko 100 puta a frekventno je "skrojen" za opseg od 0,6Hz do 150KHz izborom kompenzacionih komponenti u povratnoj sprezi (2k2 i 100uF kao i 220K i 4,7pF). Da bi se dobio roze šum potrebno je beli šum propustiti kroz filter koji ima opadajuću karakteristiku po stopi od 3dB po oktavi ili 10dB po dekadi. Taj posao obavlja četvorostepeni pasivni filter između dva operaciona pojačavača. Potrebno je da komponente u ovom filteru budu sa što tačnijim vrednostima tj. što uže tolerancije!!! Ovako dobijeni roze šum se dodatno pojačava drugom polovinom TL072 i to 46 puta, i šalje na izlazni atenuator kojim se može izabrati da izlazni nivo bude ili 0dB ili -60dB.

Generator roze šuma se može upotrebiti na razne načine ali je verovatno najkorisniji za ujednačavanje frekventnog odziva audio sistema. Za tu svrhu će vam trebati i neka vrsta analizatora spektra mada to nije baš čest uređaj kod prosečnog audiofila. Mnogi današnji grafički ekvilajzeri imaju neku vrstu jednostavnijeg analizatora spektra koji može da posluži u tu svrhu. Svaki audio sistem ima svojih nedostataka (pod audio sistemom ja podrazumevam svu elektroniku, dakle recimo CD-plejer+predpojačalo+pojačalo+zvučnici ali i prostorija u kojoj se sluša sa svim svojim karakteristikama!!!). Uvek postoje delovi spektra koji su više ili manje potisnuti ili apsorbovani ili pak istaknuti zbog raznoraznih rezonansi same prostorije ili njenog sadržaja, a mi toga nismo ni svesni jer smo se vremenom navikli na takav zvuk i to primamo kao normalno. Prava istina se vidi tek priključivanjem ovakvog generatora i "snimanjem" odziva uz pomoć analizatora. Tada je moguće određenim intervencijama pokušati da se postigne što ravnija karakteristika celokupnog odziva sistema.
<hr>

{{< file-download title="download" file="PINK NOISE GENERATOR">}}

<p style="color: red;" class="text-center">Ako ste manje iskusni u gradnji audio uređaja, preporučujem da pogledate neka uputstva u TUTORIJALIMA.</p>
