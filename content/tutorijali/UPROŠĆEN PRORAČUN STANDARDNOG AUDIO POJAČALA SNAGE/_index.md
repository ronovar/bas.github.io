---
title: "UPROŠĆEN PRORAČUN STANDARDNOG AUDIO POJAČALA SNAGE"
date: 2024-03-18
description: "Tutorijal"
paige:
  math: true
draft: false
tags: ["Tutorijal"]
weight: 10
---
## Tutorijal

Ovaj *vrlo* **uprošćen** opis rada i proračun jednog (uslovno rečeno) standardnog tranzistorskog pojačavača snage kakav se danas najčešće viđa, je nastao iz želje da se donekle pomogne mlađim i manje iskusnim entuzijastima-samograditeljima. Konstrukcija jednog takvog sklopa nije nikakva "misterija" iako to tako verovatno izgleda većini početnika. Model pojačala koji je korišćen kao primer za ovo objašnjenje je jedna "ogoljena" osnovna koncepcija koja se danas najčešće viđa. Sačinjavaju je ulazni diferencijalni par, naponski pojačavač u klasi A sa svojim izvorom konstantne struje, pobudni komplementarni par i komplementarni izlazni par u konfiguraciji "Emiter-folovera" tj. emiterskog sledila kako je to kod nas poznato. Još jednom podvlačim da je proračun veoma uprošćen ali za početak... za prve korake sasvim praktično upotrebljiv jer će izračunato pojačalo sasvim sigurno raditi ako se proračun tačno odradi a i praktična konstrukcija posle toga. Neće to biti "High End" dizajn ali, pošteno rečeno, i NE POČINJU SE PRVI KORACI U AUDIO ELEKTRONICI SA High-End-om!!!... (mada bi većina želela da odmah napravi najvrhunskije pojačalo... i tako se u startu najčešće počinje sa razočarenjima jer za High-End treba mnogo znanja i iskustva!).

<p>{{< paige/image alt="Primer" class="rounded-2" src="./images/Primer.png" title="Primer" >}}</p>

Možda to nekome neće izgledati logično, ali po meni je najbolje u proces krenuti od izlaza prema ulazu. Neke stvari ćemo u startu morati da predpostavimo ili postavimo kao unapred zadate, pa ćemo recimo odlučiti da gradimo pojačalo koje radi u klasi AB i treba da postigne 50W RMS na opterećenju od 8 oma. Potrebno je da prvo odredimo vršnu vrednost napona na izlazu odnosno na zvučniku i to računamo kao:

$$
 Uo_{peak} = \sqrt2 * \sqrt{50*8} = 28,2V
$$

<p class="text-center">a takođe i vršnu vrednost struje koju dobijamo kao:</p>

$$
 Io_{peak} = \sqrt2 * \sqrt\frac{50}{8} = 3,5A
$$

Da bi izračunali potreban napon napajanja moramo još proceniti i dodatne padove napona na R1, T2, T4, T5 i R5. Za R1, T2 i T4 se može računati da im je ukupan propusni napon oko 2V. Pri maksimalnoj negativnoj amplitudi kolektorskog napona može se na T5 i R5 računati sa po 1,5V tj. zajedno ukupno oko 3V. Takođe ne treba zaboraviti da se većina pojačala napaja iz nestabilisanog ispravljača kome će (čak i kada je vrlo izdašno dimenzionisan) napon pri punom opterećenju verovatno padati za barem 2,5V. Zbir svih ovih napona će nam dati potreban napon napajanja negativne polovine ispravljača (kada nema pobude) koji će iznositi:

$$
 -U_B = 28,2 + 2 + 3 + 2,5 = 35,7V (\approx36V)
$$

<p class="text-center">pa će nam isto toliko trebati i u pozitivnoj grani, što znači da ispravljač na svom izlazu treba da obezbedi +- 36V jednosmernog napona bez opterećenja.</p>

