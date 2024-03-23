---
title: "POJEDNOSTAVLJEN METOD ZA ODREĐIVANJE NEKIH OD THIELE-SMALL PARAMETARA"
date: 2024-03-18
description: "Osnovni pojmovi"
draft: false
tags: ["POJEDNOSTAVLJEN METOD ZA ODREĐIVANJE NEKIH OD THIELE-SMALL PARAMETARA"]
weight: 10
---
## Osnovni pojmovi

Moderan *pristup* **dizajnu** zvučnih kutija podrazumeva poznavanje takozvanih Thiele-Small parametara drajvera koji planiramo da koristimo. Na žalost, vrlo često ne znamo nikakve podatke osim nominalne impedanse i snage, baš one dve karakteristike koje nam za proračun kutije i skretnice NISU potrebne. Možda će ovo mnogima izgledati čudno, ali to je stvarno tako jer snaga zvučnika ne figuriše nigde u proračunu, a za pravilan proračun pasivnih skretnica nam treba prava tj. izmerena impedansa drajvera na predviđenoj prelomnoj frekvenci a ta impedansa NIKADA nije jednaka nominalnoj impedansi!

> Koji su to parametri koji su nam neophodni i šta oni znače? Postoji više desetina Thiele-Small parametara ali nam za proračun, na sreću, treba samo nekoliko i to:
- <span style="color: red;">Fs</span> = rezonantna frekvenca drajvera u slobodnom prostoru
- <span style="color: red;">Rzv</span> = omska otpornost kalema drajvera
- <span style="color: red;">Qes</span> = električni Q-faktor (faktor "dobrote") drajvera
- <span style="color: red;">Qms</span> = mehanički Q-faktor drajvera
- <span style="color: red;">Qts</span> = ukupni Q-faktor drajvera
- <span style="color: red;">Vas</span> = odgovarajuća zapremina vazduha koja ima istu komplijansu kao vešanje drajvera
- <span style="color: red;">Zrez</span> = impedansa drajvera na rezonantnoj frekvenci

> Renomirani proizvođači najčešće daju prilično iscrpan spisak parametara za drajvere koje proizvode i to se u barem 90% slučajeva uglavnom odnosi na dubokotonske drajvere, takozvane "woofer"-e jer se od prilike isto toliki procenat celog proračuna (ako ne i više!) odnosi na proračun kutije u kojoj će raditi woofer. Na žalost, ako smo kupili neki nepoznati drajver najčešće za njega niti imamo niti je moguće doći do parametara, osim da ih sami izmerimo i proračunamo. Za taj posao nam treba nekoliko instrumenata i to:

- Audio Signal-Generator što boljeg kvaliteta i sa mogućnošću promene izlazne frekvence i izlaznog nivoa. Za ova merenja je vrlo bitno tačno očitavanje frekvence signala pa je neophodno da generator ima što tačniju frekventnu skalu. Ako nije tako, morate nabaviti i frekvencmetar za tačno očitavanje frekvence generatora. Umesto klasičnog signal-generatora može izvrsno da posluži i što kvalitetnija zvučna kartica u vašem PC-u uz neki od brojnih softvera koji se nalaze na Internetu (mnogi su besplatni). Tada vam neće trebati frekvencmetar.
- Prosečno kvalitetno audio pojačalo manje snage ( više je nego dovoljno 10W jer će već 1W zadovoljiti veći deo potreba)
- Audio voltmetar ili neki od kvalitetnijih današnjih digitalnih "univerzalaca"
- Otpornik snage 2 do 3 W i otpornosti između 5 i 10 oma/1% ali NE žičani već metal-film ili ugljeno-slojni, dakle sa što manjim parazitnim induktivitetom. Može i kombinacija nekoliko paralelno vezanih otpornika da dobijete željenu vrednost i snagu.
- Download-ujte fajl <a href="../images/TS_proracun.xls" download="TS_proracun.xls">TS_proracun.xls</a>. Potrebno je da u PC-u imate instaliran Microsoft - Excel (koji je deo Microsoft-Office paketa) da bi mogli da koristite ovo pomagalo koje će vam automatski proračunati potrebne parametre kada u njega budete ubacivali podatke u procesu merenja.

<p class="text-center">Ovih nekoliko gore navedenih stvari treba povezati kao što je to dato na sledećoj slici:</p>

<p>{{< paige/image alt="Ts" class="rounded-2" src="./images/Ts.png" title="Ts" >}}</p>

### Proces merenja

<p class="text-center" style="color: red;">Upisujte merne podatke SAMO u zasenčena polja u proračunu, a vrednosti u svim ostalim poljima će program sam automatski proračunati!!!</p>

