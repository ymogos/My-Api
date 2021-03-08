$('#btnEarthquake').click(function () {

	$.ajax({

		url: "libs/php/getEarthQuakesInfo.php",
		type: 'POST',
		dataType: 'json',
		data: {
			north: '44.1',
			south: '-9.9',
			east: '-22.4',
			west: '55.2'

		},


		success: function (result) {


			//console.log("secondcall", result);


			if (result.status.name == "ok") {
				const resultString = `
				<dl class='row'>
			<dt class='col-sm-3'>datetime</dt>
			<dd class='col-sm-9'>${result['data'][0].datetime}</dd>
			<dt class='col-sm-3'>depth</dt>
			<dd class='col-sm-9'>${result['data'][0].depth}</dd>
			<dt class='col-sm-3'>longitute</dt>
			<dd class='col-sm-9'>${result['data'][0].lng}</dd>
			<dt class='col-sm-3'>source</dt>
			<dd class='col-sm-9'>${result['data'][0].src}</dd>
			<dt class='col-sm-3'>magnitute</dt>
			<dd class='col-sm-9'>${result['data'][0].magnitude}</dd>
			<dt class='col-sm-3'>latitude</dt>
			<dd class='col-sm-9'>${result['data'][0].lat}</dd>
		</dl>
				`;
				$('#result').html(resultString);
			}


		},
		error: function (jqXHR, textStatus, errorThrown) {
			// your error code
		}
	});


});

$('#btnastergdem').click(function () {

	$.ajax({

		url: 'libs/php/getAstegdemInfo.php',

		type: 'POST',
		dataType: 'json',
		data: {
			lat: '50.01',
			lng: '10.2',
		},


		success: function (result) {
         //console.log(result);
           if (result.status.name == "ok") {
				const resultString = `
				<dl class='row'>
				<dt class='col-sm-3'>astegdem</dt>
				<dd class='col-sm-9'>${result['data']}</dd>
				</dl>
				
				
				`;
			
			  
				$('#result').html(resultString);
			}


		},
		error: function (jqXHR, textStatus, errorThrown) {
			// your error code
		}
	});


});


$('#btnstreet').click(function () {

	$.ajax({

		url: "libs/php/getStreetNameInfo.php",
		type: 'POST',
		dataType: 'json',
		data: {
			q: 'Museumplein+6+amsterdam'

		},
    	success: function (result) {

			console.log(result);
			if (result.status.name == "ok") {
				const resultString = `
			<dl class='row'>
			<dt class='col-sm-3'>AdminCode2</dt>
			<dd class='col-sm-9'>${result['data'].adminCode2}</dd>
			<dt class='col-sm-3'>AdminCode1</dt>
			<dd class='col-sm-9'>${result['data'].adminCode1}</dd>
			<dt class='col-sm-3'>Longitute</dt>
			<dd class='col-sm-9'>${result['data'].lng}</dd>
			<dt class='col-sm-3'>Locality</dt>
			<dd class='col-sm-9'>${result['data'].locality}</dd>
			<dt class='col-sm-3'>AdminName2</dt>
			<dd class='col-sm-9'>${result['data'].adminName2}</dd>
			<dt class='col-sm-3'>Street</dt>
			<dd class='col-sm-9'>${result['data'].street}</dd>
			<dt class='col-sm-3'>PostalCode</dt>
			<dd class='col-sm-9'>${result['data'].postalcode}</dd>
			<dt class='col-sm-3'>CountryCode</dt>
			<dd class='col-sm-9'>${result['data'].countryCode}</dd>
			<dt class='col-sm-3'>AdminName1</dt>
			<dd class='col-sm-9'>${result['data'].adminName1}</dd>
			<dt class='col-sm-3'>Latitude</dt>
			<dd class='col-sm-9'>${result['data'].lat}</dd>
		</dl>
				`;
				$('#result').html(resultString);
			}
		},
		error: function (jqXHR, textStatus, errorThrown) {
			// your error code
		}
	});


}); 