Uzimajući u obzir sve što smo do sada izračunali, možemo odabrati odgovarajuće izlazne tranzistore. Znajući da je vršna vrednost kolektorske struje 3,5A odabraćemo za sigurnost tranzistore kojima je dozvoljena vršna struja barem dva puta veća, pa će odgovarati svi kojima je taj parametar 7...10A. Maksimalan napon između kolektora i emitera izlaznog tranzistora je u momentu kada njemu komplementarni tranzistor ima punu pobudu, i taj napon je tada

$$
 Uo_{peak} + U_B = 28,2 + 36 = 64,2V
$$

<p class="text-center">Za sigurnost treba ovoj vrednosti dodati barem još 30%, pa dakle treba odabrati tranzistore kojima je Uce barem 90V.</p>

<p class="text-center">Još jedan parametar je bitan kod određivanja izlaznih tranzistora a to je disipacija. Ona se računa ovako:</p>

$$
 P_{Dis} = 0,1 * \frac{U_B^2} {R_Z} = 0,1 * \frac{36^2} {8} = 16,2W
$$

i to je disipacija po jednom tranzistoru. Ne sme se zaboraviti da zbog rada u AB klasi kroz tranzistor protiče i mirna struja, pa pošto je ona retko kada preko 100mA i uz napon od 36V dobijamo dodatnu disipaciju pri mirnoj struji od nekih 3,6W koju treba dodati na 16,2W pa možemo zbir zaokružiti na oko 20W disipacije po tranzistoru. Uz veliki izbor tranzistora koji danas stoje na raspolaganju, nebi trebalo da bude teško da se nađe odgovarajući par.

Za određivanje parametara pobudnih (drajverskih) tranzistora T3 i T4 moramo poći od predpostavke da je strujno pojačanje izlaznih tranzistora 30 što je sasvim realna pa čak i skromna vrednost kod današnjih izlaznih tranzistora. Podrazumevajući tu vrednost, možemo izračunati maksimalne kolektorske struje drajvera kao:

$$
 I_{Dr} = \frac{Io_{peak}} {β_iz} = \frac{3,5} {30} = 0,116A = 116mA
$$

pa za sigurnost treba uzeti tranzistore sa barem dva puta većom strujom, dakle recimo 250mA, a još bolje je odabrati i nešto višu vrednost što neće biti problem za moderne drajverske tranzistore. Za maksimalni napon kolektor-emiter treba i za drajvere odabrati isti kao i za izlazne tranzistore, dakle oko 90V. Pošto rade na praktično istom naponu kao i izlazni, njihova će disipacija biti onoliko manja koliko je manja nihova struja od struje izlaznih tranzistora tj. umanjena za strujno pojačanje " β " izlaznih tranzistora. Dakle:

$$
 P_{Ddr} = \frac{P_{Diz}} {β_{iz}} = \frac{20} {30} = 0,66W
$$

Realna, i u praksi vrlo česta prosečna vrednost strujnog pojačanja drajverskih tranzistora je 50, pa se uz pomoć tog podatka dolazi do struja baza T3 i T4 koja iznosi:

$$
 IB_{dr} = \frac{Ic_{dr}} {β_{dr}} = \frac{116} {50} = 2,32mA (\approx2,3mA)
$$

Ovaj nam podatak omogućava da odredimo kolektorsku struju tranzistora T5 koji ima funkciju linearnog naponskog pojačavačkog stepena koji radi u klasi A. Klasa u kojoj radi nam diriguje da mu postavimo takvu kolektorsku struju da se uvek nalazi u linearnom režimu. Da bi to obezbedili, a imajući u vidu struje baza T3 i T4 uzećemo radi sigurnosti vrednost 2-5 puta veću od struje baza dakle recimo 10mA. Ova "zaliha" je potrebna iz više razloga a posebno zbog činjenice da drajveri i izlazni tranzistori, zajedno kao sistem, ne predstavljaju konstantno opterećenje za ovaj stepen budući da se strujna pojačanja tih tranzistora menjaju sa promenom struja kroz njih, što se u toku rada pojačala sve vreme i događa.

