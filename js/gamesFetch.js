const url2 = "https://docs.google.com/spreadsheets/d/1AdCxezVKSEIYvg_rImoKb7IYZOrhrM00s0SOot4YhV0/view#gid=0"
const CLIENT_ID = ' 707805378572-ig1dk6rcu6bs4u4hgn26pp6o5pfsdo4h.apps.googleusercontent.com';
const API_KEY = 'AIzaSyB0hf6tIz1lbgiF7wxYQM-sApQCxalySAM';

fetch(url2)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        // handle the error
    });