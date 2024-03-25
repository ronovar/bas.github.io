---
title: "CROSER"
date: 2024-03-18
description: "IGBT pojačalo"
draft: false
tags: ["CROSER"]
weight: 10
---
## IGBT pojačalo

<hr>
{{< load-photoswipe >}}
{{< gallery caption-effect="fade" >}}
  {{< figure src="./gallery/CROSER/CROSER - Testiranje (micro).jpg" caption="CROSER - Testiranje (micro)" >}}
  {{< figure src="./gallery/CROSER/CROSER - Sinus 40Hz (micro).jpg" caption="CROSER - Sinus 40Hz (micro)" >}}
  {{< figure src="./gallery/CROSER/CROSER - Sinus 1kHz (micro).jpg" caption="CROSER - Sinus 1kHz (micro)" >}}
  {{< figure src="./gallery/CROSER/CROSER - Pila 1.04kHz (micro).jpg" caption="CROSER - Pila 1.04kHz (micro)" >}}
  {{< figure src="./gallery/CROSER/CROSER - Sinus 25.8kHz (micro).jpg" caption="Sinus 25.8kHz (micro)" >}}
  {{< figure src="./gallery/CROSER/CROSER - Pila 25.8kHz (micro).jpg" caption="CROSER - Pila 25.8kHz (micro).jpg" >}}
  {{< figure src="./gallery/CROSER/CROSER - Sinus 53.3kHz (micro).jpg" caption="CROSER - Sinus 53.3kHz (micro)" >}}
  {{< figure src="./gallery/CROSER/CROSER - Pila 54.9kHz (micro).jpg" caption="CROSER - Pila 54.9kHz (micro).jpg" >}}
  {{< figure src="./gallery/CROSER/CROSER - Sinus 108kHz (micro).jpg" caption="CROSER - Sinus 108kHz (micro)" >}}
  {{< figure src="./gallery/CROSER/CROSER - Sinus 150kHz (micro).jpg" caption="CROSER - Sinus 150kHz (micro)" >}}
  {{< figure src="./gallery/CROSER/CROSER - Sinus 208kHz (micro).jpg" caption="CROSER - Sinus 208kHz (micro)" >}}
  {{< figure src="./gallery/CROSER/CROSER - Sinus 373kHz (micro).jpg" caption="CROSER - Sinus 373kHz (micro)" >}}
{{< /gallery >}}
<hr>

*"CroSer"* **dizajn** je nastao na bazi inspiracije dobijene od vrlo lepe i duhovite ideje Slovenačkog audio entuzijaste i dizajnera Andreja Laknera (na forumima pod imenom "Lazy Cat"). Zato u podnaslovu i stoji "sa jakim prizvukom Slovenije". Dizajn sam posvetio svojim dobrim prijateljima sa Osiječkog ACCO foruma pa je u tu čast i sam naziv dizajna sklopljen od početnih slova imena naših zemalja: Croatia i Serbia. Ako se iko bude zapitao ima li iza toga kakvih "drugih primisli", moj odgovor je: svakako, i to vrlo konkretnih - objasnio sam ih i na svetskom DIY Audio Forumu:

"Name is coming from names of our two countries: CROatia-SERbia. I am trying to extend and offer a "friendly hand" to my friends in Croatia. There are excellent and valuable people everywhere (as well as bad ones!) and I am trying to make bridges between those worth sincere friendship! "

