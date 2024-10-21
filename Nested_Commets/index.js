let commentConatiner = document.getElementById("comment-container");

function createInputBox() {
  let div = document.createElement("div");

  div.setAttribute("class", "commit-container");

  div.innerHTML += `
        <input type="text" placeholder="add text here" class="input" />
        <button class="btn-submit">Submit</button>
      `;

  return div;
}

function addReply(text) {
  let div = document.createElement("div");

  div.setAttribute("class", "all-container");

  div.innerHTML += `
          <div class="card">
            <span class="text">${text}</span>
            <span id="reply" class="reply">Reply</span>
          </div>
        `;
  return div;
}

commentConatiner.addEventListener("click", function (e) {
  let replyClick = e.target.classList.contains("reply");
  let submitClick = e.target.classList.contains("btn-submit");
  let closedCard = e.target.closest(".all-container");
  console.log(closedCard);
  //   console.log(replyClick);
  //   console.log(submitClick);
  //   console.log(closedCard);

  if (replyClick) {
    closedCard.appendChild(createInputBox());
  }

  if (submitClick) {
    const commetsDetails = e.target.closest(".commit-container");
    console.log(commetsDetails.children);
    if (commetsDetails.children[0].value) {
      closedCard.appendChild(addReply(commetsDetails.children[0].value));
      commetsDetails.remove();
    }
  }
});
