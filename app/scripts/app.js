'use strict';

/**
 * @ngdoc overview
 * @name tasksApp
 * @description
 * # tasksApp
 *
 * Main module of the application.
 */
angular
  .module('tasksApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'ProjectsController'
      })
      .when('/project/:id', {
        templateUrl: 'views/project.html',
        controller: 'ProjectController',
        resolve: {
          project: function($route, ProjectsService) {
            var projectId = parseInt($route.current.params.id);
            return ProjectsService.getProjectById(projectId);
          },

          issues: function($route, IssuesService) {
            var projectId = parseInt($route.current.params.id);
            return IssuesService.getIssuesForProject(projectId);
          }
        }
      })
      .when('/issue/:id', {
        templateUrl: 'views/issue.html',
        controller: 'IssueController',
        resolve: {
          issue: function($route, IssuesService) {
            var issueId = parseInt($route.current.params.id);
            return IssuesService.getIssueById(issueId);
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });