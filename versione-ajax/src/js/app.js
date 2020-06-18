$(document).ready(function() {

    $.ajax({
        'url': 'public/php/dischi.php',
        'method': 'GET',
        'success': function(dischi) {
            for (var i = 0; i < dischi.length; i++) {
                // get current disc
                var disco = dischi[i];
                // set up record container
                var record_container = $('<div class="record active"></div>');
                // append poster to the container 
                record_container.append('<img class="cover" src="' + disco.poster + '" alt="">');
                // append title to the container
                record_container.append('<h2 class="title">' + disco.title + '</h2>');
                // append author to the container
                record_container.append('<div class="author">' + disco.author + '</div>');
                // append genre to the container
                record_container.append('<div class="genre">' + disco.genre + '</div>');
                // append year to the container
                record_container.append('<div class="year">' + disco.year + '</div>');
                // append container to wrapper
                $('.records-wrapper').append(record_container);
            }
        },
        'error': function() {
            console.log('si è verificato un errore');
        }
    });
});