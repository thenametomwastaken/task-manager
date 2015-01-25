'use strict';

/**
 * @ngdoc service
 * @name tasksApp.issues
 * @description
 * # issues
 * Service in the tasksApp.
 */
angular.module('tasksApp')
    .service('IssuesService', function() {

        this.getIssuesForProject = function(projectId) {
            var projectIssues = [];
            for (var i = 0; i < issues.length; i++) {
                if (issues[i].projectId === projectId) {
                    projectIssues.push(issues[i]);
                }
            }

            return projectIssues;
        };

        this.getIssueById = function(issueId) {
            for (var i = 0; i < issues.length; i++) {
                if (issues[i].id === issueId) {
                    return issues[i];
                }
            }
        };

        var issues = [{
            'id': 1,
            'projectId': 1,
            'title': 'The app won\'t load in IE8 or below',
            'description': 'The app just loads the header and nothing else when opened in IE8 or below. Not sure if we even need to support these browsers anyway.',
            'reproductionSteps': ['Open in IE8 or below'],
            'type': 'bug',
            'assignee': 'Me',
            'estimate': '',
            'openedBy': 'Someone else',
            'openedDate': '22nd Jan',
            'comments': []
        }, {
            'id': 2,
            'projectId': 1,
            'title': 'Make it prettier',
            'description': 'The app looks okay at the moment but its not really pretty. We definitely need to invest time to make it real pretty',
            'type': 'task',
            'assignee': 'Me',
            'estimate': '',
            'openedBy': 'Me',
            'openedDate': '21st Jan',
            'comments': []
        }, {
            'id': 3,
            'projectId': 1,
            'title': 'Make the app talk to a server',
            'description': 'The app is currently working off hardcoded JSON objects inside the services. It needs to talk to a server to get the data instead of harcoding everything',
            'type': 'task',
            'assignee': 'Someone else',
            'estimate': '',
            'openedBy': 'Me',
            'openedDate': '1th Jan',
            'comments': []
        }, {
            'id': 4,
            'projectId': 1,
            'title': 'The name is stupid',
            'description': 'The name of the app is stupid. We need to come with a real name for the app. Soon!',
            'reproductionSteps': ['Open the app'],
            'type': 'task',
            'assignee': 'Someone else',
            'estimate': '',
            'openedBy': 'Someone else',
            'openedDate': '11th Jan',
            'comments': []
        }, {
            'id': 5,
            'projectId': 1,
            'title': 'Project page sometimes make computers explode',
            'description': 'The project page has made a couple of our machines explode while using them. Once this has happened you can\'t get back on the app so this is a showstopper!',
            'reproductionSteps': ['Open app on a random machine', 'Visit projects page', 'Step away from the machine', 'Allow fire to ensue', 'Extinguish fire (optional)'],
            'type': 'bug',
            'assignee': 'Me',
            'estimate': '',
            'openedBy': 'Someone else',
            'openedDate': '1st Jan',
            'comments': [{
                'author': 'Someone',
                'content': 'We really need to get this sorted ASAP!',
                'date': '1st Jan 12:20'
            }, {
                'author': 'Someone else',
                'content': 'What\'s the big deal? Just tell people not to visit the project page',
                'date': '1st Jan 13:35'
            }]
        }];

    });