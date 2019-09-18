  var schema = {
  title: 'schema v1',
  type: 'object',
  required: ["id","nombre"],
  properties: {
    id:{type: 'number'},
    nombre:{type: ['string']},
    estado:{type: ['string','null']}
  }
};