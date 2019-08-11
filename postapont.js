jQuery(document).ready(function($){


	$( 'body' ).bind( 'updated_checkout', function() 
	{

		if($('#postapontvalasztoapi').length) 
		{

			//Check for disabled categories
			if(posta_pont_options.disabled_categories) {
				$.each( posta_pont_options.disabled_categories, function( index, value ){
					ppapi.setMarkers(value, false);
				});
			}

			if(jQuery('#shipping_postcode').val() != '') {
				var zipField = 'shipping_postcode';
			} else {
				var zipField = 'billing_postcode';
			}
			ppapi.linkZipField(zipField); 
			ppapi.insertMap('postapontvalasztoapi'); //<-- PostaPont választó API beillesztése ( ilyen azonosítóval rendelkező DOM objektumba)
			ppapi.onSelect = function(data){ //<-- Postapont kiválasztásra bekövetkező esemény lekötése
				//A kiválasztott PostaPont adatainak visszaírása a megrendelő form rejtett mezőjébe.
				$('#wc_selected_postapont').val( data['name'] + '|' +data['zip'] +'|'+ data['county'] +'|'+ data['address'] );

				//Adatkiírás
				$('#valasztott_postapont').show().find('p').html(data['name'] + '<br>' +data['zip'] +'<br>'+ data['county'] +'<br>'+ data['address']);
			}

		}
	});
});