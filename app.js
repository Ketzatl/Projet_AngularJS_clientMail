angular.module("Webmail",["ngSanitize"])

.controller("WebmailCtrl", function($scope, $location) {

    $scope.dossiers = [
                        { value: "RECEPTION", label: 'Boite de réception', emails: [
                                { id: 1, from: "Albator", to: "Morgan", subject: "Je reviens", date: "20/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
                                { id: 2, from: "Capitaine Flam", to: "Morgan", subject: "Bisous de l'espace", date: "18/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." },
                                { id: 3, from: "Pikachu", to: "Morgan", subject: "Pika pika !", date: "15/03/2014", content: "Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Chuuuuuu. Pika pika ! Pika pika ? Piiiiika Chuuuuuu. Pika pika ! Pikachu. Pika pika pika." },
                                { id: 4, from: "Barbapapa", to: "Morgan", subject: "Hulahup Barbatruc", date: "13/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
                            ]  },
                        { value: "ARCHIVES", label: "Archives", emails: [
                                { id: 5, from: "Candy", to: "Morgan", subject: "Bon anniversaire", date: "20/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
                                { id: 6, from: "Hiro Nakamura", to: "Morgan", subject: "Konichiwa", date: "18/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." },
                                { id: 7, from: "Asuka Langley Soryu", to: "Morgan", subject: "Ca va chier", date: "20/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." }
                            ]  },
                        { value: "ENVOYES", label: "Envoyés", emails: [
                                { id: 8, from: "Morgan", to: "Albator", subject: "Bien la famille ?", date: "20/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
                                { id: 9, from: "Morgan", to: "Capitaine Flam", subject: "Gloubiboulga Night", date: "18/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
                            ] },
                        { value: "SPAM", label: "Courrier indésirable", emails: [
                                { id: 10, from: "Rue du discount", to: "Morgan", subject: "Envie d'un nouveau frigo ?", date: "20/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id ligula ac sem fringilla mattis. Nullam sodales mi vel semper volutpat. Phasellus lorem leo, luctus a lectus id, posuere aliquet orci. Praesent sit amet ipsum porttitor, tempus odio vel, bibendum mauris. Etiam magna lorem, rhoncus eget euismod ac, lobortis quis." },
                                { id: 11, from: "Sofinnoga", to: "Morgan", subject: "Besoin d'argent ?", date: "18/03/2014", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur elementum leo. Curabitur luctus, magna a tempor sodales, orci velit dictum magna, nec pharetra turpis ante vehicula ante. Sed sed libero suscipit, rutrum ligula vel, tempor lorem. Phasellus pulvinar dolor ac velit porttitor pulvinar. Mauris felis quam, consequat at <b>mauris</b>." }
                            ] }
                    ];

    $scope.dossierCourant = null;
    $scope.emailSelectionne = null;

    $scope.selectionDossier = function(dossier) {
        $scope.dossierCourant = dossier;
        $scope.emailSelectionne = null;
    }
    $scope.selectionEmail = function(email) {
        $scope.emailSelectionne = email;
    }

    $location.path();

});

