---
title: "ADAGIO"
date: 2024-03-18
description: "Tube reference preamp"
draft: false
tags: ["ADAGIO"]
weight: 10
---
## Tube reference preamp

<hr>
{{< load-photoswipe >}}
{{< gallery caption-effect="fade" >}}
  {{< figure src="./gallery/ADAGIO/ADAGIO - Pločica (alexmm).jpg" caption="ADAGIO - Pločica (alexmm)" >}}
  {{< figure src="./gallery/ADAGIO/ADAGIO - Ugradnja (alexmm).jpg" caption="ADAGIO - Ugradnja (alexmm)" >}}
  {{< figure src="./gallery/ADAGIO/ADAGIO - Kućište (alexmm).jpg" caption="ADAGIO - Kućište (alexmm)" >}}
{{< /gallery >}}
<hr>

Odavno se u sadržaju pod stavkom *"Pretpojačala"* nalazi odrednica za **cevno pretpojačalo**, ali je taj projekat tek sada u potpunosti završen i testiran da bi mogao biti ovako javno publikovan.

Moj generalni stav po pitanju uloge i mesta cevi - lampi u audio tehnici je verujem dobro poznat većini onih koji prate moj rad. Sa cevima sam prestao da se "družim" još dosta davno (ima tome vise od 20-tak godina) i tako je bilo sve do nedavno kada se pojavio čovek sa zahtevom da mu dizajniram i uradim što vrhunskije pretpojačalo ali sa cevima. Nisu pomogla nikakva objašnjenja i ubeđivanja da za to nisu potrebne cevi da bi bilo vrhunsko... jednostavno on je želeo to sa cevima i nikako drukčije! Tako je nastao ovaj dizajn mada, istini za volju, nije ovako koncepcijski izgledao u početku. Do konačne "prečičćene" verzije koja je ovde data, dizajn je pretrpeo nekih 5 značajnih promena koncepta. Sticajem okolnosti, nekako na sredini tog procesa, naručilac je dobio ponudu da kupi fabričko cevno pretpojačalo poznate firme Conrad-Johnson što je i učinio, otkazavši narudžbinu kod mene. Ja sam do tog momenta već bio podobro zagazio u projekat i delom iz inata (poznati Srpski brand!) a delom i iz zaintrigiranosti šta će iz svega toga ispasti, ja sam nastavio rad na dizajnu za svoju... a evo sada objavljivanjem na mom sajtu ispade da je to bilo i za vašu dušu jer je sada svima dostupan.

Ova šema koncepcijski nije ništa što bi se moglo nazvati "do sada neviđeno" jer je u cevnoj tehnici dosta teško uraditi nešto sasvim revolucionarno i ingeniozno jer se za dobre rezultate morate držati relativno krutih ograničenja koja pred dizajnera postavljaju lampe. Pretpojačalo sam (po svojoj ustaljenoj navici da svojim projektima uvek dam ime) nazvao "ADAGIO" i kao što se vidi dodao mu epitet "referentno" jer smatram da to i zaslužuje.

U osnovi to je jedan linearni dvostepeni pojačivač iza koga sledi stepen sa aktivnom tonskom kontrolom bez pojačanja. Oni zagriženi audiofili će šemu već na prvi pogled odmah odbaciti ili se nasmejati na odrednicu "referentno" budući da je za njih verovatno bogohuljenje zvati nešto referentnim a ima tonsku kontrolu i povratnu spregu. Oni koji su povremeno pratili neke od diskusija na ovu temu u kojima sam učestvovao, znaju od prilike moje poglede po tom pitanju.

