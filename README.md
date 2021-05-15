# Projekts “Ceļojumu aģentūra”
Projekts “Ceļojumu aģentūra”. Izveidoja: Kristaps Bērtulis, Rinalds Akulovs, Ralfs Repins

Starptautiska ceļojuma aģentūra “Ceļot prieks” vēlas investēt naudu aģentūras digitalizācijā, tam nepieciešams izstrādāt jaunu sistēmu, kas automātiski reģistrētu ceļojumus.
#### Administratora funkcionalitāte:
•	pievienot/labot/dzēst ceļojuma aģentūru (nosaukums, adrese)
•	pievienot/labot/dzēst valstis (valsts un tās saīsinājums) uz kurieni var ceļot
•	pievienot/labot/dzēst ceļojumu (sākuma datums, beigu datums, valsts no/uz, cena, pieejamās vietas)
•	statistika
o	mēneša pārskats par ceļojumiem un to aizpildījumu un eksports
o	statistikas eksports *.csv un *.json formātos
#### Klienta funkcionalitāte:
•	meklēt ceļojumu pēc datuma / galamērķa
•	rezervēt ceļojumu
•	meklēt/labot/drukāt/atcelt ceļojumu

Rezervācijas drukāšana notiek izveidojot html dokumentu ar šādu tabulu:

|Jānis Bērziņš|Rez. Nr. 000000000        |
|Maršuts	  |Latvija (LV) – Spānija (S)|
|Izbraukšana  |21.01.2019 8:00           |
|Atgriešanās  |28.01.2019 10:00          |
|Dienu skaits |7                         |
|Cena	      |700 euro                  |

Rezervācijas Nr. var būt paša izdomāts viņam ir jāģenerējas automātiski un jābūt unikālam.
Visi dati ir jāsaglabā failos.