Uproščeno rečeno, kod Laknerove ideje se radi o diskretnoj varijanti komponente poznate kao IGBT ili Insulated Gate Bipolar Transistor kojoj se ulaz ponaša kao gejt MOSFET elementa a izlaz kao bipolarni tranzistor objedinjujući u dobroj meri pozitivne strane i jednog i drugog tipa poluprovodnika. Time se u nekoliko smanjuju zahtevi za neke osobine pobudnog stepena jer se gejt MOSFET-a pobuđuje skoro samo naponom pa ne treba nikakva snaga jer nema potrebe za strujom pobude. Da ne bude zabune, nije sve baš tako ružičasto ni sa MOSFET-ovima zbog parazitnih povratnih kapacitivnosti koje su kod njih mnogo veće nego kod bipolarnih tranzistora. Jedini mali minus je možda to što bi se trebalo truditi da se pronađu izlazni bipolarni tranzistori sa što približnijim Ic/Ube karakteristikama da bi raspodela struja bila što ravnomernija. Ako se te karakteristike bitnije razlikuju kod NPN i PNP tranzistora pobuđivanih istim MOSFET-om, može se desiti da onaj BJT sa nižim pragom vuče veći deo struje jer se ranije otvara. Sva struja MOSFET-a koja prolazi i kroz drejn mora proći i kroz sors, dakle, praktično je indentična (jer nema struje gejta) pa pošto se u obe elektrode MOSFET-a nalaze otpornici iste vrednosti, to će na njima uvek biti isti pad napona. Zato je bitno naći i koristiti NPN i PNP tranzistore sa što sličnijim pragom otvaranja kako bi vukli približno iste kolektorske struje. Ne treba ovome priči fanatično jer će pojačalo, zahvaljujući emiterskim otpornicima, raditi i sa ne baš idealno uparenim tranzistorima ali se zbog pouzdanosti u radu i ravnomerne raspodele disipacije treba malo pomučiti sa uparivanjem.

Ulazni stepen je izveden dosta klasično sa simetričnim diferencijalnim parovima ali bez izvora konstantne struje (CCS) u zajedničkoj grani. Mada ne mogu sasvim pouzdano da to objasnim, ali je opšti karakter zvuka nešto lepši sa ovakvim rešenjem, a i onaj početni udarac u zvučniku kod uključenja je ovim u priličnoj meri eliminisan. Diferencijalni stepeni su na svom izlazu simetrični pa je za sumiranje i prelaz na nesimetričan sistem korišćen takozvani Lender-ov sklop za koji još tvrde da je i najlinearniji. Iako sklopovi posle Lenderovog stepena ne zahtevaju nikakvu snagu za pobudu, ipak je zbog što bolje linearnosti i kroz njega propuštena struja dovoljna da ga za bilo koji signal drži duboko u linearnom režimu sa svim prednostima koje to sa sobom nosi. "Vbe" sklop je kod CroSer-a rešen koriščenjem promenjljivog izvora reverentnog napona sa kolom TL431 i nizom od 4 tranzistora BD139 serije vezanim kao diode. Namerno su odabrani tranzistori u tom kučištu (TO126) koje je mehanički pogodno da se montira direktno preko kučišta izlaznih tranzistora da bi reagovanje na temperaturu bilo sa manjom inercijom i što preciznije. Te je tranzistore moguće montirati i na sam glavni hladnjak između izlaznih tranzistora, ali će tada reagovanje celog BIAS sistema biti usporenije.

Nema ničeg posebnog u vezi gradnje a što bi se razlikovalo od uobičajenih opaski koje važe za SVE kvalitetne audio pojačavače. Ako stvarno očekujete maksimum osobina i pouzdanost u radu, obavezno je da se što bolje upare svi tranzistori u ulaznom delu, a veoma bi valjalo da se to odnosi na sve aktivne komponente na šemi, ako vam uslovi to dozvoljavaju.

Ipak, postoji jedna posebnost koja se odnosi na redosled sklapanja i testiranja. Onaj ko pokuša da sklapa CROSER treba da prvo postavi sve komponente u ulaznom sklopu i za sada da ne postavlja ništa od onoga što se na slici nalazi desno od tačke "A". Na pločicu ne treba stavljati ni TL431 niti oko njega pripadajuće elemente, već se tu za sada a prema ovoj modifikovanoj šemi, stavljaju dva otpornika od 820 oma sa kolektora VAS tranzistora. U njihov spoj (to je tačka "A") se vezuje otpornik 20k od povratne sprege. Sada je privremeno tačka "A" izlaz sklopa i ako je sve OK, treba da je moguće u toj tački podesiti 0V u odnosu na masu a podešavanje je trimerom od 2k na ulazu sklopa koji inače služi za podešavanje simetrije pojačala. Ako je to postignuto, treba još samo izmeriti pad napona na tim dodatim otpornicima od 820 oma koji treba da je kao na slici tj. oko 3,7 do 3,8V mada nije baš kritično da bude u milivolt toliko!. Ako je i to OK, ceo ulazni sklop radi kako treba, i tada treba ukloniti oba otpornika od 820 oma i onaj od 20k vratiti na originalnu poziciju. Tek sada dodati na pločicu i sve ostale elemente prema izlazu, i kada je sve gotovo, napraviti prvo uključenje ali savetujem obavezno kroz zaštitne otpornike u oba raila za izlazni stepen i prateči redosled poteza po mom tutorijalu za prvo uključenje!

