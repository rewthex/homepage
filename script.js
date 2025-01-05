document.querySelectorAll('.project').forEach((project) => {
  const projectName = project.querySelector('.project-title h2').textContent;

  const githubLink = project.querySelector('.github-link');
  if (githubLink) {
    githubLink.setAttribute('aria-label', `Visit ${projectName} on GitHub`);
  }
  
  const externalLink = project.querySelector('.external-link');
  if (externalLink) {
    externalLink.setAttribute('aria-label', `Visit ${projectName} external site`);
  }
});
