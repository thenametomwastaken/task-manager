'use strict';

/**
 * @ngdoc function
 * @name tasksApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tasksApp
 */
angular.module('tasksApp')
	.controller('ProjectController', function($scope, $location, project, issues) {

		$scope.showMore = false;

		$scope.nav = true;

		$scope.project = project;

		$scope.issues = issues;

		$scope.goToIssue = function(issue) {
			$location.path('issue/' + issue);
		};
	});