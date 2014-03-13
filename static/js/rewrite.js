<script type="text/javascript">
padeditbar.setEmbedLinks = function(){
  if ($('#readonlyinput').is(':checked'))
  {
    if(window.location.href.indexOf("$") != -1){ // If this is a pro pad IE contains a $ in teh URL
      var basePath = window.location.protocol + "//" + window.location.hostname;
      var readonlyLink = basePath + "/" + clientVars.readOnlyId; // format the whole URL

      // Now write the values to the UI
      $('#embedinput').val("<iframe name='embed_readonly' src='" + readonlyLink + "' width=600 height=400>");
      $('#linkinput').val(readonlyLink);
    }
  }
  else
  {
    if(window.location.href.indexOf("$") != -1){ // If this is a pro pad IE contains a $ in teh URL
      var padPath = window.location.href.split("$")[1]; // Get the whole Path
      padPath = padPath.split("?")[0]; // get the path without the params
      var padUrl = window.location.protocol + "//" + window.location.hostname + "/" + padPath;
    }

    if(window.location.href.indexOf("r.") != -1){ // If this is a read only PAD
      var padPath = window.location.href.split("r.")[1];
      padPath = "r."+padPath;
      var padUrl = window.location.protocol + "//" + window.location.hostname + "/" + padPath;
    }

    // Now write the values to the UI
    $('#embedinput').val("<iframe name='embed_readwrite' src='"+padUrl+"' width=600 height=400>");
    $('#linkinput').val(padUrl);
  }
}
</script>
