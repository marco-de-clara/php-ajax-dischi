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

    $('#genre').change(function() {
        // get chosen genre
        var chosen_genre = $('#genre :selected').val();
        // loop for the number of records to show a specific genre
        for(var i = 0; i < $('.record').length; i++) {
            if(chosen_genre != '') {
                // if the chosen genre isn't 'All'
                if(chosen_genre != 'all') {
                    // get current record genre 
                    var record_genre = $('.genre').eq(i).text().toLowerCase();
                    // if current record genre equals chosen genre
                    if(record_genre == chosen_genre) {
                        // show that record
                        $('.genre').eq(i).parent().addClass('active');
                    } else {
                        // hide that record
                        $('.genre').eq(i).parent().removeClass('active');
                    }
                // if chosen genre is 'All'
                } else {
                    // show every record
                    $('.genre').eq(i).parent().addClass('active');
                }
            }
        }
        // get first value from select
        var first_option = $('#genre option:first');
        // set first value to genre select
        $('#genre').val(first_option.val());
    });

    $('#artist').change(function() {
        // get chosen artist
        var chosen_artist = $('#artist :selected').val();
        // loop for the number of artists to show a specific artist
        for(var i = 0; i < $('#artist option').length; i++) {
            if(chosen_artist != '') {
                // if the chosen artist isn't 'All'
                if(chosen_artist != 'all') {
                    // get current record artist 
                    var record_artist = $('.author').eq(i).text().toLowerCase();
                    // if current record artist equals chosen artist
                    if(record_artist == chosen_artist) {
                        // show that record
                        $('.author').eq(i).parent().addClass('active');
                    } else {
                        // hide that record
                        $('.author').eq(i).parent().removeClass('active');
                    }
                // if chosen artist is 'All'
                } else {
                    // show every record
                    $('.author').eq(i).parent().addClass('active');
                }
            }
        }
        // get first value from select
        var first_option = $('#artist option:first');
        // set first value to artist select
        $('#artist').val(first_option.val());
    });
});