# 📚 EPICBooks

Una semplice web app che mostra una lista di libri recuperati da un'API esterna.
Gli utenti possono cercare libri, scartarli dalla lista e aggiungerli a un carrello dinamico.

---

## 🚀 Tecnologie utilizzate

* **HTML5**
* **CSS3**
* **Bootstrap 5**
* **JavaScript (DOM Manipulation)**
* **Fetch API**
* **Google Fonts**

---

## ⚙️ Funzionalità

### 🔎 Ricerca libri

È possibile cercare un libro tramite la barra di ricerca.
La lista viene filtrata in tempo reale confrontando il testo inserito con il titolo dei libri.

### 🗑️ Scarta libro

Ogni card ha un pulsante **Scarta** che permette di rimuovere il libro dalla lista senza ricaricare la pagina.

### 🛒 Carrello

I libri possono essere aggiunti al carrello tramite il pulsante **Aggiungi al carrello**.

Nel carrello è possibile:

* visualizzare titolo e prezzo del libro
* rimuovere un libro dal carrello
* vedere il **totale aggiornato automaticamente**

### 📊 Totale dinamico

Il totale del carrello viene aggiornato automaticamente quando:

* si aggiunge un libro
* si rimuove un libro

Se il carrello è vuoto viene mostrato il messaggio:

```
Carrello vuoto
```

### 📖 Pagina dettagli libro

Ogni card include un pulsante **Dettagli** che apre una pagina dedicata al libro selezionato.

Nella pagina dettagli vengono mostrati:

* copertina del libro
* titolo completo
* prezzo
* categoria
* pulsante per tornare alla home

### 🎨 Restyling interfaccia

L'interfaccia è stata aggiornata con uno stile più moderno e responsive, mantenendo la struttura della web app più ordinata e leggibile.

### 🔗 Navigazione al carrello

È presente un'icona 🛒 in alto nella pagina che permette di scorrere rapidamente fino alla sezione carrello.

---

## 📡 API utilizzata

I libri vengono recuperati tramite la seguente API:

https://striveschool-api.herokuapp.com/books

---

## 🎯 Obiettivo del progetto

Questo progetto è stato sviluppato come esercizio per praticare:

* utilizzo delle API
* manipolazione del DOM
* gestione degli eventi
* creazione dinamica di elementi HTML con JavaScript

---

## 📷 Anteprima funzionalità

* visualizzazione dinamica dei libri
* ricerca filtrata
* gestione carrello
* totale aggiornato in tempo reale
* pagina dettagli dedicata per ogni libro
* interfaccia grafica migliorata e responsive

---
