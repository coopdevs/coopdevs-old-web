# SOM CONNEXIÓ: ABORDANT EL REPTE TECNOLÒGIC DE CRÉIXER - II

## Presentació
Arribem al final del Singulars i cal girar la vista enrere per veure com estem en comparació a quan vam començar aquest any, així com on volíem estar en aquest moment.
Recordant tot el que vam comentar al post que vam eSom Connexióriure ara fa mig any on abordàvem el repte de créixer de Som Connexió des d'una visió d'eines tecnològiques, veiem que hem avançat prou però encara ens queda distància per recórrer.

Si donem una ullada al que proposàvem fa sis mesos, veiem que hem assolit les metes que ens vam proposar i que ara s'obren noves portes que no havíem vist i que allarguen la cursa uns metres més.

Ara podem dir que ja tenim la facturació coberta amb una eina robusta, que ens permet facturar mes a mes (fa dos mesos que estem facturant íntegrament amb la nova eina, OpenCell) amb seguretat i invertint un terç o menys del temps que invertíem fa uns mesos.
També estem integrats i tenim ja uns processos sòlids en la part de suport a les usuàries dels serveis de Som Connexió gràcies a l'eina de gestió d'incidències OTRS.

Aquesta feina d'aïllar una part del nostre negoci, portar-la a una eina específicament dissenyada per aquesta finalitat i fer l'esforç per integrar aquestes eines per tal que funcionen conjuntament sense massa interacció de l'agent, ha facilitat notablement la feina que fan dia a dia els treballadors de la cooperativa, permetent que puguin dedicar més temps a tractament amb les sòcies, pilar fonamental de la iniciativa.

## Singulars
Tot aquest esforç ha estat possible gràcies al Singulars que vam demanar ara fa justament un any, conjuntament amb Som Connexió i de FACTO Assessors.

Aquest impuls ens ha permès: per un costat començar una nova línia comercial per a Coopdevs i FACTO, com fer el salt a Som Connexió a un nou sistema de facturació, més específic i que permet a Som Connexió créixer sense por. També ens ha ajudat a definir processos tant dins de Coopdevs com a les cooperatives a les quals els hi donem servei, com és el cas de Som Connexió.

En el marc de la relació amb Som Connexió, el Singulars ens hi ha permès tant consolidar la integració amb el sistema de suport OTRS, com començar a fer servir i integrar amb l'ERP el sistema de facturació OpenCell.

Tot el treball que s'ha fet, a les dues línies d'actuació, s'ha fet amb un caràcter obert per tal que pugui ser reutilitzat (tant el codi com el coneixement que hem aconseguit reunir) per altres empreses del sector, enfortint així tota la part tecnològica i de gestió del sector de l'ESS, objectiu també que volíem cobrir amb aquesta subvenció.

## Opencoop
Estem construint de manera oberta perquè, com comentem anteriorment, totes les cooperatives i entitats del sector puguin aprofitar aquest esforç per aplicar els processos que anem definint i polint entre tots amb un cost molt més reduït del que suposa aquesta primera empenta que fem al projecte.

