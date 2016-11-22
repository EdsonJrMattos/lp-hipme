// Attach a submit handler to the formlog
$('form').submit(function(event)  {
  // Stop form from submitting normally
  event.preventDefault();
  var form = $(this),
  token_rdstation = '057b2fadf154819f2180e4b071084d58',
  token_rdstation_privado = '6df71f9806b6713aa104a861f12c4ae3',
  email = form.find("input[name='email']").val(),
  data_array = [{
    name: 'traffic_source',
    value: form.find("input[name='traffic_source']").val()
  }, {
    name: 'c_utmz',
    value: form.find("input[name='c_utmz']").val()
  }, {
    name: 'identificador',
    value: form.find("input[name='identifier']").val()
  }, {
    name: 'template',
    value: form.find("input[name='template']").val()
  }, {
    name: 'campanha',
    value: form.find("input[name='campanha']").val()
  }, {
    name: 'grupo_de_anuncio',
    value: form.find("input[name='group_ads']").val()
  }, {
    name: 'token_rdstation',
    value: token_rdstation
  }, {
    name: 'template',
    value: form.find("input[name='template']").val()
  }, {
    name: 'nome',
    value: form.find("input[name='name']").val()
  },{
    name: 'telefone',
    value: form.find("input[name='phone']").val()
  }, {
    name: 'email',
    value: form.find("input[name='email']").val()
  }, {
    name: 'comentario',
    value: form.find("textarea[name='note']").val()
  }];
  RdIntegration.post(data_array, function() {
    window.location.href = '/success';
  });
});


function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length,c.length);
    }
  }
  return "";
}
