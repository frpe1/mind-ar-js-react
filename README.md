# React example with MindAR 

Enkel setup för Mind AR och REACT

# Så här kör man
```
> npm install
> npm run start
```


# Så här bygger man en "app" för publicering
```
> npm run build
```


# Så här använder du Mind AR med react när du kodar

I filen Example1.js hittar du Mind-AR koden inbakad med kod skrivet i reactjs. 
Se längs ned i den filen mellan return (....)

Du inkluderar i App.js (eller de javascriptsfilerna) du vill använda AR på genom att skriva
import MindARViewer from './Example1';

Sedan mellan return ( ...... )  i den javascriptsfilen längre ned troligen 
så lägger du in taggen <MindARViewer/>


# Länk till MindAR

Lär mer om Mind AR
https://hiukim.github.io/mind-ar-js-doc