Kolektorsku struju T5 "obezbeđuje" izvor konstantne struje sa tranzistorom T6, i pošto ona prolazi kroz spoj kolektor-emiter tog tranzistora mora proći i kroz njegov emiterski otpornik R2 i uzećemo da na njemu stvara pad napona od 1,5V pa ćemo za njegovu vrednost dobiti:

$$
 R_{2} = \frac{U_{R2}} {IC_{T5}} = \frac{1,5V} {0,01A} = 150Ω
$$

Da bi T6 radio kao izvor konstantne struje moramo mu bazu držati na konstantnom naponu koji neće zavisiti od varijacija odnosno padova napona napajanja Ub, i to postižemo zener diodom u njegovoj bazi. Napon ove zener diode mora biti za napon baza-emiter T6 viši od napona na R2 pa se računa kao:

$$
 U_{z} = U_{R2} + UBE_{T6} = 1,5V + 0,6V = 2,1V
$$

Da bi na svojim krajevima držale konstantan napon, kroz većinu zenerica male snage treba propustiti struju od barem 5mA ili nešto više i ta struja prolazi kroz R4 pa se njegova vrednost računa:

$$
 R_{4} = \frac{U_{B} - {U_{Z}}} {I_{Z}} = \frac{36 - 2,1} {5} = 6,78k (\approx6,8k)
$$

Napon na njegovim krajevima će biti 36V-2,1V=33,9V i pri struji od 5mA će se disipirati 0,17W pa je poželjno tu koristiti otpornik od barem 1/2W.

Kolektorska struja T5 prolazi i kroz njegov emiterski otpornik R5 i odabraćemo recimo da na njemu stvara pad napona od 1,2V pa njegovu vrednost računamo iz:

$$
 R_{5} = \frac{U_{R5}} {IC_{T5}} = \frac{1,2} {10} = 0,12k = 120Ω
$$

Na krajevima otpornika R3 mora da vlada toliki napon koliki je potreban da izlazni tranzistori upravo počinju da provode. Veličinu tog napona možemo oceniti znajući da je silicijumskim tranzistorima potrebno da baza bude za nekih 0,7V na višem (kod NPN-a) odnosno nižem (kod PNP-a) potencijalu od emitera. Budući da su emiteri praktično spojeni u istu tačku, moraće ukupan napon između njihovih baza biti 2 x 0,7V tj. 1,4V da bi počeli da provode. Pri tome možemo praktično zanemariti padove napona na emiterskim otpornicima R1 jer je pad napona na njima pri mirnoj struji veoma mali (desetak do dvadesetaktak mV) zbog njihovog malog otpora. Dakle, znajući da se na R3 treba da nalazi napon od oko 1,4V a uzimajući da je mirna struja drajverskog para recimo 4mA i sva prolazi kroz R3, možemo izračunati njegovu vrednost kao:

$$
 R_{3} = \frac{1,4} {4} = 0,35k (\approx330Ω)
$$

Njegova je vrednost zaokružena na najbližu standardnu vrednost od 330 oma što neće ništa značajno poremetiti izuzev što će zbog toga mirna struja drajvera biti vrlo malo veća što bi moglo više da im koristi nego smeta.

A sada da se pozabavimo ulaznim diferencijalnim stepenom sa T7 i T8. Najveći deo (ali ne sva!) izobličenja kao i "slew rate" parametar ovog tipa pojačala, zavise u najvećoj meri od ovog stepena, pa se isplati posvetiti mu dovoljno pažnje. Pojačala koja na ulazu imaju diferencijalni par (ili "long tailed pair" kako ćete naći u literaturi na Engleskom i na Internetu) rade uz korišćenje naponske povratne sprege koja se baš i dovodi na jedan od "ulaza" diferencijalnog para (pod "ulazima" se podrazumevaju baze tranzistora kod diferencijalnog para) pa ovaj sklop faktički vrši poređenje ulaznog signala i umanjenog ali vernog uzorka izlaznog signala sa zvučničkog izlaza pojačala i praktično pokušava da koriguje razlike koje postoje između ta dva signala. Ta razlika je u suštini nastalo izobličenje tj. skup "grešaka" koje je u toku obrade-pojačanja signala napravilo celo pojačalo odnosno svi njegovi stepeni dodajući svaki po malo "prljavštine" na osnovni signal. Dakle, diferencijalni ulazni stepen je i pojačavač greške pa je bitno da se potrudimo da barem on sam sa svoje strane dodatno unosi što manje izobličenja.

