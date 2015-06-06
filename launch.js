WatcfyLaunch = {
    'options': {
        "logo": "",
        "title": "Watcfy is a social intelligent platform",
        "text": "We're working hard to improve our website and we'll ready soon, <br />sign up and be the first to get notified",
        "theme": "white"
    }
};

Meteor.startup(function () {
    Template.watcfyLaunch.helpers({
        'logo': function () {
            var _logo = WatcfyLaunch.options.logo;
            if(_logo == ""){
                return _logo;
            } else {
                var l = '<img src="'+ _logo +'" alt="" />';
                return l;
            }
        },
        'title': function () {
            var _title = WatcfyLaunch.options.title;
            return _title;
        },
        'text': function () {
            var _text = WatcfyLaunch.options.text;
            return _text;
        },
        'theme': WatcfyLaunch.options.theme
    });

    Template.watcfyLaunch.events({
        "submit form": function (e, tmpl) {
            e.preventDefault();
            var _email = tmpl.find('#exampleInputEmail1').value;

            Meteor.call('watcfyLaunch_signup', _email, function (err, res) {
                if(err)
                    $(tmpl).find('form').prepend('<p>'+err.reason+'</p>');
                else
                    tmpl.find('form').style.visibility = "hidden";
                    var w = tmpl.find('#wrapper');
                    w.innerHTML = w.innerHTML + "<p class='thanks'>Thank you for signup, you will be one of the first to use this service.</p>";
            });
        }
    })
});