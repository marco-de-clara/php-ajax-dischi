<?php require 'public/php/dischi.php'; ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dischi Musicali</title>
        <link rel="stylesheet" href="public/css/app.css">
    </head>
    <body>
        <header>
            <div class="container">
                <form>
                    <label for="genre">Choose a genre:</label>
                    <select name="genre" id="genre">
                        <option value="all">All</option>
                        <option value="pop">Pop</option>
                        <option value="rock">Rock</option>
                        <option value="metal">Metal</option>
                        <option value="jazz">Jazz</option>
                    </select>

                    <label for="artist">Choose an artist:</label>
                    <select name="genre" id="artist">
                        <option value="all">All</option>
                        <option value="bon jovi">Bon Jovi</option>
                        <option value="dave weckl">Dave Weckl</option>
                        <option value="deep purple">Deep Purple</option>
                        <option value="eric clapton">Eric Clapton</option>
                        <option value="iron maiden">Iron Maiden</option>
                        <option value="metallica">Metallica</option>
                        <option value="michael jackson">Michael Jackson</option>
                        <option value="queen">Queen</option>
                        <option value="steve gadd band">Steve Gadd Band</option> 
                        <option value="sting">Sting</option>
                    </select>
                  </form>
            </div>
        </header>
        
        <main>
            <div class="records-wrapper container">
                <?php 
                    foreach($dischi as $disco) { ?>
                        <div class="record active">
                            <img class="cover" src="<?php echo $disco['poster']?>" alt="">
                            <h2 class="title">
                                <?php echo $disco['title']?>
                            </h2>
                            <div class="author">
                                <?php echo $disco['author']?>
                            </div>
                            <div class="genre">
                                <?php echo $disco['genre']?>
                            </div>
                            <div class="year">
                                <?php echo$disco['year']?>
                            </div>
                        </div>
                        <?php
                    }
                ?>
            </div>
        </main>

        <script src="public/js/app.js" charset="UTF-8"></script>
    </body>
</html>