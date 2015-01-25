'use strict';

/**
 * Project service. Provides access to the project (will come from API eventually)
 *
 * @author thomasmitchell
 */
angular.module('tasksApp')
    .service('ProjectsService', function() {

        this.getProjectById = function(id) {
            for (var i = 0; i < projects.length; i++) {
                if (projects[i].id === id) {
                    return projects[i];
                }
            }
        };

        this.getProjects = function() {
            return projects;
        };

        var projects = [{
            'id': 1,
            'title': 'Super Awesome JavaScript Project',
            'description': 'Its a super awesome JavaScript project built with JavaScript to do JavaScript things',
            'issues': '5',
            'contributors': '3',
            'lastActivity': 'today',
            'watchers': '5'
        }, {
            'id': 2,
            'title': 'Okay Python Project',
            'description': 'Its alright I guess. Nothing special really',
            'issues': '23',
            'contributors': '2',
            'lastActivity': 'yesterday',
            'watchers': '2'
        }, {
            'id': 3,
            'title': 'Bad Java Project',
            'description': 'This is not great. Jusy stay away from this one.',
            'issues': '145',
            'contributors': '6',
            'lastActivity': 'this week',
            'watchers': '3'
        }];
    });