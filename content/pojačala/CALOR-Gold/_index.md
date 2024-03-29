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

### Sklapanje modula

Počnite sklapanje tako što će te se prvo dobro upoznati sa šemom, pločicom i rasporedom na njoj. To je veoma važno iako na prvi pogled može izgledati trivijalno, a to posebno važi za manje iskusne graditelje jer dobro poznavanje rasporeda na pločici bitno smanjuje mogućnost greške. Pri tom podrazumevamo da ste već dovoljno vešti u prepoznavanju i “čitanju” vrednosti elemenata. Za postavljanje elemenata koristite i strogo se pridržavajte rasporeda prikazanog na slici rasporeda elemenata. Ona je prikazana onako kako se to vidi gledano sa strane komponenata.

Najzgodnije je gradnju započeti sa ugradnjom otpornika. Razmak rupa predviđen za većinu otpornika je 10mm, a DALE otpornici korišćeni u našim KIT-ovima imaju nešto veće kućište od standardnog, pa je potrebno saviti im nožice odmah po izlasku iz kućišta. po postavljanju otpornika pređite na ugradnju blok kondenzatora. Njih treba postaviti tako da sasvim naležu donjom stranom na pločicu. Inače je kod svih komponenata bitno da im ne ostavljate dugačke izvode tj. da ih ne montirate tako da daleko odstoje od pločice. Za pouzdan rad je važno da izvodi komponenata budu što kraći! Kod obe prethodne vrste komponenata polaritet tj. način na koji ste okrenuli komponentu, nije bitan, ali kod komponenti koje sada slede to je veoma važno! Nakon otpornika i blok-kondenzatora ugrađujte male elektrolitske kondenzatore strogo pazeći na njihov polaritet i orijentaciju na pločici. Na kućištima svih elektrolitskih kondenzatora uvek je jasno odštampan polaritet time što je označena negativna (minus) nožica. Postavite svaki elektrolit na pločicu ali pre nego ga zalemite ponovo proverite da li je okrenut kako treba! Posle elektrolita ugradite i dva višeobrtna trimer-potenciometra. Oni se već iz fabrike isporučuju sa klizačem postavljenim negde na sredini hoda i ne bi ih trebalo dirati jer su ti klizači upravo u potrebnom položaju za prvo uključenje. Za svaki slučaj, pre ugradnje proverite ommetrom da se kod oba trimera između srednje nožice i obe krajnje meri pribložno po pola ukupne vrednosti otpora tog trimera. Ako treba, dodatno podesite da bude tako i tek onda ih ugradite. Time su sve pasivne komponente osim velikih elektrolitskih kondenzatora postavljene na pločicu. Ti se veliki elektroliti ugrađuju na kraju jer je pločicom lakše rukovati dok njih nema na njoj.

Sledeći korak je ugradnja poluprovodničkih komponenata i sada je potrebna dodatna pažnja jer su svi poluprovodnici “polarisani” tj. kod njih nije nimalo svejedno kako ste ih okrenuli i koja nožica ide u koju rupu! Ako ovde napravite grešku velike su šanse da trajno oštetite komponentu a sasvim je sigurno da vam uređaj neće proraditi. Uz to je vrlo moguće da jedna pogrešno okrenuta komponenta dovede već kod prvog uključenja, do pregorevanja mnogih drugih komponenti iako su one možda i dobro postavljene! Na pločici postoje četiri diode i to dve manje signalne i dve nešto veće Zener diode. Sve su one u staklenim kućištima i budite pažljivi prilikom savijanja njihovih nožica i nikada to ne radite uz samo stakleno kućište! Diode imaju na svom kućištu bojom otisnut i jedan prsten koji je uvek bliže jednom kraju. Taj kraj diode je katoda i položaj tog prstena se mora poklapati sa položajem na simbolu diode na gornjoj strani pločice. Male tranzistore ugradite tako da njihova donja površina bude udaljena od plocice oko 2 do 3mm tj. oni zbog razmaka rupa ne mogu (i ne treba!) da se spuste sve do površine plocice. Njihove nožice formirajte kao na donjoj slici. Pazite i da se ravna strana kućišta tranzistora poklapa sa ravnom stranom na simbolu tranzistora na gornjoj površini pločice. Izvode svih elemenata treba skraćivati tek pošto su zalemljeni i to na nivou vrha kupe od kalaja kojim su zalemljeni. Lemljenje ne sme trajati dugo pogotovo kada lemite poluprovodnike!

Predviđeno je da se veliki izlazni MOSFET-ovi nalaze ispod nivoa pločice pa se na pločicu postavljaju malo drugačije nego sto je to uobičajeno. Ovo je verovatno najkomplikovaniji deo procedure pa treba da ga obavite sa najvećom pažnjom i preciznošću da bi izbegli kasnije probleme u funkcionisanju uređaja!

Prvo je potrebno da pažljivo savijete njihove (prilično krute) izvode pod uglom od 90 u stranu na kojoj su oznake elementa tj. suprotnu od one na kojoj je metalna pločica koja ide prema hladnjaku. Postoji nešto širi deo izvodnih nožica odmah po njihovom izlasku iz plastičnog kućišta i u tom delu ne bi trebalo savijati već to treba učiniti odmah na početku suženog dela nožica kao na sledećoj slici.

<p>{{< paige/image alt="Legs" class="rounded-2" src="./images/Legs.png" title="Legs" >}}</p>

> Budući da su lemne tačke nožica izlaznih MOSFET-ova fizički nedostupne kada su i oni a i pločica pričvršćeni na hladnjak, neophodno je da se njihovo lemljenje obavi pre toga. Mora se paziti na nekoliko stvari istovremeno:
- zadnje strane MOSFET-ova, na kojima je metalna površina, moraju biti sve međusobno paralelne i pri tom u isto vreme paralelne i sa površinom pločice
- udaljenost te zadnje površine MOSFET-ova od donje površine pločice na kojoj su bakarni vodovi treba da je 10mm zato što ćete kod montaže pločice koristiti na njenim uglovima odstojnike koji su upravo dužine 10mm

Da bi ovo izveli što tačnije i jednostavnije, pomoći će sami MOSFET-ovi. Kako? Vrlo je zgodno što je njihova debljina upravo 5mm (IRFP FET-ovi) te ako stavite dva jedan na drugi, dobićete obe stvari od jednom: i paralelnost sa pločicom (a samim tim i međusobno!) i tačnu distancu do pločice. U ovoj fazi ne žurite već to odradite precizno. Biće jasnije ako pogledate sledeću sliku:

<p>{{< paige/image alt="Legs PCB" class="rounded-2" src="./images/LegsPCB.png" title="Legs PCB" >}}</p>

U prvom momentu kod svakog MOSFET-a zalemite SAMO srednju nožicu i kada to učinite na sva četiri, pažlivo postavite plocicu sa izlaznim FET-ovima na ravnu stranu hladnjaka tako da FET-ovi leže na hladnjaku svojim metalnim zadnjim stranama. Sada proverite da SVI FET-ovi lepo i celom zadnjom metalnom površinom naležu na hladnjak i da dodatnim pritiskom prsta na kućista nigde nema "klackanja". Ako je potrebno, još uvek se može komponenta malo zakrenuti ili nakriviti da dobijete dobro naleganje, a to je upravo zahvaljujući tome što smo za sada zalemili samo po jednu nožicu. Proverite i da tačno ulaze pod pločice i četiri plastična odstojnika koji će podupirati uglove pločice. Njihovo ubacivanje ne bi smelo da podiže pločicu od hladnjaka ni najmanje!!! Kada ste potpuno zadovoljni rezultatom, pažljivo i bez ikakvih pritisaka podignite pločicu sa hladnjaka i okrenite je da leži na stolu onom stranom gde su komponente. Ne vršeći nikakav pritisak na MOSFET-ove pažljivo zalemite i sve ostale njihove nožice-izvode.

