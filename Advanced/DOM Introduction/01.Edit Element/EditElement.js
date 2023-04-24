function editElement(ref,match,replace) {
  let text = ref.textContent;
  let search = new RegExp(match, 'g');
  let edit = text.replace(search,replace);
  ref.textContent = edit;
    
}