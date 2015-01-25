'use strict';

/**
 * @ngdoc function
 * @name tasksApp.controller:IssueCtrl
 * @description
 * # IssueCtrl
 * Controller of the tasksApp
 */
angular.module('tasksApp')
	.controller('IssueController', function($scope, $location, issue) {

		$scope.issue = issue;

		$scope.goToIssue = function(issue) {
			$location.path('issue/' + issue.id);
		};

		$scope.addComment = function() {
			issue.comments.push({
				'author': 'I',
				'content': '',
				'date': 'just now',
				'new': true
			});
		};

		$scope.cancel = function(comment) {
			var index = issue.comments.indexOf(comment);
			issue.comments.splice(index, 1);
			console.log(index);
		};
	});