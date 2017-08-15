/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'justice\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-cart-icon6': '&#xe90a;',
		'icon-planet': '&#xe907;',
		'icon-twit': '&#xe902;',
		'icon-search': '&#xe904;',
		'icon-user2': '&#xe908;',
		'icon-cart2': '&#xe909;',
		'icon-slick-prev': '&#xe90b;',
		'icon-google': '&#xe900;',
		'icon-instagram': '&#xe901;',
		'icon-facebook': '&#xea90;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