Sada je preostalo da se na pločicu postave i veliki elektrolitski kondenzatori kojih ima 9 (8x2200uF i 1x4700uF) . I kod njih vrlo pazite na to da ih pravilno okrenete gledajući gde im je "-" a gde "+" izvod! I njih treba postaviti tako da potpuno naležu na pločicu. Ovim bi pločica trebalo da je sasvim popunjena komponentama i možete preći na sledeću fazu.

Ta sledeća faza je sklapanje male pomoćne pločice koja sadrži samo četiri komponente, te bi ovaj deo posla trebao biti sasvim jednostavan. Jedino što će tražiti malo više pažnje i veštine je motanje izlazne zavojnice. Ona ima 17 navoja bakarnom lak-žicom prečnika 1,8mm i unutrašnji prečnik od 16mm. To je takozvana "vazdušna" zavojnica jer se u njenoj unutrašnjosti ne nalazi nikakvo jezgro ili drugi materijal. Sama žica je dovoljno debela i kruta tako da će zavojnica ostati čvrsta sama po sebi i bez ikakve dodatne potpore. Najlakše ćete zavojnicu namotati tako što ćete uzeti neki valjkasti predmet (telo nekog markera ili burgiju) prečnika 15mm i na njemu pažljivo, navoj do navoja namotate 18 navoja. Kada pustite žicu ona će se malo opustiti i vratiti (kao feder) ali se navoji neće međusobno razmaći već će se malo povećati obim zavojnice, taman toliko koliko nam treba jer će sada biti unutrašnji prečnik oko 16mm. Sada ponovo prebrojte broj navoja i formirajte krajeve tako da bude tačno 17 navoja. Odsecite višak žice tako da svaki kraj zavojnice ima ravni deo žice u dužini od oko 10mm. Na oba kraja uklonite lak izolaciju u dužini od 5mm. Provucite krajeve zavojnice kroz predviđene rupe na štampi i postavite zavojnicu tako da je od površine pločice udaljena oko 5mm. tada će i na strani za lemljenje krajevi viriti još nekih 3mm i tada je zalemite. Postavite i ostale tri komponente na malu pločicu i ona je takođe spremna.

### Montaža i povezivanje

Sledeći korak je označavanje mesta za rupe za pričvršćenje izlaznih FET-ova i same pločice. Vratite za tu svrhu pločicu na hladnjak i pozicionirajte je tako da se četiri izlazna FET-a nalaze simetrično i ravnomerno udaljeni od ivica hladnjaka. Predvidite da će vam hladnjak montiran na kutiju stajati tako da su mu rebra u vertikalnom pravcu - NIKAKO u horizontalnom! Ako ste pravilno postavili, sama pločica NEĆE u odnosu na površinu hladnjaka stajati ni centralno ni simetrično. Tako i treba, bitno je da izlazni MOSFET-i stoje kako treba. Ne pomerajući pločicu iz tog željenog položaja, kroz postojeće rupe na FET-ovima precizno oštrim šiljkom označite mesta za rupe. PROVERITE VIŠE PUTA DA STE SVE TAČNO OZNAČILI!!! Najbolje bi bilo da se u ravnoj ploči baze hladnjaka izbuše rupe tako da ne prođu skroz na drugu stranu, već do dubine od najviše 80-90% debljine baze. Tada u tim rupama treba urezati navoj za šraf za pričvršćenje. Ako to ne umete sami da uradite (a to istina traži malo veštine i iskustva!) odnesite hladnjak kod nekog majstora koji će to profesionalno uraditi. Te usluge nisu skupe. Ovaj način možda izgleda teži ali je i bolji a i estetski prihvatljiviji. Svakako da se mogu izbušiti i kompletne rupe ali tada treba da pazite da budu označene i izbušene tako da na strani gde su rebra izađu između rebara! Kada su te četiri rupe spremne, privremeno pričvrstite FET-ove i označite mesta za rupe za šrafove na uglovima pločice te i njih uradite na isti način.

