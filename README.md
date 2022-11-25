# Calculadora Castellera :tada::raising_hand_woman::sparkles:
Petita aplicació web que permet calcular el pes total d'un castell en funció del seu tipus o a partir de les dades introduïdes manualment.

## Funcionament
Es pot utilitzar simplement accedint al fitxer 'index.html' des de qualsevol navegador. Com no té cap tipus de dependència, no és necessari disposar de connexió a Internet, i a més la seva mida és molt reduïda.
<br/>
Les dades es carreguen dinàmicament des del fitxer 'castells.json' que es troba a la carpeta 'assets/data/'. Això fa que sigui molt fàcil introduir nous castells sense haver de modificar el codi. Al mateix temps, si no es pogués accedir al fitxer, es carregarien tres castells per defecte que es troben al codi.

## Format del fitxer JSON
```json
{
   "pes":{
      "pom":70,
      "tronc":70,
      "manilles":70,
      "folre":70,
      "pinya":70
   },
   "castell":[
      {
         "nom":"Castell 1",
         "personesPom":1,
         "personesTronc":1,
         "personesManilles":1,
         "personesFolre":1,
         "personesPinya":1
      },
      {
         "nom":"Castell 2",
         "personesPom":1,
         "personesTronc":2,
         "personesManilles":0,
         "personesFolre":0,
         "personesPinya":10
      },
      {
         "nom":"Castell 3",
         "personesPom":3,
         "personesTronc":3,
         "personesManilles":3,
         "personesFolre":3,
         "personesPinya":3
      }
   ]
}
```
Al camp "pes" es troben les mitjanes de pes de les persones que es troben a aquella part del castell. A la llista "castell" es poden afegir tants elements com es desitgi, i estaran formats per un nom i el número de persones que el conformen en cada cas.

___
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:raising_hand_woman: <-- Tu :)
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:ok_man:
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:ok_woman:
<br/>
&nbsp;&nbsp;&nbsp;:ok_woman::ok_man::ok_woman:
<br/>
:ok_man::ok_woman::ok_man::ok_woman:
<br/>
:ok_woman::ok_man::ok_woman::ok_man:
