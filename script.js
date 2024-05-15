
        function read() {
          let name = prompt("What's your name?");
          let book = prompt(
            "What is your favorite genre of book? Type 'all' if you aren't sure"
          );

          if (book === "romance") {
            alert("OMG " + name + "!" + ", I love romance too 🤭");
          } else if (book === "all") {
            alert(
              "That's awesome " +
                name + "!" +
                ", Hope you enjoy reading on Wattpad 😄"
            );
          } else {
            alert(
              "That's lovely " +
                name + "!" +
                ", Hope you enjoy reading " +
                book +
                " books on Wattpad"
            );
          }
        }

        let infoButton = document.querySelector("button");

        infoButton.addEventListener("click", read);
      