Linearni ulazni stepen ima naponsko pojačanje oko 6-6,5 što se pokazalo kao sasvim dobar kompromis za različite moderne izvore signala. Pojačanje se po želji može promeniti menjanjem vrednosti otpornika od 15k u katodi prve triode (nemojte menjati vrednosti drugih otpornika!!!). Stepen sa tonskom kontrolom ima pojacčanje 1 kada su obe kontrole tačno na sredini tj. na "nuli" tako da sve što uđe u taj stepen isto tako i potpuno ne promenjeno i izađe. To je tokom slušanja i poređenja potvrđeno od strane svih koji su tome prisustvovali iako je bilo "nevernih Toma" koji su pošto-poto hteli da čuju razliku. Na sluh nikakvu razliku niko nije mogao da zapazi! Kasnije pri merenjima se izvesna razlika u nekim karakteristikama ipak videla, ali se za praktične potrebe pokazala kao nebitna jer je ničije uho ne moze uočiti. Ipak je predviđeno i da se ovaj stepen može sasvim zaobići i to je odrađeno upotrebom vakuumskih REED releja u DIL kućištu kako bi se izbegle manjkavosti klasičnog preklapanja: dugački vodovi do preklopnika, atmosferilijama izloženi kontakti preklopnika, mogući problemi stabilnosti odnosno samooscilovanja itd. Tonske kontrole imaju opseg delovanja od a10dB što je za sve normalne sisteme više nego dovoljno. U koliko vam se ispostavi da vam je potrebno još tonske korekcije (više od a10dB) bilo na niskim ili na visokim tonovima, nešto drugo u vašem sistemu "debelo ne valja"!

Mada to mnogima na prvi pogled nije baš očigledno, loše koncipiran i odrađen sistem napajanja u bilo kom audio uređaju može veoma značajno da upropasti mnoge karakteristike inaće izvrsnog pojačala ili pretpojačala. Zato je sklopu za napajanje posvečena posebna pažnja. Pretpostavljam da će jednom broju ljudi biti nejasna "zamešancija" i kompleksnost ispravljačkog dela šeme ali to nije zbog mog kaprića i težnje da komplikujem što će nadam se biti jasno iz sledećeg objašnjenja:

U momentu uključenja nema visokog napona i preamp je utišan (muted) tj. na njegovom izlazu nema audio signala. Samo polako raste napon za grejanje jer za dugovečnost lampi nije dobro da dođe momentalno pun napon grejanja. O tome se brinu BC557+100k+100uF uz stablizator LM317. U isto vreme ceo sklop sa tajmerom 555 je blokiran a na njegovom izlazu je pun +Vcc (oko 12V). Zbog toga donji MPSA 42 u visokonaponskom stabilizatoru, kratko spaja dve 100V-Zenerice pa nema visokog napona a BC327-40 ne provodi pa MUTE relej nije aktivan tj. izlaz preampa je kratkospojen na masu = preamp muted.

Kako se 100uF polako puni kroz otpornik 100k, tako BC557 povećava svoj otpor (postaje sve više zaporan) dozvoljavajući da polako raste izlazni napon stabilizatora LM317 dok ne dostigne 6,3V. Drugi BC557 ima na emiteru 6,8V i ostaje provodan sve dok mu razlika baza-emiter ne bude manja od 0,6V a to će biti kada izlaz od 6,3V dobije pun napon. Tada on prestaje da provodi a sa njim prestaje da provodi i BC547 koji drži nožice 2&6 od 555 na masi. Od tog momenta lampe imaju puno grejanje i polako stabilišu temperaturu, a tajmer 555 se polako puni i na kraju perioda određenog sa 120k&470uF izlaz 555 pada na masu čime otvara MPSA 42 tako da dve 100V-Zenerice nisu više kratkospojene pa izlaz za visoki napon zato dobija pun napon a sa time i lampe dobijaju pun anodni napon. Nekoliko sekundi kasnije počinje da vodi i BC327 (to kasni zbog vremenske konstante koju određuju 10k&47uF u bazi) a on aktivira MUTE relej i signal na izlazu nije više blokiran.

