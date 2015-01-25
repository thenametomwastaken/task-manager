'use strict';

/**
 * @ngdoc function
 * @name tasksApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tasksApp
 */
angular.module('tasksApp')
    .controller('ProjectsController', function($scope, $location, ProjectsService) {
        
        $scope.nav = true;

        $scope.projects = ProjectsService.getProjects();

        $scope.goToProject = function (project) {
            $location.path('project/' + project.id);
        };
    });