- Povežite Signal generator i pojačalo kao na šemi i uključite ih bar 15 minuta pre merenja. Za početak postavite i izlazni nivo generatora i "Volume" na pojačalu na minimum
- Izmerite om-metrom što preciznije otpornost serijskog otpornika "Rser" i otpornost kalema zvučnika "Rzv" i upišite te vrednosti u odgovarajuća polja u proračunu
- Podesite frekvencu generatora na oko 150-200Hz a njegov izlazni nivo na nekih 300-500mV
- Na izlaz za zvučnik pojačala priključite serijski otpornik i zvučnik kao na šemi. <span style="color: red;">PAŽNJA!</span> Zvučnik MORA biti bukvalno u slobodnom prostoru tj. nigde oko njega u bilo kom pravcu, ne bi smelo biti bilo čega bliže od nekih 70cm do 1m. Najbolje bi bilo okačiti ga na jačem najlonskom kanapu da visi sa plafona ili tako nekako
- Postavite audio voltmetar na opseg oko 2-3V priključite ga direktno na zvučnički izlaz pojačala i podešavajte "Volume" na pojačalu dok ne dobijete očitavanje tačno 1V i to upišite kao "Vpa" u odgovarajuće polje u proračunu
- Sada premestite Audio-voltmetar da meri napon na Rser baš kao što je na šemi postavljen
- Na generatoru polako smanjujte frekvencu gledajući na pokazivanje Audio-voltmetra i pokušajte da pronađete frekvencu na kojoj je očitavanje napona na "Rser" najmanje. To je rezonantna frekvenca "Fs" drajvera u slobodnom prostoru i upišite je u proračun
- NE DIRAJUĆI I NE MENJAJUĆI NIŠTA, očitajte napon na "Rser" koji u tom momentu pokazuje audio-voltmetar i to je "Vrez" pa i njega upišite odgovarajuće polje u proračunu
- Obratite pažnju na vrednost u polju parametra "Napon pri -3dB" tj. "V-3".
- Sada vrlo polako podešavajte frekvencu na generatoru i to i ispod i iznad rezonantne frekvence da pronađete dve tačke (jedna je ispod a druga iznad rezonanse) na kojima je napon koji očitava Audio-voltmetar isti kao vrednost koja piše pored "V-3".
- Sada vrlo polako podešavajte frekvencu na generatoru i to i ispod i iznad rezonantne frekvence da pronađete dve tačke (jedna je ispod a druga iznad rezonanse) na kojima je napon koji očitava Audio-voltmetar isti kao vrednost koja piše pored "V-3".

Ostalo vam je još da odredite "Vas" i da bi to izveli moraćete da napravite malu drvenu kutiju oblika kocke čija je svaka ivica (spoljna) malo veća (2-3cm) od prečnika membrane ili još tačnije "korpe" drajvera. Na primer, za woofer sa membranom od 10" (oko 250mm) trebaće vam kutija-kocka čije su sve spoljne ivice oko 27-29cm. Nema potrebe da ova kutija bude nešto specijalno kvalitetno urađena ali je potrebno da solidno dihtuje. Dovoljno je koristiti ivericu debljine 15-18mm. Kada napravite kutiju, izmerite tačno njene unutrašnje dimenzije i izračunajte zapreminu u litrima. U koliko ste sa unutrašnje strane postavljali po spojevima nekakva ojačanja (letvice ili slično) morate njihovu zapreminu oduzeti od pune zapremine koju bi kutija imala da one nisu ugrađene. Takva ojačanja za ovu svrhu inače nisu neophodna. Na jednoj stranici kutije treba napraviti otvor prečnika kao membrana. Zvučnik se montira SPOLJA na kutiju ali ne kao kod izrade prave kutije da mu magnet bude unutra već ovde magnet ostaje spolja a membrana gleda u unutrašnjost kutije. Pazite kod pravljenja otvora da ostane dovoljno mesta za šrafove kojima će te pričvrstiti zvučnik! Pre nego što pričvrstite zvučnik, izmerite tačan prečnik otvora koji ste napravili i taj podatak zajedno sa ostalima koji su potrebni pod "Proračun zapremine konusa" upišite u odgovarajuća polja.

Povežite sada zvučnik ponovo kao što je dato na šemi i menjajući frekvencu Signal-generatora pronađite sada novu rezonantnu frekvencu na isti način kao što ste to uradili kada je bio u slobodnom prostoru. Sada će ta frekvenca biti viša nego ona predhodna. Taj podatak je "Rezonansa u kutiji" tj. "Fb" i taj podatak unesite u odgovarajuće polje u proračunu. Program će automatski preračunati podatke i tog momenta ćete imati sve parametre koji su vam potrebni za projektovanje zvučne kutije za taj drajver.

Moj vam je savet da za dalji proračun koristite jedan više nego zadovoljavajući (I UZ TO BESPLATAN) program koji se zove "WinISD" a možete ga skinuti <a href="../images/winisdbeta.exe" download="winisdbeta.exe">ovde</a>.

Uzmite u obzir da ono što gotovo svi mi samograditelji tj. DIY-majstori radimo, ipak nije High-End i da zato nema potrebe da tragate i ko zna šta platite za neki super-profi softver. "WinISD" će više nego savršeno odraditi sve ono što je potrebno za jedan DIY dizajn.

DA SE RAZUMEMO!!! Ja ne kažem da niko od DIY entuzijasta nije sposoban ili neće nikada napraviti nešto što je High-End, ali ako želite da stvarno uđete i savladate ove "vode" audio dizajna, morate pre svega biti realni, sagledati šta i koliko u nekom momentu znate i možete i još važnije da kroz sve to idete postupno praveći sve bolje i bolje dizajne kako se povećavaju vaša znanja i veštine. Svaki drugi prilaz, u stilu... "ma sad' ću ja odmah u startu da uradim jednu High-End kutiju..." a do tog momenta niste napravili ni jednu-bilo kakvu, vodi vas skoro sigurno do razočarenja. To što ste možda dali ko zna koliko Eura za bog-zna-kakve drajvere, još uvek ne znači da će te sa njima napraviti High-End kutije. Drajveri su važan ali ne presudan deo igre...
