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