Així fem aquest esforç, amb una mirada més aplica, tenint en compte que tot el que anem fent ha de ser replicable. Aquest és un dels valors que volem aportar amb tota aquesta feina. No només solucionar el problema que tenim nosaltres entre mans, sinó aixecar el cap, donar una ullada al voltant per veure quins actors tenim al nostre costat i si tota la feina que anem fent pot cobrir també les seves necessitats (dins d'un mateix sector).

## Reptes de Som Connexió a inicis de 2018
El principal repte que vam assolir amb Som Connexió va ser el de facilitar la feina als agents que treballen donant suport als socis que estan fent servir el servei, per tal de millorar pels dos costats, tant la feina que han de cobrir els agents, com la part de les sòcies consumidores del servei.

A inici de 2018, pel fet que Som Connexió va començar a donar servei abans de tenir una forta infraestructura per cobrir aquest servei, queden moltes feines manuals. Un dels principals objectius d'aquesta feina és automatitzar els processos més repetitius per alliberar aquestes hores i poder ferles servir per cobrir les necessitats dels socis. Així focalitzarem la feina dels agents en el principal objectiu de la cooperativa, donar un servei de qualitat i un suport el més proper possible.

Els processos eSom Connexióollits per començar a automatitzar són els dos processos més delicats per a la cooperativa i que més temps ens porten: Facturació i aprovisionament d'una nova línia.

## Processos
### Procés de facturació
Un dels processos més costosos que es portaven a terme en Som Connexió i al mateix cop el procés crucial sense el qual no pot subsistir la cooperativa, és el procés de facturació.

Aquest procés és el que s'encarrega de, partint d'un conjunt de consums que ens faciliten els proveïdors de telecomunicacions que treballen amb Som Connexió, arribar a construir i enviar les factures que reben les sòcies.

Aquest procés, que com ja hem comentat és crucial en l'existència de Som Connexió, era un procés molt costos, on els companys de Som Connexió invertien molts esforços i havien de tenir molta cura al realitzar-lo, ja que un petit error humà podia desencadenar en errors en la facturació i acabar afectant la tresoreria de la cooperativa o directament a la butxaca de les sòcies.

Aquest era un punt on tots els actors estàvem d'acord, ja que era el cor per mantenir en peus la cooperativa i fins aleshores és feia amb un procés poc robust i amb molta interacció humana (que sabem que sempre pot aportar errors).

El procés en si consisteix en, com hem comentat, agrupar els consums que ens fan arribar els proveïdors de telecomunicacions de Som Connexió, aplicar cada consum al servei del contracte al qual pertoca, sobre aquests consums és per on passarà el nostre procés de facturació que agruparà els consums que entren dins dels abonaments que ofereix la cooperativa i quins queden fora i san de tractar per separat. Després s'ha de generar la factura partint dels contractes que tenim definits, basant-nos en els consums realitzats aquest mes.
Així obtenim el document que finalment arribarà a les sòcies de Som Connexió per notificar quin ha sigut el consum d'aquest mes.
Passos del procés de facturació:

1. Arriben els consums dels proveïdors.
2. Introduïm els consums al sistema per poder tractar-los després.
3. Associem els consums als contractes i als serveis contractats (si pertany a un servei).
4. Per a cada contracte, generem una factura amb els consums que entren dins de la ventana de temps que cobrirà la factura.
5. Enviem les factures a les sòcies.
6. Seguiment dels pagaments i tancament econòmic amb els pagaments.

Aquest procés és un procés molt vinculat a serveis recurrents, com ara telecomunicacions, aigua, llum, gas, però no molt freqüent en altres contextos. Un ERP és una eina que casa molt bé amb moltes empreses de diferents sectors, però que en alguns casos pot quedar curta per a un tipus de facturació amb un procés complex com aquest.

### Procés d’aprovisionament
L'aprovisionament és el procés que seguim quan una nova sol·licitud, tant de soci com d'apadrinat, arriba als agents de Som Connexió.

Un cop per setmana, un agent de Som Connexió, agafa totes les sol·licituds que s'han generat per tractar-les una a una. Aquest és un dels valors que ens agrada de Som Connexió, no tracten als usuaris com a numerets als quals els pots cobrar. Són persones i per això aquest procés és, juntament amb la facturació, un punt molt important per a la cooperativa, ja que és on demostren que són persones treballant per a persones.
El procés de provisió el podem descompondre en diferents processos depenent del servei seleccionat.

Hi ha un procés per al servei de mòbil, un per al d'ADSL i un per al de Fibra a causa de les diferents necessitats de cada servei.

## Sistema de Som Connexió fins a l’inici del Singulars
Fins al començament d'aquest projecte, el sistema que Som Connexió feia servir estava tot construït al voltant de l'ERP.

Com hem comentat anteriorment, Som Connexió al contrari que altres teleoperadores va començar a donar servei abans de tenir una infraestructura tecnològica per a suportar aquest servi, ja que el principal objectiu era donar servei als socis.

Aquest primer sistema monolític servia per a donar servei i poder donar un bon suport a unes porques línies, però quan la cooperativa va començar a fer més contractes, els sistemes no escalaven.

## ERP com a single source of truth
D'aquest sistema inicial estem ben contents, ja que ens va permetre començar a donar servei a les sòcies, però com hem comentat no podia escalar amb les necessitats de la cooperativa.
Per aquesta raó vam començar a explorar noves eines que cobrien una part de les necessitats que tenia la cooperativa.

Aquestes eines són especifiques per cobrir un procés en concret (facturació, suport a les usuàries, etc.). En centrar-se en un procés més concret son molt més eficients cobrint aquell procés i donen un marge de configuració i culturització major que ens permet adaptar aquestes eines als nostres processos.

Així vam començar a imaginar el sistema que feia servir Som Connexió com un conjunt d'eines connectades entre si però que cada eina tindria la seva feina especifica. Aquest nou model ens permet escalar molt més, així com ens dóna facilitat per poder canviar alguna de les peces del conjunt per una altra eina que cobreixi un procés similar sense afectar a la resta de peces del sistema.

Aquesta nova configuració suposa moltes millores, però també genera nous problemes. Un dels més importants és la duplicitat d'informació. En tenir diferents sistemes, amb dades emmagatzemades en cadascun d'ells, cal tenir molt clar quina és la font de veritat.
Per a Som Connexió vam acordar que la font de veritat era l'ERP, ja que és l'epicentre de tota la feina que fem amb dades i que és l'eina amb la qual es comuniquen tota la resta d'eines, així que si en qualsevol cas hi ha una discrepància de dades, qui mana sempre serà l'ERP.

## Solucions verticals
Vam començar a explorar les solucions verticals que feien servir altres operadores del sector de les telecomunicacions per cobrir les seves necessitats especifiques.
L'ERP és una eina necessària per a la gestió de qualsevol empresa, però una teleoperadora té unes necessitats diferents de la de qualsevol empresa, ja que, com ja hem explicat, el procés de facturació té una complexitat afegida a causa de la gran quantitat de dades que san de processar.
Així vam començar a investigar quines eines es feien servir dins del món de les telecomunicacions per a cobrir el procés de facturació, així com el procés de suport a l'usuari. Aquests dos processos són els més crítics per a la cooperativa, ja que és el punt d'entrada d'un nou soci i la facturació que és el punt d'entrada de diners que permet que continuï l'activitat de la cooperativa.

## Triar les eines
Vam triar les eines basant-nos en diferents criteris:

* Sector al qual va dirigit
Ens vam centrar, com comentem al punt anterior, en verticals del sector, així que vam anar a buscar quines eines feien servir altres teleoperadores.

Tant per a la part del 'customer support' (suport a les usuàries) com per a la part de facturació.
Ens vam adonar que hi ha una sèrie de softwares, dissenyat per a cobrir les necessitats del sector i amb un altíssim grau de configuració. Punt que també ens feia decantar per triar una eina.

* Configurabilitat
Volíem sistemes que fossin el més configurable possible. Així l'equip de treball de Som Connexió podria configurar els seus processos dins de l'eina.

Un punt a recalcar en aquest apartat és que si fem processos configurables, sense personalitzar massa l'aplicació, aplicar les actualitzacions quan van sorgint és una feina senzilla, mentre que si personalitzem molt el software, una actualització es pot fer enrevessada. Fins al punt de no prioritzar aquesta actualització perquè té un cost altíssim. Començant així a deixar software obsolet cobrint processos importants per a la nostra feina.
En aquest repositori podeu trobar la configuració de l’Open Cell que fa servir Som Connexió: https://gitlab.com/coopdevs/somconnexio-opencell-configuration.

* Open Source / Replicabilitat
Buscàvem software open source, ja que com hem comentat abans, volíem que aquest projecte sigui replicable per a altres cooperatives que tenen uns processos similars.

* Comunitat
Un altre punt molt important és l'existència o no d'una comunitat d'usuàries que tenen una expertesa sobre l'aplicació i que mantenen i documenten les funcionalitats perquè qualsevol pugui aprofitar els coneixements que van obtenint.

Amb aquests punts com a criteris fonamentals i revisant altres punts del projecte com tecnologia, escalabilitat, manteniment del projecte, etc. vam prendre la decisió de seleccionar OTRS com a gestor de suport a les usuàries i Open Cell com a eina de facturació massiva.

## Integracions
Aquests sistemes que volíem implantar havien de ser capaços de parlar entre ells.
Per a fer això possible, havíem d'integrar els sistemes. Com que el punt de veritat i «l'epicentre» de tot el sistema era l'ERP, vam començar les integracions fent que l'ERP pugues parlar amb les dues eines (Open Cell i OTRS) i que sàpigues com interpretar les respostes d'aquests.

Així vam treballar primer en la integració amb OTRS, per cobrir les altes de nous socis i qualsevol incidència que arribes per mail o telèfon. Aquesta part va donar una gran empenta al procés d'aprovisionament, que com hem explicat anteriorment a poc a poc ha esdevingut un procés amb moltes accions i passes. Ara, tenim definits a OTRS una sèrie de passes necessàries a l'aprovisionament, i quan rebem a l'ERP una sol·licitud de sòcia o servei nou, això crea un tiquet de procés a l'OTRS des d'on es fa tot el seguiment del procés fins a completar-lo. Arribat aquest moment, es marca el tiquet com a complet i això crearà un contracte a l'ERP que ens permet generar les factures per al cobrament. Així tenim integrats el sistema de tiquets i suport a les usuàries (OTRS) amb l'ERP.

Aquesta integració la vam fer fent servir un client Open Source que vam trobar per a l'API OTRS a Gitlab: https://gitlab.com/rhab/PyOTRS on vam contribuir amb alguns canvis que necessitàvem per a la nostra integració.

Per l'altre costat tenim el procés de facturació i l'eina de facturació, Open Cell. Aquí la integració comença quan confirmem el contracte que s'ha creat al final del procés d'aprovisionament.

En aquest punt, en confirmar un contracte a l'ERP, es llença una crida per crear aquest contracte a Open Cell amb el servei seleccionat actiu i tot l'arbre d'entitats necessari per mapejar el contracte de l'ERP a Open Cell.
Un cop tenim el contracte i totes les dades a Open Cell, es pot començar el procés de facturació, explicat als punts anteriors. Quan obtenim la factura, l'enviem directament a les usuàries des de Open Cell amb unes plantilles de correu: https://gitlab.com/coopdevs/somconnexio_invoice_jasper_template.

Així termina el procés de facturació, però a la part de l'ERP necessitem els assentaments comptables que generen aquestes factures per poder portar la comptabilitat de la cooperativa des de l'ERP. Per això vam dissenyar un procés de tornada de les factures d'Open Cell cap a l'ERP.

Aquest procés consisteix en, un cop tenim les factures emeses a Open Cell, es llença un procés a l'ERP que demana a Open Cell les factures i les processa per crear els assentaments i apunts comptables que necessitem. D'aquesta manera tenim els dos sistemes sincronitzats amb les dades necessàries a cada sistema.

Aquest procés és la primera iteració que fem, i a poc a poc anirem afegint millores.
Per a desenvolupar aquesta integració, vam construir nosaltres un client en Python per a l'API d'Open Cell, ja que no vam trobar cap: https://gitlab.com/coopdevs/pyopencell
També hem publicat el mòdul de Tryton (l'ERP que fa servir actualment Som Connexió) amb la integració, però aquest depèn de mòduls privatius que encara necessitem. Això genera una inconsistència en la que estem treballant, ja que tenim mòduls Open Source que fan referència a mòduls privatius. Com hem dit, estem treballant per canviar aquesta situació: https://gitlab.com/coopdevs/opencell_somconnexio_tryton.
Tetes aquestes integracions s'han pensat per poder ser independents de l'ERP que hi ha per baix, ja que un dels plans a futur és migrar l'ERP.

## Següents passes
Fins aquí tot el que hem pogut avançar amb el Singulars a la part de Som Connexió, no oblidem que també hem aprofitat aquesta empenta per treballar amb altres cooperatives i millorar conjuntament els seus processos interns.

Però encara ens queden reptes que ja teníem en ment o que han anat sorgint a l'horitzó de Som Connexió.

Entre aquests reptes de futur destaquem una integració amb el proveïdor de serveis de telecomunicacions MasMovil, la creació d'una oficina virtual on les usuàries puguin revisar els seus serveis i modificar aquests i una migració d'ERP de Tryton a Odoo, un sistema amb el qual estem treballant des de Coopdevs des de fa un temps i que fan servir altres cooperatives del territori com Som Mobilitat entre altres.

Tant el tema de l'oficina virtual com el de la migració a Odoo són dues ocasions fantàstiques per a fer intercooperació amb entitats com Som Mobilitat que no deixarem d'aprofitar!
