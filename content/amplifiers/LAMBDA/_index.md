---
title: "LAMBDA"
date: 2024-03-18
description: "Pojačalo visokog kvaliteta"
draft: false
tags: ["LAMBDA"]
weight: 10
---
## Pojačalo visokog kvaliteta
<hr>
{{< load-photoswipe >}}
{{< gallery caption-effect="fade" >}}
  {{< figure src="./gallery/LAMBDA/LAMBDA - Pločica (d.veljko83).jpg" caption="LAMBDA - Pločica (d.veljko83)" >}}
  {{< figure src="./gallery/LAMBDA/LAMBDA - Ugradnja (d.veljko83).jpg" caption="LAMBDA - Ugradnja (d.veljko83)" >}}
  {{< figure src="./gallery/LAMBDA/LAMBDA - Kućište (d.veljko83).jpg" caption="LAMBDA - Kućište (d.veljko83)" >}}
{{< /gallery >}}
<hr>

*Lambda* je jedan od mojih **novijih** dizajna koji je, ovako kako je ovde dat, uobličen tek pre nekih godinu dana, ali je baziran na nekim mojim rešenjima nastalim još jako davno. Bio sam strašno iznenađen kada sam pre nekoliko meseci u diskusiji na Osiječkom ACCO forumu dobio priliku da vidim pojačalo i šemu koju je neki čovek patentirao 2005 godine, a takav ulazni sklop sam napravio pre više od 20-tak godina! i sada ga ponovo iskoristio u Lambda dizajnu. Bio sam prilično besan na sebe ali pošteno rečeno, niko mi je kriv što nisam tada prepoznao kvalitete sklopa, mada to nije tada prepoznao ni bilo ko drugi iako je niz ljudi znalo tu šemu ali "nije zaživela" niti bila prihvaćena.

Izlazni stepen je ideja Andreja Laknera (koristio sam je i u CroSer-u) kod koje se radi o diskretnoj varijanti komponente poznate kao IGBT ili Insulated Gate Bipolar Transistor kojoj se ulaz ponaša kao gejt MOSFET elementa a izlaz kao bipolarni tranzistor objedinjujući u dobroj meri pozitivne strane i jednog i drugog tipa poluprovodnika. Time se u nekoliko smanjuju zahtevi za neke osobine pobudnog stepena jer se gejt MOSFET-a pobuđuje skoro samo naponom pa ne treba nikakva snaga jer nema potrebe za strujom pobude. Zato je bilo moguće da se takav izlaz pobuđuje direktno iz VAS stepena. Da ne bude zabune, nije sve baš tako ružičasto ni sa MOSFET-ovima zbog parazitnih povratnih kapacitivnosti koje su kod njih mnogo veće nego kod bipolarnih tranzistora. Jedini mali minus ovog izlaza je možda to što bi se trebalo truditi da se pronađu izlazni bipolarni tranzistori sa što približnijim Ic/Ube karakteristikama da bi raspodela struja bila što ravnomernija. Ako se te karakteristike bitnije razlikuju kod NPN i PNP tranzistora pobuđivanih istim MOSFET-om, može se desiti da onaj BJT sa nižim pragom vuče veći deo struje jer se ranije otvara. Sva struja MOSFET-a koja prolazi i kroz drejn mora proći i kroz sors, dakle, praktično je indentična (jer nema struje gejta) pa pošto se u obe elektrode MOSFET-a nalaze otpornici iste vrednosti, to će na njima uvek biti isti pad napona. Zato je bitno nači i koristiti NPN i PNP tranzistore sa što sličnijim pragom otvaranja kako bi vukli približno iste kolektorske struje. Ne treba ovome prići fanatično jer ce pojačalo, zahvaljujući emiterskim otpornicima, raditi i sa ne baš idealno uparenim tranzistorima ali se zbog pouzdanosti u radu i ravnomerne raspodele disipacije treba malo pomučiti sa uparivanjem.

Sklop za BIAS je nešto drugačiji i to je moja varijanta jednog poznatog klasičnog rešenja. Razlika kod moje modifikacije su dva trimera za podešavanje. Prva verzija BIAS-a bila je sa 4xBD139 vezani kao diode i TL431, ali je imala konstantan mali pozitivan drift tj. bilo je potkompenzovano. Onda sam to zamenio sa CFP sklopom koji je pak bio prekompenzovan. E tada mi je pala ideja da na svoj način modifikujem CFP Vbe kontrolu i to dodavanjem emiterskog otpornika na regulacioni tranzistor. Na kraju sam postigao da u opsegu temperature hladnjaka od uključenja (hladan hladnjak) do nekih 65-70 stepeni mirna struja skoro stoji oko vrednosti od 200mA sa malim sporim varijacijama +/-10mA. Trik je u načinu podešavanja. Tranzistor Q1 je termički spregnut sa hladnjakom a Q2 je na pločici. U momentu uključenja kada je hladnjak hladan podesi se trimerom BIAS1 od 20k na struju 25% veću od potrebne (u mom slucaju 250mA a prava potrebna struja je 200mA- oko 100mA po paru). Kako se hladnjak greje tako BIAS opada i na temperaturi 65-70 stepeni se trimerom BIAS2 od 1k ponovo dotera (podigne) na potrebnu struju tj. 200mA ali pri tome ne dirajući trimer BIAS1. Pre ugradnje na pločicu i podešavanja, trimer BIAS2 od 1k podesiti na oko 300 oma. Nesreća je da su regulacije međuzavisne pa je postupak potrebno ponoviti barem 3 puta a svaki put hladnjak treba potpuno ohladiti na sobnu temperaturu kao na početku podešavanja. Možda deluje komlikovano ali u praksi nije a dobijeni rezultat je odličan. Na mnogo mesta sam nailazio na to da se ljudi žale da je CFP regulator nestabilan... ja nisam imao ni traga nestabilnosti, čak sam se trudio da namerno izazovem nestabilnost ali mi nije uspelo!

Lambda zvuči vrhunski i ako joj date dobar i dovoljan hladnjak kao i kvalitetan i moćan PSU, dobićete pojačalo vrlo visoke klase koje karakteriše visoka dinamika, savršena neutralnost i obilje snage gotovo kao da je tri puta jače nego što stvarno jeste.

