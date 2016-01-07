angular
  .module('hometown')
  .factory('Recommendation', Recommendation)

Recommendation.$inject = ['$resource', 'API']
function Recommendation($resource, API){

  return $resource(
    API+'/recommendations/:id', {id: '@id'},
    { 'get':       { method: 'GET' },
      'save':      { method: 'POST' },
      'query':     { method: 'GET', isArray: true},
      'remove':    { method: 'DELETE' },
      'delete':    { method: 'DELETE' },
    }
  );
}