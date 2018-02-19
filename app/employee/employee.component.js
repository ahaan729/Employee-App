'use strict';

// Register `addEmployee` component, along with its associated controller and template
angular.
    module('addEmployee').
    component('addEmployee', {
        templateUrl: 'employee/employee.html',
        controller: ['$http','$scope', function addEmployeeController($http,$scope) {
            $scope.action = 'Add';
            $scope.designationList = ['Assistant Manager', 'Manager', 'Software Engineer 1'];
            $scope.employeeDetails = [];
            $scope.addEmp = function() {
                $scope.addEmpObject = {
                    "firstName": $scope.firstName,
                    "lastName": $scope.lastName,
                    "designation":$scope.designation,
                    "age": $scope.age
                };
                $scope.employeeDetails.push($scope.addEmpObject);
                $scope.resetForm();
            };

            // Remove an Employee
            $scope.removeEmp = function(index) {
                $scope.employeeDetails.splice(index, 1);
            };

            // View Employee Details
            $scope.editView = function(empData, index) {
                $scope.editIndex = index;
                $scope.action = 'Edit';
                $scope.firstName = empData.firstName;
                $scope.lastName = empData.lastName;
                $scope.designation = empData.designation;
                $scope.age = empData.age;
            };

            // Edit an Employee
            $scope.editEmp = function() {
                $scope.addEmpObject = {
                    "firstName": $scope.firstName,
                    "lastName": $scope.lastName,
                    "designation":$scope.designation,
                    "age": $scope.age
                };
                $scope.employeeDetails[$scope.editIndex] = $scope.addEmpObject;
                $scope.action = 'Add';
                $scope.resetForm();
            };

            // Reset Form
            $scope.resetForm = function() {
                $scope.firstName = '';
                $scope.lastName = '';
                $scope.designation = '';
                $scope.age = '';
                $scope.employeeForm.$setPristine(true);
                $scope.employeeForm.$setUntouched(true);
            };
        }]
    });
