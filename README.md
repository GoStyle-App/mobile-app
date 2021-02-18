# GoReduc
<div style="text-align:center"><img src="http://deuxiemesoi.com/ressources/img/GoReduc.png" width="400" alt=""/></div>

## Installation

### SSH

Installation par clef SSH :

```bash
$ git clone git@github.com:GoStyle-App/mobile-app.git
```

## Lancement de l'application

Nous nous intéresserons ici qu'aux systèmes Android (smartphone) et Windows (ordinateur).

### Prérequis
Pour le smartphone :
- Mode développeur (ou Options de développement) activé,
- Débogage USB activé dans les options de développement,
- Le smartphone doit être branché à l'ordinateur par câble USB,
- Lors du branchement du smartphone sur l'ordinateur, autoriser l'ordinateur à avoir accès au téléphone,
- Le téléphone devra toujours être déverrouillé (idéalement sur l'écran d'accueil).

Pour l'ordinateur :
- Avoir NodeJs sur sa machine ([Installer NodeJs](https://nodejs.org/fr/download/))

Pour lancer le projet, il vous suffit d'exécuter cette commande depuis un terminal,
dans le contenu du dossier `mobile-app` :

```
mobile-app> npm install --global expo-cli
```

###### Cette dernière commande peut prendre quelques minutes.

Puis, pour installer Expo :

```
mobile-app> npm add expo
```

###### Cette dernière commande peut prendre quelques minutes.

Enfin, vous pouvez à présent lancer l'application avec cette commande :

```
mobile-app> npm start
```

Une page web s'affiche avec un URL de ce type : `localhost:19002`.

Dans cette page, à gauche, cliquez sur `Tunnel`.

Attendez que le message suivant apparaisse dans la partie noire de la page : `Tunnel ready.`.

Enfin, toujours à gauche de la page web, cliquez sur `Run on Android device/emulator`.

L'application se lance et est disponible sur votre ordinateur !

## Raccourci

Si ce n'est pas votre première installation / lancement,
vous pouvez directement ouvrir l'application de votre smartphone `Expo Go`, et depuis cette application, lancer `GoStyle`.
