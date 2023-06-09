import { renderHome } from './pages/home'

const routers = {
  '/': renderHome,
}


export function router(path){

   const renderer = routers[path];
   renderer()
    
}

function hideContent(e) {
  e.preventDefault()
  const mainContent = Array.from(document.querySelectorAll('main'));
  mainContent.forEach(section => {
    section.style.display = 'none'
  })
}