Pre definitivnog pričvršćenja pločice sa FET-ovima na hladnjak, morate zalemiti i sve zice i kablove koji idu sa pločice jer to posle neće biti fizički izvodljivo. Privremeno samo postavite hladnjak sa pločicom na mesto gde će se on definitivno nalaziti kod završenog uređaja, i premerite koliko treba da budu dugačke do tačaka na koje ih treba zalemiti i odsecite takve parčiće. Trudite se da te žice idu što logičnijim i kraćim putem između tačaka koje povezuju, ali nemojte ni u tome preterati pa ih voditi pravolinijski od jedne do druge tačke, jer će onda završen uređaj izgledati katastrofalno! Kablovi koje treba da koristite moraju biti fleksibilni, licnasti i sa PVC ili Teflonskom izolacijom. Neki od, uslovno rečeno tanjih, zvučničkih kablova standardnog kvaliteta su upravo izvrsni za ovu namenu. Za vodove koji na pločicu dovode pozitivan i negativan napon napajanja kao i vodove mase (PAŽNJA! - na pločici postoje DVA izvoda za masu!) i izvod za zvučnik, koristite kablove kojima presek nije manji od 2,5mm2 a još bolje ako je i nešto veći. Za dovođenje audio signala na ulaz treba da koristite kvalitetan oklopljeni tanki mikrofonski kabel ili neki od kvalitetnih kablova koji se koriste za interkonekciju.

Sve ove kablove treba direktno zalemiti na predviđenim mestima na pločici, jer ne smatramo da su bilo kakve vrste konektora ili pinova na tim mestima, dovoljno kvalitetan i pouzdan način spajanja u uređajima visoke klase. Takođe nam dugogodišnja praksa nije ničim potvrdila opravdanost korišćenja posrebrenih ili srebrnih kablova i žica bilo koje vrste ili marke, ali ste Vi slobodni da ih po svom nahođenju ipak upotrebite. Oni verovatno neće ničim umanjiti ali sigurno ni poboljšati ukupni kvalitet ovog dizajna. Ta odluka je na Vama!

Pošto ste zalemili sve kablove, vreme je da pločicu zajedno sa izlaznim FET-ovima definitivno pričvrstite na hladnjak. Izlazni FET-ovi se ne smeju pričvrstiti direktno na metal hladnjaka već se ispod njih stavljaju liskunske izolatorske podloške koje ste dobili u kompletu delova. Postupajte sa njima pažljivo i bez savijanja jer su vrlo krte i lako ih je oštetiti grubim rukovanjem. Ispod svakog FET-a ide po jedna podloška... ostale koje ste dobili su rezervne u slučaju da neku oštetite. Na jednu stranu svake od četiri podloške nanesite u tankom sloju silikonsku termo-pastu i tom namazanom stranom ih priljubite na hladnjak na mesta na kojima će biti izlazni FET-ovi. Pažljivo i uz vrlo blag pritisak namestite ih tako da se rupa na liskunu poklopi sa rupom na hladnjaku. Sada na zadnje-metalne površine sva četiri FET-a takođe nanesite tanak sloj termo-paste i sve pažljivo spustite na hladnjak tako da se rupe na FET-ovima poklope sa rupama na hladnjaku. Prišrafite svaki FET vrlo snažno koristeći šrafove sa metalnim šajbnama-podloškama da bi se sila ravnomernije prenela na što veću površinu FET-ova. Višak termo-paste će usled pritiska izaći ispod liskuna i FET-ova i treba ga pažljivo ukloniti nekom krpom. Savetujemo da ovo manipulisanje termo-pastom radite sa rukama zaštićenim tankim Latex rukavicama za jednokratnu upotrebu, jer se pasta teško uklanja sa zamazane odeće i ruku!

{{< paige/gallery align="center" >}}
{{< paige/image alt="Calor-GOLD Montage 1" title="Calor-GOLD Montage 1" src="./images/CalorGOLDMontage1.png" width="550px" height="579px" >}}
{{< paige/image alt="Calor-GOLD Montage 2" title="Calor-GOLD Montage 2" src="./images/CalorGOLDMontage2.png" width="550px" height="579px" >}}
{{< /paige/gallery >}}

