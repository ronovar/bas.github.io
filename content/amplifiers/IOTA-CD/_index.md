---
title: "IOTA-CD"
date: 2024-03-18
description: "Hibridno pojačalo po current dumping sistemu"
draft: false
tags: ["IOTA-CD"]
weight: 10
---
## Hibridno pojačalo po current dumping sistemu

<hr>
{{< load-photoswipe >}}
{{< gallery caption-effect="fade" >}}
  {{< figure src="./gallery/IOTA-CD/IOTA-CD - Pločica (vksamel).jpg" caption="IOTA-CD - Pločica (vksamel)" >}}
  {{< figure src="./gallery/IOTA-CD/IOTA-CD - Testiranje (vksamel).jpg" caption="IOTA-CD - Testiranje (vksamel)" >}}
  {{< figure src="./gallery/IOTA-CD/IOTA-CD - Pločica (nonick).jpg" caption="IOTA-CD - Pločica (nonick)" >}}
  {{< figure src="./gallery/IOTA-CD/IOTA-CD - Testiranje (nonick).jpg" caption="IOTA-CD - Testiranje (nonick)" >}}
{{< /gallery >}}
<hr>

*IOTA-CD* je još jedan od **mojih** dizajna koji je nezasluženo dugo ležao u arhivi po strani. Na sreću, zahvaljujući dvojici mlađih entuzijasta, Vladi Kneževiću iz Osijeka ("vksamael" na ACCO Forumu) i Banetu Sašiću("enaB" na ES forumu) ovaj dizajn je ipak ugledao svetlost dana mada to nije islo sasvim lako i bez muka i problema. Prvo se Vlada zainteresovao i lepo krenuo u gradnju i uz puno truda i energije dogurao do funkcionalnog prototipa koji je ipak pravio malo problema i tražio dalji rad. Na žalost, Vlada je morao da te aktivnosti privremeno zapostavi iz privatnih porodičnih razloga, ali se na sreću nekako u isto vreme i Bane zainteresovao da to proba i evo izneo prototip do kraja.

Koncepcijski, IOTA-CD je DOGC-MK3 sa diferencijalnim ulazom izvedenim sa dvostrukom triodom E88CC (ECC88). Izvrsni rezultati sa DOGC-MK3 i DOGC-H su mi dali ideju da probam kako bi to radilo i zvučalo sa lampama na ulazu u diferencijalnom paru. Da li se korišćenjem lampi na tom mestu nešto dobilo u pozitivnom smislu to ne smem da tvrdim jer iako je to moj dizajn, ja pojačalo nisam nikada čuo, a i to bi se moglo utvrditi jedino ako bi se napravio "slepi" slušni test sa DOGC-MK3 pored IOTE-CD i pri tom sa istim ostatkom sistema (zvučnici, kablovi, izvor signala...). Specifičnost lampi kao komponenata je donela i neke dodatne probleme kojih obično nema kod čisto poluprovodničkih ali ni kod čisto lampaških uređaja. Lampama treba neko konačno i ne baš malo vreme da se zagreju i dostignu svoje radne tačke dok poluprovodniči to čine u deliću sekunde po uključenju. Kod IOTE radne tačke poluprovodničkog dela, koji sledi iza lampaškog ulaza, zavise od pravilne statičke radne tačke lampi na ulazu, ali one to zbog laganog zagrevanja postižu mnogo kasnije no što je potrebno za rad poluprovodničkog dela. Jedini način da se to reši je bio da se uradi malo složeniji sekvencijalni sistem uključenja napajanja koji će poluprovodničko napajanje uključiti tek kada lampe dostignu svoje stabilne radne tačke. Proces zagrevanja katode traje najduže pa se prilikom paljenja uređaja prvo pojavljuje napon grejanja i to tako da i on postepeno raste dok ne stigne na 6,2 - 6,3V. Visoki napon za anode lampi još ne postoji jer je privremeno blokiran tajmerom 555. Kada napon grejanja dosegne 6,3V deblokira se tajmer 555 i on će posle nekoliko sekundi da deblokira dovodjenje visokog napona na triode ali i da uključi releje koji dovode mrežni napon na transformatore za napajanje poluprovodničkog dela pojačala. Na taj način će u momentu svog uključenja, poluprovodnički deo već imati definisane uslove za rad jer su triode zagrejane i u predviđenom radnom režimu. Prekidanje napajanja poluprovodničkog dela se moglo odraditi nekim Solid State relejima, ali sam to smatrao lošijim i komplikovanijim rešenjem.

Tokom rada na prototipu, ispostavilo se da lampe baš nisu ni tako "slatke" a ni savršene kako ih mnogi uzimaju zdravo za gotovo! Skoro kod svih korišćenih lampi bilo je dovoljno značajne razlike između trioda u istom balonu da je to izazivalo priličan DC potencijal na izlazu koji uz to nije bio ni naročito stabilan. Moralo se pribeći koriscenju DC Servo sklopa koji će automatski drzati izlazni DC potencijal u potrebnim granicama. Korišćeni sklop je sasvim standardan i vrlo uspešno obavlja svoj zadatak.

Zbog nedostatka ozbiljne merne opreme, jedino je snaga za sada poznata, ali će i ostali podaci biti dodavani kako ih budem saznavao. Ono što pouzdano znam iz Banetovih i Vladinih mailova je da pojacalo izuzetno lepo zvuči.

### Specifikacije
<hr>
{{< paige/quote >}}
75 - 80W RMS/8Ω<br>(pri 80% izlazne snage)<br>***Prosečna izlazna snaga***
{{< /paige/quote >}}

{{< paige/quote >}}
*********<br>(20Hz-20kHz/80%snage)<br>***Frekventni opseg snage***
{{< /paige/quote >}}

{{< paige/quote >}}
*********<br>(20Hz-20kHz/80%snage)<br>***THD***
{{< /paige/quote >}}

{{< paige/quote >}}
*********<br>(20Hz-20kHz/80%snage)<br>***TIM***
{{< /paige/quote >}}

{{< paige/quote >}}
*********<br>(pri 80% izlazne snage)<br>***Slew rate***
{{< /paige/quote >}}

{{< paige/quote >}}
*********<br>(pri 80% izlazne snage)<br>***Damping faktor***
{{< /paige/quote >}}
<hr>

<p style="color: red;" class="text-center">Ako ste manje iskusni u gradnji audio uređaja, preporučujem da pogledate neka uputstva u TUTORIJALIMA.</p>

