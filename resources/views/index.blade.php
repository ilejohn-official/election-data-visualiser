<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" href="/favicon.ico">
        <title>My_Map</title>

        <!-- Styles -->
        <!-- Bootstrap core CSS -->
        <link rel="stylesheet" href="{{ asset('bootstrap-4.0.0-beta.2/dist/css/bootstrap.min.css')}}">
        <link rel="stylesheet" href="{{ asset('Leaflet-1.2.0/dist/leaflet.css')}}">
        <link rel="stylesheet" href="{{ asset('Leaflet-1.2.0/dist/leaflet.label.css')}}">

    </head>

    <body>
      <div class="container-fluid mt-1 mr-1">
        <div class="row">
            <div class="col-3">
              <h5>Navigation Column</h5>

             <form method="GET" action="" class="form-inline my-2 my-lg-0">
               <div class="input-group">
                 <input type="search" name="q" class="form-control form-control-sm" placeholder="Search State" aria-label="Search" data-toggle="tooltip" data-placement="bottom" title="Search">
                   <div class="input-group-append">
                      <button type="submit" class="btn btn-sm bg-light mr-sm-2"><img width="24" height="24" src="/storage/search.png" alt="Search"></button>
                   </div>
               </div>
             </form>
      <br>
              <h6>States</h6><br>


                <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="state">Select States</label>&nbsp;
        </div>
              <select class="custom-select" id="state">
                <option selected>Choose...</option>
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa-Ibom">Akwa-Ibom</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Osun">Osun</option>
                <option value="FCT">FCT</option>
                <option value="Kwara">Kwara</option>
                <option value="Nasarawa">Nasarawa</option>
                <option value="Kogi">Kogi</option>
                <option value="Gombe">Gombe</option>
                <option value="Ondo">Ondo</option>
                <option value="Yobe">Yobe</option>
                <option value="Enugu">Enugu</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Niger">Niger</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Anambra">Anambra</option>
                <option value="Oyo">Oyo</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Lagos">Lagos</option>
                <option value="Ogun">Ogun</option>
                <option value="Edo">Edo</option>
                <option value="Benue">Benue</option>
                <option value="Imo">Imo</option>
                <option value="Plateau">Plateau</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Taraba">Taraba</option>
                <option value="CrossRiver">CrossRiver</option>
                <option value="Borno">Borno</option>
                <option value="Delta">Delta</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Zamfara">Zamfara</option>
                <option value="Rivers">Rivers</option>
              </select>
          </div>

              <div class="input-group mb-3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">Select Party</label>&nbsp;
      </div>
            <select class="custom-select" id="party">
              <option selected>Choose...</option>
              <option value="AAC">AAC</option>
              <option value="ADC">ADC</option>
              <option value="ADP">ADP</option>
              <option value="APC">APC</option>
              <option value="PDP">PDP</option>
              <option value="SDP">SDP</option>
            </select>
        </div>

        <div>
          <b>Legend</b><br>
          <h5>Muhammadu Buhari(APC): Green</h5>
          <h5>Atiku Abubakar(PDP): Red</h5>

        </div>



            </div>

            <div class="col-9" id="map" style="height:53em"></div>
          </div>
        </div>

    </body>

    <script src="/bootstrap-4.0.0-beta.2/assets/js/vendor/jquery-slim.min.js"></script>
    <script src="/bootstrap-4.0.0-beta.2/assets/js/vendor/popper.min.js"></script>
    <script src="/bootstrap-4.0.0-beta.2/dist/js/bootstrap.min.js"></script>
    <script src="/Leaflet-1.2.0/dist/leaflet.js"></script> <!-- Leaflet v1.2.0 JS -->
    <script src="/Leaflet-1.2.0/dist/leaflet.label.js"></script>
    <script src="/ngpresident.geojson"></script>
    <script src="js/map.js"></script>
</html>
