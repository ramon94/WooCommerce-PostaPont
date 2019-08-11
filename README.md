# WooCommerce-PostaPont
WooCommerce PostaPont plugin updated


Eredeti forráskód: https://github.com/passatgt/wc-postapont

Frissítések az eredetihez képest:
- WooCommerce 3+ kompatibilitás
- PostaPont API frissítés

Funkciók:

- Térképes PostaPont választó - Beállítások / Szállítás menüben megjelenik a PostaPont-ra vonatkozó beállítási lehetőség. Itt ki kell választani egy már meglévő szállítási módot. A plugin ezt fogja kiegészíteni egy térképpel, így vásárláskor a pénztár oldalon ha a beállított szállítási mód van kiválasztva, megjelenik egy térképes PostaPont választó. Bármilyen szállítási móddal működik.

- PostaPont szállítási mód súly alapján - A fentieken kívül létrehoz egy új szállítási módot is. Ennek használata nem kötelező. Ha mégis ezt használjuk, súly alapján lehet megadni sávos árazást a következő formában: Minimum súly | Maximum súly | Postaköltség.

- A kiválasztott PostaPont megjelenítése - Nem csak az adminfelületen a rendelés adatai között, de a Köszönöm oldalon, mindegyik vásárlónak kiküldött emailben és az adminnak küldött emailben is megjelenik a kiválasztott PostaPont neve és címe.

Telepítés:

- Töltsd le a frissített bővítményt: https://github.com/ramon94/WooCommerce-PostaPont/archive/master.zip
- Wordpress-ben bővítmények / új hozzáadása menüben fel kell tölteni
- WooCommerce / Beállítások / Szállítás menüpontban megjelennek a beállítások, ezeket be kell állítani
- Ha kell, akkor a WooCommerce / Beállítások / Szállítás / PostaPont szállítási módot kapcsoljuk be(opcionális)

GY.I.K:

- A PostaPont szállítási módnál sávos árazást lehet megadni súly alapján. Például ha 0 és 5kg között 1000 Ft, 5 és 10kg között pedig 2000 Ft a szállítás, akkor ezt kell megadni: 0|5|1000 5|10|2000

