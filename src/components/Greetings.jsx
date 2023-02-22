
function Greetings(toks){
    const {lang, children} = toks;

      switch(lang){
            case 'de':
                return `Hallo ${children}`
            case 'en':
                return `Hello ${children}`
            case 'es':
                return `Hola ${children}`
            default: 
                return `Bonjour ${children}`
        }
    }
    
    export default Greetings;

    
