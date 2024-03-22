---
title: "OPŠTA PROCEDURA KOD PRVOG UKLJUČENJA AUDIO POJAČALA"
date: 2024-03-18
description: "Tutorijal"
draft: false
tags: ["Tutorijal"]
weight: 10
---
## OPŠTA PROCEDURA KOD PRVOG UKLJUČENJA AUDIO POJAČALA

Ovo *uopšteno* praktično **uputstvo** namenjeno je uglavnom mlađim (po iskustvu) samograditeljima koji još nisu stekli dovoljno iskustva budući da im je to jedan od prvih ili možda baš prvi ozbiljniji projekat. Ako je tako, smatram da im neće biti na odmet da pročitaju i "Opšta Uputstva Za Gradnju Pojačala".

Većina današnjih dizajna izlaznih stepena srednje i veće snage su gotovo po pravilu urađena sa diferencijalnim parom na ulazu, komplementarnim parom snažnih tranzistora ili FET-ova na izlazu i simetričnim tj. "split" napajanjem. Zato će se ovo uputstvo u najvećoj meri i odnositi baš na takav tip izlaznog stepena.

> Svaku gradnju prati svojevrsno uzbuđenje i nestrpljenje da se vidi i čuje kako to radi i to je najčešća zamka u koju upadaju manje iskusni graditelji. Pokušajte da po svaku cenu odolite tom izazovu jer je to mnogima donelo razočarenja kod prvih neuspeha. Pre prvog uključenja bilo kog izlaznog stepena stvarno je neophodno da uradite i obezbedite nekoliko stvari i to:

<p style="color: red;" class="text-center">SVAKOG MOMENTA U TOKU RADA IMAJTE NA UMU DA MOŽETE DOĆI U KONTAKT I SA NAPONIMA OPASNIM PO ZIVOT! SAMOUVERENOST I BRZOPLETOST SE MNOGIMA OSVETILA!</p>

- Vrlo pažljivo još jednom proverite da niste neku komponentu zalemili na pogrešno mesto na pločici. Posebno pazite kod komponenti kod kojih je važan i polaritet (diode, tranzistori, integralna kola, elektrolitski kondenzatori) da ih niste pogrešno postavili i tako zalemili.
- Kod pločica sa vodovima ili lemnim tačkama koji su vrlo blizu jedni drugima, proverite da u toku lemljenja niste negde napravili "mostić" od kalaja koji kratkospaja susedne vodove. Ako treba koristite i lupu jer to nekada zna da bude tanje od vlati kose. Najbolje bi bilo da pre te provere dobro operete pločicu sa te strane uz pomoć alkohola ili spiritusa i recimo stare četkice za zube. APSOLUTNO N I K A D A za lemljenje u elektronici nemojte koristiti pastu za lemljenje!!!
- Proverite da vam ni jedna nožica bilo kog elementa koji se montira na hladnjak, nije u kratkom spoju sa njim. Ovo jedino ne važi kod nekih vrlo specifičnih konstrukcija kod kojih su neki elementi bez izolatorskih podloški direktno u kontaktu sa metalom hladnjaka, ali je onda i hladnjak izolovan od šasije i svega ostalog! Ne zaboravite da pre definitivnog pričvršćenja tih elemenata nanesete i tanji sloj silikonske termo-provodne paste i to SA OBE STRANE liskunske podloške zbog boljeg odvođenja toplote na hladnjak.
- Postavite kratak spoj na ulaz a izlaz ostavite "otvoren" jer za prvo uključenje tu ne treba vezivati ni vestačko opterečenje ni zvučnik.
- Nabavite dva veća keramička otpornika od po 10-20 oma i snage oko 10-20W (ja koristim 20 oma/17W). Njih ćete vezati u vodove napajanja između izlaznog stepena i ispravljača, dakle jedan u vod za pozitivni napon a drugi u vod za negativni. Oni se vezuju tamo gde se obično nalaze osigurači, tako da sva struja prema izlaznom stepenu mora proći kroz njih. Ovi otpornici imaju veliku zaštitnu ulogu jer praktično potpuno štite vas uređaj od moguće katastrofe u momentu prvog uključenja. U koliko u tom momentu bilo šta nije u redu, izlazni stepen će verovatno imati tendenciju da "povuče" veliku struju. Sva ta struja mora da prođe kroz ova dva otpornika i ona će na njima stvoriti popriličan pad napona ( koji je tim veći što je veća struja ) pa će vas izlazni stepen biti zaštićen od pregorevanja ( a i vas džep i živci!).
- Pre nego što na njega povežte izlazni stepen, proverite da vam ispravljač-izvor napajanja radi ispravno i daje potrebne napone. Pozitivni i negativni napon nebi smeli da se razlikuju za više od nekih 0,5 do 1V.
- Ako ne znate gde bi odprilike trebalo da se nalaze klizači trimer potenciometara za podešavanje mirne struje i simetrije (ako ih uopšte ima u tom dizajnu), postavite ih pre prvog uključenja na sredinu njihovog hoda. Vrlo je verovatno da im to nije pravi-optimalan položaj ali nemate drugog izbora a to je najbolji kompromis.

