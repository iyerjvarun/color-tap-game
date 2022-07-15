import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";

      import {
        getDatabase,
        get,
        ref,
        query,
        limitToLast,
        orderByChild,
        push,
      } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";


      const firebaseConfig = {
        apiKey: "AIzaSyDsAyzydtLeBjhiIP4UTJTuOvtXj6KJvrU",
        authDomain: "color-tap-by-iyerjvarun.firebaseapp.com",
        databaseURL:
          "https://color-tap-by-iyerjvarun-default-rtdb.firebaseio.com",
        projectId: "color-tap-by-iyerjvarun",
        storageBucket: "color-tap-by-iyerjvarun.appspot.com",
        messagingSenderId: "849027170556",
        appId: "1:849027170556:web:4ea3ee6c17605e5ad75779",
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const db = getDatabase();

      // firebase initialised hopefully, now let's do the score shit.

    
    //   var scorebox = document.getElementById("score").value;
      // var submitbox = document.getElementById("inputsubmit");
      var ct = "Players/";

      function save() {
        push(ref(db, ct), {
          Name: namebox,
          Score: parseInt(counter),
        })
          .then(() => {
            const mosthighscores = query(
              query(ref(db, "Players"), orderByChild("Score")),
              limitToLast(5)
            );

            get(mosthighscores).then((snapshot) => {
              var highscores = [];
              snapshot.forEach((childsnap) => {
                highscores.push(childsnap.val());
              });
              highscores.reverse();

              highscores.forEach((snapshot) => {
                var show = document.getElementById("playerdetails");
                show.innerHTML +=
                  "<tr><td><strong class='detailName'>" +
                  snapshot.Name +
                  "</strong></td> <td><strong class='detailAge'>" +
                  snapshot.Score +
                  "</strong></td></tr>";
              });
            });
          })
          .catch((error) => {
            alert("unsucessful lol" + error);
          });
      }

      window.save = save;

      export { save };