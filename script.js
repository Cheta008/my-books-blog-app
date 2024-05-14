
        function read() {
          let name = prompt("What's your name?");
          let book = prompt(
            "What is your favorite genre of book? Type 'all' if you love all fantasy novels."
          );

          if (book === "romance") {
            alert("OMG! " + name + ", I love romance too 🤭");
          } else if (book === "all") {
            alert(
              "WOW! " +
                name +
                ", Hope you enjoy reading fantansy novels on Wattpad 😄"
            );
          } else {
            alert(
              "That's cool " +
                name +
                ", Hope you enjoy reading your " +
                book +
                " books on Wattpad"
            );
          }
        }

        let infoButton = document.querySelector("button");

        infoButton.addEventListener("click", read);
      