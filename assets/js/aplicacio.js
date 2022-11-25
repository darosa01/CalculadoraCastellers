/*

(c) 2022 David Romero - admin@perseus.cat

This program is free software: you can redistribute it and/or modify it under the terms of 
the GNU General Public License as published by the Free Software Foundation, either version 3 
of the License, or (at your option) any later version.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without 
even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General 
Public License for more details.
You should have received a copy of the GNU General Public License along with this program. If not, 
see <https://www.gnu.org/licenses/>.

*/

function calcula(){
  var checkPom = document.getElementById('check-pom').checked;
  var checkTronc = document.getElementById('check-tronc').checked;
  var checkManilles = document.getElementById('check-manilles').checked;
  var checkFolre = document.getElementById('check-folre').checked;
  var checkPinya = document.getElementById('check-pinya').checked;

  var numeroPom = parseInt(document.getElementById('numero-pom').value);
  var numeroTronc = parseInt(document.getElementById('numero-tronc').value);
  var numeroManilles = parseInt(document.getElementById('numero-manilles').value);
  var numeroFolre = parseInt(document.getElementById('numero-folre').value);
  var numeroPinya = parseInt(document.getElementById('numero-pinya').value);

  var pesPom = parseFloat(document.getElementById('pes-pom').value);
  var pesTronc = parseFloat(document.getElementById('pes-tronc').value);
  var pesManilles = parseFloat(document.getElementById('pes-manilles').value);
  var pesFolre = parseFloat(document.getElementById('pes-folre').value);
  var pesPinya = parseFloat(document.getElementById('pes-pinya').value);

  var pesTotal = 0;

  if(checkPom){
    pesTotal += (numeroPom * pesPom);
  }
  if(checkTronc){
    pesTotal += (numeroTronc * pesTronc);
  }
  if(checkManilles){
    pesTotal += (numeroManilles * pesManilles);
  }
  if(checkFolre){
    pesTotal += (numeroFolre * pesFolre);
  }
  if(checkPinya){
    pesTotal += (numeroPinya * pesPinya);
  }

  document.getElementById('resultat').innerHTML = pesTotal;
}

function seleccioCastell(castell = undefined){

  if(castell === undefined){
    castell = document.getElementById('opcions-castells').value;
  }

  var checkPom, checkTronc, checkManilles, checkFolre, checkPinya;
  var numeroPom, numeroTronc, numeroManilles, numeroFolre, numeroPinya;

  var pesPom = 70;
  var pesTronc = 70;
  var pesManilles = 70;
  var pesFolre = 70;
  var pesPinya = 70;

  // Carrega del fitxer i diccionari de castells (en cas que no pugui carregar el fitxer)

  if(window.fitxerCarregat){
    castell = parseInt(castell);

    pesPom = window.castells['pes']['pom'];
    pesTronc = window.castells['pes']['tronc'];
    pesManilles = window.castells['pes']['manilles'];
    pesFolre = window.castells['pes']['folre'];
    pesPinya = window.castells['pes']['pinya'];

    numeroPom = window.castells['castell'][castell]['personesPom'];
    numeroTronc = window.castells['castell'][castell]['personesTronc'];
    numeroManilles = window.castells['castell'][castell]['personesManilles'];
    numeroFolre = window.castells['castell'][castell]['personesFolre'];
    numeroPinya = window.castells['castell'][castell]['personesPinya'];

    if(numeroPom < 1){
      checkPom = false;
    } else {
      checkPom = true;
    }

    if(numeroTronc < 1){
      checkTronc = false;
    } else {
      checkTronc = true;
    }

    if(numeroManilles < 1){
      checkManilles = false;
    } else {
      checkManilles = true;
    }

    if(numeroFolre < 1){
      checkFolre = false;
    } else {
      checkFolre = true;
    }

    if(numeroPinya < 1){
      checkPinya = false;
    } else {
      checkPinya = true;
    }

  } else {
    switch(castell){
      case '0': 
        checkPom = true;
        checkTronc = true;
        checkManilles = true;
        checkFolre = true;
        checkPinya = true;
  
        numeroPom = 1;
        numeroTronc = 1;
        numeroManilles = 1;
        numeroFolre = 1;
        numeroPinya = 1;
        break;
      case '1': 
        checkPom = true;
        checkTronc = true;
        checkManilles = true;
        checkFolre = true;
        checkPinya = true;
  
        numeroPom = 2;
        numeroTronc = 2;
        numeroManilles = 2;
        numeroFolre = 2;
        numeroPinya = 2;
        break;
      case '2': 
        checkPom = true;
        checkTronc = true;
        checkManilles = true;
        checkFolre = true;
        checkPinya = true;
  
        numeroPom = 3;
        numeroTronc = 3;
        numeroManilles = 3;
        numeroFolre = 3;
        numeroPinya = 3;
        break;
    }
  }

  // Checks

  if(checkPom){
    document.getElementById('check-pom').checked = true;
  } else {
    document.getElementById('check-pom').checked = false;
  }

  if(checkTronc){
    document.getElementById('check-tronc').checked = true;
  } else {
    document.getElementById('check-tronc').checked = false;
  }

  if(checkManilles){
    document.getElementById('check-manilles').checked = true;
  } else {
    document.getElementById('check-manilles').checked = false;
  }

  if(checkFolre){
    document.getElementById('check-folre').checked = true;
  } else {
    document.getElementById('check-folre').checked = false;
  }

  if(checkPinya){
    document.getElementById('check-pinya').checked = true;
  } else {
    document.getElementById('check-pinya').checked = false;
  }

  // Numero de persones

  document.getElementById('numero-pom').value = numeroPom;
  document.getElementById('numero-tronc').value = numeroTronc;
  document.getElementById('numero-manilles').value = numeroManilles;
  document.getElementById('numero-folre').value = numeroFolre;
  document.getElementById('numero-pinya').value = numeroPinya;

  // Pesos

  document.getElementById('pes-pom').value = pesPom;
  document.getElementById('pes-tronc').value = pesTronc;
  document.getElementById('pes-manilles').value = pesManilles;
  document.getElementById('pes-folre').value = pesFolre;
  document.getElementById('pes-pinya').value = pesPinya;

  calcula();
}

window.onload = function(){
  const url = 'assets/data/castells.json';

  fetch(url)
  .then(res => {
    try {
      var data = res.json();
    } catch (e) {
      return null;
    }
    return data;
  })
  .then(out => {
    if(out === null){
      window.fitxerCarregat = false;

      const opcions = document.getElementById('opcions-castells');
      for(let i = 0; i < 3; i++){
        const nouElement = document.createElement("option");
        nouElement.append('Castell ' + (i + 1));
        nouElement.value = i;
        opcions.appendChild(nouElement);
      }
    } else {
      if(out && out['castell'] && out['castell'].length > 0){
        window.castells = out;

        const opcions = document.getElementById('opcions-castells');

        out['castell'].forEach((elem, index) => {
          const nouElement = document.createElement("option");
          nouElement.append(elem['nom']);
          nouElement.value = index;
          opcions.appendChild(nouElement);
        });

        window.fitxerCarregat = true;
      }
    }

    seleccioCastell('0');
  });
}