$(document).ready(function() {

    $('#genre').change(function() {
        // get chosen genre
        var chosen_genre = $('#genre :selected').val();
        // loop for the number of records to show a specific genre
        for(var i = 0; i < $('.record').length; i++) {
            if(chosen_genre != '') {
                // if the chosen genre isn't 'All'
                if(chosen_genre != 'all') {
                    // get current record genre 
                    var record_genre = $('.genre').eq(i).text().trim().toLowerCase();
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
        // loop for the number of artists (except "" and "all") to show a specific artist
        for(var i = 0; i < $('#artist option').length - 2; i++) {
            if(chosen_artist != '') {
                // if the chosen artist isn't 'All'
                if(chosen_artist != 'all') {
                    // get current record artist 
                    var record_artist = $('.author').eq(i).text().trim().toLowerCase();
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