Sada dolazi na red priključenje mernih instrumenata. Najoptimalnije bi bilo da imate na raspolaganju dva instrumenta i ako su to takozvani "univerzalci" tj. A-V-O metri, jedan koristite kao ampermetar za jednosmernu struju i u početku mu preklopnik postavite na 1 ili 2 ili više Ampera i vežite ga u seriju sa onim keramičkim otpornikom u pozitivnoj grani napajanja. Dobićete praktično istu stvar i ako ga postavite da radi kao milivolt-metar ali ga vežete paralelno krajevima tog otpornika. Jedino će te tada morati "u glavi" da preračunavate kolika je to struja po Omovom zakonu a znajući tačnu otpornost otpornika. Drugi instrument (poželjno digitalni ) koristite kao voltmetar za jednosmernu struju, za početak na nekom višem opsegu (recimo 20 ili 50V jer ne znate da li je simetrija OK!), i pozitivni "šiljak" (obično je to crveni) vežite na izlaz za zvučnik, a negativni na masu tj. spoj dva velika elektrolita u ispravljaču. Postavite oba instrumenta blizu jedan drugom a i blizu izlaznog stepena koji podešavate tako da sve tri stvari praktično vidite "jednim pogledom".

Sada ste spremni za prvo uključenje!

> Najbolje je da strujni kabel koji vodi do ispravljača bude uključen u one trostruke ili višestruke razvodnike sa prekidačem jer tako možete momentalno da isključite na prekidaču umesto da "čupate" šuko iz utičnice.
- uključite struju ALI BUDITE SPREMNI DA JE VEĆ SLEDEČEG MOMENTA ISKLJUČITE ako nešto nije u redu
- voltmetar na izlazu nebi smeo da pokazuje napon (u plus ili minus) veći od nekoliko stotina milivolta ili najviše do 1V za početak. U koliko je veći - ODMAH ISKLJUČUJTE!!! i tražite problem.
- ampermetar nebi smeo da pokazuje više od recimo 500mA i imajte već spremnu ruku sa odgovarajućim odvijačem-"šrafcigerom" na trimeru za podešavanje mirne struje i probajte da je smanjite na 50-tak miliampera. Ako ne može dovoljno da se smanji ili uopšte ne reaguje na okretanje trimera - ODMAH ISKLJUČUJTE!!!
- u koliko su oba parametra u granicama prihvatljivog za prvo uključenje, podesite mirnu struju na vrednost nešto manju od one naznačene u šemi ili uputstvu ( ako treba 50mA postavite za početak na 30mA) i ako postoji trimer za simetriju, pokušajte da podesite što bliže nuli tj. da vam milivoltmetar priključen između zvučničkog izlaza i mase pokazuje 0V ili što bliže.
- ostavite pojačalo tako da radi 5..10..15 minuta i sve vreme posmatrajte oba instrumenta i po potrebi korigujte. Simetrija se najčešće neće menjati (ili vrlo malo) ali je verovatno da će mirna struja polako rasti sa zagrevanjem pa je treba povremeno trimerom smanjivati.
- kontrolišite i grejanje svih elemenata a najviše onih koji su na hladnjaku. Dokle god možete da izdržite da na hladnjaku držite ruku njegova temperatura je ispod 55-60 stepeni Celzijusa što je za silicijumske komponente sasvim prihvatljivo.
- posle 10..15 minuta bi trebalo da je pojačalo postiglo termičku ravnotežu što znači da je hladnjak zagrejan do neke temperature koja više neće rasti. Ovo se odnosi na temperaturu u toku podešavanja dok ona kasnije u toku upotrebe može biti dosta veća što je normalno.
- sada podesite mirnu struju na preporučenu vrednost i još jednom proverite simetriju.
- ostavite uključeno još koji minut da se uverite da se ništa ne menja i ako je tako možete isključiti pojačalo.
- uklonite zaštitne otpornike i oba voda napajanja vežite direktno
- uklonite voltmetar sa izlaza a miliampermetar sada preklopnikom podesite da bude ampermetar na opsegu 1..2 ampera
- na izlaz povežite zvučnik i uklonite kratak spoj sa ulaza
- na ulaz (preko potenciometra) dovedite signal iz nekog izvora ( na primer signal-generator, CD-plejer ili tjuner). Ako nemate kvalitetan Sig-Gen najbolje je da koristite dobar CD-plejer. Potenciometar za prvi momenat okrenite na minimum!
- uključite napajanje i proverite da je mirna struja u granicama dozvoljenog. Ako se pojačalo u međuvremenu ohladilo, mirna struja će biti niža nego što ste je zadnji put podesili. To je normalno i NE DIRAJTE TRIMER!
- polako počnite da okrećete potenciometar na ulazu dok se ne začuje ton ili muzika u zvučniku. Stalno krajičkom oka gledajte ampermetar koji će sada početi da pokazuje sve veću struju što je jači zvuk u zvučniku
- postavite jačinu na nekoliko vati i ostavite nekoliko minuta da svira. Tada naglo smanjite potenciometar na minimum i proverite mirnu struju i ako je potrebno podesite na nominalnu vrednost
- sada podesite jačinu negde na polovinu hoda potenciometra i kontrolišući struju i temperaturu hladnjaka, ostavite da radi nekoliko minuta.
- ponovo naglo smanjite potenciometar na minimum i proverite mirnu struju koja nebi trbalo da je više od dva puta veća nego nominalno. Ako jeste, proverite šta nije u redu.
- proverite da nema velike razlike u temperaturi samih izlaznih tranzistora i hladnjaka u njihovoj okolini. PAZITE DA SE NE OPEČETE !!! Ako postoji veća razlika, logično je šta treba da proverite - ili ste zaboravili da nanesete silikonsku pastu ili niste dovoljno pritegli šrafove koji drže tranzistore, ili je izolatorska podloška lošeg kvaliteta. Za većinu novijih tipova materijala za te podloške se navodi da ne treba silikonska pasta, ali iz iskustva tvrdim da su dosta lošije rešenje (što se efikasnosti odvođenja toplote tiče) od starih liskunskih podloški kada su sa obe strane namazane pastom. Ovo sve više dolazi do izražaja što pojačalo proizvodi više toplote (što je veće snage).

<p style="color: red;" class="text-center">Ovo bi bila standardna procedura za prvo uključenje gotovo bilo kog standardnog poluprovodničkog audio izlaznog stepena, i u koliko odolite nestrpljenju i pratite ovu proceduru, gotovo je sigurno da uspeh neće izostati.</p>
