var app = angular.module('app',['pascalprecht.translate']);

app.config(function($translateProvider) {
	
	$translateProvider.translations('en', {
    PERSONAL : 'Personal information',
    SKILLS : 'Skills',
    PORTFOLIO: 'Portfolio',
    FIO: 'Igor Denisenko',
    PHONE: 'phone',
    ABOUTMY: "My name is Igor, I'm junior front-end developer. I work with HTML5, CSS3, JavaScript, JQuery, Gulp, Bower, using the SASS preprocessor, the SCSS Bootstrap3 and Foundation frameworks. I'm familiar with the technologies of SVG, Canvas, AngularJS, AJAX, JSON, ReacJS, NodeJS, JSON, npm, CMS systems Wordpress and Joomla. I'm writing a valid cross-browser code and doing adaptive block layout of psd and ai layouts, as well as a table layout of HTML letters.",
    KNOWLEDGE: 'Knowledge level JavaScript',
    NOTSPEAK: 'I do not speak',
    USEREADY: 'I use ready-made solutions',
    COMPLEXJS: "I'm writing complex JS from scratch",
  });

  $translateProvider.translations('ru', {
    PERSONAL : 'Личная информация',
    SKILLS : 'Навыки',
    PORTFOLIO: 'Портфолио',
    FIO: 'Игорь Денисенко',
    PHONE: 'телефон',
    ABOUTMY: 'Меня зовут Игорь, я junior front-end developer. Я работаю с HTML5, CSS3, JavaScript, JQuery, Gulp, Bower, использую препроцессор SASS, SCSS фреймворки Bootstrap3 и Foundation. Знаком с технологиями SVG, Canvas, AngularJS, AJAX, JSON, ReacJS, NodeJS, JSON, npm, СМS системами Wordpress и Joomla. Пишу валидный кроссбраузерный код и делаю адаптивную блочную верстку из psd и ai макетов, а также табличную верстку HTML писем.',
  	KNOWLEDGE: 'Уровень владения JavaScript',
  	NOTSPEAK: 'Не владею',
    USEREADY: 'Использую готовые решения',
    COMPLEXJS: "Пишу сложный JS с нуля",
  });

  $translateProvider.useSanitizeValueStrategy(null);

  $translateProvider.preferredLanguage('ru');

});