Za postizanje što boljih performansi, ne treba ići sa previše malim kolektorskim strujama T7 i T8. Često ćete naići na šeme u kojima ne postoje otpornici Re već su emiteri direktno spojeni a kolektorske struje "nameštene" na 300-500uA. Mnogo je bolje povećati struje T7 i T8 na recimo po 1,2mA i uvesti takozvanu "emitersku degeneraciju" ubacivanjem u emitere otpornika Re čija se vrednost u praksi kreće oko 20-100 oma (mada ćete naići i na vrednosti i do 330 oma što je ipak previše). Objašnjenje svrhe i proračuna ovih otpornika izašlo bi van okvira ovog uprošćenog tutorijala, i dovoljno je da znate da se njihovim ubacivanjem u emitere značajno linearizuje rad ovog stepena i isto tako značajno smanjuju izobličenja i mnogo manje dolaze do izražaja eventualne razlike u karakteristikama T7 i T8.

<p class="text-center">Uzimajući da su kolektorske struje T7 i T8 po 1,2mA možemo izračunati vrednost za R9 kao:</p>

$$
 R_{9} = \frac{U_{B} - {U_{BE}}} {IC_{T7+T8}} = \frac{36 - 0,6} {2,4} = 14,75k (\approx15k)
$$

Za izračunavanje otpornosti R8 polazimo od činjenice da kroz njega prolazi kolektorska struja T7 za koju smo odredili da je 1,2mA, i ona na R8 treba da stvori pad napona jednak zbiru napona na R5 i napona baza-emiter T5 pa to računamo kao:

$$
 R_{8} = \frac{U_{R5} - {U_{BET5}}} {IC_{T7}} = \frac{1,2 + 0,6} {1,2} = 1,5k
$$

Kod kvalitetnijih-poboljšanih konstrukcija ćete umesto R9 najčesće naći neku varijantu izvora konstantne struje (slično kao sklop sa T6,Dz,R2 i R4) a umesto R8 sklop sa takozvanim "strujnim ogledalom" ali to su dalja kompleksnija usavršavanja koja stvarno donose poboljšanja ali po svojoj složenosti izlaze van okvira ovog tutorijala.

Struje baza T7 i T8 su veoma male ali i pored toga nebi smele da na otpornicima R6 i R10 prave nikakav iole značajan pad napona. Ova dva otpornika bi trebalo da su iste vrednosti pa ćemo uzeti vrednost od 22k za oba tj. R6=R10= 22k. Odnos veličina R6 i R7 određuje naponsko pojačanje celog pojačala za koje ćemo odabrati da bude oko 20 pa se vrednost R7 izračunava kao:

$$
 R_{7} = \frac{R_{6}} {A_{v}-1} = \frac{22} {19} = 1,15k (\approx1,2k)
$$

Rezultat od 1,15k slobodno zaokružite na najbližu standardnu vrednost a to je 1,1k ili 1,2k jer to u praksi neće napraviti nikakvu značajnu razliku. Isto toliku vrednost treba da ima i R11 da bi se što manje poremetio ukupni balans diferencijalnog para. Ulazni kondenzator Cin sluzi prvenstveno da onemogući uvođenje bilo kakvog jednosmernog napona koji bi mogao da postoji na izlazu nekog pred-stepena koji predhodi ovom pojačalu, jer bi takav jednosmerni napon potpuno poremetio jednosmerne radne tačke celog pojačala. Tu treba koristiti što kvalitetniji kondenzator (poželjno je da to NE BUDE ELEKTROLITSKI) a njegova vrednost neka ne bude manja od 470nF da ne bi došlo do slabljenja najnižih frekvencija.

