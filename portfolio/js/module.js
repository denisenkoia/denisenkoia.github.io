var app = angular.module('app',['pascalprecht.translate']);

app.config(function($translateProvider) {
	
	$translateProvider.translations('en', {
    PERSONAL : 'Personal information',
    SKILLS : 'Skills',
    PORTFOLIO: 'Portfolio',
    FIO: 'Igor Denisenko',
    PHONE: 'phone',
    ABOUTMY: "My name is Igor, my experience as a fron-end developer is 1.5 years. I have confident skills in working with HTML, CSS3, JavaScript, I do adaptive block layout of psd and ai layouts using the Bootstrap3, Foundation frameworks, and I also know how to customize my grid system without using frameworks, I use Gulp and Bower to build projects, also in work I use SASS preprocessors, SCSS and the JQuery library. I am able to work with the Git version control system. I have experience developing single-page MVC applications using the AngularJS framework, skills of developing application architectures, using the Webpack assembler for assembly, I know how to write AJAX requests. I'm familiar with writing the server part on NodeJS in particular with processing of AJAX requests. I'm familiar with the use of templates and the integration of CMS Wordpress.",
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
    ABOUTMY: 'Меня зовут Игорь, мой опыт работы fron-end разработчиком 1,5 года. Я имею уверенные навыки работы с HTML, CSS3, JavaScript, делаю адаптивную блочную верстку из psd и ai макетов с использованием фреймворков Bootstrap3, Foundation, а также умею настраивать свою систему сеток без использования фреймворков, для сборки проектов использую Gulp и Bower, также в работе я использую препроцессоры SASS, SCSS и библиотеку JQuery. Умею работать с системой контроля версий Git.Имею опыт разработки одностраничных MVC приложений с использованием фреймворка AngularJS, навыки разработки архитектры приложений, для сборки использовал сборщик Webpack, умею писать AJAX запросы. Знаком с написанием серверной части на NodeJS в часности с обработкой AJAX запросов. Знаком с использованием шаблонов и интеграцией верстки CMS Wordpress.',
    KNOWLEDGE: 'Уровень владения JavaScript',
    NOTSPEAK: 'Не владею',
    USEREADY: 'Использую готовые решения',
    COMPLEXJS: "Пишу сложный JS с нуля",
  });

  $translateProvider.useSanitizeValueStrategy(null);

  $translateProvider.preferredLanguage('ru');

});