Visoki napon se sa stabilizatora vodi na pretpojačavače oba kanala preko dva zasebna sklopa koji su poznati kao "capacitance multiplier" ili "umnožavač kapaciteta" kako se to kod nas kaže. Ovaj vrlo jednostavan sklop je višestruko koristan u gotovo bilo kom audio uređaju i šteta je da nije više korišćen. Čine ga samo tri elementa: tranzistor, otpornik i kondenzator i on u suštini zamenjuje jedan poveći elektrolitski kondenzator koji bi vršio dodatnu filtraciju napona napajanja. Zahvaljujući relativno velikom pojačanju tranzistora, kapacitet jednog mnogo manjeg i jeftinijeg elektrolita se "umnožava" onoliko puta koliko je pojačanje tranzistora pa se recimo upotrebom tranzistora sa pojačanjem 100 i elektrolita od 100uF praktično dobija isto kao da ste umesto tog sklopa tu stavili elektrolit od 10,000uF!

<p>{{< paige/image alt="ADAGIO-Montage" class="rounded-2" src="./images/Adagio-Montage.png" title="ADAGIO-Montage" >}}</p>

> Neke napomene za praktičnu gradnju:
- Na pločici stabilizatora u oblasti oko hladnjaka na kome je LM317, se nalazi 9 krugova koji pretstavljaju rupe koje treba izbušiti burgijom 3,5mm i služe za poboljšanje hlađenja tog hladnjaka. Nemojte propustiti da napravite te rupe jer su značajne za pouzdan rad tog stabilizatora
- REED releji koje sam ja koristio su od firme HAMLIN, serija 700 bez zaštitne diode, model "HE 721 C1200" i ima ih u Burklin-u a verujem i u Farnell-u. Na tom mestu mogu da se koriste i mnogi drugi u DIL kućištu jedino je važno da su tzv. "preklopnog" tipa i da im je kalem-spulna za 12V DC
- Na rasporedu elemenata pločice stabilizatora su dva otpornika označena zvezdicama * i njihovu vrednost treba eksperimentom odrediti. Oni su tu za slučaj da neko ne koristi mrežni trafo sa tačnim naponima kako sam ja dao već sa nekim višim naponima, pa će u tom slučaju morati da koristi ove otpornike. Onaj u stabilizaciji napona grejanja služi da bi disipaciju LM317 držao u dozvoljenim granicama, a onaj u "mute" vodu da spreči pregorevanje namotaja REED releja ako je napon koji napaja tajmer 555 viši od 12V DC
- Napon za grejanje lampi se vodi od pločice stabilizatora do svake lampe zasebno i to dvostrukim upređenim ličnastim žicama (sa PVC izolacijom) od barem 1mm^2 preseka. Treba da imaju jedno do dva upređanja po santimetru dužine, i takve upređene "kablove" voditi po dnu kutije ispod pločica levog i desnog kanala sve do ispod podnožja lampi. Tu ih treba saviti pod uglom od 90 stepeni na gore i zalemiti na odgovarajuće tačke na pločici.

### Specifikacije
<hr>
{{< paige/quote >}}
BYPASS mode...12Hz-75kHz (-1dB)<br>TONE mode...23Hz-48.5kHz (-1dB; kontrole "flat")<br>***Frekventni opseg***
{{< /paige/quote >}}

{{< paige/quote >}}
BYPASS mode...<0.0066%<br>TONE mode...<0.008%<br>***THD (20kHz, tipično opterećenje, 1V rms)***
{{< /paige/quote >}}

{{< paige/quote >}}
BAS...10dB na 70Hz<br>TREBLE...10dB na 12kHz<br>***TONSKA KONTROLA***
{{< /paige/quote >}}

{{< paige/quote >}}
BYPASS mode...-96dB<br>TONE mode...-91dB<br>***ODNOS SIGNAL/ŠUM***
{{< /paige/quote >}}

{{< paige/quote >}}
1,52Vrms<br>4.3Vp-p<br>***Vin(max)***
{{< /paige/quote >}}
<hr>

{{< file-download title="download" file="ADAGIO">}}

{{< file-download title="download" file="ADAGIO PSU">}}

{{< file-download title="download" file="ADAGIO SELEKTOR">}}

<p style="color: red;" class="text-center">Ako ste manje iskusni u gradnji audio uređaja, preporučujem da pogledate neka uputstva u TUTORIJALIMA.</p>
