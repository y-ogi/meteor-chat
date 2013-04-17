Messages = new Meteor.Collection("messages");

if (Meteor.is_client) {

    Template.signin.signined_name = function () {
        return Session.get('signined_name')
    };

    Template.signin.events = {
        'click button.btn': function () {
            Session.set('signined_name', $('#name').val());
        }
    };

    Template.herounit.signined_name = function () {
        return Session.get('signined_name')
    };


    Template.herounit.events = {
        'keydown input.#message': function (e) {
            if(e.keyCode == 13) {
                Messages.insert({name:Session.get('signined_name'), message:$('#message').val(), at: new Date()});
                $('#message').val('');
            }
        }
    };


    Template.content.messages = function () {
        return Messages.find({}, {sort:{at: -1}});
    };

}