Savetujemo da povezivanje izlaznog (ili izlaznih - u slučaju stereo izvedbe) modula obavite prema priloženim crtežima na slikama 1 i 2 kako bi izbegli moguće probleme u radu celokupnog projekta.

### Šta je još potrebno?

Na samom početku je napomenuto da je za pune i vrhunske performanse ovog pojačala neophodno obezbediti i odgovarajući sistem napajanja kao i adekvatno hlađenje izlaznih MOSFET-ova.

Napajanje je jako bitan deo svakog audio uređaja i vrlo je moguće lošim napajanjem značajno degradirati i najsavršenije dizajniran pojačavač. Napajački sklopovi za različite klase rada audio pojačala se delimično razlikuju po nekim zahtevima. Pojačalo koje ste kupili radi u takozvanoj klasi "A" , a za tu vrstu izlaznih stepena je potreban posebno masivan sklop za napajanje. Imajući u vidu da ste odlukom da kupite CALOR pojačalo praktično izrazili želju da na kraju imate vrhunski audio uređaj, smatramo da bi bilo, najblaže rečeno, nerazumno štedeti na kvalitetu i karakteristikama komponenata koje treba da sačinjavaju sklop za napajanje.

U zavisnosti od toga kako ste odlučili da izvedete Vaše pojačalo - kao stereo ili kao dual-mono ili kao dva zasebna monobloka, prema tome ćete se rukovoditi u odluci koji tip napajačkog sklopa da koristite. U zadnje vreme se za vrhunske uredjaje najčešće odlučuju za dva zasebna monobloka ali i za dual-mono izvedbu kada su oba izlazna stepena u istom kućištu ali su po svemu ostalom sasvim zasebni što znači da imaju zasebna napajanja sa zasebnim transformatorima. Pa i tada postoje dva različita načina u zavisnosti od toga da li transformator ima jedan sekundarni namotaj sa srednjim izvodom ili dva takva zasebna namotaja na istom transformatoru. Te dve varijante su prikazane na slikama 1 i 2. Na slici 1 je standardan sklop koji se sastoji od transformatora sa jednim sekundarnim namotajem koji ima srednji izvod, mostnog ispravljača – GREC-a i seta velikih elektrolitskih kondenzatora. Druga varijanta prikazana na slici 2 ima transformator sa dva zasebna ali indentična sekundarna namotaja ovaj put bez srednjeg izvoda, dva mostna ispravljača i set elektrolita.

> Ako očekujete vrhunske karakteristike, tada za CALOR pojačalo, u prvoj varijanti sklopa za napajanje, komponente treba da imaju sledeće karakteristike:
- toroidni ( torusni ) transformator snage minimum 300VA (bolje 500VA) sa sekundarnim namotajem za 46...47V AC (sa srednjim izvodom) neopterećeno. Kada naručujete da vam se napravi transformator, tražite da se na primarnom namotaju osim dva osnovna (0V i 220V), napravi još četiri pomoćna izvoda na 210V, 215V kao i na 225V i 230V. Na taj način ćete lakše dobiti potreban tačan napon u zavisnosti od prosečnog napona gradske mreže u vašem kraju! Takođe tražite da ima i „slepi” namotaj tj. Statički oklop između primara i sekundara.
- Mostni ispravljač – GREC za najmanje 200V i 25A i pokušajte da nađete takav koji u sebi ima „soft recovery” diode. Mostni ispravljač se može i napraviti od pojedinačnih dioda, a tada nabavite upravo pomenute „soft recovery” diode odgovarajućih osobina.
- Elektrolitski kondenzatori su veoma bitan faktor u ukupnom kvalitetu uređaja. Bitne su i njihove osobine kao i ukupan kapacitet. Koristite „low ESR” i 105˚C tipove. Ukupan kapacitet svih elektrolita u jednoj grani napajanja (pozitivnoj ili negativnoj) ne bi smeo biti manji od 66.000uF. Dakle sve zajedno za obe grane treba barem 132.000uF i to se dobija vezivanjem više kondenzatora paralelno. Uvek je bolje koristiti 3 komada od 22.000uF vezana paralelno nego jedan od 66.000uF makar on bio najvišeg mogućeg kvaliteta! Svi ti elektroliti moraju biti za radni napon od 40V ili više. Tipovi koje najpre preporučujemo su Black Gate, ELNA, Nichicon, Sprague, Panasonic-FC i EPCOS. Svakako, postoji jos niz kvalitetnih firmi.

