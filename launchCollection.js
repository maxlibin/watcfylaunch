WatcfyLaunchCollection = new Mongo.Collection('watcfylaunch');

if(Meteor.isServer){
    Meteor.methods({
        'watcfyLaunch_signup': function(e){
            check(e, String);

            if(WatcfyLaunchCollection.find({email:e}).count() === 0){
                WatcfyLaunchCollection.insert({email:e});
            } else {
                throw new Meteor.Error('exist', 'the email you enter already exist')
            };
        }
    })
}