Kondenzatori C1 i C1a imaju dvostruku ulogu. Za jednosmernu struju oni su beskonačno veliki otpor pa praktično izoluju donji kraj R7 kao da on nije nigde vezan, te tako pojačalo za jednosmernu struju ima jedinično pojačanje. Za audio signal koji je naizmenične prirode, oni imaju relativno mali otpor ali koji polako raste što je frekvenca koju pojačalo pojačava niža. Pošto se nalaze u seriji sa R7 čija otpornost u odnosu na otpornost R6 određuje pojačanje, mora se za C1 koristiti dovoljno velika vrednost kako pojačanje celog pojačala ne bi počelo značajno da opada na onim niskim frekvencama koje su nam još važne za kvalitetnu reprodukciju. Zbog toga za C1 nebi trebalo ići sa vrednosću manjom od nekih 47uF u opštem slučaju, ali praktično nema potrebe ni ići preko 470uF. C1a svojim kapacitetom (najčesće oko 100nF) ne doprinosi mnogo ukupnom kapacitetu ova dva kondenzatora ali zato efikasno šentira eventualnu induktivnu komponentu elektrolitskog kondenzatora na koja bi uticala na pojačanje na visokim frekvencama.

Ako obratite pažnju na šemu, videćete da su masa ulaznog signala, donji kraj R10 i donji krajevi C1 i C1a vezani u istu tačku koja ide na masu. Istina i donji kraj R4 i Cz kao i oba elektrolita u pozitivnom i negativnom vodu napajanja takođe po šemi idu na masu ALI TE DVE MASE NISU NA PLOČICI ISTI BAKARNI VOD!!! Prva je takozvana "ulazna masa" i ona se posebnom žicom vodi do centralne tačke uzemljavanja koja je obično spoj dva glavna velika elektrolitska kondenzatora u izvoru napajanja pojačala. I "druga" masa od R4,Cz itd. se vodi takođe u tu istu tačku ali drugom-zasebnom žicom. Na taj način ćete svesti na najmanju moguću meru šanse za pojavu šumova i bruma u radu pojačala.

Ostalo je još da vidimo ulogu tranzistora T9 i njemu pripadajućih elemenata. Ovaj sklop je karakterističan za tranzistorske izlazne stepene i u stranoj literaturi ćete ga naći kao "Vbe multiplier". On služi kao "senzor" za temperaturu izlaznih tranzistora i svrha mu je da kompenzuje mirnu struju kroz njih koja bi se dosta menjala usled zagrevanja u toku rada da nema sklopa sa T9. Bipolarni tranzistori imaju takozvani "pozitivni temperaturni koeficijent" što jednostavno znači da im se kolektorska struja povećava sa zagrevanjem, a povećanje struje dovodi do daljeg sve većeg zagrevanja što vrlo brzo dovodi do pregorevanja elementa. Da bi mogao da "oseti" te promene temperature, tranzistor T9 se montira tako da je u dobrom termičkom kontaktu sa hladnjakom na kome su izlazni tranzistori. Kolektor i emiter ovog tranzistora se nalaze vezani za baze pobudnih tranzistora između kojih mora biti oko 2,8 do 2,9V da bi izlazni tranzistori bili dovoljno "otvoreni" da počnu da "vuku" mirnu struju. Kako se u toku rada hladnjak bude više zagrevao, to će se preneti i na T9 i njegova unutrašnja otpornost će se smanjivati što će prouzrokovati smanjenje napona između njegovog kolektora i emitera (jer sve više provodi) a pošto su kolektor i emiter u bazama pobudnih tranzistora, smanjenje napona između ovih baza će prouzrokovati "zatvaranje" izlaznih tranzistora tj. njihova struja će opadati. Da bi kontrolisali napon između kolektora i emitera T9 moramo mu postaviti pravilnu radnu tačku a za to nam služe trimer potenciometar Rv i otpornik R12. Seriska veza ova dva otpornika nalazi se između baza T3 i T4 a videli smo da između te dve tačke treba da vlada oko 2,8-2,9V. Kroz ovaj sklop sa T9, Rv i R12 prolazi i sva struja tranzistora T5 za koju smo ranije rekli da iznosi 10mA. Kroz serisku vezu Rv i R12 ne bi smelo da prolazi više od 1/20 struje T5 što znači oko 0,5mA pa se ukupna otpornost Rv+R12 računa kao:

