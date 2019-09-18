try {
    context.setVariable('javascript.error', false);
    var bodyContent = context.getVariable('request.content');
    var body = JSON.parse(bodyContent);
    var result = tv4.validateMultiple(body, schema);
    print(result.valid)
    if(!result.valid){
        print(result.missing.length)
        print(result.errors.length)
        print(result.errors)
        if(result.missing.length>0 ) {
            result.errors[0].schema=schema;
            context.setVariable('javascript.errorMessage', (result.errors));
            throw "Definición de esquema no encontrada" + JSON.stringify(result.errors);
          
        }else if(result.errors.length>0){
            result.errors[0].schema=schema;
            context.setVariable('javascript.errorMessage', (result.errors));
            throw "Definición de esquema no encontrada" + JSON.stringify(result.errors);
     
        }
    }
}
catch( err ) {
  context.setVariable('javascript.error', true);
   throw err;
}
