---
title: SOM CONNEXIÓ: ABORDANT EL REPTE TECNOLÒGIC DE CRÉIXER - II
author: Daniel Palomar
layout: post
---

Ja fa un any que vam començar el projecte [Singulars](http://aracoop.coop/projectes-singulars/) que ens ha permés fer aquesta empenta tant a Coopdevs com a les entitats que participaven agregades al projecte presentat per a la subvenció: [FACTO Assesors SCCL](https://facto.cat/) i [Som Connexió SCCL](https://somconnexio.coop/).
En aquest post ens centrarem en la feina feta amb Som Connexió especificament. Tal com vam comentar al fil del nostre forum [Som Connexió: Abordant el repte tecnològic de créixer](https://community.coopdevs.org/t/som-connexio-abordant-el-repte-tecnologic-de-creixer/927) que vam escriure al començament del Singulars.
Aquell post comentaben quins reptes teniem al comen\ament del projecte. Ara podem fer una valoració del que hem aconseguit fer i com ho hem fet. Però començarem amb una petita contextualització del problema, quin era el punt de partida de Som Connexió, quins eren els punts que més calia millorar i com vam afrontar aquest repte fins obtenir una solucion que funciones i permetes augmentar el volum de contractes que gestiona la cooperativa.

## Context

El principal repte que afrontem en aquest projecte és dotar a Som Connexió d'unes eines fortes que permetin escalar el numero de socies/contractes sense aumentar exponencialment el cost de gestio i sense perill de no poder abarcar tants serveis. Però per a poder valorar que ens cal per arribar a complir aquests objectius cal coneixer com funciona la cooperativa i quins son els punts més amb més capacitat de millora dels seus processos.

### Com funciona Som Connexió?

Som Connexió és una cooperativa de serveis que ofereix serveis de telecomunicacions. Al no tenir una xarxa propia, funciona com a operadora virtual, revenent els serveis que compra a proveidors de telecomunicacions. A la següent imatge es poden veure les funcions que pot fer fins ara Som Connexió i quines no. Lóbjectiu de la cooperativa és creixer en volum, ja que aixó permet tenir més capacitat de negociació per anar abançant fins a convertir-se en una operadora virtual complerta (OMV Complert). Aquest estatus permetria guanyar sobirania sobre els serveis oferits que es a la fi l'objectiu de Som Connexió.

![Imatge de les slides n 6](/assets/post_images/2019/funcions-sc-actuals.png)

En aquest context, cal destacar els processos que es realitzen i que permeten que la cooperativa continue funcionant mes a mes:

#### Processos principals

* **Alta nova sòcia**

L'alta d'una nova sòcia és el primer procés pel qual ha de passar qualsevol persona o entitat que vol començar a rebre servei de la cooperativa. Té un cost de 100€ vitalicis, retornables en sortir de la cooperativa i permet a la persona participar en les assemblees que es fan periòdicament.
És un procés que es comença omplint uns formularis on es demanen dades personals necessàries per a l'alta i on s’accepta el cobrament de 100€ d’aportació al capital social.

* **Procès d'aprovisionament (Alta nou servei)**

El procès d'aprovisionament d'un nou servei es el procès que s'ha de dur a terme des de que una usuaria realitza una nova sol·licitud de servei fins que comença a fer servir el servei. Aquest procès el duen a terme les agenst de la cooperativa. És un procès delicat ja que, normalment és el primer contacte de les usuaries amb la cooperativa, juntament amb lálta com a socies, i cal donar un servei molt cuidat. El procès consisteix en fer seguiment de la sol·licitud i fer de pont entre la usuaria que ha demanat el servei i el proveidor que pugui cobrir aquest servei, depenent del tipus de servei i de la localització on es vol activar el servei.

Per cobrir aquest procès es va incoorporar una eina de gestio de processos a meitats de 2018, [OTRS](https://otrs.com/). Aquesta eina permet crear processos definits amb tots els camins que es poden obrir en aquests processos i generar tiquets que recorrin aquests processos partint de mails que entren a una determinada bustia de correu o, com tenim integrat amb l'ERP, generar aquests tiquets partint de sol·licituts de servei existents a l'ERP. El fet d'incorporar aquesta eina va reduir el temps que dediquen les agents al seguiment d'incidencies i a l'aprovisionament notablement aumentant al mateix temps la qualitat del servei ofert.

* **Procès de facturació**

El procès de facturació és el procés més crucial per al dia a dia de la cooperativa, ja que és el procès que ajuda a mantenir mes a mes les treballadores que fan possible la cooperativa. És un procès complex que consisteix en varies fases:

1. Mediació: Obtenir i processar els consums que ens proporciona el proveidor de serveis.

Com ja hem comentat, Som Connexió no te una xarxa de telecomunicacions propia, pel que ha de comprar i revendre serveis d'altres proveidors. Al final del mes, aquests proveidors comparteixen els consums detallats de cada servei en un format propi. En aquest punt, Som Connexió ha d'agafar aquests consums i processar-los per obtenir informació que el sistema de facturació pugui lleguir.

2. Rating: Assignar un cost a cada registre de consum

Un cop tenim els consums en un format que puguem tractar, cal aplicar un cost a cada consum. Aquesta part ens permet identificar els consums que formen part d'un abonament o els que son independents.

3. Agrupar els consums per servei i generar la factura

4. Enviar la factura i realitzar el cobrament

5. Conciliació dels cobraments amb les entitats comptables generades amb la factura


Els tres primers punts de la facturació son els que més complexitat afegeixen, ja que els dos últims són comuns per a tot tipus d'empreses

Si voleu coneixer més en prunditat aquests processos o informació sobre el funcionament de Som Connexió, podeu consultar el document [SOM CONNEXIÓ: ABORDANT EL REPTE TECNOLÒGIC DE CRÉIXER - II](TODO: Link al document) que es va realitzar per a la justificació del projecte Singulars.
Referenciar el document del Singulars on parlem amb profunditat.

### D'on partiem?

Aquests son els processos, però per veure per que tenim la necessitat de millorar-los, cal repasar algunes de les xifres que teniem quan els processos es duien a terme a l'ERP:

  * Tenim més de 10000 contractes entre ADSL, fibra i mòbil.
  * D'aquests contractes arroben més d'un milio de registres de consums per tractar.

Amb aquestes dades el temps que es trigava a fer tota la facturació i enviarla a les socies era de més o menys unes 60h. 60h d'un procès delicat per a la cooperativa, amb molta revisió i molta intervenció manual. Això era degut a l'eina que es feia servir no estava dissenyada per aquest procès, peró es va intentar customitzar per que pogues cobrir aquest procès. Aquesta solució va funcionar durant un temps, però arribat a aquest volum, erà més un coll d'ampolla per al creixement de la cooperativa.

Pel cost que tenia aquest procès i per la imporatncia que te per a la cooperativa vam considerar que seria el primer punt a millorar. Si voleu coneixer més a fons el funcionament intern de Som Connexió i en concret dáquests processos que expossem al punt anterior, podeu consultar les slides que es van preparar per a la xerrada que vam oferir a la FESC 2019:

* [Comunicació referent a la xerrada de la FESC](https://twitter.com/coopdevs/status/1188398551690297344?s=20)
* [Slides xerrada](TODO: Penjar slides xerrada a algun lloc)


## Implementació (Facturació)

Tenint el problema a solucionar i un objectiu clar: Reduir el cost de la facturació mensual que fa Som Connexió, vam anàlitzar la infraestructura que teniem en aquell moment:

![Infraestructura prèvia a OpenCell](/assets/post_images/2019/sc-landscape-system-prev-oc.png)

Com veiem el sistema esta dividit en peces. La idea de tenir serveis espoecifics per cobrir cadascun dels processos que s'han de dur a terme a la cooperativa permet fer servir eines més especifiques amb les que obtindrem un millor resultat, ja que faràn allò per al que han estat dissenyades i res més.

Vam veure clar que una de les solucions pasava per incorporar una nova peça encarregada del procès de facturació, descarregant així de feina a l'ERP. Per a cercar una eina vam llistar els requisits o criteris que ens ajudarien tant a cercar una eina com per triar entre la nova eina o millorar els processos amb les eines que teniem.

### OpenCoop
Un dels requisits que teniem en tot aquest projecte era obtenir una solució que no només soluciones les problematiques actuals de Som Connexió, si no construir una solució que pugues ser reutilitzada per altres cooperatives amb un nivell de complexitat similar. Al ser un sistema modular amb peces que es poden habilitar o no segons les necesitats de cada cooperativa, permet que cooperatives més petites amb un volum menor, puguin adaptar aquesta infraestructura a les seves necessitats.

Contruir eines amb aquesta mentalitat permet a tot el sector fer un salt d'escala que es finalment el que busquem, reduint l'inversió que fa cada entitat en la autogestio, automatitzant certs processos i permetent focalitzar els esforços de cada entitat al seu objectiu principal.
Es una forma també de facilitar la intercooperació entre entitats, ja que compartim coneixements sobre una mateixa eina i ens podem ajudar unes a altres.

### Requisitis/Criteris per a buscar solució
* Gestió de gran volum de dades i operacions complexes - Escalabilitat
Com ja hem comentat, el volum de dades que ha de gestionar aquest procés es va incrementant a mesura que es van creant nous contractes. Tenir una eina que pugui gestionar un gran volum de dades amb un cost reduït permet que la cooperativa créixer.
Registres de consums que rep Som Connexió al mes:
- Mòbil - Més d’1 milio de registres
- Telefonia fixa – 5000 registres

A aquest volum de dades s’ha de sumar la complexitat que es pot arribar a generar amb un cataleg molt divers.

* Configurable
Busquem eines configurables, que es puguin adaptar a les necessitats de la cooperativa i que siguin fàcilment modificables. A poder ser sense necessitat de personalitzar les funcionalitats mitjançant codi, només amb configuració.

* API (parlar amb altres sistemes)
La nova eina ha de poder parlar amb l’ERP i els altres sistemes com OTRS si és necessari, així que necessitem que tingui una API per poder gestionar o enviar les peticions. També valorem la documentació que hi ha darrere d’aquesta API.

* Enfocat al sector – Solució vertical
Com hem comentat, el sector de les telecomunicacions te unes implicacions especials a la facturació, així que ens centrarem en eines que estiguin dissenyades per al sector i amb casos d’exit d’altres teleoperadores.

* Open Source
Orientats al món del software lliure i open source i alineats amb la idea que amb diners públics s’ha de crear coneixement i eines comunes, fem una forta aposta per l’Open Source com a requeriment de la nova eina.

* Comunitat
El fet de ser Open Source permet que existeixi una comunitat al voltat del software que genera documentació, arregla errors que es puguin trobar al software i millora la vida de l’eina. Per aquest motiu va ser un dels requeriments proposats.

* Reproduïble
Tota la feina que fem en aquest projecte ha de ser fàcilment reproduïble, per aquest motiu triem eines Open Source i ho fem tot en obert, perquè altres cooperatives o altres entitats puguin aprofitar tot aquest esforç i replicar al seu negoci aquests processos.

#### Single point of truth
En qualsevol cas, quan treballem en un entorn amb un sistema compost per eines diferents, cal tenir molt clar quin es el punt unic de la veritat. El lloc on puc confiar que els que diuen les dades es la veritat, encara que tinguem discrepancia entre les dades dels sistema.
Aquest punt es important tenir-ho ben definit i assegurar-nos que aquestes dades son solides i no contenen errors.

En cas de incidencia i dessincronització de les dades, sabem que podem recorrer a aquesta font per recuperar la homogeneitat a les dades.

### Solució triada i motius
Sabent els requisitis que te el sistema actual i els que volem assolir en acabar aquest projecte, vam fer una recerca de eines utilitzades al sector de les telecomunicacions per realitzar la facturació partint de consums i contractes.

Vam trobar una eina anomenada [OpenCell](https://opencellsoft.com/). Desenvolupada a França, es una de les eines que més actors del sector de les telecomunicacions fan servir. També altres empreses d'altres ambits integren aquesta eina en el seu sistema. Aquesta eina te una part anomenada community, que ve amb una llicencia open source i una enterprise amb parts no lliures.

![OpenCell logo](/assets/post_images/2019/logo-opencell.png)

L'alternativa que teniem era millorar el procès actual a l'ERP per intentar cobrir les necessitats actuals, encara que sabiem que no escalaria molt i en breus tornariem a tenir els problemes als que ens enfrontem ara. També valorem possitivament que una eina cobreixi el procès pel que ha estat dissenyada. Podeu consultar els pros i contres que vam llistar per a cada opció al [document de justificació del Singulars](TODO justificaci' singulars).

#### Recursos creats
iUn cop triada l'eina, calia implantar el nou procès de facturació a OpenCell integrat amb l'ERP. Vam extreure les següents tasques per dur a terme:

* Migració de tots els contractes i usuaris (Recordant que el punt de la veritat es a l'ERP)
* Permetre crear nous contractes i usuaris a través del procés de creació de nous contractes existent a l’ERP.
* Permetre modificar dades de contracte i d’usuaris amb els processos definits a l’ERP.
* Recuperar les factures del nou sistema a l’ERP per generar els apunts comptables necessaris.

Es va començar definint l’arquitectura que tindria el nou sistema. L’arquitectura que es va proposar és la que es pot veure a la Figura 2.

![Figura 2](/assets/post_images/2019/sc-landscape-system-post-oc.png)

Seguint les metodologies que fem servir a Coopdevs, es va fer servir Ansible per automatitzar l’aprovisionament el servidor. Es va crear el repositori d’aprovisionament a Gitlab, en obert i es va documentar perquè altres ho puguin reaprofitar: https://gitlab.com/coopdevs/opencell-provisioning/.
Per a més informació de com treballem la part de sistemes a Coopdevs, podeu consultar l'entrada al community del company Ferran amb l'explicació de com instalem les instancies d'Odoo, on es detalla més tota la part d'infraestructura: https://community.coopdevs.org/t/memoria-pel-singulars-sobre-la-feina-sysadmin-devops/1042/4

OpenCell és una aplicació en JAVA que es pot executar en un servidor directament, però l’equip de desenvolupament recomana fer servir les imatges de Docker que proporcionen per assegurar que l’entorn està com OpenCell ho espera. Fent servir aquestes eines es va muntar la primera instància per començar a provar els processos amb dades de prova.

Com que OpenCell compta amb una API REST que podem fer servir per crear totes les dades necessàries per configurar l’eina per als processos de Som Connexió, es va generar un projecte de Postman per mantenir tota la configuració controlada i que es pogués auditar qualsevol canvi en la configuració acordada: https://gitlab.com/coopdevs/somconnexio-opencell-configuration.

Es va aprofitar també per generar un nou projecte amb la plantilla de la factura que es fa servir:https://gitlab.com/coopdevs/somconnexio_invoice_jasper_template. Al repositori està explicat com fem servir aquesta plantilla i les configuracions que s’han de fer a OpenCell per incloure la plantilla. El motor que s’utilitza per generar la factura en PDF partint de la plantilla és JasperReports.

Un cop gestionada la instancia d'OpenCell i configurada, cal integrar-la al nostre sistema. Per aixó es van definir quines integracions s’havien de fer partint dels casos d'ús definits al començament d'aquest punt.
Ala Figura 2 es veuen les entitats i accions que volem que es comuniquen d’un sistema a l’altre. Des del punt de vista de l'EPR les entitats a migrar són:
* Tercer i totes les seves dades de contacte
* Contracte
* Linia de Contracte
* Factures
* Serveis

Aquestes entitats existeixen a Tryton i han de traslladar-se al model de dades d’OpenCell. Per a fer aquesta feina, es va investigar a fons l’[API](https://api.opencellsoft.com/) que proporcionava OpenCell per tal de trobar les entitats que millor casen amb aquestes. Aquesta investigació sumada al coneixement funcional adquirit a les formacions que vam realitzar sobre el producte a Desembre de 2018 i Gener de 2019, va permetre portar aquestes entitats a entitats del sistema d’OpenCell.

Un cop definida la correspondència d’aquestes entitats, es va començar a desenvolupar una llibreria, basant-se en la que vam fer servir per integrar l’ERP amb l’OTRS, [PyOTRS](https://gitlab.com/rhab/PyOTRS), per a comunicar l’ERP amb OpenCell.
Aquestes llibreries que coneixen l’API de l’altra aplicació i es fan servir per comunicar-se amb elles es diuen clients. Vam dissenyar el client en Python per a OpenCell, ja que no hi havia cap obert per poder reaprofitar i contribuir a millorar-ho.Aquest client es va fer open source i es pot consultar el projecte a https://gitlab.com/coopdevs/pyopencell.

Tryton és una eina modular. Per aquesta raó es va començar a definir un nou mòdul de Tryton que faria de pont entre els actuals processos que tenim a l’ERP amb el nou sistema, fent servir el client que acabem de comentar.
Aquest mòdul té tota la lògica de negoci de Som Connexió relacionada amb OpenCell, i es va fer de tal forma que fos el més agnostic possible de l’ERP que té al darrere. Juntament amb el codi, es va documentar totes les funcionalitats i casos d’ús que es volien cobrir, i es poden consultar a la wiki del repositori: https://gitlab.com/coopdevs/opencell_somconnexio_tryton.

## Conclusions

Tot aquest sistema es va acabar d'implantar a finals d'Agost principis de Setembre. Primer es va portar la facturació en paral·lel un parell de mesos fins que es va veure que el sistema era fiable i que les facturacions obtingudes amb el nou sistema eres similars a les que havíem fet amb l'ERP.

Així es van poder extreure algunes dades per comprovar que tota aquesta feina havia permès millorar el sistema de facturació. D'aquestes dades, la més rellevant és la diferència al temps de facturació. De les 60h inicials que requerien per facturar un mes, a unes 19h que es triga amb el nou sistema.
S’està treballant per automatitzar els processos que encara queden manuals, cosa que reduirà encara més el temps de facturació. Cal destacar també que en tot aquest període el nombre de contractes a facturar ha augmentat.

Fins aquí tot el que hem pogut avançar amb el Singulars a la part de Som Connexió, no oblidem que també hem aprofitat aquesta empenta per [treballar amb altres cooperatives i millorar conjuntament els seus processos interns.](https://community.coopdevs.org/t/formacions-gestio-de-cooperatives-a-traves-de-la-millora-de-processos-amb-tecnologia/970)

## Següents passes

Cal seguir treballant per millorar aquests processos, però també es van obrint noves oportunitats per millorar els processos. Un clar exemple és la integració amb l'API del proveïdorde telecomunicacions MasMovil. Es preveu que per a començaments de 2020 puguem treballar per integrar al sistema de Som Connexió les interaccions automàtiques amb el sistema de MasMovil, ja que és un dels punts que més temps ocupa als agents i és una feina que ja es fa a OTRS i per duplicat a la plataforma del proveïdor.

També cal marcar com a reptes de futur la creació d'una oficina virtual on les usuàries puguin revisar els seus serveis i modificar aquests i una migració d'ERP de Tryton a Odoo, un sistema amb el qual estem treballant des de Coopdevs des de fa un temps i que fan servir altres cooperatives del territori com Som Mobilitat entre altres.

Tant el tema de l'oficina virtual com el de la migració a Odoo són dues ocasions fantàstiques per a fer intercooperació amb entitats com Som Mobilitat que no deixarem d'aprofitar!

## Enllaços
* [OpenCell](https://opencellsoft.com/)
* [Projecte de provisió d'una instancia d'OpenCell](https://gitlab.com/coopdevs/opencell-provisioning/)
* [Client Python d'OpenCell](https://gitlab.com/coopdevs/pyopencell)
* [Mòdul amb la lógica de negoci que Som Connexió fa servir amb OpenCell](https://gitlab.com/coopdevs/opencell_somconnexio_tryton)
* [Template factura Jasper](https://gitlab.com/coopdevs/somconnexio_invoice_jasper_template)
* [Configuració d'OpenCell de Som Connexió](https://gitlab.com/coopdevs/somconnexio-opencell-configuration)

[![logos-singulars](/assets/post_images/2019/logos-singulars.png){:width="100%"}](http://aracoop.coop/)
