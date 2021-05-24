let theInput = document.querySelector(".get-repos input"),
  getButton = document.querySelector(".get-button"),
  reposData = document.querySelector(".show-data");

//console.log(theInput);
//console.log(getButton);
//console.log(reposData);

getButton.onclick = function () {
  getRepos();
}

function getRepos() {
  if (theInput.value == "") {
    reposData.innerHTML = "<span> Please Write Github Username.</span>";
  }
  else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((response) => response.json())

      .then((repositories) => {
        reposData.innerHTML = '';
        repositories.forEach(repo => {

          let mainDiv = document.createElement("div"),
            repoName = document.createTextNode(repo.name);
          mainDiv.appendChild(repoName);
          mainDiv.className = 'repo-box';

          let theUrl = document.createElement('a'),
            theUrlText = document.createTextNode("Visit");
          theUrl.appendChild(theUrlText);
          theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;
          theUrl.setAttribute('target', '_blank');
          mainDiv.appendChild(theUrl);

          let starSpan = document.createElement("span"),
            starText = document.createTextNode(`Stars ${repo.stargazers_count}`);
          starSpan.appendChild(starText);
          mainDiv.appendChild(starSpan);

          reposData.appendChild(mainDiv);

        })
      });
  }
}