<p>{{< paige/image alt="Croser-First" class="rounded-2" src="./images/Croser-First.png" title="Croser-First" >}}</p>

Obratite pažnju i na još jednu stvar - kod prvog uključenja večine pojačala se ulaz bukvalno kratkospaja ali u slučaju CroSer-a se to ne sme uraditi već se sa ulaza na masu vezuje neki blok kondenzator od recimo 1uF. Ako se ulaz direktno kratkospoji, tada bi ulaznom otporniku od 20k bio paralelno vezan i ulazni od 100 oma što bi poremetilo simetriju budući da oba ulaza diferencijalnih parova ne "gledaju" u isto opterećenje = bilo bi sa jedne strane 20k od povratne sprege a sa druge strane 100 oma na ulazu jer bi kratkospajanjem ulaza direktno na masu ovaj ulazni od 20k prakticno "nestao".

Kao i kod nekih drugih mojih dizajna i u slučaju CroSer-a želim da istaknem i zahvalim se mladom konstruktoru Janku Manjošu koji je na ACCO forumu poznat pod nadimkom "micro" , a koji je vrlo hrabro odabrao da pokuša da napravi ovaj dizajn! Kažem "hrabro" jer je do tog momenta to bio samo prototip na papiru koji pre njega niko nije sklopio, pa je postojao veliki rizik i neizvesnost da li će to uopšte proraditi i kako!

Za CroSer pojačalo je vezan još jedan kuriozitet: Iako sam ja dizajner, ja ga nikada nisam sklopio niti čuo kako radi!!! Koliko je meni poznato, jedino je "micro" do sada sklopio CroSer i on je jedini koji može bilo sta reći o njegovim zvučnim osobinama i kvalitetima. "Micro" tvrdi da mu izuzetno dobro zvuči sa velikom dinamikom i potpunom neutralnošću a poredio ga je i sa svojim dosadašnjim Yamaha uređajem i tvrdi da su iz različitih klasa i da je CroSer neuporedivo bolji od njegove Yamahe! Za sve detaljnije ili opširnije utiske vezane za CroSer, molim da potražite "micro"-a na ACCO forumu i njega pitate jer te odgovore jedino on za sada ima. Ovo važi za one kojima su slušni utisci najvažnije ili čak i jedino merilo.

Za one druge koje ocenu na sluh zanima i tehnička strana, evo nekoliko snimaka rezultata na osciloskopu za vreme inicijalnih merenja. Korišćeni Sig Generator je bio sa XR2206 koji na žalost nije davao baš najčistiji signal posebno na visokim frekvencama. Srećom, "micro" je uradio tako da su na ekranu osciloskopa prisutni i ulazni i izlazni signal jedan ispod drugog tako da se vizuelno može lepo pratiti eventualno odstupanje oblika izlaznog signala ako postoji.

### Specifikacije
<hr>
{{< paige/quote >}}
100W RMS/8Ω<br>(pri 80% izlazne snage)<br>***Prosečna izlazna snaga***
{{< /paige/quote >}}

{{< paige/quote >}}
5Hz - 175kHz<br>(pri 70% snage, THD ispod 0.1%)<br>***Frekventni opseg snage***
{{< /paige/quote >}}

{{< paige/quote >}}
<0.01%<br>(12Hz-92KHz i u opsegu do 70% izlazne snage)<br>***THD***
{{< /paige/quote >}}
<hr>

{{< file-download title="download" file="CROSER">}}

<p style="color: red;" class="text-center">Detaljnija merenja ostalih parametara nisu izvršena zbog nedostatka adekvatnih instrumenata!</p>

<p style="color: red;" class="text-center">Ako ste manje iskusni u gradnji audio uređaja, preporučujem da pogledate neka uputstva u TUTORIJALIMA.</p>
