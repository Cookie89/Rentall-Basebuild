angular.module('angularfireSlackApp')
  .factory('Users', function($firebaseArray, $firebaseObject, FirebaseUrl){
    var usersRef = new Firebase(FirebaseUrl+'users');
    var users = $firebaseArray(usersRef);

        var Users = {
            getProfile: function(uid){
        return $firebaseObject(usersRef.child(uid));
    },
    getDisplayName: function(uid){
        channelsCtrl.getDisplayName = Users.getDisplayName;
        return users.$getRecord(uid).displayName;
        
    },
    getGravatar: function(uid){
    channelsCtrl.getGravatar = Users.getGravatar;
    return '//www.gravatar.com/avatar/' + users.$getRecord(uid).emailHash;
    },
    all: users
    };

    return Users;
  });