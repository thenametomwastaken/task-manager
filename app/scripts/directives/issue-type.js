'use strict';

/**
 * @ngdoc directive
 * @name tasksApp.directive:issueType
 * @description
 * # issueType
 */
angular.module('tasksApp')
    .directive('issueType', function($compile) {
        return {
            template: '<div></div>',
            restrict: 'EA',
            scope: {
                type: '@type',
                color: '@color'
            },
            link: function postLink(scope, element, attrs) {
                var html = '';

                if (scope.type === 'bug') {

                    if (scope.color === 'true') {
                        html = '<div class="unit-10"><i class="fa fa-bug fa-2x bug"></i></div>';

                    } else {
                        html = '<i class="fa fa-bug"></i>';
                    }

                } else if (scope.type === 'task') {

                    if (scope.color === 'true') {
                        html = '<div class="unit-10"><i class="fa fa-tasks fa-2x task"></i></div>';

                    } else {
                        html = '<i class="fa fa-tasks"></i>';
                    }

                }

                element.replaceWith($compile(html)(scope));
            }
        };
    });