<script>
async function getGitHubRepositories(username, limit) {
  const apiUrl = `https://api.github.com/users/${username}/repos?type=owner&sort=created`;

  try {
    const response = await fetch(apiUrl);
    const repositories = await response.json();

    const nonForkedRepositories = repositories.filter(repo => !repo.fork).slice(0, limit);
    
    const repositoriesInfo = nonForkedRepositories.map(repo => ({
      name: repo.name,
      description: repo.description,
      link: repo.html_url,
      stars: repo.stargazers_count
    }));

    repositoriesInfo.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    return repositoriesInfo;
  } catch (error) {
    console.error(`Failed to retrieve repositories for ${username}: ${error.message}`);
    return [];
  }
}

getGitHubRepositories('SX-9', 9).then(
  repos => repos.forEach(repo => {
    let el = document.createElement('div');
    let title = document.createElement('h2');
    let link = document.createElement('a');
    let description = document.createElement('p');
    let stars = document.createElement('p');
    let spacing = document.createElement('br');

    link.href = repo.link;
    link.innerText = repo.name;
    description.innerText = `${repo.description || 'No Description'}`;
    stars.innerText = `Stars: ${repo.stars || 'No? 😢'}`;
    el.classList.add('round');
    
    title.appendChild(link);
    el.appendChild(title);
    el.appendChild(description);
    el.appendChild(spacing);
    el.appendChild(stars);
    document.getElementById('grid').appendChild(el);
  })
);
</script>

<template>
  <div id="work" class="center">
    <div class="container">
      <h1>Github Repositories</h1>
      <div id="grid"></div>
      <p id="more"><a href="https://github.com/SX-9?tab=repositories">See More On My Github</a><br><br><br></p>
    </div>
  </div>
</template>

<style scoped>
p#more { text-align: center; margin: 1em; }
div#grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  grid-gap: 1em;
  width: 70vw;
}

p.desktop { font-size: 1.3rem; text-indent: 2em; }
</style>
