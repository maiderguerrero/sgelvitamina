(function (blink) {
	'use strict';

	var subunit_slide_titles = [];
	var sgelvitaminaStyle = function () {
			blink.theme.styles.basic.apply(this, arguments);
		},
		page = blink.currentPage;

	sgelvitaminaStyle.prototype = {
		bodyClassName: 'content_type_clase_sgelvitamina',
		toolbar: { name: 'editorial', items: ['Blink_popover'] },
		extraPlugins: ['blink_popover'],
		ckEditorStyles: {
			name: 'sgelvitamina',
			styles: [
styles: [
				{ name: 'Título 1', element: 'h2', attributes: { 'class': 'bck-title bck-title-1'} },
				{ name: 'Título 2', element: 'h3', attributes: { 'class': 'bck-title bck-title-2'} },
				{ name: 'Título 3', element: 'h3', attributes: { 'class': 'bck-title bck-title-3'} },
@@ -49,11 +50,12 @@
		},
		slidesTitle: {},
		subunits: [],
		totalSlides: 0,

		init: function () {
			var parent = blink.theme.styles.basic.prototype,
				that = this;
			parent.init.call(this);
			parent.init.call(that);
			that.addActivityTitle();
			if(window.esWeb) return;
			that.fillSlidesTitle();
@@ -63,6 +65,7 @@
				that.enableSliders();
			});
			that.animateNavbarOnScroll();
			parent.initInfoPopover();
			that.addSlideNavigators();
		},

@@ -78,7 +81,7 @@
		addActivityTitle: function () {
			if (!blink.courseInfo || !blink.courseInfo.unit) return;
			$('.libro-left').find('.title').html(function () {
				return $(this).html() + ' > ' + blink.courseInfo.unit;
				return blink.courseInfo.unit + ' > ' + $(this).html();
			})
		},

@@ -104,25 +107,36 @@
				that = this,
				units,
				unitSubunits,
				unitActivities;
				actualActivity,
				unitActivities = [];

			curso.done(function () {
				units = curso.responseJSON.units;

				$.each(units, function () {
					if (this.id && this.id == blink.courseInfo.IDUnit) {
						unitSubunits = this.subunits.concat(this.resources);
					}
				});
				unitActivities = _.filter(unitSubunits, function(subunit) {
					return subunit.type == 'actividad';

				actualActivity = _.find(unitSubunits, function(subunit) {
					return subunit.id == idclase;
				});

				if (typeof actualActivity !== "undefined" && actualActivity.level == '6') {
					unitActivities.push(actualActivity);
				} else {
					unitActivities = _.filter(unitSubunits, function(subunit) {
						return subunit.type == 'actividad' && subunit.level !== '6';
					});
				}

				that.subunits = unitActivities;
			}).done(function(){
				blink.events.trigger('course_loaded');
			});
		},


		/**
		 * @summary Getting active slide position in relation with the total of the
		 *          unit slides.
@@ -145,95 +159,32 @@
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
			var that = this,
				$navbarBottom = $('.navbar-bottom'),
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

			if(blink.courseInfo && blink.courseInfo.courseDateCreated) var courseYearCreated = new Date(blink.courseInfo.courseDateCreated).getFullYear();
			var yearCopy = courseYearCreated !== undefined ? courseYearCreated : 2016;
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
					.before('<span class="copyright">&copy;' +  yearCopy + '</span>')
					.wrap('<div id="top-navigator"/>')
					.remove()
					.end();

			$('#volverAlIndice').click(function() {
				return showCursoCommit();
			});

			var subunits = that.subunits,
				totalSlides = 0,
				subunit_index,
				subunit_pags;

			// Different behaviour depending on whether the slides are accessed from
			// a book or from a homework link or similar
			if (subunits.length !== 0) {
				for (var i in subunits) {
					if (subunits[i].pags) {
@@ -244,7 +195,6 @@
						subunit_index = i;
						subunit_pags = parseInt(subunits[i].pags);
					}

				}

				that.totalSlides = totalSlides;
@@ -282,89 +232,20 @@
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
				var sectionTitle = eval('t' + blink.activity.getFirstSlideIndex(window.activeSlide) +
					'_slide').title;
				$navbarBottom.find('.sectionTitle').text(sectionTitle);
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
@@ -380,8 +261,8 @@
						if (!$(this).hasClass('disabled')) {
							if(activeSlide == 0) {
								redireccionar('/coursePlayer/clases2.php?editar=0&idcurso=' +
									idcurso + '&idclase=' + that.subunits[subunit_index - 1].id + '&modo=0&popup=1&numSec=' +
									that.subunits[subunit_index - 1].numSlides + slideNavParams, false, undefined);
									idcurso + '&idclase=' + that.subunits[subunit_index - 1].id + '&modo=0&numSec=' +
									that.subunits[subunit_index - 1].numSlides, false, undefined);
							} else {
								blink.activity.showPrevSection();
						}
@@ -391,7 +272,7 @@
						if (!$(this).hasClass('disabled')) {
							if(activeSlide == parseInt(that.subunits[subunit_index].pags) - 1) {
								redireccionar('/coursePlayer/clases2.php?editar=0&idcurso=' +
									idcurso + '&idclase=' + that.subunits[subunit_index + 1].id + '&modo=0' + ((typeof window.esPopup !== "undefined" && window.esPopup)?"&popup=1":"") + slideNavParams,
									idcurso + '&idclase=' + that.subunits[subunit_index + 1].id + '&modo=0' + ((typeof window.esPopup !== "undefined" && window.esPopup)?"&popup=1":""),
									false, undefined);
							} else {
								blink.activity.showNextSection();
@@ -415,14 +296,19 @@
			});
		},

		/**
		 * @summary Enables all slider controls and disables when appropiate
		 */
		enableSliders: function () {
			// Removes disabled class to all navigation buttons and applies
			// just if its first or last slide of all activities
			$('.slider-control, .slider-navigator').removeClass('disabled');
			var that = blink.activity.currentStyle,
					subunit_index = parseInt($('.slide-counter').attr('data-subunit-index'));

			// Navigation change depending on whether the slides are accessed from
			// a book or from a homework link or similar
			if (this.subunits.length !== 0) {
			if (this.subunits.length !== 0 && modoVisualizacionLabel != "standalone") {
				if (this.getActualSlideNumber(this.subunits) == 1) {
					$('.slider-control.left, .slider-navigator.left').addClass('disabled');
				}
@@ -433,7 +319,7 @@
				if (window.activeSlide == 0) {
					$('.slider-control.left, .slider-navigator.left').addClass('disabled');
				}
				if (window.activeSlide + 1 == window.secuencia.length) {
				if(window.activeSlide == parseInt(that.subunits[subunit_index].pags) - 1){
					$('.slider-control.right, .slider-navigator.right').addClass('disabled');
				}
			}
@@ -444,7 +330,8 @@
		},

		showBookIndexInClass: function () {
			return (window.top.location.href.indexOf("coursePlayer/clases2") > 0) ? true : false;
			return modoVisualizacionLabel != "standalone";

		},

		animateNavbarOnScroll: function () {
@@ -456,18 +343,34 @@
				(scrollTop > lastScrollTop && scrollTop) ? $navbar.addClass('ocultar') : $navbar.removeClass('ocultar');
				lastScrollTop = scrollTop;
			});
		},

        changeHighBar: function () {
            if($('.sgelvitamina-navbar').length>0 && $('.navbar').length>0){
                blink.theme.setTopByHeight('.navbar', '.sgelvitamina-navbar');
            }
        }
		}
	};

	sgelvitaminaStyle.prototype = _.extend({}, new blink.theme.styles.basic(), sgelvitaminaStyle.prototype);

	blink.theme.styles['sgelvitamina_educacion'] = sgelvitaminaStyle;
	blink.theme.styles['sgelvitamina'] = sgelvitaminaStyle;

})( blink );

$(document).ready(function() {

	if (!$('body').hasClass('edit')) {
		$(document).on('click', '.nav-tabs a', function() {
			var actividad = $(this).attr('href');
			var index = actividad.split('-').pop();
			var slide = window['t' + index + '_slide'];
			slide.onAfterShowSlide();
		});
	}

	$(document).on('click', '.bck-dropdown .class_slide, .nav-tabs a', function(e){
		var activePane;
		if (!!$(e.target).closest('.nav-tabs').length) {
			activePane = $(e.target).attr('href');
		} else {
			activePane = '#' + $(e.target).closest('.tab-pane').attr('id');
		}
		blink.activity.currentStyle.setActivePane(activePane);
	});

});