$$
 R_{v} + R_{12} = \frac{2,85V} {0,5mA} = 5,7k
$$

Da bi uz pomoć trimera Rv mogli po potrebi da potpuno prekinemo struju kroz izlazne tranzistore, moramo na bazu T9 dovesti napon veći od nekih 0,6-0,7V. Uzmimo za sigurnost 0,75V. Da bi se taj napon pojavio na bazi T9 treba da klizač trimera Rv bude sasvim na onom kraju koji je vezan na kolektor T5 (tj. po šemi na donji kraj Rv). Tada se Rv ponaša kao običan otpornik i pošto sa R12 pravi razdelnik napona za koji znamo da mu je ukupna otpornost 5,7k oma i da se na njihovom spoju nalazi 0,75V a na krajevima 2,85V, ukupnu vrednost Rv računamo kao:

$$
 R_{v} = \frac{5,7k * 0,75V} {2,85V} = 1,5k
$$

Iz toga sada lako računamo vrednost R12 kao 5,7k-1,5k= 4,2k. Uzećemo najbližu standardnu vrednost 4,3k. U koliko ikada pomerimo klizač trimera Rv sasvim do kraja na koji je vezana baza T9, praktično ćemo kratko spojiti bazu i emiter T9 što će prekinuti njegovo provođenje pa će se njegov spoj kolektor-emiter ponašati kao vrlo velika otpornost. Zbog toga će i napon između baza T3 i T4 biti mnogo veći od potrebnih 2,8-2,9V što će sa svoje strane proizvesti da izlazni tranzistori momentalno počnu da "vuku" jako veliku struju i verovatno momentalno pregore! Da se to ne bi desilo bolje je za otpornost Rv uzeti manju vrednost tj. recimo 250 ili 500 oma i u seriju sa njim (od njegovog gornjeg kraja prema bazi T9) ubaciti još jedan otpornik takve vrednosti da nadoknadi razliku do 1,5k.

Na izlazu pojačala se nalazi još nekoliko komponenata čiju ulogu ovde nećemo detaljno objašnjavati. Rz i Cz čine takozvanu Zobel-ovu ili Bušero-ovu ćeliju ili mrežu i poželjno je da se nalaze na izlazu gotovo svakog pojačala jer značajno smanjuju mogućnost oscilovanja pri reaktivnim opterećenjima. Njihove vrednosti su najčesće 10 oma i 100nF i kao takve se nalaze na većini šema ali ne zato što je to neka moda već zato što su se baš te vrednosti stvarno i pokazale kao najoptimalnije u praksi. Zavojnica "L" služi da smanji ili spreči istitravanje kod kapacitivnih opterećenja i njena vrednost se u praksi kreće od oko 2uH pa do najviše 6uH. Ona se mota lakiranom bakarnom žicom za transformatore a optimalna debljina je od 1,2-1,5mm. Ovoj zavojnici se mora smanjiti Q-faktor što više da sa raznim kapacitivnostima (zvučničkog kabla, ožičenja izmedju pločica... itd.) ne bi eventualno stvarala rezonanse koje bi mogle da pobude samooscilacije izlaznog stepena. Zato se paralelno njoj uvek stavlja otpornik čija otpornost ne bi trebala da je veća odnekoliko oma (1-5 oma).

<p style="color: red;" class="text-center">Ovo bi uglavnom zaokružilo jednu uprošćenu sliku današnjeg prosečnog-standardnog audio pojačavača snage. Ovaj tutorijal je i zamišljen da bude vrlo uprošćen i što je više moguće, prilagođen nivou znanja i razumevanja mladih ili manje iskusnih samograditelja, pa se nadam da će im dati dovoljno osnove za prve korake u samostalnom radu.</p>
