/* 
   NOTICE
   Since version 4, the functionality in this file is only used for UI elements;
   we rely on the module osrm-text-instructions (https://github.com/Project-OSRM/osrm-text-instructions/)
   for creating the itinerary instructions.

   For non-OSRM routers which do not support their own localization, you need to include the module
   leaflet-routing-machine-localization, which adds the localization support that was built into
   version 3 of Leaflet Routing Machine.
*/

import L from 'leaflet';

var spanish = {
	ui: {
		startPlaceholder: 'Inicio',
		viaPlaceholder: 'Via {viaNumber}',
		endPlaceholder: 'Destino'
	},
	units: {
		meters: 'm',
		kilometers: 'km',
		yards: 'yd',
		miles: 'mi',
		hours: 'h',
		minutes: 'min',
		seconds: 's'
	}
};

var Localization = L.Class.extend({
	initialize: function(langs) {
		this._langs = L.Util.isArray(langs) ? langs : [langs, 'en'];

		for (var i = 0, l = this._langs.length; i < l; i++) {
			if (!Localization[this._langs[i]]) {
				throw new Error('No localization for language "' + this._langs[i] + '".');
			}
		}
	},

	localize: function(keys) {
		var dict,
			key,
			value;

		keys = L.Util.isArray(keys) ? keys : [keys];

		for (var i = 0, l = this._langs.length; i < l; i++) {
			dict = Localization[this._langs[i]];
			for (var j = 0, nKeys = keys.length; dict && j < nKeys; j++) {
				key = keys[j];
				value = dict[key];
				dict = value;
			}

			if (value) {
				return value;
			}
		}
	}
});

export default L.extend(Localization, {
	'en': {
		ui: {
			startPlaceholder: 'Start',
			viaPlaceholder: 'Via {viaNumber}',
			endPlaceholder: 'End'
		},
		units: {
			meters: 'm',
			kilometers: 'km',
			yards: 'yd',
			miles: 'mi',
			hours: 'h',
			minutes: 'min',
			seconds: 's'
		}
	},

	'de': {
		ui: {
			startPlaceholder: 'Start',
			viaPlaceholder: 'Via {viaNumber}',
			endPlaceholder: 'Ziel'
		}
	},

	'sv': {
		ui: {
			startPlaceholder: 'Från',
			viaPlaceholder: 'Via {viaNumber}',
			endPlaceholder: 'Till'
		}
	},

	'es': spanish,
	'sp': spanish,
	
	'nl': {
		ui: {
			startPlaceholder: 'Vertrekpunt',
			viaPlaceholder: 'Via {viaNumber}',
			endPlaceholder: 'Bestemming'
		}
	},
	'fr': {
		ui: {
			startPlaceholder: 'Départ',
			viaPlaceholder: 'Intermédiaire {viaNumber}',
			endPlaceholder: 'Arrivée'
		}
	},
	'it': {
		ui: {
			startPlaceholder: 'Partenza',
			viaPlaceholder: 'Intermedia {viaNumber}',
			endPlaceholder: 'Destinazione'
		}
	},
	'pt': {
		ui: {
			startPlaceholder: 'Origem',
			viaPlaceholder: 'Intermédio {viaNumber}',
			endPlaceholder: 'Destino'
		}
	},
	'sk': {
		ui: {
			startPlaceholder: 'Začiatok',
			viaPlaceholder: 'Cez {viaNumber}',
			endPlaceholder: 'Koniec'
		}
	},
	'el': {
		ui: {
			startPlaceholder: 'Αφετηρία',
			viaPlaceholder: 'μέσω {viaNumber}',
			endPlaceholder: 'Προορισμός'
		}
	},
	'ca': {
		ui: {
			startPlaceholder: 'Origen',
			viaPlaceholder: 'Via {viaNumber}',
			endPlaceholder: 'Destí'
		}
	},
	'ru': {
		ui: {
			startPlaceholder: 'Начало',
			viaPlaceholder: 'Через {viaNumber}',
			endPlaceholder: 'Конец'
		},
		units: {
			meters: 'м',
			kilometers: 'км',
			yards: 'ярд',
			miles: 'ми',
			hours: 'ч',
			minutes: 'м',
			seconds: 'с'
		}
	},
              
  'pl': {
		ui: {
			startPlaceholder: 'Początek',
			viaPlaceholder: 'Przez {viaNumber}',
			endPlaceholder: 'Koniec'
		},
		units: {
			meters: 'm',
			kilometers: 'km',
			yards: 'yd',
			miles: 'mi',
			hours: 'godz',
			minutes: 'min',
			seconds: 's'
		}
	}
});
