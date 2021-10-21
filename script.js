const linksSocialMedia = {
  github: 'suzinogueira',
  youtube: '',
  facebook: '',
  instagram: 'suzi_nogueira',
  twitter: ''
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()
