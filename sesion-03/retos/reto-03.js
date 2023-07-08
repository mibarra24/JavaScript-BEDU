const person = {
    firstName: 'John',
    lastName: 'Doe',
    links: {
      web: {
        blog: 'https://johndoe.com'
      }, 
      social: {
        facebook: 'https://facebook.com/john.doe',
        instagram: 'https://instagram.com/john.doe'
      } 
    }
  }


  //Extraer las URLs de facebook e instagram y renombrar las variables por fb e ig respectivamente.
  const {links: {social:{facebook:fb, instagram:ig}}} = person;
  console.log(fb); 
  console.log(ig); 