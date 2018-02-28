import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <div class="form-group>
  <p>Username</p>
  <input type="text" class="form-control" ng-model="username" placeholder="username" ng-model="username" required=""/><br>
  <p>Password</p>
  <input type="password" class="form-control" ng-model="password" placeholder="password" ng-model="password" required=""/><br>
  <button type="submit" class="btn btn-success" ng-click="submit()">Login</button>
  </div>
{{username}}`
})
export class LoginComponent {


route($routeProvider)
{
};

submit($scope){
  $scope.username
}

submitMethod($scope,$location)
{
    $scope.submit=function()
    {
        var username=$scope.username;
        var password=$scope.password;
    };
};

}