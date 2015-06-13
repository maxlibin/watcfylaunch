WatcfyLaunchCollection = new Mongo.Collection('watcfylaunch');
var url = "add your hook url";


if(Meteor.isServer){
    Meteor.methods({
        'watcfyLaunch_signup': function(e){
            check(e, String);

            if(WatcfyLaunchCollection.find({email:e}).count() === 0){
                WatcfyLaunchCollection.insert({email:e});
                // create a slack web hook
                HTTP.post(url,
                    {
                        data: {
                            "channel": "#watcfy-activities",
                            "username": "webhookbot",
                            "text": e + "has sign up on Watcfy coming soon website on watcfy.com.",
                            "icon_emoji": ":ghost:"
                        }
                    }, function(err, res){
                        if(err)
                            throw new Meteor.Error(404,'something wrong with slack hook.');
                    }
                );
            } else {
                throw new Meteor.Error('exist', 'the email you enter already exist');
            };
        }
    })
}