WatcfyLaunchCollection = new Mongo.Collection('watcfylaunch');

if(Meteor.isServer){
    Meteor.methods({
        'watcfyLaunch_signup': function(e){
            WatcfyLaunchCollection.insert({email:e});
        }
    })
}