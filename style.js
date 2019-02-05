(function (blink) {
	'use strict';

	var subunit_slide_titles = [];
	var sgelvitaminaStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	sgelvitaminaStyle.prototype = {
		bodyClassName: 'content_type_clase_sgelvitamina',
		ckEditorStyles: {
			name: 'sgelvitamina',
			styles: [
				{ name: 'TÃ­tulo base', element: 'h2', attributes: { 'class': 'titulobase'} },
				{ name: 'TÃ­tulo 1', element: 'h2', attributes: { 'class': 'bck-title1'} },
				{ name: 'TÃ­tulo 2', element: 'h3', attributes: { 'class': 'bck-title2'} },
				{ name: 'TÃ­tulo 3', element: 'h3', attributes: { 'class': 'bck-title3'} },
				{ name: 'TÃ­tulo tema', element: 'h3', attributes: { 'class': 'titulotema'} },
				{ name: 'TÃ­tulo azul', element: 'h3', attributes: { 'class': 'azul'} },
				{ name: 'TÃ­tulo azul 2', element: 'h3', attributes: { 'class': 'azuldos'} },
				{ name: 'TÃ­tulo azul quÃ­mica', element: 'h3', attributes: { 'class': 'azulquimica'} },
				{ name: 'Proyecto', element: 'h3', attributes: { 'class': 'proyecto'} },
				{ name: 'Proyecto 2', element: 'h3', attributes: { 'class': 'proyectodos'} },
				{ name: 'EvaluaciÃ³n', element: 'h3', attributes: { 'class': 'evaluacion'} },

				{ name: 'Ã‰nfasis', element: 'span', attributes: { 'class': 'bck-enfasis'} },
				{ name: 'Ã‰nfasis Naranja', element: 'span', attributes: { 'class': 'bck-enfasis-naranja'} },
				{ name: 'Versalitas', element: 'span', attributes: { 'class': 'bck-versalitas'} },

				{ name: 'Lista Desordenada', element: 'ul', attributes: { 'class': 'bck-ul'} },
				{ name: 'Lista Desordenada 2', element: 'ul', attributes: { 'class': 'bck-ul-2'} },
				{ name: 'Lista Desordenada 3', element: 'ul', attributes: { 'class': 'bck-ul-3'} },
				{ name: 'Lista Ordenada', element: 'ol', attributes: { 'class': 'bck-ol' } },
				{ name: 'Lista Ordenada 2', element: 'ol', attributes: { 'class': 'bck-ol-2' } },
				{ name: 'Lista Ordenada 3', element: 'ol', attributes: { 'class': 'bck-ol-3' } },

				{ name: 'Caja simple', type: 'widget', widget: 'blink_box', attributes: { 'class': 'simple' } },
				{ name: 'Caja simple 2', type: 'widget', widget: 'blink_box', attributes: { 'class': 'simple-2' } },
				{ name: 'Caja simple 3', type: 'widget', widget: 'blink_box', attributes: { 'class': 'simple-3' } },
				{ name: 'Caja inicio', type: 'widget', widget: 'blink_box', attributes: { 'class': 'inicio' } },
				{ name: 'Caja blanca', type: 'widget', widget: 'blink_box', attributes: { 'class': 'blanca' } },
				{ name: 'Caja proyecto', type: 'widget', widget: 'blink_box', attributes: { 'class': 'cajaproyecto' } },
				{ name: 'Caja marrÃ³n', type: 'widget', widget: 'blink_box', attributes: { 'class': 'cajamarron' } },
				{ name: 'Caja buen vivir', type: 'widget', widget: 'blink_box', attributes: { 'class': 'buenvivir' } },
				{ name: 'Caja saberes', type: 'widget', widget: 'blink_box', attributes: { 'class': 'saberes' } },
				{ name: 'Caja sabÃ­as que', type: 'widget', widget: 'blink_box', attributes: { 'class': 'sabias' } },
				{ name: 'Caja desequilibrio', type: 'widget', widget: 'blink_box', attributes: { 'class': 'desequilibrio' } },
				{ name: 'Caja tic', type: 'widget', widget: 'blink_box', attributes: { 'class': 'tic' } },
				{ name: 'Caja valores', type: 'widget', widget: 'blink_box', attributes: { 'class': 'valores' } },
				{ name: 'Caja indagaciÃ³n', type: 'widget', widget: 'blink_box', attributes: { 'class': 'indagacion' } },
				{ name: 'Caja evaluaciÃ³n', type: 'widget', widget: 'blink_box', attributes: { 'class': 'cajaevaluacion' } },
				{ name: 'Caja evaluaciÃ³n dos', type: 'widget', widget: 'blink_box', attributes: { 'class': 'cajaevaluaciondos' } },
				{ name: 'Caja evaluaciÃ³n tres', type: 'widget', widget: 'blink_box', attributes: { 'class': 'cajaevaluaciontres' } },
                { name: 'Caja estrategia', type: 'widget', widget: 'blink_box', attributes: { 'class': 'estrategia' } },
                { name: 'Caja diversidad', type: 'widget', widget: 'blink_box', attributes: { 'class': 'diver' } },
				{ name: 'Caja Interdisciplinariedad', type: 'widget', widget: 'blink_box', attributes: { 'class': 'inter' } },
				{ name: 'Caja laboratorio', type: 'widget', widget: 'blink_box', attributes: { 'class': 'laboratorio' } },
				{ name: 'Caja ejercicio resuelto', type: 'widget', widget: 'blink_box', attributes: { 'class': 'ejercicioresuelto' } },
				{ name: 'Caja seguridad', type: 'widget', widget: 'blink_box', attributes: { 'class': 'seguridad' } },
				{ name: 'Caja Frases', type: 'widget', widget: 'blink_box', attributes: { 'class': 'frases' } },
				{ name: 'Caja glosario', type: 'widget', widget: 'blink_box', attributes: { 'class': 'glosario' } },

				{ name: 'Tabla', element: 'table', type: 'bck-stack-class', attributes: { 'class': 'bck-table'} },
				{ name: 'Celda1', element: 'td', attributes: { 'class': 'bck-td'} },
				{ name: 'Celda2', element: 'td', attributes: { 'class': 'bck-td-dos'} },
				{ name: 'Celda morada', element: 'td', attributes: { 'class': 'bck-td-tres'} },

				{ name: 'Desplegable', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'sgelvitamina-dropdown' } },
				{ name: 'Desplegable 2', type: 'widget', widget: 'blink_dropdown', attributes: { 'class': 'sgelvitamina-dropdown-2' } },

				{ name: 'Imagen Sin Bordes', type: 'widget', widget: 'image', attributes: { 'class': 'normal-img' } },
				{ name: 'Imagen derecha', element: 'img', attributes: { 'class': 'bck-img right' } },
				{ name: 'Imagen izquierda', element: 'img', attributes: { 'class': 'bck-img left' } },

				{ name: 'icono ablink', element: 'span', attributes: { 'class': 'icono ablink' } },
				{ name: 'icono ascorm', element: 'span', attributes: { 'class': 'icono ascorm' } }
			]
		},
		slidesTitle: {},
		subunits: [],

		init: function () {
			var parent = blink.theme.styles.basic.prototype,
				that = this;
			parent.init.call(this);
			that.addActivityTitle();
			if(window.esWeb) return;
			that.fillSlidesTitle();
			that.getActualUnitActivities();
			blink.events.on("course_loaded", function(){
				that.formatCarouselindicators();
				that.enableSliders();
			});
			that.animateNavbarOnScroll();
			that.addSlideNavigators();
		},

		removeFinalSlide: function () {
			var parent = blink.theme.styles.basic.prototype;
			parent.removeFinalSlide.call(this, true);
		},

		configEditor: function (editor) {
			editor.dtd.$removeEmpty['span'] = false;
		},

		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return $(this).html() + ' > ' + blink.courseInfo.unit;
			})
		},

		fillSlidesTitle: function () {
			var self = this.slidesTitle;
			for (var index = 0; index < window.secuencia.length; index++) {
				var slide = window['t'+index+'_slide'];
				var slideTitle = slide.title;
				slideTitle = slideTitle.replace(/<span class="index">\s*([\d]+)\s*<\/span>/i, '$1. ');
				slideTitle = slideTitle.replace(/\s+/, ' ');
				slideTitle = stripHTML(slideTitle);

				self['t'+index+'_slide'] = slideTitle;
			}
		},

		/**
		 * @summary Gets the activity type subunits of the actual unit.
		 * @return {Object} Object of the actual unit filtering the not activity type subunits
		 */
		getActualUnitActivities: function () {
			var curso = blink.getCourse(idcurso),
				that = this,
				units,
				unitSubunits,
				unitActivities;

			curso.done(function () {
				units = curso.responseJSON.units;
				$.each(units, function () {
					if (this.id && this.id == blink.courseInfo.IDUnit) {
						unitSubunits = this.subunits.concat(this.resources);
					}
				});
				unitActivities = _.filter(unitSubunits, function(subunit) {
					return subunit.type == 'actividad';
				});
				that.subunits = unitActivities;
			}).done(function(){
				blink.events.trigger('course_loaded');
			});
		},


		/**
		 * @summary Getting active slide position in relation with the total of the
		 *          unit slides.
		 * @param {Array} $subunits Array of activity type objects
		 * @return {int} Slide position
		 */
		getActualSlideNumber: function (subunits) {
			var actualSlideIndex = $('.swipeview-active').attr('data-page-index'),
				actualSlide = 1;

			for (var i in subunits) {
				if (subunits[i].id && parseInt(subunits[i].id) != idclase) {
					actualSlide += parseInt(subunits[i].pags);
				} else {
					actualSlide += parseInt(actualSlideIndex);
					break;
				}
			}

			return actualSlide;
		},


		formatCarouselindicators: function () {
			var idgrupo = window.idgrupo,
				idalumno = window.idalumno,
				slideNavParams = '';

			if (idgrupo) slideNavParams += '&idgrupo=' + idgrupo;
			if (idalumno) slideNavParams += '&idalumno=' + idalumno;

			var $navbarBottom = $('.navbar-bottom'),
				$carouselIndicators = $('.slider-indicators').find('li'),
				that = this,
				firstSlide = eval('t0_slide');

			var subunits = that.subunits,
				totalSlides = 0,
				subunit_index,
				subunit_pags;

			var dropDown = '' +
					'<div class="dropdown">' +
						'<button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">' +
							'<span class="sectionTitle"></span>' +
							'<span class="caret"></span>' +
						'</button>' +
						'<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">';

			$navbarBottom.find('li').tooltip('destroy');

			var navigatorIndex = 0;

			for (var index = 0; index < window.secuencia.length; index++) {
				var slide = eval('t'+index+'_slide'),
					slideTitle = slide.title.replace(/<span class="index">[\d]+<\/span>/g, ''),
					textIndice = stripHTML(slideTitle),
					clase = '';

				if (slide.isConcatenate) continue;

				if (slide.seccion) {
					clase = (slide.seccion == 'taller') ? ('fa fa-edit') : ('fa fa-check');
				}


				navigatorIndex++;
			};

			for (var unit = 0; unit < subunits.length; unit++) {
				if (subunits[unit].titulosSlides) {
					var slideTitNum = subunits[unit].titulosSlides.length;
					var currElem;

					for (var sli = 0; sli < slideTitNum; sli++ ) {
						var tituloSlide = subunits[unit].titulosSlides[sli] || subunits[unit].type;
						subunit_slide_titles.push(tituloSlide);

						if (subunits[unit].id != idclase) {
							dropDown += '<li role="presentation">\
								<a role="menuitem" onclick="redireccionar(\'/coursePlayer/clases2.php?editar=0&idcurso=' + idcurso + '&idclase=' + subunits[unit].id + '&modo=0&popup=1&numSec='+(sli+1) + slideNavParams +'\', false, undefined)"></span> <span class="title">' + tituloSlide + '</span></a></li>';
						}
						else {
							dropDown += '<li role="presentation">\
											<a role="menuitem"></span> <span class="title">' + tituloSlide + '</span></a></li>';
						}
					}
				}
			}

			dropDown += '' +
						'</ul>' +
					'</div>';

			$navbarBottom
				.attr('class', 'sgelvitamina-navbar')
				.wrapInner('<div class="navbar-content"></div>')
				.find('ol')
					.before(dropDown)
					.wrap('<div id="top-navigator" class="hidden"/>')
					.end()
				.find('.dropdown')
					.find('li')
						.on('click', function (event) {
							$navbarBottom.find('ol').find('li').eq($(this).index()).trigger('click');
						});

			$('#volverAlIndice').click(function() {
				return showCursoCommit();
			});

			if (subunits.length !== 0) {
				for (var i in subunits) {
					if (subunits[i].pags) {
						var subunitSlides = parseInt(subunits[i].pags);
						totalSlides += subunitSlides;
					}
					if (subunits[i].id && subunits[i].id == idclase) {
						subunit_index = i;
						subunit_pags = parseInt(subunits[i].pags);
					}

				}

				that.totalSlides = totalSlides;

				$('#top-navigator').append('<span class="left slider-navigator">' +
						'<span class="fa fa-chevron-left"></span>' +
					'</span>' +
					'<span class="slide-counter" data-subunit-index="' + subunit_index +
						'" data-subunit-pags="' + subunit_pags + '">' +
						that.getActualSlideNumber(subunits) + ' / ' + totalSlides +
					'</span>' +
					'<span class="right slider-navigator">' +
						'<span class="fa fa-chevron-right"></span>' +
					'</span>');

				blink.events.on('section:shown', function() {
					$('.slide-counter').html(that.getActualSlideNumber(subunits) +
						' / ' + totalSlides);
				});
			} else {
				$('#top-navigator').append('<span class="left slider-navigator">' +
						'<span class="fa fa-chevron-left"></span>' +
					'</span>' +
					'<span class="slide-counter">' + (window.activeSlide + 1) +
						' / ' + window.secuencia.length +
					'</span>' +
					'<span class="right slider-navigator">' +
						'<span class="fa fa-chevron-right"></span>' +
					'</span>');

				blink.events.on('section:shown', function() {
					$('.slide-counter').html((window.activeSlide + 1) +
						' / ' + window.secuencia.length);
					$('.bck-dropdown-2').hideBlink();
				});
			}


			blink.events.on('section:shown', function() {
				var $navbarBottom2 = $('#dLabel');
				var sectionTitle = eval('t' + blink.activity.getFirstSlideIndex(window.activeSlide) + '_slide').title;
					$navbarBottom2.find('.sectionTitle').text(sectionTitle);
			});

			var curso = blink.getCourse(idcurso);
			curso.done(function () {
				var units = curso.responseJSON.units;
				var number = 0;
				var dropDownTemas = '' +
					'<div class="dropdownTemas">' +
						'<button id="tLabel" type="button" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false">' +
							'<h2>' +
								'<div id="nombre-tema-wrapper">' +
									'</span><span id="nombre-tema">' + blink.courseInfo.unit + '<span class="caret"></span></span>' +
									'<a href="#" id="goTo-indice"></a>' +
								'</div>' +
							'</h2>' +
						'</button>' +
						'<ul class="dropdown-menu" role="menu" aria-labelledby="tLabel">';

				for (var i in units) {
					var title = units[i].title,
					    idTema = units[i].id;
					if (title && units[i].subunits.length) { //Si el tema tiene actividades
						dropDownTemas += '' +
							'<li role="presentation" class="lista-temas" data-url="' + units[i].subunits[0].url + slideNavParams + '&popup=1">' +
								'<span><a role="menuitem">'+ title + '</a>' +
							'</li>'
						if (idTema == blink.courseInfo.IDUnit) number = units[i].number;
					}
				}

				dropDownTemas += '' +
						'</ul>' +
					'</div>';

				$('.dropdown')
					.before(dropDownTemas)
					.end()
					.find('#courseIndex').text(number);

				$('.lista-temas').click(function() {
					redireccionar($(this).data('url'));
				})

				$('#goTo-indice').click(function(event) {
					event.stopPropagation();
					return showCursoCommit();
				});
			});

			if (firstSlide.seccion) {
				$navbarBottom.addClass('first-is-section');
			}


			if (!blink.hasTouch) {
				$navbarBottom
					.find('ol').find('span')
						.tooltip({
							placement: 'bottom',
							container: 'body'
						});
			}

			var $navbarBottom2 = $('#dLabel');
			var sectionTitle = eval('t' + blink.activity.getFirstSlideIndex(window.activeSlide) + '_slide').title;
				$navbarBottom2.find('.sectionTitle').text(sectionTitle);

			blink.events.trigger(true, 'style:endFormatCarousel');
		},

		addSlideNavigators: function () {
			var idgrupo = window.idgrupo,
				idalumno = window.idalumno,
				slideNavParams = '';

			if (idgrupo) slideNavParams += '&idgrupo=' + idgrupo;
			if (idalumno) slideNavParams += '&idalumno=' + idalumno;

			blink.events.on("course_loaded", function(){
				var that = blink.activity.currentStyle,
					subunit_index = parseInt($('.slide-counter').attr('data-subunit-index'));

				$('.slider-control').off('click');

				// Navigation change depending on whether the slides are accessed from
				// a book or from a homework link or similar
				if (that.subunits.length !== 0) {
					// Slider controls must allow navigation among all the activity subunits
					// in the current unit.
					$('.left.slider-control, .left.slider-navigator').click(function () {
						if (!$(this).hasClass('disabled')) {
							if(activeSlide == 0) {
								redireccionar('/coursePlayer/clases2.php?editar=0&idcurso=' +
									idcurso + '&idclase=' + that.subunits[subunit_index - 1].id + '&modo=0&popup=1&numSec=' +
									that.subunits[subunit_index - 1].numSlides + slideNavParams, false, undefined);
							} else {
								blink.activity.showPrevSection();
						}
						}
					});
					$('.right.slider-control, .right.slider-navigator').click(function () {
						if (!$(this).hasClass('disabled')) {
							if(activeSlide == parseInt(that.subunits[subunit_index].pags) - 1) {
								redireccionar('/coursePlayer/clases2.php?editar=0&idcurso=' +
									idcurso + '&idclase=' + that.subunits[subunit_index + 1].id + '&modo=0' + ((typeof window.esPopup !== "undefined" && window.esPopup)?"&popup=1":"") + slideNavParams,
									false, undefined);
							} else {
								blink.activity.showNextSection();
							}
						}
					});
				} else {
					$('.left.slider-control, .left.slider-navigator').click(function () {
						blink.activity.showPrevSection();
					});
					$('.right.slider-control, .right.slider-navigator').click(function () {
						blink.activity.showNextSection();
					});
				}

				$(document).ready(function() {
					blink.events.on('showSlide:after', function() {
						that.enableSliders();
					});
				});
			});
		},

		enableSliders: function () {
			// Removes disabled class to all navigation buttons and applies
			// just if its first or last slide of all activities
			$('.slider-control, .slider-navigator').removeClass('disabled');

			// Navigation change depending on whether the slides are accessed from
			// a book or from a homework link or similar
			if (this.subunits.length !== 0) {
				if (this.getActualSlideNumber(this.subunits) == 1) {
					$('.slider-control.left, .slider-navigator.left').addClass('disabled');
				}
				if (this.getActualSlideNumber(this.subunits) == this.totalSlides) {
					$('.slider-control.right, .slider-navigator.right').addClass('disabled');
				}
			} else {
				if (window.activeSlide == 0) {
					$('.slider-control.left, .slider-navigator.left').addClass('disabled');
				}
				if (window.activeSlide + 1 == window.secuencia.length) {
					$('.slider-control.right, .slider-navigator.right').addClass('disabled');
				}
			}
		},

		getEditorStyles: function () {
			return this.ckEditorStyles;
		},

		showBookIndexInClass: function () {
			return (window.top.location.href.indexOf("coursePlayer/clases2") > 0) ? true : false;
		},

		animateNavbarOnScroll: function () {
			if (!blink.isApp) return;
			var $navbar = $('.sgelvitamina-navbar');
			var lastScrollTop = 0;
			$('.js-slider-item').scroll(function () {
				var scrollTop = $(this).scrollTop();
				(scrollTop > lastScrollTop && scrollTop) ? $navbar.addClass('ocultar') : $navbar.removeClass('ocultar');
				lastScrollTop = scrollTop;
			});
		},

        changeHighBar: function () {
            if($('.sgelvitamina-navbar').length>0 && $('.navbar').length>0){
                blink.theme.setTopByHeight('.navbar', '.sgelvitamina-navbar');
            }
        }
	};

	sgelvitaminaStyle.prototype = _.extend({}, new blink.theme.styles.basic(), sgelvitaminaStyle.prototype);

	blink.theme.styles['sgelvitamina_educacion'] = sgelvitaminaStyle;

})( blink );

