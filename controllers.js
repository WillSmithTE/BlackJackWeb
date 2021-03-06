var schemaForm = require('angular-schema-form-bootstrap');
var bootstrapDecorator = require('angular-schema-form/dist/bootstrap-decorator');

angular.module('mainModule', ['schemaForm'])
    .controller('RegisterController', function ($scope) {
        $scope.registerSchema = {
            "type": "object",
            "title": "Register",
            "properties": {
                "username": {
                    "title": "Username",
                    "type": "string"
                },
                "name": {
                    "title": "Name",
                    "type": "string"
                },
                "email": {
                    "title": "Email",
                    "type": "string",
                    "pattern": "^\\S+@\\S+.com+$"
                },
                "country": {
                    "title": "Country",
                    "type": ""
                }

            }
        };
        $scope.registerForm = [
            "*",
            {
                type: "submit",
                title: "Save"
            }
        ];

        $scope.model = {};

    });

