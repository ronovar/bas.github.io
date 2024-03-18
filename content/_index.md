---
description: "Audio Primenjene Elektronike"
paige:
  search:
    hide_page: true
  style: |
    #paige-collections,
    #paige-sections,
    #paige-pages {
        display: none;
    }
    #paige-title {
        font-size: 5rem;
    }
title: ".: Borina Amaterska Svaštara :."
---

<p>{{% paige/image alt="Landscape" breakpoints=true class="object-fit-cover rounded-4" fetchpriority="high" height="20rem" loading="eager" process="webp" src="{{ $image := resources.Get "images/paige-home.png" $image.RelPermalink }}" width="100%" %}}</p>

<p class="display-5 fw-bold h2 text-center">Molim da pročitate pre nego što krenete na ostale stranice!!!</p>

<div class="container-fluid">
    <div class="justify-content-center row">
        <div class="col col-auto col-lg-7 px-0">
            <p class="lead text-center">Paige is designed to put your content front and center, avoiding the typical clutter. The look is seamless and smooth, scalable and readable, portable and efficient. The layout is minimal and responsive, using verticality and white space to focus and delineate parts of the page. The implementation is flexible and extensible. It’s a versatile canvas that serves most web needs.</p>
        </div>
    </div>
</div>

<p class="text-center">
    <a class="lead" href="https://github.com/willfaught/paige">Install it now.</a>
</p>

<div class="column-gap-3 d-flex display-6 justify-content-center mb-3">
    {{< paige/icon class="bi bi-github" title="GitHub" url="https://github.com/willfaught/paige" >}}
</div>