U drugoj varijanti prema slici 2 prakticno ostaje isto sve što je rečeno, jedino vam treba transformator sa dva odvojena sekundarna namotaja svaki za 23...24V AC bez srednjih izvoda i dva mostna ispravljača. To bi bio jedan okvirni sistem napajanja koji bi u praksi trebalo dopuniti još nekim komponentama, ali to nije tema ovog uputstva.

Drugi važan faktor za rad svakog pojačala, a posebno onog u klasi A, je hladnjak. Sva se pojačala u klasi A jako greju jer sve vreme dok su uključena troše više-manje konstantnu kolicinu energije. Zato je neophodno da hladnjak za pojačala u klasi A bude što efikasniji a to obično znači da je prilično veliki i sa velikom površinom rebara. Za CALOR izlazni stepen je potreban hladnjak čiji termalni koeficijent nije veci od 0,3˚C/W. Neki od odgovarajućih modela su Fisher SK418 dužine 150mm ili više, a još bolje SK157 dužine 150mm ili više.

Da se dobije deklarisana efikasnost hlađenja, hladnjaci se moraju nalaziti van kutije i postavljeni tako da su im rebra vertikalna da bi se omogućila što bolja prirodna cirkulacija vazduha. Kod ovakvih pojačala se obično radi tako da ti masivni hladnjaci ujedno budu i stranice kutije. Jedno od mogućih rešenja vidite na slici 3.

<p>{{< paige/image alt="Krell KSA-100S" class="rounded-2" src="./images/Krell.png" title="Krell KSA-100S" >}}</p>

### Puštanje u rad i podešavanje

Uz pretpostavku da ste pre povezivanja proverili da sklop za napajanje radi ispravno i daje potrebne napone od +30V i -30V, sada možete pristupiti prvom uključenju. Za taj proces bi bilo poželjno da imate na raspolaganju dva merna instrumenta (multimetra) jer je jedan potrebno postaviti između izlaza za zvučnik na pločici i mase (tačke C i D na šemi), i treba ga podesiti za merenje jednosmernog naponana na opsegu 20V, a drugi vezati na krajeve od sors otpornika jednog od gornjih MOSFET-ova (tačke A i B na šemi) i podesiti ga takođe za merenje jednosmernog napona ali sada na opsegu 0,5V. Kontakte na ulaznom CINCH priključku pojačala treba kratkospojiti, a na izlaz za zvučnik se za sada ne vezuje NIŠTA osim mernog instrumenta! Pre nego što prvi put uključite napajanje treba da znate šta u tom prvom momentu treba da očekujete da vidite na mernim instrumentima. Instrument vezan na izlazu treba da pokaže što manji jednosmerni napon - idealno 0V - ali je u prvom momentu budući da je sve još nepodešeno, sasvim prihvatljivo da instrument pokaže i 2..3V bilo pozitivnih ili negativnih. Drugi instrument između tačaka A i B bi trebalo da pokaže u idealnom slučaju oko 180...220mV ali je zbog nepodešenosti sasvim moguće da pokaže i svih 500mV tj. 0,5V.

