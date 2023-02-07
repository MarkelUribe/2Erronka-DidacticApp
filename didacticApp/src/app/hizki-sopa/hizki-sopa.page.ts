import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Declare jquery
declare var $: any;
declare var WordFindGame: any;
declare var wordfind: any;
declare var solve: any;
declare global {
  interface Window {
    game: any;
  }
}


@Component({
  selector: 'app-hizki-sopa',
  templateUrl: './hizki-sopa.page.html',
  styleUrls: ['./hizki-sopa.page.scss'],
})
export class HizkiSopaPage implements OnInit {

  constructor(private router: Router) { 

  }

  hurrengoJokoa(){
    localStorage.setItem('fase', '1');
    this.router.navigate(['/home']);
  }


  ngOnInit() {
    // Write your jquery code here
    $(document).ready(function() {   
      /*  words  */
      [
        "izotza",
        "koltxonetak",
        "aukera",
        "azoka",
        "kontzertuak",
        "herribazkaria",
        "liburua",
        "diskoa",
      ].map((word) =>
        WordFindGame.insertWordBefore($("#add-word").parent(), word)
      );

      /* Init */
      function recreate() {
        $("#result-message").removeClass();
        var fillBlanks, game;
        if ($("#extra-letters").val() === "none") {
          fillBlanks = false;
        } else {
          fillBlanks = $("#secret-word").val();
        }
        try {
          game = new WordFindGame("#puzzle", {
            fillBlanks: fillBlanks,
            maxAttempts: 100,
          });
        } catch (error) {
          $("#result-message")
            .text(`😞 ${error}, try to specify less ones`)
            .css({ color: "red" });
          return;
        }
        wordfind.print(game);
        if (window.game) {
          var emptySquaresCount = WordFindGame.emptySquaresCount();
          $("#result-message")
            .text(
              `😃 ${emptySquaresCount ? "but there are empty squares" : ""}`
            )
            .css({ color: "" });
        }
        window.game = game;
      }
      recreate();
      
      $("#create-grid").click(recreate);

      $("#solve").click(() => window.game.solve()); 
    });

  }

}