Znajući sve to, sada je trenutak da uključite napajanje ali budite spremni da ga u svakom momentu brzo isključite ako bilo koji od dva instrumenta ima pokazivanje mnogo veće od onoga što smo ranije pomenuli, pogotovo instrument između tačaka A i B. Na pločici postoje dva trimer-potenciometra i jedan služi za podešavanje mirne struje - to je P2 označen sa "BIAS", i drugi za podešavanje simetrije tj. DC potencijala na izlazu a to je P1 označen sa "SYMETR". U prvom momentu je važnije da obratite pažnju na mirnu struju i da je podešavanjem P2 namestite tako da instrument pokazuje 220mV. Tada je mirna struja kroz svaki izlazni par tačno 1A kako i treba da bude. Sada obratite pažnju na drugi instrument i podešavanjem P1 pokušajte da jednosmerni napon na izlazu podesite što bliže nultom pokazivanju. Kako se budete približavali nuli, biće vam pokazivanje instrumenta neprecizno pa će biti potrebno da preklopnik za izbor opsega na tom instrumentu prebacujete na niže položaje a na kraju će verovatno biti na opsegu 100 ili 200mV ili čak i niže. Pokušajte da finim podešavanjem P1 postignete da na izlazu bude 0V, ali sve u rasponu 10...20mV od nule je prihvatljivo. Kada ste sve to podesili, to pokazivanje sme malo i da se samo od sebe lagano "šeta-klizi" i do nekoliko milivolta (2...3...5mV) u obe strane i to je normalno... ostavite tako... sve je OK!

Ako ste postigli da vam oba instrumenta pokazuju kao što smo rekli na početku, vase pojačalo radi kako treba i te podešene vrednosti ne bi trebalo da se same od sebe drastično menjaju u toku rada bez obzira na zagrevanje uređaja. Da to proverite, ostavite tako (bez signala i zvučnika) pojačalo sledećih 15 do 30 minuta posmatrajući oba instrumenta simultano i ako baš treba naknadno još malo doterajte podešavanja. Ovo se više odnosi na simetriju na izlazu jer se mirna struja verovatno gotovo i neće menjati budući da je pojačalo rešeno tako da samo automatski prati, podešava i održava mirnu struju na zadatoj vrednosti. Posle 30-tak minuta rada napravite još jedan test. Pritisnite dlanom ruke gornju površinu hladnjaka i ako ste odabrali hladnjak dovoljne površine trebalo bi da možete da na njemu držite ruku barem 10-tak sekundi ili više, a da ne morate da je sklonite zbog toplote. Ako je hladnjak značajno topliji od toga pa ruku morate odmah ili posle sekund-dva da sklonite, to je znak da ste odabrali premali hladnjak! Istina, moderne Silicijumske komponente mogu bez problema danima besprekidno raditi i kada im je sopstvena temperatura i do 90C, ali će to u izvesnoj meri skratiti njihov radni vek i povećati mogućnost otkazivanja.

Za kraj je još ostalo da na izlazne terminale za zvučnik zalemite malu pomoćnu pločicu koja nosi izlazni kalem i Zobel član, i da je povežete prema slici 1.

Vaše pojačalo je ovim potpuno završeno i spremno je za rad!

### Specifikacije
<hr>
{{< paige/quote >}}
40W/8Ω<br>(bez izlaska iz klase A!)<br>***Prosečna izlazna snaga***
{{< /paige/quote >}}

{{< paige/quote >}}
11Hz - 235kHz<br>(pri 80% izlazne snage)<br>***Frekventni opseg snage***
{{< /paige/quote >}}

{{< paige/quote >}}
<0.008%<br>(20Hz-20KHz/80%snage)<br>***THD***
{{< /paige/quote >}}

{{< paige/quote >}}
do 2,5°<br>u granicama 20Hz-20kHz<br>***Fazni pomak***
{{< /paige/quote >}}

{{< paige/quote >}}
85V/μS<br>(pri 80% izlazne snage)<br>***Slew rate***
{{< /paige/quote >}}

{{< paige/quote >}}
&#62;750<br>(pri 80% izlazne snage)<br>***Damping faktor***
{{< /paige/quote >}}
<hr>

{{< file-download title="download" file="CALOR-Gold">}}

<p style="color: red;" class="text-center">Ako ste manje iskusni u gradnji audio uređaja, preporučujem da pogledate neka uputstva u TUTORIJALIMA.</p>
